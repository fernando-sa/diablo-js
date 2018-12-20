// TODO:
// Criar comentário de explicação da classe
// Criar nomes pertinentes as variaveis
class Mob extends Shape {
    constructor(x, y, name) {
        // Passing location and idle animation to shape.js
        super(monsterMap[name].NU, x, y);
        this.to_x = x;
        this.to_y = y;
        this.name = name;
        //// Setting some animations
        // Idle
        this.stay = monsterMap[name].NU;
        // Running
        this.run = monsterMap[name].WL;
        // Dead
        this.death = monsterMap[name].DD;
        //Setting start animation as idle
        this.currentState = this.stay;
        this.step = 0;
        this.angle = 0;
        //Something to do with the speed of the mobs
        this.st = 8;

        this.origin_health = this.health = 1000;
        this.resistance = 10; // damage resistance, less than 1000

    }

    // responsible for walking rotation
    rotate(sx, sy) {
        let l = this.currentState.angles;
        this.angle = Math.round((Math.atan2(sy, sx) / Math.PI + 2.75) * l / 2 + l / 2) % l;
    };


    // responsible for the action rotation
    // as attacking something behind the mob
    rotateTo(point) {
        this.rotate(point.x - this.x, point.y - this.y);
    };

    setState(state) {
        if (this.currentState != state) {
            this.currentState = state;
            this.step = -1;
        }
    };

    // Function that decide what are the next animations
    // TODO: Abstract this to a proprer animation engine
    nextStep() {
        let dx = (this.to_x - this.x), dy = (this.to_y - this.y);
        if ((Math.sqrt((dx * dx) + (dy * dy))) > this.st) { // run
            let tx = 0;
            let ty = 0;
            for (let st = 0; st < this.st; st += 0.01) {
                let sx = st * dx / Math.sqrt((dx * dx) + (dy * dy));
                let sy = sx * dy / dx;
                if (isWayWall(this.x + sx, this.y + sy)) {
                    tx = sx;
                    ty = sy;
                }
                else
                    break;
            }
            this.rotate(tx, ty);
            if (Math.sqrt((tx * tx) + (ty * ty)) >= this.st / 2) {
                this.x += tx;
                this.y += ty;
                this.setState(this.run);
            }
            else {
                this.setState(this.stay);
                this.x += tx;
                this.y += ty;
                this.to_x = this.x;
                this.to_y = this.y;
            }
        }
        else {
            this.setState(this.stay);
            this.to_x = this.x;
            this.to_y = this.y;
        }
        this.step = (this.step + 1) % (this.currentState.steps);
        this.sprite = this.currentState;
    };

    use(mob) {
        if (mob.doAttack)
            mob.doAttack(this);
    };

    damage(damage) {
        let health = this.health - damage * 1000 / (1000 - this.resistance);
        if (health <= 0) {
            this.health = 0;
            remove(monsters, this);
            if (this.death)
                deathmobs.push(new DeathMob(this));
        }
        else {
            this.health = health;
        }
    };
}