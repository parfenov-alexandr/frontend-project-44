#!/usr/bin/env node
import readlineSync from 'readline-sync';
import userName from '../src/cli.js';

console.log(`Hello, ${userName}!\nAnswer "yes" if the number is even, otherwise answer "no".`);
let count = null;
const bet = () => {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer:');
  if ((number % 2 === 0) && (answer === 'yes')) {
    console.log('Correct!');
    count += 1;
  } else if ((number % 2 !== 0) && (answer === 'no')) {
    console.log('Correct!');
    count += 1;
  } else if ((number % 2 === 0) && (answer !== 'yes')) {
    console.log(`${answer} is wrong answer ;(. Correct answer was 'yes'\nLet's try again, ${userName}!`);
  } else if ((number % 2 !== 0) && (answer !== 'no')) {
    console.log(`${answer} is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${userName}!`);
  }
};
const game = () => {
  do { bet(); }
  while (count < 3);
  console.log(`Congratulations, ${userName}!`);
};
game();
