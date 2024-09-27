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
  res.status(200).send('This is the list of our students\n');
  try {
    const data = await students(process.argv[2]); // Call the students function
    res.write(`Number of students: ${data.students.length}\n`);
    res.write(`Number of students in CS: ${data.csStudents.length}. List: ${data.csStudents.join(', ')}\n`);
    res.write(`Number of students in SWE: ${data.sweStudents.length}. List: ${data.sweStudents.join(', ')}\n`);
    res.end(); // End the response after writing all data
  } catch (err) {
    res.status(500).send(err.message); // Send error message and set status code
  }
});

// Start the server
app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});

module.exports = app;
