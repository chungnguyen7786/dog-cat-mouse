var Mouse = require('./mouse');
var Cat = require('./cat');
var Dog = require('./dog');

var mickey = new Mouse('Mickey', 'black', 0.5);
var jerry = new Mouse('Jerry', 'orange', 0.1);
var tom = new Cat('Tom', 'teal', 5);

console.log(mickey);
console.log(jerry);
console.log(tom);

tom.eat(mickey);
tom.eat(jerry);

console.log(tom);

var john = new Dog('John', 'brown', 10);
john.sayHi() ;