export default function iterateThroughObject(reportWithIterator) {
  let employeeNames = '';

  for (const department in reportWithIterator.allEmployees) {
    const employees = reportWithIterator.allEmployees[department];
    for (const employee of employees) {
      employeeNames += employee + ' | ';
    }
  }

  // Remove the trailing ' | '
  employeeNames = employeeNames.slice(0, -3);

  return employeeNames;
}
