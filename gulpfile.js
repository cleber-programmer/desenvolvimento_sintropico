var babel = require('gulp-babel');
var concat = require('gulp-concat');
var gulp = require('gulp');
var sourceMaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('rex', function () {
    return gulp.src('src/rex.js')
        .pipe(sourceMaps.init())
        .pipe(babel({
            presets: ['react-native-stage-0/decorator-support']
         }))
        .pipe(concat('rex.min.js'))
        //.pipe(uglify())
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('atom', function () {
    return gulp.src('src/atom/*.js')
        .pipe(sourceMaps.init())
        .pipe(babel({
            presets: ['react-native-stage-0/decorator-support']
         }))
        .pipe(concat('rex.atom.min.js'))
        //.pipe(uglify())
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('radio', function () {
    return gulp.src('src/radio/*.js')
        .pipe(sourceMaps.init())
        .pipe(babel({
            presets: ['react-native-stage-0/decorator-support']
         }))
        .pipe(concat('rex.radio.min.js'))
        //.pipe(uglify())
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('bootstrap', function () {
    return gulp.src('bootstrap.js')
        .pipe(sourceMaps.init())
        .pipe(babel({
            presets: ['react-native-stage-0/decorator-support']
         }))
        .pipe(concat('bootstrap.min.js'))
        //.pipe(uglify())
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
    return gulp.watch('src/**/*.js', ['rex', 'atom', 'radio', 'bootstrap']);
});

gulp.task('default', ['rex', 'atom', 'radio', 'bootstrap', 'watch']);