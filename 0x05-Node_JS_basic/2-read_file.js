const fs = require('fs');

function countStudents (path) {
  try {
    const fileContent = fs.readFileSync(path, 'utf8');
    const lines = fileContent.split('\n');

    const fields = lines[0].split(',');
    const studentsByField = {};

    for (let i = 1; i < lines.length; i++) {
      const data = lines[i].split(',');
      if (data.length !== fields.length || data.some(item => item.trim() === '')) {
        continue; // Skip invalid lines
      }

      data.forEach((value, index) => {
        const field = fields[index];
        studentsByField[field] = (studentsByField[field] || 0) + 1;
      });
    }

    console.log(`Number of students: ${lines.length - 1}`);
    for (const field in studentsByField) {
      console.log(`Number of students in ${field}: ${studentsByField[field]}. List: ${fields.join(', ')}`);
    }
  } catch (error) {
    console.error('Cannot load the database');
  }
}

// Export the function
module.exports = countStudents;
