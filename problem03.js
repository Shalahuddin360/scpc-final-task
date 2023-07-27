// Write a JavaScript program to find the most frequent element in an array and return it
function findMostFrequentElement(arr) {
  const frequencyMap = {};


  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    frequencyMap[element] = (frequencyMap[element] || 0) + 1;
  }

  let mostFrequentElement;
  let maxFrequency = 0;

  
  for (const element in frequencyMap) {
    if (frequencyMap[element] > maxFrequency) {
      mostFrequentElement = element;
      maxFrequency = frequencyMap[element];
    }
  }

  return mostFrequentElement;
}


const array = [3, 5, 2, 5, 3, 3, 1, 4, 5]; 
const mostFrequent = findMostFrequentElement(array);
console.log("Most frequent element:", mostFrequent); 