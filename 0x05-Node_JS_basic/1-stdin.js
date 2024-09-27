console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf8');

// Listen for user input
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  if (name) {
    process.stdout.write(`Your name is: ${name}`);
  }
});

// Listen for the end of input
process.stdin.on('end', () => {
  console.log('This important software is now closing');
});

// Handle Ctrl + C (SIGINT) to exit the program
process.on('SIGINT', () => {
  console.log('This important software is now closing');
  process.exit(); // Explicitly exit the program
});
