import Koa from 'koa'
import Router from 'koa-router'
import Logger from 'koa-logger'
import json from 'koa-json'
import bodyParser from 'koa-bodyparser'

import { PORT } from './config'
import AppRoutes from './routes'

import multer from '@koa/multer'
const upload = multer({ dest: 'uploads/' })

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
// router.post('/upload/single', upload.single('banner'), async (ctx, next) => {
//   console.log('ctx.file', ctx.file);
//   ctx.body = 'Hello World!'
//   await next()
// })

AppRoutes.forEach(route => (router as any)[route.method](route.path, ...route.middlewares || [], route.action));

app.use(bodyParser())
app.use(Logger())
app.use(json())

app.use(router.routes())
app.use(router.allowedMethods())

app.listen(PORT, () => {
  console.log(`server running on http://localhost:${PORT}`);
})
