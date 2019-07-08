
import './d2l-navigation-button-notification-icon.js';
import 'd2l-icons/d2l-icon.js';
import 'd2l-icons/tier1-icons.js';
import 'd2l-button/d2l-button-behavior.js';
import 'd2l-polymer-behaviors/d2l-focusable-behavior.js';
import 'd2l-localize-behavior/d2l-localize-behavior.js';

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';
/**
`d2l-navigation-button-close`
Polymer-based web component for buttons used in the navigational header.
This button contains an X icon.

@demo demo/d2l-navigation-button.html d2l-navigation-button-close
*/
class D2LNavigationButtonClose extends mixinBehaviors([D2L.PolymerBehaviors.Button.Behavior,
	D2L.PolymerBehaviors.FocusableBehavior,
	D2L.PolymerBehaviors.LocalizeBehavior], PolymerElement) {

	static get properties() {
		return {
			resources: {
				value: function() {
					return {
						'ar': { 'close': 'إغلاق' },
						'de': { 'close': 'Schließen' },
						'en': { 'close': 'Close' },
						'es': { 'close': 'Cerrar' },
						'fi': { 'close': 'Sulje' },
						'fr': { 'close': 'Fermer' },
						'ja': { 'close': '閉じる' },
						'ko': { 'close': '닫기' },
						'nb': { 'close': 'Lukk' },
						'nl': { 'close': 'Sluiten' },
						'pt': { 'close': 'Fechar' },
						'sv': { 'close': 'Stäng' },
						'tr': { 'close': 'Kapat' },
						'zh': { 'close': '关闭' },
						'ar-SA': { 'close': 'إغلاق' },
						'de-DE': { 'close': 'Schließen' },
						'es-MX': { 'close': 'Cerrar' },
						'fr-CA': { 'close': 'Fermer' },
						'ja-JP': { 'close': '閉じる' },
						'ko-KR': { 'close': '닫기' },
						'nb-NO': { 'close': 'Lukk' },
						'nl-NL': { 'close': 'Sluiten' },
						'pt-BR': { 'close': 'Fechar' },
						'sv-SE': { 'close': 'Stäng' },
						'tr-TR': { 'close': 'Kapat' },
						'zh-CN': { 'close': '关闭' },
						'zh-TW': { 'close': '關閉' }
					};
				}
			}
		};
	}
	static get template() {
		const template = html`<style>
			:host {
				display: inline-block;
				height: 100%;
			}
			d2l-navigation-button-notification-icon {
				height: 100%;
			}
		</style>
		<d2l-navigation-button-notification-icon class="d2l-focusable" text="[[localize('close')]]" disabled$="[[disabled]]" icon="d2l-tier1:close-large-thick">

	</d2l-navigation-button-notification-icon>`;
		template.setAttribute('strip-whitespace', '');
		return template;
	}
}

customElements.define('d2l-navigation-button-close', D2LNavigationButtonClose);
