function Dog(name, color, weight) {
    this.name = name;
    this.color = color;
    this.weight = weight;
}

Dog.prototype.eat = function (bone) { 
    this.weight += bone;
};

Dog.prototype.bark = function() {
	console.log('Go go...');
}

module.exports = Dog;