import { commandHandler } from './commandHandler.js';

export const lineParser = (line) => {
  const [command, ...args] = line.split(' ');
  commandHandler(command, args);
};
