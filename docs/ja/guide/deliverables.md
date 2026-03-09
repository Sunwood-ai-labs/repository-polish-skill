# 成果物

## よくある出力

この skill でよく作るものは次のとおりです。

- `README.md`
- `README.ja.md`
- VitePress ベースの `docs/`
- `.github/workflows/ci.yml`
- `.github/workflows/deploy-docs.yml`
- repository homepage や topics の更新案

## README の改善内容

README では次のような改善を行うことがあります。

- より強いタイトルと導入
- badge と言語切り替え
- 分かりやすい quick start と repo 構成
- 公開 docs へのリンク

## 最後までの完走範囲

ユーザーが明示的に partial task を指定していない場合、通常は次のラインまで仕上げます。

- docs を追加したなら build を確認する
- workflow path と Pages base を確認する
- 認証が使えるなら repo metadata を更新する
- 小さく戻しやすい単位で commit する
- push 権限があるなら remote へ push する

最終的な publish だけがプラン、権限、visibility で止まる場合でも、その blocker を記録したうえで可能なところまでは仕上げます。

## 日英 docs の揃え方

英語と日本語の両方が必要な場合は:

- 英語は `README.md`
- 日本語は `README.ja.md`
- `docs/guide/` と `docs/ja/guide/` でページ構成をそろえる
- 文言は自然にローカライズしても、見出しの対応関係は保つ
