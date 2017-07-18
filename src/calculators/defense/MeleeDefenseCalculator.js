import IDefenseTypeCalculator from "./IDefenseTypeCalculator";
import CombatResultTypes from "../../enums/CombatResultTypes";

export default class MeleeDefenseCalculator extends IDefenseTypeCalculator{

    getRoll(){
        return this.dice + this.character.defense;
    }

    getCombatResult(){
        let result = super.getCombatResult();
        if(!result.needFullDamage){
            result.setType(CombatResultTypes.BLOCK);
        }
        return result;
    }

    getDamage(damage){
        return ((this.damage + damage) * this.efficacy) - this.character.defense;
    }
}
