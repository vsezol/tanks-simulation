"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tanks_1 = require("./modules/tanks");
var FightArea = /** @class */ (function () {
    function FightArea(blueTanks, greenTanks) {
        this.blueTanks = blueTanks;
        this.greenTanks = greenTanks;
    }
    FightArea.prototype.info = function () {
        console.log("BLUE: " + this.blueTanks.length);
        this.blueTanks.forEach(function (tank) {
            var _a = tank.getParams(), id = _a[0], type = _a[1], hp = _a[2];
            console.log("id: " + id + " type: " + type + " HP: " + hp);
        });
        console.log("\nGREEN: " + this.greenTanks.length);
        this.greenTanks.forEach(function (tank) {
            var _a = tank.getParams(), id = _a[0], type = _a[1], hp = _a[2];
            console.log("id: " + id + " type: " + type + " HP: " + hp);
        });
    };
    FightArea.prototype.playIneTick = function (tick) {
        var _this = this;
        this.blueTanks.forEach(function (btank, index) {
            if (tick % btank.getFireTemp() == 0) {
                var attackIndex = Math.round(Math.random() * (_this.greenTanks.length - 1));
                _this.greenTanks[attackIndex].takeDamage(btank.getDamage());
            }
        });
        this.greenTanks.forEach(function (gtank, index) {
            if (tick % gtank.getFireTemp() == 0) {
                var attackIndex = Math.round(Math.random() * (_this.greenTanks.length - 1));
                var _a = gtank.getCords(), gx = _a[0], gy = _a[1];
                var btank = _this.blueTanks[attackIndex];
                var _b = btank.getCords(), bx = _b[0], by = _b[1];
                console.log(gx, gy, bx, by);
                // takeDamage(gtank.getDamage())
            }
        });
    };
    return FightArea;
}());
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
var tick = 0;
setInterval(function () {
    console.clear();
    fightArea.playIneTick(tick);
    fightArea.info();
    tick++;
}, 1000);
