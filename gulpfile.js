var gulp         = require('gulp');
var sass         = require('gulp-sass');
var bs           = require('browser-sync').create;
var cp           = require('child_process');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var not          = require('postcss-selector-not');
var cssnext      = require('cssnext');
var size         = require('gulp-size');
var neat         = require('node-neat').includePaths;
var bourbon      = require('node-bourbon').includePaths;

var paths = {
  sass: './assets/stylesheets/',
  images: 'assets/images/'
  dist: './dist/'
}


function styles() {
  var processors = {
    autoprefixer({browsers: ['last 2 version']}),
    not, 
    cssnext
  }
  return gulp.src(paths.sass)
    .pipe(sass({
      includePaths: [bourbon, neat]
    }))
    .pipe(postcss(processors))
    .pipe(size({
      showFiles: true,
      gzip: true,
      pretty: true
    }))
    .pipe(bs.stream());
    .pipe(gulp.dest([paths.dist + 'stylesheets/', '_site/dist/']))
};

gulp.task('styles', styles());

gulp.task('jekyll-build', function (done) {
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'}).on('close', done);
});

gulp.task('jekyll-rebuild', ['jekyll-build'], function () {
  bs.reload();
});


gulp.task('connect', ['styles', 'jekyll-build'], function() {
  bs.init({
    server: {
      baseDir: '_site'
    }
  });
});
