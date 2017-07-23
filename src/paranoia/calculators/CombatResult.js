import CombatResultTypes from "../enums/CombatResultTypes";

export default class CombatResult {

    constructor(defenseCalculator){
        this.defenseCalculator = defenseCalculator;
        this.setType(CombatResultTypes.DIRECT);
    }

    setType(type){
        this.type = type;
    }

    setNeedFullDamage(need){
        this.needFullDamage = need;
    }

    getDamage(diceDamage){
        return this.defenseCalculator.getDamage(diceDamage);
    }
}
