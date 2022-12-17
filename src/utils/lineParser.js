import { commandHandler } from './commandHandler.js';
import { getProperArgs } from './getProperArgs.js';

export const lineParser = (line) => {
  const [command, ...args] = line.split(' ');

  commandHandler(command, getProperArgs(args));
};
