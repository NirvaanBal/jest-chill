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

const alphabet = (() => {
  const alphabetL = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetU = alphabetL.toUpperCase();

  return {
    alphabetL,
    alphabetU,
  };
})();

const findLetter = (letter, aL, aU) => {
  const indexL = aL.indexOf(letter);
  const indexU = aU.indexOf(letter);
  if (indexL !== -1) return { indexL: indexL + 1 };
  else if (indexU !== -1) return { indexU: indexU + 1 };
  return -1;
};

export const caesarCipher = (str) => {
  const alphabetL = alphabet.alphabetL;
  const alphabetU = alphabet.alphabetU;

  let cipher = '',
    index = -1;
  for (let i = 0; i < str.length; i++) {
    index = findLetter(str[i], alphabetL, alphabetU);

    if (index === -1) {
      cipher += str[i];
      continue;
    }

    if (index.indexL) {
      if (index.indexL === 26) cipher += 'a';
      else cipher += alphabetL[index.indexL];
    } else if (index.indexU) {
      if (index.indexU === 26) cipher += 'A';
      else cipher += alphabetU[index.indexU];
    }
  }

  return cipher;
};

export const analyzeArray = (array) => {
  return {
    average: array.reduce((acc, cur) => acc + cur, 0) / array.length,
    min: Math.min(...new Set(array)),
    max: Math.max(...new Set(array)),
    length: array.length,
  };
};
