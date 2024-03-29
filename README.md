## ディレクトリ構成

```
my-next-app/
├── public/                  # 静的ファイルを格納するディレクトリ。画像やファビコンなど。
│   ├── favicon.ico          # ウェブサイトのファビコン。
│   └── images/              # ウェブサイトで使用する画像ファイル。
├── src/                     # ソースコードを格納するディレクトリ（オプションで、構造を整理するために使用）。
│   ├── components/          # 再利用可能なコンポーネントを格納するディレクトリ。
│   │   ├── layout/          # サイト全体のレイアウトを扱うコンポーネント（例: ヘッダー、フッター）。
│   │   └── ui/              # UI関連の小さなコンポーネント（例: ボタン、カード）。
│   ├── pages/               # ページコンポーネントとAPIルート。ファイル名に基づいてルーティングが自動で設定されます。
│   │   ├── api/             # APIルートを格納するディレクトリ。サーバーサイドのロジックやデータベースの操作など。
│   │   ├── _app.js          # メインアプリケーションコンポーネント。ページ間で共有されるトップレベルのコンポーネント。
│   │   └── index.js         # ホームページのコンポーネント。
│   ├── styles/              # スタイルシートを格納するディレクトリ。グローバルスタイルやCSSモジュール。
│   └── utils/               # ユーティリティ関数や共通のヘルパー関数を格納するディレクトリ。
├── .gitignore               # Gitバージョン管理から除外するファイルやディレクトリを指定するファイル。
├── next.config.js           # Next.jsのカスタム設定を行うファイル。
├── package.json             # プロジェクトのメタデータや依存関係、スクリプトを定義するファイル。
└── README.md                # プロジェクトの説明やセットアップ方法などを記述するファイル。
```

## shadcn install

- npm install shadcn-ui@0.8.0
- npm install -D tailwindcss postcss autoprefixer
- npx tailwindcss init -p

- @tailwind base;
- @tailwind components;
- @tailwind utilities;
- npx shadcn-ui init
- globals.cssのファイルパスを修正
