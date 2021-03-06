/*
  Simple Mode

  Have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty.
  
  Examples:
  Input: [5,5,2,2,1]
  Output: 5
  
  Input: [3,4,1,6,10]
  Output: -1
*/
function SimpleMode(arr) {
  const modesObj = {};

  for (let i = 0; i < arr.length; i++) {
    if (modesObj[arr[i]] === undefined) {
      modesObj[arr[i]] = 1;
    } else {
      modesObj[arr[i]] += 1;
    }
  }

  return Object.values(modesObj).every((item) => item === 1)
    ? -1
    : Object.keys(modesObj).reduce((a, b) =>
        modesObj[a] > modesObj[b] ? a : b
      );

  // yukardaki return ile ayni
  // if (Object.values(modesObj).every((item) => item === 1)) {
  //  return -1;
  // } else {
  //  return Object.keys(modesObj).reduce((a, b) => modesObj[a] > modesObj[b] ? a : b);
  // }
}
