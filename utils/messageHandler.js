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

/**
* @method displayIncomingMessage
* @param {object} payload - incoming message object
* @param {name} name - users name
* @returns {string}  displays containing user name, message and a timestamp
* @desc displays messages
*/

exports.displayIncomingMessage = (payload, name) => {
  let message = JSON.parse(payload);
  console.log(`${message.name}: ${message.message}`);  // displays name : message
  console.log(message.timeSent); // Displays time
};

/**
* @method prepMessage
* @param {string} name - users name
* @param {string} line - message from the command line
* @returns {string}  converts object into string format getting ready for transmission
* @desc takes in name and message, creates an object and converts it to string format ready for transmission
*/

exports.prepMessage = (line) => {
  let message = {
    message: line,
  };
  message = JSON.stringify(message);
  
  return message;
};

/**
* @method _getDate
* @returns {string}  returns current date to attach to messages
* @desc function to add date to messages
*/
function _getDate() {
  // let date = Date.now;
  // return date.toLocaleString();

  let date = Date.now();
  return date;
}