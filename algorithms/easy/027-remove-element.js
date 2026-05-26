// 027. Remove Element
// Difficulty: Easy
// Date: 2026-05-25

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[i] = nums[j]
            i++;
        }
    }
    return i;
}
const nums = [3, 2, 2, 3];
const val = 3;

const k = removeElement(nums, val);
const validNums = nums.slice(0, k);
const arrayString = "[" + validNums.join(",") + "]";

console.log(`Output:k = ${k}, nums = ${arrayString}`);



