(function (compId) {
    var _ = null, y = true, n = false, x2 = '6.0.0', x3 = '5.0.0', x14 = 'rgba(0,0,0,0)', e6 = '${Stage}', x19 = '7000px', g = 'image', x5 = 'rgba(0,0,0,0.00)', x9 = '-8585px', x12 = '480px', m = 'rect', x10 = '0px', x8 = 'sprite_ouou02_02', x29 = '271', i = 'none', x7 = 'visible', x4 = '6.0.0.400', e17 = '${sprite_ouou02_02}', x11 = '9700px', x27 = 'eueue032', e34 = '${sprite_euu_part1}', x23 = 'sprite_euu02_part2', e33 = '${sprite_euu02_part2}', x32 = 'hidden', bg = 'background-color', x31 = '45px', x13 = 'auto', x22 = '-2545px', x20 = 'sprite_euu_part1', x28 = '303', x26 = '../animations/media/eueue03.mp3', x25 = 'audio', tp = 'top', x16 = '500px', x18 = '-6545px', b = 'block', x30 = '320px', lf = 'left', d = 'display';
    var g21 = 'sprite_euu03_part1.PNG', g15 = 'sprite_ouou02_02.PNG', g24 = 'sprite_euu02_part2.PNG', g1 = 'jquery-1.7.1.min.js';
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
            tt: {
                d: 1920.3333333333,
                a: y,
                data: [["eid147", bg, 0, 0, "linear", e6, 'rgba(0,0,0,0.00)', 'rgba(0,0,0,0.00)']]
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
                dom: [{r: [x18, x10, x19, x12, x13, x13], id: x20, t: g, f: [x14, im + g21, x10, x10]}, {
                    t: g,
                    v: i,
                    r: [x22, x10, x19, x12, x13, x13],
                    id: x23,
                    f: [x14, im + g24, x10, x10]
                }, {pr: x13, t: x25, sr: [x26], id: x27, r: [x28, x29, x30, x31, x13, x13], v: i, tag: x25}],
                style: {'${symbolSelector}': {overflow: x32, r: [_, _, x16, x12]}}
            },
            tt: {
                d: 1920.3333333333,
                a: y,
                data: [["eid313", d, 0, 0, "linear", e33, i, i], ["eid304", d, 1333, 0, "linear", e33, i, i], ["eid305", d, 1420, 0, "linear", e33, i, b], ["eid288", lf, 0, 0, "linear", e34, '-45px', '-45px'], ["eid290", lf, 83, 0, "linear", e34, '-45px', '-545px'], ["eid291", lf, 167, 0, "linear", e34, '-545px', '-1045px'], ["eid292", lf, 250, 0, "linear", e34, '-1045px', '-1545px'], ["eid293", lf, 333, 0, "linear", e34, '-1545px', '-2045px'], ["eid294", lf, 417, 0, "linear", e34, '-2045px', '-2545px'], ["eid295", lf, 500, 0, "linear", e34, '-2545px', '-3045px'], ["eid296", lf, 583, 0, "linear", e34, '-3045px', '-3545px'], ["eid297", lf, 708, 0, "linear", e34, '-3545px', '-4045px'], ["eid298", lf, 833, 0, "linear", e34, '-4045px', '-4545px'], ["eid299", lf, 958, 0, "linear", e34, '-4545px', '-5045px'], ["eid300", lf, 1083, 0, "linear", e34, '-5045px', '-5545px'], ["eid301", lf, 1208, 0, "linear", e34, '-5545px', '-6045px'], ["eid302", lf, 1333, 0, "linear", e34, '-6045px', '-6545px'], ["eid303", lf, 1420, 0, "linear", e34, '-6545px', '-7045px'], ["eid289", tp, 0, 0, "linear", e34, '0px', '0px'], ["eid306", lf, 1420, 0, "linear", e33, '-45px', '-45px'], ["eid307", lf, 1503, 0, "linear", e33, '-45px', '-545px'], ["eid308", lf, 1586, 0, "linear", e33, '-545px', '-1045px'], ["eid309", lf, 1670, 0, "linear", e33, '-1045px', '-1545px'], ["eid310", lf, 1753, 0, "linear", e33, '-1545px', '-2045px'], ["eid311", lf, 1836, 0, "linear", e33, '-2045px', '-2545px'], ["eid312", lf, 1920, 0, "linear", e33, '-2545px', '-2545px'], ["eid315", "tr", 562, function (e, d) {
                    this.eMA(e, d);
                }, ['play', '${eueue032}', []]]]
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
            Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1920, function (sym, e) {
                sym.stop();
            });
//Edge binding end
        })("ouou02");
//Edge symbol end:'ouou02'
    })
})(AdobeEdge.$, AdobeEdge, "EDGE-27145435");