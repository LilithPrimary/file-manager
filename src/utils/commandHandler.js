import { add } from '../actions/add.js';
import { cat } from '../actions/cat.js';
import { cd } from '../actions/cd.js';
import { compress } from '../actions/compress.js';
import { cp } from '../actions/cp.js';
import { decompress } from '../actions/decompress.js';
import { hash } from '../actions/hash.js';
import { ls } from '../actions/ls.js';
import { mv } from '../actions/mv.js';
import { os } from '../actions/os.js';
import { rm } from '../actions/rm.js';
import { rn } from '../actions/rn.js';
import { up } from '../actions/up.js';
import { INVALID_INPUT_ERROR_MSG } from '../const/INVALID_INPUT_ERROR_MSG.js';
import { showCurrentDir } from './showCurrentDir.js';

export const commandHandler = (command, args) => {
  switch (command) {
    case 'up':
      up();
      break;
    case 'cd':
      cd(args);
      break;
    case 'ls':
      ls();
      break;
    case 'cat':
      cat(args);
      break;
    case 'add':
      add(args);
      break;
    case 'rn':
      rn(args);
      break;
    case 'cp':
      cp(args);
      break;
    case 'mv':
      mv(args);
      break;
    case 'rm':
      rm(args);
      break;
    case 'hash':
      hash(args);
      break;
    case 'compress':
      compress(args);
      break;
    case 'decompress':
      decompress(args);
      break;
    case 'os':
      os(args);
      break;
    default:
      console.error(INVALID_INPUT_ERROR_MSG);
      showCurrentDir();
  }
};
