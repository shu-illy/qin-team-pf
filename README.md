# Qin チーム開発ポートフォリオ

## URL

[https://qin-team-pf.vercel.app/](https://qin-team-pf.vercel.app/)

## 使用技術

- TypeScript
- Next.js
- Mantine
- Tailwind CSS
- Prettier
- ESLint

## ディレクトリ構成

```text
├── src
│   ├── components // Atomic Designに沿ったコンポーネント
│   │   ├── atoms
│   │   ├── moloceles
│   │   ├── organisms
│   │   └── templages
│   ├── lib // 外部ライブラリに依存したhooksや関数
│   │   ├── dayjs
│   │   ├── github
│   │   └── mantine
│   ├── pages // Next.jsのルーティング
│   │   ├── _app.tsx
│   │   ├── about.tsx
│   │   ├── blog.tsx
│   │   ├── contact.tsx
│   │   └── portfolio.tsx
│   ├── types // TypeScriptの型定義
│   │   ├── Blog.ts
│   │   ├── GithubRepository.ts
│   │   ├── index.ts
│   │   ├── Language.ts
│   │   ├── Portfolio.ts
│   │   └── Tweet.ts
│   └── utils // 外部ライブラリに依存しない関数
│       └── textToHtml.ts
```
