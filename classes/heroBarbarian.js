// Classe do nosso char
class HeroBarbarian extends AgressiveMob {
    constructor(x, y) {
        super(x, y, "BA");
        this.attackOffset = 40;
        this.normalOffset = 10;
        this.health = this.origin_health = 1000;
        this.belt = { items: [], size: 10 };
        this.st = 16;
        this.criticalDamage = 0.4;
        this.currentDamage = 320;
    }

    addToBelt(potion) {
        for (let i = 0; i < this.belt.size; i++) {
            if (typeof this.belt.items[i] == "undefined") {
                this.belt.items[i] = potion;
                return true;
            }
        }
        return false;
    };

    getDamage() {
        return this.currentDamage * (Math.random() <= this.criticalDamage ? 4 : 1);
    };
}