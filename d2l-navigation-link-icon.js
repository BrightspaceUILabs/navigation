import '@brightspace-ui/core/components/icons/icon.js';
import { html, LitElement, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { FocusMixin } from '@brightspace-ui/core/mixins/focus-mixin.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { offscreenStyles } from '@brightspace-ui/core/components/offscreen/offscreen.js';
import { highlightBorderStyles, highlightLinkStyles } from './d2l-navigation-styles.js';

/**
 * Navigation link with an icon and text.
 */
class NavigationLinkIcon extends FocusMixin(LitElement) {

	static get properties() {
		return {
			/**
			 * REQUIRED: URL or URL fragment of the link
			 * @type {string}
			 */
			href: {
				type: String
			},
			/**
			 * REQUIRED: Preset icon key (e.g. "tier1:gear")
			 * @type {string}
			 */
			icon: {
				type: String
			},
			/**
			 * REQUIRED: Accessible text for the button
			 * @type {string}
			 */
			text: {
				type: String
			},
			/**
			 * Visually hides the text but still accessible
			 * @type {boolean}
			 */
			textHidden: {
				attribute: 'text-hidden',
				type: Boolean
			}
		};
	}

	static get styles() {
		return [highlightBorderStyles, highlightLinkStyles, offscreenStyles];
	}

	constructor() {
		super();
		this.textHidden = false;
	}

	static get focusElementSelector() {
		return 'a';
	}

	render() {
		const highlight = this.href ? html`<span class="d2l-navigation-highlight-border"></span>` : nothing;
		const textClasses = {
			'd2l-offscreen': this.textHidden
		};
		return html`
			<a href="${ifDefined(this.href)}" title="${ifDefined(this.textHidden ? this.text : undefined)}">
				${highlight}
				<d2l-icon icon="${this.icon}"></d2l-icon>
				<span class="${classMap(textClasses)}">${this.text}</span>
			</a>
		`;
	}

}

customElements.define('d2l-navigation-link-icon', NavigationLinkIcon);
