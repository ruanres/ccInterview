const isUnique = require('./isUnique');

const table = [
  ['abcd', true],
  ['bnanab', false],
  ['x', true],
  ['xa', true],
  ['xax', true],
];

describe.each(table)(
  'isUnique(%s)',
  (a, expected) => {
    test(`returns ${expected}`, () => {
      expect(isUnique(a)).toBe(expected);
    });
  }
);