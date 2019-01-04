/**
`d2l-navigation-immersive`
Polymer-based web component for the immersive navigation component

@demo demo/navigation-immersive.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'd2l-colors/d2l-colors.js';
import 'fastdom/fastdom.js';
import 'd2l-polymer-behaviors/d2l-dom.js';
import ResizeObserver from 'resize-observer-polyfill/dist/ResizeObserver.es.js';
import 'd2l-typography/d2l-typography-shared-styles.js';
import './d2l-navigation.js';
import './d2l-navigation-link-back.js';
import './d2l-navigation-shared-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { dom } from '@polymer/polymer/lib/legacy/polymer.dom.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-navigation-immersive">
	<template strip-whitespace="">
		<style include="d2l-navigation-shared-styles">
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
				--d2l-navigation-shadow-gradient-display: none;
				border-bottom: 1px solid var(--d2l-color-mica);
			}
			.d2l-navigation-immersive-margin {
				margin: 0 30px;
			}

			.d2l-navigation-immersive-container {
				display: flex;
				height: var(--d2l-navigation-immersive-height-main);
				justify-content: space-between;
				margin: 0 -7px;
				max-width: 1230px;
				overflow: hidden;
			}

			.d2l-navigation-immersive-left ::slotted(*),
			.d2l-navigation-immersive-middle ::slotted(*),
			.d2l-navigation-immersive-right ::slotted(*) {
				height: 100%;
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
				width: 100%
			}

			.d2l-navigation-immersive-middle-hidden {
				display: none;
			}

			d2l-navigation-link-back {
				--d2l-navigation-link-back-left-padding: 12px;
			}

			.d2l-navigation-immersive-spacing {
				height: calc(var(--d2l-navigation-immersive-height-main) + 5px);
				position: unset;
			}

			.d2l-navigation-shadow-gradient {
				left: 0;
				position: fixed;
				right: 0;
				top: calc(var(--d2l-navigation-immersive-height-main) + 5px);
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
				.d2l-navigation-immersive-spacing {
					height: calc(var(--d2l-navigation-immersive-height-responsive) + 5px);
				}
				.d2l-navigation-shadow-gradient {
					top: calc(var(--d2l-navigation-immersive-height-responsive) + 5px);
				}
				.d2l-navigation-immersive-middle {
					margin: 0 18px;
					padding: 0 18px;
				}
				d2l-navigation-link-back {
					--d2l-navigation-link-back-left-padding: 6px;
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
						<div class="d2l-navigation-immersive-middle">
							<slot name="middle"></slot>
						</div>
						<div class="d2l-navigation-immersive-right">
							<slot name="right"></slot>
						</div>
					</div>
				</div>
			</d2l-navigation>
		</div>
		<div class="d2l-navigation-immersive-spacing"></div>
		<div class="d2l-navigation-shadow-gradient"></div>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-navigation-immersive',

	properties: {
		backLinkHref: {
			type: String,
			reflectToAttribute: true
		},
		backLinkText: {
			type: String,
			reflectToAttribute: true
		}
	},

	ready: function() {
		this._onMiddleResize = this._onMiddleResize.bind(this);
	},

	attached: function() {
		var middle = dom(this.root).querySelector('.d2l-navigation-immersive-middle');
		this._middleObserver = new ResizeObserver(this._onMiddleResize);
		this._middleObserver.observe(middle);
	},

	detached: function() {
		var middle = dom(this.root).querySelector('.d2l-navigation-immersive-middle');
		if (this._middleObserver) {
			this._middleObserver.unobserve(middle);
		}
	},

	_onMiddleResize: function() {
		var middleContainer = dom(this.root).querySelector('.d2l-navigation-immersive-middle');

		fastdom.measure(function() {
			if (middleContainer.clientHeight < 1) {
				return;
			}
		});

		var slotElement = dom(this.root).querySelector('.d2l-navigation-immersive-middle > slot');
		var slotContent = [];
		if (slotElement) {
			slotContent = D2L.Dom.getComposedChildren(slotElement);
		} else {
			slotContent = D2L.Dom.getComposedChildren(middleContainer);
		}

		if (!slotContent || slotContent.length === 0) {
			fastdom.mutate(function() {
				// nothing in middle
				middleContainer.classList.add('d2l-navigation-immersive-middle-hidden');
			});
			return;
		}

		var elementInSlot = slotContent[0];

		fastdom.measure(function() {
			var slotHeight = elementInSlot.clientHeight;

			if (!elementInSlot || slotHeight < 1) {
				fastdom.mutate(function() {
					// nothing in middle
					middleContainer.classList.add('d2l-navigation-immersive-middle-hidden');
				});
			} else if (slotHeight > 0) {
				fastdom.mutate(function() {
					// stuff in middle
					middleContainer.classList.remove('d2l-navigation-immersive-middle-hidden');
				});
			}
		});
	}
});
