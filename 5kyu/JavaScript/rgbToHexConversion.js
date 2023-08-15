/* The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

Examples (input --> output):
	255, 255, 255 --> "FFFFFF"
	255, 255, 300 --> "FFFFFF"
	0, 0, 0       --> "000000"
	148, 0, 211   --> "9400D3" */

//Solution:
function rgb(r, g, b){
  if(r > 255) r = 255
  if(r < 0) r = 0
  if(g > 255) g = 255
  if(g < 0) g = 0
  if(b > 255) b = 255
  if(b < 0) b = 0
  
  
  function getHex(color) {
    const hexLibrary = {
      10: 'A',      11: 'B',
      12: 'C',      13: 'D',
      14: 'E',      15: 'F'
    }
    
    let x = Math.floor(color / 16)
    let y = color % 16
    
    if(x > 9) x = hexLibrary[x]
    if(y > 9) y = hexLibrary[y]
    
    return '' + x + y
  }
  
  return `${getHex(r)}${getHex(g)}${getHex(b)}`
}