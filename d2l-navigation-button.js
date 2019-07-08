/**
`d2l-navigation-button`
Polymer-based web component for buttons used in the navigational header.

@demo demo/d2l-navigation-button.html d2l-navigation-button
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'd2l-button/d2l-button-behavior.js';
import 'd2l-polymer-behaviors/d2l-focusable-behavior.js';
import 'd2l-polymer-behaviors/d2l-id.js';
import './d2l-navigation-highlight-styles.js';
import 'd2l-offscreen/d2l-offscreen-shared-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-navigation-button">
	<template strip-whitespace="">
		<style is="custom-style" include="d2l-navigation-highlight-styles" include="d2l-offscreen-shared-styles">
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
				::slotted styles for IE11
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

			.d2l-offscreen-description {
				@apply --d2l-offscreen;
			}

			:host(:dir(rtl)) .d2l-offscreen-description {
				@apply --d2l-offscreen-rtl;
			}

			:host([disabled]) button {
				@apply --d2l-navigation-highlight-disabled;
			}

		</style>
		<button aria-describedby$="[[_ariaDescriptionId]]" aria-expanded$="[[ariaExpanded]]" aria-haspopup$="[[ariaHaspopup]]" aria-label$="[[text]]" class="d2l-focusable" disabled$="[[disabled]]" autofocus$="[[autofocus]]" form$="[[form]]" formaction$="[[formaction]]" formenctype$="[[formenctype]]" formmethod$="[[formmethod]]" formnovalidate$="[[formnovalidate]]" formtarget$="[[formtarget]]" name$="[[name]]" title$="[[text]]" type$="[[type]]">
			<span class="d2l-navigation-button-top-border"></span>
			<slot></slot>
		</button>
		<span id="[[_ariaDescriptionId]]" class="d2l-offscreen-description">[[ariaDescribedbyText]]</span>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-navigation-button',
	properties: {
		text: {
			type: String,
			reflectToAttribute: true
		},
		ariaDescribedbyText: {
			type: String
		},
		_ariaDescriptionId: {
			type: String
		}
	},
	behaviors: [
		D2L.PolymerBehaviors.Button.Behavior,
		D2L.PolymerBehaviors.FocusableBehavior
	],
	ready: function() {
		this._ariaDescriptionId = D2L.Id.getUniqueId();
	}
});
