export default function taskBlock(trueOrFalse) {
  var task = false;
  var task2 = true;

  /* eslint-disable no-unused-vars */
  if (trueOrFalse) {
    const task = true;
    const task2 = false;
  }
  /* eslint-enable no-unused-vars */

  return [task, task2];
}
