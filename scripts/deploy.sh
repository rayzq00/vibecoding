#!/usr/bin/env bash
set -euo pipefail

deploy_root="${DEPLOY_ROOT:-/srv/vibecoding}"
deploy_branch="${DEPLOY_BRANCH:-main}"
source_dir="$deploy_root/source"
releases_dir="$deploy_root/releases"
current_link="$deploy_root/current"
lock_path="$deploy_root/.deploy.lock"

if [[ ! -d "$source_dir/.git" ]]; then
  printf 'deployment source checkout is missing: %s\n' "$source_dir" >&2
  exit 1
fi

mkdir -p "$releases_dir"
exec 9>"$lock_path"
if command -v flock >/dev/null 2>&1; then
  flock 9
fi

git -C "$source_dir" fetch --prune --no-tags origin "$deploy_branch"
commit="$(git -C "$source_dir" rev-parse FETCH_HEAD)"
release_dir="$releases_dir/$commit"

if [[ ! -d "$release_dir" ]]; then
  temporary_dir="$releases_dir/.${commit}.tmp.$$"
  mkdir "$temporary_dir"
  cleanup() {
    if [[ -d "$temporary_dir" ]]; then
      rm -rf -- "$temporary_dir"
    fi
  }
  trap cleanup EXIT

  git -C "$source_dir" archive "$commit" | tar -x -C "$temporary_dir"
  if [[ ! -f "$temporary_dir/index.html" ]]; then
    printf 'deployment commit has no index.html: %s\n' "$commit" >&2
    exit 1
  fi
  mv -- "$temporary_dir" "$release_dir"
  trap - EXIT
fi

if [[ ! -f "$release_dir/index.html" ]]; then
  printf 'release is missing index.html: %s\n' "$release_dir" >&2
  exit 1
fi

if mv --version >/dev/null 2>&1; then
  temporary_link="$deploy_root/.current.tmp.$$"
  ln -s -- "$release_dir" "$temporary_link"
  mv -Tf -- "$temporary_link" "$current_link"
else
  ln -sfn "$release_dir" "$current_link"
fi

release_dirs=()
while IFS= read -r release_dir; do
  [[ -n "$release_dir" ]] && release_dirs+=("${release_dir%/}")
done < <(ls -dt "$releases_dir"/*/ 2>/dev/null || true)
if (( ${#release_dirs[@]} > 5 )); then
  for old_release in "${release_dirs[@]:5}"; do
    rm -rf -- "$old_release"
  done
fi

printf 'deployed %s to %s\n' "$commit" "$current_link"
