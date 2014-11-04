// Creates and returns a new dancer object that can step
var Dancer = function(top, left){
  // use jQuery to create an HTML <span> tag
  this.pushClasses(["dancer"]);
  this.$node = $('<span class="'+this.classes.join(' ')+'"></span>');
  this.top = top;
  this.left = left;
  this.behaviors = {};
  // this.behaviors["tip-left"] = {
  //   frame: 0,
  //   framesPerLoop: 1,
  //   callback: this.tipLeft
  // };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.setPosition();
};

Dancer.prototype.pushClasses = function(classes){
  if(this.classes===undefined){
    this.classes = [];
  }
  for(var i = 0; i < classes.length; i++){
    this.classes.push(classes[i]);
  }
}

Dancer.prototype.update = function(beat, maxLoopInterval, timeInterval){  //beat will always be 0 - 15
  for(var key in this.behaviors){
    var behavior = this.behaviors[key];
    // Will we update this frame ?
    if (beat % (maxLoopInterval/behavior.framesPerLoop) === 0) {
      // Calculate new frame
      behavior.frame = Math.floor(beat/(maxLoopInterval/behavior.framesPerLoop)) % behavior.framesPerLoop;
      behavior.callback.call(this, behavior, timeInterval);
    }
  }
};

Dancer.prototype.setPosition = function(){
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  var styleSettings = {
    top: this.top, // undefined
    left: this.left // undefined
  };
  this.$node.css(styleSettings);
};



