(function () {

	var anguNg = ['ngAria', 'ngSanitize', 'ngAnimate', 'ngMessages', 'ngCookies', 'ngNotify'/*, 'ngTable'*/];
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
