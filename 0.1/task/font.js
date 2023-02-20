const {src, dest} = require("gulp");
const plumber = require("gulp-plumber");
const notify = require("gulp-notify");
const newer = require("gulp-newer");
const ttf2woff2 = require("gulp-ttf2woff2")
const rename = require("gulp-rename");
const fonter2 = require("gulp-fonter-2");

const path = require("../config/path.js");
const app = require("../config/app.js");

const font = function() {
	return src(path.font.src)
	.pipe(plumber({
		errorHandler: notify.onError(error => ({
			title: "Font",
			message: error.message
		}))
	}))
	.pipe(newer(path.font.dest))
	.pipe(fonter2(app.fonter))
	.pipe(dest(path.font.dest))
	.pipe(ttf2woff2())
	.pipe(dest(path.font.dest));
}

module.exports = font;