(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 73669, t => {
    "use strict";
    var e = t.i(43476)
      , r = t.i(55487);
    t.i(47167);
    var o = t.i(71645);
    function n(t) {
        return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t) {
            return typeof t
        }
        : function(t) {
            return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
        }
        )(t)
    }
    function i(t) {
        return (i = Object.setPrototypeOf ? Object.getPrototypeOf : function(t) {
            return t.__proto__ || Object.getPrototypeOf(t)
        }
        )(t)
    }
    function s(t) {
        if (void 0 === t)
            throw ReferenceError("this hasn't been initialised - super() hasn't been called");
        return t
    }
    function u(t, e) {
        return (u = Object.setPrototypeOf || function(t, e) {
            return t.__proto__ = e,
            t
        }
        )(t, e)
    }
    function c(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r,
        t
    }
    var a = function(t) {
        var e;
        if ("function" != typeof t && null !== t)
            throw TypeError("Super expression must either be null or a function");
        function r() {
            var t;
            if (!(this instanceof r))
                throw TypeError("Cannot call a class as a function");
            for (var e, o, u = arguments.length, a = Array(u), l = 0; l < u; l++)
                a[l] = arguments[l];
            return o = (t = (e = i(r)).call.apply(e, [this].concat(a))) && ("object" === n(t) || "function" == typeof t) ? t : s(this),
            c(s(o), "state", {
                bootstrapped: !1
            }),
            c(s(o), "_unsubscribe", void 0),
            c(s(o), "handlePersistorState", function() {
                o.props.persistor.getState().bootstrapped && (o.props.onBeforeLift ? Promise.resolve(o.props.onBeforeLift()).finally(function() {
                    return o.setState({
                        bootstrapped: !0
                    })
                }) : o.setState({
                    bootstrapped: !0
                }),
                o._unsubscribe && o._unsubscribe())
            }),
            o
        }
        return r.prototype = Object.create(t && t.prototype, {
            constructor: {
                value: r,
                writable: !0,
                configurable: !0
            }
        }),
        t && u(r, t),
        e = [{
            key: "componentDidMount",
            value: function() {
                this._unsubscribe = this.props.persistor.subscribe(this.handlePersistorState),
                this.handlePersistorState()
            }
        }, {
            key: "componentWillUnmount",
            value: function() {
                this._unsubscribe && this._unsubscribe()
            }
        }, {
            key: "render",
            value: function() {
                return "function" == typeof this.props.children ? this.props.children(this.state.bootstrapped) : this.state.bootstrapped ? this.props.children : this.props.loading
            }
        }],
        function(t, e) {
            for (var r = 0; r < e.length; r++) {
                var o = e[r];
                o.enumerable = o.enumerable || !1,
                o.configurable = !0,
                "value"in o && (o.writable = !0),
                Object.defineProperty(t, o.key, o)
            }
        }(r.prototype, e),
        r
    }(o.PureComponent);
    c(a, "defaultProps", {
        children: null,
        loading: null
    });
    var l = t.i(42222);
    t.s(["default", 0, ({children: t}) => (0,
    e.jsx)(r.Provider, {
        store: l.default,
        children: (0,
        e.jsx)(a, {
            loading: null,
            persistor: l.persistor,
            children: t
        })
    })], 73669)
}
, 75191, t => {
    "use strict";
    var e = t.i(71645)
      , r = t.i(42222)
      , o = t.i(3669);
    t.s(["default", 0, () => {
        let t = (0,
        r.useAppDispatch)();
        return (0,
        e.useEffect)( () => {
            (async () => {
                try {
                    let e = await fetch("/api/get-ip")
                      , r = await e.json();
                    r.clientIp && t((0,
                    o.setClientIp)(r.clientIp))
                } catch (t) {
                    console.error("Failed to fetch client IP:", t)
                }
            }
            )()
        }
        , [t]),
        null
    }
    ])
}
]);
