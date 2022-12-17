// copyFile и так копирует стримами, так что велосипед изобретать не нужно (мы это ещё на 1м стейдже обсуждали в стриме, ссылка на видео https://youtu.be/mU257a8ln_o?t=5496)

import { copyFile } from 'fs/promises';
import { resolve, parse } from 'path';
import { actionWrapper } from '../utils/actionWrapper.js';

export const cp = ([currentFile, targetDir]) => {
  actionWrapper(async () => {
    const { base } = parse(currentFile);
    await copyFile(resolve(currentFile), resolve(targetDir, base));
    console.info(`Copy successfully\n`);
  });
};
