(function() {
    'use strict';

    var CONFIGS = new function() {

        /**
         * App name used for
         * dist. files
         */
        this.NAME = 'nba';

        /**
         * Source code configs
         * -------------------
         */

        /**
         * Source code
         */
        this.SRC = './src/';

        /**
         * Angular App js files
         */
        this.APP = this.SRC + 'app/**/!(*tests).js';

        /**
         * Angular App template files
         */
        this.APPTEMPLATES = this.SRC + 'app/**/*.tpl.html';
        
        /**
         * Angular App js tests
         */
        this.APPTESTS = this.SRC + 'app/**/*.tests.js';

        /**
         * Index.html page
         */
        this.INDEX = this.SRC + 'index.html';

        /**
         * Main.js page - entry for the app
         */
        this.MAIN = this.SRC + 'app/nba.js';

        /**
         * Root stylus (CSS) file
         * for the app.
         */
        this.STYL = this.SRC + 'app/nba.styl';

        /**
         * Distributable configs
         * ---------------------
         */

        /**
         * Distributable root folder
         * (build artifacts)
         */
        this.DIST = './dist/';

        /**
         * Distributable index.html file
         */
        this.DISTINDEX = this.DIST + 'index.html';

        /**
         * Distributable js file
         */
        this.DISTJS = this.DIST + this.NAME + '.js';

        /**
         *
         */
        this.DISTMINJS = this.DIST + this.NAME + '.min.js';

        /**
         * Distributable css file
         */
        this.DISTCSS = this.DIST + this.NAME + '.css';


        this.DISTMINCSS = this.DIST + this.NAME + '.min.css';

        /**
         * Angular App template files
         */
        this.DISTTEMPLATES = this.DIST + this.NAME +  '.tpls.js';

        /**
         * Angular App template files
         */
        this.DISTMINTEMPLATES = this.DIST + this.NAME +  '.tpls.min.js';

        /**
         * Misc configs
         * ---------------------
         */

        /**
         * Angular Tests Coverage Report
         */
        this.COVERAGE = 'js-test-reporting';

        this.KARMACONF = 'config/karma.conf.js';

        this.BOWER_COMPONENTS = './bower_components/';

    };

    module.exports = {
        name: CONFIGS.NAME,
        bower: {
            angular: CONFIGS.BOWER_COMPONENTS + 'angular/angular.js'
        },
        dirs: {
            src:    {
                root:      CONFIGS.SRC,
                app:       CONFIGS.APP,
                index:     CONFIGS.INDEX,
                main:      CONFIGS.MAIN,
                styl:      CONFIGS.STYL,
                tests:     CONFIGS.APPTESTS,
                templates: CONFIGS.APPTEMPLATES
            },
            dist:   {
                root:         CONFIGS.DIST,
                index:        CONFIGS.DISTINDEX,
                js:           CONFIGS.DISTJS,
                minjs:        CONFIGS.DISTMINJS,
                css:          CONFIGS.DISTCSS,
                mincss:       CONFIGS.DISTMINCSS,
                templates:    CONFIGS.DISTTEMPLATES,
                minTemplates: CONFIGS.DISTMINTEMPLATES
            },
            karmaConf:  CONFIGS.KARMACONF,
            coverage: {
                root:   CONFIGS.COVERAGE
            }
        }
    };

}());