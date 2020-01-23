const sum = require('./f');

const table = [
  [1, 2, 3],
  [2, 2, 4],
  [4, 2, 6],
  [0, 2, 2],
];

describe.each(table)(
  'sum(%i, %i)',
  (a, b, expected) => {
    test(`returns ${expected}`, () => {
      expect(sum(a, b)).toBe(expected);
    });
  }
);
