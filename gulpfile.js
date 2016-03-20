var gulp = require('gulp');
var batch = require('gulp-batch');
var concat = require('gulp-concat');
var ngAnnotate = require('gulp-ng-annotate');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');

gulp.task('build', function() {
    return gulp.src('src/**/*.js')
        .pipe(concat('reticulating-splines.js'))
        .pipe(gulp.dest('dist'))
        .pipe(ngAnnotate())
        .pipe(uglify())
        .pipe(rename({extname: '.min.js'}))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', function() {
    watch('src/**/*.js', batch(function(events, done) {
        gulp.start('build', done);
    }));
});
