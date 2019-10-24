var { parallel, task, watch } = require("gulp");
var shell = require("gulp-shell");
var browserSync = require("browser-sync").create();

function build() {
  return shell.task(["bundle exec jekyll serve"]);
}

function css() {
  return shell.task([
    "postcss _assets/stylesheets/index.css -o _includes/bundle.css"
  ]);
}

// If you don't use bundle:
// gulp.task('build', shell.task(['jekyll serve']));
// If you use  Windows Subsystem for Linux (thanks @SamuliAlajarvela):
// gulp.task('build', shell.task(['bundle exec jekyll serve --force_polling']));

// Task for serving blog with Browsersync
function serve() {
  browserSync.init({ server: { baseDir: "_site/" } });
  // Reloads page when some of the already built files changed:
  watch("_site/**/*.*").on("change", browserSync.reload);
  watch("_assets/stylesheets/index.css").on("change", css);
}

exports.serve = serve;
exports.build = build;
exports.css = css;
exports.default = parallel(serve, build, css);
