import Character from '../../../src/paranoia/Character.js';
import Calculator from "../../../src/paranoia/calculators/Calculator";

describe("Calculator tests", () => {

    it("should create a calculator", () => {
        let char = new Character({}),
            calculator = new Calculator(char, 15);

        expect(calculator.character).to.be.equals(char);
        expect(calculator.dice).to.be.equals(15);
    });
});
