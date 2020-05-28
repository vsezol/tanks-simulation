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
    function Tank(y) {
        var _this = _super.call(this) || this;
        _this.damage = 100;
        _this.rotateAngle = 360;
        _this.missСhance = 0.25;
        _this.fireTemp = 1;
        _this.hp = 200;
        _this.x = 0;
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
        _this.y = y;
        _this.canChangeY = Math.random() > 0.5 ? true : false;
        return _this;
    }
    return Tank;
}(ATank));
exports.Tank = Tank;
var UltraTank = /** @class */ (function (_super) {
    __extends(UltraTank, _super);
    function UltraTank(y) {
        var _this = _super.call(this, y) || this;
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
    function AccurateTank(y) {
        var _this = _super.call(this, y) || this;
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
