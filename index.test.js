import { capitalize, reverse, calculator } from './index';

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
  expect(calculator.add(1, 1)).toEqual(2);
  expect(calculator.sub(1, 1)).toEqual(0);
  expect(calculator.div(1, 1)).toBeCloseTo(1);
  expect(calculator.div(1, 0)).toBeFalsy();
  expect(calculator.div(0, 1)).toEqual(0);
  expect(calculator.div(10, 3)).toBeCloseTo(3.33);
  expect(calculator.mul(1, 1)).toEqual(1);
});
