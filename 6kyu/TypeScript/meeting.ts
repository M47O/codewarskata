/* John has invited some friends. His list is:
s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";

Could you make a program that
	makes this string uppercase
	gives it sorted in alphabetical order by last name.

When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

So the result of function meeting(s) will be:
"(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"

It can happen that in two distinct families with the same family name two people have the same first name too. */

//Solution:
export function meeting(s: string): string {
  const people = s.split(";").map(person => ({firstName: person.split(":")[0], lastName: person.split(":")[1]}))
  
  const sortedPeople = people.sort((a, b) => {
    const lastNameA = a.lastName.toUpperCase();
    const lastNameB = b.lastName.toUpperCase();

    if (lastNameA === lastNameB) {
      const firstNameA = a.firstName.toUpperCase();
      const firstNameB = b.firstName.toUpperCase();
      
      if (firstNameA < firstNameB) return -1;
      return 1;
    } else {
      if (lastNameA < lastNameB) return -1;
      return 1;
    }
  });
  
  const formattedPeople = sortedPeople.map(person => `(${person.lastName.toUpperCase()}, ${person.firstName.toUpperCase()})`)
  
  return formattedPeople.join("")
}
