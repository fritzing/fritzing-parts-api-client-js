'use strict';

const ApiClient = require('../src');
let client = new ApiClient();

describe('ApiClient getFzps', () => {
  test('Status 200', (done) => {
    client.getFzps()
    .then((data) => {
      expect(typeof data).toEqual('object');
      done();
    })
    .catch((err) => {
      done(err);
    });
  });
});

describe('ApiClient getFzp', () => {
  test('Status 200', (done) => {
    client.getFzp('core/teensy_3.1.fzp')
    .then((data) => {
      expect(typeof data).toEqual('string');
      // console.log(data);
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  test('Status 404', (done) => {
    client.getFzp('not/found.fzp')
    .then((data) => {
      throw new Error('should be 404');
      done();
    })
    .catch((err) => {
      expect(err.message).toEqual('Request failed with status code 404');
      done();
    });
  });
});

describe('ApiClient getCoreSvg', () => {
  test('Status 200', (done) => {
    client.getCoreSvg('breadboard/teensy_3.1_breadboard.svg')
    .then((data) => {
      expect(typeof data).toEqual('string');
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  test('Status 404', (done) => {
    client.getCoreSvg('not/found.svg')
    .then((data) => {
      throw new Error('should be 404');
      done();
    })
    .catch((err) => {
      expect(err.message).toEqual('Request failed with status code 404');
      done();
    });
  });
});

describe('ApiClient getFzbs', () => {
  test('Status 200', (done) => {
    client.getFzbs()
    .then((data) => {
      expect(typeof data).toEqual('object');
      done();
    })
    .catch((err) => {
      done(err);
    });
  });
});
