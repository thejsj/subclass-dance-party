$(document).ready(function () {
  var makeGlobalController = function () {
    var self = {};
    self.dancers = [];
    self.init = function () {
      // Settings
      self.index = 0;
      self.interval = 60;
      self.maxLoopInterval = 16;
      self.animationLoop = setInterval(self.update, self.interval);
      self.congaActive = false;
      self.pushToWallActive = false;

      // jQuery Elements
      self.$danceFloor = $("body");
      self.$addDancerButton = $(".addDancerButton");
      self.$pushToWallButton = $(".pushToWallButton");
      self.$goIntoCongaLineButton = $(".goIntoCongaLineButton");

      // Event Handlers
      self.$addDancerButton.on("click", self.addDancerHandler);
      self.$pushToWallButton.on("click", self.pushWallHandler);
      self.$goIntoCongaLineButton.on("click", self.congaHandler);

      // Add a couple of Dancers
      self.addDancer(RonaldDancer);
      self.addDancer(RonaldDancer);
      self.addDancer(BarackDancer);
      self.addDancer(GeorgeDancer);
      self.addDancer(ShyDancer);
    };
    self.addDancer = function (dancerConstructor) {
      var dancer = new dancerConstructor(
        (self.$danceFloor.height() - 200) * Math.random(),
        (self.$danceFloor.width() - 200) * Math.random()
      );
      self.$danceFloor.append(dancer.$node);
      self.dancers.push(dancer);
    };
    self.addDancerHandler = function (event) {
      var dancerConstructorName = $(this).data("dancer-maker-function-name");
      self.addDancer(window[dancerConstructorName]);
    };
    self.pushWallHandler = function () {
      if (self.congaActive) {
        self.congaHandler();
      }
      if (!self.pushToWallActive) {
        self.pushToWall();
      } else {
        self.deactivatePushToWall();
      }
    };
    self.congaHandler = function () {
      if (!self.congaActive) {
        self.activateCongaLine();
        self.$goIntoCongaLineButton.addClass("active");
      } else {
        self.deactivateCongaLine();
        self.$goIntoCongaLineButton.removeClass("active");
      }
    };
    self.pushToWall = function () {
      self.pushToWallActive= true;
      self.$pushToWallButton.addClass("active");
      // Disable movement behaviors
      for (var i = 0; i < self.dancers.length; i++) {
        self.dancers[i].enableMovementBehaviors = false;
      }
      // Push to wall
      for (var i = 0; i < self.dancers.length; i++) {
        self.dancers[i].pushToWall();
      }
    };
    self.deactivatePushToWall = function () {
      // Push to wall
      for (var i = 0; i < self.dancers.length; i++) {
        self.dancers[i].goToOriginalPosition(self.pushToWallFinish);
      }
    };
    self.pushToWallFinish = function(){
      self.pushToWallActive=false;
      self.$pushToWallButton.removeClass("active")
    };
    self.activateCongaLine = function () {
      console.log(' -- activateCongaLine');
      self.congaActive = true;
      // Disable movement behaviors
      for (var i = 0; i < self.dancers.length; i++) {
        self.dancers[i].enableMovementBehaviors = false;
      }
      // Push to wall
      for (var i = 0; i < self.dancers.length; i++) {
        self.dancers[i].activateCongaLine(i, 300, 100);
      }
    };
    self.deactivateCongaLine = function () {
      console.log('deactivateCongaLine');
      self.congaActive = false;
      // Disable movement behaviors
      for (var i = 0; i < self.dancers.length; i++) {
        self.dancers[i].enableMovementBehaviors = false;
      }
      // Push to wall
      for (var i = 0; i < self.dancers.length; i++) {
        self.dancers[i].deactivateCongaLine();
      }
    };
    self.update = function () {
      self.index++;
      for (var i = 0; i < self.dancers.length; i++) {
        self.dancers[i].update(self.index % self.maxLoopInterval, self.maxLoopInterval, self.interval);
      }
    };
    self.init();
    return self;
  };
  window.globalController = makeGlobalController();

});
