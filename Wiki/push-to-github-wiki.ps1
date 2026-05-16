#Requires -Version 5.1
<#
.SYNOPSIS
  Push Wiki/GitHub-Wiki contents to GitHub wiki repo (Framework.wiki).
.NOTES
  Enable Wiki in repo Settings first. Wiki git default branch is usually 'master'.
#>
$ErrorActionPreference = 'Stop'
$wikiDir = Join-Path $PSScriptRoot 'GitHub-Wiki'
if (-not (Test-Path -LiteralPath $wikiDir)) {
  throw "Missing folder: $wikiDir"
}
$remote = 'git@github.com:zhk0567/Framework.wiki.git'
Set-Location -LiteralPath $wikiDir

if (-not (Test-Path -LiteralPath '.git')) {
  git init | Out-Null
}

$mainRepo = (Resolve-Path (Join-Path $PSScriptRoot '..')).Path
$gn = git -C $mainRepo config user.name
$ge = git -C $mainRepo config user.email
if ([string]::IsNullOrWhiteSpace($gn)) { $gn = git config --global user.name }
if ([string]::IsNullOrWhiteSpace($ge)) { $ge = git config --global user.email }
if ([string]::IsNullOrWhiteSpace($gn)) { $gn = 'zhk0567' }
if ([string]::IsNullOrWhiteSpace($ge)) { $ge = 'zhk0567@users.noreply.github.com' }
git config user.name $gn
git config user.email $ge

git remote remove origin 2>$null
git remote add origin $remote

git add -A
$st = git status --porcelain
if (-not $st) {
  Write-Host 'Nothing to commit.'
} else {
  git commit -m 'Update wiki from Framework repo (organized export)'
}

git branch -M master
Write-Host "Pushing to $remote (branch master)..."
git push -u origin master --force
