import { css, html, LitElement } from 'lit';
import { DropdownOpenerMixin } from '@brightspace-ui/core/components/dropdown/dropdown-opener-mixin.js';
import { highlightBorderStyles, highlightButtonStyles } from './d2l-navigation-styles.js';

class NavigationDropdownButtonCustom extends DropdownOpenerMixin(LitElement) {

	static get styles() {
		return [highlightBorderStyles, highlightButtonStyles, css`
			:host {
				display: inline-block;
				height: 100%;
				position: relative;
			}
			:host([hidden]) {
				display: none;
			}
		`];
	}

	getOpenerElement() {
		return this.shadowRoot && this.shadowRoot.querySelector('button');
	}

	render() {
		return html`
			<button type="button">
				<span class="d2l-navigation-highlight-border"></span>
				<slot name="opener"></slot>
			</button>
			<slot></slot>
		`;
	}

}

customElements.define('d2l-navigation-dropdown-button-custom', NavigationDropdownButtonCustom);
