const {src, dest} = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify"); 
const babel = require("gulp-babel");
const size = require("gulp-size");
const rename = require("gulp-rename");
const webpack = require("webpack-stream");

const path = require("../config/path.js");
const app = require("../config/app.js");

const js = function() {
	return src(path.js.src, {sourcemaps: false})
	.pipe(plumber({
		errorHandler: notify.onError(error => ({
			title: "JavaScript",
			message: error.message
		}))
	}))
	.pipe(babel())
	.pipe(size({title:"js to"}))
    .pipe(webpack(app.webpack))
	.pipe(size({title:"js after"}))
	.pipe(rename({suffix:".min"}))
	.pipe(dest(path.js.dest, {sourcemaps: false}));
}

module.exports = js;