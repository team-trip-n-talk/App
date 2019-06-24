'use strict';
require('dotenv').config();

const Q = require('@nmq/q/client');
const api = new Q('api');

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

api.subscribe('msg', (payload) => {
  let msg = JSON.parse(payload);
  if(msg.name !== 'Tia'){
    console.log(msg);
  }
});

rl.on('line', function(line){
  let obj = {
    name: 'Tia',
    message: line,
  };
  Q.publish('api', 'msg', JSON.stringify(obj));  
});