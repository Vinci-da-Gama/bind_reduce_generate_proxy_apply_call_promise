'use strict';

(function () {

	var anguNg = ['ngAria', 'ngSanitize', 'ngAnimate', 'ngMessages', 'ngCookies', 'ngNotify' /*, 'ngTable'*/];
	var anguEx = ['ui.bootstrap', 'mgcrea.ngStrap', 'angularMoment', 'bootstrapLightbox'];
	var anguForm = ['ngMask', 'formly', 'formlyBootstrap'];
	var routerCtrl = ['brgpacp.router', 'brgpacp.ctrl'];
	var cons = ['brgpacp.constant'];
	var serv = ['brgpacp.sig.service', 'brgpacp.service'];
	var factory = ['brgpacp.auth.factory', 'brgpacp.func.factory', 'brgpacp.promise.factory'];
	var filter = ['brgpacp.filter'];
	var dir = ['brgpacp.dir', 'brgpacp.cust.dir'];

	var depedencyArr = anguNg.concat(anguEx, anguForm, routerCtrl, cons, serv, factory, filter, dir);
	/**
 * brgpacp Module
 *
 * The main module of this application...
 */
	angular.module('brgpacp', depedencyArr);

	angular.module('brgpacp.router', ['ui.router']);
	angular.module('brgpacp.constant', []);
	angular.module('brgpacp.sig.service', []);
	angular.module('brgpacp.service', []);
	angular.module('brgpacp.auth.factory', []);
	angular.module('brgpacp.func.factory', []);
	angular.module('brgpacp.promise.factory', []);
	angular.module('brgpacp.filter', []);
	angular.module('brgpacp.ctrl', []);
	angular.module('brgpacp.dir', ['brgpacp.service', 'brgpacp.sig.service']);
	angular.module('brgpacp.cust.dir', ['brgpacp.service', 'brgpacp.sig.service']);
})();
'use strict';

(function () {
	var rM = angular.module('brgpacp.router');

	rM.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.when('', '/');
		$urlRouterProvider.otherwise('/');

		$stateProvider.state('home', {
			url: '/',
			views: {
				'': {
					templateUrl: './_partials/home.html',
					controller: 'homeCtrl',
					controlerAs: 'hc'
				},
				'pl@home': {
					templateUrl: './_partials/parallel_l.html',
					controller: 'homeLeftCtrl',
					controllerAs: 'hlc'
				},
				'pr@home': {
					templateUrl: './_partials/parallel_r.html',
					controller: 'homeRightCtrl',
					controllerAs: 'hrc'
				}
			}
		}).state('bindproxy', {
			url: '/bp',
			templateUrl: './_partials/bp.html',
			controller: 'bindproxyCtrl',
			controllerAs: 'bpc'
		}).state('bindproxy.bpl', {
			url: '/bpl',
			templateUrl: './_partials/nest_l.html',
			controller: 'bpLeftCtrl',
			controllerAs: 'bplc'
		}).state('bindproxy.bpr', {
			url: '/bpr',
			templateUrl: './_partials/nest_r.html',
			controller: 'bpRightCtrl',
			controllerAs: 'bprc'
		}).state('acp', {
			url: '/acp',
			templateUrl: './_partials/acp.html',
			controller: 'acpCtrl',
			controllerAs: 'acp'
		});
	}]);
})();
'use strict';

(function () {
	var cosM = angular.module('brgpacp.constant');
})();
'use strict';

/*jshint esversion: 6 */
(function () {
    var ctrlM = angular.module('brgpacp.ctrl');

    ctrlM.controller('homeCtrl', ['$log', function ($log) {
        $log.log('homepage');
    }]);

    ctrlM.controller('homeLeftCtrl', ['$log', function ($log) {
        $log.log('homeLeft page');{
            var numAry = [0, 1, 2, 3];
            var total = numAry.reduce(function (preVal, curElement) {
                return preVal + curElement;
            }, 0);
            console.log('16 -- total is: ' + total);
        }

        {
            var list0 = [0, [1, [2, [3, [4, [5]]]]]];
            var flatten = function flatten(arr) {
                return arr.reduce(function (preVal, currVal) {
                    return preVal.concat(Array.isArray(currVal) ? flatten(currVal) : currVal);
                }, []);
            };
            var resultAry = flatten(list0);
            console.log('26 -- resultAry is: ' + resultAry + '.');
        }

        {
            var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
            var celcius = fahrenheit.map(function (elem, idx) {
                // have {}, need return, without {}, donot need retrun;
                return Math.round((elem - 32) * 5 / 9);
            });
            console.log('36 -- celcius is: ' + celcius + '.');
        }

        {
            var arr0 = [12, 8, 4, 9, 77, 2, 100];
            // get elem which is greater than 10;
            var rzAry = arr0.filter(function (eachElem, idx, newArr) {
                return eachElem >= 10;
            });
            console.log('44 -- rzAry is: ' + rzAry + '.');
        }
    }]);

    ctrlM.controller('homeRightCtrl', ['$log', function ($log) {
        $log.log('homeRight page');
    }]);

    ctrlM.controller('bindproxyCtrl', ['$log', function ($log) {
        $log.log('bind-proxy');
    }]);

    ctrlM.controller('bpLeftCtrl', ['$log', function ($log) {
        $log.log('bp l');
        {
            this.x = 9;
            var sthModule = {
                x: 81,
                getX: function getX() {
                    return this.x;
                }
            };
            var getXfromOutside = sthModule.getX;
            var bindToGetX = getXfromOutside.bind(sthModule);
            console.log('66 -- bindToGetX() is: ' + bindToGetX() + '.');
        }

        function whenBloomer() {
            this.petalCount = Math.ceil(Math.random() * 12) + 1;
        }
        whenBloomer.prototype.startBloom = function () {
            console.log('73 -- this is: ', this);
            window.setTimeout(this.Boolmed.bind(this), 2000);
        };
        whenBloomer.prototype.Boolmed = function () {
            console.log('76 -- I am a beautiful flower with ' + this.petalCount + ' petals!');
        };

        var flower = new whenBloomer();
        flower.startBloom();
    }]);

    ctrlM.controller('bpRightCtrl', ['$log', function ($log) {
        $log.log('bp r');
    }]);

    ctrlM.controller('acpCtrl', ['$log', function ($log) {
        $log.log('acp page');
    }]);
})();
'use strict';

