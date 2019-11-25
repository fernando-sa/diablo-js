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

    addToBelt(item) {
        for (let i = 0; i < this.belt.size; i++) {
            if (typeof this.belt.items[i] == "undefined") {
                this.belt.items[i] = item;
                return true;
            }
        }
        return false;
    };

    getDamage() {
        let isCritical = Math.random() <= this.criticalDamage;
        let damageMultiplier = isCritical ? 4 : 1;
        return this.currentDamage * damageMultiplier;
    };
}