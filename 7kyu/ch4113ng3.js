/* Make your strings more nerdy: Replace all 'a'/'A' with 4, 'e'/'E' with 3 and 'l' with 1 e.g. "Fundamentals" --> "Fund4m3nt41s" */

//Solution:
function nerdify(txt){
  return txt.split("").map(char => {
   if(char === 'a' || char === 'A'){
     return '4'
   } else if(char === 'e' || char === 'E'){
     return '3'
   } else if(char === 'l'){
     return '1'
   } else {
     return char
   }
  }).join("")
}