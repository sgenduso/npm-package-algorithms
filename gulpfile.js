var concat = require('gulp-concat')
var gulp = require('gulp');
var jasmine = require('gulp-jasmine');



gulp.task('default', ['factorial', 'anagrams', 'isPrime','romans','pangram'])

gulp.task('factorial', function () {
    return gulp.src('factorial/spec/spec.js')
        .pipe(jasmine());
});
gulp.task('anagrams', function () {
    return gulp.src('anagrams/spec/spec.js')
        .pipe(jasmine());
});
gulp.task('isPrime', function () {
    return gulp.src('isPrime/spec/spec.js')
        .pipe(jasmine());
});
gulp.task('romans', function () {
    return gulp.src('roman-numerals/spec/spec.js')
        .pipe(jasmine());
});
gulp.task('pangram', function () {
    return gulp.src('pangram/spec/spec.js')
        .pipe(jasmine());
});

gulp.task('ci', ['default']);


//
// gulp.task('watchout', function () {
//   gulp.watch('js/*js', ['scripts'])
//   gulp.watch('app.css', ['styles'])
//   gulp.watch('index.html', ['html'])
// })
