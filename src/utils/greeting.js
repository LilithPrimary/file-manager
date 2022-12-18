import { toHomeDir } from '../actions/toHomeDir.js';
import { actionWrapper } from './actionWrapper.js';

export const greeting = (userName) => {
  console.log(`Welcome to the File Manager, ${userName}!`);
  toHomeDir();
};
