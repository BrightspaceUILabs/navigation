/**
`d2l-navigation-link-back`
Polymer-based web component for the back button used in the navigational header.

@demo demo/d2l-navigation-button.html d2l-navigation-link-back
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'd2l-colors/d2l-colors.js';
import './d2l-navigation-link.js';
import 'd2l-icons/d2l-icon.js';
import 'd2l-icons/tier1-icons.js';
import 'd2l-polymer-behaviors/d2l-focusable-behavior.js';
import 'd2l-localize-behavior/d2l-localize-behavior.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-navigation-link-back">
	<template strip-whitespace="">
		<style>
			:host {
				display: inline-block;
				height: 100%;
			}
			d2l-icon {
				color: inherit;
			}
			span {
				padding: 0 5px;
			}
			span, d2l-icon {
				vertical-align: middle;
				height: 100%;
			}
		</style>
		<d2l-navigation-link href="[[href]]" class="d2l-focusable" text="[[_getDisplayText(text, localize)]]">
			<d2l-icon icon="d2l-tier1:chevron-left"></d2l-icon>
			<span>[[_getDisplayText(text, localize)]]</span>
		</d2l-navigation-link>
	</template>
	

</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-navigation-link-back',
	properties: {
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
	},
	_getDisplayText: function(text, localize) {
		if (text === undefined || text === null) {
			return localize('back');
		}
		return text;
	},
	behaviors: [
		D2L.PolymerBehaviors.Link.Behavior,
		D2L.PolymerBehaviors.FocusableBehavior,
		D2L.PolymerBehaviors.LocalizeBehavior
	]
});
