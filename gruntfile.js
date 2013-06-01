module.exports = function(grunt){
	'use strict';
	grunt.initConfig({
		jshint: {},
		uglify: {}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-uglify');

	grunt.registerTask('default', ['jshint', 'uglify']);
};