/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let count = 1;
  return str.split('').reduce((acc, letter, index, arr) => {
    let res = acc;
    if (arr[index] === arr[index + 1]) {
      ++count;
      return acc;
    }
    res += `${count > 1 ? count : ''}${letter}`;
    count = 1;
    return res;
  }, '');
}

module.exports = encodeLine;
