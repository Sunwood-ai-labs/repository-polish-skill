# 成果物

## 📦 よくある出力

この skill で整える対象は次のようなものです。

- `README.md`
- `README.ja.md`
- VitePress を使った `docs/`
- `.github/workflows/ci.yml`
- `.github/workflows/deploy-docs.yml`
- repository homepage や topics の提案

## 🧩 README の改善

README では次のような整備を行うことがあります。

- タイトルと導入の強化
- badge と言語切り替え導線
- quick start と repo 構成の整理
- 公開 docs へのリンク追加

## 🌍 日英ドキュメントの型

英語と日本語の両方が必要な場合は:

- 英語は `README.md`
- 日本語は `README.ja.md`
- `docs/guide/` と `docs/ja/guide/` でページ構成を揃える
- 文章は自然に調整しても、章立ては揃える

## ✅ 確認項目

作業完了前に:

- docs を追加したなら `docs/` で `npm run docs:build`
- workflow の path が実際の repo 構成と一致しているか
- asset URL と Pages base が正しいか
