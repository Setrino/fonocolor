(function (compId) {
    var _ = null, y = true, n = false, x2 = '6.0.0', x11 = '109px', x3 = '5.0.0', x7 = 'ellipse', x24 = 'rgba(0,0,0,0)', e6 = '${Stage}', x12 = '81', x10 = 'rgb(0, 0, 0)', g = 'image', x5 = 'rgba(0,0,0,0.00)', x19 = '1', x13 = '283px', x18 = 'sprite_base-03', x23 = '480px', m = 'rect', x21 = '0px', e32 = '${Ellipse}', i = 'none', x16 = 'visible', x26 = '-4445px', x4 = '6.0.0.400', x9 = 'Ellipse', o = 'opacity', lf = 'left', e33 = '${sprite_base-03}', x8 = '50%', bg = 'background-color', x15 = 'auto', x29 = 'regarde-suite', d = 'display', e34 = '${regarde-suite}', tp = 'top', x31 = '500px', x28 = '10000px', x27 = '0', x14 = '293px', x20 = '-8045px', x17 = 'rgba(192,192,192,1)', x22 = '15000px';
    var g25 = 'sprite%20base-03.PNG', g1 = 'jquery-1.7.1.min.js', g30 = 'regarde-suite.PNG';
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
            tt: {d: 3250, a: y, data: [["eid147", bg, 0, 0, "linear", e6, 'rgba(0,0,0,0.00)', 'rgba(0,0,0,0.00)']]}
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
                    t: x7,
                    br: [x8, x8, x8, x8],
                    id: x9,
                    s: [0, x10, i],
                    r: [x11, x12, x13, x14, x15, x15],
                    overflow: x16,
                    v: i,
                    f: [x17]
                }, {
                    t: g,
                    id: x18,
                    o: x19,
                    r: [x20, x21, x22, x23, x15, x15],
                    f: [x24, im + g25, x21, x21]
                }, {
                    r: [x26, x27, x28, x23, x15, x15],
                    overflow: x15,
                    id: x29,
                    o: x27,
                    t: g,
                    f: [x24, im + g30, x21, x21]
                }], style: {'${symbolSelector}': {r: [_, _, x31, x23]}}
            },
            tt: {
                d: 3250,
                a: y,
                l: {"i": 0},
                data: [["eid129", lf, 0, 0, "linear", e32, '109px', '109px'], ["eid149", tp, 0, 0, "linear", e33, '0px', '0px'], ["eid157", lf, 0, 0, "linear", e33, '-45px', '-45px'], ["eid159", lf, 125, 0, "linear", e33, '-1045px', '-545px'], ["eid160", lf, 250, 0, "linear", e33, '-545px', '-1045px'], ["eid161", lf, 375, 0, "linear", e33, '-1045px', '-1545px'], ["eid163", lf, 500, 0, "linear", e33, '-2045px', '-2545px'], ["eid164", lf, 625, 0, "linear", e33, '-2545px', '-3045px'], ["eid165", lf, 750, 0, "linear", e33, '-3045px', '-3545px'], ["eid166", lf, 875, 0, "linear", e33, '-3545px', '-4045px'], ["eid167", lf, 1000, 0, "linear", e33, '-4045px', '-4545px'], ["eid168", lf, 1125, 0, "linear", e33, '-4545px', '-5045px'], ["eid169", lf, 1250, 0, "linear", e33, '-5045px', '-5545px'], ["eid170", lf, 1375, 0, "linear", e33, '-5545px', '-6045px'], ["eid171", lf, 1500, 0, "linear", e33, '-6045px', '-6545px'], ["eid172", lf, 1625, 0, "linear", e33, '-6545px', '-7045px'], ["eid173", lf, 1750, 0, "linear", e33, '-7045px', '-7545px'], ["eid174", lf, 1875, 0, "linear", e33, '-7545px', '-8045px'], ["eid176", lf, 2125, 0, "linear", e33, '-8545px', '-8045px'], ["eid186", lf, 1875, 0, "linear", e34, '56px', '-445px'], ["eid187", lf, 2625, 0, "linear", e34, '-445px', '-945px'], ["eid190", lf, 2750, 0, "linear", e34, '-945px', '-1445px'], ["eid191", lf, 2875, 0, "linear", e34, '-1444px', '-1945px'], ["eid192", lf, 3000, 0, "linear", e34, '-1944px', '-2945px'], ["eid193", lf, 3125, 0, "linear", e34, '-2944px', '-3945px'], ["eid194", lf, 3250, 0, "linear", e34, '-3944px', '-4445px'], ["eid111", d, 0, 0, "linear", e32, i, i], ["eid200", o, 1875, 0, "linear", e34, '0', '1']]
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
            Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function (sym, e) {
                sym.$("regarde-suite").hide();
            });
//Edge binding end
            Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1875, function (sym, e) {
                sym.$("regarde-suite").show();
                sym.$("sprite_base-03").hide();
            });
//Edge binding end
        })("rond");
//Edge symbol end:'rond'
    })
})(AdobeEdge.$, AdobeEdge, "EDGE-27145435");