"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tanks_1 = require("./tanks/tanks");
var FightArea = /** @class */ (function () {
    function FightArea(blueTanks, greenTanks) {
        var _this = this;
        // information about fight
        this.info = function () {
            console.log("\nBLUE: " + _this.blueTanks.length);
            _this.blueTanks.forEach(function (tank) {
                var _a = tank.getParams(), id = _a[0], type = _a[1], hp = _a[2];
                console.log("id: " + id + " type: " + type + " HP: " + hp);
            });
            console.log("\nGREEN: " + _this.greenTanks.length);
            _this.greenTanks.forEach(function (tank) {
                var _a = tank.getParams(), id = _a[0], type = _a[1], hp = _a[2];
                console.log("id: " + id + " type: " + type + " HP: " + hp);
            });
        };
        // somebody attack somebody
        this.attackTarget = function (attackers, targets) {
            attackers.forEach(function (attacker) {
                if (tick % attacker.getFireTemp() == 0) {
                    var attackIndex = Math.round(Math.random() * (targets.length - 1));
                    var _a = attacker.getCords(), ax = _a[0], ay = _a[1];
                    var target = targets[attackIndex];
                    if (target !== undefined && attacker !== undefined) {
                        var _b = target.getCords(), tx = _b[0], ty = _b[1];
                        var distance = FightArea.getVectLen(tx, ty, ax, ay);
                        if (!target.isMissing(distance)) {
                            target.takeDamage(attacker.getDamage());
                            console.log(attacker.getId() + " => " + target.getId());
                        }
                        else {
                            console.log(attacker.getId() + " X " + target.getId());
                        }
                    }
                }
            });
        };
        // filter dead tanks
        this.filterTanks = function () {
            _this.blueTanks = _this.blueTanks.filter(function (btank) { return !btank.isDead(); });
            _this.greenTanks = _this.greenTanks.filter(function (gtank) { return !gtank.isDead(); });
        };
        // checking winner
        this.checkWin = function () {
            if (_this.blueTanks.length <= 0) {
                return 'green';
            }
            else if (_this.greenTanks.length <= 0) {
                return 'blue';
            }
            else {
                return 'nobody';
            }
        };
        // move all tanks
        this.moveTanks = function (tanks) {
            tanks.forEach(function (tank) { return tank.run(); });
        };
        this.blueTanks = blueTanks;
        this.greenTanks = greenTanks;
    }
    // main func to control fight
    FightArea.prototype.playIneTick = function (tick) {
        this.filterTanks();
        console.log('\nBLUE => GREEN\n');
        this.attackTarget(this.blueTanks, this.greenTanks);
        console.log('\nGREEN => BLUE\n');
        this.attackTarget(this.greenTanks, this.blueTanks);
        this.moveTanks(this.blueTanks);
        this.moveTanks(this.greenTanks);
    };
    // get vector length
    FightArea.getVectLen = function (x1, y1, x2, y2) { return Math.abs(Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2))); };
    return FightArea;
}());
// generate tanks
var fightArea = new FightArea([
    new tanks_1.Tank(0, 0, 'blue'),
    new tanks_1.UltraTank(1, 0, 'blue'),
    new tanks_1.AccurateTank(2, 0, 'blue'),
    new tanks_1.UltraTank(3, 0, 'blue'),
    new tanks_1.AccurateTank(4, 0, 'blue'),
    new tanks_1.Tank(5, 0, 'blue'),
    new tanks_1.Tank(6, 0, 'blue'),
    new tanks_1.AccurateTank(7, 0, 'blue'),
    new tanks_1.Tank(8, 0, 'blue'),
    new tanks_1.UltraTank(9, 0, 'blue')
], [
    new tanks_1.Tank(0, 9, 'green'),
    new tanks_1.UltraTank(1, 9, 'green'),
    new tanks_1.AccurateTank(2, 9, 'green'),
    new tanks_1.UltraTank(3, 9, 'green'),
    new tanks_1.UltraTank(4, 9, 'green'),
    new tanks_1.UltraTank(5, 9, 'green'),
    new tanks_1.UltraTank(6, 9, 'green'),
    new tanks_1.AccurateTank(7, 9, 'green'),
    new tanks_1.AccurateTank(8, 9, 'green'),
    new tanks_1.AccurateTank(9, 9, 'green')
]);
// fight loop
var tick = 0;
var gameInterval = setInterval(function () {
    console.clear();
    var winner = fightArea.checkWin();
    if (winner !== 'nobody') {
        console.clear();
        for (var i = 0; i <= 10; i++) {
            console.log('WINNER is', winner);
        }
        clearInterval(gameInterval);
    }
    fightArea.playIneTick(tick);
    fightArea.info();
    tick++;
}, 100);
