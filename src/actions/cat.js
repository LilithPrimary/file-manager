import { createReadStream } from 'fs';
import { join } from 'path';
import { cwd } from 'process';

import { actionWrapper } from '../utils/actionWrapper.js';
import { isFileExist } from '../utils/isFileExist.js';

export const cat = ([file]) => {
  actionWrapper(
    async () =>
      new Promise(async (res, rej) => {
        try {
          await isFileExist(join(cwd(), file));

          const read = createReadStream(join(cwd(), file));

          read.on('data', (chunk) => {
            process.stdout.write(chunk);
          });

          read.on('end', () => {
            process.stdout.write('\n\n');
            res();
          });

          read.on('error', (err) => {
            rej(err);
          });
        } catch (err) {
          rej(err);
        }
      })
  );
};
