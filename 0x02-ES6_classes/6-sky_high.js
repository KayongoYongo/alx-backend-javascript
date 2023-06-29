import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft);
    if (typeof floors === 'number') {
      this._floors = floors;
    } else {
    throw new TypeError('floors must be a Number');
    }
  }

  // Getter for 'floors'
  get floors() {
    return this._floors;
  }

  // Override the 'evacuationWarningMessage' method
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
