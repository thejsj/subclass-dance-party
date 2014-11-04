var RonaldDancer = function(top, left, timeBetweenSteps){
  this.pushClasses(["ronald-dancer"]);
  ImageDancer.call(this, "ronald", top, left, timeBetweenSteps);
  this.behaviors["moveInSquare"] = {
    frame: 0,
    framesPerLoop: 4,
    callback: this.moveInSquare
  }
};


RonaldDancer.prototype = Object.create(ImageDancer.prototype);
RonaldDancer.prototype.constructor = RonaldDancer;
