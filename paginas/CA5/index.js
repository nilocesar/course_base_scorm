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



(lib.Bitmap20 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap21 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap9 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.txt1 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap18();
	this.instance.setTransform(-2.8,-1.4,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-2.8,-1.4,765.8,50.4);


(lib.titulo_0 = function() {
	this.initialize();

	// Camada 2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AlhEDQglgUAAgfQAAgZAagTQAagTAtgEIAAgCQgqgEgSgMQgUgNABgZQgBgSARgLQAQgMApgJIAAgBQgngMgSgTQgSgSAAgdQgBgoAhgaQAggbAyAAIAaABIAIAAIB2AAIAAApIg5gEIgCABQAfAaAAAgQAAAjgeAWQggAYgvAAQgoAAgQAFQgRAGAAAMQAAAKAMAFQAMAFAqAEQA9AGAbALQAcALAOATQAOAUgBAUQAAAtgpAdQgpAdhFAAQg5AAgkgTgAk+CeQgRAJAAAQQAAAaAnAQQAoAPAzAAQAZAAARgKQAQgLAAgQQAAgZglgPQglgPgzAAQgdAAgRAKgAkzguQABAhAOASQAOATAXAAQAYAAANgTQAOgRAAgkQAAgigOgTQgMgTgXAAQg2AAAABKgAMtBGQgogjAAgyQAAghASgdQASgdAggPQAfgQAqAAQBAAAAnAjQAnAjAAA0QAAAygnAjQgnAjhAAAQg+AAgngjgANhhcQgRAcAAA1QAAAtATAbQARAcAeAAQAgAAARgcQARgcAAgwQABgzgSgbQgRgcggAAQggAAgRAdgAF2BXQgUgTAAgjIAAiPIgpAAIAAgLQAugcA0hDIALAAIAABYIBLAAIAAASIhLAAIAACAQAAAfAKAOQAKANAWAAQARAAAQgSIAGAHQgXAogxAAQglAAgUgSgACkBmQgTgFgHAAQgOAAgIAIIgKAAIAAhXIAKAAQAjBHAvAAQARAAAMgJQAMgKAAgOQAAgOgLgLQgLgLgkgOQgugQgOgRQgPgRAAgYQAAgdAWgUQAWgUAjAAQANAAAgAFIAPACQAGAAAIgHIAKAAIAABHIgKAAQgKgagTgOQgSgPgXAAQgQAAgLAHQgLAHAAALQABALAIAIQAKAIAfAMQAxATAQATQARATAAAbQAAAhgZAXQgZAWggAAQgTAAgSgDgApsBHQgjgjAAgxQAAg1AkgkQAkgjA1AAQAxAAAgAcQAgAbAHAvIisAAIgBAJQAAAsAYAdQAXAdAiAAQAxAAAggxIALAAQgQAkghAVQggAVgpAAQg1AAgjgigAo4hlQgNATgCAhIBjAAQgBgggOgUQgPgUgUAAQgVAAgNAUgAIKBgIAAgKQAWgFAJgJQAHgIAAgUIAAh1QAAgWgJgKQgLgLgVgCIAAgKIBjgJIAKAAIAABIIABAAQAghIArAAQAYAAAQATIgPBFQgfgegTAAQgPAAgLAHQgMAHgNATIAABaQAAAWAIAIQAIAIAWAEIAAAKgAhIBgIAAgKQAWgEAJgJQAGgIAAgWIAAh3QABgVgIgIQgIgIgZgFIAAgKIBhgJIAKAAIAAC5QgBAiAlAEIAAAKgAsPBgQgUgXgfg+QgWgogKgPQgLgOgKgFQgMgGghAAIAABqQAAAXAKALQAKALAZAEIAAAKIioAAIAAgKQAtgEAAgpIAAjrQAAgZgJgJQgJgJgbgFIAAgLICoAAQBBAAAkAXQAjAYAAApQAAAfgSAVQgTAWgiAKIAAABQAMADAPASQAOARAbAxQAbAxAMAOQAMANAVADIAAAKgAukhZIAQABQArAAASgSQAUgSAAgnQAAhGhKAAIgXAAgAgcjTQgLgLAAgQQAAgQALgMQALgLARAAQAOAAALALQAMALAAARQAAAQgMAMQgLALgOAAQgRAAgLgMg");
	this.shape.setTransform(109.2,41.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,318,143.5);


(lib.Símbolo2 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-0.5,-0.6,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.6,131,66.2);


(lib.Símbolo1 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-0.5,-0.6,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.6,131,66.2);


(lib.CópiadeSímbolo1 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-0.5,-0.6,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.5,-0.6,131,66.2);


(lib._2 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap20();
	this.instance.setTransform(-8.7,-1.1,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-8.7,-1.1,804.6,84.1);


(lib._1 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap19();
	this.instance.setTransform(-7.9,-2.8,0.712,0.712);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhXAAIAagYIAoAoIBThUIAaAaIhuBvg");
	this.shape.setTransform(7,13.1);

	this.addChild(this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.9,-2.8,784.9,60.8);


// stage content:
(lib.CA5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_129 = function() {
		var visto = [1,1,1];
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
			parent.course.createModal("paginas/CA5a/index.html?myParam="+ nextTela(), 875, 520, false , false);
			
		});
		
		this["btn2"].on("click", 
		function() {
			//call modal
			visto[1] = 2;
			parent.course.createModal("paginas/CA5b/index.html?myParam="+ nextTela(), 875, 520, false , false);
			
		});
		
		this["btn3"].on("click", 
		function() {
			//call modal
			visto[2] = 2;
			parent.course.createModal("paginas/CA5c/index.html?myParam="+ nextTela(), 875, 520, false , false);
			
		});
		
		
		function nextTela(){
			if(visto[0] == 2 && visto[1] == 2 && visto[2] == 2){
				return 2;
			}else{
				return 1;
			}
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(129).call(this.frame_129).wait(1));

	// Camada 4
	this.instance = new lib.titulo_0();
	this.instance.setTransform(142,92.8,1,1,0,0,0,100.5,37.4);
	this.instance.alpha = 0;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(40).to({_off:false},0).wait(1).to({regX:109.2,regY:41.5,x:150.7,y:96.7,alpha:0.012},0).wait(1).to({y:96,alpha:0.054},0).wait(1).to({y:94.6,alpha:0.133},0).wait(1).to({y:92.5,alpha:0.258},0).wait(1).to({y:89.6,alpha:0.43},0).wait(1).to({y:86.3,alpha:0.626},0).wait(1).to({y:83.3,alpha:0.799},0).wait(1).to({y:81.3,alpha:0.918},0).wait(1).to({y:80.2,alpha:0.981},0).wait(1).to({regX:100.5,regY:37.4,x:142,y:75.8,alpha:1},0).wait(80));

	// Camada 3
	this.instance_1 = new lib.txt1();
	this.instance_1.setTransform(194.2,199.2,1,1,0,0,0,151.3,43.6);
	this.instance_1.alpha = 0;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(50).to({_off:false},0).wait(1).to({regX:341.4,regY:18.2,x:384.3,y:173.5,alpha:0.012},0).wait(1).to({y:172.8,alpha:0.054},0).wait(1).to({y:171.5,alpha:0.133},0).wait(1).to({y:169.4,alpha:0.258},0).wait(1).to({y:166.4,alpha:0.43},0).wait(1).to({y:163.1,alpha:0.626},0).wait(1).to({y:160.2,alpha:0.799},0).wait(1).to({y:158.1,alpha:0.918},0).wait(1).to({y:157.1,alpha:0.981},0).wait(1).to({regX:151.3,regY:43.6,x:194.2,y:182.2,alpha:1},0).wait(70));

	// Camada 7
	this.instance_2 = new lib._1();
	this.instance_2.setTransform(221,288.9,1,1,0,0,0,174,79);
	this.instance_2.alpha = 0;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(69).to({_off:false},0).wait(1).to({regX:356.3,regY:25.7,x:403.3,y:235.4,alpha:0.012},0).wait(1).to({y:234.7,alpha:0.054},0).wait(1).to({y:233.3,alpha:0.133},0).wait(1).to({y:231.2,alpha:0.258},0).wait(1).to({y:228.3,alpha:0.43},0).wait(1).to({y:225,alpha:0.626},0).wait(1).to({y:222,alpha:0.799},0).wait(1).to({y:220,alpha:0.918},0).wait(1).to({y:218.9,alpha:0.981},0).wait(1).to({regX:174,regY:79,x:221,y:271.9,alpha:1},0).wait(51));

	// Camada 6
	this.instance_3 = new lib._2();
	this.instance_3.setTransform(221,350.2,1,1,0,0,0,174,79);
	this.instance_3.alpha = 0;
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(75).to({_off:false},0).wait(1).to({regX:393.6,regY:36.3,x:440.6,y:307.3,alpha:0.012},0).wait(1).to({y:306.6,alpha:0.054},0).wait(1).to({y:305.2,alpha:0.133},0).wait(1).to({y:303.1,alpha:0.258},0).wait(1).to({y:300.2,alpha:0.43},0).wait(1).to({y:296.9,alpha:0.626},0).wait(1).to({y:293.9,alpha:0.799},0).wait(1).to({y:291.9,alpha:0.918},0).wait(1).to({y:290.8,alpha:0.981},0).wait(1).to({regX:174,regY:79,x:221,y:333.2,alpha:1},0).wait(45));

	// Camada 10 Cópia
	this.btn1 = new lib.Símbolo1();
	this.btn1.setTransform(227.5,474.5,1,1,0,0,0,65,32.5);
	this.btn1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.btn1).wait(101).to({y:484.5},0).wait(1).to({y:484.1,alpha:0.01},0).wait(1).to({y:483.1,alpha:0.044},0).wait(1).to({y:481.2,alpha:0.107},0).wait(1).to({y:478.2,alpha:0.207},0).wait(1).to({y:474.1,alpha:0.347},0).wait(1).to({y:468.9,alpha:0.518},0).wait(1).to({y:463.6,alpha:0.694},0).wait(1).to({y:459.3,alpha:0.837},0).wait(1).to({y:456.4,alpha:0.933},0).wait(1).to({y:454.9,alpha:0.985},0).wait(1).to({y:454.5,alpha:1},0).wait(18));

	// Camada 10
	this.btn2 = new lib.CópiadeSímbolo1();
	this.btn2.setTransform(437.5,474.5,1,1,0,0,0,65,32.5);
	this.btn2.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.btn2).wait(107).to({y:484.5},0).wait(1).to({y:484.1,alpha:0.01},0).wait(1).to({y:483.1,alpha:0.044},0).wait(1).to({y:481.2,alpha:0.107},0).wait(1).to({y:478.2,alpha:0.207},0).wait(1).to({y:474.1,alpha:0.347},0).wait(1).to({y:468.9,alpha:0.518},0).wait(1).to({y:463.6,alpha:0.694},0).wait(1).to({y:459.3,alpha:0.837},0).wait(1).to({y:456.4,alpha:0.933},0).wait(1).to({y:454.9,alpha:0.985},0).wait(1).to({y:454.5,alpha:1},0).wait(12));

	// Camada 9
	this.btn3 = new lib.Símbolo2();
	this.btn3.setTransform(647.5,474.5,1,1,0,0,0,65,32.5);
	this.btn3.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.btn3).wait(113).to({y:474.2,alpha:0.01},0).wait(1).to({y:473.6,alpha:0.044},0).wait(1).to({y:472.3,alpha:0.107},0).wait(1).to({y:470.3,alpha:0.207},0).wait(1).to({y:467.5,alpha:0.347},0).wait(1).to({y:464.1,alpha:0.518},0).wait(1).to({y:460.6,alpha:0.694},0).wait(1).to({y:457.7,alpha:0.837},0).wait(1).to({y:455.8,alpha:0.933},0).wait(1).to({y:454.8,alpha:0.985},0).wait(1).to({y:454.5,alpha:1},0).wait(7));

	// Layer 3
	this.instance_4 = new lib.Bitmap1();
	this.instance_4.setTransform(-1118.6,-1.6);

	this.instance_5 = new lib.Bitmap2();
	this.instance_5.setTransform(-975.3,-1.6);

	this.instance_6 = new lib.Bitmap3();
	this.instance_6.setTransform(-933.7,-1.6);

	this.instance_7 = new lib.Bitmap4();
	this.instance_7.setTransform(-832,-1.6);

	this.instance_8 = new lib.Bitmap5();
	this.instance_8.setTransform(-714.1,-1.6);

	this.instance_9 = new lib.Bitmap6();
	this.instance_9.setTransform(-610,-1.6);

	this.instance_10 = new lib.Bitmap7();
	this.instance_10.setTransform(-524.4,-1.6);

	this.instance_11 = new lib.Bitmap8();
	this.instance_11.setTransform(-450.5,-1.6);

	this.instance_12 = new lib.Bitmap9();
	this.instance_12.setTransform(-385.8,-1.6);

	this.instance_13 = new lib.Bitmap10();
	this.instance_13.setTransform(-337.2,-1.6);

	this.instance_14 = new lib.Bitmap11();
	this.instance_14.setTransform(-274.8,-1.6);

	this.instance_15 = new lib.Bitmap12();
	this.instance_15.setTransform(-235.7,-1.6);

	this.instance_16 = new lib.Bitmap13();
	this.instance_16.setTransform(-201,-1.6);

	this.instance_17 = new lib.Bitmap14();
	this.instance_17.setTransform(-161.8,-1.6);

	this.instance_18 = new lib.Bitmap15();
	this.instance_18.setTransform(-124.8,-1.6);

	this.instance_19 = new lib.Bitmap16();
	this.instance_19.setTransform(-101.4,-1.6);

	this.instance_20 = new lib.Bitmap17();
	this.instance_20.setTransform(-6.4,-1.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_4}]},21).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).wait(93));

	// Layer 3
	this.instance_21 = new lib.Bitmap21();

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(130));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(437.5,260,875,520);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;