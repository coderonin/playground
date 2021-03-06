import PhisicalDefenseCalculator from "../../../src/paranoia/calculators/defense/PhisicalDefenseCalculator";
import CombatResult from "../../../src/paranoia/calculators/CombatResult";
import CombatResultTypes from "../../../src/paranoia/enums/CombatResultTypes";

describe("CombatResult tests", () => {

    it("should create a CombatResult", () => {
        let calculator = new PhisicalDefenseCalculator(null, 0),
            result = new CombatResult(calculator);

        expect(result.defenseCalculator).to.be.equals(calculator);
        expect(result.type).to.be.equals(CombatResultTypes.DIRECT);
    });

    it("should set the value for needFullDamage", () => {
        let calculator = new PhisicalDefenseCalculator(null, 0),
            result = new CombatResult(calculator);
        result.setNeedFullDamage(true);

        expect(result.needFullDamage).to.be.true;
    });

    it("should get damage calculation", () => {
        let calculator = new PhisicalDefenseCalculator(null, 0),
            result = new CombatResult(calculator);

        sinon.stub(calculator, "getDamage").callsFake((dmg) => dmg + 10);

        expect(result.getDamage(10)).to.be.equals(20);

        calculator.getDamage.restore();
    });
});
