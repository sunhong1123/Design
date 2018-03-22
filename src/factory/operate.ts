module factory {
	/** 加法运算 */
	export class operateAdd extends BasicOperate {
		constructor() {
			super();
		}

		public getResult(): number {
			return this.numberA + this.numberB;
		}
	}
	/** 减法运算 */
	export class operateSub extends BasicOperate {
		constructor() {
			super();
		}

		public getResult(): number {
			return this.numberA - this.numberB;
		}
	}

	/** 乘法运算 */
	export class operateMultiply extends BasicOperate {
		constructor() {
			super();
		}

		public getResult(): number {
			return this.numberA * this.numberB;
		}
	}
	/** 除法运算 */
	export class operateDivide extends BasicOperate {
		constructor() {
			super();
		}

		public getResult(): number {
			if (this.numberB == 0) {
				throw new Error(`分母不能为0`);
			}
			return this.numberA / this.numberB;
		}
	}
}