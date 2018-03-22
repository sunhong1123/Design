// 程序入口
class GameMain {
    constructor() {
        Laya.init(600, 400);
        this.run();
    }

    private run() {
        //简单工厂测试
        window[`factorys`] = (a, b, syb) => {
            try {
                factory.Factory.getResult(a, b, syb);
            } catch (error) {
                console.log(error);
            }
        }
    }
}
new GameMain();