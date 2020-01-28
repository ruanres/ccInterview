const isUnique = require('./isUnique');

const table = [
  ['abcd', true],
  ['banana', false],
  ['x', true],
  ['', true],
  ['axa', false],
];

describe.each(table)(
  'isUnique(%s)',
  (a, expected) => {
    test(`returns ${expected}`, () => {
      expect(isUnique(a)).toEqual(expected);
    });
  }
);