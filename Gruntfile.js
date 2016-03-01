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
                    'build/<%=pkg.name%>-<%=pkg.version%>.min.js':
                        [
                            "src/js/loading.js",
                            "src/js/expandingOverlay.js",
                            'src/js/navToggle.js',
                            'src/js/headerToggle.js',
                            'src/js/base.js'
                        ]
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
        },

        copy: {
            main:{
                files:[
                    {expand :true, src:["src/js/page/fontEnd.js"], dest: "build/data/",  flatten: true},
                    {expand :true, src:["src/js/index.js"], dest: "build/data/",  flatten: true}
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('default', ['uglify', 'cssmin', 'copy']);
};