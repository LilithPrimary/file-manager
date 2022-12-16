import { cwd } from 'process';

export const showCurrentDir = () => {
  console.info(`You are currently in: ${cwd()}\n`);
  process.stdout.write('>> ');
};
