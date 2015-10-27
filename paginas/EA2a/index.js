(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes

// library properties:
lib.properties = {
	width: 875,
	height: 550,
	fps: 24,
	color: "#FFFFFF",
	manifest: []
};



// symbols:



(lib.nps_frederico = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.nps_joao = function() {
	this.spriteSheet = ss["index_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.tit_1 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("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gJgPgFQgMgFgDgDIgHgGQgDgDgBgEQgCgEAAgFQAAgLAIgHQAJgGAOAAQAJAAARAGIgGAQQgKgIgJAAQgHAAgDADQgFADAAAEQABAJAJAFIANAFQAKAFAGAGQAEAFAAAKQAAAMgIAHQgJAIgQAAQgOAAgOgIgASCAYQgMgNABgVQAAgVAMgOQALgNATAAQAVAAALANQALANAAAWQAAAVgLANQgMAOgUAAQgUAAgLgOgASPgjQgHAJABAQQgBAiAZAAQAMAAAGgKQAIgJgBgPQAAgjgZAAQgLAAgHAKgARDAdQgHgIgBgNIAAgzIgKAAIAAgNIAKAAIAAgUIARgGIAAAaIAaAAIAAANIgaAAIAAAtQAAALAEAFQAEAFAJAAQAHAAAGgDIACAPQgJADgNAAQgLAAgIgJgAN4AYQgMgNAAgVQAAgVAMgOQAMgNAUAAQATAAALANQAMANAAAWQAAAVgMANQgLAOgTAAQgVAAgLgOgAOFgjQgGAJAAAQQAAAiAZAAQALAAAHgKQAGgJABgPQAAgjgZAAQgMAAgHAKgAJ9AYQgMgNAAgVQABgVALgOQAMgNAUAAQAUAAAKANQAMANAAAWQAAAVgMANQgLAOgTAAQgVAAgLgOgAKKgjQgGAJgBAQQAAAiAaAAQALAAAHgKQAGgJABgPQAAgjgZAAQgMAAgHAKgAGHAYQgLgNAAgVQgBgVAMgOQAMgNAUAAQATAAALANQAMANAAAWQAAAVgMANQgLAOgTAAQgVAAgLgOgAGUgjQgGAJAAAQQAAAiAZAAQALAAAHgKQAGgJAAgPQAAgjgYAAQgMAAgHAKgAEvAZQgNgNABgUQAAgXANgOQANgNAWAAQAIAAAIADQAJADAEADIgIAMQgDgDgGgCQgHgCgGAAQgOAAgHAKQgJAJABARQgBAOAJAJQAHAIAPAAQALAAAMgIIAHAOQgOAJgUAAQgTAAgNgNgACYAeQgIgJAAgMQAAgMAMgKQANgKAUAAQAFAAAHADQAAgXgVAAQgPAAgJAIIgHgOQAEgEAJgCQAIgDAIAAQAVAAAJAJQAJAJAAAVIAAAgQAAAMAIAEIAAAIQgLAAgEgCQgGgDgCgHQgKANgUAAQgLAAgJgIgACogEQgHAFgBAJQABAOARAAQAMAAALgMIAAgUIgLgCQgNAAgJAGgAgKAZQgOgNABgUQAAgYAO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");
	this.shape.setTransform(209.8,36.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,590.2,70.7);


(lib.Símbolo3 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Am1A2QgQgUAAgiQAAgeASgVQASgVAdgBQAZABAOAJIgKAWQgIgJgTAAQgSAAgMAPQgLAPAAAVQAAAXALAOQAKANASAAQAUAAALgOIAMAUQgPARgeAAQgegBgRgTgAFVBFQgEgEgCgFQgDAGgIADQgJAEgJAAQgRAAgJgIQgKgJAAgQQAAgRAOgLQANgKAZAAIALACQAAgRgYAAQgOAAgJAEIgFgTQANgFARAAQAYAAALALQALAKAAAcIAAAXQAAAVAJAFQgEAGgDABIgJABQgFAAgEgEgAEnAnQAAAPAQAAQAWAAAAgXIAAgJIgKgBQgcAAAAASgACfAiIAAhBIAZAAIAAA/QAAAVASgBQAIABAHgFQAHgEADgFIAAhGIAYAAIAABmIgYAAIAAgIQgFAEgJADQgKADgHAAQglAAAAgngAhTBAQgIgIAAgRIAAgzIgMAAIAAgTIAMAAIAAgWIAYgJIAAAfIAdAAIAAATIgdAAIAAAsQAAALAEAFQADAFAJgBQAJAAAHgEIAAAWQgIADgQAAQgQAAgIgJgAk/A6QgNgPAAgYQAAgXANgPQAOgOAXAAQAYAAANAOQANAPAAAXQAAAYgNAPQgOAPgXAAQgYAAgNgPgAksgEQgHAGAAARQAAAiAZAAQALAAAHgJQAHgJAAgQQAAghgZABQgMgBgGAKgAF/BHIAAhmIAZAAIAAAJQAKgLARAAQANAAAGADIgKAVQgHgEgHAAQgJAAgHAIQgGAFAAAMIAAA7gABtBHIAAg8QAAgMgFgGQgFgGgMAAQgFAAgGADQgGADgEAEIAABKIgYAAIAAhmIASAAIAEAJQAKgLATAAQATAAALALQALALAAASIAABAgAgJBHIAAhTIgNAAIAAgTIAkAAIAABmgAiRBHIAAg8QAAgMgFgGQgGgGgLAAQgGAAgGADQgGADgDAEIAABKIgZAAIAAhmIASAAIAFAJQAJgLAUAAQATAAAKALQALALAAASIAABAgAgGgwQgFgEAAgGQAAgGAFgEQAEgEAEAAQAFAAAFAEQAEAEAAAGQAAAGgEAEQgFAEgFAAQgEAAgEgEg");
	this.shape.setTransform(-0.1,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C0D0AB").s().p("Egv1ADCIAAmEMBfrAAAIAAGEg");
	this.shape_1.setTransform(0.2,19.5);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-306,0,612.5,39);


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
	this.shape.graphics.f("#FFFFFF").s().p("Egv1AQjMAAAghFMBfrAAAMAAAAhFg");
	this.shape.setTransform(226.2,5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-80,-101,612.4,212);


(lib.pop_fechar_botao_blink_anima = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0)","#FFFFFF","rgba(153,153,153,0)"],[0,0.49,1],-3.8,0,3.9,0).s().p("AglCxIAAlhIBLAAIAAFhg");
	this.shape.setTransform(3.9,17.7);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,7.8,35.5);


(lib.fundoFeed = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.659)").s().p("EhhCA5NMAAAhyZMDCFAAAMAAAByZg");
	this.shape.setTransform(621.2,366.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,1242.3,732.2);


(lib.fundo_1 = function() {
	this.initialize();

	// Camada 1
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#424242").s().p("EgxqAR+QgUAAAAgNMAAAgjhQAAgNAUAAMBjVAAAQAUAAAAANMAAAAjhQAAANgUAAg");
	this.shape_1.setTransform(319.9,115);

	this.addChild(this.shape_1);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,639.9,230);


(lib.campo_2 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(2,1,1).p("EAx2AAAMhAbAAAMgjQAAA");
	this.shape.setTransform(320.3,20);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AuhhjMBAgAAAIAADHAuhBkIAAjHEgx+ABkIAAjHMAjdAAA");
	this.shape_1.setTransform(319.9,10);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#4D4D4D").s().p("EAx5ABjMhAaAAAIAAjGMBAgAAAIAADGgAuhBjMgjQAAAIgNAAIAAjGMAjdAAAIAADGg");
	this.shape_2.setTransform(319.9,10);

	this.addChild(this.shape_2,this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,641.9,22);


(lib.campo = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("A/PhjMA+fAAAIAADHMg+fAAAg");
	this.shape.setTransform(200,10);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A0A0A0").s().p("A/PBjIAAjGMA+eAAAIAADGg");
	this.shape_1.setTransform(200,10);

	this.addChild(this.shape_1,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-1,-1,402,22);


(lib.btn_confirmar = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{UP:0,OVER:1});

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
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AE7A/QgFgEgBgEQgDAFgHADQgHAEgJAAQgPAAgIgIQgJgIAAgOQAAgQAMgJQAMgJAXAAIAJABQAAgPgVAAQgNAAgIAEIgEgRQALgFAQAAQAVAAAKAKQAKAJAAAaIAAAUQAAATAHAFQgCAEgDABQgEACgEAAQgFAAgDgEgAEQAkQABANAPAAQATAAAAgUIAAgJIgIgBQgbAAAAARgAknA1QgMgNAAgXQAAgTANgOQAMgNAVAAQAVAAAMANQAMANAAAUQAAAXgNANQgMAOgUAAQgWAAgMgOgAkWgDQgGAGAAAOQAAAgAXAAQAKAAAGgJQAGgIAAgPQAAgcgWAAQgLAAgGAIgAmRAxQgPgSAAgeQABgbAQgTQAQgTAaAAQAXAAANAJIgJATQgIgIgRAAQgQAAgLAOQgKANAAATQAAAUAKANQAJAMAQAAQASAAAKgNIALASQgOAPgaAAQgcAAgPgSgAFhBBIAAhcIAWAAIAAAIQAJgKAPAAQAMAAAFADIgJATQgFgEgHAAQgJAAgFAHQgGAFAAAKIAAA2gADTBBIAAg7QABgRgSAAQgEAAgFADQgEADgCAEIAABCIgWAAIAAg/QAAgFgEgEQgFgEgIAAQgDAAgGADQgEADgCAEIAABCIgXAAIAAhcIAQAAIAEAIQAJgKAOAAQATAAAKAKQAEgFAHgCQAIgDAHAAQAQAAAJAJQAIAJABAOIAAA+gAAaBBIAAhcIAVAAIAAAIQAKgKAPAAQALAAAGADIgJATQgGgEgHAAQgIAAgFAHQgHAFAAAKIAAA2gAgUBBIAAhKIgNAAIAAgSIAhAAIAABcgAhXBBIAAhKIgPAAIAAgSIAPAAQAAgSAJgKQAKgLAQAAQAHAAAMADIgHARQgHgCgEAAQgGAAgFAFQgEAGAAAHIAAADIATAAIAAASIgTAAIAABKgAiKBBIAAg3QAAgKgEgFQgGgGgKAAQgFAAgFADQgGADgCAEIAABCIgWAAIAAhcIAPAAIAEAIQAJgKASAAQAQAAAKAKQAKAKAAAQIAAA6gAgSgqQgDgEgBgFQABgFADgEQAEgEAFAAQAGAAADAEQACAEAAAFQAAAFgCAEQgDAEgGAAQgFAAgEgEg");
	this.shape.setTransform(56.5,19.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FFFFFF").ss(1,2,0,3).p("Ao0jCIRpAAIAAGFIxpAAg");
	this.shape_1.setTransform(56.5,19.5);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.2)").s().p("Ao0DCIAAmEIRpAAIAAGEg");
	this.shape_2.setTransform(56.5,19.5);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("rgba(255,255,255,0.847)").s().p("Ao0DCIAAmEIRpAAIAAGEg");
	this.shape_3.setTransform(56.5,19.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,115.1,41);


(lib.hitAlternativacopy3 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A4/GwIAAtfMAx/AAAIAANfg");
	this.shape.setTransform(160,43.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,320,86.5);


(lib.hitAlternativacopy2 = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A4/FsIAArXMAx/AAAIAALXg");
	this.shape.setTransform(160,36.5);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,320,73);


(lib.hitAlternativacopy = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A4/FUIAAqnMAx/AAAIAAKng");
	this.shape.setTransform(160,34.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,320,68.2);


(lib.hitAlternativa_ = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A4/NTIAA6lMAx/AAAIAAalg");
	this.shape.setTransform(160,85.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,320,170.4);


(lib.hitAlternativa = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EhEWADTIAAmlMCIsAAAIAAGlg");
	this.shape.setTransform(437.5,21.1);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,875,42.3);


(lib.buletMc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{disabled:0,enabled:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("EhEWADTIAAmlMCIsAAAIAAGlg");
	this.shape.setTransform(437.5,21.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(0,0,0,0.2)").s().p("EhEWADTIAAmlMCIsAAAIAAGlg");
	this.shape_1.setTransform(437.5,21.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape}]}).to({state:[{t:this.shape_1}]},1).wait(1));

	// hit_texto
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(255,255,255,0.008)").s().p("EhEWADTIAAmlMCIsAAAIAAGlg");
	this.shape_2.setTransform(437.5,21.1);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(2));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,875,42.3);


(lib.Symbol = function() {
	this.initialize();

	// Camada 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0.008)").s().p("A4/JGIAAyLMAx/AAAIAASLg");
	this.shape.setTransform(160,58.2);

	this.addChild(this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,320,116.5);


(lib.pop_fechar_botao_blink = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// fade
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(255,255,255,0)").s().p("ApRB4IAAjvISjAAIAADvg");
	this.shape.setTransform(59.5,12);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(29));

	// mask (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("ApRB4IAAjvISjAAIAADvg");
	mask.setTransform(59.5,12);

	// Layer 2
	this.instance = new lib.pop_fechar_botao_blink_anima();
	this.instance.setTransform(-4.1,11.2,1,1,0,0,0,3.9,17.7);

	this.instance.mask = mask;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:123.9},10).to({x:-4.1},11).wait(8));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,119,24);


(lib.componente = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		//Daisy Monte Machado
		//22/01/2015
		//Componente Multipla Escolha
		
		//Shuffle Fisher-Yates
		//tambem é possivel usar a underscore-min.js
		Array.prototype.shuffle = function () {
			var i = this.length,
				j, temp;
			if (i == 0) return;
			while (--i) {
				j = Math.floor(Math.random() * (i + 1));
				temp = this[i];
				this[i] = this[j];
				this[j] = temp;
			}
		};
		
		this.getStage().enableMouseOver();
		
		var stage = this.parent;
		var componente = this;
		var alternativaSelecionada = null;
		var itensComponente = '{"qtdAlternativas":' + componente.qtdAlternativas.text + ',' + '"nomeBaseAlternativa":"' + componente.nomeBaseAlternativa.text + '", ' + '"feed":"' + componente.feed.text + '", ' + '"tentativas":' + componente.tentativas.text + ', ' + '"arrGabarito":' + componente.gabarito.text + ', ' + '"tipoFeed":"' + componente.tipoFeed.text + '",' + '"randomico":' + componente.randomico.text + '}';
		
		var objAtual = JSON.parse(itensComponente);
		var positionAlternativas = [];
		var arrAlternativas = [];
		var arrUserResps = [];
		
		
		init();
		function init() {
			
			/*if (objAtual.tipoFeed.toLocaleLowerCase() == "pontual") {
				//Feeds Pontuais
				stage.feedCorreto.fechar_btn.addEventListener("click", closeFeed);
				stage.feedIncorreto.fechar_btn.addEventListener("click", closeFeed);
			} else {
				//Listener Fecha Feed
				stage.feed.bt.addEventListener("mouseover", setButtonOver);
				stage.feed.bt.addEventListener("mouseout", setButtonOut);
				stage.feed.bt.addEventListener("click", closeFeed);
			}*/
			
			//Listener Confirma Resposta
			stage.confirmaBt.addEventListener("mouseover", setButtonOver);
			stage.confirmaBt.addEventListener("mouseout", setButtonOut);
			stage.confirmaBt.addEventListener("click", OnConfirme);
			stage.confirmaBt.visible = false; //Desabilitar botao Confirmar
			montaAlternativas();
		}
		
		function montaAlternativas() {
			for (var item = 0; item < objAtual.qtdAlternativas; item++) {
				arrAlternativas[item] = stage[objAtual.nomeBaseAlternativa + (item + 1)];
			}
			configQuiz();
		}
		
		function configQuiz() {
			var alterTemp;
		
			for (var alt = 0; alt < objAtual.qtdAlternativas; alt++) {
				//Alternativas
				alterTemp = arrAlternativas[alt];
				alterTemp.posInicialX = alterTemp.x;
				alterTemp.posInicialY = alterTemp.y;
				alterTemp.name = 'A' + (alt + 1);
				alterTemp.id = alt + 1;
				//Select Alternativa
				alterTemp.addEventListener("click", icoPress);
				alterTemp.checkBt.id = alterTemp.name;
				//Positions
				positionAlternativas.push({
					x: alterTemp.x,
					y: alterTemp.y
				});
			}
		
			//Se randomico ativado reposiciona as alternativas
			if (objAtual.randomico) {
				var newPositions = positionAlternativas;
				newPositions.shuffle(); //Randomiza posicao das alternativas
				for (var alt = 0; alt < arrAlternativas.length; alt++) {
					arrAlternativas[alt].x = newPositions[alt].x; //Reposiciona
					arrAlternativas[alt].y = newPositions[alt].y; //Reposiciona
				}
			}
		}
		
		/////////////////////////////////
		//////// CONTROLES QUIZ///////
		/////////////////////////////////
		function icoPress(ev) {
			alternativaSelecionada = ev.currentTarget;
			var btn = ev.currentTarget.checkBt;
			btn.gotoAndStop('enabled');
		
			if (arrUserResps.indexOf(btn.id) == -1) {
				//console.log("RESPOSTAS "+objAtual.arrGabarito.length);
				if (arrUserResps.length == 1 && objAtual.arrGabarito.length == 1) {
					arrUserResps = [];
					for (var x = 0; x < arrAlternativas.length; x++) {
						if (arrAlternativas[x].checkBt != btn) {
							arrAlternativas[x].checkBt.gotoAndStop('disabled');
						}
					}
				}
				arrUserResps.push(btn.id);
			} else {
				//Remove o ID do array de respostas
				btn.gotoAndStop('disabled');
				arrUserResps.splice(arrUserResps.indexOf(btn.id), 1);
			}
			if (arrUserResps.length > 0) stage.confirmaBt.visible = true;
			else stage.confirmaBt.visible = false;
		}
		
		function isCorrect() {
			var isCorrectBl = true;
			if (objAtual.arrGabarito.length == arrUserResps.length) {
				for (var x = 0; x < objAtual.arrGabarito.length; x++) {
					if (arrUserResps.indexOf(objAtual.arrGabarito[x]) == -1) {
						isCorrectBl = false;
					}
				}
			} else {
				isCorrectBl = false;
			}
			return isCorrectBl;
		}
		
		function desenhaFeedback(correta) {
		
			callMensagem();
		
			if (correta) { //Resposta Correta!
				//stage.feed.gotoAndStop("positivo");
				console.log("Resposta correta");
				//liberaSeta();
				parent.course.setData("EA2A",250);
			} else {
				console.log("Resposta Errada! ");
				parent.course.setData("EA2A",0);
				/*objAtual.tentativas--;
				if(objAtual.tentativas == 0){ //Errou
					stage.feed.gotoAndStop("construtivo");
					console.log("Resposta Errada! ");
					liberaSeta();
				}else{ //Tentativa
					stage.feed.gotoAndStop("tentativa");
					limpaAlternativas();
					addListeners();
					console.log("Tentativa ");
				}*/
			}
		}
		function desenhaFeedPontual(correta) {
		
			
			var _nota = "0"; 
			if (correta) { //Resposta Correta!
				//stage.feedCorreto.gotoAndStop(alternativaSelecionada.id);
				console.log("Resposta correta");
				//liberaSeta();
				
				_nota = "250";
			} else {
				console.log("Resposta Errada! ");
				/*objAtual.tentativas--;
				if(objAtual.tentativas == 0){ //Errou
					stage.feedIncorreto.gotoAndStop(alternativaSelecionada.id);
					console.log("Resposta Errada! ");
					liberaSeta();
				}else{ //Tentativa
					stage.feed.gotoAndStop("tentativa");
					limpaAlternativas();
					addListeners();
					console.log("Tentativa ");
				}*/
				_nota = "0";
			}
			
			callMensagem( _nota );
		}
		
		function limpaAlternativas() {
			arrUserResps = [];
			for (var x = 0; x < arrAlternativas.length; x++) {
				arrAlternativas[x].checkBt.gotoAndStop('disabled');
			}
		}
		/////////////////////////////////
		//////// OUVINTES LISTENER///////
		/////////////////////////////////
		function OnRollOver(btn) {
			btn.gotoAndStop("OVER");
		}
		
		function OnRollOut(btn) {
			btn.gotoAndStop("UP");
		}
		
		function OnConfirme() {
			stage.confirmaBt.visible = false;
			removeListeners();
			if (objAtual.tipoFeed.toLocaleLowerCase() == "pontual") { //Se opcao de Feed Pontual
				desenhaFeedPontual(isCorrect());
			} else if (objAtual.tipoFeed.toLocaleLowerCase() == "geral") { //Se opcao de Feed Geral
				desenhaFeedback(isCorrect());
			}
		}
		
		function removeListeners() {
			var alterTemp;
			for (var alt = 0; alt < arrAlternativas.length; alt++) {
				alterTemp = arrAlternativas[alt];
				alterTemp.removeEventListener("click", icoPress);
			}
		}
		
		function addListeners() {
			var alterTemp;
			for (var alt = 0; alt < arrAlternativas.length; alt++) {
				alterTemp = arrAlternativas[alt];
				alterTemp.addEventListener("click", icoPress);
			}
		}
		
		function OnClose(btn) {
			stage.feed.gotoAndStop("fechar");
		}
		
		function setButtonOver(ev) { //Over Buttons
			var btn = ev.currentTarget;
			btn.gotoAndStop("OVER");
		}
		
		function setButtonOut(ev) { //Out Buttons
			var btn = ev.currentTarget;
			btn.gotoAndStop("UP");
		}
		
		function closeFeed(ev) { //Fechar feedback
			ev.currentTarget.parent.gotoAndStop(0);
		}
		
		function liberaSeta() {
			//libera navegação
		}
		
		//
		//NILO
		//
		function callMensagem( _texto ) {
			
			setTimeout(function(){ 
					
				stage.feed.gotoAndStop(1);
				
				stage.feed.bt.on("click", function(){
						parent.course.nextScreen();
					});
				
			} , 1000 * 0.2 );
			
			parent.course.setData("EA2A", _texto );
			var _pontuacaoTxt = stage.feed.nota.text.replace('[pontuação]',  _texto );
			stage.feed.nota.text = _pontuacaoTxt;
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// propriedades
	this.tipoFeed = new cjs.Text("pontual", "12px 'Calibri'");
	this.tipoFeed.name = "tipoFeed";
	this.tipoFeed.lineHeight = 14;
	this.tipoFeed.lineWidth = 392;
	this.tipoFeed.setTransform(240.8,309.1);

	this.instance = new lib.campo();
	this.instance.setTransform(481.2,319.4,1,1,0,0,0,242.5,10);

	this.nomeBaseAlternativa = new cjs.Text("alternativa", "bold 12px 'Arial'");
	this.nomeBaseAlternativa.name = "nomeBaseAlternativa";
	this.nomeBaseAlternativa.lineHeight = 14;
	this.nomeBaseAlternativa.lineWidth = 392;
	this.nomeBaseAlternativa.setTransform(234.8,280.5);

	this.instance_1 = new lib.campo();
	this.instance_1.setTransform(473.5,290.7,1,1,0,0,0,242.5,10);

	this.text = new cjs.Text("Nome Base Alternativas", "bold 12px 'Arial'", "#A0A0A0");
	this.text.lineHeight = 14;
	this.text.lineWidth = 213;
	this.text.setTransform(-0.2,280.2);

	this.gabarito = new cjs.Text("[\"A2\", \"A3\", \"A5\",\"A8\"]", "bold 12px 'Arial'");
	this.gabarito.name = "gabarito";
	this.gabarito.lineHeight = 14;
	this.gabarito.lineWidth = 392;
	this.gabarito.setTransform(234.9,249.7);

	this.text_1 = new cjs.Text("Gabarito", "bold 12px 'Arial'", "#A0A0A0");
	this.text_1.lineHeight = 14;
	this.text_1.lineWidth = 213;
	this.text_1.setTransform(-0.1,247.5);

	this.instance_2 = new lib.campo();
	this.instance_2.setTransform(473.6,259.4,1,1,0,0,0,242.5,10);

	this.feed = new cjs.Text("feed", "bold 12px 'Arial'");
	this.feed.name = "feed";
	this.feed.lineHeight = 14;
	this.feed.lineWidth = 392;
	this.feed.setTransform(235,160);

	this.randomico = new cjs.Text("false", "bold 12px 'Arial'");
	this.randomico.name = "randomico";
	this.randomico.lineHeight = 14;
	this.randomico.lineWidth = 392;
	this.randomico.setTransform(235,220);

	this.instance_3 = new lib.campo();
	this.instance_3.setTransform(473.7,170.5,1,1,0,0,0,242.5,10);

	this.tentativas = new cjs.Text("1", "bold 12px 'Arial'");
	this.tentativas.name = "tentativas";
	this.tentativas.lineHeight = 14;
	this.tentativas.lineWidth = 392;
	this.tentativas.setTransform(235,189);

	this.instance_4 = new lib.campo();
	this.instance_4.setTransform(473.7,230.2,1,1,0,0,0,242.5,10);

	this.instance_5 = new lib.campo();
	this.instance_5.setTransform(473.7,199.8,1,1,0,0,0,242.5,10);

	this.qtdAlternativas = new cjs.Text("10", "bold 12px 'Arial'");
	this.qtdAlternativas.name = "qtdAlternativas";
	this.qtdAlternativas.lineHeight = 14;
	this.qtdAlternativas.lineWidth = 392;
	this.qtdAlternativas.setTransform(235,133);

	this.instance_6 = new lib.campo();
	this.instance_6.setTransform(473.7,143.2,1,1,0,0,0,242.5,10);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_6},{t:this.qtdAlternativas},{t:this.instance_5},{t:this.instance_4},{t:this.tentativas},{t:this.instance_3},{t:this.randomico},{t:this.feed},{t:this.instance_2},{t:this.text_1},{t:this.gabarito},{t:this.text},{t:this.instance_1},{t:this.nomeBaseAlternativa},{t:this.instance},{t:this.tipoFeed}]}).wait(1));

	// fundo
	this.text_2 = new cjs.Text("Feedback Pontual ou Geral? ", "bold 12px 'Arial'", "#A0A0A0");
	this.text_2.lineHeight = 14;
	this.text_2.lineWidth = 213;
	this.text_2.setTransform(0.5,308.9);

	this.text_3 = new cjs.Text("Numero de tentativas", "bold 12px 'Arial'", "#A0A0A0");
	this.text_3.lineHeight = 14;
	this.text_3.lineWidth = 213;
	this.text_3.setTransform(0,189.7);

	this.text_4 = new cjs.Text("Nome Base Feedback", "bold 12px 'Arial'", "#A0A0A0");
	this.text_4.lineHeight = 14;
	this.text_4.lineWidth = 213;
	this.text_4.setTransform(0,160.5);

	this.text_5 = new cjs.Text("Randomico?", "bold 12px 'Arial'", "#A0A0A0");
	this.text_5.lineHeight = 14;
	this.text_5.lineWidth = 213;
	this.text_5.setTransform(0,219.3);

	this.text_6 = new cjs.Text("Quantidade de alternativas", "bold 12px 'Arial'", "#A0A0A0");
	this.text_6.lineHeight = 14;
	this.text_6.lineWidth = 213;
	this.text_6.setTransform(0,132.7);

	this.text_7 = new cjs.Text("Valor", "bold 12px 'Arial'", "#A0A0A0");
	this.text_7.lineHeight = 14;
	this.text_7.lineWidth = 98;
	this.text_7.setTransform(232.1,93.8);

	this.text_8 = new cjs.Text("Propriedade", "bold 12px 'Arial'", "#A0A0A0");
	this.text_8.lineHeight = 14;
	this.text_8.lineWidth = 98;
	this.text_8.setTransform(0.5,93.8);

	this.instance_7 = new lib.campo_2();
	this.instance_7.setTransform(200,103.8,1,1,0,0,0,200,10);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F26C36").s().p("Ah0B1QgwgxAAhEQAAhDAwgxQAxgwBDAAQBEAAAxAwQAwAxAABDQAABEgwAxQgxAwhEAAQhDAAgxgwg");
	this.shape.setTransform(299.6,24,0.224,0.224);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#565758").s().p("AhzHaIAAoNIhqAAIAAheIBqgUIAAh4QAAhTAhguQAqg7BhAAQBXAABOAdIAABWIiAgCQgwAAgOAaQgJASAAA5IAABeICeAAIAAByIieAAIAAINg");
	this.shape_1.setTransform(243.4,20.6,0.224,0.224);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#565758").s().p("ADzG5IhplVIh0leIh2FeIhsFVIicAAIE0txICYAAIEFMKIAABng");
	this.shape_2.setTransform(231.5,21.4,0.224,0.224);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#565758").s().p("AgyHCQg4gWgggaIgdBEIhvAAIAAuyICLAAIAAFWQAugVA/gMQA3gMAsAAQB8AAAwBhQAmBLAACfQAAFFjSAAQg2AAhBgbgAiKgjIAAFWQBUAuBfAAQAxAAAYgvQAZgyAAhrQAAh9gaguQgWgogyAAQhkAAhPAbg");
	this.shape_3.setTransform(337.7,20.7,0.224,0.224);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#565758").s().p("AhcFKQhRgDgwgvQgtgvAAhGIAAhBQAAhMAqgqQAvgyBZAAQDXABAAgBIAAgbQABgcgBgBQAAgxgYgUQgUgQgvAAQg+AAjbAMIAAhaQBwgmC5gBQDXgDAADKIAAHDIhtAAIgfhIQgHANhDAfQhOAkg/AAIgEAAgAhDAiQg7AFAABBIAAAqQAAAmATAPQAPANAeAAQAyAABJgbQAmgOAcgOIAAiJg");
	this.shape_4.setTransform(324.3,24,0.224,0.224);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#565758").s().p("AjhD+Qg/hHAAivQAAjABBhHQA+hGChAAQCkAAA+BIQA/BIAAC9QAAC0g+BFQg+BFilAAQigAAhBhIgAhzisQghApAACLQAACBAlAnQAcAeBTAAQBYAAAbgeQAiglAAiDQAAiMgggoQgagjhbAAQhYAAgbAjg");
	this.shape_5.setTransform(285.3,24.1,0.224,0.224);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#565758").s().p("AjRFEIAAp/IBxAAIAbBRQA2gqAigSQA4gdA6AAQA3AAAWAJIAACIQgMgCgagBIg0gCQg9AAgqAQQgqAQgsAoIAAGzg");
	this.shape_6.setTransform(274.3,24,0.224,0.224);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#565758").s().p("AjhD8QgshIAAi2QAAjIBBhCQA3g4CeAAQCRgBAzAkQBCAvAACUQAABQgsAlQgrAmhYAAIjiAAQAABbAgAeQAZAZBJAAQBnAAAfgBQBAgCA8gKIAABhQg9AWhfAIQhAAEhhAAQh4AAguhJgAhfi8QgjAeAABvIDHAAQA9AAAAgzQAAhKgUgSQgTgUhLAAQhXABgYAVg");
	this.shape_7.setTransform(262.6,24.1,0.224,0.224);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#565758").s().p("AhzHaIAAoNIhqAAIAAhyIBqAAIAAh4QAAhTAhguQAqg7BhAAQBXAABOAdIAABWIiAgCQgwAAgOAaQgJASAAA5IAABeICeAAIAAByIieAAIAAINg");
	this.shape_8.setTransform(252.1,20.6,0.224,0.224);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#565758").s().p("AhDG5QhOAAgrgfQg3goAAhdIAArNICMAAIAAKvQAAAqAZANQANAIAlAAIDVAAIAAAEQAAAmAPAhQAQAhAcAXg");
	this.shape_9.setTransform(312.9,21.4,0.224,0.224);

	this.text_9 = new cjs.Text("Multipla Escolha\n1.0 - 01//2015", "bold 12px 'Arial'", "#666666");
	this.text_9.textAlign = "center";
	this.text_9.lineHeight = 14;
	this.text_9.lineWidth = 133;
	this.text_9.setTransform(283.8,40.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AqWGGIAAsLIUtAAIAAMLg");
	this.shape_10.setTransform(285.6,39);

	this.instance_8 = new lib.fundo_1();
	this.instance_8.setTransform(319.9,299.3,1,1.153,0,0,0,319.9,179.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_8},{t:this.shape_10},{t:this.text_9},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_7},{t:this.text_8},{t:this.text_7},{t:this.text_6},{t:this.text_5},{t:this.text_4},{t:this.text_3},{t:this.text_2}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-0.5,0,640.9,357.8);


(lib.mc_feedback = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{fechar:0,positivo:1});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// Pos e Construtivo
	this.text = new cjs.Text("feed", "18px 'Trebuchet MS'", "#FFFFFF");
	this.text.lineHeight = 18;
	this.text.lineWidth = 100;
	this.text.setTransform(-131,99.1);

	this.timeline.addTween(cjs.Tween.get(this.text).to({_off:true},1).wait(1));

	// Camada 9
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("A53E+IAAiDIARAAIAAAIQAJgKAOAAQAUAAALANQALAMAAAYQAAAWgLANQgLAOgWAAQgFAAgHgCQgHgCgCgDIAAAqgA5eDKQgFACgDADIAAA3QACADAFACQAFACAFAAQAfAAAAgjQAAgSgIgIQgHgJgQAAQgEAAgFADgAAsEXQgEgEAAgFQAAgGAEgEQADgDAGAAQAGAAADADQAEAEABAGQgBAFgEAEQgDAEgGAAQgGAAgDgEgAgsEUIAHgQQANAJAJAAQAPAAAAgNQAAgJgPgHQgLgFgEgDIgHgGQgDgEgBgEQgBgEgBgEQAAgMAJgGQAIgHAOAAQAKAAAOAHIgFAPQgIgIgKAAQgGAAgEADQgEADAAAEQAAAJAKAFIAMAGQAJAFAFAGQAFAGAAAKQAAANgIAHQgIAHgQAAQgOAAgOgHgAiAEOQgMgOAAgWQAAgWAMgNQALgOAUAAQAUAAALANQAMANAAAXQAAAXgMANQgMANgTAAQgVAAgKgNgAh0DQQgGAKAAAQQAAAjAZAAQAMAAAGgJQAHgKAAgQQAAgjgZAAQgLAAgIAJgAkMEOQgNgNABgWQAAgWANgOQANgOAWAAQAIAAAJADQAIAEAEADIgJAMQgCgDgHgCQgGgDgGAAQgOAAgHAKQgJAJABARQgBARAJAIQAHAJAPAAQAMAAALgJIAGAOQgNAJgUAAQgTAAgNgNgAmYEOQgNgNAAgWQAAgWAOgOQAMgOAXAAQAIAAAIADQAIAEAFADIgJAMQgCgDgHgCQgGgDgHAAQgNAAgIAKQgIAJAAARQAAARAIAIQAIAJAPAAQALAAALgJIAHAOQgNAJgVAAQgSAAgNgNgAo/EPQgOgNAAgXQAAgXAOgOQANgNARAAQAVAAALAMQALALAAASQAAAFgCAFIhDAAQAAAQAJAJQAIAIANAAQAOAAAJgIIAHAMQgEAEgHACQgLAEgMAAQgSAAgMgMgAozDPQgHAGgBALIA0AAQABgKgHgHQgHgIgMAAQgLAAgIAIgAr7EPQgOgNAAgXQAAgXAOgOQANgNASAAQATAAAMAMQALALAAASQAAAFgCAFIhDAAQAAAQAJAJQAIAIANAAQAOAAAKgIIAGAMQgDAEgIACQgLAEgMAAQgRAAgNgMgAruDPQgIAGgBALIA0AAQABgKgHgHQgHgIgMAAQgLAAgHAIgAuIEUIAGgQQAOAJAJAAQAPAAAAgNQAAgJgPgHQgMgFgDgDIgIgGQgCgEgBgEQgCgEAAgEQAAgMAJgGQAHgHAOAAQALAAAQAHIgGAPQgJgIgLAAQgFAAgFADQgDADAAAEQAAAJAKAFIALAGQALAFAGAGQAEAGAAAKQABANgJAHQgJAHgQAAQgPAAgNgHgAvdEOQgLgOAAgWQgBgWAMgNQAMgOAUAAQATAAALANQAMANAAAXQAAAXgMANQgLANgTAAQgVAAgLgNgAvQDQQgGAKAAAQQAAAjAZAAQALAAAHgJQAGgKAAgQQAAgjgYAAQgMAAgHAJgAzJEUIAFgQQAOAJAJAAQAQAAAAgNQAAgJgQgHQgLgFgEgDIgHgGQgDgEgBgEQgCgEABgEQAAgMAIgGQAIgHAOAAQAKAAAQAHIgFAPQgKgIgKAAQgGAAgEADQgEADAAAEQAAAJAKAFIAMAGQALAFAFAGQAFAGAAAKQAAANgIAHQgKAHgPAAQgPAAgNgHgA0eETQgIgIAAgMQAAgOANgKQAMgKATAAQAGAAAHACQAAgXgVAAQgPAAgJAJIgHgOQAEgEAJgDQAJgDAHAAQAUAAAKAKQAJAJAAAUIAAAiQAAAMAHAFIAAAIQgJAAgFgDQgGgDgCgHQgKANgUAAQgLAAgJgIgA0ODwQgHAGgBAJQAAAPASAAQANAAAKgMIAAgXIgLgCQgNAAgJAHgA1bETQgHgJAAgMIAAg2IgLAAIAAgNIALAAIAAgUIAQgGIAAAaIAaAAIAAANIgaAAIAAAvQAAAMAEAFQAEAFAJAAQAGAAAHgDIACAOQgKADgMAAQgLAAgIgIgA24EUIAGgQQAOAJAIAAQAQAAAAgNQAAgJgPgHQgMgFgDgDIgIgGQgCgEgBgEQgCgEAAgEQAAgMAIgGQAJgHAOAAQAJAAARAHIgGAPQgKgIgJAAQgHAAgDADQgFADAAAEQABAJAJAFIANAGQAKAFAGAGQAEAGAAAKQAAANgIAHQgJAHgQAAQgOAAgOgHgA4NEOQgMgOABgWQAAgWAMgNQALgOATAAQAVAAALANQALANAAAXQAAAXgLANQgMANgUAAQgUAAgLgNgA4ADQQgHAKABAQQgBAjAZAAQAMAAAGgJQAIgKgBgQQAAgjgZAAQgLAAgHAJgA7GEUIAGgQQAOAJAIAAQAQAAAAgNQAAgJgPgHQgMgFgDgDIgIgGQgCgEgBgEQgCgEAAgEQAAgMAIgGQAJgHAOAAQAJAAARAHIgGAPQgKgIgJAAQgHAAgDADQgFADAAAEQABAJAJAFIANAGQAKAFAGAGQAEAGAAAKQAAANgIAHQgJAHgQAAQgOAAgOgHgA8aEPQgOgNAAgXQAAgXAOgOQANgNARAAQAUAAAMAMQALALAAASQAAAFgBAFIhEAAQAAAQAJAJQAIAIANAAQAOAAAJgIIAHAMQgEAEgHACQgKAEgNAAQgSAAgMgMgA8ODPQgHAGgBALIA0AAQAAgKgGgHQgHgIgMAAQgLAAgIAIgA/tEUIAGgQQAOAJAJAAQAPAAAAgNQAAgJgPgHQgMgFgEgDIgHgGQgCgEgBgEQgCgEAAgEQAAgMAJgGQAHgHAOAAQALAAAQAHIgGAPQgJgIgLAAQgFAAgFADQgDADAAAEQAAAJAKAFIAMAGQAKAFAGAGQAEAGAAAKQABANgJAHQgJAHgQAAQgPAAgNgHgEghCAETQgHgIgBgMQAAgOANgKQAMgKAUAAQAGAAAGACQAAgXgVAAQgPAAgIAJIgHgOQAEgEAIgDQAJgDAHAAQAVAAAJAKQAJAJAAAUIAAAiQAAAMAIAFIAAAIQgKAAgFgDQgFgDgCgHQgLANgUAAQgLAAgJgIgEggxADwQgIAGAAAJQAAAPARAAQANAAAKgMIAAgXIgLgCQgNAAgIAHgEgifAESQgJgJABgQIAAg+IAQAAIAAA8QAAAWATAAQAIAAAHgFQAHgFACgGIAAhCIARAAIAABeIgRAAIAAgNQgDAGgIAEQgIAFgJAAQgPAAgIgJgEgj2AEUIAGgQQAOAJAIAAQAQAAAAgNQAAgJgPgHQgMgFgDgDIgHgGQgDgEgCgEQgBgEAAgEQAAgMAIgGQAJgHAOAAQAJAAAQAHIgEAPQgLgIgJAAQgHAAgDADQgFADAAAEQAAAJAKAFIANAGQAKAFAFAGQAGAGAAAKQAAANgJAHQgJAHgQAAQgOAAgOgHgEgnGAETQgJgIAAgMQAAgOANgKQANgKATAAQAFAAAHACQAAgXgVAAQgPAAgJAJIgGgOQAEgEAIgDQAJgDAIAAQAUAAAJAKQAKAJgBAUIAAAiQABAMAHAFIAAAIQgKAAgFgDQgFgDgDgHQgJANgVAAQgLAAgIgIgEgm2ADwQgIAGAAAJQAAAPASAAQAMAAAKgMIAAgXIgLgCQgNAAgIAHgEgpqAEPQgOgNAAgXQAAgXAPgOQAMgNARAAQAVAAALAMQALALAAASQAAAFgBAFIhEAAQAAAQAJAJQAIAIAMAAQAOAAAKgIIAIAMQgEAEgIACQgLAEgMAAQgSAAgMgMgEgpeADPQgHAGgBALIA0AAQAAgKgGgHQgHgIgMAAQgLAAgIAIgEgqsAETQgHgJAAgMIAAg2IgLAAIAAgNIALAAIAAgUIAQgGIAAAaIAaAAIAAANIgaAAIAAAvQABAMAEAFQAEAFAIAAQAHAAAHgDIACAOQgKADgMAAQgMAAgIgIgEgrtAD/IAAhqIARAAIAABnQAAAHAFAFQADAEAIAAIAAAPQghAAAAgcgEgtJAETQgIgIAAgMQAAgOAMgKQANgKATAAQAGAAAGACQAAgXgUAAQgQAAgIAJIgHgOQAEgEAJgDQAIgDAIAAQAVAAAJAKQAJAJAAAUIAAAiQAAAMAHAFIAAAIQgJAAgGgDQgFgDgCgHQgKANgVAAQgLAAgIgIgEgs4ADwQgJAGABAJQAAAPARAAQANAAAJgMIAAgXIgLgCQgNAAgHAHgAixEZIAAhQIgNAAIAAgOIAdAAIAABegAk9EZIAAhQIgOAAIAAgOIAfAAIAABegAnkEZIAAheIARAAIAAAPQAKgRARAAIAOACIgHAQQgGgEgFAAQgJAAgHAJQgGAIgBALIAAA2gApnEZIgagiIgXAiIgUAAIAjgwIggguIATAAIAWAgIAXggIASAAIgiAuIAmAwgAwKEZIAAg3QAAgPgEgGQgGgGgKAAQgGAAgGAEQgGADgEAFIAABGIgQAAIAAheIAMAAIAEAMQAJgOASAAQAgAAAAAmIAAA6gA9nEZIAAheIARAAIAAAPQAKgRARAAIAOACIgIAQQgFgEgFAAQgKAAgGAJQgHAIAAALIAAA2gEglrAEZIAAheIASAAIAAAPQAJgRARAAIANACIgGAQQgGgEgGAAQgIAAgHAJQgGAIAAALIAAA2gEgoOAEZIAAheIARAAIAAAPQAIgRATAAIAMACIgHAQQgFgEgGAAQgIAAgHAJQgGAIAAALIAAA2gAivCpQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgEAAgDgDgAlCCoIAPgdIARAAIgUAdgAk0BUQAHAAAEgDQAFgCAAgEQAAgHgIAAIAAgKQAJAAAFAFQAFAEAAAIQAAAIgHAFQgGAEgLAAgAXABRQARgUAAg6QAAgugRgZIAAgHQAPAHALAZQALAYAAAWQAAAcgKAXQgKAXgRANgAARA2QgKgXAAgcQAAgWALgYQALgZAPgHIAAAHQgRAZAAAuQAAA6ARAUIAAAJQgSgNgJgXgAn1BWQgKgDgGgFIAJgNQAOAJANAAQALAAAHgDQAGgEAAgGQAAgMgQAAIgLACIgLABQgUAAAAgPQAAgFAFgDQAEgEAIgCQgVgJAAgVQAAgPALgKQAKgKAPAAQAOAAAIAGIAJgKIAKAKIgKAIQAHAIgBAOQAAAMgJAKQgIAJgOACIgPABIgGACQgEACAAACQAAAEAIAAIAMgBIAMgCQAOAAAIAHQAHAGABAMQgBANgLAIQgLAIgTAAQgIAAgLgDgAnwgWQgFAGgBAJQABAIAFAGQAGAHAIAAQAJAAAFgHQAGgGAAgIQAAgJgGgGQgFgGgJAAQgIAAgGAGgEAs5ABOQAQgNAAgIQAAgEgDgEQgHgEAAgGQAAgFADgDQAEgDAFAAQAFAAAEAEQAEAEAAAGQAAAMgFAJQgFAJgQAMgAaYBOQAPgNAAgIQAAgEgDgEQgIgEAAgGQABgFADgDQAEgDAGAAQAEAAAEAEQAEAEAAAGQAAAMgFAJQgFAJgQAMgEArbAApQgLgOAAgWQAAgUALgNQAMgOATAAQAVAAALANQALANAAAVQAAAXgLANQgMANgUAAQgUAAgLgNgEArogATQgHAKABAOQAAAjAYAAQAMAAAGgJQAIgKgBgQQAAghgZAAQgLAAgHAJgEAoCAAuQgJgIABgMQAAgOAMgKQANgIATAAQAGAAAGACQAAgXgUAAQgQAAgJAJIgHgOQAFgEAJgDQAIgDAIAAQAUAAAJAKQAKAJAAAUIAAAgQAAAMAHAFIAAAIQgKAAgFgDQgGgDgCgHQgJANgVAAQgLAAgIgIgEAoSAALQgIAGAAAJQAAAPASAAQAMAAAKgMIAAgXIgLgCQgNAAgIAHgEAmvAAvIAGgQQAOAJAJAAQAPAAAAgNQAAgJgPgHQgMgFgEgDIgHgEQgCgEgBgEQgCgEAAgEQAAgMAJgGQAHgHAOAAQALAAAQAHIgGAPQgJgIgLAAQgGAAgEADQgDADAAAEQAAAJAKAFIALAEQALAFAGAGQAEAGAAAKQABANgJAHQgJAHgQAAQgPAAgNgHgEAlmAAvIAGgQQAOAJAJAAQAPAAAAgNQAAgJgPgHQgMgFgEgDIgHgEQgCgEgBgEQgCgEAAgEQAAgMAJgGQAHgHAOAAQALAAAQAHIgGAPQgJgIgLAAQgFAAgEADQgEADAAAEQAAAJAKAFIAMAEQAKAFAGAGQAEAGAAAKQAAANgIAHQgJAHgQAAQgPAAgNgHgEAkSAAqQgOgNAAgXQAAgVAOgOQANgNASAAQATAAAMAMQALALAAASQAAADgCAFIhDAAQAAAQAJAJQAIAIANAAQAOAAAKgIIAGAMQgDAEgJACQgKAEgMAAQgRAAgNgMgEAkfgAUQgIAGgBALIA0AAQABgKgHgHQgHgIgMAAQgLAAgHAIgEAi4AApQgNgNAAgWQAAgUANgOQANgOAXAAQAHAAAJADQAJAEADADIgIAMQgDgDgGgCQgHgDgFAAQgOAAgIAKQgIAJAAAPQAAARAIAIQAIAJAOAAQAMAAAMgJIAGAOQgOAJgTAAQgUAAgMgNgEAhXAAqQgOgNAAgXQAAgVAOgOQANgNASAAQATAAAMAMQALALAAASQAAADgCAFIhDAAQAAAQAJAJQAIAIAMAAQAOAAALgIIAHAMQgFAEgIACQgKAEgMAAQgRAAgNgMgEAhkgAUQgIAGgBALIA1AAQAAgKgHgHQgHgIgMAAQgLAAgHAIgAddAqQgOgNAAgXQAAgVAPgOQAMgNARAAQAUAAAMAMQALALAAASQAAADgBAFIhEAAQAAAQAJAJQAIAIAMAAQAOAAAKgIIAIAMQgFAEgIACQgJAEgNAAQgSAAgMgMgAdpgUQgHAGgBALIA1AAQgBgKgGgHQgHgIgMAAQgLAAgIAIgAcGAvIAGgQQAOAJAIAAQAQAAAAgNQAAgJgPgHQgLgFgFgDIgGgEQgEgEgBgEQgBgEAAgEQAAgMAIgGQAJgHANAAQAKAAAQAHIgEAPQgLgIgJAAQgGAAgFADQgEADABAEQgBAJAKAFIAMAEQAMAFAEAGQAGAGAAAKQAAANgJAHQgJAHgQAAQgPAAgNgHgAY6AqQgOgNAAgXQAAgVAOgOQANgNASAAQATAAAMAMQALALAAASQAAADgCAFIhDAAQAAAQAJAJQAIAIAMAAQAOAAALgIIAGAMQgDAEgJACQgKAEgMAAQgRAAgNgMgAZHgUQgIAGgBALIA1AAQAAgKgHgHQgHgIgMAAQgLAAgHAIgAVfAuQgIgIAAgMQAAgOANgKQAMgIAUAAQAFAAAHACQAAgXgVAAQgPAAgJAJIgGgOQAEgEAIgDQAJgDAIAAQAUAAAJAKQAKAJgBAUIAAAgQAAAMAIAFIAAAIQgKAAgFgDQgGgDgBgHQgLANgUAAQgLAAgJgIgAVwALQgIAGAAAJQAAAPASAAQAMAAAKgMIAAgXIgLgCQgNAAgIAHgAUpAaIAAhoIARAAIAABlQgBAHAFAFQAEAEAHAAIAAAPQggAAAAgcgATNAqQgOgNAAgXQAAgVAPgOQAMgNARAAQAVAAALAMQALALAAASQAAADgBAFIhEAAQAAAQAJAJQAIAIAMAAQAOAAAKgIIAIAMQgEAEgIACQgLAEgMAAQgSAAgMgMgATZgUQgHAGgBALIA0AAQAAgKgGgHQgHgIgMAAQgLAAgIAIgASLAuQgHgJAAgMIAAg0IgLAAIAAgNIALAAIAAgUIAQgGIAAAaIAaAAIAAANIgaAAIAAAtQABAMAEAFQAEAFAIAAQAHAAAHgDIACAOQgKADgMAAQgMAAgIgIgAPtAuQgIgIAAgMQAAgOAMgKQANgIAUAAQAFAAAGACQAAgXgUAAQgQAAgIAJIgHgOQAEgEAJgDQAJgDAHAAQAVAAAJAKQAJAJAAAUIAAAgQAAAMAIAFIAAAIQgKAAgGgDQgFgDgCgHQgKANgVAAQgLAAgIgIgAP+ALQgJAGABAJQAAAPARAAQAMAAAKgMIAAgXIgLgCQgNAAgHAHgAMcAaIAAhoIAQAAIAABlQAAAHAFAFQAEAEAHAAIAAAPQghAAABgcgAK/AuQgHgIgBgMQAAgOANgKQAMgIAUAAQAFAAAHACQAAgXgVAAQgPAAgIAJIgIgOQAFgEAIgDQAJgDAHAAQAVAAAKAKQAIAJABAUIAAAgQgBAMAIAFIAAAIQgKAAgFgDQgFgDgCgHQgKANgVAAQgLAAgJgIgALQALQgIAGAAAJQAAAPARAAQANAAAKgMIAAgXIgLgCQgNAAgIAHgAIcAqQgOgNAAgXQAAgVAOgOQANgNASAAQATAAAMAMQALALAAASQAAADgCAFIhDAAQAAAQAJAJQAIAIANAAQAOAAAKgIIAGAMQgDAEgIACQgLAEgMAAQgRAAgNgMgAIpgUQgIAGgBALIA0AAQABgKgHgHQgHgIgMAAQgLAAgHAIgAHbAuQgIgJAAgMIAAg0IgLAAIAAgNIALAAIAAgUIARgGIAAAaIAaAAIAAANIgaAAIAAAtQAAAMADAFQAFAFAJAAQAGAAAGgDIADAOQgKADgNAAQgLAAgHgIgAFyAuQgIgIAAgMQAAgOANgKQAMgIATAAQAGAAAHACQgBgXgUAAQgPAAgJAJIgHgOQAFgEAIgDQAIgDAIAAQAUAAAKAKQAJAJAAAUIAAAgQAAAMAHAFIAAAIQgJAAgFgDQgGgDgCgHQgKANgVAAQgKAAgJgIgAGCALQgHAGgBAJQAAAPASAAQANAAAKgMIAAgXIgMgCQgMAAgJAHgAE7AaIAAhoIARAAIAABlQAAAHAFAFQADAEAIAAIAAAPQghAAAAgcgACpAuQgIgIAAgMQAAgOAMgKQANgIATAAQAGAAAGACQAAgXgUAAQgQAAgIAJIgHgOQAEgEAJgDQAIgDAIAAQAVAAAJAKQAJAJAAAUIAAAgQAAAMAHAFIAAAIQgJAAgGgDQgFgDgCgHQgKANgVAAQgLAAgIgIgAC6ALQgJAGABAJQAAAPARAAQANAAAJgMIAAgXIgLgCQgNAAgHAHgAiOApQgLgOAAgWQAAgUAMgNQAMgOATAAQAUAAALANQAMANgBAVQABAXgMANQgLANgUAAQgUAAgMgNgAiAgTQgHAKAAAOQAAAjAZAAQAMAAAGgJQAHgKAAgQQAAghgZAAQgMAAgGAJgAjtAuQgIgIAAgMQAAgOAMgKQAMgIAUAAQAFAAAHACQAAgXgUAAQgQAAgJAJIgHgOQAFgEAJgDQAIgDAHAAQAVAAAKAKQAIAJABAUIAAAgQAAAMAHAFIAAAIQgKAAgFgDQgGgDgCgHQgKANgUAAQgLAAgIgIgAjdALQgIAGAAAJQAAAPARAAQANAAAKgMIAAgXIgLgCQgNAAgIAHgAlDApQgNgNAAgWQAAgUANgOQANgOAXAAQAIAAAIADQAJAEADADIgIAMQgDgDgGgCQgHgDgFAAQgOAAgIAKQgIAJAAAPQAAARAIAIQAIAJAOAAQAMAAAMgJIAGAOQgOAJgTAAQgUAAgMgNgAmlAuQgHgIgBgMQAAgOANgKQAMgIAUAAQAGAAAGACQAAgXgVAAQgPAAgIAJIgHgOQAEgEAIgDQAJgDAHAAQAVAAAJAKQAJAJAAAUIAAAgQAAAMAIAFIAAAIQgKAAgFgDQgFgDgCgHQgLANgUAAQgLAAgJgIgAmUALQgIAGAAAJQAAAPARAAQANAAAKgMIAAgXIgLgCQgNAAgIAHgApcAqQgOgNAAgXQAAgVAPgOQAMgNARAAQAVAAALAMQALALAAASQAAADgBAFIhEAAQAAAQAJAJQAIAIANAAQANAAAKgIIAHAMQgEAEgHACQgKAEgNAAQgSAAgMgMgApQgUQgHAGgBALIA0AAQAAgKgGgHQgHgIgMAAQgLAAgIAIgAqeA2IgoheIASAAIAZBAIAZhAIASAAIgpBegAsXAuQgHgIgBgMQAAgOANgKQAMgIAUAAQAGAAAGACQAAgXgVAAQgPAAgIAJIgHgOQAEgEAIgDQAJgDAHAAQAVAAAJAKQAJAJAAAUIAAAgQAAAMAIAFIAAAIQgKAAgFgDQgFgDgCgHQgLANgUAAQgLAAgJgIgAsGALQgIAGAAAJQAAAPARAAQANAAAKgMIAAgXIgLgCQgNAAgIAHgAwMAqQgOgNAAgXQAAgVAPgOQAMgNARAAQAVAAALAMQALALAAASQAAADgBAFIhEAAQAAAQAJAJQAIAIANAAQANAAAKgIIAHAMQgEAEgHACQgKAEgNAAQgSAAgMgMgAwAgUQgHAGgBALIA0AAQAAgKgGgHQgHgIgMAAQgLAAgIAIgA0JAuQgIgIAAgMQAAgOAMgKQANgIAUAAQAFAAAGACQABgXgVAAQgQAAgIAJIgHgOQAFgEAIgDQAJgDAHAAQAVAAAJAKQAJAJAAAUIAAAgQAAAMAIAFIAAAIQgLAAgFgDQgFgDgCgHQgKANgUAAQgLAAgJgIgAz4ALQgIAGAAAJQAAAPARAAQAMAAAKgMIAAgXIgKgCQgOAAgHAHgA3zAuQgIgIAAgMQAAgOAMgKQANgIAUAAQAFAAAGACQABgXgVAAQgQAAgIAJIgHgOQAFgEAIgDQAJgDAHAAQAVAAAJAKQAJAJAAAUIAAAgQAAAMAIAFIAAAIQgLAAgFgDQgFgDgCgHQgKANgUAAQgLAAgJgIgA3iALQgIAGAAAJQAAAPARAAQAMAAAKgMIAAgXIgKgCQgOAAgHAHgA5CA0QgHgDgDgEIgHAJIgIAAIAAiEIARAAIAAAtQACgDAHgDQAGgDAHAAQATAAAMAOQAMANAAASQAAAYgMAOQgMANgVAAQgGAAgGgCgA5CgZQgHADgBACIAAA0QAAACAHADQAFADAEAAQARAAAHgIQAIgIgBgUQABgOgJgJQgJgJgOAAQgEAAgEADgA7sAuQgHgIgBgMQAAgOANgKQAMgIAUAAQAGAAAGACQAAgXgVAAQgPAAgIAJIgHgOQAEgEAIgDQAJgDAIAAQAUAAAJAKQAJAJAAAUIAAAgQAAAMAIAFIAAAIQgKAAgFgDQgFgDgCgHQgLANgUAAQgLAAgJgIgA7bALQgIAGAAAJQAAAPASAAQAMAAAKgMIAAgXIgLgCQgNAAgIAHgA/FAuQgJgIAAgMQAAgOANgKQANgIATAAQAFAAAHACQAAgXgVAAQgPAAgJAJIgGgOQAEgEAIgDQAJgDAIAAQAUAAAJAKQAKAJgBAUIAAAgQABAMAHAFIAAAIQgKAAgFgDQgFgDgDgHQgJANgVAAQgLAAgIgIgA+1ALQgIAGAAAJQAAAPASAAQAMAAAKgMIAAgXIgLgCQgNAAgIAHgEgiFAAaIAAhoIAQAAIAABlQAAAHAFAFQAEAEAHAAIAAAPQghAAABgcgEgj0AAuQgIgJAAgMIAAg0IgLAAIAAgNIALAAIAAgUIARgGIAAAaIAaAAIAAANIgaAAIAAAtQAAAMAEAFQAEAFAJAAQAHAAAGgDIADAOQgLADgMAAQgMAAgHgIgEglcAAtQgJgJABgQIAAg8IAQAAIAAA6QAAAWATAAQAIAAAHgFQAHgFACgGIAAhAIARAAIAABcIgRAAIAAgNQgDAGgIAEQgIAFgJAAQgPAAgIgJgEgn0AAuQgJgIABgMQAAgOAMgKQANgIATAAQAGAAAGACQAAgXgUAAQgQAAgJAJIgHgOQAFgEAJgDQAIgDAIAAQAUAAAJAKQAKAJAAAUIAAAgQAAAMAHAFIAAAIQgKAAgFgDQgGgDgCgHQgJANgVAAQgLAAgIgIgEgnkAALQgIAGAAAJQAAAPASAAQAMAAAKgMIAAgXIgLgCQgNAAgIAHgEgoyAAuQgHgJAAgMIAAg0IgLAAIAAgNIALAAIAAgUIAQgGIAAAaIAbAAIAAANIgbAAIAAAtQAAAMAEAFQAFAFAJAAQAGAAAGgDIADAOQgKADgNAAQgLAAgIgIgEgqOAAvIAFgQQAPAJAIAAQAPAAABgNQAAgJgPgHQgMgFgEgDIgHgEQgDgEgBgEQgCgEABgEQAAgMAIgGQAIgHAOAAQAKAAAQAHIgFAPQgKgIgKAAQgGAAgEADQgEADAAAEQAAAJAKAFIAMAEQALAFAFAGQAFAGAAAKQAAANgIAHQgKAHgPAAQgPAAgNgHgEgrjAAuQgIgIAAgMQAAgOANgKQAMgIATAAQAGAAAHACQgBgXgUAAQgPAAgJAJIgHgOQAFgEAIgDQAJgDAHAAQAUAAAKAKQAJAJAAAUIAAAgQAAAMAHAFIAAAIQgJAAgFgDQgGgDgCgHQgKANgVAAQgKAAgJgIgEgrTAALQgHAGgBAJQAAAPASAAQANAAAKgMIAAgXIgMgCQgNAAgIAHgAOLApQgLgMAAgVQAAgUAMgPQAOgPARAAQAPAAAHAHIAAgrIARAAIAACCIgRAAIAAgHQgJAJgRAAQgRAAgLgNgAOagSQgJAKABAOQAAAiAeAAQAEAAAGgDQAFgCACgDIAAgyQgGgKgLAAQgNAAgJAKgAxzApQgKgMgBgVQAAgUANgPQANgPARAAQAPAAAHAHIAAgrIARAAIAACCIgRAAIAAgHQgIAJgRAAQgRAAgMgNgAxkgSQgIAKAAAOQAAAiAfAAQAEAAAGgDQAFgCABgDIAAgyQgGgKgLAAQgNAAgJAKgEAqrAA0IAAhOIgOAAIAAgOIAeAAIAABcgEApeAA0IAAhcIARAAIAAAPQAJgRASAAIAMACIgGAQQgGgEgGAAQgIAAgHAJQgGAIAAALIAAA0gEAgnAA0IAAg1QAAgPgEgGQgFgGgKAAQgGAAgGAEQgHADgDAFIAABEIgQAAIAAhcIALAAIAFAMQAJgOASAAQAfAAAAAmIAAA4gAJ3A0IAAhcIARAAIAAAPQAKgRARAAIAOACIgHAQQgGgEgFAAQgJAAgHAJQgGAIgBALIAAA0gAB+A0IAAg1QAAgPgEgGQgGgGgKAAQgFAAgHAEQgGADgDAFIAABEIgRAAIAAhcIALAAIAGAMQAIgOATAAQAfAAAAAmIAAA4gAtCA0IAAg1QABgPgFgGQgFgGgLAAQgFAAgGAEQgHADgDAFIAABEIgQAAIAAhcIALAAIAFAMQAJgOASAAQAfAAAAAmIAAA4gA1RA0IAAhcIARAAIAAAPQAJgRASAAIANACIgHAQQgGgEgFAAQgJAAgHAJQgGAIAAALIAAA0gA2XA0IAAhcIARAAIAAAPQAJgRASAAIANACIgHAQQgFgEgGAAQgJAAgGAJQgHAIAAALIAAA0gA9qA0IAAhcIARAAIAAAPQAKgRASAAIAMACIgGAQQgGgEgGAAQgIAAgHAJQgGAIgBALIAAA0gEggnAA0IAAgEIA2hJIg1AAIAAgPIBOAAIAAAFIg1BIIA1AAIAAAPgEghKAA0IAAhOIgMAAIAAgOIAdAAIAABcgEgiyAA0IAAhOIgNAAIAAgOIAdAAIAABcgEgtLAA0IAAh/IAigBQATAAALAJQAKAIAAAPQAAAJgHAHQgGAIgIACQAPADAHAJQAHAGAAAPQAAARgNAKQgMAKgUAAgEgs5gAKIAAAvIANABQARAAAIgGQAIgGAAgOQAAgMgIgEQgHgGgRAAgEgs5gA8IAAAlIANAAQAZAAAAgUQAAgSgXAAIgPABgEAqtgA6QgEgDAAgEQABgEADgDQACgDAFAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgFAAgCgDgEghIgA6QgDgDAAgEQAAgEADgDQAEgDADAAQAFAAADADQADADAAAEQAAAEgDADQgDADgFAAQgDAAgEgDgEgiwgA6QgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgEAAgDgDgEAoWgA7IAPgdIARAAIgUAdgAjQg+QgHgDgCAAQgHAAgDAGIgIAAQABgHAEgFQAFgGAGAAQAHAAAGAEQAHADACAAQAHAAADgHIAHAAQgEASgMAAQgGAAgGgDgAMViKIAAgqQgHAHgSAAQgSAAgLgNQgLgNAAgXQAAgWAMgNQAMgOAVAAQALAAALAJIAFgHIAKAAIAACDgALtj3QgIAKAAAPQAAARAIAJQAIAJAOAAQAMAAAGgGIAAg4QgHgIgLAAQgOAAgIAKgAG7iKIAAgqQgHAHgRAAQgTAAgLgNQgLgNAAgXQAAgWANgNQAMgOAUAAQAMAAALAJIAEgHIAKAAIAACDgAGTj3QgIAKAAAPQAAARAIAJQAJAJANAAQAMAAAGgGIAAg4QgGgIgMAAQgNAAgJAKgEgmRgCKIAAiDIARAAIAAAIQAJgKANAAQAVAAALANQALAMAAAYQAAAWgLANQgMAOgVAAQgGAAgGgCQgIgCgBgDIAAAqgEgl4gD+QgGACgCADIAAA3QABADAFACQAFACAFAAQAfAAAAgjQAAgSgHgIQgIgJgPAAQgFAAgEADgAd/ixQgEgEAAgFQAAgGAEgEQADgDAGAAQAFAAAEADQAFAEAAAGQAAAFgFAEQgEAEgFAAQgGAAgDgEgAcZi6QgLgOAAgWQAAgWAMgNQAMgOATAAQAUAAALANQALANAAAXQAAAXgLANQgLANgUAAQgUAAgMgNgAcnj4QgHAKAAAQQAAAjAZAAQAMAAAGgJQAHgKAAgQQAAgjgZAAQgMAAgGAJgAbai1QgHgJAAgMIAAg2IgLAAIAAgNIALAAIAAgUIAQgGIAAAaIAaAAIAAANIgaAAIAAAvQAAAMAFAFQADAFAJAAQAHAAAGgDIADAOQgKADgNAAQgLAAgIgIgAYRi5QgOgNgBgXQAAgXAPgOQAMgNASAAQAUAAAMAMQAKALABASQgBAFgBAFIhEAAQAAAQAJAJQAJAIAMAAQAOAAAKgIIAHAMQgEAEgIACQgKAEgNAAQgRAAgMgMgAYdj5QgIAGgBALIA1AAQAAgKgHgHQgGgIgNAAQgLAAgHAIgAUYi6QgLgOAAgWQgBgWAMgNQAMgOAUAAQATAAAMANQALANAAAXQAAAXgLANQgMANgTAAQgVAAgLgNgAUlj4QgHAKABAQQAAAjAZAAQALAAAHgJQAGgKAAgQQAAgjgYAAQgMAAgHAJgAOni5QgOgNAAgXQAAgXAOgOQANgNARAAQAVAAALAMQALALAAASQAAAFgCAFIhDAAQAAAQAJAJQAIAIANAAQAOAAAJgIIAHAMQgEAEgHACQgLAEgMAAQgSAAgMgMgAOzj5QgHAGgBALIA0AAQABgKgHgHQgHgIgMAAQgLAAgIAIgANEi2QgHgJgBgQIAAg+IARAAIAAA8QAAAWATAAQAIAAAHgFQAHgFADgGIAAhCIAQAAIAABeIgQAAIAAgNQgDAGgJAEQgJAFgHAAQgQAAgJgJgAKljJIAAhqIARAAIAABnQAAAHAFAFQADAEAHAAIAAAPQggAAAAgcgAJJi1QgIgIAAgMQAAgOANgKQAMgKATAAQAGAAAHACQgBgXgUAAQgPAAgJAJIgHgOQAFgEAIgDQAIgDAIAAQAUAAAKAKQAJAJAAAUIAAAiQAAAMAHAFIAAAIQgKAAgEgDQgGgDgCgHQgKANgVAAQgLAAgIgIgAJZjYQgIAGAAAJQAAAPASAAQAMAAALgMIAAgXIgMgCQgMAAgJAHgAHri2QgIgJAAgQIAAg+IARAAIAAA8QgBAWAUAAQAIAAAGgFQAIgFACgGIAAhCIAQAAIAABeIgQAAIAAgNQgDAGgJAEQgIAFgIAAQgPAAgJgJgADvi1QgJgIABgMQAAgOAMgKQANgKATAAQAGAAAGACQAAgXgUAAQgQAAgJAJIgHgOQAFgEAJgDQAIgDAIAAQAUAAAKAKQAJAJAAAUIAAAiQAAAMAHAFIAAAIQgKAAgFgDQgGgDgCgHQgKANgUAAQgLAAgIgIgAD/jYQgIAGAAAJQAAAPASAAQAMAAAKgMIAAgXIgLgCQgNAAgIAHgABbi5QgOgNAAgXQAAgXAOgOQANgNASAAQATAAAMAMQALALAAASQAAAFgCAFIhDAAQAAAQAJAJQAIAIAMAAQAOAAALgIIAGAMQgDAEgJACQgKAEgMAAQgRAAgNgMgABoj5QgIAGgBALIA1AAQAAgKgHgHQgHgIgMAAQgLAAgHAIgAAEi0IAGgQQAOAJAJAAQAPAAAAgNQAAgJgPgHQgMgFgEgDIgHgGQgDgEAAgEQgCgEAAgEQAAgMAJgGQAHgHAOAAQALAAAPAHIgFAPQgJgIgLAAQgGAAgEADQgDADAAAEQAAAJAKAFIALAGQAMAFAFAGQAEAGAAAKQABANgJAHQgJAHgQAAQgPAAgNgHgAhbjJIAAhqIARAAIAABnQAAAHAEAFQAFAEAGAAIAAAPQggAAAAgcgAi3i1QgIgIAAgMQAAgOAMgKQANgKAUAAQAFAAAGACQABgXgVAAQgQAAgIAJIgHgOQAFgEAIgDQAIgDAIAAQAVAAAJAKQAJAJAAAUIAAAiQAAAMAIAFIAAAIQgLAAgEgDQgGgDgCgHQgKANgUAAQgLAAgJgIgAinjYQgHAGAAAJQAAAPARAAQAMAAAKgMIAAgXIgKgCQgNAAgJAHgAl3i1QgIgIAAgMQAAgOANgKQAMgKATAAQAGAAAHACQgBgXgUAAQgPAAgJAJIgHgOQAFgEAIgDQAJgDAHAAQAUAAAKAKQAJAJAAAUIAAAiQAAAMAHAFIAAAIQgJAAgFgDQgGgDgCgHQgKANgVAAQgKAAgJgIgAlnjYQgHAGgBAJQAAAPASAAQANAAAKgMIAAgXIgMgCQgNAAgIAHgAoKi5QgPgNAAgXQAAgXAPgOQAMgNASAAQAUAAAMAMQALALgBASQAAAFgBAFIhEAAQABAQAIAJQAJAIAMAAQAOAAAKgIIAHAMQgEAEgIACQgKAEgNAAQgRAAgMgMgAn+j5QgIAGgBALIA1AAQAAgKgHgHQgGgIgNAAQgKAAgIAIgAr8i0IAGgQQAOAJAIAAQAQAAAAgNQAAgJgPgHQgMgFgDgDIgHgGQgDgEgCgEQgBgEAAgEQAAgMAIgGQAJgHAOAAQAJAAAQAHIgEAPQgLgIgJAAQgHAAgDADQgFADAAAEQAAAJAKAFIANAGQAKAFAFAGQAGAGAAAKQAAANgJAHQgJAHgQAAQgOAAgOgHgAtQi1QgJgIABgMQAAgOAMgKQANgKATAAQAGAAAGACQAAgXgUAAQgQAAgJAJIgHgOQAFgEAJgDQAIgDAIAAQAUAAAKAKQAJAJAAAUIAAAiQAAAMAHAFIAAAIQgKAAgFgDQgGgDgCgHQgKANgUAAQgLAAgIgIgAtAjYQgIAGAAAJQAAAPASAAQAMAAAKgMIAAgXIgLgCQgNAAgIAHgAvwi5QgPgNAAgXQAAgXAPgOQAMgNASAAQAUAAAMAMQALALAAASQgBAFgBAFIhEAAQABAQAIAJQAJAIAMAAQAOAAAKgIIAHAMQgEAEgIACQgKAEgNAAQgRAAgMgMgAvkj5QgIAGgBALIA1AAQAAgKgHgHQgGgIgNAAQgLAAgHAIgAyZi1QgIgIAAgMQAAgOANgKQAMgKATAAQAGAAAHACQgBgXgUAAQgPAAgJAJIgHgOQAFgEAIgDQAIgDAIAAQAUAAAKAKQAJAJAAAUIAAAiQAAAMAHAFIAAAIQgKAAgEgDQgGgDgCgHQgKANgVAAQgLAAgIgIgAyIjYQgJAGAAAJQAAAPASAAQAMAAALgMIAAgXIgMgCQgMAAgIAHgAzWi1QgIgJABgMIAAg2IgMAAIAAgNIAMAAIAAgUIAQgGIAAAaIAaAAIAAANIgaAAIAAAvQAAAMAEAFQAEAFAJAAQAGAAAHgDIACAOQgKADgMAAQgMAAgHgIgA1pi0IAGgQQAOAJAIAAQAQAAAAgNQAAgJgPgHQgMgFgDgDIgHgGQgDgEgCgEQgBgEAAgEQAAgMAIgGQAJgHAOAAQAJAAAQAHIgEAPQgLgIgJAAQgHAAgDADQgFADAAAEQAAAJAKAFIANAGQAKAFAFAGQAGAGAAAKQAAANgJAHQgJAHgQAAQgOAAgOgHgA29i1QgJgIABgMQAAgOAMgKQANgKATAAQAGAAAGACQAAgXgUAAQgQAAgJAJIgHgOQAFgEAJgDQAIgDAIAAQAUAAAKAKQAJAJAAAUIAAAiQAAAMAHAFIAAAIQgKAAgFgDQgGgDgCgHQgKANgUAAQgLAAgIgIgA2tjYQgIAGAAAJQAAAPASAAQAMAAAKgMIAAgXIgLgCQgNAAgIAHgA6Yi1QgHgIAAgMQAAgOAMgKQANgKATAAQAFAAAHACQAAgXgUAAQgQAAgIAJIgIgOQAFgEAJgDQAIgDAHAAQAVAAAKAKQAIAJABAUIAAAiQgBAMAIAFIAAAIQgKAAgFgDQgFgDgDgHQgJANgVAAQgLAAgJgIgA6HjYQgIAGAAAJQAAAPARAAQANAAAKgMIAAgXIgLgCQgNAAgIAHgA7Ui1QgIgJAAgMIAAg2IgLAAIAAgNIALAAIAAgUIARgGIAAAaIAaAAIAAANIgaAAIAAAvQAAAMADAFQAEAFAKAAQAGAAAGgDIADAOQgKADgMAAQgMAAgHgIgA8WjJIAAhqIARAAIAABnQAAAHAFAFQADAEAHAAIAAAPQggAAAAgcgA9zi6QgLgOAAgWQAAgWAMgNQAMgOATAAQAUAAALANQALANAAAXQAAAXgLANQgLANgUAAQgUAAgMgNgA9lj4QgHAKAAAQQAAAjAZAAQAMAAAGgJQAHgKAAgQQAAgjgZAAQgMAAgGAJgA+yitIgohgIASAAIAYBCIAahCIARAAIgoBggEghggC5QgOgNAAgXQAAgXAPgOQAMgNARAAQAVAAALAMQALALAAASQAAAFgBAFIhEAAQAAAQAJAJQAIAIAMAAQAOAAAKgIIAIAMQgEAEgIACQgLAEgMAAQgSAAgMgMgEghUgD5QgHAGgBALIA0AAQAAgKgGgHQgHgIgMAAQgLAAgIAIgEgkngC6QgMgOAAgWQAAgWAMgNQALgOAUAAQAUAAALANQAMANAAAXQAAAXgMANQgMANgTAAQgVAAgKgNgEgkbgD4QgGAKAAAQQAAAjAZAAQALAAAHgJQAHgKAAgQQAAgjgZAAQgLAAgIAJgEgohgC5QgOgNgBgXQAAgXAPgOQAMgNASAAQAUAAAMAMQAKALABASQgBAFgBAFIhEAAQABAQAIAJQAJAIAMAAQAOAAAKgIIAHAMQgEAEgIACQgKAEgNAAQgRAAgMgMgEgoVgD5QgIAGgBALIA1AAQAAgKgHgHQgGgIgNAAQgLAAgHAIgEgp7gC6QgOgNAAgWQAAgWAOgOQANgOAXAAQAHAAAJADQAIAEAEADIgJAMQgCgDgHgCQgGgDgGAAQgNAAgJAKQgHAJgBARQABARAHAIQAJAJAOAAQALAAAMgJIAHAOQgOAJgUAAQgTAAgMgNgEgrdgC6QgMgOAAgWQAAgWAMgNQALgOAUAAQAUAAALANQALANAAAXQAAAXgLANQgMANgTAAQgVAAgKgNgEgrRgD4QgGAKAAAQQAAAjAZAAQALAAAHgJQAHgKAAgQQAAgjgZAAQgLAAgIAJgEgsngCtIgwiDIAUAAIAhBfIAghfIATAAIgvCDgApxi6QgLgMAAgVQAAgWANgPQAMgPASAAQAOAAAIAHIAAgrIAQAAIAACEIgQAAIAAgHQgJAJgQAAQgSAAgLgNgApij3QgJAKAAAQQAAAiAgAAQAEAAAFgDQAGgCABgDIAAg0QgHgKgKAAQgOAAgIAKgEgjHgC6QgKgMgBgVQAAgWANgPQANgPASAAQAOAAAHAHIAAgrIARAAIAACEIgRAAIAAgHQgIAJgRAAQgRAAgMgNgEgi4gD3QgIAKAAAQQAAAiAfAAQAEAAAGgDQAFgCABgDIAAg0QgGgKgLAAQgNAAgJAKgAalivIAAg3QAAgPgEgGQgGgGgKAAQgFAAgHAEQgGADgDAFIAABGIgRAAIAAheIALAAIAGAMQAIgOATAAQAeAAAAAmIAAA6gAXgivIAAg7QAAgXgTAAQgGAAgFAEQgGAEgCAFIAABFIgQAAIAAhDQAAgHgFgEQgGgEgIAAQgFAAgGAEQgFAEgDAFIAABFIgRAAIAAheIALAAIAGALQAJgNAPAAQAUAAAJANQACgFAHgEQAJgEAIAAQAOAAAIAJQAIAJAAAPIAAA/gATrivIAAg7QAAgXgUAAQgGAAgFAEQgFAEgCAFIAABFIgRAAIAAhDQAAgHgGgEQgEgEgJAAQgFAAgGAEQgGAEgCAFIAABFIgQAAIAAheIAKAAIAGALQAKgNAOAAQAUAAAJANQACgFAIgEQAHgEAIAAQAPAAAIAJQAIAJAAAPIAAA/gAQCivIAAheIARAAIAAAPQAKgRARAAIAOACIgHAQQgGgEgFAAQgJAAgHAJQgGAIgBALIAAA2gAgfivIAAhQIgNAAIAAgOIAdAAIAABegAjiivIAAg3QAAgPgFgGQgEgGgLAAQgGAAgGAEQgGADgEAFIAABGIgQAAIAAheIAMAAIAEAMQAJgOASAAQAfAAABAmIAAA6gAuOivIAAhQIgPAAIAAgOIAPAAQgBgSAKgKQAIgKAPAAQAHAAAIACIgEAMIgJgBQgJAAgFAGQgEAFAAAJIAAAFIAUAAIAAAOIgUAAIAABQgAw9ivIAAheIARAAIAAAPQAJgRASAAIANACIgHAQQgFgEgGAAQgJAAgHAJQgGAIAAALIAAA2gA47ivIAAheIARAAIAAAPQAIgRATAAIAMACIgHAQQgFgEgGAAQgJAAgGAJQgHAIABALIAAA2gAgdkfQgDgDAAgEQAAgEADgDQADgDAEAAQAEAAADADQAEADAAAEQAAAEgEADQgDADgEAAQgEAAgDgDgAijkgIAPgdIARAAIgUAdgA2gkgIgUgdIASAAIAOAdgEgn1gEgIgPgQIgPAQIgPAAIAagdIAKAAIAbAdg");
	this.shape.setTransform(437.1,298.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("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");
	this.shape_1.setTransform(410.8,242.3);

	this.nota = new cjs.Text("Você concluiu a tarefa de Análise da Pesquisa de Recomendação,\nnela você conquistou [pontuação] dos 250 pontos possíveis.", "18px 'Trebuchet MS'");
	this.nota.name = "nota";
	this.nota.lineHeight = 20;
	this.nota.lineWidth = 571;
	this.nota.setTransform(145.7,159.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.nota},{t:this.shape_1},{t:this.shape}]},1).wait(1));

	// Camada 8
	this.instance = new lib.fundo();
	this.instance.setTransform(495.2,327.5,1,1,0,0,0,284.2,91.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(1));

	// Camada 6
	this.bt = new lib.Símbolo3();
	this.bt.setTransform(437.3,366.5,1,1,0,0,0,0.3,19.5);
	this.bt._off = true;

	this.timeline.addTween(cjs.Tween.get(this.bt).wait(1).to({_off:false},0).wait(1));

	// Camada 5
	this.instance_1 = new lib.funds();
	this.instance_1.setTransform(444.9,260,0.953,1.061,0,0,0,466.9,245);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1).to({_off:false},0).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-131,99.1,104,24.9);


