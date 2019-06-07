import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'd2l-polymer-behaviors/d2l-focusable-behavior.js';
import 'd2l-icons/d2l-icon.js';
import 'd2l-icons/tier3-icons.js';
import 'd2l-tooltip/d2l-tooltip.js';
import 'd2l-typography/d2l-typography-shared-styles.js';
import '../../d2l-navigation-button.js';

/**
 * @customElement
 * @polymer
 */
class D2LNavigationIteratorItem extends PolymerElement {
	static get template() {
		return html`
			<style>
				:host {
					display: flex;
					height: 100%;
					position: relative;
				}
				[type="previous"] .d2l-navigation-iterator-item-icon {
					padding-left: 1.2rem;
				}
				[type="next"] .d2l-navigation-iterator-item-icon {
					padding-right: 1.5rem;
				}
				.d2l-navigation-iterator-item-items {
					align-items: center;
					display: flex;
					height: 100%;
				}
				[type="previous"] .d2l-navigation-iterator-item-text {
					padding-left: 0.6rem;
				}
				[type="next"] .d2l-navigation-iterator-item-text {
					padding-right: 0.6rem;
				}
				[hidden] {
					display: none;
				}
			</style>
			<div id="d2l-navigation-iterator-item" type="[[type]]">
				<d2l-navigation-button text="[[_displayText]]" type="[[type]]">
					<div class="d2l-navigation-iterator-item-items">
						<template is="dom-if" if="[[_typeIsPrevious]]">
							<d2l-icon icon$="[[_icon]]"></d2l-icon>
							<span class="d2l-navigation-iterator-item-text" hidden="[[hideText]]">[[_displayText]]</span>
						</template>
						<template is="dom-if" if="[[!_typeIsPrevious]]">
							<span class="d2l-navigation-iterator-item-text" hidden="[[hideText]]">[[_displayText]]</span>
							<d2l-icon icon$="[[_icon]]"></d2l-icon>
						</template>
					</div>
				</d2l-navigation-button>
				<d2l-tooltip for="d2l-navigation-iterator-item">[[_displayText]]</d2l-tooltip>
			</div>
		`;
	}

	static get properties() {
		return {
			text: {
				type: String,
				value: '',
				reflectToAttribute: true
			},
			type: {
				type: String,
				value: 'previous',
				observer: '_typeChanged',
				reflectToAttribute: true
			},
			hideText: {
				type: Boolean,
				value: false,
				reflectToAttribute: true
			},
			_displayText: {
				type: String,
				value: 'Previous'
			},
			_icon: {
				type: String,
				value: 'd2l-tier3:chevron-left-circle'
			},
			_typeIsPrevious: {
				type: Boolean,
				value: true
			}
		};
	}

	static get is() { return 'd2l-navigation-iterator-item'; }

	static get observers() {
		return [
			'_setupTypeProperties(type, text)'
		];
	}

	_typeChanged(newValue, oldValue) {
		const validTypes = ['previous', 'next'];
		if (validTypes.indexOf(newValue) === -1) {
			this.type = oldValue;
		}
	}

	_setupTypeProperties(type, text) {
		let defaultText;
		if (type === 'previous') {
			defaultText = 'Previous'; // TODO: localize
			this._icon = 'd2l-tier3:chevron-left-circle';
			this._typeIsPrevious = true;
		} else {
			defaultText = 'Next'; // TODO: localize
			this._icon = 'd2l-tier3:chevron-right-circle';
			this._typeIsPrevious = false;
		}

		if (text.length > 0) {
			this._displayText = text;
		} else {
			this._displayText = defaultText;
		}
	}
}

window.customElements.define('d2l-navigation-iterator-item', D2LNavigationIteratorItem);
