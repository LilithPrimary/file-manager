import { ERROR_MSG } from '../const/ERROR_MSG.js';
import { cwd } from 'process';
import { showCurrentDir } from './showCurrentDir.js';

export const actionWrapper = async (action) => {
  try {
    await action();
  } catch (err) {
    console.error(ERROR_MSG);
  } finally {
    showCurrentDir();
  }
};
