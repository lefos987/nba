(function() {
    'use strict';

    var CONFIGS = new function() {

        /**
         * App name used for
         * dist. files
         */
        this.NAME = 'nba-server';

        /**
         * Source code configs
         * -------------------
         */

        /**
         * Source code
         */
        this.SRC = './src/';

        /**
         * App js files
         */
        this.APP = this.SRC + '**/!(*tests).js';

        /**
         * Angular App js tests
         */
        this.APPTESTS = this.SRC + '**/*.tests.js';

        /**
         * Main.js page - entry for the app
         */
        this.MAIN = this.SRC + 'server.js';

        this.DIST = './build/';

    };

    module.exports = {
        name: CONFIGS.NAME,
        dirs: {
            src:    {
                root:      CONFIGS.SRC,
                app:       CONFIGS.APP,
                main:      CONFIGS.MAIN,
                tests:     CONFIGS.APPTESTS
            },
            dist: {
                root:      CONFIGS.DIST
            }
        }
    };

}());