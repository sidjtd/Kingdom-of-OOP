'use strict';
import LivingThing from './LivingThing.js';

class Eukaryota extends LivingThing {
  constructor (name, uniCellular, asexual, mobile, heterotroph){
    super(name, uniCellular, true, false, mobile);
    this._heterotroph = heterotroph;

  }
  get heterotroph(){
    return this._heterotroph;
  }
  set heterotroph(x){
    this._heterotroph = x;
  }

}

export default Eukaryota;