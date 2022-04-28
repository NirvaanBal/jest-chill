import {
  capitalize,
  reverse,
  calculator,
  caesarCipher,
  analyzeArray,
} from './index';

test('capitalize string', () => {
  expect(capitalize('nirvaan')).toBe('Nirvaan');
  expect(capitalize('this is a string')).toBe('This is a string');
  expect(capitalize('')).toBeFalsy();
  expect(capitalize(1)).toBeFalsy();
});

test('reverse string', () => {
  expect(reverse('nirvaan')).toBe('naavrin');
  expect(reverse('this is a string')).toBe('gnirts a si siht');
});

test('calculator object', () => {
  expect(calculator.add(1, 1)).toBe(2);
  expect(calculator.sub(1, 1)).toBe(0);
  expect(calculator.div(1, 1)).toBeCloseTo(1);
  expect(calculator.div(1, 0)).toBeFalsy();
  expect(calculator.div(0, 1)).toBe(0);
  expect(calculator.div(10, 3)).toBeCloseTo(3.33);
  expect(calculator.mul(1, 1)).toBe(1);
});

test('cipher text', () => {
  expect(caesarCipher('nirvaan')).toBe('ojswbbo');
  expect(caesarCipher('zEbRa cRoSSinG')).toBe('aFcSb dSpTTjoH');
  expect(caesarCipher('Alas!')).toBe('Bmbt!');
});

test('analyze array', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
