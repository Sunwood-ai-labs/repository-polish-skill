param(
  [string]$RepoPath = "."
)

$resolvedRepoPath = (Resolve-Path $RepoPath).Path
$gitDir = Join-Path $resolvedRepoPath ".git"
$originUrl = ""
$branch = ""

if (Test-Path $gitDir) {
  $originUrl = ((git -C $resolvedRepoPath remote get-url origin 2>$null) | Out-String).Trim()
  $branch = ((git -C $resolvedRepoPath branch --show-current 2>$null) | Out-String).Trim()
}

$state = [ordered]@{
  repoPath = $resolvedRepoPath
  hasGit = (Test-Path $gitDir)
  branch = $branch
  originUrl = $originUrl
  hasReadme = (Test-Path (Join-Path $resolvedRepoPath "README.md"))
  hasJapaneseReadme = (Test-Path (Join-Path $resolvedRepoPath "README.ja.md"))
  hasSkill = (Test-Path (Join-Path $resolvedRepoPath "SKILL.md"))
  hasDocs = (Test-Path (Join-Path $resolvedRepoPath "docs"))
  hasVitePressConfig = (Test-Path (Join-Path $resolvedRepoPath "docs\.vitepress\config.ts"))
  hasDocsPackageJson = (Test-Path (Join-Path $resolvedRepoPath "docs\package.json"))
  hasGithubWorkflows = (Test-Path (Join-Path $resolvedRepoPath ".github\workflows"))
  hasPagesWorkflow = (Test-Path (Join-Path $resolvedRepoPath ".github\workflows\deploy-docs.yml"))
  hasLicense = (Test-Path (Join-Path $resolvedRepoPath "LICENSE"))
  hasNodePackage = (Test-Path (Join-Path $resolvedRepoPath "package.json"))
  hasPyProject = (Test-Path (Join-Path $resolvedRepoPath "pyproject.toml"))
}

$state | ConvertTo-Json -Depth 3
