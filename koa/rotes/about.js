/**
 * Created by next on 17/1/5.
 */
"use strict";


import request from 'request';
import express from 'express';
var router = express.Router();

router.get('/api', function (req, res) {
  res.send('api');

  request('/apph5/user/login?sid=4EniqRAW%2ByAv8ECWLECSEIKLi6JCFFzbQ%2FoeIkxD8l6vI0sXA0pD3x3yCFbLgbf3gcnSFDSnDE64Xd1qyS0ckJytWPRTXlzWaIIX27Z65X3%2FXewli9jf6FGD95fc5TVRlCs7pt%2BTY7s%3D', function (error, response, body) {
    if (!error && response.statusCode == 200) {
           console.log(body);
         }
     })
});


export default router;
