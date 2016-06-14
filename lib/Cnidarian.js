'use strict';
import Animal from './Animal.js';

class Cnidarian extends Animal {
  constructor (name){

    super(name, false, false, true, true, 'radial');
    this._name = name;

  }
}

export default Cnidarian;