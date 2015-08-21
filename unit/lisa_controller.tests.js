// 3 math tests
//describe('LisaController', function(){
//    beforeEach(module('myApp'));
//
//    var controller;
//
//    beforeEach(inject(function($rootScope, $controller, _$location_){
//        $location = _$location_;
//        scope = $rootScope.$new();
//
//        createController = $controller('MathController', {'$scope': scope});
//    }));
//
//
//})

describe('LisaController', function(){
    it("adds two numbers together", function(){
        expect(3+4).toEqual(7);
    });
});

describe('LisaController', function(){
    it('divides one number from another', function(){
        expect(15/3).toEqual(5);
    });
});

describe('LisaController', function(){
    it('finds the square root of a number', function(){
        expect(Math.sqrt(9)).toEqual(3);
    });
});


// 3 string tests
describe('LisaController', function(){
    it('checks to see if phrase is contained in the other phrase', function(){
        var message = "Lisa loves to test code.";
        expect(message).toMatch('Lisa loves to test code.');
    });
});

describe('LisaController', function(){
    it('checks to see if a word is contained in a sentence', function(){
        var word = "Lisa";
        expect('Lisa loves to test code.').toContain(word);
    });
});

describe('LisaController', function(){
    it('checks to see if a concatonated string will match a sentence', function(){
        var first = 'Lisa';
        var last = 'Larson';
        expect(first + " " + last).toMatch("Lisa Larson");
    });
});


// 3 boolean tests
describe('LisaController', function(){
    it('checks boolean', function(){
        var a = true;
        expect(a).toBeTruthy();
    });
});

describe('LisaController', function(){
    it('checks to see if one number is smaller than another', function(){
        var x = 3;
        var y= 4;
        expect(x<y).toBeTruthy();
    });
});

describe('LisaController', function(){
    it('checks to see if the value is falsy', function(){
        var a = "Lisa Larson";
        var b = "lisa larson";
        expect(a == b).toBeFalsy();
    });
});

// 1 bonus tests
describe('LisaController', function(){
    it('checks', function(){
        var first = function(x,y){
            return x*y;
        };
        expect(first(2, 3)).toBeGreaterThan(5);
    });
});