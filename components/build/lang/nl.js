'use strict';

import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

/* @polymerMixin */
const LangNlImpl = (superClass) => class extends superClass {
	constructor() {
		super();
		this.nl = {
			'next': 'Next',
			'previous': 'Previous'
		};
	}
};

export const LangNl = dedupingMixin(LangNlImpl);

