/**
 * Created by next on 17/1/5.
 */
"use strict";


import express from 'express';
import httpProxy from "http-proxy";
import cors from 'cors';
import ejs from 'ejs';



import api from './rotes/about';


var bodyParser = require('body-parser');


const app = express();

var router = express.Router();
const apiProxy = httpProxy.createProxyServer();

// app.use(express.static('views'));
app.set('views', './views');
app.set('view engine', 'jade');

app.use(cors());

app.use(bodyParser.urlencoded({ extended:false}));


// app.use(express.static('views'));

// app.use(function (req, res) {
//   var originalUrl = req.originalUrl;
//
//
//   console.log(originalUrl)
//   if (originalUrl.indexOf('?') > -1) {
//     originalUrl += '&'
//   }
//   return apiProxy.web(req, res, {
//     prependPath: false,
//     target: 'http://222.46.27.218:8800' + originalUrl,
//     changeOrigin: false
//   })
// });


var requestTime = function (req, res, next) {
  const start = new Date;
   next();
  const ms = new Date - start;
  console.info(`${req.method}  - ${ms}ms`);
};

app.use(requestTime);

app.get('/ss', function (req, res) {
  var responseText = 'Hello World!';
  responseText += 'Requested at: ' + req.requestTime + '';
  res.send(responseText);
});


// a middleware function with no mount path. This code is executed for every request to the router
router.use(function (req, res, next) {
  console.log('Time:', Date.now());
  next();
});

// a middleware sub-stack shows request info for any type of HTTP request to the /user/:id path
router.use('/user/:id', function(req, res, next) {
  console.log('Request URL:', req.originalUrl);
  next();
}, function (req, res, next) {
  console.log('Request Type:', req.method);
  next();
});

// a middleware sub-stack that handles GET requests to the /user/:id path
router.get('/user/:id', function (req, res, next) {
  // if the user ID is 0, skip to the next router
  if (req.params.id == 0) next('route');
  // otherwise pass control to the next middleware function in this stack
  else next(); //
}, function (req, res, next) {
  // render a regular page
  res.render('sb',{ title: 'Hey', message: req.params.id});
});

// handler for the /user/:id path, which renders a special page
router.get('/user/:id', function (req, res, next) {
  console.log(req.params.id);
  res.render('sb',{ title: 'Hey', message: 'sb'});
});

router.get('/', function (req, res) {
  res.render('sb', { title: 'Hey', message: 'Hello there!'});
});


// mount the router on the app
app.use('/', router);
app.use('/', api);


app.listen(3333,function () {
  console.log('api server listen on 3000')
});
