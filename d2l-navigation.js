/**
`d2l-navigation`
Polymer-based web component for the all encompasing navigation wrapper component

@demo demo/navigation.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import './d2l-navigation-band.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-navigation">
	<template strip-whitespace="">
		<style>
			:host {
				display: block;
				position: relative;
			}
			.d2l-navigation-shadow-drop-border {
				background-color: rgba(0,0,0,0.02);
				bottom: -4px;
				height: 4px;
				pointer-events: none;
				position: absolute;
				width: 100%;
			}
			.d2l-navigation-shadow-gradient {
				background: linear-gradient(to bottom,  rgba(249,250,251,1) 0%,rgba(249,250,251,0) 100%);
				bottom: -150px;
				height: 150px;
				width: 100%;
				pointer-events: none;
				position: absolute;
				z-index: -100;
			}

		</style>
		<d2l-navigation-band></d2l-navigation-band>
		<slot></slot>
		<div class="d2l-navigation-shadow-drop-border"></div>
		<div class="d2l-navigation-shadow-gradient"></div>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-navigation'
});
