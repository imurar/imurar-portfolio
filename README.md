# imurar ポートフォリオサイト

Vue 3 + Vite + Tailwind CSS で構築したポートフォリオサイトです。

## プロジェクト構成

```
src/
├── App.vue          # ルートコンポーネント（ナビ・フッター）
├── main.js          # エントリポイント・ルーター設定
├── assets/          # グローバルCSS
└── views/           # ページコンポーネント
    ├── HomeView.vue
    ├── ProjectsView.vue
    ├── ContactView.vue
    ├── ContactThanksView.vue
    └── demo/
        ├── DemoView.vue
        ├── UiView.vue
        ├── AnimationView.vue
        ├── CounterView.vue
        └── TodoView.vue
```

## セットアップ

```bash
npm install
```

## 開発

```bash
npm run dev
```

`http://localhost:5173` で確認できます。

## ビルド

```bash
npm run build
```

## 使用技術

- **Vue 3** - フロントエンドフレームワーク
- **Vue Router** - クライアントサイドルーティング（Hash モード）
- **Vite** - ビルドツール
- **Tailwind CSS v4** - ユーティリティ CSS フレームワーク

## デプロイ

GitHub Actions で GitHub Pages に自動デプロイ。`main` ブランチへの push で発火。
