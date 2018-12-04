/**
`d2l-navigation-main-header`
Polymer-based web component for the larger, upper section of the navigational element

@demo demo/navigation-main-header.html
*/
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import './d2l-navigation-shared-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-navigation-main-header">
	<template strip-whitespace="">
		<style include="d2l-navigation-shared-styles">
			:host {
				display: block;
			}

			.d2l-navigation-header-container {
				align-items: center;
				display: flex;
				height: 90px;
			}

			@media (max-width: 767px) {
				.d2l-navigation-header-container {
					height: 72px;
				}
			}

			div ::slotted(.d2l-navigation-header-left),
			div ::slotted(.d2l-navigation-header-right) {
				align-items: center;
				display: flex;
				height: 100%;
			}

			div ::slotted(.d2l-navigation-header-left) {
				flex: 0 1 auto;
			}

			div ::slotted(.d2l-navigation-header-right) {
				flex: 0 0 auto;
			}

			.d2l-navigation-gutter {
				display: inline-block;
				flex: 1 1 auto;
				min-width: var(--d2l-navigation-margin-regular);
			}

			@media (max-width: 615px) {
				.d2l-navigation-gutter {
					min-width: var(--d2l-navigation-margin-regular) / 2;
				}
			}
		</style>
		<div class="d2l-navigation-centerer">
			<div class="d2l-navigation-gutters">
				<div class="d2l-navigation-header-container">
					<slot name="left"></slot>
					<div class="d2l-navigation-gutter"></div>
					<slot name="right"></slot>
				</div>
			</div>
		</div>
	</template>
	
</dom-module>`;

document.head.appendChild($_documentContainer.content);
Polymer({
	is: 'd2l-navigation-main-header'
});
