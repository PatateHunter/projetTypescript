import {Pokemon} from "../src";
export interface IBattle {
    poke1:Pokemon
    poke2:Pokemon
}

export class Battle implements IBattle{
    poke1:Pokemon
    poke2:Pokemon

    constructor(props:IBattle) {
        this.poke1 = props.poke1;
        this.poke2 = props.poke2;
    }

    fight():Pokemon {
       while (this.checkIfBothPokemonAreAlive()) {
           this.fightOneTurn();
       }
           return this.CheckIfThereWinner();
    }

    private fightOneTurn() {
      const pokeTurn =  Pokemon.WhichShouldAttack(this.poke1,this.poke2);
        if (pokeTurn == this.poke1){
            this.poke1.randomAttack(this.poke2);

        }
        this.poke2.randomAttack(this.poke1);
    }

    private checkIfBothPokemonAreAlive():boolean{
        return this.poke1.hp > 0 && this.poke2.hp > 0;
    }
    private CheckIfThereWinner():Pokemon{
      if (this.poke1.hp <= 0){
          return this.poke2;
      }
      return this.poke1;
    }


}