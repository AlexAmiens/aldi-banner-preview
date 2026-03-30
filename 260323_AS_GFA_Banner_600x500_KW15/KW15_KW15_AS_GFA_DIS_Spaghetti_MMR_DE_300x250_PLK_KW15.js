(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


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



(lib._260327_AS_GFA_Banner_600x500_KW15_1 = function() {
	this.initialize(img._260327_AS_GFA_Banner_600x500_KW15_1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib._260327_AS_GFA_Banner_600x500_KW15_2 = function() {
	this.initialize(img._260327_AS_GFA_Banner_600x500_KW15_2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib._260327_AS_GFA_Banner_600x500_KW15_3 = function() {
	this.initialize(img._260327_AS_GFA_Banner_600x500_KW15_3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib._260327_AS_GFA_Banner_600x500_KW15_4 = function() {
	this.initialize(img._260327_AS_GFA_Banner_600x500_KW15_4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib._260327_AS_GFA_Banner_600x500_KW15_5 = function() {
	this.initialize(img._260327_AS_GFA_Banner_600x500_KW15_5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,600,500);


(lib.Background = function() {
	this.initialize(img.Background);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,598,500);


(lib.Cornerlogo = function() {
	this.initialize(img.Cornerlogo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,110);// helper functions:

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


(lib.SPAREN = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _60327_AS_GFA_Banner_600x500_KW15_1
	this.instance = new lib._260327_AS_GFA_Banner_600x500_KW15_1();
	this.instance.setTransform(315,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(53).to({_off:true},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,615,250);


(lib.OEL = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _60327_AS_GFA_Banner_600x500_KW15_2
	this.instance = new lib._260327_AS_GFA_Banner_600x500_KW15_2();
	this.instance.setTransform(0,0,0.5,0.5);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(44).to({_off:false},0).wait(61));

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

	// Cornerlogo
	this.instance = new lib.Cornerlogo();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(200));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,46,55);


(lib.HINTERGRUND = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Background
	this.instance = new lib.Background();
	this.instance.setTransform(0,0,0.52,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(249));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,311,250);


(lib.GUTESFUERALLE = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _60327_AS_GFA_Banner_600x500_KW15_4
	this.instance = new lib._260327_AS_GFA_Banner_600x500_KW15_4();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


(lib.CLICKABLE_AREA = function(mode,startPosition,loop,reversed) {
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
	this.shape.graphics.f("#0066CC").s().p("EgsDAhIMAAAhCPMBYHAAAMAAABCPg");
	this.shape.setTransform(150.0177,124.9915,0.5319,0.5897);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.CLICKABLE_AREA, new cjs.Rectangle(0,0,300,250), null);


(lib.AUSZEICHNUNG = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// _60327_AS_GFA_Banner_600x500_KW15_3
	this.instance = new lib._260327_AS_GFA_Banner_600x500_KW15_3();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

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

	// _60327_AS_GFA_Banner_600x500_KW15_5
	this.instance = new lib._260327_AS_GFA_Banner_600x500_KW15_5();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,300,250);


// stage content:
(lib._260323_AS_GFA_Banner_600x500_KW15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
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
		root.btn.on("click", function() {
		    window.open(window.clickTag);
		});
		 
		// enableMouseOver auf Stage-Ebene
		AdobeAn.bootstrapCallback(function() {
		    stage.enableMouseOver(20);
		});
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(249));

	// ACTION
	this.btn = new lib.CLICKABLE_AREA();
	this.btn.name = "btn";
	this.btn.setTransform(150,125,1,1,0,0,0,150,125);
	this.btn.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.btn).to({_off:true},200).wait(49));

	// LOGO
	this.instance = new lib.LOGO("synched",0);
	this.instance.setTransform(35,39.5,1,1,0,0,0,23,27.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).to({_off:true},200).wait(49));

	// SPAREN
	this.instance_1 = new lib.SPAREN("synched",0);
	this.instance_1.setTransform(-7.5,125,1,1,0,0,0,307.5,125);

	this.timeline.addTween(cjs.Tween.get({}).to({t:this.instance_1}]}).to({state:[{t:this.instance_1}]},44).to({state:[{t:this.instance_1}]},10).to({state:[]},1).wait(194));
	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(44).to({startPosition:44},0).to({x:-328.45},10).to({_off:true},1).wait(194));

	// OEL
	this.instance_2 = new lib.OEL("synched",44);
	this.instance_2.setTransform(466,125,1,1,0,0,0,150,125);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(44).to({_off:false},0).to({x:150,startPosition:54},10,cjs.Ease.quadIn).wait(40).to({startPosition:94},0).to({x:-167,startPosition:104},10,cjs.Ease.quadIn).to({_off:true},1).wait(144));

	// AUSZEICHNUNG
	this.instance_3 = new lib.AUSZEICHNUNG("synched",0);
	this.instance_3.setTransform(463,125,1,1,0,0,0,150,125);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(94).to({_off:false},0).to({x:150},10,cjs.Ease.quadIn).wait(40).to({startPosition:0},0).to({x:-167.95},10,cjs.Ease.quadIn).to({_off:true},1).wait(94));

	// GUTES_FUER_ALLE
	this.instance_4 = new lib.GUTESFUERALLE("synched",0);
	this.instance_4.setTransform(464,125,1,1,0,0,0,150,125);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(144).to({_off:false},0).to({x:150},10,cjs.Ease.quadIn).wait(40).to({startPosition:0},0).to({scaleX:0.0737},5).to({_off:true},1).wait(49));

	// ANGEBOTE
	this.instance_5 = new lib.ANGEBOTE("synched",0);
	this.instance_5.setTransform(149.95,125,0.0733,1,0,0,0,150.1,125);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(199).to({_off:false},0).to({regX:150,scaleX:1,x:150},5).wait(45));

	// HINTERGRUND
	this.instance_6 = new lib.HINTERGRUND("synched",0);
	this.instance_6.setTransform(149.5,125,1,1,0,0,0,155.5,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(249));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-170.9,125,786.9,125);
// library properties:
lib.properties = {
	id: '214231336FB949949CF4DC1416E1E026',
	width: 300,
	height: 250,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/_260327_AS_GFA_Banner_600x500_KW15_1.jpg", id:"_260327_AS_GFA_Banner_600x500_KW15_1"},
		{src:"images/_260327_AS_GFA_Banner_600x500_KW15_2.jpg", id:"_260327_AS_GFA_Banner_600x500_KW15_2"},
		{src:"images/_260327_AS_GFA_Banner_600x500_KW15_3.jpg", id:"_260327_AS_GFA_Banner_600x500_KW15_3"},
		{src:"images/_260327_AS_GFA_Banner_600x500_KW15_4.jpg", id:"_260327_AS_GFA_Banner_600x500_KW15_4"},
		{src:"images/_260327_AS_GFA_Banner_600x500_KW15_5.jpg", id:"_260327_AS_GFA_Banner_600x500_KW15_5"},
		{src:"images/Background.jpg", id:"Background"},
		{src:"images/Cornerlogo.png", id:"Cornerlogo"}
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
an.compositions['214231336FB949949CF4DC1416E1E026'] = {
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
