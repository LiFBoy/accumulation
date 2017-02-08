import Router from 'koa-router';

const router = new Router();

router.get('/index', async (ctx, next) => {
  ctx.state = {
    title: 1==1?'sb':'sss'
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
