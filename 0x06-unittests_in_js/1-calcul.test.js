const assert = require('assert');
const calculateNumber = require('./1-calcul.js');

describe('calculateNumber', function () {
  describe('type SUM', function () {
    it('should return the sum of rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUM', 1, 3), 4);
      assert.strictEqual(calculateNumber('SUM', 1, 3.7), 5);
    });
  });

  describe('type SUBTRACT', function () {
    it('should return the difference of rounded numbers', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 5, 2), 3);
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 5), -3);
    });
  });

  describe('type DIVIDE', function () {
    it('should return the division of rounded numbers', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 2), 3);
      assert.strictEqual(calculateNumber('DIVIDE', 6, 4), 1.5);
    });

    it('should return "Error" when attempting to divide by 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 6, 0), 'Error');
    });
  });

  it('should throw an error for invalid type', function () {
    assert.throws(() => calculateNumber('INVALID_TYPE', 1, 2), Error);
  });
});
