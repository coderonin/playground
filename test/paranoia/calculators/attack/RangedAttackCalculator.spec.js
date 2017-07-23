import Character from '../../../../src/paranoia/Character.js';
import RangedAttackCalculator from "../../../../src/paranoia/calculators/attack/RangedAttackCalculator";

describe("RangedAttackCalculator tests", () => {

    it("should create a RangedAttackCalculator", () => {
        let char = new Character({}),
            calculator = new RangedAttackCalculator(char, 15);

        expect(calculator.character).to.be.equals(char);
        expect(calculator.dice).to.be.equals(15);
    });

    it("should get the attack rollCombat", () => {
        let char = new Character({ dex: 8, spr: 0, agi: 0, str: 0}),
            calculator = new RangedAttackCalculator(char, 10);

        expect(calculator.getRoll()).to.be.equals(18);
    });

    it("should get base damage", () => {
        let char = new Character({ dex: 8, spr: 0, agi: 0, str: 0}),
            calculator = new RangedAttackCalculator(char, 0);

        expect(calculator.getBaseDamage()).to.be.equals(8);
    });
});
