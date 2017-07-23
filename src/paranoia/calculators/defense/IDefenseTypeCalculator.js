import Calculator from "../Calculator";
import CombatResult from "../CombatResult";
import CombatResultTypes from "../../enums/CombatResultTypes";

export default class IDefenseTypeCalculator extends Calculator{
    constructor(character, dice){
        super(character, dice);
        /* istanbul ignore next */
        this.damage = 0;
    }

    setDamage(damage, efficacy){
        this.damage = damage;
        this.efficacy = efficacy;
    }

    setResultType(result){
        if(!result.needFullDamage){
            result.setType(CombatResultTypes.BLOCK);
        }
    }

    getCombatResult(){
        let result = new CombatResult(this);
        result.setNeedFullDamage(this.damage !== 0);
        this.setResultType(result);
        return result;
    }
}
