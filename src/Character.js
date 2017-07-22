import Sphere from './Sphere.js';

export default class Character {
    constructor({dex, spr, agi, str, spheres}){
        this.dex = dex;
        this.spr = spr;
        this.agi = agi;
        this.str = str;
        this._bonus = {
            dex: 0,
            spr: 0,
            agi: 0,
            str: 0
        };
        this.calculateBaseAttributes();
        this.setSpheres(spheres)
    }

    setWeapon(weapon){
        this._weapon = weapon;
    }

    setSpheres(spheres){
        this._spheres = {};
        (spheres || []).forEach((sphere) => {
            this._spheres[sphere.name] = new Sphere(sphere);
        });
    }

    getSphere(name){
        return this._spheres[name];
    }

    set dex(d){
        this._dex = d;
    }

    get dex(){
        return this._dex + this._bonus.dex;
    }

    set spr(s){
        this._spr = s;
    }

    get spr(){
        return this._spr + this._bonus.spr;
    }

    set agi(a){
        this._agi = a;
    }

    get agi(){
        return this._agi + this._bonus.agi;
    }

    set str(s){
        this._str = s;
    }

    get str(){
        return this._str + this._bonus.str;
    }

    get flee(){
        return this.agi + (this.dex - 3);
    }

    get defense(){
        return this.str + (this.spr -3);
    }

    get magicDefense(){
        return this.spr + (this.str -3);
    }

    get baseCast(){
        return this.dex + (this.spr - 3);
    }

    get movement(){
        return this.agi - 1;
    }

    get stealth(){
        return (this.dex - 3) + Math.round(this.agi/2);
    }

    get initiative(){
        return this.spr;
    }

    calculateBaseAttributes(){
        this.maxHp = (this._spr + 2 * this._str) * 5;
        this.hp = this.maxHp;
        this.maxMana = (this._spr * 3) + 1;
        this.mana = this.maxMana;
    }

    getWeaponBonus(){
        return this._weapon ? this._weapon.getBonus() : 0;
    }

    getWeaponDamage(){
        return this._weapon ? this._weapon.getDamage() : 0;
    }
}
