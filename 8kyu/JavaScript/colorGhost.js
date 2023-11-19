/* Create a class Ghost
Ghost objects are instantiated without any arguments.
Ghost objects are given a random color attribute of "white" or "yellow" or "purple" or "red" when instantiated

ghost = new Ghost();
ghost.color //=> "white" or "yellow" or "purple" or "red" */

//Solution:
var Ghost = function() {
  this.color = ["white","yellow","purple","red"][Math.floor(Math.random() * 4)];
};

//Refactor:
class Ghost {
  constructor(){
    const availableColors = ['white', 'yellow', 'purple', 'red']
    this.color = availableColors[Math.floor(Math.random() * availableColors.length)]
  }
}