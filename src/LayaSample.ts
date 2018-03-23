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
                let op = factory.Factory.getResult(a, b, syb);
                op.numberA = a;
                op.numberB = b;
                console.log(`计算结果为${op.getResult()}`);
            } catch (error) {
                console.log(error);
            }
        }
    }
}
new GameMain();