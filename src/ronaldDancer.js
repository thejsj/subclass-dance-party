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

RonaldDancer.prototype.moveInSquare = function (behavior, timeInterval) {
  var css;
  var distance = 35;
  if (behavior.frame===0){
    css = {top: (this.top-distance)+"px"};
  } else if (behavior.frame === 1) {
    css = {left: (this.left-distance)+"px"};
    //move right
  } else if (behavior.frame === 2) {
    css = {top: (this.top+distance)+"px"};
    //move up
  } else if (behavior.frame === 3) {
    css = {left: (this.left+distance)+"px"};
    //move left
  }
  TweenMax.to(this.$node[0], timeInterval * 4 / 1000 , {"css":css, ease:Linear.easeNone})
}
