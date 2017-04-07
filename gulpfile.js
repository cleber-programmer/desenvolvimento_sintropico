var babel = require('gulp-babel');
var concat = require('gulp-concat');
var gulp = require('gulp');
var sourceMaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('polyfill', function () {
    return gulp.src('node_modules/babel-polyfill/dist/polyfill.min.js')
               .pipe(gulp.dest('dist/'));
});

gulp.task('src', ['polyfill'], function () {
    return gulp.src([
            'src/rex.js',
            'src/**/*.js'
         ])
        .pipe(sourceMaps.init())
        .pipe(babel({
            presets: ['react-native-stage-0/decorator-support']
         }))
        .pipe(concat('rex.min.js'))
        .pipe(uglify())
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('benchmark', function () {
    return gulp.src('benchmark/**/*.js')
        .pipe(sourceMaps.init())
        .pipe(babel({
            presets: ['react-native-stage-0/decorator-support']
         }))
        .pipe(concat('benchmark.min.js'))
        .pipe(uglify())
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch:src', function () {
    return gulp.watch('src/**/*.js', ['src']);
});

gulp.task('watch:benchmark', function () {
    return gulp.watch('benchmark/**/*.js', ['benchmark']);
});

gulp.task('dev', ['src', 'benchmark', 'watch:src', 'watch:benchmark']);
gulp.task('prod', ['src', 'benchmark']);