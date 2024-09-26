console.log('Welcome to Holberton School, what is your name?');
process.stdin.setEncoding('utf8');
process.stdin.on('readable', () => {
  const name = process.stdin.read();
  console.log('Your name is:${name}');
  process.on('SIGINT', function() {
  console.log('This important software is now closing');
});
});
