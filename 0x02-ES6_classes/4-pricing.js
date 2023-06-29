import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    this._amount = this.validateNumber(amount);
    this._currency = this.validateCurrency(currency);
  }

  // Getter and setter for 'amount'
  get amount() {
    return this._amount;
  }

  set amount(newAmount) {
    this._amount = this.validateNumber(newAmount);
  }

  // Getter and setter for 'currency'
  get currency() {
    return this._currency;
  }

  set currency(newCurrency) {
    this._currency = this.validateCurrency(newCurrency);
  }

  // Method to display the full price in the specified format
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert the price using a conversion rate
  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }

  // Helper function to validate number type
  validateNumber(value) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new TypeError('Amount must be a number');
    }
    return value;
  }

  // Helper function to validate Currency instance
  validateCurrency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    return value;
  }
}
