// 003. Longest Substring Without Repeating Characters
// Difficulty: Medium
// Tags: Sliding Window, Hash Table
// Date: 2026-04-15

/**
 * ==== cach 1 ====
 */
function longestSubdtring(s) {
    let maxlength = 0;
    for (let i = 0; i < s.length; i++) {
        let arr = [];
        for (let j = i; j < s.length; j++) {
            if (arr.includes(s[j])) {
                break;
            }
            arr.push(s[j])
            maxlength = Math.max(maxlength, j - i + 1)
        }
    }
    return maxlength;
}

console.log(longestSubdtring("abccbdae"));


/**
 * === cách 2 ===
 */

function longestSubString(s) {
    const set = new Set();
    let l = 0;
    let res = 0;

    for (let r = 0; r < s.length; r++){
        while (set.has(s[r])){
            set.delete(s[l]);
            l++;
        }
        set.add(s[r]);
        res = Math.max(res, r - l + 1);
    }
    return res;
}

console.log(longestSubString("abccbdae"));