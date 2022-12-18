import { open } from 'fs/promises';
import { join } from 'path';
import { cwd } from 'process';

import { actionWrapper } from '../utils/actionWrapper.js';

export const add = ([file]) => {
  actionWrapper(async () => {
    const newFile = await open(join(cwd(), file), 'ax');
    newFile.close();
    console.info(`File "${file}" is successfully created`);
  });
};
