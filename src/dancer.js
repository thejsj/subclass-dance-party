// Creates and returns a new dancer object that can step
var Dancer = function(top, left){
  // use jQuery to create an HTML <span> tag
  this.pushClasses(["dancer"]);
  this.$node = $('<span class="'+this.classes.join(' ')+'"></span>');
  this.top = top;
  this.left = left;
  this.behaviors = {};
  this.setPosition();
  this.enableMovementBehaviors = true;
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
    if (!behavior.isMovementRelated || (behavior.isMovementRelated && this.enableMovementBehaviors)) {
      // Will we update this frame ?
      if (beat % (maxLoopInterval/behavior.framesPerLoop) === 0) {
        // Calculate new frame
        behavior.frame = Math.floor(beat/(maxLoopInterval/behavior.framesPerLoop)) % behavior.framesPerLoop;
        behavior.callback.call(this, behavior, timeInterval);
      }
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

Dancer.prototype.pushToWall = function () {
  var that = this;
  TweenMax.to(this.$node[0], 0.5, {
    css: {'left': '0px'},
    ease:Linear.easeNone,
    onComplete: this.goToOriginalPosition.bind(this)
  });
};

Dancer.prototype.goToOriginalPosition = function () {
  TweenMax.to(this.$node[0], 3, {
    css: {'left': this.left},
    ease:Linear.easeNone,
    onComplete: this.resetMovementBehaviors.bind(this)
  });
};

Dancer.prototype.resetMovementBehaviors = function () {
  this.enableMovementBehaviors = true;
};

Dancer.prototype.animateToPosition = function (x, y, time, callback) {
  TweenMax.to(this.$node[0], time, {
    css: {'top': y, 'left': x},
    ease:Linear.easeNone,
    onComplete: callback
  });
};

Dancer.prototype.activateCongaLine = function (index, x, y) {
  var radius = 200;
  this.congaTween = TweenMax.to(
    this.$node[0],
    4,
    {
      bezier: [
        {x: radius, y: radius},
        {x: 0, y: (radius * 2)},
        {x: -radius, y: radius},
        {x: 0, y: 0}
      ],
      ease:Linear.easeNone,
      paused:true,
      repeat: -1
    }
  );
  this.animateToPosition(x, y, index * 0.5, function () {
    this.congaTween.play();
  }.bind(this));
};

Dancer.prototype.deactivateCongaLine = function () {
  if (this.congaTween) {
    window.congaTween = this.congaTween;
    this.congaTween.pause();
    this.resetMovementBehaviors()
    this.goToOriginalPosition();
    delete this.congaTween;
  }
};

Dancer.prototype.miscBehaviors = {
  'tip-left' : {
    frame: 0,
    framesPerLoop: 1,
    callback: this.tipLeft
  }
};


