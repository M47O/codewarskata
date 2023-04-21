/* Remove all exclamation marks from the end of sentence.

Examples
	remove("Hi!") === "Hi"
	remove("Hi!!!") === "Hi"
	remove("!Hi") === "!Hi"
	remove("!Hi!") === "!Hi"
	remove("Hi! Hi!") === "Hi! Hi"
	remove("Hi") === "Hi" */

//Solution:
function remove (string) {
  string = string.split("")
  
  let on = true
  for(let i = string.length - 1; on; i--){
    if(string[i] === '!'){
      string.pop()
    } else {
      on = false
    }
  }
  
  return string.join("")
}