(function (compId) {
    var _ = null, y = true, n = false, x2 = '6.0.0', x3 = '5.0.0', x12 = 'rgba(0,0,0,0)', g = 'image', x5 = 'rgba(0,0,0,0.00)', x18 = '273', x25 = 'true', x24 = '0', x22 = '../animations/media/an02.mp3', x8 = '1px', x10 = '480px', m = 'rect', x14 = '0px', i = 'none', x17 = 'an', x4 = '6.0.0.400', x9 = '10600px', lf = 'left', x19 = '263', x15 = 'audio', x7 = '-47px', x27 = '490px', x11 = 'auto', x26 = '510px', tp = 'top', x6 = 'sprite-a-03', x21 = '45px', x23 = 'an02', x20 = '320px', e28 = '${sprite-a-03}', x16 = '../animations/media/an.mp3';
    var g1 = 'jquery-1.7.1.min.js', g13 = 'an_sprite.PNG';
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
                dom: [{id: x6, t: g, r: [x7, x8, x9, x10, x11, x11], f: [x12, im + g13, x14, x14]}, {
                    pr: x11,
                    t: x15,
                    sr: [x16],
                    id: x17,
                    r: [x18, x19, x20, x21, x11, x11],
                    v: i,
                    tag: x15
                }, {pr: x11, t: x15, sr: [x22], id: x23, r: [x24, x24, x20, x21, x11, x11], v: i, tag: x15}],
                style: {'${symbolSelector}': {isStage: x25, r: [undefined, undefined, x26, x27]}}
            },
            tt: {
                d: 1958,
                a: y,
                l: {"i": 0},
                data: [["eid119", lf, 0, 0, "linear", e28, '-47px', '-47px'], ["eid121", lf, 83, 0, "linear", e28, '-47px', '-547px'], ["eid122", lf, 167, 0, "linear", e28, '-547px', '-1047px'], ["eid123", lf, 250, 0, "linear", e28, '-1047px', '-1547px'], ["eid124", lf, 333, 0, "linear", e28, '-1547px', '-2047px'], ["eid125", lf, 417, 0, "linear", e28, '-2047px', '-2547px'], ["eid126", lf, 500, 0, "linear", e28, '-2547px', '-3047px'], ["eid127", lf, 583, 0, "linear", e28, '-3047px', '-3547px'], ["eid128", lf, 667, 0, "linear", e28, '-3547px', '-4047px'], ["eid129", lf, 750, 0, "linear", e28, '-4047px', '-4547px'], ["eid130", lf, 833, 0, "linear", e28, '-4547px', '-5047px'], ["eid131", lf, 1208, 0, "linear", e28, '-5047px', '-5547px'], ["eid132", lf, 1291, 0, "linear", e28, '-5547px', '-6047px'], ["eid133", lf, 1374, 0, "linear", e28, '-6047px', '-6547px'], ["eid134", lf, 1458, 0, "linear", e28, '-6547px', '-7047px'], ["eid135", lf, 1541, 0, "linear", e28, '-7047px', '-7547px'], ["eid136", lf, 1624, 0, "linear", e28, '-7547px', '-8047px'], ["eid137", lf, 1708, 0, "linear", e28, '-8047px', '-8547px'], ["eid138", lf, 1791, 0, "linear", e28, '-8547px', '-9047px'], ["eid139", lf, 1874, 0, "linear", e28, '-9047px', '-9547px'], ["eid140", lf, 1958, 0, "linear", e28, '-9547px', '-47px'], ["eid120", tp, 0, 0, "linear", e28, '1px', '1px'], ["eid143", "tr", 486, function (e, d) {
                    this.eMA(e, d);
                }, ['play', '${an}', []]]]
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