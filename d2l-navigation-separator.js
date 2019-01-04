/**
`d2l-navigation-separator`
Polymer-based web component for a separator component to be used between buttons in a navigational element

@demo demo/navigation-separator.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'd2l-icons/d2l-icon.js';
import 'd2l-icons/tier2-icons.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-navigation-separator">
	<template strip-whitespace="">
		<style>
			:host {
				display: inline-block;
				margin: 0 9px;
			}
			d2l-icon {
				color: var(--d2l-color-mica);
			}
		</style>
		<d2l-icon icon="d2l-tier2:divider-big"></d2l-icon>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-navigation-separator'
});
