'use strict';

import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

/* @polymerMixin */
const LangDadkImpl = (superClass) => class extends superClass {
	constructor() {
		super();
		this.dadk = {
			'next': 'Next',
			'previous': 'Previous'
		};
	}
};

export const LangDadk = dedupingMixin(LangDadkImpl);

