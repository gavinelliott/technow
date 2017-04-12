module.exports = function(grunt) {

  require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    sass: {
      dist: {
        files: {
          'public/assets/css/main.css' : 'src/sass/main.scss'
        }
      }
    },
    cssmin: {
        minify: {
          expand: true,
          cwd: 'public/assets/css/',
          src: ['*.css', '!*.min.css'],
          dest: 'public/assets/css/',
          ext: '.min.css'
        }
    },
    watch: {
			css: {
				files: 'src/sass/**/*.scss',
				tasks: ['sass']
			}
		}
  });

  grunt.registerTask('default', ['watch']);
  grunt.registerTask('build', ['sass', 'cssmin']);

};
