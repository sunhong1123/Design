/**
* name
*/
var factory;
(function (factory) {
    var Factory = /** @class */ (function () {
        function Factory() {
        }
        Factory.getResult = function (a, b, syb) {
            var op;
            switch (syb) {
                case 1 /* 加 */:
                    op = new factory.operateAdd();
                    break;
                case 2 /* 减 */:
                    op = new factory.operateSub();
                    break;
                case 3 /* 乘 */:
                    op = new factory.operateMultiply();
                    break;
                case 4 /* 除 */:
                    op = new factory.operateDivide();
                    break;
            }
            op.numberA = a;
            op.numberB = b;
            console.log("\u8BA1\u7B97\u7ED3\u679C\u4E3A" + op.getResult());
        };
        return Factory;
    }());
    factory.Factory = Factory;
})(factory || (factory = {}));
//# sourceMappingURL=Factory.js.map