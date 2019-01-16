/**
`d2l-navigation-link`
Polymer-based web component for buttons used in the navigational header.

@demo demo/d2l-navigation-button.html d2l-navigation-link
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'd2l-polymer-behaviors/d2l-focusable-behavior.js';
import 'd2l-link/d2l-link-behavior.js';
import './d2l-navigation-highlight-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-navigation-link">
	<template strip-whitespace="">
		<style is="custom-style" include="d2l-navigation-highlight-styles">
			:host {
				display: flex;
				height: 100%;
			}
			a {
				@apply --d2l-navigation-highlight-base;
				font-family: inherit;
				outline: none; /* Needed for Edge, outline setting from css mixin is not being applied in Polymer 2 & 3 */
			}
			:host(:not([href])) a {
				cursor: default;
			}
			a:hover,
			a:focus {
				@apply --d2l-navigation-highlight-base-hover-focus;
			}
			a:hover .d2l-navigation-link-top-border,
			a:focus .d2l-navigation-link-top-border {
				@apply --d2l-navigation-highlight-border-hover-focus;
			}
			.d2l-navigation-link-top-border {
				@apply --d2l-navigation-highlight-border;
			}
		</style>
		<a class="d2l-focusable" href$="[[href]]" title$="[[text]]">
			<template is="dom-if" if="[[href]]">
				<span class="d2l-navigation-link-top-border"></span>
			</template>
			<slot></slot>
		</a>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-navigation-link',
	properties: {
		href: {
			type: String
		},
		text: {
			type: String
		}
	},
	behaviors: [
		D2L.PolymerBehaviors.Link.Behavior,
		D2L.PolymerBehaviors.FocusableBehavior
	]
});
