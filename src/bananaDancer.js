var BananaDancer = function(top, left, timeBetweenSteps){
  this.pushClasses(["banana-dancer"]);
  ImageDancer.call(this, "banana", top, left, timeBetweenSteps);
  this.behaviors["boogie"] = {
    frame:0,
    framesPerLoop: 8,
    callback: this.boogie
  }
};


BananaDancer.prototype = Object.create(ImageDancer.prototype);
BananaDancer.prototype.constructor = BananaDancer;

BananaDancer.prototype.boogie = function(behavior, timeInterval){
  var css = null;
  var distance = 15;
  if (behavior.frame===0){
    //move up
    css = {
      top: (this.top+distance)+"px",
    };
  } else if (behavior.frame === 1) {
    //move down, tip right
    css = {
      top: (this.top-distance)+"px",
    }
    this.$node.addClass("tip-right");
  } else if (behavior.frame === 2) {
    //tip left
    this.$node.removeClass("tip-right");
  } else if (behavior.frame === 3) {
    //do nothing
  } else if (behavior.frame === 4){
    //move up
    css = {
      top: (this.top+distance)+"px",
    };
  } else if (behavior.frame === 5){
    //move down, tip left
    css = {
      top: (this.top-distance)+"px",
    };
   this.$node.toggleClass("tip-left");
  } else if (behavior.frame === 6){
    // tip right
   this.$node.toggleClass("tip-left");
  } else if (behavior.frame === 7){
    // tip do nothing
  }
  if(css){
    TweenMax.to(this.$node[0], timeInterval * 8 / 1000 , {"css":css, ease:Linear.easeNone})
  }
}
