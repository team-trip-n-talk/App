'use strict';
require('dotenv').config();

const Q = require('@nmq/q/client');
const api = new Q('api');

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);



rl.on('line', function(line){
  Q.publish('api', 'msg', line);
});

api.subscribe('msg', (payload) => {
  console.log(payload);
});

// while(true){
//   rl.on('line', function(line){
//     console.log(line);
//     api.publish('api', 'sendMessage', line);
//   });

// }




// let message = process.argv.slice(2).shift();

// // api.publish('api', 'sendMessage', {name: message});
// // api.subscribe('sendMessage','api', {name: message});
// api.publish('api', 'sendMessage',{name: message});
// // api.monitorEvents('togeneral');
