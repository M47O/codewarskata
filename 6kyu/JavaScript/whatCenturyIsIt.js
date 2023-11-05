/* Return the century of the input year. The input will always be a 4 digit string, so there is no need for validation.

Examples
	"1999" --> "20th"
	"2011" --> "21st"
	"2154" --> "22nd"
	"2259" --> "23rd"
	"1124" --> "12th"
	"2000" --> "20th" */

//Solution:
function whatCentury(year)
{
  let century = Math.ceil(year / 100).toString()
  const secondDigit = century.slice(1, 2)
  
  const nonThEnding = ["1", "2", "3"]
  
  if(!nonThEnding.includes(secondDigit) || century[0] == "1" ){
    return century += "th"
  } else if(secondDigit === "1"){
    return century += "st"
  } else if(secondDigit === "2"){
    return century += "nd"
  } else {
    return century += "rd"
  } 
}