"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Battle = void 0;
var src_1 = require("../src");
var Battle = /** @class */ (function () {
    function Battle(props) {
        this.poke1 = props.poke1;
        this.poke2 = props.poke2;
    }
    Battle.prototype.fight = function () {
        while (this.checkIfBothPokemonAreAlive()) {
            this.fightOneTurn();
        }
        return this.CheckIfThereWinner();
    };
    Battle.prototype.fightOneTurn = function () {
        var pokeTurn = src_1.Pokemon.WhichShouldAttack(this.poke1, this.poke2);
        if (pokeTurn == this.poke1) {
            this.poke1.randomAttack(this.poke2);
        }
        this.poke2.randomAttack(this.poke1);
    };
    Battle.prototype.checkIfBothPokemonAreAlive = function () {
        return this.poke1.hp > 0 && this.poke2.hp > 0;
    };
    Battle.prototype.CheckIfThereWinner = function () {
        if (this.poke1.hp <= 0) {
            return this.poke2;
        }
        return this.poke1;
    };
    return Battle;
}());
exports.Battle = Battle;
