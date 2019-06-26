'use strict';

const utils = require('../utils/messageHandler');

describe('Utils module', () => {
  

  describe('displayIncomingMessage()', () => {
    let message;
    beforeEach(() => {
      message = {
        name: 'Sam',
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
    let name;
    let line;
    beforeEach(() => {
      name = 'sam';
      line = 'line';
    });

    it('should stringify message', () => {
      const DATE_TO_USE = new Date('2016');
      const _Date = Date;
      global.Date = jest.fn(() => DATE_TO_USE);
      global.Date.UTC = _Date.UTC;
      global.Date.parse = _Date.parse;
      global.Date.now = _Date.now;      
      let result = utils.prepMessage(name, line);

      expect(result).toBe('{"name":"sam","message":"line","timeSent":"12/31/2015, 4:00:00 PM"}');
    });


  });
  
});