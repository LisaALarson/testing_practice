//STRING EXAMPLE
describe('NameController', function() {
  beforeEach(module('myApp'));

  var controller;

  beforeEach(inject(function ($rootScope, $controller, _$location_) {
    $location = _$location_;
    scope = $rootScope.$new();

    createController = $controller('NameController', {'$scope': scope});
  }));

    it('tests getFirst', function() {
      var test = scope.getFirst();
      expect(test).toBe(scope.first);
      expect(scope.getFullName()).toBe('Joel Thomas Miller');
      expect(scope.getDisplayName()).toBe('JoelMiller');
    });
    //can do more "it" statements here if you want
  });

//LISAS MATH TESTS
describe('MathController', function() {
    beforeEach(module('myApp'));

    var controller;

    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();

        createController = $controller('MathController', {'$scope': scope});
    }));

    it('tests firstCheck', function() {
        expect(scope.firstCheck()).toEqual(7);
    });
    it('tests secondCheck', function() {
        expect(scope.secondCheck()).toEqual(12);
    });
    it('tests math stuff', function() {
        expect(scope.thirdCheck(9)).toEqual(3);
    });
    //can do more "it" statements here if you want
});

//LISAS BOLLEAN TESTS
describe('BooleanController', function() {
    beforeEach(module('myApp'));

    var controller;

    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();

        createController = $controller('BooleanController', {'$scope': scope});
    }));

    it('tests boolean stuff', function() {
        expect(scope.firstCheck()).toBeTruthy();
        expect(scope.secondCheck()).toBeFalsy();
        expect(scope.thirdCheck()).toBeGreaterThan(2)
    });
    //can do more "it" statements here if you want
});

//LISAS STRING TESTS
describe('StringController', function() {
    beforeEach(module('myApp'));

    var controller;

    beforeEach(inject(function ($rootScope, $controller, _$location_) {
        $location = _$location_;
        scope = $rootScope.$new();

        createController = $controller('StringController', {'$scope': scope});
    }));

    it('tests string stuff', function() {
        expect(scope.firstCheck()).toMatch('Lisa loves to test code.');
        expect(scope.firstCheck()).toMatch(/Lisa/);
        expect(scope.secondCheck()).toMatch("Lisa Larson");
    });
    //can do more "it" statements here if you want
});