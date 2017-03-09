module.exports = function(grunt) {
	grunt.initConfig({
		htmlmin: {                                     // Task 
    		dist: {                                      // Target 
      			options: {                                 // Target options 
        			collapseWhitespace: true
      				},
     			files: {                                   // Dictionary of files 
        			'dist/project-2048.html':'src/project-2048.html',
        			'dist/project-mobile.html':'src/project-mobile.html',
        			'dist/project-webperf.html':'src/project-webperf.html',
        			'dist/index.html':'src/index.html',
        			'dist/views/pizza.html':'src/views/pizza.html'// 'destination': 'source'
      			}
   			}
   		},
  		uglify: {
    		my_target: {
      			files: {
        			'dist/views/js/main.min.js': ['src/views/js/main.js'],
        			'dist/js/perfmatters.min.js': ['src/js/perfmatters.js']
      			}
    		}
  		},
  		cssmin: {
  			my_target: {
    			files: [{
      				expand: true,
     				cwd: 'src/views/css',
      				src: ['*.css', '!*.min.css'],
      				dest: 'dist/views/css',
      				ext: '.min.css'
   				 }]
  			}
		},
  	imagemin: {                          // Task 
   			dynamic: {                         // Another target 
      			files: [{
        			expand: true,                  // Enable dynamic expansion 
        			cwd: 'src/views/images',                   // Src matches are relative to this path 
        			src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match 
        			dest: 'dist/views/images'                  // Destination path prefix 
      			}]
    		}
    },
    responsive_images: {
     dev: {
      options: {
        engine: 'im',
        sizes: [{
          width: 100
        }]
      },
        files: [{
        expand: true,
        src: ['pizzeria.jpg'],
        cwd: 'src/views/images',
        dest: 'dist/views/images'
      }]
    }
  },

});
 
	grunt.loadNpmTasks('grunt-contrib-imagemin');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
  grunt.loadNpmTasks('grunt-responsive-images');
  grunt.registerTask('default',['responsive_images']);
	
};

