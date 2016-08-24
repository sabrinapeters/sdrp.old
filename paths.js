const paths = {
  css: {
    src: './_assets/stylesheets/main.css',
    all: './_assets/stylesheets/**/*.css',
    dest: './assets/'
  },
  js: {
    src: './_assets/scripts/global.js',
    all: './_assets/scripts/**/*.js',
    dest: './assets/'
  },
  icons: {
    src: './_assets/icons/*.svg',
    dest: './_includes/'
  },
  img: {
    src: './_assets/images/*',
    dest: './assets/images/'
  },
  markup: ['./*.html', './*.md', './_includes/**/*', './_layouts/*.html', './_posts/*', './_drafts/*'],
  dist: './assets/',
  build: './_site/'
}

export default paths
