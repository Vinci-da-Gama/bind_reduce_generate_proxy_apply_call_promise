/*jshint esversion: 6 */
/*jshint sub:true*/
(function () {
	var cdM = angular.module('brgpacp.cust.dir');

	cdM.directive('proxyExplain', [function(){
		return {
			scope: {},
			controller: function($scope, $element, $attrs, $transclude) {
				{
					let targetObj = {};
					let validationHandler = {
						set: (target, propName, custVal) => {
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
					let personInstance = new Proxy(targetObj, validationHandler);
					personInstance.age = 100;
					console.log(`28 -- personInstance.age is: ${personInstance.age}.`);
					// personInstance.age = 'Young';
					// console.log(`30 -- personInstance.age is: ${personInstance.age}.`);
					// personInstance.age = 300;
					// console.log(`32 -- personInstance.age is: ${personInstance.age}.`);
				}

				{
					let browserObj = {
						browsers: ['IE', 'NetSpace']
					};
					let browserHandler = {
						get: (target, propName, custVal) => {
							if (propName === 'lastBrowser') {
								let len = target.browsers.length;
								return target.browsers[len - 1];
							}
							return target[propName];
						},
						set: (target, propName, custVal) => {
							let lb = 'lastBrowser';
							if (propName === lb) {
								target.browsers.push(custVal);
								return true;
							}
							if (angular.isString(custVal)) {
								custVal = [custVal];
							}
							if (angular.isNumber(custVal) && propName !== lb) {
								let str = custVal.toString();
								custVal = [str];
							}

							target[propName] = custVal;
							return true;
						}
					};
					let browsersProxy = new Proxy(browserObj, browserHandler);
					console.log(`66 -- browsersProxy.browsers are ${browsersProxy.browsers} -- browsersProxy.browsers[0] is: ${browsersProxy.browsers[0]}.`);
					browsersProxy.anythingTobeFirstElement = 'FireFox';
					console.log(`68 -- (这个创建了一个新的array, key is anythingTobeFirstElement) browsersProxy.anythingTobeFirstElement is: ${browsersProxy.anythingTobeFirstElement}.`);
					browsersProxy.browsers = 0;
					browsersProxy.lastBrowser = 'ThisIs-LastBrowser';
					console.log(`71 -- browsersProxy.browsers is ${browsersProxy.browsers}.`);
				}

				{
					let targetAry = [
						{ name: 'Firefox', type: 'WuHaHaHaHaHaHaHa' },
						{ name: 'SeaMonkey', type: 'WuHaHaHaHaHaHaHa' },
						{ name: 'Thunderbird', type: 'mailer' }
					];
					let targetHandler = {
						get: (target, propName, custVal) => {
							if (propName in target) {
								return target[propName];
							}
							if (propName === 'qty') {
								return target.length;
							}

							let result, types = {};

							for(let eachElem of target) {
								if (eachElem.name === propName) {
									result = eachElem;
								}
								console.log('96 -- eachElem.type: ', eachElem.type);
								console.log(`97 -- propName is: ${propName}.`);
								console.log('98 -- 以下这个if condition 的妙处在于一箭双雕: \n 1. 直接定义了新的 property在types obj 内部。 \n 2. 只有 eachElem.type 是存在的（比如： WuHaHaHaHaHaHaHa）， 才会准入，\n 这样就等同于 eachElem.type === propName, 而且还直接加了定义新property.');
								if (types[eachElem.type]) {
									types[eachElem.type].push(eachElem);
									console.log('101 -- types[eachElem.type] is:', types[eachElem.type]);
								} else {
									console.log('103 -- eachElem is: ', eachElem);
									types[eachElem.type] = [eachElem];
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

					let pdsProxy = new Proxy(targetAry, targetHandler);

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
			link: function($scope, iElm, iAttrs, controller) {}
		};
	}]);

	cdM.directive('es6PromiseTable', [function () {
		return {
			scope: {
				'tableData': '@'
			},
			controller: function ($scope, $element, $attrs, $transclude) {
				$scope.tbDataObj = angular.fromJson($scope.tableData);
				console.log('150 -- $scope.tbDataObj: ', $scope.tbDataObj);

				$scope.titles = Object.keys($scope.tbDataObj[0]);
				console.log('153 -- $scope.titles: ', $scope.titles);

				$scope.tbs = [];
				$scope.tbDataObj.reduce((preVal, currElement) => {
					if (currElement !== null) {
						$scope.tbs.push(currElement);
					}
				});

			},
			restrice: 'E',
			templateUrl: './_partials/directive-tmpl/es6-promise-table.html',
			// transclude: true,
			link: function (iScope, iElem, iAttrs, iCtrl) {}
		};
	}]);

})();