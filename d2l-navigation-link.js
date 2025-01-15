import { css, html, LitElement } from 'lit';
import { FocusMixin } from '@brightspace-ui/core/mixins/focus-mixin.js';
import { highlightBorderStyles } from './d2l-navigation-styles.js';

class D2LNavigationLink extends FocusMixin(LitElement) {

	static get properties() {
		return {
			href: {
				reflect: true,
				type: String
			},
			text: {
				type: String
			}
		};
	}

	static get styles() {
		return [highlightBorderStyles, css`
			:host {
				display: inline-block;
				height: 100%;
			}
			a {
				align-items: center;
				color: var(--d2l-color-ferrite);
				display: inline-flex;
				height: 100%;
				min-height: 40px;
				position: relative;
				text-decoration: none;
				vertical-align: middle;
			}
			a:hover,
			a:focus {
				--d2l-icon-fill-color: var(--d2l-color-celestine);
				color: var(--d2l-color-celestine);
				outline: none;
			}
			:host(:not([href])) .d2l-navigation-highlight-border {
				display: none;
			}
		`];
	}

	static get focusElementSelector() {
		return '.d2l-focusable';
	}

	render() {
		return html`
			<a class="d2l-focusable" href="${this.href}" title="${this.text}">
				<span class="d2l-navigation-highlight-border"></span>
				<slot></slot>
			</a>
		`;
	}
}

customElements.define('d2l-navigation-link', D2LNavigationLink);
