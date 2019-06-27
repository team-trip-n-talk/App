'use strict';

const utils = require('../utils/messageHandler');

Date.now = () => 42;

describe('Utils module', () => {
  

  describe('displayIncomingMessage()', () => {
    let message;
    beforeEach(() => {
      message = {
        username: 'Sam',
        message: 'Hello!!',
        timeSent: '2pm',
      };
      message = JSON.stringify(message);
    });

    it('should call console.log() 2 times', () => {
      const spy = jest.spyOn(console, 'log');
      utils.displayIncomingMessage(message);

      expect(spy).toHaveBeenCalledTimes(2);
      spy.mockRestore();
    });

    it('console.log the text "name: line"', () => {
      console.log = jest.fn();

      utils.displayIncomingMessage(message);

      // The first argument of the first call to the function was 'hello'
      expect(console.log.mock.calls[0][0]).toBe('Sam: Hello!!');
    });
  });

  describe('prepMessge()', () => {
    let line;
    beforeEach(() => {
      line = 'Hello World!';
    });

    it('should stringify message', () => {
      let result = utils.prepMessage(line);

      expect(result).toBe('{"message":"Hello World!"}');

    });
  });  
});