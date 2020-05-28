"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccurateTank = exports.UltraTank = exports.Tank = void 0;
var ATank = /** @class */ (function () {
    function ATank() {
    }
    return ATank;
}());
var Tank = /** @class */ (function (_super) {
    __extends(Tank, _super);
    function Tank(y, x, type) {
        var _this = _super.call(this) || this;
        _this.tankType = 'Standart';
        _this.damage = 100;
        _this.rotateAngle = 360;
        _this.missСhance = 0.25;
        _this.fireTemp = 1;
        _this.hp = 200;
        _this.isMissing = function (dist) {
            return Math.random() < _this.missСhance + dist / 50;
        };
        _this.isDead = function () { return _this.hp <= 0; };
        _this.run = function () {
            _this.x++;
        };
        _this.changeY = function () {
            if (_this.canChangeY) {
                if (Math.random() > 0.5) {
                    _this.y > 0 ? _this.y-- : _this.y++;
                }
                else {
                    _this.y < 9 ? _this.y++ : _this.y--;
                }
                return true;
            }
            else {
                _this.hp = 0;
                return false;
            }
        };
        _this.getDamage = function () { return _this.damage; };
        _this.getFireTemp = function () { return _this.fireTemp; };
        _this.getType = function () { return _this.type; };
        _this.getId = function () { return _this.id; };
        _this.takeDamage = function (dmg) {
            _this.hp -= dmg;
        };
        _this.getParams = function () { return [_this.id, _this.tankType, _this.hp]; };
        _this.getCords = function () { return [_this.x, _this.y]; };
        _this.y = y;
        _this.x = x;
        _this.type = type;
        _this.id = x + type + y;
        _this.canChangeY = Math.random() > 0.5 ? true : false;
        return _this;
    }
    return Tank;
}(ATank));
exports.Tank = Tank;
var UltraTank = /** @class */ (function (_super) {
    __extends(UltraTank, _super);
    function UltraTank(y, x, type) {
        var _this = _super.call(this, y, x, type) || this;
        _this.tankType = 'Ultra';
        _this.damage = 200;
        _this.rotateAngle = 180;
        _this.missСhance = 0.5;
        _this.fireTemp = 2;
        _this.hp = 300;
        return _this;
    }
    return UltraTank;
}(Tank));
exports.UltraTank = UltraTank;
var AccurateTank = /** @class */ (function (_super) {
    __extends(AccurateTank, _super);
    function AccurateTank(y, x, type) {
        var _this = _super.call(this, y, x, type) || this;
        _this.tankType = 'Accurate';
        _this.damage = 50;
        _this.rotateAngle = 90;
        _this.missСhance = 0.1;
        _this.fireTemp = 1;
        _this.hp = 150;
        return _this;
    }
    return AccurateTank;
}(Tank));
exports.AccurateTank = AccurateTank;
