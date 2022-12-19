import { createReadStream } from 'fs';
import { resolve } from 'path';

import { actionWrapper } from '../utils/actionWrapper.js';
import { isFileExist } from '../utils/isFileExist.js';

export const cat = ([file]) => {
  actionWrapper(
    async () =>
      new Promise(async (res, rej) => {
        try {
          const path = resolve(file);

          await isFileExist(path);

          const read = createReadStream(path);

          read.pipe(process.stdout).on('error', rej);

          read.on('end', () => {
            process.stdout.write('\n\n');
            res();
          });
        } catch (err) {
          rej(err);
        }
      })
  );
};
