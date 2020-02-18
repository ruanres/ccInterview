const isPalinPermut = require('.');

const table = [
  ['a', true],
  ['bb', true],
  ['bab', true],
  ['toto', true],
  ['min nim', true],
  ['tact coa', true],
  ['pit nope', false],
  ['max', false],
  ['ma', false],
];

describe.each(table)(
  'isPalinPermut(%s)',
  (a, expected) => {
    test(`returns ${expected}`, () => {
      expect(isPalinPermut(a)).toBe(expected);
    });
  }
);