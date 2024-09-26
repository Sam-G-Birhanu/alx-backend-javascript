const fs = require('fs');

function countStudents(path) {
    try {
        // Read the CSV file synchronously
        const data = fs.readFileSync(path, 'utf-8');

        // Split file data by line and filter out empty lines
        const lines = data.split('\n').filter((line) => line.trim() !== '');

        if (lines.length === 0) {
            throw new Error('Cannot load the database');
        }

        // Extract the header (first line) and the remaining lines (students data)
        const header = lines[0].split(',');
        const students = lines.slice(1);

        const totalStudents = students.length;

        console.log(`Number of students: ${totalStudents}`);

        const fields = {};

        // Loop over each student record
        students.forEach((student) => {
            const studentData = student.split(',');

            const firstname = studentData[0];
            const field = studentData[3];

            // Group students by field of study
            if (!fields[field]) {
                fields[field] = [];
            }
            fields[field].push(firstname);
        });

        // Log the number of students in each field and the list of first names
        for (const [field, names] of Object.entries(fields)) {
            console.log(`Number of students in ${field}: ${names.length}. List: ${names.join(', ')}`);
        }
    } catch (error) {
        throw new Error('Cannot load the database');
    }
}

module.exports = countStudents;
