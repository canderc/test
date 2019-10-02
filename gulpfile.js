var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function() {
gulp.src("styles/style.scss")
.pipe(sass())
.pipe(gulp.dest("dest"))
.pipe(browserSync.stream());
});

gulp.task('reload', function (done) {
browserSync.reload();
done();
})

gulp.task('run', function() {

browserSync.init({
server: "./"
});

gulp.watch("*.scss", gulp.series('sass'));
gulp.watch("*.html", gulp.series('reload'))
});

gulp.task('serve', gulp.series('sass', 'run'));

gulp.task('default', gulp.series('serve'));