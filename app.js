'use strict';
require('dotenv').config();

const Q = require('@nmq/q/client');
const messageQ = new Q('messageQ');
const utils = require('./utils/messageHandler');

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

messageQ.subscribe('message', (payload) => {
  utils.displayIncomingMessage(payload);
});

rl.on('line', (line) => {
  let name = 'Felipe';
  Q.publish('messageQ', 'message', utils.prepMessage(name, line));  
});
