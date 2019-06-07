'use strict';

import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

/* @polymerMixin */
const LangArImpl = (superClass) => class extends superClass {
	constructor() {
		super();
		this.ar = {
			'next': 'Next',
			'previous': 'Previous'
		};
	}
};

export const LangAr = dedupingMixin(LangArImpl);

