import 'd2l-colors/d2l-colors.js';
import './d2l-navigation-link.js';
import 'd2l-icons/d2l-icon.js';
import 'd2l-icons/tier1-icons.js';
import 'd2l-polymer-behaviors/d2l-focusable-behavior.js';
import 'd2l-localize-behavior/d2l-localize-behavior.js';

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
/**
`d2l-navigation-link-back`
Polymer-based web component for the back button used in the navigational header.

@demo demo/d2l-navigation-button.html d2l-navigation-link-back
*/
class D2LNavigationLinkBack extends mixinBehaviors([D2L.PolymerBehaviors.Link.Behavior,
	D2L.PolymerBehaviors.FocusableBehavior,
	D2L.PolymerBehaviors.LocalizeBehavior], PolymerElement) {

	static get properties() {
		return  {
			text: {
				type: String,
				value: null
			},
			href: {
				type: String
			},
			resources: {
				value: function() {
					return {
						'ar': { 'back': 'العودة' },
						'de': { 'back': 'Zurück' },
						'en': { 'back': 'Back' },
						'es': { 'back': 'Volver' },
						'fr': { 'back': 'Précédent' },
						'ja': { 'back': '戻る' },
						'ko': { 'back': '뒤로' },
						'nl': { 'back': 'Terug' },
						'pt': { 'back': 'Voltar' },
						'sv': { 'back': 'Tillbaka' },
						'tr': { 'back': 'Geri' },
						'zh': { 'back': '返回' },
						'zh-TW': { 'back': '返回' }
					};
				}
			}
		};
	}
	static get template() {
		const template = html`
			<style>
			:host {
				display: inline-block;
				height: 100%;
				white-space: nowrap;
			}
			d2l-icon {
				color: inherit;
			}
			.d2l-navigation-link-back-text {
				padding-left: var(--d2l-navigation-link-back-left-padding, 5px);
			}
			:host(:dir(rtl)) .d2l-navigation-link-back-text {
				padding-left: 0;
				padding-right: var(--d2l-navigation-link-back-left-padding, 5px);
			}
			span, d2l-icon {
				vertical-align: middle;
				height: 100%;
			}
		</style>
		<d2l-navigation-link href="[[href]]" class="d2l-focusable" text="[[_getDisplayText(text, localize)]]">
			<d2l-icon icon="d2l-tier1:chevron-left"></d2l-icon>
			<span class="d2l-navigation-link-back-text">[[_getDisplayText(text, localize)]]</span>
		</d2l-navigation-link>
		`;
		template.setAttribute('strip-whitespace', '');
		return template;
	}

	_getDisplayText(text, localize) {
		if (text === undefined || text === null) {
			return localize('back');
		}
		return text;
	}
}
customElements.define('d2l-navigation-link-back', D2LNavigationLinkBack);
