/**
 * Created by next on 16/11/23.
 */
"use strict";

var router = require('koa-router')();

router.get('/', async function (ctx, next) {
  ctx.state = {
    title: 'koa2 title'
  };

  await ctx.render('index', {
  });
})
module.exports = router;
