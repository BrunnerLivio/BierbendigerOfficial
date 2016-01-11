'use strict';

describe('Directive: dashboardDesktop', function () {

  // load the directive's module
  beforeEach(module('bierbendigerApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<dashboard-desktop></dashboard-desktop>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the dashboardDesktop directive');
  }));
});
