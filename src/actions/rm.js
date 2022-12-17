import { rm as removeFile } from 'fs/promises';
import { resolve } from 'path';
import { actionWrapper } from '../utils/actionWrapper.js';

export const rm = ([file]) => {
  actionWrapper(async () => {
    await removeFile(resolve(file));
    console.info(`File is successfully delete\n`);
  });
};