(lib.mc_alternativa_9 = function() {
	this.initialize();

	// checkBt
	this.checkBt = new lib.buletMc();
	this.checkBt.setTransform(0,0,1,0.87);

	// Hit
	this.hit = new lib.hitAlternativa();
	this.hit.setTransform(0,0,1,0.87);

	this.addChild(this.hit,this.checkBt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,875,36.8);


(lib.mc_alternativa_8 = function() {
	this.initialize();

	// checkBt
	this.checkBt = new lib.buletMc();
	this.checkBt.setTransform(0,0,1,0.882);

	// Hit
	this.hit = new lib.Symbol();
	this.hit.setTransform(0,0,2.734,0.32);

	this.addChild(this.hit,this.checkBt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,875,37.3);


(lib.mc_alternativa_7 = function() {
	this.initialize();

	// checkBt
	this.checkBt = new lib.buletMc();
	this.checkBt.setTransform(0,0,1,0.692);

	// Hit
	this.hit = new lib.hitAlternativa();
	this.hit.setTransform(0,0,1,0.692);

	this.addChild(this.hit,this.checkBt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,875,29.3);


(lib.mc_alternativa_6 = function() {
	this.initialize();

	// checkBt
	this.checkBt = new lib.buletMc();
	this.checkBt.setTransform(0,0,1,0.692);

	// Hit
	this.hit = new lib.hitAlternativacopy3();
	this.hit.setTransform(0,0,2.734,0.338);

	this.addChild(this.hit,this.checkBt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,875,29.3);


(lib.mc_alternativa_5 = function() {
	this.initialize();

	// checkBt
	this.checkBt = new lib.buletMc();
	this.checkBt.setTransform(-12,0,1,0.959);

	// Hit
	this.hit = new lib.hitAlternativacopy2();
	this.hit.setTransform(-12,0,2.734,0.555);

	this.addChild(this.hit,this.checkBt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-12,0,875,40.5);


(lib.mc_alternativa_4 = function() {
	this.initialize();

	// checkBt
	this.checkBt = new lib.buletMc();
	this.checkBt.setTransform(0,0,1,0.775);

	// Hit
	this.hit = new lib.hitAlternativacopy();
	this.hit.setTransform(0,0,2.734,0.48);

	this.addChild(this.hit,this.checkBt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,875,32.8);


(lib.mc_alternativa_3 = function() {
	this.initialize();

	// checkBt
	this.checkBt = new lib.buletMc();
	this.checkBt.setTransform(0,0,1,0.679);

	// Hit
	this.hit = new lib.hitAlternativa_();
	this.hit.setTransform(0,0,2.734,0.168);

	this.addChild(this.hit,this.checkBt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,875,28.7);


(lib.mc_alternativa_2 = function() {
	this.initialize();

	// checkBt
	this.checkBt = new lib.buletMc();
	this.checkBt.setTransform(0,0,1,1.178);

	// Hit
	this.hit = new lib.hitAlternativa();
	this.hit.setTransform(0,0,1,1.178);

	this.addChild(this.hit,this.checkBt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,875,49.8);


(lib.mc_alternativa_1 = function() {
	this.initialize();

	// checkBt
	this.checkBt = new lib.buletMc();

	// Hit
	this.hit = new lib.hitAlternativa();
	this.hit.setTransform(0,0,1,1.178);

	this.addChild(this.hit,this.checkBt);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(0,0,875,49.8);


(lib.pop_fechar_botao_fecha_pop = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{"UP":0,"OVER":1,DISABLED:2,ACTIVE:3,BLINK:4,CHECK:5});

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
	this.frame_3 = function() {
		this.stop();
	}
	this.frame_4 = function() {
		this.stop();
	}
	this.frame_5 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1).call(this.frame_2).wait(1).call(this.frame_3).wait(1).call(this.frame_4).wait(1).call(this.frame_5).wait(1));

	// Layer 4
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FF0000").ss(2,1,1).p("ADIDIImPAAIAAmPIGPAAg");
	this.shape.setTransform(15,15);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("rgba(255,255,255,0.498)").s().p("AjHDIIAAmPIGPAAIAAGPg");
	this.shape_1.setTransform(15,15);

	this.blink_mc = new lib.pop_fechar_botao_blink();
	this.blink_mc.setTransform(15,15,0.336,1.667,0,0,0,59.5,12);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("rgba(0,255,0,0.2)").s().p("AjHDIIAAmPIGPAAIAAGPg");
	this.shape_2.setTransform(15,15);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape}]},1).to({state:[{t:this.shape_1}]},1).to({state:[]},1).to({state:[{t:this.blink_mc}]},1).to({state:[{t:this.shape_2}]},1).wait(1));

	// texto
	this.text = new cjs.Text("Fechar", "20px 'DIN Medium'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 22;
	this.text.lineWidth = 63;
	this.text.setTransform(14.5,26);

	this.timeline.addTween(cjs.Tween.get(this.text).wait(6));

	// fundo
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(1,1,1).p("AABg4QBehhABACQA3A7ABADQABABheBaQgPANgQAQQgNANgMALQhiBhAAABIg4g0QAAABBkhmQALgLANgNQAQgRAMgPQAgAhAaAZQBZBcAAACQAAAAgbAaQgaAZABABQAAABhdheQgXgZgfgeQgqgpg1g1QAAABAcgeQAcgeABACQA0A1AmAqg");
	this.shape_3.setTransform(15.3,15.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF0000").s().p("AiXBlIBkhlIAYgYIAcggQBehhABACQA3A7ABADQABABheBaIg6g6IA6A6IgfAdIgZAYIAZgYIAfgdQBZBcAAACIgbAaQgaAZABABIhdhdIg2g3IA2A3IhiBigAiXBlIAAAAIAAAAIAAAAgAA7ACIAAAAgAiSheIAcgdQAcgeABACIBaBfIgcAgIgYAYIhfhegAABg4IAAAAgAiSheIAAAAIAAAAIAAAAg");
	this.shape_4.setTransform(15.3,15.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3}]}).wait(6));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-17,-1,67,55.2);


(lib.feed_incorreto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Textos
	this.text = new cjs.Text("FEEDBACK 1", "30px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 196;
	this.text.setTransform(496.6,178.6,0.693,0.693);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).wait(1).to({text:"FEEDBACK 2"},0).wait(1).to({text:"FEEDBACK 3"},0).wait(1).to({text:"FEEDBACK 4"},0).wait(1));

	// Botao Fechar
	this.fechar_btn = new lib.pop_fechar_botao_fecha_pop();
	this.fechar_btn.setTransform(496.4,136.1,1,1,0,0,0,16.5,26.9);
	this.fechar_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fechar_btn).wait(1).to({_off:false},0).wait(4));

	// Imagem
	this.text_1 = new cjs.Text("Feeds Incorretos - Pontual", "bold 22px 'DINPro-Bold'", "#FFFFFF");
	this.text_1.textAlign = "center";
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 272;
	this.text_1.setTransform(-140,0);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F30B20").s().p("Al8GIIIdsRIDcA9Ip5LWg");
	this.shape.setTransform(501,433.5,0.693,0.693);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#F30B20").s().p("AD0FqIqOq5IDXgaIJeLTg");
	this.shape_1.setTransform(499.6,435.5,0.693,0.693);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#F30B20").ss(12).p("ALwAAQAACZg7CMQg6CHhoBnQhoBpiHA5QiMA7iYAAQiYAAiMg7QiHg5hohpQhohng5iHQg7iMAAiZQAAiYA7iMQA5iHBohnQBphpCGg5QCMg7CYAAQCYAACMA7QCHA5BoBpQBoBnA6CHQA7CMAACYg");
	this.shape_2.setTransform(500.4,434.5,0.693,0.693);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#F30B20").s().p("AiACyQgJgCgDgBQgDgCgEgIQgIgOANgMQAFgFAYgOQA0geAkgrQARgVAfg0QAhg1AIgyIACgIIAAgCQABgRAOgLQANgMASACQARABAMAOQALANgBASIgDARQgLBCgpBBQgZApgrAjQgkAehJAqQgHAFgQAEQgNAEgHAAIgEAAg");
	this.shape_3.setTransform(485.6,260,0.693,0.693);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#F30B20").s().p("AgdCJQgNgegOgVIg0hGQgdglgFgVQgKgqAVgmQATghAbgKQAigNAWAMQAnAXA3BnIBRCEQglAxg8ATIg+ANIgQgkg");
	this.shape_4.setTransform(496.2,258.7,0.693,0.693);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#F30B20").s().p("AgoBbQgmgRgPgnQgOglARgmQASgmAmgPQAlgOAmARQAmASAPAmQAPAlgSAmQgRAmgnAPQgSAGgRAAQgUAAgUgJg");
	this.shape_5.setTransform(478.1,246.3,0.693,0.693);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#F30B20").s().p("ABQCsIgOgGQgXgXgfglQg6hLgihGQgPgkgMgmIABgBQgCgVANgRQANgRAVgCQAbgEAbAlIAAAEQACAEAAAHIAAAGIAFAlQAOBBAqBIQAVAlATAXIAJANQAHARgHAOQgHAMgMAAIgGgBg");
	this.shape_6.setTransform(508.2,291.6,0.693,0.693);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#F30B20").s().p("AAACeQgQgMgEgUIgBAAQgEgSgFgkQgDgbgJgVQgEgMgNgPIgOgTQgLgWgDgLQgFgTADgZQAEgZAVgSQASgQAZgGQAVgGAYAHQAhAKATAdQATAdgFAiIgCAaQgOBDAEBIIAAAFQADAWgNARQgNARgVACIgHABQgQAAgLgKg");
	this.shape_7.setTransform(502.3,275.3,0.693,0.693);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#F30B20").s().p("AhMC3IgHgQQgBgiAEgyQAIhjAbhQQALgeAWguIACAAQAMgRAWgDQAWgDARANQAPAMAEATQAEATgIARIAAAAIgGAKIgEAEIgWAiQglA8gTBUQgLAsgEAfIgDARQgGARgQAGIgJABQgKAAgHgKg");
	this.shape_8.setTransform(491.5,291.2,0.693,0.693);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#F30B20").s().p("AhwCVQgRgMgDgVQgEgVAMgSIgBgBQAKgSAWgeQARgWAJgVQAFgMADgWIADgZQAHgZAGgLQALgSAVgQQASgQAdABQAaABAXAOQAXANAMAWQATAfgHAkQgHAkgcAVIgVASQg8AqgxA6IgDAFQgOASgWADIgJABQgRAAgOgLg");
	this.shape_9.setTransform(499.1,274.2,0.693,0.693);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#F30B20").s().p("ACECCQgEgFgOgWQgdgvgpggQgTgQgxgbQgygdgvgHIgHgBIgBAAQgQgBgLgNQgLgMABgQQABgQAMgLQAMgLARABIAQACQA/AKA7AkQAmAWAhAnQAdAgApBCQAEAHAEAOQAFAQgBAGQgBAJgBACQgCADgIAFQgFACgEAAQgHAAgHgGg");
	this.shape_10.setTransform(502.4,256.3,0.693,0.693);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#F30B20").s().p("A3IGIIAAsOMAuRAAAIAAMOg");
	this.shape_11.setTransform(499.2,343,0.693,0.693);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s().p("EgT5AgaMAAAhA0MAnzAAAMAAABA0g");
	this.shape_12.setTransform(499.2,362.1,0.693,0.661);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#6F1E13").s().p("AjIhYIGSAAImSCxg");
	this.shape_13.setTransform(587.8,376.4,0.693,0.693);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#6F1E13").s().p("AjJhYIGTAAIAACxg");
	this.shape_14.setTransform(410.6,376.4,0.693,0.693);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1,p:{scaleX:1,scaleY:1,x:-140,y:0,text:"Feeds Incorretos - Pontual",font:"bold 22px 'DINPro-Bold'",lineHeight:22,lineWidth:272}}]}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.text_1,p:{scaleX:0.693,scaleY:0.693,x:500.1,y:335.2,text:"PENSE BEM!",font:"30px 'Arial'",lineHeight:34,lineWidth:196}},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(4));

	// Fundo
	this.instance = new lib.fundoFeed();
	this.instance.setTransform(512,325,0.824,0.888,0,0,0,621.1,366.1);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-276,0,276,32.1);


