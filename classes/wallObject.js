// TODO
class WallObject extends BaseWall {
    constructor(index, x, y) {
        super(level.object.tiles[index], level.object.header[index], x, y);

        this.offset_x += 16;
        let self = this;
        load(this.sprite, function () {
            if (self.sprite.width < 160) {
                self.offset_x -= (160 - self.sprite.width) / 2
            }
        })
    }
}