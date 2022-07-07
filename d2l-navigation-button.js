import '@brightspace-ui/button/d2l-button-behavior.js';
import '@brightspace-ui/polymer-behaviors/d2l-focusable-behavior.js';
import '@brightspace-ui/polymer-behaviors/d2l-id.js';
import { highlightStyles } from './d2l-navigation-highlight-styles.js';
import '@brightspace-ui/core/components/offscreen/offscreen.js';

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
/**
`d2l-navigation-button`
Polymer-based web component for buttons used in the navigational header.

@demo demo/d2l-navigation-button.html d2l-navigation-button
*/
class D2LNavigationButton extends mixinBehaviors([D2L.PolymerBehaviors.Button.Behavior, D2L.PolymerBehaviors.FocusableBehavior], PolymerElement) {

	static get properties() {
		return {
			disabled: {
				type: Boolean,
				refelctToAttribute: true,
				value: false
			},
			text: {
				type: String,
				reflectToAttribute: true
			},
			hideHighlight: {
				type: Boolean,
				value: false,
				reflectToAttribute: true
			},
			ariaDescribedbyText: {
				type: String
			},
			_ariaDescriptionId: {
				type: String
			}
		};
	}
	static get template() {
		const template = html`
				${highlightStyles}
				<style is="custom-style">

					:host {
						display: inline-block;
						height: 100%;
					}

					/* Firefox includes a hidden border which messes up button dimensions */
					:host button::-moz-focus-inner {
						border: 0;
					}

					:host button ::slotted(*) {
						pointer-events: none;
					}

					:host button:hover,
					:host button:focus,
					:host button:hover ::slotted(*),
					:host button:focus ::slotted(*) {
						@apply --d2l-navigation-highlight-base-hover-focus;
					}

					/*
						::slotted styles for Edge/IE11
					*/
					:host button:hover ::slotted(*) *,
					:host button:focus ::slotted(*) * {
						@apply --d2l-navigation-highlight-base-hover-focus;
					}

					:host button:hover .d2l-navigation-button-top-border,
					:host button:focus .d2l-navigation-button-top-border {
						@apply --d2l-navigation-highlight-border-hover-focus;
					}

					button {
						@apply --d2l-navigation-highlight-base;
						font-family: inherit;
						outline: none; /* Needed for Edge, outline setting from css mixin is not being applied in Polymer 2 & 3 */
					}

					.d2l-navigation-button-top-border {
						@apply --d2l-navigation-highlight-border;
					}

					:host([disabled]) button {
						@apply --d2l-navigation-highlight-disabled;
					}

					:host([disabled]:hover) button,
					:host([disabled]:hover) button ::slotted(*),
					:host([disabled]:hover) button .d2l-navigation-button-top-border,
					:host([disabled]:focus) button,
					:host([disabled]:focus) button ::slotted(*),
					:host([disabled]:focus) button .d2l-navigation-button-top-border {
						@apply --d2l-navigation-highlight-hover-focus-disabled;
					}

					/*
						::slotted styles for Edge/IE11
					*/
					:host([disabled]:hover) button ::slotted(*) *,
					:host([disabled]:focus) button ::slotted(*) * {
						@apply --d2l-navigation-highlight-hover-focus-disabled;
					}
				</style>
			<button aria-describedby$="[[_ariaDescriptionId]]" aria-expanded$="[[ariaExpanded]]" aria-haspopup$="[[ariaHaspopup]]" aria-label$="[[text]]" class="d2l-focusable" disabled$="[[disabled]]" autofocus$="[[autofocus]]" form$="[[form]]" formaction$="[[formaction]]" formenctype$="[[formenctype]]" formmethod$="[[formmethod]]" formnovalidate$="[[formnovalidate]]" formtarget$="[[formtarget]]" name$="[[name]]" title$="[[text]]" type$="[[type]]">
			<span class$="[[_getTopBorderClass()]]"></span>
			<slot></slot>
			</button>
			<d2l-offscreen id="[[_ariaDescriptionId]]">[[ariaDescribedbyText]]</d2l-offscreen>
		`;
		template.setAttribute('strip-whitespace', '');
		return template;
	}

	ready() {
		super.ready();
		this._ariaDescriptionId = D2L.Id.getUniqueId();
	}

	_getTopBorderClass() {
		return this.hideHighlight ? '' : 'd2l-navigation-button-top-border';
	}

}
customElements.define('d2l-navigation-button', D2LNavigationButton);
