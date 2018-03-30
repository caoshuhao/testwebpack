"use strict";

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

!function (e) {
  var t = {};function n(r) {
    if (t[r]) return t[r].exports;var i = t[r] = { i: r, l: !1, exports: {} };return e[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
  }n.m = e, n.c = t, n.d = function (e, t, r) {
    n.o(e, t) || Object.defineProperty(e, t, { configurable: !1, enumerable: !0, get: r });
  }, n.r = function (e) {
    Object.defineProperty(e, "__esModule", { value: !0 });
  }, n.n = function (e) {
    var t = e && e.__esModule ? function () {
      return e.default;
    } : function () {
      return e;
    };return n.d(t, "a", t), t;
  }, n.o = function (e, t) {
    return Object.prototype.hasOwnProperty.call(e, t);
  }, n.p = "", n(n.s = 5);
}([function (e, t, n) {
  "use strict";
  (function (e) {
    var n,
        r,
        i,
        o = "function" == typeof Symbol && "symbol" == _typeof(Symbol.iterator) ? function (e) {
      return typeof e === "undefined" ? "undefined" : _typeof(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e === "undefined" ? "undefined" : _typeof(e);
    },
        a = "function" == typeof Symbol && "symbol" === o(Symbol.iterator) ? function (e) {
      return void 0 === e ? "undefined" : o(e);
    } : function (e) {
      return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : void 0 === e ? "undefined" : o(e);
    };
    /*!
     * jQuery JavaScript Library v2.1.1
     * http://jquery.com/
     *
     * Includes Sizzle.js
     * http://sizzlejs.com/
     *
     * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
     * Released under the MIT license
     * http://jquery.org/license
     *
     * Date: 2014-05-01T17:11Z
     */
    r = "undefined" != typeof window ? window : void 0, i = function i(r, _i) {
      var o = [],
          s = o.slice,
          l = o.concat,
          u = o.push,
          c = o.indexOf,
          f = {},
          p = f.toString,
          d = f.hasOwnProperty,
          h = {},
          g = r.document,
          m = function e(t, n) {
        return new e.fn.init(t, n);
      },
          v = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
          y = /^-ms-/,
          x = /-([\da-z])/gi,
          b = function b(e, t) {
        return t.toUpperCase();
      };function w(e) {
        var t = e.length,
            n = m.type(e);return "function" !== n && !m.isWindow(e) && (!(1 !== e.nodeType || !t) || "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e);
      }m.fn = m.prototype = { jquery: "2.1.1", constructor: m, selector: "", length: 0, toArray: function toArray() {
          return s.call(this);
        }, get: function get(e) {
          return null != e ? e < 0 ? this[e + this.length] : this[e] : s.call(this);
        }, pushStack: function pushStack(e) {
          var t = m.merge(this.constructor(), e);return t.prevObject = this, t.context = this.context, t;
        }, each: function each(e, t) {
          return m.each(this, e, t);
        }, map: function map(e) {
          return this.pushStack(m.map(this, function (t, n) {
            return e.call(t, n, t);
          }));
        }, slice: function slice() {
          return this.pushStack(s.apply(this, arguments));
        }, first: function first() {
          return this.eq(0);
        }, last: function last() {
          return this.eq(-1);
        }, eq: function eq(e) {
          var t = this.length,
              n = +e + (e < 0 ? t : 0);return this.pushStack(n >= 0 && n < t ? [this[n]] : []);
        }, end: function end() {
          return this.prevObject || this.constructor(null);
        }, push: u, sort: o.sort, splice: o.splice }, m.extend = m.fn.extend = function () {
        var e,
            t,
            n,
            r,
            i,
            o,
            s = arguments[0] || {},
            l = 1,
            u = arguments.length,
            c = !1;for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" === (void 0 === s ? "undefined" : a(s)) || m.isFunction(s) || (s = {}), l === u && (s = this, l--); l < u; l++) {
          if (null != (e = arguments[l])) for (t in e) {
            n = s[t], s !== (r = e[t]) && (c && r && (m.isPlainObject(r) || (i = m.isArray(r))) ? (i ? (i = !1, o = n && m.isArray(n) ? n : []) : o = n && m.isPlainObject(n) ? n : {}, s[t] = m.extend(c, o, r)) : void 0 !== r && (s[t] = r));
          }
        }return s;
      }, m.extend({ expando: "jQuery" + ("2.1.1" + Math.random()).replace(/\D/g, ""), isReady: !0, error: function error(e) {
          throw new Error(e);
        }, noop: function noop() {}, isFunction: function isFunction(e) {
          return "function" === m.type(e);
        }, isArray: Array.isArray, isWindow: function isWindow(e) {
          return null != e && e === e.window;
        }, isNumeric: function isNumeric(e) {
          return !m.isArray(e) && e - parseFloat(e) >= 0;
        }, isPlainObject: function isPlainObject(e) {
          return "object" === m.type(e) && !e.nodeType && !m.isWindow(e) && !(e.constructor && !d.call(e.constructor.prototype, "isPrototypeOf"));
        }, isEmptyObject: function isEmptyObject(e) {
          var t;for (t in e) {
            return !1;
          }return !0;
        }, type: function type(e) {
          return null == e ? e + "" : "object" === (void 0 === e ? "undefined" : a(e)) || "function" == typeof e ? f[p.call(e)] || "object" : void 0 === e ? "undefined" : a(e);
        }, globalEval: function globalEval(e) {
          var t,
              n = eval;(e = m.trim(e)) && (1 === e.indexOf("use strict") ? ((t = g.createElement("script")).text = e, g.head.appendChild(t).parentNode.removeChild(t)) : n(e));
        }, camelCase: function camelCase(e) {
          return e.replace(y, "ms-").replace(x, b);
        }, nodeName: function nodeName(e, t) {
          return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase();
        }, each: function each(e, t, n) {
          var r = 0,
              i = e.length,
              o = w(e);if (n) {
            if (o) for (; r < i && !1 !== t.apply(e[r], n); r++) {} else for (r in e) {
              if (!1 === t.apply(e[r], n)) break;
            }
          } else if (o) for (; r < i && !1 !== t.call(e[r], r, e[r]); r++) {} else for (r in e) {
            if (!1 === t.call(e[r], r, e[r])) break;
          }return e;
        }, trim: function trim(e) {
          return null == e ? "" : (e + "").replace(v, "");
        }, makeArray: function makeArray(e, t) {
          var n = t || [];return null != e && (w(Object(e)) ? m.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)), n;
        }, inArray: function inArray(e, t, n) {
          return null == t ? -1 : c.call(t, e, n);
        }, merge: function merge(e, t) {
          for (var n = +t.length, r = 0, i = e.length; r < n; r++) {
            e[i++] = t[r];
          }return e.length = i, e;
        }, grep: function grep(e, t, n) {
          for (var r = [], i = 0, o = e.length, a = !n; i < o; i++) {
            !t(e[i], i) !== a && r.push(e[i]);
          }return r;
        }, map: function map(e, t, n) {
          var r,
              i = 0,
              o = e.length,
              a = [];if (w(e)) for (; i < o; i++) {
            null != (r = t(e[i], i, n)) && a.push(r);
          } else for (i in e) {
            null != (r = t(e[i], i, n)) && a.push(r);
          }return l.apply([], a);
        }, guid: 1, proxy: function proxy(e, t) {
          var n, r, i;if ("string" == typeof t && (n = e[t], t = e, e = n), m.isFunction(e)) return r = s.call(arguments, 2), i = function i() {
            return e.apply(t || this, r.concat(s.call(arguments)));
          }, i.guid = e.guid = e.guid || m.guid++, i;
        }, now: Date.now, support: h }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (e, t) {
        f["[object " + t + "]"] = t.toLowerCase();
      });var T =
      /*!
           * Sizzle CSS Selector Engine v1.10.19
           * http://sizzlejs.com/
           *
           * Copyright 2013 jQuery Foundation, Inc. and other contributors
           * Released under the MIT license
           * http://jquery.org/license
           *
           * Date: 2014-04-18
           */
      function (e) {
        var t,
            n,
            r,
            i,
            o,
            s,
            l,
            u,
            c,
            f,
            p,
            d,
            h,
            g,
            m,
            v,
            y,
            x,
            b,
            w = "sizzle" + -new Date(),
            T = e.document,
            C = 0,
            N = 0,
            k = ae(),
            S = ae(),
            E = ae(),
            D = function D(e, t) {
          return e === t && (p = !0), 0;
        },
            j = "undefined",
            A = 1 << 31,
            O = {}.hasOwnProperty,
            L = [],
            H = L.pop,
            q = L.push,
            M = L.push,
            P = L.slice,
            F = L.indexOf || function (e) {
          for (var t = 0, n = this.length; t < n; t++) {
            if (this[t] === e) return t;
          }return -1;
        },
            I = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            R = "[\\x20\\t\\r\\n\\f]",
            W = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            _ = W.replace("w", "w#"),
            $ = "\\[" + R + "*(" + W + ")(?:" + R + "*([*^$|!~]?=)" + R + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + _ + "))|)" + R + "*\\]",
            B = ":(" + W + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + $ + ")*)|.*)\\)|)",
            z = new RegExp("^" + R + "+|((?:^|[^\\\\])(?:\\\\.)*)" + R + "+$", "g"),
            X = new RegExp("^" + R + "*," + R + "*"),
            J = new RegExp("^" + R + "*([>+~]|" + R + ")" + R + "*"),
            U = new RegExp("=" + R + "*([^\\]'\"]*?)" + R + "*\\]", "g"),
            V = new RegExp(B),
            Y = new RegExp("^" + _ + "$"),
            G = { ID: new RegExp("^#(" + W + ")"), CLASS: new RegExp("^\\.(" + W + ")"), TAG: new RegExp("^(" + W.replace("w", "w*") + ")"), ATTR: new RegExp("^" + $), PSEUDO: new RegExp("^" + B), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + R + "*(even|odd|(([+-]|)(\\d*)n|)" + R + "*(?:([+-]|)" + R + "*(\\d+)|))" + R + "*\\)|)", "i"), bool: new RegExp("^(?:" + I + ")$", "i"), needsContext: new RegExp("^" + R + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + R + "*((?:-\\d)?\\d*)" + R + "*\\)|)(?=[^-]|$)", "i") },
            Q = /^(?:input|select|textarea|button)$/i,
            K = /^h\d$/i,
            Z = /^[^{]+\{\s*\[native \w/,
            ee = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            te = /[+~]/,
            ne = /'|\\/g,
            re = new RegExp("\\\\([\\da-f]{1,6}" + R + "?|(" + R + ")|.)", "ig"),
            ie = function ie(e, t, n) {
          var r = "0x" + t - 65536;return r != r || n ? t : r < 0 ? String.fromCharCode(r + 65536) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320);
        };try {
          M.apply(L = P.call(T.childNodes), T.childNodes), L[T.childNodes.length].nodeType;
        } catch (e) {
          M = { apply: L.length ? function (e, t) {
              q.apply(e, P.call(t));
            } : function (e, t) {
              for (var n = e.length, r = 0; e[n++] = t[r++];) {}e.length = n - 1;
            } };
        }function oe(e, t, r, i) {
          var o, a, l, c, f, p, g, y, x, C;if ((t ? t.ownerDocument || t : T) !== h && d(t), t = t || h, r = r || [], !e || "string" != typeof e) return r;if (1 !== (c = t.nodeType) && 9 !== c) return [];if (m && !i) {
            if (o = ee.exec(e)) if (l = o[1]) {
              if (9 === c) {
                if (!(a = t.getElementById(l)) || !a.parentNode) return r;if (a.id === l) return r.push(a), r;
              } else if (t.ownerDocument && (a = t.ownerDocument.getElementById(l)) && b(t, a) && a.id === l) return r.push(a), r;
            } else {
              if (o[2]) return M.apply(r, t.getElementsByTagName(e)), r;if ((l = o[3]) && n.getElementsByClassName && t.getElementsByClassName) return M.apply(r, t.getElementsByClassName(l)), r;
            }if (n.qsa && (!v || !v.test(e))) {
              if (y = g = w, x = t, C = 9 === c && e, 1 === c && "object" !== t.nodeName.toLowerCase()) {
                for (p = s(e), (g = t.getAttribute("id")) ? y = g.replace(ne, "\\$&") : t.setAttribute("id", y), y = "[id='" + y + "'] ", f = p.length; f--;) {
                  p[f] = y + me(p[f]);
                }x = te.test(e) && he(t.parentNode) || t, C = p.join(",");
              }if (C) try {
                return M.apply(r, x.querySelectorAll(C)), r;
              } catch (e) {} finally {
                g || t.removeAttribute("id");
              }
            }
          }return u(e.replace(z, "$1"), t, r, i);
        }function ae() {
          var e = [];return function t(n, i) {
            return e.push(n + " ") > r.cacheLength && delete t[e.shift()], t[n + " "] = i;
          };
        }function se(e) {
          return e[w] = !0, e;
        }function le(e) {
          var t = h.createElement("div");try {
            return !!e(t);
          } catch (e) {
            return !1;
          } finally {
            t.parentNode && t.parentNode.removeChild(t), t = null;
          }
        }function ue(e, t) {
          for (var n = e.split("|"), i = e.length; i--;) {
            r.attrHandle[n[i]] = t;
          }
        }function ce(e, t) {
          var n = t && e,
              r = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || A) - (~e.sourceIndex || A);if (r) return r;if (n) for (; n = n.nextSibling;) {
            if (n === t) return -1;
          }return e ? 1 : -1;
        }function fe(e) {
          return function (t) {
            return "input" === t.nodeName.toLowerCase() && t.type === e;
          };
        }function pe(e) {
          return function (t) {
            var n = t.nodeName.toLowerCase();return ("input" === n || "button" === n) && t.type === e;
          };
        }function de(e) {
          return se(function (t) {
            return t = +t, se(function (n, r) {
              for (var i, o = e([], n.length, t), a = o.length; a--;) {
                n[i = o[a]] && (n[i] = !(r[i] = n[i]));
              }
            });
          });
        }function he(e) {
          return e && a(e.getElementsByTagName) !== j && e;
        }for (t in n = oe.support = {}, o = oe.isXML = function (e) {
          var t = e && (e.ownerDocument || e).documentElement;return !!t && "HTML" !== t.nodeName;
        }, d = oe.setDocument = function (e) {
          var t,
              i = e ? e.ownerDocument || e : T,
              s = i.defaultView;return i !== h && 9 === i.nodeType && i.documentElement ? (h = i, g = i.documentElement, m = !o(i), s && s !== s.top && (s.addEventListener ? s.addEventListener("unload", function () {
            d();
          }, !1) : s.attachEvent && s.attachEvent("onunload", function () {
            d();
          })), n.attributes = le(function (e) {
            return e.className = "i", !e.getAttribute("className");
          }), n.getElementsByTagName = le(function (e) {
            return e.appendChild(i.createComment("")), !e.getElementsByTagName("*").length;
          }), n.getElementsByClassName = Z.test(i.getElementsByClassName) && le(function (e) {
            return e.innerHTML = "<div class='a'></div><div class='a i'></div>", e.firstChild.className = "i", 2 === e.getElementsByClassName("i").length;
          }), n.getById = le(function (e) {
            return g.appendChild(e).id = w, !i.getElementsByName || !i.getElementsByName(w).length;
          }), n.getById ? (r.find.ID = function (e, t) {
            if (a(t.getElementById) !== j && m) {
              var n = t.getElementById(e);return n && n.parentNode ? [n] : [];
            }
          }, r.filter.ID = function (e) {
            var t = e.replace(re, ie);return function (e) {
              return e.getAttribute("id") === t;
            };
          }) : (delete r.find.ID, r.filter.ID = function (e) {
            var t = e.replace(re, ie);return function (e) {
              var n = a(e.getAttributeNode) !== j && e.getAttributeNode("id");return n && n.value === t;
            };
          }), r.find.TAG = n.getElementsByTagName ? function (e, t) {
            if (a(t.getElementsByTagName) !== j) return t.getElementsByTagName(e);
          } : function (e, t) {
            var n,
                r = [],
                i = 0,
                o = t.getElementsByTagName(e);if ("*" === e) {
              for (; n = o[i++];) {
                1 === n.nodeType && r.push(n);
              }return r;
            }return o;
          }, r.find.CLASS = n.getElementsByClassName && function (e, t) {
            if (a(t.getElementsByClassName) !== j && m) return t.getElementsByClassName(e);
          }, y = [], v = [], (n.qsa = Z.test(i.querySelectorAll)) && (le(function (e) {
            e.innerHTML = "<select msallowclip=''><option selected=''></option></select>", e.querySelectorAll("[msallowclip^='']").length && v.push("[*^$]=" + R + "*(?:''|\"\")"), e.querySelectorAll("[selected]").length || v.push("\\[" + R + "*(?:value|" + I + ")"), e.querySelectorAll(":checked").length || v.push(":checked");
          }), le(function (e) {
            var t = i.createElement("input");t.setAttribute("type", "hidden"), e.appendChild(t).setAttribute("name", "D"), e.querySelectorAll("[name=d]").length && v.push("name" + R + "*[*^$|!~]?="), e.querySelectorAll(":enabled").length || v.push(":enabled", ":disabled"), e.querySelectorAll("*,:x"), v.push(",.*:");
          })), (n.matchesSelector = Z.test(x = g.matches || g.webkitMatchesSelector || g.mozMatchesSelector || g.oMatchesSelector || g.msMatchesSelector)) && le(function (e) {
            n.disconnectedMatch = x.call(e, "div"), x.call(e, "[s!='']:x"), y.push("!=", B);
          }), v = v.length && new RegExp(v.join("|")), y = y.length && new RegExp(y.join("|")), t = Z.test(g.compareDocumentPosition), b = t || Z.test(g.contains) ? function (e, t) {
            var n = 9 === e.nodeType ? e.documentElement : e,
                r = t && t.parentNode;return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)));
          } : function (e, t) {
            if (t) for (; t = t.parentNode;) {
              if (t === e) return !0;
            }return !1;
          }, D = t ? function (e, t) {
            if (e === t) return p = !0, 0;var r = !e.compareDocumentPosition - !t.compareDocumentPosition;return r || (1 & (r = (e.ownerDocument || e) === (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !n.sortDetached && t.compareDocumentPosition(e) === r ? e === i || e.ownerDocument === T && b(T, e) ? -1 : t === i || t.ownerDocument === T && b(T, t) ? 1 : f ? F.call(f, e) - F.call(f, t) : 0 : 4 & r ? -1 : 1);
          } : function (e, t) {
            if (e === t) return p = !0, 0;var n,
                r = 0,
                o = e.parentNode,
                a = t.parentNode,
                s = [e],
                l = [t];if (!o || !a) return e === i ? -1 : t === i ? 1 : o ? -1 : a ? 1 : f ? F.call(f, e) - F.call(f, t) : 0;if (o === a) return ce(e, t);for (n = e; n = n.parentNode;) {
              s.unshift(n);
            }for (n = t; n = n.parentNode;) {
              l.unshift(n);
            }for (; s[r] === l[r];) {
              r++;
            }return r ? ce(s[r], l[r]) : s[r] === T ? -1 : l[r] === T ? 1 : 0;
          }, i) : h;
        }, oe.matches = function (e, t) {
          return oe(e, null, null, t);
        }, oe.matchesSelector = function (e, t) {
          if ((e.ownerDocument || e) !== h && d(e), t = t.replace(U, "='$1']"), n.matchesSelector && m && (!y || !y.test(t)) && (!v || !v.test(t))) try {
            var r = x.call(e, t);if (r || n.disconnectedMatch || e.document && 11 !== e.document.nodeType) return r;
          } catch (e) {}return oe(t, h, null, [e]).length > 0;
        }, oe.contains = function (e, t) {
          return (e.ownerDocument || e) !== h && d(e), b(e, t);
        }, oe.attr = function (e, t) {
          (e.ownerDocument || e) !== h && d(e);var i = r.attrHandle[t.toLowerCase()],
              o = i && O.call(r.attrHandle, t.toLowerCase()) ? i(e, t, !m) : void 0;return void 0 !== o ? o : n.attributes || !m ? e.getAttribute(t) : (o = e.getAttributeNode(t)) && o.specified ? o.value : null;
        }, oe.error = function (e) {
          throw new Error("Syntax error, unrecognized expression: " + e);
        }, oe.uniqueSort = function (e) {
          var t,
              r = [],
              i = 0,
              o = 0;if (p = !n.detectDuplicates, f = !n.sortStable && e.slice(0), e.sort(D), p) {
            for (; t = e[o++];) {
              t === e[o] && (i = r.push(o));
            }for (; i--;) {
              e.splice(r[i], 1);
            }
          }return f = null, e;
        }, i = oe.getText = function (e) {
          var t,
              n = "",
              r = 0,
              o = e.nodeType;if (o) {
            if (1 === o || 9 === o || 11 === o) {
              if ("string" == typeof e.textContent) return e.textContent;for (e = e.firstChild; e; e = e.nextSibling) {
                n += i(e);
              }
            } else if (3 === o || 4 === o) return e.nodeValue;
          } else for (; t = e[r++];) {
            n += i(t);
          }return n;
        }, (r = oe.selectors = { cacheLength: 50, createPseudo: se, match: G, attrHandle: {}, find: {}, relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } }, preFilter: { ATTR: function ATTR(e) {
              return e[1] = e[1].replace(re, ie), e[3] = (e[3] || e[4] || e[5] || "").replace(re, ie), "~=" === e[2] && (e[3] = " " + e[3] + " "), e.slice(0, 4);
            }, CHILD: function CHILD(e) {
              return e[1] = e[1].toLowerCase(), "nth" === e[1].slice(0, 3) ? (e[3] || oe.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && oe.error(e[0]), e;
            }, PSEUDO: function PSEUDO(e) {
              var t,
                  n = !e[6] && e[2];return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && V.test(n) && (t = s(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t), e[2] = n.slice(0, t)), e.slice(0, 3));
            } }, filter: { TAG: function TAG(e) {
              var t = e.replace(re, ie).toLowerCase();return "*" === e ? function () {
                return !0;
              } : function (e) {
                return e.nodeName && e.nodeName.toLowerCase() === t;
              };
            }, CLASS: function CLASS(e) {
              var t = k[e + " "];return t || (t = new RegExp("(^|" + R + ")" + e + "(" + R + "|$)")) && k(e, function (e) {
                return t.test("string" == typeof e.className && e.className || a(e.getAttribute) !== j && e.getAttribute("class") || "");
              });
            }, ATTR: function ATTR(e, t, n) {
              return function (r) {
                var i = oe.attr(r, e);return null == i ? "!=" === t : !t || (i += "", "=" === t ? i === n : "!=" === t ? i !== n : "^=" === t ? n && 0 === i.indexOf(n) : "*=" === t ? n && i.indexOf(n) > -1 : "$=" === t ? n && i.slice(-n.length) === n : "~=" === t ? (" " + i + " ").indexOf(n) > -1 : "|=" === t && (i === n || i.slice(0, n.length + 1) === n + "-"));
              };
            }, CHILD: function CHILD(e, t, n, r, i) {
              var o = "nth" !== e.slice(0, 3),
                  a = "last" !== e.slice(-4),
                  s = "of-type" === t;return 1 === r && 0 === i ? function (e) {
                return !!e.parentNode;
              } : function (t, n, l) {
                var u,
                    c,
                    f,
                    p,
                    d,
                    h,
                    g = o !== a ? "nextSibling" : "previousSibling",
                    m = t.parentNode,
                    v = s && t.nodeName.toLowerCase(),
                    y = !l && !s;if (m) {
                  if (o) {
                    for (; g;) {
                      for (f = t; f = f[g];) {
                        if (s ? f.nodeName.toLowerCase() === v : 1 === f.nodeType) return !1;
                      }h = g = "only" === e && !h && "nextSibling";
                    }return !0;
                  }if (h = [a ? m.firstChild : m.lastChild], a && y) {
                    for (d = (u = (c = m[w] || (m[w] = {}))[e] || [])[0] === C && u[1], p = u[0] === C && u[2], f = d && m.childNodes[d]; f = ++d && f && f[g] || (p = d = 0) || h.pop();) {
                      if (1 === f.nodeType && ++p && f === t) {
                        c[e] = [C, d, p];break;
                      }
                    }
                  } else if (y && (u = (t[w] || (t[w] = {}))[e]) && u[0] === C) p = u[1];else for (; (f = ++d && f && f[g] || (p = d = 0) || h.pop()) && ((s ? f.nodeName.toLowerCase() !== v : 1 !== f.nodeType) || !++p || (y && ((f[w] || (f[w] = {}))[e] = [C, p]), f !== t));) {}return (p -= i) === r || p % r == 0 && p / r >= 0;
                }
              };
            }, PSEUDO: function PSEUDO(e, t) {
              var n,
                  i = r.pseudos[e] || r.setFilters[e.toLowerCase()] || oe.error("unsupported pseudo: " + e);return i[w] ? i(t) : i.length > 1 ? (n = [e, e, "", t], r.setFilters.hasOwnProperty(e.toLowerCase()) ? se(function (e, n) {
                for (var r, o = i(e, t), a = o.length; a--;) {
                  e[r = F.call(e, o[a])] = !(n[r] = o[a]);
                }
              }) : function (e) {
                return i(e, 0, n);
              }) : i;
            } }, pseudos: { not: se(function (e) {
              var t = [],
                  n = [],
                  r = l(e.replace(z, "$1"));return r[w] ? se(function (e, t, n, i) {
                for (var o, a = r(e, null, i, []), s = e.length; s--;) {
                  (o = a[s]) && (e[s] = !(t[s] = o));
                }
              }) : function (e, i, o) {
                return t[0] = e, r(t, null, o, n), !n.pop();
              };
            }), has: se(function (e) {
              return function (t) {
                return oe(e, t).length > 0;
              };
            }), contains: se(function (e) {
              return function (t) {
                return (t.textContent || t.innerText || i(t)).indexOf(e) > -1;
              };
            }), lang: se(function (e) {
              return Y.test(e || "") || oe.error("unsupported lang: " + e), e = e.replace(re, ie).toLowerCase(), function (t) {
                var n;do {
                  if (n = m ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (n = n.toLowerCase()) === e || 0 === n.indexOf(e + "-");
                } while ((t = t.parentNode) && 1 === t.nodeType);return !1;
              };
            }), target: function target(t) {
              var n = e.location && e.location.hash;return n && n.slice(1) === t.id;
            }, root: function root(e) {
              return e === g;
            }, focus: function focus(e) {
              return e === h.activeElement && (!h.hasFocus || h.hasFocus()) && !!(e.type || e.href || ~e.tabIndex);
            }, enabled: function enabled(e) {
              return !1 === e.disabled;
            }, disabled: function disabled(e) {
              return !0 === e.disabled;
            }, checked: function checked(e) {
              var t = e.nodeName.toLowerCase();return "input" === t && !!e.checked || "option" === t && !!e.selected;
            }, selected: function selected(e) {
              return e.parentNode && e.parentNode.selectedIndex, !0 === e.selected;
            }, empty: function empty(e) {
              for (e = e.firstChild; e; e = e.nextSibling) {
                if (e.nodeType < 6) return !1;
              }return !0;
            }, parent: function parent(e) {
              return !r.pseudos.empty(e);
            }, header: function header(e) {
              return K.test(e.nodeName);
            }, input: function input(e) {
              return Q.test(e.nodeName);
            }, button: function button(e) {
              var t = e.nodeName.toLowerCase();return "input" === t && "button" === e.type || "button" === t;
            }, text: function text(e) {
              var t;return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase());
            }, first: de(function () {
              return [0];
            }), last: de(function (e, t) {
              return [t - 1];
            }), eq: de(function (e, t, n) {
              return [n < 0 ? n + t : n];
            }), even: de(function (e, t) {
              for (var n = 0; n < t; n += 2) {
                e.push(n);
              }return e;
            }), odd: de(function (e, t) {
              for (var n = 1; n < t; n += 2) {
                e.push(n);
              }return e;
            }), lt: de(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; --r >= 0;) {
                e.push(r);
              }return e;
            }), gt: de(function (e, t, n) {
              for (var r = n < 0 ? n + t : n; ++r < t;) {
                e.push(r);
              }return e;
            }) } }).pseudos.nth = r.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) {
          r.pseudos[t] = fe(t);
        }for (t in { submit: !0, reset: !0 }) {
          r.pseudos[t] = pe(t);
        }function ge() {}function me(e) {
          for (var t = 0, n = e.length, r = ""; t < n; t++) {
            r += e[t].value;
          }return r;
        }function ve(e, t, n) {
          var r = t.dir,
              i = n && "parentNode" === r,
              o = N++;return t.first ? function (t, n, o) {
            for (; t = t[r];) {
              if (1 === t.nodeType || i) return e(t, n, o);
            }
          } : function (t, n, a) {
            var s,
                l,
                u = [C, o];if (a) {
              for (; t = t[r];) {
                if ((1 === t.nodeType || i) && e(t, n, a)) return !0;
              }
            } else for (; t = t[r];) {
              if (1 === t.nodeType || i) {
                if ((s = (l = t[w] || (t[w] = {}))[r]) && s[0] === C && s[1] === o) return u[2] = s[2];if (l[r] = u, u[2] = e(t, n, a)) return !0;
              }
            }
          };
        }function ye(e) {
          return e.length > 1 ? function (t, n, r) {
            for (var i = e.length; i--;) {
              if (!e[i](t, n, r)) return !1;
            }return !0;
          } : e[0];
        }function xe(e, t, n, r, i) {
          for (var o, a = [], s = 0, l = e.length, u = null != t; s < l; s++) {
            (o = e[s]) && (n && !n(o, r, i) || (a.push(o), u && t.push(s)));
          }return a;
        }function be(e, t, n, r, i, o) {
          return r && !r[w] && (r = be(r)), i && !i[w] && (i = be(i, o)), se(function (o, a, s, l) {
            var u,
                c,
                f,
                p = [],
                d = [],
                h = a.length,
                g = o || function (e, t, n) {
              for (var r = 0, i = t.length; r < i; r++) {
                oe(e, t[r], n);
              }return n;
            }(t || "*", s.nodeType ? [s] : s, []),
                m = !e || !o && t ? g : xe(g, p, e, s, l),
                v = n ? i || (o ? e : h || r) ? [] : a : m;if (n && n(m, v, s, l), r) for (u = xe(v, d), r(u, [], s, l), c = u.length; c--;) {
              (f = u[c]) && (v[d[c]] = !(m[d[c]] = f));
            }if (o) {
              if (i || e) {
                if (i) {
                  for (u = [], c = v.length; c--;) {
                    (f = v[c]) && u.push(m[c] = f);
                  }i(null, v = [], u, l);
                }for (c = v.length; c--;) {
                  (f = v[c]) && (u = i ? F.call(o, f) : p[c]) > -1 && (o[u] = !(a[u] = f));
                }
              }
            } else v = xe(v === a ? v.splice(h, v.length) : v), i ? i(null, a, v, l) : M.apply(a, v);
          });
        }function we(e) {
          for (var t, n, i, o = e.length, a = r.relative[e[0].type], s = a || r.relative[" "], l = a ? 1 : 0, u = ve(function (e) {
            return e === t;
          }, s, !0), f = ve(function (e) {
            return F.call(t, e) > -1;
          }, s, !0), p = [function (e, n, r) {
            return !a && (r || n !== c) || ((t = n).nodeType ? u(e, n, r) : f(e, n, r));
          }]; l < o; l++) {
            if (n = r.relative[e[l].type]) p = [ve(ye(p), n)];else {
              if ((n = r.filter[e[l].type].apply(null, e[l].matches))[w]) {
                for (i = ++l; i < o && !r.relative[e[i].type]; i++) {}return be(l > 1 && ye(p), l > 1 && me(e.slice(0, l - 1).concat({ value: " " === e[l - 2].type ? "*" : "" })).replace(z, "$1"), n, l < i && we(e.slice(l, i)), i < o && we(e = e.slice(i)), i < o && me(e));
              }p.push(n);
            }
          }return ye(p);
        }return ge.prototype = r.filters = r.pseudos, r.setFilters = new ge(), s = oe.tokenize = function (e, t) {
          var n,
              i,
              o,
              a,
              s,
              l,
              u,
              c = S[e + " "];if (c) return t ? 0 : c.slice(0);for (s = e, l = [], u = r.preFilter; s;) {
            for (a in n && !(i = X.exec(s)) || (i && (s = s.slice(i[0].length) || s), l.push(o = [])), n = !1, (i = J.exec(s)) && (n = i.shift(), o.push({ value: n, type: i[0].replace(z, " ") }), s = s.slice(n.length)), r.filter) {
              !(i = G[a].exec(s)) || u[a] && !(i = u[a](i)) || (n = i.shift(), o.push({ value: n, type: a, matches: i }), s = s.slice(n.length));
            }if (!n) break;
          }return t ? s.length : s ? oe.error(e) : S(e, l).slice(0);
        }, l = oe.compile = function (e, t) {
          var n,
              i = [],
              o = [],
              a = E[e + " "];if (!a) {
            for (t || (t = s(e)), n = t.length; n--;) {
              (a = we(t[n]))[w] ? i.push(a) : o.push(a);
            }(a = E(e, function (e, t) {
              var n = t.length > 0,
                  i = e.length > 0,
                  o = function o(_o, a, s, l, u) {
                var f,
                    p,
                    d,
                    g = 0,
                    m = "0",
                    v = _o && [],
                    y = [],
                    x = c,
                    b = _o || i && r.find.TAG("*", u),
                    w = C += null == x ? 1 : Math.random() || .1,
                    T = b.length;for (u && (c = a !== h && a); m !== T && null != (f = b[m]); m++) {
                  if (i && f) {
                    for (p = 0; d = e[p++];) {
                      if (d(f, a, s)) {
                        l.push(f);break;
                      }
                    }u && (C = w);
                  }n && ((f = !d && f) && g--, _o && v.push(f));
                }if (g += m, n && m !== g) {
                  for (p = 0; d = t[p++];) {
                    d(v, y, a, s);
                  }if (_o) {
                    if (g > 0) for (; m--;) {
                      v[m] || y[m] || (y[m] = H.call(l));
                    }y = xe(y);
                  }M.apply(l, y), u && !_o && y.length > 0 && g + t.length > 1 && oe.uniqueSort(l);
                }return u && (C = w, c = x), v;
              };return n ? se(o) : o;
            }(o, i))).selector = e;
          }return a;
        }, u = oe.select = function (e, t, i, o) {
          var a,
              u,
              c,
              f,
              p,
              d = "function" == typeof e && e,
              h = !o && s(e = d.selector || e);if (i = i || [], 1 === h.length) {
            if ((u = h[0] = h[0].slice(0)).length > 2 && "ID" === (c = u[0]).type && n.getById && 9 === t.nodeType && m && r.relative[u[1].type]) {
              if (!(t = (r.find.ID(c.matches[0].replace(re, ie), t) || [])[0])) return i;d && (t = t.parentNode), e = e.slice(u.shift().value.length);
            }for (a = G.needsContext.test(e) ? 0 : u.length; a-- && (c = u[a], !r.relative[f = c.type]);) {
              if ((p = r.find[f]) && (o = p(c.matches[0].replace(re, ie), te.test(u[0].type) && he(t.parentNode) || t))) {
                if (u.splice(a, 1), !(e = o.length && me(u))) return M.apply(i, o), i;break;
              }
            }
          }return (d || l(e, h))(o, t, !m, i, te.test(e) && he(t.parentNode) || t), i;
        }, n.sortStable = w.split("").sort(D).join("") === w, n.detectDuplicates = !!p, d(), n.sortDetached = le(function (e) {
          return 1 & e.compareDocumentPosition(h.createElement("div"));
        }), le(function (e) {
          return e.innerHTML = "<a href='#'></a>", "#" === e.firstChild.getAttribute("href");
        }) || ue("type|href|height|width", function (e, t, n) {
          if (!n) return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2);
        }), n.attributes && le(function (e) {
          return e.innerHTML = "<input/>", e.firstChild.setAttribute("value", ""), "" === e.firstChild.getAttribute("value");
        }) || ue("value", function (e, t, n) {
          if (!n && "input" === e.nodeName.toLowerCase()) return e.defaultValue;
        }), le(function (e) {
          return null == e.getAttribute("disabled");
        }) || ue(I, function (e, t, n) {
          var r;if (!n) return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null;
        }), oe;
      }(r);m.find = T, m.expr = T.selectors, m.expr[":"] = m.expr.pseudos, m.unique = T.uniqueSort, m.text = T.getText, m.isXMLDoc = T.isXML, m.contains = T.contains;var C = m.expr.match.needsContext,
          N = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
          k = /^.[^:#\[\.,]*$/;function S(e, t, n) {
        if (m.isFunction(t)) return m.grep(e, function (e, r) {
          return !!t.call(e, r, e) !== n;
        });if (t.nodeType) return m.grep(e, function (e) {
          return e === t !== n;
        });if ("string" == typeof t) {
          if (k.test(t)) return m.filter(t, e, n);t = m.filter(t, e);
        }return m.grep(e, function (e) {
          return c.call(t, e) >= 0 !== n;
        });
      }m.filter = function (e, t, n) {
        var r = t[0];return n && (e = ":not(" + e + ")"), 1 === t.length && 1 === r.nodeType ? m.find.matchesSelector(r, e) ? [r] : [] : m.find.matches(e, m.grep(t, function (e) {
          return 1 === e.nodeType;
        }));
      }, m.fn.extend({ find: function find(e) {
          var t,
              n = this.length,
              r = [],
              i = this;if ("string" != typeof e) return this.pushStack(m(e).filter(function () {
            for (t = 0; t < n; t++) {
              if (m.contains(i[t], this)) return !0;
            }
          }));for (t = 0; t < n; t++) {
            m.find(e, i[t], r);
          }return (r = this.pushStack(n > 1 ? m.unique(r) : r)).selector = this.selector ? this.selector + " " + e : e, r;
        }, filter: function filter(e) {
          return this.pushStack(S(this, e || [], !1));
        }, not: function not(e) {
          return this.pushStack(S(this, e || [], !0));
        }, is: function is(e) {
          return !!S(this, "string" == typeof e && C.test(e) ? m(e) : e || [], !1).length;
        } });var E,
          D = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;(m.fn.init = function (e, t) {
        var n, r;if (!e) return this;if ("string" == typeof e) {
          if (!(n = "<" === e[0] && ">" === e[e.length - 1] && e.length >= 3 ? [null, e, null] : D.exec(e)) || !n[1] && t) return !t || t.jquery ? (t || E).find(e) : this.constructor(t).find(e);if (n[1]) {
            if (t = t instanceof m ? t[0] : t, m.merge(this, m.parseHTML(n[1], t && t.nodeType ? t.ownerDocument || t : g, !0)), N.test(n[1]) && m.isPlainObject(t)) for (n in t) {
              m.isFunction(this[n]) ? this[n](t[n]) : this.attr(n, t[n]);
            }return this;
          }return (r = g.getElementById(n[2])) && r.parentNode && (this.length = 1, this[0] = r), this.context = g, this.selector = e, this;
        }return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : m.isFunction(e) ? void 0 !== E.ready ? E.ready(e) : e(m) : (void 0 !== e.selector && (this.selector = e.selector, this.context = e.context), m.makeArray(e, this));
      }).prototype = m.fn, E = m(g);var j = /^(?:parents|prev(?:Until|All))/,
          A = { children: !0, contents: !0, next: !0, prev: !0 };function O(e, t) {
        for (; (e = e[t]) && 1 !== e.nodeType;) {}return e;
      }m.extend({ dir: function dir(e, t, n) {
          for (var r = [], i = void 0 !== n; (e = e[t]) && 9 !== e.nodeType;) {
            if (1 === e.nodeType) {
              if (i && m(e).is(n)) break;r.push(e);
            }
          }return r;
        }, sibling: function sibling(e, t) {
          for (var n = []; e; e = e.nextSibling) {
            1 === e.nodeType && e !== t && n.push(e);
          }return n;
        } }), m.fn.extend({ has: function has(e) {
          var t = m(e, this),
              n = t.length;return this.filter(function () {
            for (var e = 0; e < n; e++) {
              if (m.contains(this, t[e])) return !0;
            }
          });
        }, closest: function closest(e, t) {
          for (var n, r = 0, i = this.length, o = [], a = C.test(e) || "string" != typeof e ? m(e, t || this.context) : 0; r < i; r++) {
            for (n = this[r]; n && n !== t; n = n.parentNode) {
              if (n.nodeType < 11 && (a ? a.index(n) > -1 : 1 === n.nodeType && m.find.matchesSelector(n, e))) {
                o.push(n);break;
              }
            }
          }return this.pushStack(o.length > 1 ? m.unique(o) : o);
        }, index: function index(e) {
          return e ? "string" == typeof e ? c.call(m(e), this[0]) : c.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
        }, add: function add(e, t) {
          return this.pushStack(m.unique(m.merge(this.get(), m(e, t))));
        }, addBack: function addBack(e) {
          return this.add(null == e ? this.prevObject : this.prevObject.filter(e));
        } }), m.each({ parent: function parent(e) {
          var t = e.parentNode;return t && 11 !== t.nodeType ? t : null;
        }, parents: function parents(e) {
          return m.dir(e, "parentNode");
        }, parentsUntil: function parentsUntil(e, t, n) {
          return m.dir(e, "parentNode", n);
        }, next: function next(e) {
          return O(e, "nextSibling");
        }, prev: function prev(e) {
          return O(e, "previousSibling");
        }, nextAll: function nextAll(e) {
          return m.dir(e, "nextSibling");
        }, prevAll: function prevAll(e) {
          return m.dir(e, "previousSibling");
        }, nextUntil: function nextUntil(e, t, n) {
          return m.dir(e, "nextSibling", n);
        }, prevUntil: function prevUntil(e, t, n) {
          return m.dir(e, "previousSibling", n);
        }, siblings: function siblings(e) {
          return m.sibling((e.parentNode || {}).firstChild, e);
        }, children: function children(e) {
          return m.sibling(e.firstChild);
        }, contents: function contents(e) {
          return e.contentDocument || m.merge([], e.childNodes);
        } }, function (e, t) {
        m.fn[e] = function (n, r) {
          var i = m.map(this, t, n);return "Until" !== e.slice(-5) && (r = n), r && "string" == typeof r && (i = m.filter(r, i)), this.length > 1 && (A[e] || m.unique(i), j.test(e) && i.reverse()), this.pushStack(i);
        };
      });var L,
          H = /\S+/g,
          q = {};function M() {
        g.removeEventListener("DOMContentLoaded", M, !1), r.removeEventListener("load", M, !1), m.ready();
      }m.Callbacks = function (e) {
        var t,
            n,
            r,
            i,
            o,
            a,
            s = [],
            l = !(e = "string" == typeof e ? q[e] || function (e) {
          var t = q[e] = {};return m.each(e.match(H) || [], function (e, n) {
            t[n] = !0;
          }), t;
        }(e) : m.extend({}, e)).once && [],
            u = function u(f) {
          for (t = e.memory && f, n = !0, a = i || 0, i = 0, o = s.length, r = !0; s && a < o; a++) {
            if (!1 === s[a].apply(f[0], f[1]) && e.stopOnFalse) {
              t = !1;break;
            }
          }r = !1, s && (l ? l.length && u(l.shift()) : t ? s = [] : c.disable());
        },
            c = { add: function add() {
            if (s) {
              var n = s.length;!function t(n) {
                m.each(n, function (n, r) {
                  var i = m.type(r);"function" === i ? e.unique && c.has(r) || s.push(r) : r && r.length && "string" !== i && t(r);
                });
              }(arguments), r ? o = s.length : t && (i = n, u(t));
            }return this;
          }, remove: function remove() {
            return s && m.each(arguments, function (e, t) {
              for (var n; (n = m.inArray(t, s, n)) > -1;) {
                s.splice(n, 1), r && (n <= o && o--, n <= a && a--);
              }
            }), this;
          }, has: function has(e) {
            return e ? m.inArray(e, s) > -1 : !(!s || !s.length);
          }, empty: function empty() {
            return s = [], o = 0, this;
          }, disable: function disable() {
            return s = l = t = void 0, this;
          }, disabled: function disabled() {
            return !s;
          }, lock: function lock() {
            return l = void 0, t || c.disable(), this;
          }, locked: function locked() {
            return !l;
          }, fireWith: function fireWith(e, t) {
            return !s || n && !l || (t = [e, (t = t || []).slice ? t.slice() : t], r ? l.push(t) : u(t)), this;
          }, fire: function fire() {
            return c.fireWith(this, arguments), this;
          }, fired: function fired() {
            return !!n;
          } };return c;
      }, m.extend({ Deferred: function Deferred(e) {
          var t = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]],
              n = "pending",
              r = { state: function state() {
              return n;
            }, always: function always() {
              return i.done(arguments).fail(arguments), this;
            }, then: function then() {
              var e = arguments;return m.Deferred(function (n) {
                m.each(t, function (t, o) {
                  var a = m.isFunction(e[t]) && e[t];i[o[1]](function () {
                    var e = a && a.apply(this, arguments);e && m.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[o[0] + "With"](this === r ? n.promise() : this, a ? [e] : arguments);
                  });
                }), e = null;
              }).promise();
            }, promise: function promise(e) {
              return null != e ? m.extend(e, r) : r;
            } },
              i = {};return r.pipe = r.then, m.each(t, function (e, o) {
            var a = o[2],
                s = o[3];r[o[1]] = a.add, s && a.add(function () {
              n = s;
            }, t[1 ^ e][2].disable, t[2][2].lock), i[o[0]] = function () {
              return i[o[0] + "With"](this === i ? r : this, arguments), this;
            }, i[o[0] + "With"] = a.fireWith;
          }), r.promise(i), e && e.call(i, i), i;
        }, when: function when(e) {
          var t,
              n,
              r,
              i = 0,
              o = s.call(arguments),
              a = o.length,
              l = 1 !== a || e && m.isFunction(e.promise) ? a : 0,
              u = 1 === l ? e : m.Deferred(),
              c = function c(e, n, r) {
            return function (i) {
              n[e] = this, r[e] = arguments.length > 1 ? s.call(arguments) : i, r === t ? u.notifyWith(n, r) : --l || u.resolveWith(n, r);
            };
          };if (a > 1) for (t = new Array(a), n = new Array(a), r = new Array(a); i < a; i++) {
            o[i] && m.isFunction(o[i].promise) ? o[i].promise().done(c(i, r, o)).fail(u.reject).progress(c(i, n, t)) : --l;
          }return l || u.resolveWith(r, o), u.promise();
        } }), m.fn.ready = function (e) {
        return m.ready.promise().done(e), this;
      }, m.extend({ isReady: !1, readyWait: 1, holdReady: function holdReady(e) {
          e ? m.readyWait++ : m.ready(!0);
        }, ready: function ready(e) {
          (!0 === e ? --m.readyWait : m.isReady) || (m.isReady = !0, !0 !== e && --m.readyWait > 0 || (L.resolveWith(g, [m]), m.fn.triggerHandler && (m(g).triggerHandler("ready"), m(g).off("ready"))));
        } }), m.ready.promise = function (e) {
        return L || (L = m.Deferred(), "complete" === g.readyState ? setTimeout(m.ready) : (g.addEventListener("DOMContentLoaded", M, !1), r.addEventListener("load", M, !1))), L.promise(e);
      }, m.ready.promise();var P = m.access = function (e, t, n, r, i, o, a) {
        var s = 0,
            l = e.length,
            u = null == n;if ("object" === m.type(n)) for (s in i = !0, n) {
          m.access(e, t, s, n[s], !0, o, a);
        } else if (void 0 !== r && (i = !0, m.isFunction(r) || (a = !0), u && (a ? (t.call(e, r), t = null) : (u = t, t = function t(e, _t, n) {
          return u.call(m(e), n);
        })), t)) for (; s < l; s++) {
          t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
        }return i ? e : u ? t.call(e) : l ? t(e[0], n) : o;
      };function F() {
        Object.defineProperty(this.cache = {}, 0, { get: function get() {
            return {};
          } }), this.expando = m.expando + Math.random();
      }m.acceptData = function (e) {
        return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType;
      }, F.uid = 1, F.accepts = m.acceptData, F.prototype = { key: function key(e) {
          if (!F.accepts(e)) return 0;var t = {},
              n = e[this.expando];if (!n) {
            n = F.uid++;try {
              t[this.expando] = { value: n }, Object.defineProperties(e, t);
            } catch (r) {
              t[this.expando] = n, m.extend(e, t);
            }
          }return this.cache[n] || (this.cache[n] = {}), n;
        }, set: function set(e, t, n) {
          var r,
              i = this.key(e),
              o = this.cache[i];if ("string" == typeof t) o[t] = n;else if (m.isEmptyObject(o)) m.extend(this.cache[i], t);else for (r in t) {
            o[r] = t[r];
          }return o;
        }, get: function get(e, t) {
          var n = this.cache[this.key(e)];return void 0 === t ? n : n[t];
        }, access: function access(e, t, n) {
          var r;return void 0 === t || t && "string" == typeof t && void 0 === n ? void 0 !== (r = this.get(e, t)) ? r : this.get(e, m.camelCase(t)) : (this.set(e, t, n), void 0 !== n ? n : t);
        }, remove: function remove(e, t) {
          var n,
              r,
              i,
              o = this.key(e),
              a = this.cache[o];if (void 0 === t) this.cache[o] = {};else {
            m.isArray(t) ? r = t.concat(t.map(m.camelCase)) : (i = m.camelCase(t), r = t in a ? [t, i] : (r = i) in a ? [r] : r.match(H) || []), n = r.length;for (; n--;) {
              delete a[r[n]];
            }
          }
        }, hasData: function hasData(e) {
          return !m.isEmptyObject(this.cache[e[this.expando]] || {});
        }, discard: function discard(e) {
          e[this.expando] && delete this.cache[e[this.expando]];
        } };var I = new F(),
          R = new F(),
          W = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
          _ = /([A-Z])/g;function $(e, t, n) {
        var r;if (void 0 === n && 1 === e.nodeType) if (r = "data-" + t.replace(_, "-$1").toLowerCase(), "string" == typeof (n = e.getAttribute(r))) {
          try {
            n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : W.test(n) ? m.parseJSON(n) : n);
          } catch (e) {}R.set(e, t, n);
        } else n = void 0;return n;
      }m.extend({ hasData: function hasData(e) {
          return R.hasData(e) || I.hasData(e);
        }, data: function data(e, t, n) {
          return R.access(e, t, n);
        }, removeData: function removeData(e, t) {
          R.remove(e, t);
        }, _data: function _data(e, t, n) {
          return I.access(e, t, n);
        }, _removeData: function _removeData(e, t) {
          I.remove(e, t);
        } }), m.fn.extend({ data: function data(e, t) {
          var n,
              r,
              i,
              o = this[0],
              s = o && o.attributes;if (void 0 === e) {
            if (this.length && (i = R.get(o), 1 === o.nodeType && !I.get(o, "hasDataAttrs"))) {
              for (n = s.length; n--;) {
                s[n] && 0 === (r = s[n].name).indexOf("data-") && (r = m.camelCase(r.slice(5)), $(o, r, i[r]));
              }I.set(o, "hasDataAttrs", !0);
            }return i;
          }return "object" === (void 0 === e ? "undefined" : a(e)) ? this.each(function () {
            R.set(this, e);
          }) : P(this, function (t) {
            var n,
                r = m.camelCase(e);if (o && void 0 === t) return void 0 !== (n = R.get(o, e)) ? n : void 0 !== (n = R.get(o, r)) ? n : void 0 !== (n = $(o, r, void 0)) ? n : void 0;this.each(function () {
              var n = R.get(this, r);R.set(this, r, t), -1 !== e.indexOf("-") && void 0 !== n && R.set(this, e, t);
            });
          }, null, t, arguments.length > 1, null, !0);
        }, removeData: function removeData(e) {
          return this.each(function () {
            R.remove(this, e);
          });
        } }), m.extend({ queue: function queue(e, t, n) {
          var r;if (e) return t = (t || "fx") + "queue", r = I.get(e, t), n && (!r || m.isArray(n) ? r = I.access(e, t, m.makeArray(n)) : r.push(n)), r || [];
        }, dequeue: function dequeue(e, t) {
          t = t || "fx";var n = m.queue(e, t),
              r = n.length,
              i = n.shift(),
              o = m._queueHooks(e, t);"inprogress" === i && (i = n.shift(), r--), i && ("fx" === t && n.unshift("inprogress"), delete o.stop, i.call(e, function () {
            m.dequeue(e, t);
          }, o)), !r && o && o.empty.fire();
        }, _queueHooks: function _queueHooks(e, t) {
          var n = t + "queueHooks";return I.get(e, n) || I.access(e, n, { empty: m.Callbacks("once memory").add(function () {
              I.remove(e, [t + "queue", n]);
            }) });
        } }), m.fn.extend({ queue: function queue(e, t) {
          var n = 2;return "string" != typeof e && (t = e, e = "fx", n--), arguments.length < n ? m.queue(this[0], e) : void 0 === t ? this : this.each(function () {
            var n = m.queue(this, e, t);m._queueHooks(this, e), "fx" === e && "inprogress" !== n[0] && m.dequeue(this, e);
          });
        }, dequeue: function dequeue(e) {
          return this.each(function () {
            m.dequeue(this, e);
          });
        }, clearQueue: function clearQueue(e) {
          return this.queue(e || "fx", []);
        }, promise: function promise(e, t) {
          var n,
              r = 1,
              i = m.Deferred(),
              o = this,
              a = this.length,
              s = function s() {
            --r || i.resolveWith(o, [o]);
          };for ("string" != typeof e && (t = e, e = void 0), e = e || "fx"; a--;) {
            (n = I.get(o[a], e + "queueHooks")) && n.empty && (r++, n.empty.add(s));
          }return s(), i.promise(t);
        } });var B,
          z,
          X = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
          J = ["Top", "Right", "Bottom", "Left"],
          U = function U(e, t) {
        return e = t || e, "none" === m.css(e, "display") || !m.contains(e.ownerDocument, e);
      },
          V = /^(?:checkbox|radio)$/i;B = g.createDocumentFragment().appendChild(g.createElement("div")), (z = g.createElement("input")).setAttribute("type", "radio"), z.setAttribute("checked", "checked"), z.setAttribute("name", "t"), B.appendChild(z), h.checkClone = B.cloneNode(!0).cloneNode(!0).lastChild.checked, B.innerHTML = "<textarea>x</textarea>", h.noCloneChecked = !!B.cloneNode(!0).lastChild.defaultValue;h.focusinBubbles = "onfocusin" in r;var Y = /^key/,
          G = /^(?:mouse|pointer|contextmenu)|click/,
          Q = /^(?:focusinfocus|focusoutblur)$/,
          K = /^([^.]*)(?:\.(.+)|)$/;function Z() {
        return !0;
      }function ee() {
        return !1;
      }function te() {
        try {
          return g.activeElement;
        } catch (e) {}
      }m.event = { global: {}, add: function add(e, t, n, r, i) {
          var o,
              s,
              l,
              u,
              c,
              f,
              p,
              d,
              h,
              g,
              v,
              y = I.get(e);if (y) for (n.handler && (n = (o = n).handler, i = o.selector), n.guid || (n.guid = m.guid++), (u = y.events) || (u = y.events = {}), (s = y.handle) || (s = y.handle = function (t) {
            return "undefined" !== (void 0 === m ? "undefined" : a(m)) && m.event.triggered !== t.type ? m.event.dispatch.apply(e, arguments) : void 0;
          }), c = (t = (t || "").match(H) || [""]).length; c--;) {
            h = v = (l = K.exec(t[c]) || [])[1], g = (l[2] || "").split(".").sort(), h && (p = m.event.special[h] || {}, h = (i ? p.delegateType : p.bindType) || h, p = m.event.special[h] || {}, f = m.extend({ type: h, origType: v, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && m.expr.match.needsContext.test(i), namespace: g.join(".") }, o), (d = u[h]) || ((d = u[h] = []).delegateCount = 0, p.setup && !1 !== p.setup.call(e, r, g, s) || e.addEventListener && e.addEventListener(h, s, !1)), p.add && (p.add.call(e, f), f.handler.guid || (f.handler.guid = n.guid)), i ? d.splice(d.delegateCount++, 0, f) : d.push(f), m.event.global[h] = !0);
          }
        }, remove: function remove(e, t, n, r, i) {
          var o,
              a,
              s,
              l,
              u,
              c,
              f,
              p,
              d,
              h,
              g,
              v = I.hasData(e) && I.get(e);if (v && (l = v.events)) {
            for (u = (t = (t || "").match(H) || [""]).length; u--;) {
              if (d = g = (s = K.exec(t[u]) || [])[1], h = (s[2] || "").split(".").sort(), d) {
                for (f = m.event.special[d] || {}, p = l[d = (r ? f.delegateType : f.bindType) || d] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = p.length; o--;) {
                  c = p[o], !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1), c.selector && p.delegateCount--, f.remove && f.remove.call(e, c));
                }a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || m.removeEvent(e, d, v.handle), delete l[d]);
              } else for (d in l) {
                m.event.remove(e, d + t[u], n, r, !0);
              }
            }m.isEmptyObject(l) && (delete v.handle, I.remove(e, "events"));
          }
        }, trigger: function trigger(e, t, n, i) {
          var o,
              s,
              l,
              u,
              c,
              f,
              p,
              h = [n || g],
              v = d.call(e, "type") ? e.type : e,
              y = d.call(e, "namespace") ? e.namespace.split(".") : [];if (s = l = n = n || g, 3 !== n.nodeType && 8 !== n.nodeType && !Q.test(v + m.event.triggered) && (v.indexOf(".") >= 0 && (v = (y = v.split(".")).shift(), y.sort()), c = v.indexOf(":") < 0 && "on" + v, (e = e[m.expando] ? e : new m.Event(v, "object" === (void 0 === e ? "undefined" : a(e)) && e)).isTrigger = i ? 2 : 3, e.namespace = y.join("."), e.namespace_re = e.namespace ? new RegExp("(^|\\.)" + y.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = void 0, e.target || (e.target = n), t = null == t ? [e] : m.makeArray(t, [e]), p = m.event.special[v] || {}, i || !p.trigger || !1 !== p.trigger.apply(n, t))) {
            if (!i && !p.noBubble && !m.isWindow(n)) {
              for (u = p.delegateType || v, Q.test(u + v) || (s = s.parentNode); s; s = s.parentNode) {
                h.push(s), l = s;
              }l === (n.ownerDocument || g) && h.push(l.defaultView || l.parentWindow || r);
            }for (o = 0; (s = h[o++]) && !e.isPropagationStopped();) {
              e.type = o > 1 ? u : p.bindType || v, (f = (I.get(s, "events") || {})[e.type] && I.get(s, "handle")) && f.apply(s, t), (f = c && s[c]) && f.apply && m.acceptData(s) && (e.result = f.apply(s, t), !1 === e.result && e.preventDefault());
            }return e.type = v, i || e.isDefaultPrevented() || p._default && !1 !== p._default.apply(h.pop(), t) || !m.acceptData(n) || c && m.isFunction(n[v]) && !m.isWindow(n) && ((l = n[c]) && (n[c] = null), m.event.triggered = v, n[v](), m.event.triggered = void 0, l && (n[c] = l)), e.result;
          }
        }, dispatch: function dispatch(e) {
          e = m.event.fix(e);var t,
              n,
              r,
              i,
              o,
              a,
              l = s.call(arguments),
              u = (I.get(this, "events") || {})[e.type] || [],
              c = m.event.special[e.type] || {};if (l[0] = e, e.delegateTarget = this, !c.preDispatch || !1 !== c.preDispatch.call(this, e)) {
            for (a = m.event.handlers.call(this, e, u), t = 0; (i = a[t++]) && !e.isPropagationStopped();) {
              for (e.currentTarget = i.elem, n = 0; (o = i.handlers[n++]) && !e.isImmediatePropagationStopped();) {
                e.namespace_re && !e.namespace_re.test(o.namespace) || (e.handleObj = o, e.data = o.data, void 0 !== (r = ((m.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, l)) && !1 === (e.result = r) && (e.preventDefault(), e.stopPropagation()));
              }
            }return c.postDispatch && c.postDispatch.call(this, e), e.result;
          }
        }, handlers: function handlers(e, t) {
          var n,
              r,
              i,
              o,
              a = [],
              s = t.delegateCount,
              l = e.target;if (s && l.nodeType && (!e.button || "click" !== e.type)) for (; l !== this; l = l.parentNode || this) {
            if (!0 !== l.disabled || "click" !== e.type) {
              for (r = [], n = 0; n < s; n++) {
                void 0 === r[i = (o = t[n]).selector + " "] && (r[i] = o.needsContext ? m(i, this).index(l) >= 0 : m.find(i, this, null, [l]).length), r[i] && r.push(o);
              }r.length && a.push({ elem: l, handlers: r });
            }
          }return s < t.length && a.push({ elem: this, handlers: t.slice(s) }), a;
        }, props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "), fixHooks: {}, keyHooks: { props: "char charCode key keyCode".split(" "), filter: function filter(e, t) {
            return null == e.which && (e.which = null != t.charCode ? t.charCode : t.keyCode), e;
          } }, mouseHooks: { props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "), filter: function filter(e, t) {
            var n,
                r,
                i,
                o = t.button;return null == e.pageX && null != t.clientX && (r = (n = e.target.ownerDocument || g).documentElement, i = n.body, e.pageX = t.clientX + (r && r.scrollLeft || i && i.scrollLeft || 0) - (r && r.clientLeft || i && i.clientLeft || 0), e.pageY = t.clientY + (r && r.scrollTop || i && i.scrollTop || 0) - (r && r.clientTop || i && i.clientTop || 0)), e.which || void 0 === o || (e.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), e;
          } }, fix: function fix(e) {
          if (e[m.expando]) return e;var t,
              n,
              r,
              i = e.type,
              o = e,
              a = this.fixHooks[i];for (a || (this.fixHooks[i] = a = G.test(i) ? this.mouseHooks : Y.test(i) ? this.keyHooks : {}), r = a.props ? this.props.concat(a.props) : this.props, e = new m.Event(o), t = r.length; t--;) {
            e[n = r[t]] = o[n];
          }return e.target || (e.target = g), 3 === e.target.nodeType && (e.target = e.target.parentNode), a.filter ? a.filter(e, o) : e;
        }, special: { load: { noBubble: !0 }, focus: { trigger: function trigger() {
              if (this !== te() && this.focus) return this.focus(), !1;
            }, delegateType: "focusin" }, blur: { trigger: function trigger() {
              if (this === te() && this.blur) return this.blur(), !1;
            }, delegateType: "focusout" }, click: { trigger: function trigger() {
              if ("checkbox" === this.type && this.click && m.nodeName(this, "input")) return this.click(), !1;
            }, _default: function _default(e) {
              return m.nodeName(e.target, "a");
            } }, beforeunload: { postDispatch: function postDispatch(e) {
              void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result);
            } } }, simulate: function simulate(e, t, n, r) {
          var i = m.extend(new m.Event(), n, { type: e, isSimulated: !0, originalEvent: {} });r ? m.event.trigger(i, null, t) : m.event.dispatch.call(t, i), i.isDefaultPrevented() && n.preventDefault();
        } }, m.removeEvent = function (e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1);
      }, m.Event = function (e, t) {
        if (!(this instanceof m.Event)) return new m.Event(e, t);e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? Z : ee) : this.type = e, t && m.extend(this, t), this.timeStamp = e && e.timeStamp || m.now(), this[m.expando] = !0;
      }, m.Event.prototype = { isDefaultPrevented: ee, isPropagationStopped: ee, isImmediatePropagationStopped: ee, preventDefault: function preventDefault() {
          var e = this.originalEvent;this.isDefaultPrevented = Z, e && e.preventDefault && e.preventDefault();
        }, stopPropagation: function stopPropagation() {
          var e = this.originalEvent;this.isPropagationStopped = Z, e && e.stopPropagation && e.stopPropagation();
        }, stopImmediatePropagation: function stopImmediatePropagation() {
          var e = this.originalEvent;this.isImmediatePropagationStopped = Z, e && e.stopImmediatePropagation && e.stopImmediatePropagation(), this.stopPropagation();
        } }, m.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (e, t) {
        m.event.special[e] = { delegateType: t, bindType: t, handle: function handle(e) {
            var n,
                r = e.relatedTarget,
                i = e.handleObj;return r && (r === this || m.contains(this, r)) || (e.type = i.origType, n = i.handler.apply(this, arguments), e.type = t), n;
          } };
      }), h.focusinBubbles || m.each({ focus: "focusin", blur: "focusout" }, function (e, t) {
        var n = function n(e) {
          m.event.simulate(t, e.target, m.event.fix(e), !0);
        };m.event.special[t] = { setup: function setup() {
            var r = this.ownerDocument || this,
                i = I.access(r, t);i || r.addEventListener(e, n, !0), I.access(r, t, (i || 0) + 1);
          }, teardown: function teardown() {
            var r = this.ownerDocument || this,
                i = I.access(r, t) - 1;i ? I.access(r, t, i) : (r.removeEventListener(e, n, !0), I.remove(r, t));
          } };
      }), m.fn.extend({ on: function on(e, t, n, r, i) {
          var o, s;if ("object" === (void 0 === e ? "undefined" : a(e))) {
            for (s in "string" != typeof t && (n = n || t, t = void 0), e) {
              this.on(s, t, n, e[s], i);
            }return this;
          }if (null == n && null == r ? (r = t, n = t = void 0) : null == r && ("string" == typeof t ? (r = n, n = void 0) : (r = n, n = t, t = void 0)), !1 === r) r = ee;else if (!r) return this;return 1 === i && (o = r, (r = function r(e) {
            return m().off(e), o.apply(this, arguments);
          }).guid = o.guid || (o.guid = m.guid++)), this.each(function () {
            m.event.add(this, e, r, n, t);
          });
        }, one: function one(e, t, n, r) {
          return this.on(e, t, n, r, 1);
        }, off: function off(e, t, n) {
          var r, i;if (e && e.preventDefault && e.handleObj) return r = e.handleObj, m(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this;if ("object" === (void 0 === e ? "undefined" : a(e))) {
            for (i in e) {
              this.off(i, t, e[i]);
            }return this;
          }return !1 !== t && "function" != typeof t || (n = t, t = void 0), !1 === n && (n = ee), this.each(function () {
            m.event.remove(this, e, n, t);
          });
        }, trigger: function trigger(e, t) {
          return this.each(function () {
            m.event.trigger(e, t, this);
          });
        }, triggerHandler: function triggerHandler(e, t) {
          var n = this[0];if (n) return m.event.trigger(e, t, n, !0);
        } });var ne = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
          re = /<([\w:]+)/,
          ie = /<|&#?\w+;/,
          oe = /<(?:script|style|link)/i,
          ae = /checked\s*(?:[^=]|=\s*.checked.)/i,
          se = /^$|\/(?:java|ecma)script/i,
          le = /^true\/(.*)/,
          ue = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
          ce = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };function fe(e, t) {
        return m.nodeName(e, "table") && m.nodeName(11 !== t.nodeType ? t : t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e;
      }function pe(e) {
        return e.type = (null !== e.getAttribute("type")) + "/" + e.type, e;
      }function de(e) {
        var t = le.exec(e.type);return t ? e.type = t[1] : e.removeAttribute("type"), e;
      }function he(e, t) {
        for (var n = 0, r = e.length; n < r; n++) {
          I.set(e[n], "globalEval", !t || I.get(t[n], "globalEval"));
        }
      }function ge(e, t) {
        var n, r, i, o, a, s, l, u;if (1 === t.nodeType) {
          if (I.hasData(e) && (o = I.access(e), a = I.set(t, o), u = o.events)) for (i in delete a.handle, a.events = {}, u) {
            for (n = 0, r = u[i].length; n < r; n++) {
              m.event.add(t, i, u[i][n]);
            }
          }R.hasData(e) && (s = R.access(e), l = m.extend({}, s), R.set(t, l));
        }
      }function me(e, t) {
        var n = e.getElementsByTagName ? e.getElementsByTagName(t || "*") : e.querySelectorAll ? e.querySelectorAll(t || "*") : [];return void 0 === t || t && m.nodeName(e, t) ? m.merge([e], n) : n;
      }ce.optgroup = ce.option, ce.tbody = ce.tfoot = ce.colgroup = ce.caption = ce.thead, ce.th = ce.td, m.extend({ clone: function clone(e, t, n) {
          var r,
              i,
              o,
              a,
              s,
              l,
              u,
              c = e.cloneNode(!0),
              f = m.contains(e.ownerDocument, e);if (!(h.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || m.isXMLDoc(e))) for (a = me(c), r = 0, i = (o = me(e)).length; r < i; r++) {
            s = o[r], l = a[r], void 0, "input" === (u = l.nodeName.toLowerCase()) && V.test(s.type) ? l.checked = s.checked : "input" !== u && "textarea" !== u || (l.defaultValue = s.defaultValue);
          }if (t) if (n) for (o = o || me(e), a = a || me(c), r = 0, i = o.length; r < i; r++) {
            ge(o[r], a[r]);
          } else ge(e, c);return (a = me(c, "script")).length > 0 && he(a, !f && me(e, "script")), c;
        }, buildFragment: function buildFragment(e, t, n, r) {
          for (var i, o, a, s, l, u, c = t.createDocumentFragment(), f = [], p = 0, d = e.length; p < d; p++) {
            if ((i = e[p]) || 0 === i) if ("object" === m.type(i)) m.merge(f, i.nodeType ? [i] : i);else if (ie.test(i)) {
              for (o = o || c.appendChild(t.createElement("div")), a = (re.exec(i) || ["", ""])[1].toLowerCase(), s = ce[a] || ce._default, o.innerHTML = s[1] + i.replace(ne, "<$1></$2>") + s[2], u = s[0]; u--;) {
                o = o.lastChild;
              }m.merge(f, o.childNodes), (o = c.firstChild).textContent = "";
            } else f.push(t.createTextNode(i));
          }for (c.textContent = "", p = 0; i = f[p++];) {
            if ((!r || -1 === m.inArray(i, r)) && (l = m.contains(i.ownerDocument, i), o = me(c.appendChild(i), "script"), l && he(o), n)) for (u = 0; i = o[u++];) {
              se.test(i.type || "") && n.push(i);
            }
          }return c;
        }, cleanData: function cleanData(e) {
          for (var t, n, r, i, o = m.event.special, a = 0; void 0 !== (n = e[a]); a++) {
            if (m.acceptData(n) && (i = n[I.expando]) && (t = I.cache[i])) {
              if (t.events) for (r in t.events) {
                o[r] ? m.event.remove(n, r) : m.removeEvent(n, r, t.handle);
              }I.cache[i] && delete I.cache[i];
            }delete R.cache[n[R.expando]];
          }
        } }), m.fn.extend({ text: function text(e) {
          return P(this, function (e) {
            return void 0 === e ? m.text(this) : this.empty().each(function () {
              1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e);
            });
          }, null, e, arguments.length);
        }, append: function append() {
          return this.domManip(arguments, function (e) {
            1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || fe(this, e).appendChild(e);
          });
        }, prepend: function prepend() {
          return this.domManip(arguments, function (e) {
            if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
              var t = fe(this, e);t.insertBefore(e, t.firstChild);
            }
          });
        }, before: function before() {
          return this.domManip(arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this);
          });
        }, after: function after() {
          return this.domManip(arguments, function (e) {
            this.parentNode && this.parentNode.insertBefore(e, this.nextSibling);
          });
        }, remove: function remove(e, t) {
          for (var n, r = e ? m.filter(e, this) : this, i = 0; null != (n = r[i]); i++) {
            t || 1 !== n.nodeType || m.cleanData(me(n)), n.parentNode && (t && m.contains(n.ownerDocument, n) && he(me(n, "script")), n.parentNode.removeChild(n));
          }return this;
        }, empty: function empty() {
          for (var e, t = 0; null != (e = this[t]); t++) {
            1 === e.nodeType && (m.cleanData(me(e, !1)), e.textContent = "");
          }return this;
        }, clone: function clone(e, t) {
          return e = null != e && e, t = null == t ? e : t, this.map(function () {
            return m.clone(this, e, t);
          });
        }, html: function html(e) {
          return P(this, function (e) {
            var t = this[0] || {},
                n = 0,
                r = this.length;if (void 0 === e && 1 === t.nodeType) return t.innerHTML;if ("string" == typeof e && !oe.test(e) && !ce[(re.exec(e) || ["", ""])[1].toLowerCase()]) {
              e = e.replace(ne, "<$1></$2>");try {
                for (; n < r; n++) {
                  1 === (t = this[n] || {}).nodeType && (m.cleanData(me(t, !1)), t.innerHTML = e);
                }t = 0;
              } catch (e) {}
            }t && this.empty().append(e);
          }, null, e, arguments.length);
        }, replaceWith: function replaceWith() {
          var e = arguments[0];return this.domManip(arguments, function (t) {
            e = this.parentNode, m.cleanData(me(this)), e && e.replaceChild(t, this);
          }), e && (e.length || e.nodeType) ? this : this.remove();
        }, detach: function detach(e) {
          return this.remove(e, !0);
        }, domManip: function domManip(e, t) {
          e = l.apply([], e);var n,
              r,
              i,
              o,
              a,
              s,
              u = 0,
              c = this.length,
              f = this,
              p = c - 1,
              d = e[0],
              g = m.isFunction(d);if (g || c > 1 && "string" == typeof d && !h.checkClone && ae.test(d)) return this.each(function (n) {
            var r = f.eq(n);g && (e[0] = d.call(this, n, r.html())), r.domManip(e, t);
          });if (c && (r = (n = m.buildFragment(e, this[0].ownerDocument, !1, this)).firstChild, 1 === n.childNodes.length && (n = r), r)) {
            for (o = (i = m.map(me(n, "script"), pe)).length; u < c; u++) {
              a = n, u !== p && (a = m.clone(a, !0, !0), o && m.merge(i, me(a, "script"))), t.call(this[u], a, u);
            }if (o) for (s = i[i.length - 1].ownerDocument, m.map(i, de), u = 0; u < o; u++) {
              a = i[u], se.test(a.type || "") && !I.access(a, "globalEval") && m.contains(s, a) && (a.src ? m._evalUrl && m._evalUrl(a.src) : m.globalEval(a.textContent.replace(ue, "")));
            }
          }return this;
        } }), m.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (e, t) {
        m.fn[e] = function (e) {
          for (var n, r = [], i = m(e), o = i.length - 1, a = 0; a <= o; a++) {
            n = a === o ? this : this.clone(!0), m(i[a])[t](n), u.apply(r, n.get());
          }return this.pushStack(r);
        };
      });var ve,
          ye = {};function xe(e, t) {
        var n,
            i = m(t.createElement(e)).appendTo(t.body),
            o = r.getDefaultComputedStyle && (n = r.getDefaultComputedStyle(i[0])) ? n.display : m.css(i[0], "display");return i.detach(), o;
      }function be(e) {
        var t = g,
            n = ye[e];return n || ("none" !== (n = xe(e, t)) && n || ((t = (ve = (ve || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(t.documentElement))[0].contentDocument).write(), t.close(), n = xe(e, t), ve.detach()), ye[e] = n), n;
      }var we = /^margin/,
          Te = new RegExp("^(" + X + ")(?!px)[a-z%]+$", "i"),
          Ce = function Ce(e) {
        return e.ownerDocument.defaultView.getComputedStyle(e, null);
      };function Ne(e, t, n) {
        var r,
            i,
            o,
            a,
            s = e.style;return (n = n || Ce(e)) && (a = n.getPropertyValue(t) || n[t]), n && ("" !== a || m.contains(e.ownerDocument, e) || (a = m.style(e, t)), Te.test(a) && we.test(t) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a;
      }function ke(e, t) {
        return { get: function get() {
            if (!e()) return (this.get = t).apply(this, arguments);delete this.get;
          } };
      }!function () {
        var e,
            t,
            n = g.documentElement,
            i = g.createElement("div"),
            o = g.createElement("div");function a() {
          o.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", o.innerHTML = "", n.appendChild(i);var a = r.getComputedStyle(o, null);e = "1%" !== a.top, t = "4px" === a.width, n.removeChild(i);
        }o.style && (o.style.backgroundClip = "content-box", o.cloneNode(!0).style.backgroundClip = "", h.clearCloneStyle = "content-box" === o.style.backgroundClip, i.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute", i.appendChild(o), r.getComputedStyle && m.extend(h, { pixelPosition: function pixelPosition() {
            return a(), e;
          }, boxSizingReliable: function boxSizingReliable() {
            return null == t && a(), t;
          }, reliableMarginRight: function reliableMarginRight() {
            var e,
                t = o.appendChild(g.createElement("div"));return t.style.cssText = o.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", t.style.marginRight = t.style.width = "0", o.style.width = "1px", n.appendChild(i), e = !parseFloat(r.getComputedStyle(t, null).marginRight), n.removeChild(i), e;
          } }));
      }(), m.swap = function (e, t, n, r) {
        var i,
            o,
            a = {};for (o in t) {
          a[o] = e.style[o], e.style[o] = t[o];
        }for (o in i = n.apply(e, r || []), t) {
          e.style[o] = a[o];
        }return i;
      };var Se = /^(none|table(?!-c[ea]).+)/,
          Ee = new RegExp("^(" + X + ")(.*)$", "i"),
          De = new RegExp("^([+-])=(" + X + ")", "i"),
          je = { position: "absolute", visibility: "hidden", display: "block" },
          Ae = { letterSpacing: "0", fontWeight: "400" },
          Oe = ["Webkit", "O", "Moz", "ms"];function Le(e, t) {
        if (t in e) return t;for (var n = t[0].toUpperCase() + t.slice(1), r = t, i = Oe.length; i--;) {
          if ((t = Oe[i] + n) in e) return t;
        }return r;
      }function He(e, t, n) {
        var r = Ee.exec(t);return r ? Math.max(0, r[1] - (n || 0)) + (r[2] || "px") : t;
      }function qe(e, t, n, r, i) {
        for (var o = n === (r ? "border" : "content") ? 4 : "width" === t ? 1 : 0, a = 0; o < 4; o += 2) {
          "margin" === n && (a += m.css(e, n + J[o], !0, i)), r ? ("content" === n && (a -= m.css(e, "padding" + J[o], !0, i)), "margin" !== n && (a -= m.css(e, "border" + J[o] + "Width", !0, i))) : (a += m.css(e, "padding" + J[o], !0, i), "padding" !== n && (a += m.css(e, "border" + J[o] + "Width", !0, i)));
        }return a;
      }function Me(e, t, n) {
        var r = !0,
            i = "width" === t ? e.offsetWidth : e.offsetHeight,
            o = Ce(e),
            a = "border-box" === m.css(e, "boxSizing", !1, o);if (i <= 0 || null == i) {
          if (((i = Ne(e, t, o)) < 0 || null == i) && (i = e.style[t]), Te.test(i)) return i;r = a && (h.boxSizingReliable() || i === e.style[t]), i = parseFloat(i) || 0;
        }return i + qe(e, t, n || (a ? "border" : "content"), r, o) + "px";
      }function Pe(e, t) {
        for (var n, r, i, o = [], a = 0, s = e.length; a < s; a++) {
          (r = e[a]).style && (o[a] = I.get(r, "olddisplay"), n = r.style.display, t ? (o[a] || "none" !== n || (r.style.display = ""), "" === r.style.display && U(r) && (o[a] = I.access(r, "olddisplay", be(r.nodeName)))) : (i = U(r), "none" === n && i || I.set(r, "olddisplay", i ? n : m.css(r, "display"))));
        }for (a = 0; a < s; a++) {
          (r = e[a]).style && (t && "none" !== r.style.display && "" !== r.style.display || (r.style.display = t ? o[a] || "" : "none"));
        }return e;
      }function Fe(e, t, n, r, i) {
        return new Fe.prototype.init(e, t, n, r, i);
      }m.extend({ cssHooks: { opacity: { get: function get(e, t) {
              if (t) {
                var n = Ne(e, "opacity");return "" === n ? "1" : n;
              }
            } } }, cssNumber: { columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 }, cssProps: { float: "cssFloat" }, style: function style(e, t, n, r) {
          if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
            var i,
                o,
                s,
                l = m.camelCase(t),
                u = e.style;if (t = m.cssProps[l] || (m.cssProps[l] = Le(u, l)), s = m.cssHooks[t] || m.cssHooks[l], void 0 === n) return s && "get" in s && void 0 !== (i = s.get(e, !1, r)) ? i : u[t];"string" === (o = void 0 === n ? "undefined" : a(n)) && (i = De.exec(n)) && (n = (i[1] + 1) * i[2] + parseFloat(m.css(e, t)), o = "number"), null != n && n == n && ("number" !== o || m.cssNumber[l] || (n += "px"), h.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (u[t] = "inherit"), s && "set" in s && void 0 === (n = s.set(e, n, r)) || (u[t] = n));
          }
        }, css: function css(e, t, n, r) {
          var i,
              o,
              a,
              s = m.camelCase(t);return t = m.cssProps[s] || (m.cssProps[s] = Le(e.style, s)), (a = m.cssHooks[t] || m.cssHooks[s]) && "get" in a && (i = a.get(e, !0, n)), void 0 === i && (i = Ne(e, t, r)), "normal" === i && t in Ae && (i = Ae[t]), "" === n || n ? (o = parseFloat(i), !0 === n || m.isNumeric(o) ? o || 0 : i) : i;
        } }), m.each(["height", "width"], function (e, t) {
        m.cssHooks[t] = { get: function get(e, n, r) {
            if (n) return Se.test(m.css(e, "display")) && 0 === e.offsetWidth ? m.swap(e, je, function () {
              return Me(e, t, r);
            }) : Me(e, t, r);
          }, set: function set(e, n, r) {
            var i = r && Ce(e);return He(0, n, r ? qe(e, t, r, "border-box" === m.css(e, "boxSizing", !1, i), i) : 0);
          } };
      }), m.cssHooks.marginRight = ke(h.reliableMarginRight, function (e, t) {
        if (t) return m.swap(e, { display: "inline-block" }, Ne, [e, "marginRight"]);
      }), m.each({ margin: "", padding: "", border: "Width" }, function (e, t) {
        m.cssHooks[e + t] = { expand: function expand(n) {
            for (var r = 0, i = {}, o = "string" == typeof n ? n.split(" ") : [n]; r < 4; r++) {
              i[e + J[r] + t] = o[r] || o[r - 2] || o[0];
            }return i;
          } }, we.test(e) || (m.cssHooks[e + t].set = He);
      }), m.fn.extend({ css: function css(e, t) {
          return P(this, function (e, t, n) {
            var r,
                i,
                o = {},
                a = 0;if (m.isArray(t)) {
              for (r = Ce(e), i = t.length; a < i; a++) {
                o[t[a]] = m.css(e, t[a], !1, r);
              }return o;
            }return void 0 !== n ? m.style(e, t, n) : m.css(e, t);
          }, e, t, arguments.length > 1);
        }, show: function show() {
          return Pe(this, !0);
        }, hide: function hide() {
          return Pe(this);
        }, toggle: function toggle(e) {
          return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function () {
            U(this) ? m(this).show() : m(this).hide();
          });
        } }), m.Tween = Fe, Fe.prototype = { constructor: Fe, init: function init(e, t, n, r, i, o) {
          this.elem = e, this.prop = n, this.easing = i || "swing", this.options = t, this.start = this.now = this.cur(), this.end = r, this.unit = o || (m.cssNumber[n] ? "" : "px");
        }, cur: function cur() {
          var e = Fe.propHooks[this.prop];return e && e.get ? e.get(this) : Fe.propHooks._default.get(this);
        }, run: function run(e) {
          var t,
              n = Fe.propHooks[this.prop];return this.options.duration ? this.pos = t = m.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e, this.now = (this.end - this.start) * t + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : Fe.propHooks._default.set(this), this;
        } }, Fe.prototype.init.prototype = Fe.prototype, Fe.propHooks = { _default: { get: function get(e) {
            var t;return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = m.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0 : e.elem[e.prop];
          }, set: function set(e) {
            m.fx.step[e.prop] ? m.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[m.cssProps[e.prop]] || m.cssHooks[e.prop]) ? m.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now;
          } } }, Fe.propHooks.scrollTop = Fe.propHooks.scrollLeft = { set: function set(e) {
          e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now);
        } }, m.easing = { linear: function linear(e) {
          return e;
        }, swing: function swing(e) {
          return .5 - Math.cos(e * Math.PI) / 2;
        } }, m.fx = Fe.prototype.init, m.fx.step = {};var Ie,
          Re,
          We = /^(?:toggle|show|hide)$/,
          _e = new RegExp("^(?:([+-])=|)(" + X + ")([a-z%]*)$", "i"),
          $e = /queueHooks$/,
          Be = [function (e, t, n) {
        var r,
            i,
            o,
            a,
            s,
            l,
            u,
            c = this,
            f = {},
            p = e.style,
            d = e.nodeType && U(e),
            h = I.get(e, "fxshow");n.queue || (null == (s = m._queueHooks(e, "fx")).unqueued && (s.unqueued = 0, l = s.empty.fire, s.empty.fire = function () {
          s.unqueued || l();
        }), s.unqueued++, c.always(function () {
          c.always(function () {
            s.unqueued--, m.queue(e, "fx").length || s.empty.fire();
          });
        }));1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], u = m.css(e, "display"), "inline" === ("none" === u ? I.get(e, "olddisplay") || be(e.nodeName) : u) && "none" === m.css(e, "float") && (p.display = "inline-block"));n.overflow && (p.overflow = "hidden", c.always(function () {
          p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2];
        }));for (r in t) {
          if (i = t[r], We.exec(i)) {
            if (delete t[r], o = o || "toggle" === i, i === (d ? "hide" : "show")) {
              if ("show" !== i || !h || void 0 === h[r]) continue;d = !0;
            }f[r] = h && h[r] || m.style(e, r);
          } else u = void 0;
        }if (m.isEmptyObject(f)) "inline" === ("none" === u ? be(e.nodeName) : u) && (p.display = u);else for (r in h ? "hidden" in h && (d = h.hidden) : h = I.access(e, "fxshow", {}), o && (h.hidden = !d), d ? m(e).show() : c.done(function () {
          m(e).hide();
        }), c.done(function () {
          var t;for (t in I.remove(e, "fxshow"), f) {
            m.style(e, t, f[t]);
          }
        }), f) {
          a = Ue(d ? h[r] : 0, r, c), r in h || (h[r] = a.start, d && (a.end = a.start, a.start = "width" === r || "height" === r ? 1 : 0));
        }
      }],
          ze = { "*": [function (e, t) {
          var n = this.createTween(e, t),
              r = n.cur(),
              i = _e.exec(t),
              o = i && i[3] || (m.cssNumber[e] ? "" : "px"),
              a = (m.cssNumber[e] || "px" !== o && +r) && _e.exec(m.css(n.elem, e)),
              s = 1,
              l = 20;if (a && a[3] !== o) {
            o = o || a[3], i = i || [], a = +r || 1;do {
              a /= s = s || ".5", m.style(n.elem, e, a + o);
            } while (s !== (s = n.cur() / r) && 1 !== s && --l);
          }return i && (a = n.start = +a || +r || 0, n.unit = o, n.end = i[1] ? a + (i[1] + 1) * i[2] : +i[2]), n;
        }] };function Xe() {
        return setTimeout(function () {
          Ie = void 0;
        }), Ie = m.now();
      }function Je(e, t) {
        var n,
            r = 0,
            i = { height: e };for (t = t ? 1 : 0; r < 4; r += 2 - t) {
          i["margin" + (n = J[r])] = i["padding" + n] = e;
        }return t && (i.opacity = i.width = e), i;
      }function Ue(e, t, n) {
        for (var r, i = (ze[t] || []).concat(ze["*"]), o = 0, a = i.length; o < a; o++) {
          if (r = i[o].call(n, t, e)) return r;
        }
      }function Ve(e, t, n) {
        var r,
            i,
            o = 0,
            a = Be.length,
            s = m.Deferred().always(function () {
          delete l.elem;
        }),
            l = function l() {
          if (i) return !1;for (var t = Ie || Xe(), n = Math.max(0, u.startTime + u.duration - t), r = 1 - (n / u.duration || 0), o = 0, a = u.tweens.length; o < a; o++) {
            u.tweens[o].run(r);
          }return s.notifyWith(e, [u, r, n]), r < 1 && a ? n : (s.resolveWith(e, [u]), !1);
        },
            u = s.promise({ elem: e, props: m.extend({}, t), opts: m.extend(!0, { specialEasing: {} }, n), originalProperties: t, originalOptions: n, startTime: Ie || Xe(), duration: n.duration, tweens: [], createTween: function createTween(t, n) {
            var r = m.Tween(e, u.opts, t, n, u.opts.specialEasing[t] || u.opts.easing);return u.tweens.push(r), r;
          }, stop: function stop(t) {
            var n = 0,
                r = t ? u.tweens.length : 0;if (i) return this;for (i = !0; n < r; n++) {
              u.tweens[n].run(1);
            }return t ? s.resolveWith(e, [u, t]) : s.rejectWith(e, [u, t]), this;
          } }),
            c = u.props;for (!function (e, t) {
          var n, r, i, o, a;for (n in e) {
            if (i = t[r = m.camelCase(n)], o = e[n], m.isArray(o) && (i = o[1], o = e[n] = o[0]), n !== r && (e[r] = o, delete e[n]), (a = m.cssHooks[r]) && ("expand" in a)) for (n in o = a.expand(o), delete e[r], o) {
              (n in e) || (e[n] = o[n], t[n] = i);
            } else t[r] = i;
          }
        }(c, u.opts.specialEasing); o < a; o++) {
          if (r = Be[o].call(u, e, c, u.opts)) return r;
        }return m.map(c, Ue, u), m.isFunction(u.opts.start) && u.opts.start.call(e, u), m.fx.timer(m.extend(l, { elem: e, anim: u, queue: u.opts.queue })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always);
      }m.Animation = m.extend(Ve, { tweener: function tweener(e, t) {
          m.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");for (var n, r = 0, i = e.length; r < i; r++) {
            n = e[r], ze[n] = ze[n] || [], ze[n].unshift(t);
          }
        }, prefilter: function prefilter(e, t) {
          t ? Be.unshift(e) : Be.push(e);
        } }), m.speed = function (e, t, n) {
        var r = e && "object" === (void 0 === e ? "undefined" : a(e)) ? m.extend({}, e) : { complete: n || !n && t || m.isFunction(e) && e, duration: e, easing: n && t || t && !m.isFunction(t) && t };return r.duration = m.fx.off ? 0 : "number" == typeof r.duration ? r.duration : r.duration in m.fx.speeds ? m.fx.speeds[r.duration] : m.fx.speeds._default, null != r.queue && !0 !== r.queue || (r.queue = "fx"), r.old = r.complete, r.complete = function () {
          m.isFunction(r.old) && r.old.call(this), r.queue && m.dequeue(this, r.queue);
        }, r;
      }, m.fn.extend({ fadeTo: function fadeTo(e, t, n, r) {
          return this.filter(U).css("opacity", 0).show().end().animate({ opacity: t }, e, n, r);
        }, animate: function animate(e, t, n, r) {
          var i = m.isEmptyObject(e),
              o = m.speed(t, n, r),
              a = function a() {
            var t = Ve(this, m.extend({}, e), o);(i || I.get(this, "finish")) && t.stop(!0);
          };return a.finish = a, i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a);
        }, stop: function stop(e, t, n) {
          var r = function r(e) {
            var t = e.stop;delete e.stop, t(n);
          };return "string" != typeof e && (n = t, t = e, e = void 0), t && !1 !== e && this.queue(e || "fx", []), this.each(function () {
            var t = !0,
                i = null != e && e + "queueHooks",
                o = m.timers,
                a = I.get(this);if (i) a[i] && a[i].stop && r(a[i]);else for (i in a) {
              a[i] && a[i].stop && $e.test(i) && r(a[i]);
            }for (i = o.length; i--;) {
              o[i].elem !== this || null != e && o[i].queue !== e || (o[i].anim.stop(n), t = !1, o.splice(i, 1));
            }!t && n || m.dequeue(this, e);
          });
        }, finish: function finish(e) {
          return !1 !== e && (e = e || "fx"), this.each(function () {
            var t,
                n = I.get(this),
                r = n[e + "queue"],
                i = n[e + "queueHooks"],
                o = m.timers,
                a = r ? r.length : 0;for (n.finish = !0, m.queue(this, e, []), i && i.stop && i.stop.call(this, !0), t = o.length; t--;) {
              o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
            }for (t = 0; t < a; t++) {
              r[t] && r[t].finish && r[t].finish.call(this);
            }delete n.finish;
          });
        } }), m.each(["toggle", "show", "hide"], function (e, t) {
        var n = m.fn[t];m.fn[t] = function (e, r, i) {
          return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(Je(t, !0), e, r, i);
        };
      }), m.each({ slideDown: Je("show"), slideUp: Je("hide"), slideToggle: Je("toggle"), fadeIn: { opacity: "show" }, fadeOut: { opacity: "hide" }, fadeToggle: { opacity: "toggle" } }, function (e, t) {
        m.fn[e] = function (e, n, r) {
          return this.animate(t, e, n, r);
        };
      }), m.timers = [], m.fx.tick = function () {
        var e,
            t = 0,
            n = m.timers;for (Ie = m.now(); t < n.length; t++) {
          (e = n[t])() || n[t] !== e || n.splice(t--, 1);
        }n.length || m.fx.stop(), Ie = void 0;
      }, m.fx.timer = function (e) {
        m.timers.push(e), e() ? m.fx.start() : m.timers.pop();
      }, m.fx.interval = 13, m.fx.start = function () {
        Re || (Re = setInterval(m.fx.tick, m.fx.interval));
      }, m.fx.stop = function () {
        clearInterval(Re), Re = null;
      }, m.fx.speeds = { slow: 600, fast: 200, _default: 400 }, m.fn.delay = function (e, t) {
        return e = m.fx && m.fx.speeds[e] || e, t = t || "fx", this.queue(t, function (t, n) {
          var r = setTimeout(t, e);n.stop = function () {
            clearTimeout(r);
          };
        });
      }, function () {
        var e = g.createElement("input"),
            t = g.createElement("select"),
            n = t.appendChild(g.createElement("option"));e.type = "checkbox", h.checkOn = "" !== e.value, h.optSelected = n.selected, t.disabled = !0, h.optDisabled = !n.disabled, (e = g.createElement("input")).value = "t", e.type = "radio", h.radioValue = "t" === e.value;
      }();var Ye,
          Ge = m.expr.attrHandle;m.fn.extend({ attr: function attr(e, t) {
          return P(this, m.attr, e, t, arguments.length > 1);
        }, removeAttr: function removeAttr(e) {
          return this.each(function () {
            m.removeAttr(this, e);
          });
        } }), m.extend({ attr: function attr(e, t, n) {
          var r,
              i,
              o = e.nodeType;if (e && 3 !== o && 8 !== o && 2 !== o) return "undefined" === a(e.getAttribute) ? m.prop(e, t, n) : (1 === o && m.isXMLDoc(e) || (t = t.toLowerCase(), r = m.attrHooks[t] || (m.expr.match.bool.test(t) ? Ye : void 0)), void 0 === n ? r && "get" in r && null !== (i = r.get(e, t)) ? i : null == (i = m.find.attr(e, t)) ? void 0 : i : null !== n ? r && "set" in r && void 0 !== (i = r.set(e, n, t)) ? i : (e.setAttribute(t, n + ""), n) : void m.removeAttr(e, t));
        }, removeAttr: function removeAttr(e, t) {
          var n,
              r,
              i = 0,
              o = t && t.match(H);if (o && 1 === e.nodeType) for (; n = o[i++];) {
            r = m.propFix[n] || n, m.expr.match.bool.test(n) && (e[r] = !1), e.removeAttribute(n);
          }
        }, attrHooks: { type: { set: function set(e, t) {
              if (!h.radioValue && "radio" === t && m.nodeName(e, "input")) {
                var n = e.value;return e.setAttribute("type", t), n && (e.value = n), t;
              }
            } } } }), Ye = { set: function set(e, t, n) {
          return !1 === t ? m.removeAttr(e, n) : e.setAttribute(n, n), n;
        } }, m.each(m.expr.match.bool.source.match(/\w+/g), function (e, t) {
        var n = Ge[t] || m.find.attr;Ge[t] = function (e, t, r) {
          var i, o;return r || (o = Ge[t], Ge[t] = i, i = null != n(e, t, r) ? t.toLowerCase() : null, Ge[t] = o), i;
        };
      });var Qe = /^(?:input|select|textarea|button)$/i;m.fn.extend({ prop: function prop(e, t) {
          return P(this, m.prop, e, t, arguments.length > 1);
        }, removeProp: function removeProp(e) {
          return this.each(function () {
            delete this[m.propFix[e] || e];
          });
        } }), m.extend({ propFix: { for: "htmlFor", class: "className" }, prop: function prop(e, t, n) {
          var r,
              i,
              o = e.nodeType;if (e && 3 !== o && 8 !== o && 2 !== o) return (1 !== o || !m.isXMLDoc(e)) && (t = m.propFix[t] || t, i = m.propHooks[t]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get" in i && null !== (r = i.get(e, t)) ? r : e[t];
        }, propHooks: { tabIndex: { get: function get(e) {
              return e.hasAttribute("tabindex") || Qe.test(e.nodeName) || e.href ? e.tabIndex : -1;
            } } } }), h.optSelected || (m.propHooks.selected = { get: function get(e) {
          var t = e.parentNode;return t && t.parentNode && t.parentNode.selectedIndex, null;
        } }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        m.propFix[this.toLowerCase()] = this;
      });var Ke = /[\t\r\n\f]/g;m.fn.extend({ addClass: function addClass(e) {
          var t,
              n,
              r,
              i,
              o,
              a,
              s = "string" == typeof e && e,
              l = 0,
              u = this.length;if (m.isFunction(e)) return this.each(function (t) {
            m(this).addClass(e.call(this, t, this.className));
          });if (s) for (t = (e || "").match(H) || []; l < u; l++) {
            if (r = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(Ke, " ") : " ")) {
              for (o = 0; i = t[o++];) {
                r.indexOf(" " + i + " ") < 0 && (r += i + " ");
              }a = m.trim(r), n.className !== a && (n.className = a);
            }
          }return this;
        }, removeClass: function removeClass(e) {
          var t,
              n,
              r,
              i,
              o,
              a,
              s = 0 === arguments.length || "string" == typeof e && e,
              l = 0,
              u = this.length;if (m.isFunction(e)) return this.each(function (t) {
            m(this).removeClass(e.call(this, t, this.className));
          });if (s) for (t = (e || "").match(H) || []; l < u; l++) {
            if (r = 1 === (n = this[l]).nodeType && (n.className ? (" " + n.className + " ").replace(Ke, " ") : "")) {
              for (o = 0; i = t[o++];) {
                for (; r.indexOf(" " + i + " ") >= 0;) {
                  r = r.replace(" " + i + " ", " ");
                }
              }a = e ? m.trim(r) : "", n.className !== a && (n.className = a);
            }
          }return this;
        }, toggleClass: function toggleClass(e, t) {
          var n = void 0 === e ? "undefined" : a(e);return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : m.isFunction(e) ? this.each(function (n) {
            m(this).toggleClass(e.call(this, n, this.className, t), t);
          }) : this.each(function () {
            if ("string" === n) for (var t, r = 0, i = m(this), o = e.match(H) || []; t = o[r++];) {
              i.hasClass(t) ? i.removeClass(t) : i.addClass(t);
            } else "undefined" !== n && "boolean" !== n || (this.className && I.set(this, "__className__", this.className), this.className = this.className || !1 === e ? "" : I.get(this, "__className__") || "");
          });
        }, hasClass: function hasClass(e) {
          for (var t = " " + e + " ", n = 0, r = this.length; n < r; n++) {
            if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Ke, " ").indexOf(t) >= 0) return !0;
          }return !1;
        } });var Ze = /\r/g;m.fn.extend({ val: function val(e) {
          var t,
              n,
              r,
              i = this[0];return arguments.length ? (r = m.isFunction(e), this.each(function (n) {
            var i;1 === this.nodeType && (null == (i = r ? e.call(this, n, m(this).val()) : e) ? i = "" : "number" == typeof i ? i += "" : m.isArray(i) && (i = m.map(i, function (e) {
              return null == e ? "" : e + "";
            })), (t = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()]) && "set" in t && void 0 !== t.set(this, i, "value") || (this.value = i));
          })) : i ? (t = m.valHooks[i.type] || m.valHooks[i.nodeName.toLowerCase()]) && "get" in t && void 0 !== (n = t.get(i, "value")) ? n : "string" == typeof (n = i.value) ? n.replace(Ze, "") : null == n ? "" : n : void 0;
        } }), m.extend({ valHooks: { option: { get: function get(e) {
              var t = m.find.attr(e, "value");return null != t ? t : m.trim(m.text(e));
            } }, select: { get: function get(e) {
              for (var t, n, r = e.options, i = e.selectedIndex, o = "select-one" === e.type || i < 0, a = o ? null : [], s = o ? i + 1 : r.length, l = i < 0 ? s : o ? i : 0; l < s; l++) {
                if (((n = r[l]).selected || l === i) && (h.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !m.nodeName(n.parentNode, "optgroup"))) {
                  if (t = m(n).val(), o) return t;a.push(t);
                }
              }return a;
            }, set: function set(e, t) {
              for (var n, r, i = e.options, o = m.makeArray(t), a = i.length; a--;) {
                ((r = i[a]).selected = m.inArray(r.value, o) >= 0) && (n = !0);
              }return n || (e.selectedIndex = -1), o;
            } } } }), m.each(["radio", "checkbox"], function () {
        m.valHooks[this] = { set: function set(e, t) {
            if (m.isArray(t)) return e.checked = m.inArray(m(e).val(), t) >= 0;
          } }, h.checkOn || (m.valHooks[this].get = function (e) {
          return null === e.getAttribute("value") ? "on" : e.value;
        });
      }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (e, t) {
        m.fn[t] = function (e, n) {
          return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t);
        };
      }), m.fn.extend({ hover: function hover(e, t) {
          return this.mouseenter(e).mouseleave(t || e);
        }, bind: function bind(e, t, n) {
          return this.on(e, null, t, n);
        }, unbind: function unbind(e, t) {
          return this.off(e, null, t);
        }, delegate: function delegate(e, t, n, r) {
          return this.on(t, e, n, r);
        }, undelegate: function undelegate(e, t, n) {
          return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n);
        } });var et = m.now(),
          tt = /\?/;m.parseJSON = function (e) {
        return JSON.parse(e + "");
      }, m.parseXML = function (e) {
        var t;if (!e || "string" != typeof e) return null;try {
          t = new DOMParser().parseFromString(e, "text/xml");
        } catch (e) {
          t = void 0;
        }return t && !t.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + e), t;
      };var nt,
          rt,
          it = /#.*$/,
          ot = /([?&])_=[^&]*/,
          at = /^(.*?):[ \t]*([^\r\n]*)$/gm,
          st = /^(?:GET|HEAD)$/,
          lt = /^\/\//,
          ut = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
          ct = {},
          ft = {},
          pt = "*/".concat("*");try {
        rt = location.href;
      } catch (e) {
        (rt = g.createElement("a")).href = "", rt = rt.href;
      }function dt(e) {
        return function (t, n) {
          "string" != typeof t && (n = t, t = "*");var r,
              i = 0,
              o = t.toLowerCase().match(H) || [];if (m.isFunction(n)) for (; r = o[i++];) {
            "+" === r[0] ? (r = r.slice(1) || "*", (e[r] = e[r] || []).unshift(n)) : (e[r] = e[r] || []).push(n);
          }
        };
      }function ht(e, t, n, r) {
        var i = {},
            o = e === ft;function a(s) {
          var l;return i[s] = !0, m.each(e[s] || [], function (e, s) {
            var u = s(t, n, r);return "string" != typeof u || o || i[u] ? o ? !(l = u) : void 0 : (t.dataTypes.unshift(u), a(u), !1);
          }), l;
        }return a(t.dataTypes[0]) || !i["*"] && a("*");
      }function gt(e, t) {
        var n,
            r,
            i = m.ajaxSettings.flatOptions || {};for (n in t) {
          void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
        }return r && m.extend(!0, e, r), e;
      }nt = ut.exec(rt.toLowerCase()) || [], m.extend({ active: 0, lastModified: {}, etag: {}, ajaxSettings: { url: rt, type: "GET", isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(nt[1]), global: !0, processData: !0, async: !0, contentType: "application/x-www-form-urlencoded; charset=UTF-8", accepts: { "*": pt, text: "text/plain", html: "text/html", xml: "application/xml, text/xml", json: "application/json, text/javascript" }, contents: { xml: /xml/, html: /html/, json: /json/ }, responseFields: { xml: "responseXML", text: "responseText", json: "responseJSON" }, converters: { "* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML }, flatOptions: { url: !0, context: !0 } }, ajaxSetup: function ajaxSetup(e, t) {
          return t ? gt(gt(e, m.ajaxSettings), t) : gt(m.ajaxSettings, e);
        }, ajaxPrefilter: dt(ct), ajaxTransport: dt(ft), ajax: function ajax(e, t) {
          "object" === (void 0 === e ? "undefined" : a(e)) && (t = e, e = void 0), t = t || {};var n,
              r,
              i,
              o,
              s,
              l,
              u,
              c,
              f = m.ajaxSetup({}, t),
              p = f.context || f,
              d = f.context && (p.nodeType || p.jquery) ? m(p) : m.event,
              h = m.Deferred(),
              g = m.Callbacks("once memory"),
              v = f.statusCode || {},
              y = {},
              x = {},
              b = 0,
              w = "canceled",
              T = { readyState: 0, getResponseHeader: function getResponseHeader(e) {
              var t;if (2 === b) {
                if (!o) for (o = {}; t = at.exec(i);) {
                  o[t[1].toLowerCase()] = t[2];
                }t = o[e.toLowerCase()];
              }return null == t ? null : t;
            }, getAllResponseHeaders: function getAllResponseHeaders() {
              return 2 === b ? i : null;
            }, setRequestHeader: function setRequestHeader(e, t) {
              var n = e.toLowerCase();return b || (e = x[n] = x[n] || e, y[e] = t), this;
            }, overrideMimeType: function overrideMimeType(e) {
              return b || (f.mimeType = e), this;
            }, statusCode: function statusCode(e) {
              var t;if (e) if (b < 2) for (t in e) {
                v[t] = [v[t], e[t]];
              } else T.always(e[T.status]);return this;
            }, abort: function abort(e) {
              var t = e || w;return n && n.abort(t), C(0, t), this;
            } };if (h.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, f.url = ((e || f.url || rt) + "").replace(it, "").replace(lt, nt[1] + "//"), f.type = t.method || t.type || f.method || f.type, f.dataTypes = m.trim(f.dataType || "*").toLowerCase().match(H) || [""], null == f.crossDomain && (l = ut.exec(f.url.toLowerCase()), f.crossDomain = !(!l || l[1] === nt[1] && l[2] === nt[2] && (l[3] || ("http:" === l[1] ? "80" : "443")) === (nt[3] || ("http:" === nt[1] ? "80" : "443")))), f.data && f.processData && "string" != typeof f.data && (f.data = m.param(f.data, f.traditional)), ht(ct, f, t, T), 2 === b) return T;for (c in (u = f.global) && 0 == m.active++ && m.event.trigger("ajaxStart"), f.type = f.type.toUpperCase(), f.hasContent = !st.test(f.type), r = f.url, f.hasContent || (f.data && (r = f.url += (tt.test(r) ? "&" : "?") + f.data, delete f.data), !1 === f.cache && (f.url = ot.test(r) ? r.replace(ot, "$1_=" + et++) : r + (tt.test(r) ? "&" : "?") + "_=" + et++)), f.ifModified && (m.lastModified[r] && T.setRequestHeader("If-Modified-Since", m.lastModified[r]), m.etag[r] && T.setRequestHeader("If-None-Match", m.etag[r])), (f.data && f.hasContent && !1 !== f.contentType || t.contentType) && T.setRequestHeader("Content-Type", f.contentType), T.setRequestHeader("Accept", f.dataTypes[0] && f.accepts[f.dataTypes[0]] ? f.accepts[f.dataTypes[0]] + ("*" !== f.dataTypes[0] ? ", " + pt + "; q=0.01" : "") : f.accepts["*"]), f.headers) {
            T.setRequestHeader(c, f.headers[c]);
          }if (f.beforeSend && (!1 === f.beforeSend.call(p, T, f) || 2 === b)) return T.abort();for (c in w = "abort", { success: 1, error: 1, complete: 1 }) {
            T[c](f[c]);
          }if (n = ht(ft, f, t, T)) {
            T.readyState = 1, u && d.trigger("ajaxSend", [T, f]), f.async && f.timeout > 0 && (s = setTimeout(function () {
              T.abort("timeout");
            }, f.timeout));try {
              b = 1, n.send(y, C);
            } catch (e) {
              if (!(b < 2)) throw e;C(-1, e);
            }
          } else C(-1, "No Transport");function C(e, t, o, a) {
            var l,
                c,
                y,
                x,
                w,
                C = t;2 !== b && (b = 2, s && clearTimeout(s), n = void 0, i = a || "", T.readyState = e > 0 ? 4 : 0, l = e >= 200 && e < 300 || 304 === e, o && (x = function (e, t, n) {
              for (var r, i, o, a, s = e.contents, l = e.dataTypes; "*" === l[0];) {
                l.shift(), void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
              }if (r) for (i in s) {
                if (s[i] && s[i].test(r)) {
                  l.unshift(i);break;
                }
              }if (l[0] in n) o = l[0];else {
                for (i in n) {
                  if (!l[0] || e.converters[i + " " + l[0]]) {
                    o = i;break;
                  }a || (a = i);
                }o = o || a;
              }if (o) return o !== l[0] && l.unshift(o), n[o];
            }(f, T, o)), x = function (e, t, n, r) {
              var i,
                  o,
                  a,
                  s,
                  l,
                  u = {},
                  c = e.dataTypes.slice();if (c[1]) for (a in e.converters) {
                u[a.toLowerCase()] = e.converters[a];
              }for (o = c.shift(); o;) {
                if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = c.shift()) if ("*" === o) o = l;else if ("*" !== l && l !== o) {
                  if (!(a = u[l + " " + o] || u["* " + o])) for (i in u) {
                    if ((s = i.split(" "))[1] === o && (a = u[l + " " + s[0]] || u["* " + s[0]])) {
                      !0 === a ? a = u[i] : !0 !== u[i] && (o = s[0], c.unshift(s[1]));break;
                    }
                  }if (!0 !== a) if (a && e.throws) t = a(t);else try {
                    t = a(t);
                  } catch (e) {
                    return { state: "parsererror", error: a ? e : "No conversion from " + l + " to " + o };
                  }
                }
              }return { state: "success", data: t };
            }(f, x, T, l), l ? (f.ifModified && ((w = T.getResponseHeader("Last-Modified")) && (m.lastModified[r] = w), (w = T.getResponseHeader("etag")) && (m.etag[r] = w)), 204 === e || "HEAD" === f.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = x.state, c = x.data, l = !(y = x.error))) : (y = C, !e && C || (C = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (t || C) + "", l ? h.resolveWith(p, [c, C, T]) : h.rejectWith(p, [T, C, y]), T.statusCode(v), v = void 0, u && d.trigger(l ? "ajaxSuccess" : "ajaxError", [T, f, l ? c : y]), g.fireWith(p, [T, C]), u && (d.trigger("ajaxComplete", [T, f]), --m.active || m.event.trigger("ajaxStop")));
          }return T;
        }, getJSON: function getJSON(e, t, n) {
          return m.get(e, t, n, "json");
        }, getScript: function getScript(e, t) {
          return m.get(e, void 0, t, "script");
        } }), m.each(["get", "post"], function (e, t) {
        m[t] = function (e, n, r, i) {
          return m.isFunction(n) && (i = i || r, r = n, n = void 0), m.ajax({ url: e, type: t, dataType: i, data: n, success: r });
        };
      }), m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (e, t) {
        m.fn[t] = function (e) {
          return this.on(t, e);
        };
      }), m._evalUrl = function (e) {
        return m.ajax({ url: e, type: "GET", dataType: "script", async: !1, global: !1, throws: !0 });
      }, m.fn.extend({ wrapAll: function wrapAll(e) {
          var t;return m.isFunction(e) ? this.each(function (t) {
            m(this).wrapAll(e.call(this, t));
          }) : (this[0] && (t = m(e, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && t.insertBefore(this[0]), t.map(function () {
            for (var e = this; e.firstElementChild;) {
              e = e.firstElementChild;
            }return e;
          }).append(this)), this);
        }, wrapInner: function wrapInner(e) {
          return m.isFunction(e) ? this.each(function (t) {
            m(this).wrapInner(e.call(this, t));
          }) : this.each(function () {
            var t = m(this),
                n = t.contents();n.length ? n.wrapAll(e) : t.append(e);
          });
        }, wrap: function wrap(e) {
          var t = m.isFunction(e);return this.each(function (n) {
            m(this).wrapAll(t ? e.call(this, n) : e);
          });
        }, unwrap: function unwrap() {
          return this.parent().each(function () {
            m.nodeName(this, "body") || m(this).replaceWith(this.childNodes);
          }).end();
        } }), m.expr.filters.hidden = function (e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0;
      }, m.expr.filters.visible = function (e) {
        return !m.expr.filters.hidden(e);
      };var mt = /%20/g,
          vt = /\[\]$/,
          yt = /\r?\n/g,
          xt = /^(?:submit|button|image|reset|file)$/i,
          bt = /^(?:input|select|textarea|keygen)/i;function wt(e, t, n, r) {
        var i;if (m.isArray(t)) m.each(t, function (t, i) {
          n || vt.test(e) ? r(e, i) : wt(e + "[" + ("object" === (void 0 === i ? "undefined" : a(i)) ? t : "") + "]", i, n, r);
        });else if (n || "object" !== m.type(t)) r(e, t);else for (i in t) {
          wt(e + "[" + i + "]", t[i], n, r);
        }
      }m.param = function (e, t) {
        var n,
            r = [],
            i = function i(e, t) {
          t = m.isFunction(t) ? t() : null == t ? "" : t, r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t);
        };if (void 0 === t && (t = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(e) || e.jquery && !m.isPlainObject(e)) m.each(e, function () {
          i(this.name, this.value);
        });else for (n in e) {
          wt(n, e[n], t, i);
        }return r.join("&").replace(mt, "+");
      }, m.fn.extend({ serialize: function serialize() {
          return m.param(this.serializeArray());
        }, serializeArray: function serializeArray() {
          return this.map(function () {
            var e = m.prop(this, "elements");return e ? m.makeArray(e) : this;
          }).filter(function () {
            var e = this.type;return this.name && !m(this).is(":disabled") && bt.test(this.nodeName) && !xt.test(e) && (this.checked || !V.test(e));
          }).map(function (e, t) {
            var n = m(this).val();return null == n ? null : m.isArray(n) ? m.map(n, function (e) {
              return { name: t.name, value: e.replace(yt, "\r\n") };
            }) : { name: t.name, value: n.replace(yt, "\r\n") };
          }).get();
        } }), m.ajaxSettings.xhr = function () {
        try {
          return new XMLHttpRequest();
        } catch (e) {}
      };var Tt = 0,
          Ct = {},
          Nt = { 0: 200, 1223: 204 },
          kt = m.ajaxSettings.xhr();r.ActiveXObject && m(r).on("unload", function () {
        for (var e in Ct) {
          Ct[e]();
        }
      }), h.cors = !!kt && "withCredentials" in kt, h.ajax = kt = !!kt, m.ajaxTransport(function (e) {
        var _t2;if (h.cors || kt && !e.crossDomain) return { send: function send(n, r) {
            var i,
                o = e.xhr(),
                a = ++Tt;if (o.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields) for (i in e.xhrFields) {
              o[i] = e.xhrFields[i];
            }for (i in e.mimeType && o.overrideMimeType && o.overrideMimeType(e.mimeType), e.crossDomain || n["X-Requested-With"] || (n["X-Requested-With"] = "XMLHttpRequest"), n) {
              o.setRequestHeader(i, n[i]);
            }_t2 = function t(e) {
              return function () {
                _t2 && (delete Ct[a], _t2 = o.onload = o.onerror = null, "abort" === e ? o.abort() : "error" === e ? r(o.status, o.statusText) : r(Nt[o.status] || o.status, o.statusText, "string" == typeof o.responseText ? { text: o.responseText } : void 0, o.getAllResponseHeaders()));
              };
            }, o.onload = _t2(), o.onerror = _t2("error"), _t2 = Ct[a] = _t2("abort");try {
              o.send(e.hasContent && e.data || null);
            } catch (e) {
              if (_t2) throw e;
            }
          }, abort: function abort() {
            _t2 && _t2();
          } };
      }), m.ajaxSetup({ accepts: { script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript" }, contents: { script: /(?:java|ecma)script/ }, converters: { "text script": function textScript(e) {
            return m.globalEval(e), e;
          } } }), m.ajaxPrefilter("script", function (e) {
        void 0 === e.cache && (e.cache = !1), e.crossDomain && (e.type = "GET");
      }), m.ajaxTransport("script", function (e) {
        var t, _n;if (e.crossDomain) return { send: function send(r, i) {
            t = m("<script>").prop({ async: !0, charset: e.scriptCharset, src: e.url }).on("load error", _n = function n(e) {
              t.remove(), _n = null, e && i("error" === e.type ? 404 : 200, e.type);
            }), g.head.appendChild(t[0]);
          }, abort: function abort() {
            _n && _n();
          } };
      });var St = [],
          Et = /(=)\?(?=&|$)|\?\?/;m.ajaxSetup({ jsonp: "callback", jsonpCallback: function jsonpCallback() {
          var e = St.pop() || m.expando + "_" + et++;return this[e] = !0, e;
        } }), m.ajaxPrefilter("json jsonp", function (e, t, n) {
        var i,
            o,
            a,
            s = !1 !== e.jsonp && (Et.test(e.url) ? "url" : "string" == typeof e.data && !(e.contentType || "").indexOf("application/x-www-form-urlencoded") && Et.test(e.data) && "data");if (s || "jsonp" === e.dataTypes[0]) return i = e.jsonpCallback = m.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, s ? e[s] = e[s].replace(Et, "$1" + i) : !1 !== e.jsonp && (e.url += (tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + i), e.converters["script json"] = function () {
          return a || m.error(i + " was not called"), a[0];
        }, e.dataTypes[0] = "json", o = r[i], r[i] = function () {
          a = arguments;
        }, n.always(function () {
          r[i] = o, e[i] && (e.jsonpCallback = t.jsonpCallback, St.push(i)), a && m.isFunction(o) && o(a[0]), a = o = void 0;
        }), "script";
      }), m.parseHTML = function (e, t, n) {
        if (!e || "string" != typeof e) return null;"boolean" == typeof t && (n = t, t = !1), t = t || g;var r = N.exec(e),
            i = !n && [];return r ? [t.createElement(r[1])] : (r = m.buildFragment([e], t, i), i && i.length && m(i).remove(), m.merge([], r.childNodes));
      };var Dt = m.fn.load;m.fn.load = function (e, t, n) {
        if ("string" != typeof e && Dt) return Dt.apply(this, arguments);var r,
            i,
            o,
            s = this,
            l = e.indexOf(" ");return l >= 0 && (r = m.trim(e.slice(l)), e = e.slice(0, l)), m.isFunction(t) ? (n = t, t = void 0) : t && "object" === (void 0 === t ? "undefined" : a(t)) && (i = "POST"), s.length > 0 && m.ajax({ url: e, type: i, dataType: "html", data: t }).done(function (e) {
          o = arguments, s.html(r ? m("<div>").append(m.parseHTML(e)).find(r) : e);
        }).complete(n && function (e, t) {
          s.each(n, o || [e.responseText, t, e]);
        }), this;
      }, m.expr.filters.animated = function (e) {
        return m.grep(m.timers, function (t) {
          return e === t.elem;
        }).length;
      };var jt = r.document.documentElement;function At(e) {
        return m.isWindow(e) ? e : 9 === e.nodeType && e.defaultView;
      }m.offset = { setOffset: function setOffset(e, t, n) {
          var r,
              i,
              o,
              a,
              s,
              l,
              u = m.css(e, "position"),
              c = m(e),
              f = {};"static" === u && (e.style.position = "relative"), s = c.offset(), o = m.css(e, "top"), l = m.css(e, "left"), ("absolute" === u || "fixed" === u) && (o + l).indexOf("auto") > -1 ? (a = (r = c.position()).top, i = r.left) : (a = parseFloat(o) || 0, i = parseFloat(l) || 0), m.isFunction(t) && (t = t.call(e, n, s)), null != t.top && (f.top = t.top - s.top + a), null != t.left && (f.left = t.left - s.left + i), "using" in t ? t.using.call(e, f) : c.css(f);
        } }, m.fn.extend({ offset: function offset(e) {
          if (arguments.length) return void 0 === e ? this : this.each(function (t) {
            m.offset.setOffset(this, e, t);
          });var t,
              n,
              r = this[0],
              i = { top: 0, left: 0 },
              o = r && r.ownerDocument;return o ? (t = o.documentElement, m.contains(t, r) ? ("undefined" !== a(r.getBoundingClientRect) && (i = r.getBoundingClientRect()), n = At(o), { top: i.top + n.pageYOffset - t.clientTop, left: i.left + n.pageXOffset - t.clientLeft }) : i) : void 0;
        }, position: function position() {
          if (this[0]) {
            var e,
                t,
                n = this[0],
                r = { top: 0, left: 0 };return "fixed" === m.css(n, "position") ? t = n.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), m.nodeName(e[0], "html") || (r = e.offset()), r.top += m.css(e[0], "borderTopWidth", !0), r.left += m.css(e[0], "borderLeftWidth", !0)), { top: t.top - r.top - m.css(n, "marginTop", !0), left: t.left - r.left - m.css(n, "marginLeft", !0) };
          }
        }, offsetParent: function offsetParent() {
          return this.map(function () {
            for (var e = this.offsetParent || jt; e && !m.nodeName(e, "html") && "static" === m.css(e, "position");) {
              e = e.offsetParent;
            }return e || jt;
          });
        } }), m.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, t) {
        var n = "pageYOffset" === t;m.fn[e] = function (i) {
          return P(this, function (e, i, o) {
            var a = At(e);if (void 0 === o) return a ? a[t] : e[i];a ? a.scrollTo(n ? r.pageXOffset : o, n ? o : r.pageYOffset) : e[i] = o;
          }, e, i, arguments.length, null);
        };
      }), m.each(["top", "left"], function (e, t) {
        m.cssHooks[t] = ke(h.pixelPosition, function (e, n) {
          if (n) return n = Ne(e, t), Te.test(n) ? m(e).position()[t] + "px" : n;
        });
      }), m.each({ Height: "height", Width: "width" }, function (e, t) {
        m.each({ padding: "inner" + e, content: t, "": "outer" + e }, function (n, r) {
          m.fn[r] = function (r, i) {
            var o = arguments.length && (n || "boolean" != typeof r),
                a = n || (!0 === r || !0 === i ? "margin" : "border");return P(this, function (t, n, r) {
              var i;return m.isWindow(t) ? t.document.documentElement["client" + e] : 9 === t.nodeType ? (i = t.documentElement, Math.max(t.body["scroll" + e], i["scroll" + e], t.body["offset" + e], i["offset" + e], i["client" + e])) : void 0 === r ? m.css(t, n, a) : m.style(t, n, r, a);
            }, t, o ? r : void 0, o, null);
          };
        });
      }), m.fn.size = function () {
        return this.length;
      }, m.fn.andSelf = m.fn.addBack, void 0 === (n = function () {
        return m;
      }.apply(t, [])) || (e.exports = n);var Ot = r.jQuery,
          Lt = r.$;return m.noConflict = function (e) {
        return r.$ === m && (r.$ = Lt), e && r.jQuery === m && (r.jQuery = Ot), m;
      }, "undefined" === (void 0 === _i ? "undefined" : a(_i)) && (r.jQuery = r.$ = m), m;
    }, "object" === a(e) && "object" === a(e.exports) ? e.exports = r.document ? i(r, !0) : function (e) {
      if (!e.document) throw new Error("jQuery requires a window with a document");return i(e);
    } : i(r);
  }).call(this, n(4)(e));
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), window.allowDrop = function (e) {
    e.preventDefault();
  };var r = null,
      i = null,
      o = null;window.drag = function (e, t) {
    r = t, e.dataTransfer.setData("text/html", t.innerHTML), i = t.id;
  }, window.drop = function (e, t) {
    if (e.preventDefault(), r != t) {
      o = t.id, r.id = o, t.id = i, r.innerHTML = t.innerHTML, t.innerHTML = e.dataTransfer.getData("text/html");var n = 0,
          a = 0,
          s = localStorage.getItem("myplan");s = JSON.parse(s);for (var l = 0, u = 0; s.length, u < s.length; l++, u++) {
        s[l].id == i ? n = l : s[u].id == o && (a = u);
      }var c = s[n];s[n] = s[a], s[a] = c;var f = JSON.stringify(s);localStorage.setItem("myplan", f);s = localStorage.getItem("myplan");s = JSON.parse(s);
    }
  }, t.allowDrop = allowDrop, t.drag = drag, t.drop = drop;
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), t.showplans = t.showallplan = t.showplan = void 0;var r,
      i = n(0),
      o = (r = i) && r.__esModule ? r : { default: r };!function (e) {
    if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }t.default = e;
  }(n(1));t.showplan = function () {
    var e = localStorage.getItem("myplan");e = JSON.parse(e), (0, o.default)("<li id=" + e[e.length - 1].id + ' ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)"><span><span></span><input type="checkbox" style="zoom:200%"/><span>' + e[e.length - 1].content + '</span></span><span class="del">X</span></li>').appendTo((0, o.default)(".todolist .list1>ul"));
  }, t.showallplan = function () {
    var e = localStorage.getItem("myplan");e = JSON.parse(e);for (var t = "", n = "", r = 0; r < e.length; r++) {
      0 == e[r].done ? (t += "<li id=" + e[r].id + '  ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)"><span><span></span><input type="checkbox" style="zoom:200%"/><span>', t += e[r].content, t += '</span></span><span class="del">X</span></li>') : (n += "<li id=" + e[r].id + '><span><span></span><input type="checkbox" checked="checked" style="zoom:200%"/><span>', n += e[r].content, n += '</span></span><span class="del">X</span></li>');
    }(0, o.default)(".list2 ul").html(n), (0, o.default)(".list1 ul").html(t);
  }, t.showplans = function () {
    for (var e = "", t = localStorage.getItem("myplan"), n = (t = JSON.parse(t)).length - 1e3; n < t.length; n++) {
      0 == t[n].done && (e += "<li id=" + t[n].id + ' ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)"><span><span></span><input type="checkbox" style="zoom:200%"/><span>' + t[n].content + '</span></span><span class="del">X</span></li>');
    }(0, o.default)(".todolist .list1>ul").append(e);
  };
}, function (e, t, n) {
  "use strict";
  Object.defineProperty(t, "__esModule", { value: !0 }), t.count = void 0;var r,
      i = n(0),
      o = (r = i) && r.__esModule ? r : { default: r };t.count = function () {
    var e = localStorage.getItem("myplan");e = JSON.parse(e);for (var t = 0, n = 0, r = 0; r < e.length; r++) {
      0 == e[r].done ? t += 1 : n += 1;
    }(0, o.default)(".ongoing .listtop span:nth-child(2)").text(t), (0, o.default)(".done .listtop span:nth-child(2)").text(n);
  };
}, function (e, t) {
  e.exports = function (e) {
    return e.webpackPolyfill || (e.deprecate = function () {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function get() {
        return e.l;
      } }), Object.defineProperty(e, "id", { enumerable: !0, get: function get() {
        return e.i;
      } }), e.webpackPolyfill = 1), e;
  };
}, function (e, t, n) {
  "use strict";
  var r,
      i = n(0),
      o = (r = i) && r.__esModule ? r : { default: r },
      a = l(n(3)),
      s = l(n(2));l(n(1));function l(e) {
    if (e && e.__esModule) return e;var t = {};if (null != e) for (var n in e) {
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
    }return t.default = e, t;
  }(0, o.default)(function () {
    var e = 0;function t() {
      return "xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx".replace(/[xy]/g, function (e) {
        var t = 16 * Math.random() | 0;return ("x" == e ? t : 3 & t | 8).toString(16);
      });
    }(0, o.default)(".addlist").on("click", function () {
      var n = localStorage.getItem("myplan");n = n ? JSON.parse(n) : [];for (var r = 0; r < 1e3; r++) {
        if (n.length <= 0) {
          var i = {};i.content = e++, i.done = !1, i.listatus = !1, i.id = t(), n.push(i);
        } else n.push({ content: e++, done: !1, listatus: !1, id: t() });
      }localStorage.setItem("myplan", JSON.stringify(n)), s.showplans(), a.count();
    }), (0, o.default)("body").on("keydown", "#todoinput", function (e) {
      if (13 == e.keyCode) {
        var n = (0, o.default)("#todoinput").val();if ((n = n.replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;")).length > 0) {
          var r = localStorage.getItem("myplan");if ((r = r ? JSON.parse(r) : []).length <= 0) {
            var i = {};i.content = n, i.done = !1, i.listatus = !1, i.id = t(), r.push(i);
          } else r.push({ content: n, done: !1, listatus: !1, id: t() });localStorage.setItem("myplan", JSON.stringify(r)), s.showplan(), a.count();
        } else alert("请输入数据");(0, o.default)("#todoinput").val("");
      }
    }), (0, o.default)("body").on("click", ".list ul li", function () {
      var e = (0, o.default)(this).prop("id"),
          t = localStorage.getItem("myplan");t = JSON.parse(t);for (var n = 0; n < t.length; n++) {
        t[n].id == e && (0 == t[n].listatus ? (t[n].listatus = !0, (0, o.default)(this).addClass("liborder")) : (t[n].listatus = !1, (0, o.default)(this).removeClass("liborder")));
      }localStorage.setItem("myplan", JSON.stringify(t));
    }), (0, o.default)("body").on("click", ".list ul li input", function (e) {
      e.stopPropagation();
    }), (0, o.default)("body .todolist .list #ullist").on("click", "li input", function () {
      if (1 == (0, o.default)(this).prop("checked")) {
        var e = (0, o.default)(this).parent().parent().prop("id");(0, o.default)("#" + e).fadeOut(function () {
          (0, o.default)("#" + e).remove();
        });var t = localStorage.getItem("myplan");t = JSON.parse(t);for (var n = 0; n < t.length; n++) {
          if (t[n].id == e) {
            t[n].done = !0, (0, o.default)("<li id=" + t[n].id + '><span><span></span><input type="checkbox"  style="zoom:200%" checked="checked"/><span>' + t[n].content + '</span></span><span class="del">X</span></li>').appendTo((0, o.default)(".todolist .list2>ul")), (0, o.default)(".todolist .list2>ul").bind("DOMNodeInserted", function (r) {
              t[n].listatus && (0, o.default)("#" + e).addClass("liborder");
            });var r = t[n];return t.splice(n, 1), t.push(r), localStorage.setItem("myplan", JSON.stringify(t)), void a.count();
          }
        }
      }
    }), (0, o.default)("body .todolist .list #donelist").on("click", "li input", function () {
      if (0 == (0, o.default)(this).prop("checked")) {
        var e = (0, o.default)(this).parent().parent().prop("id");(0, o.default)("#" + e).remove();var t = localStorage.getItem("myplan");t = JSON.parse(t);for (var n = 0; n < t.length; n++) {
          if (t[n].id == e) {
            t[n].done = !1, (0, o.default)("<li id=" + t[n].id + '  ondrop="drop(event,this)" ondragover="allowDrop(event)" draggable="true" ondragstart="drag(event, this)" ><span><span></span><input type="checkbox" style="zoom:200%" /><span>' + t[n].content + '</span></span><span class="del">X</span></li>').appendTo((0, o.default)(".todolist .list1>ul"));var r = t[n];return t.splice(n, 1), t.push(r), localStorage.setItem("myplan", JSON.stringify(t)), void a.count();
          }
        }
      }
    }), (0, o.default)("body").on("click", ".del", function () {
      var e = (0, o.default)(this).parent().prop("id");(0, o.default)("#" + e).fadeOut(function () {
        (0, o.default)("#" + e).remove();
      });var t = localStorage.getItem("myplan");t = JSON.parse(t);for (var n = 0, r = 0; r < t.length; r++) {
        e == t[r].id && (n = r, t.splice(n, 1));
      }return localStorage.setItem("myplan", JSON.stringify(t)), a.count(), !1;
    }), a.count(), s.showallplan();
  });
}]);