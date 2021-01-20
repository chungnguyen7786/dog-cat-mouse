function Mouse(name, color, weight) {
    this.name = name;
    this.color = color;
    this.weight = weight;
    this.dead = false;

}

Mouse.prototype.die = function() {
    this.dead = false;
    this.color = 'white';
};

Mouse.prototype.eat = function(rice) {
	this.weight += rice;
}

module.exports = Mouse;