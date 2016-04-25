var gulp = require('gulp'),
  nodemon = require('gulp-nodemon'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  less = require('gulp-less'),
  exec = require('child_process').exec,
  crawl = require('./app/modules/index');

gulp.task('less', function() {
  gulp.src('./public/css/*.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(gulp.dest('./public/css'))
    .pipe(livereload());
});

gulp.task('watch', function() {
  gulp.watch('./public/css/*.less', ['less']);
});

gulp.task('develop', function() {
  livereload.listen();
  nodemon({
    script: 'app.js',
    ext: 'js coffee swig',
    stdout: false
  }).on('readable', function() {
    this.stdout.on('data', function (chunk) {
      if(/^Express server listening on port/.test(chunk)){
        livereload.changed(__dirname);
      }
    });
    this.stdout.pipe(process.stdout);
    this.stderr.pipe(process.stderr);
  });
});

gulp.task('project', function() {
  var projects = [
    'git clone --verbose --progress git@github.com:apache/cassandra.git projects/cassandra'
  ];
  
  var run = exec(projects.join(' && '));
  run.stdout.pipe(process.stdout);
  run.stderr.pipe(process.stderr);
});

gulp.task('crawl', function() {
  crawl();
});

gulp.task('default', [
  'less',
  'develop',
  'watch'
]);
