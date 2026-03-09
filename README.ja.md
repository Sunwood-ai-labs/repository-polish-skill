<div align="center">
  <h1>Repository Polish Skill</h1>
  <img src="./docs/public/icon.webp" alt="Repository Polish Skill" width="280">
  <p>
    <img src="https://img.shields.io/badge/Codex-Skill-BF8B5E" alt="Codex Skill">
    <img src="https://img.shields.io/badge/VitePress-Docs-D98673?logo=vitepress&logoColor=white" alt="VitePress">
    <img src="https://img.shields.io/badge/GitHub%20Pages-CI%2FCD-733B2F?logo=githubpages&logoColor=white" alt="GitHub Pages">
    <img src="https://img.shields.io/badge/Bilingual-English%20%2B%20Japanese-594246" alt="Bilingual">
  </p>
  <p>
    <a href="./README.md">
      <img src="https://img.shields.io/badge/Language-English-blue.svg" alt="English">
    </a>
    <a href="./README.ja.md">
      <img src="https://img.shields.io/badge/Language-Japanese-lightgrey.svg" alt="Japanese">
    </a>
  </p>
</div>

既存のリポジトリを、より公開向けで整った状態へ仕上げるための Codex skill です。README、日英ドキュメント、VitePress / GitHub Pages、CI、公開時の見た目や導線を、必要以上に過剰編集せず整えます。

## できること

- 変更前にリポジトリの状態を棚卸しする
- `README.md` と `README.ja.md` を改善または新規作成する
- VitePress ベースの `docs/` を追加または整理する
- docs 用の CI や GitHub Pages workflow を整える
- badge、homepage、topics、導線など公開向けの見た目を整える

## デフォルトの振る舞い

ユーザーから明示的に「README だけ」などの限定がない限り、この skill はその環境で到達できる最高価値の完了状態まで持っていく前提で動きます。

たとえば次のようなところまで進めます。

- README と docs の整備
- `.gitignore` や `LICENSE` など公開向けファイルの補完
- 必要に応じた docs workflow や Pages 設定
- description、homepage、topics など repo metadata の更新
- ローカル検証
- commit と push

最後の一歩だけがプラン制約、権限、repo visibility などで止まる場合でも、そこで作業全体を止めず、残りは完了させたうえで blocker を明記します。

## この skill がある理由

コード自体は良くても、公開時には次のような理由で「未完成」に見える repo が多くあります。

- README が薄い
- 日本語版がない
- 閲覧しやすい docs がない
- GitHub Pages 配信がない
- 初見ユーザー向けの導線が弱い

この skill は、そうした穴を埋めるための再利用可能な整備フローをまとめたものです。

## リポジトリ構成

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

## クイックスタート

### 1. 対象 repo を棚卸しする

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\collect_repo_state.ps1 -RepoPath D:\Prj\some-repo
```

### 2. Codex で skill を使う

- `Use $repository-polish to clean up this repo and add a stronger README.`
- `Use $repository-polish to add bilingual docs and GitHub Pages deployment.`
- `Use $repository-polish to make this repository feel ready for public release.`

## 改善できる対象

- README 構成と quick start の分かりやすさ
- 英語と日本語のドキュメント整合
- VitePress docs の土台
- CI / GitHub Pages workflow
- repo 名、リンク、badge、導線の polish
- 検証、commit、push まで含む完走

## ドキュメント

- English docs: [Project Docs](https://sunwood-ai-labs.github.io/repository-polish-skill/)
- 日本語 docs: [日本語ドキュメント](https://sunwood-ai-labs.github.io/repository-polish-skill/ja/)
- ローカル preview:

```bash
cd docs
npm install
npm run docs:dev
```

## 補足

- 最初は最小限の整備計画から始めますが、ユーザーが範囲を狭めていない限り途中では止まりません。
- GitHub Pages がプランや visibility 制約で公開できない場合でも、公開可能な直前状態まで整えて blocker を記録します。
- `logged-in-google-chrome-skill` など、実際の repo 整備フローで得た知見をもとにしています。
