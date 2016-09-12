/*global angular*/
(function () {
    'use strict';

    angular
        .module('el.app')
        .component('weightDisplay', {
            templateUrl: 'app/list/weight-display/tpl.html',
            transclude: true,
            bindings: {
                weight: '<' // value
            },
            controller: function () {
                var model = this;

                // console.debug('model.weight ', model.weight);

                model.$onInit = function () {
                    model.array = new Array(model.weight || 1);
                    // console.debug('model.array ', model.array);
                };

                model.$onChanges = function () {
                    // console.debug('model.weight ', model.weight);
                    model.array = new Array(model.weight || 1);
                    // console.wardebugn('model.array ', model.array);
                };
            },
            controllerAs: 'model'
        });
}());
