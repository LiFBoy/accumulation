/**
 * Created by next on 16/11/23.
 */
"use strict";
import SmallSoftwareRouter  		from 'koa-router'

const smallSoftwareRouter  = new SmallSoftwareRouter()

smallSoftwareRouter.get("/getTest",(ctx,next)=>{

  ctx.body = ctx.request.query

})

smallSoftwareRouter.post("/postTest",(ctx,next)=>{

  ctx.body = ctx.request.fields
})


export default smallSoftwareRouter
