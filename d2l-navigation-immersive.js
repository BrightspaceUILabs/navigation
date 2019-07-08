import 'd2l-colors/d2l-colors.js';
import 'fastdom/fastdom.js';
import ResizeObserver from 'resize-observer-polyfill/dist/ResizeObserver.es.js';
import 'd2l-typography/d2l-typography-shared-styles.js';
import './d2l-navigation.js';
import './d2l-navigation-link-back.js';
import { navigationSharedSytle } from './d2l-navigation-shared-styles.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

/**
`d2l-navigation-immersive`
Polymer-based web component for the immersive navigation component

@demo demo/navigation-immersive.html
*/
class D2LNavigationImmsersive extends PolymerElement {

	static get template() {
		const template = html`
				${navigationSharedSytle}
				<style>
			:host {
				--d2l-navigation-immersive-height-main: 3.1rem;
				--d2l-navigation-immersive-height-responsive: 2.8rem;
			}
			.d2l-navigiation-immersive-fixed {
				background-color: white;
				left: 0;
				position: fixed;
				right: 0;
				top: 0;
				z-index: 1;
			}
			d2l-navigation {
				border-bottom: 1px solid var(--d2l-color-mica);
			}
			.d2l-navigation-immersive-margin {
				display: flex;
				justify-content: center;
				margin: 0 30px;
			}

			.d2l-navigation-immersive-container {
				display: flex;
				height: var(--d2l-navigation-immersive-height-main);
				justify-content: space-between;
				margin: 0 -7px;
				max-width: var(--d2l-navigation-immersive-content-max-width, 100%);
				overflow: hidden;
				width: 100%;
			}

			.d2l-navigation-immersive-left ::slotted(*),
			.d2l-navigation-immersive-middle ::slotted(*),
			.d2l-navigation-immersive-right ::slotted(*) {
				height: var(--d2l-navigation-immersive-height-main);
			}

			/*
				::slotted styles for Edge and IE11; styling all slotted children needs
				to be applied explicitly.
			*/
			.d2l-navigation-immersive-left ::slotted(*) > *,
			.d2l-navigation-immersive-middle ::slotted(*) > *,
			.d2l-navigation-immersive-right ::slotted(*) > * {
				height: var(--d2l-navigation-immersive-height-main);
			}

			.d2l-navigation-immersive-left {
				@apply --d2l-body-compact-text;
				color: var(--d2l-color-tungsten);
				letter-spacing: 0.2px;
				padding-left: 7px;
			}

			.d2l-navigation-immersive-right {
				padding-right: 7px;
			}

			.d2l-navigation-immersive-left,
			.d2l-navigation-immersive-right {
				flex: 0 0 auto;
			}

			.d2l-navigation-immersive-middle {
				border-left: 1px solid var(--d2l-color-gypsum);
				border-right: 1px solid var(--d2l-color-gypsum);
				flex: 0 1 auto;
				margin: 0 24px;
				padding: 0 24px;
				width: 100%;
			}

			.d2l-navigation-immersive-middle.d2l-navigation-immersive-middle-no-right-border {
				border-right: none;
			}

			div.d2l-navigation-immersive-middle-observer,
			div.d2l-navigation-immersive-right-observer {
				height: auto;
			}

			.d2l-navigation-immersive-middle-hidden {
				visibility: hidden;
			}

			d2l-navigation-link-back {
				--d2l-navigation-link-back-left-padding: 12px;
			}

			.d2l-navigation-immersive-spacing {
				height: calc(var(--d2l-navigation-immersive-height-main) + 5px);
				position: unset;
			}

			@media (max-width: 929px) {
				.d2l-navigation-immersive-margin {
					margin: 0 24px;
				}
			}

			@media (max-width: 767px) {
				.d2l-navigation-immersive-margin {
					margin: 0 18px;
				}
			}

			@media (max-width: 615px) {
				.d2l-navigation-immersive-container {
					height: var(--d2l-navigation-immersive-height-responsive);
				}
				.d2l-navigation-immersive-left ::slotted(*),
				.d2l-navigation-immersive-middle ::slotted(*),
				.d2l-navigation-immersive-right ::slotted(*) {
					height: var(--d2l-navigation-immersive-height-responsive);
				}
				/*
					::slotted styles for Edge and IE11; styling all slotted children needs
					to be applied explicitly.
				*/
				.d2l-navigation-immersive-left ::slotted(*) > *,
				.d2l-navigation-immersive-middle ::slotted(*) > *,
				.d2l-navigation-immersive-right ::slotted(*) > * {
					height: var(--d2l-navigation-immersive-height-main);
				}
				.d2l-navigation-immersive-spacing {
					height: calc(var(--d2l-navigation-immersive-height-responsive) + 5px);
				}
				.d2l-navigation-immersive-middle {
					margin: 0 18px;
					padding: 0 18px;
				}
				d2l-navigation-link-back {
					--d2l-navigation-link-back-left-padding: 6px;
					margin: 0
				}
			}

		</style>
		<div class="d2l-navigiation-immersive-fixed">
			<d2l-navigation>
				<div class="d2l-navigation-immersive-margin">
					<div class="d2l-navigation-immersive-container">
						<div class="d2l-navigation-immersive-left">
							<slot name="left">
								<d2l-navigation-link-back text="[[backLinkText]]" href="[[backLinkHref]]"></d2l-navigation-link-back>
							</slot>
						</div>
						<div class="d2l-navigation-immersive-middle d2l-navigation-immersive-middle-no-right-border">
							<div class="d2l-navigation-immersive-middle-observer">
								<slot name="middle"></slot>
							</div>
						</div>
						<div class="d2l-navigation-immersive-right">
							<div class="d2l-navigation-immersive-right-observer">
								<slot name="right"></slot>
							</div>
						</div>
					</div>
				</div>
			</d2l-navigation>
		</div>
		<div class="d2l-navigation-immersive-spacing"></div>
		`;
		template.setAttribute('strip-whitespace', '');
		return template;
	}
	ready() {
		super.ready();
		this._onMiddleResize = this._onMiddleResize.bind(this);
		this._onRightResize = this._onRightResize.bind(this);
	}

