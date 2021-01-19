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

module.exports = Cat;