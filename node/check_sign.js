var sign = require('./sign.js');

console.log(sign('kgt8ON7yVITDhtdwci0qeWSAUUVEYiQpHyhMd6RL9CsdXRuCDZ6mV-i8t0E6dVokM86mfqtgoYlqfDXNnLoftw', 'http://wx.17find.com'));
console.log(sign('kgt8ON7yVITDhtdwci0qeWSAUUVEYiQpHyhMd6RL9CsdXRuCDZ6mV-i8t0E6dVokM86mfqtgoYlqfDXNnLoftw', 'http://wx.17find.com').url);
/*
 *something like this
 *{
 *  jsapi_ticket: 'jsapi_ticket',
 *  nonceStr: '82zklqj7ycoywrk',
 *  timestamp: '1415171822',
 *  url: 'http://example.com',
 *  signature: '1316ed92e0827786cfda3ae355f33760c4f70c1f'
 *}
 */
