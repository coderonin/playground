const basePercentStart = 90;
const sphereLevelFactor = 7;

export default class Skill {
    constructor({name, character, spheresNames}){
        this.name = name;
        this.character = character;
        this.spheresNames = spheresNames;
    }

    getCastCost(){
        let cost = 0;
        this.spheresNames.forEach((name) => {
            cost += Math.pow(this.character.getSphere(name).level, 2);
        });
        return cost + 1 - this.spheresNames.length;
    }

    getLevelOfEffort(){
        let loe = 0;
        let spheresValue = 0;
        this.spheresNames.forEach((name) => {
            let sphere = this.character.getSphere(name),
                level = sphere.level,
                ease = sphere.ease;

            spheresValue += sphere.value;
            loe += (level * sphereLevelFactor ) + ease
        });
        return basePercentStart + sphereValue - loe;
    }
}
