import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'd2l-polymer-behaviors/d2l-focusable-behavior.js';
import 'd2l-icons/d2l-icon.js';
import 'd2l-icons/tier3-icons.js';
import 'd2l-tooltip/d2l-tooltip.js';
import 'd2l-typography/d2l-typography-shared-styles.js';
import '../../d2l-navigation-link.js';
import './d2l-navigation-iterator-item.js';

/**
 * @customElement
 * @polymer
 */
class D2LNavigationIterator extends PolymerElement {
	static get template() {
		return html`
			<style>
				:host {
					@apply --d2l-body-compact-text;
				}
				.d2l-navigation-iterator {
					align-items: center;
					display: flex;
					justify-content: space-between;
					height: 100%;
					max-width: 20rem;
				}
				[hidden] {
					display: none;
				}
			</style>
			<div class="d2l-navigation-iterator">
				<d2l-navigation-iterator-item text=[[previousText]] type="previous" hidden=[[noPrevious]]></d2l-navigation-iterator-item>
				<slot></slot>
				<d2l-navigation-iterator-item text=[[nextText]] type="next" hidden=[[noNext]]></d2l-navigation-iterator-item>
			</div>
		`;
	}

	static get properties() {
		return {
			previousText: {
				type: String,
				value: '',
				reflectToAttribute: true
			},
			nextText: {
				type: String,
				value: '',
				reflectToAttribute: true
			},
			noPrevious: {
				type: Boolean,
				value: false,
				reflectToAttribute: true
			},
			noNext: {
				type: Boolean,
				value: false,
				reflectToAttribute: true
			}
		};
	}

	static get is() { return 'd2l-navigation-iterator'; }
}

window.customElements.define('d2l-navigation-iterator', D2LNavigationIterator);
