const urlify = require('./');

const table = [
  ['a c d', 'a%20c%20d'],
  ['a  d', 'a%20%20d'],
  ['a ', 'a%20'],
  ['a', 'a'],
  [' a', '%20a'],
  [' c  ', '%20c%20%20'],
];

describe.each(table)(
  'urlify(%s)',
  (a, expected) => {
    test(`returns ${expected}`, () => {
      expect(urlify(a)).toBe(expected);
    });
  }
);