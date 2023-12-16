function Warrior(name) {
    this._name = name;
}

Warrior.prototype.toString = function() {
    return "Hi! my name's " + this._name;
}

Warrior.prototype.name = function(name) {
    if (name) {
        this._name = name;
    }
    return this._name;
}

