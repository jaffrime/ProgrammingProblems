

/*

A string is a palindrome if it has exactly the same sequence of characters when read left-to-right as it has when read right-to-left. For example, the following strings are palindromes:

"kayak", "codilitytilidoc", "neveroddoreven". A string A is an anagram of a string B if A can be obtained from B by rearranging the characters. For example, in each of the following pairs one string is an anagram of the other:

"mary" and "army", "rocketboys" and "octobersky", "codility" and "codility". Write a function:

isAnagramOfPalindrome();

that, given a non-empty string S consisting of N characters, returns true if S is an anagram of some palindrome and returns false otherwise.


This solution relies on the following facts:

A string is an anagram of a palindrome if and only if at most one character appears an odd number of times in it.

The specification stated that the input can only contain the 26 lowercase letters a – z, which have consecutive codepoints in Unicode.

In Javascript, numbers are always stored as 64-bit floating point values  (double precision floating point).  JavaScript will perform an internal conversion to a 32-bit value but you can't gain access directly to this integer and it is converted back to floating point format as soon as it is possible. So we can store one bit for each of the allowed letters.

The expression b & (b - 1) evaluates to zero if and only if b has at most one bit set.
 */

String.prototype.isAnagramOfPalindrome = function(str) {
    var obj = {};
    var len = this.length;
    for (var i=0; i < len; i++) {
        console.log('hello');
        if (obj[this.charAt(i)]) {
            delete(obj[this.charAt(i)]);
        } else {
            obj[this.charAt(i)] = true;
        }
    }

    arr_obj = Object.keys(obj);

    return arr_obj.length === 1 || arr_obj.length === 0;
}