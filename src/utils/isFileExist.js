import { access } from 'fs/promises';

export const isFileExist = async (path) => {
  await access(path);
};
