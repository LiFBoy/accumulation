import { Component,OnInit } from '@angular/core';

import {Http,Response,Headers, RequestOptions} from '@angular/http';


import { Observable }       from 'rxjs/Observable';

import 'rxjs/add/operator/toPromise';

import 'rxjs/add/operator/map';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

//
export class Hero {
  success: boolean;
  name: Object;
}


export class AppComponent implements OnInit{


  constructor(private http:Http){}
   ngOnInit(): void {



  }

   extractData(res: Response) {


    let body = res.json();

    console.log(body);
    return body.data || {}
  }



  api():Promise<Hero>{
    // let headers = new Headers({ 'Content-Type': 'application/json' });
    // let options = new RequestOptions({ headers: headers });

    return  this.http.get('https://cnodejs.org/api/v1/topics').toPromise().then(this.extractData)
  }
  title = 'app works!';
}
