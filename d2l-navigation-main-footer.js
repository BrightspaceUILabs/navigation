import { css, html, LitElement } from 'lit';
import { navigationSharedStyle } from './d2l-navigation-shared-styles.js';

class NavigationMainFooter extends LitElement {

	static get styles() {
		return [navigationSharedStyle, css`
				:host {
					border-top: 1px solid rgba(124,134,149,0.18);
					border-bottom: 1px solid rgba(124,134,149,0.18);
					display: block;
				}
			`
		];
	}

	render() {
		return html`
			<div class="d2l-navigation-centerer">
				<div class="d2l-navigation-gutters">
					<slot name="main"></slot>
				</div>
			</div>
		`;
	}

}
customElements.define('d2l-navigation-main-footer', NavigationMainFooter);
