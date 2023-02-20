const {src, dest} = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const csso = require("gulp-csso");
const size = require("gulp-size");
const rename = require("gulp-rename");
const shorthand = require("gulp-shorthand");
const groupCssMediaQueries = require("gulp-group-css-media-queries"); 
const sass = require("gulp-sass")(require("sass"));
const postcss = require('gulp-postcss');
const tailwindcss = require('tailwindcss');

const path = require("../config/path.js");

const scss = function() {
	return src(path.scss.src, {sourcemaps: false})
	.pipe(plumber({
		errorHandler: notify.onError(error => ({
			title: "SCSS",
			message: error.message
		}))
	}))
	.pipe(sass())
	.pipe(postcss([tailwindcss(), require('autoprefixer')]))
	.pipe(shorthand())
	.pipe(groupCssMediaQueries())
	.pipe(rename({suffix:".min"}))
	.pipe(size({title:"scss to"}))
	.pipe(csso())
	.pipe(size({title:"scss after"}))
	.pipe(dest(path.scss.dest, {sourcemaps: false}));
}

module.exports = scss;