var gulp = require('gulp');
var batch = require('gulp-batch');
var concat = require('gulp-concat');
var watch = require('gulp-watch');

gulp.task('build', function() {
    return gulp.src('src/**/*.js')
        .pipe(concat('reticulating-splines.js'))
        .pipe(gulp.dest('dist'));
});

gulp.task('default', function() {
    watch('src/**/*.js', batch(function(events, done) {
        gulp.start('build', done);
    }));
});
