'use strict';
import Animal from './Animal.js';

class Bilateral extends Animal {
  constructor (name, body){
    super(name, false, false, true, true);
    this._symmetry = symmetry;

  }
  get symmetry(){
    return this._symmetry;
  }
  set symmetry(x){
    this._symmetry = x;
  }

}

export default Bilateral;