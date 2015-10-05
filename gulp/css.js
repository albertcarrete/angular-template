var gulp = require('gulp');
var stylus = require('gulp-stylus');
var concat = require('gulp-concat');
var livereload = require('gulp-livereload');

gulp.task('css',function(){
	gulp.src(['ng/css/base.styl','ng/css/font.styl','ng/css/**/*.styl'])
	.pipe(stylus())
	.pipe(concat('app.css'))
	.pipe(gulp.dest('public/website/assets/css/'))
	.pipe(livereload())
})
gulp.task('watch:css',['css'],function(){
	livereload.listen();
	gulp.watch('ng/css/**/*.styl',['css'])
})

gulp.task('css-dashboard',function(){
	gulp.src('ng/css-dashboard/**/*.styl')
	.pipe(stylus())
	.pipe(concat('app.css'))
	.pipe(gulp.dest('public/dashboard/assets/css/'))
	.pipe(livereload())
})

gulp.task('watch:css-dashboard',['css-dashboard'],function(){
	livereload.listen();
	gulp.watch('ng/css-dashboard/**/*.styl',['css-dashboard'])
})