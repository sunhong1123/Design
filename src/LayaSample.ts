// 程序入口
class GameMain {
    constructor() {
        Laya.init(600, 400);
        this.run();
    }
    /**------------------大神解释工厂和策略模式的区别----------------- */
    // 女人有很多种，基本都会生孩子。（不要在意例子本身不雅，注意体会其含义）
    // 1、找个会生孩子的身材好的女人。（如何找的逻辑就交给女人工厂了，客户端只要得到女人就可以了）。
    // 2、找个身材好的女人代孕生个孩子，当然到最后只要孩子不要女人。（如何在多种女人中找个身材好的女人代孕生孩子是策略类的职责，最后策略类只要把孩子交给客户端即可）。
    /**----------------------------------- */
    private run() {
        //简单工厂测试
        window[`factoryTest`] = (a, b, syb) => {
            try {
                let op = factory.Factory.getResult(syb);
                op.numberA = a;
                op.numberB = b;
                console.log(`计算结果为${op.getResult()}`);
            } catch (error) {
                console.log(error);
            }
        }

        //策略模式测试
        window[`strategyTest`] = (a, b, syb) => {
            try {
                let cashContext = new strategy.CashContext();
                cashContext.cashContext(a, b, syb);
                console.log(`计算结果为${cashContext.getResult()}`);
            } catch (error) {
                console.log(error);
            }
        }

        //装饰模式测试
        //通过子类方式实现继承，比继承灵活的一种设计模式
        window[`decoratorTest`] = () => {
            let coffee: decorat.DecoratorComponent = new decorat.Coffee();
            let sugar: decorat.DecoratorComponent = new decorat.AddSugar(coffee);
            let ice: decorat.DecoratorComponent = new decorat.AddIce(sugar);
            let milk: decorat.DecoratorComponent = new decorat.AddMilk(ice);
            milk.show();
            // let water: decorat.DecoratorComponent = new decorat.Coffee();
        }
    }
}
new GameMain();