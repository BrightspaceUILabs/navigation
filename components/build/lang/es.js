'use strict';

import {dedupingMixin} from '@polymer/polymer/lib/utils/mixin.js';

/* @polymerMixin */
const LangEsImpl = (superClass) => class extends superClass {
	constructor() {
		super();
		this.es = {
			'next': 'Siguiente',
			'previous': 'Anterior'
		};
	}
};

export const LangEs = dedupingMixin(LangEsImpl);

