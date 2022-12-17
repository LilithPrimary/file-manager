import { cwd } from 'process';

export const showCurrentDir = () => {
  console.info(`\nYou are currently in: ${cwd()}\n`);
  process.stdout.write('> ');
};
