var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('default', ['UnitTests']);

gulp.task('UnitTests', function () {
    return gulp.src('../tests/spec/*spec.js')
        .pipe(jasmine());
});

gulp.task('ci', ['default']);
