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



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.EA4_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.txt2 = function() {
	this.initialize();

	// guide
	this.instance = new lib.Bitmap8();
	this.instance.setTransform(-4.4,-1,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.4,-1,721.9,82.1);


(lib.titulo_0 = function() {
	this.initialize();

	// Camada 2
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-4.1,5.4,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.1,0,322.1,82);


(lib.Símbolo4 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap1();

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,779,255);


(lib.Símbolo3 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlNA4QgQgUAAgiQAAgeASgVQASgVAdAAQAZAAAOAKIgKAUQgIgIgTAAQgSAAgMAPQgLAPAAAVQAAAXALANQAKAOASAAQAUAAALgPIAMAVQgPAQgeAAQgeAAgRgTgADtBHQgEgEgCgEQgDAFgIAEQgJADgJAAQgRAAgJgJQgKgIAAgQQAAgRAOgLQANgKAZAAIALABQAAgQgYAAQgOAAgJAFIgFgTQANgHARABQAYgBALALQALALAAAdIAAAWQAAAVAJAFQgEAFgDACIgJABQgFAAgEgEgAC/ApQAAAOAQABQAWAAAAgXIAAgJIgKgCQgcABAAASgAgoBHQgEgEgBgEQgEAFgIAEQgIADgJAAQgRAAgKgJQgJgIAAgQQAAgRANgLQAOgKAZAAIAKABQAAgQgXAAQgOAAgJAFIgGgTQANgHARABQAYgBALALQAMALAAAdIAAAWQAAAVAIAFQgDAFgEACIgIABQgFAAgFgEgAhWApQAAAOAQABQAWAAAAgXIAAgJIgJgCQgdABAAASgAEXBJIAAhnIAZAAIAAAKQAKgLARAAQANAAAGADIgKAVQgHgEgHAAQgJAAgHAHQgGAGAAALIAAA8gAB6BJIAAhBQAAgTgSAAQgGAAgFADQgFADgCAEIAABKIgZAAIAAhGQAAgFgEgEQgFgFgJAAQgEAAgGAEQgFADgDAEIAABJIgYAAIAAhnIARAAIAFAJQAKgLAQABQAVAAAKALQAFgFAIgEQAIgCAJAAQARgBAKAKQAJAKAAAQIAABFgAiaBJIAAhAQAAgJgGgFQgGgGgKAAQgGAAgGAEQgGADgDAEIAABJIgZAAIAAiNIAZgHIAAA0QAKgIAQAAQAUgBALALQALALAAATIAABAg");
	this.shape.setTransform(142.4,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0D0AB").s().p("A2NDCIAAmEMAsbAAAIAAGEg");
	this.shape_1.setTransform(142.2,19.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,284.5,39);


(lib.Símbolo2 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ADIBHQgEgEgCgEQgDAFgIAEQgIADgJAAQgRAAgKgIQgJgJAAgPQAAgSANgLQAOgKAZAAIAKACQAAgRgYAAQgOAAgIAFIgGgTQANgGARAAQAYAAALALQAMAKAAAdIAAAWQgBAVAJAFQgEAGgDABIgIABQgFAAgFgEgACaAqQAAAOAQAAQAWAAAAgWIAAgKIgJgBQgdAAAAATgAhLA9QgOgOAAgZQAAgXAPgPQAPgPAbAAQASAAANAKIgKASQgJgIgOAAQgNAAgJAJQgIAIAAAQQAAAhAgAAQANAAAKgJIAJATQgKAHgIABQgIACgLAAQgYAAgOgOgAi+A9QgOgOAAgZQAAgXAPgPQAPgPAWAAQAXAAANANQAOAOAAATIgCANIhLAAQABANAIAHQAIAHANAAQARAAAJgJIAJATQgNAKgaAAQgXAAgOgOgAiyAKIAzAAQgCgVgXAAQgVAAgFAVgADyBJIAAhmIAZAAIAAAJQAKgLARAAQANAAAGAEIgKAUQgGgEgIAAQgJAAgGAIQgHAGAAALIAAA7gABWBJIAAhAQAAgJgGgFQgGgGgKAAQgGAAgGAEQgHADgCAEIAABJIgZAAIAAiNIAZgGIAAAzQAJgIARAAQATAAAMALQAKAKABATIAABAgAk4BJIAAiNIBeAAIAAAXIhFAAIAAAhIAyAAIAAAUIgyAAIAABBg");
	this.shape.setTransform(142.2,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A19C8A").s().p("A2KDCIAAmEMAsVAAAIAAGEg");
	this.shape_1.setTransform(142,19.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,284,39);


(lib.Símbolo1 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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");
	this.shape.setTransform(254.5,73.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1.2,0,537.3,166.8);


(lib.funds = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.8)").s().p("EhI8AmRMAAAhMhMCR5AAAMAAABMhg");
	this.shape.setTransform(467,245);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,934,490);


(lib.fundo = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgsZAOSIAA8jMBYzAAAIAAcjg");
	this.shape.setTransform(284.2,91.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,568.4,183);


(lib.Cópiadetxt2 = function() {
	this.initialize();

	// guide
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-5.1,-2.2,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.1,-2.2,812.1,61.3);


(lib.btn = function(mode,startPosition,loop) {
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
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-0.4,-0.6,0.712,0.712);

	this.instance_1 = new lib.Bitmap5();
	this.instance_1.setTransform(-0.4,-0.6,0.712,0.712);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.4,-0.6,171.6,58.4);


(lib._01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_54 = function() {
		this.stop();
				
		var _this = this;
		var _fechar = this["fechar"];
		var _chamar = this["chamar"];
		
		
		_fechar.on("click", 
		function() {
			_this.gotoAndStop( 0 );
		});
		
		_chamar.on("click", 
		function() {
			parent.course.createModal("paginas/EA4a/index.html", 875, 520, false);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(54).call(this.frame_54).wait(1));

	// AS
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BFC5BB").s().p("ArKDDIAAmFIWUAAIAAGFgAgCgIQgRAQAAAbQAAAuAmgBQAMABAQgGIACgTQgMAJgLAAQgNAAgIgHQgFgHAAgNIAAgJQAJAFAOABQAVAAAOgKQAPgLAAgOQAAgNgJgGQgKgHgPAAQgaAAgPASgAhegJIANAAIgNA5IgBAGQAAANAGAGQAHAIALgBQARAAAJgCIAAgRQgIAEgHAAQgPAAgBgPIACgJIALgyIAdAAIACgPIgcAAIAHgeIgVAIIgEAWIgMAAgAkvgIQgRAQAAAbQAAAuApgBQALABAQgGIACgTQgMAJgLAAQgNAAgIgHQgHgHAAgNIABgJQAKAFAOABQAVAAAPgKQAOgLAAgOQAAgNgKgGQgIgHgQAAQgaAAgRASgAm1AaQgEAYAAAHQAAAYAfgBIACgNQgOAAABgMQgBgHAGgcIARhXIgTAAgAoKgHQgRARABAeQgBASALAMQAKALATgBQAPAAANgFIADgTQgNAIgOAAQgKAAgHgHQgHgIAAgNQAAgUALgOQALgMASAAQAMgBAGAGIAEgQQgIgFgQAAQgZAAgQATgAC1BPIATAAIAZiOIgGAAQgMARgiAPIgCASIAcgOgAiLAEIgCANIgKA+IATAAIALhBIACgNQAAgbgdAAQgWAAgMAQIgDgQIgSADQACAIAAAKIAAAFIgOBPIATAAIANhOQAFgEAIgEQAHgDAGAAQASAAAAAOgAl4gIIAOAAIgQBXIATAAIAThnIghAAgAllg+QgEAEAAAGQAAAFAEAEQAEAEAFAAQAGAAADgEQAEgEAAgFQAAgGgEgEQgDgDgGAAQgFAAgEADgAACAQQALgaAZAAQARAAAAAKQAAAJgKAFQgJAFgQAAQgKAAgIgDgAkoAQQAKgaAZAAQAQAAAAAKQABAJgKAFQgKAFgPAAQgKAAgHgDg");
	this.shape.setTransform(-168.5,-40.5);

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},1).wait(54));

	// Camada 6
	this.instance = new lib.Símbolo1();
	this.instance.setTransform(470,240.6,1,1,0,0,0,268,83.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(27).to({_off:false},0).wait(1).to({regX:254.5,regY:73.5,x:456.5,y:230.5,alpha:0.014},0).wait(1).to({y:229.9,alpha:0.064},0).wait(1).to({y:228.7,alpha:0.163},0).wait(1).to({y:226.8,alpha:0.324},0).wait(1).to({y:224.3,alpha:0.533},0).wait(1).to({y:222,alpha:0.727},0).wait(1).to({y:220.3,alpha:0.864},0).wait(1).to({y:219.3,alpha:0.947},0).wait(1).to({y:218.8,alpha:0.988},0).wait(1).to({regX:268,regY:83.4,x:470,y:228.6,alpha:1},0).wait(18));

	// Camada 3
	this.instance_1 = new lib.fundo();
	this.instance_1.setTransform(460.2,218.6,1.464,1.464,0,0,0,284.2,91.5);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(16).to({_off:false},0).wait(1).to({scaleX:1.46,scaleY:1.46,y:218.5,alpha:0.018},0).wait(1).to({scaleX:1.43,scaleY:1.43,alpha:0.081},0).wait(1).to({scaleX:1.37,scaleY:1.37,alpha:0.209},0).wait(1).to({scaleX:1.27,scaleY:1.27,alpha:0.414},0).wait(1).to({scaleX:1.16,scaleY:1.16,alpha:0.647},0).wait(1).to({scaleX:1.08,scaleY:1.08,alpha:0.825},0).wait(1).to({scaleX:1.03,scaleY:1.03,alpha:0.932},0).wait(1).to({scaleX:1.01,scaleY:1.01,alpha:0.985},0).wait(1).to({scaleX:1,scaleY:1,alpha:1},0).wait(30));

	// Camada 5
	this.fechar = new lib.Símbolo2();
	this.fechar.setTransform(318,305.5,1,1,0,0,0,142,19.5);
	this.fechar.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.fechar).wait(41).to({y:305.9,alpha:0.018},0).wait(1).to({y:307.4,alpha:0.081},0).wait(1).to({y:310.5,alpha:0.209},0).wait(1).to({y:315.4,alpha:0.414},0).wait(1).to({y:321,alpha:0.647},0).wait(1).to({y:325.3,alpha:0.825},0).wait(1).to({y:327.8,alpha:0.932},0).wait(1).to({y:329.1,alpha:0.985},0).wait(1).to({y:329.5,alpha:1},0).wait(6));

	// Camada 4
	this.chamar = new lib.Símbolo3();
	this.chamar.setTransform(602.2,305.5,1,1,0,0,0,142.2,19.5);
	this.chamar.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.chamar).wait(45).to({y:305.9,alpha:0.018},0).wait(1).to({y:307.4,alpha:0.081},0).wait(1).to({y:310.5,alpha:0.209},0).wait(1).to({y:315.4,alpha:0.414},0).wait(1).to({y:321,alpha:0.647},0).wait(1).to({y:325.3,alpha:0.825},0).wait(1).to({y:327.8,alpha:0.932},0).wait(1).to({y:329.1,alpha:0.985},0).wait(1).to({y:329.5,alpha:1},0).wait(2));

	// Camada 2
	this.instance_2 = new lib.funds();
	this.instance_2.setTransform(460.9,1.5,1,0.027,0,0,0,466.9,245);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(1).to({_off:false},0).wait(1).to({regX:467,scaleY:0.04,x:461,y:3.8},0).wait(1).to({scaleY:0.08,y:11.7},0).wait(1).to({scaleY:0.16,y:26.8},0).wait(1).to({scaleY:0.3,y:51.5},0).wait(1).to({scaleY:0.49,y:86.8},0).wait(1).to({scaleY:0.72,y:128.8},0).wait(1).to({scaleY:0.94,y:168.2},0).wait(1).to({scaleY:1.1,y:198.5},0).wait(1).to({scaleY:1.21,y:219},0).wait(1).to({scaleY:1.28,y:231.6},0).wait(1).to({scaleY:1.32,y:238.2},0).wait(1).to({regX:466.9,scaleY:1.33,x:460.9,y:240},0).wait(42));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-240,-60,984.4,385);


// stage content:



(lib.EA4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_89 = function() {
		this.stop();
		if(createjs.Touch.isSupported()){
			createjs.Touch.enable(this.getStage());
		}
		
		var _this=this;
		
		
		if(  parent.course.getData("dialogo3") != "1" ){
			this["btn1"].on("click", 
			function() {
				_this["pop"].play();
			});
		}
		else{
			
			setTimeout(function(){
				
				_this["btn1"].gotoAndStop(1);
				
			} , 1000 * 0.2 );
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(89).call(this.frame_89).wait(1));

	// Layer 1
	this.pop = new lib._01();
	this.pop.setTransform(71.5,19.5,1,1,0,0,0,71.5,19.5);
	this.pop._off = true;

	this.timeline.addTween(cjs.Tween.get(this.pop).wait(87).to({_off:false},0).wait(3));

	// Camada 6
	this.instance = new lib.titulo_0();
	this.instance.setTransform(172,176.3,1,1,0,0,0,102.5,41.5);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(25).to({_off:false},0).wait(1).to({regX:104.1,regY:41.4,x:173.6,y:175.7,alpha:0.014},0).wait(1).to({y:174.2,alpha:0.064},0).wait(1).to({y:171.3,alpha:0.163},0).wait(1).to({y:166.4,alpha:0.324},0).wait(1).to({y:160.2,alpha:0.533},0).wait(1).to({y:154.3,alpha:0.727},0).wait(1).to({y:150.2,alpha:0.864},0).wait(1).to({y:147.8,alpha:0.947},0).wait(1).to({y:146.5,alpha:0.988},0).wait(1).to({regX:102.5,regY:41.5,x:172,y:146.3,alpha:1},0).wait(55));

	// Camada 8
	this.instance_1 = new lib.txt2();
	this.instance_1.setTransform(244.6,290.3,1,1,0,0,0,174,79);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(52).to({_off:false},0).wait(1).to({regX:356.6,regY:39.9,x:427.2,y:250.9,alpha:0.014},0).wait(1).to({y:249.9,alpha:0.064},0).wait(1).to({y:247.9,alpha:0.163},0).wait(1).to({y:244.7,alpha:0.324},0).wait(1).to({y:240.5,alpha:0.533},0).wait(1).to({y:236.6,alpha:0.727},0).wait(1).to({y:233.9,alpha:0.864},0).wait(1).to({y:232.2,alpha:0.947},0).wait(1).to({y:231.4,alpha:0.988},0).wait(1).to({regX:174,regY:79,x:244.6,y:270.3,alpha:1},0).wait(28));

	// Camada 7
	this.instance_2 = new lib.Cópiadetxt2();
	this.instance_2.setTransform(245.3,374.3,1,1,0,0,0,174,79);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(56).to({_off:false},0).wait(1).to({regX:350.1,regY:25.5,x:421.4,y:320.5,alpha:0.014},0).wait(1).to({y:319.5,alpha:0.064},0).wait(1).to({y:317.5,alpha:0.163},0).wait(1).to({y:314.3,alpha:0.324},0).wait(1).to({y:310.1,alpha:0.533},0).wait(1).to({y:306.3,alpha:0.727},0).wait(1).to({y:303.5,alpha:0.864},0).wait(1).to({y:301.9,alpha:0.947},0).wait(1).to({y:301,alpha:0.988},0).wait(1).to({regX:174,regY:79,x:245.3,y:354.3,alpha:1},0).wait(24));

	// Camada 9
	this.btn1 = new lib.btn();
	this.btn1.setTransform(434,416,1,1,0,0,0,85.2,28.5);
	this.btn1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(87).to({_off:false},0).wait(3));

	// Camada 5
	this.instance_3 = new lib.btn();
	this.instance_3.setTransform(434,446,1,1,0,0,0,85.2,28.5);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75).to({_off:false},0).wait(1).to({regX:85.4,regY:28.6,x:434.2,y:445.7,alpha:0.012},0).wait(1).to({y:444.5,alpha:0.051},0).wait(1).to({y:442.2,alpha:0.13},0).wait(1).to({y:438.3,alpha:0.258},0).wait(1).to({y:433,alpha:0.436},0).wait(1).to({y:427.2,alpha:0.627},0).wait(1).to({y:422.5,alpha:0.784},0).wait(1).to({y:419.3,alpha:0.892},0).wait(1).to({y:417.3,alpha:0.957},0).wait(1).to({y:416.3,alpha:0.99},0).wait(1).to({regX:85.2,regY:28.5,x:434,y:416,alpha:1},0).to({_off:true},1).wait(3));

	// fade
	this.instance_4 = new lib.Símbolo4();
	this.instance_4.setTransform(434.1,219.5,1,1,0,0,0,389.5,127.5);
	this.instance_4.alpha = 0.012;
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(11).to({_off:false},0).to({alpha:1},11).wait(68));

	// Camada 1
	this.instance_5 = new lib.EA4_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(90));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(437.5,260,875,520);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;