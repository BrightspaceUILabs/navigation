import '@brightspace-ui/core/components/colors/colors.js';
import { css } from 'lit';

export const highlightBorderStyles = css`
	.d2l-navigation-highlight-border {
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
	*:focus > .d2l-navigation-highlight-border,
	*:hover > .d2l-navigation-highlight-border {
		background: var(--d2l-color-celestine);
	}
`;

export const highlightLinkStyles = css`
	a {
		align-items: center;
		color: var(--d2l-color-ferrite);
		display: inline-flex;
		gap: 6px;
		height: 100%;
		min-height: 40px;
		position: relative;
		text-decoration: none;
		vertical-align: middle;
		white-space: nowrap;
	}
	a:hover,
	a:focus {
		--d2l-icon-fill-color: var(--d2l-color-celestine);
		color: var(--d2l-color-celestine);
		outline: none;
	}
`;
