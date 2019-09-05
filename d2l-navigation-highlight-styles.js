import 'd2l-colors/d2l-colors.js';
import { html } from '@polymer/polymer/polymer-element.js';
export const highlightStyles = html`
				<style>
				:host {
					--d2l-navigation-highlight-base: {
						align-items: center;
						background: transparent;
						border: none;
						color: var(--d2l-color-ferrite);
						cursor: pointer;
						font-size: inherit;
						height: 100%;
						margin: 0;
						min-height: 40px;
						outline: none;
						overflow: visible;
						padding: 0;
						position: relative;
						text-decoration: none;
					}
					--d2l-navigation-highlight-base-hover-focus: {
						color: var(--d2l-color-celestine);
						--d2l-icon-fill-color: var(--d2l-color-celestine);
						outline: none;
					}
					--d2l-navigation-highlight-border: {
						background: transparent;
						border-bottom-left-radius: 4px;
						border-bottom-right-radius: 4px;
						display: block;
						height: 4px;
						left: -7px;
						position: absolute;
						top: 0;
						width: calc(100% + 14px);
					}
					--d2l-navigation-highlight-border-hover-focus: {
						background: var(--d2l-color-celestine);
					}
					--d2l-navigation-highlight-disabled: {
						cursor: default;
						opacity: .5;
					}
					--d2l-navigation-highlight-hover-focus-disabled: {
						background: transparent;
						color: var(--d2l-color-ferrite);
						--d2l-icon-fill-color: var(--d2l-color-ferrite);
					}
				}
			</style>
			`;
