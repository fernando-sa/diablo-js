// TODO
class WallObject extends BaseWall {
    constructor(index, x, y) {
        super(level.object.tiles[index], level.object.header[index], x, y);

        this.offset_x += 16;

        let self = this;
        
        // REFACTOR: Remove ambient objects from wallObject
        // Fix objects sprite positioning
        load(this.sprite, function () {
            if (self.sprite.width < tw) {
                self.offset_x -= (tw - self.sprite.width) / 2
            }
        })
    }
}