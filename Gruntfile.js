'use strict';

module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);


  grunt.initConfig({

  /* LESS
    ================================================================= */
    less: {
      less2css: {
        options: {
          pathDevs: ['<%= pkg.pathDev %>less']
          ,yuicompress: false
          ,compress: false
          ,cleancss: false
          ,ieCompact: false
          ,strictMath: true
        },
        files: {
          '<%= pkg.pathProd %>css/front/screen.css': [
              '<%= pkg.pathDev %>vendors/normalize-css/normalize.css',
              '<%= pkg.pathDev %>less/screen.less'
          ]
        }
      }
    },


  /* AUTOPREFIXER
    ================================================================= */
    autoprefixer: {
      options: {
        browsers: ['last 2 version', 'safari 6', 'ie 9', 'opera 12.1', 'ios 6', 'android 4']
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
          '<%= pkg.pathProd %>js/front/vendors.min.js': [
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
          '<%= pkg.pathProd %>js/front/front.js': [
            // '<%= pkg.pathDev %>js/global-variables.js',
            // '<%= pkg.pathDev %>js/plugins.js',
            // '<%= pkg.pathDev %>js/functions/*.js',
            // '<%= pkg.pathDev %>js/front.js'
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
          '<%= pkg.pathProd %>js/front/front.min.js' : '<%= pkg.pathProd %>js/front/front.js'
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
        files: 'js/*.js',
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
