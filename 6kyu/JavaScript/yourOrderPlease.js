/* Your task is to sort a given string. Each word in the string will contain a single number. This number is the position the word should have in the result.

Note: Numbers can be from 1 to 9. So 1 will be the first word (not 0).

If the input string is empty, return an empty string. The words in the input String will only contain valid consecutive numbers.

Examples
	"is2 Thi1s T4est 3a"  			-->  "Thi1s is2 3a T4est"
	"4of Fo1r pe6ople g3ood th5e the2"	-->  "Fo1r the2 g3ood 4of th5e pe6ople"
	""  					-->  ""
 */


//Solution
function order(words){
 let wordsArr = words.split(" ")
 let newArr = []
 
  wordsArr.map(x => {
    if(x.includes('1')){
    return  newArr[0] = x
    } else if(x.includes('2')){
    return  newArr[1] = x
    } else if(x.includes('3')){
    return  newArr[2] = x
    } else if(x.includes('4')){
    return  newArr[3] = x
    } else if(x.includes('5')){
    return  newArr[4] = x
    } else if(x.includes('6')){
    return  newArr[5] = x
    } else if(x.includes('7')){
    return  newArr[6] = x
    } else if(x.includes('8')){
    return  newArr[7] = x
    } else if(x.includes('9')){
    return  newArr[8] = x
    }
  })