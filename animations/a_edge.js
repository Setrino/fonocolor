(function (compId) {
    var _ = null, y = true, n = false, x2 = '6.0.0', x4 = '6.0.0.400', x8 = '10600px', x12 = 'rgba(0,0,0,0)', tp = 'top', x11 = 'sprite-a-03', g = 'image', x5 = 'rgba(0,0,0,0.00)', lf = 'left', x23 = '490px', x22 = '510px', x21 = '45px', x3 = '5.0.0', x15 = 'audio', x10 = 'auto', x16 = '../animations/media/a04.mp3', x6 = '-47px', x7 = '1px', x17 = 'a04', x18 = '221', x9 = '480px', m = 'rect', x14 = '0px', x19 = '281', x20 = '320px', e24 = '${sprite-a-03}', i = 'none';
    var g13 = 'sprite-a-03.PNG', g1 = 'jquery-1.7.1.min.js';
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
            tt: {d: 1958.3333333333, a: y, data: []}
        },
        "rond": {
            v: x2,
            mv: x3,
            b: x4,
            stf: i,
            cg: i,
            rI: n,
            cn: {
                dom: [{r: [x6, x7, x8, x9, x10, x10], id: x11, t: g, f: [x12, im + g13, x14, x14]}, {
                    pr: x10,
                    t: x15,
                    sr: [x16],
                    id: x17,
                    r: [x18, x19, x20, x21, x10, x10],
                    v: i,
                    tag: x15
                }], style: {'${symbolSelector}': {r: [_, _, x22, x23]}}
            },
            tt: {
                d: 1958.3333333333,
                a: y,
                l: {"i": 0},
                data: [["eid119", lf, 0, 0, "linear", e24, '-47px', '-47px'], ["eid121", lf, 83, 0, "linear", e24, '-47px', '-547px'], ["eid122", lf, 167, 0, "linear", e24, '-547px', '-1047px'], ["eid123", lf, 250, 0, "linear", e24, '-1047px', '-1547px'], ["eid124", lf, 333, 0, "linear", e24, '-1547px', '-2047px'], ["eid125", lf, 417, 0, "linear", e24, '-2047px', '-2547px'], ["eid126", lf, 500, 0, "linear", e24, '-2547px', '-3047px'], ["eid127", lf, 583, 0, "linear", e24, '-3047px', '-3547px'], ["eid128", lf, 667, 0, "linear", e24, '-3547px', '-4047px'], ["eid129", lf, 750, 0, "linear", e24, '-4047px', '-4547px'], ["eid130", lf, 833, 0, "linear", e24, '-4547px', '-5047px'], ["eid131", lf, 1208, 0, "linear", e24, '-5047px', '-5547px'], ["eid132", lf, 1291, 0, "linear", e24, '-5547px', '-6047px'], ["eid133", lf, 1374, 0, "linear", e24, '-6047px', '-6547px'], ["eid134", lf, 1458, 0, "linear", e24, '-6547px', '-7047px'], ["eid135", lf, 1541, 0, "linear", e24, '-7047px', '-7547px'], ["eid136", lf, 1624, 0, "linear", e24, '-7547px', '-8047px'], ["eid137", lf, 1708, 0, "linear", e24, '-8047px', '-8547px'], ["eid138", lf, 1791, 0, "linear", e24, '-8547px', '-9047px'], ["eid139", lf, 1874, 0, "linear", e24, '-9047px', '-9547px'], ["eid140", lf, 1958, 0, "linear", e24, '-9547px', '-47px'], ["eid120", tp, 0, 0, "linear", e24, '1px', '1px'], ["eid142", "tr", 542, function (e, d) {
                    this.eMA(e, d);
                }, ['play', '${a04}', []]]]
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