import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import logger from 'koa-logger';
import session from 'koa-session';
import views from 'koa-views';
import convert from 'koa-convert';
import serve from 'koa-static';
import finalHandler from './lib/middlewares/finalHandler';
import router from './router';

import proxy from 'koa-proxy';

const app = new Koa();//启动前
app.use(logger());
app.use(finalHandler());
app.use(views(`${__dirname}/views`, {
  map: {
    html: 'nunjucks'
  }
}));
app.use(bodyParser());
app.keys = ['some secret hurr'];
// app.use(convert(session(app)));
app.use(serve(__dirname + '/public'));

app.use(async (ctx, next) => {
  const start = new Date;
  await next();
  const ms = new Date - start;
  console.info(`${ctx.method} ${ctx.url} - ${ms}ms`);
});


app
  .use(router.routes())
  .use(router.allowedMethods());

const users = require('./rotes/user');

router.use('/api', users.routes());



const dealErr = require('./comm_unit/deal_err.js');
app.use(dealErr());




//
// const dealErr = require('./comm_unit/deal_err.js');
// app.use(dealErr());


export default app;
