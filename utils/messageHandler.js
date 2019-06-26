'use strict';

/**
* Message Handler Module
* @module messageHandler
*/

/**
* Export object for messaging functions
* @type {Object}
* @desc allows use of messaging functions through the socket.io connections
*/

module.exports = exports ={};

exports.displayIncomingMessage = (payload, name) => {
  let message = JSON.parse(payload);
  console.log(`${message.name}: ${message.message} `);  // displays name : message
  console.log(message.timeSent); // Displays time
};

exports.prepMessage = (name, line) => {
  let message = {
    name: name,
    message: line,
    timeSent: _getDate(),
  };
  message = JSON.stringify(message);
  
  return message;
};

function _getDate() {
  let date = new Date();
  return date.toLocaleString();
}