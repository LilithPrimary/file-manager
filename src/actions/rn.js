import { rename } from 'fs/promises';
import { resolve, parse } from 'path';
import { actionWrapper } from '../utils/actionWrapper.js';

export const rn = ([currentName, targetName]) => {
  actionWrapper(async () => {
    const { dir } = parse(currentName);
    await rename(resolve(currentName), resolve(dir, targetName));
    console.info(`Rename successfully`);
  });
};
