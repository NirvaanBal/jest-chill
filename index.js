export const capitalize = (string) => {
  if (!string || typeof string !== 'string') return false;
  return string[0].toUpperCase() + string.slice(1);
};

export const reverse = (string) => {
  return string.split('').reverse().join('');
};
