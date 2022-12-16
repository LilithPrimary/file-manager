import { cd } from './cd.js';

export const up = () => {
  console.log('up');
  cd('..');
};
