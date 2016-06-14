'use strict';
import LivingThing from './LivingThing.js';

class Archaea extends LivingThing {
  constructor (name){

    super(name, true, false, false, true, false);

    this._name = name;
  }
  get name(){
    return this._name;
  }
  set name(x){
    this._name = x;
  }
}

export default Archaea;