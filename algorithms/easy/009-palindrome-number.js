// 009. Palindrome Number
// Difficulty: Easy
// Tags: Math
// Date: 2026-04-21

function isPalindrome(x){
    if (x < 0) return false;

    let div = 1;
    while(x >= 10 * div){
        div *= 10;
    }

    while(x){
        let right = x % 10;
        let left = Math.floor(x / div);

        if(right != left ) return false;

        x = Math.floor((x % div) / 10);
        div /= 100;
    }

    return true;
}

console.log(isPalindrome(12321));