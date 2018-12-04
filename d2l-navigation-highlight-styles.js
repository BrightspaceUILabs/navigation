import '@polymer/polymer/polymer-legacy.js';
import 'd2l-colors/d2l-colors.js';
const $_documentContainer = document.createElement('template');

$_documentContainer.innerHTML = `<dom-module id="d2l-navigation-highlight-styles">
	<template strip-whitespace="">
		<style>
			:host {
				--d2l-navigation-highlight-base: {
					align-items: center;
					background: transparent;
					border: transparent;
					color: var(--d2l-color-ferrite);
					cursor: pointer;
					font-size: inherit;
					height: 100%;
					margin: 0;
					min-height: 40px;
					outline: transparent;
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
					opacity: .5;
					cursor: default;
				}
			}
		</style>
	</template>
</dom-module>`;

document.head.appendChild($_documentContainer.content);
