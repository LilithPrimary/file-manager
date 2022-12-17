import { cpus as cpusInfo } from 'os';

export const cpus = () => {
  const info = cpusInfo().map(({ model, speed }) => ({
    model,
    speed: `${(speed / 1000).toFixed(2)}GHz`,
  }));
  console.table(info);
};
