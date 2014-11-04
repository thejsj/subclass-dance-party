var RonaldDancer = function(top, left, timeBetweenSteps){
  this.pushClasses(["ronald-dancer"]);
  ImageDancer.call(this, "ronald", top, left, timeBetweenSteps);
};


RonaldDancer.prototype = Object.create(ImageDancer.prototype);
RonaldDancer.prototype.constructor = RonaldDancer;
