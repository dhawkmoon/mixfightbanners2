module.exports = function(grunt) {
// 	require('time-grunt')(grunt);
    // 1. Вся настройка находится здесь
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
		cssmin: {
		  target: {
		    files: [{
		      expand: true,
		      cwd: 'assets/css',
		      src: ['*.css', '!*.min.css'],
		      dest: 'assets/css',
		      ext: '.min.css'
		    }]
		  }
		},
		uglify: {
			target: {
			    files: [{
			      expand: true,
			      cwd: 'assets/js',
			      src: ['*.js', '!*.min.js'],
			      dest: 'assets/js',
			      ext: '.min.js'
			    }]
			}
		},
		sass: {                              // Task
		    dist: {                            // Target
		      options: {                       // Target options
		        style: 'expanded'
		      },
		      files: {                         // Dictionary of files
		        'assets/css/core.css': 'assets/scss/core.scss'
		      }
		    }
		},
		postcss: {
		    options: {
		      map: true, // inline sourcemaps
		
		      processors: [
		        //require('pixrem')(), // add fallbacks for rem units
		        require('autoprefixer')({browsers: 'last 4 versions'}) // add vendor prefixes
		        //require('cssnano')() // minify the result
		      ]
		    },
		    dist: {
		      src: 'assets/css/*.css',
		    }
		},
        concat: { 
            css:{
	            src:[
		            'assets/css/*.min.css'
	            ],
	            dest: 'assets/compiled/template.css'
            },
            js:{
	            src:[
		            'assets/js/*.min.js'
	            ],
	            dest: 'assets/compiled/script.js'
            }
        },
        watch: {
	        css: {
		        files: ['assets/css/*.css', 'assets/js/*.js', 'assets/scss/*.scss'],
		        tasks: ['sass', 'postcss', 'cssmin', 'uglify', 'concat'],
		        options:{
			        spawn: false,
		        },
	        },
        },
        
      

    });

    // 3. Тут мы указываем Grunt, что хотим использовать этот плагин
    grunt.loadNpmTasks('grunt-postcss');
    grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	
    // 4. Указываем, какие задачи выполняются, когда мы вводим «grunt» в терминале
    grunt.registerTask('default', ['cssmin', 'uglify', 'concat']);

};