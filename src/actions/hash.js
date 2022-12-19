import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { resolve } from 'path';
import { actionWrapper } from '../utils/actionWrapper.js';
import { isFileExist } from '../utils/isFileExist.js';

export const hash = ([file]) => {
  actionWrapper(
    () =>
      new Promise(async (res, rej) => {
        try {
          const path = resolve(file);

          await isFileExist(path);

          const read = createReadStream(path);
          const hash = createHash('sha256');

          read
            .pipe(hash.setEncoding('hex'))
            .pipe(process.stdout)
            .on('error', rej);

          hash.on('end', () => {
            console.log('');
            res();
          });
        } catch (err) {
          rej(err);
        }
      })
  );
};
