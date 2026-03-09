<div align="center">
  <h1>Repository Polish Skill</h1>
  <img src="https://raw.githubusercontent.com/Sunwood-ai-labs/repository-polish-skill/main/docs/public/logo.svg" alt="Repository Polish Skill" width="220">
  <p>
    <img src="https://img.shields.io/badge/Codex-Skill-F97316" alt="Codex Skill">
    <img src="https://img.shields.io/badge/VitePress-Docs-646CFF?logo=vitepress&logoColor=white" alt="VitePress">
    <img src="https://img.shields.io/badge/GitHub%20Pages-CI%2FCD-222222?logo=githubpages&logoColor=white" alt="GitHub Pages">
    <img src="https://img.shields.io/badge/Bilingual-English%20%2B%20Japanese-0F766E" alt="Bilingual">
  </p>
  <p>
    <a href="./README.md">
      <img src="https://img.shields.io/badge/Language-English-blue.svg" alt="English">
    </a>
    <a href="./README.ja.md">
      <img src="https://img.shields.io/badge/%E8%A8%80%E8%AA%9E-%E6%97%A5%E6%9C%AC%E8%AA%9E-lightgrey.svg" alt="Japanese">
    </a>
  </p>
</div>

既存リポジトリを、公開向けに読みやすく整った形へ仕上げるための Codex skill です。README、日英ドキュメント、VitePress / GitHub Pages、CI、公開時の見せ方まで、必要な範囲で一貫して整えます。

## 🧰 できること

- 編集前にリポジトリの状態を棚卸しする
- `README.md` と `README.ja.md` を新規作成または改善する
- 英語と日本語に対応した `docs/` を VitePress で整える
- docs 向けの CI と GitHub Pages デプロイを追加する
- badge、homepage、章構成など公開向けの見た目を整える

## 🧭 この skill がある理由

コード自体は有用でも、公開したときに整って見えない repo は多いです。よくある不足は次のあたりです。

- README が薄い
- 日本語版がない
- 複数ページ docs がない
- GitHub Pages で公開されていない
- 初見ユーザー向けの導線が弱い

この skill は、そうした不足を繰り返し整えるための実践的な流れをまとめています。

## 📦 リポジトリ構成

```text
repository-polish-skill/
|- SKILL.md
|- README.md
|- README.ja.md
|- agents/
|  `- openai.yaml
|- references/
|  |- bilingual-docs-pattern.md
|  |- github-pages-notes.md
|  `- repository-checklist.md
|- scripts/
|  `- collect_repo_state.ps1
`- docs/
   |- .vitepress/
   |- guide/
   |- ja/
   `- public/
```

## 🚀 クイックスタート

### 1. 対象 repo を確認する

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\collect_repo_state.ps1 -RepoPath D:\Prj\some-repo
```

### 2. Codex で skill を使う

- `Use $repository-polish to clean up this repo and add a stronger README.`
- `Use $repository-polish to add bilingual docs and GitHub Pages deployment.`
- `Use $repository-polish to make this repository feel ready for public release.`

## 🗂️ 整備できるもの

- README の構成と quick start の分かりやすさ
- 英語と日本語のドキュメント整合
- VitePress docs のひな形
- CI と GitHub Pages の workflow
- repo 名、リンク、badge、第一印象の polish

## 📚 ドキュメント

- English docs: [Project Docs](https://sunwood-ai-labs.github.io/repository-polish-skill/)
- 日本語 docs: [日本語ドキュメント](https://sunwood-ai-labs.github.io/repository-polish-skill/ja/)
- ローカル確認:

```bash
cd docs
npm install
npm run docs:dev
```

## 🤝 補足

- 依頼を満たす最小で一貫性のある改善セットを選ぶ前提で設計しています。
- `logged-in-google-chrome-skill` を整備して公開した実作業の流れも土台にしています。
