/**
`d2l-navigation-main-footer`
Polymer-based web component for the smaller, lower section of the navigational element

@demo demo/navigation-main-footer.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'd2l-colors/d2l-colors.js';
import './d2l-navigation-shared-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-navigation-main-footer">
	<template strip-whitespace="">
		<style include="d2l-navigation-shared-styles">
			:host {
				display: block;
			}
		</style>
		<div class="d2l-navigation-centerer d2l-visible-on-ancestor-target">
			<div class="d2l-navigation-gutters">
				<slot name="main"></slot>
			</div>
		</div>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-navigation-main-footer'
});
