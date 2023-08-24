const { expect } = require('chai');
const { getPaymentTokenFromAPI } = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with data on success', async () => {
    const response = await getPaymentTokenFromAPI(true);
    expect(response).to.deep.equal({ data: 'Successful response from the API' });
  });

  it('should return an unresolved promise on failure', async () => {
    const response = await getPaymentTokenFromAPI(false);
    expect(response).to.be.undefined;
  });
});
