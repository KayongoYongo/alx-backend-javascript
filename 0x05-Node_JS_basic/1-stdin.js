const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('Welcome to Holberton School, what is your name?');

// Prompt the user for input
rl.question('Enter your name: ', (name) => {
  console.log(`Your name is: ${name}`);
  rl.close();
});
