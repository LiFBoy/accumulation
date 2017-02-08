import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import views from 'koa-views';
import convert from 'koa-convert';
import serve from 'koa-static';
import finalHandler from './lib/middlewares/finalHandler';

import user_router from './rotes/user';

import demo_router from './router'

import cors from 'koa-cors'


const app = new Koa();//启动前

app.use(convert(cors()));

app.use(logger());
app.use(finalHandler());

//
app.use(views(`${__dirname}/views`, {
  map: {
    html: 'nunjucks'
  }
}));


app.use(bodyParser());
app.keys = ['some secret hurr'];

// app.use(serve(__dirname + '/public'));

app.use(async(ctx, next) => {
  const start = new Date;
  await next();
  const ms = new Date - start;
  console.log(`${ctx.host}  - ${ms}ms`);



});


// router.use('/api', user_router.routes(), user_router.allowedMethods());

app.use(user_router.routes(), user_router.allowedMethods());


app.use(demo_router.routes(), demo_router.allowedMethods());



app.listen(3060);

export default app;
