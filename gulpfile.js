const gulp = require('gulp');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');

gulp.task('rex', function () {
  gulp.src(['src/*.js'])
      .pipe(concat('rex.min.js'))
      // .pipe(uglify({ unsafe: true }))
      .pipe(gulp.dest('dist/'));
});

gulp.task('atom', function () {
  gulp.src(['src/atom/*.js'])
      .pipe(concat('atom.min.js'))
      // .pipe(uglify({ unsafe: true }))
      .pipe(gulp.dest('dist/'));
});

gulp.task('radio', function () {
  gulp.src(['src/radio/*.js'])
      .pipe(concat('radio.min.js'))
      // .pipe(uglify({ unsafe: true }))
      .pipe(gulp.dest('dist/'));
});

gulp.task('default', ['rex', 'atom', 'radio']);