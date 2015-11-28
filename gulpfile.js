var gulp         = require('gulp');
var uglify       = require('gulp-uglify');
var sass         = require('gulp-sass');
var imagemin     = require('gulp-imagemin');
var bs           = require('browser-sync').create();
var cp           = require('child_process');
var postcss      = require('gulp-postcss');
var cssnano      = require('cssnano');
var autoprefixer = require('autoprefixer');
var not          = require('postcss-selector-not');
var cssnext      = require('cssnext');
var size         = require('gulp-size');
var neat         = require('node-neat').includePaths;
var bourbon      = require('node-bourbon').includePaths;
var del          = require('del');

var paths = {
  sass: './assets/stylesheets/**/*.scss',
  js: './assets/javascripts/**/*.js',
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
    .pipe(gulp.dest(paths.dist + 'img/'))
    .pipe(gulp.dest('_site/dist/img/'))
    .pipe(bs.stream());
}

function styles() {
  var processors = [
    autoprefixer({browsers: ['last 2 version']}),
    not, 
    cssnext,
    cssnano
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
    .pipe(gulp.dest('_site/dist/stylesheets/'))
    .pipe(bs.stream());   
}

function scripts() {
  return gulp.src(paths.js)
    .pipe(uglify())
    .pipe(gulp.dest(paths.dist + 'javascripts/'))
    .pipe(gulp.dest('_site/dist/javascripts'));
}

function jk(done) {
  return cp.spawn('jekyll', ['build'], {stdio: 'inherit'}).on('close', done);
}

function refresh() {
  bs.reload();
}

function connect() {
  bs.init({
    server: {
      baseDir: '_site'
    }
  });
}

function clean(cb) {
  return del([paths.dist, '_site/dist/'], cb);
}

// All Tasks
gulp.task('images', images);
gulp.task('styles', styles);
gulp.task('clean', clean);
gulp.task('jekyll', jk);
gulp.task('re-jekyll', ['jekyll'], refresh);

gulp.task('watch', function(){
  gulp.watch(paths.sass, ['styles']);
  gulp.watch(paths.images, ['images']);
  gulp.watch(['*.html', './*.md', '_includes/*.html', '_layouts/*.html', '_posts/*'], ['re-jekyll']);
});

gulp.task('connect', ['styles', 'jekyll'], connect);

// Default Tasks
gulp.task('build', ['images', 'styles', 'jekyll']);
gulp.task('default', ['build', 'watch', 'connect']);
