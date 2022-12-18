import { createWriteStream, createReadStream } from 'fs';
import { pipeline } from 'stream/promises';

export const copyFileByStreams = async (currentFile, targetFile) => {
  const input = createReadStream(currentFile);
  const output = createWriteStream(targetFile);
  await pipeline(input, output);
};
