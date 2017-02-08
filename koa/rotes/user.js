/**
 * Created by next on 16/11/23.
 */
"use strict";


import logger from 'koa-logger';

var config = require('../config');




import Ajax from '../ajax/ajax'
var fetch = require('node-fetch');

import Router from 'koa-router';

const router = new Router();

router.get('/api', async(ctx, next) => {


  var lists = [
    {title:'one'}
  ];


  // (async() => {
  //   await fetch('https://cnodejs.org/api/v1/topics').then((res) => res.json()).then((body) => {
  //     lists=body.data;
  //   })
  // })();

  // await fetch('https://cnodejs.org/api/v1/topics').then((res) => res.json()).then((body) => {
  // //  lists=body.data;
  // });

  // var getJSON = function(url) {
  //   var promise = new Promise(function(resolve, reject){
  //     var client = new XMLHttpRequest();
  //     client.open("GET", url);
  //     client.onload = function () {
  //
  //       if(client.status==200){
  //
  //         resolve(client.responseText);
  //       }else{
  //         reject(new Error(client.statusText));
  //       }
  //
  //     };
  //     client.send();
  //   });
  //
  //   return promise;
  // };
  //
  await Ajax.get(config.default+"/api/v1/topics").then(function(response) {


    lists=JSON.parse(response).data;

  }, function(error) {


    console.error('出错了', error);
  });


  // await request('https://cnodejs.org/api/v1/topics', function (error, response, body) {
  //   if (!error && response.statusCode == 200) {
  //     console.log(body);		//请求百度首页，返回的Html数据
  //
  //     type='2'
  //   }
  // });


  // var res = request('GET', 'https://cnodejs.org/api/v1/topics');
  // console.log(res.getBody().toString());

  // var res =  request('get', 'https://cnodejs.org/api/v1/topics');
  //
  //
  //
  //  lists=res.getBody().toString()
  //
  // console.log(res.getBody().toString());

  //
  // await Ajax.get('/apph5/user/login?sid=4EniqRAW%2ByAv8ECWLECSEIKLi6JCFFzbQ%2FoeIkxD8l6vI0sXA0pD3x3yCFbLgbf3gcnSFDSnDE64Xd1qyS0ckJytWPRTXlzWaIIX27Z65X3%2FXewli9jf6FGD95fc5TVRlCs7pt%2BTY7s%3D').then(
  //   function (res) {
  //
  //     console.log(res);
  //
  //
  //     lists=[
  //       {title:'sb'}
  //     ];
  //
  //   },function (error) {
  //     console.error('出错了', error);
  //   }
  // );



    await ctx.render('demo2', {
      lists: lists
    });


});

export default router;
