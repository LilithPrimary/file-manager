import { resolve, parse } from 'path';
import { actionWrapper } from '../utils/actionWrapper.js';
import { copyFileByStreams } from '../utils/copyFileByStreams.js';

export const cp = ([currentFile, targetDir]) => {
  actionWrapper(async () => {
    const { base } = parse(currentFile);
    await copyFileByStreams(resolve(currentFile), resolve(targetDir, base));
    console.info(`Copy successfully`);
  });
};
