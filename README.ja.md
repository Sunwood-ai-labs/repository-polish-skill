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

既存リポジトリを、共有しやすく公開品質の高い状態まで整えるための Codex skill です。README、日英ドキュメント、VitePress / GitHub Pages、CI、公開向けメタデータ、最終検証までを扱いつつ、要求された整備の深さに合わせて仕上げます。

## 整備モード

- `完全整備`: docs、公開設定、metadata、remote 作成、push、workflow 修復まで含めて、意味のある finish line まで全部やる
- `最適整備`: まず repo の中身を見て、その repo に合う最小の高価値セットを選ぶ
- mode 指定なし: ユーザーが狭めない限り、これまで通り full polish を既定にする

## できること

- 変更前に repository state を監査する
- `README.md` と `README.ja.md` を改善または新規作成する
- 日英対応の `docs/` を VitePress で追加または整備する
- docs 向けの CI と GitHub Pages を設定する
- badge、homepage、topics、セクション構成などの公開向け品質を整える
- user-facing surface を変えたときに structural QA と codebase signoff を行う
- README と docs の構造が読みやすく、対応関係が分かる状態を保つ
- Python が関わるときは raw の `python` ではなく `uv run` を優先する

## 既定動作

ユーザーが明示的に狭い partial task を指定しない限り、この skill は環境内で到達可能な最高価値の finish line まで持っていく前提で動きます。

通常は次を含みます。

- README と docs の改善
- `.gitignore` や `LICENSE` など公開向け基礎ファイルの補完
- 必要に応じた docs workflow と Pages 設定
- description、homepage、topics などの metadata 更新
- source、config、build output を中心にしたローカル検証
- 実行可能なら commit と push

最後の一歩だけが plan、権限、visibility などで塞がれているなら、そこ以外は全部終わらせて blocker を明記します。

`完全整備` と明示されたときは、repo が小さい、すでにそこそこ見える、といった理由で勝手に downscope しません。

## この skill の意図

中身は良いのに、公開すると未完成に見える repo は多くあります。よくある不足は次のとおりです。

- README が薄い
- 日本語 counterpart がない
- browsable docs がない
- GitHub Pages がない
- 初見ユーザー向けの入口が弱い

この skill は、それらを再現性のある流れで整えるためのものです。

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

### 1. 対象 repo を調べる

```powershell
powershell -ExecutionPolicy Bypass -File .\scripts\collect_repo_state.ps1 -RepoPath D:\Prj\some-repo
```

### 2. Codex から skill を使う

- `Use $repository-polish to clean up this repo and add a stronger README.`
- `Use $repository-polish to add bilingual docs and GitHub Pages deployment.`
- `Use $repository-polish to make this repository feel ready for public release.`
- `Use $repository-polish to 完全整備 this repository.`
- `Use $repository-polish to 最適整備 this repository.`

## 改善できる対象

- README の構造と quick start の明確化
- 英語と日本語の documentation alignment
- VitePress docs の整備
- CI / GitHub Pages workflow
- repo 名、リンク、badge、landing-page polish
- 検証、commit、push まで含めた end-to-end completion

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

- `完全整備` は「意味のあるところまで全部やる」、`最適整備` は「repo に合う形へ right-size する」という意味です
- GitHub Pages が plan や visibility の都合で公開できないなら、公開直前の ready state まで整えて blocker を残します
- Pages deploy が「Pages site がない」で落ちたら、まず workflow 側 enablement を使い、それでも足りなければ `gh api repos/OWNER/REPO/pages -X POST -f build_type=workflow` を使います
- docs など user-facing surface を変えたときは、build 成功だけで終わらせず source / config / build output を見て検証します
- 実運用で得た失敗や改善点を反映し続ける前提の skill です
