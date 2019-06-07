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
				:host([hidden]) {
					display: none;
				}
				.d2l-navigation-iterator-item-button.previous {
					padding-left: 1.2rem;
				}
				.d2l-navigation-iterator-item-button.next {
					padding-right: 1.5rem;
				}
				.d2l-navigation-iterator-item-items {
					align-items: center;
					display: flex;
					height: 100%;
				}
				.d2l-navigation-iterator-item-items.next {
					flex-direction: row-reverse;
				}
				.d2l-navigation-iterator-item-text.previous {
					padding-left: 0.6rem;
				}
				.d2l-navigation-iterator-item-text.next {
					padding-right: 0.6rem;
				}
				[hidden] {
					display: none;
				}
			</style>
			<d2l-navigation-button id="d2l-navigation-iterator-item" class$="[[_getConditionalButtonClass(type)]]" text="[[_displayText]]">
				<div class$="[[_getConditionalItemsClass(type)]]">
					<d2l-icon icon$="[[_icon]]"></d2l-icon>
					<span class$="[[_getConditionalTextClass(type)]]" hidden="[[hideText]]">[[_displayText]]</span>
				</div>
			</d2l-navigation-button>
			<d2l-tooltip for="d2l-navigation-iterator-item">[[_displayText]]</d2l-tooltip>
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
				computed: '_computeText(text, type)'
			},
			_icon: {
				type: String,
				computed: '_computeIcon(type)'
			}
		};
	}

	static get is() { return 'd2l-navigation-iterator-item'; }

	_typeChanged(newValue, oldValue) {
		const validTypes = ['previous', 'next'];
		if (validTypes.indexOf(newValue) === -1) {
			this.type = oldValue;
		}
	}

	_computeText(text, type) {
		if (text.length > 0) {
			return text;
		}
		if (type === 'previous') {
			return 'Previous'; // TODO: localize
		}
		return 'Next'; // TODO: localize
	}

	_computeIcon(type) {
		if (type === 'previous') {
			return 'd2l-tier3:chevron-left-circle';
		}
		return 'd2l-tier3:chevron-right-circle';
	}

	_getConditionalButtonClass(type) {
		if (type === 'previous') {
			return 'd2l-navigation-iterator-item-button previous';
		}
		return 'd2l-navigation-iterator-item-button next';
	}

	_getConditionalItemsClass(type) {
		if (type === 'previous') {
			return 'd2l-navigation-iterator-item-items';
		}
		return 'd2l-navigation-iterator-item-items next';
	}

	_getConditionalTextClass(type) {
		if (type === 'previous') {
			return 'd2l-navigation-iterator-item-text previous';
		}
		return 'd2l-navigation-iterator-item-text next';
	}
}

window.customElements.define('d2l-navigation-iterator-item', D2LNavigationIteratorItem);
