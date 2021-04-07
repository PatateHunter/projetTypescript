"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Battle = void 0;
var Battle = /** @class */ (function () {
    function Battle(props) {
        this.poke1 = props.poke1;
        this.poke2 = props.poke2;
    }
    Battle.prototype.fight = function () {
        return this.poke1;
    };
    return Battle;
}());
exports.Battle = Battle;
