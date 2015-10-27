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



(lib.AA1_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.AA1_blured = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap10 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap11 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.branco = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.william_gay = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(208.5,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#B2C900").s().p("EggjAFUIAAqnMBBHAAAIAAKng");
	this.shape_1.setTransform(208.5,34);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,417,73.8);


(lib.txt2 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap10();
	this.instance.setTransform(-3.5,-4.2,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-3.5,-4.2,299.1,175.4);


(lib.txt1 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap11();
	this.instance.setTransform(-1.5,-1.3,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-30,-1.3,343.2,191.3);


(lib.txt_btn = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(2.9,6.1,0.714,0.714);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,297,36.4);


(lib.Símbolo33 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-1,-1);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,170,87);


(lib.nomezinho = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap2();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,126,41);


(lib.funds1 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.AA1_1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,875,520);


(lib.funds_2 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.AA1_blured();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,875,520);


(lib.fundo_bco = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.branco();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,417,520);


(lib.circle = function() {
	this.initialize();

	// Camada 2
	this.instance = new lib.Bitmap3();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,281,280);


(lib._2 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(29,-12.5);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-29,-20,426,194.2);


(lib._1 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(0.2,1.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,252.2,48.3);


(lib.btn = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.txt_btn();
	this.instance.setTransform(171.8,26.6,1,1,0,0,0,148.5,18.2);

	this.instance_1 = new lib.Bitmap4();
	this.instance_1.setTransform(-1,-1);

	this.addChild(this.instance_1,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,289,48);


// stage content:
(lib.AA1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_129 = function() {
		this.stop();
		if(createjs.Touch.isSupported()){
			createjs.Touch.enable(this.getStage());
		}
		
		var _this = this;
		this["continuar"].addEventListener("click", 
		function() {
			_this.play();
		});
	}
	this.frame_199 = function() {
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
	this.timeline.addTween(cjs.Tween.get(this).wait(129).call(this.frame_129).wait(70).call(this.frame_199).wait(1));

	// in_touch
	this.instance = new lib.Símbolo33();
	this.instance.setTransform(624.4,276.9,0.743,0.743,0,0,0,83.8,42.8);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(99).to({_off:false},0).wait(1).to({regX:84,regY:42.5,scaleX:0.74,scaleY:0.74,x:624.5,y:276.6,alpha:0.005},0).wait(1).to({scaleX:0.75,scaleY:0.75,alpha:0.022},0).wait(1).to({scaleX:0.76,scaleY:0.76,alpha:0.055},0).wait(1).to({scaleX:0.77,scaleY:0.77,x:624.6,alpha:0.111},0).wait(1).to({scaleX:0.8,scaleY:0.8,alpha:0.203},0).wait(1).to({scaleX:0.83,scaleY:0.83,alpha:0.352},0).wait(1).to({scaleX:0.89,scaleY:0.89,alpha:0.556},0).wait(1).to({scaleX:0.93,scaleY:0.93,alpha:0.742},0).wait(1).to({scaleX:0.97,scaleY:0.97,x:624.7,alpha:0.863},0).wait(1).to({scaleX:0.98,scaleY:0.98,x:624.6,alpha:0.934},0).wait(1).to({scaleX:0.99,scaleY:0.99,x:624.7,y:276.5,alpha:0.974},0).wait(1).to({scaleX:1,scaleY:1,y:276.6,alpha:0.994},0).wait(1).to({regX:83.9,regY:42.8,scaleX:1,scaleY:1,x:624.5,y:276.9,alpha:1},0).wait(18).to({alpha:0.012},12).to({_off:true},1).wait(57));

	// Monsanto
	this.instance_1 = new lib.nomezinho();
	this.instance_1.setTransform(624.5,229.2,0.657,0.657,0,0,0,63.1,20.4);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(83).to({_off:false},0).to({scaleX:1,scaleY:1,y:222.2,alpha:1},13).wait(34).to({alpha:0.012},12).to({_off:true},1).wait(57));

	// circle
	this.instance_2 = new lib.circle();
	this.instance_2.setTransform(623.7,280.8,1.309,1.309,53,0,0,140.6,139.9);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(55).to({_off:false},0).to({regX:140.7,scaleX:1,scaleY:1,rotation:0,y:280.9,alpha:1,mode:"synched",startPosition:0,loop:false},49,cjs.Ease.get(1)).wait(26).to({startPosition:0},0).to({alpha:0.012},12).to({_off:true},1).wait(57));

	// Camada 4
	this.instance_3 = new lib._1();
	this.instance_3.setTransform(244.3,173.4,1,1,0,0,0,125.5,22.7);
	this.instance_3.alpha = 0.012;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(35).to({_off:false},0).wait(1).to({regX:126.2,regY:24.8,x:245,y:175.2,alpha:0.027},0).wait(1).to({y:174.2,alpha:0.078},0).wait(1).to({y:172.3,alpha:0.172},0).wait(1).to({y:169.5,alpha:0.31},0).wait(1).to({y:166,alpha:0.483},0).wait(1).to({y:162.3,alpha:0.663},0).wait(1).to({y:159.2,alpha:0.816},0).wait(1).to({y:157.1,alpha:0.923},0).wait(1).to({y:155.9,alpha:0.982},0).wait(1).to({regX:125.5,regY:22.7,x:244.3,y:153.4,alpha:1},0).wait(85).to({alpha:0.012},12).to({_off:true},1).wait(57));

	// Camada 8
	this.instance_4 = new lib._2();
	this.instance_4.setTransform(254.5,245.7,1,1,0,0,0,194.5,27.2);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(44).to({_off:false},0).wait(1).to({regX:189,regY:53,x:249,y:271.2,alpha:0.027},0).wait(1).to({y:270.2,alpha:0.078},0).wait(1).to({y:268.3,alpha:0.172},0).wait(1).to({y:265.5,alpha:0.31},0).wait(1).to({y:262,alpha:0.483},0).wait(1).to({y:258.3,alpha:0.663},0).wait(1).to({y:255.2,alpha:0.816},0).wait(1).to({y:253.1,alpha:0.923},0).wait(1).to({y:251.9,alpha:0.982},0).wait(1).to({regX:194.5,regY:27.2,x:254.5,y:225.7,alpha:1},0).wait(76).to({alpha:0.012},12).to({_off:true},1).wait(57));

	// Camada 7
	this.continuar = new lib.btn();
	this.continuar.setTransform(243.3,384,1,1,0,0,0,143.5,23);
	this.continuar.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.continuar).wait(117).to({alpha:0.027},0).wait(1).to({alpha:0.078},0).wait(1).to({alpha:0.172},0).wait(1).to({alpha:0.31},0).wait(1).to({alpha:0.483},0).wait(1).to({alpha:0.663},0).wait(1).to({alpha:0.816},0).wait(1).to({alpha:0.923},0).wait(1).to({alpha:0.982},0).wait(1).to({alpha:1},0).wait(4).to({alpha:0.012},12).to({_off:true},1).wait(57));

	// Camada 9
	this.instance_5 = new lib.txt1();
	this.instance_5.setTransform(190.4,175.8,1,1,0,0,0,132.4,67.3);
	this.instance_5.alpha = 0.012;
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(157).to({_off:false},0).wait(1).to({regX:155.8,regY:59.9,x:213.8,y:168.2,alpha:0.017},0).wait(1).to({y:167.7,alpha:0.033},0).wait(1).to({y:166.7,alpha:0.066},0).wait(1).to({y:165,alpha:0.121},0).wait(1).to({y:162.2,alpha:0.213},0).wait(1).to({y:157.8,alpha:0.359},0).wait(1).to({y:151.7,alpha:0.561},0).wait(1).to({y:146.1,alpha:0.745},0).wait(1).to({y:142.5,alpha:0.864},0).wait(1).to({y:140.3,alpha:0.935},0).wait(1).to({y:139.1,alpha:0.975},0).wait(1).to({y:138.5,alpha:0.994},0).wait(1).to({regX:132.4,regY:67.3,x:190.4,y:145.8,alpha:1},0).wait(30));

	// Camada 6
	this.instance_6 = new lib.txt2();
	this.instance_6.setTransform(190.4,348.7,1,1,0,0,0,132.4,67.3);
	this.instance_6.alpha = 0.012;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(165).to({_off:false},0).wait(1).to({regX:146,regY:64.5,x:204,y:345.6,alpha:0.017},0).wait(1).to({y:344.4,alpha:0.033},0).wait(1).to({y:342.1,alpha:0.066},0).wait(1).to({y:338.1,alpha:0.121},0).wait(1).to({y:331.7,alpha:0.213},0).wait(1).to({y:321.3,alpha:0.359},0).wait(1).to({y:307,alpha:0.561},0).wait(1).to({y:294,alpha:0.745},0).wait(1).to({y:285.5,alpha:0.864},0).wait(1).to({y:280.5,alpha:0.935},0).wait(1).to({y:277.7,alpha:0.975},0).wait(1).to({y:276.3,alpha:0.994},0).wait(1).to({regX:132.4,regY:67.3,x:190.4,y:278.7,alpha:1},0).wait(22));

	// Camada 5
	this.avancar = new lib.william_gay();
	this.avancar.setTransform(208.5,558.9,1,1,0,0,0,208.5,36.9);
	this.avancar.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.avancar).wait(186).to({y:556.9,alpha:1},0).wait(1).to({regY:34,y:553.6},0).wait(1).to({y:552.2},0).wait(1).to({y:549.5},0).wait(1).to({y:544.7},0).wait(1).to({y:536.5},0).wait(1).to({y:523.4},0).wait(1).to({y:508.3},0).wait(1).to({y:497.6},0).wait(1).to({y:491.5},0).wait(1).to({y:488.1},0).wait(1).to({y:486.5},0).wait(1).to({regY:36.9,y:488.9},0).wait(2));

	// Camada 1
	this.instance_7 = new lib.fundo_bco();
	this.instance_7.setTransform(-208.5,260,1,1,0,0,0,208.5,260);
	this.instance_7._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(143).to({_off:false},0).wait(1).to({x:-206.7},0).wait(1).to({x:-200.8},0).wait(1).to({x:-189.4},0).wait(1).to({x:-170.2},0).wait(1).to({x:-139.6},0).wait(1).to({x:-91.7},0).wait(1).to({x:-20.9},0).wait(1).to({x:59.8},0).wait(1).to({x:121.9},0).wait(1).to({x:161.4},0).wait(1).to({x:185.5},0).wait(1).to({x:199.5},0).wait(1).to({x:206.5},0).wait(1).to({x:208.5},0).wait(43));

	// Camada 3
	this.instance_8 = new lib.funds_2();
	this.instance_8.setTransform(437.5,260,1,1,0,0,0,437.5,260);
	this.instance_8.alpha = 0.012;
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(19).to({_off:false},0).wait(1).to({alpha:0.022},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.119},0).wait(1).to({alpha:0.213},0).wait(1).to({alpha:0.337},0).wait(1).to({alpha:0.483},0).wait(1).to({alpha:0.634},0).wait(1).to({alpha:0.77},0).wait(1).to({alpha:0.876},0).wait(1).to({alpha:0.948},0).wait(1).to({alpha:0.988},0).wait(1).to({alpha:1},0).wait(115).to({alpha:0},14).to({_off:true},1).wait(39));

	// Modo de isolamento
	this.instance_9 = new lib.funds1();
	this.instance_9.setTransform(437.5,260,1,1,0,0,0,437.5,260);

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(200));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(437.5,260,875,590);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;