(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 33525, (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    }),
    Object.defineProperty(t, "warnOnce", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e => {}
}
, 34502, e => {
    "use strict";
    var r = e.i(43476)
      , t = e.i(61745);
    let n = ({changeLocaleAction: e}) => {
        let n = (0,
        t.useLocale)();
        return (0,
        r.jsxs)(r.Fragment, {
            children: [" ", (0,
            r.jsx)("button", {
                onClick: () => e("en"),
                className: `font-xs text-xs transition hover:cursor-pointer ${"en" === n ? "text-white bg-gray-400 px-2 py-2 rounded-md" : "text-gray-400 p-2 rounded-md hover:bg-gray-500"}`,
                type: "button",
                children: "English"
            }), (0,
            r.jsx)("button", {
                onClick: () => e("bn"),
                type: "button",
                className: `font-medium text-xs transition hover:cursor-pointer ${"bn" === n ? "text-white bg-gray-400 px-2 py-2 rounded-md" : "text-gray-400 p-2 rounded-md hover:bg-gray-500"}`,
                children: "বাংলা"
            })]
        })
    }
    ;
    e.s(["LocaleSwitcher", () => n])
}
, 18566, (e, r, t) => {
    r.exports = e.r(76562)
}
, 95187, (e, r, t) => {
    "use strict";
    Object.defineProperty(t, "__esModule", {
        value: !0
    });
    var n = {
        callServer: function() {
            return o.callServer
        },
        createServerReference: function() {
            return i.createServerReference
        },
        findSourceMapURL: function() {
            return c.findSourceMapURL
        }
    };
    for (var l in n)
        Object.defineProperty(t, l, {
            enumerable: !0,
            get: n[l]
        });
    let o = e.r(32120)
      , c = e.r(92245)
      , i = e.r(35326)
}
, 48148, 63762, e => {
    "use strict";
    var r = e.i(61745);
    function t(e, r) {
        return (...e) => {
            try {
                return r(...e)
            } catch {
                throw Error(void 0)
            }
        }
    }
    let n = t(0, r.useTranslations);
    t(0, r.useFormatter),
    e.s(["useTranslations", () => n], 48148);
    var l = e.i(43476);
    function o() {
        return (0,
        l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 16 16",
            width: "1em",
            height: "1em",
            children: (0,
            l.jsx)("path", {
                fill: "currentColor",
                d: "M14 8h-2.5L8 11.5L4.5 8H2l-2 4v1h16v1H0zm0 1H2l-2 4v1h16v-1zM9 5V1H7v4H3.5L8 9.5L12.5 5z"
            })
        })
    }
    function c() {
        return (0,
        l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "1em",
            height: "1em",
            children: (0,
            l.jsx)("path", {
                fill: "currentColor",
                d: "M2 8v9h4v4h12v-4h4V8zm14 11H8v-5h8zm3-7c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m-1-9H6v4h12z"
            })
        })
    }
    function i() {
        return (0,
        l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "1.2em",
            height: "1.2em",
            children: (0,
            l.jsx)("path", {
                fill: "currentColor",
                fillRule: "evenodd",
                d: "M12 20a7.97 7.97 0 0 1-5.002-1.756l.002.001v-.683c0-1.794 1.492-3.25 3.333-3.25h3.334c1.84 0 3.333 1.456 3.333 3.25v.683A7.97 7.97 0 0 1 12 20M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10c0 5.5-4.44 9.963-9.932 10h-.138C6.438 21.962 2 17.5 2 12m10-5c-1.84 0-3.333 1.455-3.333 3.25S10.159 13.5 12 13.5c1.84 0 3.333-1.455 3.333-3.25S13.841 7 12 7",
                clipRule: "evenodd"
            })
        })
    }
    function s() {
        return (0,
        l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 512 576",
            width: "1em",
            height: "1em",
            children: (0,
            l.jsx)("path", {
                fill: "currentColor",
                d: "m402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0m162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2M384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5"
            })
        })
    }
    function u() {
        return (0,
        l.jsxs)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "3em",
            height: "3em",
            children: [(0,
            l.jsx)("path", {
                fill: "currentColor",
                d: "M20.48 3.512a11.97 11.97 0 0 0-8.486-3.514C5.366-.002-.007 5.371-.007 11.999c0 3.314 1.344 6.315 3.516 8.487A11.97 11.97 0 0 0 11.995 24c6.628 0 12.001-5.373 12.001-12.001c0-3.314-1.344-6.315-3.516-8.487m-1.542 15.427a9.8 9.8 0 0 1-6.943 2.876c-5.423 0-9.819-4.396-9.819-9.819a9.8 9.8 0 0 1 2.876-6.943a9.8 9.8 0 0 1 6.942-2.876c5.422 0 9.818 4.396 9.818 9.818a9.8 9.8 0 0 1-2.876 6.942z"
            }), (0,
            l.jsx)("path", {
                fill: "currentColor",
                d: "m13.537 12l3.855-3.855a1.091 1.091 0 0 0-1.542-1.541l.001-.001l-3.855 3.855l-3.855-3.855A1.091 1.091 0 0 0 6.6 8.145l-.001-.001l3.855 3.855l-3.855 3.855a1.091 1.091 0 1 0 1.541 1.542l.001-.001l3.855-3.855l3.855 3.855a1.091 1.091 0 1 0 1.542-1.541l-.001-.001z"
            })]
        })
    }
    function h() {
        return (0,
        l.jsx)("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            width: "3em",
            height: "3em",
            children: (0,
            l.jsx)("path", {
                fill: "currentColor",
                d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12s12-5.373 12-12S18.627 0 12 0m-1.2 17.4l-5.4-5.4l1.68-1.68l3.72 3.72l7.92-7.92l1.68 1.68l-9.36 9.36z"
            })
        })
    }
    e.s(["CloseIcon", () => u, "Download", () => o, "EditIcon", () => s, "Print", () => c, "SuccessIcon", () => h, "UserIcon", () => i], 63762)
}
, 85933, e => {
    "use strict";
    var r = e.i(95187)
      , t = (0,
    r.createServerReference)("00d35a70df129bdf8ee9085e262583732323232577", r.callServer, void 0, r.findSourceMapURL, "logoutAction");
    e.s(["logoutAction", () => t])
}
]);
