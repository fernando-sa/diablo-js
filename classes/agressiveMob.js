// Criatura que atacam
// TODO:
// Descobrir pq o nextStep da stackoverflow se tirar do construtor
// Como sempre, melhorar o nome das varaiveis
class AgressiveMob extends Mob {
    constructor(x, y, name) {
        super(x, y, name);
        //Mob.call(this, x, y, name);
        this.attack = monsterMap[name].A1;
        this.attackOffset = monsterMap[name].attackOffset || 0;
        this.normalOffset = 0;
        this._nextStep = this.nextStep;
        this.nextStep = function () {
            if (!this.isAboveHero())
                return;
            if (this.currentState == this.attack) {
                if (this.step == (this.attack.steps - 1)) {
                    this.currentState = this.stay;
                    this.step = -1;
                    if (this.attacked) {
                        this.attacked.damage(this.getDamage());
                        this.attacked = null;
                    }
                }
                this.step = (this.step + 1) % (this.currentState.steps);
                this.sprite = this.currentState;
            }
            else
                this._nextStep();
            this.offset_y = this.currentState == this.attack ? this.attackOffset : this.normalOffset;
        };
        this.currentDamage = 30;

        this.attacked = null;
    };

    getDamage() {
        return this.currentDamage;
    };

    doAttack(mob) {
        if (this.attacked != mob) {
            this.rotateTo(mob);
            this.setState(this.attack);
            this.attacked = mob;
        }
    };
}