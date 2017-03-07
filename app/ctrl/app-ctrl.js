/*jshint esversion: 6 */
(function() {
    var ctrlM = angular.module('brgpacp.ctrl');

    ctrlM.controller('homeCtrl', ['$log', function($log) {
        $log.log('homepage');
    }]);

    ctrlM.controller('homeLeftCtrl', ['$log', function($log) {
        $log.log('homeLeft page'); {
            let numAry = [0, 1, 2, 3];
            let total = numAry.reduce((preVal, curElement) => {
                return preVal + curElement;
            }, 0);
            console.log('16 -- total is: ' + total);
        }

        {
            let list0 = [0, [1, [2, [3, [4, [5]]]]]];
            const flatten = arr => arr.reduce(
                (preVal, currVal) => preVal.concat(
				    Array.isArray(currVal) ? flatten(currVal) : currVal
				), []
            );
            let resultAry = flatten(list0);
            console.log(`26 -- resultAry is: ${resultAry}.`);
        }

        {
        	let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
        	let celcius = fahrenheit.map(
        		(elem, idx) => {
        			// have {}, need return, without {}, donot need retrun;
        			return Math.round((elem - 32) * 5 / 9);
        		}
        	);
        	console.log(`36 -- celcius is: ${celcius}.`);
        }

        {
        	let arr0 = [12, 8, 4, 9, 77, 2, 100];
        	// get elem which is greater than 10;
        	let rzAry = arr0.filter((eachElem, idx, newArr) => eachElem >= 10);
        	console.log(`44 -- rzAry is: ${rzAry}.`);
        }
    }]);

    ctrlM.controller('homeRightCtrl', ['$log', function($log) {
        $log.log('homeRight page');
    }]);

    ctrlM.controller('bindproxyCtrl', ['$log', function($log) {
        $log.log('bind-proxy');
    }]);

    ctrlM.controller('bpLeftCtrl', ['$log', function($log) {
        $log.log('bp l');
    }]);

    ctrlM.controller('bpRightCtrl', ['$log', function($log) {
        $log.log('bp r');
    }]);

    ctrlM.controller('acpCtrl', ['$log', function($log) {
        $log.log('acp page');
    }]);

})();
