// TODO
class Coin extends Shape {
    constructor(x, y) {
        super(coinSprite, x, y);
        this.coins = Math.floor(Math.random() * 1000);
        this.use = function (mob) {
            remove(coins, this);
            mob.coins += this.coins;
        };
    }
}