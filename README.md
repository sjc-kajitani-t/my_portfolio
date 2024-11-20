## 概要
2023年4Q, 2024年2Q 目標管理のポートフォリオ

## 環境

| 項目 | バージョン | 備考 |
| --- | --- | --- |
| Node | 20.13.1 ||
| React | 18.2.0 ||
| TypeScript | 5.2.2 ||
| AntDesignMobile | 5.38.1| UIコンポーネントライブラリ |
| GraphQL | 16.9.0 | APIクエリ言語 |

## 実行手順

本リポジトリをクローンし、以下のコマンドを実行する

1. ディレクトリ移動

```
cd frontend
``

2. コンテナ立ち上げ
```
docker compose up
```

1. 疎通確認

```
ルート: http://localhost:3000/
メインとなる画面: http://localhost:3000/chat
```

## コマンド

| コマンド | 説明 |
| --- | --- |
| docker compose up | react, vite mock サーバーを立ち上げる |
| npm run generate | GraphQLのクエリから型を生成する |


## 進捗メモ

- [ x ] React + TypeScript + Vite 環境の構築
- [ x ] ルーティング設定
- [ x ] APIモックの実装
- [ x ] 業務経歴を表示する画面の実装
- [ x ] 全体的にデザイン調整
