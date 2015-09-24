var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('default', ['UnitTests','watchout']);

gulp.task('UnitTests', function () {
    return gulp.src('tests/spec/*spec.js')
        .pipe(jasmine());
});

gulp.task('ci', ['default']);

gulp.task('watchout', function () {
  gulp.watch('tests/spec/*spec.js', ['UnitTests']);
});
