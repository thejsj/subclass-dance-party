var ShyDancer = function(top, left, timeBetweenSteps){
  this.pushClasses(["shy-dancer"]);
  ImageDancer.call(this, "shy", top, left, timeBetweenSteps);
//  this.behaviors["tip-left"] = Dancer.prototype.miscBehaviors["tip-left"];
  this.$node.hover(this.runAway.bind(this));
};

ShyDancer.prototype = Object.create(ImageDancer.prototype);
ShyDancer.prototype.constructor = ShyDancer;

ShyDancer.prototype.runAway = function(){
  var styleSettings = {
    top:  window.globalController.$danceFloor.height() * Math.random(),
    left: window.globalController.$danceFloor.height() * Math.random()
  };
  TweenMax.to(this.$node[0], 1, {"css":styleSettings, ease:Linear.easeOut})
}
