import Character from '../../../../src/paranoia/Character.js';
import CombatResultTypes from "../../../../src/paranoia/enums/CombatResultTypes";
import FleeCalculator from "../../../../src/paranoia/calculators/defense/FleeCalculator";

describe("FleeCalculator tests", () => {

    it("should create a FleeCalculator", () => {
        let char = new Character({}),
            calculator = new FleeCalculator(char, 15);

        expect(calculator.character).to.be.equals(char);
        expect(calculator.dice).to.be.equals(15);
    });

    it("should get the flee rollCombat", () => {
        let char = new Character({ dex: 3, spr: 0, agi: 8, str: 0}),
            calculator = new FleeCalculator(char, 10);

        expect(calculator.getRoll()).to.be.equals(18);
    });

    it("should get a combat result with effective defense", () => {
        let char = new Character({ dex: 3, spr: 0, agi: 8, str: 0}),
            calculator = new FleeCalculator(char, 10);

        calculator.setDamage(0, 1);
        let result = calculator.getCombatResult();

        expect(result.needFullDamage).to.be.false;
        expect(result.type).to.be.equals(CombatResultTypes.COUNTER);
    });

    it("should get a combat result with effective attack", () => {
        let char = new Character({ dex: 3, spr: 0, agi: 8, str: 0}),
            calculator = new FleeCalculator(char, 10);

        calculator.setDamage(10, 1);
        let result = calculator.getCombatResult();

        expect(result.needFullDamage).to.be.true;
        expect(result.type).to.be.equals(CombatResultTypes.DIRECT);
    });

    it("should get the the calculation for getDamage", () => {
        let char = new Character({ dex: 0, spr: 3, agi: 0, str: 8}),
            calculator = new FleeCalculator(char, 10);

        calculator.setDamage(10, 1);
        expect(calculator.getDamage(3)).to.be.equals(13);
    });
});
