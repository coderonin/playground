import Calculator from "../Calculator";
import CombatResult from "../CombatResult";

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

    getCombatResult(){
        let result = new CombatResult(this);
        result.setNeedFullDamage(this.damage !== 0);
        return result;
    }
}
