import IDefenseTypeCalculator from "./IDefenseTypeCalculator";
import CombatResultTypes from "../../enums/CombatResultTypes";

export default class FleeCalculator extends IDefenseTypeCalculator{

    getRoll(){
        return this.dice + this.character.flee;
    }

    setResultType(result){
        if(!result.needFullDamage){
            result.setType(CombatResultTypes.COUNTER);
        }
    }

    getDamage(diceDamage){
        return (this.damage + diceDamage) * this.efficacy;
    }
}
