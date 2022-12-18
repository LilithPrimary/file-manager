import { createReadStream } from 'fs';
import { resolve } from 'path';

import { actionWrapper } from '../utils/actionWrapper.js';
import { isFileExist } from '../utils/isFileExist.js';

export const cat = ([file]) => {
  actionWrapper(
    () =>
      new Promise(async (res, rej) => {
        const path = resolve(file);

        await isFileExist(path).catch(rej);

        const read = createReadStream(path);

        read.on('data', (chunk) => {
          process.stdout.write(chunk);
        });

        read.on('end', () => {
          process.stdout.write('\n\n');
          res();
        });

        read.on('error', rej);
      })
  );
};
