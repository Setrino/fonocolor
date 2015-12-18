(function (compId) {
    var _ = null, y = true, n = false, x2 = '6.0.0', x3 = '5.0.0', x19 = '-2645px', x14 = 'rgba(0,0,0,0)', e6 = '${Stage}', x18 = 'sprite_iii_03', g = 'image', x5 = 'rgba(0,0,0,0.00)', x9 = '-8585px', x29 = 'hidden', x12 = '480px', m = 'rect', x10 = '0px', x8 = 'sprite_ouou02_02', x25 = '278', i = 'none', e30 = '${sprite_iii_03}', x4 = '6.0.0.400', e17 = '${sprite_ouou02_02}', x11 = '9700px', x20 = '10200px', bg = 'background-color', x7 = 'visible', x13 = 'auto', x24 = 'iiii03', h = 'height', x28 = '45px', x22 = 'audio', x23 = '../animations/media/iiii03.mp3', tp = 'top', x16 = '500px', b = 'block', x26 = '365', x27 = '320px', lf = 'left', d = 'display';
    var g21 = 'sprite_iii_03.PNG', g15 = 'sprite_ouou02_02.PNG', g1 = 'jquery-1.7.1.min.js';
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
                dom: [{id: 'ouou02', symbolName: 'ouou02', t: m, r: ['0px', '0px', '9700', '480', 'auto', 'auto']}],
                style: {
                    '${Stage}': {
                        isStage: true,
                        r: ['null', 'null', '500', '480', 'auto', 'auto'],
                        overflow: 'hidden',
                        f: [x5]
                    }
                }
            },
            tt: {d: 1625, a: y, data: [["eid147", bg, 0, 0, "linear", e6, 'rgba(0,0,0,0.00)', 'rgba(0,0,0,0.00)']]}
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
                    t: g,
                    overflow: x7,
                    id: x8,
                    r: [x9, x10, x11, x12, x13, x13],
                    v: i,
                    f: [x14, im + g15, x10, x10]
                }], style: {'${symbolSelector}': {r: [_, _, x16, x12]}}
            },
            tt: {
                d: 2146,
                a: n,
                l: {"i": 0},
                data: [["eid227", d, 0, 0, "linear", e17, i, b], ["eid209", lf, 0, 0, "linear", e17, '-85px', '-85px'], ["eid208", lf, 125, 0, "linear", e17, '-85px', '-585px'], ["eid210", lf, 250, 0, "linear", e17, '-585px', '-1085px'], ["eid211", lf, 375, 0, "linear", e17, '-1085px', '-1585px'], ["eid212", lf, 500, 0, "linear", e17, '-1585px', '-2085px'], ["eid213", lf, 625, 0, "linear", e17, '-2085px', '-2585px'], ["eid214", lf, 750, 0, "linear", e17, '-2585px', '-3085px'], ["eid215", lf, 875, 0, "linear", e17, '-3085px', '-3585px'], ["eid216", lf, 1000, 0, "linear", e17, '-3585px', '-4085px'], ["eid217", lf, 1125, 0, "linear", e17, '-4085px', '-4585px'], ["eid218", lf, 1250, 0, "linear", e17, '-4585px', '-5085px'], ["eid219", lf, 1375, 0, "linear", e17, '-5085px', '-5585px'], ["eid220", lf, 1500, 0, "linear", e17, '-5585px', '-6085px'], ["eid221", lf, 1625, 0, "linear", e17, '-6085px', '-6585px'], ["eid222", lf, 1750, 0, "linear", e17, '-6585px', '-7085px'], ["eid229", lf, 1875, 0, "linear", e17, '-7085px', '-8585px'], ["eid223", lf, 2000, 0, "linear", e17, '-8556px', '-9085px'], ["eid230", lf, 2146, 0, "linear", e17, '-9085px', '-9085px']]
            }
        },
        "ouou02": {
            v: x2,
            mv: x3,
            b: x4,
            stf: i,
            cg: i,
            rI: n,
            cn: {
                dom: [{t: g, id: x18, r: [x19, x10, x20, x12, x13, x13], f: [x14, im + g21, x10, x10]}, {
                    pr: x13,
                    t: x22,
                    sr: [x23],
                    id: x24,
                    r: [x25, x26, x27, x28, x13, x13],
                    v: i,
                    tag: x22
                }], style: {'${symbolSelector}': {overflow: x29, r: [_, _, x16, x12]}}
            },
            tt: {
                d: 1625,
                a: y,
                data: [["eid290", h, 0, 0, "linear", e30, '480px', '480px'], ["eid289", lf, 0, 0, "linear", e30, '-45px', '-45px'], ["eid292", lf, 83, 0, "linear", e30, '-45px', '-545px'], ["eid293", lf, 167, 0, "linear", e30, '-545px', '-1045px'], ["eid294", lf, 250, 0, "linear", e30, '-1045px', '-1545px'], ["eid295", lf, 333, 0, "linear", e30, '-1545px', '-2095px'], ["eid296", lf, 417, 0, "linear", e30, '-2095px', '-2645px'], ["eid297", lf, 500, 0, "linear", e30, '-2645px', '-3145px'], ["eid298", lf, 583, 0, "linear", e30, '-3145px', '-3645px'], ["eid299", lf, 667, 0, "linear", e30, '-3645px', '-4145px'], ["eid300", lf, 875, 0, "linear", e30, '-4145px', '-4645px'], ["eid301", lf, 958, 0, "linear", e30, '-4645px', '-5145px'], ["eid302", lf, 1042, 0, "linear", e30, '-5145px', '-6145px'], ["eid303", lf, 1125, 0, "linear", e30, '-6145px', '-6645px'], ["eid304", lf, 1208, 0, "linear", e30, '-6645px', '-7145px'], ["eid305", lf, 1292, 0, "linear", e30, '-7145px', '-7645px'], ["eid306", lf, 1375, 0, "linear", e30, '-7645px', '-8145px'], ["eid307", lf, 1458, 0, "linear", e30, '-8145px', '-8645px'], ["eid308", lf, 1542, 0, "linear", e30, '-8645px', '-9145px'], ["eid309", lf, 1625, 0, "linear", e30, '-9145px', '-9645px'], ["eid291", tp, 0, 0, "linear", e30, '0px', '0px'], ["eid310", "tr", 500, function (e, d) {
                    this.eMA(e, d);
                }, ['play', '${iiii03}', []]]]
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
            });
//Edge binding end
        })("stage");
//Edge symbol end:'stage'

//=========================================================

//Edge symbol: 'rond'
        (function (symbolName) {
            Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2146, function (sym, e) {
                sym.stop();
            });
//Edge binding end
        })("rond");
//Edge symbol end:'rond'

//=========================================================

//Edge symbol: 'ouou02'
        (function (symbolName) {
            Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1625, function (sym, e) {
                sym.stop();
            });
//Edge binding end
        })("ouou02");
//Edge symbol end:'ouou02'
    })
})(AdobeEdge.$, AdobeEdge, "EDGE-27145435");