(lib.feed_correto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(5));

	// Textos
	this.text = new cjs.Text("FEEDBACK 1", "30px 'Arial'", "#FFFFFF");
	this.text.textAlign = "center";
	this.text.lineHeight = 34;
	this.text.lineWidth = 196;
	this.text.setTransform(496.6,178.6,0.693,0.693);
	this.text._off = true;

	this.timeline.addTween(cjs.Tween.get(this.text).wait(1).to({_off:false},0).wait(1).to({text:"FEEDBACK 2"},0).wait(1).to({text:"FEEDBACK 3"},0).wait(1).to({text:"FEEDBACK 4"},0).wait(1));

	// Botao Fechar
	this.fechar_btn = new lib.pop_fechar_botao_fecha_pop();
	this.fechar_btn.setTransform(496.4,136.1,1,1,0,0,0,16.5,26.9);
	this.fechar_btn._off = true;

	this.timeline.addTween(cjs.Tween.get(this.fechar_btn).wait(1).to({_off:false},0).wait(4));

	// Layer 1
	this.text_1 = new cjs.Text("Feeds Corretos - Pontual", "bold 22px 'DINPro-Bold'", "#FFFFFF");
	this.text_1.lineHeight = 22;
	this.text_1.lineWidth = 271;
	this.text_1.setTransform(-275,46);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#9AC74D").s().p("An3EDIBti0ID7DSIG2q+IDRCkIpqKXg");
	this.shape.setTransform(506.1,427.1,0.722,0.722);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#9AC74D").s().p("ABvGCQgKgHgBgNIAAgMQABgygMhDQgZiHhChSQgRAUgTAzIgaBJQgDAKAHAIQAIAKADAPQADASgEANQgFANgJACQgKACgJgLQgJgKgDgRIgCgPQAAgLgIAAQgRgBgKgMQgLgNAFgVIAThXQAMg2AGgMQAMgzgKg/IgUhZQgVgDg7gRQgYgHgagSQgTgNgagYQgggfgdgkQgIgOAKgJQAKgJANALQAxAsA5AgQApAVA6AEQAcACAVgCIArgEQA1gEA5AIIAyAAQA5gEApgVQA5ggAxgsQANgLAKAJQAKAJgIAOQgcAkghAfQgaAYgTANQgaASgYAHIgkALQgYAGgUADQgFAXgTBCQgNBAALAyQAMAYAQBHQAPBHAJBAQAEA6gHA2QgDAcgEAPQgCAFgEAEQgFAEgFAAQgEAAgFgDg");
	this.shape_1.setTransform(501.8,272.9,0.722,0.722);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#9AC74D").s().p("Ag1A7QgZgWgBghQgCggAXgYQAWgZAigCQAfgCAYAXQAZAWACAhQACAggWAZQgXAYghACIgEAAQgeAAgXgVg");
	this.shape_2.setTransform(502.7,244.1,0.722,0.722);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#9AC74D").ss(12).p("ALwAAQAACZg7CMQg6CHhoBnQhoBpiHA5QiMA7iYAAQiYAAiMg7QiHg5hohpQhohng5iHQg7iMAAiZQAAiYA7iLQA5iHBohoQBphpCGg5QCMg7CYAAQCYAACMA7QCHA5BoBpQBoBoA6CHQA7CLAACYg");
	this.shape_3.setTransform(503.1,427.3,0.722,0.722);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#9AC74D").s().p("A3IFnIAArNMAuRAAAIAALNg");
	this.shape_4.setTransform(501.8,333.5,0.722,0.722);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("Az6doMAAAg7PMAn0AAAMAAAA7Pg");
	this.shape_5.setTransform(501.8,361.8,0.722,0.722);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#556827").s().p("AjIhYIGRAAImRCxg");
	this.shape_6.setTransform(594.2,366,0.722,0.722);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#8AAE45").s().p("AoZFnIAArNIQzAAIlnFmIFnFng");
	this.shape_7.setTransform(618.5,346.5,0.722,0.722);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#556827").s().p("AjIhYIGSAAIAACxg");
	this.shape_8.setTransform(409.4,366,0.722,0.722);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#8AAE45").s().p("AoZFnIFnlnIlnlmIQzAAIAALNg");
	this.shape_9.setTransform(385.1,346.5,0.722,0.722);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.text_1,p:{scaleX:1,scaleY:1,x:-275,y:46,text:"Feeds Corretos - Pontual",font:"bold 22px 'DINPro-Bold'",textAlign:"",lineHeight:22,lineWidth:271}}]}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.text_1,p:{scaleX:0.722,scaleY:0.722,x:500.5,y:323,text:"MUITO BEM! ",font:"30px 'Arial'",textAlign:"center",lineHeight:34,lineWidth:196}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},1).wait(4));

	// Layer 3
	this.instance = new lib.fundoFeed();
	this.instance.setTransform(512,325,0.824,0.888,0,0,0,621.1,366.1);
	this.instance._off = true;
	new cjs.ButtonHelper(this.instance, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({_off:false},0).wait(4));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-275,46,275,32.1);


