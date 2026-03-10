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

既存のリポジトリを、公開しやすく読みやすい状態まで仕上げるための Codex skill です。README、日英ドキュメント、VitePress / GitHub Pages、CI、公開向けの見た目や導線を整えつつ、最後は検証までやり切る前提で使います。

## できること

- リポジトリの現状を監査する
- `README.md` と `README.ja.md` を改善または新規作成する
- VitePress ベースの `docs/` を追加または整理する
- docs 向けの CI と GitHub Pages workflow を整備する
- badge、homepage、topics など公開向けの細部を整える
- 変更内容を構造QAとブラウザQAで確認する

## デフォルトの挙動

ユーザーが明示的に範囲を狭めない限り、この skill は最初の成果物だけで止まらず、到達可能な最高価値の完了状態まで進めます。

通常は次のような作業を含みます。

- README と docs の改善
- `.gitignore` や `LICENSE` などの公開向けファイル整備
- docs workflow と Pages 設定
- description、homepage、topics など repo metadata の更新
- ローカル検証
- commit と push

最後の一歩がプラン制限、権限、visibility などで塞がれていても、そこ以外は完了させたうえで blocker を明記します。

## この skill の目的

コードは良くても、共有した瞬間に「まだ内向きの repo に見える」状態はよくあります。

- README が薄い
- 日本語版がない
- docs がない
- GitHub Pages で見られない
- 初見の導線が弱い

この skill は、そうしたギャップを埋めるための再利用可能な仕上げフローをまとめたものです。

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
|  |- qa-signoff.md
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

### 1. 対象リポジトリを確認する

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\collect_repo_state.ps1 -RepoPath D:\Prj\some-repo
```

### 2. Codex から skill を使う

- `Use $repository-polish to clean up this repo and add a stronger README.`
- `Use $repository-polish to add bilingual docs and GitHub Pages deployment.`
- `Use $repository-polish to make this repository feel ready for public release.`

## 改善対象の例

- README の構成と quick start の分かりやすさ
- 英語と日本語のドキュメント整合
- VitePress docs の導入
- CI / GitHub Pages workflow
- repo 名、リンク、badge、公開向け polish
- 検証、commit、push まで含めた仕上げ

## ドキュメント

- English docs: [Project Docs](https://sunwood-ai-labs.github.io/repository-polish-skill/)
- 日本語 docs: [Japanese Docs](https://sunwood-ai-labs.github.io/repository-polish-skill/ja/)
- ローカル preview:

```bash
cd docs
npm install
npm run docs:dev
```

## メモ

- 最小の整合あるプランから始めますが、ユーザーが止めない限り途中では終わりません。
- GitHub Pages がプランや visibility の都合で公開できない場合でも、公開可能な直前状態までは整えます。
- docs などブラウザで見る成果物を変更したときは、build 成功だけで済ませずブラウザQAも行います。
- `logged-in-google-chrome-skill` など、実際の公開向け repo 整備フローをもとに育てています。
