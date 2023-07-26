function sumOfPositiveNumbers(numbersArray) {
  let sum = 0;
  for (let i = 0; i < numbersArray.length; i++) {
    if (numbersArray[i] > 0) {
      sum += numbersArray[i];
    }
  }
  return sum;
}
const numbers = [2, -5, 10, -3, 7] ;
const positiveSum = sumOfPositiveNumbers(numbers);
console.log("Sum of positive numbers:", positiveSum);