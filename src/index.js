import { EXIT_COMMAND } from './const/EXIT_COMMAND.js';
import { farewell } from './utils/farewell.js';
import readline from 'readline';
import { getUserName } from './utils/getUserName.js';
import { greeting } from './utils/greeting.js';
import { lineParser } from './utils/lineParser.js';
import { trimString } from './utils/trimString.js';

const fileManager = () => {
  const rawName = process.argv[2];
  const userName = getUserName(rawName);

  greeting(userName);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.on('line', (line) => {
    console.log('');
    if (trimString(line) === EXIT_COMMAND) {
      r1.close();
    }
    lineParser(trimString(line));
  });

  rl.on('close', () => {
    farewell(userName);
  });
};

fileManager();
