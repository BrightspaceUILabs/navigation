/**
`d2l-navigation-button-close`
Polymer-based web component for buttons used in the navigational header.
This button contains an X icon.

@demo demo/d2l-navigation-button.html d2l-navigation-button-close
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import './d2l-navigation-button-notification-icon.js';
import 'd2l-icons/d2l-icon.js';
import 'd2l-icons/tier1-icons.js';
import 'd2l-button/d2l-button-behavior.js';
import 'd2l-polymer-behaviors/d2l-focusable-behavior.js';
import 'd2l-localize-behavior/d2l-localize-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-navigation-button-close">
	<template strip-whitespace="">
		<style>
			:host {
				display: inline-block;
				height: 100%;
			}
			d2l-navigation-button-notification-icon {
				height: 100%;
			}
		</style>
		<d2l-navigation-button-notification-icon class="d2l-focusable" text="[[localize('close')]]" disabled$="[[disabled]]" icon="d2l-tier1:close-large-thick">
		
	</d2l-navigation-button-notification-icon></template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-navigation-button-close',
	properties: {
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
	},
	behaviors: [
		D2L.PolymerBehaviors.Button.Behavior,
		D2L.PolymerBehaviors.FocusableBehavior,
		D2L.PolymerBehaviors.LocalizeBehavior
	]
});
