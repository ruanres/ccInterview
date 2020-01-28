
const isUnique = str => {
  const charCount = {};

  for (const char of str) {
    if (charCount[char]) {
      return false;
    }
    charCount[char] = 1;
  }
  return true;
}

module.exports = isUnique;