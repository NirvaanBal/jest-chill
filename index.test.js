import { capitalize, reverse } from './index';

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
