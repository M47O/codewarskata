/* In this Kata, you will be given a string and your task will be to return a list of ints detailing the count of uppercase letters, lowercase, numbers and special characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters. */

//Solution:
function solve(s){
 s = s.split("")
 const lowerCase = 'abcdefghijklmnopqrstuvwxyz'.split("")
 const upperCase = lowerCase.map(letter => letter.toUpperCase())
 const numbers = '1234567890'.split("")
 const lowerCaseCount = s.filter(character => lowerCase.includes(character)).length
 const upperCaseCount = s.filter(character => upperCase.includes(character)).length
 const numCount = s.filter(character => numbers.includes(character)).length
 const specCount = s.filter(character => !lowerCase.includes(character) && !upperCase.includes(character) && !numbers.includes(character)).length
 
 if(!s){
   return [0,0,0,0]
 } else {
   return [upperCaseCount, lowerCaseCount, numCount, specCount]
 }
}