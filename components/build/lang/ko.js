'use strict';

import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

/* @polymerMixin */
const LangKoImpl = (superClass) => class extends superClass {
	constructor() {
		super();
		this.ko = {
			'next': 'Next',
			'previous': 'Previous'
		};
	}
};

export const LangKo = dedupingMixin(LangKoImpl);

