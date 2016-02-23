/**
 * Created by catzaizai on 2016/2/21.
 */
module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        uglify: {
            options: {
                stripBanners: true,
                banner: '/*! <%=pkg.name%>-<%=pkg.version%>.js <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            my_target: {
                files:{
                    'build/<%=pkg.name%>-<%=pkg.version%>.min.js':['src/js/navToggle.js', 'src/js/headerToggle.js', 'src/js/base.js']
                }
            }
        },

        cssmin: {
            options: {
                shorthandCompaction: false,
                roundingPrecision: -1
            },
            target: {
                files: {
                    'build/main.min.css': ['src/css/base.css'],
                    'build/index.min.css': ['src/css/index.css'],
                    'build/font-end.min.css': ['src/css/fontEnd.css']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');

    grunt.registerTask('default', ['uglify', 'cssmin']);
};