$ErrorActionPreference = 'Stop'

$assets = @(
    @{ Name = 'ad1.jpg'; Url = 'https://mysite2026-blog-cyn6.vercel.app/blog/adrive/ad1.jpg' },
    @{ Name = 'ad2.jpg'; Url = 'https://mysite2026-blog-cyn6.vercel.app/blog/adrive/ad2.jpg' },
    @{ Name = 'ad3.png'; Url = 'https://mysite2026-blog-cyn6.vercel.app/blog/adrive/ad3.png' },
    @{ Name = 'ad4.png'; Url = 'https://mysite2026-blog-cyn6.vercel.app/blog/adrive/ad4.png' },
    @{ Name = 'ad5.png'; Url = 'https://mysite2026-blog-cyn6.vercel.app/blog/adrive/ad5.png' },
    @{ Name = 'ad6.png'; Url = 'https://mysite2026-blog-cyn6.vercel.app/blog/adrive/ad6.png' },
    @{ Name = 'ad7.png'; Url = 'https://mysite2026-blog-cyn6.vercel.app/blog/adrive/ad7.png' },
    @{ Name = 'ad8.png'; Url = 'https://mysite2026-blog-cyn6.vercel.app/blog/adrive/ad8.png' },
    @{ Name = 'ad9.jpg'; Url = 'https://mysite2026-blog-cyn6.vercel.app/blog/adrive/ad9.jpg' },
    @{ Name = 'ad10.jpg'; Url = 'https://mysite2026-blog-cyn6.vercel.app/blog/adrive/ad10.jpg' },
    @{ Name = 'ad11.jpg'; Url = 'https://mysite2026-blog-cyn6.vercel.app/blog/adrive/ad11.jpg' },
    @{ Name = 'ad12.jpg'; Url = 'https://mysite2026-blog-cyn6.vercel.app/blog/adrive/ad12.jpg' },
    @{ Name = 'ad13.jpg'; Url = 'https://mysite2026-blog-cyn6.vercel.app/blog/adrive/ad13.jpg' },
    @{ Name = 'ad14.jpg'; Url = 'https://mysite2026-blog-cyn6.vercel.app/blog/adrive/ad14.jpg' }
)

$output = Join-Path $PSScriptRoot '..\projects\assets\adrive'
New-Item -ItemType Directory -Force -Path $output | Out-Null

foreach ($asset in $assets) {
    $destination = Join-Path $output $asset.Name
    Invoke-WebRequest -UseBasicParsing -Uri $asset.Url -OutFile $destination
}

Get-ChildItem $output | Select-Object Name, Length
