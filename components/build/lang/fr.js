'use strict';

import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

/* @polymerMixin */
const LangFrImpl = (superClass) => class extends superClass {
	constructor() {
		super();
		this.fr = {
			'next': 'Next',
			'previous': 'Previous'
		};
	}
};

export const LangFr = dedupingMixin(LangFrImpl);

