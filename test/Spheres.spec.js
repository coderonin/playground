import Sphere from '../src/Sphere.js';

describe("Sphere class tests", () => {

    it("should create a Sphere", () => {
        let sphere = new Sphere({});
        expect(sphere).not.to.be.null;
    });

    it("should add experience to sphere and update its value", ()=>{
        let sphere = new Sphere({name:"conexion", value:0, exp:2, ease: 4});

        sphere.expUp();

        expect(sphere.exp).to.be.equals(3);
        expect(sphere.value).to.be.equals(0);

        sphere.expUp();

        expect(sphere.exp).to.be.equals(0);
        expect(sphere.value).to.be.equals(1);

        sphere.expUp();

        expect(sphere.exp).to.be.equals(1);
        expect(sphere.value).to.be.equals(1);
    });
});
