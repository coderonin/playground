import Character from '../../../src/Character.js';
import MeleeAttackCalculator from "../../../src/calculators/attack/MeleeAttackCalculator";

describe("MeleeAttackCalculator tests", () => {

    it("should create a MeleeAttackCalculator", () => {
        let char = new Character({}),
            calculator = new MeleeAttackCalculator(char, 15);

        expect(calculator.character).to.be.equals(char);
        expect(calculator.dice).to.be.equals(15);
    });

    it("should get the attack rollCombat", () => {
        let char = new Character({ dex: 0, spr: 0, agi: 0, str: 8}),
            calculator = new MeleeAttackCalculator(char, 10);

        expect(calculator.getRoll()).to.be.equals(18);
    });

    it("should get base damage", () => {
        let char = new Character({ dex: 0, spr: 0, agi: 0, str: 8}),
            calculator = new MeleeAttackCalculator(char, 0);

        expect(calculator.getBaseDamage()).to.be.equals(8);
    });
});
