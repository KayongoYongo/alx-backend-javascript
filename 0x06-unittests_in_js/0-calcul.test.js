const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should round and return the sum of two numbers', () => {
    assert.strictEqual(calculateNumber(1.9, 2.1), 4);
    assert.strictEqual(calculateNumber(2.4, 3.7), 6);
    assert.strictEqual(calculateNumber(3.1, 4.5), 8);
  });
});
