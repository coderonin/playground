import IAttackTypeCalculator from "./IAttackTypeCalculator";

export default class MagicAttackCalculator extends IAttackTypeCalculator{

    getRoll(){
        return this.dice + this.character.baseCast;
    }

    setSkill(skill){
        this._skill = skill;
    }

    getBaseDamage(){
        return this._skill.getDamage();
    }
}
