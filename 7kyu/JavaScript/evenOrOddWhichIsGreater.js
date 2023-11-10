/* Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.
If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"
If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"
If the total of both even and odd numbers are identical return: "Even and Odd are the same" */

//Solution:
function evenOrOdd(str) {
  const sumOddDigits = str.split("")
    .filter(digit => +digit % 2 !== 0)
    .reduce((acc, cv) => +acc + +cv, 0);
  
  const sumEvenDigits = str.split("")
    .filter(digit => +digit % 2 === 0)
    .reduce((acc, cv) => +acc + +cv, 0);
  
  return sumOddDigits > sumEvenDigits ? "Odd is greater than Even" :
         sumOddDigits < sumEvenDigits ? "Even is greater than Odd" :
         "Even and Odd are the same"
};