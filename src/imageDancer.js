var ImageDancer = function(top, left, timeBetweenSteps){
  Dancer.call(this, top, left, timeBetweenSteps);
  this.addBackground();
};

ImageDancer.prototype = Object.create(Dancer.prototype);
ImageDancer.prototype.constructor = ImageDancer;

ImageDancer.prototype.step = function(){
  Dancer.prototype.step.call(this);
};

ImageDancer.prototype.addBackground = function(step){
  step = step || 0;
  var background = "images/"+this.slug+"/"+step+".png";
  this.$node.css("background-image", 'url(' + background + ')');
}
