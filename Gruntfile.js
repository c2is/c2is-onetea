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
        tag: {
            banner: '/*!\n' +
                ' * <%= pkg.name %>\n' +
                ' * <%= pkg.title %>\n' +
                ' * <%= pkg.url %>\n' +
                ' * @author <%= pkg.author %>\n' +
                ' * @version <%= pkg.version %>\n' +
                ' * <%= grunt.template.today("yyyymmdd") %>\n' +
                ' * Copyright <%= grunt.template.today("yyyy") %>\n' +
                ' */\n'
        },

        /**
         * Uglify (minify) JavaScript files
         * https://github.com/gruntjs/grunt-contrib-uglify
         * Compresses and minifies all JavaScript files into one
         */
        uglify: {
            options: {
                //mangle:false, // activer ces 2 lignes pour voir la version non minifiée
                //beautify:true,
                banner: '<%= tag.banner %>'
            },
            modernizr: {
                src: '<%= pkg.path %>vendors/modernizr/modernizr.js',
                dest: '<%= pkg.path %>js/min/modernizr.min.js'
            },
            /*vendors: { src: [
             'vendors/....js
             //,'vendors/....js
             ],
             dest: '<%= pkg.path %>js/min/...
             },
             */
            front: {
                src: '<%= pkg.path %>js/front.js',
                dest: '<%= pkg.path %>js/min/front.min.js'
            }
        },

        /**
         * recess
         * LESS/CSS minification
         * https://github.com/sindresorhus/grunt-recess
         */
        recess: {
            less2css: {
                options: {
                    compile: true
                },
                files: {
                    '<%= pkg.path %>css/screen.min.css': [
                        '<%= pkg.path %>vendors/normalize-css/normalize.css'
                        ,'<%= pkg.path %>less/screen.less'
                        //,'<%= pkg.path %>less/output.less'
                        //,'<%= pkg.path %>less/output2.less'
                    ],
                    '<%= pkg.path %>css/print.min.css': ['<%= pkg.path %>less/print.less']
                }
            },
            mincss: {
                options: {
                    banner: '<%= tag.banner %>',
                    compress: true
                },
                files: {
                    '<%= pkg.path %>css/screen.min.css': ['<%= pkg.path %>css/screen.min.css'],
                    '<%= pkg.path %>css/print.min.css': ['<%= pkg.path %>css/print.min.css']
                }
            }
        },

        /**
         * Runs tasks against changed watched files
         * https://github.com/gruntjs/grunt-contrib-watch
         * Watching development files and run concat/compile tasks
         */
        watch: {
            less: {
                files: '<%= pkg.path %>less/*.less',
                tasks: ['mincss']
            },
            js: {
                files: '<%= pkg.path %>js/*.js',
                tasks: ['minjs']
            }
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
                    '<%= pkg.path %>css/screen.min.css': ['<%= pkg.path %>css/screen.min.css'],
                    '<%= pkg.path %>css/print.min.css': ['<%= pkg.path %>css/print.min.css']
                }
            }
        }

    });

    grunt.registerTask('default', ['mincss','minalljs']);
    //grunt.registerTask('mincss', ['recess:less2css', 'autoprefixer', 'recess:mincss']); // activer à la mise en prod
    grunt.registerTask('mincss', ['recess:less2css', 'autoprefixer']);
    grunt.registerTask('minalljs', 'uglify');
    grunt.registerTask('minjs', 'uglify:front');
};
