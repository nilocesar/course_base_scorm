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



(lib.BA1_1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.BA1_blur = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap1 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap2 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap3 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap4 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap5 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap6 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap7 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.Bitmap8 = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.txt1 = function() {
	this.initialize();

	// Camada 1 Cópia
	this.instance = new lib.Bitmap1();
	this.instance.setTransform(-5.5,-1.3,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.5,-1.3,333.6,151.7);


(lib.titulo = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap2();
	this.instance.setTransform(-5.8,-2,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-5.8,-2,157.8,72.9);


(lib.Símbolo4 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap4();
	this.instance.setTransform(-7.8,-7.8,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.8,-7.8,267,81.9);


(lib.Símbolo3 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap5();
	this.instance.setTransform(-9.2,-7.1,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-9.2,-7.1,306.2,54.1);


(lib.Símbolo2 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap3();
	this.instance.setTransform(-7.1,-7.9,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-7.1,-7.9,309.7,79.1);


(lib.Símbolo1 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.698)").s().p("EggLAenMAAAg9NMBAXAAAMAAAA9Ng");
	this.shape.setTransform(206,196);

	// Camada 2
	this.instance = new lib.BA1_blur();
	this.instance.setTransform(0,-10.6);

	this.addChild(this.instance,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-10.6,412,402.5);


(lib._3 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap8();
	this.instance.setTransform(48.6,-4.9,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-4.9,299,38.5);


(lib._2 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap7();
	this.instance.setTransform(31.2,-1.6,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,-1.6,299,39.2);


(lib._1 = function() {
	this.initialize();

	// Camada 1
	this.instance = new lib.Bitmap6();
	this.instance.setTransform(-4.5,-0.9,0.712,0.712);

	this.addChild(this.instance);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-4.5,-0.9,306.2,37.8);


(lib.btn3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Camada 1
	this.instance = new lib._3();
	this.instance.setTransform(135.6,29.2,1,1,0,0,0,123,15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A5NkrMAybAAAIAAJXMgybAAAg");
	this.shape.setTransform(161.4,30.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,106,68,0.8)").s().p("A5NEsIAApXMAybAAAIAAJXg");
	this.shape_1.setTransform(161.4,30.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.8)").s().p("A5NEsIAApXMAybAAAIAAJXg");
	this.shape_2.setTransform(161.4,30.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B2C900").s().p("AiDAAIAoglIA6A9IB+h9IAnAmIimCmg");
	this.shape_3.setTransform(315.4,48.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006A44").s().p("A5NEsIAApXMAybAAAIAAJXg");
	this.shape_4.setTransform(161.4,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,324.8,62.2);


(lib.btn2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Camada 1
	this.instance = new lib._2();
	this.instance.setTransform(134.2,28,1,1,0,0,0,123,15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A5NkrMAybAAAIAAJXMgybAAAg");
	this.shape.setTransform(161.4,30.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,106,68,0.8)").s().p("A5NEsIAApXMAybAAAIAAJXg");
	this.shape_1.setTransform(161.4,30.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.8)").s().p("A5NEsIAApXMAybAAAIAAJXg");
	this.shape_2.setTransform(161.4,30.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B2C900").s().p("AiDAAIAoglIA6A9IB+h9IAnAmIimCmg");
	this.shape_3.setTransform(315.4,48.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006A44").s().p("A5NEsIAApXMAybAAAIAAJXg");
	this.shape_4.setTransform(161.4,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,324.8,62.2);


(lib.btn1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Camada 3
	this.instance = new lib._1();
	this.instance.setTransform(136.9,29.2,1,1,0,0,0,123,15.9);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(3));

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("A5NkrMAybAAAIAAJXMgybAAAg");
	this.shape.setTransform(161.4,30.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,106,68,0.8)").s().p("A5NEsIAApXMAybAAAIAAJXg");
	this.shape_1.setTransform(161.4,30.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(204,204,204,0.8)").s().p("A5NEsIAApXMAybAAAIAAJXg");
	this.shape_2.setTransform(161.4,30.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#B2C900").s().p("AiDAAIAoglIA6A9IB+h9IAnAmIimCmg");
	this.shape_3.setTransform(315.4,48.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006A44").s().p("A5NEsIAApXMAybAAAIAAJXg");
	this.shape_4.setTransform(161.4,30.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_2},{t:this.shape}]},1).to({state:[{t:this.shape_4},{t:this.shape},{t:this.shape_3}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,324.8,62.2);


(lib._03 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Camada 1
	this.instance = new lib.Símbolo3();
	this.instance.setTransform(144.8,41.1,1,1,0,0,0,144.8,21.1);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:143.9,regY:20,x:143.9,y:39.9,alpha:0.017},0).wait(1).to({y:39.5,alpha:0.034},0).wait(1).to({y:38.9,alpha:0.068},0).wait(1).to({y:37.8,alpha:0.122},0).wait(1).to({y:36,alpha:0.207},0).wait(1).to({y:33.6,alpha:0.33},0).wait(1).to({y:30.3,alpha:0.49},0).wait(1).to({y:27,alpha:0.655},0).wait(1).to({y:24.3,alpha:0.788},0).wait(1).to({y:22.4,alpha:0.88},0).wait(1).to({y:21.2,alpha:0.94},0).wait(1).to({y:20.5,alpha:0.976},0).wait(1).to({y:20.1,alpha:0.995},0).wait(1).to({regX:144.8,regY:21.1,x:144.8,y:21.1,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-9.2,12.9,306.2,54.1);


(lib._02 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Camada 1
	this.instance = new lib.Símbolo4();
	this.instance.setTransform(123,50.8,1,1,0,0,0,123,30.8);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:125.7,regY:33.1,x:125.7,y:53,alpha:0.017},0).wait(1).to({y:52.6,alpha:0.034},0).wait(1).to({y:52,alpha:0.068},0).wait(1).to({y:50.9,alpha:0.122},0).wait(1).to({y:49.1,alpha:0.207},0).wait(1).to({y:46.7,alpha:0.33},0).wait(1).to({y:43.4,alpha:0.49},0).wait(1).to({y:40.1,alpha:0.655},0).wait(1).to({y:37.4,alpha:0.788},0).wait(1).to({y:35.5,alpha:0.88},0).wait(1).to({y:34.3,alpha:0.94},0).wait(1).to({y:33.6,alpha:0.976},0).wait(1).to({y:33.2,alpha:0.995},0).wait(1).to({regX:123,regY:30.8,x:123,y:30.8,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.8,12.2,267,81.9);


(lib._01 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_14 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(14).call(this.frame_14).wait(1));

	// Camada 1
	this.instance = new lib.Símbolo2();
	this.instance.setTransform(142.2,50.8,1,1,0,0,0,142.2,30.8);
	this.instance.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({regX:147.8,regY:31.6,x:147.8,y:51.5,alpha:0.017},0).wait(1).to({y:51.1,alpha:0.034},0).wait(1).to({y:50.5,alpha:0.068},0).wait(1).to({y:49.4,alpha:0.122},0).wait(1).to({y:47.6,alpha:0.207},0).wait(1).to({y:45.2,alpha:0.33},0).wait(1).to({y:41.9,alpha:0.49},0).wait(1).to({y:38.6,alpha:0.655},0).wait(1).to({y:35.9,alpha:0.788},0).wait(1).to({y:34,alpha:0.88},0).wait(1).to({y:32.8,alpha:0.94},0).wait(1).to({y:32.1,alpha:0.976},0).wait(1).to({y:31.7,alpha:0.995},0).wait(1).to({regX:142.2,regY:30.8,x:142.2,y:30.8,alpha:1},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.1,12.1,309.7,79.1);


(lib.txt2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}
	this.frame_2 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1));

	// Camada 1
	this.instance = new lib._01();
	this.instance.setTransform(141.9,40.7,1,1,0,0,0,142.2,30.8);

	this.instance_1 = new lib._02();
	this.instance_1.setTransform(122.2,40.7,1,1,0,0,0,123,30.8);

	this.instance_2 = new lib._03();
	this.instance_2.setTransform(144.6,31.2,1,1,0,0,0,144.8,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-7.4,0,321.5,101);


// stage content:



(lib.BA1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_88 = function() {
		this.stop();
		if(createjs.Touch.isSupported()){
			createjs.Touch.enable(this.getStage());
		}
		this.getStage().enableMouseOver();
		
		var screenWhere = parent.course.getLocation( "screenWhere" );
		var numberMenu = 3;
		var moduloID = parseInt(screenWhere.substr(0, 1));
		var telaID = parseInt(screenWhere.substr(2, 2));
		var _this = this;
		
		setTimeout(function(){
			
			resetMenu( _this , numberMenu );
			activeMenu( _this , numberMenu , moduloID );
			
		
		}, 1000*0.1 );
		
		
		function resetMenu( _this , _numberMenu ){
		    
			for( var i = 1; i <= _numberMenu ; i++  ){
				_this["avancar" + i ].gotoAndStop( 1 );
			}	
		}
		
		
		function activeMenu( _this , _numberMenu , _moduloID  )
		{
			if( _moduloID == 1 )
			{
				_this["avancar" + 1 ].gotoAndStop( 0 );
				_this["avancar" + 1 ].mouseEnabled = true;
				_this["avancar" + 1 ].mouseChildren = false;
				_this["avancar" + 1 ].addEventListener("click", 
				function() {
					parent.course.gotoScreenModulate( 2 , 0 );
				});
			}
			else
			{
				for( var i = 1; i <= _numberMenu ; i++  ){
				
					if( i < ( _moduloID - 1 ) )
					{
						_this["avancar" + i ].gotoAndStop( 2 );
					}
					else if( i == ( _moduloID - 1 ) )
					{
						_this["avancar" + i ].gotoAndStop( 0 );
						_this["avancar" + i ].mouseEnabled = true;
						_this["avancar" + i ].mouseChildren = false;
						_this["avancar" + i ].addEventListener("click", 
						function() {
							parent.course.gotoScreenModulate( _moduloID  , 0 );
						});
					}
				}	
			}
		} 
		
		if( moduloID == 3 )
		{
			_this["clienteNome" ].gotoAndStop( 1 );
		}
		else if( moduloID == 4 )
		{
			_this["clienteNome" ].gotoAndStop( 2 );
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(88).call(this.frame_88).wait(1));

	// Camada 3
	this.instance = new lib.titulo();
	this.instance.setTransform(173,120.6,1,1,0,0,0,76,35.4);
	this.instance.alpha = 0.012;
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(38).to({_off:false},0).wait(1).to({regX:69.3,regY:30,x:166.3,y:114.8,alpha:0.024},0).wait(1).to({y:113.6,alpha:0.066},0).wait(1).to({y:111.3,alpha:0.142},0).wait(1).to({y:107.8,alpha:0.255},0).wait(1).to({y:103.4,alpha:0.401},0).wait(1).to({y:98.4,alpha:0.566},0).wait(1).to({y:93.6,alpha:0.723},0).wait(1).to({y:89.7,alpha:0.85},0).wait(1).to({y:87.1,alpha:0.937},0).wait(1).to({y:85.6,alpha:0.985},0).wait(1).to({regX:76,regY:35.4,x:173,y:90.6,alpha:1},0).wait(40));

	// Camada 2
	this.instance_1 = new lib.txt1();
	this.instance_1.setTransform(260,276.4,1,1,0,0,0,164,99.7);
	this.instance_1.alpha = 0.012;
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(45).to({_off:false},0).wait(1).to({regX:144.3,regY:74.5,x:240.3,y:250.8,alpha:0.024},0).wait(1).to({y:249.5,alpha:0.066},0).wait(1).to({y:247.2,alpha:0.142},0).wait(1).to({y:243.8,alpha:0.255},0).wait(1).to({y:239.3,alpha:0.401},0).wait(1).to({y:234.3,alpha:0.566},0).wait(1).to({y:229.5,alpha:0.723},0).wait(1).to({y:225.7,alpha:0.85},0).wait(1).to({y:223.1,alpha:0.937},0).wait(1).to({y:221.6,alpha:0.985},0).wait(1).to({regX:164,regY:99.7,x:260,y:246.4,alpha:1},0).wait(33));

	// Layer 2
	this.clienteNome = new lib.txt2();
	this.clienteNome.setTransform(257.6,-76.4,1,1,0,0,0,157,48.5);
	this.clienteNome.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.clienteNome).wait(88).to({x:256,y:329.7,alpha:1},0).wait(1));

	// Camada 9
	this.avancar1 = new lib.btn1();
	this.avancar1.setTransform(666.5,211.8,1.2,1.2,0,0,0,161.4,30.1);
	this.avancar1.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.avancar1).wait(72).to({regX:164,scaleX:1.2,scaleY:1.2,x:669.5,alpha:0.031},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.095},0).wait(1).to({scaleX:1.16,scaleY:1.16,alpha:0.213},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:669.4,alpha:0.384},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:669.3,alpha:0.585},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:669.2,alpha:0.77},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:669.1,alpha:0.903},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.978},0).wait(1).to({regX:161.4,scaleX:1,scaleY:1,x:666.5,alpha:1},0).wait(9));

	// Camada 8
	this.avancar2 = new lib.btn2();
	this.avancar2.setTransform(666.5,291.8,1.2,1.2,0,0,0,161.4,30.1);
	this.avancar2.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.avancar2).wait(75).to({regX:164,scaleX:1.2,scaleY:1.2,x:669.5,alpha:0.031},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.095},0).wait(1).to({scaleX:1.16,scaleY:1.16,alpha:0.213},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:669.4,alpha:0.384},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:669.3,alpha:0.585},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:669.2,alpha:0.77},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:669.1,alpha:0.903},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.978},0).wait(1).to({regX:161.4,scaleX:1,scaleY:1,x:666.5,alpha:1},0).wait(6));

	// Camada 5
	this.avancar3 = new lib.btn3();
	this.avancar3.setTransform(666.5,371.8,1.2,1.2,0,0,0,161.4,30.1);
	this.avancar3.alpha = 0.012;

	this.timeline.addTween(cjs.Tween.get(this.avancar3).wait(78).to({regX:164,scaleX:1.2,scaleY:1.2,x:669.5,alpha:0.031},0).wait(1).to({scaleX:1.18,scaleY:1.18,alpha:0.095},0).wait(1).to({scaleX:1.16,scaleY:1.16,alpha:0.213},0).wait(1).to({scaleX:1.13,scaleY:1.13,x:669.4,alpha:0.384},0).wait(1).to({scaleX:1.08,scaleY:1.08,x:669.3,alpha:0.585},0).wait(1).to({scaleX:1.05,scaleY:1.05,x:669.2,alpha:0.77},0).wait(1).to({scaleX:1.02,scaleY:1.02,x:669.1,alpha:0.903},0).wait(1).to({scaleX:1,scaleY:1,alpha:0.978},0).wait(1).to({regX:161.4,scaleX:1,scaleY:1,x:666.5,alpha:1},0).wait(3));

	// Camada 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#006A44").s().p("AhCAyIAAhjICFAAIAABjg");
	this.shape.setTransform(53.8,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#006A44").s().p("AmJAyIAAhjIMTAAIAABjg");
	this.shape_1.setTransform(86.5,5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#006A44").s().p("AqzAyIAAhjIVnAAIAABjg");
	this.shape_2.setTransform(116.3,5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#006A44").s().p("AvAAyIAAhjIeBAAIAABjg");
	this.shape_3.setTransform(143.2,5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#006A44").s().p("AyvAyIAAhjMAlfAAAIAABjg");
	this.shape_4.setTransform(167.1,5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#006A44").s().p("A2CAyIAAhjMAsFAAAIAABjg");
	this.shape_5.setTransform(188.1,5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#006A44").s().p("A43AyIAAhjMAxuAAAIAABjg");
	this.shape_6.setTransform(206.2,5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#006A44").s().p("A7OAyIAAhjMA2dAAAIAABjg");
	this.shape_7.setTransform(221.4,5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#006A44").s().p("A9IAyIAAhjMA6RAAAIAABjg");
	this.shape_8.setTransform(233.6,5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#006A44").s().p("A+mAyIAAhjMA9NAAAIAABjg");
	this.shape_9.setTransform(242.9,5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#006A44").s().p("A/lAyIAAhjMA/LAAAIAABjg");
	this.shape_10.setTransform(249.3,5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#006A44").s().p("EggIAAyIAAhjMBARAAAIAABjg");
	this.shape_11.setTransform(252.7,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},10).to({state:[{t:this.shape_1}]},1).to({state:[{t:this.shape_2}]},1).to({state:[{t:this.shape_3}]},1).to({state:[{t:this.shape_4}]},1).to({state:[{t:this.shape_5}]},1).to({state:[{t:this.shape_6}]},1).to({state:[{t:this.shape_7}]},1).to({state:[{t:this.shape_8}]},1).to({state:[{t:this.shape_9}]},1).to({state:[{t:this.shape_10}]},1).to({state:[{t:this.shape_11}]},1).wait(68));

	// Camada 7
	this.instance_2 = new lib.Símbolo1();
	this.instance_2.setTransform(252.7,205.7,1,1,0,0,0,205.7,195.7);
	this.instance_2.alpha = 0.012;
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(21).to({_off:false},0).wait(1).to({regX:206,regY:190.6,x:253,y:200.6,alpha:0.022},0).wait(1).to({alpha:0.057},0).wait(1).to({alpha:0.119},0).wait(1).to({alpha:0.213},0).wait(1).to({alpha:0.337},0).wait(1).to({alpha:0.483},0).wait(1).to({alpha:0.634},0).wait(1).to({alpha:0.77},0).wait(1).to({alpha:0.876},0).wait(1).to({alpha:0.948},0).wait(1).to({alpha:0.988},0).wait(1).to({regX:205.7,regY:195.7,x:252.7,y:205.7,alpha:1},0).wait(56));

	// fundo
	this.instance_3 = new lib.BA1_1();

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(89));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(437.5,157.1,875,623);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;