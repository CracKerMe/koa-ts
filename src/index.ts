import Koa from 'koa'
import Router from 'koa-router'
import Logger from 'koa-logger'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'

import { PORT } from './config'
import AppRoutes from './routes'

const app = new Koa()
const router = new Router()
// interface IHelloRequest {
//   name: string;
// }
// router.get('/', async (ctx, next) => {
//   // const data = <IHelloRequest>ctx.request.body
//   ctx.body = 'Hello World!'
//   await next()
// })

AppRoutes.forEach(route => (router as any)[route.method](route.path, route.action));

app.use(bodyParser())
app.use(Logger())
app.use(json())

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
})
