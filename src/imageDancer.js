var ImageDancer = function(slug, top, left){
  this.pushClasses(["image-dancer"]);
  Dancer.call(this, top, left);
  this.slug = slug;
  this._frame = 0;
  this._framesPerLoop = 2;
  this.behaviors = {};
  this.behaviors["background"] = {
    frame: 0,
    framesPerLoop: 2,
    callback: this.addBackground
  };
  this.behaviors["tip-left"] = {
    frame: 0,
    framesPerLoop: 1,
    callback: this.tipLeft
  };
};

ImageDancer.prototype = Object.create(Dancer.prototype);
ImageDancer.prototype.constructor = ImageDancer;

ImageDancer.prototype.update = function(beat){  //beat will always be 0 - 15
  for(var key in this.behaviors){
    var behavior = this.behaviors[key];
    // Will we update this frame ?
    if (beat % (this.maxLoopInterval/behavior.framesPerLoop) === 0) {
      // Calculate new frame
      behavior.frame = Math.floor(beat/(this.maxLoopInterval/behavior.framesPerLoop)) % behavior.framesPerLoop;
      behavior.callback.call(this,behavior.frame);
    }
  }
  Dancer.prototype.update.call(this,beat);
};

ImageDancer.prototype.addBackground = function(frame){
  var background = "images/" + this.slug + "/" + frame + ".png";
  this.$node.css("background-image", 'url(' + background + ')');
}

ImageDancer.prototype.tipLeft = function(){
  this.$node.toggleClass("tip-left");
}

ImageDancer.prototype.maxLoopInterval = 16;
