import readlineSync from 'readline-sync';

const userName = readlineSync.question(`Welcome to the Brain Games!
May I have your name? `);

export default userName;
