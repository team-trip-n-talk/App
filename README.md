# Trip'N'Talk

## Client side application

### Authors: Tia, Jeff, Felipe

### Links and Resources
* [Message Queue Server - link TBD](http://xyz.com)

### Modules
#### `messageHandler.js`

`displayIncomingMessage(payload, name) -> console.logs message`
Helps display an incoming message

`prepMessage(name, line) -> message`
Preps a message for delivery. Sends it as a string.

### Setup
#### `.env` requirements
* `Q_SERVER` - URL to the server mesage queue

#### Running the app
* `npm start`
First message does not get send
  
#### Tests
`npm test`

#### UML
Link to an image of the UML for your application and response to events