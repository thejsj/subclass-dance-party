var ShyDancer = function(top, left, timeBetweenSteps){
  this.pushClasses(["shy-dancer"]);
  ImageDancer.call(this, "shy", top, left, timeBetweenSteps);
  this.$node.hover(this.runAway.bind(this));
  this.behaviors["background"] = {
    frame: 0,
    framesPerLoop: 4,
    callback: this.addBackground
  };
};

ShyDancer.prototype = Object.create(ImageDancer.prototype);
ShyDancer.prototype.constructor = ShyDancer;

ShyDancer.prototype.runAway = function(){
  var styleSettings = {
    top:  (window.globalController.$danceFloor.height() - 200) * Math.random(),
    left: (window.globalController.$danceFloor.height() - 200) * Math.random()
  };
  TweenMax.to(this.$node[0], 1, {"css":styleSettings, ease:Linear.easeOut})
}
