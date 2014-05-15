module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            build: {
                src: ['js/lib/*.js', 'js/global.js'],
                //input
                dest: 'js/build/global.min.js' //output
            }
        },
        sass: { // Task
            dist: { // Target
                options: { // Target options
                    style: 'expanded'
                },
                files: { // Dictionary of files
                    'css/main.css': 'scss/main.scss',
                    // 'destination': 'source'
                }
            }
        },
        autoprefixer: {
            options: {
                browsers: ['last 2 version', 'ie 8', 'ie 9']
            },
            single_file: {
                src: 'css/main.css',
                dest: 'css/main.prefixed.css'
            },
        },
        cssmin: {
            minify: {
                src: 'css/main.prefixed.css',
                dest: 'css/main.min.css',
            }
        },
        imagemin: { // Task
            dynamic: { // Another target
                files: [{
                    expand: true,
                    // Enable dynamic expansion
                    cwd: 'img/',
                    // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],
                    // Actual patterns to match
                    dest: 'img/dist/' // Destination path prefix
                }]
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            scripts: {
                files: ['js/*.js'],
                tasks: ['uglify'],
                options: {
                    spawn: false,
                }
            },
            css: {
                files: ['scss/*.scss'],
                tasks: ['sass', 'autoprefixer', 'cssmin'],
                options: {
                    spawn: false,
                }
            },
        },
        notify: {
            autoprefixer: {
                options: {
                    title: 'Autoprefixer',
                    message: 'All prefixed, sir',
                }
            },
            watch: {
                options: {
                    title: 'Task Complete',
                    // optional
                    message: 'SASS and Uglify finished running',
                    //required
                }
            },
            uglify: {
                options: {
                    title: 'Uglified',
                    message: 'U G L Y, You Ain\'t Got No Alibi.',
                }
            },
            cssmin: {
                options: {
                    title: 'Minfied',
                    message: 'CSS is all skinny now.'
                }
            }
        }
    });
    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-autoprefixer');
    grunt.loadNpmTasks('grunt-notify');
    // Default task(s).
    grunt.registerTask('default', ['uglify', 'sass']);
    grunt.registerTask('dev', ['watch', 'notify:uglify', 'notify:autoprefixer', 'notify:cssmin', 'notify:watch']);
};
