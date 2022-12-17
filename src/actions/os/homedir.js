import { homedir as hd } from 'os';

export const homedir = () => {
  console.info(hd());
};
