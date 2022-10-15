/* Write a function that checks if a given string (case insensitive) is a palindrome. */


//Solution:
const isPalindrome = x => x.toLowerCase() == x.split('').reverse().join('').toLowerCase()