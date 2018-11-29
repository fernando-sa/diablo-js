// TODO
class Wall extends BaseWall {
    constructor(index, x, y) {
        super(level.wall.tiles[index], level.wall.header[index], x, y);

        switch (this.header.orientation) {
            case 2:
                this.offset_x += 16;
                break;
            case 6:
                this.offset_x += 16;
                break;
            case 5:
                this.offset_x -= 16;
                break;
            case 3:
                for (let inx in level.wall.header) {
                    let h = level.wall.header[inx];
                    if (h.orientation == 4 && h.main_index == this.header.main_index && h.sub_index == this.header.sub_index) {
                        walls.push(new Wall(inx, x, y))
                        break;
                    }
                }
                this.offset_x += 16;
                break;
            case 4:
                this.offset_x -= 16;
                break;
        }
    }
}