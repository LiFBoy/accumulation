'usr strict';
import React, {Component, PropTypes} from 'react';
import ReactDOM, {render} from 'react-dom';


import {HttpService, Toast, GetCurrentDate} from'../Http';

import myBridge from '../appBrige'

import {doLogin, change, getOneBabyid, changeSaveBabyStatus, getMap, getCurrentPower, exportMap} from '../action/index'


import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';


import {Router, Route, IndexRoute, browserHistory, Link} from 'react-router';

import '../less/index.less'

import '../less/deviceList.less'


import usrimg from '../../src/img/user.png'

import qiehuan from '../../src/img/qiehuan.png'

import dian2 from '../../src/img/dianliang1.png'
import dian3 from '../../src/img/dianliang2.png'
import dian4 from '../../src/img/dianliang3.png'
import dian1 from '../../src/img/didianliang.png'
import dian from '../../src/img/lixian.png'

import lishiguiji from '../../src/img/lishiguiji.png'


import wifi from '../../src/img/wifi.png'
import lbs from '../../src/img/lbs.png'
import gbs from '../../src/img/gps.png'


import touxiang from '../../src/img/touxiang.png'

import shouqi from '../../src/img/shouqi.png'


import dingweixiao  from '../../src/img/dingweixiao.png'
import dingwei  from '../../src/img/dingwei.png'
import tongzhi  from '../../src/img/jianhuchengyuan.png'

import tonghuaxiao from '../../src/img/tonghuaxiao.png'

import zhankai from '../../src/img/zhankai.png'

import tonghua from '../../src/img/tonghua.png'

import anquan from '../../src/img/anquan.png'

import tianjia from '../../src/img/tianjia.png'

import more from '../../src/img/more.png'

import guanbi from '../../src/img/guanbi.png'


import jianhuchengyuan  from '../../src/img/jianhuchengyuan.png'


import  genghuan from '../../src/img/genghuan.png'

import  jiebang from '../../src/img/jiebang.png'

import kaoqin from '../../src/img/kaoqin.png'
import sb from '../../src/img/bind/sb.png'
import lsb from '../../src/img/bind/lsb.png'


