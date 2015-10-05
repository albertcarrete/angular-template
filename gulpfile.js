var gulp = require('gulp');
var concat = require('gulp-concat');
var fs = require('fs');

fs.readdirSync(__dirname + '/gulp').forEach(function(task){
	require('./gulp/' + task);
})

gulp.task('dev',['watch:css','watch:css-dashboard','dev:server']);


