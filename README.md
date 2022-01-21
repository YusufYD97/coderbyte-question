### Q1) Two Sum

    Have the function TwoSum(arr) take the array of integers stored in arr, and determine if any two numbers (excluding the first element) in the array can sum up to the first element in the array. For example: if arr is [7, 3, 5, 2, -4, 8, 11], then there are actually two pairs that sum to the number 7: [5, 2] and [-4, 11]. Your program should return all pairs, with the numbers separated by a comma, in the order the first number appears in the array. Pairs should be separated by a space. So for the example above, your program would return: 5,2 -4,11

    If there are no two numbers that sum to the first element in the array, return -1

    Examples:

```
   Input: [17, 4, 5, 6, 10, 11, 4, -3, -5, 3, 15, 2, 7]
   Output: 6,11 10,7 15,2
```

```
    Input: [7, 6, 4, 1, 7, -2, 3, 12]
    Output: 6,1 4,3
```

---

### Q2) Simple Mode

Have the function SimpleMode(arr) take the array of numbers stored in arr and return the number that appears most frequently (the mode). For example: if arr contains [10, 4, 5, 2, 4] the output should be 4. If there is more than one mode return the one that appeared in the array first (ie. [5, 10, 10, 6, 5] should return 5 because it appeared first). If there is no mode return -1. The array will not be empty.

Examples:

```
Input: [5,5,2,2,1]
Output: 5
```

```
Input: [3,4,1,6,10]
Output: -1
```
