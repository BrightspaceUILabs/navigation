'use strict';

import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

/* @polymerMixin */
const LangZhImpl = (superClass) => class extends superClass {
	constructor() {
		super();
		this.zh = {
			'next': '下一页',
			'previous': '上一个'
		};
	}
};

export const LangZh = dedupingMixin(LangZhImpl);

