/* Given a string made up of letters a, b, and/or c, switch the position of letters a and b (change a to b and vice versa). Leave any incidence of c untouched.

Example:

'acb' --> 'bca'
'aabacbaa' --> 'bbabcabb' */


//Solution:

function switcheroo(x){
let e = x.replace(/a/g, "d")
let f = e.replace(/b/g, "a")
return f.replace(/d/g, "b")
} 
