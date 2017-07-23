import IAttackTypeCalculator from "./IAttackTypeCalculator";

export default class MeleeAttackCalculator extends IAttackTypeCalculator{

    getRoll(){
        return this.dice + this.character.str + this.character.getAttackBonus();
    }

    getBaseDamage(){
        return this.character.str + this.character.getAttackDamage();
    }
}
