/*jshint esversion: 6 */
(function () {
    let promiseFM = angular.module('brgpacp.promise.factory');

    promiseFM.factory('getDataPlant', ['$http', '$q', function($http, $q){
    	let tableDataFactory = {};

    	tableDataFactory.fetchTableData = function (theUrl, theMethod) {
    		let _def = $q.defer();
    		let httpObj = {
    			url: theUrl,
    			method: theMethod
    		};
    		$http(httpObj)
    		.then(function (res) {
    			_def.resolve(res);
    		}, function (err) {
    			_def.reject(err);
    		});

    		return _def.promise;
    	};

    	return tableDataFactory;
    }]);

})();
