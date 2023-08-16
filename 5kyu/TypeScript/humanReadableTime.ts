/* Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures. */

//Solution:
export function humanReadable(inputSeconds:number):string {
  let hours: number | string = Math.floor(inputSeconds / 3600)
  if(hours < 10) hours = '0' + hours

  let minutes: number | string = Math.floor(inputSeconds % 3600 / 60)
  if(minutes < 10) minutes = '0' + minutes
  
  let seconds: number | string = inputSeconds % 60
  if(seconds < 10) seconds = '0' + seconds

  return `${hours}:${minutes}:${seconds}`
}