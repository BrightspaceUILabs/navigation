import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import './d2l-navigation-iterator.js';

/**
 * @customElement
 * @polymer
 */
class D2LNavigationLinkIterator extends PolymerElement {
	static get is() { return 'd2l-navigation-link-iterator'; }

	static get properties() {
		return {
			previousHref: {
				type: String
			},
			nextHref: {
				type: String
			},
			previousText: {
				type: String
			},
			nextText: {
				type: String
			},
			hideText: {
				type: Boolean,
				value: false
			},
			previousDisabled: {
				type: Boolean,
				value: false
			},
			nextDisabled: {
				type: Boolean,
				value: false
			}
		};
	}

	static get template() {
		return html`
			<d2l-navigation-iterator
				previous-text=[[previousText]]
				next-text=[[nextText]]
				hide-text=[[hideText]]
				previous-disabled=[[previousDisabled]]
				next-disabled=[[nextDisabled]]
				on-previous-click="_onNavigationIteratorButtonClicked"
				on-next-click="_onNavigationIteratorButtonClicked"
			>
			<slot></slot>
			</d2l-navigation-iterator>
		`;
	}

	_onNavigationIteratorButtonClicked(evt) {
		if (this.previousHref && evt.detail.type === 'previous') {
			this._setWindowLocationHref(this.previousHref);
		} else if (this.nextHref && evt.detail.type === 'next') {
			this._setWindowLocationHref(this.nextHref);
		}
	}

	_setWindowLocationHref(href) {
		window.location.href = href;
	}
}

window.customElements.define(D2LNavigationLinkIterator.is, D2LNavigationLinkIterator);
