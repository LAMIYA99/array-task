let nums1 = [2, 3, 4, 3, 5, 6, 8, 10, 18];
function getArraySum(list) {
  let total = 0;
  for (let val of list) {
    total += val;
  }
  return total;
}
console.log(getArraySum(nums1));


let nums2 = [3, 7, 2, 9, 1];
function findMaxValue(numbers) {
  return numbers.reduce((max, current) => current > max ? current : max);
}
console.log(findMaxValue(nums2));


let nums3 = [3, 8, 2, 9, 1, 6, 8, 9, 345, 123, 213, 334, 5342];
function reverseList(list) {
  return [...list].reverse();
}
console.log(reverseList(nums3));


let nums4 = [1, 2, 3, 4, 5, 6];
function getEvenNumbers(arr) {
  return arr.filter(x => x % 2 === 0);
}
console.log(getEvenNumbers(nums4));


let person = { name: "Ali", age: 25, city: "Baku", prof: "dev" };
function countKeys(obj) {
  console.log(Object.keys(obj).length);
}
countKeys(person);


let mixedValues = { a: 10, b: "salam", c: 20, d: 30 };
function sumNumericProps(obj) {
  return Object.values(obj)
    .filter(val => typeof val === "number")
    .reduce((sum, num) => sum + num, 0);
}
console.log(sumNumericProps(mixedValues));


let nums5 = [1, 2, 3, 3, 4, 5, 6, 6, 8, 8, 9, 10, 11, 12, 12, 13, 14];
function removeDuplicates(list) {
  return Array.from(new Set(list));
}
console.log(removeDuplicates(nums5));


let listA = [1, 2, 3, 4, 5, 6];
let listB = [2, 5, 6, 9, 10, 23];
function findCommonElements(a, b) {
  let common = a.filter(x => b.includes(x));
  console.log(common);
}
findCommonElements(listA, listB);


let nums6 = [1, 2, 3, 4, 5];
function splitEvenOdd(arr) {
  let even = arr.filter(x => x % 2 === 0);
  let odd = arr.filter(x => x % 2 !== 0);
  console.log(even);
  console.log(odd);
}
splitEvenOdd(nums6);


function makeFibonacci(n) {
  if (n <= 0) return [];
  if (n === 1) return [0];
  let fib = [0, 1];
  while (fib.length < n) {
    fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
  }
  return fib;
}
console.log(makeFibonacci(6));


let obj1 = { a: 1, b: 2 };
let obj2 = { b: 3, c: 4 };
function mergeObjects(o1, o2) {
  let merged = { ...o1, ...o2 };
  console.log(merged);
}
mergeObjects(obj1, obj2);


let nums7 = [0, 1, 0, 3, 12];
function moveZerosToEnd(arr) {
  let withoutZero = arr.filter(x => x !== 0);
  let zeroCount = arr.length - withoutZero.length;
  return [...withoutZero, ...Array(zeroCount).fill(0)];
}
console.log(moveZerosToEnd(nums7));
