import IAttackTypeCalculator from "./IAttackTypeCalculator";

export default class RangedAttackCalculator extends IAttackTypeCalculator{

    getRoll(){
        return this.dice + this.character.dex + this.character.getWeaponBonus();
    }

    getBaseDamage(){
        return this.character.dex + this.character.getWeaponDamage();
    }
}
