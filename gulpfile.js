// npm i -> gulp
const {watch, series, parallel} = require("gulp");
const browserSync = require("browser-sync").create();
const path = require("./config/path.js");

// task
const clear = require('./task/clear.js');
const html = require('./task/html.js');
const scss = require('./task/scss.js');
const js = require('./task/js.js');
const img = require('./task/img.js');
const font = require('./task/font.js');

// server 
const server = function() {
	browserSync.init({
		server: path.root,
		notify: false,
		online: true
	});
}

// watch 
const watcher = function() {
	watch(path.html.watch, html).on("all", browserSync.reload);
	watch(path.scss.watch, scss).on("all", browserSync.reload);
	watch(path.js.watch, js).on("all", browserSync.reload);
	watch(path.img.watch, img).on("all", browserSync.reload);
	watch(path.font.watch, font).on("all", browserSync.reload);
}

// start
exports.default = series(
	clear,
	parallel(html, scss, js, img, font),
	parallel(watcher, server)
);