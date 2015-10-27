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



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
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


(lib.Símbolo1 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EhEWAMWIAA4rMCIsAAAIAAYrg");
	this.shape.setTransform(437.5,79);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = rect = new cjs.Rectangle(0,0,875,158.1);
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
(lib.CA3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var bodys = document.querySelectorAll("body");
		    
		    //REMOVENDO BORDAS
		    for(var i=0; i<bodys.length;i++){
		        bodys[i].style.outline = "0";
		        bodys[i].style.padding = "0";
		        bodys[i].style.margin = "0";
		        bodys[i].style.border = "none";
		        bodys[i].style.overflow = "hidden";
		        bodys[i].style.background = "transparent";
		    }
	}
	this.frame_105 = function() {
		var visto = [1,1];
		this.stop();
		if(createjs.Touch.isSupported()){
			createjs.Touch.enable(this.getStage());
		}
		
		var _this = this;
		var constru = this["construcao"];	
		
		this["btn1"].on("click", 
		function() {
			//call modal
			visto[0] = 2;
			parent.course.createModal("paginas/CA3a/index.html?myParam="+ nextTela(), 875, 520, false , false);
			
			this.play();
			
		});
		
		this["btn2"].on("click", 
		function() {
			//call modal
			visto[1] = 2;
			parent.course.createModal("paginas/CA3b/index.html?myParam="+ nextTela(), 875, 520, false , false);
			
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
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(105).call(this.frame_105).wait(1));

	// Camada 4
	this.instance = new lib.titulo_0();
	this.instance.setTransform(141,107.2,1,1,0,0,0,100.5,37.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(13).to({_off:false},0).wait(1).to({regX:149.6,regY:40.1,x:190.1,y:109.3,alpha:0.023},0).wait(1).to({y:107.4,alpha:0.106},0).wait(1).to({y:103.5,alpha:0.278},0).wait(1).to({y:97.6,alpha:0.533},0).wait(1).to({y:92.2,alpha:0.767},0).wait(1).to({y:88.9,alpha:0.911},0).wait(1).to({y:87.3,alpha:0.981},0).wait(1).to({regX:100.5,regY:37.4,x:141,y:84.2,alpha:1},0).wait(85));

	// Camada 7
	this.instance_1 = new lib.txt1();
	this.instance_1.setTransform(192.9,186.5,1,1,0,0,0,151.3,43.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(18).to({_off:false},0).wait(1).to({regX:335.6,regY:20.6,x:377.2,y:163.2,alpha:0.023},0).wait(1).to({y:162.1,alpha:0.106},0).wait(1).to({y:159.9,alpha:0.278},0).wait(1).to({y:156.6,alpha:0.533},0).wait(1).to({y:153.5,alpha:0.767},0).wait(1).to({y:151.7,alpha:0.911},0).wait(1).to({y:150.7,alpha:0.981},0).wait(1).to({regX:151.3,regY:43.6,x:192.9,y:173.5,alpha:1},0).wait(80));

	// Camada 6
	this.instance_2 = new lib.txt2();
	this.instance_2.setTransform(213.6,295.3,1,1,0,0,0,174,79);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(43).to({_off:false},0).wait(1).to({regX:389.7,regY:26,x:429.3,y:242,alpha:0.023},0).wait(1).to({y:241.1,alpha:0.106},0).wait(1).to({y:239.2,alpha:0.278},0).wait(1).to({y:236.4,alpha:0.533},0).wait(1).to({y:233.8,alpha:0.767},0).wait(1).to({y:232.2,alpha:0.911},0).wait(1).to({y:231.5,alpha:0.981},0).wait(1).to({regX:174,regY:79,x:213.6,y:284.3,alpha:1},0).wait(55));

	// Camada 5
	this.instance_3 = new lib.txt3();
	this.instance_3.setTransform(213.6,360.2,1,1,0,0,0,174,79);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(48).to({_off:false},0).wait(1).to({regX:398.8,regY:26.6,x:438.4,y:307.6,alpha:0.023},0).wait(1).to({y:306.6,alpha:0.106},0).wait(1).to({y:304.7,alpha:0.278},0).wait(1).to({y:301.9,alpha:0.533},0).wait(1).to({y:299.4,alpha:0.767},0).wait(1).to({y:297.8,alpha:0.911},0).wait(1).to({y:297,alpha:0.981},0).wait(1).to({regX:174,regY:79,x:213.6,y:349.2,alpha:1},0).wait(50));

	// Camada 8
	this.btn1 = new lib.btn1();
	this.btn1.setTransform(162.3,473.5,1,1,0,0,0,113.4,23.6);
	this.btn1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(86).to({y:443.5,alpha:1},11).wait(9));

	// Camada 3
	this.btn2 = new lib.btn2_();
	this.btn2.setTransform(577.2,473.5,1,1,0,0,0,239.8,23.6);
	this.btn2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(92).to({y:443.5,alpha:1},11).wait(3));

	// Camada 1
	this.instance_4 = new lib.Símbolo1();
	this.instance_4.setTransform(437.5,607,1,1,0,0,0,437.5,79);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(67).to({_off:false},0).wait(1).to({y:606.1},0).wait(1).to({y:603.2},0).wait(1).to({y:597.6},0).wait(1).to({y:588.3},0).wait(1).to({y:574.1},0).wait(1).to({y:553.5},0).wait(1).to({y:526.7},0).wait(1).to({y:498.9},0).wait(1).to({y:476.6},0).wait(1).to({y:461.1},0).wait(1).to({y:451},0).wait(1).to({y:445},0).wait(1).to({y:441.9},0).wait(1).to({y:441},0).wait(25));

	// fundo
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F4BE1E").s().p("EhEWAooMAAAhRPMCIsAAAMAAABRPg");
	this.shape.setTransform(437.5,260);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(106));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(437.5,260,875,520);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, new cjs.Rectangle(437.5,260,875,686), new cjs.Rectangle(437.5,260,875,685.2), new cjs.Rectangle(437.5,260,875,682.3), new cjs.Rectangle(437.5,260,875,676.7), new cjs.Rectangle(437.5,260,875,667.4), new cjs.Rectangle(437.5,260,875,653.2), new cjs.Rectangle(437.5,260,875,632.6), new cjs.Rectangle(437.5,260,875,605.7), new cjs.Rectangle(437.5,260,875,578), new cjs.Rectangle(437.5,260,875,555.6), new cjs.Rectangle(437.5,260,875,540.1), new cjs.Rectangle(437.5,260,875,530.1), new cjs.Rectangle(437.5,260,875,524.1), new cjs.Rectangle(437.5,260,875,520.9), rect=new cjs.Rectangle(437.5,260,875,520), rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;