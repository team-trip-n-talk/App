'use strict';

module.exports = exports ={};

exports.displayIncomingMessage = (payload, name) => {
  let message = JSON.parse(payload);
  // if (message.name !== name){ // Prevents from seeing messages sent by you

  // }
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