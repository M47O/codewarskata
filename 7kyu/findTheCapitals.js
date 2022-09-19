/* Instructions
	Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.

Example
	Test.assertSimilar( capitals('CodEWaRs'), [0,3,4,6] ); */


//Solution:
var capitals = function (word) {
  const capsArr = word.split('').filter(x => x === x.toUpperCase())
  const indices = []
  capsArr.forEach(x => {
    indices.push(word.split('').indexOf(x))
  })
  return indices
};