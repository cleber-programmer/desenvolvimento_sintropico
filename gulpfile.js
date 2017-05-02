var babel = require('gulp-babel');
var concat = require('gulp-concat');
var gulp = require('gulp');
var uglify = require('gulp-uglify');

gulp.task('polyfill', function () {
    return gulp.src('node_modules/babel-polyfill/dist/polyfill.min.js')
               .pipe(gulp.dest('dist/'));
});

gulp.task('rex', function () {
    return gulp.src([
            'src/rex.js',
            'src/**/*.js'
         ])
        .pipe(babel({
            presets: ['react-native-stage-0/decorator-support']
         }))
        .pipe(concat('rex.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function () {
    return gulp.watch('src/**/*.js', ['rex']);
});

gulp.task('dev', ['rex', 'watch']);
gulp.task('prod', ['rex']);