const {src, dest, series, parallel, watch} = require('gulp');
const sass = require('gulp-sass');
sass.compiler = require('node-sass'); //set explicitly for forwards-compatibility incase default ever changes
const autoPrefixer = require('gulp-autoprefixer');
const cssnano = require('gulp-cssnano');
const sourcemaps = require('gulp-sourcemaps');
const useref = require('gulp-useref');
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
//const imageMin = require('gulp-imagemin');
const del = require('del');
const browserSync = require('browser-sync').create();


const build = 'build/';
const sassFiles = 'src/sass/**/*.+(scss|sass)';
const ecmaFiles = 'src/ecma/**/*.js';
const indexSrc = 'src/index.html';
const cssDest = build + 'assets/css/';
const jsDest = build + 'assets/js/';
const indexDest = build;


function clean(cb){
    del.sync(build)
    cb();
}

function cssTranspile() {
    return src(sassFiles)
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(autoPrefixer({browsers: ['last 2 version']}))
    .pipe(sourcemaps.write())
    .pipe(dest(cssDest))
    .pipe(browserSync.stream());
}

function cssMinify() {
    return src(`${cssDest}**/*.css`)
    .pipe(sourcemaps.init())
    .pipe(cssnano())
    .pipe(sourcemaps.write())
    .pipe(dest(cssDest));
}

function jsTranspile() {
    return src(ecmaFiles)
    .pipe(sourcemaps.init())
    .pipe(babel({presets: ['@babel/env']}))
    .pipe(sourcemaps.write())
    .pipe(dest(jsDest));
}

function jsConcat() {
    return src(indexSrc)
    .pipe(useref())
    .pipe(dest(indexDest));
}

function jsMinify() {
    return src(`${jsDest}**/*.js`)
        .pipe(uglify())
        .pipe(dest(jsDest)
    );
}

function server(cb){
    browserSync.init({
        server: build,
        port: '6060'
    });
    cb();
}

function reload(cb){
    browserSync.reload();
    cb();
}

function watchFiles(){
    watch([indexSrc, sassFiles], cssTranspile);
    watch([indexSrc, ecmaFiles], series(jsTranspile, jsConcat));
    watch([indexSrc, `${indexDest}**/*.html`], {events: 'change'}, reload);
}

// development
exports.dev = series(
    clean,
    parallel(cssTranspile, series(jsTranspile, jsConcat))
);

// production
exports.prod = series(
    clean,
    parallel(cssTranspile, series(jsTranspile, jsConcat)),
    parallel(cssMinify, jsMinify),
);

// watcher
exports.default = series(
    cssTranspile,server, watchFiles
);