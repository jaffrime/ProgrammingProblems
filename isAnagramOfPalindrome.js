

/*
https://github.com/saruberoz/ProgrammingProblem/tree/master/isAnagramOfPalindrome

A string is a palindrome if it has exactly the same sequence of characters when read left-to-right as it has when read right-to-left. For example, the following strings are palindromes:

"kayak", "codilitytilidoc", "neveroddoreven". A string A is an anagram of a string B if A can be obtained from B by rearranging the characters. For example, in each of the following pairs one string is an anagram of the other:

"mary" and "army", "rocketboys" and "octobersky", "codility" and "codility". Write a function:

isAnagramOfPalindrome(S);

that, given a non-empty string S consisting of N characters, returns 1 if S is an anagram of some palindrome and returns 0 otherwise.

Assume that:

N is an integer within the range [1..100,000]; string S consists only of lower-case letters (a-z). For example, given S = "dooernedeevrvn", the function should return 1, because "dooernedeevrvn" is an anagram of the palindrome "neveroddoreven". Given S = "aabcba", the function should return 0.

Complexity:

expected worst-case time complexity is O(N); expected worst-case space complexity is O(1) (not counting the storage required for input arguments).



This solution relies on the following facts:

A string is an anagram of a palindrome if and only if at most one character appears an odd number of times in it.

The specification stated that the input can only contain the 26 lowercase letters a – z, which have consecutive codepoints in Unicode.

In Javascript, numbers are always stored as 64-bit floating point values  (double precision floating point).  JavaScript will perform an internal conversion to a 32-bit value but you can't gain access directly to this integer and it is converted back to floating point format as soon as it is possible. So we can store one bit for each of the allowed letters.

The expression b & (b - 1) evaluates to zero if and only if b has at most one bit set.
 */

var isAnagramOfPalindrome = function( S ) {
    var val = 0;
    var i;

    // convert the first character [a-z] to binary value
    var a = 'a'.charCodeAt(0).toString(2);

    // for each character in the string
    for(i = 0 ; i < S.length ; i++) {
        // shift 1 to the left << the distance of the difference between the current character and a
        // flip the bit for the current character ^= (either add the bit or remove the bit)
        val ^=  1 << (S.charCodeAt(i).toString(2) - a);

        // show the current val in binary
        console.log(val.toString(2));
    }

    // if at most only one bit is set
    if((val & (val - 1)) === 0) {
        return 1;
    }
    return 0;
};