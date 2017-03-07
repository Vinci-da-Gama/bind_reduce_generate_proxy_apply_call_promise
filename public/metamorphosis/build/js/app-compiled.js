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
    }]);

    ctrlM.controller('bpRightCtrl', ['$log', function ($log) {
        $log.log('bp r');
    }]);

    ctrlM.controller('acpCtrl', ['$log', function ($log) {
        $log.log('acp page');
    }]);
})();
'use strict';

(function () {
	var cdM = angular.module('brgpacp.cust.dir');

	// cdM
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