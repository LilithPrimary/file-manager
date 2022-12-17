// copyFile и так копирует стримами, так что велосипед изобретать не нужно (мы это ещё на 1м стейдже обсуждали в стриме, ссылка на видео https://youtu.be/mU257a8ln_o?t=5496)

import { copyFile, rm } from 'fs/promises';
import { resolve, parse } from 'path';
import { actionWrapper } from '../utils/actionWrapper.js';

export const mv = ([currentFile, targetDir]) => {
  actionWrapper(async () => {
    const path = resolve(currentFile);
    const { base } = parse(currentFile);
    await copyFile(path, resolve(targetDir, base));
    await rm(path);
    console.info(`Move successfully\n`);
  });
};
