const express = require('express');
const students = require('./3-read_file_async');

const app = express();
const hostname = '127.0.0.1';
const port = 1245;

// Route for the root URL
app.get('/', (req, res) => {
  res.status(200).send('Hello Holberton School!');
});

// Route for the /students URL
app.get('/students', async (req, res) => {
  try {
    const data = await students(process.argv[2]); // Call the students function
    const response = [
      'This is the list of our students',
      `Number of students: ${data.students.length}`,
      `Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}`,
      `Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}`
    ].join('\n');
    res.status(200).send(response);
  } catch (err) {
    // Check for a specific error to handle the case of a missing database
    if (err.message.includes('ENOENT')) { // File not found error
      res.status(500).send(`This is the list of our students\nCannot load the database`);
    } else {
      res.status(500).send(err.message); // General error message
    }
  }
});

// Start the server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
