/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

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
	
	smushit:{
	  path: {
		src:'images/common'
	  }
	},

    uglify: {
      vendors: {
        src: [
          'vendors/modernizr-latest/index.js',
          'vendors/jquery/jquery.js'
        ],
        dest: 'js/min/vendors.min.js'
      }, 
	  front: {
		src: [
			'js/front.js'
		],
		dest: 'js/min/front.min.js'
	  }
    },

    recess: {
      dist: {
        options: {
		  compile: true
        },
        files: {
          'css/screen.css': [
			'vendors/normalize-css/normalize.css',
            'less/screen.less'
          ]
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-smushit');

  grunt.registerTask('default', ['recess','uglify']);
  grunt.registerTask('mincss', 'recess');
  grunt.registerTask('minjs', 'uglify');
  grunt.registerTask('minjs:vendors', 'uglify:vendors');
  grunt.registerTask('minjs:front', 'uglify:front');
  grunt.registerTask('minjscss', ['recess','uglify:front']);
};
