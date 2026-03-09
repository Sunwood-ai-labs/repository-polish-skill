# 使い方

## 🤝 依頼のしかた

Codex には次のように依頼できます。

- `Use $repository-polish to clean up this repo and add a stronger README.`
- `Use $repository-polish to add bilingual docs and GitHub Pages deployment.`
- `Use $repository-polish to make this repository feel ready for public release.`

## 🪜 典型的な流れ

1. PowerShell スクリプトで repo を棚卸しする
2. README、docs、workflow、metadata を確認する
3. 依頼に合う改善だけを加える
4. docs を足したらローカル build で確認する
5. 小さく復元しやすい単位で commit する

## 🧠 良い振る舞い

- 既存のデザイン言語があるならそれを崩さない
- 維持できない docs 構成を無理に増やさない
- 日英両対応が必要なら構成を揃える
- push 前に URL、badge、Pages 設定を確認する
