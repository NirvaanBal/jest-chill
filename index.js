export const capitalize = (string) => {
  if (!string || typeof string !== 'string') return false;
  return string[0].toUpperCase() + string.slice(1);
};

export const reverse = (string) => {
  return string.split('').reverse().join('');
};

export const calculator = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  div: (a, b) => {
    if (b === 0) return false;
    if (a === 0) return 0;
    return a / b;
  },
  mul: (a, b) => a * b,
};
