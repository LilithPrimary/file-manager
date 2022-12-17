export const getDir = (dir) => {
  if (typeof dir === 'string') {
    return dir;
  }

  if (dir.length <= 1) {
    const path = dir[0];
    if (path.length === 2 && path[1] === ':') {
      return `${path}/`;
    }
    return path;
  }

  return dir
    .join(' ')
    .split('')
    .filter((el) => ["'", '"'].includes(el))
    .join('');
};
