/**
 * Created by next on 16/11/23.
 */
"use strict";


import logger from 'koa-logger';



const ErrData = require('../comm_unit/data_structure.js').ErrData;



const Ajax=require('../ajax/ajax.js').Ajax;



var fetch = require('node-fetch');
var rp = require('request-promise');

var router = require('koa-router')();

router.get('/', async(ctx, next) => {

  var lists = [
    {title:'one'}
  ];

  let type='0';

  // (async() => {
  //   await fetch('https://cnodejs.org/api/v1/topics').then((res) => res.json()).then((body) => {
  //     lists=body.data;
  //   })
  // })();

  await fetch('https://cnodejs.org/api/v1/topics').then((res) => res.json()).then((body) => {
  //  lists=body.data;
  });

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


  await Ajax.get("https://cnodejs.org/api/v1/topics").then(function(response) {

    lists=JSON.parse(response).data;

    type='2'



  }, function(error) {


    console.error('出错了', error);
  });


  if(type=='2'){
    await ctx.render('demo2', {
      lists: lists
    });
  }

});

module.exports = router;
