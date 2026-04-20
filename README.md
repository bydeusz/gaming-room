This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Authentication

Auth is powered by [Auth.js v5](https://authjs.dev) (`next-auth@5`) with the Credentials provider — visitors sign up with an email and a password of their choice. Passwords are hashed with `bcryptjs` and sessions are JWT-based.

### First-time setup

1. Copy `.env.example` to `.env`.
2. Generate a secret and paste it into `AUTH_SECRET`:

   ```bash
   npx auth secret
   ```
3. Start Postgres and apply migrations:

   ```bash
   docker compose -f _infra/docker-compose.yml up -d
   npx prisma migrate dev
   ```
4. Run the dev server:

   ```bash
   npm run dev
   ```
5. Open `http://localhost:3000`, click **Sign up** to create an account, or **Sign in** if you already have one.

## Formatting

Prettier is configured for consistent code style. Available scripts:

- `npm run format` — format all files in the project.
- `npm run format:check` — verify formatting without writing changes (non-zero exit on violations, suitable for CI).

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
