var gulp = require('gulp')
var bower = require('gulp-bower')

gulp.task('default', function() {

});

gulp.task('bower', function() {
    bower().pipe(gulp.dest('lib'))
});
