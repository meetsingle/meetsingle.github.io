(window.webpackJsonp = window.webpackJsonp || []).push([[50, 61, 62, 63], {
    "+y+f": function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return d
        }
        ));
        var n = r("o0o1")
          , a = r.n(n)
          , o = r("yXPU")
          , i = r.n(o)
          , s = r("8hIN")
          , c = r("HBSB")
          , u = r("Kkvx")
          , l = r("MRPA")
          , d = {
            data: function() {
                return {
                    category: [],
                    partners: [],
                    storeState: s.a.state,
                    loaded: !1,
                    psh: []
                }
            },
            mixins: [u.a, l.a],
            mounted: function() {
                this.getCategory()
            },
            computed: {
                campaingImageUrl: function() {
                    return "".concat("https://d3y7aym8q3oqh.cloudfront.net", "/").concat(this.category.campaign_image)
                }
            },
            watch: {
                psh: function(t, e) {
                    this.loaded && e.psh && e.psh !== t.psh && (this.sendPartnerSetHash(this.psh),
                    s.a.setPsh(this.psh))
                }
            },
            updated: function() {
                this.indexCtaBtn()
            },
            methods: {
                isMobile: function() {
                    return screen.width <= 760
                },
                indexCtaBtn: function() {
                    var t = document.getElementsByClassName("inline-cms-button");
                    Array.from(t).forEach((function(t, e) {
                        t.setAttribute("data-index", e)
                    }
                    ))
                },
                eventTracking: function() {
                    event.target.className.includes("inline-cms-button") && this.clickoutEvent(Number(event.target.dataset.index))
                },
                clickoutEvent: function(t) {
                    this.clickout(this.storeState.category.name, this.partners[0].clicked_partner_name, t, "summary")
                },
                getCategory: function() {
                    var t = this
                      , e = "".concat("https://www.api-domain-meetsingle.github.io/v2")
                      , r = "".concat("https://www.api-domain-meetsingle.github.io/v2", "_1");
                    Vue.axios.defaults.baseURL = r;
                    var n = c.c
                      , a = this.$route.params.category;
                    null !== this.storeState.trafficSource ? n = this.storeState.trafficSource : (n = document.querySelector("#main-ts").getAttribute("data-ts"),
                    s.a.setTrafficSource(n)),
                    c.e === n && (n = c.a),
                    c.f === n && (n = c.b),
                    a = a || "default";
                    var o = !!this.$route.query.arnk
                      , i = !1
                      , u = "1"
                      , l = ""
                      , d = "";
                    this.$route.query.fp && s.a.setFixedPosition(!0),
                    !1 !== this.storeState.isFixedPosition && (i = this.storeState.isFixedPosition),
                    null !== this.storeState.user.userTimezone && (u = this.storeState.user.userTimezone),
                    this.$route.query.brnkv && (l = this.$route.query.brnkv),
                    this.storeState.clickinId && (d = this.storeState.clickinId);
                    var h = this.storeState.userId
                      , p = "/host/".concat(this.storeState.host.id, "/category/").concat(n, "/").concat(a, "?arnk=").concat(o, "&t=").concat(h, "&fp=").concat(i, "&uT=").concat(u, "&brnkv=").concat(l, "&clId=").concat(d);
                    p = p + "&device_type=" + this.storeState.deviceType,
                    "1" === this.$route.query.brnk && (p = p + "&brnk=" + this.$route.query.brnk),
                    localStorage.app_ad_block && (p += "&adb=1"),
                    axios.get(p).then((function(e) {
                        t.partners = e.data.partners.sort((function(t, e) {
                            return e.score - t.score
                        }
                        )),
                        t.partners = Object.freeze(t.partners),
                        t.category = Object.freeze(e.data.category),
                        t.psh = e.data.partnerSet,
                        t.loaded = !0,
                        document.title = t.category.title ? t.category.title : t.storeState.host.name,
                        document.querySelector('meta[name="description"]').setAttribute("content", t.category.description),
                        s.a.updateRankingList(e.data.partners),
                        s.a.setCategoryDetails(e.data.category),
                        s.a.setPsh(e.data.partnerSet),
                        s.a.setPageViewId(e.data.page_view_id)
                    }
                    )),
                    Vue.axios.defaults.baseURL = e,
                    this.$ga.page("/".concat(a))
                },
                sendPartnerSetHash: function(t) {
                    var e = this;
                    return i()(a.a.mark((function r() {
                        var n;
                        return a.a.wrap((function(r) {
                            for (; ; )
                                switch (r.prev = r.next) {
                                case 0:
                                    n = {
                                        t: e.storeState.userId,
                                        ca: t.category,
                                        rs: t.ranking_source,
                                        d: t.device_version,
                                        psh: t.psh,
                                        c: t.count
                                    },
                                    axios.post("".concat(document.location.origin, "/psh"), n);
                                case 2:
                                case "end":
                                    return r.stop()
                                }
                        }
                        ), r)
                    }
                    )))()
                }
            }
        }
    },
    JQvy: function(t, e, r) {
        "use strict";
        r.r(e);
        var n = r("vPCv")
          , a = r("+y+f")
          , o = r("HBSB")
          , i = r("8hIN")
          , s = {
            name: "RankingTable",
            components: {
                ArticleCard: function() {
                    return r.e(1).then(r.bind(null, "nydp"))
                },
                DatingCarousel: function() {
                    return r.e(25).then(r.bind(null, "Ode3"))
                },
                PartnerPodium: function() {
                    return r.e(233).then(r.bind(null, "7e3M"))
                },
                PartnerRow: function() {
                    return r.e(212).then(r.bind(null, "b6XK"))
                },
                QuestionnaireOnPage: function() {
                    return r.e(17).then(r.bind(null, "k5D3"))
                },
                PartnerQuotes: function() {
                    return r.e(24).then(r.bind(null, "BXSm"))
                },
                UserLocation: function() {
                    return r.e(23).then(r.bind(null, "wSfu"))
                },
                VideoPopup: function() {
                    return r.e(26).then(r.bind(null, "EGcO"))
                }
            },
            mixins: [n.a, a.a, i.a],
            props: {
                showQuestionnaire: {
                    type: Boolean
                },
                showQuestionnaireOnPage: {
                    type: Boolean
                },
                type: {
                    type: String
                },
                categoryId: {
                    type: Number
                },
                hostId: {
                    type: Number
                }
            },
            data: function() {
                return {
                    storeState: i.a.state,
                    isOpen: !1
                }
            },
            mounted: function() {
                this.getTopArticles()
            },
            updated: function() {
                this.$gtm.trackEvent({
                    event: "optimize.activate"
                }),
                this.$nextTick((function() {
                    i.a.setInlineCMSButtonColor()
                }
                ))
            },
            methods: {
                colorCheck: function(t) {
                    return t || "#fdf3f4"
                },
                toggleDisclosure: function() {
                    this.isOpen = !this.isOpen
                }
            },
            computed: {
                checkDisclosure: function() {
                    return 1 === this.storeState.host.disclosure
                },
                displayDisclosure: function() {
                    return this.isOpen ? "display-popup" : null
                },
                checkBanner: function() {
                    return this.category.header_banner
                },
                showPodium: function() {
                    return "1" === this.$route.query.pod || !!this.storeState.host.use_podium
                },
                showVideoPopup: function() {
                    return !(!this.category.use_video && "1" !== this.$route.query.vid)
                },
                sidebarMargin: function() {
                    return this.showPodium ? "190px" : "0"
                },
                getTestimonialPartners: function() {
                    if (("1" === this.$route.query.qts || this.category.use_testimonial) && (!this.category.testimonial_traffic_sources || o.d === this.storeState.trafficSource || this.category.testimonial_traffic_sources.indexOf(this.storeState.trafficSource) > -1))
                        return "desktopSmall" === this.$mq || "desktop" === this.$mq ? this.partners.slice(0, 2) : this.partners.slice(0, 1)
                },
                expandFirstPartnerRow: function() {
                    return ("desktopSmall" === this.$mq || "desktop" === this.$mq) && ("1" === this.storeState.query.fbo || Boolean(this.storeState.host.first_partner_open))
                },
                userLocation: function() {
                    return ("1" === this.$route.query.loc || Boolean(this.storeState.host.location)) && Boolean(this.storeState.user.userCity)
                },
                showDatingCarousel: function() {
                    return Boolean(this.storeState.host.use_carousel) && this.partners.length >= 15
                },
                carouselPartners: function() {
                    return this.partners.slice(12)
                },
                displayedPartners: function() {
                    return this.showDatingCarousel ? this.partners.slice(0, 12) : this.partners
                }
            },
            watch: {
                $route: function(t, e) {
                    ["articles", "review", "article", "faq", "privacy", "aboutus", "comparison"].includes(t.name) || this.getCategory()
                }
            }
        }
          , c = r("KHd+")
          , u = Object(c.a)(s, (function() {
            var t = this
              , e = t.$createElement
              , r = t._self._c || e;
            return r("div", {
                staticClass: "main-wrapper",
                style: {
                    backgroundColor: t.colorCheck(t.storeState.datingColors.background)
                }
            }, [t.checkBanner ? r("div", {
                staticClass: "page-header"
            }, [r("img", {
                directives: [{
                    name: "lazy",
                    rawName: "v-lazy",
                    value: t.imageUrl + t.category.header_banner,
                    expression: "imageUrl + category['header_banner']"
                }],
                staticClass: "hero-img",
                attrs: {
                    alt: "header_banner"
                }
            }), t._v(" "), r("div", {
                staticClass: "wrapper"
            }, [r("div", {
                staticClass: "header-container"
            }, [r("h1", {
                staticClass: "header",
                domProps: {
                    innerHTML: t._s(t.category.title)
                }
            }), t._v(" "), r("p", {
                staticClass: "subheader",
                domProps: {
                    innerHTML: t._s(t.category.description)
                }
            })])])]) : r("div", {
                staticClass: "standard-container",
                staticStyle: {
                    "margin-top": "0px"
                }
            }, [r("div", {
                staticClass: "container-text"
            }, [r("h1", {
                staticClass: "title --large"
            }, [t._v(t._s(t.category.title))]), t._v(" "), r("p", {
                staticClass: "bodytext --mobile_hidden",
                domProps: {
                    innerHTML: t._s(t.category.description)
                }
            }, [t._v("\n                " + t._s(t.category.description) + "\n            ")])])]), t._v(" "), r("div", {
                staticClass: "standard-container"
            }, [r("div", {
                staticClass: "container-text"
            }, [t.userLocation ? r("user-location", {
                attrs: {
                    primaryColor: t.storeState.datingColors.primary,
                    "user-city": t.storeState.user.userCity
                }
            }) : t._e(), t._v(" "), t.loaded ? r("p", {
                staticClass: "title --mobile_hidden"
            }, [t._v("\n                " + t._s(t.$t("Our Top Sites")) + "\n            ")]) : t._e()], 1)]), t._v(" "), r("div", {
                staticClass: "split-container"
            }, [r("div", {
                staticClass: "main-container"
            }, [r("div", {
                staticClass: "standard-container"
            }, [t.showPodium ? r("partner-podium") : t._e(), t._v(" "), t.storeState.rankingList && t.showVideoPopup ? r("div", {
                staticClass: "vp-open-btn",
                on: {
                    click: t.toggleVideoPopup
                }
            }, [r("div", {
                staticClass: "clip-preview-wrapper"
            }, [r("svg", {
                staticClass: "svg-inline--fa fa-play fa-w-14 fa-2x",
                attrs: {
                    "aria-hidden": "true",
                    focusable: "false",
                    "data-prefix": "far",
                    "data-icon": "play",
                    role: "img",
                    xmlns: "http://www.w3.org/2000/svg",
                    viewBox: "0 0 448 512"
                }
            }, [r("path", {
                attrs: {
                    fill: "currentColor",
                    d: "M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6zM48 453.5v-395c0-4.6 5.1-7.5 9.1-5.2l334.2 197.5c3.9 2.3 3.9 8 0 10.3L57.1 458.7c-4 2.3-9.1-.6-9.1-5.2z"
                }
            })]), t._v(" "), r("video", {
                staticClass: "clip-preview-img",
                attrs: {
                    src: t.category.video_url + "#t=0.1",
                    type: "video/mp4"
                }
            })]), t._v(" "), r("span", {
                staticClass: "text"
            }, [t._v(t._s(t.$t("Watch Clip")) + " " + t._s(" " + t.getPartnerById(t.category.video_partner).partner_name))])]) : t._e(), t._v(" "), t.checkDisclosure ? r("span", {
                staticClass: "disclosure",
                on: {
                    click: t.toggleDisclosure
                }
            }, [t._v("\n                    " + t._s(t.$t(t.storeState.host.disclosure_main_text)) + "\n                    "), r("span", {
                class: [t.displayDisclosure, "disclosure-popup"]
            }, [t._v("\n                      " + t._s(t.$t(t.storeState.host.disclosure_detailed_text)) + "\n                    ")])]) : t._e(), t._v(" "), r("div", {
                staticClass: "ranking-table"
            }, t._l(t.displayedPartners, (function(e, n) {
                return r("partner-row", {
                    key: e.partner_id,
                    attrs: {
                        partner: e,
                        isFirstPartner: 0 === n,
                        index: n,
                        category: t.category.name,
                        expandFirstPartnerRow: t.expandFirstPartnerRow
                    }
                })
            }
            )), 1)], 1)]), t._v(" "), r("keep-alive", [r("div", {
                staticClass: "second-container",
                style: {
                    marginTop: t.sidebarMargin
                }
            }, [r("div", {
                staticClass: "card-container --sidebar"
            }, [t.showVideoPopup ? r("video-popup", {
                attrs: {
                    category: t.category
                }
            }) : t._e(), t._v(" "), t._l(t.getTestimonialPartners, (function(t, e) {
                return r("partner-quotes", {
                    key: t.partner_id,
                    attrs: {
                        partner: t,
                        index: e
                    }
                })
            }
            )), t._v(" "), t.topArticles.length > 0 ? r("div", {
                staticClass: "standard-container"
            }, [r("div", {
                staticClass: "container-text"
            }, [r("p", {
                staticClass: "title"
            }, [t._v(t._s(t.$t("Latest Articles")))])])]) : t._e(), t._v(" "), r("div", {
                staticClass: "article-wrap"
            }, t._l(t.topArticles, (function(t) {
                return r("article-card", {
                    key: t.id,
                    attrs: {
                        article: t
                    }
                })
            }
            )), 1)], 2), t._v(" "), t.topArticles.length > 0 ? r("div", {
                staticClass: "standard-container"
            }, [r("div", {
                staticClass: "container-text"
            }, [r("div", {
                staticClass: "link"
            }, [r("router-link", {
                attrs: {
                    to: {
                        name: "articles"
                    }
                }
            }, [t._v(t._s(t.$t("Read more articles")) + " >>")])], 1)])]) : t._e()])]), t._v(" "), t.showDatingCarousel ? r("dating-carousel", {
                attrs: {
                    partners: t.carouselPartners
                }
            }) : t._e()], 1), t._v(" "), t.category.rules ? r("div", {
                staticClass: "content-column"
            }, [r("div", {
                staticClass: "textbox"
            }, [r("div", {
                staticClass: "title"
            }, [r("p", [t._v(t._s(t.category.rules_title))]), t._v(" "), r("div", {
                staticClass: "line"
            })]), t._v(" "), r("div", {
                staticClass: "wrapper rules-container"
            }, [t.showQuestionnaire && t.showQuestionnaireOnPage ? r("questionnaire-on-page", {
                attrs: {
                    categoryId: t.categoryId,
                    hostId: t.hostId,
                    "traffic-source": t.storeState.trafficSource,
                    type: t.type
                }
            }) : t._e(), t._v(" "), r("div", {
                staticClass: "content",
                domProps: {
                    innerHTML: t._s(t.category.rules)
                },
                on: {
                    click: function(e) {
                        return t.eventTracking()
                    }
                }
            })], 1)])]) : t._e()])
        }
        ), [], !1, null, null, null);
        e.default = u.exports
    },
    Kkvx: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return s
        }
        ));
        var n = r("o0o1")
          , a = r.n(n)
          , o = r("yXPU")
          , i = r.n(o)
          , s = {
            mounted: function() {
                var t = this;
                this.$nextTick((function() {
                    t.sendFacebookCookies()
                }
                ))
            },
            methods: {
                sendFacebookCookies: function() {
                    var t = this;
                    return i()(a.a.mark((function e() {
                        var r, n, o, i, s, c;
                        return a.a.wrap((function(e) {
                            for (; ; )
                                switch (e.prev = e.next) {
                                case 0:
                                    if ("facebook" === t.storeState.trafficSource) {
                                        for (r = decodeURIComponent(document.cookie).split(";"),
                                        n = ["_fbp", "_fbc"],
                                        o = [],
                                        i = 0; i < r.length; i++) {
                                            for (s = r[i]; " " == s.charAt(0); )
                                                s = s.substring(1);
                                            for (c = 0; c < n.length; c++)
                                                0 == s.indexOf(n[c] + "=") && o.push(s.replace(n[c] + "=", ""))
                                        }
                                        axios.get("".concat(document.location.origin, "/callback/clickin_data?data=").concat(o, "&user_id=").concat(t.storeState.userId, "&clickin_id=").concat(t.storeState.clickinId, "&source=").concat(t.storeState.trafficSource))
                                    }
                                case 1:
                                case "end":
                                    return e.stop()
                                }
                        }
                        ), e)
                    }
                    )))()
                }
            }
        }
    },
    ls82: function(t, e, r) {
        var n = function(t) {
            "use strict";
            var e = Object.prototype
              , r = e.hasOwnProperty
              , n = "function" == typeof Symbol ? Symbol : {}
              , a = n.iterator || "@@iterator"
              , o = n.asyncIterator || "@@asyncIterator"
              , i = n.toStringTag || "@@toStringTag";
            function s(t, e, r) {
                return Object.defineProperty(t, e, {
                    value: r,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }),
                t[e]
            }
            try {
                s({}, "")
            } catch (t) {
                s = function(t, e, r) {
                    return t[e] = r
                }
            }
            function c(t, e, r, n) {
                var a = e && e.prototype instanceof d ? e : d
                  , o = Object.create(a.prototype)
                  , i = new b(n || []);
                return o._invoke = function(t, e, r) {
                    var n = "suspendedStart";
                    return function(a, o) {
                        if ("executing" === n)
                            throw new Error("Generator is already running");
                        if ("completed" === n) {
                            if ("throw" === a)
                                throw o;
                            return C()
                        }
                        for (r.method = a,
                        r.arg = o; ; ) {
                            var i = r.delegate;
                            if (i) {
                                var s = w(i, r);
                                if (s) {
                                    if (s === l)
                                        continue;
                                    return s
                                }
                            }
                            if ("next" === r.method)
                                r.sent = r._sent = r.arg;
                            else if ("throw" === r.method) {
                                if ("suspendedStart" === n)
                                    throw n = "completed",
                                    r.arg;
                                r.dispatchException(r.arg)
                            } else
                                "return" === r.method && r.abrupt("return", r.arg);
                            n = "executing";
                            var c = u(t, e, r);
                            if ("normal" === c.type) {
                                if (n = r.done ? "completed" : "suspendedYield",
                                c.arg === l)
                                    continue;
                                return {
                                    value: c.arg,
                                    done: r.done
                                }
                            }
                            "throw" === c.type && (n = "completed",
                            r.method = "throw",
                            r.arg = c.arg)
                        }
                    }
                }(t, r, i),
                o
            }
            function u(t, e, r) {
                try {
                    return {
                        type: "normal",
                        arg: t.call(e, r)
                    }
                } catch (t) {
                    return {
                        type: "throw",
                        arg: t
                    }
                }
            }
            t.wrap = c;
            var l = {};
            function d() {}
            function h() {}
            function p() {}
            var f = {};
            f[a] = function() {
                return this
            }
            ;
            var v = Object.getPrototypeOf
              , g = v && v(v(k([])));
            g && g !== e && r.call(g, a) && (f = g);
            var y = p.prototype = d.prototype = Object.create(f);
            function m(t) {
                ["next", "throw", "return"].forEach((function(e) {
                    s(t, e, (function(t) {
                        return this._invoke(e, t)
                    }
                    ))
                }
                ))
            }
            function _(t, e) {
                var n;
                this._invoke = function(a, o) {
                    function i() {
                        return new e((function(n, i) {
                            !function n(a, o, i, s) {
                                var c = u(t[a], t, o);
                                if ("throw" !== c.type) {
                                    var l = c.arg
                                      , d = l.value;
                                    return d && "object" == typeof d && r.call(d, "__await") ? e.resolve(d.__await).then((function(t) {
                                        n("next", t, i, s)
                                    }
                                    ), (function(t) {
                                        n("throw", t, i, s)
                                    }
                                    )) : e.resolve(d).then((function(t) {
                                        l.value = t,
                                        i(l)
                                    }
                                    ), (function(t) {
                                        return n("throw", t, i, s)
                                    }
                                    ))
                                }
                                s(c.arg)
                            }(a, o, n, i)
                        }
                        ))
                    }
                    return n = n ? n.then(i, i) : i()
                }
            }
            function w(t, e) {
                var r = t.iterator[e.method];
                if (void 0 === r) {
                    if (e.delegate = null,
                    "throw" === e.method) {
                        if (t.iterator.return && (e.method = "return",
                        e.arg = void 0,
                        w(t, e),
                        "throw" === e.method))
                            return l;
                        e.method = "throw",
                        e.arg = new TypeError("The iterator does not provide a 'throw' method")
                    }
                    return l
                }
                var n = u(r, t.iterator, e.arg);
                if ("throw" === n.type)
                    return e.method = "throw",
                    e.arg = n.arg,
                    e.delegate = null,
                    l;
                var a = n.arg;
                return a ? a.done ? (e[t.resultName] = a.value,
                e.next = t.nextLoc,
                "return" !== e.method && (e.method = "next",
                e.arg = void 0),
                e.delegate = null,
                l) : a : (e.method = "throw",
                e.arg = new TypeError("iterator result is not an object"),
                e.delegate = null,
                l)
            }
            function x(t) {
                var e = {
                    tryLoc: t[0]
                };
                1 in t && (e.catchLoc = t[1]),
                2 in t && (e.finallyLoc = t[2],
                e.afterLoc = t[3]),
                this.tryEntries.push(e)
            }
            function S(t) {
                var e = t.completion || {};
                e.type = "normal",
                delete e.arg,
                t.completion = e
            }
            function b(t) {
                this.tryEntries = [{
                    tryLoc: "root"
                }],
                t.forEach(x, this),
                this.reset(!0)
            }
            function k(t) {
                if (t) {
                    var e = t[a];
                    if (e)
                        return e.call(t);
                    if ("function" == typeof t.next)
                        return t;
                    if (!isNaN(t.length)) {
                        var n = -1
                          , o = function e() {
                            for (; ++n < t.length; )
                                if (r.call(t, n))
                                    return e.value = t[n],
                                    e.done = !1,
                                    e;
                            return e.value = void 0,
                            e.done = !0,
                            e
                        };
                        return o.next = o
                    }
                }
                return {
                    next: C
                }
            }
            function C() {
                return {
                    value: void 0,
                    done: !0
                }
            }
            return h.prototype = y.constructor = p,
            p.constructor = h,
            h.displayName = s(p, i, "GeneratorFunction"),
            t.isGeneratorFunction = function(t) {
                var e = "function" == typeof t && t.constructor;
                return !!e && (e === h || "GeneratorFunction" === (e.displayName || e.name))
            }
            ,
            t.mark = function(t) {
                return Object.setPrototypeOf ? Object.setPrototypeOf(t, p) : (t.__proto__ = p,
                s(t, i, "GeneratorFunction")),
                t.prototype = Object.create(y),
                t
            }
            ,
            t.awrap = function(t) {
                return {
                    __await: t
                }
            }
            ,
            m(_.prototype),
            _.prototype[o] = function() {
                return this
            }
            ,
            t.AsyncIterator = _,
            t.async = function(e, r, n, a, o) {
                void 0 === o && (o = Promise);
                var i = new _(c(e, r, n, a),o);
                return t.isGeneratorFunction(r) ? i : i.next().then((function(t) {
                    return t.done ? t.value : i.next()
                }
                ))
            }
            ,
            m(y),
            s(y, i, "Generator"),
            y[a] = function() {
                return this
            }
            ,
            y.toString = function() {
                return "[object Generator]"
            }
            ,
            t.keys = function(t) {
                var e = [];
                for (var r in t)
                    e.push(r);
                return e.reverse(),
                function r() {
                    for (; e.length; ) {
                        var n = e.pop();
                        if (n in t)
                            return r.value = n,
                            r.done = !1,
                            r
                    }
                    return r.done = !0,
                    r
                }
            }
            ,
            t.values = k,
            b.prototype = {
                constructor: b,
                reset: function(t) {
                    if (this.prev = 0,
                    this.next = 0,
                    this.sent = this._sent = void 0,
                    this.done = !1,
                    this.delegate = null,
                    this.method = "next",
                    this.arg = void 0,
                    this.tryEntries.forEach(S),
                    !t)
                        for (var e in this)
                            "t" === e.charAt(0) && r.call(this, e) && !isNaN(+e.slice(1)) && (this[e] = void 0)
                },
                stop: function() {
                    this.done = !0;
                    var t = this.tryEntries[0].completion;
                    if ("throw" === t.type)
                        throw t.arg;
                    return this.rval
                },
                dispatchException: function(t) {
                    if (this.done)
                        throw t;
                    var e = this;
                    function n(r, n) {
                        return i.type = "throw",
                        i.arg = t,
                        e.next = r,
                        n && (e.method = "next",
                        e.arg = void 0),
                        !!n
                    }
                    for (var a = this.tryEntries.length - 1; a >= 0; --a) {
                        var o = this.tryEntries[a]
                          , i = o.completion;
                        if ("root" === o.tryLoc)
                            return n("end");
                        if (o.tryLoc <= this.prev) {
                            var s = r.call(o, "catchLoc")
                              , c = r.call(o, "finallyLoc");
                            if (s && c) {
                                if (this.prev < o.catchLoc)
                                    return n(o.catchLoc, !0);
                                if (this.prev < o.finallyLoc)
                                    return n(o.finallyLoc)
                            } else if (s) {
                                if (this.prev < o.catchLoc)
                                    return n(o.catchLoc, !0)
                            } else {
                                if (!c)
                                    throw new Error("try statement without catch or finally");
                                if (this.prev < o.finallyLoc)
                                    return n(o.finallyLoc)
                            }
                        }
                    }
                },
                abrupt: function(t, e) {
                    for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                        var a = this.tryEntries[n];
                        if (a.tryLoc <= this.prev && r.call(a, "finallyLoc") && this.prev < a.finallyLoc) {
                            var o = a;
                            break
                        }
                    }
                    o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                    var i = o ? o.completion : {};
                    return i.type = t,
                    i.arg = e,
                    o ? (this.method = "next",
                    this.next = o.finallyLoc,
                    l) : this.complete(i)
                },
                complete: function(t, e) {
                    if ("throw" === t.type)
                        throw t.arg;
                    return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg,
                    this.method = "return",
                    this.next = "end") : "normal" === t.type && e && (this.next = e),
                    l
                },
                finish: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.finallyLoc === t)
                            return this.complete(r.completion, r.afterLoc),
                            S(r),
                            l
                    }
                },
                catch: function(t) {
                    for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                        var r = this.tryEntries[e];
                        if (r.tryLoc === t) {
                            var n = r.completion;
                            if ("throw" === n.type) {
                                var a = n.arg;
                                S(r)
                            }
                            return a
                        }
                    }
                    throw new Error("illegal catch attempt")
                },
                delegateYield: function(t, e, r) {
                    return this.delegate = {
                        iterator: k(t),
                        resultName: e,
                        nextLoc: r
                    },
                    "next" === this.method && (this.arg = void 0),
                    l
                }
            },
            t
        }(t.exports);
        try {
            regeneratorRuntime = n
        } catch (t) {
            Function("r", "regeneratorRuntime = r")(n)
        }
    },
    o0o1: function(t, e, r) {
        t.exports = r("ls82")
    },
    vPCv: function(t, e, r) {
        "use strict";
        r.d(e, "a", (function() {
            return o
        }
        ));
        var n = r("8hIN")
          , a = r("HBSB")
          , o = {
            mixins: [r("Kkvx").a],
            data: function() {
                return {
                    articles: [],
                    storeState: n.a.state,
                    article: [],
                    topArticles: [],
                    loaded: !1,
                    excludedTemplates: ["dating_v3_1", "dating_v3_2", "dating_new"],
                    imageUrl: "".concat("https://d3y7aym8q3oqh.cloudfront.net", "/")
                }
            },
            mounted: function() {
                "article" === this.$route.name && this.getArticle(this.$route.params.id)
            },
            updated: function() {
                this.storeState.host.article_cta_text && this.displayBtnText()
            },
            watch: {
                $route: function(t, e) {
                    "article" !== this.$route.name || this.excludedTemplates.includes(this.storeState.template) || this.getArticle(this.$route.params.id)
                }
            },
            methods: {
                getArticle: function(t) {
                    var e = this
                      , r = a.c;
                    null !== this.storeState.trafficSource ? r = this.storeState.trafficSource : (r = document.querySelector("#main-ts").getAttribute("data-ts"),
                    n.a.setTrafficSource(r)),
                    a.e === r && (r = a.a);
                    var o = "/host/".concat(this.storeState.host.id, "/article/").concat(this.$route.params.id, "/").concat(r);
                    o = o + "?device_type=" + this.storeState.deviceType,
                    this.$route.params.id && (axios.get(o).then((function(t) {
                        e.loaded = !0,
                        e.article = t.data.article,
                        t.data.article && (document.title = t.data.article.title,
                        t.data.article.canonical && (document.getElementById("canonical").href = t.data.article.canonical),
                        t.data.article.json_ld && (document.getElementById("jsonLD").text = t.data.article.json_ld))
                    }
                    )),
                    this.$ga.page("/article/".concat(t)))
                },
                getArticles: function() {
                    var t = this;
                    axios.get("/host/".concat(this.storeState.host.id, "/articles")).then((function(e) {
                        t.loaded = !0,
                        t.articles = e.data.articles.sort((function(t, e) {
                            return new Date(e.updated_at) - new Date(t.updated_at)
                        }
                        ))
                    }
                    )),
                    this.$ga.page("/articles")
                },
                getTopArticles: function() {
                    var t = this;
                    axios.get("/host/".concat(this.storeState.host.id, "/top-articles")).then((function(e) {
                        t.loaded = !0,
                        t.topArticles = e.data.articles.sort((function(t, e) {
                            return new Date(e.frontend_date) - new Date(t.frontend_date)
                        }
                        ))
                    }
                    ))
                },
                partnerScore: function(t) {
                    var e = t.score;
                    return e.toString().length < 2 && (e += ".0"),
                    e.toString()
                },
                displayBtnText: function() {
                    var t = this
                      , e = document.getElementsByClassName("inline-cms-button");
                    Array.from(e).forEach((function(e) {
                        e.innerHTML = t.storeState.host.article_cta_text
                    }
                    ))
                }
            }
        }
    },
    yXPU: function(t, e) {
        function r(t, e, r, n, a, o, i) {
            try {
                var s = t[o](i)
                  , c = s.value
            } catch (t) {
                return void r(t)
            }
            s.done ? e(c) : Promise.resolve(c).then(n, a)
        }
        t.exports = function(t) {
            return function() {
                var e = this
                  , n = arguments;
                return new Promise((function(a, o) {
                    var i = t.apply(e, n);
                    function s(t) {
                        r(i, a, o, s, c, "next", t)
                    }
                    function c(t) {
                        r(i, a, o, s, c, "throw", t)
                    }
                    s(void 0)
                }
                ))
            }
        }
    }
}]);
