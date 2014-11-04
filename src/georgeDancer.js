var GeorgeDancer = function(top, left){
  this.pushClasses(["george-dancer"]);
  ImageDancer.call(this, "george", top, left);
  this.behaviors["left-right"] = {
    frame: 0,
    framesPerLoop: 4,
    isMovementRelated: true,
    callback: this.classToggle('left-right')
  };
};

GeorgeDancer.prototype = Object.create(ImageDancer.prototype);
GeorgeDancer.prototype.constructor = GeorgeDancer;
