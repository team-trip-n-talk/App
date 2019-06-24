'use strict';

require('dotenv').config();

const Q = require('@nmq/q/client');

const api = new Q('api'); // Connect to files Queue


api.subscribe('sendMessage', payload => {
  console.log('Sending message');
  console.log(payload);
});


console.log('logger.js is sub to:', api.subscriptions());
