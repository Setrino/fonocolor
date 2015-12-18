(function (compId) {
    var _ = null, y = true, n = false, x2 = '6.0.0', x3 = '5.0.0', x20 = 'sprite_ouou02_022', x15 = 'rgba(0,0,0,0)', e7 = '${rond}', x22 = '7000px', g = 'image', x5 = 'rgba(0,0,0,0.00)', b = 'block', x28 = '250', x11 = '480px', m = 'rect', x9 = '0px', x14 = 'sprite_ouou02_02', x19 = '-7650px', x21 = '-5745px', i = 'none', x13 = 'visible', x4 = '6.0.0.400', e18 = '${sprite_ouou02_02}', x10 = '9700px', lf = 'left', e6 = '${Stage}', x26 = '../animations/media/ouou03.mp3', bg = 'background-color', x32 = 'hidden', x12 = 'auto', x31 = '45px', d = 'display', x29 = '232', x27 = 'ouou03', x23 = 'ou02suite', tp = 'top', x17 = '500px', x25 = 'audio', e33 = '${ou02suite}', x30 = '320px', x8 = '-8585px', e34 = '${sprite_ouou02_022}';
    var g24 = 'ou02suite.PNG', g16 = 'sprite_ouou02_02.PNG', g1 = 'jquery-1.7.1.min.js';
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
                    v: i,
                    t: m,
                    r: ['0', '0', '500', '480', 'auto', 'auto'],
                    overflow: 'hidden'
                }, {id: 'ouou02', symbolName: 'ouou02', t: m, r: ['0px', '0px', '9700', '480', 'auto', 'auto']}],
                style: {
                    '${Stage}': {
                        isStage: true,
                        r: ['null', 'null', '500', '480', 'auto', 'auto'],
                        overflow: 'hidden',
                        f: [x5]
                    }
                }
            },
            tt: {
                d: 2792,
                a: y,
                data: [["eid147", bg, 0, 0, "linear", e6, 'rgba(0,0,0,0.00)', 'rgba(0,0,0,0.00)'], ["eid256", d, 0, 0, "linear", e7, i, i], ["eid231", "tr", 0, function (e, d) {
                    this.eSA(e, d);
                }, ['play', '${rond}', []]], ["eid232", "tr", 2146, function (e, d) {
                    this.eSA(e, d);
                }, ['stop', '${rond}', []]]]
            }
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
                    r: [x8, x9, x10, x11, x12, x12],
                    overflow: x13,
                    id: x14,
                    t: g,
                    v: i,
                    f: [x15, im + g16, x9, x9]
                }], style: {'${symbolSelector}': {r: [_, _, x17, x11]}}
            },
            tt: {
                d: 2146,
                a: n,
                l: {"i": 0},
                data: [["eid209", lf, 0, 0, "linear", e18, '-85px', '-85px'], ["eid208", lf, 125, 0, "linear", e18, '-85px', '-585px'], ["eid210", lf, 250, 0, "linear", e18, '-585px', '-1085px'], ["eid211", lf, 375, 0, "linear", e18, '-1085px', '-1585px'], ["eid212", lf, 500, 0, "linear", e18, '-1585px', '-2085px'], ["eid213", lf, 625, 0, "linear", e18, '-2085px', '-2585px'], ["eid214", lf, 750, 0, "linear", e18, '-2585px', '-3085px'], ["eid215", lf, 875, 0, "linear", e18, '-3085px', '-3585px'], ["eid216", lf, 1000, 0, "linear", e18, '-3585px', '-4085px'], ["eid217", lf, 1125, 0, "linear", e18, '-4085px', '-4585px'], ["eid218", lf, 1250, 0, "linear", e18, '-4585px', '-5085px'], ["eid219", lf, 1375, 0, "linear", e18, '-5085px', '-5585px'], ["eid220", lf, 1500, 0, "linear", e18, '-5585px', '-6085px'], ["eid221", lf, 1625, 0, "linear", e18, '-6085px', '-6585px'], ["eid222", lf, 1750, 0, "linear", e18, '-6585px', '-7085px'], ["eid229", lf, 1875, 0, "linear", e18, '-7085px', '-8585px'], ["eid223", lf, 2000, 0, "linear", e18, '-8556px', '-9085px'], ["eid230", lf, 2146, 0, "linear", e18, '-9085px', '-9085px'], ["eid227", d, 0, 0, "linear", e18, i, b]]
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
                dom: [{t: g, v: b, r: [x19, x9, x10, x11, x12, x12], id: x20, f: [x15, im + g16, x9, x9]}, {
                    t: g,
                    v: i,
                    r: [x21, x9, x22, x11, x12, x12],
                    id: x23,
                    f: [x15, im + g24, x9, x9]
                }, {pr: x12, t: x25, sr: [x26], id: x27, r: [x28, x29, x30, x31, x12, x12], v: i, tag: x25}],
                style: {'${symbolSelector}': {overflow: x32, r: [_, _, x17, x11]}}
            },
            tt: {
                d: 2792,
                a: y,
                data: [["eid270", tp, 1333, 0, "linear", e33, '0px', '0px'], ["eid279", lf, 1250, 0, "linear", e33, '-4745px', '-4745px'], ["eid282", lf, 1333, 0, "linear", e33, '-4745px', '-5245px'], ["eid283", lf, 1417, 0, "linear", e33, '-5245px', '-5745px'], ["eid284", lf, 1500, 0, "linear", e33, '-5745px', '-6245px'], ["eid238", lf, 0, 0, "linear", e34, '-85px', '-85px'], ["eid237", lf, 83, 0, "linear", e34, '-85px', '-585px'], ["eid239", lf, 167, 0, "linear", e34, '-585px', '-1085px'], ["eid240", lf, 250, 0, "linear", e34, '-1085px', '-1585px'], ["eid241", lf, 333, 0, "linear", e34, '-1585px', '-2085px'], ["eid242", lf, 417, 0, "linear", e34, '-2085px', '-2585px'], ["eid243", lf, 500, 0, "linear", e34, '-2585px', '-3085px'], ["eid244", lf, 583, 0, "linear", e34, '-3085px', '-3585px'], ["eid245", lf, 667, 0, "linear", e34, '-3585px', '-4085px'], ["eid246", lf, 750, 0, "linear", e34, '-4085px', '-4585px'], ["eid247", lf, 833, 0, "linear", e34, '-4585px', '-5085px'], ["eid248", lf, 917, 0, "linear", e34, '-5085px', '-5585px'], ["eid249", lf, 1000, 0, "linear", e34, '-5585px', '-6085px'], ["eid250", lf, 1083, 0, "linear", e34, '-6085px', '-6585px'], ["eid267", lf, 1167, 0, "linear", e34, '-6585px', '-7085px'], ["eid268", lf, 1250, 0, "linear", e34, '-7085px', '-7585px'], ["eid269", lf, 1333, 0, "linear", e34, '-7585px', '-7650px'], ["eid255", lf, 2792, 0, "linear", e34, '-8000px', '-85px'], ["eid234", tp, 0, 0, "linear", e34, '0px', '0px'], ["eid271", d, 1250, 0, "linear", e33, i, b], ["eid272", d, 1250, 0, "linear", e34, b, i], ["eid288", "tr", 500, function (e, d) {
                    this.eMA(e, d);
                }, ['play', '${ouou03}', [0]]]]
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
            Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1542, function (sym, e) {
                sym.stop();
            });
//Edge binding end
        })("ouou02");
//Edge symbol end:'ouou02'
    })
})(AdobeEdge.$, AdobeEdge, "EDGE-27145435");