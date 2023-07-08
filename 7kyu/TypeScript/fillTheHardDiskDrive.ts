/* Your task is to determine how many files of the copy queue you will be able to save into your Hard Disk Drive. The files must be saved in the order they appear in the queue.

Input:
Array of file sizes (0 <= s <= 100)
Capacity of the HD (0 <= c <= 500)

Output:
Number of files that can be fully saved in the HD.

Examples:
	save([4,4,4,3,3], 12) -> 3
# 4+4+4 <= 12, but 4+4+4+3 > 12
	save([4,4,4,3,3], 11) -> 2
# 4+4 <= 11, but 4+4+4 > 11

Do not expect any negative or invalid inputs. */

//Solution:
export function save(sizes: number[], hd: number) {
  let counter = 0
  let currentSize = 0
  let shouldSkip = false
  
  sizes.forEach((e, i) => {
    if(currentSize + e <= hd  && !shouldSkip){
      currentSize += e
      counter++
    } else {
      shouldSkip = true
    }
  })
  return counter
}

/* Note: It's better to use a for loop here instead of using the forEach method, 
as you can break out of a for loop as soon as you're done counting the the number of files.
With forEach, the method will always continue iterating until the end of the array. 
I simply wanted to test using forEach with a boolean flag, 
but you can easily translate this to a for loop by changing "shouldSkip = true" to "break;" */