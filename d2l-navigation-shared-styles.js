import { html } from '@polymer/polymer/polymer-element.js';
export const navigationSharedStyle = html`
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

			.d2l-navigation-scroll:before,
			.d2l-navigation-scroll:after {
				width: 2.439%;
			}

			@media (max-width: 615px) {
				.d2l-navigation-gutters {
					padding-left: 15px;
					padding-right: 15px;
				}

				.d2l-navigation-scroll:before,
				.d2l-navigation-scroll:after {
					width: 15px;
				}
			}

			@media (min-width: 1230px) {
				.d2l-navigation-gutters {
					padding-left: 30px;
					padding-right: 30px;
				}

				.d2l-navigation-scroll:before,
				.d2l-navigation-scroll:after {
					width: 30px;
				}
			}
		</style>
		`;
