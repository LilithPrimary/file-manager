import { cd } from '../actions/cd.js';
import { ls } from '../actions/ls.js';
import { up } from '../actions/up.js';
import { INVALID_INPUT_ERROR_MSG } from '../const/INVALID_INPUT_ERROR_MSG.js';
import { showCurrentDir } from './showCurrentDir.js';

export const commandHandler = (command, args) => {
  switch (command) {
    case 'up':
      up();
      break;
    case 'cd':
      cd(...args);
      break;
    case 'ls':
      ls();
      break;
    default:
      console.error(INVALID_INPUT_ERROR_MSG);
      showCurrentDir();
  }
};
