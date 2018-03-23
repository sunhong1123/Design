module decorat {
	/** 加冰的实例类 */
	export class AddIce extends DecoratorComponent {
		private _component: DecoratorComponent;
		constructor(component: DecoratorComponent) {
			super();
			this._component = component;
		}

		public show() {
			console.log(`加冰的`);
			this._component.show();
		}
	}
}