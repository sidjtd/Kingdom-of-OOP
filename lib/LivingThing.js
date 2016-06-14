'use strict';

class LivingThing {
  constructor (name, uniCellular, trueNucleus, anaerobic, asexual, mobile){
    this._name = name;
    this._uniCellular = uniCellular;
    this._trueNucleus = trueNucleus;
    this._anaerobic = anaerobic;
    this._asexual = asexual;
    this._mobile = mobile;
  }

  get name(){
    return this._name;
  }
  set name(nameX){
    this._name = nameX;
  }

  get uniCellular(){
    return this._uniCellular;
  }
  set uniCellular(x){
    this._uniCellular = x;
  }

  get multiCellular(){
    return !this._uniCellular;
  }

  set multiCellular(x){
    this._uniCellular = !x;
  }

  get eukaryote(){
    return this._trueNucleus;
  }
  set eukaryote(x){
    this._trueNucleus = x;
  }

  get prokaryote(){
    return !this._trueNucleus;
  }
  set prokaryote(x){
    this._trueNucleus = !x;
  }
  get anaerobic(){
    return this._anaerobic;
  }
  set anaerobic(anaerobicX){
    this._anaerobic = anaerobicX;
  }
  get aerobic(){
    return !this._anaerobic;
  }
  set aerobic(x){
    this._anaerobic = !x;
  }
  get asexual(){
    return this._asexual;
  }
  set asexual(x){
    this._asexual = x;
  }
  get sexual(){
    return !this._asexual;
  }
  set sexual(x){
    this._asexual = !x;
  }
  get mobile(){
    return this._mobile;
  }
  set mobile(x){
    this._mobile = x;
  }
  get immobile(){
    return !this._mobile;
  }
  set immobile(x){
    this._mobile = !x;
  }

}

export default LivingThing;