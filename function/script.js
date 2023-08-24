let sum = 0;

function add(num1, num2) {
  sum = num1 + num2;
  return sum;
}

function multiplySum(sum, factor) {
  return sum * factor;
}
add(2, 3);
console.log(multiplySum(sum, 2));
