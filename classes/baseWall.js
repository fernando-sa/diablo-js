class BaseWall extends Shape {
    constructor(sprite, header, x, y) {
        super(sprite, x, y);
        this.header = header;
        // It has to be true to be loaded in loadZb(game.js)
        this.isAboveHero = function () { return true; };
        this.offset_x -= 14;
        this.offset_y += 82;
    }
}