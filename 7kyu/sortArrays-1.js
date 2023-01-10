/* Just a simple sorting usage. Create a function that returns the elements of the input-array / list sorted in lexicographical order. */

//Solution:
	// input: names - unsorted array
	// output: sorted array
sortme = function( names ){
  return names.sort((a,b) => {
    if(a < b) return -1
  })
}

//Refactor:
let sortme = function( names ){
  return names.sort()
}