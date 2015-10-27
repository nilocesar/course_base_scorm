(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
var rect; // used to reference frame bounds

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



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.txt3 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(-5.2,-1.2,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-5.2,-1.2,811.2,79);
p.frameBounds = [rect];


(lib.txt2 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap10();
	this.instance.setTransform(-6.1,0.8,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-6.1,0,791.8,63);
p.frameBounds = [rect];


(lib.txt1 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-4.4,-1.8,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-4.4,-1.8,767.4,51.8);
p.frameBounds = [rect];


(lib.titulo_0 = function() {
	this.initialize();

	// Camada 2
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-3.4,6.3,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-3.4,0,321.5,143.5);
p.frameBounds = [rect];


(lib.Symbol1 = function() {
	this.initialize();

	// Layer 1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-437.5,-79);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(-437.5,-79,875,158);
p.frameBounds = [rect];


(lib.btn2_ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Camada 1
	this.instance = new lib.Bitmap8();

	this.instance_1 = new lib.Bitmap9();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// Camada 3
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EgmzAEmIAApLMBNnAAAIAAJLg");
	this.shape.setTransform(243.1,22.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-5.3,-6.8,497,59);
p.frameBounds = [rect, rect];


(lib.btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Camada 1
	this.instance = new lib.Bitmap7();

	this.instance_1 = new lib.Bitmap6();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	// hit
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("AyxEYIAAouMAljAAAIAAIug");
	this.shape.setTransform(117.4,23.7);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(-2.8,-4.3,240.5,56);
p.frameBounds = [rect, new cjs.Rectangle(-2.8,-4.3,240.9,56)];


// stage content:
(lib.EA3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_104 = function() {
		var visto = [1,1];
		this.stop();
		if(createjs.Touch.isSupported()){
			createjs.Touch.enable(this.getStage());
		}
		
		this["btn1"].on("click", 
		function() {
			//call modal
			visto[0] = 2;
			parent.course.createModal("paginas/EA3a/index.html?myParam="+ nextTela(), 875, 520, false , false);
			
			this.play();
		});
		
		this["btn2"].on("click", 
		function() {
			//call modal
			visto[1] = 2;
			parent.course.createModal("paginas/EA3b/index.html?myParam="+ nextTela(), 875, 520, false , false);
			
			this.play();
		});
		
		function nextTela(){
			if(visto[0] == 2 && visto[1] == 2){
				return 2;
			}else{
				return 1;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(104).call(this.frame_104).wait(1));

	// mascara (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("EhEWAooMAAAhRPMCIsAAAMAAABRPg");
	mask.setTransform(437.5,260);

	// Camada 4
	this.instance = new lib.titulo_0();
	this.instance.setTransform(141,107.2,1,1,0,0,0,100.5,37.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).wait(1).to({regX:149.6,regY:40.1,x:190.1,y:109.3,alpha:0.023},0).wait(1).to({y:107.4,alpha:0.106},0).wait(1).to({y:103.5,alpha:0.278},0).wait(1).to({y:97.6,alpha:0.533},0).wait(1).to({y:92.2,alpha:0.767},0).wait(1).to({y:88.9,alpha:0.911},0).wait(1).to({y:87.3,alpha:0.981},0).wait(1).to({regX:100.5,regY:37.4,x:141,y:84.2,alpha:1},0).wait(84));

	// Camada 7
	this.instance_1 = new lib.txt1();
	this.instance_1.setTransform(192.9,186.5,1,1,0,0,0,151.3,43.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.instance_1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).wait(1).to({regX:335.6,regY:20.6,x:377.2,y:163.2,alpha:0.023},0).wait(1).to({y:162.1,alpha:0.106},0).wait(1).to({y:159.9,alpha:0.278},0).wait(1).to({y:156.6,alpha:0.533},0).wait(1).to({y:153.5,alpha:0.767},0).wait(1).to({y:151.7,alpha:0.911},0).wait(1).to({y:150.7,alpha:0.981},0).wait(1).to({regX:151.3,regY:43.6,x:192.9,y:173.5,alpha:1},0).wait(79));

	// Camada 6
	this.instance_2 = new lib.txt2();
	this.instance_2.setTransform(213.6,295.3,1,1,0,0,0,174,79);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.instance_2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(43).to({_off:false},0).wait(1).to({regX:389.7,regY:26,x:429.3,y:242,alpha:0.023},0).wait(1).to({y:241.1,alpha:0.106},0).wait(1).to({y:239.2,alpha:0.278},0).wait(1).to({y:236.4,alpha:0.533},0).wait(1).to({y:233.8,alpha:0.767},0).wait(1).to({y:232.2,alpha:0.911},0).wait(1).to({y:231.5,alpha:0.981},0).wait(1).to({regX:174,regY:79,x:213.6,y:284.3,alpha:1},0).wait(54));

	// Camada 5
	this.instance_3 = new lib.txt3();
	this.instance_3.setTransform(213.6,360.2,1,1,0,0,0,174,79);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.instance_3.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({_off:false},0).wait(1).to({regX:398.8,regY:26.6,x:438.4,y:307.6,alpha:0.023},0).wait(1).to({y:306.6,alpha:0.106},0).wait(1).to({y:304.7,alpha:0.278},0).wait(1).to({y:301.9,alpha:0.533},0).wait(1).to({y:299.4,alpha:0.767},0).wait(1).to({y:297.8,alpha:0.911},0).wait(1).to({y:297,alpha:0.981},0).wait(1).to({regX:174,regY:79,x:213.6,y:349.2,alpha:1},0).wait(49));

	// Camada 8
	this.btn1 = new lib.btn1();
	this.btn1.setTransform(162.3,473.5,1,1,0,0,0,113.4,23.6);
	this.btn1.alpha = 0.012;

	this.btn1.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(85).to({y:443.5,alpha:1},11).wait(9));

	// Camada 3
	this.btn2 = new lib.btn2_();
	this.btn2.setTransform(577.2,473.5,1,1,0,0,0,239.8,23.6);
	this.btn2.alpha = 0.012;

	this.btn2.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(91).to({y:443.5,alpha:1},11).wait(3));

	// Camada 1
	this.instance_4 = new lib.Symbol1();
	this.instance_4.setTransform(437.5,603);
	this.instance_4._off = true;

	this.instance_4.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(68).to({_off:false},0).wait(1).to({y:601.8},0).wait(1).to({y:598},0).wait(1).to({y:590.5},0).wait(1).to({y:577.4},0).wait(1).to({y:556.3},0).wait(1).to({y:525.9},0).wait(1).to({y:493.7},0).wait(1).to({y:469.8},0).wait(1).to({y:454.9},0).wait(1).to({y:446.4},0).wait(1).to({y:442.2},0).wait(1).to({y:441},0).wait(25));

	// fundo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BE1E").s().p("EhEWAooMAAAhRPMCIsAAAMAAABRPg");
	this.shape.setTransform(437.5,260);

	this.shape.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(105));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(437.5,260,875,520);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;