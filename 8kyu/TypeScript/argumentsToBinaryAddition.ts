/* Given an array add all the number elements and return the binary equivalent of that sum; to make the code bullet proof anything else than a number should be addeded as 0 since it can't be addeded.

If your language can handle float binaries assume the array won't contain float or doubles.

arr2bin([1,2]) == '11'
arr2bin([1,2,'a']) == '11'
arr2bin([]) == '0' */

//Solution:
export function arr2bin(arr: any[]): string {
  const onlyNumbers: number[] = arr.filter((element: any) => typeof element === 'number')
  const binary: string = onlyNumbers.reduce((acc: number, cv: number) => acc + cv, 0).toString(2)
  return binary
}