//  wouldn't reload browser
//  fixed with help from https://github.com/AveVlad/gulp-connect/issues/153


var gulp = require('gulp'),
  connect = require('gulp-connect'),
  traceur = require('gulp-traceur'),
  sass = require('gulp-ruby-sass');

gulp.task('connect', function(){
  connect.server({
    livereload:true,
    port: 8005
  });
});

gulp.task('reload', function(){
  gulp.src('./dist/**/*.*')
  .pipe(connect.reload());
});

gulp.task('sass', function(){
  return sass('./sass/*.scss')
  .on('error', function (err) { console.log(err.message); })
  .pipe(gulp.dest('./dist/css'));
});

gulp.task('traceur', function(){
  gulp.src('./scripts/*.js')
  .pipe(traceur())
  .pipe(gulp.dest('./dist/scripts'));
});

gulp.task('watch', function(){
  gulp.watch(['./sass/*.scss'],['sass']);
  gulp.watch(['./scripts/*.js'],['traceur']);
  gulp.watch(['./dist/**/*.*'], ['reload']);
});

gulp.task('default',['connect', 'reload', 'watch', 'sass', 'traceur']);
