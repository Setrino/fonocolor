(function (compId) {
    var _ = null, y = true, n = false, x3 = '5.0.0', x14 = 'ellipse', x21 = 'rgba(0,0,0,0)', x7 = '81', x13 = 'rgb(0, 0, 0)', g = 'image', x24 = '-12079px', b = 'block', x37 = 'true', x17 = '0', x25 = '8px', x18 = '10500px', x19 = '480px', m = 'rect', x23 = '0px', i = 'none', x27 = 'visible', x4 = '5.0.1.386', x12 = 'Ellipse', lf = 'left', e41 = '${sprite_I_00000}', e40 = '${sprite_base_00000}', x20 = 'sprite_base_00000', d = 'display', x39 = '490px', x11 = '50%', x38 = '510px', x36 = '45px', x35 = '320px', x34 = '454', x9 = '293px', x33 = '215', x15 = 'rgba(192,192,192,1)', x31 = '../animations/media/i08.mp3', x28 = 'sprite_I_00000', x30 = 'audio', x6 = '109', x32 = 'i08', x2 = '5.0.1', x5 = 'rgba(0,0,0,0.00)', x8 = '283px', x26 = '13000px', x10 = 'auto', x16 = '-6677px';
    var g22 = 'sprite%20base%20%2800000%29.PNG', g29 = 'sprite%20I%20%2800000%29.PNG', g1 = 'jquery-1.7.1.min.js';
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
            tt: {d: 4791.6666666667, a: y, data: []}
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
                    br: [x11, x11, x11, x11],
                    id: x12,
                    s: [0, x13, i],
                    t: x14,
                    f: [x15]
                }, {
                    r: [x16, x17, x18, x19, x10, x10],
                    id: x20,
                    t: g,
                    v: i,
                    f: [x21, im + g22, x23, x23]
                }, {
                    r: [x24, x25, x26, x19, x10, x10],
                    overflow: x27,
                    id: x28,
                    t: g,
                    v: b,
                    f: [x21, im + g29, x23, x23]
                }, {pr: x10, t: x30, sr: [x31], id: x32, r: [x33, x34, x35, x36, x10, x10], v: i, tag: x30}],
                style: {'${symbolSelector}': {isStage: x37, r: [undefined, undefined, x38, x39]}}
            },
            tt: {
                d: 1917,
                a: y,
                l: {"i": 0},
                data: [["eid25", d, 0, 0, "linear", e40, i, i], ["eid64", d, 1917, 0, "linear", e40, i, b], ["eid24", d, 0, 0, "linear", e41, b, b], ["eid65", d, 1917, 0, "linear", e41, b, i], ["eid26", lf, 0, 0, "linear", e41, '-639px', '-1119px'], ["eid29", lf, 125, 0, "linear", e41, '-1119px', '-1759px'], ["eid30", lf, 250, 0, "linear", e41, '-1759px', '-2399px'], ["eid32", lf, 375, 0, "linear", e41, '-3040px', '-3679px'], ["eid33", lf, 500, 0, "linear", e41, '-3679px', '-4239px'], ["eid34", lf, 625, 0, "linear", e41, '-4239px', '-4799px'], ["eid35", lf, 750, 0, "linear", e41, '-4799px', '-5359px'], ["eid36", lf, 875, 0, "linear", e41, '-5359px', '-5919px'], ["eid37", lf, 1000, 0, "linear", e41, '-5919px', '-6479px'], ["eid42", lf, 1167, 0, "linear", e41, '-8720px', '-9280px'], ["eid43", lf, 1292, 0, "linear", e41, '-9280px', '-9840px'], ["eid45", lf, 1500, 0, "linear", e41, '-9840px', '-10400px'], ["eid46", lf, 1667, 0, "linear", e41, '-10400px', '-10400px'], ["eid62", lf, 1750, 0, "linear", e41, '-10960px', '-10960px'], ["eid63", lf, 1833, 0, "linear", e41, '-11520px', '-12079px'], ["eid21", lf, 0, 0, "linear", e40, '-437px', '-6197px'], ["eid22", lf, 125, 0, "linear", e40, '-6197px', '-6677px'], ["eid97", lf, 1917, 0, "linear", e40, '-6677px', '-6677px'], ["eid66", "tr", 523.66666666667, function (e, d) {
                    this.eMA(e, d);
                }, ['play', '${i08}', []]]]
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
        })("rond");
//Edge symbol end:'rond'
    })
})(AdobeEdge.$, AdobeEdge, "EDGE-27145435");