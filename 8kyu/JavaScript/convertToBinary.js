/* Given a non-negative integer n, write a function to_binary/ToBinary which returns that number in a binary format.

Example:
	toBinary(1)   should return 1 
	toBinary(5)   should return 101 
	toBinary(11)  should return 1011  */

//Solution:
const toBinary = n => Number(n.toString(2))