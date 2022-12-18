import { EOL as eolInfo } from 'os';

export const eol = () => {
  console.log(JSON.stringify(eolInfo));
};
