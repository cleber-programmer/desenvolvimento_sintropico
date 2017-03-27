var babel = require('gulp-babel');
var concat = require('gulp-concat');
var gulp = require('gulp');
var sourceMaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglify');

gulp.task('rex', function () {
    return gulp.src([
            'src/rex.js',
            'src/atom/*.js',
            'src/flip/*.js',
            'src/guid/*.js',
            'src/hook/*.js',
            'src/memoize/*.js',
            'src/radio/*.js',
            'src/storage/*.js'
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

gulp.task('bootstrap', function () {
    return gulp.src('bootstrap.js')
        .pipe(sourceMaps.init())
        .pipe(babel({
            presets: ['react-native-stage-0/decorator-support']
         }))
        .pipe(concat('bootstrap.min.js'))
        .pipe(sourceMaps.write('.'))
        .pipe(gulp.dest('dist/'));
});

gulp.task('watch:rex', function () {
    return gulp.watch('src/**/*.js', ['rex']);
});

gulp.task('watch:bootstrap', function () {
    return gulp.watch('bootstrap.js', ['bootstrap']);
});

gulp.task('default', ['rex', 'bootstrap', 'watch:rex', 'watch:bootstrap']);