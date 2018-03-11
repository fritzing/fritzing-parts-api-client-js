'use strict';

const {FritzingPartsAPIClient} = require('../src');

// test for the lists of fritzing parts
describe('ApiClient getFzps', () => {
  test('Status 200', (done) => {
    FritzingPartsAPIClient.getFzps()
    .then((data) => {
      expect(typeof data).toEqual('object');
      done();
    })
    .catch((err) => {
      done(err);
    });
  });
});

describe('ApiClient getFzpsCore', () => {
  test('Status 200', (done) => {
    FritzingPartsAPIClient.getFzpsCore()
    .then((data) => {
      expect(typeof data).toEqual('object');
      done();
    })
    .catch((err) => {
      done(err);
    });
  });
});

describe('ApiClient getFzpsObsolete', () => {
  test('Status 200', (done) => {
    FritzingPartsAPIClient.getFzpsObsolete()
    .then((data) => {
      expect(typeof data).toEqual('object');
      done();
    })
    .catch((err) => {
      done(err);
    });
  });
});


// test for the fritzing parts api routes
describe('ApiClient getFzp', () => {
  test('Status 200', (done) => {
    FritzingPartsAPIClient.getFzp('core/teensy_3.1.fzp')
    .then((data) => {
      expect(typeof data).toEqual('string');
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  test('Status 404', (done) => {
    FritzingPartsAPIClient.getFzp('not/found.fzp')
    .then(() => {
      throw new Error('should be 404');
      done();
    })
    .catch((err) => {
      expect(err.message).toEqual('Request failed with status code 404');
      done();
    });
  });
});

describe('ApiClient getFzpCore', () => {
  test('Status 200', (done) => {
    FritzingPartsAPIClient.getFzpCore('teensy_3.1.fzp')
    .then((data) => {
      expect(typeof data).toEqual('string');
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  test('Status 404', (done) => {
    FritzingPartsAPIClient.getFzpCore('not/found.fzp')
    .then(() => {
      throw new Error('should be 404');
      done();
    })
    .catch((err) => {
      expect(err.message).toEqual('Request failed with status code 404');
      done();
    });
  });
});

describe('ApiClient getFzpObsolete', () => {
  test('Status 200', (done) => {
    FritzingPartsAPIClient.getFzpObsolete('Arduino_Leonardo_Rev3.fzp')
    .then((data) => {
      expect(typeof data).toEqual('string');
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  test('Status 404', (done) => {
    FritzingPartsAPIClient.getFzpObsolete('not/found.fzp')
    .then(() => {
      throw new Error('should be 404');
      done();
    })
    .catch((err) => {
      expect(err.message).toEqual('Request failed with status code 404');
      done();
    });
  });
});

// test for the fritzing parts svg api routes
describe('ApiClient getSvg', () => {
  test('Status 200', (done) => {
    FritzingPartsAPIClient.getSvg('core/breadboard/teensy_3.1_breadboard.svg')
    .then((data) => {
      expect(typeof data).toEqual('string');
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  test('Status 404', (done) => {
    FritzingPartsAPIClient.getSvg('not/found.svg')
    .then(() => {
      throw new Error('should be 404');
      done();
    })
    .catch((err) => {
      expect(err.message).toEqual('Request failed with status code 404');
      done();
    });
  });
});

describe('ApiClient getSvgCore', () => {
  test('Status 200', (done) => {
    FritzingPartsAPIClient.getSvgCore('breadboard/teensy_3.1_breadboard.svg')
    .then((data) => {
      expect(typeof data).toEqual('string');
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  test('Status 404', (done) => {
    FritzingPartsAPIClient.getSvgCore('not/found.svg')
    .then(() => {
      throw new Error('should be 404');
      done();
    })
    .catch((err) => {
      expect(err.message).toEqual('Request failed with status code 404');
      done();
    });
  });
});

describe('ApiClient getSvgObsolete', () => {
  test('Status 200', (done) => {
    FritzingPartsAPIClient.getSvgObsolete('breadboard/Arduino_Fio.svg')
    .then((data) => {
      expect(typeof data).toEqual('string');
      done();
    })
    .catch((err) => {
      done(err);
    });
  });

  test('Status 404', (done) => {
    FritzingPartsAPIClient.getSvgObsolete('not/found.svg')
    .then(() => {
      throw new Error('should be 404');
      done();
    })
    .catch((err) => {
      expect(err.message).toEqual('Request failed with status code 404');
      done();
    });
  });
});


// test for the fritzing parts binary api routes
describe('ApiClient getFzbs', () => {
  test('Status 200', (done) => {
    FritzingPartsAPIClient.getFzbs()
    .then((data) => {
      expect(typeof data).toEqual('object');
      done();
    })
    .catch((err) => {
      done(err);
    });
  });
});
