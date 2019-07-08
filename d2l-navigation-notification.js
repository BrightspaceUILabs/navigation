
import 'd2l-colors/d2l-colors.js';
import { html, PolymerElement } from '@polymer/polymer/polymer-element.js';

/**
 * @customElement
 * @polymer
 */
class NavigationNotificationIcon extends PolymerElement {
	static get template() {
		return html`
            <style is="custom-style">
                :host {
                    display: inline-block;
                    height: 100%;
                    position: absolute;
                    right: calc(-50% - 4px);
                    top: calc(-50% + 11px);
                    width: 100%;
                }
                :host([hidden]){
                    display: none;
                }
                :host(:dir(rtl)) {
                    left: calc(-50% - 4px);
                    right: auto;
                }
                .d2l-navigation-notification-icon {
                    background: var(--d2l-color-primary-accent-indicator);
                    border: 2px solid white;
                    height: 10px;
                    width: 10px;
                    border-radius: 50%;
                }
            </style>
            <div class="d2l-navigation-notification-icon"></div>
		`;
	}

	static get is() { return 'd2l-navigation-notification-icon'; }

}

window.customElements.define(NavigationNotificationIcon.is, NavigationNotificationIcon);
