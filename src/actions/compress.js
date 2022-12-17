import { resolve, parse } from 'path';
import { createBrotliCompress } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

import { actionWrapper } from '../utils/actionWrapper.js';

export const compress = ([currentFile, targetDir]) => {
  actionWrapper(async () => {
    const { base } = parse(currentFile);
    const input = createReadStream(resolve(currentFile));
    const output = createWriteStream(resolve(targetDir, `${base}.br`));
    const comp = createBrotliCompress();
    await pipeline(input, comp, output);
  });
};
