/**
 * Created by next on 16/12/12.
 */
"use strict";


import './index.less'


import './auto-set-rem'

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    await ping();
}
async function ping() {
    for (var i = 0; i < 10; i++) {
        await delay(300);
        console.log("pin");
    }
}


main();