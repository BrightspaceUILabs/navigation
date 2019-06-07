'use strict';

import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

/* @polymerMixin */
const LangFrfrImpl = (superClass) => class extends superClass {
	constructor() {
		super();
		this.frfr = {
			'next': 'Next',
			'previous': 'Previous'
		};
	}
};

export const LangFrfr = dedupingMixin(LangFrfrImpl);

