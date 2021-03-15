/**
 * Функция, возвращающая сумму двух чисел
 *
 * @param {Number} a - первое число
 * @param {Number} b - второе целое
 * @return {Number} сумма чисел a и b
 */
export function sum(a, b) {
  if(typeof(a) && typeof(b) === "number")
     return a + b;
  else
     return "You'r need enter a number!";
}
