import { actionWrapper } from '../utils/actionWrapper.js';

export const cd = (dir) => {
  actionWrapper(() => {
    process.chdir(dir);
  });
};
