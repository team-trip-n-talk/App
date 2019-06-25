'use strict';

require('dotenv').config();

const Q = require('@nmq/q/client');
const api = new Q('api');


const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);



rl.on('line', function(line){
  let obj = {
    name: 'jeff',
    message: line,
  };
  console.log(JSON.stringify(obj));
  Q.publish('api', 'msg', JSON.stringify(obj));
  // console.log('skdjfalksj');
  
});

api.subscribe('msg', (payload) => {
  // console.log('here in');
  let msg = JSON.parse(payload);
  // console.log('kjkljk' + msg);
  if(msg.name !== 'jeff'){
    console.log(msg);
  }

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