	connectedCallback() {
		super.connectedCallback();

		this.middle = dom(this.root).querySelector('.d2l-navigation-immersive-middle-observer');
		this._middleObserver = new ResizeObserver(this._onMiddleResize);
		this._middleObserver.observe(this.middle);

		this.right = dom(this.root).querySelector('.d2l-navigation-immersive-right-observer');
		this._rightObserver = new ResizeObserver(this._onRightResize);
		this._rightObserver.observe(this.right);
	}

	disconnectedCallback() {
		super.disconnectedCallback();
		if (this._middleObserver) {
			this._middleObserver.unobserve(this.middle);
		}

		if (this._rightObserver) {
			this._rightObserver.unobserve(this.right);
		}
	}

	_onMiddleResize(entries) {
		this._onResize(entries, '.d2l-navigation-immersive-middle', 'd2l-navigation-immersive-middle-hidden');
	}

	_onRightResize(entries) {
		this._onResize(entries, '.d2l-navigation-immersive-middle', 'd2l-navigation-immersive-middle-no-right-border');
	}

	_onResize(entries, slotContainerQuerySelector, containerClass) {
		if (!entries || entries.length === 0) {
			return;
		}

		var entry = entries[0];
		var container = dom(this.root).querySelector(slotContainerQuerySelector);

		if (entry.contentRect.height < 1) {
			// nothing in slot
			if (!container.classList.contains(containerClass)) {
				fastdom.mutate(function() {
					container.classList.add(containerClass);
				});
			}
		} else {
			// stuff in slot
			if (container.classList.contains(containerClass)) {
				fastdom.mutate(function() {
					container.classList.remove(containerClass);
				});
			}
		}
	}
}
customElements.define('d2l-navigation-immersive', D2LNavigationImmsersive);
