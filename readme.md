
Bootstrap 3 minimal template with SASS/SCSS integration
====================

Based on theme of Okvee
-----------------------
https://wordpress.org/themes/bootstrap-basic/

=====

This theme is used a minimal starter theme for Wordpress development.  Bootstrap files are broken out in into SCSS components and compiled using Grunt/compass.

Required dependencies:
Grunt, compass, NPM package manager

Within the theme see this folder
/scss

Bootstrap is located in there.  The main fils that collects all components is screen.scss . Upon running the taskrunner (Grunt) The screen.scss is compiled out to screen.css.

Screen.css

Within the functions.php file: see function bootstrapBasicEnqueueScripts()

I have made screen.css the main files that Wordpress uses for CSS.  

Font awesome commented out
