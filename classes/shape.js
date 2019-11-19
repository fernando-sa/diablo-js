class Shape {
    constructor(sprite, x, y) {
        this.x = x;
        this.y = y;
        this.offset_x = 0;
        this.offset_y = 0;
        this.sprite = sprite;
    }

    isAboveHero() {
        // REFACTOR: Change maxlen name
        // maxlen = detectRange
        let maxlen = tw * visible / 2;
        return (Math.abs(this.x - hero.x) <= maxlen) && (Math.abs(this.y - hero.y) <= maxlen);
    };
}
