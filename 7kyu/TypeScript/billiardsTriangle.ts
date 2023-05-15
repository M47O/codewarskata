/* Remember the triangle of balls in billiards? To build a classic triangle (5 levels) you need 15 balls. With 3 balls you can build a 2-level triangle, etc.

For more examples,
	pyramid(1) == 1
	pyramid(3) == 2
	pyramid(6) == 3
	pyramid(10) == 4
	pyramid(15) == 5

Write a function that takes number of balls (≥ 1) and calculates how many levels you can build a triangle. */

//Solution:
export function pyramid(balls: number): number {
    const discriminant = 1 + 8 * balls;
    const n = (-1 + Math.sqrt(discriminant)) / 2;
    return Math.floor(n);
}