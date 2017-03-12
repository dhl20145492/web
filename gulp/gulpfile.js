/**
 * Created by DELL on 2017/3/12.
 */
var gulp = require('gulp');
var sass = require('gulp-sass');
gulp.task('test',function () {
    console.log('hello world');
});
gulp.task('test1',function () {
    console.log('hahah');
});
gulp.task('default',['test','test1']);
gulp.task('task1',function () {
   gulp.src('index.html') .pipe(gulp.dest('dest'))
});
gulp.task('watch',function () {
   gulp.watch('index.html',['task1'])
});
