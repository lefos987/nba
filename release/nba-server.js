/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _hapi = __webpack_require__(1);
	
	var _hapi2 = _interopRequireDefault(_hapi);
	
	var _good = __webpack_require__(2);
	
	var _good2 = _interopRequireDefault(_good);
	
	var _goodConsole = __webpack_require__(3);
	
	var _goodConsole2 = _interopRequireDefault(_goodConsole);
	
	var _indexIndexRoute = __webpack_require__(4);
	
	var _indexIndexRoute2 = _interopRequireDefault(_indexIndexRoute);
	
	var _systemEventsEventsGetRoute = __webpack_require__(6);
	
	var _systemEventsEventsGetRoute2 = _interopRequireDefault(_systemEventsEventsGetRoute);
	
	var _systemEventsEventsPostRoute = __webpack_require__(17);
	
	var _systemEventsEventsPostRoute2 = _interopRequireDefault(_systemEventsEventsPostRoute);
	
	var _systemBoxscoreBoxscoreGetRoute = __webpack_require__(20);
	
	var _systemBoxscoreBoxscoreGetRoute2 = _interopRequireDefault(_systemBoxscoreBoxscoreGetRoute);
	
	var _systemBoxscoreBoxscorePostRoute = __webpack_require__(21);
	
	var _systemBoxscoreBoxscorePostRoute2 = _interopRequireDefault(_systemBoxscoreBoxscorePostRoute);
	
	var _scheduleScheduleGetRoute = __webpack_require__(24);
	
	var _scheduleScheduleGetRoute2 = _interopRequireDefault(_scheduleScheduleGetRoute);
	
	var _systemSystemSvc = __webpack_require__(9);
	
	var _systemSystemSvc2 = _interopRequireDefault(_systemSystemSvc);
	
	var server = new _hapi2['default'].Server();
	
	server.connection({
	    host: 'localhost',
	    port: 3000,
	    routes: {
	        cors: true
	    }
	});
	
	server.route(new _indexIndexRoute2['default']());
	server.route(new _systemEventsEventsGetRoute2['default']());
	server.route(new _systemEventsEventsPostRoute2['default']());
	server.route(new _systemBoxscoreBoxscoreGetRoute2['default']());
	server.route(new _systemBoxscoreBoxscorePostRoute2['default']());
	
	server.route(new _scheduleScheduleGetRoute2['default']());
	
	server.register({
	    register: _good2['default'],
	    options: {
	        reporters: [{
	            reporter: _goodConsole2['default'],
	            events: {
	                response: '*',
	                log: '*'
	            }
	        }]
	    }
	}, function (err) {
	    if (err) {
	        throw err;
	    }
	});
	
	_systemSystemSvc2['default'].scheduleUpdateTasks();
	
	server.start(function () {
	    console.log('* Server running at :', server.info.uri);
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("hapi");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("good");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("good-console");

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _coreModelsRoute = __webpack_require__(5);
	
	var _coreModelsRoute2 = _interopRequireDefault(_coreModelsRoute);
	
	var IndexRoute = (function (_Route) {
	    _inherits(IndexRoute, _Route);
	
	    function IndexRoute() {
	        var method = arguments.length <= 0 || arguments[0] === undefined ? 'GET' : arguments[0];
	        var path = arguments.length <= 1 || arguments[1] === undefined ? '/{param*}' : arguments[1];
	
	        _classCallCheck(this, IndexRoute);
	
	        _get(Object.getPrototypeOf(IndexRoute.prototype), 'constructor', this).call(this, { method: method, path: path });
	
	        this.handler = {
	            directory: {
	                path: 'public',
	                index: true,
	                listing: true
	            }
	        };
	    }
	
	    return IndexRoute;
	})(_coreModelsRoute2['default']);
	
	exports['default'] = IndexRoute;
	module.exports = exports['default'];

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var Route = (function () {
	    function Route(params) {
	        _classCallCheck(this, Route);
	
	        params = params || {};
	        this.method = params.method;
	        this.path = params.path;
	    }
	
	    _createClass(Route, [{
	        key: 'handler',
	        value: function handler(request, reply) {
	            reply('Hello!');
	        }
	    }]);
	
	    return Route;
	})();
	
	exports['default'] = Route;
	module.exports = exports['default'];

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _boom = __webpack_require__(7);
	
	var _boom2 = _interopRequireDefault(_boom);
	
	var _coreModelsRoute = __webpack_require__(5);
	
	var _coreModelsRoute2 = _interopRequireDefault(_coreModelsRoute);
	
	var _constantsConstants = __webpack_require__(8);
	
	var _systemSvc = __webpack_require__(9);
	
	var _systemSvc2 = _interopRequireDefault(_systemSvc);
	
	var EventsGetRoute = (function (_Route) {
	    _inherits(EventsGetRoute, _Route);
	
	    function EventsGetRoute() {
	        var method = arguments.length <= 0 || arguments[0] === undefined ? 'GET' : arguments[0];
	        var path = arguments.length <= 1 || arguments[1] === undefined ? _constantsConstants.INTERNAL_API.system.events : arguments[1];
	
	        _classCallCheck(this, EventsGetRoute);
	
	        _get(Object.getPrototypeOf(EventsGetRoute.prototype), 'constructor', this).call(this, { method: method, path: path });
	    }
	
	    _createClass(EventsGetRoute, [{
	        key: 'handler',
	        value: function handler(request, reply) {
	
	            _systemSvc2['default'].createSystemLogEntriesReply('events', reply);
	        }
	    }]);
	
	    return EventsGetRoute;
	})(_coreModelsRoute2['default']);
	
	exports['default'] = EventsGetRoute;
	module.exports = exports['default'];

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("boom");

/***/ },
/* 8 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	var XML_STATS_API_KEY = 'b82ed8df-bb50-476f-a354-2b4418202b76';
	var XML_STATS_USER_AGENT = 'elparask@gmail.com';
	
	var XML_STATS_API = {
	    api_key: XML_STATS_API_KEY,
	    user_agent: XML_STATS_USER_AGENT,
	    host: 'erikberg.com',
	    headers: {
	        'Authorization': 'Bearer ' + XML_STATS_API_KEY,
	        'User-Agent': XML_STATS_USER_AGENT
	    },
	    endpoints: {
	        events: '/events.json',
	        boxscore: '/'
	    }
	};
	
	exports.XML_STATS_API = XML_STATS_API;
	var INTERNAL_API = {
	    host: 'http://localhost:3000',
	    system: {
	        events: '/api/v1/system/events',
	        boxscores: '/api/v1/system/boxscores'
	    },
	    schedule: '/api/v1/schedule'
	};
	
	exports.INTERNAL_API = INTERNAL_API;
	// NBA TEAM LOGOS FROM http://www.sportslogos.net/teams/list_by_league/6/National_Basketball_Association/NBA/logos/
	
	var TEAM_LOGOS = {
	    'atlanta-hawks': 'http://content.sportslogos.net/logos/6/220/full/9168_atlanta_hawks-primary-2016.png',
	    'boston-celtics': 'http://content.sportslogos.net/logos/6/213/full/slhg02hbef3j1ov4lsnwyol5o.png',
	    'brooklyn-nets': 'http://content.sportslogos.net/logos/6/3786/full/137_brooklyn-nets-primary-2013.png',
	    'charlotte-hornets': 'http://content.sportslogos.net/logos/6/5120/full/1926_charlotte__hornets_-primary-2015.png',
	    'chicago-bulls': 'http://content.sportslogos.net/logos/6/221/full/hj3gmh82w9hffmeh3fjm5h874.png',
	    'cleveland-cavaliers': 'http://content.sportslogos.net/logos/6/222/full/e4701g88mmn7ehz2baynbs6e0.png',
	    'dallas-mavericks': 'http://content.sportslogos.net/logos/6/228/full/ifk08eam05rwxr3yhol3whdcm.png',
	    'denver-nuggets': 'http://content.sportslogos.net/logos/6/229/full/xeti0fjbyzmcffue57vz5o1gl.gif',
	    'detroit-pistons': 'http://content.sportslogos.net/logos/6/223/full/3079.gif',
	    'golden-state-warriors': 'http://content.sportslogos.net/logos/6/235/full/qhhir6fj8zp30f33s7sfb4yw0.png',
	    'houston-rockets': 'http://content.sportslogos.net/logos/6/230/full/8xe4813lzybfhfl14axgzzqeq.gif',
	    'indiana-pacers': 'http://content.sportslogos.net/logos/6/224/full/3083.gif',
	    'los-angeles-clippers': 'http://content.sportslogos.net/logos/6/236/full/5462_los_angeles_clippers-primary-2016.png',
	    'los-angeles-lakers': 'http://content.sportslogos.net/logos/6/237/full/uig7aiht8jnpl1szbi57zzlsh.gif',
	    'memphis-grizzlies': 'http://content.sportslogos.net/logos/6/231/full/793.gif',
	    'miami-heat': 'http://content.sportslogos.net/logos/6/214/full/burm5gh2wvjti3xhei5h16k8e.gif',
	    'milwaukee-bucks': 'http://content.sportslogos.net/logos/6/225/full/8275_milwaukee_bucks-primary-2016.png',
	    'minnesota-timberwolves': 'http://content.sportslogos.net/logos/6/232/full/zq8qkfni1g087f4245egc32po.gif',
	    'new-orleans-pelicans': 'http://content.sportslogos.net/logos/6/4962/full/2681_new_orleans_pelicans-primary-2014.png',
	    'new-york-knicks': 'http://content.sportslogos.net/logos/6/216/full/2nn48xofg0hms8k326cqdmuis.gif',
	    'oklahoma-city-thunder': 'http://content.sportslogos.net/logos/6/2687/full/khmovcnezy06c3nm05ccn0oj2.gif',
	    'orlando-magic': 'http://content.sportslogos.net/logos/6/217/full/wd9ic7qafgfb0yxs7tem7n5g4.gif',
	    'philadelphia-76ers': 'http://content.sportslogos.net/logos/6/218/full/7034_philadelphia_76ers-primary-2016.png',
	    'phoenix-suns': 'http://content.sportslogos.net/logos/6/238/full/4370_phoenix_suns-primary-2014.png',
	    'portland-trail-blazers': 'http://content.sportslogos.net/logos/6/239/full/bahmh46cyy6eod2jez4g21buk.gif',
	    'sacramento-kings': 'http://content.sportslogos.net/logos/6/240/full/832.png',
	    'san-antonio-spurs': 'http://content.sportslogos.net/logos/6/233/full/827.gif',
	    'toronto-raptors': 'http://content.sportslogos.net/logos/6/227/full/4578_toronto_raptors-primary-2016.png',
	    'utah-jazz': 'http://content.sportslogos.net/logos/6/234/full/m2leygieeoy40t46n1qqv0550.gif',
	    'washington-wizards': 'http://content.sportslogos.net/logos/6/219/full/5671_washington_wizards-primary-2016.png'
	};
	exports.TEAM_LOGOS = TEAM_LOGOS;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _boom = __webpack_require__(7);
	
	var _boom2 = _interopRequireDefault(_boom);
	
	var _moment = __webpack_require__(10);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _superagent = __webpack_require__(11);
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	var _cron = __webpack_require__(12);
	
	var _constantsConstants = __webpack_require__(8);
	
	var _coreServicesDbSvc = __webpack_require__(13);
	
	var _coreServicesDbSvc2 = _interopRequireDefault(_coreServicesDbSvc);
	
	var SystemService = (function (_DbService) {
	    _inherits(SystemService, _DbService);
	
	    function SystemService() {
	        _classCallCheck(this, SystemService);
	
	        _get(Object.getPrototypeOf(SystemService.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(SystemService, [{
	        key: 'key',
	        value: function key(type) {
	            return 'system_' + type;
	        }
	    }, {
	        key: 'createLogEntry',
	        value: function createLogEntry(params) {
	            var type = params.type;
	            var operation = params.operation;
	            var data = params.data;
	
	            return {
	                date: _moment2['default'].utc().format(),
	                type: type,
	                operation: operation,
	                data: data
	            };
	        }
	    }, {
	        key: 'createSystemLogEntriesReply',
	        value: function createSystemLogEntriesReply(type, replyFn) {
	
	            this._getSystemLogEntriesOfType(type).then(function (entries) {
	
	                var response = {
	                    log: {
	                        type: type,
	                        entries: entries
	                    }
	                };
	                replyFn(response);
	            })['catch'](function (err) {
	                var error = _boom2['default'].create(500, err, { type: type });
	                error.reformat();
	                error.output.payload.type = type;
	                error.output.payload.date = new Date();
	                replyFn(error);
	            });
	        }
	    }, {
	        key: '_getSystemLogEntriesOfType',
	        value: function _getSystemLogEntriesOfType(type) {
	
	            var list = this.key(type);
	
	            return this.getFromListOfDb(list).then(function (listItems) {
	
	                return listItems.map(function (item) {
	                    return {
	                        date: item.date,
	                        data: {
	                            type: item.type,
	                            operation: item.operation,
	                            item: Object.keys(item.data.result)[0],
	                            status: item.data.result[Object.keys(item.data.result)],
	                            date: item.data.date
	                        }
	                    };
	                });
	            });
	        }
	    }, {
	        key: 'scheduleUpdateTasks',
	        value: function scheduleUpdateTasks() {
	
	            var job = new _cron.CronJob('00 00-59 12-13 * * *', function () {
	
	                _superagent2['default'].post(_constantsConstants.INTERNAL_API.host + _constantsConstants.INTERNAL_API.system.events).end(function (err, events) {
	
	                    if (events) {
	
	                        _superagent2['default'].post(_constantsConstants.INTERNAL_API.host + _constantsConstants.INTERNAL_API.system.boxscores).end(function (err, boxscores) {
	
	                            if (boxscores) {
	                                job.stop();
	                            }
	                        });
	                    }
	                });
	            }, function () {
	                console.log('* job done! *');
	            });
	            job.start();
	        }
	    }]);
	
	    return SystemService;
	})(_coreServicesDbSvc2['default']);
	
	var _SystemService = new SystemService();
	exports['default'] = _SystemService;
	module.exports = exports['default'];

/***/ },
/* 10 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 11 */
/***/ function(module, exports) {

	module.exports = require("superagent");

/***/ },
/* 12 */
/***/ function(module, exports) {

	module.exports = require("cron");

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _redis = __webpack_require__(14);
	
	var _redis2 = _interopRequireDefault(_redis);
	
	var _q = __webpack_require__(15);
	
	var _q2 = _interopRequireDefault(_q);
	
	var _utilsSvc = __webpack_require__(16);
	
	var DbService = (function () {
	    function DbService(params) {
	        _classCallCheck(this, DbService);
	
	        params = params || {};
	        this.client = params.client || _redis2['default'].createClient();
	    }
	
	    /**
	     * Get value of single key from Redis
	     * @param key
	     * @returns {Function|promise}
	     */
	
	    _createClass(DbService, [{
	        key: 'getFromDb',
	        value: function getFromDb(key) {
	
	            var deferred = _q2['default'].defer();
	
	            this.client.get(key, function (err, data) {
	                if (err) {
	                    deferred.reject(err);
	                }
	                if (!err && !data || !err && data.length === 0) {
	                    deferred.resolve([]);
	                } else {
	                    deferred.resolve(JSON.parse(data));
	                }
	            });
	
	            return deferred.promise;
	        }
	
	        /**
	         * Save single value to a key in redis
	         * @param key
	         * @param data
	         * @returns {Function|promise}
	         */
	    }, {
	        key: 'saveToDb',
	        value: function saveToDb(key, data) {
	
	            var deferred = _q2['default'].defer();
	
	            data = JSON.stringify(data);
	
	            this.client.set(key, data, function (err, result) {
	                if (err) {
	                    deferred.reject(err);
	                } else {
	                    deferred.resolve(_defineProperty({}, key, result));
	                }
	            });
	
	            return deferred.promise;
	        }
	
	        /**
	         * Get the length of a Redis list
	         * @param list
	         * @returns {Function|promise}
	         */
	    }, {
	        key: 'getListLength',
	        value: function getListLength(list) {
	            var deferred = _q2['default'].defer();
	
	            this.client.llen(list, function (err, result) {
	                if (err) {
	                    deferred.reject(err);
	                } else {
	                    deferred.resolve(result);
	                }
	            });
	
	            return deferred.promise;
	        }
	
	        /**
	         * Get all items of a Redis list in a specific index range
	         * @param list
	         * @param start
	         * @param end
	         * @returns {*}
	         */
	    }, {
	        key: 'getFromListOfDb',
	        value: function getFromListOfDb(list) {
	            var _this = this;
	
	            var start = arguments.length <= 1 || arguments[1] === undefined ? 0 : arguments[1];
	            var end = arguments.length <= 2 || arguments[2] === undefined ? null : arguments[2];
	
	            return this.getListLength(list).then(function (length) {
	
	                var deferred = _q2['default'].defer();
	
	                end = end || length;
	
	                _this.client.lrange(list, start, end, function (err, data) {
	                    if (err) {
	                        deferred.reject(err);
	                    }
	                    if (!err && !data || !err && data.length === 0) {
	                        deferred.resolve([]);
	                    } else {
	                        var result = data.map(function (d) {
	                            return JSON.parse(d);
	                        });
	                        deferred.resolve(result);
	                    }
	                });
	
	                return deferred.promise;
	            });
	        }
	
	        /**
	         * Push an item to the left of a Redis list
	         * @param list
	         * @param item
	         * @returns {Function|promise}
	         */
	    }, {
	        key: 'saveToListOfDb',
	        value: function saveToListOfDb(list, item) {
	            var deferred = _q2['default'].defer();
	
	            item = JSON.stringify(item);
	
	            this.client.lpush(list, item, function (err, result) {
	                if (err) {
	                    deferred.reject(err);
	                } else {
	                    deferred.resolve(_defineProperty({}, list, result));
	                }
	            });
	
	            return deferred.promise;
	        }
	    }]);
	
	    return DbService;
	})();
	
	exports['default'] = DbService;
	module.exports = exports['default'];

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = require("redis");

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = require("q");

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	var _moment = __webpack_require__(10);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _q = __webpack_require__(15);
	
	var _q2 = _interopRequireDefault(_q);
	
	var formatDate = function formatDate(date) {
	    return (0, _moment2['default'])(date).format('YYYYMMDD');
	};
	
	exports.formatDate = formatDate;
	var delay = function delay(asyncFn, timerIndex, _delay, errCb, successCb) {
	    var deferred = _q2['default'].defer();
	
	    setTimeout(function () {
	        deferred.resolve(asyncFn(errCb, successCb));
	    }, timerIndex * _delay);
	
	    return deferred.promise;
	};
	
	exports.delay = delay;
	var transformToArray = function transformToArray(obj) {
	    if (!Array.isArray(obj)) {
	        return [obj];
	    }
	    return obj;
	};
	exports.transformToArray = transformToArray;

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _boom = __webpack_require__(7);
	
	var _boom2 = _interopRequireDefault(_boom);
	
	var _q = __webpack_require__(15);
	
	var _q2 = _interopRequireDefault(_q);
	
	var _coreModelsRoute = __webpack_require__(5);
	
	var _coreModelsRoute2 = _interopRequireDefault(_coreModelsRoute);
	
	var _constantsConstants = __webpack_require__(8);
	
	var _coreServicesUtilsSvc = __webpack_require__(16);
	
	var _systemSvc = __webpack_require__(9);
	
	var _systemSvc2 = _interopRequireDefault(_systemSvc);
	
	var _eventsSvc = __webpack_require__(18);
	
	var _eventsSvc2 = _interopRequireDefault(_eventsSvc);
	
	var EventsPostRoute = (function (_Route) {
	    _inherits(EventsPostRoute, _Route);
	
	    function EventsPostRoute() {
	        var method = arguments.length <= 0 || arguments[0] === undefined ? 'POST' : arguments[0];
	        var path = arguments.length <= 1 || arguments[1] === undefined ? _constantsConstants.INTERNAL_API.system.events : arguments[1];
	
	        _classCallCheck(this, EventsPostRoute);
	
	        _get(Object.getPrototypeOf(EventsPostRoute.prototype), 'constructor', this).call(this, { method: method, path: path });
	    }
	
	    _createClass(EventsPostRoute, [{
	        key: 'handler',
	        value: function handler(request, reply) {
	
	            var date = request.payload.body.date;
	
	            //1. We make a call to XML_Stats API to get the events for a specific date
	            _eventsSvc2['default'].getEventsFromApi(date)
	
	            //2. If all events that come back have been completed we try to save them to the DB and return a promise
	            //   If not we return an appropriate response
	            .then(function (response) {
	                return _eventsSvc2['default'].areAllEventsCompleted(response.data.event) ? _eventsSvc2['default'].saveToDb(_eventsSvc2['default'].key(date), response.data) : _q2['default'].fcall(function () {
	                    return _defineProperty({}, _eventsSvc2['default'].key(date), 'Events are not yet completed');
	                });
	            })
	
	            //3. We try to save a system log entry of the result of the db insert of step 2 to a redis list and return
	            // a promise
	            .then(function (saveEventsResults) {
	                return (0, _coreServicesUtilsSvc.transformToArray)(saveEventsResults).map(function (saveEventsResult) {
	                    var params = {
	                        data: {
	                            result: saveEventsResult,
	                            date: date
	                        },
	                        type: 'events',
	                        operation: 'insert'
	                    };
	                    return _systemSvc2['default'].saveToListOfDb(_systemSvc2['default'].key('events'), _systemSvc2['default'].createLogEntry(params));
	                });
	            })
	
	            //4. We resolve the promises of saving the system log entry to a Redis list and we send reply to the client
	            .then(function (saveLogEntriesResults) {
	                _q2['default'].all(saveLogEntriesResults).then(function (result) {
	                    reply({ result: result });
	                });
	            })['catch'](function (error) {
	                reply(_boom2['default'].wrap(new Error(error)));
	            });
	        }
	    }]);
	
	    return EventsPostRoute;
	})(_coreModelsRoute2['default']);
	
	exports['default'] = EventsPostRoute;
	module.exports = exports['default'];

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _coreServicesDbSvc = __webpack_require__(13);
	
	var _coreServicesDbSvc2 = _interopRequireDefault(_coreServicesDbSvc);
	
	var _coreModelsRequest = __webpack_require__(19);
	
	var _coreModelsRequest2 = _interopRequireDefault(_coreModelsRequest);
	
	var _constantsConstants = __webpack_require__(8);
	
	var _coreServicesUtilsSvc = __webpack_require__(16);
	
	var EventsService = (function (_DbService) {
	    _inherits(EventsService, _DbService);
	
	    function EventsService() {
	        _classCallCheck(this, EventsService);
	
	        _get(Object.getPrototypeOf(EventsService.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(EventsService, [{
	        key: 'areAllEventsCompleted',
	        value: function areAllEventsCompleted(events) {
	
	            var result = events.length > 0;
	            events.forEach(function (event) {
	                result = event.event_status === 'completed';
	            });
	            return result;
	        }
	    }, {
	        key: 'getEventsFromApi',
	        value: function getEventsFromApi(date) {
	
	            var sport = 'nba';
	
	            date = (0, _coreServicesUtilsSvc.formatDate)(date);
	
	            var req = new _coreModelsRequest2['default']({
	                method: 'GET',
	                host: _constantsConstants.XML_STATS_API.host,
	                endpoint: _constantsConstants.XML_STATS_API.endpoints.events,
	                headers: _constantsConstants.XML_STATS_API.headers,
	                query: { date: date, sport: sport },
	                urlParams: []
	            });
	
	            var successHandler = function successHandler(data) {
	                return {
	                    date: date,
	                    data: data.res.body
	                };
	            };
	
	            return req.send(null, successHandler);
	        }
	    }, {
	        key: 'eventIdsForDate',
	        value: function eventIdsForDate(date) {
	
	            return this.getFromDb(this.key(date)).then(function (result) {
	                var events = result.event;
	                return events.map(function (event) {
	                    return event.event_id;
	                });
	            })['catch'](function (err) {
	                return err;
	            });
	        }
	    }, {
	        key: 'key',
	        value: function key(date) {
	            date = (0, _coreServicesUtilsSvc.formatDate)(date);
	            return 'events_' + date;
	        }
	    }]);
	
	    return EventsService;
	})(_coreServicesDbSvc2['default']);
	
	var _EventsService = new EventsService();
	exports['default'] = _EventsService;
	module.exports = exports['default'];

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _superagent = __webpack_require__(11);
	
	var _superagent2 = _interopRequireDefault(_superagent);
	
	var _q = __webpack_require__(15);
	
	var _q2 = _interopRequireDefault(_q);
	
	var Request = (function () {
	    function Request(params) {
	        _classCallCheck(this, Request);
	
	        params = params || {};
	
	        this.method = params.method || null;
	        this.host = params.host || null;
	        this.endpoint = params.endpoint || null;
	        this.urlParams = params.urlParams || null;
	        this.headers = params.headers || null;
	        this.query = params.query || null;
	        this.url = params.url || this.constructUrl();
	    }
	
	    _createClass(Request, [{
	        key: 'constructUrl',
	        value: function constructUrl() {
	            var paramsUrl = '';
	            this.urlParams.forEach(function (param) {
	                paramsUrl += '/' + param;
	            });
	            return 'https://' + this.host + paramsUrl + this.endpoint;
	        }
	    }, {
	        key: 'send',
	        value: function send(errHandler, successHandler) {
	
	            var deferred = _q2['default'].defer();
	
	            console.log('this.url ->', this.url);
	            console.log('this.query ->', this.query);
	            (0, _superagent2['default'])(this.method, this.url).set(this.headers).query(this.query).end(function (err, data) {
	                if (err) {
	                    var error = errHandler ? errHandler(err) : err;
	                    deferred.reject(error);
	                } else {
	                    var result = successHandler ? successHandler(data) : data;
	                    deferred.resolve(result);
	                }
	            });
	
	            return deferred.promise;
	        }
	    }]);
	
	    return Request;
	})();
	
	exports['default'] = Request;
	module.exports = exports['default'];

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _boom = __webpack_require__(7);
	
	var _boom2 = _interopRequireDefault(_boom);
	
	var _coreModelsRoute = __webpack_require__(5);
	
	var _coreModelsRoute2 = _interopRequireDefault(_coreModelsRoute);
	
	var _constantsConstants = __webpack_require__(8);
	
	var _systemSvc = __webpack_require__(9);
	
	var _systemSvc2 = _interopRequireDefault(_systemSvc);
	
	var BoxscoresGetRoute = (function (_Route) {
	    _inherits(BoxscoresGetRoute, _Route);
	
	    function BoxscoresGetRoute() {
	        var method = arguments.length <= 0 || arguments[0] === undefined ? 'GET' : arguments[0];
	        var path = arguments.length <= 1 || arguments[1] === undefined ? _constantsConstants.INTERNAL_API.system.boxscores : arguments[1];
	
	        _classCallCheck(this, BoxscoresGetRoute);
	
	        _get(Object.getPrototypeOf(BoxscoresGetRoute.prototype), 'constructor', this).call(this, { method: method, path: path });
	    }
	
	    _createClass(BoxscoresGetRoute, [{
	        key: 'handler',
	        value: function handler(request, reply) {
	
	            _systemSvc2['default'].createSystemLogEntriesReply('boxscores', reply);
	        }
	    }]);
	
	    return BoxscoresGetRoute;
	})(_coreModelsRoute2['default']);
	
	exports['default'] = BoxscoresGetRoute;
	module.exports = exports['default'];

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _q = __webpack_require__(15);
	
	var _q2 = _interopRequireDefault(_q);
	
	var _boom = __webpack_require__(7);
	
	var _boom2 = _interopRequireDefault(_boom);
	
	var _coreModelsRoute = __webpack_require__(5);
	
	var _coreModelsRoute2 = _interopRequireDefault(_coreModelsRoute);
	
	var _constantsConstants = __webpack_require__(8);
	
	var _systemSvc = __webpack_require__(9);
	
	var _systemSvc2 = _interopRequireDefault(_systemSvc);
	
	var _boxscoreSvc = __webpack_require__(22);
	
	var _boxscoreSvc2 = _interopRequireDefault(_boxscoreSvc);
	
	var BoxscoreRoute = (function (_Route) {
	    _inherits(BoxscoreRoute, _Route);
	
	    function BoxscoreRoute() {
	        var method = arguments.length <= 0 || arguments[0] === undefined ? 'POST' : arguments[0];
	        var path = arguments.length <= 1 || arguments[1] === undefined ? _constantsConstants.INTERNAL_API.system.boxscores : arguments[1];
	
	        _classCallCheck(this, BoxscoreRoute);
	
	        _get(Object.getPrototypeOf(BoxscoreRoute.prototype), 'constructor', this).call(this, { method: method, path: path });
	    }
	
	    _createClass(BoxscoreRoute, [{
	        key: 'handler',
	        value: function handler(request, reply) {
	
	            var date = request.payload.body.date;
	
	            _boxscoreSvc2['default'].getBoxscoresFromApi(date).then(function (boxscorePromises) {
	                return _q2['default'].all(boxscorePromises).then(function (boxscores) {
	                    return boxscores.map(function (boxscore) {
	                        return _boxscoreSvc2['default'].saveToDb(boxscore.eventId, boxscore.data);
	                    });
	                });
	            }).then(function (saveToDbPromises) {
	                return _q2['default'].all(saveToDbPromises).then(function (dbResults) {
	
	                    return dbResults.map(function (result) {
	
	                        var params = {
	                            data: {
	                                result: result,
	                                date: date
	                            },
	                            type: 'boxscores',
	                            operation: 'insert'
	                        };
	                        return _systemSvc2['default'].saveToListOfDb(_systemSvc2['default'].key('boxscores'), _systemSvc2['default'].createLogEntry(params));
	                    });
	                });
	            }).then(function (saveLogEntriesResults) {
	                _q2['default'].all(saveLogEntriesResults).then(function (result) {
	                    reply({ result: result });
	                });
	            })['catch'](function (error) {
	                console.log('error ->', error);
	                reply(_boom2['default'].wrap(new Error(error)));
	            });
	        }
	    }]);
	
	    return BoxscoreRoute;
	})(_coreModelsRoute2['default']);
	
	exports['default'] = BoxscoreRoute;
	module.exports = exports['default'];

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _q = __webpack_require__(15);
	
	var _q2 = _interopRequireDefault(_q);
	
	var _constantsConstants = __webpack_require__(8);
	
	var _coreServicesUtilsSvc = __webpack_require__(16);
	
	var _coreServicesDbSvc = __webpack_require__(13);
	
	var _coreServicesDbSvc2 = _interopRequireDefault(_coreServicesDbSvc);
	
	var _coreModelsRequest = __webpack_require__(19);
	
	var _coreModelsRequest2 = _interopRequireDefault(_coreModelsRequest);
	
	var _coreServicesRequestQueueSvc = __webpack_require__(23);
	
	var _coreServicesRequestQueueSvc2 = _interopRequireDefault(_coreServicesRequestQueueSvc);
	
	var _eventsEventsSvc = __webpack_require__(18);
	
	var _eventsEventsSvc2 = _interopRequireDefault(_eventsEventsSvc);
	
	var BoxscoreService = (function (_DbService) {
	    _inherits(BoxscoreService, _DbService);
	
	    function BoxscoreService() {
	        _classCallCheck(this, BoxscoreService);
	
	        _get(Object.getPrototypeOf(BoxscoreService.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(BoxscoreService, [{
	        key: '_constructBoxscoreRequests',
	        value: function _constructBoxscoreRequests(eventIds) {
	
	            return _q2['default'].fcall(function () {
	
	                return eventIds.map(function (eventId) {
	
	                    return new _coreModelsRequest2['default']({
	                        method: 'GET',
	                        host: _constantsConstants.XML_STATS_API.host,
	                        endpoint: _constantsConstants.XML_STATS_API.endpoints.boxscore + eventId + '.json',
	                        headers: _constantsConstants.XML_STATS_API.headers,
	                        urlParams: ['nba', 'boxscore']
	                    });
	                });
	            });
	        }
	    }, {
	        key: '_addBoxscoreRequestsToQueue',
	        value: function _addBoxscoreRequestsToQueue(date) {
	            var _this = this;
	
	            return _eventsEventsSvc2['default'].eventIdsForDate(date).then(function (eventIds) {
	                return _this._constructBoxscoreRequests(eventIds);
	            }).then(function (boxscoreRequests) {
	                return _coreServicesRequestQueueSvc2['default'].addToQueue(boxscoreRequests);
	            }).then(function (requestQueue) {
	                return requestQueue;
	            });
	        }
	    }, {
	        key: 'getBoxscoresFromApi',
	        value: function getBoxscoresFromApi(date) {
	
	            return this._addBoxscoreRequestsToQueue(date).then(function (requestQueue) {
	
	                var promises = [];
	
	                requestQueue.forEach(function (request, index) {
	                    var send = request.send.bind(request);
	                    var successHandler = function successHandler(data) {
	                        return {
	                            eventId: request.endpoint.split('.')[0],
	                            data: data.res.body
	                        };
	                    };
	                    promises.push((0, _coreServicesUtilsSvc.delay)(send, index, 30000, null, successHandler));
	                });
	
	                return promises;
	            });
	        }
	    }]);
	
	    return BoxscoreService;
	})(_coreServicesDbSvc2['default']);
	
	var _BoxscoreService = new BoxscoreService();
	exports['default'] = _BoxscoreService;
	module.exports = exports['default'];

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _q = __webpack_require__(15);
	
	var _q2 = _interopRequireDefault(_q);
	
	var RequestQueue = (function () {
	    function RequestQueue() {
	        _classCallCheck(this, RequestQueue);
	
	        this.requests = [];
	    }
	
	    _createClass(RequestQueue, [{
	        key: 'addToQueue',
	        value: function addToQueue(request) {
	            var _this = this;
	
	            return _q2['default'].fcall(function () {
	
	                if (Array.isArray(request)) {
	                    request.forEach(function (req) {
	                        _this.requests.push(req);
	                    });
	                } else {
	                    _this.requests.push(request);
	                }
	
	                return _this.requests;
	            });
	        }
	    }]);
	
	    return RequestQueue;
	})();
	
	var _RequestQueue = new RequestQueue();
	exports['default'] = _RequestQueue;
	module.exports = exports['default'];

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x3, _x4, _x5) { var _again = true; _function: while (_again) { var object = _x3, property = _x4, receiver = _x5; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x3 = parent; _x4 = property; _x5 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _boom = __webpack_require__(7);
	
	var _boom2 = _interopRequireDefault(_boom);
	
	var _coreModelsRoute = __webpack_require__(5);
	
	var _coreModelsRoute2 = _interopRequireDefault(_coreModelsRoute);
	
	var _constantsConstants = __webpack_require__(8);
	
	var _scheduleSvc = __webpack_require__(25);
	
	var _scheduleSvc2 = _interopRequireDefault(_scheduleSvc);
	
	var ScheduleGetRoute = (function (_Route) {
	    _inherits(ScheduleGetRoute, _Route);
	
	    function ScheduleGetRoute() {
	        var method = arguments.length <= 0 || arguments[0] === undefined ? 'GET' : arguments[0];
	        var path = arguments.length <= 1 || arguments[1] === undefined ? _constantsConstants.INTERNAL_API.schedule : arguments[1];
	
	        _classCallCheck(this, ScheduleGetRoute);
	
	        _get(Object.getPrototypeOf(ScheduleGetRoute.prototype), 'constructor', this).call(this, { method: method, path: path });
	    }
	
	    _createClass(ScheduleGetRoute, [{
	        key: 'handler',
	        value: function handler(request, reply) {
	
	            var date = request.query.date;
	
	            _scheduleSvc2['default'].constructSchedule(date).then(function (schedule) {
	                reply(schedule);
	            })['catch'](function (error) {
	                reply(_boom2['default'].wrap(new Error(error)));
	            });
	        }
	    }]);
	
	    return ScheduleGetRoute;
	})(_coreModelsRoute2['default']);
	
	exports['default'] = ScheduleGetRoute;
	module.exports = exports['default'];

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
	
	var _q = __webpack_require__(15);
	
	var _q2 = _interopRequireDefault(_q);
	
	var _coreServicesDbSvc = __webpack_require__(13);
	
	var _coreServicesDbSvc2 = _interopRequireDefault(_coreServicesDbSvc);
	
	var _coreModelsGame = __webpack_require__(26);
	
	var _coreModelsGame2 = _interopRequireDefault(_coreModelsGame);
	
	var _gameRatingGameRatingSvc = __webpack_require__(27);
	
	var _gameRatingGameRatingSvc2 = _interopRequireDefault(_gameRatingGameRatingSvc);
	
	var ScheduleService = (function (_DbService) {
	    _inherits(ScheduleService, _DbService);
	
	    function ScheduleService() {
	        _classCallCheck(this, ScheduleService);
	
	        _get(Object.getPrototypeOf(ScheduleService.prototype), 'constructor', this).apply(this, arguments);
	    }
	
	    _createClass(ScheduleService, [{
	        key: 'constructSchedule',
	        value: function constructSchedule(date) {
	
	            var schedule = null;
	
	            return this.getFromDb('events_' + date).then(function (data) {
	
	                if (data && data.event) {
	
	                    var events = data.event;
	
	                    schedule = events.map(function (event) {
	
	                        var game = new _coreModelsGame2['default'](event);
	
	                        _gameRatingGameRatingSvc2['default'].rateGame(game);
	
	                        return {
	                            id: game.id,
	                            homeTeam: {
	                                name: game.homeTeamName,
	                                logo: game.homeTeamLogo
	                            },
	                            awayTeam: {
	                                name: game.awayTeamName,
	                                logo: game.awayTeamLogo
	                            },
	                            rating: game.rating
	                        };
	                    });
	                } else if (data && data.length === 0) {
	                    schedule = [];
	                }
	
	                return {
	                    schedule: schedule
	                };
	            });
	        }
	    }]);
	
	    return ScheduleService;
	})(_coreServicesDbSvc2['default']);
	
	var _ScheduleService = new ScheduleService();
	exports['default'] = _ScheduleService;
	module.exports = exports['default'];

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _constantsConstants = __webpack_require__(8);
	
	var REGULAR_TIME_PERIODS = 4;
	
	var Game = (function () {
	    function Game() {
	        var params = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
	
	        _classCallCheck(this, Game);
	
	        this.id = params.event_id || null;
	
	        this.homeTeam = {
	            id: params.home_team.team_id || null,
	            name: params.home_team.full_name || null,
	            points: params.home_points_scored,
	            periods: params.home_period_scores
	        };
	
	        this.awayTeam = {
	            id: params.away_team.team_id || null,
	            name: params.away_team.full_name || null,
	            points: params.away_points_scored,
	            periods: params.away_period_scores
	        };
	
	        this.rating = params.rating || 0;
	    }
	
	    _createClass(Game, [{
	        key: '_findTeamLogo',
	        value: function _findTeamLogo(teamId) {
	            return _constantsConstants.TEAM_LOGOS[teamId];
	        }
	    }, {
	        key: 'homeTeamName',
	        get: function get() {
	            return this.homeTeam.name;
	        }
	    }, {
	        key: 'homeTeamLogo',
	        get: function get() {
	            return this._findTeamLogo(this.homeTeam.id);
	        }
	    }, {
	        key: 'homeTeamPoints',
	        get: function get() {
	            return this.homeTeam.points;
	        }
	    }, {
	        key: 'homeTeamPeriodScores',
	        get: function get() {
	            return this.homeTeam.periods;
	        }
	    }, {
	        key: 'awayTeamName',
	        get: function get() {
	            return this.awayTeam.name;
	        }
	    }, {
	        key: 'awayTeamLogo',
	        get: function get() {
	            return this._findTeamLogo(this.awayTeam.id);
	        }
	    }, {
	        key: 'awayTeamPoints',
	        get: function get() {
	            return this.awayTeam.points;
	        }
	    }, {
	        key: 'awayTeamPeriodScores',
	        get: function get() {
	            return this.awayTeam.periods;
	        }
	    }, {
	        key: 'hasOvertime',
	        get: function get() {
	            return this.homeTeam.periods.length > REGULAR_TIME_PERIODS;
	        }
	    }]);
	
	    return Game;
	})();
	
	exports['default'] = Game;
	module.exports = exports['default'];

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, '__esModule', {
	    value: true
	});
	
	var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var _gameRatingConf = __webpack_require__(28);
	
	var GameRatingService = (function () {
	    function GameRatingService() {
	        _classCallCheck(this, GameRatingService);
	    }
	
	    _createClass(GameRatingService, [{
	        key: 'rateGame',
	        value: function rateGame(game) {
	            this._rateFinalScore(game);
	            this._rateOvertime(game);
	            this._ratePeriodScores(game);
	        }
	    }, {
	        key: '_rateFinalScore',
	        value: function _rateFinalScore(game) {
	            var scoreDiff = Math.abs(game.homeTeamPoints - game.awayTeamPoints);
	
	            _gameRatingConf.finalScoreRatingCategories.forEach(function (category) {
	                if (category.condition(scoreDiff)) {
	                    game.rating += category.rating;
	                }
	            });
	        }
	    }, {
	        key: '_rateOvertime',
	        value: function _rateOvertime(game) {
	            var hasOvertime = game.hasOvertime;
	            game.rating = hasOvertime ? game.rating + _gameRatingConf.overtimeRating.rating : game.rating;
	        }
	    }, {
	        key: '_ratePeriodScores',
	        value: function _ratePeriodScores(game) {
	
	            var homePointsPerPeriod = this._teamScorePerPeriod(game.homeTeamPeriodScores);
	            var awayPointsPerPeriod = this._teamScorePerPeriod(game.awayTeamPeriodScores);
	            var scoresDiff = [];
	
	            if (homePointsPerPeriod.length === awayPointsPerPeriod.length) {
	                var _loop = function () {
	
	                    scoresDiff[p] = Math.abs(homePointsPerPeriod[p] - awayPointsPerPeriod[p]);
	
	                    var period = p + 1;
	
	                    _gameRatingConf.periodScoresRatingCategories.forEach(function (category) {
	                        if (category.condition(period, scoresDiff[p])) {
	                            game.rating += category.rating;
	                        }
	                    });
	                };
	
	                for (var p = 0; p < homePointsPerPeriod.length; p++) {
	                    _loop();
	                }
	            }
	        }
	    }, {
	        key: '_teamScorePerPeriod',
	        value: function _teamScorePerPeriod(pointsPerPeriod) {
	
	            var scorePerPeriod = [];
	
	            for (var i = 0; i < pointsPerPeriod.length; i++) {
	
	                var s = 0;
	
	                for (var j = 0; j < scorePerPeriod.length; j++) {
	                    s += pointsPerPeriod[j];
	                }
	                scorePerPeriod[i] = s + pointsPerPeriod[i];
	            }
	            return scorePerPeriod;
	        }
	    }]);
	
	    return GameRatingService;
	})();
	
	var _GameRatingService = new GameRatingService();
	exports['default'] = _GameRatingService;
	module.exports = exports['default'];

/***/ },
/* 28 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var finalScoreRatingCategories = [{
	    condition: function condition(scoreDiff) {
	        return scoreDiff <= 3;
	    },
	    rating: 10
	}, {
	    condition: function condition(scoreDiff) {
	        return scoreDiff > 3 && scoreDiff <= 9;
	    },
	    rating: 5
	}, {
	    condition: function condition(scoreDiff) {
	        return scoreDiff > 9 && scoreDiff <= 15;
	    },
	    rating: 0
	}, {
	    condition: function condition(scoreDiff) {
	        return scoreDiff > 15 && scoreDiff <= 21;
	    },
	    rating: -5
	}, {
	    condition: function condition(scoreDiff) {
	        return scoreDiff > 21;
	    },
	    rating: -10
	}];
	
	exports.finalScoreRatingCategories = finalScoreRatingCategories;
	var periodScoresRatingCategories = [{
	    condition: function condition(period, scoreDiff) {
	        return period === 1 && scoreDiff <= 6;
	    },
	    rating: 5
	}, {
	    condition: function condition(period, scoreDiff) {
	        return period === 1 && scoreDiff > 15;
	    },
	    rating: -5
	}, {
	    condition: function condition(period, scoreDiff) {
	        return period === 2 && scoreDiff <= 6;
	    },
	    rating: 5
	}, {
	    condition: function condition(period, scoreDiff) {
	        return period === 2 && scoreDiff > 15;
	    },
	    rating: -5
	}, {
	    condition: function condition(period, scoreDiff) {
	        return period === 3 && scoreDiff < 6;
	    },
	    rating: 5
	}, {
	    condition: function condition(period, scoreDiff) {
	        return period === 3 && scoreDiff > 15;
	    },
	    rating: -5
	}];
	
	exports.periodScoresRatingCategories = periodScoresRatingCategories;
	var overtimeRating = {
	    rating: 10
	};
	exports.overtimeRating = overtimeRating;

/***/ }
/******/ ]);
//# sourceMappingURL=nba-server.js.map