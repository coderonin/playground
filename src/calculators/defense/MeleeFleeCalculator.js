import IDefenseTypeCalculator from "./IDefenseTypeCalculator";
import CombatResultTypes from "../../enums/CombatResultTypes";

export default class MeleeFleeCalculator extends IDefenseTypeCalculator{

    getRoll(){
        return this.dice + this.character.flee;
    }

    getCombatResult(){
        /* istanbul ignore next */
        let result = super.getCombatResult();
        if(!result.needFullDamage){
            result.setType(CombatResultTypes.COUNTER);
        }
        return result;
    }

    getDamage(damage){
        return (this.damage + damage) * this.efficacy;
    }
}
