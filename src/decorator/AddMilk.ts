module decorat {
	/** 加奶的实例类 */
	export class AddMilk extends DecoratorComponent {
		private _component: DecoratorComponent;
		constructor(component: DecoratorComponent) {
			super();
			this._component = component;
		}

		public show() {
			console.log(`加奶的`);
			this._component.show();
		}
	}
}