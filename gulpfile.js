var babel = require('gulp-babel');
var concat = require('gulp-concat');
var gulp = require('gulp');
var sourceMaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('polyfill', function () {
  return gulp.src('node_modules/babel-polyfill/dist/polyfill.min.js')
             .pipe(gulp.dest('dist/'));
});

gulp.task('rex', ['polyfill'], function () {
  return gulp.src(['src/rex.js', '!src/**/*.spec.js', 'src/**/*.js'])
             .pipe(sourceMaps.init())
             .pipe(babel({ presets: ['react-native-stage-0/decorator-support'] }))
             .pipe(concat('rex.min.js'))
             .pipe(uglify())
             .pipe(sourceMaps.write('.'))
             .pipe(gulp.dest('dist/'));
});

gulp.task('spec', ['rex'], function () {
  return gulp.src(['src/**/*.spec.js'])
             .pipe(sourceMaps.init())
             .pipe(babel({ presets: ['react-native-stage-0/decorator-support'] }))
             .pipe(concat('rex.spec.js'))
             .pipe(sourceMaps.write('.'))
             .pipe(gulp.dest('dist/'));
});

gulp.task('watch', ['spec'], function () {
  return gulp.watch('src/**/*.js', ['spec']);
});