import IAttackTypeCalculator from "./IAttackTypeCalculator";

export default class RangedAttackCalculator extends IAttackTypeCalculator{

    getRoll(){
        return this.dice + this.character.dex + this.character.getAttackBonus();
    }

    getBaseDamage(){
        return this.character.dex + this.character.getAttackDamage();
    }
}
