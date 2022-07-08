import '@brightspace-ui/core/components/icons/icon.js';
import { html, LitElement } from 'lit';
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
			href: { type: String },
			/**
			 * REQUIRED: Preset icon key (e.g. "tier1:gear")
			 * @type {string}
			 */
			icon: { type: String },
			/**
			 * REQUIRED: Text for the link
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
		return [highlightBorderStyles, highlightLinkStyles, offscreenStyles];
	}

	constructor() {
		super();
		this.textHidden = false;
		this._missingHrefErrorHasBeenThrown = false;
		this._validatingHrefTimeout = null;
	}

	static get focusElementSelector() {
		return 'a';
	}

	firstUpdated(changedProperties) {
		super.firstUpdated(changedProperties);
		this._validateHref();
	}

	render() {
		const textClasses = {
			'd2l-offscreen': this.textHidden
		};
		return html`
			<a href="${ifDefined(this.href)}" title="${ifDefined(this.textHidden ? this.text : undefined)}">
				<span class="d2l-navigation-highlight-border"></span>
				<d2l-icon icon="${this.icon}"></d2l-icon>
				<span class="${classMap(textClasses)}">${this.text}</span>
			</a>
		`;
	}

	updated(changedProperties) {

		super.updated(changedProperties);

		if (changedProperties.has('href')) this._validateHref();

	}

	_validateHref() {
		clearTimeout(this._validatingHrefTimeout);
		// don't error immediately in case it doesn't get set immediately
		this._validatingHrefTimeout = setTimeout(() => {
			this._validatingHrefTimeout = null;
			const hasHref = (typeof this.href === 'string') && this.href.length > 0;
			if (!hasHref && !this._missingHrefErrorHasBeenThrown) {
				this._missingHrefErrorHasBeenThrown = true;
				// we don't want to prevent rendering
				setTimeout(() => { throw new Error('<d2l-navigation-link-icon>: missing required "href" attribute. If this component performs an action and not a navigation, consider using <d2l-navigation-button-icon> instead.'); });
			}
		}, 3000);
	}

}

customElements.define('d2l-navigation-link-icon', NavigationLinkIcon);
