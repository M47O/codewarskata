/* Write a function consonantCount, consonant_count or ConsonantCount that takes a string of English-language text and returns the number of consonants in the string.
Consonants are all letters used to write English excluding the vowels a, e, i, o, u. */

//Solution:
function consonantCount(str) {
 const consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'x', 'y', 'z']
 
 return str.toLowerCase().split("").filter(x => consonants.includes(x)).length
}