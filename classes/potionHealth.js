// TODO
class PotionHealth extends Potion {
    constructor(x, y) {
        super(x, y);
        this.step = 0;
        this.angle = 0;
        this.health = 1000;
        this.drink = function (mob) {
            mob.health = Math.min(mob.origin_health, mob.health + this.health);
        };
    }
}