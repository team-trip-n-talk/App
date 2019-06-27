
'use strict';

/**
* App Module
* @module app
*/

//Dependencies
require('dotenv').config();
const utils = require('./utils/messageHandler');
const readline = require('readline');

//Readline variable creation
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

const io = require('socket.io-client');

const socket = io.connect(process.env.SERVER, {
  query: {token: process.env.TOKEN},
});

socket.on('message', utils.displayIncomingMessage);

/**
* @method readlineHandler
* @param {string} line - reads lines from the command line
* @returns {object} emits recieved input from command line wrapped in an object with username attached
* @desc reads what is typed on the command line combines it with the users name and emmits it
*/

readlineInterface.on('line', (line) => {
  socket.emit('message', utils.prepMessage(line));
});
