
import 'd2l-colors/d2l-colors.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class NavigationNotificationIcon extends PolymerElement {
    static get template() {
		return html`
            <style is="custom-style" include="d2l-offscreen-shared-styles">
                :host {
                    display: inline-block;
                    height: 100%;
                }
                :host([notification]) .d2l-navigation-notification-indicator {
                    display: inline-block;
                }
                .d2l-navigation-notification-indicator {
                    display: none;
                    height: 100%;
                    position: absolute;
                    right: calc(-50% - 4px);
                    top: calc(-50% + 11px);
                    width: 100%;
                }
                :host(:dir(rtl)) .d2l-navigation-notification-indicator {
                    left: calc(-50% - 4px);
                    right: auto;
                }
                .d2l-navigation-notification-indicator-icon {
                    background: var(--d2l-color-primary-accent-indicator);
                    border: 2px solid white;
                    height: 10px;
                    width: 10px;
                    border-radius: 50%;
                }
            </style>
            <span class="d2l-navigation-notification-indicator">
                <div class="d2l-navigation-notification-indicator-icon"></div>
            </span>
		`;
    }

    static get is() { return 'd2l-navigation-notification-icon'; }

    static get properties() {
		return {
            notification: {
                type: Boolean,
                reflectToAttribute: true
            }
		};
	}
}

window.customElements.define(NavigationNotificationIcon.is, NavigationNotificationIcon);