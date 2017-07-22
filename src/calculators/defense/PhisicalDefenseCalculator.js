import IDefenseTypeCalculator from "./IDefenseTypeCalculator";
import CombatResultTypes from "../../enums/CombatResultTypes";

export default class PhisicalDefenseCalculator extends IDefenseTypeCalculator{

    getRoll(){
        return this.dice + this.character.defense;
    }

    getDamage(diceDamage){
        return ((this.damage + diceDamage) * this.efficacy) - this.character.defense;
    }
}
