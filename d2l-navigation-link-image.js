import { css, html, LitElement } from 'lit';
import { FocusMixin } from '@brightspace-ui/core/mixins/focus-mixin.js';
import { highlightBorderStyles, highlightLinkStyles } from './d2l-navigation-styles.js';

class NavigationLinkImage extends FocusMixin(LitElement) {

	static get properties() {
		return {
			href: { type: String },
			slim: { reflect: true, type: Boolean },
			src: { type: String },
			text: { type: String }
		};
	}

	static get styles() {
		return [highlightBorderStyles, highlightLinkStyles, css`
			:host {
				display: inline-block;
				height: 100%;
			}
			:host([hidden]) {
				display: none;
			}
			img {
				max-height: 60px;
				max-width: 260px;
				vertical-align: middle;
			}
			:host([slim]) img {
				max-height: 40px;
				max-width: 173px;
			}
			.d2l-navigation-link-image-container {
				align-items: center;
				display: inline-flex;
				height: 100%;
				vertical-align: middle;
			}
		`];
	}

	constructor() {
		super();
		this.slim = false;
		this.text = '';
	}

	static get focusElementSelector() {
		return 'a';
	}

	render() {
		return html`
			<a href="${this.href}" title="${this.text}">
				<span class="d2l-navigation-highlight-border"></span>
				<span class="d2l-navigation-link-image-container"><img src="${this.src}" alt="${this.text}"></span>
			</a>
		`;
	}
}

customElements.define('d2l-navigation-link-image', NavigationLinkImage);
