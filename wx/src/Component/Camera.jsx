'usr strict';

import React from 'react';

import HttpService from '../Http'





class Camera extends React.Component {
    constructor() {
        super();
        this.state={
            token:[]
        }
    }


    componentWillMount(){



       console.log(location.href.split('#')[0]);

        var that=this;
        // HttpService.query({
        //     url: '/cgi-bin/token?grant_type=client_credential&appid=wxde63869ad36b0189&secret=de6cb6d7300816469a9e62c83629d4f2',
        //     data:{},
        // }).then((res)=>{
        //     console.log(res.access_token)
        //     window.localStorage.token=res.access_token;
        // },(error)=>{
        //     console.log(error)
        // });








    }

    createNonceStr(){
        return Math.random().toString(36).substr(2, 15);
    }

    createTimeStamp(){
       return parseInt(new Date().getTime() / 1000) + '';
    }




    componentDidMount(){
        var that=this;
        console.log(that.state.token);
        //
        // HttpService.query({
        //     url:'/cgi-bin/ticket/getticket?access_token='+window.localStorage.token+'&type=jsapi',
        //     data:{},
        //
        // }).then((res)=>{
        //     console.log(res.ticket)
        //     window.localStorage.getticket=res.ticket;
        // },(error)=>{
        //     console.log(error)
        // });


        //
        // console.log(window.localStorage.getticket)
        console.log(this.createNonceStr())
        console.log(this.createTimeStamp())



        // const str=this.init( 'kgt8ON7yVITDhtdwci0qeRZmMuwuDzV_oyBux5vmraF9-Gd5S4KrYycRksMXRgn587bW5EKTBmd_h1p1v9vBKQ', 'dmjaq47q2govtbw', '1484040614', 'http://192.198.0.153:3000/');
            // console.log(111)
            // console.log(str);


        // console.log(sign('kgt8ON7yVITDhtdwci0qeWSAUUVEYiQpHyhMd6RL9CsdXRuCDZ6mV-i8t0E6dVokM86mfqtgoYlqfDXNnLoftw', 'http://wx.17find.com'));
        //
        // var nonceStr=sign(window.localStorage.getticket, 'http://wx.17find.com').nonceStr;
        // var timestamp=sign(window.localStorage.getticket, 'http://wx.17find.com').timestamp;
        // var signature=sign(window.localStorage.getticket, 'http://wx.17find.com').signature;
        //
        // console.log(nonceStr)




        //
        wx.config({
            debug: true,
            appId: 'wxde63869ad36b0189',
            timestamp: '1484293462',
            nonceStr:'7qd05hwecshty1m',
            signature:'305f933ff84a91e68b1ba8614765006cd2e80ce0',
            jsApiList: [
                'chooseImage'
            ]
        });
        //
        //
        wx.ready(function(){
            wx.chooseImage({
                count: 1, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: function (res) {
                    var localIds = res.localIds; // 返回选定照片的本地ID列表，localId可以作为img标签的src属性显示图片
                }
            });
        });





    }


    render() {


        return (
            <div>
                camera
            </div>

        )
    }
}


export default Camera