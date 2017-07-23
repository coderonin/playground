import IDefenseTypeCalculator from "./IDefenseTypeCalculator";
import CombatResultTypes from "../../enums/CombatResultTypes";

export default class MagicDefenseCalculator extends IDefenseTypeCalculator{

    getRoll(){
        return this.dice + this.character.magicDefense;
    }

    getDamage(diceDamage){
        return ((this.damage + diceDamage) * this.efficacy) - this.character.magicDefense;
    }
}
