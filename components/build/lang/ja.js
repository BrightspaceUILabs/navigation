'use strict';

import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

/* @polymerMixin */
const LangJaImpl = (superClass) => class extends superClass {
	constructor() {
		super();
		this.ja = {
			'next': 'Next',
			'previous': 'Previous'
		};
	}
};

export const LangJa = dedupingMixin(LangJaImpl);

