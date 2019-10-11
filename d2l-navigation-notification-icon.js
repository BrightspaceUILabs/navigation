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
                    right: calc(-100% + 11px);
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
                .d2l-navigation-notification-icon-indicator {
                    background: var(--d2l-color-primary-accent-indicator);
                    border: 2px solid white;
                    height: 10px;
                    width: 10px;
                    border-radius: 50%;
                }
                :host([thin-border]) .d2l-navigation-notification-icon-indicator {
                    border-width: 1px;
                }
            </style>
            <div class="d2l-navigation-notification-icon-indicator"></div>
		`;
	}

}

window.customElements.define('d2l-navigation-notification-icon', NavigationNotificationIcon);
