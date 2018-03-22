module factory {
	export abstract class BasicOperate {
		private _numberA: number;
		private _numberB: number;
		constructor() {
		}

		public get numberA(): number {
			return this._numberA;
		}

		public set numberA(value: number) {
			this._numberA = value;
		}

		public get numberB(): number {
			return this._numberB;
		}

		public set numberB(value: number) {
			this._numberB = value;
		}

		public abstract getResult(): number;
	}
}