class MapIndex extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lng: '120.153576',
            lat: '30.287459',
            isOpen: false,
            mapHeight: '100%',
            mapBottom: '4.5rem',
            checked: false,
            babyname: '',
            babyid: '',

        };
    }

    componentDidMount(){
        //
        // myBridge.listenEvent(function (message, callback) {
        //     if (message == 0) {
        //         if (!!$scope.goodDetail){
        //             $scope.shareFriend();
        //         }
        //     }
        // });
    }


    componentWillMount() {


        this.setupWebViewJavascriptBridge(function(bridge)
        {
            bridge.registerHandler('sendToHtml', function(data,res) {
                alert(data)

                res('12333');

            })

        })





        // window.localStorage.delDevice=false;//是否解绑过设备

        window.localStorage.sid1 = this.props.params.sid.replace("+", "%2B").replace(" ", "%20").replace(/\//g, "%2F");

        if (!this.props.babyid) {
            //   alert('没值')

            this.props.doLogin(this.props.params.sid);

        } else {
            //是否改变过宝贝 1改了 0没改变

            if (localStorage.delDevice != 1) {

                this.props.getMap(this.props.babyid)

            } else {
                this.props.getOneBabyid();
            }

        }


        if (this.state.isOpen == false) {
            this.isOpen()
        }


    }

    componentWillUnmount() {







        console.log(this.props.exportMap);

        this.props.exportMap.clearMap();
        var node = document.getElementById('container');
        if (!!node.parentNode) {
            console.log(22);
            node.parentNode.removeChild(node);
        }

        window.localStorage.delDevice = 0;
    }


    componentDidMount(){

    }


    _change(babyname, babyid, headimg, babytelephone, e) {
        e.preventDefault();

        this.setState({
            checked: false,
        });

        const data = {
            babyname: babyname,
            babyid: babyid,
            babytelephone: babytelephone,
            headimg: headimg,
        };


        this.props.change(data);


    }

    more() {
        this.setState({
            checked: true
        })
    }

    guanbi() {
        this.setState({
            checked: false
        })
    }


    changeAge(f) {
        HttpService.query({
            url: '/app/object/saveBaby',
            data: {
                familystatus: f,
                babyid: this.props.babyid,
                token: localStorage.appToken
            },
            success: (res=> {


                if (res.code == '10042') {

                    console.log(res);


                    this.props.changeSaveBabyStatus(false);


                    //window.location.href = '/#/map/' + localStorage.sid1 + '';

                } else {
                    Toast.toast(res.msg, 3000);
                }
            })
        })


    }

    getLocation() {

        this.props.getMap(this.props.babyid);

        // this.init(116.397428, 39.90923)
    }


    isOpen() {


        if (!this.state.isOpen) {
            this.setState({
                isOpen: true,
                mapBottom: '13.5rem'
            });

        } else {
            this.setState({
                isOpen: false,
                mapBottom: '4.5rem'
            });
        }

    }






    setupWebViewJavascriptBridge(callback){
        if (window.WebViewJavascriptBridge) { return callback(WebViewJavascriptBridge); }

        if (window.WVJBCallbacks) { return window.WVJBCallbacks.push(callback); }

        window.WVJBCallbacks = [callback];

        var WVJBIframe = document.createElement('iframe');

        WVJBIframe.style.display = 'none';

        WVJBIframe.src = 'wvjbscheme://__BRIDGE_LOADED__';

        document.documentElement.appendChild(WVJBIframe);

        setTimeout(function() { document.documentElement.removeChild(WVJBIframe) }, 0)
    }


    scanClick()
    {
        WebViewJavascriptBridge.callHandler('scanClick', {'foo': 'bar'}, function(response)
        {
            alert('扫描结果:' + response);
            document.getElementById("returnValue").value = response;


        })
    }


    shareClick() {
        var params = {'title':'测试分享的标题','content':'测试分享的内容','url':'http://www.baidu.com'};
        WebViewJavascriptBridge.callHandler('shareClick',params,function(response) {
            alert(response);
            document.getElementById("returnValue").value = response;
        });
    }


    locationClick() {
        WebViewJavascriptBridge.callHandler('locationClick',function(response) {
            alert(response);

        });
    }

    uploadImgClick(){
        WebViewJavascriptBridge.callHandler('uploadImgClick','相机',function(response) {
            alert(response)
            console.log(response);
           // document.getElementById("returnValue").value = response;
        });
    }

    phoneNumberClick(){
        WebViewJavascriptBridge.callHandler('phoneNumberClick',function(response) {
            alert(response);
          //  document.getElementById("returnValue").value = response;
        });
    }






    uploadImg(){
        this.uploadImgFromCamera(function (res) {
            console.log(res)
        })
    }

    //
    // uploadImgFromCamera (cb,_size) {
    //
    //     myBridge.callHandler('sendMessageToApp', {
    //     type: 12, data: {
    //         type: 1,
    //         size: _size? _size :450
    //     }
    //     }, cb)
    // }

    render() {

        const getCurrenttime = GetCurrentDate.time();

        const {babyName, babytelephone, list, babyid, headimg, values, lng, lat, gpstime, getGuardiansList, _checked, abc, address, isLogin, datasource}=this.props;

        console.log(this.props.exportMap);


        var isOpen = this.state.isOpen;
        var mapHeight = this.state.mapHeight;
        const mapBottom = this.state.mapBottom;
        const checked = this.state.checked;





        let valueType = ()=> {


            if (values == '0') {
                return <img src={dian} style={{width: '1.3rem', height: '1.1rem', marginLeft: '0'}}/>
            } else if (values == '1') {
                return <img src={dian1} style={{width: '1.8rem', height: '1.1rem', marginLeft: '0'}}/>
            } else if (values == '2') {
                return <img src={dian2} style={{width: '1.8rem', height: '1.1rem', marginLeft: '0'}}/>
            } else if (values == '3') {
                return <img src={dian3} style={{width: '1.8rem', height: '1.1rem', marginLeft: '0'}}/>
            } else if (values == '4') {
                return <img src={dian4} style={{width: '1.8rem', height: '1.1rem', marginLeft: '0'}}/>
            }
        }


        let listItem = list.map((json, index)=> {
            return (
                <div className="device-info" key={index}
                     onClick={this._change.bind(this, json.babyname, json.babyid, json.headimg, json.babytelephone)}>
                    <div className="headimg">

                        {
                        !json.headimg ?
                        <img src={touxiang} style={{
                        width: '3.4rem',
                        height: '3.4rem'
                        }}/> :
                        <img src={"/media" + json.headimg} style={{
                        width: '3.4rem',
                        height: '3.4rem'
                        }}/>
                        }
                    </div>
                    <div className="info">
                        <div className="name">{json.babyname}</div>
                        <div className="time">设备有效日期{json.starttime}</div>
                    </div>

                </div>
            )
        })


        return (
            <div>
                <h1 style={{textAlign:'center'}}>{this.props.route.title}</h1>
                <div>调用测试</div>
                <p onClick={this.uploadImgClick}>相机</p>
                <p onClick={this.locationClick}>获取地理位置</p>
                <p onClick={this.phoneNumberClick}>通讯录</p>
            </div>
        )
    }


}


const mapStateToProps = state => {
    return {
        list: state.login.list,
        babyName: state.login.babyName,
        babyid: state.login.babyid,
        babytelephone: state.login.babytelephone,
        headimg: state.login.headimg,
        values: state.login.values,
        lng: state.login.lng,
        lat: state.login.lat,
        gpstime: state.login.gpstime,
        getGuardiansList: state.login.getGuardiansList,
        _checked: state.login.checked,
        abc: state.login.abc,
        address: state.login.addr,
        datasource: state.login.datasource,
        isLogin: state.login.isLogin,
        exportMap: state.login.exportMap

    };
};
const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        doLogin: doLogin,
        change: change,
        getOneBabyid: getOneBabyid,
        changeSaveBabyStatus: changeSaveBabyStatus,
        getMap: getMap,
        getCurrentPower: getCurrentPower,
        exportMap: exportMap,
    }, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps)(MapIndex);


