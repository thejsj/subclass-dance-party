var ImageDancer = function(slug, top, left){
  this.pushClasses(["image-dancer"]);
  Dancer.call(this, top, left);
  this.slug = slug;
  this._frame = 0;
  this._framesPerLoop = 2;
  this.behaviors["background"] = {
    frame: 0,
    framesPerLoop: 2,
    callback: this.addBackground
  };
};

ImageDancer.prototype = Object.create(Dancer.prototype);
ImageDancer.prototype.constructor = ImageDancer;



ImageDancer.prototype.addBackground = function(behavior){
  var background = "images/" + this.slug + "/" + behavior.frame + ".png";
  this.$node.css("background-image", 'url(' + background + ')');
}

ImageDancer.prototype.tipLeft = function(){
  this.$node.toggleClass("tip-left");
}

ImageDancer.prototype.moveInSquare = function (behavior, timeInterval) {
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

