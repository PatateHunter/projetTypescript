"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var src_1 = require("./src");
var Battle_1 = require("./BattleModule/Battle");
var pikachu = new src_1.Pokemon({
    name: "pika",
    hp: 100,
    speed: 20,
    attack: 15,
    defense: 20
});
var rattatack = new src_1.Pokemon({
    name: "rattatack",
    hp: 80,
    speed: 15,
    attack: 10,
    defense: 30
});
var combat1 = new Battle_1.Battle({
    poke1: pikachu,
    poke2: rattatack
});
console.log("yo");
