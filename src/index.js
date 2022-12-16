import { EXIT_COMMAND } from './const/EXIT_COMMAND.js';
import { farewell } from './utils/farewell.js';
import { getUserName } from './utils/getUserName.js';
import { greeting } from './utils/greeting.js';
import { lineParser } from './utils/lineParser.js';
import { trimString } from './utils/trimString.js';

const fileManager = () => {
  const rawName = process.argv[2];
  const userName = getUserName(rawName);

  greeting(userName);

  process.stdin.on('data', (chunk) => {
    if (trimString(chunk) === EXIT_COMMAND) {
      process.exit();
    }

    lineParser(trimString(chunk));
  });

  // process.on('exit', () => {
  //   farewell(userName);
  //   process.exit();
  // });

  // process.on('SIGINT', () => {
  //   process.exit();
  // });
};

fileManager();
