/* I'm new to coding and now I want to get the sum of two arrays... Actually the sum of all their elements. I'll appreciate for your help.
P.S. Each array includes only integer numbers. Output is a number too.*/

//Solution:
export const arrayPlusArray = (arr1: number[], arr2: number[]): number => {
  return [...arr1, ...arr2].reduce((acc, cv) => acc + cv, 0)
}