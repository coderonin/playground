export default class Character {
    constructor(dex, spr, agi, str){
        Object.assign(this, {
            dex,
            spr,
            agi,
            str
        });
        this.calculateBaseAttributes();
    }

    calculateBaseAttributes(){
        this.maxHp = (this.spr + 2 * this.str) * 5;
        this.hp = this.maxHp;
        this.initiative = this.spr;
        this.stealth = (this.dex - 3) + Math.round(this.agi/2);
        this.movement = this.agi - 1;
        this.mana = (this.spr * 3) + 1;
        this.flee = this.agi + (this.dex - 3);
        this.defense = this.str + (this.spr -3);
    }
}
