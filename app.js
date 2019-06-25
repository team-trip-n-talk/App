'use strict';
require('dotenv').config();

const io = require('socket.io-client');
const socket = io.connect(process.env.SERVER, {
  query: {token: process.env.TOKEN},
});

const utils = require('./utils/messageHandler');

const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

socket.on('message', utils.displayIncomingMessage);

rl.on('line', (line) => {
  let name = 'Jeff';
  socket.emit('message', utils.prepMessage(name, line));
});