This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

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

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

#######################################################################################################################
la structure du code se comporte comme suit: 

# Création du dossier Marketing
-/@ Un sous dossier du nom de _components qui comporte le footer, le heading, heroes et le logo qui constitue la page d'acceuil de mon application pour le moment. 

-/@ Un dossier du nom de layout qui se retrouve dans le file marketing qui comporte un fichier "page" a servie au appel des classe comme footer, heading et heroes et "layout" qui va servire de nav pour le site en question.

-/@ Créatio du dossier navBar qui prend en charge le logo et le login 

# Création du dossier provider dans "components"
-/@création du file theme-provider pour le changement de couleur sur la page du site en question 

# App/layout contient les fichier descriptif du site en question en passant par le nom, description et autre

-/@ dans le code mode-toggle il est question d'affiché le boutton paramètre qui va permettre de changé le mode de la page"(shadcn/ui (est le site sur laquelle je suis partie prendre le mode))"