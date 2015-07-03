'use strict';

module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


  grunt.initConfig({

  pkg: grunt.file.readJSON('package.json'),

  /* LESS
    ================================================================= */
    less: {
      less2css: {
        options: {
          pathDevs: ['<%= pkg.pathDev %>less'],
          yuicompress: false,
          compress: false,
          cleancss: false,
          ieCompact: false,
          strictMath: true,
          sourceMap: true,
          outputSourceFiles: true,
          sourceMapURL: 'screen.css.map',
          sourceMapFilename: 'css/screen.css.map'
        },
        files: {
          '<%= pkg.pathProd %>css/front/screen.css': [
              //'<%= pkg.pathDev %>vendors/normalize-css/normalize.css',
              '<%= pkg.pathDev %>less/screen.less'
          ]
        }
      }
    },


  /* AUTOPREFIXER
    ================================================================= */
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'Safari >= 6', 'Explorer >= 9', 'Opera >= 12', 'iOS >= 6', 'Android >= 4']
      },
      css: {
        files: {
          '<%= pkg.pathProd %>css/front/screen.css': '<%= pkg.pathProd %>css/front/screen.css'
        }
      }
    },


  /* CSSMIN
    ================================================================= */
    cssmin: {
      options: {
        sourceMap: true,
        advanced: false
      },
      screen: {
        files: {
            '<%= pkg.pathProd %>css/front/screen.min.css': '<%= pkg.pathProd %>css/front/screen.css'
        }
      }
    },


  /* UGLIFY
    ================================================================= */
    uglify: {

      // Minify vendors
      vendors: {
        options: {
          compress: {
            drop_console: true
          }
        },
        files: {
          '<%= pkg.pathProd %>js/vendors.min.js': [
            //'<%= pkg.pathDev %>vendors/colorbox/jquery.colorbox.js'
          ]
        }
      },

      // Copy front.js
      front: {
        options: {
          mangle: false,
          beautify: true
        },
        files: {
          '<%= pkg.pathProd %>js/front.js': [
            '<%= pkg.pathDev %>js/global-variables.js',
            '<%= pkg.pathDev %>js/plugins/*.js',
            '<%= pkg.pathDev %>js/functions/*.js',
            '<%= pkg.pathDev %>js/front.js'
          ]
        }
      },

      //Minify front.js
      frontmin: {
        options: {
          compress: {
            drop_console: true
          }
        },
        files: {
          '<%= pkg.pathProd %>js/front.min.js' : '<%= pkg.pathProd %>js/front.js'
        }
      }
    },


  /* JSHINT
    ================================================================= */
    jshint: {
      options: {
        trailing: true
      },
      target: {
        src : [
          'js/front.js'
        ]
      }
    },


  /* JSCS
    ================================================================= */
    jscs: {
      options: {
        config: '.jscs.json',
      },
      main: [
        'js/*.js',
      ]
    },


  /* WATCH
    ================================================================= */
    watch: {
      options: {
        atBegin: true
        //, livereload: true
      },
      js: {
        files: ['js/*.js', 'js/functions/*.js', 'js/plugins/*.js'],
        tasks: ['default']
      },
      less: {
        files: 'less/**/*.less',
        tasks: ['mincss']
      }
    }

  });


  /* GRUNT TASKS
    ================================================================= */
    grunt.registerTask('default', ['mincss', 'minjs']);
    grunt.registerTask('mincss', ['less:less2css', 'autoprefixer', 'cssmin']);
    grunt.registerTask('minjs', ['jshint', 'jscs', 'uglify:front', 'uglify:frontmin']);
    grunt.registerTask('minvendors', ['uglify:vendors']);

};
