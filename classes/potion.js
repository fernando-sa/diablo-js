// TODO
class Potion extends Shape {
    constructor(x, y) {
        super(potionSprite, x, y);
        this.sprite.steps = 6;
        this.sprite.angles = 4;
        this.use = function (mob) {
            if (mob.addToBelt(this))
                remove(potions, this);
        };
    }
}