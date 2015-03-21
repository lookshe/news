/**
 * ownCloud - News
 *
 * This file is licensed under the Affero General Public License version 3 or
 * later. See the COPYING file.
 *
 * @author Bernhard Posselt <dev@bernhard-posselt.com>
 * @copyright Bernhard Posselt 2014
 */
app.directive('newsSearch', function ($document, $timeout, $location) {
    'use strict';

    var timer;

    return {
        restrict: 'E',
        scope: {
            'onSearch': '='
        },
        link: function (scope) {
            var box = $('#searchbox');
            box.val($location.search().search);

            box.on('search keyup', function () {
                var value = $(this).val();
                if (timer) {
                    $timeout.cancel(timer);
                }

                timer = $timeout(function () {
                    scope.$apply(function () {
                        scope.onSearch(value);
                    });
                }, 500);
            });

            // carry over search on route change
            scope.$watch(function () {
                return $location.search();
            }, function (search) {
                if (search && search.search) {
                    box.val(search.search);
                } else {
                    box.val('');
                }
            });
        }
    };
});