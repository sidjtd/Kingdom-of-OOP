'use strict';
import LivingThing from './LivingThing.js';

class Bacteria extends LivingThing {
  constructor (name){
    super(name, true, false, false, true, false);
    this._name = name;
  }
}

export default Bacteria;