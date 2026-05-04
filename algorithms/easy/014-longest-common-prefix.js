/**
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    let res = "";

    if (!strs || strs.length === 0) {
        return res;
    }

    for (let i = 0; i < strs[0].length; i++) {
        for (let s of strs) {
            if (i === s.length || s[i] !== strs[0][i]) {
                return res;
            }
        }
        res += strs[0][i];
    }

    return res;
}

console.log(longestCommonPrefix(["flower","flow","flight"]))
