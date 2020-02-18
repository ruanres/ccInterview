/**
 * Palindrome Permutation
 * hint: each letter must have a pair
 * hint: at most there will be a single letter that is unique
 * */
const isPalinPermut = input => {
  const noSpaceWord = input.replace(/\s/g, '')
  const lettersCountMap = Array.from(noSpaceWord).reduce((count, letter) => {
    count[letter] = count[letter] + 1 || 1;
    return count;
  }, {});

  const lettersCounts = Object.values(lettersCountMap);
  let oddLetters = 0;

  for (count of lettersCounts) {
    if (count % 2 != 0) {
      oddLetters += 1;
      if (oddLetters > 1) return false;
    }
  }

  return true;
};

module.exports = isPalinPermut;
