module decorat {
	/** 加水的实例类 */
	export class AddWater extends DecoratorComponent {
		private _component: DecoratorComponent;
		constructor(component: DecoratorComponent) {
			super();
			this._component = component;
		}

		public show() {
			console.log(`加水的`);
			this._component.show();
		}
	}
}