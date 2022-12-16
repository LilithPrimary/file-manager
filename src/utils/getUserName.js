import { DEFAULT_USER_NAME } from '../const/DEFAULT_USER_NAME.js';

export const getUserName = (rawName) => {
  if (!rawName) {
    return DEFAULT_USER_NAME;
  }
  return rawName.split('=')[1] || DEFAULT_USER_NAME;
};
