/*global angular*/
(function () {
    'use strict';

    var listConfigValue;


    listConfigValue = {
        text: {
            title: 'List',
            description: 'Description'
        },
        min: 1,
        max: 5,
        increment: 1,
        items: [{
            id: 1,
            title: 'adoration',
            weight: 5
        }, {
            id: 2,
            title: 'respect',
            weight: 2
        }, {
            id: 3,
            title: 'envy',
            weight: 3
        }, {
            id: 4,
            title: 'inspiration',
            weight: 1
        }]
    };


    function controller(listConfigValue) {
        var vm = this;

        vm.$onInit = function () {
            // Assign text to the view model
            vm.text = listConfigValue.text;
            vm.items = listConfigValue.items;
            vm.min = listConfigValue.min;
            vm.max = listConfigValue.max;
            vm.increment = listConfigValue.increment;
        };

        vm.increase = function (value) {
            // console.debug('value ', value.weight);
            if (!value || !value.weight || value <= vm.min) {
                return;
            }
            value.weight -= vm.increment;
            // console.debug('value increased to ', value.weight);
            return value.weight;
        };

        vm.decrease = function (value) {
            // console.debug('value ', value);
            if (!value || !value.weight || value >= vm.max) {
                return;
            }
            value.weight += vm.increment;
            // console.debug('value decreased to ', value.weight);
        };

    }



    angular
        .module('el.app')
        .value('listConfigValue', listConfigValue)
        .component('list', {
            templateUrl: 'app/list/tpl.html',
            controller: ['listConfigValue', controller],
            controllerAs: 'vm'
        });
}());
