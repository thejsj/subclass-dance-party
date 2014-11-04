describe("imageDancer", function() {

  var imageDancer;
  var clock;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    imageDancer = new ImageDancer("ronald", 10, 20);
  });

  it("should have a jQuery $node object", function(){
    expect(imageDancer.$node).to.be.an.instanceof(jQuery);
  });

  it("should have an update function that toggles through frames", function() {
    imageDancer.update(0);
    expect(imageDancer._frame).to.be.equal(0);
    imageDancer.update(8);
    expect(imageDancer._frame).to.be.equal(1);
  });

});
