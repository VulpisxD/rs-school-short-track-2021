/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
 function deleteDigit(n) {
  const num = Math.min(...n.toString().split('').map(Number));
  const minIndex = n.toString().split('').indexOf(String(num));
  return +n
    .toString()
    .split('')
    .filter((elem, index) => minIndex !== index)
    .join('');
}

module.exports = getDNSStats;
