// TODO
class Barrel extends Shape {
    constructor(x, y) {
        super(barrelSprite, x, y);
        this.use = function (mob) {
            if (mob.doAttack)
                mob.doAttack(this);
        };
        this.damage = function (damage) {
            remove(barrels, this);
            if (Math.random() > 0.7)
                coins.push(new Coin(this.x, this.y));
        };
    }
}