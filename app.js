'use strict';
require('dotenv').config();

// const Q = require('@nmq/q/client');
// const messageQ = new Q('messageQ');
const io = require('socket.io-client');
const socket = io.connect(process.env.SERVER);

const utils = require('./utils/messageHandler');

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

socket.on('message', utils.displayIncomingMessage);

// messageQ.subscribe('message', (payload) => {
//   utils.displayIncomingMessage(payload);
// });

// rl.on('line', (line) => {
//   let name = 'Jeff';
//   Q.publish('messageQ', 'message', utils.prepMessage(name, line));  
// });

rl.on('line', (line) => {
  let name = 'Jeff';
  socket.emit('message', utils.prepMessage(name, line));
});