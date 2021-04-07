"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(props) {
        this.name = props.name;
        this.hp = props.hp;
        this.speed = props.speed;
        this.attack = props.attack;
    }
    Pokemon.prototype.attack1 = function (poke1) {
        return poke1.hp -= this.attack;
    };
    Pokemon.WhichShouldAttack = function (poke1, poke2) {
        return poke1.speed >= poke2.speed ? poke1 : poke2;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
