(function (compId) {
    var _ = null, y = true, n = false, x2 = '6.0.0', x4 = '6.0.0.400', x9 = '10600px', x12 = 'rgba(0,0,0,0)', lf = 'left', g = 'image', x5 = 'rgba(0,0,0,0.00)', x15 = 'true', tp = 'top', x11 = 'auto', m = 'rect', x17 = '490px', x8 = '1px', x16 = '510px', x10 = '480px', x6 = 'sprite-a-03', x14 = '0px', x3 = '5.0.0', x7 = '-3547px', e18 = '${sprite-a-03}', i = 'none';
    var g1 = 'jquery-1.7.1.min.js', g13 = 'sprite_carre_tire.PNG';
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
                dom: [{id: x6, t: g, r: [x7, x8, x9, x10, x11, x11], f: [x12, im + g13, x14, x14]}],
                style: {'${symbolSelector}': {isStage: x15, r: [undefined, undefined, x16, x17]}}
            },
            tt: {
                d: 1792,
                a: y,
                l: {"i": 0},
                data: [["eid119", lf, 0, 0, "linear", e18, '-47px', '-47px'], ["eid121", lf, 125, 0, "linear", e18, '-47px', '-547px'], ["eid122", lf, 250, 0, "linear", e18, '-547px', '-1047px'], ["eid123", lf, 375, 0, "linear", e18, '-1047px', '-1547px'], ["eid124", lf, 458, 0, "linear", e18, '-1547px', '-2047px'], ["eid125", lf, 542, 0, "linear", e18, '-2047px', '-2547px'], ["eid126", lf, 792, 0, "linear", e18, '-2547px', '-3047px'], ["eid127", lf, 1250, 0, "linear", e18, '-3047px', '-3547px'], ["eid120", tp, 0, 0, "linear", e18, '1px', '1px']]
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
            Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1792, function (sym, e) {
                sym.stop();
            });
//Edge binding end
            Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1250, function (sym, e) {
                sym.stop();
            });
//Edge binding end
        })("rond");
//Edge symbol end:'rond'
    })
})(AdobeEdge.$, AdobeEdge, "EDGE-27145437");