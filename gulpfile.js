/* eslint-env node, es6 */

'use strict';

const del = require('del');
const gulp = require('gulp');
const ejs = require('gulp-ejs');
const rename = require('gulp-rename');
const mergeStream = require('merge-stream');
const requireDir = require('require-dir');

const buildDirectory = '/../build';
const sergeDirectories = require('./navigation.serge.json');
const template = './templates/lang-mixin.ejs';
const buildSeries = ['clean'];
const cleanSeries = [];

sergeDirectories.forEach((sergeComponent) => {
	const localeResources = requireDir(sergeComponent.source_dir);
	const config = {
		dest: sergeComponent.source_dir + buildDirectory,
		localeFiles: Object.keys(localeResources).map((lang) => ({
			filename: lang,
			data: {
				lang: lang.replace('-', ''),
				name: sergeComponent.name,
				properLang: lang.charAt(0).toUpperCase() + lang.slice(1).replace('-', ''),
				resources: JSON.stringify(localeResources[lang], null, '\t\t\t').replace(/'/g, '\\\'').replace(/"/g, '\'').replace(/\n\}/g, '\n\t\t}'),
				comment: 'This file is auto-generated. Do not modify.'
			}
		}))
	};

	const options = {
		client: true,
		strict: true,
		root: sergeComponent.source_dir + buildDirectory + '/lang',
		localsName: 'data'
	};

	buildSeries.push(() => {
		return mergeStream(config.localeFiles.map(({ filename, data }) =>
			gulp.src(template)
				.pipe(ejs(data, options))
				.pipe(rename({
					basename: filename,
					extname: '.js'
				}))
				.pipe(gulp.dest(options.root)))
		);
	});

	cleanSeries.push(() => del([options.root]));

});

gulp.task('clean', gulp.series(cleanSeries));
gulp.task('build', gulp.series(buildSeries));
