var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task('default', function() {
    return gulp.src('./src/**/*.js')
        .pipe(concat('reticulating-splines.js'))
        .pipe(gulp.dest('./dist'));
});
