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
  set uniCellular(uniCellularX){
    this._uniCellular = uniCellularX;
  }
  get multiCellular(){
    return this._multiCellular;
  }
  set multiCellular(multiCellularX){
    this._multiCellular = multiCellularX;
  }
  get eukaryote(){
    return this._eukaryote;
  }
  set eukaryote(eukaryoteX){
    this._eukaryote = eukaryoteX;
  }
  get prokaryote(){
    return this._prokartoye;
  }
  set prokaryote(prokaryoteX){
    this._prokartoye = prokaryoteX;
  }
  get anaerobic(){
    return this._anaerobic;
  }
  set anaerobic(anaerobicX){
    this._anaerobic = anaerobicX;
  }
  get aerobic(){
    return this._aerobic;
  }
  set aerobic(aerobicX){
    this._aerobic = aerobicX;
  }
  get asexual(){
    return this._asexual;
  }
  set asexual(asexualX){
    this._asexual = asexualX;
  }
  get mobile(){
    return this._mobile;
  }
  set mobile(mobileX){
    this._mobile = mobileX;
  }
  get immobile(){
    return this._immobile;
  }
  set immobile(immobileX){
    this._immobile = immobileX;
  }

};