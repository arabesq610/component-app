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
            title: 'Adoration',
            weight: 5
        }, {
            title: 'Respect',
            weight: 2
        }, {
            title: 'Envy',
            weight: 3
        }, {
            title: 'Inspiration',
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


        vm.decrease = function (value) {
            if (!value || !value.weight || value.weight <= vm.min) {
                return;
            }
            value.weight -= vm.increment;
            return value.weight;
        };


        vm.increase = function (value) {
            if (!value || !value.weight || value.weight >= vm.max) {
                return;
            }
            value.weight += vm.increment;
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
