import { actionWrapper } from '../utils/actionWrapper.js';
import { getDir } from '../utils/getDir.js';

export const cd = (args) => {
  const dir = getDir(args);
  actionWrapper(() => {
    process.chdir(dir);
  });
};
