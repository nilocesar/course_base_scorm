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



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
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



(lib.fechar = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.help1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.help2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.help3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.help4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.pesquisa = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.txt_btn = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(2.8,6.3);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,297,36.4);


(lib.help4_1 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap10();
	this.instance.setTransform(-4,-1.8,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4,-1.8,187.3,191.4);


(lib.help3_1 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap9();
	this.instance.setTransform(-0.7,4,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-0.7,0,179.7,189.5);


(lib.help2_1 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap8();
	this.instance.setTransform(-5.3,-0.9,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.3,-0.9,184.4,190.5);


(lib.help1_1 = function() {
	this.initialize();

	// Camada 1 Cópia
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(-6,-0.8,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-6,-0.8,185.1,190.4);


(lib.btn = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.txt_btn();
	this.instance.setTransform(173.7,26,1,1,0,0,0,148.5,18.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ArejWIW9AAIAAGtI29AAg");
	this.shape.setTransform(73.5,21.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F4BE1E").s().p("AreDXIAAmtIW8AAIAAGtg");
	this.shape_1.setTransform(73.5,21.5);

	this.addChild(this.shape_1,this.shape,this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,149,45.1);


// stage content:
(lib.AA2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
		if(createjs.Touch.isSupported()){
			createjs.Touch.enable(this.getStage());
		}
		
		
		
		if( parent.course.getData( "menu" ) == "init" ){
			this["avancar"].addEventListener("click", 
			function() {
				parent.course.nextScreen();
			});
		}
		else
		{
			parent.course.setData( "menu" , "init" );
			this["avancar"].alpha = 0;
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// Layer 3
	this.avancar = new lib.btn();
	this.avancar.setTransform(747.8,479.9,1,1,0,0,0,73.5,21.5);

	this.timeline.addTween(cjs.Tween.get(this.avancar).wait(1));

	// Camada 1
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(547.3,58.2,0.712,0.712);

	this.instance_1 = new lib.pesquisa();
	this.instance_1.setTransform(491.3,82.5);

	this.instance_2 = new lib.Bitmap3();
	this.instance_2.setTransform(147.2,87,0.712,0.712);

	this.instance_3 = new lib.fechar();
	this.instance_3.setTransform(90.8,94.8);

	this.instance_4 = new lib.help4_1();
	this.instance_4.setTransform(898.8,288,1,1,0,0,0,250.5,31.8);

	this.instance_5 = new lib.help3_1();
	this.instance_5.setTransform(696.5,288,1,1,0,0,0,250.5,31.8);

	this.instance_6 = new lib.help2_1();
	this.instance_6.setTransform(494.2,288,1,1,0,0,0,250.5,31.8);

	this.instance_7 = new lib.help1_1();
	this.instance_7.setTransform(291.9,288,1,1,0,0,0,250.5,31.8);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AljDyIAAgJIABAAQAkgBAQgTQAPgUAAgtIAAjRQAAgQgJgHQgJgHgWgDIAAgKIBegJIAKAAIAADxQAAA/geAbQgdAagxABQgOAAgKgDgAJwBrQgMgIgIgPIgFAFQgdAYgmAAQgaAAgTgPQgSgRAAgXQAAgXASgPQASgPA7gNQAcgIAMgFQAAgdgMgNQgNgNgbAAQgrAAgVAjIgIAAQAJgiAYgTQAZgSAlgBQAqAAAZAVQAaAVAAAmIAABhQAAAcAMAAQAOAAADgTIAJAAQgBATgOALQgNAKgXAAQgUAAgLgGgAIkATQgNANAAAUQAAARAIALQAIALANAAQASAAAWgXIAAhOQgqARgOAMgAAZA+IgBAAQggAzgyAAQghABgTgSQgSgRAAgeIAAhrQAAgSgHgIQgHgHgTgDIAAgKIBXgJIAJAAIAACaQAAASAKAJQALAKASAAQAQAAAKgIQALgJAOgVIAAhoQAAgZgfgFIAAgKIBVgJIAJAAIAACnQAAAUAHAJQAGAHAVAFIAAAKIhhAIgAElBpQhBAAgjgdQgjgdAAgxQAAgxAfgfQAfgfAyAAQArAAAgAWIAAhhQAAgVgLgKQgMgIgdgBIAAgKIB0gGIAAEjQAAAaAHAKQAIAIAbAEIAAAKgAD0hJQgQAZAAArQAAAsAWAaQAXAbAiAAQAWAAAIgKQAIgLAAgbIAAhsQgYghgjAAQgbAAgPAYgAn5BpIAAgKQAUgEAJgFQAIgGAAgJQAAgJgGgRIgTgwIh1AAIgQAqQgGAQAAAKQAAAWAgAIIAAAKIhpAAIAAgKQATgDAOgRQAOgQAOgmIBej6IAtAAIBkEEQANAjAOAOQANAOAVABIAAAKgApYgaIBiAAIgyiFgAkYi1QgLgLAAgPQAAgPALgLQAKgLAQAAQAPAAAKALQALALAAAPQAAAPgLALQgKALgPAAQgQAAgKgLg");
	this.shape.setTransform(112.8,48.3);

	this.instance_8 = new lib.help4();
	this.instance_8.setTransform(707,194.9);

	this.instance_9 = new lib.help3();
	this.instance_9.setTransform(507,194.9);

	this.instance_10 = new lib.help2();
	this.instance_10.setTransform(306,194.9);

	this.instance_11 = new lib.help1();
	this.instance_11.setTransform(96,194.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_11},{t:this.instance_10},{t:this.instance_9},{t:this.instance_8},{t:this.shape},{t:this.instance_7},{t:this.instance_6},{t:this.instance_5},{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	// Camada 2
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("EhEWAUiMAAAgpEMCItAAAMAAAApEg");
	this.shape_1.setTransform(437.5,308.6);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	// fundo
	this.instance_12 = new lib.Bitmap1();

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(437.5,260,875.1,520);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;