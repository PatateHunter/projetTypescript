export interface IPokemon {
    name: string;
    hp:number;
    speed:number;
    attack:number;
    defense:number;
}

export class Pokemon implements IPokemon{
    name: string;
    hp:number;
    attack: number;
    speed: number;
    defense: number;
    constructor(props:IPokemon) {
        this.name = props.name;
        this.hp = props.hp;
        this.speed = props.speed;
        this.attack = props.attack
        this.defense = props.defense;
    }

     attack1(poke1: Pokemon):number {
        return poke1.hp -= this.calculateAttack(poke1);
    }

    static WhichShouldAttack(poke1: Pokemon, poke2: Pokemon):Pokemon {
        return poke1.speed >= poke2.speed ? poke1 : poke2;
    }

    private calculateAttack(poke1: Pokemon):number {
        return (this.attack/1+(poke1.defense/5));
    }

    attack2(poke1: Pokemon):number {
        return poke1.hp -= (this.calculateAttack(poke1))*1.2;
    }
    attack3(poke1: Pokemon):number {
        return poke1.hp -= (this.calculateAttack(poke1))*1.3;
    }
    attack4(poke1: Pokemon):number {
        return poke1.hp -= (this.calculateAttack(poke1))*1.5;
    }
}