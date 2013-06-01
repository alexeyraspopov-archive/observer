module.exports = function(grunt){
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: ['dist'],
		jasmine: {
			dist: {
				src: 'dist/*.js',
				options: {
					outfile: 'specs.html',
					specs: 'spec/*-spec.js'
				}
			}
		},
		jshint: {
			all: ['dist/*.js', 'spec/*.js', 'gruntfile.js']
		},
		concat: {
			dist: {
				src: ['src/prefix.js', 'src/<%= pkg.name %>.js', 'src/factory.js'],
				dest: 'dist/<%= pkg.name %>.js'
			}
		},
		uglify: {
			dist: {
				files: {
					'dist/<%= pkg.name %>.min.js': ['dist/<%= pkg.name %>.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');

	grunt.registerTask('default', ['clean', 'concat', 'jasmine', 'jshint', 'uglify']);
};