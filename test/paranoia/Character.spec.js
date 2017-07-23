import Character from '../../src/paranoia/Character.js';
import Sphere from '../../src/paranoia/Sphere.js';

let sandbox = sinon.sandbox.create(),
    calculateBaseAttributes;

describe("Character class tests", () => {

    beforeEach("Set a sandbox", () => {
        calculateBaseAttributes = sandbox.spy(Character.prototype, "calculateBaseAttributes");
    });

    afterEach("Destroy the sandbox", () => {
        sandbox.restore();
    });

    it("should create a Character", () => {
        let char = new Character({});
        expect(char).not.to.be.null;
    });

    it("should calculate base attributes", ()=>{
        let AGI = 6,
            DEX = 4,
            STR = 7,
            SPR = 3,
            char;

        char = new Character({ dex: DEX, spr: SPR, agi: AGI, str: STR });
        expect(calculateBaseAttributes).to.have.been.calledOnce;

        expect(char.maxHp).to.be.equals(85);
        expect(char.maxHp).to.be.equals(char.hp);
        expect(char.initiative).to.be.equals(SPR);
        expect(char.stealth).to.be.equals(4);
        expect(char.movement).to.be.equals(5);
        expect(char.mana).to.be.equals(10);
        expect(char.flee).to.be.equals(7);
        expect(char.defense).to.be.equals(7);
    });

    it("should handle a weapon", () => {
        let char = new Character({});

        char.setWeapon({
            name:"weapon test",
            getBonus: () => 10,
            getDamage: () => 5
        });
        expect(char._weapon.name).to.be.equals("weapon test");
        expect(char.getAttackBonus()).to.be.equals(10);
        expect(char.getAttackDamage()).to.be.equals(5);

        char.setWeapon(null);
        expect(char._weapon).to.be.null;
        expect(char.getAttackBonus()).to.be.equals(0);
        expect(char.getAttackDamage()).to.be.equals(0);
    });

    it("should have spheres", () => {
        let spheres = [
                { name: "emision", value: 1, exp: 1, ease: 3 }
            ],
            char = new Character({spheres});

        expect(char._spheres).not.to.be.null;
        expect(char.getSphere("emision").name).to.be.equals("emision");
    });
});
