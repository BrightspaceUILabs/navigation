import {html, PolymerElement} from '@polymer/polymer/polymer-element.js';
import 'd2l-icons/d2l-icon.js';
import 'd2l-icons/tier3-icons.js';
import 'd2l-tooltip/d2l-tooltip.js';
import 'd2l-typography/d2l-typography-shared-styles.js';

/**
 * @customElement
 * @polymer
 */
class D2LNavigationIterator extends PolymerElement {
	static get template() {
		return html`
			<style>
				:host {
					@apply --d2l-body-compact-text;
				}
				.d2l-navigation-iterator {
					align-items: center;
					display: flex;
					justify-content: space-between;
					max-width: 20rem;
				}
				a {
					text-decoration: none;
				}
				.d2l-navigation-iterator-previous {
					position: relative;
				}
				.d2l-navigation-iterator-previous-link {
					padding: 0 0 0 1.2rem;
				}
				.d2l-navigation-iterator-previous-link-text {
					padding: 0 0 0 0.6rem;
				}
				.d2l-navigation-iterator-next {
					position: relative;
				}
				.d2l-navigation-iterator-next-link {
					padding: 0 1.5rem 0 0;
				}
				.d2l-navigation-iterator-next-link-text {
					padding: 0 0.6rem 0 0;
				}
			</style>
			<div class="d2l-navigation-iterator">
				<span class="d2l-navigation-iterator-previous">
					<a id="d2l-navigation-iterator-previous" class="d2l-navigation-iterator-previous-link" href="[[previousLink]]">
						<d2l-icon icon="d2l-tier3:chevron-left-circle"></d2l-icon>
						<span class="d2l-navigation-iterator-previous-link-text" hidden$="[[!_displayLinkTitles()]]">[[_previousTitleToDisplay]]</span>
					</a>
					<d2l-tooltip for="d2l-navigation-iterator-previous" position="bottom">[[_previousTitleToDisplay]]</d2l-tooltip>
				</span>
				[[countInformation]]
				<span class="d2l-navigation-iterator-next">
					<a id="d2l-navigation-iterator-next" class="d2l-navigation-iterator-next-link" href="[[nextLink]]">
						<span class="d2l-navigation-iterator-next-link-text" hidden$="[[!_displayLinkTitles()]]">[[_nextTitleToDisplay]]</span>
						<d2l-icon icon="d2l-tier3:chevron-right-circle"></d2l-icon>
					</a>
					<d2l-tooltip for="d2l-navigation-iterator-next" position="bottom">[[_nextTitleToDisplay]]</d2l-tooltip>
				</span>
			</div>
		`;
	}

	static get properties() {
		return {
			previousLink: {
				type: String,
				value: '',
				reflectToAttribute: true
			},
			nextLink: {
				type: String,
				value: '',
				reflectToAttribute: true
			},
			previousTitle: {
				type: String,
				value: '',
				reflectToAttribute: true
			},
			nextTitle: {
				type: String,
				value: '',
				reflectToAttribute: true
			},
			countInformation: {
				type: String,
				value: '',
				reflectToAttribute: true
			},
			_previousTitleToDisplay: {
				type: String,
				computed: '_getPreviousTitleToDisplay(previousTitle)'
			},
			_nextTitleToDisplay: {
				type: String,
				computed: '_getNextTitleToDisplay(nextTitle)'
			}
		};
	}

	static get is() { return 'd2l-navigation-iterator'; }

	_getPreviousTitleToDisplay(previousTitle) {
		if (previousTitle.length > 0) {
			return previousTitle;
		}
		return 'Previous'; // TODO: localize
	}

	_getNextTitleToDisplay(nextTitle) {
		if (nextTitle.length > 0) {
			return nextTitle;
		}
		return 'Next'; // TODO: localize
	}

	_displayLinkTitles() {
		if (this.countInformation.length > 0) {
			return false;
		}
		return true;
	}
}

window.customElements.define('d2l-navigation-iterator', D2LNavigationIterator);
