// TODO
class DeathMob extends Shape {
    constructor(mob) {
        super(mob.death, mob.x, mob.y);

        this.step = 0;
        this.angle = mob.angle;
        this.used = false;
        this.use = function (mob) {
            if (!this.used && Math.random() > 0.5)
                coins.push(new Coin(this.x + 50, this.y + 50));
            if (!this.used && Math.random() > 0.5)
                potions.push(new PotionHealth(this.x + 50, this.y));
            this.used = true;
        };
    }
}