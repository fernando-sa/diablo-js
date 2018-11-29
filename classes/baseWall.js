// TODO
class BaseWall extends Shape {
    constructor(sprite, header, x, y) {
        super(sprite, x, y);
        this.header = header;
        this.isAboveHero = function () { return true; };
        this.offset_x -= 14;
        this.offset_y += 82;
    }
}