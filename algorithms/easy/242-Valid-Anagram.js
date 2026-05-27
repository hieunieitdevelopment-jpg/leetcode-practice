/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length != t.length) return false;
    const map = new Map();
    for (let i = 0; i < s.length; i++) {
        map.set(s[i], (map.get(s[i]) || 0) + 1);
        map.set(t[i], (map.get(t[i]) || 0) - 1);
    }

    for(let value of map.values()){
        if(value !== 0){
            return false;
        }
    }
    return true;
};
console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("rat", "car"));