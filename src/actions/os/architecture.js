import { arch } from 'os';

export const architecture = () => {
  console.info(arch());
};
