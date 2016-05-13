module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-jshint');
  // grunt.loadNpmTasks('grunt-contrib-watch');

  var pathToApp = 'app/';
  var appFiles = [
    'assets/js/main.js',
    'main/mainController.js',
    'main/mainService.js',
    'view1/view1.js',
    'components/directives/ssTableDirective/ssTableDirective.js',
    'components/version/version.js',
    'components/version/version-directive.js',
    'components/version/interpolate-filter.js'
  ];
  appFiles = appFiles.map(function(item){return pathToApp + item});  

  var pathToJSVendors = 'bower_components/';
  var vendorsJSFiles = [
    'angular/angular.js',
    'angular-route/angular-route.js',
    'jquery/dist/jquery.js',
    'bootstrap/dist/js/bootstrap.js',
    'html5-boilerplate/dist/js/vendor/modernizr-2.8.3.min.js'
  ];
  vendorsJSFiles = vendorsJSFiles.map(function(item){return pathToJSVendors + item});

  var pathToCssVendors = 'bower_components/';
  var vendorsCssFiles = [
    'html5-boilerplate/dist/css/normalize.css',
    'html5-boilerplate/dist/css/main.css',
    'bootstrap/dist/css/bootstrap.css'
  ];
  vendorsCssFiles = vendorsCssFiles.map(function(item){return pathToCssVendors + item});

  grunt.initConfig({
    uglify: {
      appDevelopment: {
        options: {
            mangle: false
        },
        files: {
            'app/app.js': appFiles
        }
      },
      appProduction: {
        options: {
            mangle: true
        },
        files: {
            'app/app.min.js': appFiles
        }
      },
      vendors: {
        options: {
          mangle: true
        },
        files: {
          'app/vendors.min.js': vendorsJSFiles
        }
      }
    },

    less: {
      development: {
        options: {
          paths: ['app/assets/css']
        },
        files: {
          "app/app.css": "app/assets/css/index.less"
        }
      },
      production: {
        options: {
          paths: ['app/assets/css'],
          compress: true
        },
        files: {
          "app/app.min.css": "app/assets/css/index.less"
        }
      }
    },

    cssmin: {
      vendors: {
        files: {
          'app/vendors.min.css': vendorsCssFiles
        }
      }
    },
  });

  grunt.registerTask('default', ['jshint']);

  grunt.registerTask('minify', ['uglify', 'less', 'cssmin']);

};