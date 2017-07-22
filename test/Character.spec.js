import Character from '../src/Character.js';
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
        let char = new Character(0, 0, 0, 0);
        expect(char).not.to.be.null;
    });

    it("should calculate base attributes", ()=>{
        let AGI = 6,
            DEX = 4,
            STR = 7,
            SPR = 3,
            char;

        char = new Character(DEX, SPR, AGI, STR);
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
        let char = new Character(0, 0, 0, 0);

        char.setWeapon({
            name:"weapon test",
            getBonus: () => 10,
            getDamage: () => 5
        });
        expect(char._weapon.name).to.be.equals("weapon test");
        expect(char.getWeaponBonus()).to.be.equals(10);
        expect(char.getWeaponDamage()).to.be.equals(5);

        char.setWeapon(null);
        expect(char._weapon).to.be.null;
        expect(char.getWeaponBonus()).to.be.equals(0);
        expect(char.getWeaponDamage()).to.be.equals(0);
    });
});
