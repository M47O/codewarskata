/* Define a function that removes duplicates from an array of numbers and returns it as a result.

The order of the sequence has to stay the same. */

//Solution:
const distinct = a => a.filter((e,i) => a.indexOf(e) == i )