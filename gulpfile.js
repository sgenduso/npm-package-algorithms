var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('default', ['UnitTests','watchout'])

// gulp.task('factorial', function () {
//     return gulp.src('factorial/spec/spec.js')
//         .pipe(jasmine());
// });
gulp.task('UnitTests', function () {
    return gulp.src('tests/spec/*spec.js')
        .pipe(jasmine());
});
// gulp.task('anagrams', function () {
//     return gulp.src('anagrams/spec/spec.js')
//         .pipe(jasmine());
// });
// gulp.task('isPrime', function () {
//     return gulp.src('isPrime/spec/spec.js')
//         .pipe(jasmine());
// });
// gulp.task('romans', function () {
//     return gulp.src('roman-numerals/spec/spec.js')
//         .pipe(jasmine());
// });
// gulp.task('pangram', function () {
//     return gulp.src('pangram/spec/spec.js')
//         .pipe(jasmine());
// });
// gulp.task('sumMatrices', function () {
//     return gulp.src('sumMatrices/spec/spec.js')
//         .pipe(jasmine());
// });
//

gulp.task('ci', ['default']);


gulp.task('watchout', function () {
  gulp.watch('tests/spec/*spec.js', ['UnitTests'])
  // gulp.watch('factorial/spec/spec.js', ['factorial'])
  // gulp.watch('anagrams/spec/spec.js', ['anagrams'])
  // gulp.watch('isPrime/spec/spec.js', ['isPrime'])
  // gulp.watch('romans/spec/spec.js', ['romans'])
  // gulp.watch('pangram/spec/spec.js', ['pangram'])
})
