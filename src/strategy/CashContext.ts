
module strategy {
    export class CashContext {
        private _operate: factory.BasicOperate;
        constructor() {
        }

        /**
         * 得到相应的策略
         * @param numa 
         * @param numb 
         * @param syb 
         */
        public cashContext(numa: number, numb: number, syb: number) {
            switch (syb) {
                case factory.Symbols.加:
                    this._operate = new factory.operateAdd();
                    break;
                case factory.Symbols.减:
                    this._operate = new factory.operateSub();
                    break;
                case factory.Symbols.乘:
                    this._operate = new factory.operateMultiply();
                    break;
                case factory.Symbols.除:
                    this._operate = new factory.operateDivide();
                    break;
            }
            this._operate.numberA = numa;
            this._operate.numberB = numb;
        }

        /** 计算结果 */
        public getResult() {
            return this._operate.getResult();
        }

    }

}