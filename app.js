
'use strict';

/**
* App Module
* @module app
*/

//Dependencies
require('dotenv').config();
const express = require('express');
const utils = require('./utils/messageHandler');
const readline = require('readline');

//Readline variable creation
const rl = readline.createInterface(process.stdin, process.stdout);

// Prepare the express app
const app = express();

//Jsdocs
app.use(express.static('docs'));
app.use('/docs', express.static('docs'));

const io = require('socket.io-client');

/**
* @method io.connect
* @param {string} SERVER - server environment variable
* @returns {object} sends out query object containing environment token variable
* @desc establishes server connection and sends up the users token for authentication on the server
*/

const socket = io.connect(process.env.SERVER, {
  query: {token: process.env.TOKEN},
});

/**
* @method socket.on
* @param {string} message - channel / chatroom name
* @param {function} utils.displayIncomingMessage - function to capture and display incoming messages
* @returns {object} message
* @desc recieves messages from server and displays them
*/

socket.on('message', utils.displayIncomingMessage);

/**
* @method rl.on
* @param {string} line - reads lines from the command line
* @returns {object} emits recieved input from command line wrapped in an object with username attached
* @desc reads what is typed on the command line combines it with the users name and emmits it
*/

rl.on('line', (line) => {
  // let name = process.env.USERNAME;
  socket.emit('message', utils.prepMessage(line));
});
