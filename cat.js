function Cat(name, color, weight) {
    this.stomach = [];
    this.name = name;
    this.color = color;
    this.weight = weight;
}

Cat.prototype.eat = function (mouse) {
    this.stomach.push(mouse);
    this.weight += mouse.weight;
    mouse.die();
};

Cat.prototype.meow = function() {
	console.log('meow meow...');
}

module.exports = Cat;