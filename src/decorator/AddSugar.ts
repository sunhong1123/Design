module decorat {
	/** 加糖的实例类 */
	export class AddSugar extends DecoratorComponent {
		private _component: DecoratorComponent;
		constructor(component: DecoratorComponent) {
			super();
			this._component = component;
		}

		public show() {
			console.log(`加糖的`);
			this._component.show();
		}
	}
}