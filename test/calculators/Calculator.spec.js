import Character from '../../src/Character.js';
import Calculator from "../../src/calculators/Calculator";

describe("Calculator tests", () => {

    it("should create a calculator", () => {
        let char = new Character(0,0,0,0),
            calculator = new Calculator(char, 15);

        expect(calculator.character).to.be.equals(char);
        expect(calculator.dice).to.be.equals(15);
    });
});
