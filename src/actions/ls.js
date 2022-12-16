import { readdir } from 'fs/promises';
import { cwd } from 'process';

import { actionWrapper } from '../utils/actionWrapper.js';

export const ls = () => {
  actionWrapper(async () => {
    const rawFiles = await readdir(cwd(), { withFileTypes: true });

    const files = rawFiles
      .reduce(
        (acc, file) => [
          ...acc,
          {
            name: file.name,
            type: file.isFile() ? 'file' : 'directory',
          },
        ],
        []
      )
      .sort((a, b) => {
        if (a.type === b.type) {
          return a.name.localeCompare(b.name);
        }
        return a.type.localeCompare(b.type);
      });

    console.table(files);
  });
};
