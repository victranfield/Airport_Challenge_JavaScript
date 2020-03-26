'use strict';

describe('Airport', function(){
  var airport;
  var plane;
  var weather;
  beforeEach(function(){
      airport = new Airport(weather);
      plane = jasmine.createSpy('plane',['land']);
      weather = jasmine.createSpyObj('weather', ['isStormy']);
  });

  it('has no planes by default', function(){
    expect(airport.planes()).toEqual([]);
  });

  it('can clear planes for landing', function(){
    airport.clearForLanding(plane);
    expect(airport.planes()).toEqual([plane]);
  });

  it('can clear planes for takeoff', function(){
    airport.clearForLanding(plane);
    airport.clearForTakeoff(plane);
    expect(airport.planes()).toEqual([]);
  });

  it('can check for stormy conditions', function(){
    expect(airport.isStormy()).toBeFalsy();
  });

  describe('under stormy conditions',function(){
  it('does not clear planes for takeoff', function(){
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ airport.clearForTakeoff(plane); }).toThrowError('cannot takeoff during storm');
  });
});

  it('does not allow planes to land', function(){
    spyOn(airport,'isStormy').and.returnValue(true);
    expect(function(){ airport.clearForLanding(plane); }).toThrowError('cannot land during storm');
  });

});
