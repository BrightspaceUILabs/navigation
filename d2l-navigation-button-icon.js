import '@brightspace-ui/core/components/colors/colors.js';
import '@brightspace-ui/core/components/icons/icon.js';
import '@brightspace-ui/core/components/tooltip/tooltip.js';
import { css, html, LitElement, nothing } from 'lit';
import { FocusMixin } from '@brightspace-ui/core/mixins/focus-mixin.js';
import { getUniqueId } from '@brightspace-ui/core/helpers/uniqueId.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { highlightBorderStyles } from './d2l-navigation-styles.js';

/**
 * Navigation button with an icon and text.
 */
class NavigationButtonIcon extends FocusMixin(LitElement) {

	static get properties() {
		return {
			/**
			 * Disables the button
			 * @type {boolean}
			 */
			disabled: { reflect: true, type: Boolean },
			/**
			 * REQUIRED: Preset icon key (e.g. "tier1:gear")
			 * @type {string}
			 */
			icon: { type: String },
			/**
			 * REQUIRED: Text for the button
			 * @type {string}
			 */
			text: { type: String },
			/**
			 * Visually hides the text but still accessible
			 * @type {boolean}
			 */
			textHidden: { attribute: 'text-hidden', type: Boolean }
		};
	}

	static get styles() {
		return [highlightBorderStyles, css`
			:host {
				display: inline-block;
				height: 100%;
			}
			:host([hidden]) {
				display: none;
			}
			button {
				align-items: center;
				background: transparent;
				border: none;
				color: var(--d2l-color-ferrite);
				cursor: pointer;
				font-family: inherit;
				font-size: inherit;
				height: 100%;
				margin: 0;
				min-height: 40px;
				outline: none;
				overflow: visible;
				padding: 0;
				position: relative;
				white-space: nowrap;
			}
			/* Firefox includes a hidden border which messes up button dimensions */
			button::-moz-focus-inner {
				border: 0;
			}
			button:not([disabled]):hover,
			button:not([disabled]):focus {
				--d2l-icon-fill-color: var(--d2l-color-celestine);
				color: var(--d2l-color-celestine);
				outline: none;
			}
			button[disabled] {
				cursor: default;
				opacity: 0.5;
			}
		`];
	}

	constructor() {
		super();
		this.disabled = false;
		this.textHidden = false;
		this._buttonId = getUniqueId();
	}

	static get focusElementSelector() {
		return 'button';
	}

	render() {
		const ariaLabel = this.textHidden ? this.text : undefined;
		const highlightBorder = !this.disabled ? html`<span class="d2l-navigation-highlight-border"></span>` : nothing;
		const id = this.textHidden ? this._buttonId : undefined;
		const text = !this.textHidden ? this.text : nothing;
		const tooltip = this.textHidden ? html`<d2l-tooltip for="${this._buttonId}" for-type="label">${this.text}</d2l-tooltip>` : nothing;
		return html`
			<button id="${ifDefined(id)}" ?disabled="${this.disabled}" aria-label="${ifDefined(ariaLabel)}">
				${highlightBorder}
				<d2l-icon icon="${this.icon}"></d2l-icon>
				${text}
			</button>
			${tooltip}
		`;
	}

}

customElements.define('d2l-navigation-button-icon', NavigationButtonIcon);
