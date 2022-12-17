import { resolve, parse } from 'path';
import { createBrotliDecompress } from 'zlib';
import { createWriteStream, createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

import { actionWrapper } from '../utils/actionWrapper.js';

export const decompress = ([currentFile, targetDir]) => {
  actionWrapper(async () => {
    const { name } = parse(currentFile);
    const input = createReadStream(resolve(currentFile));
    const output = createWriteStream(resolve(targetDir, name));
    const comp = createBrotliDecompress();
    await pipeline(input, comp, output);
  });
};
