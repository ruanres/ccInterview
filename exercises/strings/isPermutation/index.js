/**
 * Check Permutation: Given two strings,write a method
 * to decide if one is a permutation of the other.
 */

const isPermutation = (firstWord, secondWord) => {
  if (firstWord.length !== secondWord.length) return false;

  const getCharMap = word => word.split('').reduce((charMap, char) => {
    charMap[char] = charMap[char] + 1 || 1;
    return charMap;
  }, {});

  const firstMap = getCharMap(firstWord);
  const secondMap = getCharMap(secondWord);
  return Object.keys(firstMap).every(firstWordChar => {
    return firstMap[firstWordChar] === secondMap[firstWordChar];
  })
};

module.exports = isPermutation;
