var BillDancer = function(top, left){
  this.pushClasses(["bill-dancer"]);
  ImageDancer.call(this, "bill", top, left);
};

BillDancer.prototype = Object.create(ImageDancer.prototype);
BillDancer.prototype.constructor = BillDancer;
