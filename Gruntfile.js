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
              ' * Copyright <%= pkg.copyright %>\n' +
              ' */\n'
    },

    /**
     * Uglify (minify) JavaScript files
     * https://github.com/gruntjs/grunt-contrib-uglify
     * Compresses and minifies all JavaScript files into one
     */
    uglify: {
      options: {
        banner: '<%= tag.banner %>'
      },
      modernizr: {
        src: 'vendors/modernizr/modernizr.js',
        dest: 'js/min/modernizr.min.js'
      },
      /*vendors: { src: [
          'vendors/....js
         //,'vendors/....js
        ],
        dest: 'js/min/...
      },
      */
	  front: {
		src: 'js/front.js',
		dest: 'js/min/front.min.js'
	  }
    },

    /**
     * recess
     * LESS/CSS minification
     * https://github.com/sindresorhus/grunt-recess
     */
    recess: {
      less: {
        options: {
	  compile: true
        },
        files: {
          'css/screen.css': [
	    'vendors/normalize-css/normalize.css'
            , 'less/screen.less'
            //, 'less/output.less'
            //, 'less/output2.less'
          ]
        }
      }, 
      min: {
      	options: {
      	  banner: '<%= tag.banner %>',
	  compress: true
      	},
        files: {
          'css/screen.css': ['css/screen.css']
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
        files: 'less/*.less',
        tasks: ['mincss']
      },
      js: {
        files: 'js/*.js',
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
          'css/screen.css': ['css/screen.css']
        }
      }
    }

  });

  grunt.registerTask('default', ['mincss','minalljs']);
  grunt.registerTask('mincss', ['recess:less', 'autoprefixer', 'recess:min']);
  grunt.registerTask('minalljs', 'uglify');
  grunt.registerTask('minjs', 'uglify:front');
};
