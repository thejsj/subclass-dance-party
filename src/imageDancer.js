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



