"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(props) {
        this.name = props.name;
        this.hp = props.hp;
        this.speed = props.speed;
        this.attack = props.attack;
        this.defense = props.defense;
    }
    Pokemon.prototype.attack1 = function (poke1) {
        return poke1.hp -= this.calculateAttack(poke1);
    };
    Pokemon.WhichShouldAttack = function (poke1, poke2) {
        return poke1.speed >= poke2.speed ? poke1 : poke2;
    };
    Pokemon.prototype.calculateAttack = function (poke1) {
        return (this.attack / 1 + (poke1.defense / 5));
    };
    Pokemon.prototype.attack2 = function (poke1) {
        return poke1.hp -= (this.calculateAttack(poke1)) * 1.2;
    };
    Pokemon.prototype.attack3 = function (poke1) {
        return poke1.hp -= (this.calculateAttack(poke1)) * 1.3;
    };
    Pokemon.prototype.attack4 = function (poke1) {
        return poke1.hp -= (this.calculateAttack(poke1)) * 1.5;
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
