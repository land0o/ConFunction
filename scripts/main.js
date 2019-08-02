// const addMultiNumbers = (first, second, third, fourth, maxNum) => {
//   const sum = first + second + third + fourth;
//   if (sum > maxNum) {
//     return 0;
//   } else {
//     return sum;
//   }
// };
// const resultOne = addMultiNumbers(1, 2, 3, 4, 5);
// console.log(resultOne);
// const resultTwo = addMultiNumbers(5, 5, 5, 5, 5);
// console.log(resultTwo);
// const resultThree = addMultiNumbers(5, 25, 900, 75, 2000);
// console.log(resultThree);

// add multiple numbers with no limit and a max value
// const addMultiNumbers = (maxNum, ...nums) => {
//   let sum = 0;
//   for (const num of nums) {
//     sum += num;
//   }
//   if (sum > maxNum) {
//     return 0;
//   } else {
//     return sum;
//   }
// };
// const resultThree = addMultiNumbers(2000, 25, 900, 75, 25);
// console.log(resultThree);

// add any number of words and return a string
const addWords = (...words) => {
  for (var word of words) {
    console.log(word);
  }
};
const sentence = "I" + " " + "love" + " " + "beer" + " " + "and food";
addWords(sentence);
