import '@polymer/polymer/polymer-legacy.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-navigation-shared-styles">
	<template strip-whitespace="">
		<style>
			:host {
				--d2l-navigation-margin-regular: 30px;
			}

			.d2l-navigation-centerer {
				margin: 0 auto;
				max-width: 1230px;
			}

			.d2l-navigation-gutters {
				padding-left: 2.439%;
				padding-right: 2.439%;
				position: relative;
			}

			@media (max-width: 615px) {
				.d2l-navigation-gutters {
					padding-left: 15px;
					padding-right: 15px;
				}
			}

			@media (min-width: 1230px) {
				.d2l-navigation-gutters {
					padding-left: 30px;
					padding-right: 30px;
				}
			}

			.d2l-navigation-shadow-gradient {
				background: linear-gradient(to bottom,  rgba(249,250,251,1) 0%,rgba(249,250,251,0) 100%);
				bottom: -150px;
				display: var(--d2l-navigation-shadow-gradient-display, block);
				height: 150px;
				width: 100%;
				pointer-events: none;
				position: absolute;
				z-index: -100;
			}
		</style>
	</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
