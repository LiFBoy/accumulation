import Router from 'koa-router';

const router = new Router();

router.get('/index', async (ctx, next) => {
  ctx.state = {
    title: 'koa2 title2'
  };
  ctx.body='hello world';
  await ctx.render('index');
});

router.get('/demo2',async(ctx,next)=>{
  await  ctx.render('demo2');
});
router.get('/demo3',async(ctx,next)=>{
  await  ctx.render('demo3');
});


export default router;
