import { resolve } from 'path';

import { actionWrapper } from '../utils/actionWrapper.js';
import { isFileExist } from '../utils/isFileExist.js';

export const cd = ([path]) => {
  actionWrapper(async () => {
    const dir = resolve(path);
    await isFileExist(dir);
    process.chdir(path);
  });
};