/*jshint esversion: 6 */
/*jshint sub:true*/
(function () {
	var cdM = angular.module('brgpacp.cust.dir');

	cdM.directive('proxyExplain', [function () {
		return {
			scope: {},
			controller: function controller($scope, $element, $attrs, $transclude) {
				{
					var targetObj = {};
					var validationHandler = {
						set: function set(target, propName, custVal) {
							if (propName === 'age') {
								if (!Number.isInteger(custVal)) {
									throw new TypeError('Age must be integer!!!');
								}
								if (custVal >= 200) {
									throw new RangeError('Now, nobody is older than 200 years!!!');
								}
							}

							target[propName] = custVal;
							return true;
						}
					};
					var personInstance = new Proxy(targetObj, validationHandler);
					personInstance.age = 100;
					console.log('28 -- personInstance.age is: ' + personInstance.age + '.');
					// personInstance.age = 'Young';
					// console.log(`30 -- personInstance.age is: ${personInstance.age}.`);
					// personInstance.age = 300;
					// console.log(`32 -- personInstance.age is: ${personInstance.age}.`);
				}

				{
					var browserObj = {
						browsers: ['IE', 'NetSpace']
					};
					var browserHandler = {
						get: function get(target, propName, custVal) {
							if (propName === 'lastBrowser') {
								var len = target.browsers.length;
								return target.browsers[len - 1];
							}
							return target[propName];
						},
						set: function set(target, propName, custVal) {
							var lb = 'lastBrowser';
							if (propName === lb) {
								target.browsers.push(custVal);
								return true;
							}
							if (angular.isString(custVal)) {
								custVal = [custVal];
							}
							if (angular.isNumber(custVal) && propName !== lb) {
								var str = custVal.toString();
								custVal = [str];
							}

							target[propName] = custVal;
							return true;
						}
					};
					var browsersProxy = new Proxy(browserObj, browserHandler);
					console.log('66 -- browsersProxy.browsers are ' + browsersProxy.browsers + ' -- browsersProxy.browsers[0] is: ' + browsersProxy.browsers[0] + '.');
					browsersProxy.anythingTobeFirstElement = 'FireFox';
					console.log('68 -- (\u8FD9\u4E2A\u521B\u5EFA\u4E86\u4E00\u4E2A\u65B0\u7684array, key is anythingTobeFirstElement) browsersProxy.anythingTobeFirstElement is: ' + browsersProxy.anythingTobeFirstElement + '.');
					browsersProxy.browsers = 0;
					browsersProxy.lastBrowser = 'ThisIs-LastBrowser';
					console.log('71 -- browsersProxy.browsers is ' + browsersProxy.browsers + '.');
				}

				{
					var targetAry = [{ name: 'Firefox', type: 'WuHaHaHaHaHaHaHa' }, { name: 'SeaMonkey', type: 'WuHaHaHaHaHaHaHa' }, { name: 'Thunderbird', type: 'mailer' }];
					var targetHandler = {
						get: function get(target, propName, custVal) {
							if (propName in target) {
								return target[propName];
							}
							if (propName === 'qty') {
								return target.length;
							}

							var result = void 0,
							    types = {};

							var _iteratorNormalCompletion = true;
							var _didIteratorError = false;
							var _iteratorError = undefined;

							try {
								for (var _iterator = target[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
									var eachElem = _step.value;

									if (eachElem.name === propName) {
										result = eachElem;
									}
									console.log('96 -- eachElem.type: ', eachElem.type);
									console.log('97 -- propName is: ' + propName + '.');
									console.log('98 -- 以下这个if condition 的妙处在于一箭双雕: \n 1. 直接定义了新的 property在types obj 内部。 \n 2. 只有 eachElem.type 是存在的（比如： WuHaHaHaHaHaHaHa）， 才会准入，\n 这样就等同于 eachElem.type === propName, 而且还直接加了定义新property.');
									if (types[eachElem.type]) {
										types[eachElem.type].push(eachElem);
										console.log('101 -- types[eachElem.type] is:', types[eachElem.type]);
									} else {
										console.log('103 -- eachElem is: ', eachElem);
										types[eachElem.type] = [eachElem];
									}
								}
							} catch (err) {
								_didIteratorError = true;
								_iteratorError = err;
							} finally {
								try {
									if (!_iteratorNormalCompletion && _iterator.return) {
										_iterator.return();
									}
								} finally {
									if (_didIteratorError) {
										throw _iteratorError;
									}
								}
							}

							if (propName === 'allTypes') {
								return Object.keys(types);
							}
							if (result) {
								return result;
							}
							if (propName in types) {
								return types[propName];
							}

							return undefined;
						}
					};

					var pdsProxy = new Proxy(targetAry, targetHandler);

					console.log('124 -- ', pdsProxy[0]);
					console.log('125 -- ', pdsProxy['Firefox']);
					console.log('126 -- ', pdsProxy['Chrome']);
					console.log('127 -- ', pdsProxy.WuHaHaHaHaHaHaHa);
					console.log('128 -- ', pdsProxy.randomType);
					console.log('129 -- ', pdsProxy.allTypes);
					console.log('130 -- ', pdsProxy.qty);
				}
			},
			// require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
			restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
			// template: '',
			templateUrl: './_partials/directive-tmpl/proxy-explain-tmpl.html',
			transclude: true,
			link: function link($scope, iElm, iAttrs, controller) {}
		};
	}]);
})();
'use strict';

(function () {
	var dM = angular.module('brgpacp.dir');

	// dM
})();
'use strict';

/*jshint esversion: 6 */
(function () {
    var promiseFM = angular.module('brgpacp.promise.factory');

    // promiseFM
})();
'use strict';

/*jshint esversion: 6 */
// service js Document
// $log.log("sigSrevice error line -- 15 --- data : "+data+" config: "+config+" status: "+status+".---");
/*sM.service('verifyNumStrObjArrUndefinedElem', ['$log', function($log){
		this.IsNumberAndGreaterThanZero = function (figure) {
		var numBool = angular.isNumber(figure) && !isNaN(figure) && figure > 0;
		return numBool;
	};
		this.IsNumberAndGreaterThanWhileEqualZero = function (figure) {
		var numBool = angular.isNumber(figure) && !isNaN(figure) && figure >= 0;
		return numBool;
	};
		this.IsStringAndNotNull = function (str) {
		var strBool = angular.isString(str) && str.length > 0 && str !== null && str !== '';
		return strBool;
	};
		this.IsUndefined = function (testimony) {
		var refBool = angular.isUndefined(testimony);
		return refBool;
	};
		this.IsJqOrDomElem = function (jqdomElem) {
		var argBool = angular.isElement(jqdomElem) && typeof(jqdomElem) !== 'undefined';
		return argBool;
	};
		this.IsObjAndNotEmpty = function (obj) {
		var objBool = angular.isObject(obj) && Object.keys(obj).length > 0 && typeof(obj) !== 'undefined';
		return objBool;
	};
		this.IsArrayAndNotUnfilled = function (arr) {
		var arrBool = angular.isArray(arr) && arr.length > 0 && typeof(arr) !== 'undefined';
		return arrBool;
	}
	}]);*/
(function () {
	var sM = angular.module('brgpacp.service');

	// sM
})();
'use strict';

/*jshint esversion: 6 */
// service js Document
// $log.log("sigSrevice error line -- 14 --- data : "+data+" config: "+config+" status: "+status+".---");
/*sigM.service('inquireInfo', ['$http', '$log', 'appnameDb', function($http, $log, appnameDb){
	var dbPath = appnameDb.dbDot+appnameDb.delimiter+appnameDb.dbPrefix+appnameDb.delimiter+appnameDb.dbName+appnameDb.dbExtension;

	this.obtainDossier = function (func) {
		$http.get(dbPath)
		.then(function (testimony) {
			func(testimony.data);
			$log.log('get data successfully. '+dbPath);
		})
		.catch(function (data, config, status) {
			$log.log("sigSrevice error line -- 16 -\&\#1046\;- data : "+data+" config: "+config+" status: "+status+".---");
		})
		.finally(function () {
			$log.log('sigSrevice line 19, finally method.');
		});
	};

}]);*/
(function () {
	var ssM = angular.module('brgpacp.sig.service');

	// ssM
})();
'use strict';

/*jshint esversion: 6 */
// jQuery Js Document
$(document).ready(function () {
	// notice ();
	// initWow();
});

function notice() {
	alert('pls, disable this function. -- ' + window.location);
}

function initWow() {
	new WOW().init();
}