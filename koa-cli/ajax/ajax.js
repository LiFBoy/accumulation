/**
 * Created by next on 16/12/20.
 */
"use strict";


var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
class Ajax {

 static get(url) {
    return new Promise((resolve, reject)=>{
        let request= new XMLHttpRequest();

        request.onreadystatechange = function() {
          if (request.readyState === 4) {
            if (request.status === 200) {
              resolve(request.responseText);
            } else {
              reject();
            }
          }
        };
      request.open("GET", url, true);
      request.send(null);

      });

  }
}

module.exports.Ajax = Ajax;
