## Project Name
Trip 'n' Talk Client Side App

[![Build Status](https://www.travis-ci.com/team-trip-n-talk/Client-side-App.svg?branch=master)](https://www.travis-ci.com/team-trip-n-talk/Client-side-App)

### Authors: 
Tia Rose, Jeff Lawrence, Felipe Delatorre

### Links and Resources
* [Github](https://github.com/team-trip-n-talk/Client-side-App)
* [Travis](https://www.travis-ci.com/team-trip-n-talk/Client-side-App)

#### Documentation
* [JSDOC]()
* [Data Flow Chart](https://www.lucidchart.com/documents/edit/b4adc909-52d2-460a-9a0a-d8cfb7211ec5/0)

### Modules

* `app.js`
* `utils folder`
* * `messageHandler.js`

#### app.js
`socket`
Sets up socket connection and sends up token for authentication

`socket.on`
Recieves incoming messages and calls display function to show them

`rl.on`
Enables reading of messages typed on the command line

#### messageHandler.js

`displayIncomingMessage(payload, name) -> console.logs message`
Helps display an incoming message

`prepMessage(name, line) -> message`
Preps a message for delivery. Sends it as a string.

`_getDate`
Gets current date to attach to message

### Setup
#### `.env` requirements - see env-sample or look below

* `SERVER` - deployed server url
* `TOKEN` - secret key/token
* `USERNAME` - users name

#### Running the app
* `npm start`
  
#### Tests
`npm test`
