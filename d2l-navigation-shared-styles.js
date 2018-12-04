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
		</style>
	</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
