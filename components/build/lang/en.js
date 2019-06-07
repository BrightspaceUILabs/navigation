'use strict';

import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

/* @polymerMixin */
const LangEnImpl = (superClass) => class extends superClass {
	constructor() {
		super();
		this.en = {
			'next': 'Next',
			'previous': 'Previous'
		};
	}
};

export const LangEn = dedupingMixin(LangEnImpl);

