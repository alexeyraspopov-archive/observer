module.exports = function(grunt){
	'use strict';

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: ['<%= pkg.name %>.js', '<%= pkg.name %>.min.js', 'index.js'],
		jasmine: {
			dist: {
				src: ['<%= pkg.name %>.js'],
				options: {
					outfile: 'specs.html',
					specs: 'spec/*-spec.js'
				}
			}
		},
		jshint: {
			all: ['*.js', 'spec/*.js']
		},
		concat: {
			dist: {
				src: ['helpers/prefix.js', 'src/<%= pkg.name %>.js', 'helpers/factory.js'],
				dest: '<%= pkg.name %>.js'
			}
		},
		uglify: {
			options: {
				report: 'min'
			},
			dist: {
				src: '<%= pkg.name %>.js',
				dest: '<%= pkg.name %>.min.js'
			}
		},
		copy: {
			dist: {
				src: '<%= pkg.name %>.min.js',
				dest: 'index.js'
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.registerTask('test', ['clean', 'concat', 'jasmine']);
	grunt.registerTask('default', ['clean', 'concat', 'jasmine', 'jshint', 'uglify', 'copy']);
};