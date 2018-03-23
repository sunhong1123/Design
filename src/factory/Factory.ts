/**
* name 
*/
module factory {
	export const enum Symbols {
		加 = 1,
		减 = 2,
		乘 = 3,
		除 = 4,
	}
	export class Factory {

		public static getResult(a: number, b: number, syb: number) {
			let op: BasicOperate;
			switch (syb) {
				case Symbols.加:
					op = new operateAdd();
					break;
				case Symbols.减:
					op = new operateSub();
					break;
				case Symbols.乘:
					op = new operateMultiply();
					break;
				case Symbols.除:
					op = new operateDivide();
					break;
			}
			return op;
		}

	}
}