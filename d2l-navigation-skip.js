import { css, html, LitElement } from 'lit';
import { LocalizeNavigationElement } from './components/localize-navigation-element.js';
import { RtlMixin } from '@brightspace-ui/core/mixins/rtl-mixin.js';
import { querySelectorComposed } from '@brightspace-ui/core/helpers/dom.js';

class NavigationSkip extends LocalizeNavigationElement(RtlMixin(LitElement)) {

	static get styles() {
		return css`
			a {
				left: -10000px;
				overflow: hidden;
				position: absolute;
				width: 1px;
			}
			:host([dir="rtl"]) a {
				left: auto;
				right: -10000px;
			}
			a:active,
			a:focus {
				background-color: rgba(0, 0, 0, 0.7);
				border: 1px solid rgba(0, 0, 0, 0.8);
				color: #ffffff;
				cursor: pointer;
				display: block;
				font-weight: bold;
				left: 25%;
				margin: 0 auto;
				outline: none;
				padding: 0.3em;
				text-align: center;
				text-decoration: none;
				top: 0;
				width: 50%;
				z-index: 10000;
			}
			:host([dir="rtl"]) a:active,
			:host([dir="rtl"]) a:focus {
				right: 25%;
			}
		`;
	}

	render() {
		return html`<a tabindex="0" @click="${this._handleSkipNav}" @keydown="${this._handleKeyDown}">${this.localize('skipNav')}</a>`;
	}

	_handleKeyDown(e) {
		if (e.keyCode === 13) {
			e.preventDefault();
			this._handleSkipNav();
		}
	}

	_handleSkipNav() {
		const elem = querySelectorComposed(document, 'main') ||
			querySelectorComposed(document, '[role="main"]') ||
			querySelectorComposed(document, 'h1');
		if (elem) {
			elem.tabIndex = -1;
			elem.focus();
		} else {
			this.dispatchEvent(new CustomEvent('d2l-navigation-skip-fail', { bubbles: false, composed: false }));
		}
	}

}

customElements.define('d2l-navigation-skip', NavigationSkip);
