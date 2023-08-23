const sinon = require('sinon');
const expect = require('chai').expect;
const sendPaymentRequestToApi = require('./5-payment.js');
const Utils = require('./utils');

describe('sendPaymentRequestToApi', function () {
  let calculateNumberStub;
  let consoleSpy;

  beforeEach(function () {
    calculateNumberStub = sinon.stub(Utils, 'calculateNumber').returns(10);
    consoleSpy = sinon.spy(console, 'log');
  });

  afterEach(function () {
    calculateNumberStub.restore();
    consoleSpy.restore();
  });

  it('should log the correct message for the first scenario', function () {
    sendPaymentRequestToApi(100, 20);

    expect(consoleSpy.calledOnceWith('The total is: 120')).to.be.true;
  });

  it('should log the correct message for the second scenario', function () {
    sendPaymentRequestToApi(10, 10);

    expect(consoleSpy.calledOnceWith('The total is: 20')).to.be.true;
  });

  it('should only call console.log once for each scenario', function () {
    sendPaymentRequestToApi(100, 20);
    sendPaymentRequestToApi(10, 10);

    expect(consoleSpy.callCount).to.equal(2);
  });
});
