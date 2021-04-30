import {Battle,IBattle} from "../BattleModule/Battle";
import {Pokemon} from "../src";


describe('Combat entre pokemon', () => {
    let pikachu: Pokemon;
    let rattatack: Pokemon;
    let combat1: Battle;

    beforeEach(() => {
        pikachu = new Pokemon({
            name: "pika",
            hp: 100,
            speed: 20,
            attack: 15,
            defense: 20
        })

        rattatack = new Pokemon(
            {
                name: "rattatack",
                hp: 80,
                speed: 15,
                attack: 10,
                defense: 30
            });
         combat1 = new Battle({
            poke1: pikachu,
            poke2: rattatack
        })
    })

    it('Pikachu should win againt rattatack', () => {
        expect(combat1.fight()).toBe(pikachu);
    });



});
