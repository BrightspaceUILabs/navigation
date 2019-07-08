import 'd2l-colors/d2l-colors.js';
import './d2l-navigation-button.js';
import 'd2l-icons/d2l-icon.js';
import 'd2l-icons/tier2-icons.js';
import 'd2l-button/d2l-button-behavior.js';
import 'd2l-polymer-behaviors/d2l-focusable-behavior.js';
import './d2l-navigation-notification-icon.js';

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';

/**
`d2l-navigation-button-notification-icon`
Polymer-based web component for buttons used in the navigational header.
This button contains a user-supplied icon, as well as a notification marker.

@demo demo/d2l-navigation-button.html d2l-navigation-button-notification-icon
*/
class D2LNavigationButtonNotificationIcon extends mixinBehaviors([D2L.PolymerBehaviors.Button.Behavior, D2L.PolymerBehaviors.FocusableBehavior], PolymerElement) {

	static get properties() {
		return {
			icon: {
				type: String
			},
			notification: {
				type: Boolean,
				value: false,
				reflectToAttribute: true
			},
			text: {
				type: String
			},
			notificationText: {
				type: String
			}
		};
	}
	static get template() {
		const template = html`
		<style is="custom-style">
			:host {
				display: inline-block;
				height: 100%;
			}
			.d2l-navigation-button-icon-container {
				display: inline-block;
				position: relative;
			}
		</style>
		<d2l-navigation-button aria-expanded$="[[ariaExpanded]]" aria-haspopup$="[[ariaHaspopup]]" aria-label$="[[ariaLabel]]" aria-describedby-text="[[_getNotificationText(notification, notificationText)]]" class="d2l-focusable" disabled$="[[disabled]]" autofocus$="[[autofocus]]" form$="[[form]]" formaction$="[[formaction]]" formenctype$="[[formenctype]]" formmethod$="[[formmethod]]" formnovalidate$="[[formnovalidate]]" formtarget$="[[formtarget]]" name$="[[name]]" text="[[text]]" type$="[[type]]">
			<span class="d2l-navigation-button-icon-container">
				<d2l-icon icon="[[icon]]" class="d2l-navigation-button-icon"></d2l-icon>
				<d2l-navigation-notification-icon hidden$="[[!notification]]"></d2l-navigation-notification-icon>
			</span>
		</d2l-navigation-button>
		`;
		template.setAttribute('strip-whitespace', '');
		return template;
	}

	_getNotificationText(notification, notificationText) {
		return notification ? notificationText : '';
	}
}
customElements.define('d2l-navigation-button-notification-icon', D2LNavigationButtonNotificationIcon);
