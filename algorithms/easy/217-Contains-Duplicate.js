/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const map = new Map();
    for(let num of nums){
        map.set(num, (map.get(num) || 0) + 1);
        if(map.get(num) > 1){
            return true
        }
    }
    return false
};
console.log(containsDuplicate([1,2,3,3]));
console.log(containsDuplicate([1,2,3,4]));