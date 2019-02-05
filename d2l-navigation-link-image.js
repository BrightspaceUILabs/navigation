/**
`d2l-navigation-link-image`
Polymer-based web component for the image link used in the navigational header.

@demo demo/d2l-navigation-button.html d2l-navigation-link-image
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import './d2l-navigation-link.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-navigation-link-image">
	<template strip-whitespace="">
		<style>
			:host {
				display: inline-block;
				height: 100%;
			}
			img {
				vertical-align: middle;
				border: none; /* needed for IE10 */
				max-height: 60px;
				max-width: 260px;
			}
			:host([slim]) img {
				max-height: 40px;
				max-width: 173px;
			}
			.d2l-navigation-link-image-container {
				height: 100%;
				vertical-align: middle;
				align-items: center;
				display: inline-flex;
			}
		</style>
		<d2l-navigation-link href="[[href]]" text="[[text]]">
			<span class="d2l-navigation-link-image-container"><img src="[[src]]" alt="[[text]]"></span>
		</d2l-navigation-link>
	</template>
	

</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-navigation-link-image',
	properties: {
		src: {
			type: String
		},
		href: {
			type: String
		},
		slim: {
			reflectToAttribute: true,
			type: Boolean,
			value: false
		},
		text: {
			type: String
		}
	}
});
