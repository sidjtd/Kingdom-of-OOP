'use strict';
import Bilateral from './Bilateral.js';

class Vertebrate extends Animal {
  constructor (name){

    super(name, uniCellular, trueNucleus, anaerobic, asexual, bilateral, vertebral-column);

    this._body = body;

  }
  get body(){
    return this._body;
  }
  set body(x){
    this._body = x;
  }

}

export default Vertebrate;