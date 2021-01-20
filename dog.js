var chalk = require('chalk');
function Dog(name, color, weight) {
    this.name = name;
    this.color = color;
    this.weight = weight;
}

Dog.prototype.eat = function (bone) { 
    this.weight += bone;
};

Dog.prototype.sayHi = function() {
	console.log('Hi! I am a dog. My name is ' + chalk.blue(this.name));
}

module.exports = Dog