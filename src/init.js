$(document).ready(function(){
  var makeGlobalController = function(){
    var self = {};
    self.dancers = [];
    self.init = function(){
      self.$danceFloor = $("body");
      self.$addDancerButton = $(".addDancerButton");
      self.$addDancerButton.on("click",self.addDancerHandler);
      self.index = 0;
      self.interval = 35;
      self.animationLoop = setInterval(self.update,self.interval);

      // Add a couple of Ronalds
      self.addDancer(RonaldDancer);
      self.addDancer(RonaldDancer);
      self.addDancer(RonaldDancer);
    }
    self.addDancer = function(dancerConstructor){
      var dancer = new dancerConstructor(
        self.$danceFloor.height() * Math.random(),
        self.$danceFloor.width() * Math.random(),
        Math.random() * 1000
      );
      self.$danceFloor.append(dancer.$node);
      self.dancers.push(dancer);
    }
    self.addDancerHandler = function(event){
      var dancerConstructorName = $(this).data("dancer-maker-function-name");
      self.addDancer(window[dancerConstructorName]);
    }
    self.update = function(){
      self.index++;
      for(var i = 0; i < self.dancers.length; i++){
        self.dancers[i].update(self.index%16);
      }
    }

    self.init();
    return self;
  }

  window.globalController = makeGlobalController();

});

