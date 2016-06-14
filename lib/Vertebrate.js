'use strict';
import Bilateral from './Bilateral.js';

class Vertebrate extends Bilateral {
  constructor (name){

    super('vertebral-column');
    this._name = name;

  }
  get body(){
    return this._body;
  }
  set body(x){
    this._body = x;
  }

}

export default Vertebrate;