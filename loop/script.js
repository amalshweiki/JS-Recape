///ex.1
const array = [1, 2, 3, 4];
let sum = 0;
for (let i = 0; i < array.length; i++) {
  sum += array[i];
}
console.log(sum);
//ex.2
const array1 = [1, 3, 4];

function missingValue(array) {
  for (let i = 1; i <= array.length + 1; i++) {
    if (array.indexOf(i) === -1) return i;
  }
}
console.log(missingValue(array1));
