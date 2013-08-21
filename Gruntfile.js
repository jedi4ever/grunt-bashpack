module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: {
      // define the files to lint

      web: {
        files: {
          //src: ['public/js/*.js']
        },
        options: {
          browser: true,
          devel: true,
          strict: true,
          jquery: true,
          unused: true,
          trailing: true,
          undef: true
        }
      },
      lib: {
        files: {
          src: ['lib/**/*.js']
        },
        options: {
          node: true,
          curly: true,
          quotmark: 'single',
          //unused: true,
          trailing: true,
          strict: true,
          undef: true
        }
      },
      test: {
        files: {
          src: ['test/**/*.js']
        },
        options: {
          node: true,
          curly: true,
          quotmark: 'single',
          undef: false,
          trailing: true,
          //strict: true
        }
      },
      gruntfile: {
        files: {
          src: ['Gruntfile.js']
        }
      },
    },
    // Configure a mochaTest task
    mochaTest: {
      test: {
        options: {
          reporter: 'list',
        },
        src: ['test/**/*.js']
      }
    },

    watch: {
      gruntfile: {
        files: 'Gruntfile.js' ,
        tasks: ['jshint:gruntfile']
      },
      lib: {
        files: ['lib/**/*.js','bin/*','test/**/*.js'],
        tasks: ['test']
      },
      web: {
        files: ['public/js/*.js'],
        tasks: ['test']
      },
      options: {
        nospawn: false
      }
    },
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-mocha-test');
  grunt.loadNpmTasks('grunt-release');

  grunt.registerTask('test', ['jshint','mochaTest']);

  // Default task(s).
  grunt.registerTask('default', ['jshint']);

};
