(window.webpackJsonp = window.webpackJsonp || []).push([[222, 388, 389], {
    KxPH: function(t, e, o) {
        "use strict";
        o.d(e, "a", (function() {
            return n
        }
        ));
        var n = {
            methods: {
                getChatBot: function() {
                    window.intercomSettings = {
                        app_id: "jden6pu9"
                    },
                    function() {
                        var t = window
                          , e = t.Intercom;
                        if ("function" == typeof e)
                            e("reattach_activator"),
                            e("update", t.intercomSettings);
                        else {
                            var o = document
                              , n = function t() {
                                t.c(arguments)
                            };
                            n.q = [],
                            n.c = function(t) {
                                n.q.push(t)
                            }
                            ,
                            t.Intercom = n;
                            var i = function() {
                                var t = o.createElement("script");
                                t.type = "text/javascript",
                                t.async = !0,
                                t.src = "https://widget.intercom.io/widget/gmkj9c09";
                                var e = o.getElementsByTagName("script")[0];
                                e.parentNode.insertBefore(t, e)
                            };
                            t.attachEvent ? t.attachEvent("onload", i) : t.addEventListener("load", i, !1)
                        }
                    }()
                }
            }
        }
    },
    MRPA: function(t, e, o) {
        "use strict";
        o.d(e, "a", (function() {
            return i
        }
        ));
        var n = o("8hIN")
          , i = {
            data: function() {
                return {
                    storeState: n.a.state
                }
            },
            methods: {
                clickout: function() {
                    var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "Conversion"
                      , e = arguments.length > 1 ? arguments[1] : void 0
                      , o = arguments.length > 2 ? arguments[2] : void 0
                      , n = arguments.length > 3 ? arguments[3] : void 0
                      , i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "Clickout";
                    this.$gtm.trackEvent({
                        event: i,
                        category: t,
                        action: "click",
                        label: e,
                        value: o + 1,
                        clickLocation: n,
                        partner: e
                    }),
                    this.storeState.host.facebook_pixel_page_view && fbq("track", "Lead")
                },
                quizClick: function(t, e, o, n) {
                    var i = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : "Quiz Event";
                    this.$gtm.trackEvent({
                        event: i,
                        quizName: t,
                        step: e,
                        question: o,
                        answer: n
                    })
                },
                clickedLang: function(t) {
                    this.$gtm.trackEvent({
                        event: "Language Selector",
                        question: "I want to learn",
                        answer: t
                    })
                }
            }
        }
    },
    bb6X: function(t, e, o) {
        "use strict";
        o.d(e, "a", (function() {
            return r
        }
        ));
        var n = o("8hIN")
          , i = o("5pez")
          , r = {
            data: function() {
                return {
                    popupCounter: 0,
                    mouseX: 0,
                    mouseY: 0,
                    storeState: n.a.state
                }
            },
            props: {
                host: {
                    type: Object
                }
            },
            computed: {
                showAltExitOverlay: function() {
                    return !(!this.$route.query.eov2 || !this.showExitOverlay)
                },
                showExitOverlay: function() {
                    if (!this.storeState.showQuestionnaire && !this.$route.path.startsWith("/article"))
                        return "1" === this.$route.query.exit || !(!this.host.exit_overlay.use_overlay || !this.storeState.rankingTableIsLoaded)
                },
                showExitOverlayInArticle: function() {
                    if (!this.storeState.showQuestionnaire)
                        return "1" === this.$route.query.exit || !(!this.article.use_exit_overlay || !this.storeState.rankingTableIsLoaded)
                },
                popupOpen: function() {
                    return this.storeState.popupOpen
                }
            },
            methods: {
                mousePosition: function(t) {
                    this.mouseX = t.clientX,
                    this.mouseY = t.clientY
                },
                checkPopup: function() {
                    var t = this.storeState.template === i.h
                      , e = this.mouseY < 100 && this.popupCounter < 3 && !this.storeState.showQuestionnaire;
                    (this.host.exit_overlay && e || t && this.storeState.category.use_exit_overlay && e) && (this.storeState.popupOpen = !0,
                    this.popupCounter++)
                }
            }
        }
    },
    vwbS: function(t, e, o) {
        "use strict";
        o.r(e);
        var n = o("8hIN")
          , i = o("KxPH")
          , r = o("bb6X")
          , s = o("MRPA")
          , a = {
            name: "DatingV3_2",
            components: {
                RankingTable: function() {
                    return o.e(50).then(o.bind(null, "JQvy"))
                },
                FooterMenu: function() {
                    return o.e(416).then(o.bind(null, "N3kf"))
                },
                Navigation: function() {
                    return o.e(359).then(o.bind(null, "a3Yc"))
                },
                NotificationConsent: function() {
                    return o.e(2).then(o.bind(null, "4Gb+"))
                },
                QuestionnaireDefault: function() {
                    return o.e(30).then(o.bind(null, "Ki+T"))
                },
                QuestionnaireImageGrid: function() {
                    return Promise.all([o.e(55), o.e(54)]).then(o.bind(null, "TGgV"))
                },
                QuestionnaireImageGridTwo: function() {
                    return Promise.all([o.e(31), o.e(62)]).then(o.bind(null, "7j6K"))
                },
                QuestionnaireNew: function() {
                    return Promise.all([o.e(32), o.e(61)]).then(o.bind(null, "gnMU"))
                },
                QuestionnaireSimple: function() {
                    return Promise.all([o.e(33), o.e(63)]).then(o.bind(null, "22Wl"))
                },
                PopupOverlay: function() {
                    return o.e(59).then(o.bind(null, "M1Bg"))
                },
                PopupFooter: function() {
                    return o.e(58).then(o.bind(null, "3JNC"))
                },
                ReviewSidebar: function() {
                    return o.e(213).then(o.bind(null, "+Qbz"))
                },
                Chatbot: function() {
                    return o.e(51).then(o.bind(null, "3hIw"))
                },
                DatingExitOverlayThree: function() {
                    return o.e(53).then(o.bind(null, "q4w4"))
                }
            },
            mixins: [i.a, s.a, r.a],
            props: {
                template: {
                    type: String
                },
                menuItems: {
                    type: Array
                },
                host: {
                    type: Object
                },
                pushAyaHost: {
                    type: Object
                }
            },
            computed: {
                category: function() {
                    return !(this.$router.resolve({
                        name: this.$route.params.category
                    }).resolved.matched.length > 0) || "/" === this.$router.currentRoute.path
                },
                showPopupFooter: function() {
                    return "1" === this.$route.query.ban || !!this.storeState.host.use_bottom_banner
                },
                showNotificationConsent: function() {
                    return !(!this.pushAyaHost.has_notifications || this.storeState.showQuestionnaire)
                },
                isQuestionnaireReady: function() {
                    return !(!this.storeState.showQuestionnaire || !this.storeState.category.id)
                }
            },
            methods: {
                closeQuestionnaire: function(t) {
                    this.quizClick("QuestionnaireImageGrid", t.step, t.question, t.answer, t.action),
                    this.storeState.showQuestionnaire = !1
                }
            },
            mounted: function() {
                this.host.use_chatbot && this.getChatBot(),
                n.a.setQuery(this.$route.query),
                n.a.updateDatingColors()
            }
        }
          , u = o("KHd+")
          , c = Object(u.a)(a, (function() {
            var t = this
              , e = t.$createElement
              , o = t._self._c || e;
            return o("div", {
                on: {
                    mousemove: t.mousePosition,
                    mouseleave: t.checkPopup
                }
            }, [o("navigation", {
                attrs: {
                    "menu-items": t.menuItems
                }
            }), t._v(" "), o("main", [t.category ? t.category ? o("transition", {
                attrs: {
                    name: "fade"
                }
            }, [o("keep-alive", [o("ranking-table", {
                attrs: {
                    showQuestionnaireOnPage: t.storeState.showQuestionnaireType.showQuestionnaireOnPage,
                    host: t.host,
                    "category-id": t.host.default_category,
                    "host-id": t.host.id,
                    type: t.host.quiz_template
                }
            })], 1)], 1) : t._e() : o("transition", {
                attrs: {
                    name: "fade"
                }
            }, [o("keep-alive", {
                attrs: {
                    exclude: Array.from(["Article", "Review"])
                }
            }, [o("router-view", {
                attrs: {
                    host: t.host
                }
            })], 1)], 1)], 1), t._v(" "), o("footer-menu", {
                attrs: {
                    host: t.host,
                    showPopupFooter: t.showPopupFooter
                }
            }), t._v(" "), this.storeState.isSidebarOpen ? o("review-sidebar", {
                attrs: {
                    partner: this.storeState.sidebarPartner
                }
            }) : t._e(), t._v(" "), t.showPopupFooter ? o("popup-footer", {
                attrs: {
                    host: t.host
                }
            }) : t._e(), t._v(" "), t.showExitOverlay ? o("popup-overlay", {
                attrs: {
                    host: t.host,
                    "popup-open": t.popupOpen
                },
                on: {
                    "update:popupOpen": function(e) {
                        t.popupOpen = e
                    },
                    "update:popup-open": function(e) {
                        t.popupOpen = e
                    }
                }
            }) : t._e(), t._v(" "), t.showAltExitOverlay ? o("dating-exit-overlay-three", {
                attrs: {
                    host: t.host,
                    "popup-open": t.popupOpen
                },
                on: {
                    "update:popupOpen": function(e) {
                        t.popupOpen = e
                    },
                    "update:popup-open": function(e) {
                        t.popupOpen = e
                    }
                }
            }) : t._e(), t._v(" "), t.showNotificationConsent ? o("notification-consent", {
                attrs: {
                    "button-label": t.pushAyaHost.consent_accept,
                    "close-button-label": t.pushAyaHost.consent_deny,
                    message: t.pushAyaHost.consent_message,
                    "host-id": t.pushAyaHost.id,
                    "website-id": "web.com.meetsingle.top5.prod",
                    "pushaya-endpoint": "https://www.pushaya.com"
                }
            }) : t._e(), t._v(" "), t.isQuestionnaireReady ? o("section", [t.storeState.showQuestionnaireType.showQuestionnaireDefault ? o("questionnaire-default", {
                attrs: {
                    "category-id": t.storeState.category.id,
                    "host-id": t.host.id,
                    trafficSource: t.storeState.trafficSource,
                    type: t.host.quiz_template
                },
                on: {
                    close: function(e) {
                        return t.closeQuestionnaire()
                    }
                }
            }) : t._e(), t._v(" "), t.storeState.showQuestionnaireType.showQuestionnaireImageGrid ? o("questionnaire-image-grid", {
                attrs: {
                    "category-id": t.storeState.category.id,
                    "host-id": t.host.id,
                    trafficSource: t.storeState.trafficSource,
                    type: t.host.quiz_template
                },
                on: {
                    close: function(e) {
                        return t.closeQuestionnaire(e)
                    }
                }
            }) : t._e(), t._v(" "), t.storeState.showQuestionnaireType.showQuestionnaireImageGridTwo ? o("questionnaire-image-grid-two", {
                attrs: {
                    "category-id": t.storeState.category.id,
                    "host-id": t.host.id,
                    trafficSource: t.storeState.trafficSource,
                    type: t.host.quiz_template
                },
                on: {
                    close: function(e) {
                        return t.closeQuestionnaire()
                    }
                }
            }) : t._e(), t._v(" "), t.storeState.showQuestionnaireType.showQuestionnaireNew ? o("questionnaire-new", {
                attrs: {
                    "category-id": t.storeState.category.id,
                    "host-id": t.host.id,
                    trafficSource: t.storeState.trafficSource,
                    type: t.host.quiz_template
                }
            }) : t._e(), t._v(" "), t.storeState.showQuestionnaireType.showQuestionnaireSimple ? o("questionnaire-simple", {
                attrs: {
                    "category-id": t.storeState.category.id,
                    "host-id": t.host.id,
                    trafficSource: t.storeState.trafficSource,
                    type: t.host.quiz_template
                }
            }) : t._e(), t._v(" "), t.storeState.showQuestionnaireType.showChatbot ? o("chatbot", {
                attrs: {
                    "category-id": t.storeState.category.id,
                    "host-id": t.host.id
                }
            }) : t._e()], 1) : t._e()], 1)
        }
        ), [], !1, null, null, null);
        e.default = c.exports
    }
}]);
