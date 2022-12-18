import { actionWrapper } from '../utils/actionWrapper.js';
import { architecture } from './os/architecture.js';
import { cpus } from './os/cpus.js';
import { eol } from './os/eol.js';
import { homedir } from './os/homedir.js';
import { username } from './os/username.js';

export const os = ([cmd]) => {
  actionWrapper(() => {
    switch (cmd) {
      case '--eol':
        eol();
        break;
      case '--cpus':
        cpus();
        break;
      case '--homedir':
        homedir();
        break;
      case '--username':
        username();
        break;
      case '--architecture':
        architecture();
        break;
      default:
        return new Promise((_, rej) => rej('wrong cmd'));
    }
  });
};
