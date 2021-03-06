/** @module deliteful/ToggleButton */
define([
	"dcl/dcl",
	"delite/register",
	"requirejs-dplugins/has",
	"./Button",
	"./Toggle",
	"requirejs-dplugins/has!bidi?./ToggleButton/bidi/ToggleButton",
	"delite/handlebars!./ToggleButton/ToggleButton.html",
	"delite/theme!./ToggleButton/themes/{{theme}}/ToggleButton.css"
], function (dcl, register, has, Button, Toggle, BidiToggleButton, template) {

	/**
	 * A 2-states toggle button widget that represents a form-aware 2-states (pressed or unpressed) button with optional
	 * icons and labels for each state.
	 *
	 * A toggle button can display a different label depending on its state. By default, the label specified inline
	 * in the markup or via the 'label' property is displayed whatever the state is. It is however possible to set a
	 * label specific to the checked state via the 'checkedLabel' property.
	 *
	 * Similarly, a toggle button can display a different icon depending on its state. By default, the css class
	 * specified by the 'iconClass' property is applied whatever the state is. However, a css class specific to the
	 * checked state can be specified via the 'checkedIconClass' property.
	 *
	 * @example <caption>Creating a checked toggle button</caption>
	 * <d-button is="d-toggle-button" checked="true">Foo</button>
	 * @example <caption>Specify a label for the checked state</caption>
	 * <d-button is="d-toggle-button" checked="true" checkedLabel="On">Off</button>
	 * @example <caption>Specify an icon for the checked state</caption>
	 * <style>
	 *   .iconOn {
	 *     background-image: url('images/on.png');
	 *     width: 16px;
	 *     height: 16px;
	 *   }
	 * </style>
	 * <d-button is="d-toggle-button" checked="true" checkedIconClass="iconOn">Off</button>
	 * @class module:deliteful/ToggleButton
	 * @augments module:deliteful/Toggle
	 * @augments module:deliteful/Button.Mixin
	 */
	var ToggleButton =  dcl([Button.Impl, Toggle], /** @lends module:deliteful/ToggleButton# */ {

		/**
		 * The component css base class.
		 * @member {string}
		 * @default "d-toggle-button"
		 */
		baseClass: "d-toggle-button",

		/**
		 * The label to display when the button is checked. If not specified, the default label (either the one
		 * specified inline in markup or via the 'label' property) is used for both states.
		 * @member {string}
		 * @default ""
		 */
		checkedLabel: "",

		/**
		 * The name of the CSS class to apply to DOMNode in button to make it display an icon when the button is
		 * checked. If not specified, the class specified in the 'iconClass' property, if any, is used for both states.
		 * @member {string}
		 * @default ""
		 */
		checkedIconClass: "",

		template: template

	});
	return register("d-toggle-button",  has("bidi") ? [HTMLButtonElement, ToggleButton, BidiToggleButton] :
		[HTMLButtonElement, ToggleButton]);
});
