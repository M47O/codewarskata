/* Implement a function, which takes a non-negative integer, representing the number of eggs to boil. It must return the time in minutes (integer), which it takes to have all the eggs boiled.

Rules
you can put at most 8 eggs into the pot at once
it takes 5 minutes to boil an egg
we assume, that the water is boiling all the time (no time to heat up)
for simplicity we also don't consider the time it takes to put eggs into the pot or get them out of it

Example (Input --> Output)
	0 --> 0
	5 --> 5
	10 --> 10 */

//Solution:
export function cookingTime(eggs: number): number {
  let minutes: number = 0 
  for(let i: number = 1; i <= eggs; i+=8){
    minutes+= 5
  }
  
  return minutes
}