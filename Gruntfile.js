/**
 * @author Erol Soyöz <erol@soyoz.com>
 */
module.exports = function(grunt) {
    grunt.initConfig({
        /**
         * Validate JS files
         */
        jshint: {
            all: ['Gruntfile.js']
        },

        /**
         * Copy vendor files
         */
        copy: {
          main: {
            files: [
              {
                  expand: true, cwd: 'web/assets/vendor/bootstrap/dist/css/', src: ['bootstrap.css'], dest: 'web/assets/css/', filter: 'isFile'
              },
              {
                  expand: true, cwd: 'web/assets/vendor/bootstrap/dist/js/', src: ['bootstrap.js'], dest: 'web/assets/js/', filter: 'isFile'
              },
              {
                  expand: true, cwd: 'web/assets/vendor/jquery/dist/', src: ['jquery.js'], dest: 'web/assets/js/', filter: 'isFile'
              },
            ],
          },
        },

        /**
         * Merge JS and CSS files
         */
        concat: {
            scripts: {
                src: ['web/assets/js/bootstrap.js', 'web/assets/js/jquery.js'],
                dest: 'web/assets/dist/js/scripts.js'
            },
            styles: {
                src: ['web/assets/css/bootstrap.css', 'web/assets/css/blog.css'],
                dest: 'web/assets/dist/css/styles.css'
            },
        },

        /**
         * Minify JS files
         */
        uglify: {
            dist: {
                files: {
                    'web/assets/dist/js/scripts.min.js': ['web/assets/dist/js/scripts.js'],
                }
            }
        },

        /**
         * Minify CSS files
         */
        cssmin: {
            dist: {
                files: [{
                    expand: true,
                    cwd: 'web/assets/dist/css/',
                    src: ['styles.css'],
                    dest: 'web/assets/dist/css',
                    ext: '.min.css'
                }]
            }
        }
    });

    /**
     * Load tasks
     */
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    /**
     * Register tasks
     */
    grunt.registerTask('default', ['jshint', 'concat', 'uglify', 'cssmin']);
    grunt.registerTask('copy-vendor-files', 'copy');
};
