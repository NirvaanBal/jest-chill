import { capitalize } from './index';

test('capitalize string', () => {
  expect(capitalize('nirvaan')).toBe('Nirvaan');
  expect(capitalize('this is a string')).toBe('This is a string');
  expect(capitalize('')).toBeFalsy();
  expect(capitalize(1)).toBeFalsy();
});
