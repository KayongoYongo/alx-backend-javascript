/*This function returns an array of ids in a function
 *
 *
 *
 *
 *return: array of ids
 */
export default function getListStudentIds(array) {
  if (Array.isArray(array)) {
    return array.map(item => item.id);;
  } else {
    return [];
  }
}
