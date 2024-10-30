/*!
 * Select2 4.0.3
 * https://select2.github.io
 *
 * Released under the MIT license
 * https://github.com/select2/select2/blob/master/LICENSE.md
 */
!(function (e) {
    "function" == typeof define && define.amd
      ? define(["jquery"], e)
      : e("object" == typeof exports ? require("jquery") : jQuery);
  })(function (e) {
    var t = (function () {
        if (e && e.fn && e.fn.select2 && e.fn.select2.amd) t = e.fn.select2.amd;
        var t;
        return (
          (function () {
            if (!t || !t.requirejs) {
              t ? (n = t) : (t = {});
              /**
               * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
               * Available via the MIT or new BSD license.
               * see: http://github.com/jrburke/almond for details
               */
              var e, n, i;
              !(function (t) {
                function r(e, t) {
                  return $.call(e, t);
                }
                function s(e, t) {
                  var n,
                    i,
                    r,
                    s,
                    o,
                    a,
                    l,
                    c,
                    u,
                    d,
                    p,
                    h = t && t.split("/"),
                    f = y.map,
                    g = (f && f["*"]) || {};
                  if (e && "." === e.charAt(0))
                    if (t) {
                      for (
                        o = (e = e.split("/")).length - 1,
                          y.nodeIdCompat &&
                            b.test(e[o]) &&
                            (e[o] = e[o].replace(b, "")),
                          e = h.slice(0, h.length - 1).concat(e),
                          u = 0;
                        u < e.length;
                        u += 1
                      )
                        if ("." === (p = e[u])) e.splice(u, 1), (u -= 1);
                        else if (".." === p) {
                          if (1 === u && (".." === e[2] || ".." === e[0])) break;
                          u > 0 && (e.splice(u - 1, 2), (u -= 2));
                        }
                      e = e.join("/");
                    } else 0 === e.indexOf("./") && (e = e.substring(2));
                  if ((h || g) && f) {
                    for (u = (n = e.split("/")).length; u > 0; u -= 1) {
                      if (((i = n.slice(0, u).join("/")), h))
                        for (d = h.length; d > 0; d -= 1)
                          if ((r = f[h.slice(0, d).join("/")]) && (r = r[i])) {
                            (s = r), (a = u);
                            break;
                          }
                      if (s) break;
                      !l && g && g[i] && ((l = g[i]), (c = u));
                    }
                    !s && l && ((s = l), (a = c)),
                      s && (n.splice(0, a, s), (e = n.join("/")));
                  }
                  return e;
                }
                function o(e, n) {
                  return function () {
                    var i = w.call(arguments, 0);
                    return (
                      "string" != typeof i[0] && 1 === i.length && i.push(null),
                      h.apply(t, i.concat([e, n]))
                    );
                  };
                }
                function a(e) {
                  return function (t) {
                    return s(t, e);
                  };
                }
                function l(e) {
                  return function (t) {
                    m[e] = t;
                  };
                }
                function c(e) {
                  if (r(v, e)) {
                    var n = v[e];
                    delete v[e], (_[e] = !0), p.apply(t, n);
                  }
                  if (!r(m, e) && !r(_, e)) throw new Error("No " + e);
                  return m[e];
                }
                function u(e) {
                  var t,
                    n = e ? e.indexOf("!") : -1;
                  return (
                    n > -1 &&
                      ((t = e.substring(0, n)),
                      (e = e.substring(n + 1, e.length))),
                    [t, e]
                  );
                }
                function d(e) {
                  return function () {
                    return (y && y.config && y.config[e]) || {};
                  };
                }
                var p,
                  h,
                  f,
                  g,
                  m = {},
                  v = {},
                  y = {},
                  _ = {},
                  $ = Object.prototype.hasOwnProperty,
                  w = [].slice,
                  b = /\.js$/;
                (f = function (e, t) {
                  var n,
                    i = u(e),
                    r = i[0];
                  return (
                    (e = i[1]),
                    r && (n = c((r = s(r, t)))),
                    r
                      ? (e = n && n.normalize ? n.normalize(e, a(t)) : s(e, t))
                      : ((r = (i = u((e = s(e, t))))[0]),
                        (e = i[1]),
                        r && (n = c(r))),
                    { f: r ? r + "!" + e : e, n: e, pr: r, p: n }
                  );
                }),
                  (g = {
                    require: function (e) {
                      return o(e);
                    },
                    exports: function (e) {
                      var t = m[e];
                      return void 0 !== t ? t : (m[e] = {});
                    },
                    module: function (e) {
                      return { id: e, uri: "", exports: m[e], config: d(e) };
                    },
                  }),
                  (p = function (e, n, i, s) {
                    var a,
                      u,
                      d,
                      p,
                      h,
                      y,
                      $ = [],
                      w = typeof i;
                    if (((s = s || e), "undefined" === w || "function" === w)) {
                      for (
                        n =
                          !n.length && i.length
                            ? ["require", "exports", "module"]
                            : n,
                          h = 0;
                        h < n.length;
                        h += 1
                      )
                        if (((p = f(n[h], s)), "require" === (u = p.f)))
                          $[h] = g.require(e);
                        else if ("exports" === u) ($[h] = g.exports(e)), (y = !0);
                        else if ("module" === u) a = $[h] = g.module(e);
                        else if (r(m, u) || r(v, u) || r(_, u)) $[h] = c(u);
                        else {
                          if (!p.p) throw new Error(e + " missing " + u);
                          p.p.load(p.n, o(s, !0), l(u), {}), ($[h] = m[u]);
                        }
                      (d = i ? i.apply(m[e], $) : undefined),
                        e &&
                          (a && a.exports !== t && a.exports !== m[e]
                            ? (m[e] = a.exports)
                            : (d === t && y) || (m[e] = d));
                    } else e && (m[e] = i);
                  }),
                  (e =
                    n =
                    h =
                      function (e, n, i, r, s) {
                        if ("string" == typeof e)
                          return g[e] ? g[e](n) : c(f(e, n).f);
                        if (!e.splice) {
                          if (((y = e).deps && h(y.deps, y.callback), !n)) return;
                          n.splice ? ((e = n), (n = i), (i = null)) : (e = t);
                        }
                        return (
                          (n = n || function () {}),
                          "function" == typeof i && ((i = r), (r = s)),
                          r
                            ? p(t, e, n, i)
                            : setTimeout(function () {
                                p(t, e, n, i);
                              }, 4),
                          h
                        );
                      }),
                  (h.config = function (e) {
                    return h(e);
                  }),
                  (e._defined = m),
                  ((i = function (e, t, n) {
                    if ("string" != typeof e)
                      throw new Error(
                        "See almond README: incorrect module build, no module name"
                      );
                    t.splice || ((n = t), (t = [])),
                      r(m, e) || r(v, e) || (v[e] = [e, t, n]);
                  }).amd = { jQuery: !0 });
              })(),
                (t.requirejs = e),
                (t.require = n),
                (t.define = i);
            }
          })(),
          t.define("almond", function () {}),
          t.define("jquery", [], function () {
            var t = e || $;
            return (
              null == t &&
                console &&
                console.error &&
                console.error(
                  "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."
                ),
              t
            );
          }),
          t.define("select2/utils", ["jquery"], function (e) {
            function t(e) {
              var t = e.prototype,
                n = [];
              for (var i in t)
                "function" == typeof t[i] && "constructor" !== i && n.push(i);
              return n;
            }
            var n = {};
            (n.Extend = function (e, t) {
              function n() {
                this.constructor = e;
              }
              var i = {}.hasOwnProperty;
              for (var r in t) i.call(t, r) && (e[r] = t[r]);
              return (
                (n.prototype = t.prototype),
                (e.prototype = new n()),
                (e.__super__ = t.prototype),
                e
              );
            }),
              (n.Decorate = function (e, n) {
                function i() {
                  var t = Array.prototype.unshift,
                    i = n.prototype.constructor.length,
                    r = e.prototype.constructor;
                  i > 0 &&
                    (t.call(arguments, e.prototype.constructor),
                    (r = n.prototype.constructor)),
                    r.apply(this, arguments);
                }
                var r = t(n),
                  s = t(e);
                (n.displayName = e.displayName),
                  (i.prototype = new (function () {
                    this.constructor = i;
                  })());
                for (var o = 0; o < s.length; o++) {
                  var a = s[o];
                  i.prototype[a] = e.prototype[a];
                }
                for (var l = 0; l < r.length; l++) {
                  var c = r[l];
                  i.prototype[c] = (function (e) {
                    var t = function () {};
                    e in i.prototype && (t = i.prototype[e]);
                    var r = n.prototype[e];
                    return function () {
                      return (
                        Array.prototype.unshift.call(arguments, t),
                        r.apply(this, arguments)
                      );
                    };
                  })(c);
                }
                return i;
              });
            var i = function () {
              this.listeners = {};
            };
            return (
              (i.prototype.on = function (e, t) {
                (this.listeners = this.listeners || {}),
                  e in this.listeners
                    ? this.listeners[e].push(t)
                    : (this.listeners[e] = [t]);
              }),
              (i.prototype.trigger = function (e) {
                var t = Array.prototype.slice,
                  n = t.call(arguments, 1);
                (this.listeners = this.listeners || {}),
                  null == n && (n = []),
                  0 === n.length && n.push({}),
                  (n[0]._type = e),
                  e in this.listeners &&
                    this.invoke(this.listeners[e], t.call(arguments, 1)),
                  "*" in this.listeners &&
                    this.invoke(this.listeners["*"], arguments);
              }),
              (i.prototype.invoke = function (e, t) {
                for (var n = 0, i = e.length; n < i; n++) e[n].apply(this, t);
              }),
              (n.Observable = i),
              (n.generateChars = function (e) {
                for (var t = "", n = 0; n < e; n++)
                  t += Math.floor(36 * Math.random()).toString(36);
                return t;
              }),
              (n.bind = function (e, t) {
                return function () {
                  e.apply(t, arguments);
                };
              }),
              (n._convertData = function (e) {
                for (var t in e) {
                  var n = t.split("-"),
                    i = e;
                  if (1 !== n.length) {
                    for (var r = 0; r < n.length; r++) {
                      var s = n[r];
                      (s = s.substring(0, 1).toLowerCase() + s.substring(1)) in
                        i || (i[s] = {}),
                        r == n.length - 1 && (i[s] = e[t]),
                        (i = i[s]);
                    }
                    delete e[t];
                  }
                }
                return e;
              }),
              (n.hasScroll = function (t, n) {
                var i = e(n),
                  r = n.style.overflowX,
                  s = n.style.overflowY;
                return (
                  (r !== s || ("hidden" !== s && "visible" !== s)) &&
                  ("scroll" === r ||
                    "scroll" === s ||
                    i.innerHeight() < n.scrollHeight ||
                    i.innerWidth() < n.scrollWidth)
                );
              }),
              (n.escapeMarkup = function (e) {
                var t = {
                  "\\": "&#92;",
                  "&": "&amp;",
                  "<": "&lt;",
                  ">": "&gt;",
                  '"': "&quot;",
                  "'": "&#39;",
                  "/": "&#47;",
                };
                return "string" != typeof e
                  ? e
                  : String(e).replace(/[&<>"'\/\\]/g, function (e) {
                      return t[e];
                    });
              }),
              (n.appendMany = function (t, n) {
                if ("1.7" === e.fn.jquery.substr(0, 3)) {
                  var i = e();
                  e.map(n, function (e) {
                    i = i.add(e);
                  }),
                    (n = i);
                }
                t.append(n);
              }),
              n
            );
          }),
          t.define("select2/results", ["jquery", "./utils"], function (e, t) {
            function n(e, t, i) {
              (this.$element = e),
                (this.data = i),
                (this.options = t),
                n.__super__.constructor.call(this);
            }
            return (
              t.Extend(n, t.Observable),
              (n.prototype.render = function () {
                var t = e(
                  '<ul class="select2-results__options" role="tree"></ul>'
                );
                return (
                  this.options.get("multiple") &&
                    t.attr("aria-multiselectable", "true"),
                  (this.$results = t),
                  t
                );
              }),
              (n.prototype.clear = function () {
                this.$results.empty();
              }),
              (n.prototype.displayMessage = function (t) {
                var n = this.options.get("escapeMarkup");
                this.clear(), this.hideLoading();
                var i = e(
                    '<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'
                  ),
                  r = this.options.get("translations").get(t.message);
                i.append(n(r(t.args))),
                  (i[0].className += " select2-results__message"),
                  this.$results.append(i);
              }),
              (n.prototype.hideMessages = function () {
                this.$results.find(".select2-results__message").remove();
              }),
              (n.prototype.append = function (e) {
                this.hideLoading();
                var t = [];
                if (null != e.results && 0 !== e.results.length) {
                  e.results = this.sort(e.results);
                  for (var n = 0; n < e.results.length; n++) {
                    var i = e.results[n],
                      r = this.option(i);
                    t.push(r);
                  }
                  this.$results.append(t);
                } else
                  0 === this.$results.children().length &&
                    this.trigger("results:message", { message: "noResults" });
              }),
              (n.prototype.position = function (e, t) {
                t.find(".select2-results").append(e);
              }),
              (n.prototype.sort = function (e) {
                return this.options.get("sorter")(e);
              }),
              (n.prototype.highlightFirstItem = function () {
                var e = this.$results.find(
                    ".select2-results__option[aria-selected]"
                  ),
                  t = e.filter("[aria-selected=true]");
                t.length > 0
                  ? t.first().trigger("mouseenter")
                  : e.first().trigger("mouseenter"),
                  this.ensureHighlightVisible();
              }),
              (n.prototype.setClasses = function () {
                var t = this;
                this.data.current(function (n) {
                  var i = e.map(n, function (e) {
                    return e.id.toString();
                  });
                  t.$results
                    .find(".select2-results__option[aria-selected]")
                    .each(function () {
                      var t = e(this),
                        n = e.data(this, "data"),
                        r = "" + n.id;
                      (null != n.element && n.element.selected) ||
                      (null == n.element && e.inArray(r, i) > -1)
                        ? t.attr("aria-selected", "true")
                        : t.attr("aria-selected", "false");
                    });
                });
              }),
              (n.prototype.showLoading = function (e) {
                this.hideLoading();
                var t = {
                    disabled: !0,
                    loading: !0,
                    text: this.options.get("translations").get("searching")(e),
                  },
                  n = this.option(t);
                (n.className += " loading-results"), this.$results.prepend(n);
              }),
              (n.prototype.hideLoading = function () {
                this.$results.find(".loading-results").remove();
              }),
              (n.prototype.option = function (t) {
                var n = document.createElement("li");
                n.className = "select2-results__option";
                var i = { role: "treeitem", "aria-selected": "false" };
                t.disabled &&
                  (delete i["aria-selected"], (i["aria-disabled"] = "true")),
                  null == t.id && delete i["aria-selected"],
                  null != t._resultId && (n.id = t._resultId),
                  t.title && (n.title = t.title),
                  t.children &&
                    ((i.role = "group"),
                    (i["aria-label"] = t.text),
                    delete i["aria-selected"]);
                for (var r in i) {
                  var s = i[r];
                  n.setAttribute(r, s);
                }
                if (t.children) {
                  var o = e(n),
                    a = document.createElement("strong");
                  a.className = "select2-results__group";
                  e(a);
                  this.template(t, a);
                  for (var l = [], c = 0; c < t.children.length; c++) {
                    var u = t.children[c],
                      d = this.option(u);
                    l.push(d);
                  }
                  var p = e("<ul></ul>", {
                    class:
                      "select2-results__options select2-results__options--nested",
                  });
                  p.append(l), o.append(a), o.append(p);
                } else this.template(t, n);
                return e.data(n, "data", t), n;
              }),
              (n.prototype.bind = function (t, n) {
                var i = this,
                  r = t.id + "-results";
                this.$results.attr("id", r),
                  t.on("results:all", function (e) {
                    i.clear(),
                      i.append(e.data),
                      t.isOpen() && (i.setClasses(), i.highlightFirstItem());
                  }),
                  t.on("results:append", function (e) {
                    i.append(e.data), t.isOpen() && i.setClasses();
                  }),
                  t.on("query", function (e) {
                    i.hideMessages(), i.showLoading(e);
                  }),
                  t.on("select", function () {
                    t.isOpen() && (i.setClasses(), i.highlightFirstItem());
                  }),
                  t.on("unselect", function () {
                    t.isOpen() && (i.setClasses(), i.highlightFirstItem());
                  }),
                  t.on("open", function () {
                    i.$results.attr("aria-expanded", "true"),
                      i.$results.attr("aria-hidden", "false"),
                      i.setClasses(),
                      i.ensureHighlightVisible();
                  }),
                  t.on("close", function () {
                    i.$results.attr("aria-expanded", "false"),
                      i.$results.attr("aria-hidden", "true"),
                      i.$results.removeAttr("aria-activedescendant");
                  }),
                  t.on("results:toggle", function () {
                    var e = i.getHighlightedResults();
                    0 !== e.length && e.trigger("mouseup");
                  }),
                  t.on("results:select", function () {
                    var e = i.getHighlightedResults();
                    if (0 !== e.length) {
                      var t = e.data("data");
                      "true" == e.attr("aria-selected")
                        ? i.trigger("close", {})
                        : i.trigger("select", { data: t });
                    }
                  }),
                  t.on("results:previous", function () {
                    var e = i.getHighlightedResults(),
                      t = i.$results.find("[aria-selected]"),
                      n = t.index(e);
                    if (0 !== n) {
                      var r = n - 1;
                      0 === e.length && (r = 0);
                      var s = t.eq(r);
                      s.trigger("mouseenter");
                      var o = i.$results.offset().top,
                        a = s.offset().top,
                        l = i.$results.scrollTop() + (a - o);
                      0 === r
                        ? i.$results.scrollTop(0)
                        : a - o < 0 && i.$results.scrollTop(l);
                    }
                  }),
                  t.on("results:next", function () {
                    var e = i.getHighlightedResults(),
                      t = i.$results.find("[aria-selected]"),
                      n = t.index(e) + 1;
                    if (!(n >= t.length)) {
                      var r = t.eq(n);
                      r.trigger("mouseenter");
                      var s =
                          i.$results.offset().top + i.$results.outerHeight(!1),
                        o = r.offset().top + r.outerHeight(!1),
                        a = i.$results.scrollTop() + o - s;
                      0 === n
                        ? i.$results.scrollTop(0)
                        : o > s && i.$results.scrollTop(a);
                    }
                  }),
                  t.on("results:focus", function (e) {
                    e.element.addClass("select2-results__option--highlighted");
                  }),
                  t.on("results:message", function (e) {
                    i.displayMessage(e);
                  }),
                  e.fn.mousewheel &&
                    this.$results.on("mousewheel", function (e) {
                      var t = i.$results.scrollTop(),
                        n = i.$results.get(0).scrollHeight - t + e.deltaY,
                        r = e.deltaY > 0 && t - e.deltaY <= 0,
                        s = e.deltaY < 0 && n <= i.$results.height();
                      r
                        ? (i.$results.scrollTop(0),
                          e.preventDefault(),
                          e.stopPropagation())
                        : s &&
                          (i.$results.scrollTop(
                            i.$results.get(0).scrollHeight - i.$results.height()
                          ),
                          e.preventDefault(),
                          e.stopPropagation());
                    }),
                  this.$results.on(
                    "mouseup",
                    ".select2-results__option[aria-selected]",
                    function (t) {
                      var n = e(this),
                        r = n.data("data");
                      "true" !== n.attr("aria-selected")
                        ? i.trigger("select", { originalEvent: t, data: r })
                        : i.options.get("multiple")
                        ? i.trigger("unselect", { originalEvent: t, data: r })
                        : i.trigger("close", {});
                    }
                  ),
                  this.$results.on(
                    "mouseenter",
                    ".select2-results__option[aria-selected]",
                    function (t) {
                      var n = e(this).data("data");
                      i
                        .getHighlightedResults()
                        .removeClass("select2-results__option--highlighted"),
                        i.trigger("results:focus", { data: n, element: e(this) });
                    }
                  );
              }),
              (n.prototype.getHighlightedResults = function () {
                return this.$results.find(
                  ".select2-results__option--highlighted"
                );
              }),
              (n.prototype.destroy = function () {
                this.$results.remove();
              }),
              (n.prototype.ensureHighlightVisible = function () {
                var e = this.getHighlightedResults();
                if (0 !== e.length) {
                  var t = this.$results.find("[aria-selected]").index(e),
                    n = this.$results.offset().top,
                    i = e.offset().top,
                    r = this.$results.scrollTop() + (i - n),
                    s = i - n;
                  (r -= 2 * e.outerHeight(!1)),
                    t <= 2
                      ? this.$results.scrollTop(0)
                      : (s > this.$results.outerHeight() || s < 0) &&
                        this.$results.scrollTop(r);
                }
              }),
              (n.prototype.template = function (t, n) {
                var i = this.options.get("templateResult"),
                  r = this.options.get("escapeMarkup"),
                  s = i(t, n);
                null == s
                  ? (n.style.display = "none")
                  : "string" == typeof s
                  ? (n.innerHTML = r(s))
                  : e(n).append(s);
              }),
              n
            );
          }),
          t.define("select2/keys", [], function () {
            return {
              BACKSPACE: 8,
              TAB: 9,
              ENTER: 13,
              SHIFT: 16,
              CTRL: 17,
              ALT: 18,
              ESC: 27,
              SPACE: 32,
              PAGE_UP: 33,
              PAGE_DOWN: 34,
              END: 35,
              HOME: 36,
              LEFT: 37,
              UP: 38,
              RIGHT: 39,
              DOWN: 40,
              DELETE: 46,
            };
          }),
          t.define(
            "select2/selection/base",
            ["jquery", "../utils", "../keys"],
            function (e, t, n) {
              function i(e, t) {
                (this.$element = e),
                  (this.options = t),
                  i.__super__.constructor.call(this);
              }
              return (
                t.Extend(i, t.Observable),
                (i.prototype.render = function () {
                  var t = e(
                    '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
                  );
                  return (
                    (this._tabindex = 0),
                    null != this.$element.data("old-tabindex")
                      ? (this._tabindex = this.$element.data("old-tabindex"))
                      : null != this.$element.attr("tabindex") &&
                        (this._tabindex = this.$element.attr("tabindex")),
                    t.attr("title", this.$element.attr("title")),
                    t.attr("tabindex", this._tabindex),
                    (this.$selection = t),
                    t
                  );
                }),
                (i.prototype.bind = function (e, t) {
                  var i = this,
                    r = (e.id, e.id + "-results");
                  (this.container = e),
                    this.$selection.on("focus", function (e) {
                      i.trigger("focus", e);
                    }),
                    this.$selection.on("blur", function (e) {
                      i._handleBlur(e);
                    }),
                    this.$selection.on("keydown", function (e) {
                      i.trigger("keypress", e),
                        e.which === n.SPACE && e.preventDefault();
                    }),
                    e.on("results:focus", function (e) {
                      i.$selection.attr(
                        "aria-activedescendant",
                        e.data._resultId
                      );
                    }),
                    e.on("selection:update", function (e) {
                      i.update(e.data);
                    }),
                    e.on("open", function () {
                      i.$selection.attr("aria-expanded", "true"),
                        i.$selection.attr("aria-owns", r),
                        i._attachCloseHandler(e);
                    }),
                    e.on("close", function () {
                      i.$selection.attr("aria-expanded", "false"),
                        i.$selection.removeAttr("aria-activedescendant"),
                        i.$selection.removeAttr("aria-owns"),
                        i.$selection.focus(),
                        i._detachCloseHandler(e);
                    }),
                    e.on("enable", function () {
                      i.$selection.attr("tabindex", i._tabindex);
                    }),
                    e.on("disable", function () {
                      i.$selection.attr("tabindex", "-1");
                    });
                }),
                (i.prototype._handleBlur = function (t) {
                  var n = this;
                  window.setTimeout(function () {
                    document.activeElement == n.$selection[0] ||
                      e.contains(n.$selection[0], document.activeElement) ||
                      n.trigger("blur", t);
                  }, 1);
                }),
                (i.prototype._attachCloseHandler = function (t) {
                  e(document.body).on("mousedown.select2." + t.id, function (t) {
                    var n = e(t.target).closest(".select2");
                    e(".select2.select2-container--open").each(function () {
                      var t = e(this);
                      this != n[0] && t.data("element").select2("close");
                    });
                  });
                }),
                (i.prototype._detachCloseHandler = function (t) {
                  e(document.body).off("mousedown.select2." + t.id);
                }),
                (i.prototype.position = function (e, t) {
                  t.find(".selection").append(e);
                }),
                (i.prototype.destroy = function () {
                  this._detachCloseHandler(this.container);
                }),
                (i.prototype.update = function (e) {
                  throw new Error(
                    "The `update` method must be defined in child classes."
                  );
                }),
                i
              );
            }
          ),
          t.define(
            "select2/selection/single",
            ["jquery", "./base", "../utils", "../keys"],
            function (e, t, n, i) {
              function r() {
                r.__super__.constructor.apply(this, arguments);
              }
              return (
                n.Extend(r, t),
                (r.prototype.render = function () {
                  var e = r.__super__.render.call(this);
                  return (
                    e.addClass("select2-selection--single"),
                    e.html(
                      '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                    ),
                    e
                  );
                }),
                (r.prototype.bind = function (e, t) {
                  var n = this;
                  r.__super__.bind.apply(this, arguments);
                  var i = e.id + "-container";
                  this.$selection
                    .find(".select2-selection__rendered")
                    .attr("id", i),
                    this.$selection.attr("aria-labelledby", i),
                    this.$selection.on("mousedown", function (e) {
                      1 === e.which && n.trigger("toggle", { originalEvent: e });
                    }),
                    this.$selection.on("focus", function (e) {}),
                    this.$selection.on("blur", function (e) {}),
                    e.on("focus", function (t) {
                      e.isOpen() || n.$selection.focus();
                    }),
                    e.on("selection:update", function (e) {
                      n.update(e.data);
                    });
                }),
                (r.prototype.clear = function () {
                  this.$selection.find(".select2-selection__rendered").empty();
                }),
                (r.prototype.display = function (e, t) {
                  var n = this.options.get("templateSelection");
                  return this.options.get("escapeMarkup")(n(e, t));
                }),
                (r.prototype.selectionContainer = function () {
                  return e("<span></span>");
                }),
                (r.prototype.update = function (e) {
                  if (0 !== e.length) {
                    var t = e[0],
                      n = this.$selection.find(".select2-selection__rendered"),
                      i = this.display(t, n);
                    n.empty().append(i), n.prop("title", t.title || t.text);
                  } else this.clear();
                }),
                r
              );
            }
          ),
          t.define(
            "select2/selection/multiple",
            ["jquery", "./base", "../utils"],
            function (e, t, n) {
              function i(e, t) {
                i.__super__.constructor.apply(this, arguments);
              }
              return (
                n.Extend(i, t),
                (i.prototype.render = function () {
                  var e = i.__super__.render.call(this);
                  return (
                    e.addClass("select2-selection--multiple"),
                    e.html('<ul class="select2-selection__rendered"></ul>'),
                    e
                  );
                }),
                (i.prototype.bind = function (t, n) {
                  var r = this;
                  i.__super__.bind.apply(this, arguments),
                    this.$selection.on("click", function (e) {
                      r.trigger("toggle", { originalEvent: e });
                    }),
                    this.$selection.on(
                      "click",
                      ".select2-selection__choice__remove",
                      function (t) {
                        if (!r.options.get("disabled")) {
                          var n = e(this).parent().data("data");
                          r.trigger("unselect", { originalEvent: t, data: n });
                        }
                      }
                    );
                }),
                (i.prototype.clear = function () {
                  this.$selection.find(".select2-selection__rendered").empty();
                }),
                (i.prototype.display = function (e, t) {
                  var n = this.options.get("templateSelection");
                  return this.options.get("escapeMarkup")(n(e, t));
                }),
                (i.prototype.selectionContainer = function () {
                  return e(
                    '<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>'
                  );
                }),
                (i.prototype.update = function (e) {
                  if ((this.clear(), 0 !== e.length)) {
                    for (var t = [], i = 0; i < e.length; i++) {
                      var r = e[i],
                        s = this.selectionContainer(),
                        o = this.display(r, s);
                      s.append(o),
                        s.prop("title", r.title || r.text),
                        s.data("data", r),
                        t.push(s);
                    }
                    var a = this.$selection.find(".select2-selection__rendered");
                    n.appendMany(a, t);
                  }
                }),
                i
              );
            }
          ),
          t.define("select2/selection/placeholder", ["../utils"], function (e) {
            function t(e, t, n) {
              (this.placeholder = this.normalizePlaceholder(
                n.get("placeholder")
              )),
                e.call(this, t, n);
            }
            return (
              (t.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = { id: "", text: t }), t;
              }),
              (t.prototype.createPlaceholder = function (e, t) {
                var n = this.selectionContainer();
                return (
                  n.html(this.display(t)),
                  n
                    .addClass("select2-selection__placeholder")
                    .removeClass("select2-selection__choice"),
                  n
                );
              }),
              (t.prototype.update = function (e, t) {
                var n = 1 == t.length && t[0].id != this.placeholder.id;
                if (t.length > 1 || n) return e.call(this, t);
                this.clear();
                var i = this.createPlaceholder(this.placeholder);
                this.$selection.find(".select2-selection__rendered").append(i);
              }),
              t
            );
          }),
          t.define(
            "select2/selection/allowClear",
            ["jquery", "../keys"],
            function (e, t) {
              function n() {}
              return (
                (n.prototype.bind = function (e, t, n) {
                  var i = this;
                  e.call(this, t, n),
                    null == this.placeholder &&
                      this.options.get("debug") &&
                      window.console &&
                      console.error &&
                      console.error(
                        "Select2: The `allowClear` option should be used in combination with the `placeholder` option."
                      ),
                    this.$selection.on(
                      "mousedown",
                      ".select2-selection__clear",
                      function (e) {
                        i._handleClear(e);
                      }
                    ),
                    t.on("keypress", function (e) {
                      i._handleKeyboardClear(e, t);
                    });
                }),
                (n.prototype._handleClear = function (e, t) {
                  if (!this.options.get("disabled")) {
                    var n = this.$selection.find(".select2-selection__clear");
                    if (0 !== n.length) {
                      t.stopPropagation();
                      for (var i = n.data("data"), r = 0; r < i.length; r++) {
                        var s = { data: i[r] };
                        if ((this.trigger("unselect", s), s.prevented)) return;
                      }
                      this.$element.val(this.placeholder.id).trigger("change"),
                        this.trigger("toggle", {});
                    }
                  }
                }),
                (n.prototype._handleKeyboardClear = function (e, n, i) {
                  i.isOpen() ||
                    (n.which != t.DELETE && n.which != t.BACKSPACE) ||
                    this._handleClear(n);
                }),
                (n.prototype.update = function (t, n) {
                  if (
                    (t.call(this, n),
                    !(
                      this.$selection.find(".select2-selection__placeholder")
                        .length > 0 || 0 === n.length
                    ))
                  ) {
                    var i = e(
                      '<span class="select2-selection__clear">&times;</span>'
                    );
                    i.data("data", n),
                      this.$selection
                        .find(".select2-selection__rendered")
                        .prepend(i);
                  }
                }),
                n
              );
            }
          ),
          t.define(
            "select2/selection/search",
            ["jquery", "../utils", "../keys"],
            function (e, t, n) {
              function i(e, t, n) {
                e.call(this, t, n);
              }
              return (
                (i.prototype.render = function (t) {
                  var n = e(
                    '<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>'
                  );
                  (this.$searchContainer = n), (this.$search = n.find("input"));
                  var i = t.call(this);
                  return this._transferTabIndex(), i;
                }),
                (i.prototype.bind = function (e, t, i) {
                  var r = this;
                  e.call(this, t, i),
                    t.on("open", function () {
                      r.$search.trigger("focus");
                    }),
                    t.on("close", function () {
                      r.$search.val(""),
                        r.$search.removeAttr("aria-activedescendant"),
                        r.$search.trigger("focus");
                    }),
                    t.on("enable", function () {
                      r.$search.prop("disabled", !1), r._transferTabIndex();
                    }),
                    t.on("disable", function () {
                      r.$search.prop("disabled", !0);
                    }),
                    t.on("focus", function (e) {
                      r.$search.trigger("focus");
                    }),
                    t.on("results:focus", function (e) {
                      r.$search.attr("aria-activedescendant", e.id);
                    }),
                    this.$selection.on(
                      "focusin",
                      ".select2-search--inline",
                      function (e) {
                        r.trigger("focus", e);
                      }
                    ),
                    this.$selection.on(
                      "focusout",
                      ".select2-search--inline",
                      function (e) {
                        r._handleBlur(e);
                      }
                    ),
                    this.$selection.on(
                      "keydown",
                      ".select2-search--inline",
                      function (e) {
                        if (
                          (e.stopPropagation(),
                          r.trigger("keypress", e),
                          (r._keyUpPrevented = e.isDefaultPrevented()),
                          e.which === n.BACKSPACE && "" === r.$search.val())
                        ) {
                          var t = r.$searchContainer.prev(
                            ".select2-selection__choice"
                          );
                          if (t.length > 0) {
                            var i = t.data("data");
                            r.searchRemoveChoice(i), e.preventDefault();
                          }
                        }
                      }
                    );
                  var s = document.documentMode,
                    o = s && s <= 11;
                  this.$selection.on(
                    "input.searchcheck",
                    ".select2-search--inline",
                    function (e) {
                      o
                        ? r.$selection.off("input.search input.searchcheck")
                        : r.$selection.off("keyup.search");
                    }
                  ),
                    this.$selection.on(
                      "keyup.search input.search",
                      ".select2-search--inline",
                      function (e) {
                        if (o && "input" === e.type)
                          r.$selection.off("input.search input.searchcheck");
                        else {
                          var t = e.which;
                          t != n.SHIFT &&
                            t != n.CTRL &&
                            t != n.ALT &&
                            t != n.TAB &&
                            r.handleSearch(e);
                        }
                      }
                    );
                }),
                (i.prototype._transferTabIndex = function (e) {
                  this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                    this.$selection.attr("tabindex", "-1");
                }),
                (i.prototype.createPlaceholder = function (e, t) {
                  this.$search.attr("placeholder", t.text);
                }),
                (i.prototype.update = function (e, t) {
                  var n = this.$search[0] == document.activeElement;
                  this.$search.attr("placeholder", ""),
                    e.call(this, t),
                    this.$selection
                      .find(".select2-selection__rendered")
                      .append(this.$searchContainer),
                    this.resizeSearch(),
                    n && this.$search.focus();
                }),
                (i.prototype.handleSearch = function () {
                  if ((this.resizeSearch(), !this._keyUpPrevented)) {
                    var e = this.$search.val();
                    this.trigger("query", { term: e });
                  }
                  this._keyUpPrevented = !1;
                }),
                (i.prototype.searchRemoveChoice = function (e, t) {
                  this.trigger("unselect", { data: t }),
                    this.$search.val(t.text),
                    this.handleSearch();
                }),
                (i.prototype.resizeSearch = function () {
                  this.$search.css("width", "25px");
                  var e = "";
                  (e =
                    "" !== this.$search.attr("placeholder")
                      ? this.$selection
                          .find(".select2-selection__rendered")
                          .innerWidth()
                      : 0.75 * (this.$search.val().length + 1) + "em"),
                    this.$search.css("width", e);
                }),
                i
              );
            }
          ),
          t.define("select2/selection/eventRelay", ["jquery"], function (e) {
            function t() {}
            return (
              (t.prototype.bind = function (t, n, i) {
                var r = this,
                  s = [
                    "open",
                    "opening",
                    "close",
                    "closing",
                    "select",
                    "selecting",
                    "unselect",
                    "unselecting",
                  ],
                  o = ["opening", "closing", "selecting", "unselecting"];
                t.call(this, n, i),
                  n.on("*", function (t, n) {
                    if (-1 !== e.inArray(t, s)) {
                      n = n || {};
                      var i = e.Event("select2:" + t, { params: n });
                      r.$element.trigger(i),
                        -1 !== e.inArray(t, o) &&
                          (n.prevented = i.isDefaultPrevented());
                    }
                  });
              }),
              t
            );
          }),
          t.define("select2/translation", ["jquery", "require"], function (e, t) {
            function n(e) {
              this.dict = e || {};
            }
            return (
              (n.prototype.all = function () {
                return this.dict;
              }),
              (n.prototype.get = function (e) {
                return this.dict[e];
              }),
              (n.prototype.extend = function (t) {
                this.dict = e.extend({}, t.all(), this.dict);
              }),
              (n._cache = {}),
              (n.loadPath = function (e) {
                if (!(e in n._cache)) {
                  var i = t(e);
                  n._cache[e] = i;
                }
                return new n(n._cache[e]);
              }),
              n
            );
          }),
          t.define("select2/diacritics", [], function () {
            return {
              "Ⓐ": "A",
              Ａ: "A",
              À: "A",
              Á: "A",
              Â: "A",
              Ầ: "A",
              Ấ: "A",
              Ẫ: "A",
              Ẩ: "A",
              Ã: "A",
              Ā: "A",
              Ă: "A",
              Ằ: "A",
              Ắ: "A",
              Ẵ: "A",
              Ẳ: "A",
              Ȧ: "A",
              Ǡ: "A",
              Ä: "A",
              Ǟ: "A",
              Ả: "A",
              Å: "A",
              Ǻ: "A",
              Ǎ: "A",
              Ȁ: "A",
              Ȃ: "A",
              Ạ: "A",
              Ậ: "A",
              Ặ: "A",
              Ḁ: "A",
              Ą: "A",
              Ⱥ: "A",
              Ɐ: "A",
              Ꜳ: "AA",
              Æ: "AE",
              Ǽ: "AE",
              Ǣ: "AE",
              Ꜵ: "AO",
              Ꜷ: "AU",
              Ꜹ: "AV",
              Ꜻ: "AV",
              Ꜽ: "AY",
              "Ⓑ": "B",
              Ｂ: "B",
              Ḃ: "B",
              Ḅ: "B",
              Ḇ: "B",
              Ƀ: "B",
              Ƃ: "B",
              Ɓ: "B",
              "Ⓒ": "C",
              Ｃ: "C",
              Ć: "C",
              Ĉ: "C",
              Ċ: "C",
              Č: "C",
              Ç: "C",
              Ḉ: "C",
              Ƈ: "C",
              Ȼ: "C",
              Ꜿ: "C",
              "Ⓓ": "D",
              Ｄ: "D",
              Ḋ: "D",
              Ď: "D",
              Ḍ: "D",
              Ḑ: "D",
              Ḓ: "D",
              Ḏ: "D",
              Đ: "D",
              Ƌ: "D",
              Ɗ: "D",
              Ɖ: "D",
              Ꝺ: "D",
              Ǳ: "DZ",
              Ǆ: "DZ",
              ǲ: "Dz",
              ǅ: "Dz",
              "Ⓔ": "E",
              Ｅ: "E",
              È: "E",
              É: "E",
              Ê: "E",
              Ề: "E",
              Ế: "E",
              Ễ: "E",
              Ể: "E",
              Ẽ: "E",
              Ē: "E",
              Ḕ: "E",
              Ḗ: "E",
              Ĕ: "E",
              Ė: "E",
              Ë: "E",
              Ẻ: "E",
              Ě: "E",
              Ȅ: "E",
              Ȇ: "E",
              Ẹ: "E",
              Ệ: "E",
              Ȩ: "E",
              Ḝ: "E",
              Ę: "E",
              Ḙ: "E",
              Ḛ: "E",
              Ɛ: "E",
              Ǝ: "E",
              "Ⓕ": "F",
              Ｆ: "F",
              Ḟ: "F",
              Ƒ: "F",
              Ꝼ: "F",
              "Ⓖ": "G",
              Ｇ: "G",
              Ǵ: "G",
              Ĝ: "G",
              Ḡ: "G",
              Ğ: "G",
              Ġ: "G",
              Ǧ: "G",
              Ģ: "G",
              Ǥ: "G",
              Ɠ: "G",
              Ꞡ: "G",
              Ᵹ: "G",
              Ꝿ: "G",
              "Ⓗ": "H",
              Ｈ: "H",
              Ĥ: "H",
              Ḣ: "H",
              Ḧ: "H",
              Ȟ: "H",
              Ḥ: "H",
              Ḩ: "H",
              Ḫ: "H",
              Ħ: "H",
              Ⱨ: "H",
              Ⱶ: "H",
              Ɥ: "H",
              "Ⓘ": "I",
              Ｉ: "I",
              Ì: "I",
              Í: "I",
              Î: "I",
              Ĩ: "I",
              Ī: "I",
              Ĭ: "I",
              İ: "I",
              Ï: "I",
              Ḯ: "I",
              Ỉ: "I",
              Ǐ: "I",
              Ȉ: "I",
              Ȋ: "I",
              Ị: "I",
              Į: "I",
              Ḭ: "I",
              Ɨ: "I",
              "Ⓙ": "J",
              Ｊ: "J",
              Ĵ: "J",
              Ɉ: "J",
              "Ⓚ": "K",
              Ｋ: "K",
              Ḱ: "K",
              Ǩ: "K",
              Ḳ: "K",
              Ķ: "K",
              Ḵ: "K",
              Ƙ: "K",
              Ⱪ: "K",
              Ꝁ: "K",
              Ꝃ: "K",
              Ꝅ: "K",
              Ꞣ: "K",
              "Ⓛ": "L",
              Ｌ: "L",
              Ŀ: "L",
              Ĺ: "L",
              Ľ: "L",
              Ḷ: "L",
              Ḹ: "L",
              Ļ: "L",
              Ḽ: "L",
              Ḻ: "L",
              Ł: "L",
              Ƚ: "L",
              Ɫ: "L",
              Ⱡ: "L",
              Ꝉ: "L",
              Ꝇ: "L",
              Ꞁ: "L",
              Ǉ: "LJ",
              ǈ: "Lj",
              "Ⓜ": "M",
              Ｍ: "M",
              Ḿ: "M",
              Ṁ: "M",
              Ṃ: "M",
              Ɱ: "M",
              Ɯ: "M",
              "Ⓝ": "N",
              Ｎ: "N",
              Ǹ: "N",
              Ń: "N",
              Ñ: "N",
              Ṅ: "N",
              Ň: "N",
              Ṇ: "N",
              Ņ: "N",
              Ṋ: "N",
              Ṉ: "N",
              Ƞ: "N",
              Ɲ: "N",
              Ꞑ: "N",
              Ꞥ: "N",
              Ǌ: "NJ",
              ǋ: "Nj",
              "Ⓞ": "O",
              Ｏ: "O",
              Ò: "O",
              Ó: "O",
              Ô: "O",
              Ồ: "O",
              Ố: "O",
              Ỗ: "O",
              Ổ: "O",
              Õ: "O",
              Ṍ: "O",
              Ȭ: "O",
              Ṏ: "O",
              Ō: "O",
              Ṑ: "O",
              Ṓ: "O",
              Ŏ: "O",
              Ȯ: "O",
              Ȱ: "O",
              Ö: "O",
              Ȫ: "O",
              Ỏ: "O",
              Ő: "O",
              Ǒ: "O",
              Ȍ: "O",
              Ȏ: "O",
              Ơ: "O",
              Ờ: "O",
              Ớ: "O",
              Ỡ: "O",
              Ở: "O",
              Ợ: "O",
              Ọ: "O",
              Ộ: "O",
              Ǫ: "O",
              Ǭ: "O",
              Ø: "O",
              Ǿ: "O",
              Ɔ: "O",
              Ɵ: "O",
              Ꝋ: "O",
              Ꝍ: "O",
              Ƣ: "OI",
              Ꝏ: "OO",
              Ȣ: "OU",
              "Ⓟ": "P",
              Ｐ: "P",
              Ṕ: "P",
              Ṗ: "P",
              Ƥ: "P",
              Ᵽ: "P",
              Ꝑ: "P",
              Ꝓ: "P",
              Ꝕ: "P",
              "Ⓠ": "Q",
              Ｑ: "Q",
              Ꝗ: "Q",
              Ꝙ: "Q",
              Ɋ: "Q",
              "Ⓡ": "R",
              Ｒ: "R",
              Ŕ: "R",
              Ṙ: "R",
              Ř: "R",
              Ȑ: "R",
              Ȓ: "R",
              Ṛ: "R",
              Ṝ: "R",
              Ŗ: "R",
              Ṟ: "R",
              Ɍ: "R",
              Ɽ: "R",
              Ꝛ: "R",
              Ꞧ: "R",
              Ꞃ: "R",
              "Ⓢ": "S",
              Ｓ: "S",
              ẞ: "S",
              Ś: "S",
              Ṥ: "S",
              Ŝ: "S",
              Ṡ: "S",
              Š: "S",
              Ṧ: "S",
              Ṣ: "S",
              Ṩ: "S",
              Ș: "S",
              Ş: "S",
              Ȿ: "S",
              Ꞩ: "S",
              Ꞅ: "S",
              "Ⓣ": "T",
              Ｔ: "T",
              Ṫ: "T",
              Ť: "T",
              Ṭ: "T",
              Ț: "T",
              Ţ: "T",
              Ṱ: "T",
              Ṯ: "T",
              Ŧ: "T",
              Ƭ: "T",
              Ʈ: "T",
              Ⱦ: "T",
              Ꞇ: "T",
              Ꜩ: "TZ",
              "Ⓤ": "U",
              Ｕ: "U",
              Ù: "U",
              Ú: "U",
              Û: "U",
              Ũ: "U",
              Ṹ: "U",
              Ū: "U",
              Ṻ: "U",
              Ŭ: "U",
              Ü: "U",
              Ǜ: "U",
              Ǘ: "U",
              Ǖ: "U",
              Ǚ: "U",
              Ủ: "U",
              Ů: "U",
              Ű: "U",
              Ǔ: "U",
              Ȕ: "U",
              Ȗ: "U",
              Ư: "U",
              Ừ: "U",
              Ứ: "U",
              Ữ: "U",
              Ử: "U",
              Ự: "U",
              Ụ: "U",
              Ṳ: "U",
              Ų: "U",
              Ṷ: "U",
              Ṵ: "U",
              Ʉ: "U",
              "Ⓥ": "V",
              Ｖ: "V",
              Ṽ: "V",
              Ṿ: "V",
              Ʋ: "V",
              Ꝟ: "V",
              Ʌ: "V",
              Ꝡ: "VY",
              "Ⓦ": "W",
              Ｗ: "W",
              Ẁ: "W",
              Ẃ: "W",
              Ŵ: "W",
              Ẇ: "W",
              Ẅ: "W",
              Ẉ: "W",
              Ⱳ: "W",
              "Ⓧ": "X",
              Ｘ: "X",
              Ẋ: "X",
              Ẍ: "X",
              "Ⓨ": "Y",
              Ｙ: "Y",
              Ỳ: "Y",
              Ý: "Y",
              Ŷ: "Y",
              Ỹ: "Y",
              Ȳ: "Y",
              Ẏ: "Y",
              Ÿ: "Y",
              Ỷ: "Y",
              Ỵ: "Y",
              Ƴ: "Y",
              Ɏ: "Y",
              Ỿ: "Y",
              "Ⓩ": "Z",
              Ｚ: "Z",
              Ź: "Z",
              Ẑ: "Z",
              Ż: "Z",
              Ž: "Z",
              Ẓ: "Z",
              Ẕ: "Z",
              Ƶ: "Z",
              Ȥ: "Z",
              Ɀ: "Z",
              Ⱬ: "Z",
              Ꝣ: "Z",
              "ⓐ": "a",
              ａ: "a",
              ẚ: "a",
              à: "a",
              á: "a",
              â: "a",
              ầ: "a",
              ấ: "a",
              ẫ: "a",
              ẩ: "a",
              ã: "a",
              ā: "a",
              ă: "a",
              ằ: "a",
              ắ: "a",
              ẵ: "a",
              ẳ: "a",
              ȧ: "a",
              ǡ: "a",
              ä: "a",
              ǟ: "a",
              ả: "a",
              å: "a",
              ǻ: "a",
              ǎ: "a",
              ȁ: "a",
              ȃ: "a",
              ạ: "a",
              ậ: "a",
              ặ: "a",
              ḁ: "a",
              ą: "a",
              ⱥ: "a",
              ɐ: "a",
              ꜳ: "aa",
              æ: "ae",
              ǽ: "ae",
              ǣ: "ae",
              ꜵ: "ao",
              ꜷ: "au",
              ꜹ: "av",
              ꜻ: "av",
              ꜽ: "ay",
              "ⓑ": "b",
              ｂ: "b",
              ḃ: "b",
              ḅ: "b",
              ḇ: "b",
              ƀ: "b",
              ƃ: "b",
              ɓ: "b",
              "ⓒ": "c",
              ｃ: "c",
              ć: "c",
              ĉ: "c",
              ċ: "c",
              č: "c",
              ç: "c",
              ḉ: "c",
              ƈ: "c",
              ȼ: "c",
              ꜿ: "c",
              ↄ: "c",
              "ⓓ": "d",
              ｄ: "d",
              ḋ: "d",
              ď: "d",
              ḍ: "d",
              ḑ: "d",
              ḓ: "d",
              ḏ: "d",
              đ: "d",
              ƌ: "d",
              ɖ: "d",
              ɗ: "d",
              ꝺ: "d",
              ǳ: "dz",
              ǆ: "dz",
              "ⓔ": "e",
              ｅ: "e",
              è: "e",
              é: "e",
              ê: "e",
              ề: "e",
              ế: "e",
              ễ: "e",
              ể: "e",
              ẽ: "e",
              ē: "e",
              ḕ: "e",
              ḗ: "e",
              ĕ: "e",
              ė: "e",
              ë: "e",
              ẻ: "e",
              ě: "e",
              ȅ: "e",
              ȇ: "e",
              ẹ: "e",
              ệ: "e",
              ȩ: "e",
              ḝ: "e",
              ę: "e",
              ḙ: "e",
              ḛ: "e",
              ɇ: "e",
              ɛ: "e",
              ǝ: "e",
              "ⓕ": "f",
              ｆ: "f",
              ḟ: "f",
              ƒ: "f",
              ꝼ: "f",
              "ⓖ": "g",
              ｇ: "g",
              ǵ: "g",
              ĝ: "g",
              ḡ: "g",
              ğ: "g",
              ġ: "g",
              ǧ: "g",
              ģ: "g",
              ǥ: "g",
              ɠ: "g",
              ꞡ: "g",
              ᵹ: "g",
              ꝿ: "g",
              "ⓗ": "h",
              ｈ: "h",
              ĥ: "h",
              ḣ: "h",
              ḧ: "h",
              ȟ: "h",
              ḥ: "h",
              ḩ: "h",
              ḫ: "h",
              ẖ: "h",
              ħ: "h",
              ⱨ: "h",
              ⱶ: "h",
              ɥ: "h",
              ƕ: "hv",
              "ⓘ": "i",
              ｉ: "i",
              ì: "i",
              í: "i",
              î: "i",
              ĩ: "i",
              ī: "i",
              ĭ: "i",
              ï: "i",
              ḯ: "i",
              ỉ: "i",
              ǐ: "i",
              ȉ: "i",
              ȋ: "i",
              ị: "i",
              į: "i",
              ḭ: "i",
              ɨ: "i",
              ı: "i",
              "ⓙ": "j",
              ｊ: "j",
              ĵ: "j",
              ǰ: "j",
              ɉ: "j",
              "ⓚ": "k",
              ｋ: "k",
              ḱ: "k",
              ǩ: "k",
              ḳ: "k",
              ķ: "k",
              ḵ: "k",
              ƙ: "k",
              ⱪ: "k",
              ꝁ: "k",
              ꝃ: "k",
              ꝅ: "k",
              ꞣ: "k",
              "ⓛ": "l",
              ｌ: "l",
              ŀ: "l",
              ĺ: "l",
              ľ: "l",
              ḷ: "l",
              ḹ: "l",
              ļ: "l",
              ḽ: "l",
              ḻ: "l",
              ſ: "l",
              ł: "l",
              ƚ: "l",
              ɫ: "l",
              ⱡ: "l",
              ꝉ: "l",
              ꞁ: "l",
              ꝇ: "l",
              ǉ: "lj",
              "ⓜ": "m",
              ｍ: "m",
              ḿ: "m",
              ṁ: "m",
              ṃ: "m",
              ɱ: "m",
              ɯ: "m",
              "ⓝ": "n",
              ｎ: "n",
              ǹ: "n",
              ń: "n",
              ñ: "n",
              ṅ: "n",
              ň: "n",
              ṇ: "n",
              ņ: "n",
              ṋ: "n",
              ṉ: "n",
              ƞ: "n",
              ɲ: "n",
              ŉ: "n",
              ꞑ: "n",
              ꞥ: "n",
              ǌ: "nj",
              "ⓞ": "o",
              ｏ: "o",
              ò: "o",
              ó: "o",
              ô: "o",
              ồ: "o",
              ố: "o",
              ỗ: "o",
              ổ: "o",
              õ: "o",
              ṍ: "o",
              ȭ: "o",
              ṏ: "o",
              ō: "o",
              ṑ: "o",
              ṓ: "o",
              ŏ: "o",
              ȯ: "o",
              ȱ: "o",
              ö: "o",
              ȫ: "o",
              ỏ: "o",
              ő: "o",
              ǒ: "o",
              ȍ: "o",
              ȏ: "o",
              ơ: "o",
              ờ: "o",
              ớ: "o",
              ỡ: "o",
              ở: "o",
              ợ: "o",
              ọ: "o",
              ộ: "o",
              ǫ: "o",
              ǭ: "o",
              ø: "o",
              ǿ: "o",
              ɔ: "o",
              ꝋ: "o",
              ꝍ: "o",
              ɵ: "o",
              ƣ: "oi",
              ȣ: "ou",
              ꝏ: "oo",
              "ⓟ": "p",
              ｐ: "p",
              ṕ: "p",
              ṗ: "p",
              ƥ: "p",
              ᵽ: "p",
              ꝑ: "p",
              ꝓ: "p",
              ꝕ: "p",
              "ⓠ": "q",
              ｑ: "q",
              ɋ: "q",
              ꝗ: "q",
              ꝙ: "q",
              "ⓡ": "r",
              ｒ: "r",
              ŕ: "r",
              ṙ: "r",
              ř: "r",
              ȑ: "r",
              ȓ: "r",
              ṛ: "r",
              ṝ: "r",
              ŗ: "r",
              ṟ: "r",
              ɍ: "r",
              ɽ: "r",
              ꝛ: "r",
              ꞧ: "r",
              ꞃ: "r",
              "ⓢ": "s",
              ｓ: "s",
              ß: "s",
              ś: "s",
              ṥ: "s",
              ŝ: "s",
              ṡ: "s",
              š: "s",
              ṧ: "s",
              ṣ: "s",
              ṩ: "s",
              ș: "s",
              ş: "s",
              ȿ: "s",
              ꞩ: "s",
              ꞅ: "s",
              ẛ: "s",
              "ⓣ": "t",
              ｔ: "t",
              ṫ: "t",
              ẗ: "t",
              ť: "t",
              ṭ: "t",
              ț: "t",
              ţ: "t",
              ṱ: "t",
              ṯ: "t",
              ŧ: "t",
              ƭ: "t",
              ʈ: "t",
              ⱦ: "t",
              ꞇ: "t",
              ꜩ: "tz",
              "ⓤ": "u",
              ｕ: "u",
              ù: "u",
              ú: "u",
              û: "u",
              ũ: "u",
              ṹ: "u",
              ū: "u",
              ṻ: "u",
              ŭ: "u",
              ü: "u",
              ǜ: "u",
              ǘ: "u",
              ǖ: "u",
              ǚ: "u",
              ủ: "u",
              ů: "u",
              ű: "u",
              ǔ: "u",
              ȕ: "u",
              ȗ: "u",
              ư: "u",
              ừ: "u",
              ứ: "u",
              ữ: "u",
              ử: "u",
              ự: "u",
              ụ: "u",
              ṳ: "u",
              ų: "u",
              ṷ: "u",
              ṵ: "u",
              ʉ: "u",
              "ⓥ": "v",
              ｖ: "v",
              ṽ: "v",
              ṿ: "v",
              ʋ: "v",
              ꝟ: "v",
              ʌ: "v",
              ꝡ: "vy",
              "ⓦ": "w",
              ｗ: "w",
              ẁ: "w",
              ẃ: "w",
              ŵ: "w",
              ẇ: "w",
              ẅ: "w",
              ẘ: "w",
              ẉ: "w",
              ⱳ: "w",
              "ⓧ": "x",
              ｘ: "x",
              ẋ: "x",
              ẍ: "x",
              "ⓨ": "y",
              ｙ: "y",
              ỳ: "y",
              ý: "y",
              ŷ: "y",
              ỹ: "y",
              ȳ: "y",
              ẏ: "y",
              ÿ: "y",
              ỷ: "y",
              ẙ: "y",
              ỵ: "y",
              ƴ: "y",
              ɏ: "y",
              ỿ: "y",
              "ⓩ": "z",
              ｚ: "z",
              ź: "z",
              ẑ: "z",
              ż: "z",
              ž: "z",
              ẓ: "z",
              ẕ: "z",
              ƶ: "z",
              ȥ: "z",
              ɀ: "z",
              ⱬ: "z",
              ꝣ: "z",
              Ά: "Α",
              Έ: "Ε",
              Ή: "Η",
              Ί: "Ι",
              Ϊ: "Ι",
              Ό: "Ο",
              Ύ: "Υ",
              Ϋ: "Υ",
              Ώ: "Ω",
              ά: "α",
              έ: "ε",
              ή: "η",
              ί: "ι",
              ϊ: "ι",
              ΐ: "ι",
              ό: "ο",
              ύ: "υ",
              ϋ: "υ",
              ΰ: "υ",
              ω: "ω",
              ς: "σ",
            };
          }),
          t.define("select2/data/base", ["../utils"], function (e) {
            function t(e, n) {
              t.__super__.constructor.call(this);
            }
            return (
              e.Extend(t, e.Observable),
              (t.prototype.current = function (e) {
                throw new Error(
                  "The `current` method must be defined in child classes."
                );
              }),
              (t.prototype.query = function (e, t) {
                throw new Error(
                  "The `query` method must be defined in child classes."
                );
              }),
              (t.prototype.bind = function (e, t) {}),
              (t.prototype.destroy = function () {}),
              (t.prototype.generateResultId = function (t, n) {
                var i = t.id + "-result-";
                return (
                  (i += e.generateChars(4)),
                  null != n.id
                    ? (i += "-" + n.id.toString())
                    : (i += "-" + e.generateChars(4)),
                  i
                );
              }),
              t
            );
          }),
          t.define(
            "select2/data/select",
            ["./base", "../utils", "jquery"],
            function (e, t, n) {
              function i(e, t) {
                (this.$element = e),
                  (this.options = t),
                  i.__super__.constructor.call(this);
              }
              return (
                t.Extend(i, e),
                (i.prototype.current = function (e) {
                  var t = [],
                    i = this;
                  this.$element.find(":selected").each(function () {
                    var e = n(this),
                      r = i.item(e);
                    t.push(r);
                  }),
                    e(t);
                }),
                (i.prototype.select = function (e) {
                  var t = this;
                  if (((e.selected = !0), n(e.element).is("option")))
                    return (
                      (e.element.selected = !0),
                      void this.$element.trigger("change")
                    );
                  if (this.$element.prop("multiple"))
                    this.current(function (i) {
                      var r = [];
                      (e = [e]).push.apply(e, i);
                      for (var s = 0; s < e.length; s++) {
                        var o = e[s].id;
                        -1 === n.inArray(o, r) && r.push(o);
                      }
                      t.$element.val(r), t.$element.trigger("change");
                    });
                  else {
                    var i = e.id;
                    this.$element.val(i), this.$element.trigger("change");
                  }
                }),
                (i.prototype.unselect = function (e) {
                  var t = this;
                  if (this.$element.prop("multiple")) {
                    if (((e.selected = !1), n(e.element).is("option")))
                      return (
                        (e.element.selected = !1),
                        void this.$element.trigger("change")
                      );
                    this.current(function (i) {
                      for (var r = [], s = 0; s < i.length; s++) {
                        var o = i[s].id;
                        o !== e.id && -1 === n.inArray(o, r) && r.push(o);
                      }
                      t.$element.val(r), t.$element.trigger("change");
                    });
                  }
                }),
                (i.prototype.bind = function (e, t) {
                  var n = this;
                  (this.container = e),
                    e.on("select", function (e) {
                      n.select(e.data);
                    }),
                    e.on("unselect", function (e) {
                      n.unselect(e.data);
                    });
                }),
                (i.prototype.destroy = function () {
                  this.$element.find("*").each(function () {
                    n.removeData(this, "data");
                  });
                }),
                (i.prototype.query = function (e, t) {
                  var i = [],
                    r = this;
                  this.$element.children().each(function () {
                    var t = n(this);
                    if (t.is("option") || t.is("optgroup")) {
                      var s = r.item(t),
                        o = r.matches(e, s);
                      null !== o && i.push(o);
                    }
                  }),
                    t({ results: i });
                }),
                (i.prototype.addOptions = function (e) {
                  t.appendMany(this.$element, e);
                }),
                (i.prototype.option = function (e) {
                  var t;
                  e.children
                    ? ((t = document.createElement("optgroup")).label = e.text)
                    : (t = document.createElement("option")).textContent !==
                      undefined
                    ? (t.textContent = e.text)
                    : (t.innerText = e.text),
                    e.id && (t.value = e.id),
                    e.disabled && (t.disabled = !0),
                    e.selected && (t.selected = !0),
                    e.title && (t.title = e.title);
                  var i = n(t),
                    r = this._normalizeItem(e);
                  return (r.element = t), n.data(t, "data", r), i;
                }),
                (i.prototype.item = function (e) {
                  var t = {};
                  if (null != (t = n.data(e[0], "data"))) return t;
                  if (e.is("option"))
                    t = {
                      id: e.val(),
                      text: e.text(),
                      disabled: e.prop("disabled"),
                      selected: e.prop("selected"),
                      title: e.prop("title"),
                    };
                  else if (e.is("optgroup")) {
                    t = {
                      text: e.prop("label"),
                      children: [],
                      title: e.prop("title"),
                    };
                    for (
                      var i = e.children("option"), r = [], s = 0;
                      s < i.length;
                      s++
                    ) {
                      var o = n(i[s]),
                        a = this.item(o);
                      r.push(a);
                    }
                    t.children = r;
                  }
                  return (
                    (t = this._normalizeItem(t)),
                    (t.element = e[0]),
                    n.data(e[0], "data", t),
                    t
                  );
                }),
                (i.prototype._normalizeItem = function (e) {
                  n.isPlainObject(e) || (e = { id: e, text: e });
                  var t = { selected: !1, disabled: !1 };
                  return (
                    null != (e = n.extend({}, { text: "" }, e)).id &&
                      (e.id = e.id.toString()),
                    null != e.text && (e.text = e.text.toString()),
                    null == e._resultId &&
                      e.id &&
                      null != this.container &&
                      (e._resultId = this.generateResultId(this.container, e)),
                    n.extend({}, t, e)
                  );
                }),
                (i.prototype.matches = function (e, t) {
                  return this.options.get("matcher")(e, t);
                }),
                i
              );
            }
          ),
          t.define(
            "select2/data/array",
            ["./select", "../utils", "jquery"],
            function (e, t, n) {
              function i(e, t) {
                var n = t.get("data") || [];
                i.__super__.constructor.call(this, e, t),
                  this.addOptions(this.convertToOptions(n));
              }
              return (
                t.Extend(i, e),
                (i.prototype.select = function (e) {
                  var t = this.$element.find("option").filter(function (t, n) {
                    return n.value == e.id.toString();
                  });
                  0 === t.length && ((t = this.option(e)), this.addOptions(t)),
                    i.__super__.select.call(this, e);
                }),
                (i.prototype.convertToOptions = function (e) {
                  for (
                    var i = this,
                      r = this.$element.find("option"),
                      s = r
                        .map(function () {
                          return i.item(n(this)).id;
                        })
                        .get(),
                      o = [],
                      a = 0;
                    a < e.length;
                    a++
                  ) {
                    var l = this._normalizeItem(e[a]);
                    if (n.inArray(l.id, s) >= 0) {
                      var c = r.filter(
                          (function (e) {
                            return function () {
                              return n(this).val() == e.id;
                            };
                          })(l)
                        ),
                        u = this.item(c),
                        d = n.extend(!0, {}, l, u),
                        p = this.option(d);
                      c.replaceWith(p);
                    } else {
                      var h = this.option(l);
                      if (l.children) {
                        var f = this.convertToOptions(l.children);
                        t.appendMany(h, f);
                      }
                      o.push(h);
                    }
                  }
                  return o;
                }),
                i
              );
            }
          ),
          t.define(
            "select2/data/ajax",
            ["./array", "../utils", "jquery"],
            function (e, t, n) {
              function i(e, t) {
                (this.ajaxOptions = this._applyDefaults(t.get("ajax"))),
                  null != this.ajaxOptions.processResults &&
                    (this.processResults = this.ajaxOptions.processResults),
                  i.__super__.constructor.call(this, e, t);
              }
              return (
                t.Extend(i, e),
                (i.prototype._applyDefaults = function (e) {
                  var t = {
                    data: function (e) {
                      return n.extend({}, e, { q: e.term });
                    },
                    transport: function (e, t, i) {
                      var r = n.ajax(e);
                      return r.then(t), r.fail(i), r;
                    },
                  };
                  return n.extend({}, t, e, !0);
                }),
                (i.prototype.processResults = function (e) {
                  return e;
                }),
                (i.prototype.query = function (e, t) {
                  function i() {
                    var i = s.transport(
                      s,
                      function (i) {
                        var s = r.processResults(i, e);
                        r.options.get("debug") &&
                          window.console &&
                          console.error &&
                          ((s && s.results && n.isArray(s.results)) ||
                            console.error(
                              "Select2: The AJAX results did not return an array in the `results` key of the response."
                            )),
                          t(s);
                      },
                      function () {
                        (i.status && "0" === i.status) ||
                          r.trigger("results:message", {
                            message: "errorLoading",
                          });
                      }
                    );
                    r._request = i;
                  }
                  var r = this;
                  null != this._request &&
                    (n.isFunction(this._request.abort) && this._request.abort(),
                    (this._request = null));
                  var s = n.extend({ type: "GET" }, this.ajaxOptions);
                  "function" == typeof s.url &&
                    (s.url = s.url.call(this.$element, e)),
                    "function" == typeof s.data &&
                      (s.data = s.data.call(this.$element, e)),
                    this.ajaxOptions.delay && null != e.term
                      ? (this._queryTimeout &&
                          window.clearTimeout(this._queryTimeout),
                        (this._queryTimeout = window.setTimeout(
                          i,
                          this.ajaxOptions.delay
                        )))
                      : i();
                }),
                i
              );
            }
          ),
          t.define("select2/data/tags", ["jquery"], function (e) {
            function t(t, n, i) {
              var r = i.get("tags"),
                s = i.get("createTag");
              s !== undefined && (this.createTag = s);
              var o = i.get("insertTag");
              if (
                (o !== undefined && (this.insertTag = o),
                t.call(this, n, i),
                e.isArray(r))
              )
                for (var a = 0; a < r.length; a++) {
                  var l = r[a],
                    c = this._normalizeItem(l),
                    u = this.option(c);
                  this.$element.append(u);
                }
            }
            return (
              (t.prototype.query = function (e, t, n) {
                function i(e, s) {
                  for (var o = e.results, a = 0; a < o.length; a++) {
                    var l = o[a],
                      c = null != l.children && !i({ results: l.children }, !0);
                    if (l.text === t.term || c)
                      return !s && ((e.data = o), void n(e));
                  }
                  if (s) return !0;
                  var u = r.createTag(t);
                  if (null != u) {
                    var d = r.option(u);
                    d.attr("data-select2-tag", !0),
                      r.addOptions([d]),
                      r.insertTag(o, u);
                  }
                  (e.results = o), n(e);
                }
                var r = this;
                this._removeOldTags(),
                  null != t.term && null == t.page
                    ? e.call(this, t, i)
                    : e.call(this, t, n);
              }),
              (t.prototype.createTag = function (t, n) {
                var i = e.trim(n.term);
                return "" === i ? null : { id: i, text: i };
              }),
              (t.prototype.insertTag = function (e, t, n) {
                t.unshift(n);
              }),
              (t.prototype._removeOldTags = function (t) {
                this._lastTag;
                this.$element.find("option[data-select2-tag]").each(function () {
                  this.selected || e(this).remove();
                });
              }),
              t
            );
          }),
          t.define("select2/data/tokenizer", ["jquery"], function (e) {
            function t(e, t, n) {
              var i = n.get("tokenizer");
              i !== undefined && (this.tokenizer = i), e.call(this, t, n);
            }
            return (
              (t.prototype.bind = function (e, t, n) {
                e.call(this, t, n),
                  (this.$search =
                    t.dropdown.$search ||
                    t.selection.$search ||
                    n.find(".select2-search__field"));
              }),
              (t.prototype.query = function (t, n, i) {
                function r(e) {
                  s.trigger("select", { data: e });
                }
                var s = this;
                n.term = n.term || "";
                var o = this.tokenizer(n, this.options, function (t) {
                  var n = s._normalizeItem(t);
                  if (
                    !s.$element.find("option").filter(function () {
                      return e(this).val() === n.id;
                    }).length
                  ) {
                    var i = s.option(n);
                    i.attr("data-select2-tag", !0),
                      s._removeOldTags(),
                      s.addOptions([i]);
                  }
                  r(n);
                });
                o.term !== n.term &&
                  (this.$search.length &&
                    (this.$search.val(o.term), this.$search.focus()),
                  (n.term = o.term)),
                  t.call(this, n, i);
              }),
              (t.prototype.tokenizer = function (t, n, i, r) {
                for (
                  var s = i.get("tokenSeparators") || [],
                    o = n.term,
                    a = 0,
                    l =
                      this.createTag ||
                      function (e) {
                        return { id: e.term, text: e.term };
                      };
                  a < o.length;
  
                ) {
                  var c = o[a];
                  if (-1 !== e.inArray(c, s)) {
                    var u = o.substr(0, a),
                      d = l(e.extend({}, n, { term: u }));
                    null != d
                      ? (r(d), (o = o.substr(a + 1) || ""), (a = 0))
                      : a++;
                  } else a++;
                }
                return { term: o };
              }),
              t
            );
          }),
          t.define("select2/data/minimumInputLength", [], function () {
            function e(e, t, n) {
              (this.minimumInputLength = n.get("minimumInputLength")),
                e.call(this, t, n);
            }
            return (
              (e.prototype.query = function (e, t, n) {
                (t.term = t.term || ""),
                  t.term.length < this.minimumInputLength
                    ? this.trigger("results:message", {
                        message: "inputTooShort",
                        args: {
                          minimum: this.minimumInputLength,
                          input: t.term,
                          params: t,
                        },
                      })
                    : e.call(this, t, n);
              }),
              e
            );
          }),
          t.define("select2/data/maximumInputLength", [], function () {
            function e(e, t, n) {
              (this.maximumInputLength = n.get("maximumInputLength")),
                e.call(this, t, n);
            }
            return (
              (e.prototype.query = function (e, t, n) {
                (t.term = t.term || ""),
                  this.maximumInputLength > 0 &&
                  t.term.length > this.maximumInputLength
                    ? this.trigger("results:message", {
                        message: "inputTooLong",
                        args: {
                          maximum: this.maximumInputLength,
                          input: t.term,
                          params: t,
                        },
                      })
                    : e.call(this, t, n);
              }),
              e
            );
          }),
          t.define("select2/data/maximumSelectionLength", [], function () {
            function e(e, t, n) {
              (this.maximumSelectionLength = n.get("maximumSelectionLength")),
                e.call(this, t, n);
            }
            return (
              (e.prototype.query = function (e, t, n) {
                var i = this;
                this.current(function (r) {
                  var s = null != r ? r.length : 0;
                  i.maximumSelectionLength > 0 && s >= i.maximumSelectionLength
                    ? i.trigger("results:message", {
                        message: "maximumSelected",
                        args: { maximum: i.maximumSelectionLength },
                      })
                    : e.call(i, t, n);
                });
              }),
              e
            );
          }),
          t.define("select2/dropdown", ["jquery", "./utils"], function (e, t) {
            function n(e, t) {
              (this.$element = e),
                (this.options = t),
                n.__super__.constructor.call(this);
            }
            return (
              t.Extend(n, t.Observable),
              (n.prototype.render = function () {
                var t = e(
                  '<span class="select2-dropdown"><span class="select2-results"></span></span>'
                );
                return (
                  t.attr("dir", this.options.get("dir")), (this.$dropdown = t), t
                );
              }),
              (n.prototype.bind = function () {}),
              (n.prototype.position = function (e, t) {}),
              (n.prototype.destroy = function () {
                this.$dropdown.remove();
              }),
              n
            );
          }),
          t.define(
            "select2/dropdown/search",
            ["jquery", "../utils"],
            function (e, t) {
              function n() {}
              return (
                (n.prototype.render = function (t) {
                  var n = t.call(this),
                    i = e(
                      '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>'
                    );
                  return (
                    (this.$searchContainer = i),
                    (this.$search = i.find("input")),
                    n.prepend(i),
                    n
                  );
                }),
                (n.prototype.bind = function (t, n, i) {
                  var r = this;
                  t.call(this, n, i),
                    this.$search.on("keydown", function (e) {
                      r.trigger("keypress", e),
                        (r._keyUpPrevented = e.isDefaultPrevented());
                    }),
                    this.$search.on("input", function (t) {
                      e(this).off("keyup");
                    }),
                    this.$search.on("keyup input", function (e) {
                      r.handleSearch(e);
                    }),
                    n.on("open", function () {
                      r.$search.attr("tabindex", 0),
                        r.$search.focus(),
                        window.setTimeout(function () {
                          r.$search.focus();
                        }, 0);
                    }),
                    n.on("close", function () {
                      r.$search.attr("tabindex", -1), r.$search.val("");
                    }),
                    n.on("focus", function () {
                      n.isOpen() && r.$search.focus();
                    }),
                    n.on("results:all", function (e) {
                      (null != e.query.term && "" !== e.query.term) ||
                        (r.showSearch(e)
                          ? r.$searchContainer.removeClass("select2-search--hide")
                          : r.$searchContainer.addClass("select2-search--hide"));
                    });
                }),
                (n.prototype.handleSearch = function (e) {
                  if (!this._keyUpPrevented) {
                    var t = this.$search.val();
                    this.trigger("query", { term: t });
                  }
                  this._keyUpPrevented = !1;
                }),
                (n.prototype.showSearch = function (e, t) {
                  return !0;
                }),
                n
              );
            }
          ),
          t.define("select2/dropdown/hidePlaceholder", [], function () {
            function e(e, t, n, i) {
              (this.placeholder = this.normalizePlaceholder(
                n.get("placeholder")
              )),
                e.call(this, t, n, i);
            }
            return (
              (e.prototype.append = function (e, t) {
                (t.results = this.removePlaceholder(t.results)), e.call(this, t);
              }),
              (e.prototype.normalizePlaceholder = function (e, t) {
                return "string" == typeof t && (t = { id: "", text: t }), t;
              }),
              (e.prototype.removePlaceholder = function (e, t) {
                for (var n = t.slice(0), i = t.length - 1; i >= 0; i--) {
                  var r = t[i];
                  this.placeholder.id === r.id && n.splice(i, 1);
                }
                return n;
              }),
              e
            );
          }),
          t.define("select2/dropdown/infiniteScroll", ["jquery"], function (e) {
            function t(e, t, n, i) {
              (this.lastParams = {}),
                e.call(this, t, n, i),
                (this.$loadingMore = this.createLoadingMore()),
                (this.loading = !1);
            }
            return (
              (t.prototype.append = function (e, t) {
                this.$loadingMore.remove(),
                  (this.loading = !1),
                  e.call(this, t),
                  this.showLoadingMore(t) &&
                    this.$results.append(this.$loadingMore);
              }),
              (t.prototype.bind = function (t, n, i) {
                var r = this;
                t.call(this, n, i),
                  n.on("query", function (e) {
                    (r.lastParams = e), (r.loading = !0);
                  }),
                  n.on("query:append", function (e) {
                    (r.lastParams = e), (r.loading = !0);
                  }),
                  this.$results.on("scroll", function () {
                    var t = e.contains(
                      document.documentElement,
                      r.$loadingMore[0]
                    );
                    !r.loading &&
                      t &&
                      r.$results.offset().top + r.$results.outerHeight(!1) + 50 >=
                        r.$loadingMore.offset().top +
                          r.$loadingMore.outerHeight(!1) &&
                      r.loadMore();
                  });
              }),
              (t.prototype.loadMore = function () {
                this.loading = !0;
                var t = e.extend({}, { page: 1 }, this.lastParams);
                t.page++, this.trigger("query:append", t);
              }),
              (t.prototype.showLoadingMore = function (e, t) {
                return t.pagination && t.pagination.more;
              }),
              (t.prototype.createLoadingMore = function () {
                var t = e(
                    '<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'
                  ),
                  n = this.options.get("translations").get("loadingMore");
                return t.html(n(this.lastParams)), t;
              }),
              t
            );
          }),
          t.define(
            "select2/dropdown/attachBody",
            ["jquery", "../utils"],
            function (e, t) {
              function n(t, n, i) {
                (this.$dropdownParent =
                  i.get("dropdownParent") || e(document.body)),
                  t.call(this, n, i);
              }
              return (
                (n.prototype.bind = function (e, t, n) {
                  var i = this,
                    r = !1;
                  e.call(this, t, n),
                    t.on("open", function () {
                      i._showDropdown(),
                        i._attachPositioningHandler(t),
                        r ||
                          ((r = !0),
                          t.on("results:all", function () {
                            i._positionDropdown(), i._resizeDropdown();
                          }),
                          t.on("results:append", function () {
                            i._positionDropdown(), i._resizeDropdown();
                          }));
                    }),
                    t.on("close", function () {
                      i._hideDropdown(), i._detachPositioningHandler(t);
                    }),
                    this.$dropdownContainer.on("mousedown", function (e) {
                      e.stopPropagation();
                    });
                }),
                (n.prototype.destroy = function (e) {
                  e.call(this), this.$dropdownContainer.remove();
                }),
                (n.prototype.position = function (e, t, n) {
                  t.attr("class", n.attr("class")),
                    t.removeClass("select2"),
                    t.addClass("select2-container--open"),
                    t.css({ position: "absolute", top: -999999 }),
                    (this.$container = n);
                }),
                (n.prototype.render = function (t) {
                  var n = e("<span></span>"),
                    i = t.call(this);
                  return n.append(i), (this.$dropdownContainer = n), n;
                }),
                (n.prototype._hideDropdown = function (e) {
                  this.$dropdownContainer.detach();
                }),
                (n.prototype._attachPositioningHandler = function (n, i) {
                  var r = this,
                    s = "scroll.select2." + i.id,
                    o = "resize.select2." + i.id,
                    a = "orientationchange.select2." + i.id,
                    l = this.$container.parents().filter(t.hasScroll);
                  l.each(function () {
                    e(this).data("select2-scroll-position", {
                      x: e(this).scrollLeft(),
                      y: e(this).scrollTop(),
                    });
                  }),
                    l.on(s, function (t) {
                      var n = e(this).data("select2-scroll-position");
                      e(this).scrollTop(n.y);
                    }),
                    e(window).on(s + " " + o + " " + a, function (e) {
                      r._positionDropdown(), r._resizeDropdown();
                    });
                }),
                (n.prototype._detachPositioningHandler = function (n, i) {
                  var r = "scroll.select2." + i.id,
                    s = "resize.select2." + i.id,
                    o = "orientationchange.select2." + i.id;
                  this.$container.parents().filter(t.hasScroll).off(r),
                    e(window).off(r + " " + s + " " + o);
                }),
                (n.prototype._positionDropdown = function () {
                  var t = e(window),
                    n = this.$dropdown.hasClass("select2-dropdown--above"),
                    i = this.$dropdown.hasClass("select2-dropdown--below"),
                    r = null,
                    s = this.$container.offset();
                  s.bottom = s.top + this.$container.outerHeight(!1);
                  var o = { height: this.$container.outerHeight(!1) };
                  (o.top = s.top), (o.bottom = s.top + o.height);
                  var a = { height: this.$dropdown.outerHeight(!1) },
                    l = {
                      top: t.scrollTop(),
                      bottom: t.scrollTop() + t.height(),
                    },
                    c = l.top < s.top - a.height,
                    u = l.bottom > s.bottom + a.height,
                    d = { left: s.left, top: o.bottom },
                    p = this.$dropdownParent;
                  "static" === p.css("position") && (p = p.offsetParent());
                  var h = p.offset();
                  (d.top -= h.top),
                    (d.left -= h.left),
                    n || i || (r = "below"),
                    u || !c || n ? !c && u && n && (r = "below") : (r = "above"),
                    ("above" == r || (n && "below" !== r)) &&
                      (d.top = o.top - h.top - a.height),
                    null != r &&
                      (this.$dropdown
                        .removeClass(
                          "select2-dropdown--below select2-dropdown--above"
                        )
                        .addClass("select2-dropdown--" + r),
                      this.$container
                        .removeClass(
                          "select2-container--below select2-container--above"
                        )
                        .addClass("select2-container--" + r)),
                    this.$dropdownContainer.css(d);
                }),
                (n.prototype._resizeDropdown = function () {
                  var e = { width: this.$container.outerWidth(!1) + "px" };
                  this.options.get("dropdownAutoWidth") &&
                    ((e.minWidth = e.width),
                    (e.position = "relative"),
                    (e.width = "auto")),
                    this.$dropdown.css(e);
                }),
                (n.prototype._showDropdown = function (e) {
                  this.$dropdownContainer.appendTo(this.$dropdownParent),
                    this._positionDropdown(),
                    this._resizeDropdown();
                }),
                n
              );
            }
          ),
          t.define("select2/dropdown/minimumResultsForSearch", [], function () {
            function e(t) {
              for (var n = 0, i = 0; i < t.length; i++) {
                var r = t[i];
                r.children ? (n += e(r.children)) : n++;
              }
              return n;
            }
            function t(e, t, n, i) {
              (this.minimumResultsForSearch = n.get("minimumResultsForSearch")),
                this.minimumResultsForSearch < 0 &&
                  (this.minimumResultsForSearch = Infinity),
                e.call(this, t, n, i);
            }
            return (
              (t.prototype.showSearch = function (t, n) {
                return (
                  !(e(n.data.results) < this.minimumResultsForSearch) &&
                  t.call(this, n)
                );
              }),
              t
            );
          }),
          t.define("select2/dropdown/selectOnClose", [], function () {
            function e() {}
            return (
              (e.prototype.bind = function (e, t, n) {
                var i = this;
                e.call(this, t, n),
                  t.on("close", function (e) {
                    i._handleSelectOnClose(e);
                  });
              }),
              (e.prototype._handleSelectOnClose = function (e, t) {
                if (t && null != t.originalSelect2Event) {
                  var n = t.originalSelect2Event;
                  if ("select" === n._type || "unselect" === n._type) return;
                }
                var i = this.getHighlightedResults();
                if (!(i.length < 1)) {
                  var r = i.data("data");
                  (null != r.element && r.element.selected) ||
                    (null == r.element && r.selected) ||
                    this.trigger("select", { data: r });
                }
              }),
              e
            );
          }),
          t.define("select2/dropdown/closeOnSelect", [], function () {
            function e() {}
            return (
              (e.prototype.bind = function (e, t, n) {
                var i = this;
                e.call(this, t, n),
                  t.on("select", function (e) {
                    i._selectTriggered(e);
                  }),
                  t.on("unselect", function (e) {
                    i._selectTriggered(e);
                  });
              }),
              (e.prototype._selectTriggered = function (e, t) {
                var n = t.originalEvent;
                (n && n.ctrlKey) ||
                  this.trigger("close", {
                    originalEvent: n,
                    originalSelect2Event: t,
                  });
              }),
              e
            );
          }),
          t.define("select2/i18n/en", [], function () {
            return {
              errorLoading: function () {
                return "The results could not be loaded.";
              },
              inputTooLong: function (e) {
                var t = e.input.length - e.maximum,
                  n = "Please delete " + t + " character";
                return 1 != t && (n += "s"), n;
              },
              inputTooShort: function (e) {
                return (
                  "Please enter " +
                  (e.minimum - e.input.length) +
                  " or more characters"
                );
              },
              loadingMore: function () {
                return "Loading more results…";
              },
              maximumSelected: function (e) {
                var t = "You can only select " + e.maximum + " item";
                return 1 != e.maximum && (t += "s"), t;
              },
              noResults: function () {
                return "No results found";
              },
              searching: function () {
                return "Searching…";
              },
            };
          }),
          t.define(
            "select2/defaults",
            [
              "jquery",
              "require",
              "./results",
              "./selection/single",
              "./selection/multiple",
              "./selection/placeholder",
              "./selection/allowClear",
              "./selection/search",
              "./selection/eventRelay",
              "./utils",
              "./translation",
              "./diacritics",
              "./data/select",
              "./data/array",
              "./data/ajax",
              "./data/tags",
              "./data/tokenizer",
              "./data/minimumInputLength",
              "./data/maximumInputLength",
              "./data/maximumSelectionLength",
              "./dropdown",
              "./dropdown/search",
              "./dropdown/hidePlaceholder",
              "./dropdown/infiniteScroll",
              "./dropdown/attachBody",
              "./dropdown/minimumResultsForSearch",
              "./dropdown/selectOnClose",
              "./dropdown/closeOnSelect",
              "./i18n/en",
            ],
            function (
              e,
              t,
              n,
              i,
              r,
              s,
              o,
              a,
              l,
              c,
              u,
              d,
              p,
              h,
              f,
              g,
              m,
              v,
              y,
              _,
              $,
              w,
              b,
              A,
              x,
              E,
              C,
              O,
              S
            ) {
              function T() {
                this.reset();
              }
              return (
                (T.prototype.apply = function (d) {
                  if (
                    null == (d = e.extend(!0, {}, this.defaults, d)).dataAdapter
                  ) {
                    if (
                      (null != d.ajax
                        ? (d.dataAdapter = f)
                        : null != d.data
                        ? (d.dataAdapter = h)
                        : (d.dataAdapter = p),
                      d.minimumInputLength > 0 &&
                        (d.dataAdapter = c.Decorate(d.dataAdapter, v)),
                      d.maximumInputLength > 0 &&
                        (d.dataAdapter = c.Decorate(d.dataAdapter, y)),
                      d.maximumSelectionLength > 0 &&
                        (d.dataAdapter = c.Decorate(d.dataAdapter, _)),
                      d.tags && (d.dataAdapter = c.Decorate(d.dataAdapter, g)),
                      (null == d.tokenSeparators && null == d.tokenizer) ||
                        (d.dataAdapter = c.Decorate(d.dataAdapter, m)),
                      null != d.query)
                    ) {
                      var S = t(d.amdBase + "compat/query");
                      d.dataAdapter = c.Decorate(d.dataAdapter, S);
                    }
                    if (null != d.initSelection) {
                      var T = t(d.amdBase + "compat/initSelection");
                      d.dataAdapter = c.Decorate(d.dataAdapter, T);
                    }
                  }
                  if (
                    (null == d.resultsAdapter &&
                      ((d.resultsAdapter = n),
                      null != d.ajax &&
                        (d.resultsAdapter = c.Decorate(d.resultsAdapter, A)),
                      null != d.placeholder &&
                        (d.resultsAdapter = c.Decorate(d.resultsAdapter, b)),
                      d.selectOnClose &&
                        (d.resultsAdapter = c.Decorate(d.resultsAdapter, C))),
                    null == d.dropdownAdapter)
                  ) {
                    if (d.multiple) d.dropdownAdapter = $;
                    else {
                      var D = c.Decorate($, w);
                      d.dropdownAdapter = D;
                    }
                    if (
                      (0 !== d.minimumResultsForSearch &&
                        (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, E)),
                      d.closeOnSelect &&
                        (d.dropdownAdapter = c.Decorate(d.dropdownAdapter, O)),
                      null != d.dropdownCssClass ||
                        null != d.dropdownCss ||
                        null != d.adaptDropdownCssClass)
                    ) {
                      var q = t(d.amdBase + "compat/dropdownCss");
                      d.dropdownAdapter = c.Decorate(d.dropdownAdapter, q);
                    }
                    d.dropdownAdapter = c.Decorate(d.dropdownAdapter, x);
                  }
                  if (null == d.selectionAdapter) {
                    if (
                      (d.multiple
                        ? (d.selectionAdapter = r)
                        : (d.selectionAdapter = i),
                      null != d.placeholder &&
                        (d.selectionAdapter = c.Decorate(d.selectionAdapter, s)),
                      d.allowClear &&
                        (d.selectionAdapter = c.Decorate(d.selectionAdapter, o)),
                      d.multiple &&
                        (d.selectionAdapter = c.Decorate(d.selectionAdapter, a)),
                      null != d.containerCssClass ||
                        null != d.containerCss ||
                        null != d.adaptContainerCssClass)
                    ) {
                      var L = t(d.amdBase + "compat/containerCss");
                      d.selectionAdapter = c.Decorate(d.selectionAdapter, L);
                    }
                    d.selectionAdapter = c.Decorate(d.selectionAdapter, l);
                  }
                  if ("string" == typeof d.language)
                    if (d.language.indexOf("-") > 0) {
                      var j = d.language.split("-")[0];
                      d.language = [d.language, j];
                    } else d.language = [d.language];
                  if (e.isArray(d.language)) {
                    var P = new u();
                    d.language.push("en");
                    for (var k = d.language, I = 0; I < k.length; I++) {
                      var R = k[I],
                        M = {};
                      try {
                        M = u.loadPath(R);
                      } catch (z) {
                        try {
                          (R = this.defaults.amdLanguageBase + R),
                            (M = u.loadPath(R));
                        } catch (N) {
                          d.debug &&
                            window.console &&
                            console.warn &&
                            console.warn(
                              'Select2: The language file for "' +
                                R +
                                '" could not be automatically loaded. A fallback will be used instead.'
                            );
                          continue;
                        }
                      }
                      P.extend(M);
                    }
                    d.translations = P;
                  } else {
                    var U = u.loadPath(this.defaults.amdLanguageBase + "en"),
                      H = new u(d.language);
                    H.extend(U), (d.translations = H);
                  }
                  return d;
                }),
                (T.prototype.reset = function () {
                  function t(e) {
                    return e.replace(/[^\u0000-\u007E]/g, function (e) {
                      return d[e] || e;
                    });
                  }
                  function n(i, r) {
                    if ("" === e.trim(i.term)) return r;
                    if (r.children && r.children.length > 0) {
                      for (
                        var s = e.extend(!0, {}, r), o = r.children.length - 1;
                        o >= 0;
                        o--
                      )
                        null == n(i, r.children[o]) && s.children.splice(o, 1);
                      return s.children.length > 0 ? s : n(i, s);
                    }
                    var a = t(r.text).toUpperCase(),
                      l = t(i.term).toUpperCase();
                    return a.indexOf(l) > -1 ? r : null;
                  }
                  this.defaults = {
                    amdBase: "./",
                    amdLanguageBase: "./i18n/",
                    closeOnSelect: !0,
                    debug: !1,
                    dropdownAutoWidth: !1,
                    escapeMarkup: c.escapeMarkup,
                    language: S,
                    matcher: n,
                    minimumInputLength: 0,
                    maximumInputLength: 0,
                    maximumSelectionLength: 0,
                    minimumResultsForSearch: 0,
                    selectOnClose: !1,
                    sorter: function (e) {
                      return e;
                    },
                    templateResult: function (e) {
                      return e.text;
                    },
                    templateSelection: function (e) {
                      return e.text;
                    },
                    theme: "default",
                    width: "resolve",
                  };
                }),
                (T.prototype.set = function (t, n) {
                  var i = {};
                  i[e.camelCase(t)] = n;
                  var r = c._convertData(i);
                  e.extend(this.defaults, r);
                }),
                new T()
              );
            }
          ),
          t.define(
            "select2/options",
            ["require", "jquery", "./defaults", "./utils"],
            function (e, t, n, i) {
              function r(t, r) {
                if (
                  ((this.options = t),
                  null != r && this.fromElement(r),
                  (this.options = n.apply(this.options)),
                  r && r.is("input"))
                ) {
                  var s = e(this.get("amdBase") + "compat/inputData");
                  this.options.dataAdapter = i.Decorate(
                    this.options.dataAdapter,
                    s
                  );
                }
              }
              return (
                (r.prototype.fromElement = function (e) {
                  var n = ["select2"];
                  null == this.options.multiple &&
                    (this.options.multiple = e.prop("multiple")),
                    null == this.options.disabled &&
                      (this.options.disabled = e.prop("disabled")),
                    null == this.options.language &&
                      (e.prop("lang")
                        ? (this.options.language = e.prop("lang").toLowerCase())
                        : e.closest("[lang]").prop("lang") &&
                          (this.options.language = e
                            .closest("[lang]")
                            .prop("lang"))),
                    null == this.options.dir &&
                      (e.prop("dir")
                        ? (this.options.dir = e.prop("dir"))
                        : e.closest("[dir]").prop("dir")
                        ? (this.options.dir = e.closest("[dir]").prop("dir"))
                        : (this.options.dir = "ltr")),
                    e.prop("disabled", this.options.disabled),
                    e.prop("multiple", this.options.multiple),
                    e.data("select2Tags") &&
                      (this.options.debug &&
                        window.console &&
                        console.warn &&
                        console.warn(
                          'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                        ),
                      e.data("data", e.data("select2Tags")),
                      e.data("tags", !0)),
                    e.data("ajaxUrl") &&
                      (this.options.debug &&
                        window.console &&
                        console.warn &&
                        console.warn(
                          "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."
                        ),
                      e.attr("ajax--url", e.data("ajaxUrl")),
                      e.data("ajax--url", e.data("ajaxUrl")));
                  var r = {};
                  r =
                    t.fn.jquery &&
                    "1." == t.fn.jquery.substr(0, 2) &&
                    e[0].dataset
                      ? t.extend(!0, {}, e[0].dataset, e.data())
                      : e.data();
                  var s = t.extend(!0, {}, r);
                  s = i._convertData(s);
                  for (var o in s)
                    t.inArray(o, n) > -1 ||
                      (t.isPlainObject(this.options[o])
                        ? t.extend(this.options[o], s[o])
                        : (this.options[o] = s[o]));
                  return this;
                }),
                (r.prototype.get = function (e) {
                  return this.options[e];
                }),
                (r.prototype.set = function (e, t) {
                  this.options[e] = t;
                }),
                r
              );
            }
          ),
          t.define(
            "select2/core",
            ["jquery", "./options", "./utils", "./keys"],
            function (e, t, n, i) {
              var r = function (e, n) {
                null != e.data("select2") && e.data("select2").destroy(),
                  (this.$element = e),
                  (this.id = this._generateId(e)),
                  (n = n || {}),
                  (this.options = new t(n, e)),
                  r.__super__.constructor.call(this);
                var i = e.attr("tabindex") || 0;
                e.data("old-tabindex", i), e.attr("tabindex", "-1");
                var s = this.options.get("dataAdapter");
                this.dataAdapter = new s(e, this.options);
                var o = this.render();
                this._placeContainer(o);
                var a = this.options.get("selectionAdapter");
                (this.selection = new a(e, this.options)),
                  (this.$selection = this.selection.render()),
                  this.selection.position(this.$selection, o);
                var l = this.options.get("dropdownAdapter");
                (this.dropdown = new l(e, this.options)),
                  (this.$dropdown = this.dropdown.render()),
                  this.dropdown.position(this.$dropdown, o);
                var c = this.options.get("resultsAdapter");
                (this.results = new c(e, this.options, this.dataAdapter)),
                  (this.$results = this.results.render()),
                  this.results.position(this.$results, this.$dropdown);
                var u = this;
                this._bindAdapters(),
                  this._registerDomEvents(),
                  this._registerDataEvents(),
                  this._registerSelectionEvents(),
                  this._registerDropdownEvents(),
                  this._registerResultsEvents(),
                  this._registerEvents(),
                  this.dataAdapter.current(function (e) {
                    u.trigger("selection:update", { data: e });
                  }),
                  e.addClass("select2-hidden-accessible"),
                  e.attr("aria-hidden", "true"),
                  this._syncAttributes(),
                  e.data("select2", this);
              };
              return (
                n.Extend(r, n.Observable),
                (r.prototype._generateId = function (e) {
                  var t = "";
                  return (
                    (t =
                      null != e.attr("id")
                        ? e.attr("id")
                        : null != e.attr("name")
                        ? e.attr("name") + "-" + n.generateChars(2)
                        : n.generateChars(4)),
                    (t = t.replace(/(:|\.|\[|\]|,)/g, "")),
                    (t = "select2-" + t)
                  );
                }),
                (r.prototype._placeContainer = function (e) {
                  e.insertAfter(this.$element);
                  var t = this._resolveWidth(
                    this.$element,
                    this.options.get("width")
                  );
                  null != t && e.css("width", t);
                }),
                (r.prototype._resolveWidth = function (e, t) {
                  var n =
                    /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                  if ("resolve" == t) {
                    var i = this._resolveWidth(e, "style");
                    return null != i ? i : this._resolveWidth(e, "element");
                  }
                  if ("element" == t) {
                    var r = e.outerWidth(!1);
                    return r <= 0 ? "auto" : r + "px";
                  }
                  if ("style" == t) {
                    var s = e.attr("style");
                    if ("string" != typeof s) return null;
                    for (
                      var o = s.split(";"), a = 0, l = o.length;
                      a < l;
                      a += 1
                    ) {
                      var c = o[a].replace(/\s/g, "").match(n);
                      if (null !== c && c.length >= 1) return c[1];
                    }
                    return null;
                  }
                  return t;
                }),
                (r.prototype._bindAdapters = function () {
                  this.dataAdapter.bind(this, this.$container),
                    this.selection.bind(this, this.$container),
                    this.dropdown.bind(this, this.$container),
                    this.results.bind(this, this.$container);
                }),
                (r.prototype._registerDomEvents = function () {
                  var t = this;
                  this.$element.on("change.select2", function () {
                    t.dataAdapter.current(function (e) {
                      t.trigger("selection:update", { data: e });
                    });
                  }),
                    this.$element.on("focus.select2", function (e) {
                      t.trigger("focus", e);
                    }),
                    (this._syncA = n.bind(this._syncAttributes, this)),
                    (this._syncS = n.bind(this._syncSubtree, this)),
                    this.$element[0].attachEvent &&
                      this.$element[0].attachEvent(
                        "onpropertychange",
                        this._syncA
                      );
                  var i =
                    window.MutationObserver ||
                    window.WebKitMutationObserver ||
                    window.MozMutationObserver;
                  null != i
                    ? ((this._observer = new i(function (n) {
                        e.each(n, t._syncA), e.each(n, t._syncS);
                      })),
                      this._observer.observe(this.$element[0], {
                        attributes: !0,
                        childList: !0,
                        subtree: !1,
                      }))
                    : this.$element[0].addEventListener &&
                      (this.$element[0].addEventListener(
                        "DOMAttrModified",
                        t._syncA,
                        !1
                      ),
                      this.$element[0].addEventListener(
                        "DOMNodeInserted",
                        t._syncS,
                        !1
                      ),
                      this.$element[0].addEventListener(
                        "DOMNodeRemoved",
                        t._syncS,
                        !1
                      ));
                }),
                (r.prototype._registerDataEvents = function () {
                  var e = this;
                  this.dataAdapter.on("*", function (t, n) {
                    e.trigger(t, n);
                  });
                }),
                (r.prototype._registerSelectionEvents = function () {
                  var t = this,
                    n = ["toggle", "focus"];
                  this.selection.on("toggle", function () {
                    t.toggleDropdown();
                  }),
                    this.selection.on("focus", function (e) {
                      t.focus(e);
                    }),
                    this.selection.on("*", function (i, r) {
                      -1 === e.inArray(i, n) && t.trigger(i, r);
                    });
                }),
                (r.prototype._registerDropdownEvents = function () {
                  var e = this;
                  this.dropdown.on("*", function (t, n) {
                    e.trigger(t, n);
                  });
                }),
                (r.prototype._registerResultsEvents = function () {
                  var e = this;
                  this.results.on("*", function (t, n) {
                    e.trigger(t, n);
                  });
                }),
                (r.prototype._registerEvents = function () {
                  var e = this;
                  this.on("open", function () {
                    e.$container.addClass("select2-container--open");
                  }),
                    this.on("close", function () {
                      e.$container.removeClass("select2-container--open");
                    }),
                    this.on("enable", function () {
                      e.$container.removeClass("select2-container--disabled");
                    }),
                    this.on("disable", function () {
                      e.$container.addClass("select2-container--disabled");
                    }),
                    this.on("blur", function () {
                      e.$container.removeClass("select2-container--focus");
                    }),
                    this.on("query", function (t) {
                      e.isOpen() || e.trigger("open", {}),
                        this.dataAdapter.query(t, function (n) {
                          e.trigger("results:all", { data: n, query: t });
                        });
                    }),
                    this.on("query:append", function (t) {
                      this.dataAdapter.query(t, function (n) {
                        e.trigger("results:append", { data: n, query: t });
                      });
                    }),
                    this.on("keypress", function (t) {
                      var n = t.which;
                      e.isOpen()
                        ? n === i.ESC || n === i.TAB || (n === i.UP && t.altKey)
                          ? (e.close(), t.preventDefault())
                          : n === i.ENTER
                          ? (e.trigger("results:select", {}), t.preventDefault())
                          : n === i.SPACE && t.ctrlKey
                          ? (e.trigger("results:toggle", {}), t.preventDefault())
                          : n === i.UP
                          ? (e.trigger("results:previous", {}),
                            t.preventDefault())
                          : n === i.DOWN &&
                            (e.trigger("results:next", {}), t.preventDefault())
                        : (n === i.ENTER ||
                            n === i.SPACE ||
                            (n === i.DOWN && t.altKey)) &&
                          (e.open(), t.preventDefault());
                    });
                }),
                (r.prototype._syncAttributes = function () {
                  this.options.set("disabled", this.$element.prop("disabled")),
                    this.options.get("disabled")
                      ? (this.isOpen() && this.close(),
                        this.trigger("disable", {}))
                      : this.trigger("enable", {});
                }),
                (r.prototype._syncSubtree = function (e, t) {
                  var n = !1,
                    i = this;
                  if (
                    !e ||
                    !e.target ||
                    "OPTION" === e.target.nodeName ||
                    "OPTGROUP" === e.target.nodeName
                  ) {
                    if (t)
                      if (t.addedNodes && t.addedNodes.length > 0)
                        for (var r = 0; r < t.addedNodes.length; r++)
                          t.addedNodes[r].selected && (n = !0);
                      else
                        t.removedNodes && t.removedNodes.length > 0 && (n = !0);
                    else n = !0;
                    n &&
                      this.dataAdapter.current(function (e) {
                        i.trigger("selection:update", { data: e });
                      });
                  }
                }),
                (r.prototype.trigger = function (e, t) {
                  var n = r.__super__.trigger,
                    i = {
                      open: "opening",
                      close: "closing",
                      select: "selecting",
                      unselect: "unselecting",
                    };
                  if ((t === undefined && (t = {}), e in i)) {
                    var s = i[e],
                      o = { prevented: !1, name: e, args: t };
                    if ((n.call(this, s, o), o.prevented))
                      return void (t.prevented = !0);
                  }
                  n.call(this, e, t);
                }),
                (r.prototype.toggleDropdown = function () {
                  this.options.get("disabled") ||
                    (this.isOpen() ? this.close() : this.open());
                }),
                (r.prototype.open = function () {
                  this.isOpen() || this.trigger("query", {});
                }),
                (r.prototype.close = function () {
                  this.isOpen() && this.trigger("close", {});
                }),
                (r.prototype.isOpen = function () {
                  return this.$container.hasClass("select2-container--open");
                }),
                (r.prototype.hasFocus = function () {
                  return this.$container.hasClass("select2-container--focus");
                }),
                (r.prototype.focus = function (e) {
                  this.hasFocus() ||
                    (this.$container.addClass("select2-container--focus"),
                    this.trigger("focus", {}));
                }),
                (r.prototype.enable = function (e) {
                  this.options.get("debug") &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                    ),
                    (null != e && 0 !== e.length) || (e = [!0]);
                  var t = !e[0];
                  this.$element.prop("disabled", t);
                }),
                (r.prototype.data = function () {
                  this.options.get("debug") &&
                    arguments.length > 0 &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                    );
                  var e = [];
                  return (
                    this.dataAdapter.current(function (t) {
                      e = t;
                    }),
                    e
                  );
                }),
                (r.prototype.val = function (t) {
                  if (
                    (this.options.get("debug") &&
                      window.console &&
                      console.warn &&
                      console.warn(
                        'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                      ),
                    null == t || 0 === t.length)
                  )
                    return this.$element.val();
                  var n = t[0];
                  e.isArray(n) &&
                    (n = e.map(n, function (e) {
                      return e.toString();
                    })),
                    this.$element.val(n).trigger("change");
                }),
                (r.prototype.destroy = function () {
                  this.$container.remove(),
                    this.$element[0].detachEvent &&
                      this.$element[0].detachEvent(
                        "onpropertychange",
                        this._syncA
                      ),
                    null != this._observer
                      ? (this._observer.disconnect(), (this._observer = null))
                      : this.$element[0].removeEventListener &&
                        (this.$element[0].removeEventListener(
                          "DOMAttrModified",
                          this._syncA,
                          !1
                        ),
                        this.$element[0].removeEventListener(
                          "DOMNodeInserted",
                          this._syncS,
                          !1
                        ),
                        this.$element[0].removeEventListener(
                          "DOMNodeRemoved",
                          this._syncS,
                          !1
                        )),
                    (this._syncA = null),
                    (this._syncS = null),
                    this.$element.off(".select2"),
                    this.$element.attr(
                      "tabindex",
                      this.$element.data("old-tabindex")
                    ),
                    this.$element.removeClass("select2-hidden-accessible"),
                    this.$element.attr("aria-hidden", "false"),
                    this.$element.removeData("select2"),
                    this.dataAdapter.destroy(),
                    this.selection.destroy(),
                    this.dropdown.destroy(),
                    this.results.destroy(),
                    (this.dataAdapter = null),
                    (this.selection = null),
                    (this.dropdown = null),
                    (this.results = null);
                }),
                (r.prototype.render = function () {
                  var t = e(
                    '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
                  );
                  return (
                    t.attr("dir", this.options.get("dir")),
                    (this.$container = t),
                    this.$container.addClass(
                      "select2-container--" + this.options.get("theme")
                    ),
                    t.data("element", this.$element),
                    t
                  );
                }),
                r
              );
            }
          ),
          t.define("jquery-mousewheel", ["jquery"], function (e) {
            return e;
          }),
          t.define(
            "jquery.select2",
            [
              "jquery",
              "jquery-mousewheel",
              "./select2/core",
              "./select2/defaults",
            ],
            function (e, t, n, i) {
              if (null == e.fn.select2) {
                var r = ["open", "close", "destroy"];
                e.fn.select2 = function (t) {
                  if ("object" == typeof (t = t || {}))
                    return (
                      this.each(function () {
                        var i = e.extend(!0, {}, t);
                        new n(e(this), i);
                      }),
                      this
                    );
                  if ("string" == typeof t) {
                    var i,
                      s = Array.prototype.slice.call(arguments, 1);
                    return (
                      this.each(function () {
                        var n = e(this).data("select2");
                        null == n &&
                          window.console &&
                          console.error &&
                          console.error(
                            "The select2('" +
                              t +
                              "') method was called on an element that is not using Select2."
                          ),
                          (i = n[t].apply(n, s));
                      }),
                      e.inArray(t, r) > -1 ? this : i
                    );
                  }
                  throw new Error("Invalid arguments for Select2: " + t);
                };
              }
              return (
                null == e.fn.select2.defaults && (e.fn.select2.defaults = i), n
              );
            }
          ),
          { define: t.define, require: t.require }
        );
      })(),
      n = t.require("jquery.select2");
    return (e.fn.select2.amd = t), n;
  });
  