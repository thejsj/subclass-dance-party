var BarackDancer = function(top, left){
  this.pushClasses(["barack-dancer"]);
  ImageDancer.call(this, "barack", top, left);
  this.behaviors["big-small"] = {
    frame: 0,
    framesPerLoop: 2,
    isMovementRelated: true,
    callback: this.classToggle('big-small')
  };
};

BarackDancer.prototype = Object.create(ImageDancer.prototype);
BarackDancer.prototype.constructor = BarackDancer;
