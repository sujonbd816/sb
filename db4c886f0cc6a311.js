(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 48949, e => {
    "use strict";
    var t = e.i(43476)
      , s = e.i(71645)
      , a = e.i(55487);
    e.i(47167);
    var r = e.i(46932)
      , l = e.i(48148)
      , o = e.i(5427)
      , n = e.i(95187)
      , i = (0,
    n.createServerReference)("602c60c9e18b0a3dbbcd0ee55f01c385f88d0638e0", n.callServer, void 0, n.findSourceMapURL, "submitMobileLogin")
      , c = e.i(97476)
      , u = e.i(76275)
      , p = e.i(32252);
    let d = {
        hidden: {
            opacity: 0,
            y: 40
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: .6,
                ease: "easeOut"
            }
        }
    };
    function m() {
        let e = (0,
        a.useDispatch)()
          , n = (0,
        a.useSelector)(e => e.ip.clientIp)
          , m = (0,
        l.useTranslations)("root")
          , [g,x] = (0,
        s.useState)("")
          , [b,h] = (0,
        s.useState)("")
          , [f,y] = (0,
        s.useState)(!1)
          , [v,w] = (0,
        s.useState)(null)
          , j = b.trim().length >= 11
          , S = async t => {
            t.preventDefault();
            try {
                y(!0),
                w(null);
                let t = await i({
                    mobile_no: b,
                    captcha_token: g
                }, n || void 0);
                t?.status_code === 200 ? (e((0,
                u.setStep)(t.data?.registered ? 3 : 2)),
                e((0,
                c.setPhoneNumber)(b))) : w({
                    message: t.message,
                    type: "error"
                })
            } catch (e) {
                w({
                    message: e instanceof Error ? e.message : "An unexpected error occurred.",
                    type: "error"
                })
            } finally {
                y(!1)
            }
        }
        ;
        return (0,
        t.jsxs)(r.motion.div, {
            className: "bg-white w-full p-4 rounded-lg ",
            variants: d,
            initial: "hidden",
            animate: "visible",
            children: [v && (0,
            t.jsx)(p.default, {
                message: v.message,
                type: v.type,
                onClose: () => w(null)
            }), (0,
            t.jsxs)("p", {
                className: "text-xs mb-2",
                children: [m("lblInputLoginMobile"), " ", (0,
                t.jsx)("span", {
                    className: "text-red-600 text-[10px]",
                    children: m("lblInputLoginMobileMsg")
                })]
            }), (0,
            t.jsxs)("form", {
                onSubmit: S,
                children: [(0,
                t.jsx)("input", {
                    type: "hidden",
                    name: "lang"
                }), (0,
                t.jsx)("input", {
                    type: "tel",
                    name: "phone",
                    className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 mb-3",
                    placeholder: m("lblInputLoginMobile"),
                    autoComplete: "off",
                    inputMode: "numeric",
                    maxLength: 11,
                    pattern: "[0-9]*",
                    value: b,
                    onChange: e => {
                        h(e.target.value.replace(/\D/g, "").slice(0, 11))
                    }
                    ,
                    onCopy: e => e.preventDefault(),
                    onPaste: e => e.preventDefault(),
                    onCut: e => e.preventDefault(),
                    required: !0
                }), (0,
                t.jsx)("div", {
                    className: "mb-2",
                    children: (0,
                    t.jsx)(o.default, {
                        sitekey: "0x4AAAAAABpNUpzYeppBoYpe",
                        onVerify: e => x(e)
                    })
                }), (0,
                t.jsx)(r.motion.button, {
                    type: "submit",
                    disabled: f || !j || !g,
                    whileTap: {
                        scale: .95
                    },
                    whileHover: {
                        scale: !f && j && g ? 1.03 : 1
                    },
                    className: `text-white mb-2 h-8 rounded-lg  text-xs w-full duration-300 sm:w-auto px-2 py-2 text-center transition 
          ${f || !j || !g ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
                    children: f ? m("checking") + "..." : m("lblProceed")
                })]
            })]
        })
    }
    var g = (0,
    n.createServerReference)("607e554c5e3b0872eddde365f294b534455946cb46", n.callServer, void 0, n.findSourceMapURL, "registrationOtp")
      , x = (0,
    n.createServerReference)("605d7bfc835abf06e52e5d6850aa6bd09ed3e671e2", n.callServer, void 0, n.findSourceMapURL, "reSendOtp")
      , b = e.i(88653)
      , h = e.i(63762)
      , f = e.i(59459);
    let y = ({message: e, type: a="info", onClose: l}) => {
        let[o,n] = (0,
        s.useState)(!0);
        if (!o)
            return null;
        let i = (0,
        f.isHTML)(e) ? "Too many attempts. Please try again later." : e;
        return (0,
        t.jsx)(b.AnimatePresence, {
            children: o && (0,
            t.jsx)(r.motion.div, {
                initial: {
                    scale: .8,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                exit: {
                    scale: .8,
                    opacity: 0
                },
                transition: {
                    type: "spring",
                    stiffness: 150,
                    damping: 25
                },
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm",
                children: (0,
                t.jsxs)("div", {
                    className: `flex justify-center flex-col h-1/2 rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 text-center ${{
                        success: "bg-green-500 text-white",
                        error: "bg-red-500 text-white",
                        info: "bg-blue-500 text-white",
                        warning: "bg-yellow-400 text-black"
                    }[a]}`,
                    children: [(0,
                    t.jsxs)("div", {
                        className: "flex flex-col justify-center items-center mb-4",
                        children: ["error" === a && (0,
                        t.jsx)(h.CloseIcon, {}), "success" === a && (0,
                        t.jsx)(h.SuccessIcon, {}), (0,
                        t.jsxs)("p", {
                            className: "text-white font-bold text-2xl py-4",
                            children: ["error" === a && "Error!", "success" === a && "Success!"]
                        })]
                    }), (0,
                    t.jsx)("span", {
                        className: "block mb-4",
                        children: i
                    }), (0,
                    t.jsx)("button", {
                        onClick: () => {
                            n(!1),
                            "Session expired. Please log in again." === e && (localStorage.clear(),
                            window.location.href = "/"),
                            "Registration successful" === e && (localStorage.clear(),
                            window.location.href = "/"),
                            "Password changed successfully" === e && (localStorage.clear(),
                            window.location.href = "/"),
                            l && l()
                        }
                        ,
                        className: "mt-2 w-24 py-2 rounded bg-gray-500 text-white hover:bg-gray-600 mx-auto",
                        children: "OK"
                    })]
                })
            })
        })
    }
      , v = () => {
        let e = (0,
        a.useDispatch)()
          , o = (0,
        l.useTranslations)("root")
          , n = (0,
        a.useSelector)(e => e.authUser.user)
          , i = (0,
        a.useSelector)(e => e.ip.clientIp)
          , [c,p] = (0,
        s.useState)(!1)
          , [d,m] = (0,
        s.useState)("")
          , [b,h] = (0,
        s.useState)("")
          , f = "" !== d.trim() && d.length >= 6
          , [v,w] = (0,
        s.useState)(null)
          , [j,S] = (0,
        s.useState)(30)
          , [N,C] = (0,
        s.useState)(!0)
          , [P,k] = (0,
        s.useState)(!1);
        (0,
        s.useEffect)( () => {
            n?.user_phone && h(n.user_phone)
        }
        , [n]);
        let D = async () => {
            p(!0);
            try {
                let e = await x({
                    resend: "1"
                }, i || void 0);
                200 === e.status_code ? (S(30),
                C(!0),
                k(!1)) : (S(30),
                C(!0),
                k(!1),
                w({
                    message: e?.message,
                    type: "error"
                }))
            } catch (a) {
                let t = "object" == typeof a && a?.message ? a.message : "Failed. Please try again later."
                  , s = "object" == typeof a && "number" == typeof a.status ? a.status : 422;
                (401 === s || 419 === s) && (w({
                    message: t,
                    type: "error"
                }),
                setTimeout( () => {
                    e((0,
                    u.setStep)(1))
                }
                , 5e3)),
                w({
                    message: t,
                    type: "error"
                })
            } finally {
                p(!1)
            }
        }
          , I = async () => {
            p(!0);
            try {
                let e = await g({
                    otp: d
                }, i || void 0);
                200 === e.status_code ? w({
                    message: "Registration successful",
                    type: "success"
                }) : w({
                    message: e?.message,
                    type: "error"
                })
            } catch (s) {
                let e = "object" == typeof s && s?.message ? s.message : "Failed. Please try again later."
                  , t = "object" == typeof s && "number" == typeof s.status ? s.status : 422;
                (401 === t || 419 === t) && (w({
                    message: e,
                    type: "error"
                }),
                setTimeout( () => {
                    (0,
                    u.setStep)(1)
                }
                , 5e3)),
                w({
                    message: e,
                    type: "error"
                })
            } finally {
                p(!1)
            }
        }
        ;
        return (0,
        s.useEffect)( () => {
            let e;
            return N && j > 0 && (e = setInterval( () => {
                S(e => e - 1)
            }
            , 1e3)),
            0 === j && N && (clearInterval(e),
            C(!1),
            k(!0)),
            () => clearInterval(e)
        }
        , [j, N]),
        (0,
        t.jsxs)(r.motion.div, {
            className: "bg-white w-full p-4",
            variants: {
                hidden: {
                    opacity: 0,
                    y: 40
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .6,
                        ease: "easeOut"
                    }
                }
            },
            initial: "hidden",
            animate: "visible",
            children: [v && (0,
            t.jsx)(y, {
                message: v.message,
                type: v.type,
                onClose: () => w(null)
            }), (0,
            t.jsxs)("p", {
                className: "text-[10px]",
                children: [o("lblAuthOtp1"), " (", b, ")"]
            }), (0,
            t.jsx)("p", {
                className: "text-[10px]",
                children: o("lblAuthOtp2")
            }), (0,
            t.jsxs)("p", {
                className: "text-xs mt-4",
                children: [o("lblInputAuthOtp"), " ", (0,
                t.jsxs)("span", {
                    className: "text-red-600 text-[10px]",
                    children: [" ", "*", o("lblNoCopyPaste")]
                })]
            }), (0,
            t.jsx)("input", {
                type: "text",
                id: "otp",
                autoComplete: "off",
                className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
                placeholder: o("lblInputOtp"),
                inputMode: "numeric",
                value: d,
                maxLength: 6,
                onCopy: e => e.preventDefault(),
                onPaste: e => e.preventDefault(),
                onCut: e => e.preventDefault(),
                onChange: e => {
                    m(e.target.value.replace(/\D/g, ""))
                }
            }), (0,
            t.jsx)(r.motion.button, {
                type: "button",
                disabled: c || !f,
                whileTap: {
                    scale: .95
                },
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
              ${c || !f ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838]"}`,
                onClick: !c && f ? I : void 0,
                children: o(c ? "checking" : "lblProceed")
            }), (0,
            t.jsx)(r.motion.button, {
                onClick: D,
                disabled: !P,
                className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${P ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
                children: P ? o("resendOtp") : o("resendOtp") + ` ${j}s`
            })]
        })
    }
    ;
    var w = e.i(18566)
      , j = (0,
    n.createServerReference)("60a5f5e96fb267f718c17e98ee821eae0c3381977e", n.callServer, void 0, n.findSourceMapURL, "loginOtp")
      , S = (0,
    n.createServerReference)("6078c159defd71512496e894c041ec76dc18fe309b", n.callServer, void 0, n.findSourceMapURL, "submitPassword");
    let N = () => {
        let e = (0,
        w.useRouter)()
          , o = (0,
        a.useSelector)(e => e.authUser.user)
          , n = (0,
        a.useSelector)(e => e.ip.clientIp)
          , i = (0,
        a.useDispatch)()
          , d = (0,
        l.useTranslations)("root")
          , [m,g] = (0,
        s.useState)("")
          , [x,b] = (0,
        s.useState)(!1)
          , [h,f] = (0,
        s.useState)("")
          , y = "" !== m.trim() && m.length >= 6
          , [v,N] = (0,
        s.useState)(null)
          , [C,P] = (0,
        s.useState)(30)
          , [k,D] = (0,
        s.useState)(!0)
          , [I,O] = (0,
        s.useState)(!1);
        (0,
        s.useEffect)( () => {
            o.email && f(o.email)
        }
        , [o]);
        let T = async () => {
            try {
                b(!0);
                let t = await j({
                    mobile_no: o?.user_phone,
                    password: o?.password,
                    otp: m
                }, n || void 0);
                200 === t.status_code ? (i((0,
                c.setSlotAvailable)(t.data?.slot_available)),
                i((0,
                c.setAuthData)({
                    email: t?.data?.email,
                    user_phone: t?.data?.mobile_no,
                    name: t?.data?.name,
                    photo: t?.data?.profile_image
                })),
                i((0,
                c.clearPassword)()),
                e.push("/application")) : N({
                    message: t?.message,
                    type: "error"
                })
            } catch (s) {
                let e = "object" == typeof s && s?.message ? s.message : "Failed. Please try again later."
                  , t = "object" == typeof s && "number" == typeof s.status ? s.status : 422;
                (401 === t || 419 === t) && (N({
                    message: e,
                    type: "error"
                }),
                setTimeout( () => {
                    i((0,
                    u.setStep)(1))
                }
                , 5e3)),
                N({
                    message: e,
                    type: "error"
                })
            } finally {
                b(!1)
            }
        }
          , _ = async () => {
            b(!0);
            try {
                let e = await S({
                    mobile_no: o.user_phone,
                    password: o.password
                }, n || void 0);
                200 === e.status_code ? (P(30),
                D(!0),
                O(!1)) : (P(30),
                D(!0),
                O(!1),
                N({
                    message: e?.message,
                    type: "error"
                }))
            } catch (s) {
                let e = "object" == typeof s && s?.message ? s.message : "Failed. Please try again later."
                  , t = "object" == typeof s && "number" == typeof s.status ? s.status : 422;
                (401 === t || 419 === t) && (N({
                    message: e,
                    type: "error"
                }),
                setTimeout( () => {
                    i((0,
                    u.setStep)(1))
                }
                , 5e3)),
                N({
                    message: e,
                    type: "error"
                })
            } finally {
                b(!1)
            }
        }
        ;
        return (0,
        s.useEffect)( () => {
            let e;
            return k && C > 0 && (e = setInterval( () => {
                P(e => e - 1)
            }
            , 1e3)),
            0 === C && k && (clearInterval(e),
            D(!1),
            O(!0)),
            () => clearInterval(e)
        }
        , [C, k]),
        (0,
        t.jsxs)(r.motion.div, {
            className: "bg-white w-full p-4",
            variants: {
                hidden: {
                    opacity: 0,
                    y: 40
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .6,
                        ease: "easeOut"
                    }
                }
            },
            initial: "hidden",
            animate: "visible",
            children: [v && (0,
            t.jsx)(p.default, {
                message: v.message,
                type: v.type,
                onClose: () => N(null)
            }), (0,
            t.jsxs)("p", {
                className: "text-[10px]",
                children: [d("lblAuthOtp1"), " (", h, ")"]
            }), (0,
            t.jsx)("p", {
                className: "text-[10px]",
                children: d("lblAuthOtp2")
            }), (0,
            t.jsxs)("p", {
                className: "text-xs mt-4",
                children: [d("lblInputAuthOtp"), " ", (0,
                t.jsxs)("span", {
                    className: "text-red-600 text-[10px]",
                    children: [" ", "*", d("lblNoCopyPaste")]
                })]
            }), (0,
            t.jsx)("input", {
                type: "text",
                id: "otp",
                autoComplete: "off",
                className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
                placeholder: d("lblInputOtp"),
                inputMode: "numeric",
                value: m,
                maxLength: 6,
                onCopy: e => e.preventDefault(),
                onPaste: e => e.preventDefault(),
                onCut: e => e.preventDefault(),
                onChange: e => {
                    g(e.target.value.replace(/\D/g, ""))
                }
            }), (0,
            t.jsxs)("div", {
                children: [(0,
                t.jsx)(r.motion.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: "text-white mb-2 mt-2 mr-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-gray-400 hover:bg-[#218838] focus:ring-[#218838] cursor-pointer",
                    onClick: () => i((0,
                    u.setStep)(1)),
                    children: d("back")
                }), (0,
                t.jsx)(r.motion.button, {
                    type: "button",
                    disabled: x || !y,
                    whileTap: {
                        scale: .95
                    },
                    className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
               ${x || !y ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
                    onClick: y ? T : void 0,
                    children: x ? d("checking") + "..." : d("lblProceed")
                }), (0,
                t.jsx)(r.motion.button, {
                    onClick: _,
                    disabled: !I,
                    className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${I ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
                    children: I ? d("resendOtp") : d("resendOtp") + ` ${C}s`
                })]
            })]
        })
    }
      , C = () => {
        let e = (0,
        a.useSelector)(e => e.authUser.user)
          , o = (0,
        a.useSelector)(e => e.ip.clientIp)
          , n = (0,
        a.useDispatch)()
          , i = (0,
        l.useTranslations)("root")
          , [d,m] = (0,
        s.useState)("")
          , [g,x] = (0,
        s.useState)(!1)
          , [b,h] = (0,
        s.useState)(null)
          , f = "" !== d.trim() && d.length >= 6
          , y = async () => {
            x(!0);
            try {
                let t = await S({
                    mobile_no: e?.user_phone,
                    password: d
                }, o || void 0);
                200 === t.status_code ? (n((0,
                c.setEmail)(t?.data?.email)),
                n((0,
                c.setPassword)(d)),
                n((0,
                u.setStep)(t.data?.email_confirmed ? 100 : 4))) : h({
                    message: t?.message,
                    type: "error"
                })
            } catch (s) {
                let e = "object" == typeof s && s?.message ? s.message : "Failed. Please try again later."
                  , t = "object" == typeof s && "number" == typeof s.status ? s.status : 422;
                (401 === t || 419 === t) && (h({
                    message: e,
                    type: "error"
                }),
                setTimeout( () => {
                    n((0,
                    u.setStep)(1))
                }
                , 5e3)),
                h({
                    message: e,
                    type: "error"
                })
            } finally {
                x(!1)
            }
        }
          , v = async () => {
            n((0,
            u.setStep)(7))
        }
        ;
        return (0,
        t.jsxs)(r.motion.div, {
            className: "bg-white w-full p-4",
            variants: {
                hidden: {
                    opacity: 0,
                    y: 40
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .6,
                        ease: "easeOut"
                    }
                }
            },
            initial: "hidden",
            animate: "visible",
            children: [b && (0,
            t.jsx)(p.default, {
                message: b.message,
                type: b.type,
                onClose: () => h(null)
            }), (0,
            t.jsxs)("p", {
                className: "text-xs mt-4",
                children: [i("lblInputPassword"), " ", (0,
                t.jsx)("span", {
                    className: "text-red-600 text-[10px]",
                    children: i("lblNoCopyPaste")
                })]
            }), (0,
            t.jsx)("input", {
                type: "password",
                id: "password",
                autoComplete: "off",
                onCopy: e => e.preventDefault(),
                onPaste: e => e.preventDefault(),
                onCut: e => e.preventDefault(),
                className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
                placeholder: i("lblInputPassword"),
                value: d,
                onChange: e => m(e.target.value)
            }), (0,
            t.jsxs)("div", {
                children: [(0,
                t.jsx)(r.motion.button, {
                    type: "button",
                    whileTap: {
                        scale: .95
                    },
                    className: "text-white mb-2 mt-2 mr-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-gray-400 hover:bg-[#218838] focus:ring-[#218838] cursor-pointer",
                    onClick: () => n((0,
                    u.setStep)(1)),
                    children: i("back")
                }), (0,
                t.jsx)(r.motion.button, {
                    type: "button",
                    disabled: g || !f,
                    whileTap: {
                        scale: .95
                    },
                    className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
         ${g || !f ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
                    onClick: !g && f ? y : void 0,
                    children: i(g ? "checking" : "lblProceed")
                })]
            }), (0,
            t.jsx)("span", {
                className: "text-xs cursor-pointer text-blue-600 mt-2",
                onClick: v,
                children: i("lblInputForgotPassword") ?? "Forgot password ?"
            })]
        })
    }
    ;
    var P = (0,
    n.createServerReference)("602bec95e722f0976e4ed5ad8458785e476e19def5", n.callServer, void 0, n.findSourceMapURL, "registerUser")
      , k = (0,
    n.createServerReference)("60ab5557d866a9931849dc2d280c84259f087dc3ad", n.callServer, void 0, n.findSourceMapURL, "verifyEmail")
      , D = (0,
    n.createServerReference)("60cdc5240878841e0e831a792f7a9fc086d3f49188", n.callServer, void 0, n.findSourceMapURL, "verifyEmailOtp");
    let I = ({message: e, type: a="info", onClose: l}) => {
        let[o,n] = (0,
        s.useState)(!0)
          , [i,c] = (0,
        s.useState)(!1)
          , [u,p] = (0,
        s.useState)(5);
        if ((0,
        s.useEffect)( () => {
            let e = null;
            return u > 0 ? e = setTimeout( () => p(e => e - 1), 1e3) : c(!0),
            () => {
                e && clearTimeout(e)
            }
        }
        , [u]),
        !o)
            return null;
        let d = (0,
        f.isHTML)(e) ? "Too many attempts. Please try again later." : e;
        return (0,
        t.jsx)(b.AnimatePresence, {
            children: o && (0,
            t.jsx)(r.motion.div, {
                initial: {
                    scale: .8,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                exit: {
                    scale: .8,
                    opacity: 0
                },
                transition: {
                    type: "spring",
                    stiffness: 150,
                    damping: 25
                },
                className: "fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm",
                children: (0,
                t.jsxs)("div", {
                    className: `flex justify-center flex-col h-1/2 rounded-xl shadow-2xl p-6 max-w-md w-full mx-4 text-center ${{
                        success: "bg-green-500 text-white",
                        error: "bg-red-500 text-white",
                        info: "bg-blue-500 text-white",
                        warning: "bg-yellow-400 text-black"
                    }[a]}`,
                    children: [(0,
                    t.jsxs)("div", {
                        className: "flex flex-col justify-center items-center mb-4",
                        children: [(0,
                        t.jsx)(h.CloseIcon, {}), (0,
                        t.jsx)("p", {
                            className: "text-white font-bold text-2xl py-4",
                            children: "Error!"
                        })]
                    }), (0,
                    t.jsx)("span", {
                        className: "block mb-4",
                        children: d
                    }), i ? (0,
                    t.jsx)("button", {
                        onClick: () => {
                            n(!1),
                            l?.()
                        }
                        ,
                        className: "mt-2 w-24 py-2 rounded bg-gray-500 text-white hover:bg-gray-600 mx-auto",
                        children: "OK"
                    }) : (0,
                    t.jsxs)("p", {
                        className: "text-sm text-white",
                        children: ["Please wait ", u, " seconds..."]
                    })]
                })
            })
        })
    }
      , O = () => {
        let e = (0,
        a.useSelector)(e => e.authUser.user)
          , o = (0,
        a.useSelector)(e => e.ip.clientIp)
          , n = (0,
        a.useDispatch)()
          , i = (0,
        l.useTranslations)("root")
          , [c,d] = (0,
        s.useState)(null)
          , [m,g] = (0,
        s.useState)(null)
          , [x,b] = (0,
        s.useState)("")
          , [h,f] = (0,
        s.useState)(null)
          , [y,v] = (0,
        s.useState)(null)
          , [w,j] = (0,
        s.useState)("")
          , [S,N] = (0,
        s.useState)("")
          , [C,O] = (0,
        s.useState)("")
          , [T,_] = (0,
        s.useState)("")
          , [R,A] = (0,
        s.useState)("")
          , [M,E] = (0,
        s.useState)(!1)
          , [L,$] = (0,
        s.useState)(!1)
          , [U,F] = (0,
        s.useState)(!1)
          , [z,V] = (0,
        s.useState)(!1)
          , [B,H] = (0,
        s.useState)(!1)
          , [K,J] = (0,
        s.useState)(0)
          , [G,Y] = (0,
        s.useState)(!1)
          , q = (0,
        s.useRef)(null)
          , X = e => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.trim())
          , Q = h && x.length >= 11 && "" !== w.trim() && X(S) && "" !== T.trim() && "" !== R.trim() && T === R
          , W = async () => {
            try {
                H(!0);
                let e = new FormData;
                e.append("photo", h),
                e.append("mobile_no", x),
                e.append("full_name", w),
                e.append("email", S),
                e.append("password", T),
                e.append("password_confirmation", R),
                e.append("resend", "0");
                let t = await P(e, o || void 0);
                t?.status_code === 200 ? n((0,
                u.setStep)(6)) : d({
                    message: t?.message || "Registration failed",
                    type: "error"
                })
            } catch (e) {
                d({
                    message: e?.message || "Failed. Please try again later.",
                    type: "error"
                })
            } finally {
                H(!1)
            }
        }
          , Z = "" !== S.trim() && X(S)
          , ee = async () => {
            try {
                F(!0);
                let e = await k({
                    email: S
                }, o || void 0);
                200 === e.status_code ? E(!0) : d({
                    message: e?.message,
                    type: "error"
                })
            } catch (e) {
                d({
                    message: "Failed. Please try again.",
                    type: "error"
                })
            } finally {
                F(!1)
            }
        }
          , et = "" !== C.trim() && C.length >= 6
          , es = async () => {
            try {
                V(!0);
                let e = await D({
                    email: S,
                    otp: C
                }, o || void 0);
                200 === e.status_code ? $(!0) : d({
                    message: e?.message,
                    type: "error"
                })
            } catch (e) {
                d({
                    message: "OTP verification failed",
                    type: "error"
                })
            } finally {
                V(!1)
            }
        }
        ;
        (0,
        s.useEffect)( () => {
            let e = null;
            return G && K > 0 ? e = setInterval( () => J(e => e - 1), 1e3) : 0 === K && Y(!1),
            () => clearInterval(e)
        }
        , [K, G]);
        let ea = () => {
            ee(),
            J(30),
            Y(!0)
        }
        ;
        return (0,
        s.useEffect)( () => {
            e?.user_phone && b(e.user_phone)
        }
        , [e]),
        (0,
        t.jsxs)(r.motion.div, {
            className: "bg-white w-full p-4",
            variants: {
                hidden: {
                    opacity: 0,
                    y: 40
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .6,
                        ease: "easeOut"
                    }
                }
            },
            initial: "hidden",
            animate: "visible",
            children: [c && (0,
            t.jsx)(p.default, {
                message: c.message,
                type: c.type,
                onClose: () => d(null)
            }), m && (0,
            t.jsx)(I, {
                message: m.message,
                type: m.type,
                onClose: () => g(null)
            }), (0,
            t.jsxs)("p", {
                className: "text-xs mb-2 uppercase",
                children: [i("lblInputRegPhotoUpload"), " ", (0,
                t.jsxs)("span", {
                    className: "text-red-600 text-[10px]",
                    children: ["*", i("lblInputRegPhotoSize")]
                })]
            }), (0,
            t.jsx)("div", {
                className: "relative w-24 h-24 border-2 border-gray-300 rounded-lg cursor-pointer hover:border-gray-400 transition-colors flex items-center justify-center overflow-hidden",
                onClick: () => q.current?.click(),
                children: h ? (0,
                t.jsx)("img", {
                    src: y || "/placeholder.svg",
                    className: "w-full h-full object-cover"
                }) : (0,
                t.jsx)("svg", {
                    className: "w-16 h-16 text-gray-300",
                    fill: "currentColor",
                    viewBox: "0 0 24 24",
                    children: (0,
                    t.jsx)("path", {
                        d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"
                    })
                })
            }), (0,
            t.jsx)("input", {
                ref: q,
                type: "file",
                accept: "image/*",
                onChange: e => {
                    let t = e.target.files?.[0];
                    t && (t.size > 2097152 ? d({
                        message: "File size must be less than 2MB",
                        type: "error"
                    }) : ["image/jpeg", "image/jpg", "image/png"].includes(t.type) ? (f(t),
                    v(URL.createObjectURL(t))) : d({
                        message: "Please select a JPG, PNG, or JPEG file",
                        type: "error"
                    }))
                }
                ,
                className: "hidden"
            }), (0,
            t.jsx)("p", {
                className: "text-xs mt-4 uppercase",
                children: i("lblInputRegMobile")
            }), (0,
            t.jsx)("input", {
                type: "tel",
                id: "phone",
                autoComplete: "off",
                onCopy: e => e.preventDefault(),
                onPaste: e => e.preventDefault(),
                onCut: e => e.preventDefault(),
                disabled: !0,
                className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-blue-400 focus:border-[0.1px] border-[0.5px] block w-full p-2.5 my-2",
                placeholder: i("lblInputRegMobile"),
                inputMode: "numeric",
                pattern: "[0-9]*",
                maxLength: 11,
                value: x,
                onChange: e => b(e.target.value)
            }), (0,
            t.jsx)("p", {
                className: "text-xs mt-4 uppercase",
                children: i("lblInputRegName")
            }), (0,
            t.jsx)("input", {
                type: "text",
                id: "name",
                autoComplete: "off",
                onCopy: e => e.preventDefault(),
                onPaste: e => e.preventDefault(),
                onCut: e => e.preventDefault(),
                className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
                placeholder: i("lblInputRegName"),
                onChange: e => j(e.target.value),
                value: w
            }), (0,
            t.jsx)("p", {
                className: "text-xs mt-4 uppercase",
                children: i("lblInputEmail")
            }), (0,
            t.jsx)("input", {
                type: "email",
                id: "email",
                autoComplete: "off",
                onCopy: e => e.preventDefault(),
                onPaste: e => e.preventDefault(),
                onCut: e => e.preventDefault(),
                className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
                placeholder: i("lblInputEmail"),
                onChange: e => N(e.target.value),
                value: S
            }), L && (0,
            t.jsx)("p", {
                className: "text-xs text-green-500 mt-1",
                children: i("emailSuccessfullyVerified")
            }), !M && (0,
            t.jsx)("button", {
                type: "button",
                disabled: !Z || U,
                onClick: Z ? ea : void 0,
                className: `text-xs font-medium rounded px-2 py-1.5 mt-2
            ${!Z ? "bg-gray-300 text-gray-400" : "bg-blue-700 text-white"}`,
                children: i(U ? "checking" : "verify_email")
            }), M && !L && (0,
            t.jsx)("button", {
                onClick: ea,
                disabled: G,
                className: `text-xs font-medium rounded px-2 py-1.5 mt-2
            ${G ? "bg-gray-300 text-gray-400" : "bg-blue-700 text-white"}`,
                children: G ? `${i("resendOtp")} ${K}s` : i("resendOtp")
            }), M && !L && (0,
            t.jsxs)(t.Fragment, {
                children: [(0,
                t.jsx)("input", {
                    type: "text",
                    id: "otp",
                    autoComplete: "off",
                    onCopy: e => e.preventDefault(),
                    onPaste: e => e.preventDefault(),
                    onCut: e => e.preventDefault(),
                    className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
                    placeholder: "Enter OTP",
                    maxLength: 6,
                    onChange: e => O(e.target.value),
                    value: C
                }), (0,
                t.jsx)("button", {
                    type: "button",
                    disabled: !et || z,
                    onClick: et ? es : void 0,
                    className: `text-xs font-medium rounded px-2 py-1.5 mt-2
              ${!et ? "bg-gray-300 text-gray-400" : "bg-blue-700 text-white"}`,
                    children: i(z ? "checking" : "verifyOtp")
                })]
            }), (0,
            t.jsx)("p", {
                className: "text-xs mt-4",
                children: i("lblInputPassword")
            }), (0,
            t.jsx)("input", {
                type: "password",
                id: "password",
                disabled: !L,
                autoComplete: "off",
                onCopy: e => e.preventDefault(),
                onPaste: e => e.preventDefault(),
                onCut: e => e.preventDefault(),
                className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
                placeholder: "********",
                onChange: e => _(e.target.value),
                value: T
            }), (0,
            t.jsx)("p", {
                className: "text-xs mt-4",
                children: i("lblInputRePassword")
            }), (0,
            t.jsx)("input", {
                type: "password",
                id: "confirmPassword",
                autoComplete: "off",
                onCopy: e => e.preventDefault(),
                onPaste: e => e.preventDefault(),
                onCut: e => e.preventDefault(),
                disabled: !L,
                className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
                placeholder: "********",
                onChange: e => A(e.target.value),
                value: R
            }), (0,
            t.jsx)(r.motion.button, {
                type: "button",
                disabled: !Q || B,
                whileTap: {
                    scale: .95
                },
                onClick: Q ? W : void 0,
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
            ${!Q || B ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838]"}
            `,
                children: i(B ? "checking" : "lblProceed")
            })]
        })
    }
    ;
    var T = (0,
    n.createServerReference)("605a28da919571e850a9cda6fbb6fde3eafea0b85e", n.callServer, void 0, n.findSourceMapURL, "changePassword");
    let _ = () => {
        let e = (0,
        a.useDispatch)()
          , o = (0,
        l.useTranslations)("root")
          , n = (0,
        a.useSelector)(e => e.ip.clientIp)
          , [i,d] = (0,
        s.useState)("")
          , [m,g] = (0,
        s.useState)(!1)
          , [x,b] = (0,
        s.useState)(null)
          , h = "" !== i.trim() && i.length >= 11
          , f = async () => {
            g(!0);
            try {
                h = !1;
                let t = await T({
                    mobile_no: i
                }, n || void 0);
                200 === t.status_code ? (e((0,
                c.setPhoneNumber)(i)),
                e((0,
                c.setEmail)(t.data?.email)),
                e((0,
                u.setStep)(t.data?.email_confirmed ? 9 : 8))) : b({
                    message: t?.message,
                    type: "error"
                })
            } catch (a) {
                let t = "object" == typeof a && a?.message ? a.message : "Failed. Please try again later."
                  , s = "object" == typeof a && "number" == typeof a.status ? a.status : 422;
                (401 === s || 419 === s) && (b({
                    message: t,
                    type: "error"
                }),
                setTimeout( () => {
                    e((0,
                    u.setStep)(1))
                }
                , 5e3)),
                b({
                    message: t,
                    type: "error"
                })
            } finally {
                g(!1)
            }
        }
        ;
        return (0,
        t.jsxs)(r.motion.div, {
            className: "bg-white w-full p-4",
            variants: {
                hidden: {
                    opacity: 0,
                    y: 40
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .6,
                        ease: "easeOut"
                    }
                }
            },
            initial: "hidden",
            animate: "visible",
            children: [x && (0,
            t.jsx)(p.default, {
                message: x.message,
                type: x.type,
                onClose: () => b(null)
            }), (0,
            t.jsxs)("p", {
                className: "text-xs mt-2 mb-2",
                children: [o("lblInputLoginMobilePassChange"), " ", (0,
                t.jsx)("span", {
                    className: "text-red-600 text-[10px]",
                    children: o("lblInputLoginMobileMsg")
                })]
            }), (0,
            t.jsx)("input", {
                type: "tel",
                id: "phone",
                autoComplete: "off",
                className: " bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 mb-3",
                placeholder: o("lblInputLoginMobile"),
                inputMode: "numeric",
                pattern: "[0-9]*",
                maxLength: 11,
                value: i,
                onChange: e => {
                    d(e.target.value.replace(/\D/g, ""))
                }
            }), (0,
            t.jsx)(r.motion.button, {
                type: "button",
                disabled: m || !h,
                whileTap: {
                    scale: .95
                },
                whileHover: {
                    scale: !m && h ? 1.03 : 1
                },
                className: `text-white mb-2 h-8 rounded-lg  text-xs w-full duration-300 sm:w-auto px-2 py-2 text-center transition 
          ${m || !h ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
                onClick: !m && h ? f : void 0,
                children: o(m ? "checking" : "lblProceed")
            })]
        })
    }
    ;
    var R = e.i(42222)
      , A = (0,
    n.createServerReference)("605693b672675b4a33c68d5bd9de5d6df49891a706", n.callServer, void 0, n.findSourceMapURL, "changePasswordOtp");
    let M = () => {
        let e = (0,
        a.useDispatch)()
          , o = (0,
        R.useAppSelector)(e => e.authUser.user)
          , n = (0,
        l.useTranslations)("root")
          , i = (0,
        a.useSelector)(e => e.ip.clientIp)
          , [d,m] = (0,
        s.useState)("")
          , [g,x] = (0,
        s.useState)(!1)
          , [b,h] = (0,
        s.useState)("")
          , [f,y] = (0,
        s.useState)(null)
          , [v,w] = (0,
        s.useState)(30)
          , [j,S] = (0,
        s.useState)(!0)
          , [N,C] = (0,
        s.useState)(!1)
          , P = "" !== d.trim() && d.length >= 6
          , k = async () => {
            x(!0);
            try {
                let t = await A({
                    mobile_no: o?.user_phone,
                    password: o?.password,
                    otp: d
                }, i || void 0);
                200 === t.status_code ? (e((0,
                c.setName)(t?.data?.name)),
                e((0,
                c.setEmail)(t?.data?.email)),
                e((0,
                c.setPhoneNumber)(t?.data?.mobile_no)),
                e((0,
                c.setPhoto)(t?.data?.profile_image)),
                e((0,
                u.setStep)(10))) : y({
                    message: t?.message,
                    type: "error"
                })
            } catch (a) {
                let t = "object" == typeof a && a?.message ? a.message : "Failed. Please try again later."
                  , s = "object" == typeof a && "number" == typeof a.status ? a.status : 422;
                (401 === s || 419 === s) && (y({
                    message: t,
                    type: "error"
                }),
                setTimeout( () => {
                    e((0,
                    u.setStep)(1))
                }
                , 5e3)),
                y({
                    message: t,
                    type: "error"
                })
            } finally {
                x(!1)
            }
        }
          , D = async () => {
            x(!0);
            try {
                let e = localStorage.getItem("user_phone")
                  , t = await T({
                    mobile_no: e
                }, i || void 0);
                200 === t.status_code ? (w(30),
                S(!0),
                C(!1)) : (w(30),
                S(!0),
                C(!1),
                y({
                    message: t?.message,
                    type: "error"
                }))
            } catch (a) {
                let t = "object" == typeof a && a?.message ? a.message : "Failed. Please try again later."
                  , s = "object" == typeof a && "number" == typeof a.status ? a.status : 422;
                (401 === s || 419 === s) && (y({
                    message: t,
                    type: "error"
                }),
                setTimeout( () => {
                    e((0,
                    u.setStep)(1))
                }
                , 5e3)),
                y({
                    message: t,
                    type: "error"
                })
            } finally {
                x(!1)
            }
        }
        ;
        return (0,
        s.useEffect)( () => {
            o.email && h(o.email)
        }
        , [o]),
        (0,
        s.useEffect)( () => {
            let e;
            return j && v > 0 && (e = setInterval( () => {
                w(e => e - 1)
            }
            , 1e3)),
            0 === v && j && (clearInterval(e),
            S(!1),
            C(!0)),
            () => clearInterval(e)
        }
        , [v, j]),
        (0,
        t.jsxs)(r.motion.div, {
            className: "bg-white w-full p-4",
            variants: {
                hidden: {
                    opacity: 0,
                    y: 40
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .6,
                        ease: "easeOut"
                    }
                }
            },
            initial: "hidden",
            animate: "visible",
            children: [f && (0,
            t.jsx)(p.default, {
                message: f.message,
                type: f.type,
                onClose: () => y(null)
            }), (0,
            t.jsxs)("p", {
                className: "text-[10px]",
                children: [n("lblAuthOtp1"), " (", b, ")"]
            }), (0,
            t.jsx)("p", {
                className: "text-[10px]",
                children: n("lblAuthOtp2")
            }), (0,
            t.jsxs)("p", {
                className: "text-xs mt-4",
                children: [n("lblInputAuthOtp"), " ", (0,
                t.jsxs)("span", {
                    className: "text-red-600 text-[10px]",
                    children: [" ", "*", n("lblNoCopyPaste")]
                })]
            }), (0,
            t.jsx)("input", {
                type: "text",
                id: "otp",
                autoComplete: "off",
                className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-blue-400 focus:border-[0.1px] border-[0.5px] block w-full p-2.5 my-2",
                placeholder: n("lblInputOtp"),
                inputMode: "numeric",
                value: d,
                maxLength: 6,
                onCopy: e => e.preventDefault(),
                onPaste: e => e.preventDefault(),
                onCut: e => e.preventDefault(),
                onChange: e => {
                    m(e.target.value.replace(/\D/g, ""))
                }
            }), (0,
            t.jsx)(r.motion.button, {
                type: "button",
                disabled: g || !P,
                whileTap: {
                    scale: .95
                },
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
               ${g || !P ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
                onClick: P ? k : void 0,
                children: g ? n("checking") + "..." : n("lblProceed")
            }), (0,
            t.jsx)(r.motion.button, {
                onClick: D,
                disabled: !N,
                className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${N ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
                children: N ? n("resendOtp") : n("resendOtp") + ` ${v}s`
            })]
        })
    }
    ;
    var E = (0,
    n.createServerReference)("607eae7598d1ed12dee8343a3eff5b4f9a22f4821f", n.callServer, void 0, n.findSourceMapURL, "changePasswordConfirm");
    let L = () => {
        let e = (0,
        l.useTranslations)("root")
          , o = (0,
        a.useDispatch)()
          , n = (0,
        a.useSelector)(e => e.ip.clientIp)
          , [i,p] = (0,
        s.useState)("")
          , [d,m] = (0,
        s.useState)(!1)
          , [g,x] = (0,
        s.useState)("")
          , [b,h] = (0,
        s.useState)(null)
          , f = "" !== i.trim() && i.length >= 6 && "" !== g.trim() && g.length >= 6
          , v = async () => {
            try {
                if (m(!0),
                i !== g)
                    return void h({
                        message: "Password and confirm password do not match",
                        type: "error"
                    });
                let e = await E({
                    password: i,
                    password_confirmation: g
                }, n || void 0);
                200 === e.status_code ? (o((0,
                c.clearAll)()),
                h({
                    message: "Password changed successfully",
                    type: "success"
                })) : h({
                    message: e?.message,
                    type: "error"
                })
            } catch (s) {
                let e = "object" == typeof s && s?.message ? s.message : "Failed. Please try again later."
                  , t = "object" == typeof s && "number" == typeof s.status ? s.status : 422;
                (401 === t || 419 === t) && (h({
                    message: e,
                    type: "error"
                }),
                setTimeout( () => {
                    o((0,
                    u.setStep)(1))
                }
                , 5e3)),
                h({
                    message: e,
                    type: "error"
                })
            } finally {
                m(!1)
            }
        }
        ;
        return (0,
        t.jsxs)(r.motion.div, {
            className: "bg-white w-full p-4",
            variants: {
                hidden: {
                    opacity: 0,
                    y: 40
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .6,
                        ease: "easeOut"
                    }
                }
            },
            initial: "hidden",
            animate: "visible",
            children: [b && (0,
            t.jsx)(y, {
                message: b.message,
                type: b.type,
                onClose: () => h(null)
            }), (0,
            t.jsxs)("p", {
                className: "text-xs mt-4",
                children: [e("lblInputPassword"), " ", (0,
                t.jsx)("span", {
                    className: "text-red-600 text-[10px]",
                    children: e("lblNoCopyPaste")
                })]
            }), (0,
            t.jsx)("input", {
                type: "password",
                id: "password",
                autoComplete: "off",
                onCopy: e => e.preventDefault(),
                onPaste: e => e.preventDefault(),
                onCut: e => e.preventDefault(),
                className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-blue-400 focus:border-[0.1px] border-[0.5px] block w-full p-2.5 my-2",
                placeholder: e("lblInputPassword"),
                value: i,
                onChange: e => p(e.target.value)
            }), i.length > 0 && i.length < 6 && (0,
            t.jsx)("p", {
                className: "text-red-500 text-[11px] mb-2",
                children: e("passwordMinLengthMsg")
            }), (0,
            t.jsxs)("p", {
                className: "text-xs mt-4",
                children: [e("lblInputRePassword"), " ", (0,
                t.jsx)("span", {
                    className: "text-red-600 text-[10px]",
                    children: e("lblNoCopyPaste")
                })]
            }), (0,
            t.jsx)("input", {
                type: "password",
                id: "password_confirm",
                onCopy: e => e.preventDefault(),
                onPaste: e => e.preventDefault(),
                onCut: e => e.preventDefault(),
                autoComplete: "off",
                className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-blue-400 focus:border-[0.1px] border-[0.5px] block w-full p-2.5 my-2",
                placeholder: e("lblInputRePassword"),
                value: g,
                onChange: e => x(e.target.value)
            }), (0,
            t.jsx)(r.motion.button, {
                type: "button",
                disabled: !f,
                whileTap: {
                    scale: .95
                },
                className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
         ${d || !f ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer"}`,
                onClick: !d && f ? v : void 0,
                children: d ? e("checking") + "..." : e("lblProceed")
            })]
        })
    }
    ;
    var $ = (0,
    n.createServerReference)("60f402535c61cd17a63d48207038aa2961c12f932f", n.callServer, void 0, n.findSourceMapURL, "changePasswordEmailVerify");
    let U = () => {
        let e = (0,
        a.useDispatch)()
          , o = (0,
        R.useAppSelector)(e => e.authUser.user)
          , n = (0,
        l.useTranslations)("root")
          , i = (0,
        a.useSelector)(e => e.ip.clientIp)
          , [c,d] = (0,
        s.useState)("")
          , [m,g] = (0,
        s.useState)("")
          , [x,b] = (0,
        s.useState)(null)
          , [h,f] = (0,
        s.useState)(!1)
          , y = "" !== c.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.trim());
        (0,
        s.useEffect)( () => {
            if (o.email)
                try {
                    let e = JSON.parse(o.email);
                    g(e)
                } catch {
                    g(o.email)
                }
        }
        , [o]);
        let v = async () => {
            try {
                f(!0);
                let t = await $({
                    email: c
                }, i || void 0);
                200 === t.status_code ? e((0,
                u.setStep)(9)) : b({
                    message: t?.message,
                    type: "error"
                })
            } catch (a) {
                let t = "object" == typeof a && a?.message ? a.message : "Failed. Please try again later."
                  , s = "object" == typeof a && "number" == typeof a.status ? a.status : 422;
                (401 === s || 419 === s) && (b({
                    message: t,
                    type: "error"
                }),
                setTimeout( () => {
                    e((0,
                    u.setStep)(1))
                }
                , 5e3)),
                b({
                    message: t,
                    type: "error"
                })
            } finally {
                f(!1)
            }
        }
        ;
        return (0,
        t.jsxs)(r.motion.div, {
            className: "bg-white w-full p-4",
            variants: {
                hidden: {
                    opacity: 0,
                    y: 40
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .6,
                        ease: "easeOut"
                    }
                }
            },
            initial: "hidden",
            animate: "visible",
            children: [x && (0,
            t.jsx)(p.default, {
                message: x.message,
                type: x.type,
                onClose: () => b(null)
            }), (0,
            t.jsxs)("p", {
                className: "text-xs",
                children: [n("lblAuthFullEmail"), " (", m, ")"]
            }), (0,
            t.jsx)("p", {
                className: "text-xs my-1",
                children: n("lblAuthFullEmail2")
            }), (0,
            t.jsxs)("p", {
                className: "text-xs mt-4",
                children: [n("lblInputRegEmail"), " ", (0,
                t.jsxs)("span", {
                    className: "text-red-600 text-[10px]",
                    children: ["*", n("lblNoCopyPaste")]
                })]
            }), (0,
            t.jsx)("input", {
                type: "email",
                id: "phone",
                className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
                placeholder: n("lblInputRegEmail"),
                value: c,
                onChange: e => d(e.target.value),
                autoComplete: "off",
                onCopy: e => e.preventDefault(),
                onPaste: e => e.preventDefault(),
                onCut: e => e.preventDefault()
            }), (0,
            t.jsx)(r.motion.button, {
                type: "button",
                disabled: !y || h,
                whileTap: {
                    scale: .95
                },
                whileHover: {
                    scale: !h && y ? 1.03 : 1
                },
                className: `text-white mb-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
              ${!y || h ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838]"}`,
                onClick: !h && y ? v : void 0,
                children: h ? n("checking") + "..." : n("lblProceed")
            })]
        })
    }
    ;
    var F = (0,
    n.createServerReference)("609028e470692c51258daa1bdc74a1b0c6487be0ad", n.callServer, void 0, n.findSourceMapURL, "loginEmailVerify");
    let z = () => {
        let e = (0,
        a.useDispatch)()
          , o = (0,
        l.useTranslations)("root")
          , n = (0,
        a.useSelector)(e => e.authUser.user)
          , i = (0,
        a.useSelector)(e => e.ip.clientIp)
          , [c,d] = (0,
        s.useState)("")
          , [m] = (0,
        s.useState)(( () => {
            if (n.email)
                try {
                    return JSON.parse(n.email)
                } catch {
                    return n.email
                }
            return ""
        }
        )())
          , [g,x] = (0,
        s.useState)(null)
          , b = "" !== c.trim() && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(c.trim())
          , h = async () => {
            try {
                let t = await F({
                    email: c
                }, i || void 0);
                200 === t.status_code ? e((0,
                u.setStep)(5)) : x({
                    message: t?.message,
                    type: "error"
                })
            } catch (a) {
                let t = "object" == typeof a && a?.message ? a.message : "Failed. Please try again later."
                  , s = "object" == typeof a && "number" == typeof a.status ? a.status : 422;
                (401 === s || 419 === s) && (x({
                    message: t,
                    type: "error"
                }),
                setTimeout( () => {
                    e((0,
                    u.setStep)(1))
                }
                , 5e3)),
                x({
                    message: t,
                    type: "error"
                })
            }
        }
        ;
        return (0,
        t.jsxs)(r.motion.div, {
            className: "bg-white w-full p-4",
            variants: {
                hidden: {
                    opacity: 0,
                    y: 40
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .6,
                        ease: "easeOut"
                    }
                }
            },
            initial: "hidden",
            animate: "visible",
            children: [g && (0,
            t.jsx)(p.default, {
                message: g.message,
                type: g.type,
                onClose: () => x(null)
            }), (0,
            t.jsxs)("p", {
                className: "text-xs",
                children: [o("lblAuthFullEmail"), " (", m, ")"]
            }), (0,
            t.jsx)("p", {
                className: "text-xs my-1",
                children: o("lblAuthFullEmail2")
            }), (0,
            t.jsxs)("p", {
                className: "text-xs mt-4",
                children: [o("lblInputRegEmail"), " ", (0,
                t.jsxs)("span", {
                    className: "text-red-600 text-[10px]",
                    children: ["*", o("lblNoCopyPaste")]
                })]
            }), (0,
            t.jsx)("input", {
                type: "email",
                id: "phone",
                className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-lg focus:ring-0 focus:border-black focus:border-[0.5px] border-[0.5px] block w-full p-2.5 my-2",
                placeholder: o("lblInputRegEmail"),
                value: c,
                onChange: e => d(e.target.value),
                autoComplete: "off",
                onCopy: e => e.preventDefault(),
                onPaste: e => e.preventDefault(),
                onCut: e => e.preventDefault()
            }), (0,
            t.jsx)(r.motion.button, {
                type: "button",
                disabled: !b,
                whileTap: {
                    scale: .95
                },
                whileHover: {
                    scale: b ? 1.03 : 1
                },
                className: `text-white mb-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
        ${b ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838]" : "bg-gray-400 cursor-not-allowed"}`,
                onClick: b ? h : void 0,
                children: o("lblProceed")
            })]
        })
    }
    ;
    var V = (0,
    n.createServerReference)("60f4fb45ca4da6f7253c4a73a7b81c8e57f6c0c6e9", n.callServer, void 0, n.findSourceMapURL, "loginEmailOtpVerify");
    let B = () => {
        let e = (0,
        w.useRouter)()
          , o = (0,
        a.useDispatch)()
          , n = (0,
        l.useTranslations)("root")
          , i = (0,
        a.useSelector)(e => e.ip.clientIp)
          , [d,m] = (0,
        s.useState)(!1)
          , [g,x] = (0,
        s.useState)("")
          , [b,h] = (0,
        s.useState)("")
          , f = "" !== g.trim() && g.length >= 6
          , [y,v] = (0,
        s.useState)(null)
          , [j,S] = (0,
        s.useState)(30)
          , [N,C] = (0,
        s.useState)(!0)
          , [P,k] = (0,
        s.useState)(!1);
        (0,
        s.useEffect)( () => {
            let e = localStorage.getItem("user_email");
            e && h(e)
        }
        , []);
        let D = async () => {
            m(!0);
            try {
                let e = await F({
                    email: b
                }, i || void 0);
                200 === e.status_code ? o((0,
                u.setStep)(5)) : v({
                    message: e?.message,
                    type: "error"
                })
            } catch (s) {
                let e = "object" == typeof s && s?.message ? s.message : "Failed. Please try again later."
                  , t = "object" == typeof s && "number" == typeof s.status ? s.status : 422;
                (401 === t || 419 === t) && (v({
                    message: e,
                    type: "error"
                }),
                setTimeout( () => {
                    o((0,
                    u.setStep)(1))
                }
                , 5e3)),
                v({
                    message: e,
                    type: "error"
                })
            }
        }
        ;
        (0,
        s.useEffect)( () => {
            let e;
            return N && j > 0 && (e = setInterval( () => {
                S(e => e - 1)
            }
            , 1e3)),
            0 === j && N && (clearInterval(e),
            C(!1),
            k(!0)),
            () => clearInterval(e)
        }
        , [j, N]);
        let I = async () => {
            try {
                m(!0);
                let t = await V({
                    otp: g
                }, i || void 0);
                if (200 === t.status_code) {
                    if (t?.data?.access_token) {
                        let e = new Date;
                        e.setDate(e.getDate() + 7),
                        document.cookie = `access_token=${t.data.access_token}; expires=${e.toUTCString()}; path=/`
                    }
                    o((0,
                    c.setSlotAvailable)(t.data?.slot_available)),
                    o((0,
                    c.setAuthData)({
                        email: t?.data?.email,
                        user_phone: t?.data?.mobile_no,
                        name: t?.data?.name,
                        photo: t?.data?.profile_image
                    })),
                    o((0,
                    c.clearPassword)()),
                    e.push("/application")
                } else
                    v({
                        message: t?.message,
                        type: "error"
                    })
            } catch (s) {
                let e = "object" == typeof s && s?.message ? s.message : "Failed. Please try again later."
                  , t = "object" == typeof s && "number" == typeof s.status ? s.status : 422;
                (401 === t || 419 === t) && (v({
                    message: e,
                    type: "error"
                }),
                setTimeout( () => {
                    o((0,
                    u.setStep)(1))
                }
                , 5e3)),
                v({
                    message: e,
                    type: "error"
                })
            } finally {
                m(!1)
            }
        }
        ;
        return (0,
        t.jsxs)(r.motion.div, {
            className: "bg-white w-full p-4",
            variants: {
                hidden: {
                    opacity: 0,
                    y: 40
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .6,
                        ease: "easeOut"
                    }
                }
            },
            initial: "hidden",
            animate: "visible",
            children: [y && (0,
            t.jsx)(p.default, {
                message: y.message,
                type: y.type,
                onClose: () => v(null)
            }), (0,
            t.jsxs)("p", {
                className: "text-[10px]",
                children: [n("lblAuthOtp1"), " (", b, ")"]
            }), (0,
            t.jsx)("p", {
                className: "text-[10px]",
                children: n("lblAuthOtp2")
            }), (0,
            t.jsxs)("p", {
                className: "text-xs mt-4",
                children: [n("lblInputAuthOtp"), " ", (0,
                t.jsxs)("span", {
                    className: "text-red-600 text-[10px]",
                    children: [" ", "*", n("lblNoCopyPaste")]
                })]
            }), (0,
            t.jsx)("input", {
                type: "text",
                id: "otp",
                autoComplete: "off",
                className: "bg-white border-gray-300 h-8 text-gray-900 font-light text-xs rounded-sm focus:ring-0 focus:border-slate-400 duration-300 border-[1.5px] focus:outline-0 block w-full p-2.5 my-2",
                placeholder: n("lblInputOtp"),
                inputMode: "numeric",
                value: g,
                maxLength: 6,
                onCopy: e => e.preventDefault(),
                onPaste: e => e.preventDefault(),
                onCut: e => e.preventDefault(),
                onChange: e => {
                    x(e.target.value.replace(/\D/g, ""))
                }
            }), (0,
            t.jsxs)("div", {
                children: [(0,
                t.jsx)(r.motion.button, {
                    type: "button",
                    disabled: d || !f,
                    whileTap: {
                        scale: .95
                    },
                    className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
              ${d || !f ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838]"}`,
                    onClick: !d && f ? I : void 0,
                    children: d ? n("checking") + "..." : n("lblProceed")
                }), (0,
                t.jsx)(r.motion.button, {
                    onClick: D,
                    disabled: !P,
                    className: `text-white mb-2 mt-2 md:ml-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition ${P ? "bg-[#28a745] hover:bg-[#218838] focus:ring-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
                    children: P ? n("resendOtp") : n("resendOtp") + ` ${j}s`
                })]
            })]
        })
    }
      , H = () => {
        let e = (0,
        a.useSelector)(e => e.authenticationStep.step);
        return (0,
        t.jsxs)(t.Fragment, {
            children: [1 === e && (0,
            t.jsx)(m, {}), 2 === e && (0,
            t.jsx)(O, {}), 3 === e && (0,
            t.jsx)(C, {}), 4 === e && (0,
            t.jsx)(z, {}), 5 === e && (0,
            t.jsx)(B, {}), 6 === e && (0,
            t.jsx)(v, {}), 7 === e && (0,
            t.jsx)(_, {}), 8 === e && (0,
            t.jsx)(U, {}), 9 === e && (0,
            t.jsx)(M, {}), 10 === e && (0,
            t.jsx)(L, {}), 100 === e && (0,
            t.jsx)(N, {})]
        })
    }
      , K = ({onClose: e}) => {
        let[a,l] = (0,
        s.useState)(!1);
        return (0,
        s.useEffect)( () => {
            let e = setTimeout( () => {
                l(!0)
            }
            , 3e3);
            return () => clearTimeout(e)
        }
        , []),
        (0,
        t.jsx)(t.Fragment, {
            children: (0,
            t.jsx)(r.motion.div, {
                initial: {
                    opacity: 0,
                    scale: .95
                },
                animate: {
                    opacity: 1,
                    scale: 1
                },
                exit: {
                    opacity: 0,
                    scale: .95
                },
                transition: {
                    duration: .3
                },
                className: "fixed inset-0 backdrop-blur-sm backdrop-brightness-75 flex justify-center items-center z-50",
                children: (0,
                t.jsx)("div", {
                    className: "fixed inset-0 backdrop-blur-sm backdrop-brightness-75 flex justify-center items-center z-50",
                    children: (0,
                    t.jsxs)("div", {
                        className: "bg-white max-h-[90vh] w-full max-w-2xl p-6 rounded-lg overflow-y-auto scrollbar-hide relative",
                        children: [a && (0,
                        t.jsx)("button", {
                            onClick: e,
                            className: "absolute top-2 right-2 text-gray-500 hover:text-red-500 hover:cursor-pointer mb-4",
                            children: "✕"
                        }), (0,
                        t.jsxs)("div", {
                            className: "space-y-4 text-sm text-gray-800",
                            children: [(0,
                            t.jsx)("div", {
                                className: "w-full text-red-500 text-center font-bold text-lg bg-white z-100",
                                children: "জরুরি বিজ্ঞপ্তি"
                            }), (0,
                            t.jsxs)("div", {
                                className: "text-gray-700 font-light text-xs",
                                children: [(0,
                                t.jsx)("p", {
                                    children: "ভিসা পেমেন্ট এর পূর্বে ভিডিও টি দেখে নিন।"
                                }), (0,
                                t.jsx)("p", {
                                    children: "Please watch the video before proceeding for visa payment."
                                })]
                            }), (0,
                            t.jsx)("div", {
                                className: "aspect-w-16  h-[400px] mb-4",
                                children: (0,
                                t.jsx)("iframe", {
                                    className: "w-full h-full rounded",
                                    src: "https://www.youtube.com/embed/ckFsAX727LM",
                                    title: "YouTube video",
                                    frameBorder: "0",
                                    allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                                    allowFullScreen: !0
                                })
                            }), (0,
                            t.jsx)("div", {
                                className: "text-black font-semibold text-sm",
                                children: "ভিসা আবেদন পত্র জমা দেয়ার স্লট নেয়ার জন্য কি করণীয় এবং কি করবেন না"
                            }), (0,
                            t.jsxs)("div", {
                                className: "text-black font-normal text-sm my-1",
                                children: [(0,
                                t.jsx)("p", {
                                    children: "১. বুকিংয়ের জন্য স্লট খোলার আগে সমস্ত নথি প্রস্তুত রাখুন।"
                                }), (0,
                                t.jsx)("p", {
                                    children: "[অনলাইন আবেদনপত্র, ব্যক্তিগত যোগাযোগ নম্বর সহ মোবাইল হ্যান্ডসেট (OTP যাচাইকরণের জন্য), আবেদনকারীর ছবির ফরমেটে হবে jpg/png(সাইজ হবে সর্বোচ্চ ২ এমবি)]এগুলো ডেস্কটপ/মোবাইলে সংরক্ষিত রাখুন যেন রেজিস্ট্রেশনের সময় সহজে আপলোড করতে পারেন ।"
                                }), (0,
                                t.jsx)("p", {
                                    children: "২. প্রথমবার নিবন্ধনের জন্য লগইন আইডি এবং পাসওয়ার্ড তৈরি করতে হবে।"
                                }), (0,
                                t.jsx)("p", {
                                    children: "৩. একটি একক বুকিং সেশনের অধীনে একটি একক লগইন আইডির মাধ্যমে সর্বাধিক ৫ জনের বুকিং করা যেতে পারে।"
                                }), (0,
                                t.jsx)("p", {
                                    children: "৪. একটি একক লগইন আইডির মাধ্যমে বুক করা স্লটগুলি একই ভিসা আবেদনকারি হতে হবে৷ একই লগইন আইডির মাধ্যমে অসংলগ্ন অ্যাপ্লিকেশন লক্ষ্য করা গেলে পেমেন্ট ইনভয়েস বাতিল করা হবে।"
                                }), (0,
                                t.jsx)("p", {
                                    children: "৫. স্লট বুকিং নিয়ে এগিয়ে যাওয়ার আগে অ্যাপ্লিকেশন তথ্য ট্যাবে পরিবারের সকল সদস্যদের তথ্য যোগ করুন ।"
                                }), (0,
                                t.jsx)("p", {
                                    children: "৬. অনুগ্রহ করে ১৫ মিনিটের মধ্যে আপনার স্লট বুকিং সম্পূর্ণ করুন,না করতে পরলে সেশনের মেয়াদ শেষ হবে এবং নতুন লগইন প্রয়োজন হবে।"
                                }), (0,
                                t.jsx)("p", {
                                    children: "৭. আবেদনপত্র IVAC-সেন্টারে জমা দেওয়ার সময় আপনার ব্যক্তিগত যোগাযোগ নম্বর সঙ্গে রাখুন।যা OTP যাচাইকরণ এবং অ্যাপয়েন্টমেন্ট বুকিংয়ের জন্য ব্যবহৃত হয়েছে।"
                                }), (0,
                                t.jsx)("p", {
                                    children: "৮. ভারতীয় ভিসার জন্য কোন অনুমোদিত এজেন্ট বা দালাল নেই।এটি একই সাথে সংযুক্তি আত্মসাৎ এবং চাঁদাবাজির ঝুঁকি বহন করে।"
                                }), (0,
                                t.jsx)("p", {
                                    children: "৯. এটি একটি গুরুত্বপূর্ণ বিষয়, যেখানে অসাধু উপাদানগুলি একাধিক পেমেন্ট চ্যানেল ব্যবহার করে কৃত্রিম ট্র্যাফিক তৈরি করছে এবং প্রকৃত আবেদনকারীদের জন্য সমস্যা সৃষ্টি করছে। এই ধরনের কার্যকলাপের বিরুদ্ধে কঠোর ব্যবস্থা গ্রহণ করা উচিত এবং যথাযথ পদক্ষেপ গ্রহণ করা দরকার, যেমন একাধিক পেমেন্টের ক্ষেত্রে ফেরত না দেওয়া। এটি কেবল অসাধু কার্যকলাপের প্রতি একটি কঠিন বার্তা পাঠাবে না, বরং প্রকৃত আবেদনকারীদের জন্য সিস্টেমটিকে আরও সুষ্ঠু এবং কার্যকরী করতে সাহায্য করবে।"
                                })]
                            }), (0,
                            t.jsx)("div", {
                                className: "w-2/3 h-0.5 bg-red-600 mx-auto"
                            }), (0,
                            t.jsx)("div", {
                                className: "text-black font-semibold text-sm",
                                children: "Do’s and Don’ts (Online Payment and Appointment)"
                            }), (0,
                            t.jsxs)("div", {
                                className: "text-black font-normal text-sm py-1",
                                children: [(0,
                                t.jsx)("p", {
                                    children: "1. Keep all documents ready, before slot opens for booking. [Online application form, mobile handset with personal contact no.(for OTP verification), applicant photograph in jpg, png format (max 2MB size) saved in Desktop/mobile for easy upload during registration.]"
                                }), (0,
                                t.jsx)("p", {
                                    children: "2. Login ID and password will have to be created for first time registration before proceeding with appointment."
                                }), (0,
                                t.jsx)("p", {
                                    children: "3. Maximum 5 persons’ booking can be done through one single login ID under a single booking session."
                                }), (0,
                                t.jsx)("p", {
                                    children: "4. The booked slots through one single Login ID should be for the same Visa application/journey. Unrelated applications through same login ID, under 1 payment invoice will be cancelled."
                                }), (0,
                                t.jsx)("p", {
                                    children: "5. Add all family members in Application Info tab before proceeding with slot booking."
                                }), (0,
                                t.jsx)("p", {
                                    children: "6. Please complete total slot booking within 15 minutes, after which session will expire and fresh login will be required."
                                }), (0,
                                t.jsx)("p", {
                                    children: "7. During Submission at IVAC on Appointment date, invariably carry your personal contact no. used for OTP validation and appointment booking."
                                }), (0,
                                t.jsxs)("p", {
                                    children: ["8. ", (0,
                                    t.jsx)("span", {
                                        className: "font-bold",
                                        children: "There are no authorized agents or brokers for Indian Visa."
                                    }), " Association with the same carries risk of embezzlement and extortion."]
                                }), (0,
                                t.jsx)("p", {
                                    children: "9. It has been reported that some unscrupulous elements are charging large sums of money for deploying several personnel at the same time to attempt payments through multiple channels creating unnecessary traffic and causing problems to genuine applicants. In such cases, multiple payments made will not be refunded as a step to discourage such malpractices."
                                })]
                            })]
                        })]
                    })
                })
            })
        })
    }
    ;
    function J({lblTabMenuAuth: e, steps: a}) {
        let[r,l] = (0,
        s.useState)(!1);
        return (0,
        s.useEffect)( () => {
            sessionStorage.getItem("noticeShown") || l(!0)
        }
        , []),
        (0,
        t.jsxs)(t.Fragment, {
            children: [r && (0,
            t.jsx)(K, {
                onClose: () => {
                    l(!1),
                    sessionStorage.setItem("noticeShown", "true")
                }
            }), (0,
            t.jsxs)("div", {
                className: "flex flex-col bg-[#b5d6a9] sm:mx-8 lg:mx-20 rounded-md shadow-lg border-[0.1px] border-slate-300 overflow-auto",
                children: [(0,
                t.jsxs)("div", {
                    className: "flex flex-row gap-4 text-xs overflow-x-scroll border-b-[0.1px] border-slate-300 scroll-smooth scrollbar-hide",
                    children: [(0,
                    t.jsx)("p", {
                        className: "font-bold bg-white rounded-tl py-4 px-4",
                        children: e
                    }), a.map(e => (0,
                    t.jsxs)("p", {
                        className: "py-2 px-4 flex items-center text-[#5c7b2f] font-bold",
                        children: [(0,
                        t.jsx)("span", {
                            className: "bg-white rounded-full px-2 py-1 mr-2 text-xs font-bold",
                            children: (0,
                            t.jsx)("i", {
                                children: e.id
                            })
                        }), e.name]
                    }, e.id))]
                }), (0,
                t.jsx)("div", {
                    className: "bg-white w-full py-1 md:px-2 lg:px-4",
                    children: (0,
                    t.jsx)(H, {})
                })]
            })]
        })
    }
    e.s(["default", () => J], 48949)
}
]);
