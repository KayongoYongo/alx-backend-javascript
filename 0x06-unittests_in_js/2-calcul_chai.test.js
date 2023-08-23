const expect = require('chai').expect;
const calculateNumber = require('./2-calcul_chai.js');

describe('calculateNumber', function () {
  describe('type SUM', function () {
    it('should return the sum of rounded numbers', function () {
      expect(calculateNumber('SUM', 1, 3)).to.equal(4);
      expect(calculateNumber('SUM', 1, 3.7)).to.equal(5);
    });
  });

  describe('type SUBTRACT', function () {
    it('should return the difference of rounded numbers', function () {
      expect(calculateNumber('SUBTRACT', 5, 2)).to.equal(3);
      expect(calculateNumber('SUBTRACT', 2, 5)).to.equal(-3);
    });
  });

  describe('type DIVIDE', function () {
    it('should return the division of rounded numbers', function () {
      expect(calculateNumber('DIVIDE', 6, 2)).to.equal(3);
      expect(calculateNumber('DIVIDE', 6, 4)).to.equal(1.5);
    });

    it('should return "Error" when attempting to divide by 0', function () {
      expect(calculateNumber('DIVIDE', 6, 0)).to.equal('Error');
    });
  });

  it('should throw an error for invalid type', function () {
    expect(() => calculateNumber('INVALID_TYPE', 1, 2)).to.throw(Error);
  });
});
