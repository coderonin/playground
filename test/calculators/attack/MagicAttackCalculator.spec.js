import Character from '../../../src/Character.js';
import MagicAttackCalculator from "../../../src/calculators/attack/MagicAttackCalculator";

describe("MagicAttackCalculator tests", () => {

    it("should create a MagicAttackCalculator", () => {
        let char = new Character(0,0,0,0),
            calculator = new MagicAttackCalculator(char, 15);

        expect(calculator.character).to.be.equals(char);
        expect(calculator.dice).to.be.equals(15);
    });

    it("should get the attack rollCombat", () => {
        let char = new Character(8,3,0,0),
            calculator = new MagicAttackCalculator(char, 10);

        expect(calculator.getRoll()).to.be.equals(18);
    });

    it("should get base damage", () => {
        let char = new Character(8,3,0,0),
            calculator = new MagicAttackCalculator(char, 0);

        calculator.setSkill({
            getDamage: ()=> 8
        });

        expect(calculator.getBaseDamage()).to.be.equals(8);
    });
});
