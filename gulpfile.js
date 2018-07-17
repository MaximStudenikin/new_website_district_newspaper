'use strict';

const gulp = require('gulp');
const plumber = require('gulp-plumber');

//var sass
const sass = require('gulp-sass');
const sassGlob = require('gulp-sass-glob');
const groupMediaCSSQueries = require('gulp-group-css-media-queries');
const cleanCSS = require('gulp-cleancss');
const autoPref = require('gulp-autoprefixer');
const pxtorem = require('postcss-pxtorem');

const sourcemaps = require('gulp-sourcemaps');
const rename = require('gulp-rename');

//html
const pug = require('gulp-pug');

//img
const image = require('gulp-image');

//fonts
const fontmin = require('gulp-fontmin');

//SVG
const svgSprite = require('gulp-svg-sprites');

//js
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');

//del
const del = require('del');

//server
const browserSync = require('browser-sync').create();

//paths
const paths = {
	build: './build/',       //Готовый продукт
	dev: './dev/',          //Все наше сокровище
	src: './source/' //исходники для работы (шрифты, картинки и тд)
};

function html() {
	return gulp.src(paths.dev + 'common.pages/**/*.pug')
		.pipe(plumber())
		.pipe(pug({ pretty: true }))                  //pretty: true убирает что бы index был читаймым
		// .pipe(rename({ basename: "index" }))
		.pipe(rename({ dirname: "" }))
		.pipe(gulp.dest(paths.build))
}

function style() {
	return gulp.src(paths.dev + './main.scss')
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sassGlob())
		.pipe(sass())
		.pipe(groupMediaCSSQueries())
		.pipe(cleanCSS())
		// .pipe(autoPref({
		//     browsers: ['last 15 versions'],
		//     cascade: false
		// }))
		.pipe(rename({ suffix: '.min' }))
		.pipe(sourcemaps.write('/'))
		.pipe(gulp.dest(paths.build + 'css/'))
}


//js
function script() {
	return gulp.src(paths.dev + 'common.js/*.js')
		// .pipe(plumber())
		// .pipe(babel({
		// 	presets: ['env']
		// }))
		// .pipe(uglify())
		.pipe(gulp.dest(paths.build + 'js/'))
}

//img
function img() {
	return gulp.src(paths.src + 'img/**/*.{jpg,png}')
		.pipe(image({
			pngquant: true,
			optipng: false,
			zopflipng: true,
			jpegRecompress: false,
			mozjpeg: true,
			guetzli: false,
			gifsicle: true,
			svgo: true,
			concurrent: 10
		}))
		.pipe(rename({ suffix: "_min" }))
		.pipe(gulp.dest(paths.build + 'img/'))
}

//fonts
function minifyFont(text, cb) {
	gulp.src(paths.src + 'fonts/*')
		.pipe(fontmin({ text: text }))
		.pipe(gulp.dest(paths.build + 'fonts'))
		.on('end', cb);
}
gulp.task('fonts', function (cb) {
	var buffers = [];
	gulp.src('./build/index.html')
		.on('data', function (file) {
			buffers.push(file.contents);
		})
		.on('end', function () {
			var text = Buffer.concat(buffers).toString('utf-8');
			minifyFont(text, cb);
		});
});

//svg
function svg() {
	return gulp.src(paths.src + 'svg/*.svg')
		.pipe(svgSprite({
			baseSize: 16,
			mode: "symbols"
		}))
		.pipe(gulp.dest(paths.build + "img/svg"))
}

function remov() {
	return del('build/')
}

//watch
function watch() {
	gulp.watch(paths.dev + './**/*.pug', html);
	gulp.watch(paths.dev + './**/*.scss', style);
	gulp.watch(paths.dev + 'common.js/*.js', script);
}


function serve() {

	browserSync.init({
		server: {
			baseDir: paths.build
		},
		ghostMode: {
			clicks: true,
			forms: true,
			scroll: true
		},
		port: 3000,
		browser: "chrome",
		online: true
	});
	browserSync.watch(paths.build + '**/*.*', browserSync.reload);
}

exports.html = html;
exports.style = style;
exports.script = script;
exports.img = img;
exports.svg = svg;
exports.remov = remov;
exports.watch = watch;

gulp.task('build', gulp.series(
	remov,
	html,
	style,
	script
));

gulp.task('default', gulp.series(
	remov,
	gulp.parallel(style, script, html, svg, img),
	gulp.series(['fonts']),
	gulp.parallel(watch, serve)
));