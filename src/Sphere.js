export default class Sphere {
    constructor({name, value, exp, ease}){
        this.name = name;
        this.value = value || 0;
        this.exp = exp || 0;
        this.ease = ease;
    }

    expUp(){
        this.exp++;
        this.updateValue();
    }

    updateValue(){
        let index = this.value > 0 ? this.value : 1,
            remaningPoints = this.exp - (index * this.ease);

        if(remaningPoints >= 0){
            this.exp = remaningPoints;
            this.value++;
        }
    }
}
