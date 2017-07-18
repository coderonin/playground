import Character from '../../../src/Character.js';
import MeleeFleeCalculator from "../../../src/calculators/defense/MeleeFleeCalculator";

describe("MeleeFleeCalculator tests", () => {

    it("should create a MeleeFleeCalculator", () => {
        let char = new Character(0,0,0,0),
            calculator = new MeleeFleeCalculator(char, 15);

        expect(calculator.character).to.be.equals(char);
        expect(calculator.dice).to.be.equals(15);
    });

    it("should get the flee rollCombat", () => {
        let char = new Character(3,0,8,0),
            calculator = new MeleeFleeCalculator(char, 10);

        expect(calculator.getRoll()).to.be.equals(18);
    });
});
