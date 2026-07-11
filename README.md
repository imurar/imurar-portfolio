# imurar ポートフォリオサイト

Astro + Tailwind CSS で構築したポートフォリオサイトです。

## 📋 プロジェクト構成

```text
/
├── public/              # 静的ファイル（画像など）
├── src/
│   ├── pages/          # ページコンポーネント
│   ├── components/     # 再利用可能なコンポーネント
│   └── styles/         # グローバルスタイル
└── package.json
```

## 🚀 セットアップ

### 前提条件
- Node.js 18.x 以上

### インストール

```bash
npm install
```

## 💻 開発

### 開発サーバー起動
```bash
npm run dev
```

ブラウザで `http://localhost:4321` を開きます。

### ビルド
```bash
npm run build
```

本番用ビルドは `dist/` ディレクトリに生成されます。

### プレビュー
```bash
npm run preview
```

ビルド結果をローカルで確認できます。

## 🌐 デプロイ

GitHub Pages にデプロイします：

```bash
npm run deploy
```

## 📚 使用技術

- **Astro** - 静的サイトジェネレータ
- **Tailwind CSS** - ユーティリティ CSS フレームワーク
- **TypeScript** - 型安全な JavaScript

## 📖 ドキュメント

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## 📝 ライセンス

MIT
