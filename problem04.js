// Create a function that takes a sorted array of numbers and a target value as input. The function should find two numbers in the array that add up to the target value. Return an array containing the indices of the two numbers.

function findTwoNumbers(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left < right) {
    const currentSum = array[left] + array[right];

    if (currentSum === target) {
      return [left, right];
    } else if (currentSum < target) {
      left++;
    } else {
      right--;
    }
  }

  return null;
}


const sortedArray = [2, 5, 7, 11, 15];
const targetValue = 9;
const result = findTwoNumbers(sortedArray, targetValue);
console.log(result);