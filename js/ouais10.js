(function (lib, img, cjs, ss) {

var p; // shortcut to reference prototypes
lib.webFontTxtFilters = {}; 
var rect; // used to reference frame bounds

// library properties:
lib.properties = {
	width: 1200,
	height: 300,
	fps: 12,
	color: "#000000",
	webfonts: {},
	manifest: [
		{src:"../audio/ai02.mp3", id:"ai02"},
		{src:"../audio/bing.mp3", id:"bing"},
		{src:"../audio/carre_marche.mp3", id:"carre_marche"},
		{src:"../audio/marche01.mp3", id:"marche01"},
		{src:"../audio/marche02.mp3", id:"marche02"},
		{src:"../audio/ooo.mp3", id:"ooo"},
		{src:"../audio/ouoai01.mp3", id:"ouoai01"},
		{src:"../audio/ou02.mp3", id:"ou02"},
		{src:"../audio/ouais00.mp3", id:"ouais00"},
		{src:"../audio/silence8000.mp3", id:"silence8000"},
		{src:"../audio/ttt.mp3", id:"ttt"}
	]
};



lib.webfontAvailable = function(family) { 
	lib.properties.webfonts[family] = true;
	var txtFilters = lib.webFontTxtFilters && lib.webFontTxtFilters[family] || [];
	for(var f = 0; f < txtFilters.length; ++f) {
		txtFilters[f].updateCache();
	}
};
// symbols:



(lib.ouais_double_00000 = function() {
	this.spriteSheet = ss["ouais10_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00001 = function() {
	this.spriteSheet = ss["ouais10_atlas_2"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00002 = function() {
	this.spriteSheet = ss["ouais10_atlas_2"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00003 = function() {
	this.spriteSheet = ss["ouais10_atlas_2"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00004 = function() {
	this.spriteSheet = ss["ouais10_atlas_2"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00005 = function() {
	this.spriteSheet = ss["ouais10_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00006 = function() {
	this.spriteSheet = ss["ouais10_atlas_3"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00007 = function() {
	this.spriteSheet = ss["ouais10_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00008 = function() {
	this.spriteSheet = ss["ouais10_atlas_3"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00009 = function() {
	this.spriteSheet = ss["ouais10_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00010 = function() {
	this.spriteSheet = ss["ouais10_atlas_3"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00011 = function() {
	this.spriteSheet = ss["ouais10_atlas_5"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00012 = function() {
	this.spriteSheet = ss["ouais10_atlas_6"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00013 = function() {
	this.spriteSheet = ss["ouais10_atlas_6"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00014 = function() {
	this.spriteSheet = ss["ouais10_atlas_3"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00015 = function() {
	this.spriteSheet = ss["ouais10_atlas_5"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00016 = function() {
	this.spriteSheet = ss["ouais10_atlas_4"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00017 = function() {
	this.spriteSheet = ss["ouais10_atlas_4"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00018 = function() {
	this.spriteSheet = ss["ouais10_atlas_4"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00019 = function() {
	this.spriteSheet = ss["ouais10_atlas_5"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00020 = function() {
	this.spriteSheet = ss["ouais10_atlas_6"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00021 = function() {
	this.spriteSheet = ss["ouais10_atlas_4"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00022 = function() {
	this.spriteSheet = ss["ouais10_atlas_5"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00023 = function() {
	this.spriteSheet = ss["ouais10_atlas_6"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00024 = function() {
	this.spriteSheet = ss["ouais10_atlas_7"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00025 = function() {
	this.spriteSheet = ss["ouais10_atlas_9"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00026 = function() {
	this.spriteSheet = ss["ouais10_atlas_11"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00027 = function() {
	this.spriteSheet = ss["ouais10_atlas_9"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00028 = function() {
	this.spriteSheet = ss["ouais10_atlas_8"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00029 = function() {
	this.spriteSheet = ss["ouais10_atlas_10"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00030 = function() {
	this.spriteSheet = ss["ouais10_atlas_7"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00031 = function() {
	this.spriteSheet = ss["ouais10_atlas_8"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00032 = function() {
	this.spriteSheet = ss["ouais10_atlas_8"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00033 = function() {
	this.spriteSheet = ss["ouais10_atlas_10"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00034 = function() {
	this.spriteSheet = ss["ouais10_atlas_8"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00035 = function() {
	this.spriteSheet = ss["ouais10_atlas_9"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00036 = function() {
	this.spriteSheet = ss["ouais10_atlas_10"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00037 = function() {
	this.spriteSheet = ss["ouais10_atlas_10"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00038 = function() {
	this.spriteSheet = ss["ouais10_atlas_9"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00039 = function() {
	this.spriteSheet = ss["ouais10_atlas_11"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00040 = function() {
	this.spriteSheet = ss["ouais10_atlas_11"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00041 = function() {
	this.spriteSheet = ss["ouais10_atlas_7"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00042 = function() {
	this.spriteSheet = ss["ouais10_atlas_11"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00043 = function() {
	this.spriteSheet = ss["ouais10_atlas_12"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00044 = function() {
	this.spriteSheet = ss["ouais10_atlas_7"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00045 = function() {
	this.spriteSheet = ss["ouais10_atlas_15"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00046 = function() {
	this.spriteSheet = ss["ouais10_atlas_15"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00047 = function() {
	this.spriteSheet = ss["ouais10_atlas_13"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00048 = function() {
	this.spriteSheet = ss["ouais10_atlas_12"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00049 = function() {
	this.spriteSheet = ss["ouais10_atlas_13"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00050 = function() {
	this.spriteSheet = ss["ouais10_atlas_13"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00051 = function() {
	this.spriteSheet = ss["ouais10_atlas_15"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00052 = function() {
	this.spriteSheet = ss["ouais10_atlas_14"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00053 = function() {
	this.spriteSheet = ss["ouais10_atlas_12"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00054 = function() {
	this.spriteSheet = ss["ouais10_atlas_13"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00055 = function() {
	this.spriteSheet = ss["ouais10_atlas_12"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00056 = function() {
	this.spriteSheet = ss["ouais10_atlas_14"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00057 = function() {
	this.spriteSheet = ss["ouais10_atlas_16"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00058 = function() {
	this.spriteSheet = ss["ouais10_atlas_16"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00059 = function() {
	this.spriteSheet = ss["ouais10_atlas_14"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00060 = function() {
	this.spriteSheet = ss["ouais10_atlas_15"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00061 = function() {
	this.spriteSheet = ss["ouais10_atlas_14"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00062 = function() {
	this.spriteSheet = ss["ouais10_atlas_19"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00063 = function() {
	this.spriteSheet = ss["ouais10_atlas_20"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00064 = function() {
	this.spriteSheet = ss["ouais10_atlas_18"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00065 = function() {
	this.spriteSheet = ss["ouais10_atlas_17"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00066 = function() {
	this.spriteSheet = ss["ouais10_atlas_18"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00067 = function() {
	this.spriteSheet = ss["ouais10_atlas_19"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00068 = function() {
	this.spriteSheet = ss["ouais10_atlas_16"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00069 = function() {
	this.spriteSheet = ss["ouais10_atlas_20"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00070 = function() {
	this.spriteSheet = ss["ouais10_atlas_21"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00071 = function() {
	this.spriteSheet = ss["ouais10_atlas_17"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00072 = function() {
	this.spriteSheet = ss["ouais10_atlas_20"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00073 = function() {
	this.spriteSheet = ss["ouais10_atlas_17"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00074 = function() {
	this.spriteSheet = ss["ouais10_atlas_17"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00075 = function() {
	this.spriteSheet = ss["ouais10_atlas_20"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00076 = function() {
	this.spriteSheet = ss["ouais10_atlas_19"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00077 = function() {
	this.spriteSheet = ss["ouais10_atlas_18"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00078 = function() {
	this.spriteSheet = ss["ouais10_atlas_19"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00079 = function() {
	this.spriteSheet = ss["ouais10_atlas_16"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00080 = function() {
	this.spriteSheet = ss["ouais10_atlas_21"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00081 = function() {
	this.spriteSheet = ss["ouais10_atlas_21"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00082 = function() {
	this.spriteSheet = ss["ouais10_atlas_21"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00083 = function() {
	this.spriteSheet = ss["ouais10_atlas_22"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00084 = function() {
	this.spriteSheet = ss["ouais10_atlas_22"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00085 = function() {
	this.spriteSheet = ss["ouais10_atlas_22"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00086 = function() {
	this.spriteSheet = ss["ouais10_atlas_18"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00087 = function() {
	this.spriteSheet = ss["ouais10_atlas_22"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00088 = function() {
	this.spriteSheet = ss["ouais10_atlas_23"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00089 = function() {
	this.spriteSheet = ss["ouais10_atlas_24"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00090 = function() {
	this.spriteSheet = ss["ouais10_atlas_23"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00091 = function() {
	this.spriteSheet = ss["ouais10_atlas_25"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00092 = function() {
	this.spriteSheet = ss["ouais10_atlas_25"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00093 = function() {
	this.spriteSheet = ss["ouais10_atlas_23"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00094 = function() {
	this.spriteSheet = ss["ouais10_atlas_25"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00095 = function() {
	this.spriteSheet = ss["ouais10_atlas_23"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00096 = function() {
	this.spriteSheet = ss["ouais10_atlas_24"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00097 = function() {
	this.spriteSheet = ss["ouais10_atlas_24"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00098 = function() {
	this.spriteSheet = ss["ouais10_atlas_24"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00099 = function() {
	this.spriteSheet = ss["ouais10_atlas_25"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00100 = function() {
	this.spriteSheet = ss["ouais10_atlas_27"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00101 = function() {
	this.spriteSheet = ss["ouais10_atlas_27"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00102 = function() {
	this.spriteSheet = ss["ouais10_atlas_27"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00103 = function() {
	this.spriteSheet = ss["ouais10_atlas_26"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00104 = function() {
	this.spriteSheet = ss["ouais10_atlas_29"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00105 = function() {
	this.spriteSheet = ss["ouais10_atlas_29"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00106 = function() {
	this.spriteSheet = ss["ouais10_atlas_27"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00107 = function() {
	this.spriteSheet = ss["ouais10_atlas_28"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00108 = function() {
	this.spriteSheet = ss["ouais10_atlas_26"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00109 = function() {
	this.spriteSheet = ss["ouais10_atlas_30"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00110 = function() {
	this.spriteSheet = ss["ouais10_atlas_28"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00111 = function() {
	this.spriteSheet = ss["ouais10_atlas_26"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00112 = function() {
	this.spriteSheet = ss["ouais10_atlas_29"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00113 = function() {
	this.spriteSheet = ss["ouais10_atlas_30"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00114 = function() {
	this.spriteSheet = ss["ouais10_atlas_28"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00115 = function() {
	this.spriteSheet = ss["ouais10_atlas_28"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00116 = function() {
	this.spriteSheet = ss["ouais10_atlas_30"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00117 = function() {
	this.spriteSheet = ss["ouais10_atlas_26"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00118 = function() {
	this.spriteSheet = ss["ouais10_atlas_31"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00119 = function() {
	this.spriteSheet = ss["ouais10_atlas_30"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00120 = function() {
	this.spriteSheet = ss["ouais10_atlas_32"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00121 = function() {
	this.spriteSheet = ss["ouais10_atlas_29"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00122 = function() {
	this.spriteSheet = ss["ouais10_atlas_35"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00123 = function() {
	this.spriteSheet = ss["ouais10_atlas_33"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00124 = function() {
	this.spriteSheet = ss["ouais10_atlas_31"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00125 = function() {
	this.spriteSheet = ss["ouais10_atlas_31"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00126 = function() {
	this.spriteSheet = ss["ouais10_atlas_35"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00127 = function() {
	this.spriteSheet = ss["ouais10_atlas_35"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00128 = function() {
	this.spriteSheet = ss["ouais10_atlas_31"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00129 = function() {
	this.spriteSheet = ss["ouais10_atlas_33"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00130 = function() {
	this.spriteSheet = ss["ouais10_atlas_32"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00131 = function() {
	this.spriteSheet = ss["ouais10_atlas_32"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00132 = function() {
	this.spriteSheet = ss["ouais10_atlas_35"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00133 = function() {
	this.spriteSheet = ss["ouais10_atlas_36"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00134 = function() {
	this.spriteSheet = ss["ouais10_atlas_33"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00135 = function() {
	this.spriteSheet = ss["ouais10_atlas_34"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00136 = function() {
	this.spriteSheet = ss["ouais10_atlas_34"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00137 = function() {
	this.spriteSheet = ss["ouais10_atlas_33"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00138 = function() {
	this.spriteSheet = ss["ouais10_atlas_34"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00139 = function() {
	this.spriteSheet = ss["ouais10_atlas_36"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00140 = function() {
	this.spriteSheet = ss["ouais10_atlas_34"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00141 = function() {
	this.spriteSheet = ss["ouais10_atlas_36"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00142 = function() {
	this.spriteSheet = ss["ouais10_atlas_36"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00143 = function() {
	this.spriteSheet = ss["ouais10_atlas_32"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00144 = function() {
	this.spriteSheet = ss["ouais10_atlas_41"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00145 = function() {
	this.spriteSheet = ss["ouais10_atlas_37"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00146 = function() {
	this.spriteSheet = ss["ouais10_atlas_38"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00147 = function() {
	this.spriteSheet = ss["ouais10_atlas_37"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00148 = function() {
	this.spriteSheet = ss["ouais10_atlas_39"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00149 = function() {
	this.spriteSheet = ss["ouais10_atlas_38"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00150 = function() {
	this.spriteSheet = ss["ouais10_atlas_39"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00151 = function() {
	this.spriteSheet = ss["ouais10_atlas_37"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00152 = function() {
	this.spriteSheet = ss["ouais10_atlas_37"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00153 = function() {
	this.spriteSheet = ss["ouais10_atlas_38"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00154 = function() {
	this.spriteSheet = ss["ouais10_atlas_41"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00155 = function() {
	this.spriteSheet = ss["ouais10_atlas_40"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00156 = function() {
	this.spriteSheet = ss["ouais10_atlas_39"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00157 = function() {
	this.spriteSheet = ss["ouais10_atlas_41"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00158 = function() {
	this.spriteSheet = ss["ouais10_atlas_38"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00159 = function() {
	this.spriteSheet = ss["ouais10_atlas_39"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00160 = function() {
	this.spriteSheet = ss["ouais10_atlas_40"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00161 = function() {
	this.spriteSheet = ss["ouais10_atlas_40"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00162 = function() {
	this.spriteSheet = ss["ouais10_atlas_41"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00163 = function() {
	this.spriteSheet = ss["ouais10_atlas_40"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00164 = function() {
	this.spriteSheet = ss["ouais10_atlas_44"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00165 = function() {
	this.spriteSheet = ss["ouais10_atlas_42"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00166 = function() {
	this.spriteSheet = ss["ouais10_atlas_44"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00167 = function() {
	this.spriteSheet = ss["ouais10_atlas_45"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00168 = function() {
	this.spriteSheet = ss["ouais10_atlas_42"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00169 = function() {
	this.spriteSheet = ss["ouais10_atlas_42"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00170 = function() {
	this.spriteSheet = ss["ouais10_atlas_43"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00171 = function() {
	this.spriteSheet = ss["ouais10_atlas_43"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00172 = function() {
	this.spriteSheet = ss["ouais10_atlas_42"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00173 = function() {
	this.spriteSheet = ss["ouais10_atlas_43"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00174 = function() {
	this.spriteSheet = ss["ouais10_atlas_43"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00175 = function() {
	this.spriteSheet = ss["ouais10_atlas_44"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00176 = function() {
	this.spriteSheet = ss["ouais10_atlas_44"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00177 = function() {
	this.spriteSheet = ss["ouais10_atlas_46"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00178 = function() {
	this.spriteSheet = ss["ouais10_atlas_45"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00179 = function() {
	this.spriteSheet = ss["ouais10_atlas_48"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00180 = function() {
	this.spriteSheet = ss["ouais10_atlas_48"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00181 = function() {
	this.spriteSheet = ss["ouais10_atlas_49"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00182 = function() {
	this.spriteSheet = ss["ouais10_atlas_45"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00183 = function() {
	this.spriteSheet = ss["ouais10_atlas_49"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00184 = function() {
	this.spriteSheet = ss["ouais10_atlas_48"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00185 = function() {
	this.spriteSheet = ss["ouais10_atlas_49"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00186 = function() {
	this.spriteSheet = ss["ouais10_atlas_49"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00187 = function() {
	this.spriteSheet = ss["ouais10_atlas_46"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00188 = function() {
	this.spriteSheet = ss["ouais10_atlas_47"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00189 = function() {
	this.spriteSheet = ss["ouais10_atlas_45"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00190 = function() {
	this.spriteSheet = ss["ouais10_atlas_47"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00191 = function() {
	this.spriteSheet = ss["ouais10_atlas_46"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00192 = function() {
	this.spriteSheet = ss["ouais10_atlas_50"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00193 = function() {
	this.spriteSheet = ss["ouais10_atlas_50"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00194 = function() {
	this.spriteSheet = ss["ouais10_atlas_47"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00195 = function() {
	this.spriteSheet = ss["ouais10_atlas_50"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00196 = function() {
	this.spriteSheet = ss["ouais10_atlas_50"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00197 = function() {
	this.spriteSheet = ss["ouais10_atlas_51"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00198 = function() {
	this.spriteSheet = ss["ouais10_atlas_46"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00199 = function() {
	this.spriteSheet = ss["ouais10_atlas_51"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00200 = function() {
	this.spriteSheet = ss["ouais10_atlas_51"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00201 = function() {
	this.spriteSheet = ss["ouais10_atlas_51"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00202 = function() {
	this.spriteSheet = ss["ouais10_atlas_47"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00203 = function() {
	this.spriteSheet = ss["ouais10_atlas_52"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00204 = function() {
	this.spriteSheet = ss["ouais10_atlas_52"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00205 = function() {
	this.spriteSheet = ss["ouais10_atlas_48"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00206 = function() {
	this.spriteSheet = ss["ouais10_atlas_52"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00207 = function() {
	this.spriteSheet = ss["ouais10_atlas_52"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00208 = function() {
	this.spriteSheet = ss["ouais10_atlas_53"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.ouais_double_00209 = function() {
	this.spriteSheet = ss["ouais10_atlas_53"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.clip = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_1 = function() {
		playSound("silence8000");
		playSound("marche01");
	}
	this.frame_15 = function() {
		playSound("bing");
	}
	this.frame_32 = function() {
		playSound("ouoai01");
	}
	this.frame_56 = function() {
		playSound("ou02");
	}
	this.frame_74 = function() {
		playSound("ai02");
	}
	this.frame_99 = function() {
		playSound("ouais00");
	}
	this.frame_126 = function() {
		playSound("carre_marche");
	}
	this.frame_140 = function() {
		playSound("ttt");
	}
	this.frame_169 = function() {
		playSound("ooo");
	}
	this.frame_189 = function() {
		playSound("marche02");
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(1).call(this.frame_1).wait(14).call(this.frame_15).wait(17).call(this.frame_32).wait(24).call(this.frame_56).wait(18).call(this.frame_74).wait(25).call(this.frame_99).wait(27).call(this.frame_126).wait(14).call(this.frame_140).wait(29).call(this.frame_169).wait(20).call(this.frame_189).wait(21));

	// Calque 14
	this.instance = new lib.ouais_double_00000();

	this.instance_1 = new lib.ouais_double_00001();

	this.instance_2 = new lib.ouais_double_00002();

	this.instance_3 = new lib.ouais_double_00003();

	this.instance_4 = new lib.ouais_double_00004();

	this.instance_5 = new lib.ouais_double_00005();

	this.instance_6 = new lib.ouais_double_00006();

	this.instance_7 = new lib.ouais_double_00007();

	this.instance_8 = new lib.ouais_double_00008();

	this.instance_9 = new lib.ouais_double_00009();

	this.instance_10 = new lib.ouais_double_00010();

	this.instance_11 = new lib.ouais_double_00011();

	this.instance_12 = new lib.ouais_double_00012();

	this.instance_13 = new lib.ouais_double_00013();

	this.instance_14 = new lib.ouais_double_00014();

	this.instance_15 = new lib.ouais_double_00015();

	this.instance_16 = new lib.ouais_double_00016();

	this.instance_17 = new lib.ouais_double_00017();

	this.instance_18 = new lib.ouais_double_00018();

	this.instance_19 = new lib.ouais_double_00019();

	this.instance_20 = new lib.ouais_double_00020();

	this.instance_21 = new lib.ouais_double_00021();

	this.instance_22 = new lib.ouais_double_00022();

	this.instance_23 = new lib.ouais_double_00023();

	this.instance_24 = new lib.ouais_double_00024();

	this.instance_25 = new lib.ouais_double_00025();

	this.instance_26 = new lib.ouais_double_00026();

	this.instance_27 = new lib.ouais_double_00027();

	this.instance_28 = new lib.ouais_double_00028();

	this.instance_29 = new lib.ouais_double_00029();

	this.instance_30 = new lib.ouais_double_00030();

	this.instance_31 = new lib.ouais_double_00031();

	this.instance_32 = new lib.ouais_double_00032();

	this.instance_33 = new lib.ouais_double_00033();

	this.instance_34 = new lib.ouais_double_00034();

	this.instance_35 = new lib.ouais_double_00035();

	this.instance_36 = new lib.ouais_double_00036();

	this.instance_37 = new lib.ouais_double_00037();

	this.instance_38 = new lib.ouais_double_00038();

	this.instance_39 = new lib.ouais_double_00039();

	this.instance_40 = new lib.ouais_double_00040();

	this.instance_41 = new lib.ouais_double_00041();

	this.instance_42 = new lib.ouais_double_00042();

	this.instance_43 = new lib.ouais_double_00043();

	this.instance_44 = new lib.ouais_double_00044();

	this.instance_45 = new lib.ouais_double_00045();

	this.instance_46 = new lib.ouais_double_00046();

	this.instance_47 = new lib.ouais_double_00047();

	this.instance_48 = new lib.ouais_double_00048();

	this.instance_49 = new lib.ouais_double_00049();

	this.instance_50 = new lib.ouais_double_00050();

	this.instance_51 = new lib.ouais_double_00051();

	this.instance_52 = new lib.ouais_double_00052();

	this.instance_53 = new lib.ouais_double_00053();

	this.instance_54 = new lib.ouais_double_00054();

	this.instance_55 = new lib.ouais_double_00055();

	this.instance_56 = new lib.ouais_double_00056();

	this.instance_57 = new lib.ouais_double_00057();

	this.instance_58 = new lib.ouais_double_00058();

	this.instance_59 = new lib.ouais_double_00059();

	this.instance_60 = new lib.ouais_double_00060();

	this.instance_61 = new lib.ouais_double_00061();

	this.instance_62 = new lib.ouais_double_00062();

	this.instance_63 = new lib.ouais_double_00063();

	this.instance_64 = new lib.ouais_double_00064();

	this.instance_65 = new lib.ouais_double_00065();

	this.instance_66 = new lib.ouais_double_00066();

	this.instance_67 = new lib.ouais_double_00067();

	this.instance_68 = new lib.ouais_double_00068();

	this.instance_69 = new lib.ouais_double_00069();

	this.instance_70 = new lib.ouais_double_00070();

	this.instance_71 = new lib.ouais_double_00071();

	this.instance_72 = new lib.ouais_double_00072();

	this.instance_73 = new lib.ouais_double_00073();

	this.instance_74 = new lib.ouais_double_00074();

	this.instance_75 = new lib.ouais_double_00075();

	this.instance_76 = new lib.ouais_double_00076();

	this.instance_77 = new lib.ouais_double_00077();

	this.instance_78 = new lib.ouais_double_00078();

	this.instance_79 = new lib.ouais_double_00079();

	this.instance_80 = new lib.ouais_double_00080();

	this.instance_81 = new lib.ouais_double_00081();

	this.instance_82 = new lib.ouais_double_00082();

	this.instance_83 = new lib.ouais_double_00083();

	this.instance_84 = new lib.ouais_double_00084();

	this.instance_85 = new lib.ouais_double_00085();

	this.instance_86 = new lib.ouais_double_00086();

	this.instance_87 = new lib.ouais_double_00087();

	this.instance_88 = new lib.ouais_double_00088();

	this.instance_89 = new lib.ouais_double_00089();

	this.instance_90 = new lib.ouais_double_00090();

	this.instance_91 = new lib.ouais_double_00091();

	this.instance_92 = new lib.ouais_double_00092();

	this.instance_93 = new lib.ouais_double_00093();

	this.instance_94 = new lib.ouais_double_00094();

	this.instance_95 = new lib.ouais_double_00095();

	this.instance_96 = new lib.ouais_double_00096();

	this.instance_97 = new lib.ouais_double_00097();

	this.instance_98 = new lib.ouais_double_00098();

	this.instance_99 = new lib.ouais_double_00099();

	this.instance_100 = new lib.ouais_double_00100();

	this.instance_101 = new lib.ouais_double_00101();

	this.instance_102 = new lib.ouais_double_00102();

	this.instance_103 = new lib.ouais_double_00103();

	this.instance_104 = new lib.ouais_double_00104();

	this.instance_105 = new lib.ouais_double_00105();

	this.instance_106 = new lib.ouais_double_00106();

	this.instance_107 = new lib.ouais_double_00107();

	this.instance_108 = new lib.ouais_double_00108();

	this.instance_109 = new lib.ouais_double_00109();

	this.instance_110 = new lib.ouais_double_00110();

	this.instance_111 = new lib.ouais_double_00111();

	this.instance_112 = new lib.ouais_double_00112();

	this.instance_113 = new lib.ouais_double_00113();

	this.instance_114 = new lib.ouais_double_00114();

	this.instance_115 = new lib.ouais_double_00115();

	this.instance_116 = new lib.ouais_double_00116();

	this.instance_117 = new lib.ouais_double_00117();

	this.instance_118 = new lib.ouais_double_00118();

	this.instance_119 = new lib.ouais_double_00119();

	this.instance_120 = new lib.ouais_double_00120();

	this.instance_121 = new lib.ouais_double_00121();

	this.instance_122 = new lib.ouais_double_00122();

	this.instance_123 = new lib.ouais_double_00123();

	this.instance_124 = new lib.ouais_double_00124();

	this.instance_125 = new lib.ouais_double_00125();

	this.instance_126 = new lib.ouais_double_00126();

	this.instance_127 = new lib.ouais_double_00127();

	this.instance_128 = new lib.ouais_double_00128();

	this.instance_129 = new lib.ouais_double_00129();

	this.instance_130 = new lib.ouais_double_00130();

	this.instance_131 = new lib.ouais_double_00131();

	this.instance_132 = new lib.ouais_double_00132();

	this.instance_133 = new lib.ouais_double_00133();

	this.instance_134 = new lib.ouais_double_00134();

	this.instance_135 = new lib.ouais_double_00135();

	this.instance_136 = new lib.ouais_double_00136();

	this.instance_137 = new lib.ouais_double_00137();

	this.instance_138 = new lib.ouais_double_00138();

	this.instance_139 = new lib.ouais_double_00139();

	this.instance_140 = new lib.ouais_double_00140();

	this.instance_141 = new lib.ouais_double_00141();

	this.instance_142 = new lib.ouais_double_00142();

	this.instance_143 = new lib.ouais_double_00143();

	this.instance_144 = new lib.ouais_double_00144();

	this.instance_145 = new lib.ouais_double_00145();

	this.instance_146 = new lib.ouais_double_00146();

	this.instance_147 = new lib.ouais_double_00147();

	this.instance_148 = new lib.ouais_double_00148();

	this.instance_149 = new lib.ouais_double_00149();

	this.instance_150 = new lib.ouais_double_00150();

	this.instance_151 = new lib.ouais_double_00151();

	this.instance_152 = new lib.ouais_double_00152();

	this.instance_153 = new lib.ouais_double_00153();

	this.instance_154 = new lib.ouais_double_00154();

	this.instance_155 = new lib.ouais_double_00155();

	this.instance_156 = new lib.ouais_double_00156();

	this.instance_157 = new lib.ouais_double_00157();

	this.instance_158 = new lib.ouais_double_00158();

	this.instance_159 = new lib.ouais_double_00159();

	this.instance_160 = new lib.ouais_double_00160();

	this.instance_161 = new lib.ouais_double_00161();

	this.instance_162 = new lib.ouais_double_00162();

	this.instance_163 = new lib.ouais_double_00163();

	this.instance_164 = new lib.ouais_double_00164();

	this.instance_165 = new lib.ouais_double_00165();

	this.instance_166 = new lib.ouais_double_00166();

	this.instance_167 = new lib.ouais_double_00167();

	this.instance_168 = new lib.ouais_double_00168();

	this.instance_169 = new lib.ouais_double_00169();

	this.instance_170 = new lib.ouais_double_00170();

	this.instance_171 = new lib.ouais_double_00171();

	this.instance_172 = new lib.ouais_double_00172();

	this.instance_173 = new lib.ouais_double_00173();

	this.instance_174 = new lib.ouais_double_00174();

	this.instance_175 = new lib.ouais_double_00175();

	this.instance_176 = new lib.ouais_double_00176();

	this.instance_177 = new lib.ouais_double_00177();

	this.instance_178 = new lib.ouais_double_00178();

	this.instance_179 = new lib.ouais_double_00179();

	this.instance_180 = new lib.ouais_double_00180();

	this.instance_181 = new lib.ouais_double_00181();

	this.instance_182 = new lib.ouais_double_00182();

	this.instance_183 = new lib.ouais_double_00183();

	this.instance_184 = new lib.ouais_double_00184();

	this.instance_185 = new lib.ouais_double_00185();

	this.instance_186 = new lib.ouais_double_00186();

	this.instance_187 = new lib.ouais_double_00187();

	this.instance_188 = new lib.ouais_double_00188();

	this.instance_189 = new lib.ouais_double_00189();

	this.instance_190 = new lib.ouais_double_00190();

	this.instance_191 = new lib.ouais_double_00191();

	this.instance_192 = new lib.ouais_double_00192();

	this.instance_193 = new lib.ouais_double_00193();

	this.instance_194 = new lib.ouais_double_00194();

	this.instance_195 = new lib.ouais_double_00195();

	this.instance_196 = new lib.ouais_double_00196();

	this.instance_197 = new lib.ouais_double_00197();

	this.instance_198 = new lib.ouais_double_00198();

	this.instance_199 = new lib.ouais_double_00199();

	this.instance_200 = new lib.ouais_double_00200();

	this.instance_201 = new lib.ouais_double_00201();

	this.instance_202 = new lib.ouais_double_00202();

	this.instance_203 = new lib.ouais_double_00203();

	this.instance_204 = new lib.ouais_double_00204();

	this.instance_205 = new lib.ouais_double_00205();

	this.instance_206 = new lib.ouais_double_00206();

	this.instance_207 = new lib.ouais_double_00207();

	this.instance_208 = new lib.ouais_double_00208();

	this.instance_209 = new lib.ouais_double_00209();

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_3}]},1).to({state:[{t:this.instance_4}]},1).to({state:[{t:this.instance_5}]},1).to({state:[{t:this.instance_6}]},1).to({state:[{t:this.instance_7}]},1).to({state:[{t:this.instance_8}]},1).to({state:[{t:this.instance_9}]},1).to({state:[{t:this.instance_10}]},1).to({state:[{t:this.instance_11}]},1).to({state:[{t:this.instance_12}]},1).to({state:[{t:this.instance_13}]},1).to({state:[{t:this.instance_14}]},1).to({state:[{t:this.instance_15}]},1).to({state:[{t:this.instance_16}]},1).to({state:[{t:this.instance_17}]},1).to({state:[{t:this.instance_18}]},1).to({state:[{t:this.instance_19}]},1).to({state:[{t:this.instance_20}]},1).to({state:[{t:this.instance_21}]},1).to({state:[{t:this.instance_22}]},1).to({state:[{t:this.instance_23}]},1).to({state:[{t:this.instance_24}]},1).to({state:[{t:this.instance_25}]},1).to({state:[{t:this.instance_26}]},1).to({state:[{t:this.instance_27}]},1).to({state:[{t:this.instance_28}]},1).to({state:[{t:this.instance_29}]},1).to({state:[{t:this.instance_30}]},1).to({state:[{t:this.instance_31}]},1).to({state:[{t:this.instance_32}]},1).to({state:[{t:this.instance_33}]},1).to({state:[{t:this.instance_34}]},1).to({state:[{t:this.instance_35}]},1).to({state:[{t:this.instance_36}]},1).to({state:[{t:this.instance_37}]},1).to({state:[{t:this.instance_38}]},1).to({state:[{t:this.instance_39}]},1).to({state:[{t:this.instance_40}]},1).to({state:[{t:this.instance_41}]},1).to({state:[{t:this.instance_42}]},1).to({state:[{t:this.instance_43}]},1).to({state:[{t:this.instance_44}]},1).to({state:[{t:this.instance_45}]},1).to({state:[{t:this.instance_46}]},1).to({state:[{t:this.instance_47}]},1).to({state:[{t:this.instance_48}]},1).to({state:[{t:this.instance_49}]},1).to({state:[{t:this.instance_50}]},1).to({state:[{t:this.instance_51}]},1).to({state:[{t:this.instance_52}]},1).to({state:[{t:this.instance_53}]},1).to({state:[{t:this.instance_54}]},1).to({state:[{t:this.instance_55}]},1).to({state:[{t:this.instance_56}]},1).to({state:[{t:this.instance_57}]},1).to({state:[{t:this.instance_58}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_60}]},1).to({state:[{t:this.instance_61}]},1).to({state:[{t:this.instance_62}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_65}]},1).to({state:[{t:this.instance_66}]},1).to({state:[{t:this.instance_67}]},1).to({state:[{t:this.instance_68}]},1).to({state:[{t:this.instance_69}]},1).to({state:[{t:this.instance_70}]},1).to({state:[{t:this.instance_71}]},1).to({state:[{t:this.instance_72}]},1).to({state:[{t:this.instance_73}]},1).to({state:[{t:this.instance_74}]},1).to({state:[{t:this.instance_75}]},1).to({state:[{t:this.instance_76}]},1).to({state:[{t:this.instance_77}]},1).to({state:[{t:this.instance_78}]},1).to({state:[{t:this.instance_79}]},1).to({state:[{t:this.instance_80}]},1).to({state:[{t:this.instance_81}]},1).to({state:[{t:this.instance_82}]},1).to({state:[{t:this.instance_83}]},1).to({state:[{t:this.instance_84}]},1).to({state:[{t:this.instance_85}]},1).to({state:[{t:this.instance_86}]},1).to({state:[{t:this.instance_87}]},1).to({state:[{t:this.instance_88}]},1).to({state:[{t:this.instance_89}]},1).to({state:[{t:this.instance_90}]},1).to({state:[{t:this.instance_91}]},1).to({state:[{t:this.instance_92}]},1).to({state:[{t:this.instance_93}]},1).to({state:[{t:this.instance_94}]},1).to({state:[{t:this.instance_95}]},1).to({state:[{t:this.instance_96}]},1).to({state:[{t:this.instance_97}]},1).to({state:[{t:this.instance_98}]},1).to({state:[{t:this.instance_99}]},1).to({state:[{t:this.instance_100}]},1).to({state:[{t:this.instance_101}]},1).to({state:[{t:this.instance_102}]},1).to({state:[{t:this.instance_103}]},1).to({state:[{t:this.instance_104}]},1).to({state:[{t:this.instance_105}]},1).to({state:[{t:this.instance_106}]},1).to({state:[{t:this.instance_107}]},1).to({state:[{t:this.instance_108}]},1).to({state:[{t:this.instance_109}]},1).to({state:[{t:this.instance_110}]},1).to({state:[{t:this.instance_111}]},1).to({state:[{t:this.instance_112}]},1).to({state:[{t:this.instance_113}]},1).to({state:[{t:this.instance_114}]},1).to({state:[{t:this.instance_115}]},1).to({state:[{t:this.instance_116}]},1).to({state:[{t:this.instance_117}]},1).to({state:[{t:this.instance_118}]},1).to({state:[{t:this.instance_119}]},1).to({state:[{t:this.instance_120}]},1).to({state:[{t:this.instance_121}]},1).to({state:[{t:this.instance_122}]},1).to({state:[{t:this.instance_123}]},1).to({state:[{t:this.instance_124}]},1).to({state:[{t:this.instance_125}]},1).to({state:[{t:this.instance_126}]},1).to({state:[{t:this.instance_127}]},1).to({state:[{t:this.instance_128}]},1).to({state:[{t:this.instance_129}]},1).to({state:[{t:this.instance_130}]},1).to({state:[{t:this.instance_131}]},1).to({state:[{t:this.instance_132}]},1).to({state:[{t:this.instance_133}]},1).to({state:[{t:this.instance_134}]},1).to({state:[{t:this.instance_135}]},1).to({state:[{t:this.instance_136}]},1).to({state:[{t:this.instance_137}]},1).to({state:[{t:this.instance_138}]},1).to({state:[{t:this.instance_139}]},1).to({state:[{t:this.instance_140}]},1).to({state:[{t:this.instance_141}]},1).to({state:[{t:this.instance_142}]},1).to({state:[{t:this.instance_143}]},1).to({state:[{t:this.instance_144}]},1).to({state:[{t:this.instance_145}]},1).to({state:[{t:this.instance_146}]},1).to({state:[{t:this.instance_147}]},1).to({state:[{t:this.instance_148}]},1).to({state:[{t:this.instance_149}]},1).to({state:[{t:this.instance_150}]},1).to({state:[{t:this.instance_151}]},1).to({state:[{t:this.instance_152}]},1).to({state:[{t:this.instance_153}]},1).to({state:[{t:this.instance_154}]},1).to({state:[{t:this.instance_155}]},1).to({state:[{t:this.instance_156}]},1).to({state:[{t:this.instance_157}]},1).to({state:[{t:this.instance_158}]},1).to({state:[{t:this.instance_159}]},1).to({state:[{t:this.instance_160}]},1).to({state:[{t:this.instance_161}]},1).to({state:[{t:this.instance_162}]},1).to({state:[{t:this.instance_163}]},1).to({state:[{t:this.instance_164}]},1).to({state:[{t:this.instance_165}]},1).to({state:[{t:this.instance_166}]},1).to({state:[{t:this.instance_167}]},1).to({state:[{t:this.instance_168}]},1).to({state:[{t:this.instance_169}]},1).to({state:[{t:this.instance_170}]},1).to({state:[{t:this.instance_171}]},1).to({state:[{t:this.instance_172}]},1).to({state:[{t:this.instance_173}]},1).to({state:[{t:this.instance_174}]},1).to({state:[{t:this.instance_175}]},1).to({state:[{t:this.instance_176}]},1).to({state:[{t:this.instance_177}]},1).to({state:[{t:this.instance_178}]},1).to({state:[{t:this.instance_179}]},1).to({state:[{t:this.instance_180}]},1).to({state:[{t:this.instance_181}]},1).to({state:[{t:this.instance_182}]},1).to({state:[{t:this.instance_183}]},1).to({state:[{t:this.instance_184}]},1).to({state:[{t:this.instance_185}]},1).to({state:[{t:this.instance_186}]},1).to({state:[{t:this.instance_187}]},1).to({state:[{t:this.instance_188}]},1).to({state:[{t:this.instance_189}]},1).to({state:[{t:this.instance_190}]},1).to({state:[{t:this.instance_191}]},1).to({state:[{t:this.instance_192}]},1).to({state:[{t:this.instance_193}]},1).to({state:[{t:this.instance_194}]},1).to({state:[{t:this.instance_195}]},1).to({state:[{t:this.instance_196}]},1).to({state:[{t:this.instance_197}]},1).to({state:[{t:this.instance_198}]},1).to({state:[{t:this.instance_199}]},1).to({state:[{t:this.instance_200}]},1).to({state:[{t:this.instance_201}]},1).to({state:[{t:this.instance_202}]},1).to({state:[{t:this.instance_203}]},1).to({state:[{t:this.instance_204}]},1).to({state:[{t:this.instance_205}]},1).to({state:[{t:this.instance_206}]},1).to({state:[{t:this.instance_207}]},1).to({state:[{t:this.instance_208}]},1).to({state:[{t:this.instance_209}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(0,0,1200,300);
p.frameBounds = [rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect, rect];


// stage content:



(lib.ouais09_double = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// Calque 1
	this.instance = new lib.clip();
	this.instance.setTransform(600,150,1,1,0,0,0,600,150);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = rect = new cjs.Rectangle(600,150,1200,300);
p.frameBounds = [rect];

})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{});
var lib, images, createjs, ss;