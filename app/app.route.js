/*jshint esversion: 6 */
(function () {
	var rM = angular.module('brgpacp.router');

	rM.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.when('', '/');
		$urlRouterProvider.otherwise('/');

		$stateProvider
		.state('home', {
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
		})
		.state('bindproxy', {
			url: '/bp',
			templateUrl: './_partials/bp.html',
			controller: 'bindproxyCtrl',
			controllerAs: 'bpc'
		})
		.state('bindproxy.bpl', {
			url: '/bpl',
			templateUrl: './_partials/nest_l.html',
			controller: 'bpLeftCtrl',
			controllerAs: 'bplc'
		})
		.state('bindproxy.bpr', {
			url: '/bpr',
			templateUrl: './_partials/nest_r.html',
			controller: 'bpRightCtrl',
			controllerAs: 'bprc'
		})
		.state('acp', {
			url: '/acp',
			templateUrl: './_partials/acp.html',
			controller: 'acpCtrl',
			controllerAs: 'acp',
			resolve: {
				allTableData: ['resolveDataFromFactoryService', function (resolveDataFromFactoryService) {
					let responseTable = {};
					let url = 'https://api.myjson.com/bins/18t4jz';
					let method = 'GET';
					responseTable = resolveDataFromFactoryService.$get(url, method);
					console.log('59 -- responseTable: ', responseTable);
					return responseTable;
				}]
			}
		});

	}]);

})();