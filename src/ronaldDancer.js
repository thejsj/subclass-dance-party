var RonaldDancer = function(top, left, timeBetweenSteps){
  this.slug = "ronald";
  ImageDancer.call(this, top, left, timeBetweenSteps);
};


RonaldDancer.prototype = Object.create(ImageDancer.prototype);
RonaldDancer.prototype.constructor = RonaldDancer;
