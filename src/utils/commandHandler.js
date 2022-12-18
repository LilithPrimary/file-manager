import {
  add,
  cat,
  cd,
  compress,
  cp,
  decompress,
  hash,
  ls,
  mv,
  os,
  rm,
  rn,
  up,
} from '../actions/index.js';
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
