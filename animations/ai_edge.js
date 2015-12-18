(function (compId) {
    var _ = null, y = true, n = false, x2 = '6.0.0', x4 = '6.0.0.400', x3 = '5.0.0', x18 = 'rgba(0,0,0,0)', lf = 'left', tp = 'top', g = 'image', x5 = 'rgba(0,0,0,0.00)', e23 = '${ai-05}', x14 = '9px', x22 = '490px', x21 = '510px', x12 = '45px', x10 = '0', x6 = 'auto', x17 = 'ai-05', x13 = '-47px', x8 = '../animations/media/ai03.mp3', x15 = '10000px', x16 = '480px', m = 'rect', x20 = '0px', x9 = 'ai03', x11 = '320px', x7 = 'audio', i = 'none';
    var g1 = 'jquery-1.7.1.min.js', g19 = 'ai-07.PNG';
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
                dom: [{
                    pr: x6,
                    t: x7,
                    sr: [x8],
                    id: x9,
                    r: [x10, x10, x11, x12, x6, x6],
                    v: i,
                    tag: x7
                }, {r: [x13, x14, x15, x16, x6, x6], id: x17, t: g, f: [x18, im + g19, x20, x20]}],
                style: {'${symbolSelector}': {r: [_, _, x21, x22]}}
            },
            tt: {
                d: 1958,
                a: y,
                l: {"i": 0},
                data: [["eid143", lf, 0, 0, "linear", e23, '-47px', '-47px'], ["eid145", lf, 83, 0, "linear", e23, '-47px', '-547px'], ["eid146", lf, 167, 0, "linear", e23, '-547px', '-1047px'], ["eid147", lf, 250, 0, "linear", e23, '-1047px', '-1547px'], ["eid149", lf, 417, 0, "linear", e23, '-2147px', '-2647px'], ["eid150", lf, 500, 0, "linear", e23, '-2647px', '-3147px'], ["eid151", lf, 583, 0, "linear", e23, '-3147px', '-3647px'], ["eid152", lf, 667, 0, "linear", e23, '-3647px', '-4147px'], ["eid153", lf, 750, 0, "linear", e23, '-4147px', '-4647px'], ["eid154", lf, 833, 0, "linear", e23, '-4647px', '-5147px'], ["eid155", lf, 1167, 0, "linear", e23, '-5147px', '-6147px'], ["eid156", lf, 1250, 0, "linear", e23, '-6147px', '-6647px'], ["eid157", lf, 1334, 0, "linear", e23, '-6647px', '-7147px'], ["eid158", lf, 1417, 0, "linear", e23, '-7147px', '-7647px'], ["eid159", lf, 1500, 0, "linear", e23, '-7647px', '-8147px'], ["eid160", lf, 1584, 0, "linear", e23, '-8147px', '-8747px'], ["eid161", lf, 1667, 0, "linear", e23, '-8747px', '-9247px'], ["eid162", lf, 1750, 0, "linear", e23, '-9247px', '-47px'], ["eid144", tp, 0, 0, "linear", e23, '9px', '9px'], ["eid163", "tr", 542, function (e, d) {
                    this.eMA(e, d);
                }, ['play', '${ai03}', []]]]
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