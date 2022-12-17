import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { resolve } from 'path';
import { actionWrapper } from '../utils/actionWrapper.js';
import { isFileExist } from '../utils/isFileExist.js';

export const hash = ([file]) => {
  actionWrapper(
    () =>
      new Promise(async (res, rej) => {
        const path = resolve(file);

        await isFileExist(path).catch(rej);

        const read = createReadStream(path);
        const hash = createHash('sha256');

        read.on('data', (chunk) => {
          hash.update(chunk);
        });

        read.on('end', () => {
          console.log('\n', hash.digest('hex'), '\n');
          res();
        });

        read.on('error', rej);
      })
  );
};
