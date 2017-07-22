import Character from '../../../src/Character.js';
import CombatResultTypes from "../../../src/enums/CombatResultTypes";
import PhisicalDefenseCalculator from "../../../src/calculators/defense/PhisicalDefenseCalculator";

describe("PhisicalDefenseCalculator tests", () => {

    it("should create a PhisicalDefenseCalculator", () => {
        let char = new Character(0,0,0,0),
            calculator = new PhisicalDefenseCalculator(char, 15);

        expect(calculator.character).to.be.equals(char);
        expect(calculator.dice).to.be.equals(15);
    });

    it("should get the defense rollCombat", () => {
        let char = new Character(0,3,0,8),
            calculator = new PhisicalDefenseCalculator(char, 10);

        expect(calculator.getRoll()).to.be.equals(18);
    });

    it("should get a combat result with effective defense", () => {
        let char = new Character(3,0,8,0),
            calculator = new PhisicalDefenseCalculator(char, 10);

        calculator.setDamage(0, 1);
        let result = calculator.getCombatResult();

        expect(result.needFullDamage).to.be.false;
        expect(result.type).to.be.equals(CombatResultTypes.BLOCK);
    });

    it("should get a combat result with effective attack", () => {
        let char = new Character(3,0,8,0),
            calculator = new PhisicalDefenseCalculator(char, 10);

        calculator.setDamage(10, 1);
        let result = calculator.getCombatResult();

        expect(result.needFullDamage).to.be.true;
        expect(result.type).to.be.equals(CombatResultTypes.DIRECT);
    });

    it("should get the the calculation for getDamage", () => {
        let char = new Character(0,3,0,8),
            calculator = new PhisicalDefenseCalculator(char, 10);

        calculator.setDamage(10, 1);
        expect(calculator.getDamage(3)).to.be.equals(5);
    });
});
