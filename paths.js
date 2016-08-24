const paths = {
  css: {
    src: './_assets/stylesheets/main.css',
    all: './_assets/stylesheets/**/*.css',
    dest: './assets/dist/'
  },
  js: {
    src: './_assets/scripts/global.js',
    all: './_assets/scripts/**/*.js',
    dest: './assets/dist/'
  },
  icons: {
    src: './_assets/icons/*.svg',
    dest: './_includes/'
  },
  img: {
    src: './_assets/images/*',
    dest: './assets/dist/img/'
  },
  markup: ['./*.html', './*.md', './_includes/**/*', './_layouts/*.html', './_posts/*', './_drafts/*'],
  dist: './assets/dist/',
  build: './_site/'
}

export default paths
