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
  return gulp.src(['src/rex.js', 'src/**/*.js'])
             .pipe(sourceMaps.init())
             .pipe(babel({ presets: ['react-native-stage-0/decorator-support'] }))
             .pipe(concat('rex.min.js'))
             // .pipe(uglify())
             .pipe(sourceMaps.write('.'))
             .pipe(gulp.dest('dist/'));
});

gulp.task('evnts', ['rex'], function () {
  return gulp.src(['benchmark/evnts/**/*.js'])
             .pipe(sourceMaps.init())
             .pipe(babel({ presets: ['react-native-stage-0/decorator-support'] }))
             .pipe(concat('evnts.min.js'))
             // .pipe(uglify())
             .pipe(sourceMaps.write('.'))
             .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
  return gulp.watch('src/**/*.js', ['rex']);
});

gulp.task('watch:evnts', ['watch'], function () {
  return gulp.watch('benchmark/evnts/**/*.js', ['evnts']);
});

gulp.task('dev', ['rex', 'watch']);
gulp.task('prod', ['rex']);

gulp.task('benchmark', ['evnts', 'watch:evnts']);