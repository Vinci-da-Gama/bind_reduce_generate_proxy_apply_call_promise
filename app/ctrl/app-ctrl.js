/*jshint esversion: 6 */
/*jshint loopfunc: true */
(function() {
    var ctrlM = angular.module('brgpacp.ctrl');

    ctrlM.controller('homeCtrl', ['$log', function($log) {
        $log.log('homepage');
    }]);

    ctrlM.controller('homeLeftCtrl', ['$log', function($log) {
        $log.log('homeLeft page'); 
        {
            let numAry = [0, 1, 2, 3];
            let total = numAry.reduce((preVal, curElement) => {
                return preVal + curElement; }, 0);
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
            console.log(`27 -- resultAry is: ${resultAry}.`);
        }

        {
            let fahrenheit = [0, 32, 45, 50, 75, 80, 99, 120];
            let celcius = fahrenheit.map(
                (elem, idx) => {
                    // have {}, need return, without {}, donot need retrun;
                    return Math.round((elem - 32) * 5 / 9);
                }
            );
            console.log(`38 -- celcius is: ${celcius}.`);
        }

        {
            let arr0 = [12, 8, 4, 9, 77, 2, 100];
            // get elem which is greater than 10;
            let rzAry = arr0.filter((eachElem, idx, newArr) => eachElem >= 10);
            console.log(`45 -- rzAry is: ${rzAry}.`);
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
        {
            this.x = 9;
            let sthModule = {
                x: 81,
                getX: function() {
                    return this.x;
                }
            };
            let getXfromOutside = sthModule.getX;
            let bindToGetX = getXfromOutside.bind(sthModule);
            console.log(`69 -- bindToGetX() is: ${bindToGetX()}.`);
        }

        function whenBloomer() {
            this.petalCount = Math.ceil(Math.random() * 12) + 1;
        }
        whenBloomer.prototype.startBloom = function() {
            console.log('76 -- this is: ', this);
            window.setTimeout(this.Boolmed.bind(this), 2000);
        };
        whenBloomer.prototype.Boolmed = function() {
            console.log('80 -- I am a beautiful flower with ' + this.petalCount + ' petals!');
        };

        let flower = new whenBloomer();
        flower.startBloom();

    }]);

    ctrlM.controller('bpRightCtrl', ['$log', function($log) {
        $log.log('bp r');
    }]);

    ctrlM.controller('acpCtrl', ['$log', 'allTableData', '$scope', function($log, allTableData, $scope) {
        $log.log('acp page'); 
        {
            // 这说明 apply and call 的arguments 都可以是array。
            let numsAry = [5, 6, 2, 3, 7];
            let max0 = Math.max(...numsAry);
            let max1 = Math.max.apply(null, numsAry);
            let max2 = Math.max.call(null, ...numsAry);
            console.log(`100 -- max0 is: ${max0}.`);
            console.log(`101 -- max1 is: ${max1}.`);
            console.log(`102 -- max2 is: ${max2}.`);
        }

        // change context of this.
        function AnyProducts(productName, productPrice) {
            this.pdName = productName;
            this.pdPrice = productPrice;
            this.sayWhatitis = function() {
                console.log(`110 trigger closure -- ${this.pdName} -- ${this.pdPrice} -- ${this.category}.`);
            };
            this.sayWhatitis();
        }

        function Food(productName, productPrice) {
            this.category = 'Food_Category';
            AnyProducts.call(this, productName, productPrice);
        }

        function Toy(productName, productPrice) {
            this.category = 'Toy_Category';
            let args = [productName, productPrice];
            AnyProducts.apply(this, args);
        }
        let cheese = new Food('ProductName: Great-Cheese', 'Price: $5');
        let toy0 = new Food('ProductName: Great-Toy', 'Price: $50');

        let prsonObj = {
            pName: 'Wuqiha-Itaqi',
            pJob: 'SoftWare_Developer.'
        };

        function greeting() {
            let sayThisPerson = [this.pName, 'Is An Excellent', this.pJob].join(' ');
            console.log('135 -- ' + sayThisPerson);
        }
        greeting.call(prsonObj);
        greeting.apply(prsonObj);

        {
            let people = {
                work: 'this is work0',
                describe: function() {
                    console.log(`144 -- Desc: ${this.work}.`);
                }
            };
            let onePerson = {
                work: 'this is person one work.'
            };
            people.describe.call(onePerson);
            people.describe.apply(onePerson);
        }

        // Using call to invoke an anonymous function
        const animals = [
            { species: 'Lion', name: 'King' },
            { species: 'Whale', name: 'Fail' }
        ];
        for (let i = 0; i < animals.length; i++) {
            (function(i) {
                this.print = function() {
                    console.log('162 - #' + i + ' ' + this.species + ': ' + this.name);
                };
                this.print();
            }).call(animals[i], i);
        }

        $scope.tbdata = allTableData.data.menu.items;

    }]);

})();
