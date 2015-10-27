(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 875,
	height: 520,
	fps: 30,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.ajuda = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.txt_AA3_1 = function() {
	this.initialize();

	// Camada 1 Cópia
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(-7.5,-4.8,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.5,-4.8,361.7,234.1);


(lib.txt_AA3 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-1.6,-0.7,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.6,-0.7,349.6,282);


(lib.funds1 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.ajuda();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,875,520);


(lib.btn = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(22,8);

	// Camada 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#333333").ss(1,1,1).p("A2ajlMAs1AAAIAAHLMgs1AAAg");
	this.shape.setTransform(143.5,23);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(178,201,0,0.498)").s().p("A2aDlIAAnKMAs1AAAIAAHKg");
	this.shape_1.setTransform(143.5,23);

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,289,48);


(lib.b = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,438,520);


(lib.a = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,438,520);


// stage content:
(lib.AA3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_135 = function() {
		this.stop();
		if(createjs.Touch.isSupported()){
			createjs.Touch.enable(this.getStage());
		}
		
		
		
		this["avancar"].addEventListener("click", 
		function() {
			parent.course.nextScreen();
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(135).call(this.frame_135).wait(1));

	// Camada 2
	this.avancar = new lib.btn();
	this.avancar.setTransform(656.5,436.9,1.146,1.146,0,0,0,143.5,22.9);
	this.avancar.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.avancar).wait(119).to({regY:23,scaleX:1,scaleY:1,y:385,alpha:1},15).wait(2));

	// Camada 4
	this.instance = new lib.txt_AA3_1();
	this.instance.setTransform(658.1,308,1,1,0,0,0,174,139.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(102).to({_off:false},0).wait(1).to({regX:173.3,regY:101.2,x:657.4,y:269.2,alpha:0.004},0).wait(1).to({y:268.6,alpha:0.018},0).wait(1).to({y:267.5,alpha:0.046},0).wait(1).to({y:265.7,alpha:0.092},0).wait(1).to({y:262.7,alpha:0.165},0).wait(1).to({y:258.2,alpha:0.28},0).wait(1).to({y:251.4,alpha:0.45},0).wait(1).to({y:243.6,alpha:0.643},0).wait(1).to({y:237.7,alpha:0.792},0).wait(1).to({y:233.9,alpha:0.887},0).wait(1).to({y:231.6,alpha:0.945},0).wait(1).to({y:230.2,alpha:0.978},0).wait(1).to({y:229.5,alpha:0.995},0).wait(1).to({regX:174,regY:139.8,x:658.1,y:268,alpha:1},0).wait(20));

	// Camada 7
	this.instance_1 = new lib.b();
	this.instance_1.setTransform(656.5,782,1,1,0,0,0,219,260);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(86).to({_off:false},0).wait(1).to({y:780.3},0).wait(1).to({y:774.8},0).wait(1).to({y:764.4},0).wait(1).to({y:747.5},0).wait(1).to({y:721.7},0).wait(1).to({y:683.2},0).wait(1).to({y:626.4},0).wait(1).to({y:547.2},0).wait(1).to({y:458.1},0).wait(1).to({y:384.9},0).wait(1).to({y:334.8},0).wait(1).to({y:302},0).wait(1).to({y:281.1},0).wait(1).to({y:268.5},0).wait(1).to({y:261.9},0).wait(1).to({y:260},0).wait(34));

	// Camada 6
	this.instance_2 = new lib.txt_AA3();
	this.instance_2.setTransform(225.2,321,1,1,0,0,0,174,139.8);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(28).to({_off:false},0).wait(1).to({regX:168.2,regY:140.2,x:219.4,y:321.1,alpha:0.005},0).wait(1).to({y:320.3,alpha:0.022},0).wait(1).to({y:318.6,alpha:0.055},0).wait(1).to({y:315.6,alpha:0.111},0).wait(1).to({y:310.8,alpha:0.203},0).wait(1).to({y:303.1,alpha:0.352},0).wait(1).to({y:292.5,alpha:0.556},0).wait(1).to({y:282.8,alpha:0.742},0).wait(1).to({y:276.5,alpha:0.863},0).wait(1).to({y:272.8,alpha:0.934},0).wait(1).to({y:270.7,alpha:0.974},0).wait(1).to({y:269.7,alpha:0.994},0).wait(1).to({regX:174,regY:139.8,x:225.2,y:269,alpha:1},0).wait(95));

	// Camada 5
	this.instance_3 = new lib.a();
	this.instance_3.setTransform(219,782.7,1,1,0,0,0,219,260);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(13).to({_off:false},0).wait(1).to({y:780.8},0).wait(1).to({y:774.5},0).wait(1).to({y:762.3},0).wait(1).to({y:742.3},0).wait(1).to({y:711.1},0).wait(1).to({y:663.6},0).wait(1).to({y:592.5},0).wait(1).to({y:499.5},0).wait(1).to({y:411.5},0).wait(1).to({y:349.4},0).wait(1).to({y:309.5},0).wait(1).to({y:284.5},0).wait(1).to({y:269.8},0).wait(1).to({y:262.2},0).wait(1).to({y:260},0).wait(108));

	// Modo de isolamento
	this.instance_4 = new lib.funds1();
	this.instance_4.setTransform(437.5,260,1,1,0,0,0,437.5,260);

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(136));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(437.5,260,875,520);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;