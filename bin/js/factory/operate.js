var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var factory;
(function (factory) {
    /** 加法运算 */
    var operateAdd = /** @class */ (function (_super) {
        __extends(operateAdd, _super);
        function operateAdd() {
            return _super.call(this) || this;
        }
        operateAdd.prototype.getResult = function () {
            return this.numberA + this.numberB;
        };
        return operateAdd;
    }(factory.BasicOperate));
    factory.operateAdd = operateAdd;
    /** 减法运算 */
    var operateSub = /** @class */ (function (_super) {
        __extends(operateSub, _super);
        function operateSub() {
            return _super.call(this) || this;
        }
        operateSub.prototype.getResult = function () {
            return this.numberA - this.numberB;
        };
        return operateSub;
    }(factory.BasicOperate));
    factory.operateSub = operateSub;
    /** 乘法运算 */
    var operateMultiply = /** @class */ (function (_super) {
        __extends(operateMultiply, _super);
        function operateMultiply() {
            return _super.call(this) || this;
        }
        operateMultiply.prototype.getResult = function () {
            return this.numberA * this.numberB;
        };
        return operateMultiply;
    }(factory.BasicOperate));
    factory.operateMultiply = operateMultiply;
    /** 除法运算 */
    var operateDivide = /** @class */ (function (_super) {
        __extends(operateDivide, _super);
        function operateDivide() {
            return _super.call(this) || this;
        }
        operateDivide.prototype.getResult = function () {
            if (this.numberB == 0) {
                throw new Error("\u5206\u6BCD\u4E0D\u80FD\u4E3A0");
            }
            return this.numberA / this.numberB;
        };
        return operateDivide;
    }(factory.BasicOperate));
    factory.operateDivide = operateDivide;
})(factory || (factory = {}));
//# sourceMappingURL=operate.js.map