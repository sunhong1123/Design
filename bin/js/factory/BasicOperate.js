var factory;
(function (factory) {
    var BasicOperate = /** @class */ (function () {
        function BasicOperate() {
        }
        Object.defineProperty(BasicOperate.prototype, "numberA", {
            get: function () {
                return this._numberA;
            },
            set: function (value) {
                this._numberA = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BasicOperate.prototype, "numberB", {
            get: function () {
                return this._numberB;
            },
            set: function (value) {
                this._numberB = value;
            },
            enumerable: true,
            configurable: true
        });
        return BasicOperate;
    }());
    factory.BasicOperate = BasicOperate;
})(factory || (factory = {}));
//# sourceMappingURL=BasicOperate.js.map