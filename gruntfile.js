module.exports = function(grunt){
	'use strict';
	grunt.initConfig({
		jasmine: {
			dist: {
				src: 'src/*.js',
				options: {
					outfile: 'specs.html',
					specs: 'spec/*-spec.js'
				}
			}
		},
		jshint: {
			all: ['src/*.js', 'spec/*.js', 'gruntfile.js']
		},
		uglify: {
			dist: {
				files: {
					'dist/observer.min.js': ['src/observer.js']
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['jasmine', 'jshint', 'uglify']);
};