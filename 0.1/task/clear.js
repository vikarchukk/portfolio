const {src} = require("gulp");
const clean = require('gulp-clean');

const path = require("../config/path.js");

const clear = function() {
	return src(path.root, {allowEmpty: true})
	.pipe(clean());
}

module.exports = clear;