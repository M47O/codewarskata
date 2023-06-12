/* Write a function that returns the total surface area and volume of a box as an array: [area, volume] */

//Solution:
function getSize(width, height, depth) {
  const area = 2*(depth*width + depth*height + width*height)
  const volume = width * height * depth
  
  return [area, volume]
}	