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
     * c2is-onetea Grunt config
     * 
     */
    var settingsGlobalFile = 'grunt.settings.global.json';
    var settingsGlobal = grunt.file.readJSON(settingsGlobalFile);
    var settingsLocalFile = 'grunt.settings.local.json';
    var s = '';
    if (!grunt.file.exists(settingsLocalFile)) {
        grunt.log.error('file "' + settingsLocalFile + '" not found\n"' + settingsLocalFile + '.dist" has been past into the same directory and rename in "' + settingsLocalFile + '"');
        grunt.file.copy(settingsLocalFile+'.dist',settingsLocalFile);
        s = grunt.file.readJSON(settingsLocalFile+'.dist');
    }else{
        s = grunt.file.readJSON(settingsLocalFile);
    }
    grunt.log.writeln('Current specified project is:',s.project);



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
                    src: [ '<%= pkg.path %>js/min/front.min.js', '<%= pkg.path %>css/screen.min.css' ]
                }
            }
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
                banner: '<%= banner %>'
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
         * less
         * LESS/CSS 
         * https://github.com/sindresorhus/grunt-contrib-less
         */
        less: {
            less2css: {
                options: {
                    paths: ['<%= pkg.path %>css'],
                    yuicompress: false,
                    compress: false,
                    cleancss: false,
                    ieCompact: false
                },
                files: {
                    '<%= pkg.path %>css/screen.css': [
                        '<%= pkg.path %>vendors/normalize-css/normalize.css'
                        ,'<%= pkg.path %>less/screen.less'
                    ]
                }
            }
        },


        /**
         * CSSMIN
         * LESS/CSS minification
         * 
         */
        cssmin: {
            all: {
                // Dynamic Cssmin Content
                src: path.css.all[s.project].dest,
                dest: path.css.all[s.project].min
                // Dynamic Cssmin Content Ended
            },
            print: {
                src: path.css.print.default.dest,
                dest: path.css.print.default.min
            }
        },

        /**
         * Runs tasks against changed watched files
         * https://github.com/gruntjs/grunt-contrib-watch
         * Watching development files and run concat/compile tasks
         */
        watch: {
            options: {
                //atBegin: true,
                //livereload: true
            },
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
                    '<%= pkg.path %>css/screen.css': ['<%= pkg.path %>css/screen.css']
                }
            }
        }

    });

    grunt.registerTask('default', ['mincss','minalljs']);
    //grunt.registerTask('mincss', ['less:less2css', 'autoprefixer', 'cssmin']);
    grunt.registerTask('minalljs', 'uglify');
    grunt.registerTask('minjs', 'uglify:front');
    grunt.registerTask('minven', 'uglify:vendors');


    grunt.registerTask('set', 'Set a global variable.', function(name, value) {


        var newSettings = grunt.file.readJSON(settingsLocalFile); //get file as json object

        if (settingsGlobal.projects.indexOf(value) !== -1) {
            newSettings.project = value; //edit the value of json object, you can also use newSettings.key if you know what you are updating
            grunt.log.writeln('Previous specified project was:',s.project);
            grunt.log.writeln('Specified project is now:',newSettings.project);
            grunt.file.write(settingsLocalFile, JSON.stringify(newSettings, null, 2)); //serialize it back to file
        }
        else{
            grunt.log.error('argument 1 (project) "' + value + '" is not set!\nSet variable in "' + settingsLocalFile + '" and paths in "Gruntfiles.js" if it\'s a new project.');
            grunt.log.writeln('Current specified project is:',s.project);
            return false;
        }


    });

    grunt.registerTask('mincss', 'Compiles and minifies files of specified project.', function() {
        var _tasks;

        grunt.log.writeln(this.name + ':' + s.project);

        switch(s.project) {
            case 'mobile':
                _tasks = ['less:less2css', 'autoprefixer', 'cssmin'];
                break;
            default:
                _tasks = ['less:less2css', 'autoprefixer', 'cssmin', 'bless'];
        }

        grunt.log.writeln('Specified project is',s.project);
        grunt.log.writeln('Specified tasks are',_tasks);

        try {
            grunt.task.run(_tasks);
        }
        catch (err) {
            grunt.log.warn(err);
        }

    });


};
