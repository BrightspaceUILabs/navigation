'use strict';

import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

/* @polymerMixin */
const LangZhImpl = (superClass) => class extends superClass {
	constructor() {
		super();
		this.zh = {
			'next': 'Next',
			'previous': 'Previous'
		};
	}
};

export const LangZh = dedupingMixin(LangZhImpl);

