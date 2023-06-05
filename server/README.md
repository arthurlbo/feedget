### Hi there! 👋

> A feedback widget api for the user to share an idea, report issues or any other relevant information.
>
> The objective of this project was to improve my backend skills, developing something that is really useful in our daily lives.
> 
> What most caught the attention of the project was the focus on sending user feedback by email, in addition to capturing this feedback, it already automates this sending service, making it very practical and easy to use.
>
> The first version was developed in the [Rocketseat](https://www.rocketseat.com.br/) Next Level Week #8. After a year I decided to change some things in the project. The main change was the choice of changing database from  PostgreSQL to SQLite.
>
> The choice of this change was based on the simplicity of SQLite., it doesn't require a lot of server setup or optimization to get good performance. Also, SQLite's syntax is simpler compared to PostgreSQL, which can make SQL code development and maintenance easier.
>

## What is inside?

- [Node](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Prisma](https://www.prisma.io/)
- [Express](https://expressjs.com/pt-br/)
- [Node Mailer](https://nodemailer.com/about/)
- [Mailtrap](https://mailtrap.io/)
- [Jest](https://jestjs.io/pt-BR/)

## Getting Started

### Install dependencies:

```bash
pnpm install
```

or

```bash
yarn
```

or

```bash
npm install
```

### Run development server

```bash
pnpm dev
```

or

```bash
yarn dev
```

or

```bash
npm run dev
```

### 🔥 Your server started at http://localhost:3333

## Structure

```
└── src
    ├── adapters
    ├── repositories
    ├── use-cases
```

| Folder            | Description                                                   |
| ----------------- | ------------------------------------------------------------- |
| **adapters**      | Integration with external systems                             |
| **repositories**  | interaction with the database for persistent data             |
| **use-cases**     | interaction with repositories for access and manipulate data  |

## Commands

- `dev`: run development server
- `test`: run tests

## 💻 Web

[Feedget Web](https://github.com/arthurlbo/feedget/tree/main/web)

## 📱 Mobile version

[Feedget App](https://github.com/arthurlbo/feedget/tree/main/mobile)

<p align="center">Made with 🤍 by Arthur</p>
