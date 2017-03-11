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

/*jshint esversion: 6 */
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
			controllerAs: 'acp',
			resolve: {
				allTableData: ['resolveDataFromFactoryService', function (resolveDataFromFactoryService) {
					var responseTable = {};
					var url = 'https://api.myjson.com/bins/18t4jz';
					var method = 'GET';
					responseTable = resolveDataFromFactoryService.$get(url, method);
					console.log('59 -- responseTable: ', responseTable);
					return responseTable;
				}]
			}
		});
	}]);
})();
'use strict';

(function () {
	var cosM = angular.module('brgpacp.constant');
})();
'use strict';

/*jshint esversion: 6 */
/*jshint loopfunc: true */
(function () {
    var ctrlM = angular.module('brgpacp.ctrl');

    ctrlM.controller('homeCtrl', ['$log', function ($log) {
        $log.log('homepage');
    }]);

    ctrlM.controller('homeLeftCtrl', ['$log', function ($log) {
        $log.log('homeLeft page');
        {
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
            console.log('27 -- resultAry is: ' + resultAry + '.');
        }

        {
            var fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
            var celcius = fahrenheit.map(function (elem, idx) {
                // have {}, need return, without {}, donot need retrun;
                return Math.round((elem - 32) * 5 / 9);
            });
            console.log('38 -- celcius is: ' + celcius + '.');
        }

        {
            var arr0 = [12, 8, 4, 9, 77, 2, 100];
            // get elem which is greater than 10;
            var rzAry = arr0.filter(function (eachElem, idx, newArr) {
                return eachElem >= 10;
            });
            console.log('45 -- rzAry is: ' + rzAry + '.');
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
            console.log('69 -- bindToGetX() is: ' + bindToGetX() + '.');
        }

        function whenBloomer() {
            this.petalCount = Math.ceil(Math.random() * 12) + 1;
        }
        whenBloomer.prototype.startBloom = function () {
            console.log('76 -- this is: ', this);
            window.setTimeout(this.Boolmed.bind(this), 2000);
        };
        whenBloomer.prototype.Boolmed = function () {
            console.log('80 -- I am a beautiful flower with ' + this.petalCount + ' petals!');
        };

        var flower = new whenBloomer();
        flower.startBloom();
    }]);

    ctrlM.controller('bpRightCtrl', ['$log', function ($log) {
        $log.log('bp r');
    }]);

    ctrlM.controller('acpCtrl', ['$log', 'allTableData', '$scope', function ($log, allTableData, $scope) {
        $log.log('acp page');
        {
            var _Math$max;

            // 这说明 apply and call 的arguments 都可以是array。
            var numsAry = [5, 6, 2, 3, 7];
            var max0 = Math.max.apply(Math, numsAry);
            var max1 = Math.max.apply(null, numsAry);
            var max2 = (_Math$max = Math.max).call.apply(_Math$max, [null].concat(numsAry));
            console.log('100 -- max0 is: ' + max0 + '.');
            console.log('101 -- max1 is: ' + max1 + '.');
            console.log('102 -- max2 is: ' + max2 + '.');
        }

        // change context of this.
        function AnyProducts(productName, productPrice) {
            this.pdName = productName;
            this.pdPrice = productPrice;
            this.sayWhatitis = function () {
                console.log('110 trigger closure -- ' + this.pdName + ' -- ' + this.pdPrice + ' -- ' + this.category + '.');
            };
            this.sayWhatitis();
        }

        function Food(productName, productPrice) {
            this.category = 'Food_Category';
            AnyProducts.call(this, productName, productPrice);
        }

        function Toy(productName, productPrice) {
            this.category = 'Toy_Category';
            var args = [productName, productPrice];
            AnyProducts.apply(this, args);
        }
        var cheese = new Food('ProductName: Great-Cheese', 'Price: $5');
        var toy0 = new Food('ProductName: Great-Toy', 'Price: $50');

        var prsonObj = {
            pName: 'Wuqiha-Itaqi',
            pJob: 'SoftWare_Developer.'
        };

        function greeting() {
            var sayThisPerson = [this.pName, 'Is An Excellent', this.pJob].join(' ');
            console.log('135 -- ' + sayThisPerson);
        }
        greeting.call(prsonObj);
        greeting.apply(prsonObj);

        {
            var people = {
                work: 'this is work0',
                describe: function describe() {
                    console.log('144 -- Desc: ' + this.work + '.');
                }
            };
            var onePerson = {
                work: 'this is person one work.'
            };
            people.describe.call(onePerson);
            people.describe.apply(onePerson);
        }

        // Using call to invoke an anonymous function
        var animals = [{ species: 'Lion', name: 'King' }, { species: 'Whale', name: 'Fail' }];
        for (var i = 0; i < animals.length; i++) {
            (function (i) {
                this.print = function () {
                    console.log('162 - #' + i + ' ' + this.species + ': ' + this.name);
                };
                this.print();
            }).call(animals[i], i);
        }

        $scope.tbdata = allTableData.data.menu.items;
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

	cdM.directive('es6PromiseTable', [function () {
		return {
			scope: {
				'tableData': '@'
			},
			controller: function controller($scope, $element, $attrs, $transclude) {
				$scope.tbDataObj = angular.fromJson($scope.tableData);
				console.log('150 -- $scope.tbDataObj: ', $scope.tbDataObj);

				$scope.titles = Object.keys($scope.tbDataObj[0]);
				console.log('153 -- $scope.titles: ', $scope.titles);

				$scope.tbs = [];
				$scope.tbDataObj.reduce(function (preVal, currElement) {
					if (currElement !== null) {
						$scope.tbs.push(currElement);
					}
				});
			},
			restrice: 'E',
			templateUrl: './_partials/directive-tmpl/es6-promise-table.html',
			// transclude: true,
			link: function link(iScope, iElem, iAttrs, iCtrl) {}
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

    promiseFM.factory('getDataPlant', ['$http', '$q', function ($http, $q) {
        var tableDataFactory = {};

        tableDataFactory.fetchTableData = function (theUrl, theMethod) {
            var _def = $q.defer();
            var httpObj = {
                url: theUrl,
                method: theMethod
            };
            $http(httpObj).then(function (res) {
                _def.resolve(res);
            }, function (err) {
                _def.reject(err);
            });

            return _def.promise;
        };

        return tableDataFactory;
    }]);
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

	ssM.service('resolveDataFromFactoryService', ['getDataPlant', function (getDataPlant) {
		this.$get = function (url, method) {
			// let url = 'https://api.myjson.com/bins/18t4jz';
			// let method = 'GET';
			return getDataPlant.fetchTableData(url, method);
		};
	}]);
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