/**
`d2l-navigation-band`
Polymer-based web component for a solid colour band that runs along the top of the navigational header

@demo demo/navigation-band.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'd2l-colors/d2l-colors.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-navigation-band">
	<template strip-whitespace="">
		<style>
			:host {
				border-top-color: var(--d2l-branding-primary-color, var(--d2l-color-celestine));
				border-top-style: solid;
				border-top-width: 4px;
				display: block;
			}
		</style>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-navigation-band'
});
