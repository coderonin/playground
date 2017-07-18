import IAttackTypeCalculator from "./IAttackTypeCalculator";

export default class MeleeAttackCalculator extends IAttackTypeCalculator{

    getRoll(){
        return this.dice + this.character.str;
    }

    getBaseDamage(){
        return this.character.str;
    }
}
