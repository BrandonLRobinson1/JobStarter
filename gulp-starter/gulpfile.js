var gulp = require('gulp');




// scripts tasks

gulp.task('script', function(){
  console.log('script running');
});


// watch tasks 

// gulp.task('watch', function(){
//   gulp.watch('my-app/src/**/*.+(js|css)', ['script']);
//   // gulp.watch('./my-app/src/**/*.js', ['script']);
//   // gulp.watch('./styles/*.css', ['script']);
// });



// var watcher = gulp.watch('my-app/src/**/*.+(js|css)', ['script']);
// watcher.on('change', function(event) {
//   console.log('changedMan');
// });




// default task

gulp.task('default', function() {
  // place code for your default task here
  console.log('gulpy')
});