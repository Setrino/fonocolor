(function (compId) {
    var _ = null, y = true, n = false, x2 = '6.0.0', x4 = '6.0.0.400', x9 = '10600px', tp = 'top', x12 = 'rgba(0,0,0,0)', x17 = 'ch_', m = 'rect', x18 = '247', g = 'image', x5 = 'rgba(0,0,0,0.00)', x19 = '277', lf = 'left', x24 = '490px', x7 = '-2047px', x16 = '../animations/media/ch_.mp3', x23 = '510px', x11 = 'auto', x22 = 'true', x8 = '1px', x21 = '45px', x3 = '5.0.0', x10 = '480px', x6 = 'sprite-a-03', x14 = '0px', x15 = 'audio', x20 = '320px', e25 = '${sprite-a-03}', i = 'none';
    var g1 = 'jquery-1.7.1.min.js', g13 = 'sprite_carre_reg_droite.PNG';
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
                d: 6083.3333333333,
                a: y,
                l: {"i": 0},
                data: [["eid119", lf, 0, 0, "linear", e25, '-47px', '-47px'], ["eid121", lf, 750, 0, "linear", e25, '-47px', '-547px'], ["eid122", lf, 833, 0, "linear", e25, '-547px', '-1047px'], ["eid123", lf, 5833, 0, "linear", e25, '-1047px', '-1547px'], ["eid151", lf, 5917, 0, "linear", e25, '-1547px', '-2047px'], ["eid120", tp, 0, 0, "linear", e25, '1px', '1px']]
            }
        }
    };
    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);
})("EDGE-27145441");
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
            Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 6083, function (sym, e) {
                sym.stop();
            });
//Edge binding end
        })("rond");
//Edge symbol end:'rond'
    })
})(AdobeEdge.$, AdobeEdge, "EDGE-27145441");