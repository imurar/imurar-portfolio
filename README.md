# imurar ポートフォリオサイト

Astro + Tailwind CSS で構築した静的生成ポートフォリオサイトです。

## プロジェクト構成

```
src/
├── layouts/          # 共有レイアウト
│   └── BaseLayout.astro
├── pages/            # ファイルベースルーティング
│   ├── index.astro              # ホームページ
│   ├── about.astro
│   ├── projects.astro
│   ├── contact.astro
│   └── contact-thanks.astro
└── styles/           # グローバルスタイル
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

- **Astro** - 静的サイトジェネレータ（SSG）
- **Tailwind CSS v4** - ユーティリティ CSS フレームワーク
- **vanilla JavaScript** - インタラクティブ機能（ハンバーガーメニュー、ヒーロー画像アニメーション）

## デプロイ

GitHub Actions で GitHub Pages に自動デプロイ。`main` ブランチへの push で発火。
