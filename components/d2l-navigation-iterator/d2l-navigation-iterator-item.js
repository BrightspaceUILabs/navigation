import { css, html, LitElement } from 'lit';
import { LocalizeNavigationElement } from '../localize-navigation-element.js';
import '@brightspace-ui/core/components/colors/colors.js';
import '@brightspace-ui/core/components/icons/icon.js';
import '@brightspace-ui/core/components/tooltip/tooltip.js';
import '../../d2l-navigation-button.js';

class NavigationIteratorItem extends LocalizeNavigationElement(LitElement) {

	static get properties() {
		return {
			disabled: {
				type: Boolean,
				reflect: true
			},
			hideText: {
				type: Boolean,
				attribute: 'hide-text',
				reflect: true
			},
			text: {
				type: String
			},
			type: {
				type: String,
				reflect: true
			}
		};
	}

	static get styles() {
		return css`
			:host {
				display: flex;
				height: 100%;
				position: relative;
			}
			:host([disabled]) {
				color: var(--d2l-color-ferrite);
				cursor: auto;
				opacity: 0.5;
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
				padding-left: 0;
				padding-right: 1.2rem;
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
				padding-left: 0;
				padding-right: 0.6rem;
			}
			:host([type="next"]:dir(rtl)) .d2l-navigation-iterator-item-text {
				padding-left: 0.6rem;
				padding-right: 0;
			}
		`;
	}

	constructor() {
		super();
		this.disabled = false;
		this.hideText = false;
		this.text = '';
		this.type = 'previous';
	}

	render() {
		const icon = (this.type === 'previous') ? 'tier3:chevron-left-circle' : 'tier3:chevron-right-circle';
		const text = this._computeText();
		return html`
			<d2l-navigation-button id="d2l-navigation-iterator-item" class="d2l-navigation-iterator-item-button" text="${text}" ?disabled="${this.disabled}">
				<div class="d2l-navigation-iterator-item-items">
					<d2l-icon icon="${icon}"></d2l-icon>
					<span class="d2l-navigation-iterator-item-text" ?hidden="${this.hideText}">${text}</span>
				</div>
			</d2l-navigation-button>
			<d2l-tooltip for="d2l-navigation-iterator-item">${text}</d2l-tooltip>
		`;
	}

	_computeText() {
		if (this.text.length > 0) {
			return this.text;
		}
		return (this.type === 'previous') ? this.localize('previous') : this.localize('next');
	}

}

customElements.define('d2l-navigation-iterator-item', NavigationIteratorItem);
