import { getPathWithoutQuots } from './pathNormalize/getPathWithoutQuots.js';

export const getProperArgs = (args) => {
  if (typeof args === 'string') {
    return [args];
  }

  if (!args.length) {
    return [''];
  }

  if (args.length === 1) {
    const path = args[0];

    if (path.length === 2 && path[1] === ':') {
      return [`${path}/`];
    }

    return args;
  }

  const strArgs = args.join(' ');

  let str = strArgs.includes('"')
    ? strArgs
        .split('')
        .map((el) => (el === '"' ? "'" : el))
        .join('')
    : strArgs;

  if (str.includes("'")) {
    return getPathWithoutQuots(str);
  }

  return str.split(' ');
};
