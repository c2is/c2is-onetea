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
      modernizr: {
        src: 'vendors/modernizr/modernizr.js',
        dest: 'js/min/modernizr.min.js'
      },
      vendors: {
        src: [
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
			'vendors/normalize-css/normalize.css'
            , 'less/screen.less'
//            , 'less/output.less'
//            , 'less/output2.less'
          ]
        }
      }
    },
    css_img_2_data_uri: {
      options: {
          files: [
              {
                  src: 'vendors/plugin/plugin.css', //fichier css du plugin appelant des images
                  dest: 'less/output.less'   //fichier de sortie qu'il faudra inclure
              },
              {
                  src: 'vendors/plugin2/plugin2.css', //fichier css du plugin appelant des images
                  dest: 'less/output2.less'   //fichier de sortie qu'il faudra inclure
              }
          ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-recess');
  grunt.loadNpmTasks('grunt-smushit');
  grunt.loadNpmTasks('grunt-css-img-2-data-uri');

  grunt.registerTask('default', ['recess','uglify']);
  grunt.registerTask('mincss', 'recess');
  grunt.registerTask('minjs', 'uglify');
  grunt.registerTask('minjs:vendors', 'uglify:vendors');
  grunt.registerTask('minjs:front', 'uglify:front');
  grunt.registerTask('minjscss', ['recess','uglify:front']);
  grunt.registerTask('plugins', 'css_img_2_data_uri');
};
