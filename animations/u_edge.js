(function (compId) {
    var _ = null, y = true, n = false, x2 = '6.0.0', x16 = '../animations/media/u.mp3', x4 = '6.0.0.400', x9 = '10600px', x12 = 'rgba(0,0,0,0)', lf = 'left', tp = 'top', g = 'image', x5 = 'rgba(0,0,0,0.00)', m = 'rect', x23 = '490px', x22 = '510px', x20 = '45px', x21 = 'true', x18 = '0', x11 = 'auto', x3 = '5.0.0', x7 = '-47px', x8 = '1px', x17 = 'u', x15 = 'audio', x10 = '480px', x6 = 'sprite-a-03', x14 = '0px', x19 = '320px', e24 = '${sprite-a-03}', i = 'none';
    var g1 = 'jquery-1.7.1.min.js', g13 = 'sprite_u02.PNG';
    var im = '../animations/images/', aud = '../animations/media/', vid = '../animations/media/', js = '../animations/js/', fonts = {}, opts = {
        'gAudioPreloadPreference': 'auto',
        'gVideoPreloadPreference': 'auto'
    }, resources = [], scripts = [js + g1], symbols = {
        "stage": {
            v: x2,
            mv: x3,
            b: x4,
            stf: i,
            cg: i,
            rI: n,
            cn: {
                dom: [{
                    id: 'rond',
                    symbolName: 'rond',
                    t: m,
                    r: ['0', '0', '500', '480', 'auto', 'auto'],
                    overflow: 'hidden'
                }],
                style: {
                    '${Stage}': {
                        isStage: true,
                        r: ['null', 'null', '500', '480', 'auto', 'auto'],
                        overflow: 'hidden',
                        f: [x5]
                    }
                }
            },
            tt: {d: 1958, a: y, data: []}
        },
        "rond": {
            v: x2,
            mv: x3,
            b: x4,
            stf: i,
            cg: i,
            rI: n,
            cn: {
                dom: [{id: x6, t: g, r: [x7, x8, x9, x10, x11, x11], f: [x12, im + g13, x14, x14]}, {
                    pr: x11,
                    t: x15,
                    sr: [x16],
                    id: x17,
                    r: [x18, x18, x19, x20, x11, x11],
                    v: i,
                    tag: x15
                }], style: {'${symbolSelector}': {isStage: x21, r: [undefined, undefined, x22, x23]}}
            },
            tt: {
                d: 1958,
                a: y,
                l: {"i": 0},
                data: [["eid119", lf, 0, 0, "linear", e24, '-47px', '-47px'], ["eid121", lf, 83, 0, "linear", e24, '-47px', '-547px'], ["eid122", lf, 167, 0, "linear", e24, '-547px', '-1047px'], ["eid123", lf, 250, 0, "linear", e24, '-1047px', '-1547px'], ["eid124", lf, 333, 0, "linear", e24, '-1547px', '-2047px'], ["eid125", lf, 417, 0, "linear", e24, '-2047px', '-2547px'], ["eid126", lf, 500, 0, "linear", e24, '-2547px', '-3047px'], ["eid127", lf, 583, 0, "linear", e24, '-3047px', '-3547px'], ["eid128", lf, 667, 0, "linear", e24, '-3547px', '-4047px'], ["eid129", lf, 750, 0, "linear", e24, '-4047px', '-4547px'], ["eid130", lf, 833, 0, "linear", e24, '-4547px', '-5047px'], ["eid131", lf, 917, 0, "linear", e24, '-5047px', '-5547px'], ["eid132", lf, 1000, 0, "linear", e24, '-5547px', '-6047px'], ["eid133", lf, 1125, 0, "linear", e24, '-6047px', '-6547px'], ["eid134", lf, 1237, 0, "linear", e24, '-6547px', '-7047px'], ["eid135", lf, 1333, 0, "linear", e24, '-7047px', '-7547px'], ["eid136", lf, 1417, 0, "linear", e24, '-7547px', '-8047px'], ["eid137", lf, 1500, 0, "linear", e24, '-8047px', '-8547px'], ["eid138", lf, 1625, 0, "linear", e24, '-8547px', '-9047px'], ["eid139", lf, 1750, 0, "linear", e24, '-9047px', '-9547px'], ["eid140", lf, 1958, 0, "linear", e24, '-9547px', '-47px'], ["eid120", tp, 0, 0, "linear", e24, '1px', '1px'], ["eid145", "tr", 500, function (e, d) {
                    this.eMA(e, d);
                }, ['play', '${u}', []]]]
            }
        }
    };
    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);
})("EDGE-27145435");
(function ($, Edge, compId) {
    var Composition = Edge.Composition, Symbol = Edge.Symbol;
    Edge.registerEventBinding(compId, function ($) {
//Edge symbol: 'stage'
        (function (symbolName) {
            Symbol.bindSymbolAction(compId, symbolName, "creationComplete", function (sym, e) {
                sym.setVariable("numLoops", 0);
            });
//Edge binding end
        })("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'rond'
        (function (symbolName) {
            Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1958, function (sym, e) {
                sym.stop();
            });
//Edge binding end
        })("rond");
//Edge symbol end:'rond'
    })
})(AdobeEdge.$, AdobeEdge, "EDGE-27145435");