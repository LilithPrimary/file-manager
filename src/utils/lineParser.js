import { commandHandler } from './commandHandler.js';

export const lineParser = (line) => {
  console.log('line parser');
  const [command, ...args] = line.split(' ');
  commandHandler(command, args);
};
