'use strict';

module.exports = function(grunt) {

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		project: {
			app: ['./'],
			assets: ['<%= project.app %>/wp-content/themes/bootstrap-sass/'],
			// assets: ['<%= project.app %>'],
			css: ['<%= project.assets %>/scss/screen.scss']
		},
		/**
		 * Project banner
		 */
		tag: {
		  banner: '/*!\n' +
		          ' * <%= pkg.name %>\n' +
		          ' * <%= pkg.title %>\n' +
		          ' * <%= pkg.url %>\n' +
		          ' * @author <%= pkg.author %>\n' +
		          ' * @version <%= pkg.version %>\n' +
		          ' * Copyright <%= pkg.copyright %>. <%= pkg.license %> licensed.\n' +
		          ' */\n'
		},

		sass: {
			dev: {
		    options: {
		      style: 'expanded',
		      // banner: '<%= tag.banner %>',
		      compass: true
		    },
		    files: {
		      '<%= project.assets %>/css/screen.css': '<%= project.css %>'
		    }
		  },
			dist: {
		    options: {
		      style: 'compressed',
		      compass: true
		    },
		    files: {
		      '<%= project.assets %>/css/screen.css': '<%= project.css %>'
		    }
		  }
		},
		watch: {
			sass: {
				files: '<%= project.assets %>/scss/{,*/}*.{scss,sass}',
				tasks: ['sass:dev']
			}
		}
	});

	/**
	 * Load Grunt plugins
	 */
	require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

	// grunt.loadNpmTasks('grunt-contrib-jshint');
	//grunt.loadNpmTasks('grunt-browser-sync');
	// grunt.loadNpmTasks('grunt-contrib-sass');
	// grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['watch']);
};
