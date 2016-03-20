'use strict';

angular.module('reticulatingSplines', [])
    .factory('loadSplines', function($cacheFactory, webJargon) {
        var splinesCache = $cacheFactory.get('splines') || $cacheFactory('splines');

        var reticulatingThemes = {
            'sims': simsSplines,
            'web': webJargon
        };

        return function(theme) {
            if (!reticulatingThemes[theme]) {
                throw 'invalid theme: ' + theme;
            }

            var spline = splinesCache.get(theme);
            if (spline && spline.availableSplines.length) {
                return spline;
            }

            var splines = angular.copy(reticulatingThemes[theme]);
            var result = {availableSplines: splines, usedSplines: []};
            splinesCache.remove(theme);
            splinesCache.put(theme, result);
            return result;
        };
    })
    .factory('spline', function($cacheFactory, loadSplines) {
        var splinesCache = $cacheFactory.get('splines') || $cacheFactory('splines');

        var randomIdx = function(n) {
            return Math.floor(Math.random() * n);
        };

        return function(theme) {
            var splines = loadSplines(theme);
            var randomSplineIdx = randomIdx(splines.availableSplines.length);
            var randomSpline = splines.availableSplines[randomSplineIdx];
            splines.availableSplines.splice(randomSplineIdx, 1);
            splines.usedSplines.push(randomSpline);
            splinesCache.put(theme, splines);
            return randomSpline;
        };
    })
    .directive('reticulatingSplines', function() {
        return {
            restrict: 'EA',
            scope: {
                theme: '=',
                interval: '='
            },
            controller: function($scope, $interval, spline) {
                var getSpline = function() {
                    $scope.message = spline($scope.theme);
                };

                var intervalPromise;

                var startInterval = function() {
                    intervalPromise = $interval(getSpline, $scope.interval);
                };

                $scope.$watchGroup(['theme', 'interval'], function() {
                    if (angular.isDefined(intervalPromise)) {
                        $interval.cancel(intervalPromise);
                    }
                    startInterval();
                    getSpline();
                });
            },
            template: '<span class="reticulating-splines">{{message}}</span>'
        }
    });
