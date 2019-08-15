import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import {NavigationLocalize} from '../NavigationLocalize.js';
import 'd2l-icons/d2l-icon.js';
import 'd2l-icons/tier3-icons.js';
import 'd2l-tooltip/d2l-tooltip.js';
import '../../d2l-navigation-button.js';

/**
 * @customElement
 * @polymer
 */
class D2LNavigationIteratorItem extends NavigationLocalize(PolymerElement) {
	static get is() { return 'd2l-navigation-iterator-item'; }

	static get properties() {
		return {
			disabled: {
				type: Boolean,
				value: false,
				reflectToAttribute: true
			},
			hideText: {
				type: Boolean,
				value: false,
				reflectToAttribute: true
			},
			text: {
				type: String,
				value: ''
			},
			type: {
				type: String,
				value: 'previous',
				observer: '_typeChanged',
				reflectToAttribute: true
			},
			_icon: {
				type: String,
				computed: '_computeIcon(type)'
			}
		};
	}

	static get template() {
		return html`
			<style>
				:host {
					display: flex;
					height: 100%;
					position: relative;
				}
				:host([disabled]) {
					color: var(--d2l-color-ferrite);
					cursor: auto;
					opacity: .5;
					text-decoration: none;
				}
				:host([disabled]) d2l-tooltip {
					display: none;
				}
				:host([type="previous"]) d2l-navigation-button {
					padding-left: 1.2rem;
				}
				:host([type="next"]) d2l-navigation-button {
					padding-right: 1.5rem;
				}
				:host([type="previous"]:dir(rtl)) d2l-navigation-button {
					padding-right: 1.2rem;
					padding-left: 0;
				}
				:host([type="next"]:dir(rtl)) d2l-navigation-button {
					padding-left: 1.5rem;
					padding-right: 0;
				}
				.d2l-navigation-iterator-item-items {
					align-items: center;
					display: flex;
					height: 100%;
				}
				:host([type="next"]) .d2l-navigation-iterator-item-items {
					flex-direction: row-reverse;
				}
				:host([type="previous"]) .d2l-navigation-iterator-item-text {
					padding-left: 0.6rem;
				}
				:host([type="next"]) .d2l-navigation-iterator-item-text {
					padding-right: 0.6rem;
				}
				:host([type="previous"]:dir(rtl)) .d2l-navigation-iterator-item-text {
					padding-right: 0.6rem;
					padding-left: 0;
				}
				:host([type="next"]:dir(rtl)) .d2l-navigation-iterator-item-text {
					padding-left: 0.6rem;
					padding-right: 0;
				}
			</style>
			<d2l-navigation-button id="d2l-navigation-iterator-item" class="d2l-navigation-iterator-item-button" text="[[_computeText(text, type)]]" disabled="[[disabled]]">
				<div class="d2l-navigation-iterator-item-items">
					<d2l-icon icon$="[[_icon]]"></d2l-icon>
					<span class="d2l-navigation-iterator-item-text" hidden="[[hideText]]">[[_computeText(text, type)]]</span>
				</div>
			</d2l-navigation-button>
			<d2l-tooltip for="d2l-navigation-iterator-item">[[_computeText(text, type)]]</d2l-tooltip>
		`;
	}

	_typeChanged(newValue, oldValue) {
		const validTypes = ['previous', 'next'];
		if (validTypes.indexOf(newValue) === -1) {
			if (validTypes.indexOf(oldValue) === -1) {
				this.type = 'previous';
			} else {
				this.type = oldValue;
			}
		}
	}

	_computeText(text, type) {
		if (text.length > 0) {
			return text;
		}
		return (type === 'previous') ? this.localize('previous') : this.localize('next');
	}

	_computeIcon(type) {
		return (type === 'previous') ? 'd2l-tier3:chevron-left-circle' : 'd2l-tier3:chevron-right-circle';
	}
}

window.customElements.define('d2l-navigation-iterator-item', D2LNavigationIteratorItem);
