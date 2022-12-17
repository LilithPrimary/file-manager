import { ERROR_MSG } from '../const/ERROR_MSG.js';
import { cwd } from 'process';
import { showCurrentDir } from './showCurrentDir.js';

export const actionWrapper = async (action) => {
  const event = action();
  try {
    await event;
  } catch (err) {
    console.error(ERROR_MSG);
  } finally {
    showCurrentDir();
  }
};
