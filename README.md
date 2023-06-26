# Koa + Typescript Starter

## Getting Started
**install**
```shell
git clone https://github.com/CracKerMe/koa-ts.git
cd koa-ts && pnpm install
```

**run dev**
```shell
pnpm start:dev
```

**run prod**
```shell
pnpm build && pnpm start
```


### Directory Structure
```
├── README.md
├── package.json
├── pnpm-lock.yaml
├── src
│   ├── app.ts
│   ├── config
│   │   └── index.ts
│   ├── controllers
│   │   ├── index.ts
│   │   └── user.ts
│   ├── index.ts
│   ├── services
│   │   ├── index.ts
│   │   └── user.ts
│   ├── routes
│   │   ├── index.ts
│   │   └── user.ts
│   └── utils
│       └── index.ts
└── tsconfig.json
```

## How to use
### Add a new route
1. create a new controller file in `src/controllers`
2. create a new service file in `src/services`
3. create a new route file in `src/routes`
4. add a new route in `src/routes/index.ts`
