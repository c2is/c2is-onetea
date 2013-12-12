/*!
 * c2is-onetea Gruntfile
 * http://github.com/c2is/c2is-onetea
 * @author C2iS - front-end team
 */
'use strict';

/**
 * Grunt module
 */
module.exports = function(grunt) {

    /**
     * Dynamically load npm tasks
     */
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

    /**
     * c2is-onetea Grunt config
     */
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        /**
         * Project banner
         * Dynamically appended to CSS/JS files
         * Inherits text from package.json
         */
        banner: '/*!\n' +
            ' * <%= pkg.name %>\n' +
            ' * <%= pkg.title %>\n' +
            ' * <%= pkg.url %>\n' +
            ' * @author <%= pkg.author %>\n' +
            ' * @version <%= pkg.version %>\n' +
            ' * Copyright <%= pkg.copyright %>\n' +
            ' */\n',
        usebanner: {
            dist: {
                options: {
                    position: 'top',
                    banner: '<%= banner %>'
                },
                files: {
                    src: [ 'web/js/min/front.min.js', 'web/css/screen.min.css' ]
                }
            }
        },

        /**
         * Uglify (minify) JavaScript files
         * https://github.com/gruntjs/grunt-contrib-uglify
         * Compresses and minifies all JavaScript files into one
         */
        uglify: {
            modernizr: {
                src: 'web/vendors/modernizr/modernizr.js',
                dest: 'web/js/min/modernizr.min.js'
            },
            /*vendors: { src: [
             'vendors/....js
             //,'vendors/....js
             ],
             dest: 'js/min/...
             },
             */
            front: {
                src: 'web/js/front.js',
                dest: 'web/js/min/front.min.js'
            }
        },

        /**
         * less
         * LESS/CSS minification
         * https://github.com/sindresorhus/grunt-contrib-less
         */
        less: {
            dev: {
                options: {
                    paths: ['web/css'],
                    yuicompress: false,
                    compress: false,
                    cleancss: false,
                    ieCompact: false
                },
                files: {
                    'web/css/screen.noprefix.css': [
                        'web/vendors/normalize-css/normalize.css'
                        ,'web/less/screen.less'
                    ]
                }
            },
            prod: {
                options: {
                    paths: ['web/css'],
                    yuicompress: true,
                    compress: true,
                    cleancss: true,
                    ieCompact: true
                },
                files: {
                    'web/css/screen.min.css': 'web/css/screen.prefix.css'
                }
            }
        },

        /**
         * Runs tasks against changed watched files
         * https://github.com/gruntweb/js/grunt-contrib-watch
         * Watching development files and run concat/compile tasks
         */
        watch: {
            less: {
                files: 'web/less/*.less',
                tasks: ['mincss'],
                options: {
                    atBegin: true
                }
            },
            js: {
                files: 'web/js/*.js',
                tasks: ['minjs'],
                options: {
                    atBegin: true
                }
            }
//          ,vendors: {
//              files: 'web/vendors/*/*.js',
//              tasks: ['minven'],
//              options: {
//                  atBegin: true
//              }
//          }
        },

        /**
         * Autoprefixer
         * Adds vendor prefixes if need automatcily
         * https://github.com/nDmitry/grunt-autoprefixer
         */
        autoprefixer: {
            options: {
                browsers: ['last 2 version', 'safari 6', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
            },
            css: {
                files: {
                    'web/css/screen.prefix.css': ['web/css/screen.noprefix.css']
                }
            }
        }

    });

    grunt.registerTask('default', ['mincss','minalljs']);
    grunt.registerTask('mincss', ['less:dev', 'autoprefixer', 'less:prod', 'usebanner']);
    grunt.registerTask('minalljs', 'uglify');
    grunt.registerTask('minjs', 'uglify:front');
    grunt.registerTask('minven', 'uglify:vendors');
};