// stage content:



(lib.EA2A = function() {
	this.initialize();

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.bf(cjs.SpriteSheetUtils.extractFrame(ss["index_atlas_"],0), null, new cjs.Matrix2D(1,0,0,1,-438,-23)).s().p("EhEbABuIAAjbMCI2AAAIAADbg");
	this.shape.setTransform(438,26);

	this.alternativa10 = new lib.mc_alternativa_9();
	this.alternativa10.setTransform(0,376.6,1,1.318);

	this.feed = new lib.mc_feedback();

	this.componente = new lib.componente();
	this.componente.setTransform(-577.4,167,1,1,0,0,0,68.4,39);

	this.feedIncorreto = new lib.feed_incorreto();
	this.feedIncorreto.setTransform(-106,16.1,1,1,0,0,0,-106,16.1);

	this.feedCorreto = new lib.feed_correto();
	this.feedCorreto.setTransform(-107,16.1,1,1,0,0,0,-106,16.1);

	this.alternativa9 = new lib.mc_alternativa_9();
	this.alternativa9.setTransform(0,339.8);

	this.alternativa8 = new lib.mc_alternativa_8();
	this.alternativa8.setTransform(0,302.5);

	this.alternativa7 = new lib.mc_alternativa_7();
	this.alternativa7.setTransform(0,273.2);

	this.alternativa6 = new lib.mc_alternativa_6();
	this.alternativa6.setTransform(0,243.9);

	this.alternativa5 = new lib.mc_alternativa_5();
	this.alternativa5.setTransform(12,203.3);

	this.alternativa4 = new lib.mc_alternativa_4();
	this.alternativa4.setTransform(0,170.5);

	this.alternativa3 = new lib.mc_alternativa_3();
	this.alternativa3.setTransform(0,141.8);

	this.alternativa2 = new lib.mc_alternativa_2();
	this.alternativa2.setTransform(0,91.9);

	this.alternativa1 = new lib.mc_alternativa_1();
	this.alternativa1.setTransform(0,42.1);

	this.instance = new lib.tit_1();
	this.instance.setTransform(313.1,464.4,1,1,0,0,0,295.1,26.8);

	this.confirmaBt = new lib.btn_confirmar();
	this.confirmaBt.setTransform(786.7,472.7,1,1,0,0,0,56.5,19.5);

	this.instance_1 = new lib.nps_joao();

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C8C2AC").s().p("EhEbAHaIAAuzMCI3AAAIAAOzg");
	this.shape_1.setTransform(438,472.5);

	this.addChild(this.shape_1,this.instance_1,this.confirmaBt,this.instance,this.alternativa1,this.alternativa2,this.alternativa3,this.alternativa4,this.alternativa5,this.alternativa6,this.alternativa7,this.alternativa8,this.alternativa9,this.feedCorreto,this.feedIncorreto,this.componente,this.feed,this.alternativa10,this.shape);
}).prototype = p = new cjs.Container();
p.nominalBounds = new cjs.Rectangle(-208.8,275,1522.4,520);

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;