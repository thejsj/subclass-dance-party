var ShyDancer = function(top, left, timeBetweenSteps){
  this.pushClasses(["shy-dancer"]);
  ImageDancer.call(this, "shy", top, left, timeBetweenSteps);
  this.behaviors["tip-left"] = Dancer.prototype.miscBehaviors["tip-left"];
  this.$node.on("mouseEnter",this.setPosition);
};


ShyDancer.prototype = Object.create(ImageDancer.prototype);
ShyDancer.prototype.constructor = ShyDancer;

