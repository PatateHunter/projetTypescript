import {Pokemon,IPokemon} from "./src";
import {Battle,IBattle} from "./BattleModule/Battle";
let pikachu = new Pokemon({
    name: "pika",
    hp: 100,
    speed: 20,
    attack: 15,
    defense: 20
})

let rattatack = new Pokemon(
    {
        name: "rattatack",
        hp: 80,
        speed: 15,
        attack: 10,
        defense: 30
    });


let combat1 = new Battle ({
    poke1:pikachu,
    poke2:rattatack
})

console.log("yo");