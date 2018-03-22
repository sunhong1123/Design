// 程序入口
var GameMain = /** @class */ (function () {
    function GameMain() {
        Laya.init(600, 400);
        this.run();
    }
    GameMain.prototype.run = function () {
        //简单工厂测试
        window["factorys"] = function (a, b, syb) {
            try {
                factory.Factory.getResult(a, b, syb);
            }
            catch (error) {
                console.log(error);
            }
        };
    };
    return GameMain;
}());
new GameMain();
//# sourceMappingURL=LayaSample.js.map