const {
    series,
    watch,
    src,
    dest
} = require('gulp');
var sass = require('gulp-sass');
var webserver = require('gulp-webserver');

function sass_compile() {
    return src('./src/scss/*.scss')
        .pipe(sass())
        .pipe(dest('./app/css/'));
}

function serve(){
    return src('app')
    .pipe(webserver({
        livereload: true
    }));
}

function sass_watch(cb){
    watch(['./src/scss/*.scss'],{ignoreInitial:false},series(sass_compile, serve));
}

exports.sass_watch = series(sass_watch);
exports.default = series(sass_compile);