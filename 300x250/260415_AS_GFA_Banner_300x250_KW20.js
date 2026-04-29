(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"260415_AS_GFA_Banner_300x250_KW20_atlas_1", frames: [[0,1004,300,250],[0,0,600,500],[602,0,600,500],[1204,0,600,500],[0,502,600,500],[602,502,600,500],[1204,502,600,500]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.farbe2 = function() {
	this.initialize(ss["260415_AS_GFA_Banner_300x250_KW20_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.logo = function() {
	this.initialize(ss["260415_AS_GFA_Banner_300x250_KW20_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.step1 = function() {
	this.initialize(ss["260415_AS_GFA_Banner_300x250_KW20_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.step2 = function() {
	this.initialize(ss["260415_AS_GFA_Banner_300x250_KW20_atlas_1"]);
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.step3 = function() {
	this.initialize(ss["260415_AS_GFA_Banner_300x250_KW20_atlas_1"]);
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.step4 = function() {
	this.initialize(ss["260415_AS_GFA_Banner_300x250_KW20_atlas_1"]);
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.step5 = function() {
	this.initialize(ss["260415_AS_GFA_Banner_300x250_KW20_atlas_1"]);
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.SIEGER = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_7
	this.instance = new lib.step3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:true},1).wait(89).to({_off:false},0).wait(56));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.LOGO = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_10
	this.instance = new lib.logo();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(199));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.GUTES2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_6
	this.instance = new lib.step4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},1).wait(143).to({_off:false},0).wait(55));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.GUTES = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_9
	this.instance = new lib.step1();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.FRABE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_20
	this.instance = new lib.farbe2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(249));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.CLICKABLE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FF0000").s().p("AwoQpMAAAghRMAhRAAAMAAAAhRg");
	this.shape.setTransform(149.983,125.0082,1.4088,1.174);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CLICKABLE, new cjs.Rectangle(0,0,300,250), null);


(lib.BURRATA = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_8
	this.instance = new lib.step2();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(4).to({_off:true},1).wait(39).to({_off:false},0).wait(56));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.ANGEBOTE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Ebene_5
	this.instance = new lib.step5();
	this.instance.setTransform(0,0,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(199).to({_off:false},0).wait(50));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


// stage content:
(lib._260415_AS_GFA_Banner_300x250_KW20 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = false; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [0];
	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		root.btn.cursor = "pointer";
		root.btn.on("click", function(evt) {
		    if (evt.nativeEvent.button === 0) {
		        window.open(window.clickTag);
		    }
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(249));

	// ACTION
	this.btn = new lib.CLICKABLE();
	this.btn.name = "btn";
	this.btn.setTransform(150,125,1,1,0,0,0,150,125);
	this.btn.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.btn).wait(249));

	// LOGO
	this.instance = new lib.LOGO("synched",0);
	this.instance.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},200).wait(49));

	// GUTES
	this.instance_1 = new lib.GUTES("synched",0);
	this.instance_1.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({startPosition:44},0).to({x:-157.95,startPosition:4},10).to({_off:true},1).wait(194));

	// BURRATA
	this.instance_2 = new lib.BURRATA("synched",44);
	this.instance_2.setTransform(462,125,1,1,0,0,0,150,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).to({x:150,startPosition:54},10).wait(40).to({startPosition:94},0).to({x:-159.95,startPosition:4},10).to({_off:true},1).wait(144));

	// SIEGER
	this.instance_3 = new lib.SIEGER("synched",94);
	this.instance_3.setTransform(458,125,1,1,0,0,0,150,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(94).to({_off:false},0).to({x:150,startPosition:104},10).wait(40).to({startPosition:144},0).to({x:-157.95,startPosition:4},10,cjs.Ease.quadIn).to({_off:true},1).wait(94));

	// GUTES2
	this.instance_4 = new lib.GUTES2("synched",144);
	this.instance_4.setTransform(459,125,1,1,0,0,0,150,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(144).to({_off:false},0).to({x:150,startPosition:154},10,cjs.Ease.quadIn).wait(40).to({startPosition:194},0).to({scaleX:0.0467,x:150.05,startPosition:0},5).to({_off:true},1).wait(49));

	// ANGEBOTE
	this.instance_5 = new lib.ANGEBOTE("synched",199);
	this.instance_5.setTransform(150.05,125,0.0667,1,0,0,0,150,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(199).to({_off:false},0).to({scaleX:1,x:150,startPosition:204,loop:false},5).wait(45));

	// FRABE
	this.instance_6 = new lib.FRABE("synched",0);
	this.instance_6.setTransform(150,125,1,1,0,0,0,150,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(249));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-159.9,125,771.9,125);
// library properties:
lib.properties = {
	id: 'A2B69B7DD730476C952CEDC28A8E9CDB',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/260415_AS_GFA_Banner_300x250_KW20_atlas_1.png", id:"260415_AS_GFA_Banner_300x250_KW20_atlas_1"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A2B69B7DD730476C952CEDC28A8E9CDB'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;