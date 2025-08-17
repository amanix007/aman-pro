// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.



// Example 1:

// Input: nums = [-1,0,3,5,9,12], target = 9

// Output: 4
// Explanation: 9 exists in nums and its index is 4
// Example 2:

// Input: nums = [-1,0,3,5,9,12], target = 2
// Output: -1
// Explanation: 2 does not exist in nums so return -1


// Constraints:

// 1 <= nums.length <= 104
// -104 < nums[i], target < 104
// All the integers in nums are unique.
// nums is sorted in ascending order.


// [1,2,3,4,5,7,8,9]

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
/**
steps
make a recursive function which do a binary search based on given 
array, target and leftIndex and rightIndex 
inside the recusive function 
if the leftIndex is greater than rigthIndex return -1;
get the middle index, 
if the middle ITEM is target ITEM return middleIndex; 
if the target is less then middle ITEM 
seach in the left section
Left section search search(arr, target, leftIndex, middleIndex-1)
if the target is greater then the middle item 
Right section search search(arr, target, middleIndex+1, rightIndex)
search right section
*/
var recursiveSearch = function(nums, target) {

  let search = (arr, target, leftIndex, rightIndex) => {
    if (leftIndex > rightIndex) {
      return -1
    }
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (target === arr[middleIndex]) {
      return middleIndex;
    }
    if (arr[middleIndex] > target) {
      return search(arr, target, leftIndex, middleIndex - 1)
    } else {
      return search(arr, target, middleIndex + 1, rightIndex)
    }
  }

  return search(nums, target, 0, nums.length - 1)
};


console.log(recursiveSearch([-1, 0, 3, 5, 9, 12], 9))



