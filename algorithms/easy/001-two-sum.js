// 001. Two Sum
// Difficulty: Easy
// Tags: Array, Hash Map
// Date: 2026-04-01

//============================================================

/**
 * đề 1 
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 * 
 * Example 1:
 * Input: nums = [2,7,11,15], target = 9
 * Output: [0,1]
 * Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
 * 
 * Example 2:
 * Input: nums = [3,2,4], target = 6
 * Output: [1,2]
 * Example 3:
 * Input: nums = [3,3], target = 6
 * Output: [0,1]
 */

//==================================

/**
 * Phân tích và cách giải 
 * Cách 1: em sử dụng 2 vòng lặp lồng nhau 
 * - với mỗi phần tử nums[i] em lòng thêm một vòng lặp để kiểm tra xem
 * các phân tử phía sau nó, xem là số nào sẽ cộng với nums[i] bằng target
 * thì sẽ trả về [i;j]
 */

//============ CODE CÁCH 1 =================

function twoSum(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                return [i, j];
            }
        }
    }
    return [];
}
console.log(twoSum([2, 7, 11, 15], 9));

/**
 * Cách 2:em dùng Hash Map
 * - với mỗi phần tử, em tính số còn thiếu (complement = target - nums[i]), 
 * rồi kiểm tra xem số đó đã xuất hiện trước đó chưa bằng cách tra Map. 
 * Nếu có thì trả kết quả, nếu chưa thì lưu số hiện tại vào Map cho các bước sau
 */

// ================= CODE CÁCH 2 =================

function twoSumHashMap(nums, target) {
    const numMap = new Map(); //

    for (let i = 0; i < nums.length; i++) {
        const need = target - nums[i]

        if (numMap.has(need)) {
            return [numMap.get(need), i]
        }
        numMap.set(nums[i], i)
    }
    return []
}
console.log(twoSumHashMap([2, 7, 11, 15], 18));

// input 2, 7, 11, 15
// target 18 
// tạo map rỗng {}
// bắt đầu vòng lặp i = 0 num[0] = 2
// need = 18 - num[0]= 18 -2 = 16
// nếu numMap.has(16) -> false
// lưa vào map  numMap.set(2, 0) -> map = { 2=>0}
// i = 1 num[1] = 7
// need = 18 - num[1]= 18 - 7 = 11
// numMap.has(11) -> false 
// lưa vào map nummap.set(7, 1) -> map = { 2=>0; 7 => 1}
// i = 2 

//====================== Cách 3 =====================

function twoSumPointer(nums, target) {
    const arr = nums.map((num, i) => ({ value: num, idx: i}));

    arr.sort(function(a,b) {
        return a.value - b.value
    })

    let left = 0
    let right = arr.length - 1

    while (left < right) {
        const sum = arr[left].value + arr[right].value
        if (sum === target) {
            return [arr[left].idx, arr[right].idx]
        } else if (sum < target) {
            left++
        } else {
            right--
        }
    }
    return []
}
console.log(twoSumPointer([6, 2, 15, 11], 17));