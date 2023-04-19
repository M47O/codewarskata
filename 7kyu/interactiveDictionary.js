/* In this kata, your job is to create a class Dictionary which you can add words to and their entries. Example:

	>>> let d = new Dictionary();

	>>> d.newEntry("Apple", "A fruit that grows on trees");

	>>> console.log(d.look("Apple"));
	A fruit that grows on trees

	>>> console.log(d.look("Banana"));
	Can't find entry for Banana

Good luck and happy coding! */

//Solution:
class Dictionary {
  constructor() {
  }
  
  newEntry(key, value) {
    this[key] = value
  }
  
  look(key) {
    return this[key] ? this[key] : `Can't find entry for ${key}`
  }
}