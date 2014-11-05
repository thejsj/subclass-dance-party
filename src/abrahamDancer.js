var AbrahamDancer = function(top, left){
  this.pushClasses(["abraham-dancer"]);
  ImageDancer.call(this, "abraham", top, left);
};

AbrahamDancer.prototype = Object.create(ImageDancer.prototype);
AbrahamDancer.prototype.constructor = AbrahamDancer;
