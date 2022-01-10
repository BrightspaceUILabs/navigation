import './d2l-navigation-band.js';
import { css, html, LitElement } from 'lit-element';

/**
 * Primary navigation wrapper component.
 * @slot - Default content placed inside of the component
 * @slot navigation-band - Content placed inside band
 */
class Navigation extends LitElement {

	static get styles() {
		return css`
			:host {
				display: block;
				position: relative;
			}
			.d2l-navigation-shadow-drop-border {
				display: var(--d2l-navigation-shadow-drop-border-display, block);
				background-color: rgba(0,0,0,0.02);
				bottom: -4px;
				height: 4px;
				pointer-events: none;
				position: absolute;
				width: 100%;
			}
		`;
	}

	render() {
		return html`
			<d2l-navigation-band><slot name="navigation-band"></slot></d2l-navigation-band>
			<slot></slot>
			<div class="d2l-navigation-shadow-drop-border"></div>
		`;
	}

}

customElements.define('d2l-navigation', Navigation);
