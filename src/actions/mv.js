import { rm } from 'fs/promises';
import { resolve, parse } from 'path';
import { actionWrapper } from '../utils/actionWrapper.js';
import { copyFileByStreams } from '../utils/copyFileByStreams.js';

export const mv = ([currentFile, targetDir]) => {
  actionWrapper(async () => {
    const path = resolve(currentFile);
    const { base } = parse(currentFile);
    await copyFileByStreams(path, resolve(targetDir, base));
    await rm(path);
    console.info(`Move successfully`);
  });
};
