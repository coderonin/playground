import Character from '../../../src/Character.js';
import MeleeDefenseCalculator from "../../../src/calculators/defense/MeleeDefenseCalculator";

describe("MeleeDefenseCalculator tests", () => {

    it("should create a MeleeDefenseCalculator", () => {
        let char = new Character(0,0,0,0),
            calculator = new MeleeDefenseCalculator(char, 15);

        expect(calculator.character).to.be.equals(char);
        expect(calculator.dice).to.be.equals(15);
    });

    it("should get the defense rollCombat", () => {
        let char = new Character(0,3,0,8),
            calculator = new MeleeDefenseCalculator(char, 10);

        expect(calculator.getRoll()).to.be.equals(18);
    });
});
