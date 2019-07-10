'use strict';

import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

/* @polymerMixin */
const LangZhtwImpl = (superClass) => class extends superClass {
	constructor() {
		super();
		this.zhtw = {
			'next': '下一個',
			'previous': '上一個'
		};
	}
};

export const LangZhtw = dedupingMixin(LangZhtwImpl);

