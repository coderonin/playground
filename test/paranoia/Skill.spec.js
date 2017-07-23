import Skill from '../../src/paranoia/Skill.js';

describe("Skill class tests", () => {

    it("should create a Sphere", () => {
        let skill = new Skill({});
        expect(skill).not.to.be.null;
    });

    it("should get cast cost", ()=>{
        let skill = new Skill({
            name: "skill1",
            character: {
                getSphere: (name) => { return { level: 2 }; }
            },
            spheresNames: ["test"]
        });

        expect(skill.getCastCost()).to.be.equals(4);
    });

    it("should get level of effort", ()=>{
        let skill = new Skill({
            name: "skill1",
            character: {
                getSphere: (name) => {
                    return {
                        level: 2,
                        ease: 8,
                        value: 3
                    };
                }
            },
            spheresNames: ["test"]
        });

        expect(skill.getLevelOfEffort()).to.be.equals(71);
    });
});
