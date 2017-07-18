import Character from '../../src/Character.js';
import FightHandler from '../../src/handlers/FightHandler.js';
import MeleeAttackCalculator from "../../src/calculators/attack/MeleeAttackCalculator";
import MeleeDefenseCalculator from "../../src/calculators/defense/MeleeDefenseCalculator";
import CombatResultTypes from "../../src/enums/CombatResultTypes";

let sandbox = sinon.sandbox.create(),
    attackRoll,
    attackGetBaseDamage,
    defenseSetDamage,
    defenseRoll;

describe("FightHandler tests", () => {

    beforeEach("Set a sandbox", () => {
        attackRoll = sandbox.spy(MeleeAttackCalculator.prototype, "getRoll");
        attackGetBaseDamage = sandbox.spy(MeleeAttackCalculator.prototype, "getBaseDamage");
        defenseRoll = sandbox.spy(MeleeDefenseCalculator.prototype, "getRoll");
        defenseSetDamage = sandbox.spy(MeleeDefenseCalculator.prototype, "setDamage");
    });

    afterEach("Destroy the sandbox", () => {
        sandbox.restore();
    });

    it("should calculate efficacy", () => {
        let result = FightHandler.efficacy(18,15);
        expect(result).to.be.equals(0.2);
    });

    it("should roll a combat with effective attack", () =>{
        let attacker = new Character(0,0,0,8),
            defender = new Character(0,0,0,2),
            attackCalculator = new MeleeAttackCalculator(attacker, 12),
            defenseCalculator = new MeleeDefenseCalculator(defender, 10),
            combatResult = FightHandler.rollCombat(attackCalculator, defenseCalculator);

        expect(attackRoll).to.have.been.calledOnce;
        expect(attackGetBaseDamage).to.have.been.calledOnce;
        expect(defenseSetDamage).to.have.been.calledOnce;
        expect(defenseRoll).to.have.been.calledOnce;

        expect(combatResult.type).to.be.equals(CombatResultTypes.DIRECT);
    });

    it("should roll a combat with effective defense", () =>{
        let attacker = new Character(0,0,0,2),
            defender = new Character(0,0,0,8),
            attackCalculator = new MeleeAttackCalculator(attacker, 12),
            defenseCalculator = new MeleeDefenseCalculator(defender, 15),
            combatResult = FightHandler.rollCombat(attackCalculator, defenseCalculator);

        expect(attackRoll).to.have.been.calledOnce;
        expect(attackGetBaseDamage).not.to.have.been.called;
        expect(defenseSetDamage).not.to.have.been.called;
        expect(defenseRoll).to.have.been.calledOnce;

        expect(combatResult.type).to.be.equals(CombatResultTypes.BLOCK);
    });
});