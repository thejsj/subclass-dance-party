var BananaDancer = function(top, left, timeBetweenSteps){
  this.pushClasses(["banana-dancer"]);
  ImageDancer.call(this, "banana", top, left, timeBetweenSteps);
  this.behaviors["wiggle"] = {
    frame:0,
    framesPerLoop: 8,
    callback: this.wiggle
  }
};


BananaDancer.prototype = Object.create(ImageDancer.prototype);
BananaDancer.prototype.constructor = BananaDancer;
BananaDancer.prototype.wiggle = function(behavior, timeInterval){
  var css;
  var distance = 15;
  if (behavior.frame===0){
    //move up
    css = {

    };
  } else if (behavior.frame === 1) {
    //move down
    css = {
      top: (this.top-distance)+"px",
      -ms-transform: rotate(15deg); /* IE 9 */
      -webkit-transform: rotate(15deg); /* Chrome, Safari, Opera */
      transform: rotate(15deg);
    }
  } else if (behavior.frame === 2) {
    //tip right
    css = {top: (this.top+distance)+"px"};
  } else if (behavior.frame === 3) {
    //tip left (to center)
    css = {left: (this.left+distance)+"px"};
  } else if (behavior.frame === 4){
    //move up
    css = {


    }
  } else if (behavior.frame === 5){
    //move down
    css = {

    }
  } else if (behavior.frame === 6){
    //tip left
    css = {

    }
  } else if (behavior.frame === 7){
    //tip right (to center)
    css = {

    }
  }
  TweenMax.to(this.$node[0], timeInterval * 4 / 1000 , {"css":css, ease:Linear.easeNone})
}
