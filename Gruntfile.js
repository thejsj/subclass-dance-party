module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    // CSS & Sass
    sass: {
      dist: {
        options: {
          outputStyle: 'expanded'
        },
        files: {
          'style.css': 'style.scss'
        }
      }
    },
    watch: {
      // grunt: {
      //   files: ['Gruntfile.js']
      // },
      sass: {
        files: 'style.scss',
        tasks: ['sass']
      },
      options: {
        livereload: true,
      },
    }
  });

  grunt.loadNpmTasks('grunt-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');

  // Tasks
  grunt.registerTask('default', ['build']);
  grunt.registerTask('build', ['sass']);
};