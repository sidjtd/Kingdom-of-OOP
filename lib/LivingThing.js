'use strict'

module.exports = class LivingThing {
  constructor (name, uniCellular, trueNucleus, anaerobic, asexual, mobile){
  this._name = name;
  this._uniCellular = uniCellular;
  this._anaerobic = anaerobic;
  this._asexual = asexual;
  this._mobile = mobile;
  }

  name(){
    return this._name;
  }
  uniCellular(){
    return this._uniCellular;
  }
  multiCellular(){
    return this._multiCellular;
  }
  eukarypte(){
    return this._eukaryote;
  }
  prokaryote(){
    return this._prokartoye;
  }
  anaerobic(){
    return this._anaerobic;
  }
  aerobic(){
    return this._aerobic;
  }
  asexual(){
    return this._asexual;
  }
  mobile(){
    return this._mobile;
  }
  immobile(){
    return this._immobile;
  }

};