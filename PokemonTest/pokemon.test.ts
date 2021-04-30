import {Pokemon, IPokemon} from "../src";


describe('Combat entre pokemon', () => {
    let pikachu: Pokemon;
    let rattatack: Pokemon;
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
    })


    it('Pikachu should attack first againt rattatack', () => {
        expect(Pokemon.WhichShouldAttack(pikachu, rattatack)).toBe(pikachu);
    });

    it('Pikachu should attack rattatack and his hp should be 59', () => {
        expect(pikachu.attack1(rattatack)).toBe(59);
    });

    it('rattack should attack pikachu and his hp should be 86', () => {
        expect(rattatack.attack1(pikachu)).toBe(86);
    });

    it('rattack should attack pikachu and his hp should be 83.2', () => {
        expect(rattatack.attack2(pikachu)).toBe(83.2);
    });

    it('rattack should attack pikachu and his hp should be 81.8', () => {
        expect(rattatack.attack3(pikachu)).toBe(81.8);
    });

    it('rattack should attack pikachu and his hp should be 79', () => {
        expect(rattatack.attack4(pikachu)).toBe(79);
    });

    it('rattack should attack pikachu and his hp should be 79', () => {
        expect(rattatack.randomAttack(pikachu)).toBe(79);
    });


});
