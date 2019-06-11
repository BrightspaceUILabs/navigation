'use strict';

import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

/* @polymerMixin */
const LangKoImpl = (superClass) => class extends superClass {
	constructor() {
		super();
		this.ko = {
			'next': '다음',
			'previous': '이전'
		};
	}
};

export const LangKo = dedupingMixin(LangKoImpl);

