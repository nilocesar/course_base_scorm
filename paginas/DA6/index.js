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



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.DA4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.txt2 = function() {
	this.initialize();

	// guide
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-3.1,-4.1,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.1,-4.1,324.7,197);


(lib.titulo_0 = function() {
	this.initialize();

	// Camada 2
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-2,2.3,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2,0,320,82);


(lib.Símbolo3 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-186.5,0);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-186.5,0,373,39);


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-186.5,-139.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-186.5,-139.5,373,279);


// stage content:
(lib.DA6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_62 = function() {
		this.stop();
		this.getStage().enableMouseOver();
		//this.animaFim.alpha = 0;
		
		if(createjs.Touch.isSupported()){
			createjs.Touch.enable(this.getStage());
		}
		
		this["btAnalise"].on("click", function(){
			parent.course.createModal("paginas/DA6a/index.html", 875, 520, false, false);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(62).call(this.frame_62).wait(1));

	// Camada 6
	this.instance = new lib.titulo_0();
	this.instance.setTransform(191,203.3,1,1,0,0,0,102.5,41.5);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(28).to({_off:false},0).wait(1).to({regX:135.1,regY:32.5,x:223.6,y:194.1,alpha:0.017},0).wait(1).to({y:193.7,alpha:0.034},0).wait(1).to({y:193,alpha:0.068},0).wait(1).to({y:191.8,alpha:0.122},0).wait(1).to({y:189.9,alpha:0.207},0).wait(1).to({y:187.2,alpha:0.33},0).wait(1).to({y:183.6,alpha:0.49},0).wait(1).to({y:179.9,alpha:0.655},0).wait(1).to({y:177,alpha:0.788},0).wait(1).to({y:174.9,alpha:0.88},0).wait(1).to({y:173.6,alpha:0.94},0).wait(1).to({y:172.8,alpha:0.976},0).wait(1).to({y:172.4,alpha:0.995},0).wait(1).to({regX:102.5,regY:41.5,x:191,y:181.3,alpha:1},0).wait(21));

	// Camada 8
	this.instance_1 = new lib.txt2();
	this.instance_1.setTransform(264.6,327.3,1,1,0,0,0,174,79);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(36).to({_off:false},0).wait(1).to({regX:159.2,regY:64.6,x:249.8,y:312.7,alpha:0.017},0).wait(1).to({y:312.3,alpha:0.034},0).wait(1).to({y:311.6,alpha:0.068},0).wait(1).to({y:310.4,alpha:0.122},0).wait(1).to({y:308.5,alpha:0.207},0).wait(1).to({y:305.8,alpha:0.33},0).wait(1).to({y:302.2,alpha:0.49},0).wait(1).to({y:298.5,alpha:0.655},0).wait(1).to({y:295.6,alpha:0.788},0).wait(1).to({y:293.5,alpha:0.88},0).wait(1).to({y:292.2,alpha:0.94},0).wait(1).to({y:291.4,alpha:0.976},0).wait(1).to({y:291,alpha:0.995},0).wait(1).to({regX:174,regY:79,x:264.6,y:305.3,alpha:1},0).wait(13));

	// Camada 7
	this.instance_2 = new lib.Symbol1();
	this.instance_2.setTransform(241.5,251.5,1.193,1.193);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(12).to({_off:false},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.017},0).wait(1).to({scaleX:1.19,scaleY:1.19,alpha:0.033},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.065},0).wait(1).to({scaleX:1.17,scaleY:1.17,alpha:0.117},0).wait(1).to({scaleX:1.16,scaleY:1.16,alpha:0.199},0).wait(1).to({scaleX:1.13,scaleY:1.13,alpha:0.32},0).wait(1).to({scaleX:1.1,scaleY:1.1,alpha:0.482},0).wait(1).to({scaleX:1.07,scaleY:1.07,alpha:0.652},0).wait(1).to({scaleX:1.04,scaleY:1.04,alpha:0.789},0).wait(1).to({scaleX:1.02,scaleY:1.02,alpha:0.882},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.941},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.976},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.995},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(37));

	// Camada 3
	this.btAnalise = new lib.Símbolo3();
	this.btAnalise.setTransform(241.8,385.1,1,1,0,0,0,0.3,19.5);
	this.btAnalise.alpha = 0.012;
	this.btAnalise._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btAnalise).wait(46).to({_off:false},0).wait(1).to({regX:0,x:241.5,y:385.2,alpha:0.017},0).wait(1).to({y:385.7,alpha:0.034},0).wait(1).to({y:386.7,alpha:0.068},0).wait(1).to({y:388.3,alpha:0.122},0).wait(1).to({y:390.8,alpha:0.207},0).wait(1).to({x:241.4,y:394.4,alpha:0.33},0).wait(1).to({y:399,alpha:0.49},0).wait(1).to({x:241.3,y:403.9,alpha:0.655},0).wait(1).to({y:407.7,alpha:0.788},0).wait(1).to({y:410.4,alpha:0.88},0).wait(1).to({y:412.2,alpha:0.94},0).wait(1).to({y:413.2,alpha:0.976},0).wait(1).to({y:413.8,alpha:0.995},0).wait(1).to({regX:0.3,x:241.6,y:414,alpha:1},0).wait(3));

	// Camada 1
	this.instance_3 = new lib.DA4();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(63));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(437.5,260,875,520);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;