var gulp         = require('gulp');
var sass         = require('gulp-sass');
var imagemin     = require('gulp-imagemin');
var bs           = require('browser-sync').create();
var cp           = require('child_process');
var postcss      = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var not          = require('postcss-selector-not');
var cssnext      = require('cssnext');
var size         = require('gulp-size');
var neat         = require('node-neat').includePaths;
var bourbon      = require('node-bourbon').includePaths;

var paths = {
  sass: './assets/stylesheets/**/*.scss',
  images: './assets/images/*',
  dist: './dist/'
}

function images() {
  return gulp.src(paths.images)
    .pipe(imagemin({
      progressive: true,
    }))
    .pipe(size({
      showFiles: true,
      gzip: true,
      pretty: true
    }))
    .pipe(gulp.dest(paths.dist + 'images/'))
    .pipe(gulp.dest('_site/img/'))
}


function styles() {
  var processors = [
    autoprefixer({browsers: ['last 2 version']}),
    not, 
    cssnext
  ];

  return gulp.src(paths.sass)
    .pipe(sass({
      includePaths: neat
    }))
    .pipe(postcss(processors))
    .pipe(size({
      showFiles: true,
      gzip: true,
      pretty: true
    }))
    .pipe(gulp.dest(paths.dist + 'stylesheets/'))
    .pipe(gulp.dest('_site/dist/'));
};

gulp.task('images', images);
gulp.task('styles', styles);

gulp.task('jekyll', function (done) {
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'}).on('close', done);
});

gulp.task('re-jekyll', ['jekyll'], function () {
  bs.reload();
});


gulp.task('connect', ['styles', 'jekyll'], function() {
  bs.init({
    server: {
      baseDir: '_site'
    }
  });
});


gulp.task('build', ['images', 'styles', 'jekyll']);
gulp.task('defautl', ['build', 'watch', 'connect']);
