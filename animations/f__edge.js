(function (compId) {
    var _ = null, y = true, n = false, x2 = '6.0.0', x4 = '6.0.0.400', x9 = '10600px', tp = 'top', x12 = 'rgba(0,0,0,0)', lf = 'left', x17 = 'f', m = 'rect', g = 'image', x5 = 'rgba(0,0,0,0.00)', x24 = '490px', x23 = '510px', x21 = '45px', x18 = '416', x22 = 'true', x3 = '5.0.0', x11 = 'auto', x7 = '-47px', x8 = '1px', x16 = 'media/f.mp3', x15 = 'audio', x10 = '480px', x6 = 'sprite-a-03', x14 = '0px', x19 = '324', x20 = '320px', e25 = '${sprite-a-03}', i = 'none';
    var g1 = 'jquery-1.7.1.min.js', g13 = 'sprite_carre_f.PNG';
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
            tt: {d: 1792, a: y, data: []}
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
                    r: [x18, x19, x20, x21, x11, x11],
                    v: i,
                    tag: x15
                }], style: {'${symbolSelector}': {isStage: x22, r: [undefined, undefined, x23, x24]}}
            },
            tt: {
                d: 1792,
                a: y,
                l: {"i": 0},
                data: [["eid119", lf, 0, 0, "linear", e25, '-47px', '-47px'], ["eid121", lf, 83, 0, "linear", e25, '-47px', '-547px'], ["eid122", lf, 167, 0, "linear", e25, '-547px', '-1047px'], ["eid123", lf, 250, 0, "linear", e25, '-1047px', '-1547px'], ["eid124", lf, 333, 0, "linear", e25, '-1547px', '-2047px'], ["eid125", lf, 417, 0, "linear", e25, '-2047px', '-2547px'], ["eid126", lf, 500, 0, "linear", e25, '-2547px', '-3047px'], ["eid127", lf, 583, 0, "linear", e25, '-3047px', '-3547px'], ["eid128", lf, 667, 0, "linear", e25, '-3547px', '-4047px'], ["eid129", lf, 750, 0, "linear", e25, '-4047px', '-4547px'], ["eid130", lf, 833, 0, "linear", e25, '-4547px', '-5047px'], ["eid131", lf, 917, 0, "linear", e25, '-5047px', '-5547px'], ["eid132", lf, 1000, 0, "linear", e25, '-5547px', '-6047px'], ["eid133", lf, 1083, 0, "linear", e25, '-6047px', '-6547px'], ["eid134", lf, 1250, 0, "linear", e25, '-6547px', '-7047px'], ["eid135", lf, 1333, 0, "linear", e25, '-7047px', '-7547px'], ["eid136", lf, 1417, 0, "linear", e25, '-7547px', '-8047px'], ["eid137", lf, 1500, 0, "linear", e25, '-8047px', '-8547px'], ["eid138", lf, 1583, 0, "linear", e25, '-8547px', '-9047px'], ["eid139", lf, 1667, 0, "linear", e25, '-9047px', '-9547px'], ["eid140", lf, 1792, 0, "linear", e25, '-9547px', '-47px'], ["eid120", tp, 0, 0, "linear", e25, '1px', '1px'], ["eid151", "tr", 500, function (e, d) {
                    this.eMA(e, d);
                }, ['play', '${f}', []]]]
            }
        }
    };
    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);
})("EDGE-27145437");
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
            Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1125, function (sym, e) {
                sym.stop();
            });
//Edge binding end
        })("rond");
//Edge symbol end:'rond'
    })
})(AdobeEdge.$, AdobeEdge, "EDGE-27145437");