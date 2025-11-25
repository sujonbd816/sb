(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 23653, e => {
    "use strict";
    let t;
    var a, l, s = e.i(43476), i = e.i(46932), n = e.i(48148), r = e.i(55487);
    e.i(47167);
    var o = e.i(71645)
      , c = e.i(18566)
      , d = e.i(5427)
      , m = e.i(32252);
    let u = () => (0,
    s.jsxs)("div", {
        className: " h-screen fixed inset-0 z-50 flex flex-col items-center justify-center bg-transparent bg-opacity-40 backdrop-blur-sm",
        children: [(0,
        s.jsx)("div", {
            className: "animate-spin rounded-full h-16 w-16 border-t-4 border-blue-400 border-opacity-60"
        }), (0,
        s.jsx)("div", {
            className: "text-green-700 text-lg my-4 font-medium",
            children: "Checking..."
        })]
    });
    var p = e.i(46577)
      , x = e.i(58152)
      , f = e.i(95187)
      , h = (0,
    f.createServerReference)("401c4f96f9b9e9a798c9215be8fa0a4688deeb8830", f.callServer, void 0, f.findSourceMapURL, "getInitialApplicationData")
      , b = (0,
    f.createServerReference)("70377b6e06ac0b9b4ffe55dbae6a64786750c62482", f.callServer, void 0, f.findSourceMapURL, "submitApplication")
      , g = (0,
    f.createServerReference)("60e622041f4f6b11064a643e7d1efba26d9b1ec7e5", f.callServer, void 0, f.findSourceMapURL, "verifyWebFile")
      , y = e.i(67859)
      , v = e.i(97476);
    let _ = [{
        id: 1,
        c_name: "Dhaka",
        prefix: "D"
    }, {
        id: 2,
        c_name: "Chittagong",
        prefix: "C"
    }, {
        id: 3,
        c_name: "Rajshahi",
        prefix: "R"
    }, {
        id: 4,
        c_name: "Sylhet",
        prefix: "S"
    }, {
        id: 5,
        c_name: "Khulna",
        prefix: "K"
    }]
      , j = [{
        id: 2,
        center_info_id: 3,
        ivac_name: "IVAC , RAJSHAHI",
        prefix: "R",
        app_key: "IVACRAJSHAHI",
        visa_fee: "1500.00",
        new_fees_applied_from: "2018-08-05 00:00:00",
        notify_fees_from: "2018-07-29 04:54:32",
        max_notification_count: 2,
        allow_old_amount_until_new_date: 2
    }, {
        id: 3,
        center_info_id: 5,
        ivac_name: "IVAC, KHULNA",
        prefix: "K",
        app_key: "IVACKHULNA",
        visa_fee: "1500.00",
        new_fees_applied_from: "2018-08-05 00:00:00",
        notify_fees_from: "2018-07-29 04:54:32",
        max_notification_count: 2,
        allow_old_amount_until_new_date: 2
    }, {
        id: 4,
        center_info_id: 4,
        ivac_name: "IVAC, SYLHET",
        prefix: "S",
        app_key: "IVACSYLHET",
        visa_fee: "1500.00",
        new_fees_applied_from: "2018-08-05 00:00:00",
        notify_fees_from: "2018-07-29 04:54:32",
        max_notification_count: 2,
        allow_old_amount_until_new_date: 2
    }, {
        id: 5,
        center_info_id: 2,
        ivac_name: "IVAC, CHITTAGONG",
        prefix: "C",
        app_key: "IVACCHITTAGONG",
        visa_fee: "1500.00",
        new_fees_applied_from: "2018-08-05 00:00:00",
        notify_fees_from: "2018-07-29 04:54:32",
        max_notification_count: 2,
        allow_old_amount_until_new_date: 2
    }, {
        id: 7,
        center_info_id: 3,
        ivac_name: "IVAC, RANGPUR",
        prefix: "R",
        app_key: "IVACRANGPUR",
        visa_fee: "1500.00",
        new_fees_applied_from: "2018-08-05 00:00:00",
        notify_fees_from: "2018-07-29 04:54:32",
        max_notification_count: 2,
        allow_old_amount_until_new_date: 2
    }, {
        id: 8,
        center_info_id: 4,
        ivac_name: "IVAC, MYMENSINGH",
        prefix: "S",
        app_key: "IVACMYMENSINGH",
        visa_fee: "1500.00",
        new_fees_applied_from: "2018-08-05 00:00:00",
        notify_fees_from: "2018-07-29 04:54:32",
        max_notification_count: 2,
        allow_old_amount_until_new_date: 2
    }, {
        id: 9,
        center_info_id: 1,
        ivac_name: "IVAC, BARISAL",
        prefix: "D",
        app_key: "IVACBARISAL",
        visa_fee: "1500.00",
        new_fees_applied_from: "2018-08-05 00:00:00",
        notify_fees_from: "2018-07-29 04:54:32",
        max_notification_count: 2,
        allow_old_amount_until_new_date: 2
    }, {
        id: 12,
        center_info_id: 1,
        ivac_name: "IVAC, JESSORE",
        prefix: "D",
        app_key: "IVACJESSORE",
        visa_fee: "1500.00",
        new_fees_applied_from: "2018-08-05 00:00:00",
        notify_fees_from: "2018-07-29 04:54:32",
        max_notification_count: 2,
        allow_old_amount_until_new_date: 2
    }, {
        id: 17,
        center_info_id: 1,
        ivac_name: "IVAC, Dhaka (JFP)",
        prefix: "D",
        app_key: "IVACJFP",
        visa_fee: "1500.00",
        new_fees_applied_from: "2018-08-05 00:00:00",
        notify_fees_from: "2018-07-29 04:54:32",
        max_notification_count: 2,
        allow_old_amount_until_new_date: 2
    }, {
        id: 18,
        center_info_id: 3,
        ivac_name: "IVAC, THAKURGAON",
        prefix: "R",
        app_key: "IVACTHAKURGAON",
        visa_fee: "1500.00",
        new_fees_applied_from: "2018-08-05 00:00:00",
        notify_fees_from: "2018-07-29 04:54:32",
        max_notification_count: 2,
        allow_old_amount_until_new_date: 2
    }, {
        id: 19,
        center_info_id: 3,
        ivac_name: "IVAC, BOGURA",
        prefix: "R",
        app_key: "IVACBOGURA",
        visa_fee: "1500.00",
        new_fees_applied_from: "2018-08-05 00:00:00",
        notify_fees_from: "2018-07-29 04:54:32",
        max_notification_count: 2,
        allow_old_amount_until_new_date: 2
    }, {
        id: 20,
        center_info_id: 1,
        ivac_name: "IVAC, SATKHIRA",
        prefix: "D",
        app_key: "IVACSATKHIRA",
        visa_fee: "1500.00",
        new_fees_applied_from: "2018-08-05 00:00:00",
        notify_fees_from: "2018-07-29 04:54:32",
        max_notification_count: 2,
        allow_old_amount_until_new_date: 2
    }, {
        id: 21,
        center_info_id: 2,
        ivac_name: "IVAC, CUMILLA",
        prefix: "C",
        app_key: "IVACCUMILLA",
        visa_fee: "1500.00",
        new_fees_applied_from: "2018-08-05 00:00:00",
        notify_fees_from: "2018-07-29 04:54:32",
        max_notification_count: 2,
        allow_old_amount_until_new_date: 2
    }, {
        id: 22,
        center_info_id: 2,
        ivac_name: "IVAC, NOAKHALI",
        prefix: "C",
        app_key: "IVACNOAKHALI",
        visa_fee: "1500.00",
        new_fees_applied_from: "2018-08-05 00:00:00",
        notify_fees_from: "2018-07-29 04:54:32",
        max_notification_count: 2,
        allow_old_amount_until_new_date: 2
    }, {
        id: 23,
        center_info_id: 2,
        ivac_name: "IVAC, BRAHMANBARIA",
        prefix: "C",
        app_key: "IVACBRAHMANBARIA",
        visa_fee: "1500.00",
        new_fees_applied_from: "2018-08-05 00:00:00",
        notify_fees_from: "2018-07-29 04:54:32",
        max_notification_count: 2,
        allow_old_amount_until_new_date: 2
    }, {
        id: 24,
        center_info_id: 3,
        ivac_name: "IVAC, KUSHTIA",
        prefix: "R",
        app_key: "IVACKUSHTIA",
        visa_fee: "1500.00",
        new_fees_applied_from: "2023-04-16 13:58:24",
        notify_fees_from: "2023-04-16 13:58:24",
        max_notification_count: 2,
        allow_old_amount_until_new_date: 2
    }]
      , w = [{
        id: 3,
        type_name: "TOURIST VISA"
    }, {
        id: 13,
        type_name: "MEDICAL/MEDICAL ATTENDANT VISA"
    }, {
        id: 1,
        type_name: "BUSINESS VISA"
    }, {
        id: 6,
        type_name: "ENTRY VISA"
    }, {
        id: 19,
        type_name: "DOUBLE ENTRY VISA"
    }, {
        id: 2,
        type_name: "STUDENT VISA"
    }, {
        id: 18,
        type_name: "OTHERS VISA"
    }]
      , N = (e, t, a, l) => {
        let s = e.message || t
          , i = e.status_code || 422;
        401 === i || 419 === i ? (l({
            message: s,
            type: "error"
        }),
        setTimeout( () => {
            (0,
            x.handleLogout)(a)
        }
        , 5e3)) : l({
            message: s,
            type: "error"
        })
    }
      , S = () => {
        let e = (0,
        r.useSelector)(e => e.authUser.is_slot_available)
          , t = (0,
        r.useSelector)(e => e.authUser.visa_fee)
          , a = (0,
        r.useSelector)(e => e.ip.clientIp)
          , [l,x] = (0,
        o.useState)(!1)
          , [f,S] = (0,
        o.useState)(null)
          , [k,A] = (0,
        o.useState)(!0)
          , C = (0,
        n.useTranslations)("root")
          , I = (0,
        c.useRouter)()
          , T = (0,
        r.useDispatch)()
          , {applicationData: D} = (0,
        r.useSelector)(e => e.application)
          , R = (0,
        r.useSelector)(e => e.application.isEdit)
          , [F,P] = (0,
        o.useState)(!1)
          , [U,V] = (0,
        o.useState)(null)
          , [E,O] = (0,
        o.useState)([])
          , [L,$] = (0,
        o.useState)("")
          , [M,H] = (0,
        o.useState)("")
          , [B,W] = (0,
        o.useState)("")
          , [K,G] = (0,
        o.useState)(!1)
          , [q,J] = (0,
        o.useState)(j)
          , [Y,z] = (0,
        o.useState)([])
          , [Z,Q] = (0,
        o.useState)("")
          , [X,ee] = (0,
        o.useState)("")
          , [et,ea] = (0,
        o.useState)([])
          , [el,es] = (0,
        o.useState)("")
          , [ei,en] = (0,
        o.useState)("")
          , [er,eo] = (0,
        o.useState)("")
          , [ec,ed] = (0,
        o.useState)(!1)
          , [em,eu] = (0,
        o.useState)("");
        (0,
        o.useEffect)( () => {
            D && ($(D.highcom || ""),
            H(D.webfile_id || ""),
            W(D.webfile_id_repeat || ""),
            en(D.family_count || ""),
            eo(D.visit_purpose || ""),
            es(D.visa_type || ""),
            Q(D.ivac_name || ""),
            ee(D.ivac_id || ""))
        }
        , [D]),
        (0,
        o.useEffect)( () => {
            (async () => {
                A(!0);
                try {
                    let e = await h(a || void 0);
                    e?.status_code === 200 ? (T((0,
                    v.setSlotAvailable)(e.data?.slot_available)),
                    T((0,
                    v.setVisaFee)(e.data?.visa_fee || 1500)),
                    O(_),
                    J(j),
                    z(j),
                    ea(w)) : N(e, "Failed to load initial data", I, V)
                } catch (e) {
                    console.log("Unexpected exception:", e),
                    V({
                        message: "An unexpected error occurred. Please try again later.",
                        type: "error"
                    })
                } finally {
                    A(!1)
                }
            }
            )()
        }
        , []);
        let ep = async () => {
            try {
                ed(!0);
                let e = await g(M, a || void 0);
                console.log("verifyWebFile result:", e),
                200 === e.status_code ? G(!0) : (G(!1),
                N(e, "Failed to verify Web File ID.", I, V))
            } catch (e) {
                console.log("Unexpected exception:", e),
                V({
                    message: "An unexpected error occurred. Please try again later.",
                    type: "error"
                })
            } finally {
                ed(!1)
            }
        }
        ;
        (0,
        o.useEffect)( () => {
            12 === M.length && 12 === B.length && (M === B ? ep() : V({
                message: "Web File ID does not match",
                type: "error"
            }))
        }
        , [M, B]);
        let ex = "" !== L.trim() && "" !== M.trim() && M.length >= 12 && "" !== B.trim() && B.length >= 12 && K && "" !== Z.trim() && 0 !== t && "" !== el.trim() && "" !== ei.trim() && "" !== er.trim() && er.length >= 15 && "" !== em.trim() && l
          , ef = async () => {
            try {
                P(!0);
                let e = await b({
                    highcom: L,
                    webfile_id: M,
                    webfile_id_repeat: B,
                    ivac_id: X,
                    visa_type: el,
                    family_count: ei,
                    asweoi_erilfs: er,
                    y6e7uk_token_t6d8n3: em
                }, R, a || void 0);
                200 === e.status_code ? (T((0,
                p.setApplicationStep)(2)),
                T((0,
                y.setApplicationData)({
                    highcom: L,
                    webfile_id: M,
                    webfile_id_repeat: B,
                    ivac_id: X,
                    ivac_name: Z,
                    visa_type: el,
                    family_count: ei,
                    visit_purpose: er
                }))) : N(e, "Failed to submit application.", I, V)
            } catch (e) {
                console.log("Unexpected exception:", e),
                V({
                    message: "An unexpected error occurred. Please try again later.",
                    type: "error"
                })
            } finally {
                P(!1)
            }
        }
        ;
        return ((0,
        o.useEffect)( () => {
            let e = setTimeout( () => {
                x(!0)
            }
            , 4e4);
            return () => clearTimeout(e)
        }
        , []),
        k || ec) ? (0,
        s.jsx)(u, {}) : (0,
        s.jsxs)("div", {
            className: "grid grid-cols-1 gap-x-6 gap-y-2",
            children: [U && (0,
            s.jsx)(m.default, {
                message: U.message,
                type: U.type,
                onClose: () => V(null)
            }), e ? (0,
            s.jsxs)(s.Fragment, {
                children: [(0,
                s.jsxs)("div", {
                    className: "sm:col-span-3",
                    children: [(0,
                    s.jsx)("label", {
                        htmlFor: "high-commission",
                        className: "block text-xs font-light text-black uppercase",
                        children: C("lblSelectHighCommission")
                    }), (0,
                    s.jsx)("div", {
                        className: "mt-2",
                        children: (0,
                        s.jsxs)("select", {
                            id: "center",
                            name: "center",
                            value: L,
                            onChange: e => {
                                let t = e.target.value;
                                $(t),
                                z(q.filter(e => e?.center_info_id == t)),
                                Q("")
                            }
                            ,
                            className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 sm:text-sm/6",
                            children: [(0,
                            s.jsx)("option", {
                                value: "",
                                disabled: !0,
                                hidden: !0,
                                className: "text-gray-500 font-light",
                                children: C("lblSelectHighCommission")
                            }), E.map(e => (0,
                            s.jsx)("option", {
                                value: e.id,
                                className: "text-black font-light",
                                children: e?.c_name
                            }, e.id))]
                        })
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "sm:col-span-3",
                    children: [(0,
                    s.jsxs)("label", {
                        htmlFor: "first-name",
                        className: "block text-xs font-light text-black uppercase",
                        children: [C("lblInputWebFile"), " ", (0,
                        s.jsxs)("span", {
                            className: "text-red-600 text-[10px]",
                            children: ["(", C("lblMustFace7"), ")"]
                        })]
                    }), (0,
                    s.jsx)("div", {
                        className: "mt-2",
                        children: (0,
                        s.jsx)("input", {
                            type: "text",
                            name: "webfile_id",
                            id: "webfile_id",
                            onCopy: e => e.preventDefault(),
                            onPaste: e => e.preventDefault(),
                            onCut: e => e.preventDefault(),
                            maxLength: 12,
                            autoComplete: "off",
                            value: M,
                            onChange: e => {
                                H(e.target.value),
                                G(!1)
                            }
                            ,
                            className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                        })
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "sm:col-span-3",
                    children: [(0,
                    s.jsxs)("label", {
                        htmlFor: "first-name",
                        className: "block text-xs font-light text-black uppercase",
                        children: [C("lblInputWebFileAgain"), " ", (0,
                        s.jsxs)("span", {
                            className: "text-red-600 text-[10px]",
                            children: ["*(", C("lblNoCopyPaste"), ")"]
                        })]
                    }), (0,
                    s.jsx)("div", {
                        className: "mt-2",
                        children: (0,
                        s.jsx)("input", {
                            type: "text",
                            name: "first-name",
                            id: "first-name",
                            onCopy: e => e.preventDefault(),
                            onPaste: e => e.preventDefault(),
                            onCut: e => e.preventDefault(),
                            maxLength: 12,
                            autoComplete: "off",
                            value: B,
                            onChange: e => {
                                W(e.target.value),
                                G(!1)
                            }
                            ,
                            className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-1 sm:text-sm/6"
                        })
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "sm:col-span-3",
                    onClick: () => {
                        K || V({
                            message: "Please enter a valid Web File ID before selecting a center.",
                            type: "error"
                        })
                    }
                    ,
                    children: [(0,
                    s.jsx)("label", {
                        htmlFor: "first-name",
                        className: "block text-xs font-light text-black uppercase",
                        children: C("lblInputSelectIvac")
                    }), (0,
                    s.jsx)("div", {
                        className: "mt-2",
                        children: (0,
                        s.jsxs)("select", {
                            id: "center",
                            name: "center",
                            disabled: !K,
                            value: Z && X ? `${Z}|${X}` : "",
                            onChange: e => {
                                let[t,a] = e.target.value.split("|");
                                Q(t),
                                ee(a)
                            }
                            ,
                            className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400  sm:text-sm/6",
                            children: [(0,
                            s.jsx)("option", {
                                value: "",
                                disabled: !0,
                                hidden: !0,
                                children: C("lblInputSelectIvac")
                            }), Y.map(e => (0,
                            s.jsx)("option", {
                                value: `${e.app_key}|${e.id}`,
                                children: e.ivac_name
                            }, e.id))]
                        })
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "sm:col-span-3",
                    children: [(0,
                    s.jsxs)("label", {
                        htmlFor: "first-name",
                        className: "block text-xs font-light text-black uppercase",
                        children: [C("lblInputVisaType"), " ", (0,
                        s.jsxs)("span", {
                            className: "text-red-600 text-[10px]",
                            children: ["*(", C("lblVisaTypeQueue"), ")"]
                        })]
                    }), (0,
                    s.jsx)("div", {
                        className: "mt-2",
                        children: (0,
                        s.jsxs)("select", {
                            id: "visa_type",
                            name: "visa_type",
                            disabled: !K,
                            value: el ?? "",
                            onChange: e => {
                                es(e.target.value)
                            }
                            ,
                            className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                            children: [(0,
                            s.jsx)("option", {
                                value: "",
                                disabled: !0,
                                hidden: !0,
                                children: C("lblInputVisaTypePlaceholder")
                            }), et.map(e => (0,
                            s.jsx)("option", {
                                value: e.id,
                                children: e.type_name
                            }, e.id))]
                        })
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "sm:col-span-3",
                    children: [(0,
                    s.jsx)("label", {
                        htmlFor: "first-name",
                        className: "block text-xs font-light text-black uppercase",
                        children: C("lblInputNumberOfFamily")
                    }), (0,
                    s.jsx)("div", {
                        className: "mt-2",
                        children: (0,
                        s.jsxs)("select", {
                            id: "family_count",
                            name: "family_count",
                            disabled: !K,
                            value: ei ?? "",
                            onChange: e => {
                                en(e.target.value)
                            }
                            ,
                            className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                            children: [(0,
                            s.jsx)("option", {
                                value: "",
                                disabled: !0,
                                hidden: !0,
                                children: C("lblInputNoOfAppPlaceholder")
                            }), (0,
                            s.jsx)("option", {
                                value: "0",
                                children: "0"
                            }), (0,
                            s.jsx)("option", {
                                value: "1",
                                children: "1"
                            }), (0,
                            s.jsx)("option", {
                                value: "2",
                                children: "2"
                            }), (0,
                            s.jsx)("option", {
                                value: "3",
                                children: "3"
                            })]
                        })
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "sm:col-span-3",
                    children: [(0,
                    s.jsxs)("label", {
                        htmlFor: "first-name",
                        className: "block text-xs font-light text-black uppercase",
                        children: [C("lblInputVisitPurpose"), " ", (0,
                        s.jsxs)("span", {
                            className: "text-red-600 uppercase text-[10px]",
                            children: ["*(", C("noCopyPasteMinChar"), ")"]
                        })]
                    }), (0,
                    s.jsx)("div", {
                        className: "mt-2",
                        children: (0,
                        s.jsx)("textarea", {
                            name: "visit_purpose",
                            id: "visit_purpose",
                            onCopy: e => e.preventDefault(),
                            onPaste: e => e.preventDefault(),
                            onCut: e => e.preventDefault(),
                            autoComplete: "off",
                            disabled: !K,
                            value: er,
                            onChange: e => {
                                eo(e.target.value)
                            }
                            ,
                            className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                        })
                    })]
                }), (0,
                s.jsxs)("div", {
                    className: "sm:col-span-3",
                    children: [(0,
                    s.jsx)("label", {
                        htmlFor: "first-name",
                        className: "block text-xs font-light text-black uppercase",
                        children: C("lblInputAmount")
                    }), (0,
                    s.jsxs)("label", {
                        htmlFor: "first-name",
                        className: "block text-sm font-bold text-black uppercase",
                        children: ["BDT ", 0 !== t ? t : ""]
                    })]
                }), (0,
                s.jsx)("div", {
                    className: "sm:col-span-3",
                    children: (0,
                    s.jsx)(d.default, {
                        sitekey: "0x4AAAAAABvQ3Mi6RktCuZ7P",
                        onVerify: e => eu(e)
                    })
                }), (0,
                s.jsx)("div", {
                    className: "sm:col-span-3",
                    children: F ? (0,
                    s.jsxs)(i.motion.button, {
                        type: "button",
                        whileTap: {
                            scale: .95
                        },
                        className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition duration-300
              bg-gray-400 cursor-not-allowed
            `,
                        children: [C("checking"), "..."]
                    }) : (0,
                    s.jsx)(i.motion.button, {
                        type: "button",
                        disabled: !ex,
                        whileTap: {
                            scale: .95
                        },
                        className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition duration-300
              ${!ex ? "bg-gray-400 cursor-not-allowed" : "bg-[#28a745] hover:bg-[#218838] cursor-pointer"}
            `,
                        onClick: ex ? ef : void 0,
                        children: C("lblSaveNext")
                    })
                })]
            }) : (0,
            s.jsx)("div", {
                className: "sm:col-span-3 flex justify-center h-[50vh]",
                children: (0,
                s.jsx)("p", {
                    className: "flex items-center justify-center w-full h-screen-1/2  text-red-500 text-sm font-light rounded-md",
                    children: C("slotAvailableText") ?? "Please wait until slot is available."
                })
            })]
        })
    }
    ;
    var k = (0,
    f.createServerReference)("706597cd5e9803020d2c67c2d54323975b19fff992", f.callServer, void 0, f.findSourceMapURL, "submitPersonalInfo")
      , A = e.i(7910);
    let C = () => {
        let[e,t] = (0,
        o.useState)(!1)
          , a = (0,
        n.useTranslations)("root")
          , l = (0,
        c.useRouter)()
          , d = (0,
        r.useDispatch)()
          , {user: u} = (0,
        r.useSelector)(e => e.authUser)
          , f = (0,
        r.useSelector)(e => e.application.isEdit)
          , h = (0,
        r.useSelector)(e => e.ip.clientIp)
          , {applicationData: b} = (0,
        r.useSelector)(e => e.application)
          , {personalInfo: g} = (0,
        r.useSelector)(e => e.personalInfo)
          , [y,v] = (0,
        o.useState)(null)
          , [_,j] = (0,
        o.useState)(!1)
          , [w,N] = (0,
        o.useState)("")
          , [S,C] = (0,
        o.useState)("")
          , [I,T] = (0,
        o.useState)("")
          , [D,R] = (0,
        o.useState)("")
          , [F,P] = (0,
        o.useState)(0)
          , [U,V] = (0,
        o.useState)({});
        (0,
        o.useEffect)( () => {
            u && (N(u.name),
            C(u.email),
            T(u.user_phone)),
            g && V(g.family),
            b && (R(b.webfile_id),
            P(parseInt(b.family_count, 10) || 0))
        }
        , [u, b, g]);
        let E = (e, t, a) => {
            let l = {
                ...U,
                [e + 1]: {
                    ...U[e + 1],
                    [t]: a
                }
            };
            V(l),
            d((0,
            A.setPersonalInfo)({
                family: l
            }))
        }
          , O = async () => {
            let {valid: e, errors: t} = ( () => {
                let e = [];
                if (w.trim() || e.push("Full name is required."),
                S.trim() || e.push("Email is required."),
                I.trim() || e.push("Phone is required."),
                D.trim() || e.push("Web file number is required."),
                F > 0)
                    for (let t = 1; t <= F; t++) {
                        let a = U[t];
                        a?.name?.trim() || e.push(`Family member ${t}: Name is required.`),
                        a?.webfile_no?.trim() || e.push(`Family member ${t}: Web file number is required.`),
                        a?.again_webfile_no?.trim() || e.push(`Family member ${t}: Confirm web file number is required.`)
                    }
                return e.length > 0 ? {
                    valid: !1,
                    errors: e
                } : {
                    valid: !0
                }
            }
            )();
            if (!e && t && t.length > 0)
                return void v({
                    message: "Please fix the following error:\n" + t[0],
                    type: "error"
                });
            try {
                j(!0);
                let e = {
                    full_name: w,
                    email_name: S,
                    phone: I,
                    webfile_id: D,
                    family: U
                }
                  , t = await k(e, f, h || void 0);
                if (t?.status_code === 200)
                    d((0,
                    A.setPersonalInfo)(e)),
                    d((0,
                    p.setApplicationStep)(3)),
                    v({
                        message: "Amount change notified successfully",
                        type: "success"
                    });
                else {
                    let e, a;
                    e = t.message || "Failed to notify",
                    a = t.status_code || 422,
                    401 === a || 419 === a ? (v({
                        message: e,
                        type: "error"
                    }),
                    setTimeout( () => {
                        (0,
                        x.handleLogout)(l)
                    }
                    , 5e3)) : v({
                        message: e,
                        type: "error"
                    })
                }
            } catch (e) {
                console.log("Unexpected exception:", e),
                v({
                    message: "An unexpected error occurred. Please try again later.",
                    type: "error"
                })
            } finally {
                j(!1)
            }
        }
        ;
        return (0,
        o.useEffect)( () => {
            let e = setTimeout( () => {
                t(!0)
            }
            , 3e3);
            return () => clearTimeout(e)
        }
        , []),
        (0,
        s.jsxs)("div", {
            className: "grid gap-x-6 gap-y-2",
            children: [y && (0,
            s.jsx)(m.default, {
                message: y.message,
                type: y.type,
                onClose: () => v(null)
            }), (0,
            s.jsxs)("div", {
                className: "sm:col-span-3",
                children: [(0,
                s.jsx)("label", {
                    htmlFor: "full-name",
                    className: "block text-xs font-light text-black uppercase",
                    children: a("lblInputName")
                }), (0,
                s.jsx)("div", {
                    className: "mt-2",
                    children: (0,
                    s.jsx)("input", {
                        type: "text",
                        name: "full-name",
                        id: "full-name",
                        value: w,
                        disabled: !0,
                        autoComplete: "off",
                        placeholder: a("lblInputRegName"),
                        className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    })
                })]
            }), (0,
            s.jsxs)("div", {
                className: "sm:col-span-3",
                children: [(0,
                s.jsx)("label", {
                    htmlFor: "email",
                    className: "block text-xs font-light text-black uppercase",
                    children: a("lblInputEmail")
                }), (0,
                s.jsx)("div", {
                    className: "mt-2",
                    children: (0,
                    s.jsx)("input", {
                        type: "text",
                        name: "email",
                        id: "email",
                        onCopy: e => e.preventDefault(),
                        onPaste: e => e.preventDefault(),
                        onCut: e => e.preventDefault(),
                        value: S,
                        disabled: !0,
                        autoComplete: "off",
                        className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    })
                })]
            }), (0,
            s.jsxs)("div", {
                className: "sm:col-span-3",
                children: [(0,
                s.jsx)("label", {
                    htmlFor: "user_phone",
                    className: "block text-xs font-light text-black uppercase",
                    children: a("lblInputContactNo")
                }), (0,
                s.jsx)("div", {
                    className: "mt-2",
                    children: (0,
                    s.jsx)("input", {
                        type: "text",
                        name: "user_phone",
                        id: "user_phone",
                        onCopy: e => e.preventDefault(),
                        onPaste: e => e.preventDefault(),
                        onCut: e => e.preventDefault(),
                        value: I,
                        disabled: !0,
                        autoComplete: "off",
                        className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    })
                })]
            }), (0,
            s.jsxs)("div", {
                className: "sm:col-span-3",
                children: [(0,
                s.jsx)("label", {
                    htmlFor: "webfile_id",
                    className: "block text-xs font-light text-black uppercase",
                    children: a("ovWebID")
                }), (0,
                s.jsx)("div", {
                    className: "mt-2",
                    children: (0,
                    s.jsx)("input", {
                        type: "text",
                        name: "webfile_id",
                        id: "webfile_id",
                        value: D,
                        disabled: !0,
                        autoComplete: "off",
                        className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-1 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    })
                })]
            }), (0,
            s.jsxs)("div", {
                className: "sm:col-span-3",
                children: [[...Array(F)].map( (e, t) => (0,
                s.jsxs)("div", {
                    className: "flex flex-col w-full gap-2",
                    children: [(0,
                    s.jsxs)("div", {
                        className: "w-full",
                        children: [(0,
                        s.jsxs)("label", {
                            htmlFor: `full-name-${t}`,
                            className: "block text-xs font-light text-black uppercase my-2",
                            children: [a("lblInputFamily"), " ", t + 1]
                        }), (0,
                        s.jsxs)("label", {
                            htmlFor: `full-name-${t}`,
                            className: "block text-xs font-light text-black uppercase",
                            children: [a("lblInputFullName"), " ", (0,
                            s.jsxs)("span", {
                                className: "text-red-600 text-[10px]",
                                children: ["*(", a("lblRequired"), ")"]
                            })]
                        }), (0,
                        s.jsx)("div", {
                            className: "mt-2",
                            children: (0,
                            s.jsx)("input", {
                                type: "text",
                                name: `full-name-${t}`,
                                id: `full-name-${t}`,
                                onCopy: e => e.preventDefault(),
                                onPaste: e => e.preventDefault(),
                                onCut: e => e.preventDefault(),
                                value: U[t + 1]?.name || "",
                                onChange: e => E(t, "name", e.target.value),
                                autoComplete: "off",
                                className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                            })
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "sm:col-span-3",
                        children: [(0,
                        s.jsxs)("label", {
                            htmlFor: `web-file-number-${t}`,
                            className: "block text-xs font-light text-black uppercase",
                            children: [a("lblInputFamilyWebFile"), " ", (0,
                            s.jsxs)("span", {
                                className: "text-red-600 text-[10px]",
                                children: ["*(", a("lblMustFace7"), ")"]
                            })]
                        }), (0,
                        s.jsx)("div", {
                            className: "mt-2",
                            children: (0,
                            s.jsx)("input", {
                                type: "text",
                                name: `web-file-number-${t}`,
                                id: `web-file-number-${t}`,
                                onCopy: e => e.preventDefault(),
                                onPaste: e => e.preventDefault(),
                                onCut: e => e.preventDefault(),
                                value: U[t + 1]?.webfile_no || "",
                                onChange: e => E(t, "webfile_no", e.target.value),
                                autoComplete: "off",
                                className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                            })
                        })]
                    }), (0,
                    s.jsxs)("div", {
                        className: "sm:col-span-3",
                        children: [(0,
                        s.jsxs)("label", {
                            htmlFor: `web-file-number-repeat-${t}`,
                            className: "block text-xs font-light text-black uppercase",
                            children: [a("lblInputFamilyWebFileAgain"), " ", (0,
                            s.jsxs)("span", {
                                className: "text-red-600 text-[10px]",
                                children: ["*(", a("lblNoCopyPaste"), ")"]
                            })]
                        }), (0,
                        s.jsx)("div", {
                            className: "mt-2",
                            children: (0,
                            s.jsx)("input", {
                                type: "text",
                                name: `web-file-number-repeat-${t}`,
                                id: `web-file-number-repeat-${t}`,
                                onCopy: e => e.preventDefault(),
                                onPaste: e => e.preventDefault(),
                                onCut: e => e.preventDefault(),
                                value: U[t + 1]?.again_webfile_no || "",
                                onChange: e => E(t, "again_webfile_no", e.target.value),
                                autoComplete: "off",
                                className: "block w-full rounded-md bg-white px-3 py-1.5 text-base text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6"
                            })
                        })]
                    })]
                }, t)), (0,
                s.jsx)("div", {
                    className: "sm:col-span-3",
                    children: _ ? (0,
                    s.jsxs)(i.motion.button, {
                        type: "button",
                        whileTap: {
                            scale: .95
                        },
                        className: "text-white mb-2 duration-300 cursor-not-allowed mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-gray-500 ",
                        children: [a("checking"), "..."]
                    }) : (0,
                    s.jsx)(i.motion.button, {
                        type: "button",
                        whileTap: {
                            scale: .95
                        },
                        className: `text-white mb-2 duration-300 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition bg-[#28a745] hover:bg-[#218838] ${e ? "cursor-pointer" : "cursor-not-allowed opacity-50"}`,
                        onClick: e ? O : void 0,
                        disabled: !e,
                        children: a("lblSaveNext")
                    })
                })]
            })]
        })
    }
    ;
    var I = e.i(63762)
      , T = (0,
    f.createServerReference)("609be894c11698a9fdc88b9c6f9fa821916c7fb66d", f.callServer, void 0, f.findSourceMapURL, "submitOverview")
      , D = e.i(61745);
    let R = () => {
        let e = (0,
        n.useTranslations)("root")
          , t = (0,
        c.useRouter)()
          , a = (0,
        r.useDispatch)()
          , l = (0,
        D.useLocale)()
          , {applicationData: d} = (0,
        r.useSelector)(e => e.application)
          , {personalInfo: u} = (0,
        r.useSelector)(e => e.personalInfo)
          , f = (0,
        r.useSelector)(e => e.authUser)
          , h = (0,
        r.useSelector)(e => e.ip.clientIp)
          , [b,g] = (0,
        o.useState)(!1)
          , [v,_] = (0,
        o.useState)(0)
          , [N,S] = (0,
        o.useState)(-1)
          , [k,A] = (0,
        o.useState)(null)
          , [C,R] = (0,
        o.useState)(null)
          , [F,P] = (0,
        o.useState)(null)
          , [U,V] = (0,
        o.useState)(null)
          , [E,O] = (0,
        o.useState)(null)
          , [L,$] = (0,
        o.useState)(null)
          , [M,H] = (0,
        o.useState)({})
          , [B,W] = (0,
        o.useState)(!1)
          , [K,G] = (0,
        o.useState)(null)
          , [q,J] = (0,
        o.useState)(null)
          , [Y,z] = (0,
        o.useState)(!1)
          , Z = async () => {
            if (Y)
                try {
                    W(!0);
                    let e = await T(l, h || void 0);
                    if (e?.status_code === 200)
                        localStorage.removeItem("applicant"),
                        localStorage.removeItem("personal_info"),
                        a((0,
                        p.setApplicationStep)(4)),
                        A({
                            message: e.data?.message || "Overview submitted successfully.",
                            type: "success"
                        });
                    else {
                        let a, l;
                        a = e.message || "Failed to submit overview.",
                        l = e.status_code || 422,
                        401 === l || 419 === l ? (A({
                            message: a,
                            type: "error"
                        }),
                        setTimeout( () => {
                            (0,
                            x.handleLogout)(t)
                        }
                        , 5e3)) : A({
                            message: a,
                            type: "error"
                        })
                    }
                } catch (e) {
                    console.log("Unexpected exception:", e),
                    A({
                        message: "An unexpected error occurred. Please try again later.",
                        type: "error"
                    })
                } finally {
                    W(!1)
                }
        }
        ;
        (0,
        o.useEffect)( () => {}
        , []),
        (0,
        o.useEffect)( () => {
            if (f?.user && (R(f.user.name || ""),
            P(f.user.email || ""),
            O(f.user.user_phone || "")),
            u && H(u.family),
            d) {
                if (V(f.visa_fee || 1500),
                $(d.webfile_id || null),
                void 0 !== d.ivac_id) {
                    let e = j.find(e => e.id == Number(d.ivac_id));
                    e && G(e.ivac_name)
                }
                if (void 0 !== d.visa_type) {
                    let e = w.find(e => e.id === Number(d.visa_type));
                    e && J(e.type_name)
                }
            }
        }
        , [d, f, u]),
        (0,
        o.useEffect)( () => {
            d?.family_count && _(parseInt(d.family_count, 10))
        }
        , [d]),
        (0,
        o.useEffect)( () => {
            let e = setTimeout( () => {
                g(!0)
            }
            , 3e3);
            return () => clearTimeout(e)
        }
        , []);
        let Q = e => {
            S(t => t === e ? null : e)
        }
          , X = {
            hidden: {
                opacity: 0,
                y: 10,
                scale: .95
            },
            visible: {
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                    duration: .3
                }
            }
        }
          , ee = ["ovWebID", "ovIvacCenter", "ovVisaType", "ovFees", "ovName", "ovEmail", "ovContact"];
        return (0,
        s.jsxs)(i.motion.div, {
            className: "flex flex-col",
            variants: {
                hidden: {
                    opacity: 0,
                    y: 40
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .6
                    }
                }
            },
            initial: "hidden",
            animate: "visible",
            children: [k && (0,
            s.jsx)(m.default, {
                message: k.message,
                type: k.type,
                onClose: () => A(null)
            }), (0,
            s.jsxs)("div", {
                className: "flex flex-row gap-2 items-center p-2 bg-green-50 border-[0.2px] border-green-100 rounded cursor-pointer",
                onClick: () => Q(-1),
                children: [(0,
                s.jsxs)("p", {
                    className: "text-xs md:text-sm font-light text-white rounded-md bg-black text-center p-2 min-w-[110px]",
                    children: [e("application_text"), " #1"]
                }), (0,
                s.jsxs)("p", {
                    className: "text-green-700 text-xs hover:cursor-pointer font-bold cursor-pointer hover:underline",
                    children: [L ?? "", " (", e("btnExpandOrClose"), ")"]
                })]
            }), (0,
            s.jsx)(i.motion.div, {
                initial: !1,
                animate: {
                    height: -1 === N ? "auto" : 0,
                    opacity: +(-1 === N)
                },
                transition: {
                    duration: .3
                },
                className: `overflow-hidden mt-2 rounded-md border-[0.2px] border-slate-300 ${-1 === N ? "py-4 mb-4" : ""}`,
                children: -1 === N && (0,
                s.jsxs)(i.motion.div, {
                    className: "flex flex-wrap md:px-4 relative text-center justify-center",
                    children: [ee.map( (t, a) => (0,
                    s.jsxs)(i.motion.div, {
                        variants: X,
                        initial: "hidden",
                        animate: "visible",
                        className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center w-[180px] md:w-1/3",
                        children: [(0,
                        s.jsx)("p", {
                            className: "text-red-600 font-light text-[8px] md:text-[10px] break-words text-center w-full",
                            children: e(t)
                        }), (0,
                        s.jsx)("p", {
                            className: "text-[12px] font-semibold break-words text-center w-full",
                            children: "ovWebID" === t ? L || "N/A" : "ovIvacCenter" === t ? K || "N/A" : "ovVisaType" === t ? q || "N/A" : "ovEmail" === t ? F || "N/A" : "ovName" === t ? C || "N/A" : "ovContact" === t ? E || "N/A" : "ovFees" === t ? "BDT " + U : "NA"
                        })]
                    }, a)), (0,
                    s.jsx)("div", {
                        className: "col-span-3 z-20 -mt-20 relative right-0 w-full flex justify-end items-end",
                        children: (0,
                        s.jsxs)("div", {
                            className: "flex items-center gap-1 hover:text-green-800 duration-300 font-bold text-xs cursor-pointer w-fit pr-4 md:pr-0",
                            onClick: () => {
                                a((0,
                                p.setApplicationStep)(1)),
                                a((0,
                                y.setIsEdit)(!0))
                            }
                            ,
                            children: [e("edit_text"), " ", (0,
                            s.jsx)(I.EditIcon, {})]
                        })
                    })]
                })
            }), [...Array(v)].map( (t, l) => (0,
            s.jsxs)(i.motion.div, {
                initial: "hidden",
                animate: "visible",
                children: [(0,
                s.jsxs)("div", {
                    className: "flex flex-row gap-2 items-center p-2 bg-green-50 border-[0.2px] border-green-100 rounded cursor-pointer",
                    onClick: () => Q(l),
                    children: [(0,
                    s.jsxs)("p", {
                        className: "text-xs md:text-sm font-light text-white rounded-md bg-black text-center p-2 min-w-[110px]",
                        children: [e("application_text"), " #", l + 2]
                    }), (0,
                    s.jsxs)("p", {
                        className: "text-green-700 text-xs hover:cursor-pointer font-bold cursor-pointer hover:underline",
                        children: [Object.values(M)[l]?.webfile_no, " (", e("btnExpandOrClose"), ")"]
                    })]
                }), (0,
                s.jsx)(i.motion.div, {
                    initial: !1,
                    animate: {
                        height: N === l ? "auto" : 0,
                        opacity: +(N === l)
                    },
                    transition: {
                        duration: .3
                    },
                    className: `overflow-hidden mt-2 rounded-md border-[0.2px] border-slate-300 ${N === l ? "py-4 mb-4" : ""}`,
                    children: N === l && (0,
                    s.jsxs)(i.motion.div, {
                        className: "flex flex-wrap md:px-4 relative text-center justify-center",
                        children: [ee.map( (t, a) => (0,
                        s.jsxs)(i.motion.div, {
                            variants: X,
                            initial: "hidden",
                            animate: "visible",
                            className: "flex flex-col flex-wrap items-center justify-center m-2 bg-gray-200 min-h-12 text-sm font-light shadow-md rounded-md px-2 py-1 text-center w-[180px] md:w-1/3",
                            children: [(0,
                            s.jsx)("p", {
                                className: "text-red-600 font-light text-[8px] md:text-[10px] break-words text-center w-full",
                                children: e(t)
                            }), (0,
                            s.jsx)("p", {
                                className: "text-[12px] font-semibold break-words text-center w-full",
                                children: "ovWebID" === t ? Object.values(M)[l]?.webfile_no || "N/A" : "ovIvacCenter" === t ? K || "N/A" : "ovVisaType" === t ? q || "N/A" : "ovEmail" === t ? F || "N/A" : "ovName" === t ? Object.values(M)[l]?.name || "N/A" : "ovContact" === t ? E || "N/A" : "ovFees" === t ? "BDT " + U : "NA"
                            })]
                        }, a)), (0,
                        s.jsx)("div", {
                            className: "col-span-3 z-20 -mt-20 relative right-0 w-full flex justify-end items-end",
                            children: (0,
                            s.jsxs)("div", {
                                className: "flex items-center gap-1 hover:text-green-900 duration-300 font-bold text-xs cursor-pointer w-fit pr-4 md:pr-0",
                                onClick: () => {
                                    a((0,
                                    p.setApplicationStep)(2)),
                                    a((0,
                                    y.setIsEdit)(!0))
                                }
                                ,
                                children: [e("edit_text"), " ", (0,
                                s.jsx)(I.EditIcon, {})]
                            })
                        })]
                    })
                })]
            }, l)), (0,
            s.jsxs)("div", {
                className: "space-y-2 max-w-md px-2 mt-4",
                children: [(0,
                s.jsxs)("div", {
                    className: "flex items-center space-x-2",
                    children: [(0,
                    s.jsx)("input", {
                        type: "checkbox",
                        id: "terms",
                        checked: Y,
                        onChange: e => z(e.target.checked)
                    }), (0,
                    s.jsxs)("label", {
                        htmlFor: "terms",
                        className: "text-sm font-light leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70",
                        children: [e("tcAgree"), " ", (0,
                        s.jsx)("a", {
                            href: "https://api-payment.ivacbd.com/contents/tos.html",
                            target: "_blank",
                            className: "text-blue-600 hover:underline",
                            children: e("tcText")
                        })]
                    })]
                }), (0,
                s.jsx)("button", {
                    onClick: Y && b ? Z : void 0,
                    disabled: !Y || !b || B,
                    className: `text-white mb-2 mt-2 h-8 rounded-lg text-xs w-full sm:w-auto px-2 py-2 text-center transition 
                      ${Y && b && !B ? "bg-[#28a745] hover:bg-[#218838] cursor-pointer" : "bg-gray-400 cursor-not-allowed"}
                    `,
                    children: e("conMovePay")
                })]
            })]
        })
    }
    ;
    e.i(12507).default,
    e.i(74313).default,
    e.i(62778).default,
    e.i(56061).default,
    e.i(68727).default;
    let F = {
        src: e.i(10053).default,
        width: 44,
        height: 9,
        blurWidth: 0,
        blurHeight: 0
    };
    e.i(59027).default,
    e.i(25861).default,
    e.i(38875).default,
    e.i(39982).default,
    e.i(93559).default,
    e.i(88773).default,
    e.i(67879).default,
    e.i(69131).default,
    e.i(30801).default,
    e.i(8573).default,
    e.i(6262).default,
    e.i(1662).default;
    let P = e => {
        let t = e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, a) => a ? a.toUpperCase() : t.toLowerCase());
        return t.charAt(0).toUpperCase() + t.slice(1)
    }
      , U = (...e) => e.filter( (e, t, a) => !!e && "" !== e.trim() && a.indexOf(e) === t).join(" ").trim();
    var V = {
        xmlns: "http://www.w3.org/2000/svg",
        width: 24,
        height: 24,
        viewBox: "0 0 24 24",
        fill: "none",
        stroke: "currentColor",
        strokeWidth: 2,
        strokeLinecap: "round",
        strokeLinejoin: "round"
    };
    let E = (0,
    o.forwardRef)( ({color: e="currentColor", size: t=24, strokeWidth: a=2, absoluteStrokeWidth: l, className: s="", children: i, iconNode: n, ...r}, c) => (0,
    o.createElement)("svg", {
        ref: c,
        ...V,
        width: t,
        height: t,
        stroke: e,
        strokeWidth: l ? 24 * Number(a) / Number(t) : a,
        className: U("lucide", s),
        ...!i && !(e => {
            for (let t in e)
                if (t.startsWith("aria-") || "role" === t || "title" === t)
                    return !0
        }
        )(r) && {
            "aria-hidden": "true"
        },
        ...r
    }, [...n.map( ([e,t]) => (0,
    o.createElement)(e, t)), ...Array.isArray(i) ? i : [i]]))
      , O = (a = "refresh-cw",
    l = [["path", {
        d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",
        key: "v9h5vc"
    }], ["path", {
        d: "M21 3v5h-5",
        key: "1q7to0"
    }], ["path", {
        d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",
        key: "3uifl3"
    }], ["path", {
        d: "M8 16H3v5",
        key: "1cv678"
    }]],
    (t = (0,
    o.forwardRef)( ({className: e, ...t}, s) => (0,
    o.createElement)(E, {
        ref: s,
        iconNode: l,
        className: U(`lucide-${P(a).replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase()}`, `lucide-${a}`, e),
        ...t
    }))).displayName = P(a),
    t);
    var L = (0,
    f.createServerReference)("40eca920744adac77a354fc0c9d8ea6319825135be", f.callServer, void 0, f.findSourceMapURL, "fetchPaymentData")
      , $ = (0,
    f.createServerReference)("60f17fb803892fb0b32edd6a8970820aaeccaea2a1", f.callServer, void 0, f.findSourceMapURL, "sendOtpRequest")
      , M = (0,
    f.createServerReference)("607dd046ce4104a30dbcdae5ed02bdae7160e39745", f.callServer, void 0, f.findSourceMapURL, "verifyOtp")
      , H = (0,
    f.createServerReference)("60fd1e878d947ecff768e3fa5d1049d5bf42b6f548", f.callServer, void 0, f.findSourceMapURL, "handleAppointmentDateChange")
      , B = (0,
    f.createServerReference)("70648dcd61dd835363065814f031d26034cc029dfa", f.callServer, void 0, f.findSourceMapURL, "verifyCaptchaData")
      , W = (0,
    f.createServerReference)("60e3bf50cd36841322301d5ae4f1f1df55d0e26cd2", f.callServer, void 0, f.findSourceMapURL, "submitPayment");
    let K = (e, t, a, l) => {
        let s = e.message || t
          , i = e.status_code || 422;
        401 === i || 419 === i ? (l({
            message: s,
            type: "error"
        }),
        setTimeout( () => {
            (0,
            x.handleLogout)(a)
        }
        , 5e3)) : l({
            message: s,
            type: "error"
        })
    }
      , G = () => {
        let e = (0,
        c.useRouter)()
          , t = (0,
        n.useTranslations)("root")
          , a = (0,
        r.useSelector)(e => e.ip.clientIp)
          , [l,d] = (0,
        o.useState)(null)
          , [p,x] = (0,
        o.useState)(!1)
          , [f,h] = (0,
        o.useState)(null)
          , [b,g] = (0,
        o.useState)(0)
          , [y,v] = (0,
        o.useState)(0)
          , [_,j] = (0,
        o.useState)(0)
          , [w,N] = (0,
        o.useState)("")
          , [S,k] = (0,
        o.useState)(!1)
          , [A,C] = (0,
        o.useState)("")
          , [I,T] = (0,
        o.useState)(!1)
          , [D,R] = (0,
        o.useState)([])
          , [P,U] = (0,
        o.useState)("")
          , [V,E] = (0,
        o.useState)(!1)
          , [G,q] = (0,
        o.useState)([])
          , [J,Y] = (0,
        o.useState)("")
          , [z,Z] = (0,
        o.useState)("")
          , [Q,X] = (0,
        o.useState)("")
          , [ee,et] = (0,
        o.useState)("")
          , [ea,el] = (0,
        o.useState)(!1)
          , [es,ei] = (0,
        o.useState)(!1)
          , [en,er] = (0,
        o.useState)("")
          , [eo,ec] = (0,
        o.useState)("")
          , [ed,em] = (0,
        o.useState)(!1)
          , [eu,ep] = (0,
        o.useState)(!1)
          , [ex,ef] = (0,
        o.useState)(!1)
          , [eh,eb] = (0,
        o.useState)(!1)
          , [eg,ey] = (0,
        o.useState)(0)
          , ev = async () => {
            try {
                ef(!0);
                let t = await B(void 0, void 0, a || void 0);
                t?.status_code === 200 ? (Z(t.data.captcha_image),
                X(t.data.captcha_id),
                et(""),
                el(!1),
                er("")) : K(t, "Failed to get captcha. Please try again later.", e, d)
            } catch (e) {
                console.log("Unexpected exception:", e),
                d({
                    message: "An unexpected error occurred. Please try again later.",
                    type: "error"
                })
            } finally {
                ef(!1)
            }
        }
          , e_ = async () => {
            try {
                ef(!0),
                ei(!0);
                let e = await B(Q, ee, a || void 0);
                e?.status_code === 200 ? (el(!0),
                er("")) : er(e.message || "Failed to verify captcha. Please try again.")
            } catch (e) {
                console.log("Unexpected exception:", e),
                d({
                    message: "An unexpected error occurred. Please try again later.",
                    type: "error"
                })
            } finally {
                ef(!1),
                ei(!1)
            }
        }
        ;
        (0,
        o.useEffect)( () => {
            (async () => {
                try {
                    let t = await L(a || void 0);
                    console.log("Payment Data Result:", t),
                    t?.status_code === 200 ? (v(t.data?.convenience_fees),
                    g(t.data?.fees),
                    j(t.data?.payable_amount),
                    N(t.data?.mobile_no),
                    h(t.data?.payment_options?.data)) : K(t, "Failed to get payment data. Please try again later.", e, d)
                } catch (e) {
                    console.log("Unexpected exception:", e),
                    d({
                        message: "An unexpected error occurred. Please try again later.",
                        type: "error"
                    })
                }
            }
            )()
        }
        , [e]);
        let ej = async t => {
            try {
                em(!0);
                let l = await $(t, a || void 0);
                if (l?.status_code === 200) {
                    k(!0),
                    ey(30);
                    let e = setInterval( () => {
                        ey(t => t <= 1 ? (clearInterval(e),
                        0) : t - 1)
                    }
                    , 1e3)
                } else
                    K(l, "Failed to send OTP. Please try again later.", e, d)
            } catch (e) {
                console.log("Unexpected exception:", e),
                d({
                    message: "An unexpected error occurred. Please try again later.",
                    type: "error"
                })
            } finally {
                em(!1)
            }
        }
          , ew = async () => {
            try {
                if (A.length < 6)
                    return void d({
                        message: "Please enter 6 digit otp",
                        type: "error"
                    });
                ep(!0);
                let t = await M(A, a || void 0);
                t?.status_code === 200 ? (T(!0),
                R(t.data?.slot_dates)) : K(t, "Failed to verify OTP. Please try again later.", e, d)
            } catch (e) {
                console.log("Unexpected exception:", e),
                d({
                    message: "An unexpected error occurred. Please try again later.",
                    type: "error"
                })
            } finally {
                ep(!1)
            }
        }
          , eN = async t => {
            let l = t.target.value;
            U(l);
            try {
                ef(!0);
                let t = await H(l, a || void 0);
                t?.status_code === 200 ? (q(t.data?.slot_times ?? []),
                E(!0),
                Z(t.data?.captcha?.captcha_image),
                X(t.data?.captcha?.captcha_id),
                et(""),
                el(!1),
                er("")) : K(t, "Failed to fetch appointment times. Please try again later.", e, d)
            } catch (e) {
                console.log("Unexpected exception:", e),
                d({
                    message: "An unexpected error occurred. Please try again later.",
                    type: "error"
                })
            } finally {
                ef(!1)
            }
        }
          , [eS,ek] = (0,
        o.useState)(null)
          , eA = "" !== P.trim() && P.length >= 6 && "" !== J.trim() && J.length >= 6 && null !== eS && "" !== eS.item.name.trim() && "" !== eS.item.slug.trim() && "" !== eS.item.link.trim() && "" !== ee.trim() && ee.length >= 6 && ea
          , eC = async () => {
            if (!eS)
                return void d({
                    message: "Please select a payment option.",
                    type: "error"
                });
            try {
                eb(!0);
                let t = new FormData;
                t.append("appointment_date", P),
                t.append("appointment_time", J),
                t.append("k5t0g8_token_y4v9f6", Q),
                t.append("selected_payment[name]", eS.item.name),
                t.append("selected_payment[slug]", eS.item.slug),
                t.append("selected_payment[link]", eS.item.link);
                let l = await W(t, a || void 0);
                l?.status_code === 200 ? (document.cookie.split(";").forEach(e => {
                    document.cookie = e.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/")
                }
                ),
                localStorage.clear(),
                window.location.href = l.data.url) : K(l, "Failed to process payment. Please try again later.", e, d)
            } catch (e) {
                console.log("Unexpected exception:", e),
                d({
                    message: "An unexpected error occurred. Please try again later.",
                    type: "error"
                })
            } finally {
                eb(!1)
            }
        }
        ;
        return ((0,
        o.useEffect)( () => {
            let e = setTimeout( () => {
                x(!0)
            }
            , 6e3);
            return () => clearTimeout(e)
        }
        , []),
        ex) ? (0,
        s.jsx)(u, {}) : (0,
        s.jsxs)(i.motion.div, {
            className: "flex flex-col",
            variants: {
                hidden: {
                    opacity: 0,
                    y: 40
                },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: .6
                    }
                }
            },
            initial: "hidden",
            animate: "visible",
            children: [l && (0,
            s.jsx)(m.default, {
                message: l.message,
                type: l.type,
                onClose: () => d(null)
            }), (0,
            s.jsx)("div", {
                className: "max-h-screen bg-gray-50 md:p-4",
                children: (0,
                s.jsxs)("div", {
                    className: "max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8",
                    children: [(0,
                    s.jsx)("div", {
                        className: "bg-white rounded-lg p-5 md:p-6 shadow-sm",
                        children: (0,
                        s.jsxs)("div", {
                            className: "space-y-6 h-full flex flex-col justify-around",
                            children: [(0,
                            s.jsxs)("div", {
                                className: "flex space-x-2 flex-col",
                                children: [(0,
                                s.jsxs)("h3", {
                                    className: "text-sm  text-gray-700 mb-3 font-bold",
                                    children: [t("payCard"), " "]
                                }), (0,
                                s.jsx)("div", {
                                    className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                    children: f?.cards && Object.keys(f.cards).length > 0 && Object.entries(f.cards).map( ([e,t]) => (0,
                                    s.jsx)("div", {
                                        className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300 ${eS?.type === "cards" && eS.key === e ? "ring-2 ring-[#0074D4]" : ""}`,
                                        onClick: () => ek({
                                            type: "cards",
                                            key: e,
                                            item: t
                                        }),
                                        children: (0,
                                        s.jsx)("img", {
                                            src: t.link,
                                            alt: t.name,
                                            className: "w-10 h-10 object-contain"
                                        })
                                    }, e))
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                className: "flex space-x-2 flex-col",
                                children: [(0,
                                s.jsxs)("h3", {
                                    className: "text-sm font-bold text-gray-700 mb-3",
                                    children: [t("payInt"), " "]
                                }), (0,
                                s.jsx)("div", {
                                    className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                    children: f?.internet && Object.keys(f.internet).length > 0 && Object.entries(f.internet).map( ([e,t]) => (0,
                                    s.jsx)("div", {
                                        className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300  ${eS?.type === "internet" && eS.key === e ? "ring-2 ring-[#0074D4]" : ""}`,
                                        onClick: () => ek({
                                            type: "internet",
                                            key: e,
                                            item: t
                                        }),
                                        children: (0,
                                        s.jsx)("img", {
                                            src: t.link,
                                            alt: t.name,
                                            className: "w-full h-full object-contain"
                                        })
                                    }, e))
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                className: "flex space-x-2 flex-col",
                                children: [(0,
                                s.jsxs)("h3", {
                                    className: "text-sm font-bold text-gray-700 mb-3",
                                    children: [t("payMob"), " "]
                                }), (0,
                                s.jsx)("div", {
                                    className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                    children: f?.mobile && Object.keys(f.mobile).length > 0 && Object.entries(f.mobile).map( ([e,t]) => (0,
                                    s.jsx)("div", {
                                        className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300 ${eS?.type === "mobile" && eS.key === e ? "ring-2 ring-[#0074D4]" : ""}`,
                                        onClick: () => ek({
                                            type: "mobile",
                                            key: e,
                                            item: t
                                        }),
                                        children: (0,
                                        s.jsx)("img", {
                                            src: t.link,
                                            alt: t.name,
                                            className: "w-full h-full object-contain"
                                        })
                                    }, e))
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                className: "flex space-x-2 flex-col",
                                children: [(0,
                                s.jsx)("h3", {
                                    className: "text-sm font-bold text-gray-700 mb-3",
                                    children: t("payOth")
                                }), (0,
                                s.jsx)("div", {
                                    className: "boxes flex flex-row justify-start gap-4 flex-wrap",
                                    children: f?.others && Object.keys(f.others).length > 0 && Object.entries(f.others).map( ([e,t]) => (0,
                                    s.jsx)("div", {
                                        className: `w-18 h-16 flex items-center justify-center rounded-lg border-[1px] border-slate-300 shadow hover:cursor-pointer hover:border-[#0074D4] duration-300 ${eS?.type === "others" && eS.key === e ? "ring-2 ring-[#0074D4]" : ""}`,
                                        onClick: () => ek({
                                            type: "others",
                                            key: e,
                                            item: t
                                        }),
                                        children: (0,
                                        s.jsx)("img", {
                                            src: t.link,
                                            alt: t.name,
                                            className: "w-full h-full object-contain"
                                        })
                                    }, e))
                                })]
                            })]
                        })
                    }), (0,
                    s.jsxs)("div", {
                        className: "bg-white rounded-lg p-6 shadow-sm",
                        children: [(0,
                        s.jsx)("div", {
                            className: "flex justify-end mb-4",
                            children: (0,
                            s.jsx)("div", {
                                className: " px-4 py-2 rounded-lg text-sm font-medium",
                                children: (0,
                                s.jsx)("img", {
                                    src: F.src,
                                    className: "w-36",
                                    alt: ""
                                })
                            })
                        }), (0,
                        s.jsx)("div", {
                            className: "bg-blue-50 border border-gray-200 rounded-lg px-4 py-2 mb-4",
                            children: eS ? (0,
                            s.jsxs)("div", {
                                className: "flex justify-between items-center ",
                                children: [(0,
                                s.jsx)("p", {
                                    className: "font-bold",
                                    children: eS?.item?.name
                                }), (0,
                                s.jsx)("img", {
                                    src: eS?.item?.link,
                                    alt: eS?.item?.name,
                                    className: "w-10 h-10 object-contain"
                                })]
                            }) : (0,
                            s.jsxs)("p", {
                                className: "text-gray-600 text-sm text-center",
                                children: [" ", t("paySelectOption"), " "]
                            })
                        }), (0,
                        s.jsxs)("div", {
                            className: "space-y-3 mb-4",
                            children: [(0,
                            s.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [(0,
                                s.jsxs)("span", {
                                    className: "text-sm font-medium text-gray-700",
                                    children: [" ", t("ovFees"), " :"]
                                }), (0,
                                s.jsxs)("span", {
                                    className: "text-sm text-gray-900",
                                    children: [b, " BDT"]
                                })]
                            }), 0 != y && (0,
                            s.jsxs)("div", {
                                className: "flex justify-between items-center",
                                children: [(0,
                                s.jsxs)("span", {
                                    className: "text-sm text-gray-600",
                                    children: [" ", t("payConvFee"), " :"]
                                }), (0,
                                s.jsxs)("span", {
                                    className: "text-sm text-gray-900",
                                    children: [y, " BDT"]
                                })]
                            }), (0,
                            s.jsxs)("div", {
                                className: "flex justify-between items-center pt-2 border-t",
                                children: [(0,
                                s.jsxs)("span", {
                                    className: "text-sm font-medium text-gray-700",
                                    children: [t("payPayable"), ":"]
                                }), (0,
                                s.jsxs)("span", {
                                    className: "text-sm font-medium text-gray-900",
                                    children: [_, " BDT"]
                                })]
                            })]
                        }), (0,
                        s.jsxs)("div", {
                            className: "mb-2",
                            children: [(0,
                            s.jsxs)("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: [t("payPhone"), ":"]
                            }), (0,
                            s.jsxs)("div", {
                                className: "flex items-center gap-3 rounded-md flex-wrap",
                                children: [(0,
                                s.jsx)("input", {
                                    type: "tel",
                                    value: w,
                                    disabled: !0,
                                    className: "flex-1 px-3 py-2 text-sm rounded-md border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none",
                                    placeholder: t("payPhone"),
                                    autoComplete: "off"
                                }), !I && (0,
                                s.jsx)("button", {
                                    onClick: ed || eg > 0 ? void 0 : S ? () => ej(1) : () => ej(0),
                                    disabled: ed || eg > 0,
                                    className: `bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors duration-200 ${ed || eg > 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700 hover:cursor-pointer"}`,
                                    children: ed ? `${t("checking")}...` : eg > 0 ? `${eg}s` : t(S ? "resendOtp" : "lblInputSentOtp")
                                })]
                            })]
                        }), I && (0,
                        s.jsx)("div", {
                            className: "mb-2",
                            children: (0,
                            s.jsxs)("p", {
                                className: "text-[10px] font-light text-green-500",
                                children: [t("payPhone"), " ", t("verified"), " "]
                            })
                        }), S && !I && (0,
                        s.jsxs)("div", {
                            className: "mb-2",
                            children: [(0,
                            s.jsx)("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: t("verifyOtp")
                            }), (0,
                            s.jsxs)("div", {
                                className: "flex items-center gap-3 rounded-md md:flex-nowrap flex-wrap",
                                children: [(0,
                                s.jsx)("input", {
                                    type: "tel",
                                    value: A,
                                    onChange: e => C(e.target.value),
                                    className: "flex-1 px-3 py-2 text-sm rounded-md border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none",
                                    placeholder: t("lblInputOtp"),
                                    autoComplete: "off"
                                }), (0,
                                s.jsx)("button", {
                                    onClick: A.length >= 6 && !eu && p ? ew : void 0,
                                    disabled: A.length < 6 || eu || !p,
                                    className: `bg-green-600 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors duration-300 ${A.length < 6 || eu || !p ? "opacity-50 cursor-not-allowed" : "hover:bg-green-700 hover:cursor-pointer"}`,
                                    children: eu ? t("checking") + "..." : t("verify")
                                })]
                            })]
                        }), I && (0,
                        s.jsxs)("div", {
                            className: "my-4",
                            children: [(0,
                            s.jsx)("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: t("lblInputAppointDate")
                            }), (0,
                            s.jsxs)("select", {
                                id: "appointment_date",
                                name: "appointment_date",
                                value: P ?? "",
                                onChange: eN,
                                className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                                children: [(0,
                                s.jsx)("option", {
                                    value: "",
                                    disabled: !0,
                                    hidden: !0,
                                    children: t("lblInputAppointment")
                                }), D && Object.keys(D).length > 0 && Object.entries(D).map( ([e,t]) => (0,
                                s.jsx)("option", {
                                    value: t,
                                    children: t
                                }, e))]
                            })]
                        }), V && (0,
                        s.jsxs)("div", {
                            className: "mb-6 mt-2",
                            children: [(0,
                            s.jsx)("label", {
                                className: "block text-sm font-medium text-gray-700 mb-2",
                                children: t("lblInputAppointTime")
                            }), (0,
                            s.jsxs)("select", {
                                id: "appointment_date",
                                name: "appointment_date",
                                value: J ?? "",
                                onChange: e => Y(e.target.value),
                                className: "block w-full rounded-md px-3 py-1.5 text-base font-light text-black outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 sm:text-sm/6",
                                children: [(0,
                                s.jsx)("option", {
                                    value: "",
                                    disabled: !0,
                                    hidden: !0,
                                    children: t("selectAppointmentTime")
                                }), Array.isArray(G) && G.length > 0 && G.map(e => (0,
                                s.jsx)("option", {
                                    value: e.time_display,
                                    children: e.time_display
                                }, e.id))]
                            })]
                        }), "" !== J && (0,
                        s.jsx)(s.Fragment, {
                            children: (0,
                            s.jsxs)("div", {
                                className: "flex flex-col justify-between items-center gap-4 mb-6 mt-2",
                                children: [(0,
                                s.jsxs)("div", {
                                    className: "flex",
                                    children: [(0,
                                    s.jsx)("img", {
                                        src: z,
                                        alt: "Captcha",
                                        className: "w-full h-10 object-contain"
                                    }), (0,
                                    s.jsx)("div", {
                                        className: "ml-2 mt-1 hover:cursor-pointer hover:bg-blue-200 hover:rounded-md p-1",
                                        onClick: () => ev(),
                                        children: !ea && (0,
                                        s.jsx)(O, {
                                            size: 20
                                        })
                                    })]
                                }), (0,
                                s.jsxs)("div", {
                                    className: "w-full flex items-center gap-2",
                                    children: [(0,
                                    s.jsx)("input", {
                                        type: "text",
                                        value: ee,
                                        maxLength: 6,
                                        disabled: ea,
                                        autoComplete: "off",
                                        onChange: e => et(e.target.value),
                                        className: "w-full h-10 px-3 py-2 text-sm rounded-md border border-gray-300 bg-gray-100 text-gray-700 focus:outline-none",
                                        placeholder: t("enterCaptcha")
                                    }), (0,
                                    s.jsx)("button", {
                                        type: "button",
                                        onClick: es || ea ? void 0 : e_,
                                        disabled: 6 !== ee.length || es || ea,
                                        className: `h-10 px-4 text-sm font-medium rounded-md text-white transition-colors duration-300 ${6 === ee.length && !ea && !es ? "bg-green-600 hover:bg-green-700 hover:cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
                                        children: es ? t("checking") + "..." : t(ea ? "verified" : "verify")
                                    })]
                                }), (0,
                                s.jsx)("div", {
                                    className: "w-full flex items-center gap-2",
                                    children: "" !== en && (0,
                                    s.jsx)("p", {
                                        className: "text-xs text-red-500 mt-0",
                                        children: en
                                    })
                                })]
                            })
                        }), (0,
                        s.jsx)("button", {
                            className: `w-full py-3 mb-2 rounded-lg duration-300 text-white
    ${eA && !eh ? "bg-green-600 hover:bg-green-700 cursor-pointer" : "bg-gray-400 cursor-not-allowed"}`,
                            disabled: !eA || eh,
                            onClick: eA && !eh ? eC : void 0,
                            children: eh ? t("processing") + "..." : t("payNow")
                        }), (0,
                        s.jsx)("p", {
                            className: "text-xs text-red-500 text-center",
                            children: t("msgTrans5min")
                        })]
                    })]
                })
            })]
        })
    }
    ;
    e.s(["default", 0, () => {
        let e = (0,
        n.useTranslations)("root")
          , t = (0,
        r.useSelector)(e => e.applicationStep.step)
          , a = [{
            id: 1,
            name: e("lblTabMenu1")
        }, {
            id: 2,
            name: e("lblTabMenu2")
        }, {
            id: 3,
            name: e("lblTabMenu3")
        }, {
            id: 4,
            name: e("lblTabMenu4")
        }]
          , l = {
            hidden: {
                opacity: 0,
                x: 20
            },
            visible: e => ({
                opacity: 1,
                x: 0,
                transition: {
                    delay: .3 * e
                }
            })
        };
        return (0,
        s.jsx)(s.Fragment, {
            children: (0,
            s.jsxs)(i.motion.div, {
                className: "flex flex-col bg-[#b5d6a9] sm:mx-8 lg:mx-20 border-[0.1px] border-slate-300 rounded-md shadow-lg pb-4",
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
                children: [(0,
                s.jsx)("div", {
                    className: "flex flex-row gap-4  text-xs overflow-x-scroll scrollbar-hide border-b-[0.1px] border-slate-300",
                    children: a.map( (e, a) => (0,
                    s.jsxs)(i.motion.p, {
                        custom: a,
                        variants: l,
                        initial: "hidden",
                        animate: "visible",
                        className: `py-2 px-4 flex items-center font-bold rounded-t min-w-[160px] ${t === e.id ? "bg-white text-black" : "text-[#5c7a2f]"}`,
                        children: [(0,
                        s.jsx)("span", {
                            className: `rounded-full px-2 py-1 mr-2 font-light text-xs italic ${t === e.id ? "bg-green-600 text-white" : "bg-white text-gray-500"}`,
                            children: e.id
                        }), e.name]
                    }, e.id))
                }), (0,
                s.jsxs)("div", {
                    className: "bg-white w-full p-4 overflow-y-scroll",
                    children: [1 === t && (0,
                    s.jsx)(S, {}), 2 === t && (0,
                    s.jsx)(C, {}), 3 === t && (0,
                    s.jsx)(R, {}), 4 === t && (0,
                    s.jsx)(G, {})]
                })]
            })
        })
    }
    ], 23653)
}
]);
