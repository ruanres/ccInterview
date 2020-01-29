
// const isUnique = str => {
//   const charCount = {};

//   for (const char of str) {
//     if (charCount[char]) {
//       return false;
//     }
//     charCount[char] = 1;
//   }``
//   return true;
// }

// using no auxiliar data structure
const isUnique = str => {
  const codes = Array.from(str).map(char => char.charCodeAt(0))
  const result = codes.reduce((res, code) => {
    return res ^ code;
  }, 0);
  return result !== 0;
};

module.exports = isUnique;