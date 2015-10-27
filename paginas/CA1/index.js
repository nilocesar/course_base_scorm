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



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap12 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap13 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap14 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap15 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap16 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap17 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap18 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap19 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.CA1_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.txt2 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-3.4,-1.7,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.4,-1.7,397.4,142.4);


(lib.txt1 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-4.4,-5.7,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.4,-5.7,411.4,212.2);


(lib.Símbolo1 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap19();
	this.instance.setTransform(-8.2,-6.4,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.2,-6.4,271.3,59.8);


// stage content:
(lib.CA1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_100 = function() {
		this.stop();
		if(createjs.Touch.isSupported()){
			createjs.Touch.enable(this.getStage());
		}
		/*
		
		this["avancar1"].addEventListener("click", 
		function() {
			alert("avancar1")
		});
		
		this["avancar2"].addEventListener("click", 
		function() {
			alert("avancar2")
		});
		
		this["avancar3"].addEventListener("click", 
		function() {
			alert("avancar3")
		});
			*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(100).call(this.frame_100).wait(1));

	// Camada 1
	this.instance = new lib.Símbolo1();
	this.instance.setTransform(635.2,486.6,1,1,0,0,0,150.5,19.1);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(86).to({_off:false},0).wait(1).to({regX:127.4,regY:23.5,x:612.1,y:490.8,alpha:0.017},0).wait(1).to({y:490.2,alpha:0.033},0).wait(1).to({y:488.9,alpha:0.066},0).wait(1).to({y:486.8,alpha:0.121},0).wait(1).to({y:483.3,alpha:0.213},0).wait(1).to({y:477.6,alpha:0.359},0).wait(1).to({y:469.9,alpha:0.561},0).wait(1).to({y:462.8,alpha:0.745},0).wait(1).to({y:458.2,alpha:0.864},0).wait(1).to({y:455.5,alpha:0.935},0).wait(1).to({y:454,alpha:0.975},0).wait(1).to({y:453.2,alpha:0.994},0).wait(1).to({regX:150.5,regY:19.1,x:635.2,y:448.6,alpha:1},0).wait(2));

	// Camada 6
	this.instance_1 = new lib.txt1();
	this.instance_1.setTransform(685.5,188.2,1,1,0,0,0,203.5,81.2);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(47).to({_off:false},0).wait(1).to({regX:168.6,regY:100.4,x:650.6,y:206.8,alpha:0.022},0).wait(1).to({y:204.8,alpha:0.057},0).wait(1).to({y:201.2,alpha:0.119},0).wait(1).to({y:195.8,alpha:0.213},0).wait(1).to({y:188.7,alpha:0.337},0).wait(1).to({y:180.2,alpha:0.483},0).wait(1).to({y:171.5,alpha:0.634},0).wait(1).to({y:163.7,alpha:0.77},0).wait(1).to({y:157.6,alpha:0.876},0).wait(1).to({y:153.4,alpha:0.948},0).wait(1).to({y:151.1,alpha:0.988},0).wait(1).to({regX:203.5,regY:81.2,x:685.5,y:131.2,alpha:1},0).wait(42));

	// Camada 5
	this.instance_2 = new lib.txt2();
	this.instance_2.setTransform(679,373,1,1,0,0,0,197,69);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(56).to({_off:false},0).wait(1).to({regX:162.1,regY:69.4,x:644.1,alpha:0.022},0).wait(1).to({y:371.9,alpha:0.057},0).wait(1).to({y:370,alpha:0.119},0).wait(1).to({y:367,alpha:0.213},0).wait(1).to({y:363.2,alpha:0.337},0).wait(1).to({y:358.6,alpha:0.483},0).wait(1).to({y:353.8,alpha:0.634},0).wait(1).to({y:349.6,alpha:0.77},0).wait(1).to({y:346.2,alpha:0.876},0).wait(1).to({y:344,alpha:0.948},0).wait(1).to({y:342.7,alpha:0.988},0).wait(1).to({regX:197,regY:69,x:679,y:342,alpha:1},0).wait(33));

	// Layer 3
	this.instance_3 = new lib.Bitmap3();
	this.instance_3.setTransform(894.7,-17.8);

	this.instance_4 = new lib.Bitmap4();
	this.instance_4.setTransform(819.4,-35.9);

	this.instance_5 = new lib.Bitmap5();
	this.instance_5.setTransform(798.5,-35.9);

	this.instance_6 = new lib.Bitmap6();
	this.instance_6.setTransform(740.5,-30.8);

	this.instance_7 = new lib.Bitmap7();
	this.instance_7.setTransform(681.3,-30.8);

	this.instance_8 = new lib.Bitmap8();
	this.instance_8.setTransform(640,-17.8);

	this.instance_9 = new lib.Bitmap9();
	this.instance_9.setTransform(597.1,-17.8);

	this.instance_10 = new lib.Bitmap10();
	this.instance_10.setTransform(580.1,-17.8);

	this.instance_11 = new lib.Bitmap11();
	this.instance_11.setTransform(547.6,-17.8);

	this.instance_12 = new lib.Bitmap12();
	this.instance_12.setTransform(518.1,-17.8);

	this.instance_13 = new lib.Bitmap13();
	this.instance_13.setTransform(497.4,-17.8);

	this.instance_14 = new lib.Bitmap14();
	this.instance_14.setTransform(477.8,-17.8);

	this.instance_15 = new lib.Bitmap15();
	this.instance_15.setTransform(469.5,-17.8);

	this.instance_16 = new lib.Bitmap16();
	this.instance_16.setTransform(446.1,-17.8);

	this.instance_17 = new lib.Bitmap17();
	this.instance_17.setTransform(430.9,-17.8);

	this.instance_18 = new lib.Bitmap18();
	this.instance_18.setTransform(424.9,-17.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},24).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).wait(62));

	// Layer 3
	this.instance_19 = new lib.CA1_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(101));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(437.5,260,875,520);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;