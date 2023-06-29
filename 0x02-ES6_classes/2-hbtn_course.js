export default class HolbertonCourse {
  constructor(name, length, students) {
    this._name = this.validateString(name);
    this._length = this.validateNumber(length);
    this._students = this.validateArray(students);
  }

  // Getter and setter for 'name'
  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = this.validateString(newName);
  }

  // Getter and setter for 'length'
  get length() {
    return this._length;
  }

  set length(newLength) {
    this._length = this.validateNumber(newLength);
  }

  // Getter and setter for 'students'
  get students() {
    return this._students;
  }

  set students(newStudents) {
    this._students = this.validateArray(newStudents);
  }

  // Helper function to validate string type
  validateString(value) {
    if (typeof value !== 'string') {
      throw new TypeError('Name must be a string');
    }
    return value;
  }

  // Helper function to validate number type
  validateNumber(value) {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new TypeError('Length must be a number');
    }
    return value;
  }

  // Helper function to validate array type
  validateArray(value) {
    if (!Array.isArray(value)) {
      throw new TypeError('Students must be an Array');
    }
    return value;
  }
}
