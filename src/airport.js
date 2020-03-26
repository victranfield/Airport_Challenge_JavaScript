'use strict';

class Airport{
    constructor(weather) {
        this._weather = typeof weather !== 'undefined' ? weather : new Weather();
        this._hangar = []
      };
      planes() {
        return this._hangar;
      };
      clearForLanding(plane) {
		     if(this.isStormy()) {
			        throw new Error('cannot land during storm');
          }
          this._hangar.push(plane);
      };
      clearForTakeoff(plane) {
		      if(this.isStormy()) {
			         throw new Error('cannot takeoff during storm');
		       }
		      this._hangar = [];
        };
  	     isStormy() {
      return false;
    };
};
