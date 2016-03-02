(function (compId) {
    var _ = null, y = true, n = false, x2 = '6.0.0', x24 = 'sprite-a-03Copy', x3 = '5.0.0', x13 = 'rgba(0,0,0,0)', x18 = 'f', x23 = '-3547px', x22 = '45px', b = 'block', x19 = '416', x26 = 'true', x7 = '1px', x9 = '480px', m = 'rect', x15 = '0px', i = 'none', x11 = 'visible', x4 = '6.0.0.400', x8 = '10600px', lf = 'left', x17 = '../animations/media/f.mp3', x10 = 'auto', g = 'image', x16 = 'audio', d = 'display', x6 = '-47px', e29 = '${sprite-a-03Copy}', x28 = '490px', x27 = '510px', tp = 'top', x12 = 'sprite-a-03', x20 = '324', x5 = 'rgba(0,0,0,0.00)', x21 = '320px', e30 = '${sprite-a-03}';
    var g25 = 'sprite_carre_tire3.PNG', g31 = 'sprite_carre_tire2.PNG', g1 = 'jquery-1.7.1.min.js', g14 = 'sprite_carre_f.PNG';
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
            tt: {d: 3042, a: y, data: []}
        },
        "rond": {
            v: x2,
            mv: x3,
            b: x4,
            stf: i,
            cg: i,
            rI: n,
            cn: {
                dom: [{
                    r: [x6, x7, x8, x9, x10, x10],
                    overflow: x11,
                    id: x12,
                    t: g,
                    v: b,
                    f: [x13, im + g14, x15, x15]
                }, {
                    pr: x10,
                    t: x16,
                    sr: [x17],
                    id: x18,
                    r: [x19, x20, x21, x22, x10, x10],
                    v: i,
                    tag: x16
                }, {r: [x23, x7, x8, x9, x10, x10], overflow: x11, id: x24, t: g, v: i, f: [x13, im + g25, x15, x15]}],
                style: {'${symbolSelector}': {isStage: x26, r: [undefined, undefined, x27, x28]}}
            },
            tt: {
                d: 3042,
                a: y,
                l: {"i": 0},
                data: [["eid152", lf, 1250, 0, "linear", e29, '-47px', '-47px'], ["eid153", lf, 1375, 0, "linear", e29, '-47px', '-547px'], ["eid154", lf, 1500, 0, "linear", e29, '-547px', '-1047px'], ["eid155", lf, 1625, 0, "linear", e29, '-1047px', '-1547px'], ["eid156", lf, 1708, 0, "linear", e29, '-1547px', '-2047px'], ["eid157", lf, 1792, 0, "linear", e29, '-2047px', '-2547px'], ["eid158", lf, 2042, 0, "linear", e29, '-2547px', '-3047px'], ["eid159", lf, 2500, 0, "linear", e29, '-3047px', '-3547px'], ["eid162", d, 0, 0, "linear", e29, i, i], ["eid163", d, 1250, 0, "linear", e29, i, b], ["eid160", tp, 1250, 0, "linear", e29, '1px', '1px'], ["eid164", d, 1250, 0, "linear", e30, b, i], ["eid161", d, 1792, 0, "linear", e30, i, i], ["eid120", tp, 0, 0, "linear", e30, '1px', '1px'], ["eid119", lf, 0, 0, "linear", e30, '-47px', '-47px'], ["eid121", lf, 83, 0, "linear", e30, '-47px', '-547px'], ["eid122", lf, 167, 0, "linear", e30, '-547px', '-1047px'], ["eid123", lf, 250, 0, "linear", e30, '-1047px', '-1547px'], ["eid124", lf, 333, 0, "linear", e30, '-1547px', '-2047px'], ["eid125", lf, 417, 0, "linear", e30, '-2047px', '-2547px'], ["eid126", lf, 500, 0, "linear", e30, '-2547px', '-3047px'], ["eid127", lf, 583, 0, "linear", e30, '-3047px', '-3547px'], ["eid128", lf, 667, 0, "linear", e30, '-3547px', '-4047px'], ["eid129", lf, 750, 0, "linear", e30, '-4047px', '-4547px'], ["eid130", lf, 833, 0, "linear", e30, '-4547px', '-5047px'], ["eid131", lf, 917, 0, "linear", e30, '-5047px', '-5547px'], ["eid132", lf, 1000, 0, "linear", e30, '-5547px', '-6047px'], ["eid133", lf, 1083, 0, "linear", e30, '-6047px', '-6547px'], ["eid134", lf, 1250, 0, "linear", e30, '-6547px', '-7047px'], ["eid135", lf, 1333, 0, "linear", e30, '-7047px', '-7547px'], ["eid136", lf, 1417, 0, "linear", e30, '-7547px', '-8047px'], ["eid137", lf, 1500, 0, "linear", e30, '-8047px', '-8547px'], ["eid138", lf, 1583, 0, "linear", e30, '-8547px', '-9047px'], ["eid139", lf, 1667, 0, "linear", e30, '-9047px', '-9547px'], ["eid140", lf, 1792, 0, "linear", e30, '-9547px', '-47px'], ["eid151", "tr", 500, function (e, d) {
                    this.eMA(e, d);
                }, ['play', '${f}', []]]]
            }
        },
        "rond_1": {
            v: x2,
            mv: x3,
            b: x4,
            stf: i,
            cg: i,
            rI: n,
            cn: {
                dom: [{id: x12, r: [x23, x7, x8, x9, x10, x10], t: g, f: [x13, im + g31, x15, x15]}],
                style: {'${symbolSelector}': {r: [_, _, x27, x28]}}
            },
            tt: {
                d: 1792,
                a: y,
                l: {"i": 0},
                data: [["eid119", lf, 0, 0, "linear", e30, '-47px', '-47px'], ["eid121", lf, 125, 0, "linear", e30, '-47px', '-547px'], ["eid122", lf, 250, 0, "linear", e30, '-547px', '-1047px'], ["eid123", lf, 375, 0, "linear", e30, '-1047px', '-1547px'], ["eid124", lf, 458, 0, "linear", e30, '-1547px', '-2047px'], ["eid125", lf, 542, 0, "linear", e30, '-2047px', '-2547px'], ["eid126", lf, 792, 0, "linear", e30, '-2547px', '-3047px'], ["eid127", lf, 1250, 0, "linear", e30, '-3047px', '-3547px'], ["eid120", tp, 0, 0, "linear", e30, '1px', '1px']]
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
            Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3042, function (sym, e) {
                sym.stop();
            });
//Edge binding end
        })("rond");
//Edge symbol end:'rond'

//=========================================================

//Edge symbol: 'rond_1'
        (function (symbolName) {
            Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function (sym, e) {
                sym.stop();
            });
//Edge binding end
            Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1792, function (sym, e) {
                sym.stop();
            });
//Edge binding end
        })("rond_1");
//Edge symbol end:'rond_1'
    })
})(AdobeEdge.$, AdobeEdge, "EDGE-27145437");