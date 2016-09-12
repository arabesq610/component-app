/*global angular*/
describe('List component', function () {

    beforeEach(module('el.app'));
    var list;


    beforeEach(inject(function ($componentController) {
        list = $componentController('list', {
            listConfigValue: {},
            $scope: {}
        });
    }));

    it('can be created', function () {
        expect(list).toBeDefined();
    });
});
