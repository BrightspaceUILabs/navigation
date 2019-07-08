import 'd2l-colors/d2l-colors.js';
import './d2l-navigation-button.js';
import 'd2l-icons/d2l-icon.js';
import 'd2l-icons/tier2-icons.js';
import 'd2l-button/d2l-button-behavior.js';
import 'd2l-polymer-behaviors/d2l-focusable-behavior.js';

import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { mixinBehaviors } from '@polymer/polymer/lib/legacy/class.js';

/**
`d2l-navigation-button-notification-icon`
Polymer-based web component for buttons used in the navigational header.
This button contains a user-supplied icon, as well as a notification marker.

@demo demo/d2l-navigation-button.html d2l-navigation-button-notification-icon
*/
class D2LNavigationButtonNotificationIcon extends mixinBehaviors([D2L.PolymerBehaviors.Button.Behavior, D2L.PolymerBehaviors.FocusableBehavior], PolymerElement) {
	static get is() {
		return 'd2l-navigation-button-notification-icon';
	}
	static get properties() {
		return {
			icon: {
				type: String
			},
			notification: {
				type: Boolean,
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
		return html`
		<style is="custom-style" include="d2l-offscreen-shared-styles">
			:host {
				display: inline-block;
				height: 100%;
			}
			:host([notification]) .d2l-navigation-button-notification-indicator {
				display: inline-block;
			}
			.d2l-navigation-button-icon-container {
				display: inline-block;
				position: relative;
			}
			.d2l-navigation-button-notification-indicator {
				display: none;
				height: 100%;
				position: absolute;
				right: calc(-50% - 4px);
				top: calc(-50% + 11px);
				width: 100%;
			}
			:host(:dir(rtl)) .d2l-navigation-button-notification-indicator {
				left: calc(-50% - 4px);
				right: auto;
			}
			.d2l-navigation-button-notification-indicator-icon {
				background: var(--d2l-color-primary-accent-indicator);
				border: 2px solid white;
				height: 10px;
				width: 10px;
				border-radius: 50%;
			}
		</style>
		<d2l-navigation-button aria-expanded$="[[ariaExpanded]]" aria-haspopup$="[[ariaHaspopup]]" aria-label$="[[ariaLabel]]" aria-describedby-text="[[_getNotificationText(notification, notificationText)]]" class="d2l-focusable" disabled$="[[disabled]]" autofocus$="[[autofocus]]" form$="[[form]]" formaction$="[[formaction]]" formenctype$="[[formenctype]]" formmethod$="[[formmethod]]" formnovalidate$="[[formnovalidate]]" formtarget$="[[formtarget]]" name$="[[name]]" text="[[text]]" type$="[[type]]">
			<span class="d2l-navigation-button-icon-container">
				<d2l-icon icon="[[icon]]" class="d2l-navigation-button-icon"></d2l-icon>
				<span class="d2l-navigation-button-notification-indicator">
					<div class="d2l-navigation-button-notification-indicator-icon"></div>
				</span>
			</span>
		</d2l-navigation-button>
		`;
	}

	_getNotificationText(notification, notificationText) {
		return notification ? notificationText : '';
	}
}
window.customElements.define(D2LNavigationButtonNotificationIcon.is, D2LNavigationButtonNotificationIcon);
