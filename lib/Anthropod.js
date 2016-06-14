'use strict';
import Bilateral from './Bilateral.js';

class Anthropod extends Bilateral {
  constructor (name){
    super('exoskeleton');
    this._name = name;
    /*this._uniCellular = uniCellular;
    this._asexual = asexual;
    this._mobile = mobile;
    this._heterotroph = heterotroph;
    this._bilateral = bilateral;
    this.exoskeleton = exoskeleton;*/
  }

}

export default Anthropod;