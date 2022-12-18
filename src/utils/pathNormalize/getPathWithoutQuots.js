export const getPathWithoutQuots = (str) => {
  const namesWithSpaces = [];
  const plug = '%%%%%';
  const spacePlug = '&&&';

  const quotsIndex = str
    .split('')
    .reduce((acc, el, i) => (el === "'" ? [...acc, i] : acc), []);

  if (quotsIndex.length % 2) {
    console.log(quotsIndex);
    return [''];
  }

  while (str.includes("'")) {
    const first = str.slice(str.indexOf("'") + 1);
    const el = first.slice(0, first.indexOf("'"));
    namesWithSpaces.push(el);
    str = str.replace(`'${el}'`, plug);
  }

  while (str.includes(' ')) {
    str = str.replace(' ', spacePlug);
  }

  while (str.includes(plug)) {
    str = str.replace(plug, namesWithSpaces.shift());
  }

  return str.split(spacePlug);
};
