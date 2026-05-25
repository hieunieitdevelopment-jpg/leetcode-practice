/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    const n = nums.length;
    if (n == 0 || n == 1) {
        return n;
    }
    let i = 1;
    let j = 1;
    while (j < n) {
        if (nums[j] != nums[j - 1]) {
            nums[i] = nums[j];
            i++;
        }
        j++;
    }
    return i;
};

const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];

const k = removeDuplicates(nums);

console.log("k = ", k);

const uniqueNums = nums.slice(0, k);
console.log("nums =", uniqueNums);
