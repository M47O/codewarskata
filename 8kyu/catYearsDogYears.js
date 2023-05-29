/* I have a cat and a dog.
I got them at the same time as kitten/puppy. That was humanYears years ago.
Return their respective ages now as [humanYears,catYears,dogYears]

NOTES:
humanYears >= 1
humanYears are whole numbers only

Cat Years
	15 cat years for first year
	+9 cat years for second year
	+4 cat years for each year after that

Dog Years
	15 dog years for first year
	+9 dog years for second year
	+5 dog years for each year after that */

//Solution:
var humanYearsCatYearsDogYears = function(humanYears) {
  let cat = 0
  let dog = 0
  
  
  //cat
  for(let i = 1; i <= humanYears; i++){
    if(i == 1){
      cat += 15
    } else if(i == 2){
      cat += 9
    } else {
      cat += 4
    }
  }
  
  //dog
    for(let i = 1; i <= humanYears; i++){
    if(i == 1){
      dog += 15
    } else if(i == 2){
      dog += 9
    } else {
      dog += 5
    }
  }
  
  return [humanYears, cat, dog]
}
