const isPermutation = require('./');

const table = [
  ['abcd', 'badc', true],
  ['dog', 'god', true],
  ['d', 'd', true],
  ['three', 'tree', false],
  ['', 'hello', false],
  ['x', 'c', false],
];

describe.each(table)(
  'isPermutation(%s, %s)',
  (a, b, expected) => {
    test(`returns ${expected}`, () => {
      expect(isPermutation(a, b)).toBe(expected);
    });
  }
);