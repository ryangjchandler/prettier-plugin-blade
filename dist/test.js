(() => {
  var __create = Object.create;
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __getProtoOf = Object.getPrototypeOf;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };
  var __reExport = (target, module, copyDefault, desc) => {
    if (module && typeof module === "object" || typeof module === "function") {
      for (let key of __getOwnPropNames(module))
        if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
          __defProp(target, key, { get: () => module[key], enumerable: !(desc = __getOwnPropDesc(module, key)) || desc.enumerable });
    }
    return target;
  };
  var __toESM = (module, isNodeMode) => {
    return __reExport(__markAsModule(__defProp(module != null ? __create(__getProtoOf(module)) : {}, "default", !isNodeMode && module && module.__esModule ? { get: () => module.default, enumerable: true } : { value: module, enumerable: true })), module);
  };

  // node_modules/prettier/standalone.js
  var require_standalone = __commonJS({
    "node_modules/prettier/standalone.js"(exports, module) {
      !function(e, t) {
        typeof exports == "object" && typeof module != "undefined" ? module.exports = t() : typeof define == "function" && define.amd ? define(t) : (e = typeof globalThis != "undefined" ? globalThis : e || self).prettier = t();
      }(exports, function() {
        "use strict";
        var e = typeof globalThis != "undefined" ? globalThis : typeof window != "undefined" ? window : typeof global != "undefined" ? global : typeof self != "undefined" ? self : {};
        function t(e2) {
          return e2 && Object.prototype.hasOwnProperty.call(e2, "default") ? e2.default : e2;
        }
        var n = { version: "2.5.1" }, r = {}, o = {};
        !function(e2) {
          function t2() {
          }
          function n2(e3, t3, n3, r3, o2) {
            for (var i2 = 0, u2 = t3.length, s2 = 0, a2 = 0; i2 < u2; i2++) {
              var c2 = t3[i2];
              if (c2.removed) {
                if (c2.value = e3.join(r3.slice(a2, a2 + c2.count)), a2 += c2.count, i2 && t3[i2 - 1].added) {
                  var l3 = t3[i2 - 1];
                  t3[i2 - 1] = t3[i2], t3[i2] = l3;
                }
              } else {
                if (!c2.added && o2) {
                  var p2 = n3.slice(s2, s2 + c2.count);
                  p2 = p2.map(function(e4, t4) {
                    var n4 = r3[a2 + t4];
                    return n4.length > e4.length ? n4 : e4;
                  }), c2.value = e3.join(p2);
                } else
                  c2.value = e3.join(n3.slice(s2, s2 + c2.count));
                s2 += c2.count, c2.added || (a2 += c2.count);
              }
            }
            var f2 = t3[u2 - 1];
            return u2 > 1 && typeof f2.value == "string" && (f2.added || f2.removed) && e3.equals("", f2.value) && (t3[u2 - 2].value += f2.value, t3.pop()), t3;
          }
          function r2(e3) {
            return { newPos: e3.newPos, components: e3.components.slice(0) };
          }
          Object.defineProperty(e2, "__esModule", { value: true }), e2.default = t2, t2.prototype = { diff: function(e3, t3) {
            var o2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, i2 = o2.callback;
            typeof o2 == "function" && (i2 = o2, o2 = {}), this.options = o2;
            var u2 = this;
            function s2(e4) {
              return i2 ? (setTimeout(function() {
                i2(void 0, e4);
              }, 0), true) : e4;
            }
            e3 = this.castInput(e3), t3 = this.castInput(t3), e3 = this.removeEmpty(this.tokenize(e3));
            var a2 = (t3 = this.removeEmpty(this.tokenize(t3))).length, c2 = e3.length, l3 = 1, p2 = a2 + c2, f2 = [{ newPos: -1, components: [] }], d2 = this.extractCommon(f2[0], t3, e3, 0);
            if (f2[0].newPos + 1 >= a2 && d2 + 1 >= c2)
              return s2([{ value: this.join(t3), count: t3.length }]);
            function h2() {
              for (var o3 = -1 * l3; o3 <= l3; o3 += 2) {
                var i3 = void 0, p3 = f2[o3 - 1], d3 = f2[o3 + 1], h3 = (d3 ? d3.newPos : 0) - o3;
                p3 && (f2[o3 - 1] = void 0);
                var g3 = p3 && p3.newPos + 1 < a2, m2 = d3 && 0 <= h3 && h3 < c2;
                if (g3 || m2) {
                  if (!g3 || m2 && p3.newPos < d3.newPos ? (i3 = r2(d3), u2.pushComponent(i3.components, void 0, true)) : ((i3 = p3).newPos++, u2.pushComponent(i3.components, true, void 0)), h3 = u2.extractCommon(i3, t3, e3, o3), i3.newPos + 1 >= a2 && h3 + 1 >= c2)
                    return s2(n2(u2, i3.components, t3, e3, u2.useLongestToken));
                  f2[o3] = i3;
                } else
                  f2[o3] = void 0;
              }
              l3++;
            }
            if (i2)
              !function e4() {
                setTimeout(function() {
                  if (l3 > p2)
                    return i2();
                  h2() || e4();
                }, 0);
              }();
            else
              for (; l3 <= p2; ) {
                var g2 = h2();
                if (g2)
                  return g2;
              }
          }, pushComponent: function(e3, t3, n3) {
            var r3 = e3[e3.length - 1];
            r3 && r3.added === t3 && r3.removed === n3 ? e3[e3.length - 1] = { count: r3.count + 1, added: t3, removed: n3 } : e3.push({ count: 1, added: t3, removed: n3 });
          }, extractCommon: function(e3, t3, n3, r3) {
            for (var o2 = t3.length, i2 = n3.length, u2 = e3.newPos, s2 = u2 - r3, a2 = 0; u2 + 1 < o2 && s2 + 1 < i2 && this.equals(t3[u2 + 1], n3[s2 + 1]); )
              u2++, s2++, a2++;
            return a2 && e3.components.push({ count: a2 }), e3.newPos = u2, s2;
          }, equals: function(e3, t3) {
            return this.options.comparator ? this.options.comparator(e3, t3) : e3 === t3 || this.options.ignoreCase && e3.toLowerCase() === t3.toLowerCase();
          }, removeEmpty: function(e3) {
            for (var t3 = [], n3 = 0; n3 < e3.length; n3++)
              e3[n3] && t3.push(e3[n3]);
            return t3;
          }, castInput: function(e3) {
            return e3;
          }, tokenize: function(e3) {
            return e3.split("");
          }, join: function(e3) {
            return e3.join("");
          } };
        }(o);
        var i, u = {};
        Object.defineProperty(u, "__esModule", { value: true }), u.diffChars = function(e2, t2, n2) {
          return s.diff(e2, t2, n2);
        }, u.characterDiff = void 0;
        var s = new ((i = o) && i.__esModule ? i : { default: i }).default();
        u.characterDiff = s;
        var a = {}, c = {};
        Object.defineProperty(c, "__esModule", { value: true }), c.generateOptions = function(e2, t2) {
          if (typeof e2 == "function")
            t2.callback = e2;
          else if (e2)
            for (var n2 in e2)
              e2.hasOwnProperty(n2) && (t2[n2] = e2[n2]);
          return t2;
        }, Object.defineProperty(a, "__esModule", { value: true }), a.diffWords = function(e2, t2, n2) {
          return n2 = (0, p.generateOptions)(n2, { ignoreWhitespace: true }), h.diff(e2, t2, n2);
        }, a.diffWordsWithSpace = function(e2, t2, n2) {
          return h.diff(e2, t2, n2);
        }, a.wordDiff = void 0;
        var l2 = function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }(o), p = c;
        var f = /^[A-Za-z\xC0-\u02C6\u02C8-\u02D7\u02DE-\u02FF\u1E00-\u1EFF]+$/, d = /\S/, h = new l2.default();
        a.wordDiff = h, h.equals = function(e2, t2) {
          return this.options.ignoreCase && (e2 = e2.toLowerCase(), t2 = t2.toLowerCase()), e2 === t2 || this.options.ignoreWhitespace && !d.test(e2) && !d.test(t2);
        }, h.tokenize = function(e2) {
          for (var t2 = e2.split(/([^\S\r\n]+|[()[\]{}'"\r\n]|\b)/), n2 = 0; n2 < t2.length - 1; n2++)
            !t2[n2 + 1] && t2[n2 + 2] && f.test(t2[n2]) && f.test(t2[n2 + 2]) && (t2[n2] += t2[n2 + 2], t2.splice(n2 + 1, 2), n2--);
          return t2;
        };
        var g = {};
        Object.defineProperty(g, "__esModule", { value: true }), g.diffLines = function(e2, t2, n2) {
          return D.diff(e2, t2, n2);
        }, g.diffTrimmedLines = function(e2, t2, n2) {
          var r2 = (0, y.generateOptions)(n2, { ignoreWhitespace: true });
          return D.diff(e2, t2, r2);
        }, g.lineDiff = void 0;
        var m = function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }(o), y = c;
        var D = new m.default();
        g.lineDiff = D, D.tokenize = function(e2) {
          var t2 = [], n2 = e2.split(/(\n|\r\n)/);
          n2[n2.length - 1] || n2.pop();
          for (var r2 = 0; r2 < n2.length; r2++) {
            var o2 = n2[r2];
            r2 % 2 && !this.options.newlineIsToken ? t2[t2.length - 1] += o2 : (this.options.ignoreWhitespace && (o2 = o2.trim()), t2.push(o2));
          }
          return t2;
        };
        var E = {};
        Object.defineProperty(E, "__esModule", { value: true }), E.diffSentences = function(e2, t2, n2) {
          return b.diff(e2, t2, n2);
        }, E.sentenceDiff = void 0;
        var C = function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }(o);
        var b = new C.default();
        E.sentenceDiff = b, b.tokenize = function(e2) {
          return e2.split(/(\S.+?[.!?])(?=\s+|$)/);
        };
        var v = {};
        Object.defineProperty(v, "__esModule", { value: true }), v.diffCss = function(e2, t2, n2) {
          return F.diff(e2, t2, n2);
        }, v.cssDiff = void 0;
        var A = function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }(o);
        var F = new A.default();
        v.cssDiff = F, F.tokenize = function(e2) {
          return e2.split(/([{}:;,]|\s+)/);
        };
        var x = function(e2) {
          return e2 && e2.Math == Math && e2;
        }, S = x(typeof globalThis == "object" && globalThis) || x(typeof window == "object" && window) || x(typeof self == "object" && self) || x(typeof e == "object" && e) || function() {
          return this;
        }() || Function("return this")(), w = {}, T = function(e2) {
          try {
            return !!e2();
          } catch (e3) {
            return true;
          }
        }, B = !T(function() {
          return Object.defineProperty({}, 1, { get: function() {
            return 7;
          } })[1] != 7;
        }), N = Function.prototype.call, k = N.bind ? N.bind(N) : function() {
          return N.apply(N, arguments);
        }, P = {}, O = {}.propertyIsEnumerable, I = Object.getOwnPropertyDescriptor, L = I && !O.call({ 1: 2 }, 1);
        P.f = L ? function(e2) {
          var t2 = I(this, e2);
          return !!t2 && t2.enumerable;
        } : O;
        var j2, _, M = function(e2, t2) {
          return { enumerable: !(1 & e2), configurable: !(2 & e2), writable: !(4 & e2), value: t2 };
        }, R = Function.prototype, V = R.bind, $ = R.call, W = V && V.bind($), q = V ? function(e2) {
          return e2 && W($, e2);
        } : function(e2) {
          return e2 && function() {
            return $.apply(e2, arguments);
          };
        }, U = q, z = U({}.toString), G = U("".slice), H = function(e2) {
          return G(z(e2), 8, -1);
        }, J = q, X = T, Y = H, K = S.Object, Q = J("".split), Z = X(function() {
          return !K("z").propertyIsEnumerable(0);
        }) ? function(e2) {
          return Y(e2) == "String" ? Q(e2, "") : K(e2);
        } : K, ee = S.TypeError, te = function(e2) {
          if (e2 == null)
            throw ee("Can't call method on " + e2);
          return e2;
        }, ne = Z, re = te, oe = function(e2) {
          return ne(re(e2));
        }, ie = function(e2) {
          return typeof e2 == "function";
        }, ue = ie, se = function(e2) {
          return typeof e2 == "object" ? e2 !== null : ue(e2);
        }, ae = S, ce = ie, le = function(e2) {
          return ce(e2) ? e2 : void 0;
        }, pe = function(e2, t2) {
          return arguments.length < 2 ? le(ae[e2]) : ae[e2] && ae[e2][t2];
        }, fe = q({}.isPrototypeOf), de = pe("navigator", "userAgent") || "", he = S, ge = de, me = he.process, ye = he.Deno, De = me && me.versions || ye && ye.version, Ee = De && De.v8;
        Ee && (_ = (j2 = Ee.split("."))[0] > 0 && j2[0] < 4 ? 1 : +(j2[0] + j2[1])), !_ && ge && (!(j2 = ge.match(/Edge\/(\d+)/)) || j2[1] >= 74) && (j2 = ge.match(/Chrome\/(\d+)/)) && (_ = +j2[1]);
        var Ce = _, be = Ce, ve = T, Ae = !!Object.getOwnPropertySymbols && !ve(function() {
          var e2 = Symbol();
          return !String(e2) || !(Object(e2) instanceof Symbol) || !Symbol.sham && be && be < 41;
        }), Fe = Ae && !Symbol.sham && typeof Symbol.iterator == "symbol", xe = pe, Se = ie, we = fe, Te = Fe, Be = S.Object, Ne = Te ? function(e2) {
          return typeof e2 == "symbol";
        } : function(e2) {
          var t2 = xe("Symbol");
          return Se(t2) && we(t2.prototype, Be(e2));
        }, ke = S.String, Pe = function(e2) {
          try {
            return ke(e2);
          } catch (e3) {
            return "Object";
          }
        }, Oe = ie, Ie = Pe, Le = S.TypeError, je = function(e2) {
          if (Oe(e2))
            return e2;
          throw Le(Ie(e2) + " is not a function");
        }, _e = je, Me = function(e2, t2) {
          var n2 = e2[t2];
          return n2 == null ? void 0 : _e(n2);
        }, Re = k, Ve = ie, $e = se, We = S.TypeError, qe = { exports: {} }, Ue = S, ze = Object.defineProperty, Ge = function(e2, t2) {
          try {
            ze(Ue, e2, { value: t2, configurable: true, writable: true });
          } catch (n2) {
            Ue[e2] = t2;
          }
          return t2;
        }, He = Ge, Je = "__core-js_shared__", Xe = S[Je] || He(Je, {}), Ye = Xe;
        (qe.exports = function(e2, t2) {
          return Ye[e2] || (Ye[e2] = t2 !== void 0 ? t2 : {});
        })("versions", []).push({ version: "3.19.1", mode: "global", copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)" });
        var Ke = te, Qe = S.Object, Ze = function(e2) {
          return Qe(Ke(e2));
        }, et = Ze, tt = q({}.hasOwnProperty), nt = Object.hasOwn || function(e2, t2) {
          return tt(et(e2), t2);
        }, rt = q, ot = 0, it = Math.random(), ut = rt(1 .toString), st = function(e2) {
          return "Symbol(" + (e2 === void 0 ? "" : e2) + ")_" + ut(++ot + it, 36);
        }, at = S, ct = qe.exports, lt2 = nt, pt = st, ft = Ae, dt = Fe, ht = ct("wks"), gt = at.Symbol, mt = gt && gt.for, yt = dt ? gt : gt && gt.withoutSetter || pt, Dt = function(e2) {
          if (!lt2(ht, e2) || !ft && typeof ht[e2] != "string") {
            var t2 = "Symbol." + e2;
            ft && lt2(gt, e2) ? ht[e2] = gt[e2] : ht[e2] = dt && mt ? mt(t2) : yt(t2);
          }
          return ht[e2];
        }, Et = k, Ct = se, bt = Ne, vt = Me, At = function(e2, t2) {
          var n2, r2;
          if (t2 === "string" && Ve(n2 = e2.toString) && !$e(r2 = Re(n2, e2)))
            return r2;
          if (Ve(n2 = e2.valueOf) && !$e(r2 = Re(n2, e2)))
            return r2;
          if (t2 !== "string" && Ve(n2 = e2.toString) && !$e(r2 = Re(n2, e2)))
            return r2;
          throw We("Can't convert object to primitive value");
        }, Ft = Dt, xt = S.TypeError, St = Ft("toPrimitive"), wt = function(e2, t2) {
          if (!Ct(e2) || bt(e2))
            return e2;
          var n2, r2 = vt(e2, St);
          if (r2) {
            if (t2 === void 0 && (t2 = "default"), n2 = Et(r2, e2, t2), !Ct(n2) || bt(n2))
              return n2;
            throw xt("Can't convert object to primitive value");
          }
          return t2 === void 0 && (t2 = "number"), At(e2, t2);
        }, Tt = Ne, Bt = function(e2) {
          var t2 = wt(e2, "string");
          return Tt(t2) ? t2 : t2 + "";
        }, Nt = se, kt = S.document, Pt = Nt(kt) && Nt(kt.createElement), Ot = function(e2) {
          return Pt ? kt.createElement(e2) : {};
        }, It = Ot, Lt = !B && !T(function() {
          return Object.defineProperty(It("div"), "a", { get: function() {
            return 7;
          } }).a != 7;
        }), jt2 = B, _t = k, Mt = P, Rt = M, Vt = oe, $t = Bt, Wt = nt, qt = Lt, Ut = Object.getOwnPropertyDescriptor;
        w.f = jt2 ? Ut : function(e2, t2) {
          if (e2 = Vt(e2), t2 = $t(t2), qt)
            try {
              return Ut(e2, t2);
            } catch (e3) {
            }
          if (Wt(e2, t2))
            return Rt(!_t(Mt.f, e2, t2), e2[t2]);
        };
        var zt = {}, Gt = S, Ht = se, Jt = Gt.String, Xt = Gt.TypeError, Yt = function(e2) {
          if (Ht(e2))
            return e2;
          throw Xt(Jt(e2) + " is not an object");
        }, Kt = B, Qt = Lt, Zt = Yt, en = Bt, tn = S.TypeError, nn = Object.defineProperty;
        zt.f = Kt ? nn : function(e2, t2, n2) {
          if (Zt(e2), t2 = en(t2), Zt(n2), Qt)
            try {
              return nn(e2, t2, n2);
            } catch (e3) {
            }
          if ("get" in n2 || "set" in n2)
            throw tn("Accessors not supported");
          return "value" in n2 && (e2[t2] = n2.value), e2;
        };
        var rn = zt, on = M, un = B ? function(e2, t2, n2) {
          return rn.f(e2, t2, on(1, n2));
        } : function(e2, t2, n2) {
          return e2[t2] = n2, e2;
        }, sn = { exports: {} }, an = ie, cn = Xe, ln = q(Function.toString);
        an(cn.inspectSource) || (cn.inspectSource = function(e2) {
          return ln(e2);
        });
        var pn, fn, dn, hn = cn.inspectSource, gn = ie, mn = hn, yn = S.WeakMap, Dn = gn(yn) && /native code/.test(mn(yn)), En = qe.exports, Cn = st, bn = En("keys"), vn = function(e2) {
          return bn[e2] || (bn[e2] = Cn(e2));
        }, An = {}, Fn = Dn, xn = S, Sn = q, wn = se, Tn = un, Bn = nt, Nn = Xe, kn = vn, Pn = An, On = "Object already initialized", In = xn.TypeError, Ln = xn.WeakMap;
        if (Fn || Nn.state) {
          var jn = Nn.state || (Nn.state = new Ln()), _n = Sn(jn.get), Mn = Sn(jn.has), Rn = Sn(jn.set);
          pn = function(e2, t2) {
            if (Mn(jn, e2))
              throw new In(On);
            return t2.facade = e2, Rn(jn, e2, t2), t2;
          }, fn = function(e2) {
            return _n(jn, e2) || {};
          }, dn = function(e2) {
            return Mn(jn, e2);
          };
        } else {
          var Vn = kn("state");
          Pn[Vn] = true, pn = function(e2, t2) {
            if (Bn(e2, Vn))
              throw new In(On);
            return t2.facade = e2, Tn(e2, Vn, t2), t2;
          }, fn = function(e2) {
            return Bn(e2, Vn) ? e2[Vn] : {};
          }, dn = function(e2) {
            return Bn(e2, Vn);
          };
        }
        var $n = { set: pn, get: fn, has: dn, enforce: function(e2) {
          return dn(e2) ? fn(e2) : pn(e2, {});
        }, getterFor: function(e2) {
          return function(t2) {
            var n2;
            if (!wn(t2) || (n2 = fn(t2)).type !== e2)
              throw In("Incompatible receiver, " + e2 + " required");
            return n2;
          };
        } }, Wn = B, qn = nt, Un = Function.prototype, zn = Wn && Object.getOwnPropertyDescriptor, Gn = qn(Un, "name"), Hn = Gn && function() {
        }.name === "something", Jn = Gn && (!Wn || Wn && zn(Un, "name").configurable), Xn = S, Yn = ie, Kn = nt, Qn = un, Zn = Ge, er = hn, tr = { EXISTS: Gn, PROPER: Hn, CONFIGURABLE: Jn }.CONFIGURABLE, nr = $n.get, rr = $n.enforce, or = String(String).split("String");
        (sn.exports = function(e2, t2, n2, r2) {
          var o2, i2 = !!r2 && !!r2.unsafe, u2 = !!r2 && !!r2.enumerable, s2 = !!r2 && !!r2.noTargetGet, a2 = r2 && r2.name !== void 0 ? r2.name : t2;
          Yn(n2) && (String(a2).slice(0, 7) === "Symbol(" && (a2 = "[" + String(a2).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!Kn(n2, "name") || tr && n2.name !== a2) && Qn(n2, "name", a2), (o2 = rr(n2)).source || (o2.source = or.join(typeof a2 == "string" ? a2 : ""))), e2 !== Xn ? (i2 ? !s2 && e2[t2] && (u2 = true) : delete e2[t2], u2 ? e2[t2] = n2 : Qn(e2, t2, n2)) : u2 ? e2[t2] = n2 : Zn(t2, n2);
        })(Function.prototype, "toString", function() {
          return Yn(this) && nr(this).source || er(this);
        });
        var ir = {}, ur = Math.ceil, sr = Math.floor, ar = function(e2) {
          var t2 = +e2;
          return t2 != t2 || t2 === 0 ? 0 : (t2 > 0 ? sr : ur)(t2);
        }, cr = ar, lr = Math.max, pr = Math.min, fr = ar, dr = Math.min, hr = function(e2) {
          return e2 > 0 ? dr(fr(e2), 9007199254740991) : 0;
        }, gr = function(e2) {
          return hr(e2.length);
        }, mr = oe, yr = function(e2, t2) {
          var n2 = cr(e2);
          return n2 < 0 ? lr(n2 + t2, 0) : pr(n2, t2);
        }, Dr = gr, Er = function(e2) {
          return function(t2, n2, r2) {
            var o2, i2 = mr(t2), u2 = Dr(i2), s2 = yr(r2, u2);
            if (e2 && n2 != n2) {
              for (; u2 > s2; )
                if ((o2 = i2[s2++]) != o2)
                  return true;
            } else
              for (; u2 > s2; s2++)
                if ((e2 || s2 in i2) && i2[s2] === n2)
                  return e2 || s2 || 0;
            return !e2 && -1;
          };
        }, Cr = { includes: Er(true), indexOf: Er(false) }, br = nt, vr = oe, Ar = Cr.indexOf, Fr = An, xr = q([].push), Sr = function(e2, t2) {
          var n2, r2 = vr(e2), o2 = 0, i2 = [];
          for (n2 in r2)
            !br(Fr, n2) && br(r2, n2) && xr(i2, n2);
          for (; t2.length > o2; )
            br(r2, n2 = t2[o2++]) && (~Ar(i2, n2) || xr(i2, n2));
          return i2;
        }, wr = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"], Tr = Sr, Br = wr.concat("length", "prototype");
        ir.f = Object.getOwnPropertyNames || function(e2) {
          return Tr(e2, Br);
        };
        var Nr = {};
        Nr.f = Object.getOwnPropertySymbols;
        var kr = pe, Pr = ir, Or = Nr, Ir = Yt, Lr = q([].concat), jr = kr("Reflect", "ownKeys") || function(e2) {
          var t2 = Pr.f(Ir(e2)), n2 = Or.f;
          return n2 ? Lr(t2, n2(e2)) : t2;
        }, _r = nt, Mr = jr, Rr = w, Vr = zt, $r = T, Wr = ie, qr = /#|\.prototype\./, Ur = function(e2, t2) {
          var n2 = Gr[zr(e2)];
          return n2 == Jr || n2 != Hr && (Wr(t2) ? $r(t2) : !!t2);
        }, zr = Ur.normalize = function(e2) {
          return String(e2).replace(qr, ".").toLowerCase();
        }, Gr = Ur.data = {}, Hr = Ur.NATIVE = "N", Jr = Ur.POLYFILL = "P", Xr = Ur, Yr = S, Kr = w.f, Qr = un, Zr = sn.exports, eo = Ge, to = function(e2, t2) {
          for (var n2 = Mr(t2), r2 = Vr.f, o2 = Rr.f, i2 = 0; i2 < n2.length; i2++) {
            var u2 = n2[i2];
            _r(e2, u2) || r2(e2, u2, o2(t2, u2));
          }
        }, no = Xr, ro = function(e2, t2) {
          var n2, r2, o2, i2, u2, s2 = e2.target, a2 = e2.global, c2 = e2.stat;
          if (n2 = a2 ? Yr : c2 ? Yr[s2] || eo(s2, {}) : (Yr[s2] || {}).prototype)
            for (r2 in t2) {
              if (i2 = t2[r2], o2 = e2.noTargetGet ? (u2 = Kr(n2, r2)) && u2.value : n2[r2], !no(a2 ? r2 : s2 + (c2 ? "." : "#") + r2, e2.forced) && o2 !== void 0) {
                if (typeof i2 == typeof o2)
                  continue;
                to(i2, o2);
              }
              (e2.sham || o2 && o2.sham) && Qr(i2, "sham", true), Zr(n2, r2, i2, e2);
            }
        }, oo = {};
        oo[Dt("toStringTag")] = "z";
        var io = S, uo = String(oo) === "[object z]", so = ie, ao = H, co = Dt("toStringTag"), lo = io.Object, po = ao(function() {
          return arguments;
        }()) == "Arguments", fo = uo ? ao : function(e2) {
          var t2, n2, r2;
          return e2 === void 0 ? "Undefined" : e2 === null ? "Null" : typeof (n2 = function(e3, t3) {
            try {
              return e3[t3];
            } catch (e4) {
            }
          }(t2 = lo(e2), co)) == "string" ? n2 : po ? ao(t2) : (r2 = ao(t2)) == "Object" && so(t2.callee) ? "Arguments" : r2;
        }, ho = fo, go = S.String, mo = q([].slice), yo = Math.floor, Do = function(e2, t2) {
          var n2 = e2.length, r2 = yo(n2 / 2);
          return n2 < 8 ? Eo(e2, t2) : Co(e2, Do(mo(e2, 0, r2), t2), Do(mo(e2, r2), t2), t2);
        }, Eo = function(e2, t2) {
          for (var n2, r2, o2 = e2.length, i2 = 1; i2 < o2; ) {
            for (r2 = i2, n2 = e2[i2]; r2 && t2(e2[r2 - 1], n2) > 0; )
              e2[r2] = e2[--r2];
            r2 !== i2++ && (e2[r2] = n2);
          }
          return e2;
        }, Co = function(e2, t2, n2, r2) {
          for (var o2 = t2.length, i2 = n2.length, u2 = 0, s2 = 0; u2 < o2 || s2 < i2; )
            e2[u2 + s2] = u2 < o2 && s2 < i2 ? r2(t2[u2], n2[s2]) <= 0 ? t2[u2++] : n2[s2++] : u2 < o2 ? t2[u2++] : n2[s2++];
          return e2;
        }, bo = Do, vo = T, Ao = de.match(/firefox\/(\d+)/i), Fo = !!Ao && +Ao[1], xo = /MSIE|Trident/.test(de), So = de.match(/AppleWebKit\/(\d+)\./), wo = !!So && +So[1], To = ro, Bo = q, No = je, ko = Ze, Po = gr, Oo = function(e2) {
          if (ho(e2) === "Symbol")
            throw TypeError("Cannot convert a Symbol value to a string");
          return go(e2);
        }, Io = T, Lo = bo, jo = function(e2, t2) {
          var n2 = [][e2];
          return !!n2 && vo(function() {
            n2.call(null, t2 || function() {
              throw 1;
            }, 1);
          });
        }, _o = Fo, Mo = xo, Ro = Ce, Vo = wo, $o = [], Wo = Bo($o.sort), qo = Bo($o.push), Uo = Io(function() {
          $o.sort(void 0);
        }), zo = Io(function() {
          $o.sort(null);
        }), Go = jo("sort"), Ho = !Io(function() {
          if (Ro)
            return Ro < 70;
          if (!(_o && _o > 3)) {
            if (Mo)
              return true;
            if (Vo)
              return Vo < 603;
            var e2, t2, n2, r2, o2 = "";
            for (e2 = 65; e2 < 76; e2++) {
              switch (t2 = String.fromCharCode(e2), e2) {
                case 66:
                case 69:
                case 70:
                case 72:
                  n2 = 3;
                  break;
                case 68:
                case 71:
                  n2 = 4;
                  break;
                default:
                  n2 = 2;
              }
              for (r2 = 0; r2 < 47; r2++)
                $o.push({ k: t2 + r2, v: n2 });
            }
            for ($o.sort(function(e3, t3) {
              return t3.v - e3.v;
            }), r2 = 0; r2 < $o.length; r2++)
              t2 = $o[r2].k.charAt(0), o2.charAt(o2.length - 1) !== t2 && (o2 += t2);
            return o2 !== "DGBEFHACIJK";
          }
        });
        To({ target: "Array", proto: true, forced: Uo || !zo || !Go || !Ho }, { sort: function(e2) {
          e2 !== void 0 && No(e2);
          var t2 = ko(this);
          if (Ho)
            return e2 === void 0 ? Wo(t2) : Wo(t2, e2);
          var n2, r2, o2 = [], i2 = Po(t2);
          for (r2 = 0; r2 < i2; r2++)
            r2 in t2 && qo(o2, t2[r2]);
          for (Lo(o2, function(e3) {
            return function(t3, n3) {
              return n3 === void 0 ? -1 : t3 === void 0 ? 1 : e3 !== void 0 ? +e3(t3, n3) || 0 : Oo(t3) > Oo(n3) ? 1 : -1;
            };
          }(e2)), n2 = o2.length, r2 = 0; r2 < n2; )
            t2[r2] = o2[r2++];
          for (; r2 < i2; )
            delete t2[r2++];
          return t2;
        } });
        var Jo = {};
        Object.defineProperty(Jo, "__esModule", { value: true }), Jo.diffJson = function(e2, t2, n2) {
          return Zo.diff(e2, t2, n2);
        }, Jo.canonicalize = ei, Jo.jsonDiff = void 0;
        var Xo = function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }(o), Yo = g;
        function Ko(e2) {
          return Ko = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e3) {
            return typeof e3;
          } : function(e3) {
            return e3 && typeof Symbol == "function" && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
          }, Ko(e2);
        }
        var Qo = Object.prototype.toString, Zo = new Xo.default();
        function ei(e2, t2, n2, r2, o2) {
          var i2, u2;
          for (t2 = t2 || [], n2 = n2 || [], r2 && (e2 = r2(o2, e2)), i2 = 0; i2 < t2.length; i2 += 1)
            if (t2[i2] === e2)
              return n2[i2];
          if (Qo.call(e2) === "[object Array]") {
            for (t2.push(e2), u2 = new Array(e2.length), n2.push(u2), i2 = 0; i2 < e2.length; i2 += 1)
              u2[i2] = ei(e2[i2], t2, n2, r2, o2);
            return t2.pop(), n2.pop(), u2;
          }
          if (e2 && e2.toJSON && (e2 = e2.toJSON()), Ko(e2) === "object" && e2 !== null) {
            t2.push(e2), u2 = {}, n2.push(u2);
            var s2, a2 = [];
            for (s2 in e2)
              e2.hasOwnProperty(s2) && a2.push(s2);
            for (a2.sort(), i2 = 0; i2 < a2.length; i2 += 1)
              u2[s2 = a2[i2]] = ei(e2[s2], t2, n2, r2, s2);
            t2.pop(), n2.pop();
          } else
            u2 = e2;
          return u2;
        }
        Jo.jsonDiff = Zo, Zo.useLongestToken = true, Zo.tokenize = Yo.lineDiff.tokenize, Zo.castInput = function(e2) {
          var t2 = this.options, n2 = t2.undefinedReplacement, r2 = t2.stringifyReplacer, o2 = r2 === void 0 ? function(e3, t3) {
            return t3 === void 0 ? n2 : t3;
          } : r2;
          return typeof e2 == "string" ? e2 : JSON.stringify(ei(e2, null, null, o2), o2, "  ");
        }, Zo.equals = function(e2, t2) {
          return Xo.default.prototype.equals.call(Zo, e2.replace(/,([\r\n])/g, "$1"), t2.replace(/,([\r\n])/g, "$1"));
        };
        var ti = {};
        Object.defineProperty(ti, "__esModule", { value: true }), ti.diffArrays = function(e2, t2, n2) {
          return ri.diff(e2, t2, n2);
        }, ti.arrayDiff = void 0;
        var ni = function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }(o);
        var ri = new ni.default();
        ti.arrayDiff = ri, ri.tokenize = function(e2) {
          return e2.slice();
        }, ri.join = ri.removeEmpty = function(e2) {
          return e2;
        };
        var oi = {}, ii = {};
        Object.defineProperty(ii, "__esModule", { value: true }), ii.parsePatch = function(e2) {
          var t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, n2 = e2.split(/\r\n|[\n\v\f\r\x85]/), r2 = e2.match(/\r\n|[\n\v\f\r\x85]/g) || [], o2 = [], i2 = 0;
          function u2() {
            var e3 = {};
            for (o2.push(e3); i2 < n2.length; ) {
              var r3 = n2[i2];
              if (/^(\-\-\-|\+\+\+|@@)\s/.test(r3))
                break;
              var u3 = /^(?:Index:|diff(?: -r \w+)+)\s+(.+?)\s*$/.exec(r3);
              u3 && (e3.index = u3[1]), i2++;
            }
            for (s2(e3), s2(e3), e3.hunks = []; i2 < n2.length; ) {
              var c2 = n2[i2];
              if (/^(Index:|diff|\-\-\-|\+\+\+)\s/.test(c2))
                break;
              if (/^@@/.test(c2))
                e3.hunks.push(a2());
              else {
                if (c2 && t2.strict)
                  throw new Error("Unknown line " + (i2 + 1) + " " + JSON.stringify(c2));
                i2++;
              }
            }
          }
          function s2(e3) {
            var t3 = /^(---|\+\+\+)\s+(.*)$/.exec(n2[i2]);
            if (t3) {
              var r3 = t3[1] === "---" ? "old" : "new", o3 = t3[2].split("	", 2), u3 = o3[0].replace(/\\\\/g, "\\");
              /^".*"$/.test(u3) && (u3 = u3.substr(1, u3.length - 2)), e3[r3 + "FileName"] = u3, e3[r3 + "Header"] = (o3[1] || "").trim(), i2++;
            }
          }
          function a2() {
            var e3 = i2, o3 = n2[i2++].split(/@@ -(\d+)(?:,(\d+))? \+(\d+)(?:,(\d+))? @@/), u3 = { oldStart: +o3[1], oldLines: o3[2] === void 0 ? 1 : +o3[2], newStart: +o3[3], newLines: o3[4] === void 0 ? 1 : +o3[4], lines: [], linedelimiters: [] };
            u3.oldLines === 0 && (u3.oldStart += 1), u3.newLines === 0 && (u3.newStart += 1);
            for (var s3 = 0, a3 = 0; i2 < n2.length && !(n2[i2].indexOf("--- ") === 0 && i2 + 2 < n2.length && n2[i2 + 1].indexOf("+++ ") === 0 && n2[i2 + 2].indexOf("@@") === 0); i2++) {
              var c2 = n2[i2].length == 0 && i2 != n2.length - 1 ? " " : n2[i2][0];
              if (c2 !== "+" && c2 !== "-" && c2 !== " " && c2 !== "\\")
                break;
              u3.lines.push(n2[i2]), u3.linedelimiters.push(r2[i2] || "\n"), c2 === "+" ? s3++ : c2 === "-" ? a3++ : c2 === " " && (s3++, a3++);
            }
            if (s3 || u3.newLines !== 1 || (u3.newLines = 0), a3 || u3.oldLines !== 1 || (u3.oldLines = 0), t2.strict) {
              if (s3 !== u3.newLines)
                throw new Error("Added line count did not match for hunk at line " + (e3 + 1));
              if (a3 !== u3.oldLines)
                throw new Error("Removed line count did not match for hunk at line " + (e3 + 1));
            }
            return u3;
          }
          for (; i2 < n2.length; )
            u2();
          return o2;
        };
        var ui = {};
        !function(e2) {
          Object.defineProperty(e2, "__esModule", { value: true }), e2.default = function(e3, t2, n2) {
            var r2 = true, o2 = false, i2 = false, u2 = 1;
            return function s2() {
              if (r2 && !i2) {
                if (o2 ? u2++ : r2 = false, e3 + u2 <= n2)
                  return u2;
                i2 = true;
              }
              if (!o2)
                return i2 || (r2 = true), t2 <= e3 - u2 ? -u2++ : (o2 = true, s2());
            };
          };
        }(ui), Object.defineProperty(oi, "__esModule", { value: true }), oi.applyPatch = ci, oi.applyPatches = function(e2, t2) {
          typeof e2 == "string" && (e2 = (0, si.parsePatch)(e2));
          var n2 = 0;
          !function r2() {
            var o2 = e2[n2++];
            if (!o2)
              return t2.complete();
            t2.loadFile(o2, function(e3, n3) {
              if (e3)
                return t2.complete(e3);
              var i2 = ci(n3, o2, t2);
              t2.patched(o2, i2, function(e4) {
                if (e4)
                  return t2.complete(e4);
                r2();
              });
            });
          }();
        };
        var si = ii, ai = function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }(ui);
        function ci(e2, t2) {
          var n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          if (typeof t2 == "string" && (t2 = (0, si.parsePatch)(t2)), Array.isArray(t2)) {
            if (t2.length > 1)
              throw new Error("applyPatch only works with a single input.");
            t2 = t2[0];
          }
          var r2, o2, i2 = e2.split(/\r\n|[\n\v\f\r\x85]/), u2 = e2.match(/\r\n|[\n\v\f\r\x85]/g) || [], s2 = t2.hunks, a2 = n2.compareLine || function(e3, t3, n3, r3) {
            return t3 === r3;
          }, c2 = 0, l3 = n2.fuzzFactor || 0, p2 = 0, f2 = 0;
          function d2(e3, t3) {
            for (var n3 = 0; n3 < e3.lines.length; n3++) {
              var r3 = e3.lines[n3], o3 = r3.length > 0 ? r3[0] : " ", u3 = r3.length > 0 ? r3.substr(1) : r3;
              if (o3 === " " || o3 === "-") {
                if (!a2(t3 + 1, i2[t3], o3, u3) && ++c2 > l3)
                  return false;
                t3++;
              }
            }
            return true;
          }
          for (var h2 = 0; h2 < s2.length; h2++) {
            for (var g2 = s2[h2], m2 = i2.length - g2.oldLines, y2 = 0, D2 = f2 + g2.oldStart - 1, E2 = (0, ai.default)(D2, p2, m2); y2 !== void 0; y2 = E2())
              if (d2(g2, D2 + y2)) {
                g2.offset = f2 += y2;
                break;
              }
            if (y2 === void 0)
              return false;
            p2 = g2.offset + g2.oldStart + g2.oldLines;
          }
          for (var C2 = 0, b2 = 0; b2 < s2.length; b2++) {
            var v2 = s2[b2], A2 = v2.oldStart + v2.offset + C2 - 1;
            C2 += v2.newLines - v2.oldLines;
            for (var F2 = 0; F2 < v2.lines.length; F2++) {
              var x2 = v2.lines[F2], S2 = x2.length > 0 ? x2[0] : " ", w2 = x2.length > 0 ? x2.substr(1) : x2, T2 = v2.linedelimiters[F2];
              if (S2 === " ")
                A2++;
              else if (S2 === "-")
                i2.splice(A2, 1), u2.splice(A2, 1);
              else if (S2 === "+")
                i2.splice(A2, 0, w2), u2.splice(A2, 0, T2), A2++;
              else if (S2 === "\\") {
                var B2 = v2.lines[F2 - 1] ? v2.lines[F2 - 1][0] : null;
                B2 === "+" ? r2 = true : B2 === "-" && (o2 = true);
              }
            }
          }
          if (r2)
            for (; !i2[i2.length - 1]; )
              i2.pop(), u2.pop();
          else
            o2 && (i2.push(""), u2.push("\n"));
          for (var N2 = 0; N2 < i2.length - 1; N2++)
            i2[N2] = i2[N2] + u2[N2];
          return i2.join("");
        }
        var li = {}, pi = {};
        Object.defineProperty(pi, "__esModule", { value: true }), pi.structuredPatch = gi, pi.formatPatch = mi, pi.createTwoFilesPatch = yi, pi.createPatch = function(e2, t2, n2, r2, o2, i2) {
          return yi(e2, e2, t2, n2, r2, o2, i2);
        };
        var fi = g;
        function di(e2) {
          return function(e3) {
            if (Array.isArray(e3))
              return hi(e3);
          }(e2) || function(e3) {
            if (typeof Symbol != "undefined" && Symbol.iterator in Object(e3))
              return Array.from(e3);
          }(e2) || function(e3, t2) {
            if (!e3)
              return;
            if (typeof e3 == "string")
              return hi(e3, t2);
            var n2 = Object.prototype.toString.call(e3).slice(8, -1);
            n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
            if (n2 === "Map" || n2 === "Set")
              return Array.from(e3);
            if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
              return hi(e3, t2);
          }(e2) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function hi(e2, t2) {
          (t2 == null || t2 > e2.length) && (t2 = e2.length);
          for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
            r2[n2] = e2[n2];
          return r2;
        }
        function gi(e2, t2, n2, r2, o2, i2, u2) {
          u2 || (u2 = {}), u2.context === void 0 && (u2.context = 4);
          var s2 = (0, fi.diffLines)(n2, r2, u2);
          function a2(e3) {
            return e3.map(function(e4) {
              return " " + e4;
            });
          }
          s2.push({ value: "", lines: [] });
          for (var c2 = [], l3 = 0, p2 = 0, f2 = [], d2 = 1, h2 = 1, g2 = function(e3) {
            var t3 = s2[e3], o3 = t3.lines || t3.value.replace(/\n$/, "").split("\n");
            if (t3.lines = o3, t3.added || t3.removed) {
              var i3;
              if (!l3) {
                var g3 = s2[e3 - 1];
                l3 = d2, p2 = h2, g3 && (f2 = u2.context > 0 ? a2(g3.lines.slice(-u2.context)) : [], l3 -= f2.length, p2 -= f2.length);
              }
              (i3 = f2).push.apply(i3, di(o3.map(function(e4) {
                return (t3.added ? "+" : "-") + e4;
              }))), t3.added ? h2 += o3.length : d2 += o3.length;
            } else {
              if (l3)
                if (o3.length <= 2 * u2.context && e3 < s2.length - 2) {
                  var m3;
                  (m3 = f2).push.apply(m3, di(a2(o3)));
                } else {
                  var y2, D2 = Math.min(o3.length, u2.context);
                  (y2 = f2).push.apply(y2, di(a2(o3.slice(0, D2))));
                  var E2 = { oldStart: l3, oldLines: d2 - l3 + D2, newStart: p2, newLines: h2 - p2 + D2, lines: f2 };
                  if (e3 >= s2.length - 2 && o3.length <= u2.context) {
                    var C2 = /\n$/.test(n2), b2 = /\n$/.test(r2), v2 = o3.length == 0 && f2.length > E2.oldLines;
                    !C2 && v2 && n2.length > 0 && f2.splice(E2.oldLines, 0, "\\ No newline at end of file"), (C2 || v2) && b2 || f2.push("\\ No newline at end of file");
                  }
                  c2.push(E2), l3 = 0, p2 = 0, f2 = [];
                }
              d2 += o3.length, h2 += o3.length;
            }
          }, m2 = 0; m2 < s2.length; m2++)
            g2(m2);
          return { oldFileName: e2, newFileName: t2, oldHeader: o2, newHeader: i2, hunks: c2 };
        }
        function mi(e2) {
          var t2 = [];
          e2.oldFileName == e2.newFileName && t2.push("Index: " + e2.oldFileName), t2.push("==================================================================="), t2.push("--- " + e2.oldFileName + (e2.oldHeader === void 0 ? "" : "	" + e2.oldHeader)), t2.push("+++ " + e2.newFileName + (e2.newHeader === void 0 ? "" : "	" + e2.newHeader));
          for (var n2 = 0; n2 < e2.hunks.length; n2++) {
            var r2 = e2.hunks[n2];
            r2.oldLines === 0 && (r2.oldStart -= 1), r2.newLines === 0 && (r2.newStart -= 1), t2.push("@@ -" + r2.oldStart + "," + r2.oldLines + " +" + r2.newStart + "," + r2.newLines + " @@"), t2.push.apply(t2, r2.lines);
          }
          return t2.join("\n") + "\n";
        }
        function yi(e2, t2, n2, r2, o2, i2, u2) {
          return mi(gi(e2, t2, n2, r2, o2, i2, u2));
        }
        var Di = {};
        function Ei(e2, t2) {
          if (t2.length > e2.length)
            return false;
          for (var n2 = 0; n2 < t2.length; n2++)
            if (t2[n2] !== e2[n2])
              return false;
          return true;
        }
        Object.defineProperty(Di, "__esModule", { value: true }), Di.arrayEqual = function(e2, t2) {
          if (e2.length !== t2.length)
            return false;
          return Ei(e2, t2);
        }, Di.arrayStartsWith = Ei, Object.defineProperty(li, "__esModule", { value: true }), li.calcLineCount = xi, li.merge = function(e2, t2, n2) {
          e2 = Si(e2, n2), t2 = Si(t2, n2);
          var r2 = {};
          (e2.index || t2.index) && (r2.index = e2.index || t2.index);
          (e2.newFileName || t2.newFileName) && (wi(e2) ? wi(t2) ? (r2.oldFileName = Ti(r2, e2.oldFileName, t2.oldFileName), r2.newFileName = Ti(r2, e2.newFileName, t2.newFileName), r2.oldHeader = Ti(r2, e2.oldHeader, t2.oldHeader), r2.newHeader = Ti(r2, e2.newHeader, t2.newHeader)) : (r2.oldFileName = e2.oldFileName, r2.newFileName = e2.newFileName, r2.oldHeader = e2.oldHeader, r2.newHeader = e2.newHeader) : (r2.oldFileName = t2.oldFileName || e2.oldFileName, r2.newFileName = t2.newFileName || e2.newFileName, r2.oldHeader = t2.oldHeader || e2.oldHeader, r2.newHeader = t2.newHeader || e2.newHeader));
          r2.hunks = [];
          var o2 = 0, i2 = 0, u2 = 0, s2 = 0;
          for (; o2 < e2.hunks.length || i2 < t2.hunks.length; ) {
            var a2 = e2.hunks[o2] || { oldStart: 1 / 0 }, c2 = t2.hunks[i2] || { oldStart: 1 / 0 };
            if (Bi(a2, c2))
              r2.hunks.push(Ni(a2, u2)), o2++, s2 += a2.newLines - a2.oldLines;
            else if (Bi(c2, a2))
              r2.hunks.push(Ni(c2, s2)), i2++, u2 += c2.newLines - c2.oldLines;
            else {
              var l3 = { oldStart: Math.min(a2.oldStart, c2.oldStart), oldLines: 0, newStart: Math.min(a2.newStart + u2, c2.oldStart + s2), newLines: 0, lines: [] };
              ki(l3, a2.oldStart, a2.lines, c2.oldStart, c2.lines), i2++, o2++, r2.hunks.push(l3);
            }
          }
          return r2;
        };
        var Ci = pi, bi = ii, vi = Di;
        function Ai(e2) {
          return function(e3) {
            if (Array.isArray(e3))
              return Fi(e3);
          }(e2) || function(e3) {
            if (typeof Symbol != "undefined" && Symbol.iterator in Object(e3))
              return Array.from(e3);
          }(e2) || function(e3, t2) {
            if (!e3)
              return;
            if (typeof e3 == "string")
              return Fi(e3, t2);
            var n2 = Object.prototype.toString.call(e3).slice(8, -1);
            n2 === "Object" && e3.constructor && (n2 = e3.constructor.name);
            if (n2 === "Map" || n2 === "Set")
              return Array.from(e3);
            if (n2 === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
              return Fi(e3, t2);
          }(e2) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
          }();
        }
        function Fi(e2, t2) {
          (t2 == null || t2 > e2.length) && (t2 = e2.length);
          for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
            r2[n2] = e2[n2];
          return r2;
        }
        function xi(e2) {
          var t2 = Vi(e2.lines), n2 = t2.oldLines, r2 = t2.newLines;
          n2 !== void 0 ? e2.oldLines = n2 : delete e2.oldLines, r2 !== void 0 ? e2.newLines = r2 : delete e2.newLines;
        }
        function Si(e2, t2) {
          if (typeof e2 == "string") {
            if (/^@@/m.test(e2) || /^Index:/m.test(e2))
              return (0, bi.parsePatch)(e2)[0];
            if (!t2)
              throw new Error("Must provide a base reference or pass in a patch");
            return (0, Ci.structuredPatch)(void 0, void 0, t2, e2);
          }
          return e2;
        }
        function wi(e2) {
          return e2.newFileName && e2.newFileName !== e2.oldFileName;
        }
        function Ti(e2, t2, n2) {
          return t2 === n2 ? t2 : (e2.conflict = true, { mine: t2, theirs: n2 });
        }
        function Bi(e2, t2) {
          return e2.oldStart < t2.oldStart && e2.oldStart + e2.oldLines < t2.oldStart;
        }
        function Ni(e2, t2) {
          return { oldStart: e2.oldStart, oldLines: e2.oldLines, newStart: e2.newStart + t2, newLines: e2.newLines, lines: e2.lines };
        }
        function ki(e2, t2, n2, r2, o2) {
          var i2 = { offset: t2, lines: n2, index: 0 }, u2 = { offset: r2, lines: o2, index: 0 };
          for (Li(e2, i2, u2), Li(e2, u2, i2); i2.index < i2.lines.length && u2.index < u2.lines.length; ) {
            var s2 = i2.lines[i2.index], a2 = u2.lines[u2.index];
            if (s2[0] !== "-" && s2[0] !== "+" || a2[0] !== "-" && a2[0] !== "+")
              if (s2[0] === "+" && a2[0] === " ") {
                var c2;
                (c2 = e2.lines).push.apply(c2, Ai(_i(i2)));
              } else if (a2[0] === "+" && s2[0] === " ") {
                var l3;
                (l3 = e2.lines).push.apply(l3, Ai(_i(u2)));
              } else
                s2[0] === "-" && a2[0] === " " ? Oi(e2, i2, u2) : a2[0] === "-" && s2[0] === " " ? Oi(e2, u2, i2, true) : s2 === a2 ? (e2.lines.push(s2), i2.index++, u2.index++) : Ii(e2, _i(i2), _i(u2));
            else
              Pi(e2, i2, u2);
          }
          ji(e2, i2), ji(e2, u2), xi(e2);
        }
        function Pi(e2, t2, n2) {
          var r2 = _i(t2), o2 = _i(n2);
          if (Mi(r2) && Mi(o2)) {
            var i2, u2;
            if ((0, vi.arrayStartsWith)(r2, o2) && Ri(n2, r2, r2.length - o2.length))
              return void (i2 = e2.lines).push.apply(i2, Ai(r2));
            if ((0, vi.arrayStartsWith)(o2, r2) && Ri(t2, o2, o2.length - r2.length))
              return void (u2 = e2.lines).push.apply(u2, Ai(o2));
          } else if ((0, vi.arrayEqual)(r2, o2)) {
            var s2;
            return void (s2 = e2.lines).push.apply(s2, Ai(r2));
          }
          Ii(e2, r2, o2);
        }
        function Oi(e2, t2, n2, r2) {
          var o2, i2 = _i(t2), u2 = function(e3, t3) {
            var n3 = [], r3 = [], o3 = 0, i3 = false, u3 = false;
            for (; o3 < t3.length && e3.index < e3.lines.length; ) {
              var s2 = e3.lines[e3.index], a2 = t3[o3];
              if (a2[0] === "+")
                break;
              if (i3 = i3 || s2[0] !== " ", r3.push(a2), o3++, s2[0] === "+")
                for (u3 = true; s2[0] === "+"; )
                  n3.push(s2), s2 = e3.lines[++e3.index];
              a2.substr(1) === s2.substr(1) ? (n3.push(s2), e3.index++) : u3 = true;
            }
            (t3[o3] || "")[0] === "+" && i3 && (u3 = true);
            if (u3)
              return n3;
            for (; o3 < t3.length; )
              r3.push(t3[o3++]);
            return { merged: r3, changes: n3 };
          }(n2, i2);
          u2.merged ? (o2 = e2.lines).push.apply(o2, Ai(u2.merged)) : Ii(e2, r2 ? u2 : i2, r2 ? i2 : u2);
        }
        function Ii(e2, t2, n2) {
          e2.conflict = true, e2.lines.push({ conflict: true, mine: t2, theirs: n2 });
        }
        function Li(e2, t2, n2) {
          for (; t2.offset < n2.offset && t2.index < t2.lines.length; ) {
            var r2 = t2.lines[t2.index++];
            e2.lines.push(r2), t2.offset++;
          }
        }
        function ji(e2, t2) {
          for (; t2.index < t2.lines.length; ) {
            var n2 = t2.lines[t2.index++];
            e2.lines.push(n2);
          }
        }
        function _i(e2) {
          for (var t2 = [], n2 = e2.lines[e2.index][0]; e2.index < e2.lines.length; ) {
            var r2 = e2.lines[e2.index];
            if (n2 === "-" && r2[0] === "+" && (n2 = "+"), n2 !== r2[0])
              break;
            t2.push(r2), e2.index++;
          }
          return t2;
        }
        function Mi(e2) {
          return e2.reduce(function(e3, t2) {
            return e3 && t2[0] === "-";
          }, true);
        }
        function Ri(e2, t2, n2) {
          for (var r2 = 0; r2 < n2; r2++) {
            var o2 = t2[t2.length - n2 + r2].substr(1);
            if (e2.lines[e2.index + r2] !== " " + o2)
              return false;
          }
          return e2.index += n2, true;
        }
        function Vi(e2) {
          var t2 = 0, n2 = 0;
          return e2.forEach(function(e3) {
            if (typeof e3 != "string") {
              var r2 = Vi(e3.mine), o2 = Vi(e3.theirs);
              t2 !== void 0 && (r2.oldLines === o2.oldLines ? t2 += r2.oldLines : t2 = void 0), n2 !== void 0 && (r2.newLines === o2.newLines ? n2 += r2.newLines : n2 = void 0);
            } else
              n2 === void 0 || e3[0] !== "+" && e3[0] !== " " || n2++, t2 === void 0 || e3[0] !== "-" && e3[0] !== " " || t2++;
          }), { oldLines: t2, newLines: n2 };
        }
        var $i = {};
        Object.defineProperty($i, "__esModule", { value: true }), $i.convertChangesToDMP = function(e2) {
          for (var t2, n2, r2 = [], o2 = 0; o2 < e2.length; o2++)
            t2 = e2[o2], n2 = t2.added ? 1 : t2.removed ? -1 : 0, r2.push([n2, t2.value]);
          return r2;
        };
        var Wi = {};
        function qi(e2) {
          var t2 = e2;
          return t2 = (t2 = (t2 = (t2 = t2.replace(/&/g, "&amp;")).replace(/</g, "&lt;")).replace(/>/g, "&gt;")).replace(/"/g, "&quot;");
        }
        function Ui(e2) {
          return { type: "concat", parts: e2 };
        }
        function zi(e2) {
          return { type: "indent", contents: e2 };
        }
        function Gi(e2, t2) {
          return { type: "align", contents: t2, n: e2 };
        }
        function Hi(e2) {
          let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return { type: "group", id: t2.id, contents: e2, break: Boolean(t2.shouldBreak), expandedStates: t2.expandedStates };
        }
        Object.defineProperty(Wi, "__esModule", { value: true }), Wi.convertChangesToXML = function(e2) {
          for (var t2 = [], n2 = 0; n2 < e2.length; n2++) {
            var r2 = e2[n2];
            r2.added ? t2.push("<ins>") : r2.removed && t2.push("<del>"), t2.push(qi(r2.value)), r2.added ? t2.push("</ins>") : r2.removed && t2.push("</del>");
          }
          return t2.join("");
        }, function(e2) {
          Object.defineProperty(e2, "__esModule", { value: true }), Object.defineProperty(e2, "Diff", { enumerable: true, get: function() {
            return t2.default;
          } }), Object.defineProperty(e2, "diffChars", { enumerable: true, get: function() {
            return n2.diffChars;
          } }), Object.defineProperty(e2, "diffWords", { enumerable: true, get: function() {
            return r2.diffWords;
          } }), Object.defineProperty(e2, "diffWordsWithSpace", { enumerable: true, get: function() {
            return r2.diffWordsWithSpace;
          } }), Object.defineProperty(e2, "diffLines", { enumerable: true, get: function() {
            return i2.diffLines;
          } }), Object.defineProperty(e2, "diffTrimmedLines", { enumerable: true, get: function() {
            return i2.diffTrimmedLines;
          } }), Object.defineProperty(e2, "diffSentences", { enumerable: true, get: function() {
            return s2.diffSentences;
          } }), Object.defineProperty(e2, "diffCss", { enumerable: true, get: function() {
            return c2.diffCss;
          } }), Object.defineProperty(e2, "diffJson", { enumerable: true, get: function() {
            return l3.diffJson;
          } }), Object.defineProperty(e2, "canonicalize", { enumerable: true, get: function() {
            return l3.canonicalize;
          } }), Object.defineProperty(e2, "diffArrays", { enumerable: true, get: function() {
            return p2.diffArrays;
          } }), Object.defineProperty(e2, "applyPatch", { enumerable: true, get: function() {
            return f2.applyPatch;
          } }), Object.defineProperty(e2, "applyPatches", { enumerable: true, get: function() {
            return f2.applyPatches;
          } }), Object.defineProperty(e2, "parsePatch", { enumerable: true, get: function() {
            return d2.parsePatch;
          } }), Object.defineProperty(e2, "merge", { enumerable: true, get: function() {
            return h2.merge;
          } }), Object.defineProperty(e2, "structuredPatch", { enumerable: true, get: function() {
            return m2.structuredPatch;
          } }), Object.defineProperty(e2, "createTwoFilesPatch", { enumerable: true, get: function() {
            return m2.createTwoFilesPatch;
          } }), Object.defineProperty(e2, "createPatch", { enumerable: true, get: function() {
            return m2.createPatch;
          } }), Object.defineProperty(e2, "convertChangesToDMP", { enumerable: true, get: function() {
            return y2.convertChangesToDMP;
          } }), Object.defineProperty(e2, "convertChangesToXML", { enumerable: true, get: function() {
            return D2.convertChangesToXML;
          } });
          var t2 = function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          }(o), n2 = u, r2 = a, i2 = g, s2 = E, c2 = v, l3 = Jo, p2 = ti, f2 = oi, d2 = ii, h2 = li, m2 = pi, y2 = $i, D2 = Wi;
        }(r);
        const Ji = { type: "break-parent" }, Xi = { type: "line", hard: true }, Yi = { type: "line", hard: true, literal: true }, Ki = Ui([Xi, Ji]), Qi = Ui([Yi, Ji]);
        var Zi = { concat: Ui, join: function(e2, t2) {
          const n2 = [];
          for (let r2 = 0; r2 < t2.length; r2++)
            r2 !== 0 && n2.push(e2), n2.push(t2[r2]);
          return Ui(n2);
        }, line: { type: "line" }, softline: { type: "line", soft: true }, hardline: Ki, literalline: Qi, group: Hi, conditionalGroup: function(e2, t2) {
          return Hi(e2[0], Object.assign(Object.assign({}, t2), {}, { expandedStates: e2 }));
        }, fill: function(e2) {
          return { type: "fill", parts: e2 };
        }, lineSuffix: function(e2) {
          return { type: "line-suffix", contents: e2 };
        }, lineSuffixBoundary: { type: "line-suffix-boundary" }, cursor: { type: "cursor", placeholder: Symbol("cursor") }, breakParent: Ji, ifBreak: function(e2, t2) {
          let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return { type: "if-break", breakContents: e2, flatContents: t2, groupId: n2.groupId };
        }, trim: { type: "trim" }, indent: zi, indentIfBreak: function(e2, t2) {
          return { type: "indent-if-break", contents: e2, groupId: t2.groupId, negate: t2.negate };
        }, align: Gi, addAlignmentToDoc: function(e2, t2, n2) {
          let r2 = e2;
          if (t2 > 0) {
            for (let e3 = 0; e3 < Math.floor(t2 / n2); ++e3)
              r2 = zi(r2);
            r2 = Gi(t2 % n2, r2), r2 = Gi(Number.NEGATIVE_INFINITY, r2);
          }
          return r2;
        }, markAsRoot: function(e2) {
          return Gi({ type: "root" }, e2);
        }, dedentToRoot: function(e2) {
          return Gi(Number.NEGATIVE_INFINITY, e2);
        }, dedent: function(e2) {
          return Gi(-1, e2);
        }, hardlineWithoutBreakParent: Xi, literallineWithoutBreakParent: Yi, label: function(e2, t2) {
          return { type: "label", label: e2, contents: t2 };
        } }, eu = { exports: {} };
        const tu = function() {
          let { onlyFirst: e2 = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          const t2 = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
          return new RegExp(t2, e2 ? void 0 : "g");
        };
        var nu = { exports: {} };
        const ru = (e2) => !Number.isNaN(e2) && (e2 >= 4352 && (e2 <= 4447 || e2 === 9001 || e2 === 9002 || 11904 <= e2 && e2 <= 12871 && e2 !== 12351 || 12880 <= e2 && e2 <= 19903 || 19968 <= e2 && e2 <= 42182 || 43360 <= e2 && e2 <= 43388 || 44032 <= e2 && e2 <= 55203 || 63744 <= e2 && e2 <= 64255 || 65040 <= e2 && e2 <= 65049 || 65072 <= e2 && e2 <= 65131 || 65281 <= e2 && e2 <= 65376 || 65504 <= e2 && e2 <= 65510 || 110592 <= e2 && e2 <= 110593 || 127488 <= e2 && e2 <= 127569 || 131072 <= e2 && e2 <= 262141));
        nu.exports = ru, nu.exports.default = ru;
        const ou = (e2) => typeof e2 == "string" ? e2.replace(tu(), "") : e2, iu = nu.exports, uu = function() {
          return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F|\uD83D\uDC68(?:\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68\uD83C\uDFFB|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|[\u2695\u2696\u2708]\uFE0F|\uD83D[\uDC66\uDC67]|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708])\uFE0F|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C[\uDFFB-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)\uD83C\uDFFB|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB\uDFFC])|\uD83D\uDC69(?:\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D\uD83D\uDC69)(?:\uD83C[\uDFFB-\uDFFD])|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|(?:(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)\uFE0F|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:(?:\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\u200D[\u2640\u2642])|\uD83C\uDFF4\u200D\u2620)\uFE0F|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF4\uD83C\uDDF2|\uD83C\uDDF6\uD83C\uDDE6|[#\*0-9]\uFE0F\u20E3|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83D\uDC69(?:\uD83C[\uDFFB-\uDFFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270A-\u270D]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC70\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDCAA\uDD74\uDD7A\uDD90\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD36\uDDB5\uDDB6\uDDBB\uDDD2-\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5\uDEEB\uDEEC\uDEF4-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFA\uDFE0-\uDFEB]|\uD83E[\uDD0D-\uDD3A\uDD3C-\uDD45\uDD47-\uDD71\uDD73-\uDD76\uDD7A-\uDDA2\uDDA5-\uDDAA\uDDAE-\uDDCA\uDDCD-\uDDFF\uDE70-\uDE73\uDE78-\uDE7A\uDE80-\uDE82\uDE90-\uDE95])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
        }, su = (e2) => {
          if (typeof e2 != "string" || e2.length === 0)
            return 0;
          if ((e2 = ou(e2)).length === 0)
            return 0;
          e2 = e2.replace(uu(), "  ");
          let t2 = 0;
          for (let n2 = 0; n2 < e2.length; n2++) {
            const r2 = e2.codePointAt(n2);
            r2 <= 31 || r2 >= 127 && r2 <= 159 || (r2 >= 768 && r2 <= 879 || (r2 > 65535 && n2++, t2 += iu(r2) ? 2 : 1));
          }
          return t2;
        };
        eu.exports = su, eu.exports.default = su;
        var au = (e2) => e2[e2.length - 1];
        function cu(e2, t2) {
          if (e2 == null)
            return {};
          var n2, r2, o2 = function(e3, t3) {
            if (e3 == null)
              return {};
            var n3, r3, o3 = {}, i3 = Object.keys(e3);
            for (r3 = 0; r3 < i3.length; r3++)
              n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
            return o3;
          }(e2, t2);
          if (Object.getOwnPropertySymbols) {
            var i2 = Object.getOwnPropertySymbols(e2);
            for (r2 = 0; r2 < i2.length; r2++)
              n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
          }
          return o2;
        }
        function lu(e2, t2) {
          return t2 || (t2 = e2.slice(0)), Object.freeze(Object.defineProperties(e2, { raw: { value: Object.freeze(t2) } }));
        }
        var pu = H, fu = Array.isArray || function(e2) {
          return pu(e2) == "Array";
        }, du = je, hu = q(q.bind), gu = function(e2, t2) {
          return du(e2), t2 === void 0 ? e2 : hu ? hu(e2, t2) : function() {
            return e2.apply(t2, arguments);
          };
        }, mu = fu, yu = gr, Du = gu, Eu = S.TypeError, Cu = function(e2, t2, n2, r2, o2, i2, u2, s2) {
          for (var a2, c2, l3 = o2, p2 = 0, f2 = !!u2 && Du(u2, s2); p2 < r2; ) {
            if (p2 in n2) {
              if (a2 = f2 ? f2(n2[p2], p2, t2) : n2[p2], i2 > 0 && mu(a2))
                c2 = yu(a2), l3 = Cu(e2, t2, a2, c2, l3, i2 - 1) - 1;
              else {
                if (l3 >= 9007199254740991)
                  throw Eu("Exceed the acceptable array length");
                e2[l3] = a2;
              }
              l3++;
            }
            p2++;
          }
          return l3;
        }, bu = Cu, vu = q, Au = T, Fu = ie, xu = fo, Su = hn, wu = function() {
        }, Tu = [], Bu = pe("Reflect", "construct"), Nu = /^\s*(?:class|function)\b/, ku = vu(Nu.exec), Pu = !Nu.exec(wu), Ou = function(e2) {
          if (!Fu(e2))
            return false;
          try {
            return Bu(wu, Tu, e2), true;
          } catch (e3) {
            return false;
          }
        }, Iu = !Bu || Au(function() {
          var e2;
          return Ou(Ou.call) || !Ou(Object) || !Ou(function() {
            e2 = true;
          }) || e2;
        }) ? function(e2) {
          if (!Fu(e2))
            return false;
          switch (xu(e2)) {
            case "AsyncFunction":
            case "GeneratorFunction":
            case "AsyncGeneratorFunction":
              return false;
          }
          return Pu || !!ku(Nu, Su(e2));
        } : Ou, Lu = S, ju = fu, _u = Iu, Mu = se, Ru = Dt("species"), Vu = Lu.Array, $u = function(e2) {
          var t2;
          return ju(e2) && (t2 = e2.constructor, (_u(t2) && (t2 === Vu || ju(t2.prototype)) || Mu(t2) && (t2 = t2[Ru]) === null) && (t2 = void 0)), t2 === void 0 ? Vu : t2;
        }, Wu = function(e2, t2) {
          return new ($u(e2))(t2 === 0 ? 0 : t2);
        }, qu = bu, Uu = je, zu = Ze, Gu = gr, Hu = Wu;
        ro({ target: "Array", proto: true }, { flatMap: function(e2) {
          var t2, n2 = zu(this), r2 = Gu(n2);
          return Uu(e2), (t2 = Hu(n2, 0)).length = qu(t2, n2, n2, r2, 0, 1, e2, arguments.length > 1 ? arguments[1] : void 0), t2;
        } });
        var Ju = {}, Xu = Ju, Yu = Dt("iterator"), Ku = Array.prototype, Qu = fo, Zu = Me, es = Ju, ts = Dt("iterator"), ns = function(e2) {
          if (e2 != null)
            return Zu(e2, ts) || Zu(e2, "@@iterator") || es[Qu(e2)];
        }, rs = k, os = je, is = Yt, us = Pe, ss = ns, as = S.TypeError, cs = k, ls = Yt, ps = Me, fs = gu, ds = k, hs = Yt, gs = Pe, ms = function(e2) {
          return e2 !== void 0 && (Xu.Array === e2 || Ku[Yu] === e2);
        }, ys = gr, Ds = fe, Es = function(e2, t2) {
          var n2 = arguments.length < 2 ? ss(e2) : t2;
          if (os(n2))
            return is(rs(n2, e2));
          throw as(us(e2) + " is not iterable");
        }, Cs = ns, bs = function(e2, t2, n2) {
          var r2, o2;
          ls(e2);
          try {
            if (!(r2 = ps(e2, "return"))) {
              if (t2 === "throw")
                throw n2;
              return n2;
            }
            r2 = cs(r2, e2);
          } catch (e3) {
            o2 = true, r2 = e3;
          }
          if (t2 === "throw")
            throw n2;
          if (o2)
            throw r2;
          return ls(r2), n2;
        }, vs = S.TypeError, As = function(e2, t2) {
          this.stopped = e2, this.result = t2;
        }, Fs = As.prototype, xs = Bt, Ss = zt, ws = M, Ts = function(e2, t2, n2) {
          var r2, o2, i2, u2, s2, a2, c2, l3 = n2 && n2.that, p2 = !(!n2 || !n2.AS_ENTRIES), f2 = !(!n2 || !n2.IS_ITERATOR), d2 = !(!n2 || !n2.INTERRUPTED), h2 = fs(t2, l3), g2 = function(e3) {
            return r2 && bs(r2, "normal", e3), new As(true, e3);
          }, m2 = function(e3) {
            return p2 ? (hs(e3), d2 ? h2(e3[0], e3[1], g2) : h2(e3[0], e3[1])) : d2 ? h2(e3, g2) : h2(e3);
          };
          if (f2)
            r2 = e2;
          else {
            if (!(o2 = Cs(e2)))
              throw vs(gs(e2) + " is not iterable");
            if (ms(o2)) {
              for (i2 = 0, u2 = ys(e2); u2 > i2; i2++)
                if ((s2 = m2(e2[i2])) && Ds(Fs, s2))
                  return s2;
              return new As(false);
            }
            r2 = Es(e2, o2);
          }
          for (a2 = r2.next; !(c2 = ds(a2, r2)).done; ) {
            try {
              s2 = m2(c2.value);
            } catch (e3) {
              bs(r2, "throw", e3);
            }
            if (typeof s2 == "object" && s2 && Ds(Fs, s2))
              return s2;
          }
          return new As(false);
        }, Bs = function(e2, t2, n2) {
          var r2 = xs(t2);
          r2 in e2 ? Ss.f(e2, r2, ws(0, n2)) : e2[r2] = n2;
        };
        ro({ target: "Object", stat: true }, { fromEntries: function(e2) {
          var t2 = {};
          return Ts(e2, function(e3, n2) {
            Bs(t2, e3, n2);
          }, { AS_ENTRIES: true }), t2;
        } });
        var Ns = Ns !== void 0 ? Ns : typeof self != "undefined" ? self : typeof window != "undefined" ? window : {};
        function ks() {
          throw new Error("setTimeout has not been defined");
        }
        function Ps() {
          throw new Error("clearTimeout has not been defined");
        }
        var Os = ks, Is = Ps;
        function Ls(e2) {
          if (Os === setTimeout)
            return setTimeout(e2, 0);
          if ((Os === ks || !Os) && setTimeout)
            return Os = setTimeout, setTimeout(e2, 0);
          try {
            return Os(e2, 0);
          } catch (t2) {
            try {
              return Os.call(null, e2, 0);
            } catch (t3) {
              return Os.call(this, e2, 0);
            }
          }
        }
        typeof Ns.setTimeout == "function" && (Os = setTimeout), typeof Ns.clearTimeout == "function" && (Is = clearTimeout);
        var js2, _s = [], Ms = false, Rs = -1;
        function Vs() {
          Ms && js2 && (Ms = false, js2.length ? _s = js2.concat(_s) : Rs = -1, _s.length && $s());
        }
        function $s() {
          if (!Ms) {
            var e2 = Ls(Vs);
            Ms = true;
            for (var t2 = _s.length; t2; ) {
              for (js2 = _s, _s = []; ++Rs < t2; )
                js2 && js2[Rs].run();
              Rs = -1, t2 = _s.length;
            }
            js2 = null, Ms = false, function(e3) {
              if (Is === clearTimeout)
                return clearTimeout(e3);
              if ((Is === Ps || !Is) && clearTimeout)
                return Is = clearTimeout, clearTimeout(e3);
              try {
                Is(e3);
              } catch (t3) {
                try {
                  return Is.call(null, e3);
                } catch (t4) {
                  return Is.call(this, e3);
                }
              }
            }(e2);
          }
        }
        function Ws(e2, t2) {
          this.fun = e2, this.array = t2;
        }
        Ws.prototype.run = function() {
          this.fun.apply(null, this.array);
        };
        function qs() {
        }
        var Us = qs, zs = qs, Gs = qs, Hs = qs, Js = qs, Xs = qs, Ys = qs;
        var Ks = Ns.performance || {}, Qs = Ks.now || Ks.mozNow || Ks.msNow || Ks.oNow || Ks.webkitNow || function() {
          return new Date().getTime();
        };
        var Zs = new Date();
        var ea = { nextTick: function(e2) {
          var t2 = new Array(arguments.length - 1);
          if (arguments.length > 1)
            for (var n2 = 1; n2 < arguments.length; n2++)
              t2[n2 - 1] = arguments[n2];
          _s.push(new Ws(e2, t2)), _s.length !== 1 || Ms || Ls($s);
        }, title: "browser", browser: true, env: {}, argv: [], version: "", versions: {}, on: Us, addListener: zs, once: Gs, off: Hs, removeListener: Js, removeAllListeners: Xs, emit: Ys, binding: function(e2) {
          throw new Error("process.binding is not supported");
        }, cwd: function() {
          return "/";
        }, chdir: function(e2) {
          throw new Error("process.chdir is not supported");
        }, umask: function() {
          return 0;
        }, hrtime: function(e2) {
          var t2 = 1e-3 * Qs.call(Ks), n2 = Math.floor(t2), r2 = Math.floor(t2 % 1 * 1e9);
          return e2 && (n2 -= e2[0], (r2 -= e2[1]) < 0 && (n2--, r2 += 1e9)), [n2, r2];
        }, platform: "browser", release: {}, config: {}, uptime: function() {
          return (new Date() - Zs) / 1e3;
        } }, ta = ea;
        const na = typeof ta == "object" && ta.env && ta.env.NODE_DEBUG && /\bsemver\b/i.test(ta.env.NODE_DEBUG) ? function() {
          for (var e2 = arguments.length, t2 = new Array(e2), n2 = 0; n2 < e2; n2++)
            t2[n2] = arguments[n2];
          return console.error("SEMVER", ...t2);
        } : () => {
        };
        var ra = na;
        var oa = { SEMVER_SPEC_VERSION: "2.0.0", MAX_LENGTH: 256, MAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER || 9007199254740991, MAX_SAFE_COMPONENT_LENGTH: 16 }, ia = { exports: {} };
        !function(e2, t2) {
          const { MAX_SAFE_COMPONENT_LENGTH: n2 } = oa, r2 = ra, o2 = (t2 = e2.exports = {}).re = [], i2 = t2.src = [], u2 = t2.t = {};
          let s2 = 0;
          const a2 = (e3, t3, n3) => {
            const a3 = s2++;
            r2(a3, t3), u2[e3] = a3, i2[a3] = t3, o2[a3] = new RegExp(t3, n3 ? "g" : void 0);
          };
          a2("NUMERICIDENTIFIER", "0|[1-9]\\d*"), a2("NUMERICIDENTIFIERLOOSE", "[0-9]+"), a2("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), a2("MAINVERSION", "(".concat(i2[u2.NUMERICIDENTIFIER], ")\\.") + "(".concat(i2[u2.NUMERICIDENTIFIER], ")\\.") + "(".concat(i2[u2.NUMERICIDENTIFIER], ")")), a2("MAINVERSIONLOOSE", "(".concat(i2[u2.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(i2[u2.NUMERICIDENTIFIERLOOSE], ")\\.") + "(".concat(i2[u2.NUMERICIDENTIFIERLOOSE], ")")), a2("PRERELEASEIDENTIFIER", "(?:".concat(i2[u2.NUMERICIDENTIFIER], "|").concat(i2[u2.NONNUMERICIDENTIFIER], ")")), a2("PRERELEASEIDENTIFIERLOOSE", "(?:".concat(i2[u2.NUMERICIDENTIFIERLOOSE], "|").concat(i2[u2.NONNUMERICIDENTIFIER], ")")), a2("PRERELEASE", "(?:-(".concat(i2[u2.PRERELEASEIDENTIFIER], "(?:\\.").concat(i2[u2.PRERELEASEIDENTIFIER], ")*))")), a2("PRERELEASELOOSE", "(?:-?(".concat(i2[u2.PRERELEASEIDENTIFIERLOOSE], "(?:\\.").concat(i2[u2.PRERELEASEIDENTIFIERLOOSE], ")*))")), a2("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), a2("BUILD", "(?:\\+(".concat(i2[u2.BUILDIDENTIFIER], "(?:\\.").concat(i2[u2.BUILDIDENTIFIER], ")*))")), a2("FULLPLAIN", "v?".concat(i2[u2.MAINVERSION]).concat(i2[u2.PRERELEASE], "?").concat(i2[u2.BUILD], "?")), a2("FULL", "^".concat(i2[u2.FULLPLAIN], "$")), a2("LOOSEPLAIN", "[v=\\s]*".concat(i2[u2.MAINVERSIONLOOSE]).concat(i2[u2.PRERELEASELOOSE], "?").concat(i2[u2.BUILD], "?")), a2("LOOSE", "^".concat(i2[u2.LOOSEPLAIN], "$")), a2("GTLT", "((?:<|>)?=?)"), a2("XRANGEIDENTIFIERLOOSE", "".concat(i2[u2.NUMERICIDENTIFIERLOOSE], "|x|X|\\*")), a2("XRANGEIDENTIFIER", "".concat(i2[u2.NUMERICIDENTIFIER], "|x|X|\\*")), a2("XRANGEPLAIN", "[v=\\s]*(".concat(i2[u2.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(i2[u2.XRANGEIDENTIFIER], ")") + "(?:\\.(".concat(i2[u2.XRANGEIDENTIFIER], ")") + "(?:".concat(i2[u2.PRERELEASE], ")?").concat(i2[u2.BUILD], "?") + ")?)?"), a2("XRANGEPLAINLOOSE", "[v=\\s]*(".concat(i2[u2.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(i2[u2.XRANGEIDENTIFIERLOOSE], ")") + "(?:\\.(".concat(i2[u2.XRANGEIDENTIFIERLOOSE], ")") + "(?:".concat(i2[u2.PRERELEASELOOSE], ")?").concat(i2[u2.BUILD], "?") + ")?)?"), a2("XRANGE", "^".concat(i2[u2.GTLT], "\\s*").concat(i2[u2.XRANGEPLAIN], "$")), a2("XRANGELOOSE", "^".concat(i2[u2.GTLT], "\\s*").concat(i2[u2.XRANGEPLAINLOOSE], "$")), a2("COERCE", "".concat("(^|[^\\d])(\\d{1,").concat(n2, "})") + "(?:\\.(\\d{1,".concat(n2, "}))?") + "(?:\\.(\\d{1,".concat(n2, "}))?") + "(?:$|[^\\d])"), a2("COERCERTL", i2[u2.COERCE], true), a2("LONETILDE", "(?:~>?)"), a2("TILDETRIM", "(\\s*)".concat(i2[u2.LONETILDE], "\\s+"), true), t2.tildeTrimReplace = "$1~", a2("TILDE", "^".concat(i2[u2.LONETILDE]).concat(i2[u2.XRANGEPLAIN], "$")), a2("TILDELOOSE", "^".concat(i2[u2.LONETILDE]).concat(i2[u2.XRANGEPLAINLOOSE], "$")), a2("LONECARET", "(?:\\^)"), a2("CARETTRIM", "(\\s*)".concat(i2[u2.LONECARET], "\\s+"), true), t2.caretTrimReplace = "$1^", a2("CARET", "^".concat(i2[u2.LONECARET]).concat(i2[u2.XRANGEPLAIN], "$")), a2("CARETLOOSE", "^".concat(i2[u2.LONECARET]).concat(i2[u2.XRANGEPLAINLOOSE], "$")), a2("COMPARATORLOOSE", "^".concat(i2[u2.GTLT], "\\s*(").concat(i2[u2.LOOSEPLAIN], ")$|^$")), a2("COMPARATOR", "^".concat(i2[u2.GTLT], "\\s*(").concat(i2[u2.FULLPLAIN], ")$|^$")), a2("COMPARATORTRIM", "(\\s*)".concat(i2[u2.GTLT], "\\s*(").concat(i2[u2.LOOSEPLAIN], "|").concat(i2[u2.XRANGEPLAIN], ")"), true), t2.comparatorTrimReplace = "$1$2$3", a2("HYPHENRANGE", "^\\s*(".concat(i2[u2.XRANGEPLAIN], ")") + "\\s+-\\s+" + "(".concat(i2[u2.XRANGEPLAIN], ")") + "\\s*$"), a2("HYPHENRANGELOOSE", "^\\s*(".concat(i2[u2.XRANGEPLAINLOOSE], ")") + "\\s+-\\s+" + "(".concat(i2[u2.XRANGEPLAINLOOSE], ")") + "\\s*$"), a2("STAR", "(<|>)?=?\\s*\\*"), a2("GTE0", "^\\s*>=\\s*0.0.0\\s*$"), a2("GTE0PRE", "^\\s*>=\\s*0.0.0-0\\s*$");
        }(ia, ia.exports);
        const ua = ["includePrerelease", "loose", "rtl"];
        var sa = (e2) => e2 ? typeof e2 != "object" ? { loose: true } : ua.filter((t2) => e2[t2]).reduce((e3, t2) => (e3[t2] = true, e3), {}) : {};
        const aa = /^[0-9]+$/, ca = (e2, t2) => {
          const n2 = aa.test(e2), r2 = aa.test(t2);
          return n2 && r2 && (e2 = +e2, t2 = +t2), e2 === t2 ? 0 : n2 && !r2 ? -1 : r2 && !n2 ? 1 : e2 < t2 ? -1 : 1;
        };
        var la = { compareIdentifiers: ca, rcompareIdentifiers: (e2, t2) => ca(t2, e2) };
        const pa = ra, { MAX_LENGTH: fa, MAX_SAFE_INTEGER: da } = oa, { re: ha, t: ga } = ia.exports, ma = sa, { compareIdentifiers: ya } = la;
        class Da {
          constructor(e2, t2) {
            if (t2 = ma(t2), e2 instanceof Da) {
              if (e2.loose === !!t2.loose && e2.includePrerelease === !!t2.includePrerelease)
                return e2;
              e2 = e2.version;
            } else if (typeof e2 != "string")
              throw new TypeError("Invalid Version: ".concat(e2));
            if (e2.length > fa)
              throw new TypeError("version is longer than ".concat(fa, " characters"));
            pa("SemVer", e2, t2), this.options = t2, this.loose = !!t2.loose, this.includePrerelease = !!t2.includePrerelease;
            const n2 = e2.trim().match(t2.loose ? ha[ga.LOOSE] : ha[ga.FULL]);
            if (!n2)
              throw new TypeError("Invalid Version: ".concat(e2));
            if (this.raw = e2, this.major = +n2[1], this.minor = +n2[2], this.patch = +n2[3], this.major > da || this.major < 0)
              throw new TypeError("Invalid major version");
            if (this.minor > da || this.minor < 0)
              throw new TypeError("Invalid minor version");
            if (this.patch > da || this.patch < 0)
              throw new TypeError("Invalid patch version");
            n2[4] ? this.prerelease = n2[4].split(".").map((e3) => {
              if (/^[0-9]+$/.test(e3)) {
                const t3 = +e3;
                if (t3 >= 0 && t3 < da)
                  return t3;
              }
              return e3;
            }) : this.prerelease = [], this.build = n2[5] ? n2[5].split(".") : [], this.format();
          }
          format() {
            return this.version = "".concat(this.major, ".").concat(this.minor, ".").concat(this.patch), this.prerelease.length && (this.version += "-".concat(this.prerelease.join("."))), this.version;
          }
          toString() {
            return this.version;
          }
          compare(e2) {
            if (pa("SemVer.compare", this.version, this.options, e2), !(e2 instanceof Da)) {
              if (typeof e2 == "string" && e2 === this.version)
                return 0;
              e2 = new Da(e2, this.options);
            }
            return e2.version === this.version ? 0 : this.compareMain(e2) || this.comparePre(e2);
          }
          compareMain(e2) {
            return e2 instanceof Da || (e2 = new Da(e2, this.options)), ya(this.major, e2.major) || ya(this.minor, e2.minor) || ya(this.patch, e2.patch);
          }
          comparePre(e2) {
            if (e2 instanceof Da || (e2 = new Da(e2, this.options)), this.prerelease.length && !e2.prerelease.length)
              return -1;
            if (!this.prerelease.length && e2.prerelease.length)
              return 1;
            if (!this.prerelease.length && !e2.prerelease.length)
              return 0;
            let t2 = 0;
            do {
              const n2 = this.prerelease[t2], r2 = e2.prerelease[t2];
              if (pa("prerelease compare", t2, n2, r2), n2 === void 0 && r2 === void 0)
                return 0;
              if (r2 === void 0)
                return 1;
              if (n2 === void 0)
                return -1;
              if (n2 !== r2)
                return ya(n2, r2);
            } while (++t2);
          }
          compareBuild(e2) {
            e2 instanceof Da || (e2 = new Da(e2, this.options));
            let t2 = 0;
            do {
              const n2 = this.build[t2], r2 = e2.build[t2];
              if (pa("prerelease compare", t2, n2, r2), n2 === void 0 && r2 === void 0)
                return 0;
              if (r2 === void 0)
                return 1;
              if (n2 === void 0)
                return -1;
              if (n2 !== r2)
                return ya(n2, r2);
            } while (++t2);
          }
          inc(e2, t2) {
            switch (e2) {
              case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", t2);
                break;
              case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", t2);
                break;
              case "prepatch":
                this.prerelease.length = 0, this.inc("patch", t2), this.inc("pre", t2);
                break;
              case "prerelease":
                this.prerelease.length === 0 && this.inc("patch", t2), this.inc("pre", t2);
                break;
              case "major":
                this.minor === 0 && this.patch === 0 && this.prerelease.length !== 0 || this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                break;
              case "minor":
                this.patch === 0 && this.prerelease.length !== 0 || this.minor++, this.patch = 0, this.prerelease = [];
                break;
              case "patch":
                this.prerelease.length === 0 && this.patch++, this.prerelease = [];
                break;
              case "pre":
                if (this.prerelease.length === 0)
                  this.prerelease = [0];
                else {
                  let e3 = this.prerelease.length;
                  for (; --e3 >= 0; )
                    typeof this.prerelease[e3] == "number" && (this.prerelease[e3]++, e3 = -2);
                  e3 === -1 && this.prerelease.push(0);
                }
                t2 && (this.prerelease[0] === t2 ? isNaN(this.prerelease[1]) && (this.prerelease = [t2, 0]) : this.prerelease = [t2, 0]);
                break;
              default:
                throw new Error("invalid increment argument: ".concat(e2));
            }
            return this.format(), this.raw = this.version, this;
          }
        }
        const Ea = Da;
        var Ca = (e2, t2, n2) => new Ea(e2, n2).compare(new Ea(t2, n2));
        const ba = Ca;
        var va = (e2, t2, n2) => ba(e2, t2, n2) < 0;
        const Aa = Ca;
        var Fa, xa, Sa, wa, Ta, Ba, Na = (e2, t2, n2) => Aa(e2, t2, n2) >= 0, ka = { exports: {} };
        !function(e2, t2) {
          function n2() {
            for (var e3 = [], t3 = 0; t3 < arguments.length; t3++)
              e3[t3] = arguments[t3];
          }
          function r2() {
            return typeof WeakMap != "undefined" ? /* @__PURE__ */ new WeakMap() : { add: n2, delete: n2, get: n2, set: n2, has: function(e3) {
              return false;
            } };
          }
          Object.defineProperty(t2, "__esModule", { value: true }), t2.outdent = void 0;
          var o2 = Object.prototype.hasOwnProperty, i2 = function(e3, t3) {
            return o2.call(e3, t3);
          };
          function u2(e3, t3) {
            for (var n3 in t3)
              i2(t3, n3) && (e3[n3] = t3[n3]);
            return e3;
          }
          var s2 = /^[ \t]*(?:\r\n|\r|\n)/, a2 = /(?:\r\n|\r|\n)[ \t]*$/, c2 = /^(?:[\r\n]|$)/, l3 = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, p2 = /^[ \t]*[\r\n][ \t\r\n]*$/;
          function f2(e3, t3, n3) {
            var r3 = 0, o3 = e3[0].match(l3);
            o3 && (r3 = o3[1].length);
            var i3 = new RegExp("(\\r\\n|\\r|\\n).{0," + r3 + "}", "g");
            t3 && (e3 = e3.slice(1));
            var u3 = n3.newline, c3 = n3.trimLeadingNewline, p3 = n3.trimTrailingNewline, f3 = typeof u3 == "string", d3 = e3.length;
            return e3.map(function(e4, t4) {
              return e4 = e4.replace(i3, "$1"), t4 === 0 && c3 && (e4 = e4.replace(s2, "")), t4 === d3 - 1 && p3 && (e4 = e4.replace(a2, "")), f3 && (e4 = e4.replace(/\r\n|\n|\r/g, function(e5) {
                return u3;
              })), e4;
            });
          }
          function d2(e3, t3) {
            for (var n3 = "", r3 = 0, o3 = e3.length; r3 < o3; r3++)
              n3 += e3[r3], r3 < o3 - 1 && (n3 += t3[r3]);
            return n3;
          }
          function h2(e3) {
            return i2(e3, "raw") && i2(e3, "length");
          }
          var g2 = function e3(t3) {
            var n3 = r2(), o3 = r2(), i3 = u2(function r3(i4) {
              for (var s3 = [], a3 = 1; a3 < arguments.length; a3++)
                s3[a3 - 1] = arguments[a3];
              if (h2(i4)) {
                var l4 = i4, m2 = (s3[0] === r3 || s3[0] === g2) && p2.test(l4[0]) && c2.test(l4[1]), y2 = m2 ? o3 : n3, D2 = y2.get(l4);
                if (D2 || (D2 = f2(l4, m2, t3), y2.set(l4, D2)), s3.length === 0)
                  return D2[0];
                var E2 = d2(D2, m2 ? s3.slice(1) : s3);
                return E2;
              }
              return e3(u2(u2({}, t3), i4 || {}));
            }, { string: function(e4) {
              return f2([e4], false, t3)[0];
            } });
            return i3;
          }({ trimLeadingNewline: true, trimTrailingNewline: true });
          t2.outdent = g2, t2.default = g2;
          try {
            e2.exports = g2, Object.defineProperty(g2, "__esModule", { value: true }), g2.default = g2, g2.outdent = g2;
          } catch (e3) {
          }
        }(ka, ka.exports);
        const { outdent: Pa } = ka.exports, Oa = "Config", Ia = "Editor", La = "Other", ja = "Global", _a = "Special", Ma = { cursorOffset: { since: "1.4.0", category: _a, type: "int", default: -1, range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 }, description: Pa(Fa || (Fa = lu(["\n      Print (to stderr) where a cursor at the given position would move to after formatting.\n      This option cannot be used with --range-start and --range-end.\n    "]))), cliCategory: Ia }, endOfLine: { since: "1.15.0", category: ja, type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: Pa(xa || (xa = lu(["\n          Maintain existing\n          (mixed values within one file are normalised by looking at what's used after the first line)\n        "]))) }] }, filepath: { since: "1.4.0", category: _a, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: La, cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: _a, type: "boolean", default: false, description: "Insert @format pragma into file's first docblock comment.", cliCategory: La }, parser: { since: "0.0.10", category: ja, type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: (e2) => typeof e2 == "string" || typeof e2 == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: "2.3.0", description: "Ember / Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: true, default: [{ value: [] }], category: ja, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (e2) => typeof e2 == "string" || typeof e2 == "object", cliName: "plugin", cliCategory: Oa }, pluginSearchDirs: { since: "1.13.0", type: "path", array: true, default: [{ value: [] }], category: ja, description: Pa(Sa || (Sa = lu(["\n      Custom directory that contains prettier plugins in node_modules subdirectory.\n      Overrides default behavior when plugins are searched relatively to the location of Prettier.\n      Multiple values are accepted.\n    "]))), exception: (e2) => typeof e2 == "string" || typeof e2 == "object", cliName: "plugin-search-dir", cliCategory: Oa }, printWidth: { since: "0.0.0", category: ja, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, rangeEnd: { since: "1.4.0", category: _a, type: "int", default: Number.POSITIVE_INFINITY, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: Pa(wa || (wa = lu(["\n      Format code ending at a given character offset (exclusive).\n      The range will extend forwards to the end of the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]))), cliCategory: Ia }, rangeStart: { since: "1.4.0", category: _a, type: "int", default: 0, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: Pa(Ta || (Ta = lu(["\n      Format code starting at a given character offset.\n      The range will extend backwards to the start of the first line containing the selected statement.\n      This option cannot be used with --cursor-offset.\n    "]))), cliCategory: Ia }, requirePragma: { since: "1.7.0", category: _a, type: "boolean", default: false, description: Pa(Ba || (Ba = lu(["\n      Require either '@prettier' or '@format' to be present in the file's first docblock comment\n      in order for it to be formatted.\n    "]))), cliCategory: La }, tabWidth: { type: "int", category: ja, default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, useTabs: { since: "1.0.0", category: ja, type: "boolean", default: false, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: ja, type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
        const Ra = ["cliName", "cliCategory", "cliDescription"], Va = { compare: Ca, lt: va, gte: Na }, $a = (e2, t2) => Object.entries(e2).map((e3) => {
          let [n2, r2] = e3;
          return Object.assign({ [t2]: n2 }, r2);
        }), Wa = n.version, qa = { CATEGORY_CONFIG: Oa, CATEGORY_EDITOR: Ia, CATEGORY_FORMAT: "Format", CATEGORY_OTHER: La, CATEGORY_OUTPUT: "Output", CATEGORY_GLOBAL: ja, CATEGORY_SPECIAL: _a, options: Ma }.options;
        function Ua(e2, t2, n2) {
          const r2 = new Set(e2.choices.map((e3) => e3.value));
          for (const o2 of t2)
            if (o2.parsers) {
              for (const t3 of o2.parsers)
                if (!r2.has(t3)) {
                  r2.add(t3);
                  const i2 = n2.find((e3) => e3.parsers && e3.parsers[t3]);
                  let u2 = o2.name;
                  i2 && i2.name && (u2 += " (plugin: ".concat(i2.name, ")")), e2.choices.push({ value: t3, description: u2 });
                }
            }
        }
        var za = { getSupportInfo: function() {
          let { plugins: e2 = [], showUnreleased: t2 = false, showDeprecated: n2 = false, showInternal: r2 = false } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
          const o2 = Wa.split("-", 1)[0], i2 = e2.flatMap((e3) => e3.languages || []).filter(s2), u2 = $a(Object.assign({}, ...e2.map((e3) => {
            let { options: t3 } = e3;
            return t3;
          }), qa), "name").filter((e3) => s2(e3) && a2(e3)).sort((e3, t3) => e3.name === t3.name ? 0 : e3.name < t3.name ? -1 : 1).map(c2).map((t3) => {
            t3 = Object.assign({}, t3), Array.isArray(t3.default) && (t3.default = t3.default.length === 1 ? t3.default[0].value : t3.default.filter(s2).sort((e3, t4) => Va.compare(t4.since, e3.since))[0].value), Array.isArray(t3.choices) && (t3.choices = t3.choices.filter((e3) => s2(e3) && a2(e3)), t3.name === "parser" && Ua(t3, i2, e2));
            const n3 = Object.fromEntries(e2.filter((e3) => e3.defaultOptions && e3.defaultOptions[t3.name] !== void 0).map((e3) => [e3.name, e3.defaultOptions[t3.name]]));
            return Object.assign(Object.assign({}, t3), {}, { pluginDefaults: n3 });
          });
          return { languages: i2, options: u2 };
          function s2(e3) {
            return t2 || !("since" in e3) || e3.since && Va.gte(o2, e3.since);
          }
          function a2(e3) {
            return n2 || !("deprecated" in e3) || e3.deprecated && Va.lt(o2, e3.deprecated);
          }
          function c2(e3) {
            if (r2)
              return e3;
            return cu(e3, Ra);
          }
        } };
        const Ga = eu.exports, Ha = (e2) => {
          if (typeof e2 != "string")
            throw new TypeError("Expected a string");
          return e2.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
        }, Ja = au, { getSupportInfo: Xa } = za, Ya = /[^\x20-\x7F]/;
        function Ka(e2) {
          return (t2, n2, r2) => {
            const o2 = r2 && r2.backwards;
            if (n2 === false)
              return false;
            const { length: i2 } = t2;
            let u2 = n2;
            for (; u2 >= 0 && u2 < i2; ) {
              const n3 = t2.charAt(u2);
              if (e2 instanceof RegExp) {
                if (!e2.test(n3))
                  return u2;
              } else if (!e2.includes(n3))
                return u2;
              o2 ? u2-- : u2++;
            }
            return (u2 === -1 || u2 === i2) && u2;
          };
        }
        const Qa = Ka(/\s/), Za = Ka(" 	"), ec = Ka(",; 	"), tc = Ka(/[^\n\r]/);
        function nc(e2, t2) {
          if (t2 === false)
            return false;
          if (e2.charAt(t2) === "/" && e2.charAt(t2 + 1) === "*") {
            for (let n2 = t2 + 2; n2 < e2.length; ++n2)
              if (e2.charAt(n2) === "*" && e2.charAt(n2 + 1) === "/")
                return n2 + 2;
          }
          return t2;
        }
        function rc(e2, t2) {
          return t2 !== false && (e2.charAt(t2) === "/" && e2.charAt(t2 + 1) === "/" ? tc(e2, t2) : t2);
        }
        function oc(e2, t2, n2) {
          const r2 = n2 && n2.backwards;
          if (t2 === false)
            return false;
          const o2 = e2.charAt(t2);
          if (r2) {
            if (e2.charAt(t2 - 1) === "\r" && o2 === "\n")
              return t2 - 2;
            if (o2 === "\n" || o2 === "\r" || o2 === "\u2028" || o2 === "\u2029")
              return t2 - 1;
          } else {
            if (o2 === "\r" && e2.charAt(t2 + 1) === "\n")
              return t2 + 2;
            if (o2 === "\n" || o2 === "\r" || o2 === "\u2028" || o2 === "\u2029")
              return t2 + 1;
          }
          return t2;
        }
        function ic(e2, t2) {
          let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          const r2 = Za(e2, n2.backwards ? t2 - 1 : t2, n2), o2 = oc(e2, r2, n2);
          return r2 !== o2;
        }
        function uc(e2, t2) {
          let n2 = null, r2 = t2;
          for (; r2 !== n2; )
            n2 = r2, r2 = ec(e2, r2), r2 = nc(e2, r2), r2 = Za(e2, r2);
          return r2 = rc(e2, r2), r2 = oc(e2, r2), r2 !== false && ic(e2, r2);
        }
        function sc(e2, t2) {
          let n2 = null, r2 = t2;
          for (; r2 !== n2; )
            n2 = r2, r2 = Za(e2, r2), r2 = nc(e2, r2), r2 = rc(e2, r2), r2 = oc(e2, r2);
          return r2;
        }
        function ac(e2, t2, n2) {
          return sc(e2, n2(t2));
        }
        function cc(e2, t2) {
          let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, r2 = 0;
          for (let o2 = n2; o2 < e2.length; ++o2)
            e2[o2] === "	" ? r2 = r2 + t2 - r2 % t2 : r2++;
          return r2;
        }
        function lc(e2, t2) {
          const n2 = { quote: '"', regex: /"/g, escaped: "&quot;" }, r2 = { quote: "'", regex: /'/g, escaped: "&apos;" }, o2 = t2 === "'" ? r2 : n2, i2 = o2 === r2 ? n2 : r2;
          let u2 = o2;
          if (e2.includes(o2.quote) || e2.includes(i2.quote)) {
            u2 = (e2.match(o2.regex) || []).length > (e2.match(i2.regex) || []).length ? i2 : o2;
          }
          return u2;
        }
        function pc(e2, t2, n2) {
          const r2 = t2 === '"' ? "'" : '"', o2 = e2.replace(/\\(.)|(["'])/gs, (e3, o3, i2) => o3 === r2 ? o3 : i2 === t2 ? "\\" + i2 : i2 || (n2 && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(o3) ? o3 : "\\" + o3));
          return t2 + o2 + t2;
        }
        function fc(e2, t2) {
          (e2.comments || (e2.comments = [])).push(t2), t2.printed = false, t2.nodeDescription = function(e3) {
            const t3 = e3.type || e3.kind || "(unknown type)";
            let n2 = String(e3.name || e3.id && (typeof e3.id == "object" ? e3.id.name : e3.id) || e3.key && (typeof e3.key == "object" ? e3.key.name : e3.key) || e3.value && (typeof e3.value == "object" ? "" : String(e3.value)) || e3.operator || "");
            n2.length > 20 && (n2 = n2.slice(0, 19) + "\u2026");
            return t3 + (n2 ? " " + n2 : "");
          }(e2);
        }
        var dc = { inferParserByLanguage: function(e2, t2) {
          const { languages: n2 } = Xa({ plugins: t2.plugins }), r2 = n2.find((t3) => {
            let { name: n3 } = t3;
            return n3.toLowerCase() === e2;
          }) || n2.find((t3) => {
            let { aliases: n3 } = t3;
            return Array.isArray(n3) && n3.includes(e2);
          }) || n2.find((t3) => {
            let { extensions: n3 } = t3;
            return Array.isArray(n3) && n3.includes(".".concat(e2));
          });
          return r2 && r2.parsers[0];
        }, getStringWidth: function(e2) {
          return e2 ? Ya.test(e2) ? Ga(e2) : e2.length : 0;
        }, getMaxContinuousCount: function(e2, t2) {
          const n2 = e2.match(new RegExp("(".concat(Ha(t2), ")+"), "g"));
          return n2 === null ? 0 : n2.reduce((e3, n3) => Math.max(e3, n3.length / t2.length), 0);
        }, getMinNotPresentContinuousCount: function(e2, t2) {
          const n2 = e2.match(new RegExp("(".concat(Ha(t2), ")+"), "g"));
          if (n2 === null)
            return 0;
          const r2 = /* @__PURE__ */ new Map();
          let o2 = 0;
          for (const e3 of n2) {
            const n3 = e3.length / t2.length;
            r2.set(n3, true), n3 > o2 && (o2 = n3);
          }
          for (let e3 = 1; e3 < o2; e3++)
            if (!r2.get(e3))
              return e3;
          return o2 + 1;
        }, getPenultimate: (e2) => e2[e2.length - 2], getLast: Ja, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: sc, getNextNonSpaceNonCommentCharacterIndex: ac, getNextNonSpaceNonCommentCharacter: function(e2, t2, n2) {
          return e2.charAt(ac(e2, t2, n2));
        }, skip: Ka, skipWhitespace: Qa, skipSpaces: Za, skipToLineEnd: ec, skipEverythingButNewLine: tc, skipInlineComment: nc, skipTrailingComment: rc, skipNewline: oc, isNextLineEmptyAfterIndex: uc, isNextLineEmpty: function(e2, t2, n2) {
          return uc(e2, n2(t2));
        }, isPreviousLineEmpty: function(e2, t2, n2) {
          let r2 = n2(t2) - 1;
          return r2 = Za(e2, r2, { backwards: true }), r2 = oc(e2, r2, { backwards: true }), r2 = Za(e2, r2, { backwards: true }), r2 !== oc(e2, r2, { backwards: true });
        }, hasNewline: ic, hasNewlineInRange: function(e2, t2, n2) {
          for (let r2 = t2; r2 < n2; ++r2)
            if (e2.charAt(r2) === "\n")
              return true;
          return false;
        }, hasSpaces: function(e2, t2) {
          let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          const r2 = Za(e2, n2.backwards ? t2 - 1 : t2, n2);
          return r2 !== t2;
        }, getAlignmentSize: cc, getIndentSize: function(e2, t2) {
          const n2 = e2.lastIndexOf("\n");
          return n2 === -1 ? 0 : cc(e2.slice(n2 + 1).match(/^[\t ]*/)[0], t2);
        }, getPreferredQuote: lc, printString: function(e2, t2) {
          const n2 = e2.slice(1, -1);
          return pc(n2, t2.parser === "json" || t2.parser === "json5" && t2.quoteProps === "preserve" && !t2.singleQuote ? '"' : t2.__isInHtmlAttribute ? "'" : lc(n2, t2.singleQuote ? "'" : '"').quote, !(t2.parser === "css" || t2.parser === "less" || t2.parser === "scss" || t2.__embeddedInHtml));
        }, printNumber: function(e2) {
          return e2.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
        }, makeString: pc, addLeadingComment: function(e2, t2) {
          t2.leading = true, t2.trailing = false, fc(e2, t2);
        }, addDanglingComment: function(e2, t2, n2) {
          t2.leading = false, t2.trailing = false, n2 && (t2.marker = n2), fc(e2, t2);
        }, addTrailingComment: function(e2, t2) {
          t2.leading = false, t2.trailing = true, fc(e2, t2);
        }, isFrontMatterNode: function(e2) {
          return e2 && e2.type === "front-matter";
        }, getShebang: function(e2) {
          if (!e2.startsWith("#!"))
            return "";
          const t2 = e2.indexOf("\n");
          return t2 === -1 ? e2 : e2.slice(0, t2);
        }, isNonEmptyArray: function(e2) {
          return Array.isArray(e2) && e2.length > 0;
        }, createGroupIdMapper: function(e2) {
          const t2 = /* @__PURE__ */ new WeakMap();
          return function(n2) {
            return t2.has(n2) || t2.set(n2, Symbol(e2)), t2.get(n2);
          };
        } };
        var hc = { guessEndOfLine: function(e2) {
          const t2 = e2.indexOf("\r");
          return t2 >= 0 ? e2.charAt(t2 + 1) === "\n" ? "crlf" : "cr" : "lf";
        }, convertEndOfLineToChars: function(e2) {
          switch (e2) {
            case "cr":
              return "\r";
            case "crlf":
              return "\r\n";
            default:
              return "\n";
          }
        }, countEndOfLineChars: function(e2, t2) {
          let n2;
          if (t2 === "\n")
            n2 = /\n/g;
          else if (t2 === "\r")
            n2 = /\r/g;
          else {
            if (t2 !== "\r\n")
              throw new Error('Unexpected "eol" '.concat(JSON.stringify(t2), "."));
            n2 = /\r\n/g;
          }
          const r2 = e2.match(n2);
          return r2 ? r2.length : 0;
        }, normalizeEndOfLine: function(e2) {
          return e2.replace(/\r\n?/g, "\n");
        } };
        const gc = au, { literalline: mc, join: yc } = Zi, Dc = (e2) => Array.isArray(e2) || e2 && e2.type === "concat", Ec = (e2) => {
          if (Array.isArray(e2))
            return e2;
          if (e2.type !== "concat" && e2.type !== "fill")
            throw new Error("Expect doc type to be `concat` or `fill`.");
          return e2.parts;
        }, Cc = {};
        function bc(e2, t2, n2, r2) {
          const o2 = [e2];
          for (; o2.length > 0; ) {
            const e3 = o2.pop();
            if (e3 !== Cc) {
              if (n2 && o2.push(e3, Cc), !t2 || t2(e3) !== false)
                if (Dc(e3) || e3.type === "fill") {
                  const t3 = Ec(e3);
                  for (let e4 = t3.length - 1; e4 >= 0; --e4)
                    o2.push(t3[e4]);
                } else if (e3.type === "if-break")
                  e3.flatContents && o2.push(e3.flatContents), e3.breakContents && o2.push(e3.breakContents);
                else if (e3.type === "group" && e3.expandedStates)
                  if (r2)
                    for (let t3 = e3.expandedStates.length - 1; t3 >= 0; --t3)
                      o2.push(e3.expandedStates[t3]);
                  else
                    o2.push(e3.contents);
                else
                  e3.contents && o2.push(e3.contents);
            } else
              n2(o2.pop());
          }
        }
        function vc(e2, t2) {
          const n2 = /* @__PURE__ */ new Map();
          return r2(e2);
          function r2(e3) {
            if (n2.has(e3))
              return n2.get(e3);
            const o2 = function(e4) {
              if (Array.isArray(e4))
                return t2(e4.map(r2));
              if (e4.type === "concat" || e4.type === "fill") {
                const n3 = e4.parts.map(r2);
                return t2(Object.assign(Object.assign({}, e4), {}, { parts: n3 }));
              }
              if (e4.type === "if-break") {
                const n3 = e4.breakContents && r2(e4.breakContents), o3 = e4.flatContents && r2(e4.flatContents);
                return t2(Object.assign(Object.assign({}, e4), {}, { breakContents: n3, flatContents: o3 }));
              }
              if (e4.type === "group" && e4.expandedStates) {
                const n3 = e4.expandedStates.map(r2), o3 = n3[0];
                return t2(Object.assign(Object.assign({}, e4), {}, { contents: o3, expandedStates: n3 }));
              }
              if (e4.contents) {
                const n3 = r2(e4.contents);
                return t2(Object.assign(Object.assign({}, e4), {}, { contents: n3 }));
              }
              return t2(e4);
            }(e3);
            return n2.set(e3, o2), o2;
          }
        }
        function Ac(e2, t2, n2) {
          let r2 = n2, o2 = false;
          return bc(e2, function(e3) {
            const n3 = t2(e3);
            if (n3 !== void 0 && (o2 = true, r2 = n3), o2)
              return false;
          }), r2;
        }
        function Fc(e2) {
          return !(e2.type !== "group" || !e2.break) || (!(e2.type !== "line" || !e2.hard) || (e2.type === "break-parent" || void 0));
        }
        function xc(e2) {
          if (e2.length > 0) {
            const t2 = gc(e2);
            t2.expandedStates || t2.break || (t2.break = "propagated");
          }
          return null;
        }
        function Sc(e2) {
          return e2.type !== "line" || e2.hard ? e2.type === "if-break" ? e2.flatContents || "" : e2 : e2.soft ? "" : " ";
        }
        const wc = (e2, t2) => e2 && e2.type === "line" && e2.hard && t2 && t2.type === "break-parent";
        function Tc(e2) {
          if (!e2)
            return e2;
          if (Dc(e2) || e2.type === "fill") {
            const t2 = Ec(e2);
            for (; t2.length > 1 && wc(...t2.slice(-2)); )
              t2.length -= 2;
            if (t2.length > 0) {
              const e3 = Tc(gc(t2));
              t2[t2.length - 1] = e3;
            }
            return Array.isArray(e2) ? t2 : Object.assign(Object.assign({}, e2), {}, { parts: t2 });
          }
          switch (e2.type) {
            case "align":
            case "indent":
            case "indent-if-break":
            case "group":
            case "line-suffix":
            case "label": {
              const t2 = Tc(e2.contents);
              return Object.assign(Object.assign({}, e2), {}, { contents: t2 });
            }
            case "if-break": {
              const t2 = Tc(e2.breakContents), n2 = Tc(e2.flatContents);
              return Object.assign(Object.assign({}, e2), {}, { breakContents: t2, flatContents: n2 });
            }
          }
          return e2;
        }
        function Bc(e2) {
          return vc(e2, (e3) => function(e4) {
            switch (e4.type) {
              case "fill":
                if (e4.parts.every((e5) => e5 === ""))
                  return "";
                break;
              case "group":
                if (!(e4.contents || e4.id || e4.break || e4.expandedStates))
                  return "";
                if (e4.contents.type === "group" && e4.contents.id === e4.id && e4.contents.break === e4.break && e4.contents.expandedStates === e4.expandedStates)
                  return e4.contents;
                break;
              case "align":
              case "indent":
              case "indent-if-break":
              case "line-suffix":
                if (!e4.contents)
                  return "";
                break;
              case "if-break":
                if (!e4.flatContents && !e4.breakContents)
                  return "";
            }
            if (!Dc(e4))
              return e4;
            const t2 = [];
            for (const n2 of Ec(e4)) {
              if (!n2)
                continue;
              const [e5, ...r2] = Dc(n2) ? Ec(n2) : [n2];
              typeof e5 == "string" && typeof gc(t2) == "string" ? t2[t2.length - 1] += e5 : t2.push(e5), t2.push(...r2);
            }
            return t2.length === 0 ? "" : t2.length === 1 ? t2[0] : Array.isArray(e4) ? t2 : Object.assign(Object.assign({}, e4), {}, { parts: t2 });
          }(e3));
        }
        function Nc(e2) {
          const t2 = [], n2 = e2.filter(Boolean);
          for (; n2.length > 0; ) {
            const e3 = n2.shift();
            e3 && (Dc(e3) ? n2.unshift(...Ec(e3)) : t2.length > 0 && typeof gc(t2) == "string" && typeof e3 == "string" ? t2[t2.length - 1] += e3 : t2.push(e3));
          }
          return t2;
        }
        function kc(e2) {
          let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : mc;
          return yc(t2, e2.split("\n")).parts;
        }
        function Pc(e2) {
          if (e2.type === "line")
            return true;
        }
        var Oc = { isConcat: Dc, getDocParts: Ec, willBreak: function(e2) {
          return Ac(e2, Fc, false);
        }, traverseDoc: bc, findInDoc: Ac, mapDoc: vc, propagateBreaks: function(e2) {
          const t2 = /* @__PURE__ */ new Set(), n2 = [];
          bc(e2, function(e3) {
            if (e3.type === "break-parent" && xc(n2), e3.type === "group") {
              if (n2.push(e3), t2.has(e3))
                return false;
              t2.add(e3);
            }
          }, function(e3) {
            if (e3.type === "group") {
              n2.pop().break && xc(n2);
            }
          }, true);
        }, removeLines: function(e2) {
          return vc(e2, Sc);
        }, stripTrailingHardline: function(e2) {
          return Tc(Bc(e2));
        }, normalizeParts: Nc, normalizeDoc: function(e2) {
          return vc(e2, (e3) => Array.isArray(e3) ? Nc(e3) : e3.parts ? Object.assign(Object.assign({}, e3), {}, { parts: Nc(e3.parts) }) : e3);
        }, cleanDoc: Bc, replaceTextEndOfLine: kc, replaceEndOfLine: function(e2) {
          return vc(e2, (e3) => typeof e3 == "string" && e3.includes("\n") ? kc(e3) : e3);
        }, canBreak: function(e2) {
          return Ac(e2, Pc, false);
        } };
        const { getStringWidth: Ic, getLast: Lc } = dc, { convertEndOfLineToChars: jc } = hc, { fill: _c, cursor: Mc, indent: Rc } = Zi, { isConcat: Vc, getDocParts: $c } = Oc;
        let Wc;
        function qc(e2, t2) {
          return zc(e2, { type: "indent" }, t2);
        }
        function Uc(e2, t2, n2) {
          if (t2 === Number.NEGATIVE_INFINITY)
            return e2.root || { value: "", length: 0, queue: [] };
          if (t2 < 0)
            return zc(e2, { type: "dedent" }, n2);
          if (!t2)
            return e2;
          if (t2.type === "root")
            return Object.assign(Object.assign({}, e2), {}, { root: e2 });
          return zc(e2, { type: typeof t2 == "string" ? "stringAlign" : "numberAlign", n: t2 }, n2);
        }
        function zc(e2, t2, n2) {
          const r2 = t2.type === "dedent" ? e2.queue.slice(0, -1) : [...e2.queue, t2];
          let o2 = "", i2 = 0, u2 = 0, s2 = 0;
          for (const e3 of r2)
            switch (e3.type) {
              case "indent":
                l3(), n2.useTabs ? a2(1) : c2(n2.tabWidth);
                break;
              case "stringAlign":
                l3(), o2 += e3.n, i2 += e3.n.length;
                break;
              case "numberAlign":
                u2 += 1, s2 += e3.n;
                break;
              default:
                throw new Error("Unexpected type '".concat(e3.type, "'"));
            }
          return p2(), Object.assign(Object.assign({}, e2), {}, { value: o2, length: i2, queue: r2 });
          function a2(e3) {
            o2 += "	".repeat(e3), i2 += n2.tabWidth * e3;
          }
          function c2(e3) {
            o2 += " ".repeat(e3), i2 += e3;
          }
          function l3() {
            n2.useTabs ? function() {
              u2 > 0 && a2(u2);
              f2();
            }() : p2();
          }
          function p2() {
            s2 > 0 && c2(s2), f2();
          }
          function f2() {
            u2 = 0, s2 = 0;
          }
        }
        function Gc(e2) {
          if (e2.length === 0)
            return 0;
          let t2 = 0;
          for (; e2.length > 0 && typeof Lc(e2) == "string" && /^[\t ]*$/.test(Lc(e2)); )
            t2 += e2.pop().length;
          if (e2.length > 0 && typeof Lc(e2) == "string") {
            const n2 = Lc(e2).replace(/[\t ]*$/, "");
            t2 += Lc(e2).length - n2.length, e2[e2.length - 1] = n2;
          }
          return t2;
        }
        function Hc(e2, t2, n2, r2, o2, i2) {
          let u2 = t2.length;
          const s2 = [e2], a2 = [];
          for (; n2 >= 0; ) {
            if (s2.length === 0) {
              if (u2 === 0)
                return true;
              s2.push(t2[u2 - 1]), u2--;
              continue;
            }
            const [e3, c2, l3] = s2.pop();
            if (typeof l3 == "string")
              a2.push(l3), n2 -= Ic(l3);
            else if (Vc(l3)) {
              const t3 = $c(l3);
              for (let n3 = t3.length - 1; n3 >= 0; n3--)
                s2.push([e3, c2, t3[n3]]);
            } else
              switch (l3.type) {
                case "indent":
                  s2.push([qc(e3, r2), c2, l3.contents]);
                  break;
                case "align":
                  s2.push([Uc(e3, l3.n, r2), c2, l3.contents]);
                  break;
                case "trim":
                  n2 += Gc(a2);
                  break;
                case "group": {
                  if (i2 && l3.break)
                    return false;
                  const t3 = l3.break ? 1 : c2;
                  s2.push([e3, t3, l3.expandedStates && t3 === 1 ? Lc(l3.expandedStates) : l3.contents]), l3.id && (Wc[l3.id] = t3);
                  break;
                }
                case "fill":
                  for (let t3 = l3.parts.length - 1; t3 >= 0; t3--)
                    s2.push([e3, c2, l3.parts[t3]]);
                  break;
                case "if-break":
                case "indent-if-break": {
                  const t3 = l3.groupId ? Wc[l3.groupId] : c2;
                  if (t3 === 1) {
                    const t4 = l3.type === "if-break" ? l3.breakContents : l3.negate ? l3.contents : Rc(l3.contents);
                    t4 && s2.push([e3, c2, t4]);
                  }
                  if (t3 === 2) {
                    const t4 = l3.type === "if-break" ? l3.flatContents : l3.negate ? Rc(l3.contents) : l3.contents;
                    t4 && s2.push([e3, c2, t4]);
                  }
                  break;
                }
                case "line":
                  switch (c2) {
                    case 2:
                      if (!l3.hard) {
                        l3.soft || (a2.push(" "), n2 -= 1);
                        break;
                      }
                      return true;
                    case 1:
                      return true;
                  }
                  break;
                case "line-suffix":
                  o2 = true;
                  break;
                case "line-suffix-boundary":
                  if (o2)
                    return false;
                  break;
                case "label":
                  s2.push([e3, c2, l3.contents]);
              }
          }
          return false;
        }
        var Jc = { printDocToString: function(e2, t2) {
          Wc = {};
          const n2 = t2.printWidth, r2 = jc(t2.endOfLine);
          let o2 = 0;
          const i2 = [[{ value: "", length: 0, queue: [] }, 1, e2]], u2 = [];
          let s2 = false, a2 = [];
          for (; i2.length > 0; ) {
            const [e3, c3, l3] = i2.pop();
            if (typeof l3 == "string") {
              const e4 = r2 !== "\n" ? l3.replace(/\n/g, r2) : l3;
              u2.push(e4), o2 += Ic(e4);
            } else if (Vc(l3)) {
              const t3 = $c(l3);
              for (let n3 = t3.length - 1; n3 >= 0; n3--)
                i2.push([e3, c3, t3[n3]]);
            } else
              switch (l3.type) {
                case "cursor":
                  u2.push(Mc.placeholder);
                  break;
                case "indent":
                  i2.push([qc(e3, t2), c3, l3.contents]);
                  break;
                case "align":
                  i2.push([Uc(e3, l3.n, t2), c3, l3.contents]);
                  break;
                case "trim":
                  o2 -= Gc(u2);
                  break;
                case "group":
                  switch (c3) {
                    case 2:
                      if (!s2) {
                        i2.push([e3, l3.break ? 1 : 2, l3.contents]);
                        break;
                      }
                    case 1: {
                      s2 = false;
                      const r3 = [e3, 2, l3.contents], u3 = n2 - o2, c4 = a2.length > 0;
                      if (!l3.break && Hc(r3, i2, u3, t2, c4))
                        i2.push(r3);
                      else if (l3.expandedStates) {
                        const n3 = Lc(l3.expandedStates);
                        if (l3.break) {
                          i2.push([e3, 1, n3]);
                          break;
                        }
                        for (let r4 = 1; r4 < l3.expandedStates.length + 1; r4++) {
                          if (r4 >= l3.expandedStates.length) {
                            i2.push([e3, 1, n3]);
                            break;
                          }
                          {
                            const n4 = [e3, 2, l3.expandedStates[r4]];
                            if (Hc(n4, i2, u3, t2, c4)) {
                              i2.push(n4);
                              break;
                            }
                          }
                        }
                      } else
                        i2.push([e3, 1, l3.contents]);
                      break;
                    }
                  }
                  l3.id && (Wc[l3.id] = Lc(i2)[1]);
                  break;
                case "fill": {
                  const r3 = n2 - o2, { parts: u3 } = l3;
                  if (u3.length === 0)
                    break;
                  const [s3, p2] = u3, f2 = [e3, 2, s3], d2 = [e3, 1, s3], h2 = Hc(f2, [], r3, t2, a2.length > 0, true);
                  if (u3.length === 1) {
                    h2 ? i2.push(f2) : i2.push(d2);
                    break;
                  }
                  const g2 = [e3, 2, p2], m2 = [e3, 1, p2];
                  if (u3.length === 2) {
                    h2 ? i2.push(g2, f2) : i2.push(m2, d2);
                    break;
                  }
                  u3.splice(0, 2);
                  const y2 = [e3, c3, _c(u3)];
                  Hc([e3, 2, [s3, p2, u3[0]]], [], r3, t2, a2.length > 0, true) ? i2.push(y2, g2, f2) : h2 ? i2.push(y2, m2, f2) : i2.push(y2, m2, d2);
                  break;
                }
                case "if-break":
                case "indent-if-break": {
                  const t3 = l3.groupId ? Wc[l3.groupId] : c3;
                  if (t3 === 1) {
                    const t4 = l3.type === "if-break" ? l3.breakContents : l3.negate ? l3.contents : Rc(l3.contents);
                    t4 && i2.push([e3, c3, t4]);
                  }
                  if (t3 === 2) {
                    const t4 = l3.type === "if-break" ? l3.flatContents : l3.negate ? Rc(l3.contents) : l3.contents;
                    t4 && i2.push([e3, c3, t4]);
                  }
                  break;
                }
                case "line-suffix":
                  a2.push([e3, c3, l3.contents]);
                  break;
                case "line-suffix-boundary":
                  a2.length > 0 && i2.push([e3, c3, { type: "line", hard: true }]);
                  break;
                case "line":
                  switch (c3) {
                    case 2:
                      if (!l3.hard) {
                        l3.soft || (u2.push(" "), o2 += 1);
                        break;
                      }
                      s2 = true;
                    case 1:
                      if (a2.length > 0) {
                        i2.push([e3, c3, l3], ...a2.reverse()), a2 = [];
                        break;
                      }
                      l3.literal ? e3.root ? (u2.push(r2, e3.root.value), o2 = e3.root.length) : (u2.push(r2), o2 = 0) : (o2 -= Gc(u2), u2.push(r2 + e3.value), o2 = e3.length);
                  }
                  break;
                case "label":
                  i2.push([e3, c3, l3.contents]);
              }
            i2.length === 0 && a2.length > 0 && (i2.push(...a2.reverse()), a2 = []);
          }
          const c2 = u2.indexOf(Mc.placeholder);
          if (c2 !== -1) {
            const e3 = u2.indexOf(Mc.placeholder, c2 + 1), t3 = u2.slice(0, c2).join(""), n3 = u2.slice(c2 + 1, e3).join("");
            return { formatted: t3 + n3 + u2.slice(e3 + 1).join(""), cursorNodeStart: t3.length, cursorNodeText: n3 };
          }
          return { formatted: u2.join("") };
        } };
        const { isConcat: Xc, getDocParts: Yc } = Oc;
        function Kc(e2) {
          if (!e2)
            return "";
          if (Xc(e2)) {
            const t2 = [];
            for (const n2 of Yc(e2))
              if (Xc(n2))
                t2.push(...Kc(n2).parts);
              else {
                const e3 = Kc(n2);
                e3 !== "" && t2.push(e3);
              }
            return { type: "concat", parts: t2 };
          }
          return e2.type === "if-break" ? Object.assign(Object.assign({}, e2), {}, { breakContents: Kc(e2.breakContents), flatContents: Kc(e2.flatContents) }) : e2.type === "group" ? Object.assign(Object.assign({}, e2), {}, { contents: Kc(e2.contents), expandedStates: e2.expandedStates && e2.expandedStates.map(Kc) }) : e2.type === "fill" ? { type: "fill", parts: e2.parts.map(Kc) } : e2.contents ? Object.assign(Object.assign({}, e2), {}, { contents: Kc(e2.contents) }) : e2;
        }
        var Qc = { printDocToDebug: function(e2) {
          const t2 = /* @__PURE__ */ Object.create(null), n2 = /* @__PURE__ */ new Set();
          return function e3(t3, n3, o2) {
            if (typeof t3 == "string")
              return JSON.stringify(t3);
            if (Xc(t3)) {
              const n4 = Yc(t3).map(e3).filter(Boolean);
              return n4.length === 1 ? n4[0] : "[".concat(n4.join(", "), "]");
            }
            if (t3.type === "line") {
              const e4 = Array.isArray(o2) && o2[n3 + 1] && o2[n3 + 1].type === "break-parent";
              return t3.literal ? e4 ? "literalline" : "literallineWithoutBreakParent" : t3.hard ? e4 ? "hardline" : "hardlineWithoutBreakParent" : t3.soft ? "softline" : "line";
            }
            if (t3.type === "break-parent") {
              return Array.isArray(o2) && o2[n3 - 1] && o2[n3 - 1].type === "line" && o2[n3 - 1].hard ? void 0 : "breakParent";
            }
            if (t3.type === "trim")
              return "trim";
            if (t3.type === "indent")
              return "indent(" + e3(t3.contents) + ")";
            if (t3.type === "align")
              return t3.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + e3(t3.contents) + ")" : t3.n < 0 ? "dedent(" + e3(t3.contents) + ")" : t3.n.type === "root" ? "markAsRoot(" + e3(t3.contents) + ")" : "align(" + JSON.stringify(t3.n) + ", " + e3(t3.contents) + ")";
            if (t3.type === "if-break")
              return "ifBreak(" + e3(t3.breakContents) + (t3.flatContents ? ", " + e3(t3.flatContents) : "") + (t3.groupId ? (t3.flatContents ? "" : ', ""') + ", { groupId: ".concat(r2(t3.groupId), " }") : "") + ")";
            if (t3.type === "indent-if-break") {
              const n4 = [];
              t3.negate && n4.push("negate: true"), t3.groupId && n4.push("groupId: ".concat(r2(t3.groupId)));
              const o3 = n4.length > 0 ? ", { ".concat(n4.join(", "), " }") : "";
              return "indentIfBreak(".concat(e3(t3.contents)).concat(o3, ")");
            }
            if (t3.type === "group") {
              const n4 = [];
              t3.break && t3.break !== "propagated" && n4.push("shouldBreak: true"), t3.id && n4.push("id: ".concat(r2(t3.id)));
              const o3 = n4.length > 0 ? ", { ".concat(n4.join(", "), " }") : "";
              return t3.expandedStates ? "conditionalGroup([".concat(t3.expandedStates.map((t4) => e3(t4)).join(","), "]").concat(o3, ")") : "group(".concat(e3(t3.contents)).concat(o3, ")");
            }
            if (t3.type === "fill")
              return "fill([".concat(t3.parts.map((t4) => e3(t4)).join(", "), "])");
            if (t3.type === "line-suffix")
              return "lineSuffix(" + e3(t3.contents) + ")";
            if (t3.type === "line-suffix-boundary")
              return "lineSuffixBoundary";
            if (t3.type === "label")
              return "label(".concat(JSON.stringify(t3.label), ", ").concat(e3(t3.contents), ")");
            throw new Error("Unknown doc type " + t3.type);
          }(Kc(e2));
          function r2(e3) {
            if (typeof e3 != "symbol")
              return JSON.stringify(String(e3));
            if (e3 in t2)
              return t2[e3];
            const r3 = String(e3).slice(7, -1) || "symbol";
            for (let o2 = 0; ; o2++) {
              const i2 = r3 + (o2 > 0 ? " #".concat(o2) : "");
              if (!n2.has(i2))
                return n2.add(i2), t2[e3] = "Symbol.for(".concat(JSON.stringify(i2), ")");
            }
          }
        } }, Zc = { builders: Zi, printer: Jc, utils: Oc, debug: Qc }, el = t(Object.freeze({ __proto__: null, default: {} }));
        function tl(e2, t2) {
          for (var n2 = 0, r2 = e2.length - 1; r2 >= 0; r2--) {
            var o2 = e2[r2];
            o2 === "." ? e2.splice(r2, 1) : o2 === ".." ? (e2.splice(r2, 1), n2++) : n2 && (e2.splice(r2, 1), n2--);
          }
          if (t2)
            for (; n2--; n2)
              e2.unshift("..");
          return e2;
        }
        var nl = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, rl = function(e2) {
          return nl.exec(e2).slice(1);
        };
        function ol() {
          for (var e2 = "", t2 = false, n2 = arguments.length - 1; n2 >= -1 && !t2; n2--) {
            var r2 = n2 >= 0 ? arguments[n2] : "/";
            if (typeof r2 != "string")
              throw new TypeError("Arguments to path.resolve must be strings");
            r2 && (e2 = r2 + "/" + e2, t2 = r2.charAt(0) === "/");
          }
          return e2 = tl(dl(e2.split("/"), function(e3) {
            return !!e3;
          }), !t2).join("/"), (t2 ? "/" : "") + e2 || ".";
        }
        function il(e2) {
          var t2 = ul(e2), n2 = hl(e2, -1) === "/";
          return e2 = tl(dl(e2.split("/"), function(e3) {
            return !!e3;
          }), !t2).join("/"), e2 || t2 || (e2 = "."), e2 && n2 && (e2 += "/"), (t2 ? "/" : "") + e2;
        }
        function ul(e2) {
          return e2.charAt(0) === "/";
        }
        function sl() {
          var e2 = Array.prototype.slice.call(arguments, 0);
          return il(dl(e2, function(e3, t2) {
            if (typeof e3 != "string")
              throw new TypeError("Arguments to path.join must be strings");
            return e3;
          }).join("/"));
        }
        function al(e2, t2) {
          function n2(e3) {
            for (var t3 = 0; t3 < e3.length && e3[t3] === ""; t3++)
              ;
            for (var n3 = e3.length - 1; n3 >= 0 && e3[n3] === ""; n3--)
              ;
            return t3 > n3 ? [] : e3.slice(t3, n3 - t3 + 1);
          }
          e2 = ol(e2).substr(1), t2 = ol(t2).substr(1);
          for (var r2 = n2(e2.split("/")), o2 = n2(t2.split("/")), i2 = Math.min(r2.length, o2.length), u2 = i2, s2 = 0; s2 < i2; s2++)
            if (r2[s2] !== o2[s2]) {
              u2 = s2;
              break;
            }
          var a2 = [];
          for (s2 = u2; s2 < r2.length; s2++)
            a2.push("..");
          return (a2 = a2.concat(o2.slice(u2))).join("/");
        }
        function cl(e2) {
          var t2 = rl(e2), n2 = t2[0], r2 = t2[1];
          return n2 || r2 ? (r2 && (r2 = r2.substr(0, r2.length - 1)), n2 + r2) : ".";
        }
        function ll(e2, t2) {
          var n2 = rl(e2)[2];
          return t2 && n2.substr(-1 * t2.length) === t2 && (n2 = n2.substr(0, n2.length - t2.length)), n2;
        }
        function pl2(e2) {
          return rl(e2)[3];
        }
        var fl = { extname: pl2, basename: ll, dirname: cl, sep: "/", delimiter: ":", relative: al, join: sl, isAbsolute: ul, normalize: il, resolve: ol };
        function dl(e2, t2) {
          if (e2.filter)
            return e2.filter(t2);
          for (var n2 = [], r2 = 0; r2 < e2.length; r2++)
            t2(e2[r2], r2, e2) && n2.push(e2[r2]);
          return n2;
        }
        var hl = "ab".substr(-1) === "b" ? function(e2, t2, n2) {
          return e2.substr(t2, n2);
        } : function(e2, t2, n2) {
          return t2 < 0 && (t2 = e2.length + t2), e2.substr(t2, n2);
        }, gl = t(Object.freeze({ __proto__: null, resolve: ol, normalize: il, isAbsolute: ul, join: sl, relative: al, sep: "/", delimiter: ":", dirname: cl, basename: ll, extname: pl2, default: fl })), ml = [], yl = [], Dl = typeof Uint8Array != "undefined" ? Uint8Array : Array, El = false;
        function Cl() {
          El = true;
          for (var e2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", t2 = 0, n2 = e2.length; t2 < n2; ++t2)
            ml[t2] = e2[t2], yl[e2.charCodeAt(t2)] = t2;
          yl["-".charCodeAt(0)] = 62, yl["_".charCodeAt(0)] = 63;
        }
        function bl(e2, t2, n2) {
          for (var r2, o2, i2 = [], u2 = t2; u2 < n2; u2 += 3)
            r2 = (e2[u2] << 16) + (e2[u2 + 1] << 8) + e2[u2 + 2], i2.push(ml[(o2 = r2) >> 18 & 63] + ml[o2 >> 12 & 63] + ml[o2 >> 6 & 63] + ml[63 & o2]);
          return i2.join("");
        }
        function vl(e2) {
          var t2;
          El || Cl();
          for (var n2 = e2.length, r2 = n2 % 3, o2 = "", i2 = [], u2 = 16383, s2 = 0, a2 = n2 - r2; s2 < a2; s2 += u2)
            i2.push(bl(e2, s2, s2 + u2 > a2 ? a2 : s2 + u2));
          return r2 === 1 ? (t2 = e2[n2 - 1], o2 += ml[t2 >> 2], o2 += ml[t2 << 4 & 63], o2 += "==") : r2 === 2 && (t2 = (e2[n2 - 2] << 8) + e2[n2 - 1], o2 += ml[t2 >> 10], o2 += ml[t2 >> 4 & 63], o2 += ml[t2 << 2 & 63], o2 += "="), i2.push(o2), i2.join("");
        }
        function Al(e2, t2, n2, r2, o2) {
          var i2, u2, s2 = 8 * o2 - r2 - 1, a2 = (1 << s2) - 1, c2 = a2 >> 1, l3 = -7, p2 = n2 ? o2 - 1 : 0, f2 = n2 ? -1 : 1, d2 = e2[t2 + p2];
          for (p2 += f2, i2 = d2 & (1 << -l3) - 1, d2 >>= -l3, l3 += s2; l3 > 0; i2 = 256 * i2 + e2[t2 + p2], p2 += f2, l3 -= 8)
            ;
          for (u2 = i2 & (1 << -l3) - 1, i2 >>= -l3, l3 += r2; l3 > 0; u2 = 256 * u2 + e2[t2 + p2], p2 += f2, l3 -= 8)
            ;
          if (i2 === 0)
            i2 = 1 - c2;
          else {
            if (i2 === a2)
              return u2 ? NaN : 1 / 0 * (d2 ? -1 : 1);
            u2 += Math.pow(2, r2), i2 -= c2;
          }
          return (d2 ? -1 : 1) * u2 * Math.pow(2, i2 - r2);
        }
        function Fl(e2, t2, n2, r2, o2, i2) {
          var u2, s2, a2, c2 = 8 * i2 - o2 - 1, l3 = (1 << c2) - 1, p2 = l3 >> 1, f2 = o2 === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0, d2 = r2 ? 0 : i2 - 1, h2 = r2 ? 1 : -1, g2 = t2 < 0 || t2 === 0 && 1 / t2 < 0 ? 1 : 0;
          for (t2 = Math.abs(t2), isNaN(t2) || t2 === 1 / 0 ? (s2 = isNaN(t2) ? 1 : 0, u2 = l3) : (u2 = Math.floor(Math.log(t2) / Math.LN2), t2 * (a2 = Math.pow(2, -u2)) < 1 && (u2--, a2 *= 2), (t2 += u2 + p2 >= 1 ? f2 / a2 : f2 * Math.pow(2, 1 - p2)) * a2 >= 2 && (u2++, a2 /= 2), u2 + p2 >= l3 ? (s2 = 0, u2 = l3) : u2 + p2 >= 1 ? (s2 = (t2 * a2 - 1) * Math.pow(2, o2), u2 += p2) : (s2 = t2 * Math.pow(2, p2 - 1) * Math.pow(2, o2), u2 = 0)); o2 >= 8; e2[n2 + d2] = 255 & s2, d2 += h2, s2 /= 256, o2 -= 8)
            ;
          for (u2 = u2 << o2 | s2, c2 += o2; c2 > 0; e2[n2 + d2] = 255 & u2, d2 += h2, u2 /= 256, c2 -= 8)
            ;
          e2[n2 + d2 - h2] |= 128 * g2;
        }
        var xl = {}.toString, Sl = Array.isArray || function(e2) {
          return xl.call(e2) == "[object Array]";
        };
        function wl() {
          return Bl.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823;
        }
        function Tl(e2, t2) {
          if (wl() < t2)
            throw new RangeError("Invalid typed array length");
          return Bl.TYPED_ARRAY_SUPPORT ? (e2 = new Uint8Array(t2)).__proto__ = Bl.prototype : (e2 === null && (e2 = new Bl(t2)), e2.length = t2), e2;
        }
        function Bl(e2, t2, n2) {
          if (!(Bl.TYPED_ARRAY_SUPPORT || this instanceof Bl))
            return new Bl(e2, t2, n2);
          if (typeof e2 == "number") {
            if (typeof t2 == "string")
              throw new Error("If encoding is specified then the first argument must be a string");
            return Pl(this, e2);
          }
          return Nl(this, e2, t2, n2);
        }
        function Nl(e2, t2, n2, r2) {
          if (typeof t2 == "number")
            throw new TypeError('"value" argument must not be a number');
          return typeof ArrayBuffer != "undefined" && t2 instanceof ArrayBuffer ? function(e3, t3, n3, r3) {
            if (t3.byteLength, n3 < 0 || t3.byteLength < n3)
              throw new RangeError("'offset' is out of bounds");
            if (t3.byteLength < n3 + (r3 || 0))
              throw new RangeError("'length' is out of bounds");
            t3 = n3 === void 0 && r3 === void 0 ? new Uint8Array(t3) : r3 === void 0 ? new Uint8Array(t3, n3) : new Uint8Array(t3, n3, r3);
            Bl.TYPED_ARRAY_SUPPORT ? (e3 = t3).__proto__ = Bl.prototype : e3 = Ol(e3, t3);
            return e3;
          }(e2, t2, n2, r2) : typeof t2 == "string" ? function(e3, t3, n3) {
            typeof n3 == "string" && n3 !== "" || (n3 = "utf8");
            if (!Bl.isEncoding(n3))
              throw new TypeError('"encoding" must be a valid string encoding');
            var r3 = 0 | jl(t3, n3), o2 = (e3 = Tl(e3, r3)).write(t3, n3);
            o2 !== r3 && (e3 = e3.slice(0, o2));
            return e3;
          }(e2, t2, n2) : function(e3, t3) {
            if (Ll(t3)) {
              var n3 = 0 | Il(t3.length);
              return (e3 = Tl(e3, n3)).length === 0 || t3.copy(e3, 0, 0, n3), e3;
            }
            if (t3) {
              if (typeof ArrayBuffer != "undefined" && t3.buffer instanceof ArrayBuffer || "length" in t3)
                return typeof t3.length != "number" || (r3 = t3.length) != r3 ? Tl(e3, 0) : Ol(e3, t3);
              if (t3.type === "Buffer" && Sl(t3.data))
                return Ol(e3, t3.data);
            }
            var r3;
            throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.");
          }(e2, t2);
        }
        function kl(e2) {
          if (typeof e2 != "number")
            throw new TypeError('"size" argument must be a number');
          if (e2 < 0)
            throw new RangeError('"size" argument must not be negative');
        }
        function Pl(e2, t2) {
          if (kl(t2), e2 = Tl(e2, t2 < 0 ? 0 : 0 | Il(t2)), !Bl.TYPED_ARRAY_SUPPORT)
            for (var n2 = 0; n2 < t2; ++n2)
              e2[n2] = 0;
          return e2;
        }
        function Ol(e2, t2) {
          var n2 = t2.length < 0 ? 0 : 0 | Il(t2.length);
          e2 = Tl(e2, n2);
          for (var r2 = 0; r2 < n2; r2 += 1)
            e2[r2] = 255 & t2[r2];
          return e2;
        }
        function Il(e2) {
          if (e2 >= wl())
            throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + wl().toString(16) + " bytes");
          return 0 | e2;
        }
        function Ll(e2) {
          return !(e2 == null || !e2._isBuffer);
        }
        function jl(e2, t2) {
          if (Ll(e2))
            return e2.length;
          if (typeof ArrayBuffer != "undefined" && typeof ArrayBuffer.isView == "function" && (ArrayBuffer.isView(e2) || e2 instanceof ArrayBuffer))
            return e2.byteLength;
          typeof e2 != "string" && (e2 = "" + e2);
          var n2 = e2.length;
          if (n2 === 0)
            return 0;
          for (var r2 = false; ; )
            switch (t2) {
              case "ascii":
              case "latin1":
              case "binary":
                return n2;
              case "utf8":
              case "utf-8":
              case void 0:
                return cp(e2).length;
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return 2 * n2;
              case "hex":
                return n2 >>> 1;
              case "base64":
                return lp(e2).length;
              default:
                if (r2)
                  return cp(e2).length;
                t2 = ("" + t2).toLowerCase(), r2 = true;
            }
        }
        function _l(e2, t2, n2) {
          var r2 = false;
          if ((t2 === void 0 || t2 < 0) && (t2 = 0), t2 > this.length)
            return "";
          if ((n2 === void 0 || n2 > this.length) && (n2 = this.length), n2 <= 0)
            return "";
          if ((n2 >>>= 0) <= (t2 >>>= 0))
            return "";
          for (e2 || (e2 = "utf8"); ; )
            switch (e2) {
              case "hex":
                return Ql(this, t2, n2);
              case "utf8":
              case "utf-8":
                return Jl(this, t2, n2);
              case "ascii":
                return Yl(this, t2, n2);
              case "latin1":
              case "binary":
                return Kl(this, t2, n2);
              case "base64":
                return Hl(this, t2, n2);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return Zl(this, t2, n2);
              default:
                if (r2)
                  throw new TypeError("Unknown encoding: " + e2);
                e2 = (e2 + "").toLowerCase(), r2 = true;
            }
        }
        function Ml(e2, t2, n2) {
          var r2 = e2[t2];
          e2[t2] = e2[n2], e2[n2] = r2;
        }
        function Rl(e2, t2, n2, r2, o2) {
          if (e2.length === 0)
            return -1;
          if (typeof n2 == "string" ? (r2 = n2, n2 = 0) : n2 > 2147483647 ? n2 = 2147483647 : n2 < -2147483648 && (n2 = -2147483648), n2 = +n2, isNaN(n2) && (n2 = o2 ? 0 : e2.length - 1), n2 < 0 && (n2 = e2.length + n2), n2 >= e2.length) {
            if (o2)
              return -1;
            n2 = e2.length - 1;
          } else if (n2 < 0) {
            if (!o2)
              return -1;
            n2 = 0;
          }
          if (typeof t2 == "string" && (t2 = Bl.from(t2, r2)), Ll(t2))
            return t2.length === 0 ? -1 : Vl(e2, t2, n2, r2, o2);
          if (typeof t2 == "number")
            return t2 &= 255, Bl.TYPED_ARRAY_SUPPORT && typeof Uint8Array.prototype.indexOf == "function" ? o2 ? Uint8Array.prototype.indexOf.call(e2, t2, n2) : Uint8Array.prototype.lastIndexOf.call(e2, t2, n2) : Vl(e2, [t2], n2, r2, o2);
          throw new TypeError("val must be string, number or Buffer");
        }
        function Vl(e2, t2, n2, r2, o2) {
          var i2, u2 = 1, s2 = e2.length, a2 = t2.length;
          if (r2 !== void 0 && ((r2 = String(r2).toLowerCase()) === "ucs2" || r2 === "ucs-2" || r2 === "utf16le" || r2 === "utf-16le")) {
            if (e2.length < 2 || t2.length < 2)
              return -1;
            u2 = 2, s2 /= 2, a2 /= 2, n2 /= 2;
          }
          function c2(e3, t3) {
            return u2 === 1 ? e3[t3] : e3.readUInt16BE(t3 * u2);
          }
          if (o2) {
            var l3 = -1;
            for (i2 = n2; i2 < s2; i2++)
              if (c2(e2, i2) === c2(t2, l3 === -1 ? 0 : i2 - l3)) {
                if (l3 === -1 && (l3 = i2), i2 - l3 + 1 === a2)
                  return l3 * u2;
              } else
                l3 !== -1 && (i2 -= i2 - l3), l3 = -1;
          } else
            for (n2 + a2 > s2 && (n2 = s2 - a2), i2 = n2; i2 >= 0; i2--) {
              for (var p2 = true, f2 = 0; f2 < a2; f2++)
                if (c2(e2, i2 + f2) !== c2(t2, f2)) {
                  p2 = false;
                  break;
                }
              if (p2)
                return i2;
            }
          return -1;
        }
        function $l(e2, t2, n2, r2) {
          n2 = Number(n2) || 0;
          var o2 = e2.length - n2;
          r2 ? (r2 = Number(r2)) > o2 && (r2 = o2) : r2 = o2;
          var i2 = t2.length;
          if (i2 % 2 != 0)
            throw new TypeError("Invalid hex string");
          r2 > i2 / 2 && (r2 = i2 / 2);
          for (var u2 = 0; u2 < r2; ++u2) {
            var s2 = parseInt(t2.substr(2 * u2, 2), 16);
            if (isNaN(s2))
              return u2;
            e2[n2 + u2] = s2;
          }
          return u2;
        }
        function Wl(e2, t2, n2, r2) {
          return pp(cp(t2, e2.length - n2), e2, n2, r2);
        }
        function ql(e2, t2, n2, r2) {
          return pp(function(e3) {
            for (var t3 = [], n3 = 0; n3 < e3.length; ++n3)
              t3.push(255 & e3.charCodeAt(n3));
            return t3;
          }(t2), e2, n2, r2);
        }
        function Ul(e2, t2, n2, r2) {
          return ql(e2, t2, n2, r2);
        }
        function zl(e2, t2, n2, r2) {
          return pp(lp(t2), e2, n2, r2);
        }
        function Gl(e2, t2, n2, r2) {
          return pp(function(e3, t3) {
            for (var n3, r3, o2, i2 = [], u2 = 0; u2 < e3.length && !((t3 -= 2) < 0); ++u2)
              r3 = (n3 = e3.charCodeAt(u2)) >> 8, o2 = n3 % 256, i2.push(o2), i2.push(r3);
            return i2;
          }(t2, e2.length - n2), e2, n2, r2);
        }
        function Hl(e2, t2, n2) {
          return t2 === 0 && n2 === e2.length ? vl(e2) : vl(e2.slice(t2, n2));
        }
        function Jl(e2, t2, n2) {
          n2 = Math.min(e2.length, n2);
          for (var r2 = [], o2 = t2; o2 < n2; ) {
            var i2, u2, s2, a2, c2 = e2[o2], l3 = null, p2 = c2 > 239 ? 4 : c2 > 223 ? 3 : c2 > 191 ? 2 : 1;
            if (o2 + p2 <= n2)
              switch (p2) {
                case 1:
                  c2 < 128 && (l3 = c2);
                  break;
                case 2:
                  (192 & (i2 = e2[o2 + 1])) == 128 && (a2 = (31 & c2) << 6 | 63 & i2) > 127 && (l3 = a2);
                  break;
                case 3:
                  i2 = e2[o2 + 1], u2 = e2[o2 + 2], (192 & i2) == 128 && (192 & u2) == 128 && (a2 = (15 & c2) << 12 | (63 & i2) << 6 | 63 & u2) > 2047 && (a2 < 55296 || a2 > 57343) && (l3 = a2);
                  break;
                case 4:
                  i2 = e2[o2 + 1], u2 = e2[o2 + 2], s2 = e2[o2 + 3], (192 & i2) == 128 && (192 & u2) == 128 && (192 & s2) == 128 && (a2 = (15 & c2) << 18 | (63 & i2) << 12 | (63 & u2) << 6 | 63 & s2) > 65535 && a2 < 1114112 && (l3 = a2);
              }
            l3 === null ? (l3 = 65533, p2 = 1) : l3 > 65535 && (l3 -= 65536, r2.push(l3 >>> 10 & 1023 | 55296), l3 = 56320 | 1023 & l3), r2.push(l3), o2 += p2;
          }
          return function(e3) {
            var t3 = e3.length;
            if (t3 <= Xl)
              return String.fromCharCode.apply(String, e3);
            var n3 = "", r3 = 0;
            for (; r3 < t3; )
              n3 += String.fromCharCode.apply(String, e3.slice(r3, r3 += Xl));
            return n3;
          }(r2);
        }
        Bl.TYPED_ARRAY_SUPPORT = Ns.TYPED_ARRAY_SUPPORT === void 0 || Ns.TYPED_ARRAY_SUPPORT, Bl.poolSize = 8192, Bl._augment = function(e2) {
          return e2.__proto__ = Bl.prototype, e2;
        }, Bl.from = function(e2, t2, n2) {
          return Nl(null, e2, t2, n2);
        }, Bl.TYPED_ARRAY_SUPPORT && (Bl.prototype.__proto__ = Uint8Array.prototype, Bl.__proto__ = Uint8Array), Bl.alloc = function(e2, t2, n2) {
          return function(e3, t3, n3, r2) {
            return kl(t3), t3 <= 0 ? Tl(e3, t3) : n3 !== void 0 ? typeof r2 == "string" ? Tl(e3, t3).fill(n3, r2) : Tl(e3, t3).fill(n3) : Tl(e3, t3);
          }(null, e2, t2, n2);
        }, Bl.allocUnsafe = function(e2) {
          return Pl(null, e2);
        }, Bl.allocUnsafeSlow = function(e2) {
          return Pl(null, e2);
        }, Bl.isBuffer = fp, Bl.compare = function(e2, t2) {
          if (!Ll(e2) || !Ll(t2))
            throw new TypeError("Arguments must be Buffers");
          if (e2 === t2)
            return 0;
          for (var n2 = e2.length, r2 = t2.length, o2 = 0, i2 = Math.min(n2, r2); o2 < i2; ++o2)
            if (e2[o2] !== t2[o2]) {
              n2 = e2[o2], r2 = t2[o2];
              break;
            }
          return n2 < r2 ? -1 : r2 < n2 ? 1 : 0;
        }, Bl.isEncoding = function(e2) {
          switch (String(e2).toLowerCase()) {
            case "hex":
            case "utf8":
            case "utf-8":
            case "ascii":
            case "latin1":
            case "binary":
            case "base64":
            case "ucs2":
            case "ucs-2":
            case "utf16le":
            case "utf-16le":
              return true;
            default:
              return false;
          }
        }, Bl.concat = function(e2, t2) {
          if (!Sl(e2))
            throw new TypeError('"list" argument must be an Array of Buffers');
          if (e2.length === 0)
            return Bl.alloc(0);
          var n2;
          if (t2 === void 0)
            for (t2 = 0, n2 = 0; n2 < e2.length; ++n2)
              t2 += e2[n2].length;
          var r2 = Bl.allocUnsafe(t2), o2 = 0;
          for (n2 = 0; n2 < e2.length; ++n2) {
            var i2 = e2[n2];
            if (!Ll(i2))
              throw new TypeError('"list" argument must be an Array of Buffers');
            i2.copy(r2, o2), o2 += i2.length;
          }
          return r2;
        }, Bl.byteLength = jl, Bl.prototype._isBuffer = true, Bl.prototype.swap16 = function() {
          var e2 = this.length;
          if (e2 % 2 != 0)
            throw new RangeError("Buffer size must be a multiple of 16-bits");
          for (var t2 = 0; t2 < e2; t2 += 2)
            Ml(this, t2, t2 + 1);
          return this;
        }, Bl.prototype.swap32 = function() {
          var e2 = this.length;
          if (e2 % 4 != 0)
            throw new RangeError("Buffer size must be a multiple of 32-bits");
          for (var t2 = 0; t2 < e2; t2 += 4)
            Ml(this, t2, t2 + 3), Ml(this, t2 + 1, t2 + 2);
          return this;
        }, Bl.prototype.swap64 = function() {
          var e2 = this.length;
          if (e2 % 8 != 0)
            throw new RangeError("Buffer size must be a multiple of 64-bits");
          for (var t2 = 0; t2 < e2; t2 += 8)
            Ml(this, t2, t2 + 7), Ml(this, t2 + 1, t2 + 6), Ml(this, t2 + 2, t2 + 5), Ml(this, t2 + 3, t2 + 4);
          return this;
        }, Bl.prototype.toString = function() {
          var e2 = 0 | this.length;
          return e2 === 0 ? "" : arguments.length === 0 ? Jl(this, 0, e2) : _l.apply(this, arguments);
        }, Bl.prototype.equals = function(e2) {
          if (!Ll(e2))
            throw new TypeError("Argument must be a Buffer");
          return this === e2 || Bl.compare(this, e2) === 0;
        }, Bl.prototype.inspect = function() {
          var e2 = "";
          return this.length > 0 && (e2 = this.toString("hex", 0, 50).match(/.{2}/g).join(" "), this.length > 50 && (e2 += " ... ")), "<Buffer " + e2 + ">";
        }, Bl.prototype.compare = function(e2, t2, n2, r2, o2) {
          if (!Ll(e2))
            throw new TypeError("Argument must be a Buffer");
          if (t2 === void 0 && (t2 = 0), n2 === void 0 && (n2 = e2 ? e2.length : 0), r2 === void 0 && (r2 = 0), o2 === void 0 && (o2 = this.length), t2 < 0 || n2 > e2.length || r2 < 0 || o2 > this.length)
            throw new RangeError("out of range index");
          if (r2 >= o2 && t2 >= n2)
            return 0;
          if (r2 >= o2)
            return -1;
          if (t2 >= n2)
            return 1;
          if (this === e2)
            return 0;
          for (var i2 = (o2 >>>= 0) - (r2 >>>= 0), u2 = (n2 >>>= 0) - (t2 >>>= 0), s2 = Math.min(i2, u2), a2 = this.slice(r2, o2), c2 = e2.slice(t2, n2), l3 = 0; l3 < s2; ++l3)
            if (a2[l3] !== c2[l3]) {
              i2 = a2[l3], u2 = c2[l3];
              break;
            }
          return i2 < u2 ? -1 : u2 < i2 ? 1 : 0;
        }, Bl.prototype.includes = function(e2, t2, n2) {
          return this.indexOf(e2, t2, n2) !== -1;
        }, Bl.prototype.indexOf = function(e2, t2, n2) {
          return Rl(this, e2, t2, n2, true);
        }, Bl.prototype.lastIndexOf = function(e2, t2, n2) {
          return Rl(this, e2, t2, n2, false);
        }, Bl.prototype.write = function(e2, t2, n2, r2) {
          if (t2 === void 0)
            r2 = "utf8", n2 = this.length, t2 = 0;
          else if (n2 === void 0 && typeof t2 == "string")
            r2 = t2, n2 = this.length, t2 = 0;
          else {
            if (!isFinite(t2))
              throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
            t2 |= 0, isFinite(n2) ? (n2 |= 0, r2 === void 0 && (r2 = "utf8")) : (r2 = n2, n2 = void 0);
          }
          var o2 = this.length - t2;
          if ((n2 === void 0 || n2 > o2) && (n2 = o2), e2.length > 0 && (n2 < 0 || t2 < 0) || t2 > this.length)
            throw new RangeError("Attempt to write outside buffer bounds");
          r2 || (r2 = "utf8");
          for (var i2 = false; ; )
            switch (r2) {
              case "hex":
                return $l(this, e2, t2, n2);
              case "utf8":
              case "utf-8":
                return Wl(this, e2, t2, n2);
              case "ascii":
                return ql(this, e2, t2, n2);
              case "latin1":
              case "binary":
                return Ul(this, e2, t2, n2);
              case "base64":
                return zl(this, e2, t2, n2);
              case "ucs2":
              case "ucs-2":
              case "utf16le":
              case "utf-16le":
                return Gl(this, e2, t2, n2);
              default:
                if (i2)
                  throw new TypeError("Unknown encoding: " + r2);
                r2 = ("" + r2).toLowerCase(), i2 = true;
            }
        }, Bl.prototype.toJSON = function() {
          return { type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0) };
        };
        var Xl = 4096;
        function Yl(e2, t2, n2) {
          var r2 = "";
          n2 = Math.min(e2.length, n2);
          for (var o2 = t2; o2 < n2; ++o2)
            r2 += String.fromCharCode(127 & e2[o2]);
          return r2;
        }
        function Kl(e2, t2, n2) {
          var r2 = "";
          n2 = Math.min(e2.length, n2);
          for (var o2 = t2; o2 < n2; ++o2)
            r2 += String.fromCharCode(e2[o2]);
          return r2;
        }
        function Ql(e2, t2, n2) {
          var r2 = e2.length;
          (!t2 || t2 < 0) && (t2 = 0), (!n2 || n2 < 0 || n2 > r2) && (n2 = r2);
          for (var o2 = "", i2 = t2; i2 < n2; ++i2)
            o2 += ap(e2[i2]);
          return o2;
        }
        function Zl(e2, t2, n2) {
          for (var r2 = e2.slice(t2, n2), o2 = "", i2 = 0; i2 < r2.length; i2 += 2)
            o2 += String.fromCharCode(r2[i2] + 256 * r2[i2 + 1]);
          return o2;
        }
        function ep(e2, t2, n2) {
          if (e2 % 1 != 0 || e2 < 0)
            throw new RangeError("offset is not uint");
          if (e2 + t2 > n2)
            throw new RangeError("Trying to access beyond buffer length");
        }
        function tp(e2, t2, n2, r2, o2, i2) {
          if (!Ll(e2))
            throw new TypeError('"buffer" argument must be a Buffer instance');
          if (t2 > o2 || t2 < i2)
            throw new RangeError('"value" argument is out of bounds');
          if (n2 + r2 > e2.length)
            throw new RangeError("Index out of range");
        }
        function np(e2, t2, n2, r2) {
          t2 < 0 && (t2 = 65535 + t2 + 1);
          for (var o2 = 0, i2 = Math.min(e2.length - n2, 2); o2 < i2; ++o2)
            e2[n2 + o2] = (t2 & 255 << 8 * (r2 ? o2 : 1 - o2)) >>> 8 * (r2 ? o2 : 1 - o2);
        }
        function rp(e2, t2, n2, r2) {
          t2 < 0 && (t2 = 4294967295 + t2 + 1);
          for (var o2 = 0, i2 = Math.min(e2.length - n2, 4); o2 < i2; ++o2)
            e2[n2 + o2] = t2 >>> 8 * (r2 ? o2 : 3 - o2) & 255;
        }
        function op(e2, t2, n2, r2, o2, i2) {
          if (n2 + r2 > e2.length)
            throw new RangeError("Index out of range");
          if (n2 < 0)
            throw new RangeError("Index out of range");
        }
        function ip(e2, t2, n2, r2, o2) {
          return o2 || op(e2, 0, n2, 4), Fl(e2, t2, n2, r2, 23, 4), n2 + 4;
        }
        function up(e2, t2, n2, r2, o2) {
          return o2 || op(e2, 0, n2, 8), Fl(e2, t2, n2, r2, 52, 8), n2 + 8;
        }
        Bl.prototype.slice = function(e2, t2) {
          var n2, r2 = this.length;
          if ((e2 = ~~e2) < 0 ? (e2 += r2) < 0 && (e2 = 0) : e2 > r2 && (e2 = r2), (t2 = t2 === void 0 ? r2 : ~~t2) < 0 ? (t2 += r2) < 0 && (t2 = 0) : t2 > r2 && (t2 = r2), t2 < e2 && (t2 = e2), Bl.TYPED_ARRAY_SUPPORT)
            (n2 = this.subarray(e2, t2)).__proto__ = Bl.prototype;
          else {
            var o2 = t2 - e2;
            n2 = new Bl(o2, void 0);
            for (var i2 = 0; i2 < o2; ++i2)
              n2[i2] = this[i2 + e2];
          }
          return n2;
        }, Bl.prototype.readUIntLE = function(e2, t2, n2) {
          e2 |= 0, t2 |= 0, n2 || ep(e2, t2, this.length);
          for (var r2 = this[e2], o2 = 1, i2 = 0; ++i2 < t2 && (o2 *= 256); )
            r2 += this[e2 + i2] * o2;
          return r2;
        }, Bl.prototype.readUIntBE = function(e2, t2, n2) {
          e2 |= 0, t2 |= 0, n2 || ep(e2, t2, this.length);
          for (var r2 = this[e2 + --t2], o2 = 1; t2 > 0 && (o2 *= 256); )
            r2 += this[e2 + --t2] * o2;
          return r2;
        }, Bl.prototype.readUInt8 = function(e2, t2) {
          return t2 || ep(e2, 1, this.length), this[e2];
        }, Bl.prototype.readUInt16LE = function(e2, t2) {
          return t2 || ep(e2, 2, this.length), this[e2] | this[e2 + 1] << 8;
        }, Bl.prototype.readUInt16BE = function(e2, t2) {
          return t2 || ep(e2, 2, this.length), this[e2] << 8 | this[e2 + 1];
        }, Bl.prototype.readUInt32LE = function(e2, t2) {
          return t2 || ep(e2, 4, this.length), (this[e2] | this[e2 + 1] << 8 | this[e2 + 2] << 16) + 16777216 * this[e2 + 3];
        }, Bl.prototype.readUInt32BE = function(e2, t2) {
          return t2 || ep(e2, 4, this.length), 16777216 * this[e2] + (this[e2 + 1] << 16 | this[e2 + 2] << 8 | this[e2 + 3]);
        }, Bl.prototype.readIntLE = function(e2, t2, n2) {
          e2 |= 0, t2 |= 0, n2 || ep(e2, t2, this.length);
          for (var r2 = this[e2], o2 = 1, i2 = 0; ++i2 < t2 && (o2 *= 256); )
            r2 += this[e2 + i2] * o2;
          return r2 >= (o2 *= 128) && (r2 -= Math.pow(2, 8 * t2)), r2;
        }, Bl.prototype.readIntBE = function(e2, t2, n2) {
          e2 |= 0, t2 |= 0, n2 || ep(e2, t2, this.length);
          for (var r2 = t2, o2 = 1, i2 = this[e2 + --r2]; r2 > 0 && (o2 *= 256); )
            i2 += this[e2 + --r2] * o2;
          return i2 >= (o2 *= 128) && (i2 -= Math.pow(2, 8 * t2)), i2;
        }, Bl.prototype.readInt8 = function(e2, t2) {
          return t2 || ep(e2, 1, this.length), 128 & this[e2] ? -1 * (255 - this[e2] + 1) : this[e2];
        }, Bl.prototype.readInt16LE = function(e2, t2) {
          t2 || ep(e2, 2, this.length);
          var n2 = this[e2] | this[e2 + 1] << 8;
          return 32768 & n2 ? 4294901760 | n2 : n2;
        }, Bl.prototype.readInt16BE = function(e2, t2) {
          t2 || ep(e2, 2, this.length);
          var n2 = this[e2 + 1] | this[e2] << 8;
          return 32768 & n2 ? 4294901760 | n2 : n2;
        }, Bl.prototype.readInt32LE = function(e2, t2) {
          return t2 || ep(e2, 4, this.length), this[e2] | this[e2 + 1] << 8 | this[e2 + 2] << 16 | this[e2 + 3] << 24;
        }, Bl.prototype.readInt32BE = function(e2, t2) {
          return t2 || ep(e2, 4, this.length), this[e2] << 24 | this[e2 + 1] << 16 | this[e2 + 2] << 8 | this[e2 + 3];
        }, Bl.prototype.readFloatLE = function(e2, t2) {
          return t2 || ep(e2, 4, this.length), Al(this, e2, true, 23, 4);
        }, Bl.prototype.readFloatBE = function(e2, t2) {
          return t2 || ep(e2, 4, this.length), Al(this, e2, false, 23, 4);
        }, Bl.prototype.readDoubleLE = function(e2, t2) {
          return t2 || ep(e2, 8, this.length), Al(this, e2, true, 52, 8);
        }, Bl.prototype.readDoubleBE = function(e2, t2) {
          return t2 || ep(e2, 8, this.length), Al(this, e2, false, 52, 8);
        }, Bl.prototype.writeUIntLE = function(e2, t2, n2, r2) {
          (e2 = +e2, t2 |= 0, n2 |= 0, r2) || tp(this, e2, t2, n2, Math.pow(2, 8 * n2) - 1, 0);
          var o2 = 1, i2 = 0;
          for (this[t2] = 255 & e2; ++i2 < n2 && (o2 *= 256); )
            this[t2 + i2] = e2 / o2 & 255;
          return t2 + n2;
        }, Bl.prototype.writeUIntBE = function(e2, t2, n2, r2) {
          (e2 = +e2, t2 |= 0, n2 |= 0, r2) || tp(this, e2, t2, n2, Math.pow(2, 8 * n2) - 1, 0);
          var o2 = n2 - 1, i2 = 1;
          for (this[t2 + o2] = 255 & e2; --o2 >= 0 && (i2 *= 256); )
            this[t2 + o2] = e2 / i2 & 255;
          return t2 + n2;
        }, Bl.prototype.writeUInt8 = function(e2, t2, n2) {
          return e2 = +e2, t2 |= 0, n2 || tp(this, e2, t2, 1, 255, 0), Bl.TYPED_ARRAY_SUPPORT || (e2 = Math.floor(e2)), this[t2] = 255 & e2, t2 + 1;
        }, Bl.prototype.writeUInt16LE = function(e2, t2, n2) {
          return e2 = +e2, t2 |= 0, n2 || tp(this, e2, t2, 2, 65535, 0), Bl.TYPED_ARRAY_SUPPORT ? (this[t2] = 255 & e2, this[t2 + 1] = e2 >>> 8) : np(this, e2, t2, true), t2 + 2;
        }, Bl.prototype.writeUInt16BE = function(e2, t2, n2) {
          return e2 = +e2, t2 |= 0, n2 || tp(this, e2, t2, 2, 65535, 0), Bl.TYPED_ARRAY_SUPPORT ? (this[t2] = e2 >>> 8, this[t2 + 1] = 255 & e2) : np(this, e2, t2, false), t2 + 2;
        }, Bl.prototype.writeUInt32LE = function(e2, t2, n2) {
          return e2 = +e2, t2 |= 0, n2 || tp(this, e2, t2, 4, 4294967295, 0), Bl.TYPED_ARRAY_SUPPORT ? (this[t2 + 3] = e2 >>> 24, this[t2 + 2] = e2 >>> 16, this[t2 + 1] = e2 >>> 8, this[t2] = 255 & e2) : rp(this, e2, t2, true), t2 + 4;
        }, Bl.prototype.writeUInt32BE = function(e2, t2, n2) {
          return e2 = +e2, t2 |= 0, n2 || tp(this, e2, t2, 4, 4294967295, 0), Bl.TYPED_ARRAY_SUPPORT ? (this[t2] = e2 >>> 24, this[t2 + 1] = e2 >>> 16, this[t2 + 2] = e2 >>> 8, this[t2 + 3] = 255 & e2) : rp(this, e2, t2, false), t2 + 4;
        }, Bl.prototype.writeIntLE = function(e2, t2, n2, r2) {
          if (e2 = +e2, t2 |= 0, !r2) {
            var o2 = Math.pow(2, 8 * n2 - 1);
            tp(this, e2, t2, n2, o2 - 1, -o2);
          }
          var i2 = 0, u2 = 1, s2 = 0;
          for (this[t2] = 255 & e2; ++i2 < n2 && (u2 *= 256); )
            e2 < 0 && s2 === 0 && this[t2 + i2 - 1] !== 0 && (s2 = 1), this[t2 + i2] = (e2 / u2 >> 0) - s2 & 255;
          return t2 + n2;
        }, Bl.prototype.writeIntBE = function(e2, t2, n2, r2) {
          if (e2 = +e2, t2 |= 0, !r2) {
            var o2 = Math.pow(2, 8 * n2 - 1);
            tp(this, e2, t2, n2, o2 - 1, -o2);
          }
          var i2 = n2 - 1, u2 = 1, s2 = 0;
          for (this[t2 + i2] = 255 & e2; --i2 >= 0 && (u2 *= 256); )
            e2 < 0 && s2 === 0 && this[t2 + i2 + 1] !== 0 && (s2 = 1), this[t2 + i2] = (e2 / u2 >> 0) - s2 & 255;
          return t2 + n2;
        }, Bl.prototype.writeInt8 = function(e2, t2, n2) {
          return e2 = +e2, t2 |= 0, n2 || tp(this, e2, t2, 1, 127, -128), Bl.TYPED_ARRAY_SUPPORT || (e2 = Math.floor(e2)), e2 < 0 && (e2 = 255 + e2 + 1), this[t2] = 255 & e2, t2 + 1;
        }, Bl.prototype.writeInt16LE = function(e2, t2, n2) {
          return e2 = +e2, t2 |= 0, n2 || tp(this, e2, t2, 2, 32767, -32768), Bl.TYPED_ARRAY_SUPPORT ? (this[t2] = 255 & e2, this[t2 + 1] = e2 >>> 8) : np(this, e2, t2, true), t2 + 2;
        }, Bl.prototype.writeInt16BE = function(e2, t2, n2) {
          return e2 = +e2, t2 |= 0, n2 || tp(this, e2, t2, 2, 32767, -32768), Bl.TYPED_ARRAY_SUPPORT ? (this[t2] = e2 >>> 8, this[t2 + 1] = 255 & e2) : np(this, e2, t2, false), t2 + 2;
        }, Bl.prototype.writeInt32LE = function(e2, t2, n2) {
          return e2 = +e2, t2 |= 0, n2 || tp(this, e2, t2, 4, 2147483647, -2147483648), Bl.TYPED_ARRAY_SUPPORT ? (this[t2] = 255 & e2, this[t2 + 1] = e2 >>> 8, this[t2 + 2] = e2 >>> 16, this[t2 + 3] = e2 >>> 24) : rp(this, e2, t2, true), t2 + 4;
        }, Bl.prototype.writeInt32BE = function(e2, t2, n2) {
          return e2 = +e2, t2 |= 0, n2 || tp(this, e2, t2, 4, 2147483647, -2147483648), e2 < 0 && (e2 = 4294967295 + e2 + 1), Bl.TYPED_ARRAY_SUPPORT ? (this[t2] = e2 >>> 24, this[t2 + 1] = e2 >>> 16, this[t2 + 2] = e2 >>> 8, this[t2 + 3] = 255 & e2) : rp(this, e2, t2, false), t2 + 4;
        }, Bl.prototype.writeFloatLE = function(e2, t2, n2) {
          return ip(this, e2, t2, true, n2);
        }, Bl.prototype.writeFloatBE = function(e2, t2, n2) {
          return ip(this, e2, t2, false, n2);
        }, Bl.prototype.writeDoubleLE = function(e2, t2, n2) {
          return up(this, e2, t2, true, n2);
        }, Bl.prototype.writeDoubleBE = function(e2, t2, n2) {
          return up(this, e2, t2, false, n2);
        }, Bl.prototype.copy = function(e2, t2, n2, r2) {
          if (n2 || (n2 = 0), r2 || r2 === 0 || (r2 = this.length), t2 >= e2.length && (t2 = e2.length), t2 || (t2 = 0), r2 > 0 && r2 < n2 && (r2 = n2), r2 === n2)
            return 0;
          if (e2.length === 0 || this.length === 0)
            return 0;
          if (t2 < 0)
            throw new RangeError("targetStart out of bounds");
          if (n2 < 0 || n2 >= this.length)
            throw new RangeError("sourceStart out of bounds");
          if (r2 < 0)
            throw new RangeError("sourceEnd out of bounds");
          r2 > this.length && (r2 = this.length), e2.length - t2 < r2 - n2 && (r2 = e2.length - t2 + n2);
          var o2, i2 = r2 - n2;
          if (this === e2 && n2 < t2 && t2 < r2)
            for (o2 = i2 - 1; o2 >= 0; --o2)
              e2[o2 + t2] = this[o2 + n2];
          else if (i2 < 1e3 || !Bl.TYPED_ARRAY_SUPPORT)
            for (o2 = 0; o2 < i2; ++o2)
              e2[o2 + t2] = this[o2 + n2];
          else
            Uint8Array.prototype.set.call(e2, this.subarray(n2, n2 + i2), t2);
          return i2;
        }, Bl.prototype.fill = function(e2, t2, n2, r2) {
          if (typeof e2 == "string") {
            if (typeof t2 == "string" ? (r2 = t2, t2 = 0, n2 = this.length) : typeof n2 == "string" && (r2 = n2, n2 = this.length), e2.length === 1) {
              var o2 = e2.charCodeAt(0);
              o2 < 256 && (e2 = o2);
            }
            if (r2 !== void 0 && typeof r2 != "string")
              throw new TypeError("encoding must be a string");
            if (typeof r2 == "string" && !Bl.isEncoding(r2))
              throw new TypeError("Unknown encoding: " + r2);
          } else
            typeof e2 == "number" && (e2 &= 255);
          if (t2 < 0 || this.length < t2 || this.length < n2)
            throw new RangeError("Out of range index");
          if (n2 <= t2)
            return this;
          var i2;
          if (t2 >>>= 0, n2 = n2 === void 0 ? this.length : n2 >>> 0, e2 || (e2 = 0), typeof e2 == "number")
            for (i2 = t2; i2 < n2; ++i2)
              this[i2] = e2;
          else {
            var u2 = Ll(e2) ? e2 : cp(new Bl(e2, r2).toString()), s2 = u2.length;
            for (i2 = 0; i2 < n2 - t2; ++i2)
              this[i2 + t2] = u2[i2 % s2];
          }
          return this;
        };
        var sp = /[^+\/0-9A-Za-z-_]/g;
        function ap(e2) {
          return e2 < 16 ? "0" + e2.toString(16) : e2.toString(16);
        }
        function cp(e2, t2) {
          var n2;
          t2 = t2 || 1 / 0;
          for (var r2 = e2.length, o2 = null, i2 = [], u2 = 0; u2 < r2; ++u2) {
            if ((n2 = e2.charCodeAt(u2)) > 55295 && n2 < 57344) {
              if (!o2) {
                if (n2 > 56319) {
                  (t2 -= 3) > -1 && i2.push(239, 191, 189);
                  continue;
                }
                if (u2 + 1 === r2) {
                  (t2 -= 3) > -1 && i2.push(239, 191, 189);
                  continue;
                }
                o2 = n2;
                continue;
              }
              if (n2 < 56320) {
                (t2 -= 3) > -1 && i2.push(239, 191, 189), o2 = n2;
                continue;
              }
              n2 = 65536 + (o2 - 55296 << 10 | n2 - 56320);
            } else
              o2 && (t2 -= 3) > -1 && i2.push(239, 191, 189);
            if (o2 = null, n2 < 128) {
              if ((t2 -= 1) < 0)
                break;
              i2.push(n2);
            } else if (n2 < 2048) {
              if ((t2 -= 2) < 0)
                break;
              i2.push(n2 >> 6 | 192, 63 & n2 | 128);
            } else if (n2 < 65536) {
              if ((t2 -= 3) < 0)
                break;
              i2.push(n2 >> 12 | 224, n2 >> 6 & 63 | 128, 63 & n2 | 128);
            } else {
              if (!(n2 < 1114112))
                throw new Error("Invalid code point");
              if ((t2 -= 4) < 0)
                break;
              i2.push(n2 >> 18 | 240, n2 >> 12 & 63 | 128, n2 >> 6 & 63 | 128, 63 & n2 | 128);
            }
          }
          return i2;
        }
        function lp(e2) {
          return function(e3) {
            var t2, n2, r2, o2, i2, u2;
            El || Cl();
            var s2 = e3.length;
            if (s2 % 4 > 0)
              throw new Error("Invalid string. Length must be a multiple of 4");
            i2 = e3[s2 - 2] === "=" ? 2 : e3[s2 - 1] === "=" ? 1 : 0, u2 = new Dl(3 * s2 / 4 - i2), r2 = i2 > 0 ? s2 - 4 : s2;
            var a2 = 0;
            for (t2 = 0, n2 = 0; t2 < r2; t2 += 4, n2 += 3)
              o2 = yl[e3.charCodeAt(t2)] << 18 | yl[e3.charCodeAt(t2 + 1)] << 12 | yl[e3.charCodeAt(t2 + 2)] << 6 | yl[e3.charCodeAt(t2 + 3)], u2[a2++] = o2 >> 16 & 255, u2[a2++] = o2 >> 8 & 255, u2[a2++] = 255 & o2;
            return i2 === 2 ? (o2 = yl[e3.charCodeAt(t2)] << 2 | yl[e3.charCodeAt(t2 + 1)] >> 4, u2[a2++] = 255 & o2) : i2 === 1 && (o2 = yl[e3.charCodeAt(t2)] << 10 | yl[e3.charCodeAt(t2 + 1)] << 4 | yl[e3.charCodeAt(t2 + 2)] >> 2, u2[a2++] = o2 >> 8 & 255, u2[a2++] = 255 & o2), u2;
          }(function(e3) {
            if ((e3 = function(e4) {
              return e4.trim ? e4.trim() : e4.replace(/^\s+|\s+$/g, "");
            }(e3).replace(sp, "")).length < 2)
              return "";
            for (; e3.length % 4 != 0; )
              e3 += "=";
            return e3;
          }(e2));
        }
        function pp(e2, t2, n2, r2) {
          for (var o2 = 0; o2 < r2 && !(o2 + n2 >= t2.length || o2 >= e2.length); ++o2)
            t2[o2 + n2] = e2[o2];
          return o2;
        }
        function fp(e2) {
          return e2 != null && (!!e2._isBuffer || dp(e2) || function(e3) {
            return typeof e3.readFloatLE == "function" && typeof e3.slice == "function" && dp(e3.slice(0, 0));
          }(e2));
        }
        function dp(e2) {
          return !!e2.constructor && typeof e2.constructor.isBuffer == "function" && e2.constructor.isBuffer(e2);
        }
        const hp = el;
        var gp = class {
          constructor(e2, t2) {
            (t2 = t2 || {}).readChunk || (t2.readChunk = 1024), t2.newLineCharacter ? t2.newLineCharacter = t2.newLineCharacter.charCodeAt(0) : t2.newLineCharacter = 10, this.fd = typeof e2 == "number" ? e2 : hp.openSync(e2, "r"), this.options = t2, this.newLineCharacter = t2.newLineCharacter, this.reset();
          }
          _searchInBuffer(e2, t2) {
            let n2 = -1;
            for (let r2 = 0; r2 <= e2.length; r2++) {
              if (e2[r2] === t2) {
                n2 = r2;
                break;
              }
            }
            return n2;
          }
          reset() {
            this.eofReached = false, this.linesCache = [], this.fdPosition = 0;
          }
          close() {
            hp.closeSync(this.fd), this.fd = null;
          }
          _extractLines(e2) {
            let t2;
            const n2 = [];
            let r2 = 0, o2 = 0;
            for (; ; ) {
              let i3 = e2[r2++];
              if (i3 === this.newLineCharacter)
                t2 = e2.slice(o2, r2), n2.push(t2), o2 = r2;
              else if (i3 === void 0)
                break;
            }
            let i2 = e2.slice(o2, r2);
            return i2.length && n2.push(i2), n2;
          }
          _readChunk(e2) {
            let t2, n2 = 0;
            const r2 = [];
            do {
              const e3 = new Bl(this.options.readChunk);
              t2 = hp.readSync(this.fd, e3, 0, this.options.readChunk, this.fdPosition), n2 += t2, this.fdPosition = this.fdPosition + t2, r2.push(e3);
            } while (t2 && this._searchInBuffer(r2[r2.length - 1], this.options.newLineCharacter) === -1);
            let o2 = Bl.concat(r2);
            return t2 < this.options.readChunk && (this.eofReached = true, o2 = o2.slice(0, n2)), n2 && (this.linesCache = this._extractLines(o2), e2 && (this.linesCache[0] = Bl.concat([e2, this.linesCache[0]]))), n2;
          }
          next() {
            if (!this.fd)
              return false;
            let e2, t2 = false;
            if (this.eofReached && this.linesCache.length === 0)
              return t2;
            if (this.linesCache.length || (e2 = this._readChunk()), this.linesCache.length) {
              t2 = this.linesCache.shift();
              t2[t2.length - 1] !== this.newLineCharacter && (e2 = this._readChunk(t2), e2 && (t2 = this.linesCache.shift()));
            }
            return this.eofReached && this.linesCache.length === 0 && this.close(), t2 && t2[t2.length - 1] === this.newLineCharacter && (t2 = t2.slice(0, t2.length - 1)), t2;
          }
        };
        class mp extends Error {
        }
        class yp extends Error {
        }
        class Dp extends Error {
        }
        class Ep extends Error {
        }
        var Cp = { ConfigError: mp, DebugError: yp, UndefinedParserError: Dp, ArgExpansionBailout: Ep }, bp = {}, vp = function(e2, t2) {
          return vp = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(e3, t3) {
            e3.__proto__ = t3;
          } || function(e3, t3) {
            for (var n2 in t3)
              t3.hasOwnProperty(n2) && (e3[n2] = t3[n2]);
          }, vp(e2, t2);
        };
        var Ap = function() {
          return Ap = Object.assign || function(e2) {
            for (var t2, n2 = 1, r2 = arguments.length; n2 < r2; n2++)
              for (var o2 in t2 = arguments[n2])
                Object.prototype.hasOwnProperty.call(t2, o2) && (e2[o2] = t2[o2]);
            return e2;
          }, Ap.apply(this, arguments);
        };
        function Fp(e2) {
          var t2 = typeof Symbol == "function" && Symbol.iterator, n2 = t2 && e2[t2], r2 = 0;
          if (n2)
            return n2.call(e2);
          if (e2 && typeof e2.length == "number")
            return { next: function() {
              return e2 && r2 >= e2.length && (e2 = void 0), { value: e2 && e2[r2++], done: !e2 };
            } };
          throw new TypeError(t2 ? "Object is not iterable." : "Symbol.iterator is not defined.");
        }
        function xp(e2, t2) {
          var n2 = typeof Symbol == "function" && e2[Symbol.iterator];
          if (!n2)
            return e2;
          var r2, o2, i2 = n2.call(e2), u2 = [];
          try {
            for (; (t2 === void 0 || t2-- > 0) && !(r2 = i2.next()).done; )
              u2.push(r2.value);
          } catch (e3) {
            o2 = { error: e3 };
          } finally {
            try {
              r2 && !r2.done && (n2 = i2.return) && n2.call(i2);
            } finally {
              if (o2)
                throw o2.error;
            }
          }
          return u2;
        }
        function Sp(e2) {
          return this instanceof Sp ? (this.v = e2, this) : new Sp(e2);
        }
        var wp = Object.freeze({ __proto__: null, __extends: function(e2, t2) {
          function n2() {
            this.constructor = e2;
          }
          vp(e2, t2), e2.prototype = t2 === null ? Object.create(t2) : (n2.prototype = t2.prototype, new n2());
        }, get __assign() {
          return Ap;
        }, __rest: function(e2, t2) {
          var n2 = {};
          for (var r2 in e2)
            Object.prototype.hasOwnProperty.call(e2, r2) && t2.indexOf(r2) < 0 && (n2[r2] = e2[r2]);
          if (e2 != null && typeof Object.getOwnPropertySymbols == "function") {
            var o2 = 0;
            for (r2 = Object.getOwnPropertySymbols(e2); o2 < r2.length; o2++)
              t2.indexOf(r2[o2]) < 0 && Object.prototype.propertyIsEnumerable.call(e2, r2[o2]) && (n2[r2[o2]] = e2[r2[o2]]);
          }
          return n2;
        }, __decorate: function(e2, t2, n2, r2) {
          var o2, i2 = arguments.length, u2 = i2 < 3 ? t2 : r2 === null ? r2 = Object.getOwnPropertyDescriptor(t2, n2) : r2;
          if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
            u2 = Reflect.decorate(e2, t2, n2, r2);
          else
            for (var s2 = e2.length - 1; s2 >= 0; s2--)
              (o2 = e2[s2]) && (u2 = (i2 < 3 ? o2(u2) : i2 > 3 ? o2(t2, n2, u2) : o2(t2, n2)) || u2);
          return i2 > 3 && u2 && Object.defineProperty(t2, n2, u2), u2;
        }, __param: function(e2, t2) {
          return function(n2, r2) {
            t2(n2, r2, e2);
          };
        }, __metadata: function(e2, t2) {
          if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
            return Reflect.metadata(e2, t2);
        }, __awaiter: function(e2, t2, n2, r2) {
          return new (n2 || (n2 = Promise))(function(o2, i2) {
            function u2(e3) {
              try {
                a2(r2.next(e3));
              } catch (e4) {
                i2(e4);
              }
            }
            function s2(e3) {
              try {
                a2(r2.throw(e3));
              } catch (e4) {
                i2(e4);
              }
            }
            function a2(e3) {
              var t3;
              e3.done ? o2(e3.value) : (t3 = e3.value, t3 instanceof n2 ? t3 : new n2(function(e4) {
                e4(t3);
              })).then(u2, s2);
            }
            a2((r2 = r2.apply(e2, t2 || [])).next());
          });
        }, __generator: function(e2, t2) {
          var n2, r2, o2, i2, u2 = { label: 0, sent: function() {
            if (1 & o2[0])
              throw o2[1];
            return o2[1];
          }, trys: [], ops: [] };
          return i2 = { next: s2(0), throw: s2(1), return: s2(2) }, typeof Symbol == "function" && (i2[Symbol.iterator] = function() {
            return this;
          }), i2;
          function s2(i3) {
            return function(s3) {
              return function(i4) {
                if (n2)
                  throw new TypeError("Generator is already executing.");
                for (; u2; )
                  try {
                    if (n2 = 1, r2 && (o2 = 2 & i4[0] ? r2.return : i4[0] ? r2.throw || ((o2 = r2.return) && o2.call(r2), 0) : r2.next) && !(o2 = o2.call(r2, i4[1])).done)
                      return o2;
                    switch (r2 = 0, o2 && (i4 = [2 & i4[0], o2.value]), i4[0]) {
                      case 0:
                      case 1:
                        o2 = i4;
                        break;
                      case 4:
                        return u2.label++, { value: i4[1], done: false };
                      case 5:
                        u2.label++, r2 = i4[1], i4 = [0];
                        continue;
                      case 7:
                        i4 = u2.ops.pop(), u2.trys.pop();
                        continue;
                      default:
                        if (!(o2 = u2.trys, (o2 = o2.length > 0 && o2[o2.length - 1]) || i4[0] !== 6 && i4[0] !== 2)) {
                          u2 = 0;
                          continue;
                        }
                        if (i4[0] === 3 && (!o2 || i4[1] > o2[0] && i4[1] < o2[3])) {
                          u2.label = i4[1];
                          break;
                        }
                        if (i4[0] === 6 && u2.label < o2[1]) {
                          u2.label = o2[1], o2 = i4;
                          break;
                        }
                        if (o2 && u2.label < o2[2]) {
                          u2.label = o2[2], u2.ops.push(i4);
                          break;
                        }
                        o2[2] && u2.ops.pop(), u2.trys.pop();
                        continue;
                    }
                    i4 = t2.call(e2, u2);
                  } catch (e3) {
                    i4 = [6, e3], r2 = 0;
                  } finally {
                    n2 = o2 = 0;
                  }
                if (5 & i4[0])
                  throw i4[1];
                return { value: i4[0] ? i4[1] : void 0, done: true };
              }([i3, s3]);
            };
          }
        }, __createBinding: function(e2, t2, n2, r2) {
          r2 === void 0 && (r2 = n2), e2[r2] = t2[n2];
        }, __exportStar: function(e2, t2) {
          for (var n2 in e2)
            n2 === "default" || t2.hasOwnProperty(n2) || (t2[n2] = e2[n2]);
        }, __values: Fp, __read: xp, __spread: function() {
          for (var e2 = [], t2 = 0; t2 < arguments.length; t2++)
            e2 = e2.concat(xp(arguments[t2]));
          return e2;
        }, __spreadArrays: function() {
          for (var e2 = 0, t2 = 0, n2 = arguments.length; t2 < n2; t2++)
            e2 += arguments[t2].length;
          var r2 = Array(e2), o2 = 0;
          for (t2 = 0; t2 < n2; t2++)
            for (var i2 = arguments[t2], u2 = 0, s2 = i2.length; u2 < s2; u2++, o2++)
              r2[o2] = i2[u2];
          return r2;
        }, __await: Sp, __asyncGenerator: function(e2, t2, n2) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var r2, o2 = n2.apply(e2, t2 || []), i2 = [];
          return r2 = {}, u2("next"), u2("throw"), u2("return"), r2[Symbol.asyncIterator] = function() {
            return this;
          }, r2;
          function u2(e3) {
            o2[e3] && (r2[e3] = function(t3) {
              return new Promise(function(n3, r3) {
                i2.push([e3, t3, n3, r3]) > 1 || s2(e3, t3);
              });
            });
          }
          function s2(e3, t3) {
            try {
              (n3 = o2[e3](t3)).value instanceof Sp ? Promise.resolve(n3.value.v).then(a2, c2) : l3(i2[0][2], n3);
            } catch (e4) {
              l3(i2[0][3], e4);
            }
            var n3;
          }
          function a2(e3) {
            s2("next", e3);
          }
          function c2(e3) {
            s2("throw", e3);
          }
          function l3(e3, t3) {
            e3(t3), i2.shift(), i2.length && s2(i2[0][0], i2[0][1]);
          }
        }, __asyncDelegator: function(e2) {
          var t2, n2;
          return t2 = {}, r2("next"), r2("throw", function(e3) {
            throw e3;
          }), r2("return"), t2[Symbol.iterator] = function() {
            return this;
          }, t2;
          function r2(r3, o2) {
            t2[r3] = e2[r3] ? function(t3) {
              return (n2 = !n2) ? { value: Sp(e2[r3](t3)), done: r3 === "return" } : o2 ? o2(t3) : t3;
            } : o2;
          }
        }, __asyncValues: function(e2) {
          if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
          var t2, n2 = e2[Symbol.asyncIterator];
          return n2 ? n2.call(e2) : (e2 = Fp(e2), t2 = {}, r2("next"), r2("throw"), r2("return"), t2[Symbol.asyncIterator] = function() {
            return this;
          }, t2);
          function r2(n3) {
            t2[n3] = e2[n3] && function(t3) {
              return new Promise(function(r3, o2) {
                (function(e3, t4, n4, r4) {
                  Promise.resolve(r4).then(function(t5) {
                    e3({ value: t5, done: n4 });
                  }, t4);
                })(r3, o2, (t3 = e2[n3](t3)).done, t3.value);
              });
            };
          }
        }, __makeTemplateObject: function(e2, t2) {
          return Object.defineProperty ? Object.defineProperty(e2, "raw", { value: t2 }) : e2.raw = t2, e2;
        }, __importStar: function(e2) {
          if (e2 && e2.__esModule)
            return e2;
          var t2 = {};
          if (e2 != null)
            for (var n2 in e2)
              Object.hasOwnProperty.call(e2, n2) && (t2[n2] = e2[n2]);
          return t2.default = e2, t2;
        }, __importDefault: function(e2) {
          return e2 && e2.__esModule ? e2 : { default: e2 };
        }, __classPrivateFieldGet: function(e2, t2) {
          if (!t2.has(e2))
            throw new TypeError("attempted to get private field on non-instance");
          return t2.get(e2);
        }, __classPrivateFieldSet: function(e2, t2, n2) {
          if (!t2.has(e2))
            throw new TypeError("attempted to set private field on non-instance");
          return t2.set(e2, n2), n2;
        } }), Tp = {}, Bp = {};
        !function(e2) {
          Object.defineProperty(e2, "__esModule", { value: true }), e2.apiDescriptor = { key: (e3) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(e3) ? e3 : JSON.stringify(e3), value(t2) {
            if (t2 === null || typeof t2 != "object")
              return JSON.stringify(t2);
            if (Array.isArray(t2))
              return "[".concat(t2.map((t3) => e2.apiDescriptor.value(t3)).join(", "), "]");
            const n2 = Object.keys(t2);
            return n2.length === 0 ? "{}" : "{ ".concat(n2.map((n3) => "".concat(e2.apiDescriptor.key(n3), ": ").concat(e2.apiDescriptor.value(t2[n3]))).join(", "), " }");
          }, pair: (t2) => {
            let { key: n2, value: r2 } = t2;
            return e2.apiDescriptor.value({ [n2]: r2 });
          } };
        }(Bp), function(e2) {
          Object.defineProperty(e2, "__esModule", { value: true });
          wp.__exportStar(Bp, e2);
        }(Tp);
        var Np = {}, kp = {}, Pp = {}, Op = { exports: {} }, Ip = /[|\\{}()[\]^$+*?.]/g, Lp = function(e2) {
          if (typeof e2 != "string")
            throw new TypeError("Expected a string");
          return e2.replace(Ip, "\\$&");
        }, jp = { exports: {} }, _p = { exports: {} }, Mp = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, Rp = {};
        for (var Vp in Mp)
          Mp.hasOwnProperty(Vp) && (Rp[Mp[Vp]] = Vp);
        var $p = _p.exports = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
        for (var Wp in $p)
          if ($p.hasOwnProperty(Wp)) {
            if (!("channels" in $p[Wp]))
              throw new Error("missing channels property: " + Wp);
            if (!("labels" in $p[Wp]))
              throw new Error("missing channel labels property: " + Wp);
            if ($p[Wp].labels.length !== $p[Wp].channels)
              throw new Error("channel and label counts mismatch: " + Wp);
            var qp = $p[Wp].channels, Up = $p[Wp].labels;
            delete $p[Wp].channels, delete $p[Wp].labels, Object.defineProperty($p[Wp], "channels", { value: qp }), Object.defineProperty($p[Wp], "labels", { value: Up });
          }
        $p.rgb.hsl = function(e2) {
          var t2, n2, r2 = e2[0] / 255, o2 = e2[1] / 255, i2 = e2[2] / 255, u2 = Math.min(r2, o2, i2), s2 = Math.max(r2, o2, i2), a2 = s2 - u2;
          return s2 === u2 ? t2 = 0 : r2 === s2 ? t2 = (o2 - i2) / a2 : o2 === s2 ? t2 = 2 + (i2 - r2) / a2 : i2 === s2 && (t2 = 4 + (r2 - o2) / a2), (t2 = Math.min(60 * t2, 360)) < 0 && (t2 += 360), n2 = (u2 + s2) / 2, [t2, 100 * (s2 === u2 ? 0 : n2 <= 0.5 ? a2 / (s2 + u2) : a2 / (2 - s2 - u2)), 100 * n2];
        }, $p.rgb.hsv = function(e2) {
          var t2, n2, r2, o2, i2, u2 = e2[0] / 255, s2 = e2[1] / 255, a2 = e2[2] / 255, c2 = Math.max(u2, s2, a2), l3 = c2 - Math.min(u2, s2, a2), p2 = function(e3) {
            return (c2 - e3) / 6 / l3 + 0.5;
          };
          return l3 === 0 ? o2 = i2 = 0 : (i2 = l3 / c2, t2 = p2(u2), n2 = p2(s2), r2 = p2(a2), u2 === c2 ? o2 = r2 - n2 : s2 === c2 ? o2 = 1 / 3 + t2 - r2 : a2 === c2 && (o2 = 2 / 3 + n2 - t2), o2 < 0 ? o2 += 1 : o2 > 1 && (o2 -= 1)), [360 * o2, 100 * i2, 100 * c2];
        }, $p.rgb.hwb = function(e2) {
          var t2 = e2[0], n2 = e2[1], r2 = e2[2];
          return [$p.rgb.hsl(e2)[0], 100 * (1 / 255 * Math.min(t2, Math.min(n2, r2))), 100 * (r2 = 1 - 1 / 255 * Math.max(t2, Math.max(n2, r2)))];
        }, $p.rgb.cmyk = function(e2) {
          var t2, n2 = e2[0] / 255, r2 = e2[1] / 255, o2 = e2[2] / 255;
          return [100 * ((1 - n2 - (t2 = Math.min(1 - n2, 1 - r2, 1 - o2))) / (1 - t2) || 0), 100 * ((1 - r2 - t2) / (1 - t2) || 0), 100 * ((1 - o2 - t2) / (1 - t2) || 0), 100 * t2];
        }, $p.rgb.keyword = function(e2) {
          var t2 = Rp[e2];
          if (t2)
            return t2;
          var n2, r2, o2, i2 = 1 / 0;
          for (var u2 in Mp)
            if (Mp.hasOwnProperty(u2)) {
              var s2 = Mp[u2], a2 = (r2 = e2, o2 = s2, Math.pow(r2[0] - o2[0], 2) + Math.pow(r2[1] - o2[1], 2) + Math.pow(r2[2] - o2[2], 2));
              a2 < i2 && (i2 = a2, n2 = u2);
            }
          return n2;
        }, $p.keyword.rgb = function(e2) {
          return Mp[e2];
        }, $p.rgb.xyz = function(e2) {
          var t2 = e2[0] / 255, n2 = e2[1] / 255, r2 = e2[2] / 255;
          return [100 * (0.4124 * (t2 = t2 > 0.04045 ? Math.pow((t2 + 0.055) / 1.055, 2.4) : t2 / 12.92) + 0.3576 * (n2 = n2 > 0.04045 ? Math.pow((n2 + 0.055) / 1.055, 2.4) : n2 / 12.92) + 0.1805 * (r2 = r2 > 0.04045 ? Math.pow((r2 + 0.055) / 1.055, 2.4) : r2 / 12.92)), 100 * (0.2126 * t2 + 0.7152 * n2 + 0.0722 * r2), 100 * (0.0193 * t2 + 0.1192 * n2 + 0.9505 * r2)];
        }, $p.rgb.lab = function(e2) {
          var t2 = $p.rgb.xyz(e2), n2 = t2[0], r2 = t2[1], o2 = t2[2];
          return r2 /= 100, o2 /= 108.883, n2 = (n2 /= 95.047) > 8856e-6 ? Math.pow(n2, 1 / 3) : 7.787 * n2 + 16 / 116, [116 * (r2 = r2 > 8856e-6 ? Math.pow(r2, 1 / 3) : 7.787 * r2 + 16 / 116) - 16, 500 * (n2 - r2), 200 * (r2 - (o2 = o2 > 8856e-6 ? Math.pow(o2, 1 / 3) : 7.787 * o2 + 16 / 116))];
        }, $p.hsl.rgb = function(e2) {
          var t2, n2, r2, o2, i2, u2 = e2[0] / 360, s2 = e2[1] / 100, a2 = e2[2] / 100;
          if (s2 === 0)
            return [i2 = 255 * a2, i2, i2];
          t2 = 2 * a2 - (n2 = a2 < 0.5 ? a2 * (1 + s2) : a2 + s2 - a2 * s2), o2 = [0, 0, 0];
          for (var c2 = 0; c2 < 3; c2++)
            (r2 = u2 + 1 / 3 * -(c2 - 1)) < 0 && r2++, r2 > 1 && r2--, i2 = 6 * r2 < 1 ? t2 + 6 * (n2 - t2) * r2 : 2 * r2 < 1 ? n2 : 3 * r2 < 2 ? t2 + (n2 - t2) * (2 / 3 - r2) * 6 : t2, o2[c2] = 255 * i2;
          return o2;
        }, $p.hsl.hsv = function(e2) {
          var t2 = e2[0], n2 = e2[1] / 100, r2 = e2[2] / 100, o2 = n2, i2 = Math.max(r2, 0.01);
          return n2 *= (r2 *= 2) <= 1 ? r2 : 2 - r2, o2 *= i2 <= 1 ? i2 : 2 - i2, [t2, 100 * (r2 === 0 ? 2 * o2 / (i2 + o2) : 2 * n2 / (r2 + n2)), 100 * ((r2 + n2) / 2)];
        }, $p.hsv.rgb = function(e2) {
          var t2 = e2[0] / 60, n2 = e2[1] / 100, r2 = e2[2] / 100, o2 = Math.floor(t2) % 6, i2 = t2 - Math.floor(t2), u2 = 255 * r2 * (1 - n2), s2 = 255 * r2 * (1 - n2 * i2), a2 = 255 * r2 * (1 - n2 * (1 - i2));
          switch (r2 *= 255, o2) {
            case 0:
              return [r2, a2, u2];
            case 1:
              return [s2, r2, u2];
            case 2:
              return [u2, r2, a2];
            case 3:
              return [u2, s2, r2];
            case 4:
              return [a2, u2, r2];
            case 5:
              return [r2, u2, s2];
          }
        }, $p.hsv.hsl = function(e2) {
          var t2, n2, r2, o2 = e2[0], i2 = e2[1] / 100, u2 = e2[2] / 100, s2 = Math.max(u2, 0.01);
          return r2 = (2 - i2) * u2, n2 = i2 * s2, [o2, 100 * (n2 = (n2 /= (t2 = (2 - i2) * s2) <= 1 ? t2 : 2 - t2) || 0), 100 * (r2 /= 2)];
        }, $p.hwb.rgb = function(e2) {
          var t2, n2, r2, o2, i2, u2, s2, a2 = e2[0] / 360, c2 = e2[1] / 100, l3 = e2[2] / 100, p2 = c2 + l3;
          switch (p2 > 1 && (c2 /= p2, l3 /= p2), r2 = 6 * a2 - (t2 = Math.floor(6 * a2)), (1 & t2) != 0 && (r2 = 1 - r2), o2 = c2 + r2 * ((n2 = 1 - l3) - c2), t2) {
            default:
            case 6:
            case 0:
              i2 = n2, u2 = o2, s2 = c2;
              break;
            case 1:
              i2 = o2, u2 = n2, s2 = c2;
              break;
            case 2:
              i2 = c2, u2 = n2, s2 = o2;
              break;
            case 3:
              i2 = c2, u2 = o2, s2 = n2;
              break;
            case 4:
              i2 = o2, u2 = c2, s2 = n2;
              break;
            case 5:
              i2 = n2, u2 = c2, s2 = o2;
          }
          return [255 * i2, 255 * u2, 255 * s2];
        }, $p.cmyk.rgb = function(e2) {
          var t2 = e2[0] / 100, n2 = e2[1] / 100, r2 = e2[2] / 100, o2 = e2[3] / 100;
          return [255 * (1 - Math.min(1, t2 * (1 - o2) + o2)), 255 * (1 - Math.min(1, n2 * (1 - o2) + o2)), 255 * (1 - Math.min(1, r2 * (1 - o2) + o2))];
        }, $p.xyz.rgb = function(e2) {
          var t2, n2, r2, o2 = e2[0] / 100, i2 = e2[1] / 100, u2 = e2[2] / 100;
          return n2 = -0.9689 * o2 + 1.8758 * i2 + 0.0415 * u2, r2 = 0.0557 * o2 + -0.204 * i2 + 1.057 * u2, t2 = (t2 = 3.2406 * o2 + -1.5372 * i2 + -0.4986 * u2) > 31308e-7 ? 1.055 * Math.pow(t2, 1 / 2.4) - 0.055 : 12.92 * t2, n2 = n2 > 31308e-7 ? 1.055 * Math.pow(n2, 1 / 2.4) - 0.055 : 12.92 * n2, r2 = r2 > 31308e-7 ? 1.055 * Math.pow(r2, 1 / 2.4) - 0.055 : 12.92 * r2, [255 * (t2 = Math.min(Math.max(0, t2), 1)), 255 * (n2 = Math.min(Math.max(0, n2), 1)), 255 * (r2 = Math.min(Math.max(0, r2), 1))];
        }, $p.xyz.lab = function(e2) {
          var t2 = e2[0], n2 = e2[1], r2 = e2[2];
          return n2 /= 100, r2 /= 108.883, t2 = (t2 /= 95.047) > 8856e-6 ? Math.pow(t2, 1 / 3) : 7.787 * t2 + 16 / 116, [116 * (n2 = n2 > 8856e-6 ? Math.pow(n2, 1 / 3) : 7.787 * n2 + 16 / 116) - 16, 500 * (t2 - n2), 200 * (n2 - (r2 = r2 > 8856e-6 ? Math.pow(r2, 1 / 3) : 7.787 * r2 + 16 / 116))];
        }, $p.lab.xyz = function(e2) {
          var t2, n2, r2, o2 = e2[0];
          t2 = e2[1] / 500 + (n2 = (o2 + 16) / 116), r2 = n2 - e2[2] / 200;
          var i2 = Math.pow(n2, 3), u2 = Math.pow(t2, 3), s2 = Math.pow(r2, 3);
          return n2 = i2 > 8856e-6 ? i2 : (n2 - 16 / 116) / 7.787, t2 = u2 > 8856e-6 ? u2 : (t2 - 16 / 116) / 7.787, r2 = s2 > 8856e-6 ? s2 : (r2 - 16 / 116) / 7.787, [t2 *= 95.047, n2 *= 100, r2 *= 108.883];
        }, $p.lab.lch = function(e2) {
          var t2, n2 = e2[0], r2 = e2[1], o2 = e2[2];
          return (t2 = 360 * Math.atan2(o2, r2) / 2 / Math.PI) < 0 && (t2 += 360), [n2, Math.sqrt(r2 * r2 + o2 * o2), t2];
        }, $p.lch.lab = function(e2) {
          var t2, n2 = e2[0], r2 = e2[1];
          return t2 = e2[2] / 360 * 2 * Math.PI, [n2, r2 * Math.cos(t2), r2 * Math.sin(t2)];
        }, $p.rgb.ansi16 = function(e2) {
          var t2 = e2[0], n2 = e2[1], r2 = e2[2], o2 = 1 in arguments ? arguments[1] : $p.rgb.hsv(e2)[2];
          if ((o2 = Math.round(o2 / 50)) === 0)
            return 30;
          var i2 = 30 + (Math.round(r2 / 255) << 2 | Math.round(n2 / 255) << 1 | Math.round(t2 / 255));
          return o2 === 2 && (i2 += 60), i2;
        }, $p.hsv.ansi16 = function(e2) {
          return $p.rgb.ansi16($p.hsv.rgb(e2), e2[2]);
        }, $p.rgb.ansi256 = function(e2) {
          var t2 = e2[0], n2 = e2[1], r2 = e2[2];
          return t2 === n2 && n2 === r2 ? t2 < 8 ? 16 : t2 > 248 ? 231 : Math.round((t2 - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(t2 / 255 * 5) + 6 * Math.round(n2 / 255 * 5) + Math.round(r2 / 255 * 5);
        }, $p.ansi16.rgb = function(e2) {
          var t2 = e2 % 10;
          if (t2 === 0 || t2 === 7)
            return e2 > 50 && (t2 += 3.5), [t2 = t2 / 10.5 * 255, t2, t2];
          var n2 = 0.5 * (1 + ~~(e2 > 50));
          return [(1 & t2) * n2 * 255, (t2 >> 1 & 1) * n2 * 255, (t2 >> 2 & 1) * n2 * 255];
        }, $p.ansi256.rgb = function(e2) {
          if (e2 >= 232) {
            var t2 = 10 * (e2 - 232) + 8;
            return [t2, t2, t2];
          }
          var n2;
          return e2 -= 16, [Math.floor(e2 / 36) / 5 * 255, Math.floor((n2 = e2 % 36) / 6) / 5 * 255, n2 % 6 / 5 * 255];
        }, $p.rgb.hex = function(e2) {
          var t2 = (((255 & Math.round(e2[0])) << 16) + ((255 & Math.round(e2[1])) << 8) + (255 & Math.round(e2[2]))).toString(16).toUpperCase();
          return "000000".substring(t2.length) + t2;
        }, $p.hex.rgb = function(e2) {
          var t2 = e2.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
          if (!t2)
            return [0, 0, 0];
          var n2 = t2[0];
          t2[0].length === 3 && (n2 = n2.split("").map(function(e3) {
            return e3 + e3;
          }).join(""));
          var r2 = parseInt(n2, 16);
          return [r2 >> 16 & 255, r2 >> 8 & 255, 255 & r2];
        }, $p.rgb.hcg = function(e2) {
          var t2, n2 = e2[0] / 255, r2 = e2[1] / 255, o2 = e2[2] / 255, i2 = Math.max(Math.max(n2, r2), o2), u2 = Math.min(Math.min(n2, r2), o2), s2 = i2 - u2;
          return t2 = s2 <= 0 ? 0 : i2 === n2 ? (r2 - o2) / s2 % 6 : i2 === r2 ? 2 + (o2 - n2) / s2 : 4 + (n2 - r2) / s2 + 4, t2 /= 6, [360 * (t2 %= 1), 100 * s2, 100 * (s2 < 1 ? u2 / (1 - s2) : 0)];
        }, $p.hsl.hcg = function(e2) {
          var t2 = e2[1] / 100, n2 = e2[2] / 100, r2 = 1, o2 = 0;
          return (r2 = n2 < 0.5 ? 2 * t2 * n2 : 2 * t2 * (1 - n2)) < 1 && (o2 = (n2 - 0.5 * r2) / (1 - r2)), [e2[0], 100 * r2, 100 * o2];
        }, $p.hsv.hcg = function(e2) {
          var t2 = e2[1] / 100, n2 = e2[2] / 100, r2 = t2 * n2, o2 = 0;
          return r2 < 1 && (o2 = (n2 - r2) / (1 - r2)), [e2[0], 100 * r2, 100 * o2];
        }, $p.hcg.rgb = function(e2) {
          var t2 = e2[0] / 360, n2 = e2[1] / 100, r2 = e2[2] / 100;
          if (n2 === 0)
            return [255 * r2, 255 * r2, 255 * r2];
          var o2, i2 = [0, 0, 0], u2 = t2 % 1 * 6, s2 = u2 % 1, a2 = 1 - s2;
          switch (Math.floor(u2)) {
            case 0:
              i2[0] = 1, i2[1] = s2, i2[2] = 0;
              break;
            case 1:
              i2[0] = a2, i2[1] = 1, i2[2] = 0;
              break;
            case 2:
              i2[0] = 0, i2[1] = 1, i2[2] = s2;
              break;
            case 3:
              i2[0] = 0, i2[1] = a2, i2[2] = 1;
              break;
            case 4:
              i2[0] = s2, i2[1] = 0, i2[2] = 1;
              break;
            default:
              i2[0] = 1, i2[1] = 0, i2[2] = a2;
          }
          return o2 = (1 - n2) * r2, [255 * (n2 * i2[0] + o2), 255 * (n2 * i2[1] + o2), 255 * (n2 * i2[2] + o2)];
        }, $p.hcg.hsv = function(e2) {
          var t2 = e2[1] / 100, n2 = t2 + e2[2] / 100 * (1 - t2), r2 = 0;
          return n2 > 0 && (r2 = t2 / n2), [e2[0], 100 * r2, 100 * n2];
        }, $p.hcg.hsl = function(e2) {
          var t2 = e2[1] / 100, n2 = e2[2] / 100 * (1 - t2) + 0.5 * t2, r2 = 0;
          return n2 > 0 && n2 < 0.5 ? r2 = t2 / (2 * n2) : n2 >= 0.5 && n2 < 1 && (r2 = t2 / (2 * (1 - n2))), [e2[0], 100 * r2, 100 * n2];
        }, $p.hcg.hwb = function(e2) {
          var t2 = e2[1] / 100, n2 = t2 + e2[2] / 100 * (1 - t2);
          return [e2[0], 100 * (n2 - t2), 100 * (1 - n2)];
        }, $p.hwb.hcg = function(e2) {
          var t2 = e2[1] / 100, n2 = 1 - e2[2] / 100, r2 = n2 - t2, o2 = 0;
          return r2 < 1 && (o2 = (n2 - r2) / (1 - r2)), [e2[0], 100 * r2, 100 * o2];
        }, $p.apple.rgb = function(e2) {
          return [e2[0] / 65535 * 255, e2[1] / 65535 * 255, e2[2] / 65535 * 255];
        }, $p.rgb.apple = function(e2) {
          return [e2[0] / 255 * 65535, e2[1] / 255 * 65535, e2[2] / 255 * 65535];
        }, $p.gray.rgb = function(e2) {
          return [e2[0] / 100 * 255, e2[0] / 100 * 255, e2[0] / 100 * 255];
        }, $p.gray.hsl = $p.gray.hsv = function(e2) {
          return [0, 0, e2[0]];
        }, $p.gray.hwb = function(e2) {
          return [0, 100, e2[0]];
        }, $p.gray.cmyk = function(e2) {
          return [0, 0, 0, e2[0]];
        }, $p.gray.lab = function(e2) {
          return [e2[0], 0, 0];
        }, $p.gray.hex = function(e2) {
          var t2 = 255 & Math.round(e2[0] / 100 * 255), n2 = ((t2 << 16) + (t2 << 8) + t2).toString(16).toUpperCase();
          return "000000".substring(n2.length) + n2;
        }, $p.rgb.gray = function(e2) {
          return [(e2[0] + e2[1] + e2[2]) / 3 / 255 * 100];
        };
        var zp = _p.exports;
        function Gp(e2) {
          var t2 = function() {
            for (var e3 = {}, t3 = Object.keys(zp), n3 = t3.length, r3 = 0; r3 < n3; r3++)
              e3[t3[r3]] = { distance: -1, parent: null };
            return e3;
          }(), n2 = [e2];
          for (t2[e2].distance = 0; n2.length; )
            for (var r2 = n2.pop(), o2 = Object.keys(zp[r2]), i2 = o2.length, u2 = 0; u2 < i2; u2++) {
              var s2 = o2[u2], a2 = t2[s2];
              a2.distance === -1 && (a2.distance = t2[r2].distance + 1, a2.parent = r2, n2.unshift(s2));
            }
          return t2;
        }
        function Hp(e2, t2) {
          return function(n2) {
            return t2(e2(n2));
          };
        }
        function Jp(e2, t2) {
          for (var n2 = [t2[e2].parent, e2], r2 = zp[t2[e2].parent][e2], o2 = t2[e2].parent; t2[o2].parent; )
            n2.unshift(t2[o2].parent), r2 = Hp(zp[t2[o2].parent][o2], r2), o2 = t2[o2].parent;
          return r2.conversion = n2, r2;
        }
        var Xp = _p.exports, Yp = function(e2) {
          for (var t2 = Gp(e2), n2 = {}, r2 = Object.keys(t2), o2 = r2.length, i2 = 0; i2 < o2; i2++) {
            var u2 = r2[i2];
            t2[u2].parent !== null && (n2[u2] = Jp(u2, t2));
          }
          return n2;
        }, Kp = {};
        Object.keys(Xp).forEach(function(e2) {
          Kp[e2] = {}, Object.defineProperty(Kp[e2], "channels", { value: Xp[e2].channels }), Object.defineProperty(Kp[e2], "labels", { value: Xp[e2].labels });
          var t2 = Yp(e2);
          Object.keys(t2).forEach(function(n2) {
            var r2 = t2[n2];
            Kp[e2][n2] = function(e3) {
              var t3 = function(t4) {
                if (t4 == null)
                  return t4;
                arguments.length > 1 && (t4 = Array.prototype.slice.call(arguments));
                var n3 = e3(t4);
                if (typeof n3 == "object")
                  for (var r3 = n3.length, o2 = 0; o2 < r3; o2++)
                    n3[o2] = Math.round(n3[o2]);
                return n3;
              };
              return "conversion" in e3 && (t3.conversion = e3.conversion), t3;
            }(r2), Kp[e2][n2].raw = function(e3) {
              var t3 = function(t4) {
                return t4 == null ? t4 : (arguments.length > 1 && (t4 = Array.prototype.slice.call(arguments)), e3(t4));
              };
              return "conversion" in e3 && (t3.conversion = e3.conversion), t3;
            }(r2);
          });
        });
        var Qp, Zp = Kp;
        function ef() {
          if (Qp === void 0) {
            var e2 = new ArrayBuffer(2), t2 = new Uint8Array(e2), n2 = new Uint16Array(e2);
            if (t2[0] = 1, t2[1] = 2, n2[0] === 258)
              Qp = "BE";
            else {
              if (n2[0] !== 513)
                throw new Error("unable to figure out endianess");
              Qp = "LE";
            }
          }
          return Qp;
        }
        function tf() {
          return Ns.location !== void 0 ? Ns.location.hostname : "";
        }
        function nf() {
          return [];
        }
        function rf() {
          return 0;
        }
        function of() {
          return Number.MAX_VALUE;
        }
        function uf() {
          return Number.MAX_VALUE;
        }
        function sf() {
          return [];
        }
        function af() {
          return "Browser";
        }
        function cf() {
          return Ns.navigator !== void 0 ? Ns.navigator.appVersion : "";
        }
        function lf() {
        }
        function pf() {
        }
        function ff() {
          return "javascript";
        }
        function df() {
          return "browser";
        }
        function hf() {
          return "/tmp";
        }
        !function(e2) {
          const t2 = Zp, n2 = (e3, n3) => function() {
            const r3 = e3.apply(t2, arguments);
            return "\x1B[".concat(r3 + n3, "m");
          }, r2 = (e3, n3) => function() {
            const r3 = e3.apply(t2, arguments);
            return "\x1B[".concat(38 + n3, ";5;").concat(r3, "m");
          }, o2 = (e3, n3) => function() {
            const r3 = e3.apply(t2, arguments);
            return "\x1B[".concat(38 + n3, ";2;").concat(r3[0], ";").concat(r3[1], ";").concat(r3[2], "m");
          };
          Object.defineProperty(e2, "exports", { enumerable: true, get: function() {
            const e3 = /* @__PURE__ */ new Map(), i2 = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], gray: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
            i2.color.grey = i2.color.gray;
            for (const t3 of Object.keys(i2)) {
              const n3 = i2[t3];
              for (const t4 of Object.keys(n3)) {
                const r3 = n3[t4];
                i2[t4] = { open: "\x1B[".concat(r3[0], "m"), close: "\x1B[".concat(r3[1], "m") }, n3[t4] = i2[t4], e3.set(r3[0], r3[1]);
              }
              Object.defineProperty(i2, t3, { value: n3, enumerable: false }), Object.defineProperty(i2, "codes", { value: e3, enumerable: false });
            }
            const u2 = (e4) => e4, s2 = (e4, t3, n3) => [e4, t3, n3];
            i2.color.close = "\x1B[39m", i2.bgColor.close = "\x1B[49m", i2.color.ansi = { ansi: n2(u2, 0) }, i2.color.ansi256 = { ansi256: r2(u2, 0) }, i2.color.ansi16m = { rgb: o2(s2, 0) }, i2.bgColor.ansi = { ansi: n2(u2, 10) }, i2.bgColor.ansi256 = { ansi256: r2(u2, 10) }, i2.bgColor.ansi16m = { rgb: o2(s2, 10) };
            for (let e4 of Object.keys(t2)) {
              if (typeof t2[e4] != "object")
                continue;
              const u3 = t2[e4];
              e4 === "ansi16" && (e4 = "ansi"), "ansi16" in u3 && (i2.color.ansi[e4] = n2(u3.ansi16, 0), i2.bgColor.ansi[e4] = n2(u3.ansi16, 10)), "ansi256" in u3 && (i2.color.ansi256[e4] = r2(u3.ansi256, 0), i2.bgColor.ansi256[e4] = r2(u3.ansi256, 10)), "rgb" in u3 && (i2.color.ansi16m[e4] = o2(u3.rgb, 0), i2.bgColor.ansi16m[e4] = o2(u3.rgb, 10));
            }
            return i2;
          } });
        }(jp);
        var gf = hf, mf = { EOL: "\n", arch: ff, platform: df, tmpdir: gf, tmpDir: hf, networkInterfaces: lf, getNetworkInterfaces: pf, release: cf, type: af, cpus: sf, totalmem: uf, freemem: of, uptime: rf, loadavg: nf, hostname: tf, endianness: ef }, yf = t(Object.freeze({ __proto__: null, endianness: ef, hostname: tf, loadavg: nf, uptime: rf, freemem: of, totalmem: uf, cpus: sf, type: af, release: cf, networkInterfaces: lf, getNetworkInterfaces: pf, arch: ff, platform: df, tmpDir: hf, tmpdir: gf, EOL: "\n", default: mf }));
        const Df = yf, Ef = (e2, t2) => {
          t2 = t2 || ta.argv;
          const n2 = e2.startsWith("-") ? "" : e2.length === 1 ? "-" : "--", r2 = t2.indexOf(n2 + e2), o2 = t2.indexOf("--");
          return r2 !== -1 && (o2 === -1 || r2 < o2);
        }, Cf = ta.env;
        let bf;
        function vf(e2) {
          const t2 = function(e3) {
            if (bf === false)
              return 0;
            if (Ef("color=16m") || Ef("color=full") || Ef("color=truecolor"))
              return 3;
            if (Ef("color=256"))
              return 2;
            if (e3 && !e3.isTTY && bf !== true)
              return 0;
            const t3 = bf ? 1 : 0;
            if (ta.platform === "win32") {
              const e4 = Df.release().split(".");
              return Number(ta.versions.node.split(".")[0]) >= 8 && Number(e4[0]) >= 10 && Number(e4[2]) >= 10586 ? Number(e4[2]) >= 14931 ? 3 : 2 : 1;
            }
            if ("CI" in Cf)
              return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some((e4) => e4 in Cf) || Cf.CI_NAME === "codeship" ? 1 : t3;
            if ("TEAMCITY_VERSION" in Cf)
              return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Cf.TEAMCITY_VERSION) ? 1 : 0;
            if (Cf.COLORTERM === "truecolor")
              return 3;
            if ("TERM_PROGRAM" in Cf) {
              const e4 = parseInt((Cf.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
              switch (Cf.TERM_PROGRAM) {
                case "iTerm.app":
                  return e4 >= 3 ? 3 : 2;
                case "Apple_Terminal":
                  return 2;
              }
            }
            return /-256(color)?$/i.test(Cf.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Cf.TERM) || "COLORTERM" in Cf ? 1 : (Cf.TERM, t3);
          }(e2);
          return function(e3) {
            return e3 !== 0 && { level: e3, hasBasic: true, has256: e3 >= 2, has16m: e3 >= 3 };
          }(t2);
        }
        Ef("no-color") || Ef("no-colors") || Ef("color=false") ? bf = false : (Ef("color") || Ef("colors") || Ef("color=true") || Ef("color=always")) && (bf = true), "FORCE_COLOR" in Cf && (bf = Cf.FORCE_COLOR.length === 0 || parseInt(Cf.FORCE_COLOR, 10) !== 0);
        var Af = { supportsColor: vf, stdout: vf(ta.stdout), stderr: vf(ta.stderr) };
        const Ff = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi, xf = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g, Sf = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/, wf = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi, Tf = /* @__PURE__ */ new Map([["n", "\n"], ["r", "\r"], ["t", "	"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", "\x1B"], ["a", "\x07"]]);
        function Bf(e2) {
          return e2[0] === "u" && e2.length === 5 || e2[0] === "x" && e2.length === 3 ? String.fromCharCode(parseInt(e2.slice(1), 16)) : Tf.get(e2) || e2;
        }
        function Nf(e2, t2) {
          const n2 = [], r2 = t2.trim().split(/\s*,\s*/g);
          let o2;
          for (const t3 of r2)
            if (isNaN(t3)) {
              if (!(o2 = t3.match(Sf)))
                throw new Error("Invalid Chalk template style argument: ".concat(t3, " (in style '").concat(e2, "')"));
              n2.push(o2[2].replace(wf, (e3, t4, n3) => t4 ? Bf(t4) : n3));
            } else
              n2.push(Number(t3));
          return n2;
        }
        function kf(e2) {
          xf.lastIndex = 0;
          const t2 = [];
          let n2;
          for (; (n2 = xf.exec(e2)) !== null; ) {
            const e3 = n2[1];
            if (n2[2]) {
              const r2 = Nf(e3, n2[2]);
              t2.push([e3].concat(r2));
            } else
              t2.push([e3]);
          }
          return t2;
        }
        function Pf(e2, t2) {
          const n2 = {};
          for (const e3 of t2)
            for (const t3 of e3.styles)
              n2[t3[0]] = e3.inverse ? null : t3.slice(1);
          let r2 = e2;
          for (const e3 of Object.keys(n2))
            if (Array.isArray(n2[e3])) {
              if (!(e3 in r2))
                throw new Error("Unknown Chalk style: ".concat(e3));
              r2 = n2[e3].length > 0 ? r2[e3].apply(r2, n2[e3]) : r2[e3];
            }
          return r2;
        }
        var Of = (e2, t2) => {
          const n2 = [], r2 = [];
          let o2 = [];
          if (t2.replace(Ff, (t3, i2, u2, s2, a2, c2) => {
            if (i2)
              o2.push(Bf(i2));
            else if (s2) {
              const t4 = o2.join("");
              o2 = [], r2.push(n2.length === 0 ? t4 : Pf(e2, n2)(t4)), n2.push({ inverse: u2, styles: kf(s2) });
            } else if (a2) {
              if (n2.length === 0)
                throw new Error("Found extraneous } in Chalk template literal");
              r2.push(Pf(e2, n2)(o2.join(""))), o2 = [], n2.pop();
            } else
              o2.push(c2);
          }), r2.push(o2.join("")), n2.length > 0) {
            const e3 = "Chalk template literal is missing ".concat(n2.length, " closing bracket").concat(n2.length === 1 ? "" : "s", " (`}`)");
            throw new Error(e3);
          }
          return r2.join("");
        };
        !function(e2) {
          const t2 = Lp, n2 = jp.exports, r2 = Af.stdout, o2 = Of, i2 = ta.platform === "win32" && !(ta.env.TERM || "").toLowerCase().startsWith("xterm"), u2 = ["ansi", "ansi", "ansi256", "ansi16m"], s2 = /* @__PURE__ */ new Set(["gray"]), a2 = /* @__PURE__ */ Object.create(null);
          function c2(e3, t3) {
            t3 = t3 || {};
            const n3 = r2 ? r2.level : 0;
            e3.level = t3.level === void 0 ? n3 : t3.level, e3.enabled = "enabled" in t3 ? t3.enabled : e3.level > 0;
          }
          function l3(e3) {
            if (!this || !(this instanceof l3) || this.template) {
              const t3 = {};
              return c2(t3, e3), t3.template = function() {
                const e4 = [].slice.call(arguments);
                return h2.apply(null, [t3.template].concat(e4));
              }, Object.setPrototypeOf(t3, l3.prototype), Object.setPrototypeOf(t3.template, t3), t3.template.constructor = l3, t3.template;
            }
            c2(this, e3);
          }
          i2 && (n2.blue.open = "\x1B[94m");
          for (const e3 of Object.keys(n2))
            n2[e3].closeRe = new RegExp(t2(n2[e3].close), "g"), a2[e3] = { get() {
              const t3 = n2[e3];
              return f2.call(this, this._styles ? this._styles.concat(t3) : [t3], this._empty, e3);
            } };
          a2.visible = { get() {
            return f2.call(this, this._styles || [], true, "visible");
          } }, n2.color.closeRe = new RegExp(t2(n2.color.close), "g");
          for (const e3 of Object.keys(n2.color.ansi))
            s2.has(e3) || (a2[e3] = { get() {
              const t3 = this.level;
              return function() {
                const r3 = n2.color[u2[t3]][e3].apply(null, arguments), o3 = { open: r3, close: n2.color.close, closeRe: n2.color.closeRe };
                return f2.call(this, this._styles ? this._styles.concat(o3) : [o3], this._empty, e3);
              };
            } });
          n2.bgColor.closeRe = new RegExp(t2(n2.bgColor.close), "g");
          for (const e3 of Object.keys(n2.bgColor.ansi)) {
            if (s2.has(e3))
              continue;
            a2["bg" + e3[0].toUpperCase() + e3.slice(1)] = { get() {
              const t3 = this.level;
              return function() {
                const r3 = n2.bgColor[u2[t3]][e3].apply(null, arguments), o3 = { open: r3, close: n2.bgColor.close, closeRe: n2.bgColor.closeRe };
                return f2.call(this, this._styles ? this._styles.concat(o3) : [o3], this._empty, e3);
              };
            } };
          }
          const p2 = Object.defineProperties(() => {
          }, a2);
          function f2(e3, t3, n3) {
            const r3 = function() {
              return d2.apply(r3, arguments);
            };
            r3._styles = e3, r3._empty = t3;
            const o3 = this;
            return Object.defineProperty(r3, "level", { enumerable: true, get: () => o3.level, set(e4) {
              o3.level = e4;
            } }), Object.defineProperty(r3, "enabled", { enumerable: true, get: () => o3.enabled, set(e4) {
              o3.enabled = e4;
            } }), r3.hasGrey = this.hasGrey || n3 === "gray" || n3 === "grey", r3.__proto__ = p2, r3;
          }
          function d2() {
            const e3 = arguments, t3 = e3.length;
            let r3 = String(arguments[0]);
            if (t3 === 0)
              return "";
            if (t3 > 1)
              for (let n3 = 1; n3 < t3; n3++)
                r3 += " " + e3[n3];
            if (!this.enabled || this.level <= 0 || !r3)
              return this._empty ? "" : r3;
            const o3 = n2.dim.open;
            i2 && this.hasGrey && (n2.dim.open = "");
            for (const e4 of this._styles.slice().reverse())
              r3 = e4.open + r3.replace(e4.closeRe, e4.open) + e4.close, r3 = r3.replace(/\r?\n/g, "".concat(e4.close, "$&").concat(e4.open));
            return n2.dim.open = o3, r3;
          }
          function h2(e3, t3) {
            if (!Array.isArray(t3))
              return [].slice.call(arguments, 1).join(" ");
            const n3 = [].slice.call(arguments, 2), r3 = [t3.raw[0]];
            for (let e4 = 1; e4 < t3.length; e4++)
              r3.push(String(n3[e4 - 1]).replace(/[{}\\]/g, "\\$&")), r3.push(String(t3.raw[e4]));
            return o2(e3, r3.join(""));
          }
          Object.defineProperties(l3.prototype, a2), e2.exports = l3(), e2.exports.supportsColor = r2, e2.exports.default = e2.exports;
        }(Op), Object.defineProperty(Pp, "__esModule", { value: true });
        const If = Op.exports;
        Pp.commonDeprecatedHandler = (e2, t2, n2) => {
          let { descriptor: r2 } = n2;
          const o2 = ["".concat(If.default.yellow(typeof e2 == "string" ? r2.key(e2) : r2.pair(e2)), " is deprecated")];
          return t2 && o2.push("we now treat it as ".concat(If.default.blue(typeof t2 == "string" ? r2.key(t2) : r2.pair(t2)))), o2.join("; ") + ".";
        }, function(e2) {
          Object.defineProperty(e2, "__esModule", { value: true });
          wp.__exportStar(Pp, e2);
        }(kp);
        var Lf = {}, jf = {};
        Object.defineProperty(jf, "__esModule", { value: true });
        const _f = Op.exports;
        jf.commonInvalidHandler = (e2, t2, n2) => ["Invalid ".concat(_f.default.red(n2.descriptor.key(e2)), " value."), "Expected ".concat(_f.default.blue(n2.schemas[e2].expected(n2)), ","), "but received ".concat(_f.default.red(n2.descriptor.value(t2)), ".")].join(" "), function(e2) {
          Object.defineProperty(e2, "__esModule", { value: true });
          wp.__exportStar(jf, e2);
        }(Lf);
        var Mf = {}, Rf = {}, Vf = [], $f = [];
        Object.defineProperty(Rf, "__esModule", { value: true });
        const Wf = Op.exports, qf = function(e2, t2) {
          if (e2 === t2)
            return 0;
          var n2 = e2;
          e2.length > t2.length && (e2 = t2, t2 = n2);
          var r2 = e2.length, o2 = t2.length;
          if (r2 === 0)
            return o2;
          if (o2 === 0)
            return r2;
          for (; r2 > 0 && e2.charCodeAt(~-r2) === t2.charCodeAt(~-o2); )
            r2--, o2--;
          if (r2 === 0)
            return o2;
          for (var i2, u2, s2, a2, c2 = 0; c2 < r2 && e2.charCodeAt(c2) === t2.charCodeAt(c2); )
            c2++;
          if (o2 -= c2, (r2 -= c2) === 0)
            return o2;
          for (var l3 = 0, p2 = 0; l3 < r2; )
            $f[c2 + l3] = e2.charCodeAt(c2 + l3), Vf[l3] = ++l3;
          for (; p2 < o2; )
            for (i2 = t2.charCodeAt(c2 + p2), s2 = p2++, u2 = p2, l3 = 0; l3 < r2; l3++)
              a2 = i2 === $f[c2 + l3] ? s2 : s2 + 1, s2 = Vf[l3], u2 = Vf[l3] = s2 > u2 ? a2 > u2 ? u2 + 1 : a2 : a2 > s2 ? s2 + 1 : a2;
          return u2;
        };
        Rf.levenUnknownHandler = (e2, t2, n2) => {
          let { descriptor: r2, logger: o2, schemas: i2 } = n2;
          const u2 = ["Ignored unknown option ".concat(Wf.default.yellow(r2.pair({ key: e2, value: t2 })), ".")], s2 = Object.keys(i2).sort().find((t3) => qf(e2, t3) < 3);
          s2 && u2.push("Did you mean ".concat(Wf.default.blue(r2.key(s2)), "?")), o2.warn(u2.join(" "));
        }, function(e2) {
          Object.defineProperty(e2, "__esModule", { value: true });
          wp.__exportStar(Rf, e2);
        }(Mf), function(e2) {
          Object.defineProperty(e2, "__esModule", { value: true });
          const t2 = wp;
          t2.__exportStar(kp, e2), t2.__exportStar(Lf, e2), t2.__exportStar(Mf, e2);
        }(Np);
        var Uf = {}, zf = {}, Gf = {};
        Object.defineProperty(Gf, "__esModule", { value: true });
        const Hf = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
        function Jf(e2, t2) {
          const n2 = new e2(t2), r2 = Object.create(n2);
          for (const e3 of Hf)
            e3 in t2 && (r2[e3] = Yf(t2[e3], n2, Xf.prototype[e3].length));
          return r2;
        }
        Gf.createSchema = Jf;
        class Xf {
          constructor(e2) {
            this.name = e2.name;
          }
          static create(e2) {
            return Jf(this, e2);
          }
          default(e2) {
          }
          expected(e2) {
            return "nothing";
          }
          validate(e2, t2) {
            return false;
          }
          deprecated(e2, t2) {
            return false;
          }
          forward(e2, t2) {
          }
          redirect(e2, t2) {
          }
          overlap(e2, t2, n2) {
            return e2;
          }
          preprocess(e2, t2) {
            return e2;
          }
          postprocess(e2, t2) {
            return e2;
          }
        }
        function Yf(e2, t2, n2) {
          return typeof e2 == "function" ? function() {
            for (var r2 = arguments.length, o2 = new Array(r2), i2 = 0; i2 < r2; i2++)
              o2[i2] = arguments[i2];
            return e2(...o2.slice(0, n2 - 1), t2, ...o2.slice(n2 - 1));
          } : () => e2;
        }
        Gf.Schema = Xf, Object.defineProperty(zf, "__esModule", { value: true });
        const Kf = Gf;
        class Qf extends Kf.Schema {
          constructor(e2) {
            super(e2), this._sourceName = e2.sourceName;
          }
          expected(e2) {
            return e2.schemas[this._sourceName].expected(e2);
          }
          validate(e2, t2) {
            return t2.schemas[this._sourceName].validate(e2, t2);
          }
          redirect(e2, t2) {
            return this._sourceName;
          }
        }
        zf.AliasSchema = Qf;
        var Zf = {};
        Object.defineProperty(Zf, "__esModule", { value: true });
        const ed = Gf;
        class td extends ed.Schema {
          expected() {
            return "anything";
          }
          validate() {
            return true;
          }
        }
        Zf.AnySchema = td;
        var nd = {};
        Object.defineProperty(nd, "__esModule", { value: true });
        const rd = wp, od = Gf;
        class id extends od.Schema {
          constructor(e2) {
            var { valueSchema: t2, name: n2 = t2.name } = e2, r2 = rd.__rest(e2, ["valueSchema", "name"]);
            super(Object.assign({}, r2, { name: n2 })), this._valueSchema = t2;
          }
          expected(e2) {
            return "an array of ".concat(this._valueSchema.expected(e2));
          }
          validate(e2, t2) {
            if (!Array.isArray(e2))
              return false;
            const n2 = [];
            for (const r2 of e2) {
              const e3 = t2.normalizeValidateResult(this._valueSchema.validate(r2, t2), r2);
              e3 !== true && n2.push(e3.value);
            }
            return n2.length === 0 || { value: n2 };
          }
          deprecated(e2, t2) {
            const n2 = [];
            for (const r2 of e2) {
              const e3 = t2.normalizeDeprecatedResult(this._valueSchema.deprecated(r2, t2), r2);
              e3 !== false && n2.push(...e3.map((e4) => {
                let { value: t3 } = e4;
                return { value: [t3] };
              }));
            }
            return n2;
          }
          forward(e2, t2) {
            const n2 = [];
            for (const r2 of e2) {
              const e3 = t2.normalizeForwardResult(this._valueSchema.forward(r2, t2), r2);
              n2.push(...e3.map(ud));
            }
            return n2;
          }
          redirect(e2, t2) {
            const n2 = [], r2 = [];
            for (const o2 of e2) {
              const e3 = t2.normalizeRedirectResult(this._valueSchema.redirect(o2, t2), o2);
              "remain" in e3 && n2.push(e3.remain), r2.push(...e3.redirect.map(ud));
            }
            return n2.length === 0 ? { redirect: r2 } : { redirect: r2, remain: n2 };
          }
          overlap(e2, t2) {
            return e2.concat(t2);
          }
        }
        function ud(e2) {
          let { from: t2, to: n2 } = e2;
          return { from: [t2], to: n2 };
        }
        nd.ArraySchema = id;
        var sd = {};
        Object.defineProperty(sd, "__esModule", { value: true });
        const ad = Gf;
        class cd extends ad.Schema {
          expected() {
            return "true or false";
          }
          validate(e2) {
            return typeof e2 == "boolean";
          }
        }
        sd.BooleanSchema = cd;
        var ld = {}, pd = {};
        function fd(e2, t2) {
          return typeof e2 == "string" || "key" in e2 ? { from: t2, to: e2 } : "from" in e2 ? { from: e2.from, to: e2.to } : { from: t2, to: e2.to };
        }
        function dd(e2, t2) {
          return e2 === void 0 ? [] : Array.isArray(e2) ? e2.map((e3) => fd(e3, t2)) : [fd(e2, t2)];
        }
        Object.defineProperty(pd, "__esModule", { value: true }), pd.recordFromArray = function(e2, t2) {
          const n2 = /* @__PURE__ */ Object.create(null);
          for (const r2 of e2) {
            const e3 = r2[t2];
            if (n2[e3])
              throw new Error("Duplicate ".concat(t2, " ").concat(JSON.stringify(e3)));
            n2[e3] = r2;
          }
          return n2;
        }, pd.mapFromArray = function(e2, t2) {
          const n2 = /* @__PURE__ */ new Map();
          for (const r2 of e2) {
            const e3 = r2[t2];
            if (n2.has(e3))
              throw new Error("Duplicate ".concat(t2, " ").concat(JSON.stringify(e3)));
            n2.set(e3, r2);
          }
          return n2;
        }, pd.createAutoChecklist = function() {
          const e2 = /* @__PURE__ */ Object.create(null);
          return (t2) => {
            const n2 = JSON.stringify(t2);
            return !!e2[n2] || (e2[n2] = true, false);
          };
        }, pd.partition = function(e2, t2) {
          const n2 = [], r2 = [];
          for (const o2 of e2)
            t2(o2) ? n2.push(o2) : r2.push(o2);
          return [n2, r2];
        }, pd.isInt = function(e2) {
          return e2 === Math.floor(e2);
        }, pd.comparePrimitive = function(e2, t2) {
          if (e2 === t2)
            return 0;
          const n2 = typeof e2, r2 = typeof t2, o2 = ["undefined", "object", "boolean", "number", "string"];
          return n2 !== r2 ? o2.indexOf(n2) - o2.indexOf(r2) : n2 !== "string" ? Number(e2) - Number(t2) : e2.localeCompare(t2);
        }, pd.normalizeDefaultResult = function(e2) {
          return e2 === void 0 ? {} : e2;
        }, pd.normalizeValidateResult = function(e2, t2) {
          return e2 === true || (e2 === false ? { value: t2 } : e2);
        }, pd.normalizeDeprecatedResult = function(e2, t2) {
          let n2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2];
          return e2 !== false && (e2 === true ? !!n2 || [{ value: t2 }] : "value" in e2 ? [e2] : e2.length !== 0 && e2);
        }, pd.normalizeTransferResult = fd, pd.normalizeForwardResult = dd, pd.normalizeRedirectResult = function(e2, t2) {
          const n2 = dd(typeof e2 == "object" && "redirect" in e2 ? e2.redirect : e2, t2);
          return n2.length === 0 ? { remain: t2, redirect: n2 } : typeof e2 == "object" && "remain" in e2 ? { remain: e2.remain, redirect: n2 } : { redirect: n2 };
        }, Object.defineProperty(ld, "__esModule", { value: true });
        const hd = Gf, gd = pd;
        class md extends hd.Schema {
          constructor(e2) {
            super(e2), this._choices = gd.mapFromArray(e2.choices.map((e3) => e3 && typeof e3 == "object" ? e3 : { value: e3 }), "value");
          }
          expected(e2) {
            let { descriptor: t2 } = e2;
            const n2 = Array.from(this._choices.keys()).map((e3) => this._choices.get(e3)).filter((e3) => !e3.deprecated).map((e3) => e3.value).sort(gd.comparePrimitive).map(t2.value), r2 = n2.slice(0, -2), o2 = n2.slice(-2);
            return r2.concat(o2.join(" or ")).join(", ");
          }
          validate(e2) {
            return this._choices.has(e2);
          }
          deprecated(e2) {
            const t2 = this._choices.get(e2);
            return !(!t2 || !t2.deprecated) && { value: e2 };
          }
          forward(e2) {
            const t2 = this._choices.get(e2);
            return t2 ? t2.forward : void 0;
          }
          redirect(e2) {
            const t2 = this._choices.get(e2);
            return t2 ? t2.redirect : void 0;
          }
        }
        ld.ChoiceSchema = md;
        var yd = {}, Dd = {};
        Object.defineProperty(Dd, "__esModule", { value: true });
        const Ed = Gf;
        class Cd extends Ed.Schema {
          expected() {
            return "a number";
          }
          validate(e2, t2) {
            return typeof e2 == "number";
          }
        }
        Dd.NumberSchema = Cd, Object.defineProperty(yd, "__esModule", { value: true });
        const bd = pd, vd = Dd;
        class Ad extends vd.NumberSchema {
          expected() {
            return "an integer";
          }
          validate(e2, t2) {
            return t2.normalizeValidateResult(super.validate(e2, t2), e2) === true && bd.isInt(e2);
          }
        }
        yd.IntegerSchema = Ad;
        var Fd = {};
        Object.defineProperty(Fd, "__esModule", { value: true });
        const xd = Gf;
        class Sd extends xd.Schema {
          expected() {
            return "a string";
          }
          validate(e2) {
            return typeof e2 == "string";
          }
        }
        Fd.StringSchema = Sd, function(e2) {
          Object.defineProperty(e2, "__esModule", { value: true });
          const t2 = wp;
          t2.__exportStar(zf, e2), t2.__exportStar(Zf, e2), t2.__exportStar(nd, e2), t2.__exportStar(sd, e2), t2.__exportStar(ld, e2), t2.__exportStar(yd, e2), t2.__exportStar(Dd, e2), t2.__exportStar(Fd, e2);
        }(Uf);
        var wd = {}, Td = {};
        Object.defineProperty(Td, "__esModule", { value: true });
        const Bd = Bp, Nd = Pp, kd = Lf, Pd = Rf;
        Td.defaultDescriptor = Bd.apiDescriptor, Td.defaultUnknownHandler = Pd.levenUnknownHandler, Td.defaultInvalidHandler = kd.commonInvalidHandler, Td.defaultDeprecatedHandler = Nd.commonDeprecatedHandler, Object.defineProperty(wd, "__esModule", { value: true });
        const Od = Td, Id = pd;
        wd.normalize = (e2, t2, n2) => new Ld(t2, n2).normalize(e2);
        class Ld {
          constructor(e2, t2) {
            const { logger: n2 = console, descriptor: r2 = Od.defaultDescriptor, unknown: o2 = Od.defaultUnknownHandler, invalid: i2 = Od.defaultInvalidHandler, deprecated: u2 = Od.defaultDeprecatedHandler } = t2 || {};
            this._utils = { descriptor: r2, logger: n2 || { warn: () => {
            } }, schemas: Id.recordFromArray(e2, "name"), normalizeDefaultResult: Id.normalizeDefaultResult, normalizeDeprecatedResult: Id.normalizeDeprecatedResult, normalizeForwardResult: Id.normalizeForwardResult, normalizeRedirectResult: Id.normalizeRedirectResult, normalizeValidateResult: Id.normalizeValidateResult }, this._unknownHandler = o2, this._invalidHandler = i2, this._deprecatedHandler = u2, this.cleanHistory();
          }
          cleanHistory() {
            this._hasDeprecationWarned = Id.createAutoChecklist();
          }
          normalize(e2) {
            const t2 = {}, n2 = [e2], r2 = () => {
              for (; n2.length !== 0; ) {
                const e3 = n2.shift(), r3 = this._applyNormalization(e3, t2);
                n2.push(...r3);
              }
            };
            r2();
            for (const e3 of Object.keys(this._utils.schemas)) {
              const r3 = this._utils.schemas[e3];
              if (!(e3 in t2)) {
                const t3 = Id.normalizeDefaultResult(r3.default(this._utils));
                "value" in t3 && n2.push({ [e3]: t3.value });
              }
            }
            r2();
            for (const e3 of Object.keys(this._utils.schemas)) {
              const n3 = this._utils.schemas[e3];
              e3 in t2 && (t2[e3] = n3.postprocess(t2[e3], this._utils));
            }
            return t2;
          }
          _applyNormalization(e2, t2) {
            const n2 = [], [r2, o2] = Id.partition(Object.keys(e2), (e3) => e3 in this._utils.schemas);
            for (const o3 of r2) {
              const r3 = this._utils.schemas[o3], i2 = r3.preprocess(e2[o3], this._utils), u2 = Id.normalizeValidateResult(r3.validate(i2, this._utils), i2);
              if (u2 !== true) {
                const { value: e3 } = u2, t3 = this._invalidHandler(o3, e3, this._utils);
                throw typeof t3 == "string" ? new Error(t3) : t3;
              }
              const s2 = (e3) => {
                let { from: t3, to: r4 } = e3;
                n2.push(typeof r4 == "string" ? { [r4]: t3 } : { [r4.key]: r4.value });
              }, a2 = (e3) => {
                let { value: t3, redirectTo: n3 } = e3;
                const u3 = Id.normalizeDeprecatedResult(r3.deprecated(t3, this._utils), i2, true);
                if (u3 !== false)
                  if (u3 === true)
                    this._hasDeprecationWarned(o3) || this._utils.logger.warn(this._deprecatedHandler(o3, n3, this._utils));
                  else
                    for (const { value: e4 } of u3) {
                      const t4 = { key: o3, value: e4 };
                      if (!this._hasDeprecationWarned(t4)) {
                        const r4 = typeof n3 == "string" ? { key: n3, value: e4 } : n3;
                        this._utils.logger.warn(this._deprecatedHandler(t4, r4, this._utils));
                      }
                    }
              };
              Id.normalizeForwardResult(r3.forward(i2, this._utils), i2).forEach(s2);
              const c2 = Id.normalizeRedirectResult(r3.redirect(i2, this._utils), i2);
              if (c2.redirect.forEach(s2), "remain" in c2) {
                const e3 = c2.remain;
                t2[o3] = o3 in t2 ? r3.overlap(t2[o3], e3, this._utils) : e3, a2({ value: e3 });
              }
              for (const { from: e3, to: t3 } of c2.redirect)
                a2({ value: e3, redirectTo: t3 });
            }
            for (const r3 of o2) {
              const o3 = e2[r3], i2 = this._unknownHandler(r3, o3, this._utils);
              if (i2)
                for (const e3 of Object.keys(i2)) {
                  const r4 = { [e3]: i2[e3] };
                  e3 in this._utils.schemas ? n2.push(r4) : Object.assign(t2, r4);
                }
            }
            return n2;
          }
        }
        wd.Normalizer = Ld, function(e2) {
          Object.defineProperty(e2, "__esModule", { value: true });
          const t2 = wp;
          t2.__exportStar(Tp, e2), t2.__exportStar(Np, e2), t2.__exportStar(Uf, e2), t2.__exportStar(wd, e2), t2.__exportStar(Gf, e2);
        }(bp);
        var jd = { exports: {} };
        const _d = [], Md = [], Rd = (e2, t2) => {
          if (e2 === t2)
            return 0;
          const n2 = e2;
          e2.length > t2.length && (e2 = t2, t2 = n2);
          let r2 = e2.length, o2 = t2.length;
          for (; r2 > 0 && e2.charCodeAt(~-r2) === t2.charCodeAt(~-o2); )
            r2--, o2--;
          let i2, u2, s2, a2, c2 = 0;
          for (; c2 < r2 && e2.charCodeAt(c2) === t2.charCodeAt(c2); )
            c2++;
          if (r2 -= c2, o2 -= c2, r2 === 0)
            return o2;
          let l3 = 0, p2 = 0;
          for (; l3 < r2; )
            Md[l3] = e2.charCodeAt(c2 + l3), _d[l3] = ++l3;
          for (; p2 < o2; )
            for (i2 = t2.charCodeAt(c2 + p2), s2 = p2++, u2 = p2, l3 = 0; l3 < r2; l3++)
              a2 = i2 === Md[l3] ? s2 : s2 + 1, s2 = _d[l3], u2 = _d[l3] = s2 > u2 ? a2 > u2 ? u2 + 1 : a2 : a2 > s2 ? s2 + 1 : a2;
          return u2;
        };
        jd.exports = Rd, jd.exports.default = Rd;
        var Vd = { exports: {} };
        const $d = { aliceblue: [240, 248, 255], antiquewhite: [250, 235, 215], aqua: [0, 255, 255], aquamarine: [127, 255, 212], azure: [240, 255, 255], beige: [245, 245, 220], bisque: [255, 228, 196], black: [0, 0, 0], blanchedalmond: [255, 235, 205], blue: [0, 0, 255], blueviolet: [138, 43, 226], brown: [165, 42, 42], burlywood: [222, 184, 135], cadetblue: [95, 158, 160], chartreuse: [127, 255, 0], chocolate: [210, 105, 30], coral: [255, 127, 80], cornflowerblue: [100, 149, 237], cornsilk: [255, 248, 220], crimson: [220, 20, 60], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgoldenrod: [184, 134, 11], darkgray: [169, 169, 169], darkgreen: [0, 100, 0], darkgrey: [169, 169, 169], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkseagreen: [143, 188, 143], darkslateblue: [72, 61, 139], darkslategray: [47, 79, 79], darkslategrey: [47, 79, 79], darkturquoise: [0, 206, 209], darkviolet: [148, 0, 211], deeppink: [255, 20, 147], deepskyblue: [0, 191, 255], dimgray: [105, 105, 105], dimgrey: [105, 105, 105], dodgerblue: [30, 144, 255], firebrick: [178, 34, 34], floralwhite: [255, 250, 240], forestgreen: [34, 139, 34], fuchsia: [255, 0, 255], gainsboro: [220, 220, 220], ghostwhite: [248, 248, 255], gold: [255, 215, 0], goldenrod: [218, 165, 32], gray: [128, 128, 128], green: [0, 128, 0], greenyellow: [173, 255, 47], grey: [128, 128, 128], honeydew: [240, 255, 240], hotpink: [255, 105, 180], indianred: [205, 92, 92], indigo: [75, 0, 130], ivory: [255, 255, 240], khaki: [240, 230, 140], lavender: [230, 230, 250], lavenderblush: [255, 240, 245], lawngreen: [124, 252, 0], lemonchiffon: [255, 250, 205], lightblue: [173, 216, 230], lightcoral: [240, 128, 128], lightcyan: [224, 255, 255], lightgoldenrodyellow: [250, 250, 210], lightgray: [211, 211, 211], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightsalmon: [255, 160, 122], lightseagreen: [32, 178, 170], lightskyblue: [135, 206, 250], lightslategray: [119, 136, 153], lightslategrey: [119, 136, 153], lightsteelblue: [176, 196, 222], lightyellow: [255, 255, 224], lime: [0, 255, 0], limegreen: [50, 205, 50], linen: [250, 240, 230], magenta: [255, 0, 255], maroon: [128, 0, 0], mediumaquamarine: [102, 205, 170], mediumblue: [0, 0, 205], mediumorchid: [186, 85, 211], mediumpurple: [147, 112, 219], mediumseagreen: [60, 179, 113], mediumslateblue: [123, 104, 238], mediumspringgreen: [0, 250, 154], mediumturquoise: [72, 209, 204], mediumvioletred: [199, 21, 133], midnightblue: [25, 25, 112], mintcream: [245, 255, 250], mistyrose: [255, 228, 225], moccasin: [255, 228, 181], navajowhite: [255, 222, 173], navy: [0, 0, 128], oldlace: [253, 245, 230], olive: [128, 128, 0], olivedrab: [107, 142, 35], orange: [255, 165, 0], orangered: [255, 69, 0], orchid: [218, 112, 214], palegoldenrod: [238, 232, 170], palegreen: [152, 251, 152], paleturquoise: [175, 238, 238], palevioletred: [219, 112, 147], papayawhip: [255, 239, 213], peachpuff: [255, 218, 185], peru: [205, 133, 63], pink: [255, 192, 203], plum: [221, 160, 221], powderblue: [176, 224, 230], purple: [128, 0, 128], rebeccapurple: [102, 51, 153], red: [255, 0, 0], rosybrown: [188, 143, 143], royalblue: [65, 105, 225], saddlebrown: [139, 69, 19], salmon: [250, 128, 114], sandybrown: [244, 164, 96], seagreen: [46, 139, 87], seashell: [255, 245, 238], sienna: [160, 82, 45], silver: [192, 192, 192], skyblue: [135, 206, 235], slateblue: [106, 90, 205], slategray: [112, 128, 144], slategrey: [112, 128, 144], snow: [255, 250, 250], springgreen: [0, 255, 127], steelblue: [70, 130, 180], tan: [210, 180, 140], teal: [0, 128, 128], thistle: [216, 191, 216], tomato: [255, 99, 71], turquoise: [64, 224, 208], violet: [238, 130, 238], wheat: [245, 222, 179], white: [255, 255, 255], whitesmoke: [245, 245, 245], yellow: [255, 255, 0], yellowgreen: [154, 205, 50] }, Wd = {};
        for (const e2 of Object.keys($d))
          Wd[$d[e2]] = e2;
        const qd = { rgb: { channels: 3, labels: "rgb" }, hsl: { channels: 3, labels: "hsl" }, hsv: { channels: 3, labels: "hsv" }, hwb: { channels: 3, labels: "hwb" }, cmyk: { channels: 4, labels: "cmyk" }, xyz: { channels: 3, labels: "xyz" }, lab: { channels: 3, labels: "lab" }, lch: { channels: 3, labels: "lch" }, hex: { channels: 1, labels: ["hex"] }, keyword: { channels: 1, labels: ["keyword"] }, ansi16: { channels: 1, labels: ["ansi16"] }, ansi256: { channels: 1, labels: ["ansi256"] }, hcg: { channels: 3, labels: ["h", "c", "g"] }, apple: { channels: 3, labels: ["r16", "g16", "b16"] }, gray: { channels: 1, labels: ["gray"] } };
        var Ud = qd;
        for (const e2 of Object.keys(qd)) {
          if (!("channels" in qd[e2]))
            throw new Error("missing channels property: " + e2);
          if (!("labels" in qd[e2]))
            throw new Error("missing channel labels property: " + e2);
          if (qd[e2].labels.length !== qd[e2].channels)
            throw new Error("channel and label counts mismatch: " + e2);
          const { channels: t2, labels: n2 } = qd[e2];
          delete qd[e2].channels, delete qd[e2].labels, Object.defineProperty(qd[e2], "channels", { value: t2 }), Object.defineProperty(qd[e2], "labels", { value: n2 });
        }
        qd.rgb.hsl = function(e2) {
          const t2 = e2[0] / 255, n2 = e2[1] / 255, r2 = e2[2] / 255, o2 = Math.min(t2, n2, r2), i2 = Math.max(t2, n2, r2), u2 = i2 - o2;
          let s2, a2;
          i2 === o2 ? s2 = 0 : t2 === i2 ? s2 = (n2 - r2) / u2 : n2 === i2 ? s2 = 2 + (r2 - t2) / u2 : r2 === i2 && (s2 = 4 + (t2 - n2) / u2), s2 = Math.min(60 * s2, 360), s2 < 0 && (s2 += 360);
          const c2 = (o2 + i2) / 2;
          return a2 = i2 === o2 ? 0 : c2 <= 0.5 ? u2 / (i2 + o2) : u2 / (2 - i2 - o2), [s2, 100 * a2, 100 * c2];
        }, qd.rgb.hsv = function(e2) {
          let t2, n2, r2, o2, i2;
          const u2 = e2[0] / 255, s2 = e2[1] / 255, a2 = e2[2] / 255, c2 = Math.max(u2, s2, a2), l3 = c2 - Math.min(u2, s2, a2), p2 = function(e3) {
            return (c2 - e3) / 6 / l3 + 0.5;
          };
          return l3 === 0 ? (o2 = 0, i2 = 0) : (i2 = l3 / c2, t2 = p2(u2), n2 = p2(s2), r2 = p2(a2), u2 === c2 ? o2 = r2 - n2 : s2 === c2 ? o2 = 1 / 3 + t2 - r2 : a2 === c2 && (o2 = 2 / 3 + n2 - t2), o2 < 0 ? o2 += 1 : o2 > 1 && (o2 -= 1)), [360 * o2, 100 * i2, 100 * c2];
        }, qd.rgb.hwb = function(e2) {
          const t2 = e2[0], n2 = e2[1];
          let r2 = e2[2];
          const o2 = qd.rgb.hsl(e2)[0], i2 = 1 / 255 * Math.min(t2, Math.min(n2, r2));
          return r2 = 1 - 1 / 255 * Math.max(t2, Math.max(n2, r2)), [o2, 100 * i2, 100 * r2];
        }, qd.rgb.cmyk = function(e2) {
          const t2 = e2[0] / 255, n2 = e2[1] / 255, r2 = e2[2] / 255, o2 = Math.min(1 - t2, 1 - n2, 1 - r2);
          return [100 * ((1 - t2 - o2) / (1 - o2) || 0), 100 * ((1 - n2 - o2) / (1 - o2) || 0), 100 * ((1 - r2 - o2) / (1 - o2) || 0), 100 * o2];
        }, qd.rgb.keyword = function(e2) {
          const t2 = Wd[e2];
          if (t2)
            return t2;
          let n2, r2 = 1 / 0;
          for (const t3 of Object.keys($d)) {
            const u2 = (i2 = $d[t3], ((o2 = e2)[0] - i2[0]) ** 2 + (o2[1] - i2[1]) ** 2 + (o2[2] - i2[2]) ** 2);
            u2 < r2 && (r2 = u2, n2 = t3);
          }
          var o2, i2;
          return n2;
        }, qd.keyword.rgb = function(e2) {
          return $d[e2];
        }, qd.rgb.xyz = function(e2) {
          let t2 = e2[0] / 255, n2 = e2[1] / 255, r2 = e2[2] / 255;
          t2 = t2 > 0.04045 ? ((t2 + 0.055) / 1.055) ** 2.4 : t2 / 12.92, n2 = n2 > 0.04045 ? ((n2 + 0.055) / 1.055) ** 2.4 : n2 / 12.92, r2 = r2 > 0.04045 ? ((r2 + 0.055) / 1.055) ** 2.4 : r2 / 12.92;
          return [100 * (0.4124 * t2 + 0.3576 * n2 + 0.1805 * r2), 100 * (0.2126 * t2 + 0.7152 * n2 + 0.0722 * r2), 100 * (0.0193 * t2 + 0.1192 * n2 + 0.9505 * r2)];
        }, qd.rgb.lab = function(e2) {
          const t2 = qd.rgb.xyz(e2);
          let n2 = t2[0], r2 = t2[1], o2 = t2[2];
          n2 /= 95.047, r2 /= 100, o2 /= 108.883, n2 = n2 > 8856e-6 ? n2 ** (1 / 3) : 7.787 * n2 + 16 / 116, r2 = r2 > 8856e-6 ? r2 ** (1 / 3) : 7.787 * r2 + 16 / 116, o2 = o2 > 8856e-6 ? o2 ** (1 / 3) : 7.787 * o2 + 16 / 116;
          return [116 * r2 - 16, 500 * (n2 - r2), 200 * (r2 - o2)];
        }, qd.hsl.rgb = function(e2) {
          const t2 = e2[0] / 360, n2 = e2[1] / 100, r2 = e2[2] / 100;
          let o2, i2, u2;
          if (n2 === 0)
            return u2 = 255 * r2, [u2, u2, u2];
          o2 = r2 < 0.5 ? r2 * (1 + n2) : r2 + n2 - r2 * n2;
          const s2 = 2 * r2 - o2, a2 = [0, 0, 0];
          for (let e3 = 0; e3 < 3; e3++)
            i2 = t2 + 1 / 3 * -(e3 - 1), i2 < 0 && i2++, i2 > 1 && i2--, u2 = 6 * i2 < 1 ? s2 + 6 * (o2 - s2) * i2 : 2 * i2 < 1 ? o2 : 3 * i2 < 2 ? s2 + (o2 - s2) * (2 / 3 - i2) * 6 : s2, a2[e3] = 255 * u2;
          return a2;
        }, qd.hsl.hsv = function(e2) {
          const t2 = e2[0];
          let n2 = e2[1] / 100, r2 = e2[2] / 100, o2 = n2;
          const i2 = Math.max(r2, 0.01);
          r2 *= 2, n2 *= r2 <= 1 ? r2 : 2 - r2, o2 *= i2 <= 1 ? i2 : 2 - i2;
          return [t2, 100 * (r2 === 0 ? 2 * o2 / (i2 + o2) : 2 * n2 / (r2 + n2)), 100 * ((r2 + n2) / 2)];
        }, qd.hsv.rgb = function(e2) {
          const t2 = e2[0] / 60, n2 = e2[1] / 100;
          let r2 = e2[2] / 100;
          const o2 = Math.floor(t2) % 6, i2 = t2 - Math.floor(t2), u2 = 255 * r2 * (1 - n2), s2 = 255 * r2 * (1 - n2 * i2), a2 = 255 * r2 * (1 - n2 * (1 - i2));
          switch (r2 *= 255, o2) {
            case 0:
              return [r2, a2, u2];
            case 1:
              return [s2, r2, u2];
            case 2:
              return [u2, r2, a2];
            case 3:
              return [u2, s2, r2];
            case 4:
              return [a2, u2, r2];
            case 5:
              return [r2, u2, s2];
          }
        }, qd.hsv.hsl = function(e2) {
          const t2 = e2[0], n2 = e2[1] / 100, r2 = e2[2] / 100, o2 = Math.max(r2, 0.01);
          let i2, u2;
          u2 = (2 - n2) * r2;
          const s2 = (2 - n2) * o2;
          return i2 = n2 * o2, i2 /= s2 <= 1 ? s2 : 2 - s2, i2 = i2 || 0, u2 /= 2, [t2, 100 * i2, 100 * u2];
        }, qd.hwb.rgb = function(e2) {
          const t2 = e2[0] / 360;
          let n2 = e2[1] / 100, r2 = e2[2] / 100;
          const o2 = n2 + r2;
          let i2;
          o2 > 1 && (n2 /= o2, r2 /= o2);
          const u2 = Math.floor(6 * t2), s2 = 1 - r2;
          i2 = 6 * t2 - u2, (1 & u2) != 0 && (i2 = 1 - i2);
          const a2 = n2 + i2 * (s2 - n2);
          let c2, l3, p2;
          switch (u2) {
            default:
            case 6:
            case 0:
              c2 = s2, l3 = a2, p2 = n2;
              break;
            case 1:
              c2 = a2, l3 = s2, p2 = n2;
              break;
            case 2:
              c2 = n2, l3 = s2, p2 = a2;
              break;
            case 3:
              c2 = n2, l3 = a2, p2 = s2;
              break;
            case 4:
              c2 = a2, l3 = n2, p2 = s2;
              break;
            case 5:
              c2 = s2, l3 = n2, p2 = a2;
          }
          return [255 * c2, 255 * l3, 255 * p2];
        }, qd.cmyk.rgb = function(e2) {
          const t2 = e2[0] / 100, n2 = e2[1] / 100, r2 = e2[2] / 100, o2 = e2[3] / 100;
          return [255 * (1 - Math.min(1, t2 * (1 - o2) + o2)), 255 * (1 - Math.min(1, n2 * (1 - o2) + o2)), 255 * (1 - Math.min(1, r2 * (1 - o2) + o2))];
        }, qd.xyz.rgb = function(e2) {
          const t2 = e2[0] / 100, n2 = e2[1] / 100, r2 = e2[2] / 100;
          let o2, i2, u2;
          return o2 = 3.2406 * t2 + -1.5372 * n2 + -0.4986 * r2, i2 = -0.9689 * t2 + 1.8758 * n2 + 0.0415 * r2, u2 = 0.0557 * t2 + -0.204 * n2 + 1.057 * r2, o2 = o2 > 31308e-7 ? 1.055 * o2 ** (1 / 2.4) - 0.055 : 12.92 * o2, i2 = i2 > 31308e-7 ? 1.055 * i2 ** (1 / 2.4) - 0.055 : 12.92 * i2, u2 = u2 > 31308e-7 ? 1.055 * u2 ** (1 / 2.4) - 0.055 : 12.92 * u2, o2 = Math.min(Math.max(0, o2), 1), i2 = Math.min(Math.max(0, i2), 1), u2 = Math.min(Math.max(0, u2), 1), [255 * o2, 255 * i2, 255 * u2];
        }, qd.xyz.lab = function(e2) {
          let t2 = e2[0], n2 = e2[1], r2 = e2[2];
          t2 /= 95.047, n2 /= 100, r2 /= 108.883, t2 = t2 > 8856e-6 ? t2 ** (1 / 3) : 7.787 * t2 + 16 / 116, n2 = n2 > 8856e-6 ? n2 ** (1 / 3) : 7.787 * n2 + 16 / 116, r2 = r2 > 8856e-6 ? r2 ** (1 / 3) : 7.787 * r2 + 16 / 116;
          return [116 * n2 - 16, 500 * (t2 - n2), 200 * (n2 - r2)];
        }, qd.lab.xyz = function(e2) {
          let t2, n2, r2;
          n2 = (e2[0] + 16) / 116, t2 = e2[1] / 500 + n2, r2 = n2 - e2[2] / 200;
          const o2 = n2 ** 3, i2 = t2 ** 3, u2 = r2 ** 3;
          return n2 = o2 > 8856e-6 ? o2 : (n2 - 16 / 116) / 7.787, t2 = i2 > 8856e-6 ? i2 : (t2 - 16 / 116) / 7.787, r2 = u2 > 8856e-6 ? u2 : (r2 - 16 / 116) / 7.787, t2 *= 95.047, n2 *= 100, r2 *= 108.883, [t2, n2, r2];
        }, qd.lab.lch = function(e2) {
          const t2 = e2[0], n2 = e2[1], r2 = e2[2];
          let o2;
          o2 = 360 * Math.atan2(r2, n2) / 2 / Math.PI, o2 < 0 && (o2 += 360);
          return [t2, Math.sqrt(n2 * n2 + r2 * r2), o2];
        }, qd.lch.lab = function(e2) {
          const t2 = e2[0], n2 = e2[1], r2 = e2[2] / 360 * 2 * Math.PI;
          return [t2, n2 * Math.cos(r2), n2 * Math.sin(r2)];
        }, qd.rgb.ansi16 = function(e2) {
          let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
          const [n2, r2, o2] = e2;
          let i2 = t2 === null ? qd.rgb.hsv(e2)[2] : t2;
          if (i2 = Math.round(i2 / 50), i2 === 0)
            return 30;
          let u2 = 30 + (Math.round(o2 / 255) << 2 | Math.round(r2 / 255) << 1 | Math.round(n2 / 255));
          return i2 === 2 && (u2 += 60), u2;
        }, qd.hsv.ansi16 = function(e2) {
          return qd.rgb.ansi16(qd.hsv.rgb(e2), e2[2]);
        }, qd.rgb.ansi256 = function(e2) {
          const t2 = e2[0], n2 = e2[1], r2 = e2[2];
          if (t2 === n2 && n2 === r2)
            return t2 < 8 ? 16 : t2 > 248 ? 231 : Math.round((t2 - 8) / 247 * 24) + 232;
          return 16 + 36 * Math.round(t2 / 255 * 5) + 6 * Math.round(n2 / 255 * 5) + Math.round(r2 / 255 * 5);
        }, qd.ansi16.rgb = function(e2) {
          let t2 = e2 % 10;
          if (t2 === 0 || t2 === 7)
            return e2 > 50 && (t2 += 3.5), t2 = t2 / 10.5 * 255, [t2, t2, t2];
          const n2 = 0.5 * (1 + ~~(e2 > 50));
          return [(1 & t2) * n2 * 255, (t2 >> 1 & 1) * n2 * 255, (t2 >> 2 & 1) * n2 * 255];
        }, qd.ansi256.rgb = function(e2) {
          if (e2 >= 232) {
            const t3 = 10 * (e2 - 232) + 8;
            return [t3, t3, t3];
          }
          let t2;
          e2 -= 16;
          return [Math.floor(e2 / 36) / 5 * 255, Math.floor((t2 = e2 % 36) / 6) / 5 * 255, t2 % 6 / 5 * 255];
        }, qd.rgb.hex = function(e2) {
          const t2 = (((255 & Math.round(e2[0])) << 16) + ((255 & Math.round(e2[1])) << 8) + (255 & Math.round(e2[2]))).toString(16).toUpperCase();
          return "000000".substring(t2.length) + t2;
        }, qd.hex.rgb = function(e2) {
          const t2 = e2.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);
          if (!t2)
            return [0, 0, 0];
          let n2 = t2[0];
          t2[0].length === 3 && (n2 = n2.split("").map((e3) => e3 + e3).join(""));
          const r2 = parseInt(n2, 16);
          return [r2 >> 16 & 255, r2 >> 8 & 255, 255 & r2];
        }, qd.rgb.hcg = function(e2) {
          const t2 = e2[0] / 255, n2 = e2[1] / 255, r2 = e2[2] / 255, o2 = Math.max(Math.max(t2, n2), r2), i2 = Math.min(Math.min(t2, n2), r2), u2 = o2 - i2;
          let s2, a2;
          return s2 = u2 < 1 ? i2 / (1 - u2) : 0, a2 = u2 <= 0 ? 0 : o2 === t2 ? (n2 - r2) / u2 % 6 : o2 === n2 ? 2 + (r2 - t2) / u2 : 4 + (t2 - n2) / u2, a2 /= 6, a2 %= 1, [360 * a2, 100 * u2, 100 * s2];
        }, qd.hsl.hcg = function(e2) {
          const t2 = e2[1] / 100, n2 = e2[2] / 100, r2 = n2 < 0.5 ? 2 * t2 * n2 : 2 * t2 * (1 - n2);
          let o2 = 0;
          return r2 < 1 && (o2 = (n2 - 0.5 * r2) / (1 - r2)), [e2[0], 100 * r2, 100 * o2];
        }, qd.hsv.hcg = function(e2) {
          const t2 = e2[1] / 100, n2 = e2[2] / 100, r2 = t2 * n2;
          let o2 = 0;
          return r2 < 1 && (o2 = (n2 - r2) / (1 - r2)), [e2[0], 100 * r2, 100 * o2];
        }, qd.hcg.rgb = function(e2) {
          const t2 = e2[0] / 360, n2 = e2[1] / 100, r2 = e2[2] / 100;
          if (n2 === 0)
            return [255 * r2, 255 * r2, 255 * r2];
          const o2 = [0, 0, 0], i2 = t2 % 1 * 6, u2 = i2 % 1, s2 = 1 - u2;
          let a2 = 0;
          switch (Math.floor(i2)) {
            case 0:
              o2[0] = 1, o2[1] = u2, o2[2] = 0;
              break;
            case 1:
              o2[0] = s2, o2[1] = 1, o2[2] = 0;
              break;
            case 2:
              o2[0] = 0, o2[1] = 1, o2[2] = u2;
              break;
            case 3:
              o2[0] = 0, o2[1] = s2, o2[2] = 1;
              break;
            case 4:
              o2[0] = u2, o2[1] = 0, o2[2] = 1;
              break;
            default:
              o2[0] = 1, o2[1] = 0, o2[2] = s2;
          }
          return a2 = (1 - n2) * r2, [255 * (n2 * o2[0] + a2), 255 * (n2 * o2[1] + a2), 255 * (n2 * o2[2] + a2)];
        }, qd.hcg.hsv = function(e2) {
          const t2 = e2[1] / 100, n2 = t2 + e2[2] / 100 * (1 - t2);
          let r2 = 0;
          return n2 > 0 && (r2 = t2 / n2), [e2[0], 100 * r2, 100 * n2];
        }, qd.hcg.hsl = function(e2) {
          const t2 = e2[1] / 100, n2 = e2[2] / 100 * (1 - t2) + 0.5 * t2;
          let r2 = 0;
          return n2 > 0 && n2 < 0.5 ? r2 = t2 / (2 * n2) : n2 >= 0.5 && n2 < 1 && (r2 = t2 / (2 * (1 - n2))), [e2[0], 100 * r2, 100 * n2];
        }, qd.hcg.hwb = function(e2) {
          const t2 = e2[1] / 100, n2 = t2 + e2[2] / 100 * (1 - t2);
          return [e2[0], 100 * (n2 - t2), 100 * (1 - n2)];
        }, qd.hwb.hcg = function(e2) {
          const t2 = e2[1] / 100, n2 = 1 - e2[2] / 100, r2 = n2 - t2;
          let o2 = 0;
          return r2 < 1 && (o2 = (n2 - r2) / (1 - r2)), [e2[0], 100 * r2, 100 * o2];
        }, qd.apple.rgb = function(e2) {
          return [e2[0] / 65535 * 255, e2[1] / 65535 * 255, e2[2] / 65535 * 255];
        }, qd.rgb.apple = function(e2) {
          return [e2[0] / 255 * 65535, e2[1] / 255 * 65535, e2[2] / 255 * 65535];
        }, qd.gray.rgb = function(e2) {
          return [e2[0] / 100 * 255, e2[0] / 100 * 255, e2[0] / 100 * 255];
        }, qd.gray.hsl = function(e2) {
          return [0, 0, e2[0]];
        }, qd.gray.hsv = qd.gray.hsl, qd.gray.hwb = function(e2) {
          return [0, 100, e2[0]];
        }, qd.gray.cmyk = function(e2) {
          return [0, 0, 0, e2[0]];
        }, qd.gray.lab = function(e2) {
          return [e2[0], 0, 0];
        }, qd.gray.hex = function(e2) {
          const t2 = 255 & Math.round(e2[0] / 100 * 255), n2 = ((t2 << 16) + (t2 << 8) + t2).toString(16).toUpperCase();
          return "000000".substring(n2.length) + n2;
        }, qd.rgb.gray = function(e2) {
          return [(e2[0] + e2[1] + e2[2]) / 3 / 255 * 100];
        };
        const zd = Ud;
        function Gd(e2) {
          const t2 = function() {
            const e3 = {}, t3 = Object.keys(zd);
            for (let n3 = t3.length, r2 = 0; r2 < n3; r2++)
              e3[t3[r2]] = { distance: -1, parent: null };
            return e3;
          }(), n2 = [e2];
          for (t2[e2].distance = 0; n2.length; ) {
            const e3 = n2.pop(), r2 = Object.keys(zd[e3]);
            for (let o2 = r2.length, i2 = 0; i2 < o2; i2++) {
              const o3 = r2[i2], u2 = t2[o3];
              u2.distance === -1 && (u2.distance = t2[e3].distance + 1, u2.parent = e3, n2.unshift(o3));
            }
          }
          return t2;
        }
        function Hd(e2, t2) {
          return function(n2) {
            return t2(e2(n2));
          };
        }
        function Jd(e2, t2) {
          const n2 = [t2[e2].parent, e2];
          let r2 = zd[t2[e2].parent][e2], o2 = t2[e2].parent;
          for (; t2[o2].parent; )
            n2.unshift(t2[o2].parent), r2 = Hd(zd[t2[o2].parent][o2], r2), o2 = t2[o2].parent;
          return r2.conversion = n2, r2;
        }
        const Xd = Ud, Yd = function(e2) {
          const t2 = Gd(e2), n2 = {}, r2 = Object.keys(t2);
          for (let e3 = r2.length, o2 = 0; o2 < e3; o2++) {
            const e4 = r2[o2];
            t2[e4].parent !== null && (n2[e4] = Jd(e4, t2));
          }
          return n2;
        }, Kd = {};
        Object.keys(Xd).forEach((e2) => {
          Kd[e2] = {}, Object.defineProperty(Kd[e2], "channels", { value: Xd[e2].channels }), Object.defineProperty(Kd[e2], "labels", { value: Xd[e2].labels });
          const t2 = Yd(e2);
          Object.keys(t2).forEach((n2) => {
            const r2 = t2[n2];
            Kd[e2][n2] = function(e3) {
              const t3 = function() {
                for (var t4 = arguments.length, n3 = new Array(t4), r3 = 0; r3 < t4; r3++)
                  n3[r3] = arguments[r3];
                const o2 = n3[0];
                if (o2 == null)
                  return o2;
                o2.length > 1 && (n3 = o2);
                const i2 = e3(n3);
                if (typeof i2 == "object")
                  for (let e4 = i2.length, t5 = 0; t5 < e4; t5++)
                    i2[t5] = Math.round(i2[t5]);
                return i2;
              };
              return "conversion" in e3 && (t3.conversion = e3.conversion), t3;
            }(r2), Kd[e2][n2].raw = function(e3) {
              const t3 = function() {
                for (var t4 = arguments.length, n3 = new Array(t4), r3 = 0; r3 < t4; r3++)
                  n3[r3] = arguments[r3];
                const o2 = n3[0];
                return o2 == null ? o2 : (o2.length > 1 && (n3 = o2), e3(n3));
              };
              return "conversion" in e3 && (t3.conversion = e3.conversion), t3;
            }(r2);
          });
        });
        var Qd = Kd;
        function Zd() {
          return false;
        }
        function eh() {
          throw new Error("tty.ReadStream is not implemented");
        }
        function th() {
          throw new Error("tty.ReadStream is not implemented");
        }
        !function(e2) {
          const t2 = (e3, t3) => function() {
            const n3 = e3(...arguments);
            return "\x1B[".concat(n3 + t3, "m");
          }, n2 = (e3, t3) => function() {
            const n3 = e3(...arguments);
            return "\x1B[".concat(38 + t3, ";5;").concat(n3, "m");
          }, r2 = (e3, t3) => function() {
            const n3 = e3(...arguments);
            return "\x1B[".concat(38 + t3, ";2;").concat(n3[0], ";").concat(n3[1], ";").concat(n3[2], "m");
          }, o2 = (e3) => e3, i2 = (e3, t3, n3) => [e3, t3, n3], u2 = (e3, t3, n3) => {
            Object.defineProperty(e3, t3, { get: () => {
              const r3 = n3();
              return Object.defineProperty(e3, t3, { value: r3, enumerable: true, configurable: true }), r3;
            }, enumerable: true, configurable: true });
          };
          let s2;
          const a2 = (e3, t3, n3, r3) => {
            s2 === void 0 && (s2 = Qd);
            const o3 = r3 ? 10 : 0, i3 = {};
            for (const [r4, u3] of Object.entries(s2)) {
              const s3 = r4 === "ansi16" ? "ansi" : r4;
              r4 === t3 ? i3[s3] = e3(n3, o3) : typeof u3 == "object" && (i3[s3] = e3(u3[t3], o3));
            }
            return i3;
          };
          Object.defineProperty(e2, "exports", { enumerable: true, get: function() {
            const e3 = /* @__PURE__ */ new Map(), s3 = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
            s3.color.gray = s3.color.blackBright, s3.bgColor.bgGray = s3.bgColor.bgBlackBright, s3.color.grey = s3.color.blackBright, s3.bgColor.bgGrey = s3.bgColor.bgBlackBright;
            for (const [t3, n3] of Object.entries(s3)) {
              for (const [t4, r3] of Object.entries(n3))
                s3[t4] = { open: "\x1B[".concat(r3[0], "m"), close: "\x1B[".concat(r3[1], "m") }, n3[t4] = s3[t4], e3.set(r3[0], r3[1]);
              Object.defineProperty(s3, t3, { value: n3, enumerable: false });
            }
            return Object.defineProperty(s3, "codes", { value: e3, enumerable: false }), s3.color.close = "\x1B[39m", s3.bgColor.close = "\x1B[49m", u2(s3.color, "ansi", () => a2(t2, "ansi16", o2, false)), u2(s3.color, "ansi256", () => a2(n2, "ansi256", o2, false)), u2(s3.color, "ansi16m", () => a2(r2, "rgb", i2, false)), u2(s3.bgColor, "ansi", () => a2(t2, "ansi16", o2, true)), u2(s3.bgColor, "ansi256", () => a2(n2, "ansi256", o2, true)), u2(s3.bgColor, "ansi16m", () => a2(r2, "rgb", i2, true)), s3;
          } });
        }(Vd);
        var nh = { isatty: Zd, ReadStream: eh, WriteStream: th };
        const rh = yf, oh = t(Object.freeze({ __proto__: null, isatty: Zd, ReadStream: eh, WriteStream: th, default: nh })), ih = function(e2) {
          let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : ta.argv;
          const n2 = e2.startsWith("-") ? "" : e2.length === 1 ? "-" : "--", r2 = t2.indexOf(n2 + e2), o2 = t2.indexOf("--");
          return r2 !== -1 && (o2 === -1 || r2 < o2);
        }, { env: uh } = ta;
        let sh;
        function ah(e2) {
          return e2 !== 0 && { level: e2, hasBasic: true, has256: e2 >= 2, has16m: e2 >= 3 };
        }
        function ch(e2, t2) {
          if (sh === 0)
            return 0;
          if (ih("color=16m") || ih("color=full") || ih("color=truecolor"))
            return 3;
          if (ih("color=256"))
            return 2;
          if (e2 && !t2 && sh === void 0)
            return 0;
          const n2 = sh || 0;
          if (uh.TERM === "dumb")
            return n2;
          if (ta.platform === "win32") {
            const e3 = rh.release().split(".");
            return Number(e3[0]) >= 10 && Number(e3[2]) >= 10586 ? Number(e3[2]) >= 14931 ? 3 : 2 : 1;
          }
          if ("CI" in uh)
            return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI", "GITHUB_ACTIONS", "BUILDKITE"].some((e3) => e3 in uh) || uh.CI_NAME === "codeship" ? 1 : n2;
          if ("TEAMCITY_VERSION" in uh)
            return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(uh.TEAMCITY_VERSION) ? 1 : 0;
          if (uh.COLORTERM === "truecolor")
            return 3;
          if ("TERM_PROGRAM" in uh) {
            const e3 = parseInt((uh.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
            switch (uh.TERM_PROGRAM) {
              case "iTerm.app":
                return e3 >= 3 ? 3 : 2;
              case "Apple_Terminal":
                return 2;
            }
          }
          return /-256(color)?$/i.test(uh.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(uh.TERM) || "COLORTERM" in uh ? 1 : n2;
        }
        ih("no-color") || ih("no-colors") || ih("color=false") || ih("color=never") ? sh = 0 : (ih("color") || ih("colors") || ih("color=true") || ih("color=always")) && (sh = 1), "FORCE_COLOR" in uh && (sh = uh.FORCE_COLOR === "true" ? 1 : uh.FORCE_COLOR === "false" ? 0 : uh.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(uh.FORCE_COLOR, 10), 3));
        var lh = { supportsColor: function(e2) {
          return ah(ch(e2, e2 && e2.isTTY));
        }, stdout: ah(ch(true, oh.isatty(1))), stderr: ah(ch(true, oh.isatty(2))) };
        var ph = { stringReplaceAll: (e2, t2, n2) => {
          let r2 = e2.indexOf(t2);
          if (r2 === -1)
            return e2;
          const o2 = t2.length;
          let i2 = 0, u2 = "";
          do {
            u2 += e2.substr(i2, r2 - i2) + t2 + n2, i2 = r2 + o2, r2 = e2.indexOf(t2, i2);
          } while (r2 !== -1);
          return u2 += e2.substr(i2), u2;
        }, stringEncaseCRLFWithFirstIndex: (e2, t2, n2, r2) => {
          let o2 = 0, i2 = "";
          do {
            const u2 = e2[r2 - 1] === "\r";
            i2 += e2.substr(o2, (u2 ? r2 - 1 : r2) - o2) + t2 + (u2 ? "\r\n" : "\n") + n2, o2 = r2 + 1, r2 = e2.indexOf("\n", o2);
          } while (r2 !== -1);
          return i2 += e2.substr(o2), i2;
        } };
        const fh = /(?:\\(u(?:[a-f\d]{4}|\{[a-f\d]{1,6}\})|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi, dh = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g, hh = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/, gh = /\\(u(?:[a-f\d]{4}|{[a-f\d]{1,6}})|x[a-f\d]{2}|.)|([^\\])/gi, mh = /* @__PURE__ */ new Map([["n", "\n"], ["r", "\r"], ["t", "	"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", "\x1B"], ["a", "\x07"]]);
        function yh(e2) {
          const t2 = e2[0] === "u", n2 = e2[1] === "{";
          return t2 && !n2 && e2.length === 5 || e2[0] === "x" && e2.length === 3 ? String.fromCharCode(parseInt(e2.slice(1), 16)) : t2 && n2 ? String.fromCodePoint(parseInt(e2.slice(2, -1), 16)) : mh.get(e2) || e2;
        }
        function Dh(e2, t2) {
          const n2 = [], r2 = t2.trim().split(/\s*,\s*/g);
          let o2;
          for (const t3 of r2) {
            const r3 = Number(t3);
            if (Number.isNaN(r3)) {
              if (!(o2 = t3.match(hh)))
                throw new Error("Invalid Chalk template style argument: ".concat(t3, " (in style '").concat(e2, "')"));
              n2.push(o2[2].replace(gh, (e3, t4, n3) => t4 ? yh(t4) : n3));
            } else
              n2.push(r3);
          }
          return n2;
        }
        function Eh(e2) {
          dh.lastIndex = 0;
          const t2 = [];
          let n2;
          for (; (n2 = dh.exec(e2)) !== null; ) {
            const e3 = n2[1];
            if (n2[2]) {
              const r2 = Dh(e3, n2[2]);
              t2.push([e3].concat(r2));
            } else
              t2.push([e3]);
          }
          return t2;
        }
        function Ch(e2, t2) {
          const n2 = {};
          for (const e3 of t2)
            for (const t3 of e3.styles)
              n2[t3[0]] = e3.inverse ? null : t3.slice(1);
          let r2 = e2;
          for (const [e3, t3] of Object.entries(n2))
            if (Array.isArray(t3)) {
              if (!(e3 in r2))
                throw new Error("Unknown Chalk style: ".concat(e3));
              r2 = t3.length > 0 ? r2[e3](...t3) : r2[e3];
            }
          return r2;
        }
        var bh = (e2, t2) => {
          const n2 = [], r2 = [];
          let o2 = [];
          if (t2.replace(fh, (t3, i2, u2, s2, a2, c2) => {
            if (i2)
              o2.push(yh(i2));
            else if (s2) {
              const t4 = o2.join("");
              o2 = [], r2.push(n2.length === 0 ? t4 : Ch(e2, n2)(t4)), n2.push({ inverse: u2, styles: Eh(s2) });
            } else if (a2) {
              if (n2.length === 0)
                throw new Error("Found extraneous } in Chalk template literal");
              r2.push(Ch(e2, n2)(o2.join(""))), o2 = [], n2.pop();
            } else
              o2.push(c2);
          }), r2.push(o2.join("")), n2.length > 0) {
            const e3 = "Chalk template literal is missing ".concat(n2.length, " closing bracket").concat(n2.length === 1 ? "" : "s", " (`}`)");
            throw new Error(e3);
          }
          return r2.join("");
        };
        const vh = Vd.exports, { stdout: Ah, stderr: Fh } = lh, { stringReplaceAll: xh, stringEncaseCRLFWithFirstIndex: Sh } = ph, { isArray: wh } = Array, Th = ["ansi", "ansi", "ansi256", "ansi16m"], Bh = /* @__PURE__ */ Object.create(null);
        class Nh {
          constructor(e2) {
            return kh(e2);
          }
        }
        const kh = (e2) => {
          const t2 = {};
          return function(e3) {
            let t3 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
            if (t3.level && !(Number.isInteger(t3.level) && t3.level >= 0 && t3.level <= 3))
              throw new Error("The `level` option should be an integer from 0 to 3");
            const n2 = Ah ? Ah.level : 0;
            e3.level = t3.level === void 0 ? n2 : t3.level;
          }(t2, e2), t2.template = function() {
            for (var e3 = arguments.length, n2 = new Array(e3), r2 = 0; r2 < e3; r2++)
              n2[r2] = arguments[r2];
            return Rh(t2.template, ...n2);
          }, Object.setPrototypeOf(t2, Ph.prototype), Object.setPrototypeOf(t2.template, t2), t2.template.constructor = () => {
            throw new Error("`chalk.constructor()` is deprecated. Use `new chalk.Instance()` instead.");
          }, t2.template.Instance = Nh, t2.template;
        };
        function Ph(e2) {
          return kh(e2);
        }
        for (const [e2, t2] of Object.entries(vh))
          Bh[e2] = { get() {
            const n2 = jh(this, Lh(t2.open, t2.close, this._styler), this._isEmpty);
            return Object.defineProperty(this, e2, { value: n2 }), n2;
          } };
        Bh.visible = { get() {
          const e2 = jh(this, this._styler, true);
          return Object.defineProperty(this, "visible", { value: e2 }), e2;
        } };
        const Oh = ["rgb", "hex", "keyword", "hsl", "hsv", "hwb", "ansi", "ansi256"];
        for (const e2 of Oh)
          Bh[e2] = { get() {
            const { level: t2 } = this;
            return function() {
              const n2 = Lh(vh.color[Th[t2]][e2](...arguments), vh.color.close, this._styler);
              return jh(this, n2, this._isEmpty);
            };
          } };
        for (const e2 of Oh) {
          Bh["bg" + e2[0].toUpperCase() + e2.slice(1)] = { get() {
            const { level: t2 } = this;
            return function() {
              const n2 = Lh(vh.bgColor[Th[t2]][e2](...arguments), vh.bgColor.close, this._styler);
              return jh(this, n2, this._isEmpty);
            };
          } };
        }
        const Ih = Object.defineProperties(() => {
        }, Object.assign(Object.assign({}, Bh), {}, { level: { enumerable: true, get() {
          return this._generator.level;
        }, set(e2) {
          this._generator.level = e2;
        } } })), Lh = (e2, t2, n2) => {
          let r2, o2;
          return n2 === void 0 ? (r2 = e2, o2 = t2) : (r2 = n2.openAll + e2, o2 = t2 + n2.closeAll), { open: e2, close: t2, openAll: r2, closeAll: o2, parent: n2 };
        }, jh = (e2, t2, n2) => {
          const r2 = function() {
            for (var e3 = arguments.length, t3 = new Array(e3), n3 = 0; n3 < e3; n3++)
              t3[n3] = arguments[n3];
            return wh(t3[0]) && wh(t3[0].raw) ? _h(r2, Rh(r2, ...t3)) : _h(r2, t3.length === 1 ? "" + t3[0] : t3.join(" "));
          };
          return Object.setPrototypeOf(r2, Ih), r2._generator = e2, r2._styler = t2, r2._isEmpty = n2, r2;
        }, _h = (e2, t2) => {
          if (e2.level <= 0 || !t2)
            return e2._isEmpty ? "" : t2;
          let n2 = e2._styler;
          if (n2 === void 0)
            return t2;
          const { openAll: r2, closeAll: o2 } = n2;
          if (t2.indexOf("\x1B") !== -1)
            for (; n2 !== void 0; )
              t2 = xh(t2, n2.close, n2.open), n2 = n2.parent;
          const i2 = t2.indexOf("\n");
          return i2 !== -1 && (t2 = Sh(t2, o2, r2, i2)), r2 + t2 + o2;
        };
        let Mh;
        const Rh = function(e2) {
          for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
            n2[r2 - 1] = arguments[r2];
          const [o2] = n2;
          if (!wh(o2) || !wh(o2.raw))
            return n2.join(" ");
          const i2 = n2.slice(1), u2 = [o2.raw[0]];
          for (let e3 = 1; e3 < o2.length; e3++)
            u2.push(String(i2[e3 - 1]).replace(/[{}\\]/g, "\\$&"), String(o2.raw[e3]));
          return Mh === void 0 && (Mh = bh), Mh(e2, u2.join(""));
        };
        Object.defineProperties(Ph.prototype, Bh);
        const Vh = Ph();
        Vh.supportsColor = Ah, Vh.stderr = Ph({ level: Fh ? Fh.level : 0 }), Vh.stderr.supportsColor = Fh;
        var $h = Vh;
        const Wh = ["_"], qh = bp, Uh = jd.exports, zh = $h, Gh = au, Hh = { key: (e2) => e2.length === 1 ? "-".concat(e2) : "--".concat(e2), value: (e2) => qh.apiDescriptor.value(e2), pair: (e2) => {
          let { key: t2, value: n2 } = e2;
          return n2 === false ? "--no-".concat(t2) : n2 === true ? Hh.key(t2) : n2 === "" ? "".concat(Hh.key(t2), " without an argument") : "".concat(Hh.key(t2), "=").concat(n2);
        } };
        class Jh extends qh.ChoiceSchema {
          constructor(e2) {
            let { name: t2, flags: n2 } = e2;
            super({ name: t2, choices: n2 }), this._flags = [...n2].sort();
          }
          preprocess(e2, t2) {
            if (typeof e2 == "string" && e2.length > 0 && !this._flags.includes(e2)) {
              const n2 = this._flags.find((t3) => Uh(t3, e2) < 3);
              if (n2)
                return t2.logger.warn(["Unknown flag ".concat(zh.yellow(t2.descriptor.value(e2)), ","), "did you mean ".concat(zh.blue(t2.descriptor.value(n2)), "?")].join(" ")), n2;
            }
            return e2;
          }
          expected() {
            return "a flag";
          }
        }
        let Xh;
        function Yh(e2, t2) {
          let { logger: n2, isCLI: r2 = false, passThrough: o2 = false } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          const i2 = o2 ? Array.isArray(o2) ? (e3, t3) => o2.includes(e3) ? { [e3]: t3 } : void 0 : (e3, t3) => ({ [e3]: t3 }) : (e3, t3, n3) => {
            const r3 = cu(n3.schemas, Wh);
            return qh.levenUnknownHandler(e3, t3, Object.assign(Object.assign({}, n3), {}, { schemas: r3 }));
          }, u2 = r2 ? Hh : qh.apiDescriptor, s2 = Kh(t2, { isCLI: r2 }), a2 = new qh.Normalizer(s2, { logger: n2, unknown: i2, descriptor: u2 }), c2 = n2 !== false;
          c2 && Xh && (a2._hasDeprecationWarned = Xh);
          const l3 = a2.normalize(e2);
          return c2 && (Xh = a2._hasDeprecationWarned), l3;
        }
        function Kh(e2, t2) {
          let { isCLI: n2 } = t2;
          const r2 = [];
          n2 && r2.push(qh.AnySchema.create({ name: "_" }));
          for (const t3 of e2)
            r2.push(Qh(t3, { isCLI: n2, optionInfos: e2 })), t3.alias && n2 && r2.push(qh.AliasSchema.create({ name: t3.alias, sourceName: t3.name }));
          return r2;
        }
        function Qh(e2, t2) {
          let n2, { isCLI: r2, optionInfos: o2 } = t2;
          const i2 = { name: e2.name }, u2 = {};
          switch (e2.type) {
            case "int":
              n2 = qh.IntegerSchema, r2 && (i2.preprocess = (e3) => Number(e3));
              break;
            case "string":
            case "path":
              n2 = qh.StringSchema;
              break;
            case "choice":
              n2 = qh.ChoiceSchema, i2.choices = e2.choices.map((t3) => typeof t3 == "object" && t3.redirect ? Object.assign(Object.assign({}, t3), {}, { redirect: { to: { key: e2.name, value: t3.redirect } } }) : t3);
              break;
            case "boolean":
              n2 = qh.BooleanSchema;
              break;
            case "flag":
              n2 = Jh, i2.flags = o2.flatMap((e3) => [e3.alias, e3.description && e3.name, e3.oppositeDescription && "no-".concat(e3.name)].filter(Boolean));
              break;
            default:
              throw new Error("Unexpected type ".concat(e2.type));
          }
          if (e2.exception ? i2.validate = (t3, n3, r3) => e2.exception(t3) || n3.validate(t3, r3) : i2.validate = (e3, t3, n3) => e3 === void 0 || t3.validate(e3, n3), e2.redirect && (u2.redirect = (t3) => t3 ? { to: { key: e2.redirect.option, value: e2.redirect.value } } : void 0), e2.deprecated && (u2.deprecated = true), r2 && !e2.array) {
            const e3 = i2.preprocess || ((e4) => e4);
            i2.preprocess = (t3, n3, r3) => n3.preprocess(e3(Array.isArray(t3) ? Gh(t3) : t3), r3);
          }
          return e2.array ? qh.ArraySchema.create(Object.assign(Object.assign(Object.assign({}, r2 ? { preprocess: (e3) => Array.isArray(e3) ? e3 : [e3] } : {}), u2), {}, { valueSchema: n2.create(i2) })) : n2.create(Object.assign(Object.assign({}, i2), u2));
        }
        var Zh = { normalizeApiOptions: function(e2, t2, n2) {
          return Yh(e2, t2, n2);
        }, normalizeCliOptions: function(e2, t2, n2) {
          return Yh(e2, t2, Object.assign({ isCLI: true }, n2));
        } };
        const { isNonEmptyArray: eg } = dc;
        function tg(e2, t2) {
          const { ignoreDecorators: n2 } = t2 || {};
          if (!n2) {
            const t3 = e2.declaration && e2.declaration.decorators || e2.decorators;
            if (eg(t3))
              return tg(t3[0]);
          }
          return e2.range ? e2.range[0] : e2.start;
        }
        function ng(e2) {
          return e2.range ? e2.range[1] : e2.end;
        }
        function rg(e2, t2) {
          return tg(e2) === tg(t2);
        }
        var og = { locStart: tg, locEnd: ng, hasSameLocStart: rg, hasSameLoc: function(e2, t2) {
          return rg(e2, t2) && function(e3, t3) {
            return ng(e3) === ng(t3);
          }(e2, t2);
        } }, ig = {}, ug = {}, sg = {};
        Object.defineProperty(sg, "__esModule", { value: true }), sg.default = /((['"])(?:(?!\2|\\).|\\(?:\r\n|[\s\S]))*(\2)?|`(?:[^`\\$]|\\[\s\S]|\$(?!\{)|\$\{(?:[^{}]|\{[^}]*\}?)*\}?)*(`)?)|(\/\/.*)|(\/\*(?:[^*]|\*(?!\/))*(\*\/)?)|(\/(?!\*)(?:\[(?:(?![\]\\]).|\\.)*\]|(?![\/\]\\]).|\\.)+\/(?:(?!\s*(?:\b|[\u0080-\uFFFF$\\'"~({]|[+\-!](?!=)|\.?\d))|[gmiyus]{1,6}\b(?![\u0080-\uFFFF$\\]|\s*(?:[+\-*%&|^<>!=?({]|\/(?![\/*])))))|(0[xX][\da-fA-F]+|0[oO][0-7]+|0[bB][01]+|(?:\d*\.\d+|\d+\.?)(?:[eE][+-]?\d+)?)|((?!\d)(?:(?!\s)[$\w\u0080-\uFFFF]|\\u[\da-fA-F]{4}|\\u\{[\da-fA-F]+\})+)|(--|\+\+|&&|\|\||=>|\.{3}|(?:[+\-\/%&|^]|\*{1,2}|<{1,2}|>{1,3}|!=?|={1,2})=?|[?~.,:;[\](){}])|(\s+)|(^$|[\s\S])/g, sg.matchToToken = function(e2) {
          var t2 = { type: "invalid", value: e2[0], closed: void 0 };
          return e2[1] ? (t2.type = "string", t2.closed = !(!e2[3] && !e2[4])) : e2[5] ? t2.type = "comment" : e2[6] ? (t2.type = "comment", t2.closed = !!e2[7]) : e2[8] ? t2.type = "regex" : e2[9] ? t2.type = "number" : e2[10] ? t2.type = "name" : e2[11] ? t2.type = "punctuator" : e2[12] && (t2.type = "whitespace"), t2;
        };
        var ag = {}, cg = {};
        Object.defineProperty(cg, "__esModule", { value: true }), cg.isIdentifierStart = yg, cg.isIdentifierChar = Dg, cg.isIdentifierName = function(e2) {
          let t2 = true;
          for (let n2 = 0; n2 < e2.length; n2++) {
            let r2 = e2.charCodeAt(n2);
            if ((64512 & r2) == 55296 && n2 + 1 < e2.length) {
              const t3 = e2.charCodeAt(++n2);
              (64512 & t3) == 56320 && (r2 = 65536 + ((1023 & r2) << 10) + (1023 & t3));
            }
            if (t2) {
              if (t2 = false, !yg(r2))
                return false;
            } else if (!Dg(r2))
              return false;
          }
          return !t2;
        };
        let lg = "\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0560-\u0588\u05D0-\u05EA\u05EF-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u0860-\u086A\u0870-\u0887\u0889-\u088E\u08A0-\u08C9\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u09FC\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C5D\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D04-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E86-\u0E8A\u0E8C-\u0EA3\u0EA5\u0EA7-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u1711\u171F-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1878\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4C\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1C90-\u1CBA\u1CBD-\u1CBF\u1CE9-\u1CEC\u1CEE-\u1CF3\u1CF5\u1CF6\u1CFA\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312F\u3131-\u318E\u31A0-\u31BF\u31F0-\u31FF\u3400-\u4DBF\u4E00-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7CA\uA7D0\uA7D1\uA7D3\uA7D5-\uA7D9\uA7F2-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA8FE\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB69\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC", pg = "\u200C\u200D\xB7\u0300-\u036F\u0387\u0483-\u0487\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u0669\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u06F0-\u06F9\u0711\u0730-\u074A\u07A6-\u07B0\u07C0-\u07C9\u07EB-\u07F3\u07FD\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u0898-\u089F\u08CA-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0966-\u096F\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u09E6-\u09EF\u09FE\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A66-\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0AE6-\u0AEF\u0AFA-\u0AFF\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B55-\u0B57\u0B62\u0B63\u0B66-\u0B6F\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0BE6-\u0BEF\u0C00-\u0C04\u0C3C\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C66-\u0C6F\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0CE6-\u0CEF\u0D00-\u0D03\u0D3B\u0D3C\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D66-\u0D6F\u0D81-\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0E50-\u0E59\u0EB1\u0EB4-\u0EBC\u0EC8-\u0ECD\u0ED0-\u0ED9\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1040-\u1049\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F-\u109D\u135D-\u135F\u1369-\u1371\u1712-\u1715\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u17E0-\u17E9\u180B-\u180D\u180F-\u1819\u18A9\u1920-\u192B\u1930-\u193B\u1946-\u194F\u19D0-\u19DA\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AB0-\u1ABD\u1ABF-\u1ACE\u1B00-\u1B04\u1B34-\u1B44\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BB0-\u1BB9\u1BE6-\u1BF3\u1C24-\u1C37\u1C40-\u1C49\u1C50-\u1C59\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF4\u1CF7-\u1CF9\u1DC0-\u1DFF\u203F\u2040\u2054\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA620-\uA629\uA66F\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA82C\uA880\uA881\uA8B4-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F1\uA8FF-\uA909\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9D0-\uA9D9\uA9E5\uA9F0-\uA9F9\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA50-\uAA59\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uABF0-\uABF9\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFF10-\uFF19\uFF3F";
        const fg = new RegExp("[" + lg + "]"), dg = new RegExp("[" + lg + pg + "]");
        lg = pg = null;
        const hg = [0, 11, 2, 25, 2, 18, 2, 1, 2, 14, 3, 13, 35, 122, 70, 52, 268, 28, 4, 48, 48, 31, 14, 29, 6, 37, 11, 29, 3, 35, 5, 7, 2, 4, 43, 157, 19, 35, 5, 35, 5, 39, 9, 51, 13, 10, 2, 14, 2, 6, 2, 1, 2, 10, 2, 14, 2, 6, 2, 1, 68, 310, 10, 21, 11, 7, 25, 5, 2, 41, 2, 8, 70, 5, 3, 0, 2, 43, 2, 1, 4, 0, 3, 22, 11, 22, 10, 30, 66, 18, 2, 1, 11, 21, 11, 25, 71, 55, 7, 1, 65, 0, 16, 3, 2, 2, 2, 28, 43, 28, 4, 28, 36, 7, 2, 27, 28, 53, 11, 21, 11, 18, 14, 17, 111, 72, 56, 50, 14, 50, 14, 35, 349, 41, 7, 1, 79, 28, 11, 0, 9, 21, 43, 17, 47, 20, 28, 22, 13, 52, 58, 1, 3, 0, 14, 44, 33, 24, 27, 35, 30, 0, 3, 0, 9, 34, 4, 0, 13, 47, 15, 3, 22, 0, 2, 0, 36, 17, 2, 24, 85, 6, 2, 0, 2, 3, 2, 14, 2, 9, 8, 46, 39, 7, 3, 1, 3, 21, 2, 6, 2, 1, 2, 4, 4, 0, 19, 0, 13, 4, 159, 52, 19, 3, 21, 2, 31, 47, 21, 1, 2, 0, 185, 46, 42, 3, 37, 47, 21, 0, 60, 42, 14, 0, 72, 26, 38, 6, 186, 43, 117, 63, 32, 7, 3, 0, 3, 7, 2, 1, 2, 23, 16, 0, 2, 0, 95, 7, 3, 38, 17, 0, 2, 0, 29, 0, 11, 39, 8, 0, 22, 0, 12, 45, 20, 0, 19, 72, 264, 8, 2, 36, 18, 0, 50, 29, 113, 6, 2, 1, 2, 37, 22, 0, 26, 5, 2, 1, 2, 31, 15, 0, 328, 18, 190, 0, 80, 921, 103, 110, 18, 195, 2637, 96, 16, 1070, 4050, 582, 8634, 568, 8, 30, 18, 78, 18, 29, 19, 47, 17, 3, 32, 20, 6, 18, 689, 63, 129, 74, 6, 0, 67, 12, 65, 1, 2, 0, 29, 6135, 9, 1237, 43, 8, 8936, 3, 2, 6, 2, 1, 2, 290, 46, 2, 18, 3, 9, 395, 2309, 106, 6, 12, 4, 8, 8, 9, 5991, 84, 2, 70, 2, 1, 3, 0, 3, 1, 3, 3, 2, 11, 2, 0, 2, 6, 2, 64, 2, 3, 3, 7, 2, 6, 2, 27, 2, 3, 2, 4, 2, 0, 4, 6, 2, 339, 3, 24, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 30, 2, 24, 2, 7, 1845, 30, 482, 44, 11, 6, 17, 0, 322, 29, 19, 43, 1269, 6, 2, 3, 2, 1, 2, 14, 2, 196, 60, 67, 8, 0, 1205, 3, 2, 26, 2, 1, 2, 0, 3, 0, 2, 9, 2, 3, 2, 0, 2, 0, 7, 0, 5, 0, 2, 0, 2, 0, 2, 2, 2, 1, 2, 0, 3, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 2, 0, 3, 3, 2, 6, 2, 3, 2, 3, 2, 0, 2, 9, 2, 16, 6, 2, 2, 4, 2, 16, 4421, 42719, 33, 4152, 8, 221, 3, 5761, 15, 7472, 3104, 541, 1507, 4938], gg = [509, 0, 227, 0, 150, 4, 294, 9, 1368, 2, 2, 1, 6, 3, 41, 2, 5, 0, 166, 1, 574, 3, 9, 9, 370, 1, 154, 10, 50, 3, 123, 2, 54, 14, 32, 10, 3, 1, 11, 3, 46, 10, 8, 0, 46, 9, 7, 2, 37, 13, 2, 9, 6, 1, 45, 0, 13, 2, 49, 13, 9, 3, 2, 11, 83, 11, 7, 0, 161, 11, 6, 9, 7, 3, 56, 1, 2, 6, 3, 1, 3, 2, 10, 0, 11, 1, 3, 6, 4, 4, 193, 17, 10, 9, 5, 0, 82, 19, 13, 9, 214, 6, 3, 8, 28, 1, 83, 16, 16, 9, 82, 12, 9, 9, 84, 14, 5, 9, 243, 14, 166, 9, 71, 5, 2, 1, 3, 3, 2, 0, 2, 1, 13, 9, 120, 6, 3, 6, 4, 0, 29, 9, 41, 6, 2, 3, 9, 0, 10, 10, 47, 15, 406, 7, 2, 7, 17, 9, 57, 21, 2, 13, 123, 5, 4, 0, 2, 1, 2, 6, 2, 0, 9, 9, 49, 4, 2, 1, 2, 4, 9, 9, 330, 3, 19306, 9, 87, 9, 39, 4, 60, 6, 26, 9, 1014, 0, 2, 54, 8, 3, 82, 0, 12, 1, 19628, 1, 4706, 45, 3, 22, 543, 4, 4, 5, 9, 7, 3, 6, 31, 3, 149, 2, 1418, 49, 513, 54, 5, 49, 9, 0, 15, 0, 23, 4, 2, 14, 1361, 6, 2, 16, 3, 6, 2, 1, 2, 4, 262, 6, 10, 9, 357, 0, 62, 13, 1495, 6, 110, 6, 6, 9, 4759, 9, 787719, 239];
        function mg(e2, t2) {
          let n2 = 65536;
          for (let r2 = 0, o2 = t2.length; r2 < o2; r2 += 2) {
            if (n2 += t2[r2], n2 > e2)
              return false;
            if (n2 += t2[r2 + 1], n2 >= e2)
              return true;
          }
          return false;
        }
        function yg(e2) {
          return e2 < 65 ? e2 === 36 : e2 <= 90 || (e2 < 97 ? e2 === 95 : e2 <= 122 || (e2 <= 65535 ? e2 >= 170 && fg.test(String.fromCharCode(e2)) : mg(e2, hg)));
        }
        function Dg(e2) {
          return e2 < 48 ? e2 === 36 : e2 < 58 || !(e2 < 65) && (e2 <= 90 || (e2 < 97 ? e2 === 95 : e2 <= 122 || (e2 <= 65535 ? e2 >= 170 && dg.test(String.fromCharCode(e2)) : mg(e2, hg) || mg(e2, gg))));
        }
        var Eg = {};
        Object.defineProperty(Eg, "__esModule", { value: true }), Eg.isReservedWord = xg, Eg.isStrictReservedWord = Sg, Eg.isStrictBindOnlyReservedWord = wg, Eg.isStrictBindReservedWord = function(e2, t2) {
          return Sg(e2, t2) || wg(e2);
        }, Eg.isKeyword = function(e2) {
          return vg.has(e2);
        };
        const Cg = ["implements", "interface", "let", "package", "private", "protected", "public", "static", "yield"], bg = ["eval", "arguments"], vg = /* @__PURE__ */ new Set(["break", "case", "catch", "continue", "debugger", "default", "do", "else", "finally", "for", "function", "if", "return", "switch", "throw", "try", "var", "const", "while", "with", "new", "this", "super", "class", "extends", "export", "import", "null", "true", "false", "in", "instanceof", "typeof", "void", "delete"]), Ag = new Set(Cg), Fg = new Set(bg);
        function xg(e2, t2) {
          return t2 && e2 === "await" || e2 === "enum";
        }
        function Sg(e2, t2) {
          return xg(e2, t2) || Ag.has(e2);
        }
        function wg(e2) {
          return Fg.has(e2);
        }
        !function(e2) {
          Object.defineProperty(e2, "__esModule", { value: true }), Object.defineProperty(e2, "isIdentifierName", { enumerable: true, get: function() {
            return t2.isIdentifierName;
          } }), Object.defineProperty(e2, "isIdentifierChar", { enumerable: true, get: function() {
            return t2.isIdentifierChar;
          } }), Object.defineProperty(e2, "isIdentifierStart", { enumerable: true, get: function() {
            return t2.isIdentifierStart;
          } }), Object.defineProperty(e2, "isReservedWord", { enumerable: true, get: function() {
            return n2.isReservedWord;
          } }), Object.defineProperty(e2, "isStrictBindOnlyReservedWord", { enumerable: true, get: function() {
            return n2.isStrictBindOnlyReservedWord;
          } }), Object.defineProperty(e2, "isStrictBindReservedWord", { enumerable: true, get: function() {
            return n2.isStrictBindReservedWord;
          } }), Object.defineProperty(e2, "isStrictReservedWord", { enumerable: true, get: function() {
            return n2.isStrictReservedWord;
          } }), Object.defineProperty(e2, "isKeyword", { enumerable: true, get: function() {
            return n2.isKeyword;
          } });
          var t2 = cg, n2 = Eg;
        }(ag);
        var Tg = { exports: {} }, Bg = /[|\\{}()[\]^$+*?.]/g, Ng = function(e2) {
          if (typeof e2 != "string")
            throw new TypeError("Expected a string");
          return e2.replace(Bg, "\\$&");
        };
        const kg = yf, Pg = (e2, t2) => {
          t2 = t2 || ta.argv;
          const n2 = e2.startsWith("-") ? "" : e2.length === 1 ? "-" : "--", r2 = t2.indexOf(n2 + e2), o2 = t2.indexOf("--");
          return r2 !== -1 && (o2 === -1 || r2 < o2);
        }, Og = ta.env;
        let Ig;
        function Lg(e2) {
          const t2 = function(e3) {
            if (Ig === false)
              return 0;
            if (Pg("color=16m") || Pg("color=full") || Pg("color=truecolor"))
              return 3;
            if (Pg("color=256"))
              return 2;
            if (e3 && !e3.isTTY && Ig !== true)
              return 0;
            const t3 = Ig ? 1 : 0;
            if (ta.platform === "win32") {
              const e4 = kg.release().split(".");
              return Number(ta.versions.node.split(".")[0]) >= 8 && Number(e4[0]) >= 10 && Number(e4[2]) >= 10586 ? Number(e4[2]) >= 14931 ? 3 : 2 : 1;
            }
            if ("CI" in Og)
              return ["TRAVIS", "CIRCLECI", "APPVEYOR", "GITLAB_CI"].some((e4) => e4 in Og) || Og.CI_NAME === "codeship" ? 1 : t3;
            if ("TEAMCITY_VERSION" in Og)
              return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(Og.TEAMCITY_VERSION) ? 1 : 0;
            if (Og.COLORTERM === "truecolor")
              return 3;
            if ("TERM_PROGRAM" in Og) {
              const e4 = parseInt((Og.TERM_PROGRAM_VERSION || "").split(".")[0], 10);
              switch (Og.TERM_PROGRAM) {
                case "iTerm.app":
                  return e4 >= 3 ? 3 : 2;
                case "Apple_Terminal":
                  return 2;
              }
            }
            return /-256(color)?$/i.test(Og.TERM) ? 2 : /^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(Og.TERM) || "COLORTERM" in Og ? 1 : (Og.TERM, t3);
          }(e2);
          return function(e3) {
            return e3 !== 0 && { level: e3, hasBasic: true, has256: e3 >= 2, has16m: e3 >= 3 };
          }(t2);
        }
        Pg("no-color") || Pg("no-colors") || Pg("color=false") ? Ig = false : (Pg("color") || Pg("colors") || Pg("color=true") || Pg("color=always")) && (Ig = true), "FORCE_COLOR" in Og && (Ig = Og.FORCE_COLOR.length === 0 || parseInt(Og.FORCE_COLOR, 10) !== 0);
        var jg = { supportsColor: Lg, stdout: Lg(ta.stdout), stderr: Lg(ta.stderr) };
        const _g = /(?:\\(u[a-f\d]{4}|x[a-f\d]{2}|.))|(?:\{(~)?(\w+(?:\([^)]*\))?(?:\.\w+(?:\([^)]*\))?)*)(?:[ \t]|(?=\r?\n)))|(\})|((?:.|[\r\n\f])+?)/gi, Mg = /(?:^|\.)(\w+)(?:\(([^)]*)\))?/g, Rg = /^(['"])((?:\\.|(?!\1)[^\\])*)\1$/, Vg = /\\(u[a-f\d]{4}|x[a-f\d]{2}|.)|([^\\])/gi, $g = /* @__PURE__ */ new Map([["n", "\n"], ["r", "\r"], ["t", "	"], ["b", "\b"], ["f", "\f"], ["v", "\v"], ["0", "\0"], ["\\", "\\"], ["e", "\x1B"], ["a", "\x07"]]);
        function Wg(e2) {
          return e2[0] === "u" && e2.length === 5 || e2[0] === "x" && e2.length === 3 ? String.fromCharCode(parseInt(e2.slice(1), 16)) : $g.get(e2) || e2;
        }
        function qg(e2, t2) {
          const n2 = [], r2 = t2.trim().split(/\s*,\s*/g);
          let o2;
          for (const t3 of r2)
            if (isNaN(t3)) {
              if (!(o2 = t3.match(Rg)))
                throw new Error("Invalid Chalk template style argument: ".concat(t3, " (in style '").concat(e2, "')"));
              n2.push(o2[2].replace(Vg, (e3, t4, n3) => t4 ? Wg(t4) : n3));
            } else
              n2.push(Number(t3));
          return n2;
        }
        function Ug(e2) {
          Mg.lastIndex = 0;
          const t2 = [];
          let n2;
          for (; (n2 = Mg.exec(e2)) !== null; ) {
            const e3 = n2[1];
            if (n2[2]) {
              const r2 = qg(e3, n2[2]);
              t2.push([e3].concat(r2));
            } else
              t2.push([e3]);
          }
          return t2;
        }
        function zg(e2, t2) {
          const n2 = {};
          for (const e3 of t2)
            for (const t3 of e3.styles)
              n2[t3[0]] = e3.inverse ? null : t3.slice(1);
          let r2 = e2;
          for (const e3 of Object.keys(n2))
            if (Array.isArray(n2[e3])) {
              if (!(e3 in r2))
                throw new Error("Unknown Chalk style: ".concat(e3));
              r2 = n2[e3].length > 0 ? r2[e3].apply(r2, n2[e3]) : r2[e3];
            }
          return r2;
        }
        var Gg = (e2, t2) => {
          const n2 = [], r2 = [];
          let o2 = [];
          if (t2.replace(_g, (t3, i2, u2, s2, a2, c2) => {
            if (i2)
              o2.push(Wg(i2));
            else if (s2) {
              const t4 = o2.join("");
              o2 = [], r2.push(n2.length === 0 ? t4 : zg(e2, n2)(t4)), n2.push({ inverse: u2, styles: Ug(s2) });
            } else if (a2) {
              if (n2.length === 0)
                throw new Error("Found extraneous } in Chalk template literal");
              r2.push(zg(e2, n2)(o2.join(""))), o2 = [], n2.pop();
            } else
              o2.push(c2);
          }), r2.push(o2.join("")), n2.length > 0) {
            const e3 = "Chalk template literal is missing ".concat(n2.length, " closing bracket").concat(n2.length === 1 ? "" : "s", " (`}`)");
            throw new Error(e3);
          }
          return r2.join("");
        };
        !function(e2) {
          const t2 = Ng, n2 = jp.exports, r2 = jg.stdout, o2 = Gg, i2 = ta.platform === "win32" && !(ta.env.TERM || "").toLowerCase().startsWith("xterm"), u2 = ["ansi", "ansi", "ansi256", "ansi16m"], s2 = /* @__PURE__ */ new Set(["gray"]), a2 = /* @__PURE__ */ Object.create(null);
          function c2(e3, t3) {
            t3 = t3 || {};
            const n3 = r2 ? r2.level : 0;
            e3.level = t3.level === void 0 ? n3 : t3.level, e3.enabled = "enabled" in t3 ? t3.enabled : e3.level > 0;
          }
          function l3(e3) {
            if (!this || !(this instanceof l3) || this.template) {
              const t3 = {};
              return c2(t3, e3), t3.template = function() {
                const e4 = [].slice.call(arguments);
                return h2.apply(null, [t3.template].concat(e4));
              }, Object.setPrototypeOf(t3, l3.prototype), Object.setPrototypeOf(t3.template, t3), t3.template.constructor = l3, t3.template;
            }
            c2(this, e3);
          }
          i2 && (n2.blue.open = "\x1B[94m");
          for (const e3 of Object.keys(n2))
            n2[e3].closeRe = new RegExp(t2(n2[e3].close), "g"), a2[e3] = { get() {
              const t3 = n2[e3];
              return f2.call(this, this._styles ? this._styles.concat(t3) : [t3], this._empty, e3);
            } };
          a2.visible = { get() {
            return f2.call(this, this._styles || [], true, "visible");
          } }, n2.color.closeRe = new RegExp(t2(n2.color.close), "g");
          for (const e3 of Object.keys(n2.color.ansi))
            s2.has(e3) || (a2[e3] = { get() {
              const t3 = this.level;
              return function() {
                const r3 = n2.color[u2[t3]][e3].apply(null, arguments), o3 = { open: r3, close: n2.color.close, closeRe: n2.color.closeRe };
                return f2.call(this, this._styles ? this._styles.concat(o3) : [o3], this._empty, e3);
              };
            } });
          n2.bgColor.closeRe = new RegExp(t2(n2.bgColor.close), "g");
          for (const e3 of Object.keys(n2.bgColor.ansi)) {
            if (s2.has(e3))
              continue;
            a2["bg" + e3[0].toUpperCase() + e3.slice(1)] = { get() {
              const t3 = this.level;
              return function() {
                const r3 = n2.bgColor[u2[t3]][e3].apply(null, arguments), o3 = { open: r3, close: n2.bgColor.close, closeRe: n2.bgColor.closeRe };
                return f2.call(this, this._styles ? this._styles.concat(o3) : [o3], this._empty, e3);
              };
            } };
          }
          const p2 = Object.defineProperties(() => {
          }, a2);
          function f2(e3, t3, n3) {
            const r3 = function() {
              return d2.apply(r3, arguments);
            };
            r3._styles = e3, r3._empty = t3;
            const o3 = this;
            return Object.defineProperty(r3, "level", { enumerable: true, get: () => o3.level, set(e4) {
              o3.level = e4;
            } }), Object.defineProperty(r3, "enabled", { enumerable: true, get: () => o3.enabled, set(e4) {
              o3.enabled = e4;
            } }), r3.hasGrey = this.hasGrey || n3 === "gray" || n3 === "grey", r3.__proto__ = p2, r3;
          }
          function d2() {
            const e3 = arguments, t3 = e3.length;
            let r3 = String(arguments[0]);
            if (t3 === 0)
              return "";
            if (t3 > 1)
              for (let n3 = 1; n3 < t3; n3++)
                r3 += " " + e3[n3];
            if (!this.enabled || this.level <= 0 || !r3)
              return this._empty ? "" : r3;
            const o3 = n2.dim.open;
            i2 && this.hasGrey && (n2.dim.open = "");
            for (const e4 of this._styles.slice().reverse())
              r3 = e4.open + r3.replace(e4.closeRe, e4.open) + e4.close, r3 = r3.replace(/\r?\n/g, "".concat(e4.close, "$&").concat(e4.open));
            return n2.dim.open = o3, r3;
          }
          function h2(e3, t3) {
            if (!Array.isArray(t3))
              return [].slice.call(arguments, 1).join(" ");
            const n3 = [].slice.call(arguments, 2), r3 = [t3.raw[0]];
            for (let e4 = 1; e4 < t3.length; e4++)
              r3.push(String(n3[e4 - 1]).replace(/[{}\\]/g, "\\$&")), r3.push(String(t3.raw[e4]));
            return o2(e3, r3.join(""));
          }
          Object.defineProperties(l3.prototype, a2), e2.exports = l3(), e2.exports.supportsColor = r2, e2.exports.default = e2.exports;
        }(Tg), Object.defineProperty(ug, "__esModule", { value: true }), ug.default = function(e2) {
          let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          if (nm(t2)) {
            const n2 = rm(t2);
            return tm(Kg(n2), e2);
          }
          return e2;
        }, ug.getChalk = rm, ug.shouldHighlight = nm;
        var Hg = sg, Jg = ag, Xg = Tg.exports;
        const Yg = /* @__PURE__ */ new Set(["as", "async", "from", "get", "of", "set"]);
        function Kg(e2) {
          return { keyword: e2.cyan, capitalized: e2.yellow, jsxIdentifier: e2.yellow, punctuator: e2.yellow, number: e2.magenta, string: e2.green, regex: e2.magenta, comment: e2.grey, invalid: e2.white.bgRed.bold };
        }
        const Qg = /\r\n|[\n\r\u2028\u2029]/, Zg = /^[()[\]{}]$/;
        let em;
        {
          const e2 = /^[a-z][\w-]*$/i, t2 = function(t3, n2, r2) {
            if (t3.type === "name") {
              if ((0, Jg.isKeyword)(t3.value) || (0, Jg.isStrictReservedWord)(t3.value, true) || Yg.has(t3.value))
                return "keyword";
              if (e2.test(t3.value) && (r2[n2 - 1] === "<" || r2.substr(n2 - 2, 2) == "</"))
                return "jsxIdentifier";
              if (t3.value[0] !== t3.value[0].toLowerCase())
                return "capitalized";
            }
            return t3.type === "punctuator" && Zg.test(t3.value) ? "bracket" : t3.type !== "invalid" || t3.value !== "@" && t3.value !== "#" ? t3.type : "punctuator";
          };
          em = function* (e3) {
            let n2;
            for (; n2 = Hg.default.exec(e3); ) {
              const r2 = Hg.matchToToken(n2);
              yield { type: t2(r2, n2.index, e3), value: r2.value };
            }
          };
        }
        function tm(e2, t2) {
          let n2 = "";
          for (const { type: r2, value: o2 } of em(t2)) {
            const t3 = e2[r2];
            n2 += t3 ? o2.split(Qg).map((e3) => t3(e3)).join("\n") : o2;
          }
          return n2;
        }
        function nm(e2) {
          return !!Xg.supportsColor || e2.forceColor;
        }
        function rm(e2) {
          return e2.forceColor ? new Xg.constructor({ enabled: true, level: 1 }) : Xg;
        }
        Object.defineProperty(ig, "__esModule", { value: true }), ig.codeFrameColumns = cm, ig.default = function(e2, t2, n2) {
          let r2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          if (!im) {
            im = true;
            const e3 = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
            if (ta.emitWarning)
              ta.emitWarning(e3, "DeprecationWarning");
            else {
              new Error(e3).name = "DeprecationWarning", console.warn(new Error(e3));
            }
          }
          const o2 = { start: { column: n2 = Math.max(n2, 0), line: t2 } };
          return cm(e2, o2, r2);
        };
        var om = ug;
        let im = false;
        function um(e2) {
          return { gutter: e2.grey, marker: e2.red.bold, message: e2.red.bold };
        }
        const sm = /\r\n|[\n\r\u2028\u2029]/;
        function am(e2, t2, n2) {
          const r2 = Object.assign({ column: 0, line: -1 }, e2.start), o2 = Object.assign({}, r2, e2.end), { linesAbove: i2 = 2, linesBelow: u2 = 3 } = n2 || {}, s2 = r2.line, a2 = r2.column, c2 = o2.line, l3 = o2.column;
          let p2 = Math.max(s2 - (i2 + 1), 0), f2 = Math.min(t2.length, c2 + u2);
          s2 === -1 && (p2 = 0), c2 === -1 && (f2 = t2.length);
          const d2 = c2 - s2, h2 = {};
          if (d2)
            for (let e3 = 0; e3 <= d2; e3++) {
              const n3 = e3 + s2;
              if (a2)
                if (e3 === 0) {
                  const e4 = t2[n3 - 1].length;
                  h2[n3] = [a2, e4 - a2 + 1];
                } else if (e3 === d2)
                  h2[n3] = [0, l3];
                else {
                  const r3 = t2[n3 - e3].length;
                  h2[n3] = [0, r3];
                }
              else
                h2[n3] = true;
            }
          else
            h2[s2] = a2 === l3 ? !a2 || [a2, 0] : [a2, l3 - a2];
          return { start: p2, end: f2, markerLines: h2 };
        }
        function cm(e2, t2) {
          let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          const r2 = (n2.highlightCode || n2.forceColor) && (0, om.shouldHighlight)(n2), o2 = (0, om.getChalk)(n2), i2 = um(o2), u2 = (e3, t3) => r2 ? e3(t3) : t3, s2 = e2.split(sm), { start: a2, end: c2, markerLines: l3 } = am(t2, s2, n2), p2 = t2.start && typeof t2.start.column == "number", f2 = String(c2).length, d2 = r2 ? (0, om.default)(e2, n2) : e2;
          let h2 = d2.split(sm, c2).slice(a2, c2).map((e3, t3) => {
            const r3 = a2 + 1 + t3, o3 = " ".concat(r3).slice(-f2), s3 = " ".concat(o3, " |"), c3 = l3[r3], p3 = !l3[r3 + 1];
            if (c3) {
              let t4 = "";
              if (Array.isArray(c3)) {
                const r4 = e3.slice(0, Math.max(c3[0] - 1, 0)).replace(/[^\t]/g, " "), o4 = c3[1] || 1;
                t4 = ["\n ", u2(i2.gutter, s3.replace(/\d/g, " ")), " ", r4, u2(i2.marker, "^").repeat(o4)].join(""), p3 && n2.message && (t4 += " " + u2(i2.message, n2.message));
              }
              return [u2(i2.marker, ">"), u2(i2.gutter, s3), e3.length > 0 ? " ".concat(e3) : "", t4].join("");
            }
            return " ".concat(u2(i2.gutter, s3)).concat(e3.length > 0 ? " ".concat(e3) : "");
          }).join("\n");
          return n2.message && !p2 && (h2 = "".concat(" ".repeat(f2 + 1)).concat(n2.message, "\n").concat(h2)), r2 ? o2.reset(h2) : h2;
        }
        const { ConfigError: lm } = Cp, pm = og, { locStart: fm, locEnd: dm } = pm, hm = Object.getOwnPropertyNames, gm = Object.getOwnPropertyDescriptor;
        function mm(e2) {
          const t2 = {};
          for (const n2 of e2.plugins)
            if (n2.parsers)
              for (const e3 of hm(n2.parsers))
                Object.defineProperty(t2, e3, gm(n2.parsers, e3));
          return t2;
        }
        function ym(e2) {
          let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : mm(e2);
          if (typeof e2.parser == "function")
            return { parse: e2.parser, astFormat: "estree", locStart: fm, locEnd: dm };
          if (typeof e2.parser == "string") {
            if (Object.prototype.hasOwnProperty.call(t2, e2.parser))
              return t2[e2.parser];
            throw new lm(`Couldn't resolve parser "`.concat(e2.parser, '". Parsers must be explicitly added to the standalone bundle.'));
          }
        }
        var Dm = { parse: function(e2, t2) {
          const n2 = mm(t2), r2 = Object.defineProperties({}, Object.fromEntries(Object.keys(n2).map((e3) => [e3, { enumerable: true, get: () => n2[e3].parse }]))), o2 = ym(t2, n2);
          try {
            return o2.preprocess && (e2 = o2.preprocess(e2, t2)), { text: e2, ast: o2.parse(e2, r2, t2) };
          } catch (t3) {
            const { loc: n3 } = t3;
            if (n3) {
              const { codeFrameColumns: r3 } = ig;
              throw t3.codeFrame = r3(e2, n3, { highlightCode: true }), t3.message += "\n" + t3.codeFrame, t3;
            }
            throw t3.stack;
          }
        }, resolveParser: ym };
        const Em = el, Cm = gl, bm = gp, { UndefinedParserError: vm } = Cp, { getSupportInfo: Am } = za, Fm = Zh, { resolveParser: xm } = Dm, Sm = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
        function wm(e2) {
          const { astFormat: t2 } = e2;
          if (!t2)
            throw new Error("getPlugin() requires astFormat to be set");
          const n2 = e2.plugins.find((e3) => e3.printers && e3.printers[t2]);
          if (!n2)
            throw new Error(`Couldn't find plugin for AST format "`.concat(t2, '"'));
          return n2;
        }
        function Tm(e2, t2) {
          const n2 = Cm.basename(e2).toLowerCase(), r2 = Am({ plugins: t2 }).languages.filter((e3) => e3.since !== null);
          let o2 = r2.find((e3) => e3.extensions && e3.extensions.some((e4) => n2.endsWith(e4)) || e3.filenames && e3.filenames.some((e4) => e4.toLowerCase() === n2));
          if (!o2 && !n2.includes(".")) {
            const t3 = function(e3) {
              if (typeof e3 != "string")
                return "";
              let t4;
              try {
                t4 = Em.openSync(e3, "r");
              } catch {
                return "";
              }
              try {
                const e4 = new bm(t4).next().toString("utf8"), n3 = e4.match(/^#!\/(?:usr\/)?bin\/env\s+(\S+)/);
                if (n3)
                  return n3[1];
                const r3 = e4.match(/^#!\/(?:usr\/(?:local\/)?)?bin\/(\S+)/);
                return r3 ? r3[1] : "";
              } catch {
                return "";
              } finally {
                try {
                  Em.closeSync(t4);
                } catch {
                }
              }
            }(e2);
            o2 = r2.find((e3) => e3.interpreters && e3.interpreters.includes(t3));
          }
          return o2 && o2.parsers[0];
        }
        var Bm = { normalize: function(e2) {
          let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          const n2 = Object.assign({}, e2), r2 = Am({ plugins: e2.plugins, showUnreleased: true, showDeprecated: true }).options, o2 = Object.assign(Object.assign({}, Sm), Object.fromEntries(r2.filter((e3) => e3.default !== void 0).map((e3) => [e3.name, e3.default])));
          if (!n2.parser)
            if (n2.filepath) {
              if (n2.parser = Tm(n2.filepath, n2.plugins), !n2.parser)
                throw new vm("No parser could be inferred for file: ".concat(n2.filepath));
            } else {
              (t2.logger || console).warn("No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred."), n2.parser = "babel";
            }
          const i2 = xm(Fm.normalizeApiOptions(n2, [r2.find((e3) => e3.name === "parser")], { passThrough: true, logger: false }));
          n2.astFormat = i2.astFormat, n2.locEnd = i2.locEnd, n2.locStart = i2.locStart;
          const u2 = wm(n2);
          n2.printer = u2.printers[n2.astFormat];
          const s2 = Object.fromEntries(r2.filter((e3) => e3.pluginDefaults && e3.pluginDefaults[u2.name] !== void 0).map((e3) => [e3.name, e3.pluginDefaults[u2.name]])), a2 = Object.assign(Object.assign({}, o2), s2);
          for (const [e3, t3] of Object.entries(a2))
            n2[e3] !== null && n2[e3] !== void 0 || (n2[e3] = t3);
          return n2.parser === "json" && (n2.trailingComma = "none"), Fm.normalizeApiOptions(n2, r2, Object.assign({ passThrough: Object.keys(Sm) }, t2));
        }, hiddenDefaults: Sm, inferParser: Tm };
        var Nm = function e2(t2, n2, r2) {
          if (Array.isArray(t2))
            return t2.map((t3) => e2(t3, n2, r2)).filter(Boolean);
          if (!t2 || typeof t2 != "object")
            return t2;
          const o2 = n2.printer.massageAstNode;
          let i2;
          i2 = o2 && o2.ignoredProperties ? o2.ignoredProperties : /* @__PURE__ */ new Set();
          const u2 = {};
          for (const [r3, o3] of Object.entries(t2))
            i2.has(r3) || typeof o3 == "function" || (u2[r3] = e2(o3, n2, t2));
          if (o2) {
            const e3 = o2(t2, u2, r2);
            if (e3 === null)
              return;
            if (e3)
              return e3;
          }
          return u2;
        }, km = typeof Object.create == "function" ? function(e2, t2) {
          e2.super_ = t2, e2.prototype = Object.create(t2.prototype, { constructor: { value: e2, enumerable: false, writable: true, configurable: true } });
        } : function(e2, t2) {
          e2.super_ = t2;
          var n2 = function() {
          };
          n2.prototype = t2.prototype, e2.prototype = new n2(), e2.prototype.constructor = e2;
        };
        function Pm(e2, t2) {
          var n2 = { seen: [], stylize: Im };
          return arguments.length >= 3 && (n2.depth = arguments[2]), arguments.length >= 4 && (n2.colors = arguments[3]), Mm(t2) ? n2.showHidden = t2 : t2 && Xm(n2, t2), $m(n2.showHidden) && (n2.showHidden = false), $m(n2.depth) && (n2.depth = 2), $m(n2.colors) && (n2.colors = false), $m(n2.customInspect) && (n2.customInspect = true), n2.colors && (n2.stylize = Om), Lm(n2, e2, n2.depth);
        }
        function Om(e2, t2) {
          var n2 = Pm.styles[t2];
          return n2 ? "\x1B[" + Pm.colors[n2][0] + "m" + e2 + "\x1B[" + Pm.colors[n2][1] + "m" : e2;
        }
        function Im(e2, t2) {
          return e2;
        }
        function Lm(e2, t2, n2) {
          if (e2.customInspect && t2 && Gm(t2.inspect) && t2.inspect !== Pm && (!t2.constructor || t2.constructor.prototype !== t2)) {
            var r2 = t2.inspect(n2, e2);
            return Vm(r2) || (r2 = Lm(e2, r2, n2)), r2;
          }
          var o2 = function(e3, t3) {
            if ($m(t3))
              return e3.stylize("undefined", "undefined");
            if (Vm(t3)) {
              var n3 = "'" + JSON.stringify(t3).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
              return e3.stylize(n3, "string");
            }
            if (r3 = t3, typeof r3 == "number")
              return e3.stylize("" + t3, "number");
            var r3;
            if (Mm(t3))
              return e3.stylize("" + t3, "boolean");
            if (Rm(t3))
              return e3.stylize("null", "null");
          }(e2, t2);
          if (o2)
            return o2;
          var i2 = Object.keys(t2), u2 = function(e3) {
            var t3 = {};
            return e3.forEach(function(e4, n3) {
              t3[e4] = true;
            }), t3;
          }(i2);
          if (e2.showHidden && (i2 = Object.getOwnPropertyNames(t2)), zm(t2) && (i2.indexOf("message") >= 0 || i2.indexOf("description") >= 0))
            return jm(t2);
          if (i2.length === 0) {
            if (Gm(t2)) {
              var s2 = t2.name ? ": " + t2.name : "";
              return e2.stylize("[Function" + s2 + "]", "special");
            }
            if (Wm(t2))
              return e2.stylize(RegExp.prototype.toString.call(t2), "regexp");
            if (Um(t2))
              return e2.stylize(Date.prototype.toString.call(t2), "date");
            if (zm(t2))
              return jm(t2);
          }
          var a2, c2, l3 = "", p2 = false, f2 = ["{", "}"];
          (a2 = t2, Array.isArray(a2) && (p2 = true, f2 = ["[", "]"]), Gm(t2)) && (l3 = " [Function" + (t2.name ? ": " + t2.name : "") + "]");
          return Wm(t2) && (l3 = " " + RegExp.prototype.toString.call(t2)), Um(t2) && (l3 = " " + Date.prototype.toUTCString.call(t2)), zm(t2) && (l3 = " " + jm(t2)), i2.length !== 0 || p2 && t2.length != 0 ? n2 < 0 ? Wm(t2) ? e2.stylize(RegExp.prototype.toString.call(t2), "regexp") : e2.stylize("[Object]", "special") : (e2.seen.push(t2), c2 = p2 ? function(e3, t3, n3, r3, o3) {
            for (var i3 = [], u3 = 0, s3 = t3.length; u3 < s3; ++u3)
              Ym(t3, String(u3)) ? i3.push(_m(e3, t3, n3, r3, String(u3), true)) : i3.push("");
            return o3.forEach(function(o4) {
              o4.match(/^\d+$/) || i3.push(_m(e3, t3, n3, r3, o4, true));
            }), i3;
          }(e2, t2, n2, u2, i2) : i2.map(function(r3) {
            return _m(e2, t2, n2, u2, r3, p2);
          }), e2.seen.pop(), function(e3, t3, n3) {
            if (e3.reduce(function(e4, t4) {
              return t4.indexOf("\n"), e4 + t4.replace(/\u001b\[\d\d?m/g, "").length + 1;
            }, 0) > 60)
              return n3[0] + (t3 === "" ? "" : t3 + "\n ") + " " + e3.join(",\n  ") + " " + n3[1];
            return n3[0] + t3 + " " + e3.join(", ") + " " + n3[1];
          }(c2, l3, f2)) : f2[0] + l3 + f2[1];
        }
        function jm(e2) {
          return "[" + Error.prototype.toString.call(e2) + "]";
        }
        function _m(e2, t2, n2, r2, o2, i2) {
          var u2, s2, a2;
          if ((a2 = Object.getOwnPropertyDescriptor(t2, o2) || { value: t2[o2] }).get ? s2 = a2.set ? e2.stylize("[Getter/Setter]", "special") : e2.stylize("[Getter]", "special") : a2.set && (s2 = e2.stylize("[Setter]", "special")), Ym(r2, o2) || (u2 = "[" + o2 + "]"), s2 || (e2.seen.indexOf(a2.value) < 0 ? (s2 = Rm(n2) ? Lm(e2, a2.value, null) : Lm(e2, a2.value, n2 - 1)).indexOf("\n") > -1 && (s2 = i2 ? s2.split("\n").map(function(e3) {
            return "  " + e3;
          }).join("\n").substr(2) : "\n" + s2.split("\n").map(function(e3) {
            return "   " + e3;
          }).join("\n")) : s2 = e2.stylize("[Circular]", "special")), $m(u2)) {
            if (i2 && o2.match(/^\d+$/))
              return s2;
            (u2 = JSON.stringify("" + o2)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (u2 = u2.substr(1, u2.length - 2), u2 = e2.stylize(u2, "name")) : (u2 = u2.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), u2 = e2.stylize(u2, "string"));
          }
          return u2 + ": " + s2;
        }
        function Mm(e2) {
          return typeof e2 == "boolean";
        }
        function Rm(e2) {
          return e2 === null;
        }
        function Vm(e2) {
          return typeof e2 == "string";
        }
        function $m(e2) {
          return e2 === void 0;
        }
        function Wm(e2) {
          return qm(e2) && Jm(e2) === "[object RegExp]";
        }
        function qm(e2) {
          return typeof e2 == "object" && e2 !== null;
        }
        function Um(e2) {
          return qm(e2) && Jm(e2) === "[object Date]";
        }
        function zm(e2) {
          return qm(e2) && (Jm(e2) === "[object Error]" || e2 instanceof Error);
        }
        function Gm(e2) {
          return typeof e2 == "function";
        }
        function Hm(e2) {
          return e2 === null || typeof e2 == "boolean" || typeof e2 == "number" || typeof e2 == "string" || typeof e2 == "symbol" || e2 === void 0;
        }
        function Jm(e2) {
          return Object.prototype.toString.call(e2);
        }
        function Xm(e2, t2) {
          if (!t2 || !qm(t2))
            return e2;
          for (var n2 = Object.keys(t2), r2 = n2.length; r2--; )
            e2[n2[r2]] = t2[n2[r2]];
          return e2;
        }
        function Ym(e2, t2) {
          return Object.prototype.hasOwnProperty.call(e2, t2);
        }
        function Km(e2, t2) {
          if (e2 === t2)
            return 0;
          for (var n2 = e2.length, r2 = t2.length, o2 = 0, i2 = Math.min(n2, r2); o2 < i2; ++o2)
            if (e2[o2] !== t2[o2]) {
              n2 = e2[o2], r2 = t2[o2];
              break;
            }
          return n2 < r2 ? -1 : r2 < n2 ? 1 : 0;
        }
        Pm.colors = { bold: [1, 22], italic: [3, 23], underline: [4, 24], inverse: [7, 27], white: [37, 39], grey: [90, 39], black: [30, 39], blue: [34, 39], cyan: [36, 39], green: [32, 39], magenta: [35, 39], red: [31, 39], yellow: [33, 39] }, Pm.styles = { special: "cyan", number: "yellow", boolean: "yellow", undefined: "grey", null: "bold", string: "green", date: "magenta", regexp: "red" };
        var Qm, Zm = Object.prototype.hasOwnProperty, ey = Object.keys || function(e2) {
          var t2 = [];
          for (var n2 in e2)
            Zm.call(e2, n2) && t2.push(n2);
          return t2;
        }, ty = Array.prototype.slice;
        function ny() {
          return Qm !== void 0 ? Qm : Qm = function() {
          }.name === "foo";
        }
        function ry(e2) {
          return Object.prototype.toString.call(e2);
        }
        function oy(e2) {
          return !fp(e2) && (typeof Ns.ArrayBuffer == "function" && (typeof ArrayBuffer.isView == "function" ? ArrayBuffer.isView(e2) : !!e2 && (e2 instanceof DataView || !!(e2.buffer && e2.buffer instanceof ArrayBuffer))));
        }
        function iy(e2, t2) {
          e2 || py(e2, true, t2, "==", fy);
        }
        var uy = /\s*function\s+([^\(\s]*)\s*/;
        function sy(e2) {
          if (Gm(e2)) {
            if (ny())
              return e2.name;
            var t2 = e2.toString().match(uy);
            return t2 && t2[1];
          }
        }
        function ay(e2) {
          this.name = "AssertionError", this.actual = e2.actual, this.expected = e2.expected, this.operator = e2.operator, e2.message ? (this.message = e2.message, this.generatedMessage = false) : (this.message = function(e3) {
            return cy(ly(e3.actual), 128) + " " + e3.operator + " " + cy(ly(e3.expected), 128);
          }(this), this.generatedMessage = true);
          var t2 = e2.stackStartFunction || py;
          if (Error.captureStackTrace)
            Error.captureStackTrace(this, t2);
          else {
            var n2 = new Error();
            if (n2.stack) {
              var r2 = n2.stack, o2 = sy(t2), i2 = r2.indexOf("\n" + o2);
              if (i2 >= 0) {
                var u2 = r2.indexOf("\n", i2 + 1);
                r2 = r2.substring(u2 + 1);
              }
              this.stack = r2;
            }
          }
        }
        function cy(e2, t2) {
          return typeof e2 == "string" ? e2.length < t2 ? e2 : e2.slice(0, t2) : e2;
        }
        function ly(e2) {
          if (ny() || !Gm(e2))
            return Pm(e2);
          var t2 = sy(e2);
          return "[Function" + (t2 ? ": " + t2 : "") + "]";
        }
        function py(e2, t2, n2, r2, o2) {
          throw new ay({ message: n2, actual: e2, expected: t2, operator: r2, stackStartFunction: o2 });
        }
        function fy(e2, t2) {
          e2 || py(e2, true, t2, "==", fy);
        }
        function dy(e2, t2, n2) {
          e2 != t2 && py(e2, t2, n2, "==", dy);
        }
        function hy(e2, t2, n2) {
          e2 == t2 && py(e2, t2, n2, "!=", hy);
        }
        function gy(e2, t2, n2) {
          yy(e2, t2, false) || py(e2, t2, n2, "deepEqual", gy);
        }
        function my(e2, t2, n2) {
          yy(e2, t2, true) || py(e2, t2, n2, "deepStrictEqual", my);
        }
        function yy(e2, t2, n2, r2) {
          if (e2 === t2)
            return true;
          if (fp(e2) && fp(t2))
            return Km(e2, t2) === 0;
          if (Um(e2) && Um(t2))
            return e2.getTime() === t2.getTime();
          if (Wm(e2) && Wm(t2))
            return e2.source === t2.source && e2.global === t2.global && e2.multiline === t2.multiline && e2.lastIndex === t2.lastIndex && e2.ignoreCase === t2.ignoreCase;
          if (e2 !== null && typeof e2 == "object" || t2 !== null && typeof t2 == "object") {
            if (oy(e2) && oy(t2) && ry(e2) === ry(t2) && !(e2 instanceof Float32Array || e2 instanceof Float64Array))
              return Km(new Uint8Array(e2.buffer), new Uint8Array(t2.buffer)) === 0;
            if (fp(e2) !== fp(t2))
              return false;
            var o2 = (r2 = r2 || { actual: [], expected: [] }).actual.indexOf(e2);
            return o2 !== -1 && o2 === r2.expected.indexOf(t2) || (r2.actual.push(e2), r2.expected.push(t2), function(e3, t3, n3, r3) {
              if (e3 == null || t3 == null)
                return false;
              if (Hm(e3) || Hm(t3))
                return e3 === t3;
              if (n3 && Object.getPrototypeOf(e3) !== Object.getPrototypeOf(t3))
                return false;
              var o3 = Dy(e3), i2 = Dy(t3);
              if (o3 && !i2 || !o3 && i2)
                return false;
              if (o3)
                return yy(e3 = ty.call(e3), t3 = ty.call(t3), n3);
              var u2, s2, a2 = ey(e3), c2 = ey(t3);
              if (a2.length !== c2.length)
                return false;
              for (a2.sort(), c2.sort(), s2 = a2.length - 1; s2 >= 0; s2--)
                if (a2[s2] !== c2[s2])
                  return false;
              for (s2 = a2.length - 1; s2 >= 0; s2--)
                if (!yy(e3[u2 = a2[s2]], t3[u2], n3, r3))
                  return false;
              return true;
            }(e2, t2, n2, r2));
          }
          return n2 ? e2 === t2 : e2 == t2;
        }
        function Dy(e2) {
          return Object.prototype.toString.call(e2) == "[object Arguments]";
        }
        function Ey(e2, t2, n2) {
          yy(e2, t2, false) && py(e2, t2, n2, "notDeepEqual", Ey);
        }
        function Cy(e2, t2, n2) {
          yy(e2, t2, true) && py(e2, t2, n2, "notDeepStrictEqual", Cy);
        }
        function by(e2, t2, n2) {
          e2 !== t2 && py(e2, t2, n2, "===", by);
        }
        function vy(e2, t2, n2) {
          e2 === t2 && py(e2, t2, n2, "!==", vy);
        }
        function Ay(e2, t2) {
          if (!e2 || !t2)
            return false;
          if (Object.prototype.toString.call(t2) == "[object RegExp]")
            return t2.test(e2);
          try {
            if (e2 instanceof t2)
              return true;
          } catch (e3) {
          }
          return !Error.isPrototypeOf(t2) && t2.call({}, e2) === true;
        }
        function Fy(e2, t2, n2, r2) {
          var o2;
          if (typeof t2 != "function")
            throw new TypeError('"block" argument must be a function');
          typeof n2 == "string" && (r2 = n2, n2 = null), o2 = function(e3) {
            var t3;
            try {
              e3();
            } catch (e4) {
              t3 = e4;
            }
            return t3;
          }(t2), r2 = (n2 && n2.name ? " (" + n2.name + ")." : ".") + (r2 ? " " + r2 : "."), e2 && !o2 && py(o2, n2, "Missing expected exception" + r2);
          var i2 = typeof r2 == "string", u2 = !e2 && o2 && !n2;
          if ((!e2 && zm(o2) && i2 && Ay(o2, n2) || u2) && py(o2, n2, "Got unwanted exception" + r2), e2 && o2 && n2 && !Ay(o2, n2) || !e2 && o2)
            throw o2;
        }
        function xy(e2, t2, n2) {
          Fy(true, e2, t2, n2);
        }
        function Sy(e2, t2, n2) {
          Fy(false, e2, t2, n2);
        }
        function wy(e2) {
          if (e2)
            throw e2;
        }
        iy.AssertionError = ay, km(ay, Error), iy.fail = py, iy.ok = fy, iy.equal = dy, iy.notEqual = hy, iy.deepEqual = gy, iy.deepStrictEqual = my, iy.notDeepEqual = Ey, iy.notDeepStrictEqual = Cy, iy.strictEqual = by, iy.notStrictEqual = vy, iy.throws = xy, iy.doesNotThrow = Sy, iy.ifError = wy;
        var Ty = t(Object.freeze({ __proto__: null, default: iy, AssertionError: ay, fail: py, ok: fy, assert: fy, equal: dy, notEqual: hy, deepEqual: gy, deepStrictEqual: my, notDeepEqual: Ey, notDeepStrictEqual: Cy, strictEqual: by, notStrictEqual: vy, throws: xy, doesNotThrow: Sy, ifError: wy }));
        const By = Ty, { builders: { line: Ny, hardline: ky, breakParent: Py, indent: Oy, lineSuffix: Iy, join: Ly, cursor: jy } } = Zc, { hasNewline: _y, skipNewline: My, skipSpaces: Ry, isPreviousLineEmpty: Vy, addLeadingComment: $y, addDanglingComment: Wy, addTrailingComment: qy } = dc, Uy = /* @__PURE__ */ new WeakMap();
        function zy(e2, t2, n2) {
          if (!e2)
            return;
          const { printer: r2, locStart: o2, locEnd: i2 } = t2;
          if (n2) {
            if (r2.canAttachComment && r2.canAttachComment(e2)) {
              let t3;
              for (t3 = n2.length - 1; t3 >= 0 && !(o2(n2[t3]) <= o2(e2) && i2(n2[t3]) <= i2(e2)); --t3)
                ;
              return void n2.splice(t3 + 1, 0, e2);
            }
          } else if (Uy.has(e2))
            return Uy.get(e2);
          const u2 = r2.getCommentChildNodes && r2.getCommentChildNodes(e2, t2) || typeof e2 == "object" && Object.entries(e2).filter((e3) => {
            let [t3] = e3;
            return t3 !== "enclosingNode" && t3 !== "precedingNode" && t3 !== "followingNode" && t3 !== "tokens" && t3 !== "comments";
          }).map((e3) => {
            let [, t3] = e3;
            return t3;
          });
          if (u2) {
            n2 || (n2 = [], Uy.set(e2, n2));
            for (const e3 of u2)
              zy(e3, t2, n2);
            return n2;
          }
        }
        function Gy(e2, t2, n2, r2) {
          const { locStart: o2, locEnd: i2 } = n2, u2 = o2(t2), s2 = i2(t2), a2 = zy(e2, n2);
          let c2, l3, p2 = 0, f2 = a2.length;
          for (; p2 < f2; ) {
            const e3 = p2 + f2 >> 1, r3 = a2[e3], d2 = o2(r3), h2 = i2(r3);
            if (d2 <= u2 && s2 <= h2)
              return Gy(r3, t2, n2, r3);
            if (h2 <= u2)
              c2 = r3, p2 = e3 + 1;
            else {
              if (!(s2 <= d2))
                throw new Error("Comment location overlaps with node location");
              l3 = r3, f2 = e3;
            }
          }
          if (r2 && r2.type === "TemplateLiteral") {
            const { quasis: e3 } = r2, o3 = Zy(e3, t2, n2);
            c2 && Zy(e3, c2, n2) !== o3 && (c2 = null), l3 && Zy(e3, l3, n2) !== o3 && (l3 = null);
          }
          return { enclosingNode: r2, precedingNode: c2, followingNode: l3 };
        }
        const Hy = () => false;
        const Jy = (e2) => !/[\S\n\u2028\u2029]/.test(e2);
        function Xy(e2, t2, n2, r2) {
          const { comment: o2, precedingNode: i2 } = n2[r2], { locStart: u2, locEnd: s2 } = t2;
          let a2 = u2(o2);
          if (i2)
            for (let t3 = r2 - 1; t3 >= 0; t3--) {
              const { comment: r3, precedingNode: o3 } = n2[t3];
              if (o3 !== i2 || !Jy(e2.slice(s2(r3), a2)))
                break;
              a2 = u2(r3);
            }
          return _y(e2, a2, { backwards: true });
        }
        function Yy(e2, t2, n2, r2) {
          const { comment: o2, followingNode: i2 } = n2[r2], { locStart: u2, locEnd: s2 } = t2;
          let a2 = s2(o2);
          if (i2)
            for (let t3 = r2 + 1; t3 < n2.length; t3++) {
              const { comment: r3, followingNode: o3 } = n2[t3];
              if (o3 !== i2 || !Jy(e2.slice(a2, u2(r3))))
                break;
              a2 = s2(r3);
            }
          return _y(e2, a2);
        }
        function Ky(e2, t2, n2) {
          const r2 = e2.length;
          if (r2 === 0)
            return;
          const { precedingNode: o2, followingNode: i2, enclosingNode: u2 } = e2[0], s2 = n2.printer.getGapRegex && n2.printer.getGapRegex(u2) || /^[\s(]*$/;
          let a2, c2 = n2.locStart(i2);
          for (a2 = r2; a2 > 0; --a2) {
            const { comment: r3, precedingNode: u3, followingNode: l3 } = e2[a2 - 1];
            By.strictEqual(u3, o2), By.strictEqual(l3, i2);
            const p2 = t2.slice(n2.locEnd(r3), c2);
            if (!s2.test(p2))
              break;
            c2 = n2.locStart(r3);
          }
          for (const [t3, { comment: n3 }] of e2.entries())
            t3 < a2 ? qy(o2, n3) : $y(i2, n3);
          for (const e3 of [o2, i2])
            e3.comments && e3.comments.length > 1 && e3.comments.sort((e4, t3) => n2.locStart(e4) - n2.locStart(t3));
          e2.length = 0;
        }
        function Qy(e2, t2) {
          return e2.getValue().printed = true, t2.printer.printComment(e2, t2);
        }
        function Zy(e2, t2, n2) {
          const r2 = n2.locStart(t2) - 1;
          for (let t3 = 1; t3 < e2.length; ++t3)
            if (r2 < n2.locStart(e2[t3]))
              return t3 - 1;
          return 0;
        }
        function eD(e2, t2, n2) {
          const r2 = e2.getValue();
          if (!r2)
            return {};
          let o2 = r2.comments || [];
          n2 && (o2 = o2.filter((e3) => !n2.has(e3)));
          const i2 = r2 === t2.cursorNode;
          if (o2.length === 0) {
            const e3 = i2 ? jy : "";
            return { leading: e3, trailing: e3 };
          }
          const u2 = [], s2 = [];
          return e2.each(() => {
            const r3 = e2.getValue();
            if (n2 && n2.has(r3))
              return;
            const { leading: o3, trailing: i3 } = r3;
            o3 ? u2.push(function(e3, t3) {
              const n3 = e3.getValue(), r4 = [Qy(e3, t3)], { printer: o4, originalText: i4, locStart: u3, locEnd: s3 } = t3;
              if (o4.isBlockComment && o4.isBlockComment(n3)) {
                const e4 = _y(i4, s3(n3)) ? _y(i4, u3(n3), { backwards: true }) ? ky : Ny : " ";
                r4.push(e4);
              } else
                r4.push(ky);
              const a2 = My(i4, Ry(i4, s3(n3)));
              return a2 !== false && _y(i4, a2) && r4.push(ky), r4;
            }(e2, t2)) : i3 && s2.push(function(e3, t3) {
              const n3 = e3.getValue(), r4 = Qy(e3, t3), { printer: o4, originalText: i4, locStart: u3 } = t3, s3 = o4.isBlockComment && o4.isBlockComment(n3);
              if (_y(i4, u3(n3), { backwards: true })) {
                const e4 = Vy(i4, n3, u3);
                return Iy([ky, e4 ? ky : "", r4]);
              }
              let a2 = [" ", r4];
              return s3 || (a2 = [Iy(a2), Py]), a2;
            }(e2, t2));
          }, "comments"), i2 && (u2.unshift(jy), s2.push(jy)), { leading: u2, trailing: s2 };
        }
        var tD = { attach: function(e2, t2, n2, r2) {
          if (!Array.isArray(e2))
            return;
          const o2 = [], { locStart: i2, locEnd: u2, printer: { handleComments: s2 = {} } } = r2, { avoidAstMutation: a2, ownLine: c2 = Hy, endOfLine: l3 = Hy, remaining: p2 = Hy } = s2, f2 = e2.map((o3, i3) => Object.assign(Object.assign({}, Gy(t2, o3, r2)), {}, { comment: o3, text: n2, options: r2, ast: t2, isLastComment: e2.length - 1 === i3 }));
          for (const [e3, t3] of f2.entries()) {
            const { comment: n3, precedingNode: r3, enclosingNode: s3, followingNode: d2, text: h2, options: g2, ast: m2, isLastComment: y2 } = t3;
            if (g2.parser === "json" || g2.parser === "json5" || g2.parser === "__js_expression" || g2.parser === "__vue_expression") {
              if (i2(n3) - i2(m2) <= 0) {
                $y(m2, n3);
                continue;
              }
              if (u2(n3) - u2(m2) >= 0) {
                qy(m2, n3);
                continue;
              }
            }
            let D2;
            if (a2 ? D2 = [t3] : (n3.enclosingNode = s3, n3.precedingNode = r3, n3.followingNode = d2, D2 = [n3, h2, g2, m2, y2]), Xy(h2, g2, f2, e3))
              n3.placement = "ownLine", c2(...D2) || (d2 ? $y(d2, n3) : r3 ? qy(r3, n3) : Wy(s3 || m2, n3));
            else if (Yy(h2, g2, f2, e3))
              n3.placement = "endOfLine", l3(...D2) || (r3 ? qy(r3, n3) : d2 ? $y(d2, n3) : Wy(s3 || m2, n3));
            else if (n3.placement = "remaining", p2(...D2))
              ;
            else if (r3 && d2) {
              const e4 = o2.length;
              if (e4 > 0) {
                o2[e4 - 1].followingNode !== d2 && Ky(o2, h2, g2);
              }
              o2.push(t3);
            } else
              r3 ? qy(r3, n3) : d2 ? $y(d2, n3) : Wy(s3 || m2, n3);
          }
          if (Ky(o2, n2, r2), !a2)
            for (const t3 of e2)
              delete t3.precedingNode, delete t3.enclosingNode, delete t3.followingNode;
        }, printComments: function(e2, t2, n2, r2) {
          const { leading: o2, trailing: i2 } = eD(e2, n2, r2);
          return o2 || i2 ? [o2, t2, i2] : t2;
        }, printCommentsSeparately: eD, printDanglingComments: function(e2, t2, n2, r2) {
          const o2 = [], i2 = e2.getValue();
          return i2 && i2.comments ? (e2.each(() => {
            const n3 = e2.getValue();
            n3.leading || n3.trailing || r2 && !r2(n3) || o2.push(Qy(e2, t2));
          }, "comments"), o2.length === 0 ? "" : n2 ? Ly(ky, o2) : Oy([ky, Ly(ky, o2)])) : "";
        }, getSortedChildNodes: zy, ensureAllCommentsPrinted: function(e2) {
          if (e2)
            for (const t2 of e2) {
              if (!t2.printed)
                throw new Error('Comment "' + t2.value.trim() + '" was not printed. Please report this error!');
              delete t2.printed;
            }
        } };
        const nD = au;
        function rD(e2, t2) {
          const n2 = oD(e2.stack, t2);
          return n2 === -1 ? null : e2.stack[n2];
        }
        function oD(e2, t2) {
          for (let n2 = e2.length - 1; n2 >= 0; n2 -= 2) {
            const r2 = e2[n2];
            if (r2 && !Array.isArray(r2) && --t2 < 0)
              return n2;
          }
          return -1;
        }
        var iD = class {
          constructor(e2) {
            this.stack = [e2];
          }
          getName() {
            const { stack: e2 } = this, { length: t2 } = e2;
            return t2 > 1 ? e2[t2 - 2] : null;
          }
          getValue() {
            return nD(this.stack);
          }
          getNode() {
            return rD(this, arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0);
          }
          getParentNode() {
            return rD(this, (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0) + 1);
          }
          call(e2) {
            const { stack: t2 } = this, { length: n2 } = t2;
            let r2 = nD(t2);
            for (var o2 = arguments.length, i2 = new Array(o2 > 1 ? o2 - 1 : 0), u2 = 1; u2 < o2; u2++)
              i2[u2 - 1] = arguments[u2];
            for (const e3 of i2)
              r2 = r2[e3], t2.push(e3, r2);
            const s2 = e2(this);
            return t2.length = n2, s2;
          }
          callParent(e2) {
            let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
            const n2 = oD(this.stack, t2 + 1), r2 = this.stack.splice(n2 + 1), o2 = e2(this);
            return this.stack.push(...r2), o2;
          }
          each(e2) {
            const { stack: t2 } = this, { length: n2 } = t2;
            let r2 = nD(t2);
            for (var o2 = arguments.length, i2 = new Array(o2 > 1 ? o2 - 1 : 0), u2 = 1; u2 < o2; u2++)
              i2[u2 - 1] = arguments[u2];
            for (const e3 of i2)
              r2 = r2[e3], t2.push(e3, r2);
            for (let n3 = 0; n3 < r2.length; ++n3)
              t2.push(n3, r2[n3]), e2(this, n3, r2), t2.length -= 2;
            t2.length = n2;
          }
          map(e2) {
            const t2 = [];
            for (var n2 = arguments.length, r2 = new Array(n2 > 1 ? n2 - 1 : 0), o2 = 1; o2 < n2; o2++)
              r2[o2 - 1] = arguments[o2];
            return this.each((n3, r3, o3) => {
              t2[r3] = e2(n3, r3, o3);
            }, ...r2), t2;
          }
          try(e2) {
            const { stack: t2 } = this, n2 = [...t2];
            try {
              return e2();
            } finally {
              t2.length = 0, t2.push(...n2);
            }
          }
          match() {
            let e2 = this.stack.length - 1, t2 = null, n2 = this.stack[e2--];
            for (var r2 = arguments.length, o2 = new Array(r2), i2 = 0; i2 < r2; i2++)
              o2[i2] = arguments[i2];
            for (const r3 of o2) {
              if (n2 === void 0)
                return false;
              let o3 = null;
              if (typeof t2 == "number" && (o3 = t2, t2 = this.stack[e2--], n2 = this.stack[e2--]), r3 && !r3(n2, t2, o3))
                return false;
              t2 = this.stack[e2--], n2 = this.stack[e2--];
            }
            return true;
          }
          findAncestor(e2) {
            let t2 = this.stack.length - 1, n2 = null, r2 = this.stack[t2--];
            for (; r2; ) {
              let o2 = null;
              if (typeof n2 == "number" && (o2 = n2, n2 = this.stack[t2--], r2 = this.stack[t2--]), n2 !== null && e2(r2, n2, o2))
                return r2;
              n2 = this.stack[t2--], r2 = this.stack[t2--];
            }
          }
        };
        const { utils: { stripTrailingHardline: uD } } = Zc, { normalize: sD } = Bm, aD = tD;
        var cD = { printSubtree: function(e2, t2, n2, r2) {
          if (n2.printer.embed && n2.embeddedLanguageFormatting === "auto")
            return n2.printer.embed(e2, t2, (e3, t3, o2) => function(e4, t4, n3, r3) {
              let { stripTrailingHardline: o3 = false } = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {};
              const i2 = sD(Object.assign(Object.assign(Object.assign({}, n3), t4), {}, { parentParser: n3.parser, originalText: e4 }), { passThrough: true }), u2 = Dm.parse(e4, i2), { ast: s2 } = u2;
              e4 = u2.text;
              const a2 = s2.comments;
              delete s2.comments, aD.attach(a2, s2, e4, i2), i2[Symbol.for("comments")] = a2 || [], i2[Symbol.for("tokens")] = s2.tokens || [];
              const c2 = r3(s2, i2);
              if (aD.ensureAllCommentsPrinted(a2), o3)
                return typeof c2 == "string" ? c2.replace(/(?:\r?\n)*$/, "") : uD(c2);
              return c2;
            }(e3, t3, n2, r2, o2), n2);
        } };
        const lD = iD, { builders: { hardline: pD, addAlignmentToDoc: fD }, utils: { propagateBreaks: dD } } = Zc, { printComments: hD } = tD, gD = cD;
        function mD(e2, t2) {
          let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
          const { printer: r2 } = t2;
          r2.preprocess && (e2 = r2.preprocess(e2, t2));
          const o2 = /* @__PURE__ */ new Map(), i2 = new lD(e2);
          let u2 = s2();
          return n2 > 0 && (u2 = fD([pD, u2], n2, t2.tabWidth)), dD(u2), u2;
          function s2(e3, t3) {
            return e3 === void 0 || e3 === i2 ? a2(t3) : Array.isArray(e3) ? i2.call(() => a2(t3), ...e3) : i2.call(() => a2(t3), e3);
          }
          function a2(e3) {
            const n3 = i2.getValue(), r3 = n3 && typeof n3 == "object" && e3 === void 0;
            if (r3 && o2.has(n3))
              return o2.get(n3);
            const u3 = yD(i2, t2, s2, e3);
            return r3 && o2.set(n3, u3), u3;
          }
        }
        function yD(t2, n2, r2, o2) {
          const i2 = t2.getValue(), { printer: u2 } = n2;
          let s2, a2;
          if (u2.hasPrettierIgnore && u2.hasPrettierIgnore(t2))
            ({ doc: s2, printedComments: a2 } = function(e2, t3) {
              const { originalText: n3, [Symbol.for("comments")]: r3, locStart: o3, locEnd: i3 } = t3, u3 = o3(e2), s3 = i3(e2), a3 = /* @__PURE__ */ new Set();
              for (const e3 of r3)
                o3(e3) >= u3 && i3(e3) <= s3 && (e3.printed = true, a3.add(e3));
              return { doc: n3.slice(u3, s3), printedComments: a3 };
            }(i2, n2));
          else {
            if (i2)
              try {
                s2 = gD.printSubtree(t2, r2, n2, mD);
              } catch (t3) {
                if (e.PRETTIER_DEBUG)
                  throw t3;
              }
            s2 || (s2 = u2.print(t2, n2, r2, o2));
          }
          return u2.willPrintOwnComments && u2.willPrintOwnComments(t2, n2) || (s2 = hD(t2, s2, n2, a2)), s2;
        }
        var DD = mD;
        const ED = Ty, CD = tD;
        function bD(e2) {
          let t2 = e2.length - 1;
          for (; ; ) {
            const n2 = e2[t2];
            if (!n2 || n2.type !== "Program" && n2.type !== "File")
              break;
            t2--;
          }
          return e2.slice(0, t2 + 1);
        }
        function vD(e2, t2, n2, r2) {
          let o2 = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], i2 = arguments.length > 5 ? arguments[5] : void 0;
          const { locStart: u2, locEnd: s2 } = n2, a2 = u2(e2), c2 = s2(e2);
          if (!(t2 > c2 || t2 < a2 || i2 === "rangeEnd" && t2 === a2 || i2 === "rangeStart" && t2 === c2)) {
            for (const u3 of CD.getSortedChildNodes(e2, n2)) {
              const s3 = vD(u3, t2, n2, r2, [e2, ...o2], i2);
              if (s3)
                return s3;
            }
            return !r2 || r2(e2, o2[0]) ? { node: e2, parentNodes: o2 } : void 0;
          }
        }
        const AD = /* @__PURE__ */ new Set(["ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]), FD = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
        function xD(e2, t2, n2) {
          if (!t2)
            return false;
          switch (e2.parser) {
            case "flow":
            case "babel":
            case "babel-flow":
            case "babel-ts":
            case "typescript":
            case "espree":
            case "meriyah":
            case "__babel_estree":
              return function(e3, t3) {
                return t3 !== "DeclareExportDeclaration" && e3 !== "TypeParameterDeclaration" && (e3 === "Directive" || e3 === "TypeAlias" || e3 === "TSExportAssignment" || e3.startsWith("Declare") || e3.startsWith("TSDeclare") || e3.endsWith("Statement") || e3.endsWith("Declaration"));
              }(t2.type, n2 && n2.type);
            case "json":
            case "json5":
            case "json-stringify":
              return AD.has(t2.type);
            case "graphql":
              return FD.has(t2.kind);
            case "vue":
              return t2.tag !== "root";
          }
          return false;
        }
        var SD = { calculateRange: function(e2, t2, n2) {
          let { rangeStart: r2, rangeEnd: o2, locStart: i2, locEnd: u2 } = t2;
          ED.ok(o2 > r2);
          const s2 = e2.slice(r2, o2).search(/\S/), a2 = s2 === -1;
          if (!a2)
            for (r2 += s2; o2 > r2 && !/\S/.test(e2[o2 - 1]); --o2)
              ;
          const c2 = vD(n2, r2, t2, (e3, n3) => xD(t2, e3, n3), [], "rangeStart"), l3 = a2 ? c2 : vD(n2, o2, t2, (e3) => xD(t2, e3), [], "rangeEnd");
          if (!c2 || !l3)
            return { rangeStart: 0, rangeEnd: 0 };
          let p2, f2;
          if (((e3) => {
            let { parser: t3 } = e3;
            return t3 === "json" || t3 === "json5" || t3 === "json-stringify";
          })(t2)) {
            const e3 = function(e4, t3) {
              const n3 = [e4.node, ...e4.parentNodes], r3 = /* @__PURE__ */ new Set([t3.node, ...t3.parentNodes]);
              return n3.find((e5) => AD.has(e5.type) && r3.has(e5));
            }(c2, l3);
            p2 = e3, f2 = e3;
          } else
            ({ startNode: p2, endNode: f2 } = function(e3, t3, n3) {
              let { locStart: r3, locEnd: o3 } = n3, i3 = e3.node, u3 = t3.node;
              if (i3 === u3)
                return { startNode: i3, endNode: u3 };
              const s3 = r3(e3.node);
              for (const e4 of bD(t3.parentNodes)) {
                if (!(r3(e4) >= s3))
                  break;
                u3 = e4;
              }
              const a3 = o3(t3.node);
              for (const t4 of bD(e3.parentNodes)) {
                if (!(o3(t4) <= a3))
                  break;
                i3 = t4;
              }
              return { startNode: i3, endNode: u3 };
            }(c2, l3, t2));
          return { rangeStart: Math.min(i2(p2), i2(f2)), rangeEnd: Math.max(u2(p2), u2(f2)) };
        }, findNodeAtOffset: vD };
        const wD = r, { printer: { printDocToString: TD }, debug: { printDocToDebug: BD } } = Zc, { getAlignmentSize: ND } = dc, { guessEndOfLine: kD, convertEndOfLineToChars: PD, countEndOfLineChars: OD, normalizeEndOfLine: ID } = hc, LD = Bm.normalize, jD = Nm, _D = tD, MD = Dm, RD = DD, VD = SD, $D = Symbol("cursor");
        function WD(e2, t2, n2) {
          const r2 = t2.comments;
          return r2 && (delete t2.comments, _D.attach(r2, t2, e2, n2)), n2[Symbol.for("comments")] = r2 || [], n2[Symbol.for("tokens")] = t2.tokens || [], n2.originalText = e2, r2;
        }
        function qD(e2, t2) {
          let n2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
          if (!e2 || e2.trim().length === 0)
            return { formatted: "", cursorOffset: -1, comments: [] };
          const { ast: r2, text: o2 } = MD.parse(e2, t2);
          if (t2.cursorOffset >= 0) {
            const e3 = VD.findNodeAtOffset(r2, t2.cursorOffset, t2);
            e3 && e3.node && (t2.cursorNode = e3.node);
          }
          const i2 = WD(o2, r2, t2), u2 = RD(r2, t2, n2), s2 = TD(u2, t2);
          if (_D.ensureAllCommentsPrinted(i2), n2 > 0) {
            const e3 = s2.formatted.trim();
            s2.cursorNodeStart !== void 0 && (s2.cursorNodeStart -= s2.formatted.indexOf(e3)), s2.formatted = e3 + PD(t2.endOfLine);
          }
          if (t2.cursorOffset >= 0) {
            let e3, n3, r3, u3, a2;
            if (t2.cursorNode && s2.cursorNodeText ? (e3 = t2.locStart(t2.cursorNode), n3 = o2.slice(e3, t2.locEnd(t2.cursorNode)), r3 = t2.cursorOffset - e3, u3 = s2.cursorNodeStart, a2 = s2.cursorNodeText) : (e3 = 0, n3 = o2, r3 = t2.cursorOffset, u3 = 0, a2 = s2.formatted), n3 === a2)
              return { formatted: s2.formatted, cursorOffset: u3 + r3, comments: i2 };
            const c2 = [...n3];
            c2.splice(r3, 0, $D);
            const l3 = [...a2], p2 = wD.diffArrays(c2, l3);
            let f2 = u3;
            for (const e4 of p2)
              if (e4.removed) {
                if (e4.value.includes($D))
                  break;
              } else
                f2 += e4.count;
            return { formatted: s2.formatted, cursorOffset: f2, comments: i2 };
          }
          return { formatted: s2.formatted, cursorOffset: -1, comments: i2 };
        }
        function UD(e2, t2, n2) {
          return typeof t2 != "number" || Number.isNaN(t2) || t2 < 0 || t2 > e2.length ? n2 : t2;
        }
        function zD(e2, t2) {
          let { cursorOffset: n2, rangeStart: r2, rangeEnd: o2 } = t2;
          return n2 = UD(e2, n2, -1), r2 = UD(e2, r2, 0), o2 = UD(e2, o2, e2.length), Object.assign(Object.assign({}, t2), {}, { cursorOffset: n2, rangeStart: r2, rangeEnd: o2 });
        }
        function GD(e2, t2) {
          let { cursorOffset: n2, rangeStart: r2, rangeEnd: o2, endOfLine: i2 } = zD(e2, t2);
          const u2 = e2.charAt(0) === "\uFEFF";
          if (u2 && (e2 = e2.slice(1), n2--, r2--, o2--), i2 === "auto" && (i2 = kD(e2)), e2.includes("\r")) {
            const t3 = (t4) => OD(e2.slice(0, Math.max(t4, 0)), "\r\n");
            n2 -= t3(n2), r2 -= t3(r2), o2 -= t3(o2), e2 = ID(e2);
          }
          return { hasBOM: u2, text: e2, options: zD(e2, Object.assign(Object.assign({}, t2), {}, { cursorOffset: n2, rangeStart: r2, rangeEnd: o2, endOfLine: i2 })) };
        }
        function HD(e2, t2) {
          const n2 = MD.resolveParser(t2);
          return !n2.hasPragma || n2.hasPragma(e2);
        }
        function JD(e2, t2) {
          let n2, { hasBOM: r2, text: o2, options: i2 } = GD(e2, LD(t2));
          return i2.rangeStart >= i2.rangeEnd && o2 !== "" || i2.requirePragma && !HD(o2, i2) ? { formatted: e2, cursorOffset: t2.cursorOffset, comments: [] } : (i2.rangeStart > 0 || i2.rangeEnd < o2.length ? n2 = function(e3, t3) {
            const { ast: n3, text: r3 } = MD.parse(e3, t3), { rangeStart: o3, rangeEnd: i3 } = VD.calculateRange(r3, t3, n3), u2 = r3.slice(o3, i3), s2 = Math.min(o3, r3.lastIndexOf("\n", o3) + 1), a2 = r3.slice(s2, o3).match(/^\s*/)[0], c2 = ND(a2, t3.tabWidth), l3 = qD(u2, Object.assign(Object.assign({}, t3), {}, { rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: t3.cursorOffset > o3 && t3.cursorOffset <= i3 ? t3.cursorOffset - o3 : -1, endOfLine: "lf" }), c2), p2 = l3.formatted.trimEnd();
            let { cursorOffset: f2 } = t3;
            f2 > i3 ? f2 += p2.length - u2.length : l3.cursorOffset >= 0 && (f2 = l3.cursorOffset + o3);
            let d2 = r3.slice(0, o3) + p2 + r3.slice(i3);
            if (t3.endOfLine !== "lf") {
              const e4 = PD(t3.endOfLine);
              f2 >= 0 && e4 === "\r\n" && (f2 += OD(d2.slice(0, f2), "\n")), d2 = d2.replace(/\n/g, e4);
            }
            return { formatted: d2, cursorOffset: f2, comments: l3.comments };
          }(o2, i2) : (!i2.requirePragma && i2.insertPragma && i2.printer.insertPragma && !HD(o2, i2) && (o2 = i2.printer.insertPragma(o2)), n2 = qD(o2, i2)), r2 && (n2.formatted = "\uFEFF" + n2.formatted, n2.cursorOffset >= 0 && n2.cursorOffset++), n2);
        }
        var XD = { formatWithCursor: JD, parse(e2, t2, n2) {
          const { text: r2, options: o2 } = GD(e2, LD(t2)), i2 = MD.parse(r2, o2);
          return n2 && (i2.ast = jD(i2.ast, o2)), i2;
        }, formatAST(e2, t2) {
          t2 = LD(t2);
          const n2 = RD(e2, t2);
          return TD(n2, t2);
        }, formatDoc: (e2, t2) => JD(BD(e2), Object.assign(Object.assign({}, t2), {}, { parser: "__js_expression" })).formatted, printToDoc(e2, t2) {
          t2 = LD(t2);
          const { ast: n2, text: r2 } = MD.parse(e2, t2);
          return WD(r2, n2, t2), RD(n2, t2);
        }, printDocToString: (e2, t2) => TD(e2, LD(t2)) };
        const { getMaxContinuousCount: YD, getStringWidth: KD, getAlignmentSize: QD, getIndentSize: ZD, skip: eE, skipWhitespace: tE, skipSpaces: nE, skipNewline: rE, skipToLineEnd: oE, skipEverythingButNewLine: iE, skipInlineComment: uE, skipTrailingComment: sE, hasNewline: aE, hasNewlineInRange: cE, hasSpaces: lE, isNextLineEmpty: pE, isNextLineEmptyAfterIndex: fE, isPreviousLineEmpty: dE, getNextNonSpaceNonCommentCharacterIndex: hE, makeString: gE, addLeadingComment: mE, addDanglingComment: yE, addTrailingComment: DE } = dc;
        var EE = { getMaxContinuousCount: YD, getStringWidth: KD, getAlignmentSize: QD, getIndentSize: ZD, skip: eE, skipWhitespace: tE, skipSpaces: nE, skipNewline: rE, skipToLineEnd: oE, skipEverythingButNewLine: iE, skipInlineComment: uE, skipTrailingComment: sE, hasNewline: aE, hasNewlineInRange: cE, hasSpaces: lE, isNextLineEmpty: pE, isNextLineEmptyAfterIndex: fE, isPreviousLineEmpty: dE, getNextNonSpaceNonCommentCharacterIndex: hE, makeString: gE, addLeadingComment: mE, addDanglingComment: yE, addTrailingComment: DE };
        const CE = ["languageId"];
        var bE = function(e2, t2) {
          const { languageId: n2 } = e2, r2 = cu(e2, CE);
          return Object.assign(Object.assign({ linguistLanguageId: n2 }, r2), t2(e2));
        }, vE = {}, AE = { exports: {} };
        !function() {
          function e2(e3) {
            if (e3 == null)
              return false;
            switch (e3.type) {
              case "BlockStatement":
              case "BreakStatement":
              case "ContinueStatement":
              case "DebuggerStatement":
              case "DoWhileStatement":
              case "EmptyStatement":
              case "ExpressionStatement":
              case "ForInStatement":
              case "ForStatement":
              case "IfStatement":
              case "LabeledStatement":
              case "ReturnStatement":
              case "SwitchStatement":
              case "ThrowStatement":
              case "TryStatement":
              case "VariableDeclaration":
              case "WhileStatement":
              case "WithStatement":
                return true;
            }
            return false;
          }
          function t2(e3) {
            switch (e3.type) {
              case "IfStatement":
                return e3.alternate != null ? e3.alternate : e3.consequent;
              case "LabeledStatement":
              case "ForStatement":
              case "ForInStatement":
              case "WhileStatement":
              case "WithStatement":
                return e3.body;
            }
            return null;
          }
          AE.exports = { isExpression: function(e3) {
            if (e3 == null)
              return false;
            switch (e3.type) {
              case "ArrayExpression":
              case "AssignmentExpression":
              case "BinaryExpression":
              case "CallExpression":
              case "ConditionalExpression":
              case "FunctionExpression":
              case "Identifier":
              case "Literal":
              case "LogicalExpression":
              case "MemberExpression":
              case "NewExpression":
              case "ObjectExpression":
              case "SequenceExpression":
              case "ThisExpression":
              case "UnaryExpression":
              case "UpdateExpression":
                return true;
            }
            return false;
          }, isStatement: e2, isIterationStatement: function(e3) {
            if (e3 == null)
              return false;
            switch (e3.type) {
              case "DoWhileStatement":
              case "ForInStatement":
              case "ForStatement":
              case "WhileStatement":
                return true;
            }
            return false;
          }, isSourceElement: function(t3) {
            return e2(t3) || t3 != null && t3.type === "FunctionDeclaration";
          }, isProblematicIfStatement: function(e3) {
            var n2;
            if (e3.type !== "IfStatement")
              return false;
            if (e3.alternate == null)
              return false;
            n2 = e3.consequent;
            do {
              if (n2.type === "IfStatement" && n2.alternate == null)
                return true;
              n2 = t2(n2);
            } while (n2);
            return false;
          }, trailingStatement: t2 };
        }();
        var FE = { exports: {} };
        !function() {
          var e2, t2, n2, r2, o2, i2;
          function u2(e3) {
            return e3 <= 65535 ? String.fromCharCode(e3) : String.fromCharCode(Math.floor((e3 - 65536) / 1024) + 55296) + String.fromCharCode((e3 - 65536) % 1024 + 56320);
          }
          for (t2 = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/ }, e2 = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/ }, n2 = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279], r2 = new Array(128), i2 = 0; i2 < 128; ++i2)
            r2[i2] = i2 >= 97 && i2 <= 122 || i2 >= 65 && i2 <= 90 || i2 === 36 || i2 === 95;
          for (o2 = new Array(128), i2 = 0; i2 < 128; ++i2)
            o2[i2] = i2 >= 97 && i2 <= 122 || i2 >= 65 && i2 <= 90 || i2 >= 48 && i2 <= 57 || i2 === 36 || i2 === 95;
          FE.exports = { isDecimalDigit: function(e3) {
            return 48 <= e3 && e3 <= 57;
          }, isHexDigit: function(e3) {
            return 48 <= e3 && e3 <= 57 || 97 <= e3 && e3 <= 102 || 65 <= e3 && e3 <= 70;
          }, isOctalDigit: function(e3) {
            return e3 >= 48 && e3 <= 55;
          }, isWhiteSpace: function(e3) {
            return e3 === 32 || e3 === 9 || e3 === 11 || e3 === 12 || e3 === 160 || e3 >= 5760 && n2.indexOf(e3) >= 0;
          }, isLineTerminator: function(e3) {
            return e3 === 10 || e3 === 13 || e3 === 8232 || e3 === 8233;
          }, isIdentifierStartES5: function(e3) {
            return e3 < 128 ? r2[e3] : t2.NonAsciiIdentifierStart.test(u2(e3));
          }, isIdentifierPartES5: function(e3) {
            return e3 < 128 ? o2[e3] : t2.NonAsciiIdentifierPart.test(u2(e3));
          }, isIdentifierStartES6: function(t3) {
            return t3 < 128 ? r2[t3] : e2.NonAsciiIdentifierStart.test(u2(t3));
          }, isIdentifierPartES6: function(t3) {
            return t3 < 128 ? o2[t3] : e2.NonAsciiIdentifierPart.test(u2(t3));
          } };
        }();
        var xE = { exports: {} };
        !function() {
          var e2 = FE.exports;
          function t2(e3, t3) {
            return !(!t3 && e3 === "yield") && n2(e3, t3);
          }
          function n2(e3, t3) {
            if (t3 && function(e4) {
              switch (e4) {
                case "implements":
                case "interface":
                case "package":
                case "private":
                case "protected":
                case "public":
                case "static":
                case "let":
                  return true;
                default:
                  return false;
              }
            }(e3))
              return true;
            switch (e3.length) {
              case 2:
                return e3 === "if" || e3 === "in" || e3 === "do";
              case 3:
                return e3 === "var" || e3 === "for" || e3 === "new" || e3 === "try";
              case 4:
                return e3 === "this" || e3 === "else" || e3 === "case" || e3 === "void" || e3 === "with" || e3 === "enum";
              case 5:
                return e3 === "while" || e3 === "break" || e3 === "catch" || e3 === "throw" || e3 === "const" || e3 === "yield" || e3 === "class" || e3 === "super";
              case 6:
                return e3 === "return" || e3 === "typeof" || e3 === "delete" || e3 === "switch" || e3 === "export" || e3 === "import";
              case 7:
                return e3 === "default" || e3 === "finally" || e3 === "extends";
              case 8:
                return e3 === "function" || e3 === "continue" || e3 === "debugger";
              case 10:
                return e3 === "instanceof";
              default:
                return false;
            }
          }
          function r2(e3, n3) {
            return e3 === "null" || e3 === "true" || e3 === "false" || t2(e3, n3);
          }
          function o2(e3, t3) {
            return e3 === "null" || e3 === "true" || e3 === "false" || n2(e3, t3);
          }
          function i2(t3) {
            var n3, r3, o3;
            if (t3.length === 0)
              return false;
            if (o3 = t3.charCodeAt(0), !e2.isIdentifierStartES5(o3))
              return false;
            for (n3 = 1, r3 = t3.length; n3 < r3; ++n3)
              if (o3 = t3.charCodeAt(n3), !e2.isIdentifierPartES5(o3))
                return false;
            return true;
          }
          function u2(t3) {
            var n3, r3, o3, i3, u3;
            if (t3.length === 0)
              return false;
            for (u3 = e2.isIdentifierStartES6, n3 = 0, r3 = t3.length; n3 < r3; ++n3) {
              if (55296 <= (o3 = t3.charCodeAt(n3)) && o3 <= 56319) {
                if (++n3 >= r3)
                  return false;
                if (!(56320 <= (i3 = t3.charCodeAt(n3)) && i3 <= 57343))
                  return false;
                o3 = 1024 * (o3 - 55296) + (i3 - 56320) + 65536;
              }
              if (!u3(o3))
                return false;
              u3 = e2.isIdentifierPartES6;
            }
            return true;
          }
          xE.exports = { isKeywordES5: t2, isKeywordES6: n2, isReservedWordES5: r2, isReservedWordES6: o2, isRestrictedWord: function(e3) {
            return e3 === "eval" || e3 === "arguments";
          }, isIdentifierNameES5: i2, isIdentifierNameES6: u2, isIdentifierES5: function(e3, t3) {
            return i2(e3) && !r2(e3, t3);
          }, isIdentifierES6: function(e3, t3) {
            return u2(e3) && !o2(e3, t3);
          } };
        }(), vE.ast = AE.exports, vE.code = FE.exports, vE.keyword = xE.exports;
        const SE = vE.keyword.isIdentifierNameES5, { getLast: wE, hasNewline: TE, skipWhitespace: BE, isNonEmptyArray: NE, isNextLineEmptyAfterIndex: kE, getStringWidth: PE } = dc, { locStart: OE, locEnd: IE, hasSameLocStart: LE } = og, jE = "(?:(?=.)\\s)", _E = new RegExp("^".concat(jE, "*:")), ME = new RegExp("^".concat(jE, "*::"));
        function RE(e2) {
          return e2.type === "Block" || e2.type === "CommentBlock" || e2.type === "MultiLine";
        }
        function VE(e2) {
          return e2.type === "Line" || e2.type === "CommentLine" || e2.type === "SingleLine" || e2.type === "HashbangComment" || e2.type === "HTMLOpen" || e2.type === "HTMLClose";
        }
        const $E = /* @__PURE__ */ new Set(["ExportDefaultDeclaration", "ExportDefaultSpecifier", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration"]);
        function WE(e2) {
          return e2 && $E.has(e2.type);
        }
        function qE(e2) {
          return e2.type === "NumericLiteral" || e2.type === "Literal" && typeof e2.value == "number";
        }
        function UE(e2) {
          return e2.type === "StringLiteral" || e2.type === "Literal" && typeof e2.value == "string";
        }
        function zE(e2) {
          return e2.type === "FunctionExpression" || e2.type === "ArrowFunctionExpression";
        }
        function GE(e2) {
          return ZE(e2) && e2.callee.type === "Identifier" && (e2.callee.name === "async" || e2.callee.name === "inject" || e2.callee.name === "fakeAsync");
        }
        function HE(e2) {
          return e2.type === "JSXElement" || e2.type === "JSXFragment";
        }
        function JE(e2) {
          return e2.kind === "get" || e2.kind === "set";
        }
        function XE(e2) {
          return JE(e2) || LE(e2, e2.value);
        }
        const YE = /* @__PURE__ */ new Set(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);
        const KE = /* @__PURE__ */ new Set(["AnyTypeAnnotation", "TSAnyKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword", "ThisTypeAnnotation", "TSThisType", "NumberTypeAnnotation", "TSNumberKeyword", "VoidTypeAnnotation", "TSVoidKeyword", "BooleanTypeAnnotation", "TSBooleanKeyword", "BigIntTypeAnnotation", "TSBigIntKeyword", "SymbolTypeAnnotation", "TSSymbolKeyword", "StringTypeAnnotation", "TSStringKeyword", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType", "EmptyTypeAnnotation", "MixedTypeAnnotation", "TSNeverKeyword", "TSObjectKeyword", "TSUndefinedKeyword", "TSUnknownKeyword"]);
        const QE = /^(?:skip|[fx]?(?:it|describe|test))$/;
        function ZE(e2) {
          return e2 && (e2.type === "CallExpression" || e2.type === "OptionalCallExpression");
        }
        function eC(e2) {
          return e2 && (e2.type === "MemberExpression" || e2.type === "OptionalMemberExpression");
        }
        function tC(e2) {
          return /^(?:\d+|\d+\.\d+)$/.test(e2);
        }
        function nC(e2) {
          return e2.quasis.some((e3) => e3.value.raw.includes("\n"));
        }
        function rC(e2) {
          return e2.extra ? e2.extra.raw : e2.raw;
        }
        const oC = { "==": true, "!=": true, "===": true, "!==": true }, iC = { "*": true, "/": true, "%": true }, uC = { ">>": true, ">>>": true, "<<": true };
        const sC = {};
        for (const [e2, t2] of [["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].entries())
          for (const n2 of t2)
            sC[n2] = e2;
        function aC(e2) {
          return sC[e2];
        }
        const cC = /* @__PURE__ */ new WeakMap();
        function lC(e2) {
          if (cC.has(e2))
            return cC.get(e2);
          const t2 = [];
          return e2.this && t2.push(e2.this), Array.isArray(e2.parameters) ? t2.push(...e2.parameters) : Array.isArray(e2.params) && t2.push(...e2.params), e2.rest && t2.push(e2.rest), cC.set(e2, t2), t2;
        }
        const pC = /* @__PURE__ */ new WeakMap();
        function fC(e2) {
          if (pC.has(e2))
            return pC.get(e2);
          let t2 = e2.arguments;
          return e2.type === "ImportExpression" && (t2 = [e2.source], e2.attributes && t2.push(e2.attributes)), pC.set(e2, t2), t2;
        }
        function dC(e2) {
          return e2.value.trim() === "prettier-ignore" && !e2.unignore;
        }
        function hC(e2) {
          return e2 && (e2.prettierIgnore || yC(e2, gC.PrettierIgnore));
        }
        const gC = { Leading: 2, Trailing: 4, Dangling: 8, Block: 16, Line: 32, PrettierIgnore: 64, First: 128, Last: 256 }, mC = (e2, t2) => {
          if (typeof e2 == "function" && (t2 = e2, e2 = 0), e2 || t2)
            return (n2, r2, o2) => !(e2 & gC.Leading && !n2.leading || e2 & gC.Trailing && !n2.trailing || e2 & gC.Dangling && (n2.leading || n2.trailing) || e2 & gC.Block && !RE(n2) || e2 & gC.Line && !VE(n2) || e2 & gC.First && r2 !== 0 || e2 & gC.Last && r2 !== o2.length - 1 || e2 & gC.PrettierIgnore && !dC(n2) || t2 && !t2(n2));
        };
        function yC(e2, t2, n2) {
          if (!e2 || !NE(e2.comments))
            return false;
          const r2 = mC(t2, n2);
          return !r2 || e2.comments.some(r2);
        }
        function DC(e2, t2, n2) {
          if (!e2 || !Array.isArray(e2.comments))
            return [];
          const r2 = mC(t2, n2);
          return r2 ? e2.comments.filter(r2) : e2.comments;
        }
        function EC(e2) {
          return ZE(e2) || e2.type === "NewExpression" || e2.type === "ImportExpression";
        }
        var CC = { getFunctionParameters: lC, iterateFunctionParametersPath: function(e2, t2) {
          const n2 = e2.getValue();
          let r2 = 0;
          const o2 = (e3) => t2(e3, r2++);
          n2.this && e2.call(o2, "this"), Array.isArray(n2.parameters) ? e2.each(o2, "parameters") : Array.isArray(n2.params) && e2.each(o2, "params"), n2.rest && e2.call(o2, "rest");
        }, getCallArguments: fC, iterateCallArgumentsPath: function(e2, t2) {
          const n2 = e2.getValue();
          n2.type === "ImportExpression" ? (e2.call((e3) => t2(e3, 0), "source"), n2.attributes && e2.call((e3) => t2(e3, 1), "attributes")) : e2.each(t2, "arguments");
        }, hasRestParameter: function(e2) {
          if (e2.rest)
            return true;
          const t2 = lC(e2);
          return t2.length > 0 && wE(t2).type === "RestElement";
        }, getLeftSide: function(e2) {
          return e2.expressions ? e2.expressions[0] : e2.left || e2.test || e2.callee || e2.object || e2.tag || e2.argument || e2.expression;
        }, getLeftSidePathName: function(e2, t2) {
          if (t2.expressions)
            return ["expressions", 0];
          if (t2.left)
            return ["left"];
          if (t2.test)
            return ["test"];
          if (t2.object)
            return ["object"];
          if (t2.callee)
            return ["callee"];
          if (t2.tag)
            return ["tag"];
          if (t2.argument)
            return ["argument"];
          if (t2.expression)
            return ["expression"];
          throw new Error("Unexpected node has no left side.");
        }, getParentExportDeclaration: function(e2) {
          const t2 = e2.getParentNode();
          return e2.getName() === "declaration" && WE(t2) ? t2 : null;
        }, getTypeScriptMappedTypeModifier: function(e2, t2) {
          return e2 === "+" ? "+" + t2 : e2 === "-" ? "-" + t2 : t2;
        }, hasFlowAnnotationComment: function(e2) {
          return NE(e2) && RE(e2[0]) && ME.test(e2[0].value);
        }, hasFlowShorthandAnnotationComment: function(e2) {
          return e2.extra && e2.extra.parenthesized && NE(e2.trailingComments) && RE(e2.trailingComments[0]) && _E.test(e2.trailingComments[0].value);
        }, hasLeadingOwnLineComment: function(e2, t2) {
          return HE(t2) ? hC(t2) : yC(t2, gC.Leading, (t3) => TE(e2, IE(t3)));
        }, hasNakedLeftSide: function(e2) {
          return e2.type === "AssignmentExpression" || e2.type === "BinaryExpression" || e2.type === "LogicalExpression" || e2.type === "NGPipeExpression" || e2.type === "ConditionalExpression" || ZE(e2) || eC(e2) || e2.type === "SequenceExpression" || e2.type === "TaggedTemplateExpression" || e2.type === "BindExpression" || e2.type === "UpdateExpression" && !e2.prefix || e2.type === "TSAsExpression" || e2.type === "TSNonNullExpression";
        }, hasNode: function e2(t2, n2) {
          if (!t2 || typeof t2 != "object")
            return false;
          if (Array.isArray(t2))
            return t2.some((t3) => e2(t3, n2));
          const r2 = n2(t2);
          return typeof r2 == "boolean" ? r2 : Object.values(t2).some((t3) => e2(t3, n2));
        }, hasIgnoreComment: function(e2) {
          return hC(e2.getValue());
        }, hasNodeIgnoreComment: hC, identity: function(e2) {
          return e2;
        }, isBinaryish: function(e2) {
          return YE.has(e2.type);
        }, isBlockComment: RE, isCallLikeExpression: EC, isEnabledHackPipeline: function(e2) {
          return Boolean(e2.__isUsingHackPipeline);
        }, isLineComment: VE, isPrettierIgnoreComment: dC, isCallExpression: ZE, isMemberExpression: eC, isExportDeclaration: WE, isFlowAnnotationComment: function(e2, t2) {
          const n2 = OE(t2), r2 = BE(e2, IE(t2));
          return r2 !== false && e2.slice(n2, n2 + 2) === "/*" && e2.slice(r2, r2 + 2) === "*/";
        }, isFunctionCompositionArgs: function(e2) {
          if (e2.length <= 1)
            return false;
          let t2 = 0;
          for (const n2 of e2)
            if (zE(n2)) {
              if (t2 += 1, t2 > 1)
                return true;
            } else if (ZE(n2)) {
              for (const e3 of n2.arguments)
                if (zE(e3))
                  return true;
            }
          return false;
        }, isFunctionNotation: XE, isFunctionOrArrowExpression: zE, isGetterOrSetter: JE, isJestEachTemplateLiteral: function(e2, t2) {
          const n2 = /^[fx]?(?:describe|it|test)$/;
          return t2.type === "TaggedTemplateExpression" && t2.quasi === e2 && t2.tag.type === "MemberExpression" && t2.tag.property.type === "Identifier" && t2.tag.property.name === "each" && (t2.tag.object.type === "Identifier" && n2.test(t2.tag.object.name) || t2.tag.object.type === "MemberExpression" && t2.tag.object.property.type === "Identifier" && (t2.tag.object.property.name === "only" || t2.tag.object.property.name === "skip") && t2.tag.object.object.type === "Identifier" && n2.test(t2.tag.object.object.name));
        }, isJsxNode: HE, isLiteral: function(e2) {
          return e2.type === "BooleanLiteral" || e2.type === "DirectiveLiteral" || e2.type === "Literal" || e2.type === "NullLiteral" || e2.type === "NumericLiteral" || e2.type === "BigIntLiteral" || e2.type === "DecimalLiteral" || e2.type === "RegExpLiteral" || e2.type === "StringLiteral" || e2.type === "TemplateLiteral" || e2.type === "TSTypeLiteral" || e2.type === "JSXText";
        }, isLongCurriedCallExpression: function(e2) {
          const t2 = e2.getValue(), n2 = e2.getParentNode();
          return ZE(t2) && ZE(n2) && n2.callee === t2 && t2.arguments.length > n2.arguments.length && n2.arguments.length > 0;
        }, isSimpleCallArgument: function e2(t2, n2) {
          if (n2 >= 2)
            return false;
          const r2 = (t3) => e2(t3, n2 + 1), o2 = t2.type === "Literal" && "regex" in t2 && t2.regex.pattern || t2.type === "RegExpLiteral" && t2.pattern;
          return !(o2 && PE(o2) > 5) && (t2.type === "Literal" || t2.type === "BigIntLiteral" || t2.type === "DecimalLiteral" || t2.type === "BooleanLiteral" || t2.type === "NullLiteral" || t2.type === "NumericLiteral" || t2.type === "RegExpLiteral" || t2.type === "StringLiteral" || t2.type === "Identifier" || t2.type === "ThisExpression" || t2.type === "Super" || t2.type === "PrivateName" || t2.type === "PrivateIdentifier" || t2.type === "ArgumentPlaceholder" || t2.type === "Import" || (t2.type === "TemplateLiteral" ? t2.quasis.every((e3) => !e3.value.raw.includes("\n")) && t2.expressions.every(r2) : t2.type === "ObjectExpression" ? t2.properties.every((e3) => !e3.computed && (e3.shorthand || e3.value && r2(e3.value))) : t2.type === "ArrayExpression" ? t2.elements.every((e3) => e3 === null || r2(e3)) : EC(t2) ? (t2.type === "ImportExpression" || e2(t2.callee, n2)) && fC(t2).every(r2) : eC(t2) ? e2(t2.object, n2) && e2(t2.property, n2) : t2.type !== "UnaryExpression" || t2.operator !== "!" && t2.operator !== "-" ? t2.type === "TSNonNullExpression" && e2(t2.expression, n2) : e2(t2.argument, n2)));
        }, isMemberish: function(e2) {
          return eC(e2) || e2.type === "BindExpression" && Boolean(e2.object);
        }, isNumericLiteral: qE, isSignedNumericLiteral: function(e2) {
          return e2.type === "UnaryExpression" && (e2.operator === "+" || e2.operator === "-") && qE(e2.argument);
        }, isObjectProperty: function(e2) {
          return e2 && (e2.type === "ObjectProperty" || e2.type === "Property" && !e2.method && e2.kind === "init");
        }, isObjectType: function(e2) {
          return e2.type === "ObjectTypeAnnotation" || e2.type === "TSTypeLiteral" || e2.type === "TSMappedType";
        }, isObjectTypePropertyAFunction: function(e2) {
          return !(e2.type !== "ObjectTypeProperty" && e2.type !== "ObjectTypeInternalSlot" || e2.value.type !== "FunctionTypeAnnotation" || e2.static || XE(e2));
        }, isSimpleType: function(e2) {
          return !!e2 && (!(e2.type !== "GenericTypeAnnotation" && e2.type !== "TSTypeReference" || e2.typeParameters) || !!KE.has(e2.type));
        }, isSimpleNumber: tC, isSimpleTemplateLiteral: function(e2) {
          let t2 = "expressions";
          e2.type === "TSTemplateLiteralType" && (t2 = "types");
          const n2 = e2[t2];
          return n2.length !== 0 && n2.every((e3) => {
            if (yC(e3))
              return false;
            if (e3.type === "Identifier" || e3.type === "ThisExpression")
              return true;
            if (eC(e3)) {
              let t3 = e3;
              for (; eC(t3); ) {
                if (t3.property.type !== "Identifier" && t3.property.type !== "Literal" && t3.property.type !== "StringLiteral" && t3.property.type !== "NumericLiteral")
                  return false;
                if (t3 = t3.object, yC(t3))
                  return false;
              }
              return t3.type === "Identifier" || t3.type === "ThisExpression";
            }
            return false;
          });
        }, isStringLiteral: UE, isStringPropSafeToUnquote: function(e2, t2) {
          return t2.parser !== "json" && UE(e2.key) && rC(e2.key).slice(1, -1) === e2.key.value && (SE(e2.key.value) && !(t2.parser === "babel-ts" && e2.type === "ClassProperty" || t2.parser === "typescript" && e2.type === "PropertyDefinition") || tC(e2.key.value) && String(Number(e2.key.value)) === e2.key.value && (t2.parser === "babel" || t2.parser === "espree" || t2.parser === "meriyah" || t2.parser === "__babel_estree"));
        }, isTemplateOnItsOwnLine: function(e2, t2) {
          return (e2.type === "TemplateLiteral" && nC(e2) || e2.type === "TaggedTemplateExpression" && nC(e2.quasi)) && !TE(t2, OE(e2), { backwards: true });
        }, isTestCall: function e2(t2, n2) {
          if (t2.type !== "CallExpression")
            return false;
          if (t2.arguments.length === 1) {
            if (GE(t2) && n2 && e2(n2))
              return zE(t2.arguments[0]);
            if (function(e3) {
              return e3.callee.type === "Identifier" && /^(?:before|after)(?:Each|All)$/.test(e3.callee.name) && e3.arguments.length === 1;
            }(t2))
              return GE(t2.arguments[0]);
          } else if ((t2.arguments.length === 2 || t2.arguments.length === 3) && (t2.callee.type === "Identifier" && QE.test(t2.callee.name) || function(e3) {
            return eC(e3.callee) && e3.callee.object.type === "Identifier" && e3.callee.property.type === "Identifier" && QE.test(e3.callee.object.name) && (e3.callee.property.name === "only" || e3.callee.property.name === "skip");
          }(t2)) && (function(e3) {
            return e3.type === "TemplateLiteral";
          }(t2.arguments[0]) || UE(t2.arguments[0])))
            return !(t2.arguments[2] && !qE(t2.arguments[2])) && ((t2.arguments.length === 2 ? zE(t2.arguments[1]) : function(e3) {
              return e3.type === "FunctionExpression" || e3.type === "ArrowFunctionExpression" && e3.body.type === "BlockStatement";
            }(t2.arguments[1]) && lC(t2.arguments[1]).length <= 1) || GE(t2.arguments[1]));
          return false;
        }, isTheOnlyJsxElementInMarkdown: function(e2, t2) {
          if (e2.parentParser !== "markdown" && e2.parentParser !== "mdx")
            return false;
          const n2 = t2.getNode();
          if (!n2.expression || !HE(n2.expression))
            return false;
          const r2 = t2.getParentNode();
          return r2.type === "Program" && r2.body.length === 1;
        }, isTSXFile: function(e2) {
          return e2.filepath && /\.tsx$/i.test(e2.filepath);
        }, isTypeAnnotationAFunction: function(e2) {
          return !(e2.type !== "TypeAnnotation" && e2.type !== "TSTypeAnnotation" || e2.typeAnnotation.type !== "FunctionTypeAnnotation" || e2.static || LE(e2, e2.typeAnnotation));
        }, isNextLineEmpty: (e2, t2) => {
          let { originalText: n2 } = t2;
          return kE(n2, IE(e2));
        }, needsHardlineAfterDanglingComment: function(e2) {
          if (!yC(e2))
            return false;
          const t2 = wE(DC(e2, gC.Dangling));
          return t2 && !RE(t2);
        }, rawText: rC, shouldPrintComma: function(e2) {
          let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "es5";
          return e2.trailingComma === "es5" && t2 === "es5" || e2.trailingComma === "all" && (t2 === "all" || t2 === "es5");
        }, isBitwiseOperator: function(e2) {
          return Boolean(uC[e2]) || e2 === "|" || e2 === "^" || e2 === "&";
        }, shouldFlatten: function(e2, t2) {
          return aC(t2) === aC(e2) && (e2 !== "**" && ((!oC[e2] || !oC[t2]) && (!(t2 === "%" && iC[e2] || e2 === "%" && iC[t2]) && ((t2 === e2 || !iC[t2] || !iC[e2]) && (!uC[e2] || !uC[t2])))));
        }, startsWithNoLookaheadToken: function e2(t2, n2) {
          switch ((t2 = function(e3) {
            for (; e3.left; )
              e3 = e3.left;
            return e3;
          }(t2)).type) {
            case "FunctionExpression":
            case "ClassExpression":
            case "DoExpression":
              return n2;
            case "ObjectExpression":
              return true;
            case "MemberExpression":
            case "OptionalMemberExpression":
              return e2(t2.object, n2);
            case "TaggedTemplateExpression":
              return t2.tag.type !== "FunctionExpression" && e2(t2.tag, n2);
            case "CallExpression":
            case "OptionalCallExpression":
              return t2.callee.type !== "FunctionExpression" && e2(t2.callee, n2);
            case "ConditionalExpression":
              return e2(t2.test, n2);
            case "UpdateExpression":
              return !t2.prefix && e2(t2.argument, n2);
            case "BindExpression":
              return t2.object && e2(t2.object, n2);
            case "SequenceExpression":
              return e2(t2.expressions[0], n2);
            case "TSAsExpression":
            case "TSNonNullExpression":
              return e2(t2.expression, n2);
            default:
              return false;
          }
        }, getPrecedence: aC, hasComment: yC, getComments: DC, CommentCheckFlags: gC };
        const bC = au, { getStringWidth: vC, getIndentSize: AC } = dc, { builders: { join: FC, hardline: xC, softline: SC, group: wC, indent: TC, align: BC, lineSuffixBoundary: NC, addAlignmentToDoc: kC }, printer: { printDocToString: PC }, utils: { mapDoc: OC } } = Zc, { isBinaryish: IC, isJestEachTemplateLiteral: LC, isSimpleTemplateLiteral: jC, hasComment: _C, isMemberExpression: MC } = CC;
        function RC(e2) {
          return e2.replace(/([\\`]|\${)/g, "\\$1");
        }
        var VC = { printTemplateLiteral: function(e2, t2, n2) {
          const r2 = e2.getValue();
          if (r2.type === "TemplateLiteral" && LC(r2, e2.getParentNode())) {
            const r3 = function(e3, t3, n3) {
              const r4 = e3.getNode(), o3 = r4.quasis[0].value.raw.trim().split(/\s*\|\s*/);
              if (o3.length > 1 || o3.some((e4) => e4.length > 0)) {
                t3.__inJestEach = true;
                const i3 = e3.map(n3, "expressions");
                t3.__inJestEach = false;
                const u3 = [], s3 = i3.map((e4) => "${" + PC(e4, Object.assign(Object.assign({}, t3), {}, { printWidth: Number.POSITIVE_INFINITY, endOfLine: "lf" })).formatted + "}"), a2 = [{ hasLineBreak: false, cells: [] }];
                for (let e4 = 1; e4 < r4.quasis.length; e4++) {
                  const t4 = bC(a2), n4 = s3[e4 - 1];
                  t4.cells.push(n4), n4.includes("\n") && (t4.hasLineBreak = true), r4.quasis[e4].value.raw.includes("\n") && a2.push({ hasLineBreak: false, cells: [] });
                }
                const c2 = Math.max(o3.length, ...a2.map((e4) => e4.cells.length)), l3 = Array.from({ length: c2 }).fill(0), p2 = [{ cells: o3 }, ...a2.filter((e4) => e4.cells.length > 0)];
                for (const { cells: e4 } of p2.filter((e5) => !e5.hasLineBreak))
                  for (const [t4, n4] of e4.entries())
                    l3[t4] = Math.max(l3[t4], vC(n4));
                return u3.push(NC, "`", TC([xC, FC(xC, p2.map((e4) => FC(" | ", e4.cells.map((t4, n4) => e4.hasLineBreak ? t4 : t4 + " ".repeat(l3[n4] - vC(t4))))))]), xC, "`"), u3;
              }
            }(e2, n2, t2);
            if (r3)
              return r3;
          }
          let o2 = "expressions";
          r2.type === "TSTemplateLiteralType" && (o2 = "types");
          const i2 = [];
          let u2 = e2.map(t2, o2);
          const s2 = jC(r2);
          return s2 && (u2 = u2.map((e3) => PC(e3, Object.assign(Object.assign({}, n2), {}, { printWidth: Number.POSITIVE_INFINITY })).formatted)), i2.push(NC, "`"), e2.each((e3) => {
            const a2 = e3.getName();
            if (i2.push(t2()), a2 < u2.length) {
              const { tabWidth: t3 } = n2, c2 = e3.getValue(), l3 = AC(c2.value.raw, t3);
              let p2 = u2[a2];
              if (!s2) {
                const e4 = r2[o2][a2];
                (_C(e4) || MC(e4) || e4.type === "ConditionalExpression" || e4.type === "SequenceExpression" || e4.type === "TSAsExpression" || IC(e4)) && (p2 = [TC([SC, p2]), SC]);
              }
              const f2 = l3 === 0 && c2.value.raw.endsWith("\n") ? BC(Number.NEGATIVE_INFINITY, p2) : kC(p2, l3, t3);
              i2.push(wC(["${", f2, NC, "}"]));
            }
          }, "quasis"), i2.push("`"), i2;
        }, printTemplateExpressions: function(e2, t2) {
          return e2.map((e3) => function(e4, t3) {
            const n2 = e4.getValue();
            let r2 = t3();
            return _C(n2) && (r2 = wC([TC([SC, r2]), SC])), ["${", r2, NC, "}"];
          }(e3, t2), "expressions");
        }, escapeTemplateCharacters: function(e2, t2) {
          return OC(e2, (e3) => typeof e3 == "string" ? t2 ? e3.replace(/(\\*)`/g, "$1$1\\`") : RC(e3) : e3);
        }, uncookTemplateElementValue: RC };
        const { builders: { indent: $C, softline: WC, literalline: qC, dedentToRoot: UC } } = Zc, { escapeTemplateCharacters: zC } = VC;
        var GC = function(e2, t2, n2) {
          let r2 = e2.getValue().quasis[0].value.raw.replace(/((?:\\\\)*)\\`/g, (e3, t3) => "\\".repeat(t3.length / 2) + "`");
          const o2 = function(e3) {
            const t3 = e3.match(/^([^\S\n]*)\S/m);
            return t3 === null ? "" : t3[1];
          }(r2), i2 = o2 !== "";
          i2 && (r2 = r2.replace(new RegExp("^".concat(o2), "gm"), ""));
          const u2 = zC(n2(r2, { parser: "markdown", __inJsTemplate: true }, { stripTrailingHardline: true }), true);
          return ["`", i2 ? $C([WC, u2]) : [qC, UC(u2)], WC, "`"];
        };
        const { isNonEmptyArray: HC } = dc, { builders: { indent: JC, hardline: XC, softline: YC }, utils: { mapDoc: KC, replaceEndOfLine: QC, cleanDoc: ZC } } = Zc, { printTemplateExpressions: eb } = VC;
        var tb = function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = r2.quasis.map((e3) => e3.value.raw);
          let i2 = 0;
          return function(e3, t3, n3) {
            if (t3.quasis.length === 1 && !t3.quasis[0].value.raw.trim())
              return "``";
            const r3 = function(e4, t4) {
              if (!HC(t4))
                return e4;
              let n4 = 0;
              const r4 = KC(ZC(e4), (e5) => typeof e5 == "string" && e5.includes("@prettier-placeholder") ? e5.split(/@prettier-placeholder-(\d+)-id/).map((e6, r5) => r5 % 2 == 0 ? QC(e6) : (n4++, t4[e6])) : e5);
              return t4.length === n4 ? r4 : null;
            }(e3, n3);
            if (!r3)
              throw new Error("Couldn't insert all the expressions");
            return ["`", JC([XC, r3]), YC, "`"];
          }(n2(o2.reduce((e3, t3, n3) => n3 === 0 ? t3 : e3 + "@prettier-placeholder-" + i2++ + "-id" + t3, ""), { parser: "scss" }, { stripTrailingHardline: true }), r2, eb(e2, t2));
        };
        const { builders: { indent: nb, join: rb, hardline: ob } } = Zc, { escapeTemplateCharacters: ib, printTemplateExpressions: ub } = VC;
        function sb(e2) {
          const t2 = [];
          let n2 = false;
          const r2 = e2.map((e3) => e3.trim());
          for (const [e3, o2] of r2.entries())
            o2 !== "" && (r2[e3 - 1] === "" && n2 ? t2.push([ob, o2]) : t2.push(o2), n2 = true);
          return t2.length === 0 ? null : rb(ob, t2);
        }
        var ab = function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = r2.quasis.length;
          if (o2 === 1 && r2.quasis[0].value.raw.trim() === "")
            return "``";
          const i2 = ub(e2, t2), u2 = [];
          for (let e3 = 0; e3 < o2; e3++) {
            const t3 = e3 === 0, s2 = e3 === o2 - 1, a2 = r2.quasis[e3].value.cooked, c2 = a2.split("\n"), l3 = c2.length, p2 = i2[e3], f2 = l3 > 2 && c2[0].trim() === "" && c2[1].trim() === "", d2 = l3 > 2 && c2[l3 - 1].trim() === "" && c2[l3 - 2].trim() === "", h2 = c2.every((e4) => /^\s*(?:#[^\n\r]*)?$/.test(e4));
            if (!s2 && /#[^\n\r]*$/.test(c2[l3 - 1]))
              return null;
            let g2 = null;
            g2 = h2 ? sb(c2) : n2(a2, { parser: "graphql" }, { stripTrailingHardline: true }), g2 ? (g2 = ib(g2, false), !t3 && f2 && u2.push(""), u2.push(g2), !s2 && d2 && u2.push("")) : t3 || s2 || !f2 || u2.push(""), p2 && u2.push(p2);
          }
          return ["`", nb([ob, rb(ob, u2)]), ob, "`"];
        };
        const { builders: { indent: cb, line: lb, hardline: pb, group: fb }, utils: { mapDoc: db } } = Zc, { printTemplateExpressions: hb, uncookTemplateElementValue: gb } = VC;
        let mb = 0;
        var yb = function(e2, t2, n2, r2, o2) {
          let { parser: i2 } = o2;
          const u2 = e2.getValue(), s2 = mb;
          mb = mb + 1 >>> 0;
          const a2 = (e3) => "PRETTIER_HTML_PLACEHOLDER_".concat(e3, "_").concat(s2, "_IN_JS"), c2 = u2.quasis.map((e3, t3, n3) => t3 === n3.length - 1 ? e3.value.cooked : e3.value.cooked + a2(t3)).join(""), l3 = hb(e2, t2);
          if (l3.length === 0 && c2.trim().length === 0)
            return "``";
          const p2 = new RegExp(a2("(\\d+)"), "g");
          let f2 = 0;
          const d2 = n2(c2, { parser: i2, __onHtmlRoot(e3) {
            f2 = e3.children.length;
          } }, { stripTrailingHardline: true }), h2 = db(d2, (e3) => {
            if (typeof e3 != "string")
              return e3;
            const t3 = [], n3 = e3.split(p2);
            for (let e4 = 0; e4 < n3.length; e4++) {
              let o3 = n3[e4];
              if (e4 % 2 == 0) {
                o3 && (o3 = gb(o3), r2.__embeddedInHtml && (o3 = o3.replace(/<\/(script)\b/gi, "<\\/$1")), t3.push(o3));
                continue;
              }
              const i3 = Number(o3);
              t3.push(l3[i3]);
            }
            return t3;
          }), g2 = /^\s/.test(c2) ? " " : "", m2 = /\s$/.test(c2) ? " " : "", y2 = r2.htmlWhitespaceSensitivity === "ignore" ? pb : g2 && m2 ? lb : null;
          return fb(y2 ? ["`", cb([y2, fb(h2)]), y2, "`"] : ["`", g2, f2 > 1 ? cb(fb(h2)) : fb(h2), m2, "`"]);
        };
        const { hasComment: Db, CommentCheckFlags: Eb, isObjectProperty: Cb } = CC, bb = GC, vb = tb, Ab = ab, Fb = yb;
        function xb(e2) {
          return function(e3) {
            const t2 = e3.getValue(), n2 = e3.getParentNode(), r2 = e3.getParentNode(1);
            return r2 && t2.quasis && n2.type === "JSXExpressionContainer" && r2.type === "JSXElement" && r2.openingElement.name.name === "style" && r2.openingElement.attributes.some((e4) => e4.name.name === "jsx") || n2 && n2.type === "TaggedTemplateExpression" && n2.tag.type === "Identifier" && n2.tag.name === "css" || n2 && n2.type === "TaggedTemplateExpression" && n2.tag.type === "MemberExpression" && n2.tag.object.name === "css" && (n2.tag.property.name === "global" || n2.tag.property.name === "resolve");
          }(e2) || function(e3) {
            const t2 = e3.getParentNode();
            if (!t2 || t2.type !== "TaggedTemplateExpression")
              return false;
            const n2 = t2.tag.type === "ParenthesizedExpression" ? t2.tag.expression : t2.tag;
            switch (n2.type) {
              case "MemberExpression":
                return wb(n2.object) || Tb(n2);
              case "CallExpression":
                return wb(n2.callee) || n2.callee.type === "MemberExpression" && (n2.callee.object.type === "MemberExpression" && (wb(n2.callee.object.object) || Tb(n2.callee.object)) || n2.callee.object.type === "CallExpression" && wb(n2.callee.object.callee));
              case "Identifier":
                return n2.name === "css";
              default:
                return false;
            }
          }(e2) || function(e3) {
            const t2 = e3.getParentNode(), n2 = e3.getParentNode(1);
            return n2 && t2.type === "JSXExpressionContainer" && n2.type === "JSXAttribute" && n2.name.type === "JSXIdentifier" && n2.name.name === "css";
          }(e2) || function(e3) {
            return e3.match((e4) => e4.type === "TemplateLiteral", (e4, t2) => e4.type === "ArrayExpression" && t2 === "elements", (e4, t2) => Cb(e4) && e4.key.type === "Identifier" && e4.key.name === "styles" && t2 === "value", ...Sb);
          }(e2) ? "css" : function(e3) {
            const t2 = e3.getValue(), n2 = e3.getParentNode();
            return Bb(t2, "GraphQL") || n2 && (n2.type === "TaggedTemplateExpression" && (n2.tag.type === "MemberExpression" && n2.tag.object.name === "graphql" && n2.tag.property.name === "experimental" || n2.tag.type === "Identifier" && (n2.tag.name === "gql" || n2.tag.name === "graphql")) || n2.type === "CallExpression" && n2.callee.type === "Identifier" && n2.callee.name === "graphql");
          }(e2) ? "graphql" : function(e3) {
            return Bb(e3.getValue(), "HTML") || e3.match((e4) => e4.type === "TemplateLiteral", (e4, t2) => e4.type === "TaggedTemplateExpression" && e4.tag.type === "Identifier" && e4.tag.name === "html" && t2 === "quasi");
          }(e2) ? "html" : function(e3) {
            return e3.match((e4) => e4.type === "TemplateLiteral", (e4, t2) => Cb(e4) && e4.key.type === "Identifier" && e4.key.name === "template" && t2 === "value", ...Sb);
          }(e2) ? "angular" : function(e3) {
            const t2 = e3.getValue(), n2 = e3.getParentNode();
            return n2 && n2.type === "TaggedTemplateExpression" && t2.quasis.length === 1 && n2.tag.type === "Identifier" && (n2.tag.name === "md" || n2.tag.name === "markdown");
          }(e2) ? "markdown" : void 0;
        }
        const Sb = [(e2, t2) => e2.type === "ObjectExpression" && t2 === "properties", (e2, t2) => e2.type === "CallExpression" && e2.callee.type === "Identifier" && e2.callee.name === "Component" && t2 === "arguments", (e2, t2) => e2.type === "Decorator" && t2 === "expression"];
        function wb(e2) {
          return e2.type === "Identifier" && e2.name === "styled";
        }
        function Tb(e2) {
          return /^[A-Z]/.test(e2.object.name) && e2.property.name === "extend";
        }
        function Bb(e2, t2) {
          return Db(e2, Eb.Block | Eb.Leading, (e3) => {
            let { value: n2 } = e3;
            return n2 === " ".concat(t2, " ");
          });
        }
        var Nb = function(e2, t2, n2, r2) {
          const o2 = e2.getValue();
          if (o2.type !== "TemplateLiteral" || function(e3) {
            let { quasis: t3 } = e3;
            return t3.some((e4) => {
              let { value: { cooked: t4 } } = e4;
              return t4 === null;
            });
          }(o2))
            return;
          const i2 = xb(e2);
          return i2 ? i2 === "markdown" ? bb(e2, t2, n2) : i2 === "css" ? vb(e2, t2, n2) : i2 === "graphql" ? Ab(e2, t2, n2) : i2 === "html" || i2 === "angular" ? Fb(e2, t2, n2, r2, { parser: i2 }) : void 0 : void 0;
        };
        const { isBlockComment: kb } = CC, Pb = /* @__PURE__ */ new Set(["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"]), Ob = (e2) => {
          for (const t2 of e2.quasis)
            delete t2.value;
        };
        function Ib(e2, t2, n2) {
          if (e2.type === "Program" && delete t2.sourceType, e2.type !== "BigIntLiteral" && e2.type !== "BigIntLiteralTypeAnnotation" || t2.value && (t2.value = t2.value.toLowerCase()), e2.type !== "BigIntLiteral" && e2.type !== "Literal" || t2.bigint && (t2.bigint = t2.bigint.toLowerCase()), e2.type === "DecimalLiteral" && (t2.value = Number(t2.value)), e2.type === "Literal" && t2.decimal && (t2.decimal = Number(t2.decimal)), e2.type === "EmptyStatement")
            return null;
          if (e2.type === "JSXText")
            return null;
          if (e2.type === "JSXExpressionContainer" && (e2.expression.type === "Literal" || e2.expression.type === "StringLiteral") && e2.expression.value === " ")
            return null;
          if (e2.type !== "Property" && e2.type !== "ObjectProperty" && e2.type !== "MethodDefinition" && e2.type !== "ClassProperty" && e2.type !== "ClassMethod" && e2.type !== "PropertyDefinition" && e2.type !== "TSDeclareMethod" && e2.type !== "TSPropertySignature" && e2.type !== "ObjectTypeProperty" || typeof e2.key != "object" || !e2.key || e2.key.type !== "Literal" && e2.key.type !== "NumericLiteral" && e2.key.type !== "StringLiteral" && e2.key.type !== "Identifier" || delete t2.key, e2.type === "JSXElement" && e2.openingElement.name.name === "style" && e2.openingElement.attributes.some((e3) => e3.name.name === "jsx"))
            for (const { type: e3, expression: n3 } of t2.children)
              e3 === "JSXExpressionContainer" && n3.type === "TemplateLiteral" && Ob(n3);
          e2.type === "JSXAttribute" && e2.name.name === "css" && e2.value.type === "JSXExpressionContainer" && e2.value.expression.type === "TemplateLiteral" && Ob(t2.value.expression), e2.type === "JSXAttribute" && e2.value && e2.value.type === "Literal" && /["']|&quot;|&apos;/.test(e2.value.value) && (t2.value.value = t2.value.value.replace(/["']|&quot;|&apos;/g, '"'));
          const r2 = e2.expression || e2.callee;
          if (e2.type === "Decorator" && r2.type === "CallExpression" && r2.callee.name === "Component" && r2.arguments.length === 1) {
            const n3 = e2.expression.arguments[0].properties;
            for (const [e3, r3] of t2.expression.arguments[0].properties.entries())
              switch (n3[e3].key.name) {
                case "styles":
                  r3.value.type === "ArrayExpression" && Ob(r3.value.elements[0]);
                  break;
                case "template":
                  r3.value.type === "TemplateLiteral" && Ob(r3.value);
              }
          }
          if (e2.type !== "TaggedTemplateExpression" || e2.tag.type !== "MemberExpression" && (e2.tag.type !== "Identifier" || e2.tag.name !== "gql" && e2.tag.name !== "graphql" && e2.tag.name !== "css" && e2.tag.name !== "md" && e2.tag.name !== "markdown" && e2.tag.name !== "html") && e2.tag.type !== "CallExpression" || Ob(t2.quasi), e2.type === "TemplateLiteral") {
            const r3 = e2.leadingComments && e2.leadingComments.some((e3) => kb(e3) && ["GraphQL", "HTML"].some((t3) => e3.value === " ".concat(t3, " ")));
            (r3 || n2.type === "CallExpression" && n2.callee.name === "graphql" || !e2.leadingComments) && Ob(t2);
          }
          return e2.type === "InterpreterDirective" && (t2.value = t2.value.trimEnd()), e2.type !== "TSIntersectionType" && e2.type !== "TSUnionType" || e2.types.length !== 1 ? void 0 : t2.types[0];
        }
        Ib.ignoredProperties = Pb;
        var Lb = Ib, jb = {}, _b = { exports: {} };
        const Mb = (e2) => {
          if (typeof e2 != "string")
            throw new TypeError("Expected a string");
          const t2 = e2.match(/(?:\r?\n)/g) || [];
          if (t2.length === 0)
            return;
          const n2 = t2.filter((e3) => e3 === "\r\n").length;
          return n2 > t2.length - n2 ? "\r\n" : "\n";
        };
        function Rb() {
          const e2 = yf;
          return Rb = function() {
            return e2;
          }, e2;
        }
        function Vb() {
          const e2 = function(e3) {
            return e3 && e3.__esModule ? e3 : { default: e3 };
          }(_b.exports);
          return Vb = function() {
            return e2;
          }, e2;
        }
        _b.exports = Mb, _b.exports.graceful = (e2) => typeof e2 == "string" && Mb(e2) || "\n", Object.defineProperty(jb, "__esModule", { value: true }), jb.extract = function(e2) {
          const t2 = e2.match(qb);
          return t2 ? t2[0].trimLeft() : "";
        }, jb.strip = function(e2) {
          const t2 = e2.match(qb);
          return t2 && t2[0] ? e2.substring(t2[0].length) : e2;
        }, jb.parse = function(e2) {
          return Yb(e2).pragmas;
        }, jb.parseWithComments = Yb, jb.print = function(e2) {
          let { comments: t2 = "", pragmas: n2 = {} } = e2;
          const r2 = (0, Vb().default)(t2) || Rb().EOL, o2 = " *", i2 = Object.keys(n2), u2 = i2.map((e3) => Kb(e3, n2[e3])).reduce((e3, t3) => e3.concat(t3), []).map((e3) => " * " + e3 + r2).join("");
          if (!t2) {
            if (i2.length === 0)
              return "";
            if (i2.length === 1 && !Array.isArray(n2[i2[0]])) {
              const e3 = n2[i2[0]];
              return "".concat("/**", " ").concat(Kb(i2[0], e3)[0]).concat(" */");
            }
          }
          const s2 = t2.split(r2).map((e3) => "".concat(o2, " ").concat(e3)).join(r2) + r2;
          return "/**" + r2 + (t2 ? s2 : "") + (t2 && i2.length ? o2 + r2 : "") + u2 + " */";
        };
        const $b = /\*\/$/, Wb = /^\/\*\*/, qb = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, Ub = /(^|\s+)\/\/([^\r\n]*)/g, zb = /^(\r?\n)+/, Gb = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g, Hb = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g, Jb = /(\r?\n|^) *\* ?/g, Xb = [];
        function Yb(e2) {
          const t2 = (0, Vb().default)(e2) || Rb().EOL;
          e2 = e2.replace(Wb, "").replace($b, "").replace(Jb, "$1");
          let n2 = "";
          for (; n2 !== e2; )
            n2 = e2, e2 = e2.replace(Gb, "".concat(t2, "$1 $2").concat(t2));
          e2 = e2.replace(zb, "").trimRight();
          const r2 = /* @__PURE__ */ Object.create(null), o2 = e2.replace(Hb, "").replace(zb, "").trimRight();
          let i2;
          for (; i2 = Hb.exec(e2); ) {
            const e3 = i2[2].replace(Ub, "");
            typeof r2[i2[1]] == "string" || Array.isArray(r2[i2[1]]) ? r2[i2[1]] = Xb.concat(r2[i2[1]], e3) : r2[i2[1]] = e3;
          }
          return { comments: o2, pragmas: r2 };
        }
        function Kb(e2, t2) {
          return Xb.concat(t2).map((t3) => "@".concat(e2, " ").concat(t3).trim());
        }
        const { parseWithComments: Qb, strip: Zb, extract: ev, print: tv } = jb, { getShebang: nv } = dc, { normalizeEndOfLine: rv } = hc;
        function ov(e2) {
          const t2 = nv(e2);
          t2 && (e2 = e2.slice(t2.length + 1));
          const n2 = ev(e2), { pragmas: r2, comments: o2 } = Qb(n2);
          return { shebang: t2, text: e2, pragmas: r2, comments: o2 };
        }
        var iv = { hasPragma: function(e2) {
          const t2 = Object.keys(ov(e2).pragmas);
          return t2.includes("prettier") || t2.includes("format");
        }, insertPragma: function(e2) {
          const { shebang: t2, text: n2, pragmas: r2, comments: o2 } = ov(e2), i2 = Zb(n2), u2 = tv({ pragmas: Object.assign({ format: "" }, r2), comments: o2.trimStart() });
          return (t2 ? "".concat(t2, "\n") : "") + rv(u2) + (i2.startsWith("\n") ? "\n" : "\n\n") + i2;
        } };
        const { getLast: uv, hasNewline: sv, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: av, getNextNonSpaceNonCommentCharacter: cv, hasNewlineInRange: lv, addLeadingComment: pv, addTrailingComment: fv, addDanglingComment: dv, getNextNonSpaceNonCommentCharacterIndex: hv, isNonEmptyArray: gv } = dc, { isBlockComment: mv, getFunctionParameters: yv, isPrettierIgnoreComment: Dv, isJsxNode: Ev, hasFlowShorthandAnnotationComment: Cv, hasFlowAnnotationComment: bv, hasIgnoreComment: vv, isCallLikeExpression: Av, getCallArguments: Fv, isCallExpression: xv, isMemberExpression: Sv, isObjectProperty: wv, getComments: Tv, CommentCheckFlags: Bv } = CC, { locStart: Nv, locEnd: kv } = og;
        function Pv(e2, t2) {
          const n2 = (e2.body || e2.properties).find((e3) => {
            let { type: t3 } = e3;
            return t3 !== "EmptyStatement";
          });
          n2 ? pv(n2, t2) : dv(e2, t2);
        }
        function Ov(e2, t2) {
          e2.type === "BlockStatement" ? Pv(e2, t2) : pv(e2, t2);
        }
        function Iv(e2) {
          let { comment: t2, followingNode: n2 } = e2;
          return !(!n2 || !cA(t2)) && (pv(n2, t2), true);
        }
        function Lv(e2) {
          let { comment: t2, precedingNode: n2, enclosingNode: r2, followingNode: o2, text: i2 } = e2;
          if (!r2 || r2.type !== "IfStatement" || !o2)
            return false;
          return cv(i2, t2, kv) === ")" ? (fv(n2, t2), true) : n2 === r2.consequent && o2 === r2.alternate ? (n2.type === "BlockStatement" ? fv(n2, t2) : dv(r2, t2), true) : o2.type === "BlockStatement" ? (Pv(o2, t2), true) : o2.type === "IfStatement" ? (Ov(o2.consequent, t2), true) : r2.consequent === o2 && (pv(o2, t2), true);
        }
        function jv(e2) {
          let { comment: t2, precedingNode: n2, enclosingNode: r2, followingNode: o2, text: i2 } = e2;
          if (!r2 || r2.type !== "WhileStatement" || !o2)
            return false;
          return cv(i2, t2, kv) === ")" ? (fv(n2, t2), true) : o2.type === "BlockStatement" ? (Pv(o2, t2), true) : r2.body === o2 && (pv(o2, t2), true);
        }
        function _v(e2) {
          let { comment: t2, precedingNode: n2, enclosingNode: r2, followingNode: o2 } = e2;
          return !(!r2 || r2.type !== "TryStatement" && r2.type !== "CatchClause" || !o2) && (r2.type === "CatchClause" && n2 ? (fv(n2, t2), true) : o2.type === "BlockStatement" ? (Pv(o2, t2), true) : o2.type === "TryStatement" ? (Ov(o2.finalizer, t2), true) : o2.type === "CatchClause" && (Ov(o2.body, t2), true));
        }
        function Mv(e2) {
          let { comment: t2, enclosingNode: n2, followingNode: r2 } = e2;
          return !(!Sv(n2) || !r2 || r2.type !== "Identifier") && (pv(n2, t2), true);
        }
        function Rv(e2) {
          let { comment: t2, precedingNode: n2, enclosingNode: r2, followingNode: o2, text: i2 } = e2;
          const u2 = n2 && !lv(i2, kv(n2), Nv(t2));
          return !(n2 && u2 || !r2 || r2.type !== "ConditionalExpression" && r2.type !== "TSConditionalType" || !o2) && (pv(o2, t2), true);
        }
        function Vv(e2) {
          let { comment: t2, precedingNode: n2, enclosingNode: r2 } = e2;
          return !(!wv(r2) || !r2.shorthand || r2.key !== n2 || r2.value.type !== "AssignmentPattern") && (fv(r2.value.left, t2), true);
        }
        function $v(e2) {
          let { comment: t2, precedingNode: n2, enclosingNode: r2, followingNode: o2 } = e2;
          if (r2 && (r2.type === "ClassDeclaration" || r2.type === "ClassExpression" || r2.type === "DeclareClass" || r2.type === "DeclareInterface" || r2.type === "InterfaceDeclaration" || r2.type === "TSInterfaceDeclaration")) {
            if (gv(r2.decorators) && (!o2 || o2.type !== "Decorator"))
              return fv(uv(r2.decorators), t2), true;
            if (r2.body && o2 === r2.body)
              return Pv(r2.body, t2), true;
            if (o2) {
              for (const e3 of ["implements", "extends", "mixins"])
                if (r2[e3] && o2 === r2[e3][0])
                  return !n2 || n2 !== r2.id && n2 !== r2.typeParameters && n2 !== r2.superClass ? dv(r2, t2, e3) : fv(n2, t2), true;
            }
          }
          return false;
        }
        function Wv(e2) {
          let { comment: t2, precedingNode: n2, enclosingNode: r2, text: o2 } = e2;
          return (r2 && n2 && (r2.type === "Property" || r2.type === "TSDeclareMethod" || r2.type === "TSAbstractMethodDefinition") && n2.type === "Identifier" && r2.key === n2 && cv(o2, n2, kv) !== ":" || !(!n2 || !r2 || n2.type !== "Decorator" || r2.type !== "ClassMethod" && r2.type !== "ClassProperty" && r2.type !== "PropertyDefinition" && r2.type !== "TSAbstractPropertyDefinition" && r2.type !== "TSAbstractMethodDefinition" && r2.type !== "TSDeclareMethod" && r2.type !== "MethodDefinition")) && (fv(n2, t2), true);
        }
        function qv(e2) {
          let { comment: t2, precedingNode: n2, enclosingNode: r2, text: o2 } = e2;
          return cv(o2, t2, kv) === "(" && (!(!n2 || !r2 || r2.type !== "FunctionDeclaration" && r2.type !== "FunctionExpression" && r2.type !== "ClassMethod" && r2.type !== "MethodDefinition" && r2.type !== "ObjectMethod") && (fv(n2, t2), true));
        }
        function Uv(e2) {
          let { comment: t2, enclosingNode: n2, text: r2 } = e2;
          if (!n2 || n2.type !== "ArrowFunctionExpression")
            return false;
          const o2 = hv(r2, t2, kv);
          return o2 !== false && r2.slice(o2, o2 + 2) === "=>" && (dv(n2, t2), true);
        }
        function zv(e2) {
          let { comment: t2, enclosingNode: n2, text: r2 } = e2;
          return cv(r2, t2, kv) === ")" && (n2 && (aA(n2) && yv(n2).length === 0 || Av(n2) && Fv(n2).length === 0) ? (dv(n2, t2), true) : !(!n2 || n2.type !== "MethodDefinition" && n2.type !== "TSAbstractMethodDefinition" || yv(n2.value).length !== 0) && (dv(n2.value, t2), true));
        }
        function Gv(e2) {
          let { comment: t2, precedingNode: n2, enclosingNode: r2, followingNode: o2, text: i2 } = e2;
          if (n2 && n2.type === "FunctionTypeParam" && r2 && r2.type === "FunctionTypeAnnotation" && o2 && o2.type !== "FunctionTypeParam")
            return fv(n2, t2), true;
          if (n2 && (n2.type === "Identifier" || n2.type === "AssignmentPattern") && r2 && aA(r2) && cv(i2, t2, kv) === ")")
            return fv(n2, t2), true;
          if (r2 && r2.type === "FunctionDeclaration" && o2 && o2.type === "BlockStatement") {
            const e3 = (() => {
              const e4 = yv(r2);
              if (e4.length > 0)
                return av(i2, kv(uv(e4)));
              const t3 = av(i2, kv(r2.id));
              return t3 !== false && av(i2, t3 + 1);
            })();
            if (Nv(t2) > e3)
              return Pv(o2, t2), true;
          }
          return false;
        }
        function Hv(e2) {
          let { comment: t2, enclosingNode: n2 } = e2;
          return !(!n2 || n2.type !== "ImportSpecifier") && (pv(n2, t2), true);
        }
        function Jv(e2) {
          let { comment: t2, enclosingNode: n2 } = e2;
          return !(!n2 || n2.type !== "LabeledStatement") && (pv(n2, t2), true);
        }
        function Xv(e2) {
          let { comment: t2, enclosingNode: n2 } = e2;
          return !(!n2 || n2.type !== "ContinueStatement" && n2.type !== "BreakStatement" || n2.label) && (fv(n2, t2), true);
        }
        function Yv(e2) {
          let { comment: t2, precedingNode: n2, enclosingNode: r2 } = e2;
          return !!(xv(r2) && n2 && r2.callee === n2 && r2.arguments.length > 0) && (pv(r2.arguments[0], t2), true);
        }
        function Kv(e2) {
          let { comment: t2, precedingNode: n2, enclosingNode: r2, followingNode: o2 } = e2;
          return !r2 || r2.type !== "UnionTypeAnnotation" && r2.type !== "TSUnionType" ? (o2 && (o2.type === "UnionTypeAnnotation" || o2.type === "TSUnionType") && Dv(t2) && (o2.types[0].prettierIgnore = true, t2.unignore = true), false) : (Dv(t2) && (o2.prettierIgnore = true, t2.unignore = true), !!n2 && (fv(n2, t2), true));
        }
        function Qv(e2) {
          let { comment: t2, enclosingNode: n2 } = e2;
          return !!wv(n2) && (pv(n2, t2), true);
        }
        function Zv(e2) {
          let { comment: t2, enclosingNode: n2, followingNode: r2, ast: o2, isLastComment: i2 } = e2;
          return o2 && o2.body && o2.body.length === 0 ? (i2 ? dv(o2, t2) : pv(o2, t2), true) : n2 && n2.type === "Program" && n2.body.length === 0 && !gv(n2.directives) ? (i2 ? dv(n2, t2) : pv(n2, t2), true) : !(!r2 || r2.type !== "Program" || r2.body.length !== 0 || !n2 || n2.type !== "ModuleExpression") && (dv(r2, t2), true);
        }
        function eA(e2) {
          let { comment: t2, enclosingNode: n2 } = e2;
          return !(!n2 || n2.type !== "ForInStatement" && n2.type !== "ForOfStatement") && (pv(n2, t2), true);
        }
        function tA(e2) {
          let { comment: t2, precedingNode: n2, enclosingNode: r2, text: o2 } = e2;
          return !!(n2 && n2.type === "ImportSpecifier" && r2 && r2.type === "ImportDeclaration" && sv(o2, kv(t2))) && (fv(n2, t2), true);
        }
        function nA(e2) {
          let { comment: t2, enclosingNode: n2 } = e2;
          return !(!n2 || n2.type !== "AssignmentPattern") && (pv(n2, t2), true);
        }
        function rA(e2) {
          let { comment: t2, enclosingNode: n2 } = e2;
          return !(!n2 || n2.type !== "TypeAlias") && (pv(n2, t2), true);
        }
        function oA(e2) {
          let { comment: t2, enclosingNode: n2, followingNode: r2 } = e2;
          return !(!n2 || n2.type !== "VariableDeclarator" && n2.type !== "AssignmentExpression" || !r2 || r2.type !== "ObjectExpression" && r2.type !== "ArrayExpression" && r2.type !== "TemplateLiteral" && r2.type !== "TaggedTemplateExpression" && !mv(t2)) && (pv(r2, t2), true);
        }
        function iA(e2) {
          let { comment: t2, enclosingNode: n2, followingNode: r2, text: o2 } = e2;
          return !(r2 || !n2 || n2.type !== "TSMethodSignature" && n2.type !== "TSDeclareFunction" && n2.type !== "TSAbstractMethodDefinition" || cv(o2, t2, kv) !== ";") && (fv(n2, t2), true);
        }
        function uA(e2) {
          let { comment: t2, enclosingNode: n2, followingNode: r2 } = e2;
          if (Dv(t2) && n2 && n2.type === "TSMappedType" && r2 && r2.type === "TSTypeParameter" && r2.constraint)
            return n2.prettierIgnore = true, t2.unignore = true, true;
        }
        function sA(e2) {
          let { comment: t2, precedingNode: n2, enclosingNode: r2, followingNode: o2 } = e2;
          return !(!r2 || r2.type !== "TSMappedType") && (o2 && o2.type === "TSTypeParameter" && o2.name ? (pv(o2.name, t2), true) : !(!n2 || n2.type !== "TSTypeParameter" || !n2.constraint) && (fv(n2.constraint, t2), true));
        }
        function aA(e2) {
          return e2.type === "ArrowFunctionExpression" || e2.type === "FunctionExpression" || e2.type === "FunctionDeclaration" || e2.type === "ObjectMethod" || e2.type === "ClassMethod" || e2.type === "TSDeclareFunction" || e2.type === "TSCallSignatureDeclaration" || e2.type === "TSConstructSignatureDeclaration" || e2.type === "TSMethodSignature" || e2.type === "TSConstructorType" || e2.type === "TSFunctionType" || e2.type === "TSDeclareMethod";
        }
        function cA(e2) {
          return mv(e2) && e2.value[0] === "*" && /@type\b/.test(e2.value);
        }
        var lA = { handleOwnLineComment: function(e2) {
          return [uA, Gv, Mv, Lv, jv, _v, $v, Hv, eA, Kv, Zv, tA, nA, Wv, Jv].some((t2) => t2(e2));
        }, handleEndOfLineComment: function(e2) {
          return [Iv, Gv, Rv, Hv, Lv, jv, _v, $v, Jv, Yv, Qv, Zv, rA, oA].some((t2) => t2(e2));
        }, handleRemainingComment: function(e2) {
          return [uA, Lv, jv, Vv, zv, Wv, Zv, Uv, qv, sA, Xv, iA].some((t2) => t2(e2));
        }, isTypeCastComment: cA, getCommentChildNodes: function(e2, t2) {
          if ((t2.parser === "typescript" || t2.parser === "flow" || t2.parser === "espree" || t2.parser === "meriyah" || t2.parser === "__babel_estree") && e2.type === "MethodDefinition" && e2.value && e2.value.type === "FunctionExpression" && yv(e2.value).length === 0 && !e2.value.returnType && !gv(e2.value.typeParameters) && e2.value.body)
            return [...e2.decorators || [], e2.key, e2.value.body];
        }, willPrintOwnComments: function(e2) {
          const t2 = e2.getValue(), n2 = e2.getParentNode();
          return (t2 && (Ev(t2) || Cv(t2) || xv(n2) && ((e3) => bv(Tv(e3, Bv.Leading)) || bv(Tv(e3, Bv.Trailing)))(t2)) || n2 && (n2.type === "JSXSpreadAttribute" || n2.type === "JSXSpreadChild" || n2.type === "UnionTypeAnnotation" || n2.type === "TSUnionType" || (n2.type === "ClassDeclaration" || n2.type === "ClassExpression") && n2.superClass === t2)) && (!vv(e2) || n2.type === "UnionTypeAnnotation" || n2.type === "TSUnionType");
        } };
        const pA = au, { getFunctionParameters: fA, getLeftSidePathName: dA, hasFlowShorthandAnnotationComment: hA, hasNakedLeftSide: gA, hasNode: mA, isBitwiseOperator: yA, startsWithNoLookaheadToken: DA, shouldFlatten: EA, getPrecedence: CA, isCallExpression: bA, isMemberExpression: vA, isObjectProperty: AA } = CC;
        function FA(e2, t2) {
          const n2 = e2.getParentNode();
          if (!n2)
            return false;
          const r2 = e2.getName(), o2 = e2.getNode();
          if (t2.__isInHtmlInterpolation && !t2.bracketSpacing && function(e3) {
            if (e3.type === "ObjectExpression")
              return true;
            return false;
          }(o2) && xA(e2))
            return true;
          if (function(e3) {
            return e3.type === "BlockStatement" || e3.type === "BreakStatement" || e3.type === "ClassBody" || e3.type === "ClassDeclaration" || e3.type === "ClassMethod" || e3.type === "ClassProperty" || e3.type === "PropertyDefinition" || e3.type === "ClassPrivateProperty" || e3.type === "ContinueStatement" || e3.type === "DebuggerStatement" || e3.type === "DeclareClass" || e3.type === "DeclareExportAllDeclaration" || e3.type === "DeclareExportDeclaration" || e3.type === "DeclareFunction" || e3.type === "DeclareInterface" || e3.type === "DeclareModule" || e3.type === "DeclareModuleExports" || e3.type === "DeclareVariable" || e3.type === "DoWhileStatement" || e3.type === "EnumDeclaration" || e3.type === "ExportAllDeclaration" || e3.type === "ExportDefaultDeclaration" || e3.type === "ExportNamedDeclaration" || e3.type === "ExpressionStatement" || e3.type === "ForInStatement" || e3.type === "ForOfStatement" || e3.type === "ForStatement" || e3.type === "FunctionDeclaration" || e3.type === "IfStatement" || e3.type === "ImportDeclaration" || e3.type === "InterfaceDeclaration" || e3.type === "LabeledStatement" || e3.type === "MethodDefinition" || e3.type === "ReturnStatement" || e3.type === "SwitchStatement" || e3.type === "ThrowStatement" || e3.type === "TryStatement" || e3.type === "TSDeclareFunction" || e3.type === "TSEnumDeclaration" || e3.type === "TSImportEqualsDeclaration" || e3.type === "TSInterfaceDeclaration" || e3.type === "TSModuleDeclaration" || e3.type === "TSNamespaceExportDeclaration" || e3.type === "TypeAlias" || e3.type === "VariableDeclaration" || e3.type === "WhileStatement" || e3.type === "WithStatement";
          }(o2))
            return false;
          if (t2.parser !== "flow" && hA(e2.getValue()))
            return true;
          if (o2.type === "Identifier")
            return !!(o2.extra && o2.extra.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(o2.name)) || r2 === "left" && o2.name === "async" && n2.type === "ForOfStatement" && !n2.await;
          switch (n2.type) {
            case "ParenthesizedExpression":
              return false;
            case "ClassDeclaration":
            case "ClassExpression":
              if (r2 === "superClass" && (o2.type === "ArrowFunctionExpression" || o2.type === "AssignmentExpression" || o2.type === "AwaitExpression" || o2.type === "BinaryExpression" || o2.type === "ConditionalExpression" || o2.type === "LogicalExpression" || o2.type === "NewExpression" || o2.type === "ObjectExpression" || o2.type === "ParenthesizedExpression" || o2.type === "SequenceExpression" || o2.type === "TaggedTemplateExpression" || o2.type === "UnaryExpression" || o2.type === "UpdateExpression" || o2.type === "YieldExpression" || o2.type === "TSNonNullExpression"))
                return true;
              break;
            case "ExportDefaultDeclaration":
              return SA(e2, t2) || o2.type === "SequenceExpression";
            case "Decorator":
              if (r2 === "expression") {
                let e3 = false, n3 = false, r3 = o2;
                for (; r3; )
                  switch (r3.type) {
                    case "MemberExpression":
                      n3 = true, r3 = r3.object;
                      break;
                    case "CallExpression":
                      if (n3 || e3)
                        return t2.parser !== "typescript";
                      e3 = true, r3 = r3.callee;
                      break;
                    case "Identifier":
                      return false;
                    case "TaggedTemplateExpression":
                      return t2.parser !== "typescript";
                    default:
                      return true;
                  }
                return true;
              }
              break;
            case "ExpressionStatement":
              if (DA(o2, true))
                return true;
              break;
            case "ArrowFunctionExpression":
              if (r2 === "body" && o2.type !== "SequenceExpression" && DA(o2, false))
                return true;
          }
          switch (o2.type) {
            case "UpdateExpression":
              if (n2.type === "UnaryExpression")
                return o2.prefix && (o2.operator === "++" && n2.operator === "+" || o2.operator === "--" && n2.operator === "-");
            case "UnaryExpression":
              switch (n2.type) {
                case "UnaryExpression":
                  return o2.operator === n2.operator && (o2.operator === "+" || o2.operator === "-");
                case "BindExpression":
                case "TaggedTemplateExpression":
                case "TSNonNullExpression":
                  return true;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return r2 === "object";
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return r2 === "callee";
                case "BinaryExpression":
                  return r2 === "left" && n2.operator === "**";
                default:
                  return false;
              }
            case "BinaryExpression":
              if (n2.type === "UpdateExpression")
                return true;
              if (o2.operator === "in" && function(e3) {
                let t3 = 0, n3 = e3.getValue();
                for (; n3; ) {
                  const r3 = e3.getParentNode(t3++);
                  if (r3 && r3.type === "ForStatement" && r3.init === n3)
                    return true;
                  n3 = r3;
                }
                return false;
              }(e2))
                return true;
              if (o2.operator === "|>" && o2.extra && o2.extra.parenthesized) {
                const t3 = e2.getParentNode(1);
                if (t3.type === "BinaryExpression" && t3.operator === "|>")
                  return true;
              }
            case "TSTypeAssertion":
            case "TSAsExpression":
            case "LogicalExpression":
              switch (n2.type) {
                case "TSAsExpression":
                  return o2.type !== "TSAsExpression";
                case "ConditionalExpression":
                  return o2.type === "TSAsExpression";
                case "CallExpression":
                case "NewExpression":
                case "OptionalCallExpression":
                  return r2 === "callee";
                case "ClassExpression":
                case "ClassDeclaration":
                  return r2 === "superClass";
                case "TSTypeAssertion":
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "JSXSpreadAttribute":
                case "SpreadElement":
                case "SpreadProperty":
                case "BindExpression":
                case "AwaitExpression":
                case "TSNonNullExpression":
                case "UpdateExpression":
                  return true;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return r2 === "object";
                case "AssignmentExpression":
                case "AssignmentPattern":
                  return r2 === "left" && (o2.type === "TSTypeAssertion" || o2.type === "TSAsExpression");
                case "LogicalExpression":
                  if (o2.type === "LogicalExpression")
                    return n2.operator !== o2.operator;
                case "BinaryExpression": {
                  const { operator: e3, type: t3 } = o2;
                  if (!e3 && t3 !== "TSTypeAssertion")
                    return true;
                  const i2 = CA(e3), u2 = n2.operator, s2 = CA(u2);
                  return s2 > i2 || (r2 === "right" && s2 === i2 || (s2 === i2 && !EA(u2, e3) || (s2 < i2 && e3 === "%" ? u2 === "+" || u2 === "-" : !!yA(u2))));
                }
                default:
                  return false;
              }
            case "SequenceExpression":
              switch (n2.type) {
                case "ReturnStatement":
                case "ForStatement":
                  return false;
                case "ExpressionStatement":
                  return r2 !== "expression";
                case "ArrowFunctionExpression":
                  return r2 !== "body";
                default:
                  return true;
              }
            case "YieldExpression":
              if (n2.type === "UnaryExpression" || n2.type === "AwaitExpression" || n2.type === "TSAsExpression" || n2.type === "TSNonNullExpression")
                return true;
            case "AwaitExpression":
              switch (n2.type) {
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "LogicalExpression":
                case "SpreadElement":
                case "SpreadProperty":
                case "TSAsExpression":
                case "TSNonNullExpression":
                case "BindExpression":
                  return true;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return r2 === "object";
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return r2 === "callee";
                case "ConditionalExpression":
                  return r2 === "test";
                case "BinaryExpression":
                  return !(!o2.argument && n2.operator === "|>");
                default:
                  return false;
              }
            case "TSConditionalType":
              if (r2 === "extendsType" && n2.type === "TSConditionalType")
                return true;
            case "TSFunctionType":
            case "TSConstructorType":
              if (r2 === "checkType" && n2.type === "TSConditionalType")
                return true;
            case "TSUnionType":
            case "TSIntersectionType":
              if ((n2.type === "TSUnionType" || n2.type === "TSIntersectionType") && n2.types.length > 1 && (!o2.types || o2.types.length > 1))
                return true;
            case "TSInferType":
              if (o2.type === "TSInferType" && n2.type === "TSRestType")
                return false;
            case "TSTypeOperator":
              return n2.type === "TSArrayType" || n2.type === "TSOptionalType" || n2.type === "TSRestType" || r2 === "objectType" && n2.type === "TSIndexedAccessType" || n2.type === "TSTypeOperator" || n2.type === "TSTypeAnnotation" && e2.getParentNode(1).type.startsWith("TSJSDoc");
            case "ArrayTypeAnnotation":
              return n2.type === "NullableTypeAnnotation";
            case "IntersectionTypeAnnotation":
            case "UnionTypeAnnotation":
              return n2.type === "ArrayTypeAnnotation" || n2.type === "NullableTypeAnnotation" || n2.type === "IntersectionTypeAnnotation" || n2.type === "UnionTypeAnnotation" || r2 === "objectType" && (n2.type === "IndexedAccessType" || n2.type === "OptionalIndexedAccessType");
            case "NullableTypeAnnotation":
              return n2.type === "ArrayTypeAnnotation" || r2 === "objectType" && (n2.type === "IndexedAccessType" || n2.type === "OptionalIndexedAccessType");
            case "FunctionTypeAnnotation": {
              const t3 = n2.type === "NullableTypeAnnotation" ? e2.getParentNode(1) : n2;
              return t3.type === "UnionTypeAnnotation" || t3.type === "IntersectionTypeAnnotation" || t3.type === "ArrayTypeAnnotation" || r2 === "objectType" && (t3.type === "IndexedAccessType" || t3.type === "OptionalIndexedAccessType") || t3.type === "NullableTypeAnnotation" || n2.type === "FunctionTypeParam" && n2.name === null && fA(o2).some((e3) => e3.typeAnnotation && e3.typeAnnotation.type === "NullableTypeAnnotation");
            }
            case "OptionalIndexedAccessType":
              return r2 === "objectType" && n2.type === "IndexedAccessType";
            case "TypeofTypeAnnotation":
              return r2 === "objectType" && (n2.type === "IndexedAccessType" || n2.type === "OptionalIndexedAccessType");
            case "StringLiteral":
            case "NumericLiteral":
            case "Literal":
              if (typeof o2.value == "string" && n2.type === "ExpressionStatement" && !n2.directive) {
                const t3 = e2.getParentNode(1);
                return t3.type === "Program" || t3.type === "BlockStatement";
              }
              return r2 === "object" && n2.type === "MemberExpression" && typeof o2.value == "number";
            case "AssignmentExpression": {
              const t3 = e2.getParentNode(1);
              return r2 === "body" && n2.type === "ArrowFunctionExpression" || (r2 !== "key" || n2.type !== "ClassProperty" && n2.type !== "PropertyDefinition" || !n2.computed) && ((r2 !== "init" && r2 !== "update" || n2.type !== "ForStatement") && (n2.type === "ExpressionStatement" ? o2.left.type === "ObjectPattern" : (r2 !== "key" || n2.type !== "TSPropertySignature") && (n2.type !== "AssignmentExpression" && ((n2.type !== "SequenceExpression" || !t3 || t3.type !== "ForStatement" || t3.init !== n2 && t3.update !== n2) && ((r2 !== "value" || n2.type !== "Property" || !t3 || t3.type !== "ObjectPattern" || !t3.properties.includes(n2)) && n2.type !== "NGChainedExpression")))));
            }
            case "ConditionalExpression":
              switch (n2.type) {
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "SpreadElement":
                case "SpreadProperty":
                case "BinaryExpression":
                case "LogicalExpression":
                case "NGPipeExpression":
                case "ExportDefaultDeclaration":
                case "AwaitExpression":
                case "JSXSpreadAttribute":
                case "TSTypeAssertion":
                case "TypeCastExpression":
                case "TSAsExpression":
                case "TSNonNullExpression":
                  return true;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return r2 === "callee";
                case "ConditionalExpression":
                  return r2 === "test";
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return r2 === "object";
                default:
                  return false;
              }
            case "FunctionExpression":
              switch (n2.type) {
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return r2 === "callee";
                case "TaggedTemplateExpression":
                  return true;
                default:
                  return false;
              }
            case "ArrowFunctionExpression":
              switch (n2.type) {
                case "BinaryExpression":
                  return n2.operator !== "|>" || o2.extra && o2.extra.parenthesized;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return r2 === "callee";
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return r2 === "object";
                case "TSAsExpression":
                case "TSNonNullExpression":
                case "BindExpression":
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "LogicalExpression":
                case "AwaitExpression":
                case "TSTypeAssertion":
                  return true;
                case "ConditionalExpression":
                  return r2 === "test";
                default:
                  return false;
              }
            case "ClassExpression":
              return n2.type === "NewExpression" && r2 === "callee";
            case "OptionalMemberExpression":
            case "OptionalCallExpression": {
              const t3 = e2.getParentNode(1);
              if (r2 === "object" && n2.type === "MemberExpression" || r2 === "callee" && (n2.type === "CallExpression" || n2.type === "NewExpression") || n2.type === "TSNonNullExpression" && t3.type === "MemberExpression" && t3.object === n2)
                return true;
            }
            case "CallExpression":
            case "MemberExpression":
            case "TaggedTemplateExpression":
            case "TSNonNullExpression":
              if (r2 === "callee" && (n2.type === "BindExpression" || n2.type === "NewExpression")) {
                let e3 = o2;
                for (; e3; )
                  switch (e3.type) {
                    case "CallExpression":
                    case "OptionalCallExpression":
                      return true;
                    case "MemberExpression":
                    case "OptionalMemberExpression":
                    case "BindExpression":
                      e3 = e3.object;
                      break;
                    case "TaggedTemplateExpression":
                      e3 = e3.tag;
                      break;
                    case "TSNonNullExpression":
                      e3 = e3.expression;
                      break;
                    default:
                      return false;
                  }
              }
              return false;
            case "BindExpression":
              return r2 === "callee" && (n2.type === "BindExpression" || n2.type === "NewExpression") || r2 === "object" && vA(n2);
            case "NGPipeExpression":
              return !(n2.type === "NGRoot" || n2.type === "NGMicrosyntaxExpression" || n2.type === "ObjectProperty" && (!o2.extra || !o2.extra.parenthesized) || n2.type === "ArrayExpression" || bA(n2) && n2.arguments[r2] === o2 || r2 === "right" && n2.type === "NGPipeExpression" || r2 === "property" && n2.type === "MemberExpression" || n2.type === "AssignmentExpression");
            case "JSXFragment":
            case "JSXElement":
              return r2 === "callee" || r2 === "left" && n2.type === "BinaryExpression" && n2.operator === "<" || n2.type !== "ArrayExpression" && n2.type !== "ArrowFunctionExpression" && n2.type !== "AssignmentExpression" && n2.type !== "AssignmentPattern" && n2.type !== "BinaryExpression" && n2.type !== "NewExpression" && n2.type !== "ConditionalExpression" && n2.type !== "ExpressionStatement" && n2.type !== "JsExpressionRoot" && n2.type !== "JSXAttribute" && n2.type !== "JSXElement" && n2.type !== "JSXExpressionContainer" && n2.type !== "JSXFragment" && n2.type !== "LogicalExpression" && !bA(n2) && !AA(n2) && n2.type !== "ReturnStatement" && n2.type !== "ThrowStatement" && n2.type !== "TypeCastExpression" && n2.type !== "VariableDeclarator" && n2.type !== "YieldExpression";
            case "TypeAnnotation":
              return r2 === "returnType" && n2.type === "ArrowFunctionExpression" && function(e3) {
                return mA(e3, (e4) => e4.type === "ObjectTypeAnnotation" && mA(e4, (e5) => e5.type === "FunctionTypeAnnotation" || void 0) || void 0);
              }(o2);
          }
          return false;
        }
        function xA(e2) {
          const t2 = e2.getValue(), n2 = e2.getParentNode(), r2 = e2.getName();
          switch (n2.type) {
            case "NGPipeExpression":
              if (typeof r2 == "number" && n2.arguments[r2] === t2 && n2.arguments.length - 1 === r2)
                return e2.callParent(xA);
              break;
            case "ObjectProperty":
              if (r2 === "value") {
                const t3 = e2.getParentNode(1);
                return pA(t3.properties) === n2;
              }
              break;
            case "BinaryExpression":
            case "LogicalExpression":
              if (r2 === "right")
                return e2.callParent(xA);
              break;
            case "ConditionalExpression":
              if (r2 === "alternate")
                return e2.callParent(xA);
              break;
            case "UnaryExpression":
              if (n2.prefix)
                return e2.callParent(xA);
          }
          return false;
        }
        function SA(e2, t2) {
          const n2 = e2.getValue(), r2 = e2.getParentNode();
          return n2.type === "FunctionExpression" || n2.type === "ClassExpression" ? r2.type === "ExportDefaultDeclaration" || !FA(e2, t2) : !(!gA(n2) || r2.type !== "ExportDefaultDeclaration" && FA(e2, t2)) && e2.call((e3) => SA(e3, t2), ...dA(e2, n2));
        }
        var wA = FA;
        var TA = function(e2, t2) {
          switch (t2.parser) {
            case "json":
            case "json5":
            case "json-stringify":
            case "__js_expression":
            case "__vue_expression":
              return Object.assign(Object.assign({}, e2), {}, { type: t2.parser.startsWith("__") ? "JsExpressionRoot" : "JsonRoot", node: e2, comments: [], rootMarker: t2.rootMarker });
            default:
              return e2;
          }
        };
        const { builders: { join: BA, line: NA, group: kA, softline: PA, indent: OA } } = Zc;
        var IA = { isVueEventBindingExpression: function e2(t2) {
          switch (t2.type) {
            case "MemberExpression":
              switch (t2.property.type) {
                case "Identifier":
                case "NumericLiteral":
                case "StringLiteral":
                  return e2(t2.object);
              }
              return false;
            case "Identifier":
              return true;
            default:
              return false;
          }
        }, printHtmlBinding: function(e2, t2, n2) {
          const r2 = e2.getValue();
          if (t2.__onHtmlBindingRoot && e2.getName() === null && t2.__onHtmlBindingRoot(r2, t2), r2.type === "File")
            return t2.__isVueForBindingLeft ? e2.call((e3) => {
              const t3 = BA([",", NA], e3.map(n2, "params")), { params: r3 } = e3.getValue();
              return r3.length === 1 ? t3 : ["(", OA([PA, kA(t3)]), PA, ")"];
            }, "program", "body", 0) : t2.__isVueBindings ? e2.call((e3) => BA([",", NA], e3.map(n2, "params")), "program", "body", 0) : void 0;
        } };
        const { printComments: LA } = tD, { getLast: jA } = dc, { builders: { join: _A, line: MA, softline: RA, group: VA, indent: $A, align: WA, ifBreak: qA, indentIfBreak: UA }, utils: { cleanDoc: zA, getDocParts: GA, isConcat: HA } } = Zc, { hasLeadingOwnLineComment: JA, isBinaryish: XA, isJsxNode: YA, shouldFlatten: KA, hasComment: QA, CommentCheckFlags: ZA, isCallExpression: eF, isMemberExpression: tF, isObjectProperty: nF, isEnabledHackPipeline: rF } = CC;
        let oF = 0;
        function iF(e2, t2, n2, r2, o2) {
          const i2 = e2.getValue();
          if (!XA(i2))
            return [VA(t2())];
          let u2 = [];
          KA(i2.operator, i2.left.operator) ? u2 = e2.call((e3) => iF(e3, t2, n2, true, o2), "left") : u2.push(VA(t2("left")));
          const s2 = uF(i2), a2 = (i2.operator === "|>" || i2.type === "NGPipeExpression" || i2.operator === "|" && n2.parser === "__vue_expression") && !JA(n2.originalText, i2.right), c2 = i2.type === "NGPipeExpression" ? "|" : i2.operator, l3 = i2.type === "NGPipeExpression" && i2.arguments.length > 0 ? VA($A([RA, ": ", _A([RA, ":", qA(" ")], e2.map(t2, "arguments").map((e3) => WA(2, VA(e3))))])) : "";
          let p2;
          if (s2)
            p2 = [c2, " ", t2("right"), l3];
          else {
            const r3 = rF(n2) && c2 === "|>" ? e2.call((e3) => iF(e3, t2, n2, true, o2), "right") : t2("right");
            p2 = [a2 ? MA : "", c2, a2 ? " " : MA, r3, l3];
          }
          const f2 = e2.getParentNode(), d2 = QA(i2.left, ZA.Trailing | ZA.Line), h2 = d2 || !(o2 && i2.type === "LogicalExpression") && f2.type !== i2.type && i2.left.type !== i2.type && i2.right.type !== i2.type;
          if (u2.push(a2 ? "" : " ", h2 ? VA(p2, { shouldBreak: d2 }) : p2), r2 && QA(i2)) {
            const t3 = zA(LA(e2, u2, n2));
            return HA(t3) || t3.type === "fill" ? GA(t3) : [t3];
          }
          return u2;
        }
        function uF(e2) {
          return e2.type === "LogicalExpression" && (e2.right.type === "ObjectExpression" && e2.right.properties.length > 0 || (e2.right.type === "ArrayExpression" && e2.right.elements.length > 0 || !!YA(e2.right)));
        }
        var sF = { printBinaryishExpression: function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = e2.getParentNode(), i2 = e2.getParentNode(1), u2 = r2 !== o2.body && (o2.type === "IfStatement" || o2.type === "WhileStatement" || o2.type === "SwitchStatement" || o2.type === "DoWhileStatement"), s2 = rF(t2) && r2.operator === "|>", a2 = iF(e2, n2, t2, false, u2);
          if (u2)
            return a2;
          if (s2)
            return VA(a2);
          if (eF(o2) && o2.callee === r2 || o2.type === "UnaryExpression" || tF(o2) && !o2.computed)
            return VA([$A([RA, ...a2]), RA]);
          const c2 = o2.type === "ReturnStatement" || o2.type === "ThrowStatement" || o2.type === "JSXExpressionContainer" && i2.type === "JSXAttribute" || r2.operator !== "|" && o2.type === "JsExpressionRoot" || r2.type !== "NGPipeExpression" && (o2.type === "NGRoot" && t2.parser === "__ng_binding" || o2.type === "NGMicrosyntaxExpression" && i2.type === "NGMicrosyntax" && i2.body.length === 1) || r2 === o2.body && o2.type === "ArrowFunctionExpression" || r2 !== o2.body && o2.type === "ForStatement" || o2.type === "ConditionalExpression" && i2.type !== "ReturnStatement" && i2.type !== "ThrowStatement" && !eF(i2) || o2.type === "TemplateLiteral", l3 = o2.type === "AssignmentExpression" || o2.type === "VariableDeclarator" || o2.type === "ClassProperty" || o2.type === "PropertyDefinition" || o2.type === "TSAbstractPropertyDefinition" || o2.type === "ClassPrivateProperty" || nF(o2), p2 = XA(r2.left) && KA(r2.operator, r2.left.operator);
          if (c2 || uF(r2) && !p2 || !uF(r2) && l3)
            return VA(a2);
          if (a2.length === 0)
            return "";
          const f2 = YA(r2.right), d2 = a2.findIndex((e3) => typeof e3 != "string" && !Array.isArray(e3) && e3.type === "group"), h2 = a2.slice(0, d2 === -1 ? 1 : d2 + 1), g2 = a2.slice(h2.length, f2 ? -1 : void 0), m2 = Symbol("logicalChain-" + ++oF), y2 = VA([...h2, $A(g2)], { id: m2 });
          if (!f2)
            return y2;
          const D2 = jA(a2);
          return VA([y2, UA(D2, { groupId: m2 })]);
        }, shouldInlineLogicalExpression: uF };
        const { builders: { join: aF, line: cF, group: lF } } = Zc, { hasNode: pF, hasComment: fF, getComments: dF } = CC, { printBinaryishExpression: hF } = sF;
        function gF(e2, t2, n2) {
          return e2.type === "NGMicrosyntaxKeyedExpression" && e2.key.name === "of" && t2 === 1 && n2.body[0].type === "NGMicrosyntaxLet" && n2.body[0].value === null;
        }
        var mF = { printAngular: function(e2, t2, n2) {
          const r2 = e2.getValue();
          if (r2.type.startsWith("NG"))
            switch (r2.type) {
              case "NGRoot":
                return [n2("node"), fF(r2.node) ? " //" + dF(r2.node)[0].value.trimEnd() : ""];
              case "NGPipeExpression":
                return hF(e2, t2, n2);
              case "NGChainedExpression":
                return lF(aF([";", cF], e2.map((e3) => function(e4) {
                  return pF(e4.getValue(), (e5) => {
                    switch (e5.type) {
                      case void 0:
                        return false;
                      case "CallExpression":
                      case "OptionalCallExpression":
                      case "AssignmentExpression":
                        return true;
                    }
                  });
                }(e3) ? n2() : ["(", n2(), ")"], "expressions")));
              case "NGEmptyExpression":
                return "";
              case "NGQuotedExpression":
                return [r2.prefix, ": ", r2.value.trim()];
              case "NGMicrosyntax":
                return e2.map((e3, t3) => [t3 === 0 ? "" : gF(e3.getValue(), t3, r2) ? " " : [";", cF], n2()], "body");
              case "NGMicrosyntaxKey":
                return /^[$_a-z][\w$]*(?:-[$_a-z][\w$])*$/i.test(r2.name) ? r2.name : JSON.stringify(r2.name);
              case "NGMicrosyntaxExpression":
                return [n2("expression"), r2.alias === null ? "" : [" as ", n2("alias")]];
              case "NGMicrosyntaxKeyedExpression": {
                const t3 = e2.getName(), o2 = e2.getParentNode(), i2 = gF(r2, t3, o2) || (t3 === 1 && (r2.key.name === "then" || r2.key.name === "else") || t3 === 2 && r2.key.name === "else" && o2.body[t3 - 1].type === "NGMicrosyntaxKeyedExpression" && o2.body[t3 - 1].key.name === "then") && o2.body[0].type === "NGMicrosyntaxExpression";
                return [n2("key"), i2 ? " " : ": ", n2("expression")];
              }
              case "NGMicrosyntaxLet":
                return ["let ", n2("key"), r2.value === null ? "" : [" = ", n2("value")]];
              case "NGMicrosyntaxAs":
                return [n2("key"), " as ", n2("alias")];
              default:
                throw new Error("Unknown Angular node type: ".concat(JSON.stringify(r2.type), "."));
            }
        } };
        const { printComments: yF, printDanglingComments: DF } = tD, { builders: { line: EF, hardline: CF, softline: bF, group: vF, indent: AF, conditionalGroup: FF, fill: xF, ifBreak: SF, lineSuffixBoundary: wF, join: TF }, utils: { willBreak: BF } } = Zc, { getLast: NF, getPreferredQuote: kF } = dc, { isJsxNode: PF, rawText: OF, isLiteral: IF, isCallExpression: LF, isStringLiteral: jF, isBinaryish: _F, hasComment: MF, CommentCheckFlags: RF, hasNodeIgnoreComment: VF } = CC, $F = wA, { willPrintOwnComments: WF } = lA, qF = (e2) => e2 === "" || e2 === EF || e2 === CF || e2 === bF;
        function UF(e2, t2, n2) {
          const r2 = e2.getValue();
          if (r2.type === "JSXElement" && function(e3) {
            if (e3.children.length === 0)
              return true;
            if (e3.children.length > 1)
              return false;
            const t3 = e3.children[0];
            return IF(t3) && !QF(t3);
          }(r2))
            return [n2("openingElement"), n2("closingElement")];
          const o2 = r2.type === "JSXElement" ? n2("openingElement") : n2("openingFragment"), i2 = r2.type === "JSXElement" ? n2("closingElement") : n2("closingFragment");
          if (r2.children.length === 1 && r2.children[0].type === "JSXExpressionContainer" && (r2.children[0].expression.type === "TemplateLiteral" || r2.children[0].expression.type === "TaggedTemplateExpression"))
            return [o2, ...e2.map(n2, "children"), i2];
          r2.children = r2.children.map((e3) => function(e4) {
            return e4.type === "JSXExpressionContainer" && IF(e4.expression) && e4.expression.value === " " && !MF(e4.expression);
          }(e3) ? { type: "JSXText", value: " ", raw: " " } : e3);
          const u2 = r2.children.some(PF), s2 = r2.children.filter((e3) => e3.type === "JSXExpressionContainer").length > 1, a2 = r2.type === "JSXElement" && r2.openingElement.attributes.length > 1;
          let c2 = BF(o2) || u2 || a2 || s2;
          const l3 = e2.getParentNode().rootMarker === "mdx", p2 = t2.singleQuote ? "{' '}" : '{" "}', f2 = l3 ? " " : SF([p2, bF], " "), d2 = function(e3, t3, n3, r3, o3) {
            const i3 = [];
            return e3.each((e4, t4, u3) => {
              const s3 = e4.getValue();
              if (IF(s3)) {
                const e5 = OF(s3);
                if (QF(s3)) {
                  const n4 = e5.split(XF);
                  if (n4[0] === "") {
                    if (i3.push(""), n4.shift(), /\n/.test(n4[0])) {
                      const e6 = u3[t4 + 1];
                      i3.push(GF(o3, n4[1], s3, e6));
                    } else
                      i3.push(r3);
                    n4.shift();
                  }
                  let a3;
                  if (NF(n4) === "" && (n4.pop(), a3 = n4.pop()), n4.length === 0)
                    return;
                  for (const [e6, t5] of n4.entries())
                    e6 % 2 == 1 ? i3.push(EF) : i3.push(t5);
                  if (a3 !== void 0)
                    if (/\n/.test(a3)) {
                      const e6 = u3[t4 + 1];
                      i3.push(GF(o3, NF(i3), s3, e6));
                    } else
                      i3.push(r3);
                  else {
                    const e6 = u3[t4 + 1];
                    i3.push(zF(o3, NF(i3), s3, e6));
                  }
                } else
                  /\n/.test(e5) ? e5.match(/\n/g).length > 1 && i3.push("", CF) : i3.push("", r3);
              } else {
                const e5 = n3();
                i3.push(e5);
                const r4 = u3[t4 + 1];
                if (r4 && QF(r4)) {
                  const e6 = KF(OF(r4)).split(XF)[0];
                  i3.push(zF(o3, e6, s3, r4));
                } else
                  i3.push(CF);
              }
            }, "children"), i3;
          }(e2, 0, n2, f2, r2.openingElement && r2.openingElement.name && r2.openingElement.name.name === "fbt"), h2 = r2.children.some((e3) => QF(e3));
          for (let e3 = d2.length - 2; e3 >= 0; e3--) {
            const t3 = d2[e3] === "" && d2[e3 + 1] === "", n3 = d2[e3] === CF && d2[e3 + 1] === "" && d2[e3 + 2] === CF, r3 = (d2[e3] === bF || d2[e3] === CF) && d2[e3 + 1] === "" && d2[e3 + 2] === f2, o3 = d2[e3] === f2 && d2[e3 + 1] === "" && (d2[e3 + 2] === bF || d2[e3 + 2] === CF), i3 = d2[e3] === f2 && d2[e3 + 1] === "" && d2[e3 + 2] === f2, u3 = d2[e3] === bF && d2[e3 + 1] === "" && d2[e3 + 2] === CF || d2[e3] === CF && d2[e3 + 1] === "" && d2[e3 + 2] === bF;
            n3 && h2 || t3 || r3 || i3 || u3 ? d2.splice(e3, 2) : o3 && d2.splice(e3 + 1, 2);
          }
          for (; d2.length > 0 && qF(NF(d2)); )
            d2.pop();
          for (; d2.length > 1 && qF(d2[0]) && qF(d2[1]); )
            d2.shift(), d2.shift();
          const g2 = [];
          for (const [e3, t3] of d2.entries()) {
            if (t3 === f2) {
              if (e3 === 1 && d2[e3 - 1] === "") {
                if (d2.length === 2) {
                  g2.push(p2);
                  continue;
                }
                g2.push([p2, CF]);
                continue;
              }
              if (e3 === d2.length - 1) {
                g2.push(p2);
                continue;
              }
              if (d2[e3 - 1] === "" && d2[e3 - 2] === CF) {
                g2.push(p2);
                continue;
              }
            }
            g2.push(t3), BF(t3) && (c2 = true);
          }
          const m2 = h2 ? xF(g2) : vF(g2, { shouldBreak: true });
          if (l3)
            return m2;
          const y2 = vF([o2, AF([CF, m2]), CF, i2]);
          return c2 ? y2 : FF([vF([o2, ...d2, i2]), y2]);
        }
        function zF(e2, t2, n2, r2) {
          return e2 ? "" : n2.type === "JSXElement" && !n2.closingElement || r2 && r2.type === "JSXElement" && !r2.closingElement ? t2.length === 1 ? bF : CF : bF;
        }
        function GF(e2, t2, n2, r2) {
          return e2 ? CF : t2.length === 1 ? n2.type === "JSXElement" && !n2.closingElement || r2 && r2.type === "JSXElement" && !r2.closingElement ? CF : bF : CF;
        }
        function HF(e2, t2, n2) {
          return function(e3, t3, n3) {
            const r2 = e3.getParentNode();
            if (!r2)
              return t3;
            if ({ ArrayExpression: true, JSXAttribute: true, JSXElement: true, JSXExpressionContainer: true, JSXFragment: true, ExpressionStatement: true, CallExpression: true, OptionalCallExpression: true, ConditionalExpression: true, JsExpressionRoot: true }[r2.type])
              return t3;
            const o2 = e3.match(void 0, (e4) => e4.type === "ArrowFunctionExpression", LF, (e4) => e4.type === "JSXExpressionContainer"), i2 = $F(e3, n3);
            return vF([i2 ? "" : SF("("), AF([bF, t3]), bF, i2 ? "" : SF(")")], { shouldBreak: o2 });
          }(e2, yF(e2, UF(e2, t2, n2), t2), t2);
        }
        function JF(e2, t2, n2) {
          const r2 = e2.getValue();
          return ["{", e2.call((e3) => {
            const r3 = ["...", n2()], o2 = e3.getValue();
            return MF(o2) && WF(e3) ? [AF([bF, yF(e3, r3, t2)]), bF] : r3;
          }, r2.type === "JSXSpreadAttribute" ? "argument" : "expression"), "}"];
        }
        const XF = new RegExp("([ \n\r	]+)"), YF = new RegExp("[^ \n\r	]"), KF = (e2) => e2.replace(new RegExp("(?:^" + XF.source + "|" + XF.source + "$)"), "");
        function QF(e2) {
          return IF(e2) && (YF.test(OF(e2)) || !/\n/.test(OF(e2)));
        }
        var ZF = { hasJsxIgnoreComment: function(e2) {
          const t2 = e2.getValue(), n2 = e2.getParentNode();
          if (!(n2 && t2 && PF(t2) && PF(n2)))
            return false;
          let r2 = null;
          for (let e3 = n2.children.indexOf(t2); e3 > 0; e3--) {
            const t3 = n2.children[e3 - 1];
            if (t3.type !== "JSXText" || QF(t3)) {
              r2 = t3;
              break;
            }
          }
          return r2 && r2.type === "JSXExpressionContainer" && r2.expression.type === "JSXEmptyExpression" && VF(r2.expression);
        }, printJsx: function(e2, t2, n2) {
          const r2 = e2.getValue();
          if (r2.type.startsWith("JSX"))
            switch (r2.type) {
              case "JSXAttribute":
                return function(e3, t3, n3) {
                  const r3 = e3.getValue(), o2 = [];
                  if (o2.push(n3("name")), r3.value) {
                    let e4;
                    if (jF(r3.value)) {
                      let n4 = OF(r3.value).slice(1, -1).replace(/&apos;/g, "'").replace(/&quot;/g, '"');
                      const { escaped: o3, quote: i2, regex: u2 } = kF(n4, t3.jsxSingleQuote ? "'" : '"');
                      n4 = n4.replace(u2, o3), e4 = [i2, n4, i2];
                    } else
                      e4 = n3("value");
                    o2.push("=", e4);
                  }
                  return o2;
                }(e2, t2, n2);
              case "JSXIdentifier":
                return String(r2.name);
              case "JSXNamespacedName":
                return TF(":", [n2("namespace"), n2("name")]);
              case "JSXMemberExpression":
                return TF(".", [n2("object"), n2("property")]);
              case "JSXSpreadAttribute":
                return JF(e2, t2, n2);
              case "JSXSpreadChild":
                return JF(e2, t2, n2);
              case "JSXExpressionContainer":
                return function(e3, t3, n3) {
                  const r3 = e3.getValue(), o2 = e3.getParentNode(0), i2 = r3.expression.type === "JSXEmptyExpression" || !MF(r3.expression) && (r3.expression.type === "ArrayExpression" || r3.expression.type === "ObjectExpression" || r3.expression.type === "ArrowFunctionExpression" || LF(r3.expression) || r3.expression.type === "FunctionExpression" || r3.expression.type === "TemplateLiteral" || r3.expression.type === "TaggedTemplateExpression" || r3.expression.type === "DoExpression" || PF(o2) && (r3.expression.type === "ConditionalExpression" || _F(r3.expression)));
                  return vF(i2 ? ["{", n3("expression"), wF, "}"] : ["{", AF([bF, n3("expression")]), bF, wF, "}"]);
                }(e2, 0, n2);
              case "JSXFragment":
              case "JSXElement":
                return HF(e2, t2, n2);
              case "JSXOpeningElement":
                return function(e3, t3, n3) {
                  const r3 = e3.getValue(), o2 = r3.name && MF(r3.name) || r3.typeParameters && MF(r3.typeParameters);
                  if (r3.selfClosing && r3.attributes.length === 0 && !o2)
                    return ["<", n3("name"), n3("typeParameters"), " />"];
                  if (r3.attributes && r3.attributes.length === 1 && r3.attributes[0].value && jF(r3.attributes[0].value) && !r3.attributes[0].value.value.includes("\n") && !o2 && !MF(r3.attributes[0]))
                    return vF(["<", n3("name"), n3("typeParameters"), " ", ...e3.map(n3, "attributes"), r3.selfClosing ? " />" : ">"]);
                  const i2 = r3.attributes.length > 0 && MF(NF(r3.attributes), RF.Trailing), u2 = r3.attributes.length === 0 && !o2 || (t3.bracketSameLine || t3.jsxBracketSameLine) && (!o2 || r3.attributes.length > 0) && !i2, s2 = r3.attributes && r3.attributes.some((e4) => e4.value && jF(e4.value) && e4.value.value.includes("\n"));
                  return vF(["<", n3("name"), n3("typeParameters"), AF(e3.map(() => [EF, n3()], "attributes")), r3.selfClosing ? EF : u2 ? ">" : bF, r3.selfClosing ? "/>" : u2 ? "" : ">"], { shouldBreak: s2 });
                }(e2, t2, n2);
              case "JSXClosingElement":
                return function(e3, t3, n3) {
                  const r3 = e3.getValue(), o2 = [];
                  o2.push("</");
                  const i2 = n3("name");
                  return MF(r3.name, RF.Leading | RF.Line) ? o2.push(AF([CF, i2]), CF) : MF(r3.name, RF.Leading | RF.Block) ? o2.push(" ", i2) : o2.push(i2), o2.push(">"), o2;
                }(e2, 0, n2);
              case "JSXOpeningFragment":
              case "JSXClosingFragment":
                return function(e3, t3) {
                  const n3 = e3.getValue(), r3 = MF(n3), o2 = MF(n3, RF.Line), i2 = n3.type === "JSXOpeningFragment";
                  return [i2 ? "<" : "</", AF([o2 ? CF : r3 && !i2 ? " " : "", DF(e3, t3, true)]), o2 ? CF : "", ">"];
                }(e2, t2);
              case "JSXEmptyExpression":
                return function(e3, t3) {
                  const n3 = e3.getValue(), r3 = MF(n3, RF.Line);
                  return [DF(e3, t3, !r3), r3 ? CF : ""];
                }(e2, t2);
              case "JSXText":
                throw new Error("JSXTest should be handled by JSXElement");
              default:
                throw new Error("Unknown JSX node type: ".concat(JSON.stringify(r2.type), "."));
            }
        } }, ex = bu, tx = Ze, nx = gr, rx = ar, ox = Wu;
        ro({ target: "Array", proto: true }, { flat: function() {
          var e2 = arguments.length ? arguments[0] : void 0, t2 = tx(this), n2 = nx(t2), r2 = ox(t2, 0);
          return r2.length = ex(r2, t2, t2, n2, 0, e2 === void 0 ? 1 : rx(e2)), r2;
        } });
        var ix, ux = Sr, sx = wr, ax = Object.keys || function(e2) {
          return ux(e2, sx);
        }, cx = zt, lx = Yt, px = oe, fx = ax, dx = B ? Object.defineProperties : function(e2, t2) {
          lx(e2);
          for (var n2, r2 = px(t2), o2 = fx(t2), i2 = o2.length, u2 = 0; i2 > u2; )
            cx.f(e2, n2 = o2[u2++], r2[n2]);
          return e2;
        }, hx = pe("document", "documentElement"), gx = Yt, mx = dx, yx = wr, Dx = An, Ex = hx, Cx = Ot, bx = vn("IE_PROTO"), vx = function() {
        }, Ax = function(e2) {
          return "<script>" + e2 + "<\/script>";
        }, Fx = function(e2) {
          e2.write(Ax("")), e2.close();
          var t2 = e2.parentWindow.Object;
          return e2 = null, t2;
        }, xx = function() {
          try {
            ix = new ActiveXObject("htmlfile");
          } catch (e3) {
          }
          xx = typeof document != "undefined" ? document.domain && ix ? Fx(ix) : function() {
            var e3, t2 = Cx("iframe");
            return t2.style.display = "none", Ex.appendChild(t2), t2.src = String("javascript:"), (e3 = t2.contentWindow.document).open(), e3.write(Ax("document.F=Object")), e3.close(), e3.F;
          }() : Fx(ix);
          for (var e2 = yx.length; e2--; )
            delete xx.prototype[yx[e2]];
          return xx();
        };
        Dx[bx] = true;
        var Sx = Object.create || function(e2, t2) {
          var n2;
          return e2 !== null ? (vx.prototype = gx(e2), n2 = new vx(), vx.prototype = null, n2[bx] = e2) : n2 = xx(), t2 === void 0 ? n2 : mx(n2, t2);
        }, wx = zt, Tx = Dt("unscopables"), Bx = Array.prototype;
        Bx[Tx] == null && wx.f(Bx, Tx, { configurable: true, value: Sx(null) });
        var Nx = function(e2) {
          Bx[Tx][e2] = true;
        };
        Nx("flat");
        const { isNonEmptyArray: kx } = dc, { builders: { indent: Px, join: Ox, line: Ix } } = Zc, { isFlowAnnotationComment: Lx } = CC;
        function jx(e2, t2, n2) {
          const r2 = e2.getValue();
          if (!r2.typeAnnotation)
            return "";
          const o2 = e2.getParentNode(), i2 = r2.definite || o2 && o2.type === "VariableDeclarator" && o2.definite, u2 = o2.type === "DeclareFunction" && o2.id === r2;
          return Lx(t2.originalText, r2.typeAnnotation) ? [" /*: ", n2("typeAnnotation"), " */"] : [u2 ? "" : i2 ? "!: " : ": ", n2("typeAnnotation")];
        }
        var _x = { printOptionalToken: function(e2) {
          const t2 = e2.getValue();
          return !t2.optional || t2.type === "Identifier" && t2 === e2.getParentNode().key ? "" : t2.type === "OptionalCallExpression" || t2.type === "OptionalMemberExpression" && t2.computed ? "?." : "?";
        }, printFunctionTypeParameters: function(e2, t2, n2) {
          const r2 = e2.getValue();
          return r2.typeArguments ? n2("typeArguments") : r2.typeParameters ? n2("typeParameters") : "";
        }, printBindExpressionCallee: function(e2, t2, n2) {
          return ["::", n2("callee")];
        }, printTypeScriptModifiers: function(e2, t2, n2) {
          const r2 = e2.getValue();
          return kx(r2.modifiers) ? [Ox(" ", e2.map(n2, "modifiers")), " "] : "";
        }, printTypeAnnotation: jx, printRestSpread: function(e2, t2, n2) {
          return ["...", n2("argument"), jx(e2, t2, n2)];
        }, adjustClause: function(e2, t2, n2) {
          return e2.type === "EmptyStatement" ? ";" : e2.type === "BlockStatement" || n2 ? [" ", t2] : Px([Ix, t2]);
        } };
        const { printDanglingComments: Mx } = tD, { builders: { line: Rx, softline: Vx, hardline: $x, group: Wx, indent: qx, ifBreak: Ux, fill: zx } } = Zc, { getLast: Gx, hasNewline: Hx } = dc, { shouldPrintComma: Jx, hasComment: Xx, CommentCheckFlags: Yx, isNextLineEmpty: Kx, isNumericLiteral: Qx, isSignedNumericLiteral: Zx } = CC, { locStart: eS } = og, { printOptionalToken: tS, printTypeAnnotation: nS } = _x;
        function rS(e2, t2) {
          return e2.elements.length > 1 && e2.elements.every((e3) => e3 && (Qx(e3) || Zx(e3) && !Xx(e3.argument)) && !Xx(e3, Yx.Trailing | Yx.Line, (e4) => !Hx(t2.originalText, eS(e4), { backwards: true })));
        }
        function oS(e2, t2, n2, r2) {
          const o2 = [];
          let i2 = [];
          return e2.each((e3) => {
            o2.push(i2, Wx(r2())), i2 = [",", Rx], e3.getValue() && Kx(e3.getValue(), t2) && i2.push(Vx);
          }, n2), o2;
        }
        function iS(e2, t2, n2, r2) {
          const o2 = [];
          return e2.each((e3, i2, u2) => {
            const s2 = i2 === u2.length - 1;
            o2.push([n2(), s2 ? r2 : ","]), s2 || o2.push(Kx(e3.getValue(), t2) ? [$x, $x] : Xx(u2[i2 + 1], Yx.Leading | Yx.Line) ? $x : Rx);
          }, "elements"), zx(o2);
        }
        var uS = { printArray: function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = [], i2 = r2.type === "TupleExpression" ? "#[" : "[";
          if (r2.elements.length === 0)
            Xx(r2, Yx.Dangling) ? o2.push(Wx([i2, Mx(e2, t2), Vx, "]"])) : o2.push(i2, "]");
          else {
            const u2 = Gx(r2.elements), s2 = !(u2 && u2.type === "RestElement"), a2 = u2 === null, c2 = Symbol("array"), l3 = !t2.__inJestEach && r2.elements.length > 1 && r2.elements.every((e3, t3, n3) => {
              const r3 = e3 && e3.type;
              if (r3 !== "ArrayExpression" && r3 !== "ObjectExpression")
                return false;
              const o3 = n3[t3 + 1];
              if (o3 && r3 !== o3.type)
                return false;
              const i3 = r3 === "ArrayExpression" ? "elements" : "properties";
              return e3[i3] && e3[i3].length > 1;
            }), p2 = rS(r2, t2), f2 = s2 ? a2 ? "," : Jx(t2) ? p2 ? Ux(",", "", { groupId: c2 }) : Ux(",") : "" : "";
            o2.push(Wx([i2, qx([Vx, p2 ? iS(e2, t2, n2, f2) : [oS(e2, t2, "elements", n2), f2], Mx(e2, t2, true)]), Vx, "]"], { shouldBreak: l3, id: c2 }));
          }
          return o2.push(tS(e2), nS(e2, t2, n2)), o2;
        }, printArrayItems: oS, isConciselyPrintedArray: rS };
        const { printDanglingComments: sS } = tD, { getLast: aS, getPenultimate: cS } = dc, { getFunctionParameters: lS, hasComment: pS, CommentCheckFlags: fS, isFunctionCompositionArgs: dS, isJsxNode: hS, isLongCurriedCallExpression: gS, shouldPrintComma: mS, getCallArguments: yS, iterateCallArgumentsPath: DS, isNextLineEmpty: ES, isCallExpression: CS, isStringLiteral: bS, isObjectProperty: vS } = CC, { builders: { line: AS, hardline: FS, softline: xS, group: SS, indent: wS, conditionalGroup: TS, ifBreak: BS, breakParent: NS }, utils: { willBreak: kS } } = Zc, { ArgExpansionBailout: PS } = Cp, { isConciselyPrintedArray: OS } = uS;
        function IS(e2) {
          let t2 = arguments.length > 1 && arguments[1] !== void 0 && arguments[1];
          return e2.type === "ObjectExpression" && (e2.properties.length > 0 || pS(e2)) || e2.type === "ArrayExpression" && (e2.elements.length > 0 || pS(e2)) || e2.type === "TSTypeAssertion" && IS(e2.expression) || e2.type === "TSAsExpression" && IS(e2.expression) || e2.type === "FunctionExpression" || e2.type === "ArrowFunctionExpression" && (!e2.returnType || !e2.returnType.typeAnnotation || e2.returnType.typeAnnotation.type !== "TSTypeReference" || LS(e2.body)) && (e2.body.type === "BlockStatement" || e2.body.type === "ArrowFunctionExpression" && IS(e2.body, true) || e2.body.type === "ObjectExpression" || e2.body.type === "ArrayExpression" || !t2 && (CS(e2.body) || e2.body.type === "ConditionalExpression") || hS(e2.body)) || e2.type === "DoExpression" || e2.type === "ModuleExpression";
        }
        function LS(e2) {
          return e2.type === "BlockStatement" && (e2.body.some((e3) => e3.type !== "EmptyStatement") || pS(e2, fS.Dangling));
        }
        var jS = function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = r2.type === "ImportExpression", i2 = yS(r2);
          if (i2.length === 0)
            return ["(", sS(e2, t2, true), ")"];
          if (function(e3) {
            return e3.length === 2 && e3[0].type === "ArrowFunctionExpression" && lS(e3[0]).length === 0 && e3[0].body.type === "BlockStatement" && e3[1].type === "ArrayExpression" && !e3.some((e4) => pS(e4));
          }(i2))
            return ["(", n2(["arguments", 0]), ", ", n2(["arguments", 1]), ")"];
          let u2 = false, s2 = false;
          const a2 = i2.length - 1, c2 = [];
          DS(e2, (e3, r3) => {
            const o3 = e3.getNode(), i3 = [n2()];
            r3 === a2 || (ES(o3, t2) ? (r3 === 0 && (s2 = true), u2 = true, i3.push(",", FS, FS)) : i3.push(",", AS)), c2.push(i3);
          });
          const l3 = o2 || r2.callee && r2.callee.type === "Import" || !mS(t2, "all") ? "" : ",";
          function p2() {
            return SS(["(", wS([AS, ...c2]), l3, AS, ")"], { shouldBreak: true });
          }
          if (u2 || e2.getParentNode().type !== "Decorator" && dS(i2))
            return p2();
          const f2 = function(e3) {
            if (e3.length !== 2)
              return false;
            const [t3, n3] = e3;
            if (t3.type === "ModuleExpression" && function(e4) {
              return e4.type === "ObjectExpression" && e4.properties.length === 1 && vS(e4.properties[0]) && e4.properties[0].key.type === "Identifier" && e4.properties[0].key.name === "type" && bS(e4.properties[0].value) && e4.properties[0].value.value === "module";
            }(n3))
              return true;
            return !pS(t3) && (t3.type === "FunctionExpression" || t3.type === "ArrowFunctionExpression" && t3.body.type === "BlockStatement") && n3.type !== "FunctionExpression" && n3.type !== "ArrowFunctionExpression" && n3.type !== "ConditionalExpression" && !IS(n3);
          }(i2), d2 = function(e3, t3) {
            const n3 = aS(e3), r3 = cS(e3);
            return !pS(n3, fS.Leading) && !pS(n3, fS.Trailing) && IS(n3) && (!r3 || r3.type !== n3.type) && (e3.length !== 2 || r3.type !== "ArrowFunctionExpression" || n3.type !== "ArrayExpression") && !(e3.length > 1 && n3.type === "ArrayExpression" && OS(n3, t3));
          }(i2, t2);
          if (f2 || d2) {
            if (f2 ? c2.slice(1).some(kS) : c2.slice(0, -1).some(kS))
              return p2();
            let t3 = [];
            try {
              e2.try(() => {
                DS(e2, (e3, r3) => {
                  f2 && r3 === 0 && (t3 = [[n2([], { expandFirstArg: true }), c2.length > 1 ? "," : "", s2 ? FS : AS, s2 ? FS : ""], ...c2.slice(1)]), d2 && r3 === a2 && (t3 = [...c2.slice(0, -1), n2([], { expandLastArg: true })]);
                });
              });
            } catch (e3) {
              if (e3 instanceof PS)
                return p2();
              throw e3;
            }
            return [c2.some(kS) ? NS : "", TS([["(", ...t3, ")"], f2 ? ["(", SS(t3[0], { shouldBreak: true }), ...t3.slice(1), ")"] : ["(", ...c2.slice(0, -1), SS(aS(t3), { shouldBreak: true }), ")"], p2()])];
          }
          const h2 = ["(", wS([xS, ...c2]), BS(l3), xS, ")"];
          return gS(e2) ? h2 : SS(h2, { shouldBreak: c2.some(kS) || u2 });
        };
        const { builders: { softline: _S, group: MS, indent: RS, label: VS } } = Zc, { isNumericLiteral: $S, isMemberExpression: WS, isCallExpression: qS } = CC, { printOptionalToken: US } = _x;
        function zS(e2, t2, n2) {
          const r2 = n2("property"), o2 = e2.getValue(), i2 = US(e2);
          return o2.computed ? !o2.property || $S(o2.property) ? [i2, "[", r2, "]"] : MS([i2, "[", RS([_S, r2]), _S, "]"]) : [i2, ".", r2];
        }
        var GS = { printMemberExpression: function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = e2.getParentNode();
          let i2, u2 = 0;
          do {
            i2 = e2.getParentNode(u2), u2++;
          } while (i2 && (WS(i2) || i2.type === "TSNonNullExpression"));
          const s2 = n2("object"), a2 = zS(e2, t2, n2), c2 = i2 && (i2.type === "NewExpression" || i2.type === "BindExpression" || i2.type === "AssignmentExpression" && i2.left.type !== "Identifier") || r2.computed || r2.object.type === "Identifier" && r2.property.type === "Identifier" && !WS(o2) || (o2.type === "AssignmentExpression" || o2.type === "VariableDeclarator") && (qS(r2.object) && r2.object.arguments.length > 0 || r2.object.type === "TSNonNullExpression" && qS(r2.object.expression) && r2.object.expression.arguments.length > 0 || s2.label === "member-chain");
          return VS(s2.label === "member-chain" ? "member-chain" : "member", [s2, c2 ? a2 : MS(RS([_S, a2]))]);
        }, printMemberLookup: zS };
        const { printComments: HS } = tD, { getLast: JS, isNextLineEmptyAfterIndex: XS, getNextNonSpaceNonCommentCharacterIndex: YS } = dc, KS = wA, { isCallExpression: QS, isMemberExpression: ZS, isFunctionOrArrowExpression: ew, isLongCurriedCallExpression: tw, isMemberish: nw, isNumericLiteral: rw, isSimpleCallArgument: ow, hasComment: iw, CommentCheckFlags: uw, isNextLineEmpty: sw } = CC, { locEnd: aw } = og, { builders: { join: cw, hardline: lw, group: pw, indent: fw, conditionalGroup: dw, breakParent: hw, label: gw }, utils: { willBreak: mw } } = Zc, yw = jS, { printMemberLookup: Dw } = GS, { printOptionalToken: Ew, printFunctionTypeParameters: Cw, printBindExpressionCallee: bw } = _x;
        var vw = function(e2, t2, n2) {
          const r2 = e2.getParentNode(), o2 = !r2 || r2.type === "ExpressionStatement", i2 = [];
          function u2(e3) {
            const { originalText: n3 } = t2, r3 = YS(n3, e3, aw);
            return n3.charAt(r3) === ")" ? r3 !== false && XS(n3, r3 + 1) : sw(e3, t2);
          }
          function s2(e3) {
            const r3 = e3.getValue();
            QS(r3) && (nw(r3.callee) || QS(r3.callee)) ? (i2.unshift({ node: r3, printed: [HS(e3, [Ew(e3), Cw(e3, t2, n2), yw(e3, t2, n2)], t2), u2(r3) ? lw : ""] }), e3.call((e4) => s2(e4), "callee")) : nw(r3) ? (i2.unshift({ node: r3, needsParens: KS(e3, t2), printed: HS(e3, ZS(r3) ? Dw(e3, t2, n2) : bw(e3, t2, n2), t2) }), e3.call((e4) => s2(e4), "object")) : r3.type === "TSNonNullExpression" ? (i2.unshift({ node: r3, printed: HS(e3, "!", t2) }), e3.call((e4) => s2(e4), "expression")) : i2.unshift({ node: r3, printed: n2() });
          }
          const a2 = e2.getValue();
          i2.unshift({ node: a2, printed: [Ew(e2), Cw(e2, t2, n2), yw(e2, t2, n2)] }), a2.callee && e2.call((e3) => s2(e3), "callee");
          const c2 = [];
          let l3 = [i2[0]], p2 = 1;
          for (; p2 < i2.length && (i2[p2].node.type === "TSNonNullExpression" || QS(i2[p2].node) || ZS(i2[p2].node) && i2[p2].node.computed && rw(i2[p2].node.property)); ++p2)
            l3.push(i2[p2]);
          if (!QS(i2[0].node))
            for (; p2 + 1 < i2.length && (nw(i2[p2].node) && nw(i2[p2 + 1].node)); ++p2)
              l3.push(i2[p2]);
          c2.push(l3), l3 = [];
          let f2 = false;
          for (; p2 < i2.length; ++p2) {
            if (f2 && nw(i2[p2].node)) {
              if (i2[p2].node.computed && rw(i2[p2].node.property)) {
                l3.push(i2[p2]);
                continue;
              }
              c2.push(l3), l3 = [], f2 = false;
            }
            (QS(i2[p2].node) || i2[p2].node.type === "ImportExpression") && (f2 = true), l3.push(i2[p2]), iw(i2[p2].node, uw.Trailing) && (c2.push(l3), l3 = [], f2 = false);
          }
          function d2(e3) {
            return /^[A-Z]|^[$_]+$/.test(e3);
          }
          l3.length > 0 && c2.push(l3);
          const h2 = c2.length >= 2 && !iw(c2[1][0].node) && function(e3) {
            const n3 = e3[1].length > 0 && e3[1][0].node.computed;
            if (e3[0].length === 1) {
              const r4 = e3[0][0].node;
              return r4.type === "ThisExpression" || r4.type === "Identifier" && (d2(r4.name) || o2 && function(e4) {
                return e4.length <= t2.tabWidth;
              }(r4.name) || n3);
            }
            const r3 = JS(e3[0]).node;
            return ZS(r3) && r3.property.type === "Identifier" && (d2(r3.property.name) || n3);
          }(c2);
          function g2(e3) {
            const t3 = e3.map((e4) => e4.printed);
            return e3.length > 0 && JS(e3).needsParens ? ["(", ...t3, ")"] : t3;
          }
          const m2 = c2.map(g2), y2 = m2, D2 = h2 ? 3 : 2, E2 = c2.flat(), C2 = E2.slice(1, -1).some((e3) => iw(e3.node, uw.Leading)) || E2.slice(0, -1).some((e3) => iw(e3.node, uw.Trailing)) || c2[D2] && iw(c2[D2][0].node, uw.Leading);
          if (c2.length <= D2 && !C2)
            return tw(e2) ? y2 : pw(y2);
          const b2 = JS(c2[h2 ? 1 : 0]).node, v2 = !QS(b2) && u2(b2), A2 = [g2(c2[0]), h2 ? c2.slice(1, 2).map(g2) : "", v2 ? lw : "", function(e3) {
            return e3.length === 0 ? "" : fw(pw([lw, cw(lw, e3.map(g2))]));
          }(c2.slice(h2 ? 2 : 1))], F2 = i2.map((e3) => {
            let { node: t3 } = e3;
            return t3;
          }).filter(QS);
          let x2;
          return x2 = C2 || F2.length > 2 && F2.some((e3) => !e3.arguments.every((e4) => ow(e4, 0))) || m2.slice(0, -1).some(mw) || function() {
            const e3 = JS(JS(c2)).node, t3 = JS(m2);
            return QS(e3) && mw(t3) && F2.slice(0, -1).some((e4) => e4.arguments.some(ew));
          }() ? pw(A2) : [mw(y2) || v2 ? hw : "", dw([y2, A2])], gw("member-chain", x2);
        };
        const { builders: { join: Aw, group: Fw } } = Zc, xw = wA, { getCallArguments: Sw, hasFlowAnnotationComment: ww, isCallExpression: Tw, isMemberish: Bw, isStringLiteral: Nw, isTemplateOnItsOwnLine: kw, isTestCall: Pw, iterateCallArgumentsPath: Ow } = CC, Iw = vw, Lw = jS, { printOptionalToken: jw, printFunctionTypeParameters: _w } = _x;
        var Mw = { printCallExpression: function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = e2.getParentNode(), i2 = r2.type === "NewExpression", u2 = r2.type === "ImportExpression", s2 = jw(e2), a2 = Sw(r2);
          if (a2.length > 0 && (!u2 && !i2 && function(e3, t3) {
            if (e3.callee.type !== "Identifier")
              return false;
            if (e3.callee.name === "require")
              return true;
            if (e3.callee.name === "define") {
              const n3 = Sw(e3);
              return t3.type === "ExpressionStatement" && (n3.length === 1 || n3.length === 2 && n3[0].type === "ArrayExpression" || n3.length === 3 && Nw(n3[0]) && n3[1].type === "ArrayExpression");
            }
            return false;
          }(r2, o2) || a2.length === 1 && kw(a2[0], t2.originalText) || !i2 && Pw(r2, o2))) {
            const r3 = [];
            return Ow(e2, () => {
              r3.push(n2());
            }), [i2 ? "new " : "", n2("callee"), s2, _w(e2, t2, n2), "(", Aw(", ", r3), ")"];
          }
          const c2 = (t2.parser === "babel" || t2.parser === "babel-flow") && r2.callee && r2.callee.type === "Identifier" && ww(r2.callee.trailingComments);
          if (c2 && (r2.callee.trailingComments[0].printed = true), !u2 && !i2 && Bw(r2.callee) && !e2.call((e3) => xw(e3, t2), "callee"))
            return Iw(e2, t2, n2);
          const l3 = [i2 ? "new " : "", u2 ? "import" : n2("callee"), s2, c2 ? "/*:: ".concat(r2.callee.trailingComments[0].value.slice(2).trim(), " */") : "", _w(e2, t2, n2), Lw(e2, t2, n2)];
          return u2 || Tw(r2.callee) ? Fw(l3) : l3;
        } };
        const { isNonEmptyArray: Rw, getStringWidth: Vw } = dc, { builders: { line: $w, group: Ww, indent: qw, indentIfBreak: Uw }, utils: { cleanDoc: zw, willBreak: Gw, canBreak: Hw } } = Zc, { hasLeadingOwnLineComment: Jw, isBinaryish: Xw, isStringLiteral: Yw, isLiteral: Kw, isNumericLiteral: Qw, isCallExpression: Zw, isMemberExpression: eT, getCallArguments: tT, rawText: nT, hasComment: rT, isSignedNumericLiteral: oT, isObjectProperty: iT } = CC, { shouldInlineLogicalExpression: uT } = sF, { printCallExpression: sT } = Mw;
        function aT(e2, t2, n2, r2, o2, i2) {
          const u2 = function(e3, t3, n3, r3, o3) {
            const i3 = e3.getValue(), u3 = i3[o3];
            if (!u3)
              return "only-left";
            const s3 = !cT(u3), a2 = e3.match(cT, lT, (e4) => !s3 || e4.type !== "ExpressionStatement" && e4.type !== "VariableDeclaration");
            if (a2)
              return s3 ? u3.type === "ArrowFunctionExpression" && u3.body.type === "ArrowFunctionExpression" ? "chain-tail-arrow-chain" : "chain-tail" : "chain";
            if (!s3 && cT(u3.right) || Jw(t3.originalText, u3))
              return "break-after-operator";
            if (u3.type === "CallExpression" && u3.callee.name === "require" || t3.parser === "json5" || t3.parser === "json")
              return "never-break-after-operator";
            if (function(e4) {
              if (lT(e4)) {
                const t4 = e4.left || e4.id;
                return t4.type === "ObjectPattern" && t4.properties.length > 2 && t4.properties.some((e5) => iT(e5) && (!e5.shorthand || e5.value && e5.value.type === "AssignmentPattern"));
              }
              return false;
            }(i3) || function(e4) {
              const t4 = function(e5) {
                if (function(e6) {
                  return e6.type === "TSTypeAliasDeclaration" || e6.type === "TypeAlias";
                }(e5) && e5.typeParameters && e5.typeParameters.params)
                  return e5.typeParameters.params;
                return null;
              }(e4);
              if (Rw(t4)) {
                const n4 = e4.type === "TSTypeAliasDeclaration" ? "constraint" : "bound";
                if (t4.length > 1 && t4.some((e5) => e5[n4] || e5.default))
                  return true;
              }
              return false;
            }(i3) || function(e4) {
              if (e4.type !== "VariableDeclarator")
                return false;
              const { typeAnnotation: t4 } = e4.id;
              if (!t4 || !t4.typeAnnotation)
                return false;
              const n4 = fT(t4.typeAnnotation);
              return Rw(n4) && n4.length > 1 && n4.some((e5) => Rw(fT(e5)) || e5.type === "TSConditionalType");
            }(i3) || pT(i3) && Hw(r3))
              return "break-lhs";
            const c2 = function(e4, t4, n4) {
              if (!iT(e4))
                return false;
              t4 = zw(t4);
              const r4 = 3;
              return typeof t4 == "string" && Vw(t4) < n4.tabWidth + r4;
            }(i3, r3, t3);
            if (e3.call(() => function(e4, t4, n4, r4) {
              const o4 = e4.getValue();
              if (Xw(o4) && !uT(o4))
                return true;
              switch (o4.type) {
                case "StringLiteralTypeAnnotation":
                case "SequenceExpression":
                  return true;
                case "ConditionalExpression": {
                  const { test: e5 } = o4;
                  return Xw(e5) && !uT(e5);
                }
                case "ClassExpression":
                  return Rw(o4.decorators);
              }
              if (r4)
                return false;
              let i4 = o4;
              const u4 = [];
              for (; ; )
                if (i4.type === "UnaryExpression")
                  i4 = i4.argument, u4.push("argument");
                else {
                  if (i4.type !== "TSNonNullExpression")
                    break;
                  i4 = i4.expression, u4.push("expression");
                }
              if (Yw(i4) || e4.call(() => dT(e4, t4, n4), ...u4))
                return true;
              return false;
            }(e3, t3, n3, c2), o3))
              return "break-after-operator";
            if (c2 || u3.type === "TemplateLiteral" || u3.type === "TaggedTemplateExpression" || u3.type === "BooleanLiteral" || Qw(u3) || u3.type === "ClassExpression")
              return "never-break-after-operator";
            return "fluid";
          }(e2, t2, n2, r2, i2), s2 = n2(i2, { assignmentLayout: u2 });
          switch (u2) {
            case "break-after-operator":
              return Ww([Ww(r2), o2, Ww(qw([$w, s2]))]);
            case "never-break-after-operator":
              return Ww([Ww(r2), o2, " ", s2]);
            case "fluid": {
              const e3 = Symbol("assignment");
              return Ww([Ww(r2), o2, Ww(qw($w), { id: e3 }), Uw(s2, { groupId: e3 })]);
            }
            case "break-lhs":
              return Ww([r2, o2, " ", Ww(s2)]);
            case "chain":
              return [Ww(r2), o2, $w, s2];
            case "chain-tail":
              return [Ww(r2), o2, qw([$w, s2])];
            case "chain-tail-arrow-chain":
              return [Ww(r2), o2, s2];
            case "only-left":
              return r2;
          }
        }
        function cT(e2) {
          return e2.type === "AssignmentExpression";
        }
        function lT(e2) {
          return cT(e2) || e2.type === "VariableDeclarator";
        }
        function pT(e2) {
          return e2.type === "VariableDeclarator" && e2.init && e2.init.type === "ArrowFunctionExpression";
        }
        function fT(e2) {
          return function(e3) {
            return e3.type === "TSTypeReference" || e3.type === "GenericTypeAnnotation";
          }(e2) && e2.typeParameters && e2.typeParameters.params ? e2.typeParameters.params : null;
        }
        function dT(e2, t2, n2) {
          let r2 = arguments.length > 3 && arguments[3] !== void 0 && arguments[3];
          const o2 = e2.getValue(), i2 = () => dT(e2, t2, n2, true);
          if (o2.type === "TSNonNullExpression")
            return e2.call(i2, "expression");
          if (Zw(o2)) {
            if (sT(e2, t2, n2).label === "member-chain")
              return false;
            const r3 = tT(o2);
            return !!(r3.length === 0 || r3.length === 1 && hT(r3[0], t2)) && (!gT(o2, n2) && e2.call(i2, "callee"));
          }
          return eT(o2) ? e2.call(i2, "object") : r2 && (o2.type === "Identifier" || o2.type === "ThisExpression");
        }
        function hT(e2, t2) {
          let { printWidth: n2 } = t2;
          if (rT(e2))
            return false;
          const r2 = 0.25 * n2;
          if (e2.type === "ThisExpression" || e2.type === "Identifier" && e2.name.length <= r2 || oT(e2) && !rT(e2.argument))
            return true;
          const o2 = e2.type === "Literal" && "regex" in e2 && e2.regex.pattern || e2.type === "RegExpLiteral" && e2.pattern;
          return o2 ? o2.length <= r2 : Yw(e2) ? nT(e2).length <= r2 : e2.type === "TemplateLiteral" ? e2.expressions.length === 0 && e2.quasis[0].value.raw.length <= r2 && !e2.quasis[0].value.raw.includes("\n") : Kw(e2);
        }
        function gT(e2, t2) {
          const n2 = function(e3) {
            return e3.typeParameters && e3.typeParameters.params || e3.typeArguments && e3.typeArguments.params;
          }(e2);
          if (Rw(n2)) {
            if (n2.length > 1)
              return true;
            if (n2.length === 1) {
              const e3 = n2[0];
              if (e3.type === "TSUnionType" || e3.type === "UnionTypeAnnotation" || e3.type === "TSIntersectionType" || e3.type === "IntersectionTypeAnnotation")
                return true;
            }
            const r2 = e2.typeParameters ? "typeParameters" : "typeArguments";
            if (Gw(t2(r2)))
              return true;
          }
          return false;
        }
        var mT = { printVariableDeclarator: function(e2, t2, n2) {
          return aT(e2, t2, n2, n2("id"), " =", "init");
        }, printAssignmentExpression: function(e2, t2, n2) {
          const r2 = e2.getValue();
          return aT(e2, t2, n2, n2("left"), [" ", r2.operator], "right");
        }, printAssignment: aT, isArrowFunctionVariableDeclarator: pT };
        const { getNextNonSpaceNonCommentCharacter: yT } = dc, { printDanglingComments: DT } = tD, { builders: { line: ET, hardline: CT, softline: bT, group: vT, indent: AT, ifBreak: FT }, utils: { removeLines: xT, willBreak: ST } } = Zc, { getFunctionParameters: wT, iterateFunctionParametersPath: TT, isSimpleType: BT, isTestCall: NT, isTypeAnnotationAFunction: kT, isObjectType: PT, isObjectTypePropertyAFunction: OT, hasRestParameter: IT, shouldPrintComma: LT, hasComment: jT, isNextLineEmpty: _T } = CC, { locEnd: MT } = og, { ArgExpansionBailout: RT } = Cp, { printFunctionTypeParameters: VT } = _x;
        function $T(e2) {
          if (!e2)
            return false;
          const t2 = wT(e2);
          if (t2.length !== 1)
            return false;
          const [n2] = t2;
          return !jT(n2) && (n2.type === "ObjectPattern" || n2.type === "ArrayPattern" || n2.type === "Identifier" && n2.typeAnnotation && (n2.typeAnnotation.type === "TypeAnnotation" || n2.typeAnnotation.type === "TSTypeAnnotation") && PT(n2.typeAnnotation.typeAnnotation) || n2.type === "FunctionTypeParam" && PT(n2.typeAnnotation) || n2.type === "AssignmentPattern" && (n2.left.type === "ObjectPattern" || n2.left.type === "ArrayPattern") && (n2.right.type === "Identifier" || n2.right.type === "ObjectExpression" && n2.right.properties.length === 0 || n2.right.type === "ArrayExpression" && n2.right.elements.length === 0));
        }
        var WT = { printFunctionParameters: function(e2, t2, n2, r2, o2) {
          const i2 = e2.getValue(), u2 = wT(i2), s2 = o2 ? VT(e2, n2, t2) : "";
          if (u2.length === 0)
            return [s2, "(", DT(e2, n2, true, (e3) => yT(n2.originalText, e3, MT) === ")"), ")"];
          const a2 = e2.getParentNode(), c2 = NT(a2), l3 = $T(i2), p2 = [];
          if (TT(e2, (e3, r3) => {
            const o3 = r3 === u2.length - 1;
            o3 && i2.rest && p2.push("..."), p2.push(t2()), o3 || (p2.push(","), c2 || l3 ? p2.push(" ") : _T(u2[r3], n2) ? p2.push(CT, CT) : p2.push(ET));
          }), r2) {
            if (ST(s2) || ST(p2))
              throw new RT();
            return vT([xT(s2), "(", xT(p2), ")"]);
          }
          const f2 = u2.every((e3) => !e3.decorators);
          return l3 && f2 || c2 ? [s2, "(", ...p2, ")"] : (OT(a2) || kT(a2) || a2.type === "TypeAlias" || a2.type === "UnionTypeAnnotation" || a2.type === "TSUnionType" || a2.type === "IntersectionTypeAnnotation" || a2.type === "FunctionTypeAnnotation" && a2.returnType === i2) && u2.length === 1 && u2[0].name === null && i2.this !== u2[0] && u2[0].typeAnnotation && i2.typeParameters === null && BT(u2[0].typeAnnotation) && !i2.rest ? n2.arrowParens === "always" ? ["(", ...p2, ")"] : p2 : [s2, "(", AT([bT, ...p2]), FT(!IT(i2) && LT(n2, "all") ? "," : ""), bT, ")"];
        }, shouldHugFunctionParameters: $T, shouldGroupFunctionParameters: function(e2, t2) {
          const n2 = function(e3) {
            let t3;
            return e3.returnType ? (t3 = e3.returnType, t3.typeAnnotation && (t3 = t3.typeAnnotation)) : e3.typeAnnotation && (t3 = e3.typeAnnotation), t3;
          }(e2);
          if (!n2)
            return false;
          const r2 = e2.typeParameters && e2.typeParameters.params;
          if (r2) {
            if (r2.length > 1)
              return false;
            if (r2.length === 1) {
              const e3 = r2[0];
              if (e3.constraint || e3.default)
                return false;
            }
          }
          return wT(e2).length === 1 && (PT(n2) || ST(t2));
        } };
        const { printComments: qT, printDanglingComments: UT } = tD, { getLast: zT, isNonEmptyArray: GT } = dc, { builders: { group: HT, join: JT, line: XT, softline: YT, indent: KT, align: QT, ifBreak: ZT } } = Zc, eB = wA, { locStart: tB } = og, { isSimpleType: nB, isObjectType: rB, hasLeadingOwnLineComment: oB, isObjectTypePropertyAFunction: iB, shouldPrintComma: uB } = CC, { printAssignment: sB } = mT, { printFunctionParameters: aB, shouldGroupFunctionParameters: cB } = WT, { printArrayItems: lB } = uS;
        function pB(e2) {
          if (nB(e2) || rB(e2))
            return true;
          if (e2.type === "UnionTypeAnnotation" || e2.type === "TSUnionType") {
            const t2 = e2.types.filter((e3) => e3.type === "VoidTypeAnnotation" || e3.type === "TSVoidKeyword" || e3.type === "NullLiteralTypeAnnotation" || e3.type === "TSNullKeyword").length, n2 = e2.types.some((e3) => e3.type === "ObjectTypeAnnotation" || e3.type === "TSTypeLiteral" || e3.type === "GenericTypeAnnotation" || e3.type === "TSTypeReference");
            if (e2.types.length - 1 === t2 && n2)
              return true;
          }
          return false;
        }
        var fB = { printOpaqueType: function(e2, t2, n2) {
          const r2 = t2.semi ? ";" : "", o2 = e2.getValue(), i2 = [];
          return i2.push("opaque type ", n2("id"), n2("typeParameters")), o2.supertype && i2.push(": ", n2("supertype")), o2.impltype && i2.push(" = ", n2("impltype")), i2.push(r2), i2;
        }, printTypeAlias: function(e2, t2, n2) {
          const r2 = t2.semi ? ";" : "", o2 = e2.getValue(), i2 = [];
          o2.declare && i2.push("declare "), i2.push("type ", n2("id"), n2("typeParameters"));
          const u2 = o2.type === "TSTypeAliasDeclaration" ? "typeAnnotation" : "right";
          return [sB(e2, t2, n2, i2, " =", u2), r2];
        }, printIntersectionType: function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = e2.map(n2, "types"), i2 = [];
          let u2 = false;
          for (let e3 = 0; e3 < o2.length; ++e3)
            e3 === 0 ? i2.push(o2[e3]) : rB(r2.types[e3 - 1]) && rB(r2.types[e3]) ? i2.push([" & ", u2 ? KT(o2[e3]) : o2[e3]]) : rB(r2.types[e3 - 1]) || rB(r2.types[e3]) ? (e3 > 1 && (u2 = true), i2.push(" & ", e3 > 1 ? KT(o2[e3]) : o2[e3])) : i2.push(KT([" &", XT, o2[e3]]));
          return HT(i2);
        }, printUnionType: function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = e2.getParentNode(), i2 = !(o2.type === "TypeParameterInstantiation" || o2.type === "TSTypeParameterInstantiation" || o2.type === "GenericTypeAnnotation" || o2.type === "TSTypeReference" || o2.type === "TSTypeAssertion" || o2.type === "TupleTypeAnnotation" || o2.type === "TSTupleType" || o2.type === "FunctionTypeParam" && !o2.name && e2.getParentNode(1).this !== o2 || (o2.type === "TypeAlias" || o2.type === "VariableDeclarator" || o2.type === "TSTypeAliasDeclaration") && oB(t2.originalText, r2)), u2 = pB(r2), s2 = e2.map((e3) => {
            let r3 = n2();
            return u2 || (r3 = QT(2, r3)), qT(e3, r3, t2);
          }, "types");
          if (u2)
            return JT(" | ", s2);
          const a2 = i2 && !oB(t2.originalText, r2), c2 = [ZT([a2 ? XT : "", "| "]), JT([XT, "| "], s2)];
          return eB(e2, t2) ? HT([KT(c2), YT]) : o2.type === "TupleTypeAnnotation" && o2.types.length > 1 || o2.type === "TSTupleType" && o2.elementTypes.length > 1 ? HT([KT([ZT(["(", YT]), c2]), YT, ZT(")")]) : HT(i2 ? KT(c2) : c2);
        }, printFunctionType: function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = [], i2 = e2.getParentNode(0), u2 = e2.getParentNode(1), s2 = e2.getParentNode(2);
          let a2 = r2.type === "TSFunctionType" || !((i2.type === "ObjectTypeProperty" || i2.type === "ObjectTypeInternalSlot") && !i2.variance && !i2.optional && tB(i2) === tB(r2) || i2.type === "ObjectTypeCallProperty" || s2 && s2.type === "DeclareFunction"), c2 = a2 && (i2.type === "TypeAnnotation" || i2.type === "TSTypeAnnotation");
          const l3 = c2 && a2 && (i2.type === "TypeAnnotation" || i2.type === "TSTypeAnnotation") && u2.type === "ArrowFunctionExpression";
          iB(i2) && (a2 = true, c2 = true), l3 && o2.push("(");
          const p2 = aB(e2, n2, t2, false, true), f2 = r2.returnType || r2.predicate || r2.typeAnnotation ? [a2 ? " => " : ": ", n2("returnType"), n2("predicate"), n2("typeAnnotation")] : "", d2 = cB(r2, f2);
          return o2.push(d2 ? HT(p2) : p2), f2 && o2.push(f2), l3 && o2.push(")"), HT(o2);
        }, printTupleType: function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = r2.type === "TSTupleType" ? "elementTypes" : "types", i2 = r2[o2], u2 = GT(i2), s2 = u2 && zT(i2).type === "TSRestType", a2 = u2 ? YT : "";
          return HT(["[", KT([a2, lB(e2, t2, o2, n2)]), ZT(u2 && uB(t2, "all") && !s2 ? "," : ""), UT(e2, t2, true), a2, "]"]);
        }, printIndexedAccessType: function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = r2.type === "OptionalIndexedAccessType" && r2.optional ? "?.[" : "[";
          return [n2("objectType"), o2, n2("indexType"), "]"];
        }, shouldHugType: pB };
        const { printDanglingComments: dB } = tD, { builders: { join: hB, line: gB, hardline: mB, softline: yB, group: DB, indent: EB, ifBreak: CB } } = Zc, { isTestCall: bB, hasComment: vB, CommentCheckFlags: AB, isTSXFile: FB, shouldPrintComma: xB, getFunctionParameters: SB, isObjectType: wB } = CC, { createGroupIdMapper: TB } = dc, { shouldHugType: BB } = fB, { isArrowFunctionVariableDeclarator: NB } = mT, kB = TB("typeParameters");
        function PB(e2, t2) {
          const n2 = e2.getValue();
          if (!vB(n2, AB.Dangling))
            return "";
          const r2 = !vB(n2, AB.Line), o2 = dB(e2, t2, r2);
          return r2 ? o2 : [o2, mB];
        }
        var OB = { printTypeParameter: function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = [], i2 = e2.getParentNode();
          return i2.type === "TSMappedType" ? (o2.push("[", n2("name")), r2.constraint && o2.push(" in ", n2("constraint")), i2.nameType && o2.push(" as ", e2.callParent(() => n2("nameType"))), o2.push("]"), o2) : (r2.variance && o2.push(n2("variance")), o2.push(n2("name")), r2.bound && o2.push(": ", n2("bound")), r2.constraint && o2.push(" extends ", n2("constraint")), r2.default && o2.push(" = ", n2("default")), o2);
        }, printTypeParameters: function(e2, t2, n2, r2) {
          const o2 = e2.getValue();
          if (!o2[r2])
            return "";
          if (!Array.isArray(o2[r2]))
            return n2(r2);
          const i2 = e2.getNode(2), u2 = i2 && bB(i2), s2 = e2.match((e3) => !(e3[r2].length === 1 && wB(e3[r2][0])), void 0, (e3, t3) => t3 === "typeAnnotation", (e3) => e3.type === "Identifier", NB);
          if (!s2 && (u2 || o2[r2].length === 0 || o2[r2].length === 1 && (o2[r2][0].type === "NullableTypeAnnotation" || BB(o2[r2][0]))))
            return ["<", hB(", ", e2.map(n2, r2)), PB(e2, t2), ">"];
          const a2 = o2.type === "TSTypeParameterInstantiation" ? "" : SB(o2).length === 1 && FB(t2) && !o2[r2][0].constraint && e2.getParentNode().type === "ArrowFunctionExpression" ? "," : xB(t2, "all") ? CB(",") : "";
          return DB(["<", EB([yB, hB([",", gB], e2.map(n2, r2))]), a2, yB, ">"], { id: kB(o2) });
        }, getTypeParametersGroupId: kB };
        const { printComments: IB } = tD, { printString: LB, printNumber: jB } = dc, { isNumericLiteral: _B, isSimpleNumber: MB, isStringLiteral: RB, isStringPropSafeToUnquote: VB, rawText: $B } = CC, { printAssignment: WB } = mT, qB = /* @__PURE__ */ new WeakMap();
        function UB(e2, t2, n2) {
          const r2 = e2.getNode();
          if (r2.computed)
            return ["[", n2("key"), "]"];
          const o2 = e2.getParentNode(), { key: i2 } = r2;
          if (r2.type === "ClassPrivateProperty" && i2.type === "Identifier")
            return ["#", n2("key")];
          if (t2.quoteProps === "consistent" && !qB.has(o2)) {
            const e3 = (o2.properties || o2.body || o2.members).some((e4) => !e4.computed && e4.key && RB(e4.key) && !VB(e4, t2));
            qB.set(o2, e3);
          }
          if ((i2.type === "Identifier" || _B(i2) && MB(jB($B(i2))) && String(i2.value) === jB($B(i2)) && t2.parser !== "typescript" && t2.parser !== "babel-ts") && (t2.parser === "json" || t2.quoteProps === "consistent" && qB.get(o2))) {
            const n3 = LB(JSON.stringify(i2.type === "Identifier" ? i2.name : i2.value.toString()), t2);
            return e2.call((e3) => IB(e3, n3, t2), "key");
          }
          return VB(r2, t2) && (t2.quoteProps === "as-needed" || t2.quoteProps === "consistent" && !qB.get(o2)) ? e2.call((e3) => IB(e3, /^\d/.test(i2.value) ? jB(i2.value) : i2.value, t2), "key") : n2("key");
        }
        var zB = { printProperty: function(e2, t2, n2) {
          return e2.getValue().shorthand ? n2("value") : WB(e2, t2, n2, UB(e2, t2, n2), ":", "value");
        }, printPropertyKey: UB };
        const GB = Ty, { printDanglingComments: HB, printCommentsSeparately: JB } = tD, XB = au, { getNextNonSpaceNonCommentCharacterIndex: YB } = dc, { builders: { line: KB, softline: QB, group: ZB, indent: eN, ifBreak: tN, hardline: nN, join: rN, indentIfBreak: oN }, utils: { removeLines: iN, willBreak: uN } } = Zc, { ArgExpansionBailout: sN } = Cp, { getFunctionParameters: aN, hasLeadingOwnLineComment: cN, isFlowAnnotationComment: lN, isJsxNode: pN, isTemplateOnItsOwnLine: fN, shouldPrintComma: dN, startsWithNoLookaheadToken: hN, isBinaryish: gN, isLineComment: mN, hasComment: yN, getComments: DN, CommentCheckFlags: EN, isCallLikeExpression: CN, isCallExpression: bN, getCallArguments: vN, hasNakedLeftSide: AN, getLeftSide: FN } = CC, { locEnd: xN } = og, { printFunctionParameters: SN, shouldGroupFunctionParameters: wN } = WT, { printPropertyKey: TN } = zB, { printFunctionTypeParameters: BN } = _x;
        function NN(e2, t2, n2) {
          const r2 = e2.getNode(), o2 = SN(e2, n2, t2), i2 = PN(e2, n2, t2), u2 = wN(r2, i2), s2 = [BN(e2, t2, n2), ZB([u2 ? ZB(o2) : o2, i2])];
          return r2.body ? s2.push(" ", n2("body")) : s2.push(t2.semi ? ";" : ""), s2;
        }
        function kN(e2, t2) {
          if (t2.arrowParens === "always")
            return false;
          if (t2.arrowParens === "avoid") {
            return function(e3) {
              const t3 = aN(e3);
              return !(t3.length !== 1 || e3.typeParameters || yN(e3, EN.Dangling) || t3[0].type !== "Identifier" || t3[0].typeAnnotation || yN(t3[0]) || t3[0].optional || e3.predicate || e3.returnType);
            }(e2.getValue());
          }
          return false;
        }
        function PN(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = t2("returnType");
          if (r2.returnType && lN(n2.originalText, r2.returnType))
            return [" /*: ", o2, " */"];
          const i2 = [o2];
          return r2.returnType && r2.returnType.typeAnnotation && i2.unshift(": "), r2.predicate && i2.push(r2.returnType ? " " : ": ", t2("predicate")), i2;
        }
        function ON(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = t2.semi ? ";" : "", i2 = [];
          r2.argument && (!function(e3, t3) {
            if (cN(e3.originalText, t3))
              return true;
            if (AN(t3)) {
              let n3, r3 = t3;
              for (; n3 = FN(r3); )
                if (r3 = n3, cN(e3.originalText, r3))
                  return true;
            }
            return false;
          }(t2, r2.argument) ? gN(r2.argument) || r2.argument.type === "SequenceExpression" ? i2.push(ZB([tN(" (", " "), eN([QB, n2("argument")]), QB, tN(")")])) : i2.push(" ", n2("argument")) : i2.push([" (", eN([nN, n2("argument")]), nN, ")"]));
          const u2 = DN(r2), s2 = XB(u2), a2 = s2 && mN(s2);
          return a2 && i2.push(o2), yN(r2, EN.Dangling) && i2.push(" ", HB(e2, t2, true)), a2 || i2.push(o2), i2;
        }
        var IN = { printFunction: function(e2, t2, n2, r2) {
          const o2 = e2.getValue();
          let i2 = false;
          if ((o2.type === "FunctionDeclaration" || o2.type === "FunctionExpression") && r2 && r2.expandLastArg) {
            const t3 = e2.getParentNode();
            bN(t3) && vN(t3).length > 1 && (i2 = true);
          }
          const u2 = [];
          o2.type === "TSDeclareFunction" && o2.declare && u2.push("declare "), o2.async && u2.push("async "), o2.generator ? u2.push("function* ") : u2.push("function "), o2.id && u2.push(t2("id"));
          const s2 = SN(e2, t2, n2, i2), a2 = PN(e2, t2, n2), c2 = wN(o2, a2);
          return u2.push(BN(e2, n2, t2), ZB([c2 ? ZB(s2) : s2, a2]), o2.body ? " " : "", t2("body")), !n2.semi || !o2.declare && o2.body || u2.push(";"), u2;
        }, printArrowFunction: function(e2, t2, n2, r2) {
          let o2 = e2.getValue();
          const i2 = [], u2 = [];
          let s2 = false;
          if (function a3() {
            const c3 = function(e3, t3, n3, r3) {
              const o3 = [];
              if (e3.getValue().async && o3.push("async "), kN(e3, t3))
                o3.push(n3(["params", 0]));
              else {
                const i4 = r3 && (r3.expandLastArg || r3.expandFirstArg);
                let u3 = PN(e3, n3, t3);
                if (i4) {
                  if (uN(u3))
                    throw new sN();
                  u3 = ZB(iN(u3));
                }
                o3.push(ZB([SN(e3, n3, t3, i4, true), u3]));
              }
              const i3 = HB(e3, t3, true, (e4) => {
                const n4 = YB(t3.originalText, e4, xN);
                return n4 !== false && t3.originalText.slice(n4, n4 + 2) === "=>";
              });
              return i3 && o3.push(" ", i3), o3;
            }(e2, t2, n2, r2);
            if (i2.length === 0)
              i2.push(c3);
            else {
              const { leading: n3, trailing: r3 } = JB(e2, t2);
              i2.push([n3, c3]), u2.unshift(r3);
            }
            s2 = s2 || o2.returnType && aN(o2).length > 0 || o2.typeParameters || aN(o2).some((e3) => e3.type !== "Identifier"), o2.body.type !== "ArrowFunctionExpression" || r2 && r2.expandLastArg ? u2.unshift(n2("body", r2)) : (o2 = o2.body, e2.call(a3, "body"));
          }(), i2.length > 1)
            return function(e3, t3, n3, r3, o3, i3) {
              const u3 = e3.getName(), s3 = e3.getParentNode(), a3 = CN(s3) && u3 === "callee", c3 = Boolean(t3 && t3.assignmentLayout), l4 = i3.body.type !== "BlockStatement" && i3.body.type !== "ObjectExpression" && i3.body.type !== "SequenceExpression", p3 = a3 && l4 || t3 && t3.assignmentLayout === "chain-tail-arrow-chain", f2 = Symbol("arrow-chain");
              return i3.body.type === "SequenceExpression" && (o3 = ZB(["(", eN([QB, o3]), QB, ")"])), ZB([ZB(eN([a3 || c3 ? QB : "", ZB(rN([" =>", KB], n3), { shouldBreak: r3 })]), { id: f2, shouldBreak: p3 }), " =>", oN(l4 ? eN([KB, o3]) : [" ", o3], { groupId: f2 }), a3 ? tN(QB, "", { groupId: f2 }) : ""]);
            }(e2, r2, i2, s2, u2, o2);
          const a2 = i2;
          if (a2.push(" =>"), !cN(t2.originalText, o2.body) && (o2.body.type === "ArrayExpression" || o2.body.type === "ObjectExpression" || o2.body.type === "BlockStatement" || pN(o2.body) || fN(o2.body, t2.originalText) || o2.body.type === "ArrowFunctionExpression" || o2.body.type === "DoExpression"))
            return ZB([...a2, " ", u2]);
          if (o2.body.type === "SequenceExpression")
            return ZB([...a2, ZB([" (", eN([QB, u2]), QB, ")"])]);
          const c2 = (r2 && r2.expandLastArg || e2.getParentNode().type === "JSXExpressionContainer") && !yN(o2), l3 = r2 && r2.expandLastArg && dN(t2, "all"), p2 = o2.body.type === "ConditionalExpression" && !hN(o2.body, false);
          return ZB([...a2, ZB([eN([KB, p2 ? tN("", "(") : "", u2, p2 ? tN("", ")") : ""]), c2 ? [tN(l3 ? "," : ""), QB] : ""])]);
        }, printMethod: function(e2, t2, n2) {
          const r2 = e2.getNode(), { kind: o2 } = r2, i2 = r2.value || r2, u2 = [];
          return o2 && o2 !== "init" && o2 !== "method" && o2 !== "constructor" ? (GB.ok(o2 === "get" || o2 === "set"), u2.push(o2, " ")) : i2.async && u2.push("async "), i2.generator && u2.push("*"), u2.push(TN(e2, t2, n2), r2.optional || r2.key.optional ? "?" : ""), r2 === i2 ? u2.push(NN(e2, t2, n2)) : i2.type === "FunctionExpression" ? u2.push(e2.call((e3) => NN(e3, t2, n2), "value")) : u2.push(n2("value")), u2;
        }, printReturnStatement: function(e2, t2, n2) {
          return ["return", ON(e2, t2, n2)];
        }, printThrowStatement: function(e2, t2, n2) {
          return ["throw", ON(e2, t2, n2)];
        }, printMethodInternal: NN, shouldPrintParamsWithoutParens: kN };
        const { isNonEmptyArray: LN, hasNewline: jN } = dc, { builders: { line: _N, hardline: MN, join: RN, breakParent: VN, group: $N } } = Zc, { locStart: WN, locEnd: qN } = og, { getParentExportDeclaration: UN } = CC;
        function zN(e2, t2) {
          return e2.decorators.some((e3) => jN(t2.originalText, qN(e3)));
        }
        function GN(e2) {
          if (e2.type !== "ExportDefaultDeclaration" && e2.type !== "ExportNamedDeclaration" && e2.type !== "DeclareExportDeclaration")
            return false;
          const t2 = e2.declaration && e2.declaration.decorators;
          return LN(t2) && WN(e2, { ignoreDecorators: true }) > WN(t2[0]);
        }
        var HN = { printDecorators: function(e2, t2, n2) {
          const r2 = e2.getValue(), { decorators: o2 } = r2;
          if (!LN(o2) || GN(e2.getParentNode()))
            return;
          const i2 = r2.type === "ClassExpression" || r2.type === "ClassDeclaration" || zN(r2, t2);
          return [UN(e2) ? MN : i2 ? VN : "", RN(_N, e2.map(n2, "decorators")), _N];
        }, printClassMemberDecorators: function(e2, t2, n2) {
          const r2 = e2.getValue();
          return $N([RN(_N, e2.map(n2, "decorators")), zN(r2, t2) ? MN : _N]);
        }, printDecoratorsBeforeExport: function(e2, t2, n2) {
          return [RN(MN, e2.map(n2, "declaration", "decorators")), MN];
        }, hasDecoratorsBeforeExport: GN };
        const { isNonEmptyArray: JN, createGroupIdMapper: XN } = dc, { printComments: YN, printDanglingComments: KN } = tD, { builders: { join: QN, line: ZN, hardline: ek, softline: tk, group: nk, indent: rk, ifBreak: ok } } = Zc, { hasComment: ik, CommentCheckFlags: uk } = CC, { getTypeParametersGroupId: sk } = OB, { printMethod: ak } = IN, { printOptionalToken: ck, printTypeAnnotation: lk } = _x, { printPropertyKey: pk } = zB, { printAssignment: fk } = mT, { printClassMemberDecorators: dk } = HN;
        const hk = XN("heritageGroup");
        function gk(e2) {
          return e2.typeParameters && !ik(e2.typeParameters, uk.Trailing | uk.Line) && !function(e3) {
            return ["superClass", "extends", "mixins", "implements"].filter((t2) => Boolean(e3[t2])).length > 1;
          }(e2);
        }
        function mk(e2, t2, n2, r2) {
          const o2 = e2.getValue();
          if (!JN(o2[r2]))
            return "";
          const i2 = KN(e2, t2, true, (e3) => {
            let { marker: t3 } = e3;
            return t3 === r2;
          });
          return [gk(o2) ? ok(" ", ZN, { groupId: sk(o2.typeParameters) }) : ZN, i2, i2 && ek, r2, nk(rk([ZN, QN([",", ZN], e2.map(n2, r2))]))];
        }
        function yk(e2, t2, n2) {
          const r2 = n2("superClass");
          return e2.getParentNode().type === "AssignmentExpression" ? nk(ok(["(", rk([tk, r2]), tk, ")"], r2)) : r2;
        }
        var Dk = { printClass: function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = [];
          r2.declare && o2.push("declare "), r2.abstract && o2.push("abstract "), o2.push("class");
          const i2 = r2.id && ik(r2.id, uk.Trailing) || r2.superClass && ik(r2.superClass) || JN(r2.extends) || JN(r2.mixins) || JN(r2.implements), u2 = [], s2 = [];
          if (r2.id && u2.push(" ", n2("id")), u2.push(n2("typeParameters")), r2.superClass) {
            const r3 = ["extends ", yk(e2, t2, n2), n2("superTypeParameters")], o3 = e2.call((e3) => YN(e3, r3, t2), "superClass");
            i2 ? s2.push(ZN, nk(o3)) : s2.push(" ", o3);
          } else
            s2.push(mk(e2, t2, n2, "extends"));
          if (s2.push(mk(e2, t2, n2, "mixins"), mk(e2, t2, n2, "implements")), i2) {
            let e3;
            e3 = gk(r2) ? [...u2, rk(s2)] : rk([...u2, s2]), o2.push(nk(e3, { id: hk(r2) }));
          } else
            o2.push(...u2, ...s2);
          return o2.push(" ", n2("body")), o2;
        }, printClassMethod: function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = [];
          return JN(r2.decorators) && o2.push(dk(e2, t2, n2)), r2.accessibility && o2.push(r2.accessibility + " "), r2.readonly && o2.push("readonly "), r2.declare && o2.push("declare "), r2.static && o2.push("static "), (r2.type === "TSAbstractMethodDefinition" || r2.abstract) && o2.push("abstract "), r2.override && o2.push("override "), o2.push(ak(e2, t2, n2)), o2;
        }, printClassProperty: function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = [], i2 = t2.semi ? ";" : "";
          return JN(r2.decorators) && o2.push(dk(e2, t2, n2)), r2.accessibility && o2.push(r2.accessibility + " "), r2.declare && o2.push("declare "), r2.static && o2.push("static "), (r2.type === "TSAbstractPropertyDefinition" || r2.abstract) && o2.push("abstract "), r2.override && o2.push("override "), r2.readonly && o2.push("readonly "), r2.variance && o2.push(n2("variance")), o2.push(pk(e2, t2, n2), ck(e2), lk(e2, t2, n2)), [fk(e2, t2, n2, o2, " =", "value"), i2];
        }, printHardlineAfterHeritage: function(e2) {
          return ok(ek, "", { groupId: hk(e2) });
        } };
        const { isNonEmptyArray: Ek } = dc, { builders: { join: Ck, line: bk, group: vk, indent: Ak, ifBreak: Fk } } = Zc, { hasComment: xk, identity: Sk, CommentCheckFlags: wk } = CC, { getTypeParametersGroupId: Tk } = OB, { printTypeScriptModifiers: Bk } = _x;
        var Nk = { printInterface: function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = [];
          r2.declare && o2.push("declare "), r2.type === "TSInterfaceDeclaration" && o2.push(r2.abstract ? "abstract " : "", Bk(e2, t2, n2)), o2.push("interface");
          const i2 = [], u2 = [];
          r2.type !== "InterfaceTypeAnnotation" && i2.push(" ", n2("id"), n2("typeParameters"));
          const s2 = r2.typeParameters && !xk(r2.typeParameters, wk.Trailing | wk.Line);
          return Ek(r2.extends) && u2.push(s2 ? Fk(" ", bk, { groupId: Tk(r2.typeParameters) }) : bk, "extends ", (r2.extends.length === 1 ? Sk : Ak)(Ck([",", bk], e2.map(n2, "extends")))), r2.id && xk(r2.id, wk.Trailing) || Ek(r2.extends) ? s2 ? o2.push(vk([...i2, Ak(u2)])) : o2.push(vk(Ak([...i2, ...u2]))) : o2.push(...i2, ...u2), o2.push(" ", n2("body")), vk(o2);
        } };
        const { isNonEmptyArray: kk } = dc, { builders: { softline: Pk, group: Ok, indent: Ik, join: Lk, line: jk, ifBreak: _k, hardline: Mk } } = Zc, { printDanglingComments: Rk } = tD, { hasComment: Vk, CommentCheckFlags: $k, shouldPrintComma: Wk, needsHardlineAfterDanglingComment: qk } = CC, { locStart: Uk, hasSameLoc: zk } = og, { hasDecoratorsBeforeExport: Gk, printDecoratorsBeforeExport: Hk } = HN;
        function Jk(e2, t2, n2) {
          const r2 = e2.getValue();
          if (!r2.source)
            return "";
          const o2 = [];
          return Yk(r2, t2) || o2.push(" from"), o2.push(" ", n2("source")), o2;
        }
        function Xk(e2, t2, n2) {
          const r2 = e2.getValue();
          if (Yk(r2, t2))
            return "";
          const o2 = [" "];
          if (kk(r2.specifiers)) {
            const i2 = [], u2 = [];
            if (e2.each(() => {
              const t3 = e2.getValue().type;
              if (t3 === "ExportNamespaceSpecifier" || t3 === "ExportDefaultSpecifier" || t3 === "ImportNamespaceSpecifier" || t3 === "ImportDefaultSpecifier")
                i2.push(n2());
              else {
                if (t3 !== "ExportSpecifier" && t3 !== "ImportSpecifier")
                  throw new Error("Unknown specifier type ".concat(JSON.stringify(t3)));
                u2.push(n2());
              }
            }, "specifiers"), o2.push(Lk(", ", i2)), u2.length > 0) {
              i2.length > 0 && o2.push(", ");
              u2.length > 1 || i2.length > 0 || r2.specifiers.some((e3) => Vk(e3)) ? o2.push(Ok(["{", Ik([t2.bracketSpacing ? jk : Pk, Lk([",", jk], u2)]), _k(Wk(t2) ? "," : ""), t2.bracketSpacing ? jk : Pk, "}"])) : o2.push(["{", t2.bracketSpacing ? " " : "", ...u2, t2.bracketSpacing ? " " : "", "}"]);
            }
          } else
            o2.push("{}");
          return o2;
        }
        function Yk(e2, t2) {
          const { type: n2, importKind: r2, source: o2, specifiers: i2 } = e2;
          return n2 === "ImportDeclaration" && !kk(i2) && r2 !== "type" && !/{\s*}/.test(t2.originalText.slice(Uk(e2), Uk(o2)));
        }
        function Kk(e2, t2, n2) {
          const r2 = e2.getNode();
          return kk(r2.assertions) ? [" assert {", t2.bracketSpacing ? " " : "", Lk(", ", e2.map(n2, "assertions")), t2.bracketSpacing ? " " : "", "}"] : "";
        }
        var Qk = { printImportDeclaration: function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = t2.semi ? ";" : "", i2 = [], { importKind: u2 } = r2;
          return i2.push("import"), u2 && u2 !== "value" && i2.push(" ", u2), i2.push(Xk(e2, t2, n2), Jk(e2, t2, n2), Kk(e2, t2, n2), o2), i2;
        }, printExportDeclaration: function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = [];
          Gk(r2) && o2.push(Hk(e2, t2, n2));
          const { type: i2, exportKind: u2, declaration: s2 } = r2;
          return o2.push("export"), (r2.default || i2 === "ExportDefaultDeclaration") && o2.push(" default"), Vk(r2, $k.Dangling) && (o2.push(" ", Rk(e2, t2, true)), qk(r2) && o2.push(Mk)), s2 ? o2.push(" ", n2("declaration")) : o2.push(u2 === "type" ? " type" : "", Xk(e2, t2, n2), Jk(e2, t2, n2), Kk(e2, t2, n2)), function(e3, t3) {
            if (!t3.semi)
              return false;
            const { type: n3, declaration: r3 } = e3, o3 = e3.default || n3 === "ExportDefaultDeclaration";
            if (!r3)
              return true;
            const { type: i3 } = r3;
            if (o3 && i3 !== "ClassDeclaration" && i3 !== "FunctionDeclaration" && i3 !== "TSInterfaceDeclaration" && i3 !== "DeclareClass" && i3 !== "DeclareFunction" && i3 !== "TSDeclareFunction" && i3 !== "EnumDeclaration")
              return true;
            return false;
          }(r2, t2) && o2.push(";"), o2;
        }, printExportAllDeclaration: function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = t2.semi ? ";" : "", i2 = [], { exportKind: u2, exported: s2 } = r2;
          return i2.push("export"), u2 === "type" && i2.push(" type"), i2.push(" *"), s2 && i2.push(" as ", n2("exported")), i2.push(Jk(e2, t2, n2), Kk(e2, t2, n2), o2), i2;
        }, printModuleSpecifier: function(e2, t2, n2) {
          const r2 = e2.getNode(), { type: o2 } = r2, i2 = [], u2 = o2 === "ImportSpecifier" ? r2.importKind : r2.exportKind;
          u2 && u2 !== "value" && i2.push(u2, " ");
          const s2 = o2.startsWith("Import"), a2 = s2 ? "imported" : "local", c2 = s2 ? "local" : "exported";
          let l3 = "", p2 = "";
          return o2 === "ExportNamespaceSpecifier" || o2 === "ImportNamespaceSpecifier" ? l3 = "*" : r2[a2] && (l3 = n2(a2)), !r2[c2] || r2[a2] && zk(r2[a2], r2[c2]) || (p2 = n2(c2)), i2.push(l3, l3 && p2 ? " as " : "", p2), i2;
        } };
        const { printDanglingComments: Zk } = tD, { builders: { line: eP, softline: tP, group: nP, indent: rP, ifBreak: oP, hardline: iP } } = Zc, { getLast: uP, hasNewlineInRange: sP, hasNewline: aP, isNonEmptyArray: cP } = dc, { shouldPrintComma: lP, hasComment: pP, getComments: fP, CommentCheckFlags: dP, isNextLineEmpty: hP } = CC, { locStart: gP, locEnd: mP } = og, { printOptionalToken: yP, printTypeAnnotation: DP } = _x, { shouldHugFunctionParameters: EP } = WT, { shouldHugType: CP } = fB, { printHardlineAfterHeritage: bP } = Dk;
        var vP = { printObject: function(e2, t2, n2) {
          const r2 = t2.semi ? ";" : "", o2 = e2.getValue();
          let i2;
          i2 = o2.type === "TSTypeLiteral" ? "members" : o2.type === "TSInterfaceBody" ? "body" : "properties";
          const u2 = o2.type === "ObjectTypeAnnotation", s2 = [i2];
          u2 && s2.push("indexers", "callProperties", "internalSlots");
          const a2 = s2.map((e3) => o2[e3][0]).sort((e3, t3) => gP(e3) - gP(t3))[0], c2 = e2.getParentNode(0), l3 = u2 && c2 && (c2.type === "InterfaceDeclaration" || c2.type === "DeclareInterface" || c2.type === "DeclareClass") && e2.getName() === "body", p2 = o2.type === "TSInterfaceBody" || l3 || o2.type === "ObjectPattern" && c2.type !== "FunctionDeclaration" && c2.type !== "FunctionExpression" && c2.type !== "ArrowFunctionExpression" && c2.type !== "ObjectMethod" && c2.type !== "ClassMethod" && c2.type !== "ClassPrivateMethod" && c2.type !== "AssignmentPattern" && c2.type !== "CatchClause" && o2.properties.some((e3) => e3.value && (e3.value.type === "ObjectPattern" || e3.value.type === "ArrayPattern")) || o2.type !== "ObjectPattern" && a2 && sP(t2.originalText, gP(o2), gP(a2)), f2 = l3 ? ";" : o2.type === "TSInterfaceBody" || o2.type === "TSTypeLiteral" ? oP(r2, ";") : ",", d2 = o2.type === "RecordExpression" ? "#{" : o2.exact ? "{|" : "{", h2 = o2.exact ? "|}" : "}", g2 = [];
          for (const t3 of s2)
            e2.each((e3) => {
              const t4 = e3.getValue();
              g2.push({ node: t4, printed: n2(), loc: gP(t4) });
            }, t3);
          s2.length > 1 && g2.sort((e3, t3) => e3.loc - t3.loc);
          let m2 = [];
          const y2 = g2.map((e3) => {
            const n3 = [...m2, nP(e3.printed)];
            return m2 = [f2, eP], e3.node.type !== "TSPropertySignature" && e3.node.type !== "TSMethodSignature" && e3.node.type !== "TSConstructSignatureDeclaration" || !pP(e3.node, dP.PrettierIgnore) || m2.shift(), hP(e3.node, t2) && m2.push(iP), n3;
          });
          if (o2.inexact) {
            let n3;
            if (pP(o2, dP.Dangling)) {
              const r3 = pP(o2, dP.Line);
              n3 = [Zk(e2, t2, true), r3 || aP(t2.originalText, mP(uP(fP(o2)))) ? iP : eP, "..."];
            } else
              n3 = ["..."];
            y2.push([...m2, ...n3]);
          }
          const D2 = uP(o2[i2]), E2 = !(o2.inexact || D2 && D2.type === "RestElement" || D2 && (D2.type === "TSPropertySignature" || D2.type === "TSCallSignatureDeclaration" || D2.type === "TSMethodSignature" || D2.type === "TSConstructSignatureDeclaration") && pP(D2, dP.PrettierIgnore));
          let C2;
          if (y2.length === 0) {
            if (!pP(o2, dP.Dangling))
              return [d2, h2, DP(e2, t2, n2)];
            C2 = nP([d2, Zk(e2, t2), tP, h2, yP(e2), DP(e2, t2, n2)]);
          } else
            C2 = [l3 && cP(o2.properties) ? bP(c2) : "", d2, rP([t2.bracketSpacing ? eP : tP, ...y2]), oP(E2 && (f2 !== "," || lP(t2)) ? f2 : ""), t2.bracketSpacing ? eP : tP, h2, yP(e2), DP(e2, t2, n2)];
          return e2.match((e3) => e3.type === "ObjectPattern" && !e3.decorators, (e3, t3, n3) => EP(e3) && (t3 === "params" || t3 === "parameters" || t3 === "this" || t3 === "rest") && n3 === 0) || e2.match(CP, (e3, t3) => t3 === "typeAnnotation", (e3, t3) => t3 === "typeAnnotation", (e3, t3, n3) => EP(e3) && (t3 === "params" || t3 === "parameters" || t3 === "this" || t3 === "rest") && n3 === 0) || !p2 && e2.match((e3) => e3.type === "ObjectPattern", (e3) => e3.type === "AssignmentExpression" || e3.type === "VariableDeclarator") ? C2 : nP(C2, { shouldBreak: p2 });
        } };
        const AP = Ty, { printDanglingComments: FP } = tD, { printString: xP, printNumber: SP } = dc, { builders: { hardline: wP, softline: TP, group: BP, indent: NP } } = Zc, { getParentExportDeclaration: kP, isFunctionNotation: PP, isGetterOrSetter: OP, rawText: IP, shouldPrintComma: LP } = CC, { locStart: jP, locEnd: _P } = og, { printClass: MP } = Dk, { printOpaqueType: RP, printTypeAlias: VP, printIntersectionType: $P, printUnionType: WP, printFunctionType: qP, printTupleType: UP, printIndexedAccessType: zP } = fB, { printInterface: GP } = Nk, { printTypeParameter: HP, printTypeParameters: JP } = OB, { printExportDeclaration: XP, printExportAllDeclaration: YP } = Qk, { printArrayItems: KP } = uS, { printObject: QP } = vP, { printPropertyKey: ZP } = zB, { printOptionalToken: eO, printTypeAnnotation: tO, printRestSpread: nO } = _x;
        function rO(e2, t2) {
          const n2 = kP(e2);
          return n2 ? (AP.strictEqual(n2.type, "DeclareExportDeclaration"), t2) : ["declare ", t2];
        }
        var oO = { printFlow: function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = t2.semi ? ";" : "", i2 = [];
          switch (r2.type) {
            case "DeclareClass":
              return rO(e2, MP(e2, t2, n2));
            case "DeclareFunction":
              return rO(e2, ["function ", n2("id"), r2.predicate ? " " : "", n2("predicate"), o2]);
            case "DeclareModule":
              return rO(e2, ["module ", n2("id"), " ", n2("body")]);
            case "DeclareModuleExports":
              return rO(e2, ["module.exports", ": ", n2("typeAnnotation"), o2]);
            case "DeclareVariable":
              return rO(e2, ["var ", n2("id"), o2]);
            case "DeclareOpaqueType":
              return rO(e2, RP(e2, t2, n2));
            case "DeclareInterface":
              return rO(e2, GP(e2, t2, n2));
            case "DeclareTypeAlias":
              return rO(e2, VP(e2, t2, n2));
            case "DeclareExportDeclaration":
              return rO(e2, XP(e2, t2, n2));
            case "DeclareExportAllDeclaration":
              return rO(e2, YP(e2, t2, n2));
            case "OpaqueType":
              return RP(e2, t2, n2);
            case "TypeAlias":
              return VP(e2, t2, n2);
            case "IntersectionTypeAnnotation":
              return $P(e2, t2, n2);
            case "UnionTypeAnnotation":
              return WP(e2, t2, n2);
            case "FunctionTypeAnnotation":
              return qP(e2, t2, n2);
            case "TupleTypeAnnotation":
              return UP(e2, t2, n2);
            case "GenericTypeAnnotation":
              return [n2("id"), JP(e2, t2, n2, "typeParameters")];
            case "IndexedAccessType":
            case "OptionalIndexedAccessType":
              return zP(e2, t2, n2);
            case "TypeAnnotation":
              return n2("typeAnnotation");
            case "TypeParameter":
              return HP(e2, t2, n2);
            case "TypeofTypeAnnotation":
              return ["typeof ", n2("argument")];
            case "ExistsTypeAnnotation":
              return "*";
            case "EmptyTypeAnnotation":
              return "empty";
            case "MixedTypeAnnotation":
              return "mixed";
            case "ArrayTypeAnnotation":
              return [n2("elementType"), "[]"];
            case "BooleanLiteralTypeAnnotation":
              return String(r2.value);
            case "EnumDeclaration":
              return ["enum ", n2("id"), " ", n2("body")];
            case "EnumBooleanBody":
            case "EnumNumberBody":
            case "EnumStringBody":
            case "EnumSymbolBody":
              if (r2.type === "EnumSymbolBody" || r2.explicitType) {
                let e3 = null;
                switch (r2.type) {
                  case "EnumBooleanBody":
                    e3 = "boolean";
                    break;
                  case "EnumNumberBody":
                    e3 = "number";
                    break;
                  case "EnumStringBody":
                    e3 = "string";
                    break;
                  case "EnumSymbolBody":
                    e3 = "symbol";
                }
                i2.push("of ", e3, " ");
              }
              if (r2.members.length !== 0 || r2.hasUnknownMembers) {
                const o3 = r2.members.length > 0 ? [wP, KP(e2, t2, "members", n2), r2.hasUnknownMembers || LP(t2) ? "," : ""] : [];
                i2.push(BP(["{", NP([...o3, ...r2.hasUnknownMembers ? [wP, "..."] : []]), FP(e2, t2, true), wP, "}"]));
              } else
                i2.push(BP(["{", FP(e2, t2), TP, "}"]));
              return i2;
            case "EnumBooleanMember":
            case "EnumNumberMember":
            case "EnumStringMember":
              return [n2("id"), " = ", typeof r2.init == "object" ? n2("init") : String(r2.init)];
            case "EnumDefaultedMember":
              return n2("id");
            case "FunctionTypeParam": {
              const t3 = r2.name ? n2("name") : e2.getParentNode().this === r2 ? "this" : "";
              return [t3, eO(e2), t3 ? ": " : "", n2("typeAnnotation")];
            }
            case "InterfaceDeclaration":
            case "InterfaceTypeAnnotation":
              return GP(e2, t2, n2);
            case "ClassImplements":
            case "InterfaceExtends":
              return [n2("id"), n2("typeParameters")];
            case "NullableTypeAnnotation":
              return ["?", n2("typeAnnotation")];
            case "Variance": {
              const { kind: e3 } = r2;
              return AP.ok(e3 === "plus" || e3 === "minus"), e3 === "plus" ? "+" : "-";
            }
            case "ObjectTypeCallProperty":
              return r2.static && i2.push("static "), i2.push(n2("value")), i2;
            case "ObjectTypeIndexer":
              return [r2.variance ? n2("variance") : "", "[", n2("id"), r2.id ? ": " : "", n2("key"), "]: ", n2("value")];
            case "ObjectTypeProperty": {
              let o3 = "";
              return r2.proto ? o3 = "proto " : r2.static && (o3 = "static "), [o3, OP(r2) ? r2.kind + " " : "", r2.variance ? n2("variance") : "", ZP(e2, t2, n2), eO(e2), PP(r2) ? "" : ": ", n2("value")];
            }
            case "ObjectTypeAnnotation":
              return QP(e2, t2, n2);
            case "ObjectTypeInternalSlot":
              return [r2.static ? "static " : "", "[[", n2("id"), "]]", eO(e2), r2.method ? "" : ": ", n2("value")];
            case "ObjectTypeSpreadProperty":
              return nO(e2, t2, n2);
            case "QualifiedTypeIdentifier":
              return [n2("qualification"), ".", n2("id")];
            case "StringLiteralTypeAnnotation":
              return xP(IP(r2), t2);
            case "NumberLiteralTypeAnnotation":
              AP.strictEqual(typeof r2.value, "number");
            case "BigIntLiteralTypeAnnotation":
              return r2.extra ? SP(r2.extra.raw) : SP(r2.raw);
            case "TypeCastExpression":
              return ["(", n2("expression"), tO(e2, t2, n2), ")"];
            case "TypeParameterDeclaration":
            case "TypeParameterInstantiation": {
              const o3 = JP(e2, t2, n2, "params");
              if (t2.parser === "flow") {
                const e3 = jP(r2), n3 = _P(r2), i3 = t2.originalText.lastIndexOf("/*", e3), u2 = t2.originalText.indexOf("*/", n3);
                if (i3 !== -1 && u2 !== -1) {
                  const e4 = t2.originalText.slice(i3 + 2, u2).trim();
                  if (e4.startsWith("::") && !e4.includes("/*") && !e4.includes("*/"))
                    return ["/*:: ", o3, " */"];
                }
              }
              return o3;
            }
            case "InferredPredicate":
              return "%checks";
            case "DeclaredPredicate":
              return ["%checks(", n2("value"), ")"];
            case "AnyTypeAnnotation":
              return "any";
            case "BooleanTypeAnnotation":
              return "boolean";
            case "BigIntTypeAnnotation":
              return "bigint";
            case "NullLiteralTypeAnnotation":
              return "null";
            case "NumberTypeAnnotation":
              return "number";
            case "SymbolTypeAnnotation":
              return "symbol";
            case "StringTypeAnnotation":
              return "string";
            case "VoidTypeAnnotation":
              return "void";
            case "ThisTypeAnnotation":
              return "this";
            case "Node":
            case "Printable":
            case "SourceLocation":
            case "Position":
            case "Statement":
            case "Function":
            case "Pattern":
            case "Expression":
            case "Declaration":
            case "Specifier":
            case "NamedSpecifier":
            case "Comment":
            case "MemberTypeAnnotation":
            case "Type":
              throw new Error("unprintable type: " + JSON.stringify(r2.type));
          }
        } };
        const { hasNewlineInRange: iO } = dc, { isJsxNode: uO, isBlockComment: sO, getComments: aO, isCallExpression: cO, isMemberExpression: lO } = CC, { locStart: pO, locEnd: fO } = og, { builders: { line: dO, softline: hO, group: gO, indent: mO, align: yO, ifBreak: DO, dedent: EO, breakParent: CO } } = Zc;
        function bO(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = r2.type === "ConditionalExpression", i2 = o2 ? "alternate" : "falseType", u2 = e2.getParentNode(), s2 = o2 ? n2("test") : [n2("checkType"), " ", "extends", " ", n2("extendsType")];
          return u2.type === r2.type && u2[i2] === r2 ? yO(2, s2) : s2;
        }
        const vO = /* @__PURE__ */ new Map([["AssignmentExpression", "right"], ["VariableDeclarator", "init"], ["ReturnStatement", "argument"], ["ThrowStatement", "argument"], ["UnaryExpression", "argument"], ["YieldExpression", "argument"]]);
        var AO = { printTernary: function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = r2.type === "ConditionalExpression", i2 = o2 ? "consequent" : "trueType", u2 = o2 ? "alternate" : "falseType", s2 = o2 ? ["test"] : ["checkType", "extendsType"], a2 = r2[i2], c2 = r2[u2], l3 = [];
          let p2 = false;
          const f2 = e2.getParentNode(), d2 = f2.type === r2.type && s2.some((e3) => f2[e3] === r2);
          let h2, g2, m2 = f2.type === r2.type && !d2, y2 = 0;
          do {
            g2 = h2 || r2, h2 = e2.getParentNode(y2), y2++;
          } while (h2 && h2.type === r2.type && s2.every((e3) => h2[e3] !== g2));
          const D2 = h2 || f2, E2 = g2;
          if (o2 && (uO(r2[s2[0]]) || uO(a2) || uO(c2) || function(e3) {
            const t3 = [e3];
            for (let e4 = 0; e4 < t3.length; e4++) {
              const n3 = t3[e4];
              for (const e5 of ["test", "consequent", "alternate"]) {
                const r3 = n3[e5];
                if (uO(r3))
                  return true;
                r3.type === "ConditionalExpression" && t3.push(r3);
              }
            }
            return false;
          }(E2))) {
            p2 = true, m2 = true;
            const e3 = (e4) => [DO("("), mO([hO, e4]), hO, DO(")")], t3 = (e4) => e4.type === "NullLiteral" || e4.type === "Literal" && e4.value === null || e4.type === "Identifier" && e4.name === "undefined";
            l3.push(" ? ", t3(a2) ? n2(i2) : e3(n2(i2)), " : ", c2.type === r2.type || t3(c2) ? n2(u2) : e3(n2(u2)));
          } else {
            const e3 = [dO, "? ", a2.type === r2.type ? DO("", "(") : "", yO(2, n2(i2)), a2.type === r2.type ? DO("", ")") : "", dO, ": ", c2.type === r2.type ? n2(u2) : yO(2, n2(u2))];
            l3.push(f2.type !== r2.type || f2[u2] === r2 || d2 ? e3 : t2.useTabs ? EO(mO(e3)) : yO(Math.max(0, t2.tabWidth - 2), e3));
          }
          const C2 = [...s2.map((e3) => aO(r2[e3])), aO(a2), aO(c2)].flat().some((e3) => sO(e3) && iO(t2.originalText, pO(e3), fO(e3))), b2 = !p2 && (lO(f2) || f2.type === "NGPipeExpression" && f2.left === r2) && !f2.computed, v2 = function(e3) {
            const t3 = e3.getValue();
            if (t3.type !== "ConditionalExpression")
              return false;
            let n3, r3 = t3;
            for (let t4 = 0; !n3; t4++) {
              const o3 = e3.getParentNode(t4);
              cO(o3) && o3.callee === r3 || lO(o3) && o3.object === r3 || o3.type === "TSNonNullExpression" && o3.expression === r3 ? r3 = o3 : o3.type === "NewExpression" && o3.callee === r3 || o3.type === "TSAsExpression" && o3.expression === r3 ? (n3 = e3.getParentNode(t4 + 1), r3 = o3) : n3 = o3;
            }
            return r3 !== t3 && n3[vO.get(n3.type)] === r3;
          }(e2), A2 = ((e3) => f2 === D2 ? gO(e3, { shouldBreak: C2 }) : C2 ? [e3, CO] : e3)([bO(e2, 0, n2), m2 ? l3 : mO(l3), o2 && b2 && !v2 ? hO : ""]);
          return d2 || v2 ? gO([mO([hO, A2]), hO]) : A2;
        } };
        const { builders: { hardline: FO } } = Zc, xO = wA, { getLeftSidePathName: SO, hasNakedLeftSide: wO, isJsxNode: TO, isTheOnlyJsxElementInMarkdown: BO, hasComment: NO, CommentCheckFlags: kO, isNextLineEmpty: PO } = CC, { shouldPrintParamsWithoutParens: OO } = IN;
        function IO(e2, t2, n2, r2) {
          const o2 = e2.getValue(), i2 = [], u2 = o2.type === "ClassBody", s2 = function(e3) {
            for (let t3 = e3.length - 1; t3 >= 0; t3--) {
              const n3 = e3[t3];
              if (n3.type !== "EmptyStatement")
                return n3;
            }
          }(o2[r2]);
          return e2.each((e3, r3, o3) => {
            const a2 = e3.getValue();
            if (a2.type === "EmptyStatement")
              return;
            const c2 = n2();
            t2.semi || u2 || BO(t2, e3) || !function(e4, t3) {
              if (e4.getNode().type !== "ExpressionStatement")
                return false;
              return e4.call((e5) => LO(e5, t3), "expression");
            }(e3, t2) ? i2.push(c2) : NO(a2, kO.Leading) ? i2.push(n2([], { needsSemi: true })) : i2.push(";", c2), !t2.semi && u2 && jO(a2) && function(e4, t3) {
              const n3 = e4.key && e4.key.name;
              if (!(n3 !== "static" && n3 !== "get" && n3 !== "set" || e4.value || e4.typeAnnotation))
                return true;
              if (!t3)
                return false;
              if (t3.static || t3.accessibility)
                return false;
              if (!t3.computed) {
                const e5 = t3.key && t3.key.name;
                if (e5 === "in" || e5 === "instanceof")
                  return true;
              }
              if (jO(t3) && t3.variance && !t3.static && !t3.declare)
                return true;
              switch (t3.type) {
                case "ClassProperty":
                case "PropertyDefinition":
                case "TSAbstractPropertyDefinition":
                  return t3.computed;
                case "MethodDefinition":
                case "TSAbstractMethodDefinition":
                case "ClassMethod":
                case "ClassPrivateMethod": {
                  if ((t3.value ? t3.value.async : t3.async) || t3.kind === "get" || t3.kind === "set")
                    return false;
                  const e5 = t3.value ? t3.value.generator : t3.generator;
                  return !(!t3.computed && !e5);
                }
                case "TSIndexSignature":
                  return true;
              }
              return false;
            }(a2, o3[r3 + 1]) && i2.push(";"), a2 !== s2 && (i2.push(FO), PO(a2, t2) && i2.push(FO));
          }, r2), i2;
        }
        function LO(e2, t2) {
          const n2 = e2.getValue();
          switch (n2.type) {
            case "ParenthesizedExpression":
            case "TypeCastExpression":
            case "ArrayExpression":
            case "ArrayPattern":
            case "TemplateLiteral":
            case "TemplateElement":
            case "RegExpLiteral":
              return true;
            case "ArrowFunctionExpression":
              if (!OO(e2, t2))
                return true;
              break;
            case "UnaryExpression": {
              const { prefix: e3, operator: t3 } = n2;
              if (e3 && (t3 === "+" || t3 === "-"))
                return true;
              break;
            }
            case "BindExpression":
              if (!n2.object)
                return true;
              break;
            case "Literal":
              if (n2.regex)
                return true;
              break;
            default:
              if (TO(n2))
                return true;
          }
          return !!xO(e2, t2) || !!wO(n2) && e2.call((e3) => LO(e3, t2), ...SO(e2, n2));
        }
        const jO = (e2) => {
          let { type: t2 } = e2;
          return t2 === "ClassProperty" || t2 === "PropertyDefinition" || t2 === "ClassPrivateProperty";
        };
        var _O = { printBody: function(e2, t2, n2) {
          return IO(e2, t2, n2, "body");
        }, printSwitchCaseConsequent: function(e2, t2, n2) {
          return IO(e2, t2, n2, "consequent");
        } };
        const { printDanglingComments: MO } = tD, { isNonEmptyArray: RO } = dc, { builders: { hardline: VO, indent: $O } } = Zc, { hasComment: WO, CommentCheckFlags: qO, isNextLineEmpty: UO } = CC, { printHardlineAfterHeritage: zO } = Dk, { printBody: GO } = _O;
        function HO(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = RO(r2.directives), i2 = r2.body.some((e3) => e3.type !== "EmptyStatement"), u2 = WO(r2, qO.Dangling);
          if (!o2 && !i2 && !u2)
            return "";
          const s2 = [];
          if (o2 && e2.each((e3, r3, o3) => {
            s2.push(n2()), (r3 < o3.length - 1 || i2 || u2) && (s2.push(VO), UO(e3.getValue(), t2) && s2.push(VO));
          }, "directives"), i2 && s2.push(GO(e2, t2, n2)), u2 && s2.push(MO(e2, t2, true)), r2.type === "Program") {
            const t3 = e2.getParentNode();
            t3 && t3.type === "ModuleExpression" || s2.push(VO);
          }
          return s2;
        }
        var JO = { printBlock: function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = [];
          if (r2.type === "StaticBlock" && o2.push("static "), r2.type === "ClassBody" && RO(r2.body)) {
            const t3 = e2.getParentNode();
            o2.push(zO(t3));
          }
          o2.push("{");
          const i2 = HO(e2, t2, n2);
          if (i2)
            o2.push($O([VO, i2]), VO);
          else {
            const t3 = e2.getParentNode(), n3 = e2.getParentNode(1);
            t3.type === "ArrowFunctionExpression" || t3.type === "FunctionExpression" || t3.type === "FunctionDeclaration" || t3.type === "ObjectMethod" || t3.type === "ClassMethod" || t3.type === "ClassPrivateMethod" || t3.type === "ForStatement" || t3.type === "WhileStatement" || t3.type === "DoWhileStatement" || t3.type === "DoExpression" || t3.type === "CatchClause" && !n3.finalizer || t3.type === "TSModuleDeclaration" || t3.type === "TSDeclareFunction" || r2.type === "StaticBlock" || r2.type === "ClassBody" || o2.push(VO);
          }
          return o2.push("}"), o2;
        }, printBlockBody: HO };
        const { printDanglingComments: XO } = tD, { hasNewlineInRange: YO } = dc, { builders: { join: KO, line: QO, hardline: ZO, softline: eI, group: tI, indent: nI, conditionalGroup: rI, ifBreak: oI } } = Zc, { isLiteral: iI, getTypeScriptMappedTypeModifier: uI, shouldPrintComma: sI, isCallExpression: aI, isMemberExpression: cI } = CC, { locStart: lI, locEnd: pI } = og, { printOptionalToken: fI, printTypeScriptModifiers: dI } = _x, { printTernary: hI } = AO, { printFunctionParameters: gI, shouldGroupFunctionParameters: mI } = WT, { printTemplateLiteral: yI } = VC, { printArrayItems: DI } = uS, { printObject: EI } = vP, { printClassProperty: CI, printClassMethod: bI } = Dk, { printTypeParameter: vI, printTypeParameters: AI } = OB, { printPropertyKey: FI } = zB, { printFunction: xI, printMethodInternal: SI } = IN, { printInterface: wI } = Nk, { printBlock: TI } = JO, { printTypeAlias: BI, printIntersectionType: NI, printUnionType: kI, printFunctionType: PI, printTupleType: OI, printIndexedAccessType: II } = fB;
        var LI = { printTypescript: function(e2, t2, n2) {
          const r2 = e2.getValue();
          if (!r2.type.startsWith("TS"))
            return;
          if (r2.type.endsWith("Keyword"))
            return r2.type.slice(2, -7).toLowerCase();
          const o2 = t2.semi ? ";" : "", i2 = [];
          switch (r2.type) {
            case "TSThisType":
              return "this";
            case "TSTypeAssertion": {
              const e3 = !(r2.expression.type === "ArrayExpression" || r2.expression.type === "ObjectExpression"), t3 = tI(["<", nI([eI, n2("typeAnnotation")]), eI, ">"]), o3 = [oI("("), nI([eI, n2("expression")]), eI, oI(")")];
              return e3 ? rI([[t3, n2("expression")], [t3, tI(o3, { shouldBreak: true })], [t3, n2("expression")]]) : tI([t3, n2("expression")]);
            }
            case "TSDeclareFunction":
              return xI(e2, n2, t2);
            case "TSExportAssignment":
              return ["export = ", n2("expression"), o2];
            case "TSModuleBlock":
              return TI(e2, t2, n2);
            case "TSInterfaceBody":
            case "TSTypeLiteral":
              return EI(e2, t2, n2);
            case "TSTypeAliasDeclaration":
              return BI(e2, t2, n2);
            case "TSQualifiedName":
              return KO(".", [n2("left"), n2("right")]);
            case "TSAbstractMethodDefinition":
            case "TSDeclareMethod":
              return bI(e2, t2, n2);
            case "TSAbstractPropertyDefinition":
              return CI(e2, t2, n2);
            case "TSInterfaceHeritage":
            case "TSExpressionWithTypeArguments":
              return i2.push(n2("expression")), r2.typeParameters && i2.push(n2("typeParameters")), i2;
            case "TSTemplateLiteralType":
              return yI(e2, n2, t2);
            case "TSNamedTupleMember":
              return [n2("label"), r2.optional ? "?" : "", ": ", n2("elementType")];
            case "TSRestType":
              return ["...", n2("typeAnnotation")];
            case "TSOptionalType":
              return [n2("typeAnnotation"), "?"];
            case "TSInterfaceDeclaration":
              return wI(e2, t2, n2);
            case "TSClassImplements":
              return [n2("expression"), n2("typeParameters")];
            case "TSTypeParameterDeclaration":
            case "TSTypeParameterInstantiation":
              return AI(e2, t2, n2, "params");
            case "TSTypeParameter":
              return vI(e2, t2, n2);
            case "TSAsExpression": {
              i2.push(n2("expression"), " as ", n2("typeAnnotation"));
              const t3 = e2.getParentNode();
              return aI(t3) && t3.callee === r2 || cI(t3) && t3.object === r2 ? tI([nI([eI, ...i2]), eI]) : i2;
            }
            case "TSArrayType":
              return [n2("elementType"), "[]"];
            case "TSPropertySignature":
              return r2.readonly && i2.push("readonly "), i2.push(FI(e2, t2, n2), fI(e2)), r2.typeAnnotation && i2.push(": ", n2("typeAnnotation")), r2.initializer && i2.push(" = ", n2("initializer")), i2;
            case "TSParameterProperty":
              return r2.accessibility && i2.push(r2.accessibility + " "), r2.export && i2.push("export "), r2.static && i2.push("static "), r2.override && i2.push("override "), r2.readonly && i2.push("readonly "), i2.push(n2("parameter")), i2;
            case "TSTypeQuery":
              return ["typeof ", n2("exprName")];
            case "TSIndexSignature": {
              const i3 = e2.getParentNode(), u2 = r2.parameters.length > 1 ? oI(sI(t2) ? "," : "") : "", s2 = tI([nI([eI, KO([", ", eI], e2.map(n2, "parameters"))]), u2, eI]);
              return [r2.export ? "export " : "", r2.accessibility ? [r2.accessibility, " "] : "", r2.static ? "static " : "", r2.readonly ? "readonly " : "", r2.declare ? "declare " : "", "[", r2.parameters ? s2 : "", r2.typeAnnotation ? "]: " : "]", r2.typeAnnotation ? n2("typeAnnotation") : "", i3.type === "ClassBody" ? o2 : ""];
            }
            case "TSTypePredicate":
              return [r2.asserts ? "asserts " : "", n2("parameterName"), r2.typeAnnotation ? [" is ", n2("typeAnnotation")] : ""];
            case "TSNonNullExpression":
              return [n2("expression"), "!"];
            case "TSImportType":
              return [r2.isTypeOf ? "typeof " : "", "import(", n2(r2.parameter ? "parameter" : "argument"), ")", r2.qualifier ? [".", n2("qualifier")] : "", AI(e2, t2, n2, "typeParameters")];
            case "TSLiteralType":
              return n2("literal");
            case "TSIndexedAccessType":
              return II(e2, t2, n2);
            case "TSConstructSignatureDeclaration":
            case "TSCallSignatureDeclaration":
            case "TSConstructorType":
              if (r2.type === "TSConstructorType" && r2.abstract && i2.push("abstract "), r2.type !== "TSCallSignatureDeclaration" && i2.push("new "), i2.push(tI(gI(e2, n2, t2, false, true))), r2.returnType || r2.typeAnnotation) {
                const e3 = r2.type === "TSConstructorType";
                i2.push(e3 ? " => " : ": ", n2("returnType"), n2("typeAnnotation"));
              }
              return i2;
            case "TSTypeOperator":
              return [r2.operator, " ", n2("typeAnnotation")];
            case "TSMappedType": {
              const i3 = YO(t2.originalText, lI(r2), pI(r2));
              return tI(["{", nI([t2.bracketSpacing ? QO : eI, r2.readonly ? [uI(r2.readonly, "readonly"), " "] : "", dI(e2, t2, n2), n2("typeParameter"), r2.optional ? uI(r2.optional, "?") : "", r2.typeAnnotation ? ": " : "", n2("typeAnnotation"), oI(o2)]), XO(e2, t2, true), t2.bracketSpacing ? QO : eI, "}"], { shouldBreak: i3 });
            }
            case "TSMethodSignature": {
              const o3 = r2.kind && r2.kind !== "method" ? "".concat(r2.kind, " ") : "";
              i2.push(r2.accessibility ? [r2.accessibility, " "] : "", o3, r2.export ? "export " : "", r2.static ? "static " : "", r2.readonly ? "readonly " : "", r2.abstract ? "abstract " : "", r2.declare ? "declare " : "", r2.computed ? "[" : "", n2("key"), r2.computed ? "]" : "", fI(e2));
              const u2 = gI(e2, n2, t2, false, true), s2 = r2.returnType ? "returnType" : "typeAnnotation", a2 = r2[s2], c2 = a2 ? n2(s2) : "", l3 = mI(r2, c2);
              return i2.push(l3 ? tI(u2) : u2), a2 && i2.push(": ", tI(c2)), tI(i2);
            }
            case "TSNamespaceExportDeclaration":
              return i2.push("export as namespace ", n2("id")), t2.semi && i2.push(";"), tI(i2);
            case "TSEnumDeclaration":
              return r2.declare && i2.push("declare "), r2.modifiers && i2.push(dI(e2, t2, n2)), r2.const && i2.push("const "), i2.push("enum ", n2("id"), " "), r2.members.length === 0 ? i2.push(tI(["{", XO(e2, t2), eI, "}"])) : i2.push(tI(["{", nI([ZO, DI(e2, t2, "members", n2), sI(t2, "es5") ? "," : ""]), XO(e2, t2, true), ZO, "}"])), i2;
            case "TSEnumMember":
              return i2.push(n2("id")), r2.initializer && i2.push(" = ", n2("initializer")), i2;
            case "TSImportEqualsDeclaration":
              return r2.isExport && i2.push("export "), i2.push("import "), r2.importKind && r2.importKind !== "value" && i2.push(r2.importKind, " "), i2.push(n2("id"), " = ", n2("moduleReference")), t2.semi && i2.push(";"), tI(i2);
            case "TSExternalModuleReference":
              return ["require(", n2("expression"), ")"];
            case "TSModuleDeclaration": {
              const u2 = e2.getParentNode(), s2 = iI(r2.id), a2 = u2.type === "TSModuleDeclaration", c2 = r2.body && r2.body.type === "TSModuleDeclaration";
              if (a2)
                i2.push(".");
              else {
                r2.declare && i2.push("declare "), i2.push(dI(e2, t2, n2));
                const o3 = t2.originalText.slice(lI(r2), lI(r2.id));
                r2.id.type === "Identifier" && r2.id.name === "global" && !/namespace|module/.test(o3) || i2.push(s2 || /(?:^|\s)module(?:\s|$)/.test(o3) ? "module " : "namespace ");
              }
              return i2.push(n2("id")), c2 ? i2.push(n2("body")) : r2.body ? i2.push(" ", tI(n2("body"))) : i2.push(o2), i2;
            }
            case "TSConditionalType":
              return hI(e2, t2, n2);
            case "TSInferType":
              return ["infer", " ", n2("typeParameter")];
            case "TSIntersectionType":
              return NI(e2, t2, n2);
            case "TSUnionType":
              return kI(e2, t2, n2);
            case "TSFunctionType":
              return PI(e2, t2, n2);
            case "TSTupleType":
              return OI(e2, t2, n2);
            case "TSTypeReference":
              return [n2("typeName"), AI(e2, t2, n2, "typeParameters")];
            case "TSTypeAnnotation":
              return n2("typeAnnotation");
            case "TSEmptyBodyFunctionExpression":
              return SI(e2, t2, n2);
            case "TSJSDocAllType":
              return "*";
            case "TSJSDocUnknownType":
              return "?";
            case "TSJSDocNullableType":
              return ["?", n2("typeAnnotation")];
            case "TSJSDocNonNullableType":
              return ["!", n2("typeAnnotation")];
            default:
              throw new Error("Unknown TypeScript node type: ".concat(JSON.stringify(r2.type), "."));
          }
        } };
        const { hasNewline: jI } = dc, { builders: { join: _I, hardline: MI }, utils: { replaceTextEndOfLine: RI } } = Zc, { isLineComment: VI, isBlockComment: $I } = CC, { locStart: WI, locEnd: qI } = og;
        var UI = { printComment: function(e2, t2) {
          const n2 = e2.getValue();
          if (VI(n2))
            return t2.originalText.slice(WI(n2), qI(n2)).trimEnd();
          if ($I(n2)) {
            if (function(e4) {
              const t3 = "*".concat(e4.value, "*").split("\n");
              return t3.length > 1 && t3.every((e5) => e5.trim()[0] === "*");
            }(n2)) {
              const e4 = function(e5) {
                const t3 = e5.value.split("\n");
                return ["/*", _I(MI, t3.map((e6, n3) => n3 === 0 ? e6.trimEnd() : " " + (n3 < t3.length - 1 ? e6.trim() : e6.trimStart()))), "*/"];
              }(n2);
              return n2.trailing && !jI(t2.originalText, WI(n2), { backwards: true }) ? [MI, e4] : e4;
            }
            const e3 = qI(n2), r2 = t2.originalText.slice(e3 - 3, e3) === "*-/";
            return ["/*", RI(n2.value), r2 ? "*-/" : "*/"];
          }
          throw new Error("Not a comment: " + JSON.stringify(n2));
        } };
        const { printString: zI, printNumber: GI } = dc;
        function HI(e2) {
          return e2.toLowerCase();
        }
        function JI(e2) {
          let { pattern: t2, flags: n2 } = e2;
          return n2 = [...n2].sort().join(""), "/".concat(t2, "/").concat(n2);
        }
        var XI = { printLiteral: function(e2, t2) {
          const n2 = e2.getNode();
          switch (n2.type) {
            case "RegExpLiteral":
              return JI(n2);
            case "BigIntLiteral":
              return HI(n2.bigint || n2.extra.raw);
            case "NumericLiteral":
              return GI(n2.extra.raw);
            case "StringLiteral":
              return zI(n2.extra.raw, t2);
            case "NullLiteral":
              return "null";
            case "BooleanLiteral":
              return String(n2.value);
            case "DecimalLiteral":
              return GI(n2.value) + "m";
            case "Literal": {
              if (n2.regex)
                return JI(n2.regex);
              if (n2.bigint)
                return HI(n2.raw);
              if (n2.decimal)
                return GI(n2.decimal) + "m";
              const { value: e3 } = n2;
              return typeof e3 == "number" ? GI(n2.raw) : typeof e3 == "string" ? zI(n2.raw, t2) : String(e3);
            }
          }
        } };
        const { printDanglingComments: YI } = tD, { hasNewline: KI } = dc, { builders: { join: QI, line: ZI, hardline: eL, softline: tL, group: nL, indent: rL }, utils: { replaceTextEndOfLine: oL } } = Zc, iL = Nb, uL = Lb, { insertPragma: sL } = iv, aL = lA, cL = wA, lL = TA, { hasFlowShorthandAnnotationComment: pL, hasComment: fL, CommentCheckFlags: dL, isTheOnlyJsxElementInMarkdown: hL, isBlockComment: gL, isLineComment: mL, isNextLineEmpty: yL, needsHardlineAfterDanglingComment: DL, rawText: EL, hasIgnoreComment: CL, isCallExpression: bL, isMemberExpression: vL } = CC, { locStart: AL, locEnd: FL } = og, { printHtmlBinding: xL, isVueEventBindingExpression: SL } = IA, { printAngular: wL } = mF, { printJsx: TL, hasJsxIgnoreComment: BL } = ZF, { printFlow: NL } = oO, { printTypescript: kL } = LI, { printOptionalToken: PL, printBindExpressionCallee: OL, printTypeAnnotation: IL, adjustClause: LL, printRestSpread: jL } = _x, { printImportDeclaration: _L, printExportDeclaration: ML, printExportAllDeclaration: RL, printModuleSpecifier: VL } = Qk, { printTernary: $L } = AO, { printTemplateLiteral: WL } = VC, { printArray: qL } = uS, { printObject: UL } = vP, { printClass: zL, printClassMethod: GL, printClassProperty: HL } = Dk, { printProperty: JL } = zB, { printFunction: XL, printArrowFunction: YL, printMethod: KL, printReturnStatement: QL, printThrowStatement: ZL } = IN, { printCallExpression: ej } = Mw, { printVariableDeclarator: tj, printAssignmentExpression: nj } = mT, { printBinaryishExpression: rj } = sF, { printSwitchCaseConsequent: oj } = _O, { printMemberExpression: ij } = GS, { printBlock: uj, printBlockBody: sj } = JO, { printComment: aj } = UI, { printLiteral: cj } = XI, { printDecorators: lj } = HN;
        function pj2(e2, t2) {
          const n2 = EL(e2), r2 = n2.slice(1, -1);
          if (r2.includes('"') || r2.includes("'"))
            return n2;
          const o2 = t2.singleQuote ? "'" : '"';
          return o2 + r2 + o2;
        }
        var fj = { preprocess: lL, print: function(e2, t2, n2, r2) {
          const o2 = function(e3, t3, n3, r3) {
            const o3 = e3.getValue(), i3 = t3.semi ? ";" : "";
            if (!o3)
              return "";
            if (typeof o3 == "string")
              return o3;
            for (const r4 of [cj, xL, wL, TL, NL, kL]) {
              const o4 = r4(e3, t3, n3);
              if (o4 !== void 0)
                return o4;
            }
            let u3 = [];
            switch (o3.type) {
              case "JsExpressionRoot":
                return n3("node");
              case "JsonRoot":
                return [n3("node"), eL];
              case "File":
                return o3.program && o3.program.interpreter && u3.push(n3(["program", "interpreter"])), u3.push(n3("program")), u3;
              case "Program":
                return sj(e3, t3, n3);
              case "EmptyStatement":
                return "";
              case "ExpressionStatement":
                if (o3.directive)
                  return [pj2(o3.expression, t3), i3];
                if (t3.parser === "__vue_event_binding") {
                  const t4 = e3.getParentNode();
                  if (t4.type === "Program" && t4.body.length === 1 && t4.body[0] === o3)
                    return [n3("expression"), SL(o3.expression) ? ";" : ""];
                }
                return [n3("expression"), hL(t3, e3) ? "" : i3];
              case "ParenthesizedExpression":
                return !fL(o3.expression) && (o3.expression.type === "ObjectExpression" || o3.expression.type === "ArrayExpression") ? ["(", n3("expression"), ")"] : nL(["(", rL([tL, n3("expression")]), tL, ")"]);
              case "AssignmentExpression":
                return nj(e3, t3, n3);
              case "VariableDeclarator":
                return tj(e3, t3, n3);
              case "BinaryExpression":
              case "LogicalExpression":
                return rj(e3, t3, n3);
              case "AssignmentPattern":
                return [n3("left"), " = ", n3("right")];
              case "OptionalMemberExpression":
              case "MemberExpression":
                return ij(e3, t3, n3);
              case "MetaProperty":
                return [n3("meta"), ".", n3("property")];
              case "BindExpression":
                return o3.object && u3.push(n3("object")), u3.push(nL(rL([tL, OL(e3, t3, n3)]))), u3;
              case "Identifier":
                return [o3.name, PL(e3), IL(e3, t3, n3)];
              case "V8IntrinsicIdentifier":
                return ["%", o3.name];
              case "SpreadElement":
              case "SpreadElementPattern":
              case "SpreadProperty":
              case "SpreadPropertyPattern":
              case "RestElement":
                return jL(e3, t3, n3);
              case "FunctionDeclaration":
              case "FunctionExpression":
                return XL(e3, n3, t3, r3);
              case "ArrowFunctionExpression":
                return YL(e3, t3, n3, r3);
              case "YieldExpression":
                return u3.push("yield"), o3.delegate && u3.push("*"), o3.argument && u3.push(" ", n3("argument")), u3;
              case "AwaitExpression":
                if (u3.push("await"), o3.argument) {
                  u3.push(" ", n3("argument"));
                  const t4 = e3.getParentNode();
                  if (bL(t4) && t4.callee === o3 || vL(t4) && t4.object === o3) {
                    u3 = [rL([tL, ...u3]), tL];
                    const t5 = e3.findAncestor((e4) => e4.type === "AwaitExpression" || e4.type === "BlockStatement");
                    if (!t5 || t5.type !== "AwaitExpression")
                      return nL(u3);
                  }
                }
                return u3;
              case "ExportDefaultDeclaration":
              case "ExportNamedDeclaration":
                return ML(e3, t3, n3);
              case "ExportAllDeclaration":
                return RL(e3, t3, n3);
              case "ImportDeclaration":
                return _L(e3, t3, n3);
              case "ImportSpecifier":
              case "ExportSpecifier":
              case "ImportNamespaceSpecifier":
              case "ExportNamespaceSpecifier":
              case "ImportDefaultSpecifier":
              case "ExportDefaultSpecifier":
                return VL(e3, t3, n3);
              case "ImportAttribute":
                return [n3("key"), ": ", n3("value")];
              case "Import":
                return "import";
              case "BlockStatement":
              case "StaticBlock":
              case "ClassBody":
                return uj(e3, t3, n3);
              case "ThrowStatement":
                return ZL(e3, t3, n3);
              case "ReturnStatement":
                return QL(e3, t3, n3);
              case "NewExpression":
              case "ImportExpression":
              case "OptionalCallExpression":
              case "CallExpression":
                return ej(e3, t3, n3);
              case "ObjectExpression":
              case "ObjectPattern":
              case "RecordExpression":
                return UL(e3, t3, n3);
              case "ObjectProperty":
              case "Property":
                return o3.method || o3.kind === "get" || o3.kind === "set" ? KL(e3, t3, n3) : JL(e3, t3, n3);
              case "ObjectMethod":
                return KL(e3, t3, n3);
              case "Decorator":
                return ["@", n3("expression")];
              case "ArrayExpression":
              case "ArrayPattern":
              case "TupleExpression":
                return qL(e3, t3, n3);
              case "SequenceExpression": {
                const t4 = e3.getParentNode(0);
                if (t4.type === "ExpressionStatement" || t4.type === "ForStatement") {
                  const t5 = [];
                  return e3.each((e4, r4) => {
                    r4 === 0 ? t5.push(n3()) : t5.push(",", rL([ZI, n3()]));
                  }, "expressions"), nL(t5);
                }
                return nL(QI([",", ZI], e3.map(n3, "expressions")));
              }
              case "ThisExpression":
                return "this";
              case "Super":
                return "super";
              case "Directive":
                return [n3("value"), i3];
              case "DirectiveLiteral":
                return pj2(o3, t3);
              case "UnaryExpression":
                return u3.push(o3.operator), /[a-z]$/.test(o3.operator) && u3.push(" "), fL(o3.argument) ? u3.push(nL(["(", rL([tL, n3("argument")]), tL, ")"])) : u3.push(n3("argument")), u3;
              case "UpdateExpression":
                return u3.push(n3("argument"), o3.operator), o3.prefix && u3.reverse(), u3;
              case "ConditionalExpression":
                return $L(e3, t3, n3);
              case "VariableDeclaration": {
                const t4 = e3.map(n3, "declarations"), r4 = e3.getParentNode(), s3 = r4.type === "ForStatement" || r4.type === "ForInStatement" || r4.type === "ForOfStatement", a3 = o3.declarations.some((e4) => e4.init);
                let c2;
                return t4.length !== 1 || fL(o3.declarations[0]) ? t4.length > 0 && (c2 = rL(t4[0])) : c2 = t4[0], u3 = [o3.declare ? "declare " : "", o3.kind, c2 ? [" ", c2] : "", rL(t4.slice(1).map((e4) => [",", a3 && !s3 ? eL : ZI, e4]))], s3 && r4.body !== o3 || u3.push(i3), nL(u3);
              }
              case "WithStatement":
                return nL(["with (", n3("object"), ")", LL(o3.body, n3("body"))]);
              case "IfStatement": {
                const r4 = LL(o3.consequent, n3("consequent")), i4 = nL(["if (", nL([rL([tL, n3("test")]), tL]), ")", r4]);
                if (u3.push(i4), o3.alternate) {
                  const r5 = fL(o3.consequent, dL.Trailing | dL.Line) || DL(o3), i5 = o3.consequent.type === "BlockStatement" && !r5;
                  u3.push(i5 ? " " : eL), fL(o3, dL.Dangling) && u3.push(YI(e3, t3, true), r5 ? eL : " "), u3.push("else", nL(LL(o3.alternate, n3("alternate"), o3.alternate.type === "IfStatement")));
                }
                return u3;
              }
              case "ForStatement": {
                const r4 = LL(o3.body, n3("body")), i4 = YI(e3, t3, true), u4 = i4 ? [i4, tL] : "";
                return o3.init || o3.test || o3.update ? [u4, nL(["for (", nL([rL([tL, n3("init"), ";", ZI, n3("test"), ";", ZI, n3("update")]), tL]), ")", r4])] : [u4, nL(["for (;;)", r4])];
              }
              case "WhileStatement":
                return nL(["while (", nL([rL([tL, n3("test")]), tL]), ")", LL(o3.body, n3("body"))]);
              case "ForInStatement":
                return nL(["for (", n3("left"), " in ", n3("right"), ")", LL(o3.body, n3("body"))]);
              case "ForOfStatement":
                return nL(["for", o3.await ? " await" : "", " (", n3("left"), " of ", n3("right"), ")", LL(o3.body, n3("body"))]);
              case "DoWhileStatement": {
                const e4 = LL(o3.body, n3("body"));
                return u3 = [nL(["do", e4])], o3.body.type === "BlockStatement" ? u3.push(" ") : u3.push(eL), u3.push("while (", nL([rL([tL, n3("test")]), tL]), ")", i3), u3;
              }
              case "DoExpression":
                return [o3.async ? "async " : "", "do ", n3("body")];
              case "BreakStatement":
                return u3.push("break"), o3.label && u3.push(" ", n3("label")), u3.push(i3), u3;
              case "ContinueStatement":
                return u3.push("continue"), o3.label && u3.push(" ", n3("label")), u3.push(i3), u3;
              case "LabeledStatement":
                return o3.body.type === "EmptyStatement" ? [n3("label"), ":;"] : [n3("label"), ": ", n3("body")];
              case "TryStatement":
                return ["try ", n3("block"), o3.handler ? [" ", n3("handler")] : "", o3.finalizer ? [" finally ", n3("finalizer")] : ""];
              case "CatchClause":
                if (o3.param) {
                  const e4 = fL(o3.param, (e5) => !gL(e5) || e5.leading && KI(t3.originalText, FL(e5)) || e5.trailing && KI(t3.originalText, AL(e5), { backwards: true })), r4 = n3("param");
                  return ["catch ", e4 ? ["(", rL([tL, r4]), tL, ") "] : ["(", r4, ") "], n3("body")];
                }
                return ["catch ", n3("body")];
              case "SwitchStatement":
                return [nL(["switch (", rL([tL, n3("discriminant")]), tL, ")"]), " {", o3.cases.length > 0 ? rL([eL, QI(eL, e3.map((e4, r4, o4) => {
                  const i4 = e4.getValue();
                  return [n3(), r4 !== o4.length - 1 && yL(i4, t3) ? eL : ""];
                }, "cases"))]) : "", eL, "}"];
              case "SwitchCase": {
                o3.test ? u3.push("case ", n3("test"), ":") : u3.push("default:");
                const r4 = o3.consequent.filter((e4) => e4.type !== "EmptyStatement");
                if (r4.length > 0) {
                  const o4 = oj(e3, t3, n3);
                  u3.push(r4.length === 1 && r4[0].type === "BlockStatement" ? [" ", o4] : rL([eL, o4]));
                }
                return u3;
              }
              case "DebuggerStatement":
                return ["debugger", i3];
              case "ClassDeclaration":
              case "ClassExpression":
                return zL(e3, t3, n3);
              case "ClassMethod":
              case "ClassPrivateMethod":
              case "MethodDefinition":
                return GL(e3, t3, n3);
              case "ClassProperty":
              case "PropertyDefinition":
              case "ClassPrivateProperty":
                return HL(e3, t3, n3);
              case "TemplateElement":
                return oL(o3.value.raw);
              case "TemplateLiteral":
                return WL(e3, n3, t3);
              case "TaggedTemplateExpression":
                return [n3("tag"), n3("typeParameters"), n3("quasi")];
              case "PrivateIdentifier":
                return ["#", n3("name")];
              case "PrivateName":
                return ["#", n3("id")];
              case "InterpreterDirective":
                return u3.push("#!", o3.value, eL), yL(o3, t3) && u3.push(eL), u3;
              case "TopicReference":
                return "%";
              case "ArgumentPlaceholder":
                return "?";
              case "ModuleExpression": {
                u3.push("module {");
                const e4 = n3("body");
                return e4 && u3.push(rL([eL, e4]), eL), u3.push("}"), u3;
              }
              default:
                throw new Error("unknown type: " + JSON.stringify(o3.type));
            }
          }(e2, t2, n2, r2);
          if (!o2)
            return "";
          const i2 = e2.getValue(), { type: u2 } = i2;
          if (u2 === "ClassMethod" || u2 === "ClassPrivateMethod" || u2 === "ClassProperty" || u2 === "PropertyDefinition" || u2 === "TSAbstractPropertyDefinition" || u2 === "ClassPrivateProperty" || u2 === "MethodDefinition" || u2 === "TSAbstractMethodDefinition" || u2 === "TSDeclareMethod")
            return o2;
          const s2 = lj(e2, t2, n2);
          if (s2)
            return nL([...s2, o2]);
          if (!cL(e2, t2))
            return r2 && r2.needsSemi ? [";", o2] : o2;
          const a2 = [r2 && r2.needsSemi ? ";(" : "(", o2];
          if (pL(i2)) {
            const [e3] = i2.trailingComments;
            a2.push(" /*", e3.value.trimStart(), "*/"), e3.printed = true;
          }
          return a2.push(")"), a2;
        }, embed: iL, insertPragma: sL, massageAstNode: uL, hasPrettierIgnore: (e2) => CL(e2) || BL(e2), willPrintOwnComments: aL.willPrintOwnComments, canAttachComment: function(e2) {
          return e2.type && !gL(e2) && !mL(e2) && e2.type !== "EmptyStatement" && e2.type !== "TemplateElement" && e2.type !== "Import" && e2.type !== "TSEmptyBodyFunctionExpression";
        }, printComment: aj, isBlockComment: gL, handleComments: { avoidAstMutation: true, ownLine: aL.handleOwnLineComment, endOfLine: aL.handleEndOfLineComment, remaining: aL.handleRemainingComment }, getCommentChildNodes: aL.getCommentChildNodes };
        const { builders: { hardline: dj, indent: hj, join: gj } } = Zc, mj = TA;
        const yj = /* @__PURE__ */ new Set(["start", "end", "extra", "loc", "comments", "leadingComments", "trailingComments", "innerComments", "errors", "range", "tokens"]);
        function Dj(e2, t2) {
          const { type: n2 } = e2;
          if (n2 !== "ObjectProperty" || e2.key.type !== "Identifier") {
            if (n2 === "UnaryExpression" && e2.operator === "+")
              return t2.argument;
            if (n2 !== "ArrayExpression")
              return n2 === "TemplateLiteral" ? { type: "StringLiteral", value: e2.quasis[0].value.cooked } : void 0;
            for (const [n3, r2] of e2.elements.entries())
              r2 === null && t2.elements.splice(n3, 0, { type: "NullLiteral" });
          } else
            t2.key = { type: "StringLiteral", value: e2.key.name };
        }
        Dj.ignoredProperties = yj;
        var Ej = { preprocess: mj, print: function(e2, t2, n2) {
          const r2 = e2.getValue();
          switch (r2.type) {
            case "JsonRoot":
              return [n2("node"), dj];
            case "ArrayExpression": {
              if (r2.elements.length === 0)
                return "[]";
              const t3 = e2.map(() => e2.getValue() === null ? "null" : n2(), "elements");
              return ["[", hj([dj, gj([",", dj], t3)]), dj, "]"];
            }
            case "ObjectExpression":
              return r2.properties.length === 0 ? "{}" : ["{", hj([dj, gj([",", dj], e2.map(n2, "properties"))]), dj, "}"];
            case "ObjectProperty":
              return [n2("key"), ": ", n2("value")];
            case "UnaryExpression":
              return [r2.operator === "+" ? "" : r2.operator, n2("argument")];
            case "NullLiteral":
              return "null";
            case "BooleanLiteral":
              return r2.value ? "true" : "false";
            case "StringLiteral":
            case "NumericLiteral":
              return JSON.stringify(r2.value);
            case "Identifier": {
              const t3 = e2.getParentNode();
              return t3 && t3.type === "ObjectProperty" && t3.key === r2 ? JSON.stringify(r2.name) : r2.name;
            }
            case "TemplateLiteral":
              return n2(["quasis", 0]);
            case "TemplateElement":
              return JSON.stringify(r2.value.cooked);
            default:
              throw new Error("unknown type: " + JSON.stringify(r2.type));
          }
        }, massageAstNode: Dj };
        const Cj = "Common";
        var bj = { bracketSpacing: { since: "0.0.0", category: Cj, type: "boolean", default: true, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, singleQuote: { since: "0.0.0", category: Cj, type: "boolean", default: false, description: "Use single quotes instead of double quotes." }, proseWrap: { since: "1.8.2", category: Cj, type: "choice", default: [{ since: "1.8.2", value: true }, { since: "1.9.0", value: "preserve" }], description: "How to wrap prose.", choices: [{ since: "1.9.0", value: "always", description: "Wrap prose if it exceeds the print width." }, { since: "1.9.0", value: "never", description: "Do not wrap prose." }, { since: "1.9.0", value: "preserve", description: "Wrap prose as-is." }] }, bracketSameLine: { since: "2.4.0", category: Cj, type: "boolean", default: false, description: "Put > of opening tags on the last line instead of on a new line." } };
        const vj = "JavaScript";
        var Aj = { name: "JavaScript", type: "programming", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", color: "#f1e05a", aliases: ["js", "node"], extensions: [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".jsb", ".jscad", ".jsfl", ".jsm", ".jss", ".jsx", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib"], filenames: ["Jakefile"], interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell"], languageId: 183 }, Fj = { name: "TypeScript", type: "programming", color: "#2b7489", aliases: ["ts"], interpreters: ["deno", "ts-node"], extensions: [".ts"], tmScope: "source.ts", aceMode: "typescript", codemirrorMode: "javascript", codemirrorMimeType: "application/typescript", languageId: 378 }, xj = { name: "TSX", type: "programming", group: "TypeScript", extensions: [".tsx"], tmScope: "source.tsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", languageId: 94901924 }, Sj = { name: "JSON", type: "data", tmScope: "source.json", aceMode: "json", codemirrorMode: "javascript", codemirrorMimeType: "application/json", extensions: [".json", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".jsonl", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"], filenames: [".arcconfig", ".htmlhintrc", ".imgbotconfig", ".tern-config", ".tern-project", ".watchmanconfig", "Pipfile.lock", "composer.lock", "mcmod.info"], languageId: 174 }, wj = { name: "JSON with Comments", type: "data", group: "JSON", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", aliases: ["jsonc"], extensions: [".jsonc", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"], filenames: [".babelrc", ".eslintrc.json", ".jscsrc", ".jshintrc", ".jslintrc", "api-extractor.json", "devcontainer.json", "jsconfig.json", "language-configuration.json", "tsconfig.json", "tslint.json"], languageId: 423 }, Tj = { name: "JSON5", type: "data", extensions: [".json5"], tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "application/json", languageId: 175 };
        const Bj = bE, Nj = fj, kj = Ej, Pj = { arrowParens: { since: "1.9.0", category: vj, type: "choice", default: [{ since: "1.9.0", value: "avoid" }, { since: "2.0.0", value: "always" }], description: "Include parentheses around a sole arrow function parameter.", choices: [{ value: "always", description: "Always include parens. Example: `(x) => x`" }, { value: "avoid", description: "Omit parens when possible. Example: `x => x`" }] }, bracketSameLine: bj.bracketSameLine, bracketSpacing: bj.bracketSpacing, jsxBracketSameLine: { since: "0.17.0", category: vj, type: "boolean", description: "Put > on the last line instead of at a new line.", deprecated: "2.4.0" }, semi: { since: "1.0.0", category: vj, type: "boolean", default: true, description: "Print semicolons.", oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them." }, singleQuote: bj.singleQuote, jsxSingleQuote: { since: "1.15.0", category: vj, type: "boolean", default: false, description: "Use single quotes in JSX." }, quoteProps: { since: "1.17.0", category: vj, type: "choice", default: "as-needed", description: "Change when properties in objects are quoted.", choices: [{ value: "as-needed", description: "Only add quotes around object properties where required." }, { value: "consistent", description: "If at least one property in an object requires quotes, quote all properties." }, { value: "preserve", description: "Respect the input use of quotes in object properties." }] }, trailingComma: { since: "0.0.0", category: vj, type: "choice", default: [{ since: "0.0.0", value: false }, { since: "0.19.0", value: "none" }, { since: "2.0.0", value: "es5" }], description: "Print trailing commas wherever possible when multi-line.", choices: [{ value: "es5", description: "Trailing commas where valid in ES5 (objects, arrays, etc.)" }, { value: "none", description: "No trailing commas." }, { value: "all", description: "Trailing commas wherever possible (including function arguments)." }] } }, Oj = [Bj(Aj, (e2) => ({ since: "0.0.0", parsers: ["babel", "espree", "meriyah", "babel-flow", "babel-ts", "flow", "typescript"], vscodeLanguageIds: ["javascript", "mongo"], interpreters: [...e2.interpreters, "zx"], extensions: [...e2.extensions.filter((e3) => e3 !== ".jsx"), ".wxs"] })), Bj(Aj, () => ({ name: "Flow", since: "0.0.0", parsers: ["flow", "babel-flow"], vscodeLanguageIds: ["javascript"], aliases: [], filenames: [], extensions: [".js.flow"] })), Bj(Aj, () => ({ name: "JSX", since: "0.0.0", parsers: ["babel", "babel-flow", "babel-ts", "flow", "typescript", "espree", "meriyah"], vscodeLanguageIds: ["javascriptreact"], aliases: void 0, filenames: void 0, extensions: [".jsx"], group: "JavaScript", interpreters: void 0, tmScope: "source.js.jsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", color: void 0 })), Bj(Fj, (e2) => ({ since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescript"], extensions: [...e2.extensions, ".mts", ".cts"] })), Bj(xj, () => ({ since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescriptreact"] })), Bj(Sj, () => ({ name: "JSON.stringify", since: "1.13.0", parsers: ["json-stringify"], vscodeLanguageIds: ["json"], extensions: [], filenames: ["package.json", "package-lock.json", "composer.json"] })), Bj(Sj, (e2) => ({ since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["json"], extensions: e2.extensions.filter((e3) => e3 !== ".jsonl") })), Bj(wj, (e2) => ({ since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["jsonc"], filenames: [...e2.filenames, ".eslintrc"] })), Bj(Tj, () => ({ since: "1.13.0", parsers: ["json5"], vscodeLanguageIds: ["json5"] }))];
        var Ij = { languages: Oj, options: Pj, printers: { estree: Nj, "estree-json": kj }, parsers: void 0 };
        const { isFrontMatterNode: Lj } = dc, jj = au, _j = /* @__PURE__ */ new Set(["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma"]);
        function Mj(e2, t2, n2) {
          if (Lj(e2) && e2.lang === "yaml" && delete t2.value, e2.type === "css-comment" && n2.type === "css-root" && n2.nodes.length > 0) {
            if ((n2.nodes[0] === e2 || Lj(n2.nodes[0]) && n2.nodes[1] === e2) && (delete t2.text, /^\*\s*@(?:format|prettier)\s*$/.test(e2.text)))
              return null;
            if (n2.type === "css-root" && jj(n2.nodes) === e2)
              return null;
          }
          if (e2.type === "value-root" && delete t2.text, e2.type !== "media-query" && e2.type !== "media-query-list" && e2.type !== "media-feature-expression" || delete t2.value, e2.type === "css-rule" && delete t2.params, e2.type === "selector-combinator" && (t2.value = t2.value.replace(/\s+/g, " ")), e2.type === "media-feature" && (t2.value = t2.value.replace(/ /g, "")), (e2.type === "value-word" && (e2.isColor && e2.isHex || ["initial", "inherit", "unset", "revert"].includes(t2.value.replace().toLowerCase())) || e2.type === "media-feature" || e2.type === "selector-root-invalid" || e2.type === "selector-pseudo") && (t2.value = t2.value.toLowerCase()), e2.type === "css-decl" && (t2.prop = t2.prop.toLowerCase()), e2.type !== "css-atrule" && e2.type !== "css-import" || (t2.name = t2.name.toLowerCase()), e2.type === "value-number" && (t2.unit = t2.unit.toLowerCase()), e2.type !== "media-feature" && e2.type !== "media-keyword" && e2.type !== "media-type" && e2.type !== "media-unknown" && e2.type !== "media-url" && e2.type !== "media-value" && e2.type !== "selector-attribute" && e2.type !== "selector-string" && e2.type !== "selector-class" && e2.type !== "selector-combinator" && e2.type !== "value-string" || !t2.value || (t2.value = t2.value.replace(/'/g, '"').replace(/\\([^\dA-Fa-f])/g, "$1")), e2.type === "selector-attribute" && (t2.attribute = t2.attribute.trim(), t2.namespace && typeof t2.namespace == "string" && (t2.namespace = t2.namespace.trim(), t2.namespace.length === 0 && (t2.namespace = true)), t2.value && (t2.value = t2.value.trim().replace(/^["']|["']$/g, ""), delete t2.quoted)), e2.type !== "media-value" && e2.type !== "media-type" && e2.type !== "value-number" && e2.type !== "selector-root-invalid" && e2.type !== "selector-class" && e2.type !== "selector-combinator" && e2.type !== "selector-tag" || !t2.value || (t2.value = t2.value.replace(/([\d+.Ee-]+)([A-Za-z]*)/g, (e3, t3, n3) => {
            const r2 = Number(t3);
            return Number.isNaN(r2) ? e3 : r2 + n3.toLowerCase();
          })), e2.type === "selector-tag") {
            const n3 = e2.value.toLowerCase();
            ["from", "to"].includes(n3) && (t2.value = n3);
          }
          e2.type === "css-atrule" && e2.name.toLowerCase() === "supports" && delete t2.value, e2.type === "selector-unknown" && delete t2.value;
        }
        Mj.ignoredProperties = _j;
        var Rj = Mj;
        const { builders: { hardline: Vj, markAsRoot: $j } } = Zc;
        var Wj = function(e2, t2) {
          if (e2.lang === "yaml") {
            const n2 = e2.value.trim(), r2 = n2 ? t2(n2, { parser: "yaml" }, { stripTrailingHardline: true }) : "";
            return $j([e2.startDelimiter, Vj, r2, r2 ? Vj : "", e2.endDelimiter]);
          }
        };
        const { builders: { hardline: qj } } = Zc, Uj = Wj;
        var zj = function(e2, t2, n2) {
          const r2 = e2.getValue();
          if (r2.type === "front-matter") {
            const e3 = Uj(r2, n2);
            return e3 ? [e3, qj] : "";
          }
        };
        const Gj = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
        var Hj = function(e2) {
          const t2 = e2.match(Gj);
          if (!t2)
            return { content: e2 };
          const { startDelimiter: n2, language: r2, value: o2 = "", endDelimiter: i2 } = t2.groups;
          let u2 = r2.trim() || "yaml";
          if (n2 === "+++" && (u2 = "toml"), u2 !== "yaml" && n2 !== i2)
            return { content: e2 };
          const [s2] = t2;
          return { frontMatter: { type: "front-matter", lang: u2, value: o2, startDelimiter: n2, endDelimiter: i2, raw: s2.replace(/\n$/, "") }, content: s2.replace(/[^\n]/g, " ") + e2.slice(s2.length) };
        };
        const Jj = iv, Xj = Hj;
        var Yj = { hasPragma: function(e2) {
          return Jj.hasPragma(Xj(e2).content);
        }, insertPragma: function(e2) {
          const { frontMatter: t2, content: n2 } = Xj(e2);
          return (t2 ? t2.raw + "\n\n" : "") + Jj.insertPragma(n2);
        } };
        const { isNonEmptyArray: Kj } = dc, Qj = /* @__PURE__ */ new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]), Zj = /* @__PURE__ */ new Set(["import", "use", "forward"]);
        function e_(e2, t2) {
          const n2 = Array.isArray(t2) ? t2 : [t2];
          let r2, o2 = -1;
          for (; r2 = e2.getParentNode(++o2); )
            if (n2.includes(r2.type))
              return o2;
          return -1;
        }
        function t_(e2, t2) {
          const n2 = e_(e2, t2);
          return n2 === -1 ? null : e2.getParentNode(n2);
        }
        function n_(e2) {
          return e2.type === "value-operator" && e2.value === "*";
        }
        function r_(e2) {
          return e2.type === "value-operator" && e2.value === "/";
        }
        function o_(e2) {
          return e2.type === "value-operator" && e2.value === "+";
        }
        function i_(e2) {
          return e2.type === "value-operator" && e2.value === "-";
        }
        function u_(e2) {
          return e2.type === "value-operator" && e2.value === "%";
        }
        function s_(e2) {
          return e2.type === "value-comma_group" && e2.groups && e2.groups[1] && e2.groups[1].type === "value-colon";
        }
        function a_(e2) {
          return e2.type === "value-paren_group" && e2.groups && e2.groups[0] && s_(e2.groups[0]);
        }
        function c_(e2) {
          return e2 && e2.type === "value-colon";
        }
        var l_ = { getAncestorCounter: e_, getAncestorNode: t_, getPropOfDeclNode: function(e2) {
          const t2 = t_(e2, "css-decl");
          return t2 && t2.prop && t2.prop.toLowerCase();
        }, hasSCSSInterpolation: function(e2) {
          if (Kj(e2)) {
            for (let t2 = e2.length - 1; t2 > 0; t2--)
              if (e2[t2].type === "word" && e2[t2].value === "{" && e2[t2 - 1].type === "word" && e2[t2 - 1].value.endsWith("#"))
                return true;
          }
          return false;
        }, hasStringOrFunction: function(e2) {
          if (Kj(e2)) {
            for (let t2 = 0; t2 < e2.length; t2++)
              if (e2[t2].type === "string" || e2[t2].type === "func")
                return true;
          }
          return false;
        }, maybeToLowerCase: function(e2) {
          return e2.includes("$") || e2.includes("@") || e2.includes("#") || e2.startsWith("%") || e2.startsWith("--") || e2.startsWith(":--") || e2.includes("(") && e2.includes(")") ? e2 : e2.toLowerCase();
        }, insideValueFunctionNode: function(e2, t2) {
          const n2 = t_(e2, "value-func");
          return n2 && n2.value && n2.value.toLowerCase() === t2;
        }, insideICSSRuleNode: function(e2) {
          const t2 = t_(e2, "css-rule");
          return t2 && t2.raws && t2.raws.selector && (t2.raws.selector.startsWith(":import") || t2.raws.selector.startsWith(":export"));
        }, insideAtRuleNode: function(e2, t2) {
          const n2 = Array.isArray(t2) ? t2 : [t2], r2 = t_(e2, "css-atrule");
          return r2 && n2.includes(r2.name.toLowerCase());
        }, insideURLFunctionInImportAtRuleNode: function(e2) {
          const t2 = e2.getValue(), n2 = t_(e2, "css-atrule");
          return n2 && n2.name === "import" && t2.groups[0].value === "url" && t2.groups.length === 2;
        }, isKeyframeAtRuleKeywords: function(e2, t2) {
          const n2 = t_(e2, "css-atrule");
          return n2 && n2.name && n2.name.toLowerCase().endsWith("keyframes") && ["from", "to"].includes(t2.toLowerCase());
        }, isWideKeywords: function(e2) {
          return ["initial", "inherit", "unset", "revert"].includes(e2.toLowerCase());
        }, isSCSS: function(e2, t2) {
          return e2 === "less" || e2 === "scss" ? e2 === "scss" : /(?:\w\s*:\s*[^:}]+|#){|@import[^\n]+(?:url|,)/.test(t2);
        }, isSCSSVariable: function(e2) {
          return Boolean(e2 && e2.type === "word" && e2.value.startsWith("$"));
        }, isLastNode: function(e2, t2) {
          const n2 = e2.getParentNode();
          if (!n2)
            return false;
          const { nodes: r2 } = n2;
          return r2 && r2.indexOf(t2) === r2.length - 1;
        }, isLessParser: function(e2) {
          return e2.parser === "css" || e2.parser === "less";
        }, isSCSSControlDirectiveNode: function(e2) {
          return e2.type === "css-atrule" && ["if", "else", "for", "each", "while"].includes(e2.name);
        }, isDetachedRulesetDeclarationNode: function(e2) {
          return !!e2.selector && (typeof e2.selector == "string" && /^@.+:.*$/.test(e2.selector) || e2.selector.value && /^@.+:.*$/.test(e2.selector.value));
        }, isRelationalOperatorNode: function(e2) {
          return e2.type === "value-word" && ["<", ">", "<=", ">="].includes(e2.value);
        }, isEqualityOperatorNode: function(e2) {
          return e2.type === "value-word" && ["==", "!="].includes(e2.value);
        }, isMultiplicationNode: n_, isDivisionNode: r_, isAdditionNode: o_, isSubtractionNode: i_, isModuloNode: u_, isMathOperatorNode: function(e2) {
          return n_(e2) || r_(e2) || o_(e2) || i_(e2) || u_(e2);
        }, isEachKeywordNode: function(e2) {
          return e2.type === "value-word" && e2.value === "in";
        }, isForKeywordNode: function(e2) {
          return e2.type === "value-word" && ["from", "through", "end"].includes(e2.value);
        }, isURLFunctionNode: function(e2) {
          return e2.type === "value-func" && e2.value.toLowerCase() === "url";
        }, isIfElseKeywordNode: function(e2) {
          return e2.type === "value-word" && ["and", "or", "not"].includes(e2.value);
        }, hasComposesNode: function(e2) {
          return e2.value && e2.value.type === "value-root" && e2.value.group && e2.value.group.type === "value-value" && e2.prop.toLowerCase() === "composes";
        }, hasParensAroundNode: function(e2) {
          return e2.value && e2.value.group && e2.value.group.group && e2.value.group.group.type === "value-paren_group" && e2.value.group.group.open !== null && e2.value.group.group.close !== null;
        }, hasEmptyRawBefore: function(e2) {
          return e2.raws && e2.raws.before === "";
        }, isSCSSNestedPropertyNode: function(e2) {
          return !!e2.selector && e2.selector.replace(/\/\*.*?\*\//, "").replace(/\/\/.*?\n/, "").trim().endsWith(":");
        }, isDetachedRulesetCallNode: function(e2) {
          return e2.raws && e2.raws.params && /^\(\s*\)$/.test(e2.raws.params);
        }, isTemplatePlaceholderNode: function(e2) {
          return e2.name.startsWith("prettier-placeholder");
        }, isTemplatePropNode: function(e2) {
          return e2.prop.startsWith("@prettier-placeholder");
        }, isPostcssSimpleVarNode: function(e2, t2) {
          return e2.value === "$$" && e2.type === "value-func" && t2 && t2.type === "value-word" && !t2.raws.before;
        }, isKeyValuePairNode: s_, isKeyValuePairInParenGroupNode: a_, isKeyInValuePairNode: function(e2, t2) {
          if (!s_(t2))
            return false;
          const { groups: n2 } = t2, r2 = n2.indexOf(e2);
          return r2 !== -1 && c_(n2[r2 + 1]);
        }, isSCSSMapItemNode: function(e2) {
          const t2 = e2.getValue();
          if (t2.groups.length === 0)
            return false;
          const n2 = e2.getParentNode(1);
          if (!(a_(t2) || n2 && a_(n2)))
            return false;
          const r2 = t_(e2, "css-decl");
          return !!(r2 && r2.prop && r2.prop.startsWith("$")) || (!!a_(n2) || n2.type === "value-func");
        }, isInlineValueCommentNode: function(e2) {
          return e2.type === "value-comment" && e2.inline;
        }, isHashNode: function(e2) {
          return e2.type === "value-word" && e2.value === "#";
        }, isLeftCurlyBraceNode: function(e2) {
          return e2.type === "value-word" && e2.value === "{";
        }, isRightCurlyBraceNode: function(e2) {
          return e2.type === "value-word" && e2.value === "}";
        }, isWordNode: function(e2) {
          return ["value-word", "value-atword"].includes(e2.type);
        }, isColonNode: c_, isMediaAndSupportsKeywords: function(e2) {
          return e2.value && ["not", "and", "or"].includes(e2.value.toLowerCase());
        }, isColorAdjusterFuncNode: function(e2) {
          return e2.type === "value-func" && Qj.has(e2.value.toLowerCase());
        }, lastLineHasInlineComment: function(e2) {
          return /\/\//.test(e2.split(/[\n\r]/).pop());
        }, stringifyNode: function e2(t2) {
          if (t2.groups) {
            return (t2.open && t2.open.value ? t2.open.value : "") + t2.groups.reduce((n3, r3, o2) => n3 + e2(r3) + (t2.groups[0].type === "comma_group" && o2 !== t2.groups.length - 1 ? "," : ""), "") + (t2.close && t2.close.value ? t2.close.value : "");
          }
          const n2 = t2.raws && t2.raws.before ? t2.raws.before : "", r2 = t2.raws && t2.raws.quote ? t2.raws.quote : "";
          return n2 + r2 + (t2.type === "atword" ? "@" : "") + (t2.value ? t2.value : "") + r2 + (t2.unit ? t2.unit : "") + (t2.group ? e2(t2.group) : "") + (t2.raws && t2.raws.after ? t2.raws.after : "");
        }, isAtWordPlaceholderNode: function(e2) {
          return e2 && e2.type === "value-atword" && e2.value.startsWith("prettier-placeholder-");
        }, isModuleRuleName: function(e2) {
          return Zj.has(e2);
        }, isConfigurationNode: function(e2, t2) {
          if (!e2.open || e2.open.value !== "(" || !e2.close || e2.close.value !== ")" || e2.groups.some((e3) => e3.type !== "value-comma_group"))
            return false;
          if (t2.type === "value-comma_group") {
            const n2 = t2.groups.indexOf(e2) - 1, r2 = t2.groups[n2];
            if (r2 && r2.type === "value-word" && r2.value === "with")
              return true;
          }
          return false;
        }, isParenGroupNode: function(e2) {
          return e2.type === "value-paren_group" && e2.open && e2.open.value === "(" && e2.close && e2.close.value === ")";
        } };
        const p_ = function(e2, t2) {
          let n2 = 0;
          for (let r2 = 0; r2 < e2.line - 1; ++r2)
            n2 = t2.indexOf("\n", n2) + 1;
          return n2 + e2.column;
        }, { getLast: f_, skipEverythingButNewLine: d_ } = dc;
        function h_(e2, t2) {
          return typeof e2.sourceIndex == "number" ? e2.sourceIndex : e2.source ? p_(e2.source.start, t2) - 1 : null;
        }
        function g_(e2, t2) {
          if (e2.type === "css-comment" && e2.inline)
            return d_(t2, e2.source.startOffset);
          const n2 = e2.nodes && f_(e2.nodes);
          return n2 && e2.source && !e2.source.end && (e2 = n2), e2.source && e2.source.end ? p_(e2.source.end, t2) : null;
        }
        function m_(e2, t2, n2) {
          e2.source && (e2.source.startOffset = h_(e2, n2) + t2, e2.source.endOffset = g_(e2, n2) + t2);
          for (const r2 in e2) {
            const o2 = e2[r2];
            r2 !== "source" && o2 && typeof o2 == "object" && m_(o2, t2, n2);
          }
        }
        function y_(e2) {
          let t2 = e2.source.startOffset;
          return typeof e2.prop == "string" && (t2 += e2.prop.length), e2.type === "css-atrule" && typeof e2.name == "string" && (t2 += 1 + e2.name.length + e2.raws.afterName.match(/^\s*:?\s*/)[0].length), e2.type !== "css-atrule" && e2.raws && typeof e2.raws.between == "string" && (t2 += e2.raws.between.length), t2;
        }
        var D_ = { locStart: function(e2) {
          return e2.source.startOffset;
        }, locEnd: function(e2) {
          return e2.source.endOffset;
        }, calculateLoc: function e2(t2, n2) {
          t2.source && (t2.source.startOffset = h_(t2, n2), t2.source.endOffset = g_(t2, n2));
          for (const r2 in t2) {
            const o2 = t2[r2];
            r2 !== "source" && o2 && typeof o2 == "object" && (o2.type === "value-root" || o2.type === "value-unknown" ? m_(o2, y_(t2), o2.text || o2.value) : e2(o2, n2));
          }
        }, replaceQuotesInInlineComments: function(e2) {
          let t2, n2 = "initial", r2 = "initial", o2 = false;
          const i2 = [];
          for (let u2 = 0; u2 < e2.length; u2++) {
            const s2 = e2[u2];
            switch (n2) {
              case "initial":
                if (s2 === "'") {
                  n2 = "single-quotes";
                  continue;
                }
                if (s2 === '"') {
                  n2 = "double-quotes";
                  continue;
                }
                if ((s2 === "u" || s2 === "U") && e2.slice(u2, u2 + 4).toLowerCase() === "url(") {
                  n2 = "url", u2 += 3;
                  continue;
                }
                if (s2 === "*" && e2[u2 - 1] === "/") {
                  n2 = "comment-block";
                  continue;
                }
                if (s2 === "/" && e2[u2 - 1] === "/") {
                  n2 = "comment-inline", t2 = u2 - 1;
                  continue;
                }
                continue;
              case "single-quotes":
                if (s2 === "'" && e2[u2 - 1] !== "\\" && (n2 = r2, r2 = "initial"), s2 === "\n" || s2 === "\r")
                  return e2;
                continue;
              case "double-quotes":
                if (s2 === '"' && e2[u2 - 1] !== "\\" && (n2 = r2, r2 = "initial"), s2 === "\n" || s2 === "\r")
                  return e2;
                continue;
              case "url":
                if (s2 === ")" && (n2 = "initial"), s2 === "\n" || s2 === "\r")
                  return e2;
                if (s2 === "'") {
                  n2 = "single-quotes", r2 = "url";
                  continue;
                }
                if (s2 === '"') {
                  n2 = "double-quotes", r2 = "url";
                  continue;
                }
                continue;
              case "comment-block":
                s2 === "/" && e2[u2 - 1] === "*" && (n2 = "initial");
                continue;
              case "comment-inline":
                s2 !== '"' && s2 !== "'" && s2 !== "*" || (o2 = true), s2 !== "\n" && s2 !== "\r" || (o2 && i2.push([t2, u2]), n2 = "initial", o2 = false);
                continue;
            }
          }
          for (const [t3, n3] of i2)
            e2 = e2.slice(0, t3) + e2.slice(t3, n3).replace(/["'*]/g, " ") + e2.slice(n3);
          return e2;
        } };
        const E_ = au, { printNumber: C_, printString: b_, hasNewline: v_, isFrontMatterNode: A_, isNextLineEmpty: F_, isNonEmptyArray: x_ } = dc, { builders: { join: S_, line: w_, hardline: T_, softline: B_, group: N_, fill: k_, indent: P_, dedent: O_, ifBreak: I_, breakParent: L_ }, utils: { removeLines: j_, getDocParts: __ } } = Zc, M_ = Rj, R_ = zj, { insertPragma: V_ } = Yj, { getAncestorNode: $_, getPropOfDeclNode: W_, maybeToLowerCase: q_, insideValueFunctionNode: U_, insideICSSRuleNode: z_, insideAtRuleNode: G_, insideURLFunctionInImportAtRuleNode: H_, isKeyframeAtRuleKeywords: J_, isWideKeywords: X_, isSCSS: Y_, isLastNode: K_, isLessParser: Q_, isSCSSControlDirectiveNode: Z_, isDetachedRulesetDeclarationNode: eM, isRelationalOperatorNode: tM, isEqualityOperatorNode: nM, isMultiplicationNode: rM, isDivisionNode: oM, isAdditionNode: iM, isSubtractionNode: uM, isMathOperatorNode: sM, isEachKeywordNode: aM, isForKeywordNode: cM, isURLFunctionNode: lM, isIfElseKeywordNode: pM, hasComposesNode: fM, hasParensAroundNode: dM, hasEmptyRawBefore: hM, isKeyValuePairNode: gM, isKeyInValuePairNode: mM, isDetachedRulesetCallNode: yM, isTemplatePlaceholderNode: DM, isTemplatePropNode: EM, isPostcssSimpleVarNode: CM, isSCSSMapItemNode: bM, isInlineValueCommentNode: vM, isHashNode: AM, isLeftCurlyBraceNode: FM, isRightCurlyBraceNode: xM, isWordNode: SM, isColonNode: wM, isMediaAndSupportsKeywords: TM, isColorAdjusterFuncNode: BM, lastLineHasInlineComment: NM, isAtWordPlaceholderNode: kM, isConfigurationNode: PM, isParenGroupNode: OM } = l_, { locStart: IM, locEnd: LM } = D_;
        function jM(e2) {
          return e2.trailingComma === "es5" || e2.trailingComma === "all";
        }
        function _M(e2, t2, n2) {
          const r2 = [];
          return e2.each((e3, o2, i2) => {
            const u2 = i2[o2 - 1];
            if (u2 && u2.type === "css-comment" && u2.text.trim() === "prettier-ignore") {
              const n3 = e3.getValue();
              r2.push(t2.originalText.slice(IM(n3), LM(n3)));
            } else
              r2.push(n2());
            o2 !== i2.length - 1 && (i2[o2 + 1].type === "css-comment" && !v_(t2.originalText, IM(i2[o2 + 1]), { backwards: true }) && !A_(i2[o2]) || i2[o2 + 1].type === "css-atrule" && i2[o2 + 1].name === "else" && i2[o2].type !== "css-comment" ? r2.push(" ") : (r2.push(t2.__isHTMLStyleAttribute ? w_ : T_), F_(t2.originalText, e3.getValue(), LM) && !A_(i2[o2]) && r2.push(T_)));
          }, "nodes"), r2;
        }
        const MM = /(["'])(?:(?!\1)[^\\]|\\.)*\1/gs, RM = new RegExp(MM.source + "|" + "(".concat(/[$@]?[A-Z_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/g.source, ")?") + "(".concat(/(?:\d*\.\d+|\d+\.?)(?:[Ee][+-]?\d+)?/g.source, ")") + "(".concat(/[A-Za-z]+/g.source, ")?"), "g");
        function VM(e2, t2) {
          return e2.replace(MM, (e3) => b_(e3, t2));
        }
        function $M(e2, t2) {
          const n2 = t2.singleQuote ? "'" : '"';
          return e2.includes('"') || e2.includes("'") ? e2 : n2 + e2 + n2;
        }
        function WM(e2) {
          return e2.replace(RM, (e3, t2, n2, r2, o2) => !n2 && r2 ? qM(r2) + q_(o2 || "") : e3);
        }
        function qM(e2) {
          return C_(e2).replace(/\.0(?=$|e)/, "");
        }
        var UM = { print: function(e2, t2, n2) {
          const r2 = e2.getValue();
          if (!r2)
            return "";
          if (typeof r2 == "string")
            return r2;
          switch (r2.type) {
            case "front-matter":
              return [r2.raw, T_];
            case "css-root": {
              const o2 = _M(e2, t2, n2), i2 = r2.raws.after.trim();
              return [o2, i2 ? " ".concat(i2) : "", __(o2).length > 0 ? T_ : ""];
            }
            case "css-comment": {
              const e3 = r2.inline || r2.raws.inline, n3 = t2.originalText.slice(IM(r2), LM(r2));
              return e3 ? n3.trimEnd() : n3;
            }
            case "css-rule":
              return [n2("selector"), r2.important ? " !important" : "", r2.nodes ? [r2.selector && r2.selector.type === "selector-unknown" && NM(r2.selector.value) ? w_ : " ", "{", r2.nodes.length > 0 ? P_([T_, _M(e2, t2, n2)]) : "", T_, "}", eM(r2) ? ";" : ""] : ";"];
            case "css-decl": {
              const o2 = e2.getParentNode(), { between: i2 } = r2.raws, u2 = i2.trim(), s2 = u2 === ":";
              let a2 = fM(r2) ? j_(n2("value")) : n2("value");
              return !s2 && NM(u2) && (a2 = P_([T_, O_(a2)])), [r2.raws.before.replace(/[\s;]/g, ""), z_(e2) ? r2.prop : q_(r2.prop), u2.startsWith("//") ? " " : "", u2, r2.extend ? "" : " ", Q_(t2) && r2.extend && r2.selector ? ["extend(", n2("selector"), ")"] : "", a2, r2.raws.important ? r2.raws.important.replace(/\s*!\s*important/i, " !important") : r2.important ? " !important" : "", r2.raws.scssDefault ? r2.raws.scssDefault.replace(/\s*!default/i, " !default") : r2.scssDefault ? " !default" : "", r2.raws.scssGlobal ? r2.raws.scssGlobal.replace(/\s*!global/i, " !global") : r2.scssGlobal ? " !global" : "", r2.nodes ? [" {", P_([B_, _M(e2, t2, n2)]), B_, "}"] : EM(r2) && !o2.raws.semicolon && t2.originalText[LM(r2) - 1] !== ";" ? "" : t2.__isHTMLStyleAttribute && K_(e2, r2) ? I_(";") : ";"];
            }
            case "css-atrule": {
              const o2 = e2.getParentNode(), i2 = DM(r2) && !o2.raws.semicolon && t2.originalText[LM(r2) - 1] !== ";";
              if (Q_(t2)) {
                if (r2.mixin)
                  return [n2("selector"), r2.important ? " !important" : "", i2 ? "" : ";"];
                if (r2.function)
                  return [r2.name, n2("params"), i2 ? "" : ";"];
                if (r2.variable)
                  return ["@", r2.name, ": ", r2.value ? n2("value") : "", r2.raws.between.trim() ? r2.raws.between.trim() + " " : "", r2.nodes ? ["{", P_([r2.nodes.length > 0 ? B_ : "", _M(e2, t2, n2)]), B_, "}"] : "", i2 ? "" : ";"];
              }
              return ["@", yM(r2) || r2.name.endsWith(":") ? r2.name : q_(r2.name), r2.params ? [yM(r2) ? "" : DM(r2) ? r2.raws.afterName === "" ? "" : r2.name.endsWith(":") ? " " : /^\s*\n\s*\n/.test(r2.raws.afterName) ? [T_, T_] : /^\s*\n/.test(r2.raws.afterName) ? T_ : " " : " ", n2("params")] : "", r2.selector ? P_([" ", n2("selector")]) : "", r2.value ? N_([" ", n2("value"), Z_(r2) ? dM(r2) ? " " : w_ : ""]) : r2.name === "else" ? " " : "", r2.nodes ? [Z_(r2) ? "" : r2.selector && !r2.selector.nodes && typeof r2.selector.value == "string" && NM(r2.selector.value) || !r2.selector && typeof r2.params == "string" && NM(r2.params) ? w_ : " ", "{", P_([r2.nodes.length > 0 ? B_ : "", _M(e2, t2, n2)]), B_, "}"] : i2 ? "" : ";"];
            }
            case "media-query-list": {
              const t3 = [];
              return e2.each((e3) => {
                const r3 = e3.getValue();
                r3.type === "media-query" && r3.value === "" || t3.push(n2());
              }, "nodes"), N_(P_(S_(w_, t3)));
            }
            case "media-query":
              return [S_(" ", e2.map(n2, "nodes")), K_(e2, r2) ? "" : ","];
            case "media-type":
            case "media-value":
              return WM(VM(r2.value, t2));
            case "media-feature-expression":
              return r2.nodes ? ["(", ...e2.map(n2, "nodes"), ")"] : r2.value;
            case "media-feature":
              return q_(VM(r2.value.replace(/ +/g, " "), t2));
            case "media-colon":
            case "value-comma":
              return [r2.value, " "];
            case "media-keyword":
            case "selector-string":
              return VM(r2.value, t2);
            case "media-url":
              return VM(r2.value.replace(/^url\(\s+/gi, "url(").replace(/\s+\)$/g, ")"), t2);
            case "media-unknown":
            case "selector-comment":
            case "selector-nesting":
            case "value-paren":
            case "value-operator":
            case "value-unicode-range":
            case "value-unknown":
              return r2.value;
            case "selector-root":
              return N_([G_(e2, "custom-selector") ? [$_(e2, "css-atrule").customSelector, w_] : "", S_([",", G_(e2, ["extend", "custom-selector", "nest"]) ? w_ : T_], e2.map(n2, "nodes"))]);
            case "selector-selector":
              return N_(P_(e2.map(n2, "nodes")));
            case "selector-tag": {
              const t3 = e2.getParentNode(), n3 = t3 && t3.nodes.indexOf(r2), o2 = n3 && t3.nodes[n3 - 1];
              return [r2.namespace ? [r2.namespace === true ? "" : r2.namespace.trim(), "|"] : "", o2.type === "selector-nesting" ? r2.value : WM(J_(e2, r2.value) ? r2.value.toLowerCase() : r2.value)];
            }
            case "selector-id":
              return ["#", r2.value];
            case "selector-class":
              return [".", WM(VM(r2.value, t2))];
            case "selector-attribute":
              return ["[", r2.namespace ? [r2.namespace === true ? "" : r2.namespace.trim(), "|"] : "", r2.attribute.trim(), r2.operator ? r2.operator : "", r2.value ? $M(VM(r2.value.trim(), t2), t2) : "", r2.insensitive ? " i" : "", "]"];
            case "selector-combinator":
              if (r2.value === "+" || r2.value === ">" || r2.value === "~" || r2.value === ">>>") {
                const t3 = e2.getParentNode();
                return [t3.type === "selector-selector" && t3.nodes[0] === r2 ? "" : w_, r2.value, K_(e2, r2) ? "" : " "];
              }
              return [r2.value.trim().startsWith("(") ? w_ : "", WM(VM(r2.value.trim(), t2)) || w_];
            case "selector-universal":
              return [r2.namespace ? [r2.namespace === true ? "" : r2.namespace.trim(), "|"] : "", r2.value];
            case "selector-pseudo":
              return [q_(r2.value), x_(r2.nodes) ? ["(", S_(", ", e2.map(n2, "nodes")), ")"] : ""];
            case "selector-unknown": {
              const n3 = $_(e2, "css-rule");
              if (n3 && n3.isSCSSNesterProperty)
                return WM(VM(q_(r2.value), t2));
              const o2 = e2.getParentNode();
              if (o2.raws && o2.raws.selector) {
                const e3 = IM(o2), n4 = e3 + o2.raws.selector.length;
                return t2.originalText.slice(e3, n4).trim();
              }
              const i2 = e2.getParentNode(1);
              if (o2.type === "value-paren_group" && i2 && i2.type === "value-func" && i2.value === "selector") {
                const e3 = IM(o2.open) + 1, n4 = LM(o2.close) - 1, r3 = t2.originalText.slice(e3, n4).trim();
                return NM(r3) ? [L_, r3] : r3;
              }
              return r2.value;
            }
            case "value-value":
            case "value-root":
              return n2("group");
            case "value-comment":
              return t2.originalText.slice(IM(r2), LM(r2));
            case "value-comma_group": {
              const t3 = e2.getParentNode(), o2 = e2.getParentNode(1), i2 = W_(e2), u2 = i2 && t3.type === "value-value" && (i2 === "grid" || i2.startsWith("grid-template")), s2 = $_(e2, "css-atrule"), a2 = s2 && Z_(s2), c2 = r2.groups.some((e3) => vM(e3)), l3 = e2.map(n2, "groups"), p2 = [], f2 = U_(e2, "url");
              let d2 = false, h2 = false;
              for (let n3 = 0; n3 < r2.groups.length; ++n3) {
                p2.push(l3[n3]);
                const i3 = r2.groups[n3 - 1], c3 = r2.groups[n3], g2 = r2.groups[n3 + 1], m2 = r2.groups[n3 + 2];
                if (f2) {
                  (g2 && iM(g2) || iM(c3)) && p2.push(" ");
                  continue;
                }
                if (G_(e2, "forward") && c3.type === "value-word" && c3.value && i3 !== void 0 && i3.type === "value-word" && i3.value === "as" && g2.type === "value-operator" && g2.value === "*")
                  continue;
                if (!g2)
                  continue;
                if (c3.type === "value-word" && c3.value.endsWith("-") && kM(g2))
                  continue;
                const y2 = c3.type === "value-string" && c3.value.startsWith("#{"), D2 = d2 && g2.type === "value-string" && g2.value.endsWith("}");
                if (y2 || D2) {
                  d2 = !d2;
                  continue;
                }
                if (d2)
                  continue;
                if (wM(c3) || wM(g2))
                  continue;
                if (c3.type === "value-atword" && c3.value === "")
                  continue;
                if (c3.value === "~")
                  continue;
                if (c3.value && c3.value.includes("\\") && g2 && g2.type !== "value-comment")
                  continue;
                if (i3 && i3.value && i3.value.indexOf("\\") === i3.value.length - 1 && c3.type === "value-operator" && c3.value === "/")
                  continue;
                if (c3.value === "\\")
                  continue;
                if (CM(c3, g2))
                  continue;
                if (AM(c3) || FM(c3) || xM(g2) || FM(g2) && hM(g2) || xM(c3) && hM(g2))
                  continue;
                if (c3.value === "--" && AM(g2))
                  continue;
                const E2 = sM(c3), C2 = sM(g2);
                if ((E2 && AM(g2) || C2 && xM(c3)) && hM(g2))
                  continue;
                if (!i3 && oM(c3))
                  continue;
                if (U_(e2, "calc") && (iM(c3) || iM(g2) || uM(c3) || uM(g2)) && hM(g2))
                  continue;
                const b2 = (iM(c3) || uM(c3)) && n3 === 0 && (g2.type === "value-number" || g2.isHex) && o2 && BM(o2) && !hM(g2), v2 = m2 && m2.type === "value-func" || m2 && SM(m2) || c3.type === "value-func" || SM(c3), A2 = g2.type === "value-func" || SM(g2) || i3 && i3.type === "value-func" || i3 && SM(i3);
                if (rM(g2) || rM(c3) || U_(e2, "calc") || b2 || !(oM(g2) && !v2 || oM(c3) && !A2 || iM(g2) && !v2 || iM(c3) && !A2 || uM(g2) || uM(c3)) || !(hM(g2) || E2 && (!i3 || i3 && sM(i3))))
                  if (vM(c3)) {
                    if (t3.type === "value-paren_group") {
                      p2.push(O_(T_));
                      continue;
                    }
                    p2.push(T_);
                  } else
                    a2 && (nM(g2) || tM(g2) || pM(g2) || aM(c3) || cM(c3)) || s2 && s2.name.toLowerCase() === "namespace" ? p2.push(" ") : u2 ? c3.source && g2.source && c3.source.start.line !== g2.source.start.line ? (p2.push(T_), h2 = true) : p2.push(" ") : C2 ? p2.push(" ") : g2 && g2.value === "..." || kM(c3) && kM(g2) && LM(c3) === IM(g2) || (kM(c3) && OM(g2) && LM(c3) === IM(g2.open) ? p2.push(B_) : c3.value === "with" && OM(g2) ? p2.push(" ") : p2.push(w_));
              }
              return c2 && p2.push(L_), h2 && p2.unshift(T_), a2 ? N_(P_(p2)) : H_(e2) ? N_(k_(p2)) : N_(P_(k_(p2)));
            }
            case "value-paren_group": {
              const o2 = e2.getParentNode();
              if (o2 && lM(o2) && (r2.groups.length === 1 || r2.groups.length > 0 && r2.groups[0].type === "value-comma_group" && r2.groups[0].groups.length > 0 && r2.groups[0].groups[0].type === "value-word" && r2.groups[0].groups[0].value.startsWith("data:")))
                return [r2.open ? n2("open") : "", S_(",", e2.map(n2, "groups")), r2.close ? n2("close") : ""];
              if (!r2.open) {
                const t3 = e2.map(n2, "groups"), r3 = [];
                for (let e3 = 0; e3 < t3.length; e3++)
                  e3 !== 0 && r3.push([",", w_]), r3.push(t3[e3]);
                return N_(P_(k_(r3)));
              }
              const i2 = bM(e2), u2 = E_(r2.groups), s2 = u2 && u2.type === "value-comment", a2 = mM(r2, o2), c2 = PM(r2, o2), l3 = c2 || i2 && !a2, p2 = c2 || a2, f2 = N_([r2.open ? n2("open") : "", P_([B_, S_([",", w_], e2.map((e3) => {
                const t3 = e3.getValue(), r3 = n2();
                if (gM(t3) && t3.type === "value-comma_group" && t3.groups && t3.groups[0].type !== "value-paren_group" && t3.groups[2] && t3.groups[2].type === "value-paren_group") {
                  const e4 = __(r3.contents.contents);
                  return e4[1] = N_(e4[1]), N_(O_(r3));
                }
                return r3;
              }, "groups"))]), I_(!s2 && Y_(t2.parser, t2.originalText) && i2 && jM(t2) ? "," : ""), B_, r2.close ? n2("close") : ""], { shouldBreak: l3 });
              return p2 ? O_(f2) : f2;
            }
            case "value-func":
              return [r2.value, G_(e2, "supports") && TM(r2) ? " " : "", n2("group")];
            case "value-number":
              return [qM(r2.value), q_(r2.unit)];
            case "value-word":
              return r2.isColor && r2.isHex || X_(r2.value) ? r2.value.toLowerCase() : r2.value;
            case "value-colon": {
              const t3 = e2.getParentNode(), n3 = t3 && t3.groups.indexOf(r2), o2 = n3 && t3.groups[n3 - 1];
              return [r2.value, o2 && typeof o2.value == "string" && E_(o2.value) === "\\" || U_(e2, "url") ? "" : w_];
            }
            case "value-string":
              return b_(r2.raws.quote + r2.value + r2.raws.quote, t2);
            case "value-atword":
              return ["@", r2.value];
            default:
              throw new Error("Unknown postcss type ".concat(JSON.stringify(r2.type)));
          }
        }, embed: R_, insertPragma: V_, massageAstNode: M_ };
        var zM = { name: "PostCSS", type: "markup", tmScope: "source.postcss", group: "CSS", extensions: [".pcss", ".postcss"], aceMode: "text", languageId: 262764437 }, GM = { name: "Less", type: "markup", color: "#1d365d", extensions: [".less"], tmScope: "source.css.less", aceMode: "less", codemirrorMode: "css", codemirrorMimeType: "text/css", languageId: 198 }, HM = { name: "SCSS", type: "markup", color: "#c6538c", tmScope: "source.css.scss", aceMode: "scss", codemirrorMode: "css", codemirrorMimeType: "text/x-scss", extensions: [".scss"], languageId: 329 };
        const JM = bE, XM = UM, YM = { singleQuote: bj.singleQuote }, KM = [JM({ name: "CSS", type: "markup", tmScope: "source.css", aceMode: "css", codemirrorMode: "css", codemirrorMimeType: "text/css", color: "#563d7c", extensions: [".css"], languageId: 50 }, (e2) => ({ since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["css"], extensions: [...e2.extensions, ".wxss"] })), JM(zM, () => ({ since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["postcss"] })), JM(GM, () => ({ since: "1.4.0", parsers: ["less"], vscodeLanguageIds: ["less"] })), JM(HM, () => ({ since: "1.4.0", parsers: ["scss"], vscodeLanguageIds: ["scss"] }))];
        var QM = { languages: KM, options: YM, printers: { postcss: XM }, parsers: void 0 };
        var ZM = { locStart: function(e2) {
          return e2.loc.start.offset;
        }, locEnd: function(e2) {
          return e2.loc.end.offset;
        } };
        function eR(e2, t2) {
          if (e2.type === "TextNode") {
            const n2 = e2.chars.trim();
            if (!n2)
              return null;
            t2.chars = n2.replace(/[\t\n\f\r ]+/g, " ");
          }
          e2.type === "AttrNode" && e2.name.toLowerCase() === "class" && delete t2.value;
        }
        eR.ignoredProperties = /* @__PURE__ */ new Set(["loc", "selfClosing"]);
        var tR = eR;
        const nR = au;
        const rR = /* @__PURE__ */ new Set(["area", "base", "basefont", "bgsound", "br", "col", "command", "embed", "frame", "hr", "image", "img", "input", "isindex", "keygen", "link", "menuitem", "meta", "nextid", "param", "source", "track", "wbr"]);
        function oR(e2) {
          return iR(e2, ["TextNode"]) && !/\S/.test(e2.chars);
        }
        function iR(e2, t2) {
          return e2 && t2.includes(e2.type);
        }
        function uR(e2, t2) {
          return iR(e2.getParentNode(0), t2);
        }
        function sR(e2, t2) {
          const n2 = e2.getValue(), r2 = e2.getParentNode(0) || {}, o2 = r2.children || r2.body || r2.parts || [], i2 = o2.indexOf(n2);
          return i2 !== -1 && o2[i2 + t2];
        }
        function aR(e2) {
          let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          return sR(e2, -t2);
        }
        function cR(e2) {
          return sR(e2, 1);
        }
        function lR(e2) {
          return iR(e2, ["MustacheCommentStatement"]) && typeof e2.value == "string" && e2.value.trim() === "prettier-ignore";
        }
        var pR = { getNextNode: cR, getPreviousNode: aR, hasPrettierIgnore: function(e2) {
          const t2 = e2.getValue(), n2 = aR(e2, 2);
          return lR(t2) || lR(n2);
        }, isLastNodeOfSiblings: function(e2) {
          const t2 = e2.getValue(), n2 = e2.getParentNode(0);
          return !(!uR(e2, ["ElementNode"]) || nR(n2.children) !== t2) || !(!uR(e2, ["Block"]) || nR(n2.body) !== t2);
        }, isNextNodeOfSomeType: function(e2, t2) {
          return iR(cR(e2), t2);
        }, isNodeOfSomeType: iR, isParentOfSomeType: uR, isPreviousNodeOfSomeType: function(e2, t2) {
          return iR(aR(e2), t2);
        }, isVoid: function(e2) {
          return function(e3) {
            return iR(e3, ["ElementNode"]) && typeof e3.tag == "string" && e3.tag[0] !== ":" && (function(e4) {
              return e4.toUpperCase() === e4;
            }(e3.tag[0]) || e3.tag.includes("."));
          }(e2) && e2.children.every((e3) => oR(e3)) || rR.has(e2.tag);
        }, isWhitespaceNode: oR };
        const { builders: { dedent: fR, fill: dR, group: hR, hardline: gR, ifBreak: mR, indent: yR, join: DR, line: ER, softline: CR }, utils: { getDocParts: bR, replaceTextEndOfLine: vR } } = Zc, { getPreferredQuote: AR, isNonEmptyArray: FR } = dc, { locStart: xR, locEnd: SR } = ZM, wR = tR, { getNextNode: TR, getPreviousNode: BR, hasPrettierIgnore: NR, isLastNodeOfSiblings: kR, isNextNodeOfSomeType: PR, isNodeOfSomeType: OR, isParentOfSomeType: IR, isPreviousNodeOfSomeType: LR, isVoid: jR, isWhitespaceNode: _R } = pR;
        function MR(e2, t2) {
          return xR(e2) - xR(t2);
        }
        function RR(e2, t2, n2) {
          const r2 = e2.getValue().children.every((e3) => _R(e3));
          return t2.htmlWhitespaceSensitivity === "ignore" && r2 ? "" : e2.map((e3, r3) => {
            const o2 = n2();
            return r3 === 0 && t2.htmlWhitespaceSensitivity === "ignore" ? [CR, o2] : o2;
          }, "children");
        }
        function VR(e2) {
          return jR(e2) ? mR([CR, "/>"], [" />", CR]) : mR([CR, ">"], ">");
        }
        function $R(e2) {
          return [e2.escaped === false ? "{{{" : "{{", e2.strip && e2.strip.open ? "~" : ""];
        }
        function WR(e2) {
          const t2 = e2.escaped === false ? "}}}" : "}}";
          return [e2.strip && e2.strip.close ? "~" : "", t2];
        }
        function qR(e2) {
          return [$R(e2), e2.closeStrip.open ? "~" : "", "/"];
        }
        function UR(e2) {
          const t2 = WR(e2);
          return [e2.closeStrip.close ? "~" : "", t2];
        }
        function zR(e2) {
          return [$R(e2), e2.inverseStrip.open ? "~" : ""];
        }
        function GR(e2) {
          const t2 = WR(e2);
          return [e2.inverseStrip.close ? "~" : "", t2];
        }
        function HR(e2, t2) {
          const n2 = e2.getValue(), r2 = function(e3) {
            return [$R(e3), e3.openStrip.open ? "~" : "", "#"];
          }(n2), o2 = function(e3) {
            const t3 = WR(e3);
            return [e3.openStrip.close ? "~" : "", t3];
          }(n2), i2 = [sV(e2, t2)], u2 = aV(e2, t2);
          if (u2 && i2.push(ER, u2), FR(n2.program.blockParams)) {
            const e3 = cV(n2.program);
            i2.push(ER, e3);
          }
          return hR([r2, yR(i2), CR, o2]);
        }
        function JR(e2, t2) {
          return [t2.htmlWhitespaceSensitivity === "ignore" ? gR : "", zR(e2), "else", GR(e2)];
        }
        function XR(e2, t2) {
          const n2 = e2.getParentNode(1);
          return [zR(n2), "else if ", aV(e2, t2), GR(n2)];
        }
        function YR(e2, t2, n2) {
          const r2 = e2.getValue();
          if (n2.htmlWhitespaceSensitivity === "ignore") {
            return [KR(r2) ? CR : gR, qR(r2), t2("path"), UR(r2)];
          }
          return [qR(r2), t2("path"), UR(r2)];
        }
        function KR(e2) {
          return OR(e2, ["BlockStatement"]) && e2.program.body.every((e3) => _R(e3));
        }
        function QR(e2) {
          return OR(e2, ["BlockStatement"]) && e2.inverse;
        }
        function ZR(e2, t2, n2) {
          if (KR(e2.getValue()))
            return "";
          const r2 = t2("program");
          return n2.htmlWhitespaceSensitivity === "ignore" ? yR([gR, r2]) : yR(r2);
        }
        function eV(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = t2("inverse"), i2 = n2.htmlWhitespaceSensitivity === "ignore" ? [gR, o2] : o2;
          return function(e3) {
            return QR(e3) && e3.inverse.body.length === 1 && OR(e3.inverse.body[0], ["BlockStatement"]) && e3.inverse.body[0].path.parts[0] === "if";
          }(r2) ? i2 : QR(r2) ? [JR(r2, n2), yR(i2)] : "";
        }
        function tV(e2) {
          return bR(DR(ER, function(e3) {
            return e3.split(/[\t\n\f\r ]+/);
          }(e2)));
        }
        function nV(e2) {
          return (e2 = typeof e2 == "string" ? e2 : "").split("\n").length - 1;
        }
        function rV() {
          let e2 = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          return Array.from({ length: Math.min(e2, 2) }).fill(gR);
        }
        function oV(e2, t2) {
          const { quote: n2, regex: r2 } = AR(e2, t2);
          return [n2, e2.replace(r2, "\\".concat(n2)), n2];
        }
        function iV(e2, t2) {
          const n2 = sV(e2, t2), r2 = aV(e2, t2);
          return r2 ? yR([n2, ER, hR(r2)]) : n2;
        }
        function uV(e2, t2) {
          const n2 = sV(e2, t2), r2 = aV(e2, t2);
          return r2 ? [yR([n2, ER, r2]), CR] : n2;
        }
        function sV(e2, t2) {
          return t2("path");
        }
        function aV(e2, t2) {
          const n2 = e2.getValue(), r2 = [];
          if (n2.params.length > 0) {
            const n3 = e2.map(t2, "params");
            r2.push(...n3);
          }
          if (n2.hash && n2.hash.pairs.length > 0) {
            const e3 = t2("hash");
            r2.push(e3);
          }
          return r2.length === 0 ? "" : DR(ER, r2);
        }
        function cV(e2) {
          return ["as |", e2.blockParams.join(" "), "|"];
        }
        var lV = { print: function(e2, t2, n2) {
          const r2 = e2.getValue();
          if (!r2)
            return "";
          if (NR(e2))
            return t2.originalText.slice(xR(r2), SR(r2));
          const o2 = t2.singleQuote ? "'" : '"';
          switch (r2.type) {
            case "Block":
            case "Program":
            case "Template":
              return hR(e2.map(n2, "body"));
            case "ElementNode": {
              const o3 = hR(function(e3, t3) {
                const n3 = e3.getValue(), r3 = ["attributes", "modifiers", "comments"].filter((e4) => FR(n3[e4])), o4 = r3.flatMap((e4) => n3[e4]).sort(MR);
                for (const n4 of r3)
                  e3.each((e4) => {
                    const n5 = o4.indexOf(e4.getValue());
                    o4.splice(n5, 1, [ER, t3()]);
                  }, n4);
                FR(n3.blockParams) && o4.push(ER, cV(n3));
                return ["<", n3.tag, yR(o4), VR(n3)];
              }(e2, n2)), i2 = t2.htmlWhitespaceSensitivity === "ignore" && PR(e2, ["ElementNode"]) ? CR : "";
              if (jR(r2))
                return [o3, i2];
              const u2 = ["</", r2.tag, ">"];
              return r2.children.length === 0 ? [o3, yR(u2), i2] : t2.htmlWhitespaceSensitivity === "ignore" ? [o3, yR(RR(e2, t2, n2)), gR, yR(u2), i2] : [o3, yR(hR(RR(e2, t2, n2))), yR(u2), i2];
            }
            case "BlockStatement": {
              const o3 = e2.getParentNode(1);
              return o3 && o3.inverse && o3.inverse.body.length === 1 && o3.inverse.body[0] === r2 && o3.inverse.body[0].path.parts[0] === "if" ? [XR(e2, n2), ZR(e2, n2, t2), eV(e2, n2, t2)] : [HR(e2, n2), hR([ZR(e2, n2, t2), eV(e2, n2, t2), YR(e2, n2, t2)])];
            }
            case "ElementModifierStatement":
              return hR(["{{", uV(e2, n2), "}}"]);
            case "MustacheStatement":
              return hR([$R(r2), uV(e2, n2), WR(r2)]);
            case "SubExpression":
              return hR(["(", iV(e2, n2), CR, ")"]);
            case "AttrNode": {
              const e3 = r2.value.type === "TextNode";
              if (e3 && r2.value.chars === "" && xR(r2.value) === SR(r2.value))
                return r2.name;
              const t3 = e3 ? AR(r2.value.chars, o2).quote : r2.value.type === "ConcatStatement" ? AR(r2.value.parts.filter((e4) => e4.type === "TextNode").map((e4) => e4.chars).join(""), o2).quote : "", i2 = n2("value");
              return [r2.name, "=", t3, r2.name === "class" && t3 ? hR(yR(i2)) : i2, t3];
            }
            case "ConcatStatement":
              return e2.map(n2, "parts");
            case "Hash":
              return DR(ER, e2.map(n2, "pairs"));
            case "HashPair":
              return [r2.key, "=", n2("value")];
            case "TextNode": {
              let n3 = r2.chars.replace(/{{/g, "\\{{");
              const o3 = function(e3) {
                for (let t3 = 0; t3 < 2; t3++) {
                  const n4 = e3.getParentNode(t3);
                  if (n4 && n4.type === "AttrNode")
                    return n4.name.toLowerCase();
                }
              }(e2);
              if (o3) {
                if (o3 === "class") {
                  const t3 = n3.trim().split(/\s+/).join(" ");
                  let r3 = false, o4 = false;
                  return IR(e2, ["ConcatStatement"]) && (LR(e2, ["MustacheStatement"]) && /^\s/.test(n3) && (r3 = true), PR(e2, ["MustacheStatement"]) && /\s$/.test(n3) && t3 !== "" && (o4 = true)), [r3 ? ER : "", t3, o4 ? ER : ""];
                }
                return vR(n3);
              }
              const i2 = /^[\t\n\f\r ]*$/.test(n3), u2 = !BR(e2), s2 = !TR(e2);
              if (t2.htmlWhitespaceSensitivity !== "ignore") {
                const t3 = /^[\t\n\f\r ]*/, r3 = /[\t\n\f\r ]*$/, o4 = s2 && IR(e2, ["Template"]), a3 = u2 && IR(e2, ["Template"]);
                if (i2) {
                  if (a3 || o4)
                    return "";
                  let t4 = [ER];
                  const r4 = nV(n3);
                  return r4 && (t4 = rV(r4)), kR(e2) && (t4 = t4.map((e3) => fR(e3))), t4;
                }
                const [c3] = n3.match(t3), [l4] = n3.match(r3);
                let p3 = [];
                if (c3) {
                  p3 = [ER];
                  const e3 = nV(c3);
                  e3 && (p3 = rV(e3)), n3 = n3.replace(t3, "");
                }
                let f3 = [];
                if (l4) {
                  if (!o4) {
                    f3 = [ER];
                    const t4 = nV(l4);
                    t4 && (f3 = rV(t4)), kR(e2) && (f3 = f3.map((e3) => fR(e3)));
                  }
                  n3 = n3.replace(r3, "");
                }
                return [...p3, dR(tV(n3)), ...f3];
              }
              const a2 = nV(n3);
              let c2 = function(e3) {
                return nV(((e3 = typeof e3 == "string" ? e3 : "").match(/^([^\S\n\r]*[\n\r])+/g) || [])[0] || "");
              }(n3), l3 = function(e3) {
                return nV(((e3 = typeof e3 == "string" ? e3 : "").match(/([\n\r][^\S\n\r]*)+$/g) || [])[0] || "");
              }(n3);
              if ((u2 || s2) && i2 && IR(e2, ["Block", "ElementNode", "Template"]))
                return "";
              i2 && a2 ? (c2 = Math.min(a2, 2), l3 = 0) : (PR(e2, ["BlockStatement", "ElementNode"]) && (l3 = Math.max(l3, 1)), LR(e2, ["BlockStatement", "ElementNode"]) && (c2 = Math.max(c2, 1)));
              let p2 = "", f2 = "";
              return l3 === 0 && PR(e2, ["MustacheStatement"]) && (f2 = " "), c2 === 0 && LR(e2, ["MustacheStatement"]) && (p2 = " "), u2 && (c2 = 0, p2 = ""), s2 && (l3 = 0, f2 = ""), n3 = n3.replace(/^[\t\n\f\r ]+/g, p2).replace(/[\t\n\f\r ]+$/, f2), [...rV(c2), dR(tV(n3)), ...rV(l3)];
            }
            case "MustacheCommentStatement": {
              const e3 = xR(r2), n3 = SR(r2), o3 = t2.originalText.charAt(e3 + 2) === "~", i2 = t2.originalText.charAt(n3 - 3) === "~", u2 = r2.value.includes("}}") ? "--" : "";
              return ["{{", o3 ? "~" : "", "!", u2, r2.value, u2, i2 ? "~" : "", "}}"];
            }
            case "PathExpression":
              return r2.original;
            case "BooleanLiteral":
            case "NumberLiteral":
              return String(r2.value);
            case "CommentStatement":
              return ["<!--", r2.value, "-->"];
            case "StringLiteral":
              if (function(e3) {
                let t3 = 0, n3 = e3.getParentNode(t3);
                for (; n3 && OR(n3, ["SubExpression"]); )
                  t3++, n3 = e3.getParentNode(t3);
                if (n3 && OR(e3.getParentNode(t3 + 1), ["ConcatStatement"]) && OR(e3.getParentNode(t3 + 2), ["AttrNode"]))
                  return true;
                return false;
              }(e2)) {
                const e3 = t2.singleQuote ? '"' : "'";
                return oV(r2.value, e3);
              }
              return oV(r2.value, o2);
            case "UndefinedLiteral":
              return "undefined";
            case "NullLiteral":
              return "null";
            default:
              throw new Error("unknown glimmer type: " + JSON.stringify(r2.type));
          }
        }, massageAstNode: wR };
        const pV = lV;
        var fV = { languages: [bE({ name: "Handlebars", type: "markup", color: "#f7931e", aliases: ["hbs", "htmlbars"], extensions: [".handlebars", ".hbs"], tmScope: "text.html.handlebars", aceMode: "handlebars", languageId: 155 }, () => ({ since: "2.3.0", parsers: ["glimmer"], vscodeLanguageIds: ["handlebars"] }))], printers: { glimmer: pV }, parsers: void 0 };
        var dV = { hasPragma: function(e2) {
          return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/.test(e2);
        }, insertPragma: function(e2) {
          return "# @format\n\n" + e2;
        } };
        var hV = { locStart: function(e2) {
          return typeof e2.start == "number" ? e2.start : e2.loc && e2.loc.start;
        }, locEnd: function(e2) {
          return typeof e2.end == "number" ? e2.end : e2.loc && e2.loc.end;
        } };
        const { builders: { join: gV, hardline: mV, line: yV, softline: DV, group: EV, indent: CV, ifBreak: bV } } = Zc, { isNextLineEmpty: vV, isNonEmptyArray: AV } = dc, { insertPragma: FV } = dV, { locStart: xV, locEnd: SV } = hV;
        function wV(e2, t2, n2) {
          if (n2.directives.length === 0)
            return "";
          const r2 = gV(yV, e2.map(t2, "directives"));
          return n2.kind === "FragmentDefinition" || n2.kind === "OperationDefinition" ? EV([yV, r2]) : [" ", EV(CV([DV, r2]))];
        }
        function TV(e2, t2, n2) {
          const r2 = e2.getValue().length;
          return e2.map((e3, o2) => {
            const i2 = n2();
            return vV(t2.originalText, e3.getValue(), SV) && o2 < r2 - 1 ? [i2, mV] : i2;
          });
        }
        function BV(e2, t2, n2) {
          const r2 = e2.getNode(), o2 = [], { interfaces: i2 } = r2, u2 = e2.map((e3) => n2(e3), "interfaces");
          for (let e3 = 0; e3 < i2.length; e3++) {
            const n3 = i2[e3];
            o2.push(u2[e3]);
            const r3 = i2[e3 + 1];
            if (r3) {
              const e4 = t2.originalText.slice(n3.loc.end, r3.loc.start), i3 = e4.includes("#"), u3 = e4.replace(/#.*/g, "").trim();
              o2.push(u3 === "," ? "," : " &", i3 ? yV : " ");
            }
          }
          return o2;
        }
        function NV() {
        }
        NV.ignoredProperties = /* @__PURE__ */ new Set(["loc", "comments"]);
        var kV = { print: function(e2, t2, n2) {
          const r2 = e2.getValue();
          if (!r2)
            return "";
          if (typeof r2 == "string")
            return r2;
          switch (r2.kind) {
            case "Document": {
              const r3 = [];
              return e2.each((e3, o2, i2) => {
                r3.push(n2()), o2 !== i2.length - 1 && (r3.push(mV), vV(t2.originalText, e3.getValue(), SV) && r3.push(mV));
              }, "definitions"), [...r3, mV];
            }
            case "OperationDefinition": {
              const o2 = t2.originalText[xV(r2)] !== "{", i2 = Boolean(r2.name);
              return [o2 ? r2.operation : "", o2 && i2 ? [" ", n2("name")] : "", o2 && !i2 && AV(r2.variableDefinitions) ? " " : "", AV(r2.variableDefinitions) ? EV(["(", CV([DV, gV([bV("", ", "), DV], e2.map(n2, "variableDefinitions"))]), DV, ")"]) : "", wV(e2, n2, r2), r2.selectionSet && (o2 || i2) ? " " : "", n2("selectionSet")];
            }
            case "FragmentDefinition":
              return ["fragment ", n2("name"), AV(r2.variableDefinitions) ? EV(["(", CV([DV, gV([bV("", ", "), DV], e2.map(n2, "variableDefinitions"))]), DV, ")"]) : "", " on ", n2("typeCondition"), wV(e2, n2, r2), " ", n2("selectionSet")];
            case "SelectionSet":
              return ["{", CV([mV, gV(mV, e2.call((e3) => TV(e3, t2, n2), "selections"))]), mV, "}"];
            case "Field":
              return EV([r2.alias ? [n2("alias"), ": "] : "", n2("name"), r2.arguments.length > 0 ? EV(["(", CV([DV, gV([bV("", ", "), DV], e2.call((e3) => TV(e3, t2, n2), "arguments"))]), DV, ")"]) : "", wV(e2, n2, r2), r2.selectionSet ? " " : "", n2("selectionSet")]);
            case "Name":
            case "IntValue":
            case "FloatValue":
            case "EnumValue":
              return r2.value;
            case "StringValue":
              return r2.block ? ['"""', mV, gV(mV, r2.value.replace(/"""/g, "\\$&").split("\n")), mV, '"""'] : ['"', r2.value.replace(/["\\]/g, "\\$&").replace(/\n/g, "\\n"), '"'];
            case "BooleanValue":
              return r2.value ? "true" : "false";
            case "NullValue":
              return "null";
            case "Variable":
              return ["$", n2("name")];
            case "ListValue":
              return EV(["[", CV([DV, gV([bV("", ", "), DV], e2.map(n2, "values"))]), DV, "]"]);
            case "ObjectValue":
              return EV(["{", t2.bracketSpacing && r2.fields.length > 0 ? " " : "", CV([DV, gV([bV("", ", "), DV], e2.map(n2, "fields"))]), DV, bV("", t2.bracketSpacing && r2.fields.length > 0 ? " " : ""), "}"]);
            case "ObjectField":
            case "Argument":
              return [n2("name"), ": ", n2("value")];
            case "Directive":
              return ["@", n2("name"), r2.arguments.length > 0 ? EV(["(", CV([DV, gV([bV("", ", "), DV], e2.call((e3) => TV(e3, t2, n2), "arguments"))]), DV, ")"]) : ""];
            case "NamedType":
              return n2("name");
            case "VariableDefinition":
              return [n2("variable"), ": ", n2("type"), r2.defaultValue ? [" = ", n2("defaultValue")] : "", wV(e2, n2, r2)];
            case "ObjectTypeExtension":
            case "ObjectTypeDefinition":
              return [n2("description"), r2.description ? mV : "", r2.kind === "ObjectTypeExtension" ? "extend " : "", "type ", n2("name"), r2.interfaces.length > 0 ? [" implements ", ...BV(e2, t2, n2)] : "", wV(e2, n2, r2), r2.fields.length > 0 ? [" {", CV([mV, gV(mV, e2.call((e3) => TV(e3, t2, n2), "fields"))]), mV, "}"] : ""];
            case "FieldDefinition":
              return [n2("description"), r2.description ? mV : "", n2("name"), r2.arguments.length > 0 ? EV(["(", CV([DV, gV([bV("", ", "), DV], e2.call((e3) => TV(e3, t2, n2), "arguments"))]), DV, ")"]) : "", ": ", n2("type"), wV(e2, n2, r2)];
            case "DirectiveDefinition":
              return [n2("description"), r2.description ? mV : "", "directive ", "@", n2("name"), r2.arguments.length > 0 ? EV(["(", CV([DV, gV([bV("", ", "), DV], e2.call((e3) => TV(e3, t2, n2), "arguments"))]), DV, ")"]) : "", r2.repeatable ? " repeatable" : "", " on ", gV(" | ", e2.map(n2, "locations"))];
            case "EnumTypeExtension":
            case "EnumTypeDefinition":
              return [n2("description"), r2.description ? mV : "", r2.kind === "EnumTypeExtension" ? "extend " : "", "enum ", n2("name"), wV(e2, n2, r2), r2.values.length > 0 ? [" {", CV([mV, gV(mV, e2.call((e3) => TV(e3, t2, n2), "values"))]), mV, "}"] : ""];
            case "EnumValueDefinition":
              return [n2("description"), r2.description ? mV : "", n2("name"), wV(e2, n2, r2)];
            case "InputValueDefinition":
              return [n2("description"), r2.description ? r2.description.block ? mV : yV : "", n2("name"), ": ", n2("type"), r2.defaultValue ? [" = ", n2("defaultValue")] : "", wV(e2, n2, r2)];
            case "InputObjectTypeExtension":
            case "InputObjectTypeDefinition":
              return [n2("description"), r2.description ? mV : "", r2.kind === "InputObjectTypeExtension" ? "extend " : "", "input ", n2("name"), wV(e2, n2, r2), r2.fields.length > 0 ? [" {", CV([mV, gV(mV, e2.call((e3) => TV(e3, t2, n2), "fields"))]), mV, "}"] : ""];
            case "SchemaDefinition":
              return ["schema", wV(e2, n2, r2), " {", r2.operationTypes.length > 0 ? CV([mV, gV(mV, e2.call((e3) => TV(e3, t2, n2), "operationTypes"))]) : "", mV, "}"];
            case "OperationTypeDefinition":
              return [n2("operation"), ": ", n2("type")];
            case "InterfaceTypeExtension":
            case "InterfaceTypeDefinition":
              return [n2("description"), r2.description ? mV : "", r2.kind === "InterfaceTypeExtension" ? "extend " : "", "interface ", n2("name"), r2.interfaces.length > 0 ? [" implements ", ...BV(e2, t2, n2)] : "", wV(e2, n2, r2), r2.fields.length > 0 ? [" {", CV([mV, gV(mV, e2.call((e3) => TV(e3, t2, n2), "fields"))]), mV, "}"] : ""];
            case "FragmentSpread":
              return ["...", n2("name"), wV(e2, n2, r2)];
            case "InlineFragment":
              return ["...", r2.typeCondition ? [" on ", n2("typeCondition")] : "", wV(e2, n2, r2), " ", n2("selectionSet")];
            case "UnionTypeExtension":
            case "UnionTypeDefinition":
              return EV([n2("description"), r2.description ? mV : "", EV([r2.kind === "UnionTypeExtension" ? "extend " : "", "union ", n2("name"), wV(e2, n2, r2), r2.types.length > 0 ? [" =", bV("", " "), CV([bV([yV, "  "]), gV([yV, "| "], e2.map(n2, "types"))])] : ""])]);
            case "ScalarTypeExtension":
            case "ScalarTypeDefinition":
              return [n2("description"), r2.description ? mV : "", r2.kind === "ScalarTypeExtension" ? "extend " : "", "scalar ", n2("name"), wV(e2, n2, r2)];
            case "NonNullType":
              return [n2("type"), "!"];
            case "ListType":
              return ["[", n2("type"), "]"];
            default:
              throw new Error("unknown graphql type: " + JSON.stringify(r2.kind));
          }
        }, massageAstNode: NV, hasPrettierIgnore: function(e2) {
          const t2 = e2.getValue();
          return t2 && Array.isArray(t2.comments) && t2.comments.some((e3) => e3.value.trim() === "prettier-ignore");
        }, insertPragma: FV, printComment: function(e2) {
          const t2 = e2.getValue();
          if (t2.kind === "Comment")
            return "#" + t2.value.trimEnd();
          throw new Error("Not a comment: " + JSON.stringify(t2));
        }, canAttachComment: function(e2) {
          return e2.kind && e2.kind !== "Comment";
        } };
        const PV = kV, OV = { bracketSpacing: bj.bracketSpacing };
        var IV = { languages: [bE({ name: "GraphQL", type: "data", color: "#e10098", extensions: [".graphql", ".gql", ".graphqls"], tmScope: "source.graphql", aceMode: "text", languageId: 139 }, () => ({ since: "1.5.0", parsers: ["graphql"], vscodeLanguageIds: ["graphql"] }))], options: OV, printers: { graphql: PV }, parsers: void 0 };
        var LV = { locStart: function(e2) {
          return e2.position.start.offset;
        }, locEnd: function(e2) {
          return e2.position.end.offset;
        } };
        const { getLast: jV } = dc, { locStart: _V, locEnd: MV } = LV, { cjkPattern: RV, kPattern: VV, punctuationPattern: $V } = { cjkPattern: "(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u2ff0-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e\\udd50-\\udd52\\udd64-\\udd67]|\\ud83c[\\ude00\\ude50-\\ude51]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d])(?:[\\ufe00-\\ufe0f]|\\udb40[\\udd00-\\uddef])?", kPattern: "[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]", punctuationPattern: "[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud803[\\udf55-\\udf59]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc8\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\udc3b\\udde2\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71\\udef7-\\udef8\\udfff]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud81b[\\ude97-\\ude9a\\udfe2]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]" }, WV = ["liquidNode", "inlineCode", "emphasis", "esComment", "strong", "delete", "wikiLink", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"], qV = [...WV, "tableCell", "paragraph", "heading"], UV = new RegExp(VV), zV = new RegExp($V);
        function GV(e2, t2) {
          const [, n2, r2, o2] = t2.slice(e2.position.start.offset, e2.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/);
          return { numberText: n2, marker: r2, leadingSpaces: o2 };
        }
        var HV = { mapAst: function(e2, t2) {
          return function e3(n2, r2, o2) {
            const i2 = Object.assign({}, t2(n2, r2, o2));
            return i2.children && (i2.children = i2.children.map((t3, n3) => e3(t3, n3, [i2, ...o2]))), i2;
          }(e2, null, []);
        }, splitText: function(e2, t2) {
          const n2 = "non-cjk", r2 = "cj-letter", o2 = "cjk-punctuation", i2 = [], u2 = (t2.proseWrap === "preserve" ? e2 : e2.replace(new RegExp("(".concat(RV, ")\n(").concat(RV, ")"), "g"), "$1$2")).split(/([\t\n ]+)/);
          for (const [e3, t3] of u2.entries()) {
            if (e3 % 2 == 1) {
              i2.push({ type: "whitespace", value: /\n/.test(t3) ? "\n" : " " });
              continue;
            }
            if ((e3 === 0 || e3 === u2.length - 1) && t3 === "")
              continue;
            const a2 = t3.split(new RegExp("(".concat(RV, ")")));
            for (const [e4, t4] of a2.entries())
              (e4 !== 0 && e4 !== a2.length - 1 || t4 !== "") && (e4 % 2 != 0 ? s2(zV.test(t4) ? { type: "word", value: t4, kind: o2, hasLeadingPunctuation: true, hasTrailingPunctuation: true } : { type: "word", value: t4, kind: UV.test(t4) ? "k-letter" : r2, hasLeadingPunctuation: false, hasTrailingPunctuation: false }) : t4 !== "" && s2({ type: "word", value: t4, kind: n2, hasLeadingPunctuation: zV.test(t4[0]), hasTrailingPunctuation: zV.test(jV(t4)) }));
          }
          return i2;
          function s2(e3) {
            const t3 = jV(i2);
            var u3, s3;
            t3 && t3.type === "word" && (t3.kind === n2 && e3.kind === r2 && !t3.hasTrailingPunctuation || t3.kind === r2 && e3.kind === n2 && !e3.hasLeadingPunctuation ? i2.push({ type: "whitespace", value: " " }) : (u3 = n2, s3 = o2, t3.kind === u3 && e3.kind === s3 || t3.kind === s3 && e3.kind === u3 || [t3.value, e3.value].some((e4) => /\u3000/.test(e4)) || i2.push({ type: "whitespace", value: "" }))), i2.push(e3);
          }
        }, punctuationPattern: $V, getFencedCodeBlockValue: function(e2, t2) {
          const { value: n2 } = e2;
          return e2.position.end.offset === t2.length && n2.endsWith("\n") && t2.endsWith("\n") ? n2.slice(0, -1) : n2;
        }, getOrderedListItemInfo: GV, hasGitDiffFriendlyOrderedList: function(e2, t2) {
          if (!e2.ordered)
            return false;
          if (e2.children.length < 2)
            return false;
          const n2 = Number(GV(e2.children[0], t2.originalText).numberText), r2 = Number(GV(e2.children[1], t2.originalText).numberText);
          if (n2 === 0 && e2.children.length > 2) {
            const n3 = Number(GV(e2.children[2], t2.originalText).numberText);
            return r2 === 1 && n3 === 1;
          }
          return r2 === 1;
        }, INLINE_NODE_TYPES: WV, INLINE_NODE_WRAPPER_TYPES: qV, isAutolink: function(e2) {
          if (!e2 || e2.type !== "link" || e2.children.length !== 1)
            return false;
          const t2 = e2.children[0];
          return t2 && _V(e2) === _V(t2) && MV(e2) === MV(t2);
        } };
        const { inferParserByLanguage: JV, getMaxContinuousCount: XV } = dc, { builders: { hardline: YV, markAsRoot: KV }, utils: { replaceEndOfLine: QV } } = Zc, ZV = Wj, { getFencedCodeBlockValue: e$ } = HV;
        var t$ = function(e2, t2, n2, r2) {
          const o2 = e2.getValue();
          if (o2.type === "code" && o2.lang !== null) {
            const e3 = JV(o2.lang, r2);
            if (e3) {
              const t3 = r2.__inJsTemplate ? "~" : "`", i2 = t3.repeat(Math.max(3, XV(o2.value, t3) + 1)), u2 = { parser: e3 };
              o2.lang === "tsx" && (u2.filepath = "dummy.tsx");
              const s2 = n2(e$(o2, r2.originalText), u2, { stripTrailingHardline: true });
              return KV([i2, o2.lang, o2.meta ? " " + o2.meta : "", YV, QV(s2), YV, i2]);
            }
          }
          switch (o2.type) {
            case "front-matter":
              return ZV(o2, n2);
            case "importExport":
              return [n2(o2.value, { parser: "babel" }, { stripTrailingHardline: true }), YV];
            case "jsx":
              return n2("<$>".concat(o2.value, "</$>"), { parser: "__js_expression", rootMarker: "mdx" }, { stripTrailingHardline: true });
          }
          return null;
        };
        const n$ = Hj, r$ = ["format", "prettier"];
        function o$(e2) {
          const t2 = "@(".concat(r$.join("|"), ")"), n2 = new RegExp(["<!--\\s*".concat(t2, "\\s*-->"), "{\\s*\\/\\*\\s*".concat(t2, "\\s*\\*\\/\\s*}"), "<!--.*\r?\n[\\s\\S]*(^|\n)[^\\S\n]*".concat(t2, "[^\\S\n]*($|\n)[\\s\\S]*\n.*-->")].join("|"), "m"), r2 = e2.match(n2);
          return r2 && r2.index === 0;
        }
        var i$ = { startWithPragma: o$, hasPragma: (e2) => o$(n$(e2).content.trimStart()), insertPragma: (e2) => {
          const t2 = n$(e2), n2 = "<!-- @".concat(r$[0], " -->");
          return t2.frontMatter ? "".concat(t2.frontMatter.raw, "\n\n").concat(n2, "\n\n").concat(t2.content) : "".concat(n2, "\n\n").concat(t2.content);
        } };
        const u$ = au, { getOrderedListItemInfo: s$, mapAst: a$, splitText: c$ } = HV, l$ = /^.$/us;
        function p$(e2, t2, n2) {
          return a$(e2, (e3) => {
            if (!e3.children)
              return e3;
            const r2 = e3.children.reduce((e4, r3) => {
              const o2 = u$(e4);
              return o2 && t2(o2, r3) ? e4.splice(-1, 1, n2(o2, r3)) : e4.push(r3), e4;
            }, []);
            return Object.assign(Object.assign({}, e3), {}, { children: r2 });
          });
        }
        var f$ = function(e2, t2) {
          return e2 = function(e3, t3) {
            return a$(e3, (e4) => e4.type === "text" && e4.value !== "*" && e4.value !== "_" && l$.test(e4.value) && e4.position.end.offset - e4.position.start.offset !== e4.value.length ? Object.assign(Object.assign({}, e4), {}, { value: t3.originalText.slice(e4.position.start.offset, e4.position.end.offset) }) : e4);
          }(e2, t2), e2 = function(e3, t3) {
            return a$(e3, (e4, n2, r2) => {
              if (e4.type === "code") {
                const n3 = /^\n?(?: {4,}|\t)/.test(t3.originalText.slice(e4.position.start.offset, e4.position.end.offset));
                if (e4.isIndented = n3, n3)
                  for (let e5 = 0; e5 < r2.length; e5++) {
                    const t4 = r2[e5];
                    if (t4.hasIndentedCodeblock)
                      break;
                    t4.type === "list" && (t4.hasIndentedCodeblock = true);
                  }
              }
              return e4;
            });
          }(e2 = function(e3) {
            return a$(e3, (e4) => e4.type !== "inlineCode" ? e4 : Object.assign(Object.assign({}, e4), {}, { value: e4.value.replace(/\s+/g, " ") }));
          }(e2 = function(e3) {
            return p$(e3, (e4, t3) => e4.type === "text" && t3.type === "text", (e4, t3) => ({ type: "text", value: e4.value + t3.value, position: { start: e4.position.start, end: t3.position.end } }));
          }(e2)), t2), e2 = function(e3, t3) {
            return a$(e3, (e4, t4, n3) => {
              if (e4.type === "list" && e4.children.length > 0) {
                for (let t5 = 0; t5 < n3.length; t5++) {
                  const r3 = n3[t5];
                  if (r3.type === "list" && !r3.isAligned)
                    return e4.isAligned = false, e4;
                }
                e4.isAligned = r2(e4);
              }
              return e4;
            });
            function n2(e4) {
              return e4.children.length === 0 ? -1 : e4.children[0].position.start.column - 1;
            }
            function r2(e4) {
              if (!e4.ordered)
                return true;
              const [r3, o2] = e4.children;
              if (s$(r3, t3.originalText).leadingSpaces.length > 1)
                return true;
              const i2 = n2(r3);
              if (i2 === -1)
                return false;
              if (e4.children.length === 1)
                return i2 % t3.tabWidth == 0;
              if (i2 !== n2(o2))
                return false;
              if (i2 % t3.tabWidth == 0)
                return true;
              return s$(o2, t3.originalText).leadingSpaces.length > 1;
            }
          }(e2, t2), e2 = function(e3, t3) {
            return a$(e3, (e4, n2, r2) => {
              let [o2] = r2;
              if (e4.type !== "text")
                return e4;
              let { value: i2 } = e4;
              return o2.type === "paragraph" && (n2 === 0 && (i2 = i2.trimStart()), n2 === o2.children.length - 1 && (i2 = i2.trimEnd())), { type: "sentence", position: e4.position, children: c$(i2, t3) };
            });
          }(e2, t2), e2 = function(e3) {
            return p$(e3, (e4, t3) => e4.type === "importExport" && t3.type === "importExport", (e4, t3) => ({ type: "importExport", value: e4.value + "\n\n" + t3.value, position: { start: e4.position.start, end: t3.position.end } }));
          }(e2 = function(e3) {
            return a$(e3, (e4) => e4.type !== "import" && e4.type !== "export" ? e4 : Object.assign(Object.assign({}, e4), {}, { type: "importExport" }));
          }(e2));
        };
        const { isFrontMatterNode: d$ } = dc, { startWithPragma: h$ } = i$, g$ = /* @__PURE__ */ new Set(["position", "raw"]);
        function m$(e2, t2, n2) {
          return e2.type !== "front-matter" && e2.type !== "code" && e2.type !== "yaml" && e2.type !== "import" && e2.type !== "export" && e2.type !== "jsx" || delete t2.value, e2.type === "list" && delete t2.isAligned, e2.type !== "list" && e2.type !== "listItem" || (delete t2.spread, delete t2.loose), e2.type === "text" ? null : (e2.type === "inlineCode" && (t2.value = e2.value.replace(/[\t\n ]+/g, " ")), e2.type === "wikiLink" && (t2.value = e2.value.trim().replace(/[\t\n]+/g, " ")), e2.type !== "definition" && e2.type !== "linkReference" || (t2.label = e2.label.trim().replace(/[\t\n ]+/g, " ").toLowerCase()), e2.type !== "definition" && e2.type !== "link" && e2.type !== "image" || !e2.title || (t2.title = e2.title.replace(/\\(["')])/g, "$1")), n2 && n2.type === "root" && n2.children.length > 0 && (n2.children[0] === e2 || d$(n2.children[0]) && n2.children[1] === e2) && e2.type === "html" && h$(e2.value) ? null : void 0);
        }
        m$.ignoredProperties = g$;
        var y$ = m$;
        const { getLast: D$, getMinNotPresentContinuousCount: E$, getMaxContinuousCount: C$, getStringWidth: b$, isNonEmptyArray: v$ } = dc, { builders: { breakParent: A$, join: F$, line: x$, literalline: S$, markAsRoot: w$, hardline: T$, softline: B$, ifBreak: N$, fill: k$, align: P$, indent: O$, group: I$, hardlineWithoutBreakParent: L$ }, utils: { normalizeDoc: j$, replaceTextEndOfLine: _$ }, printer: { printDocToString: M$ } } = Zc, R$ = t$, { insertPragma: V$ } = i$, { locStart: $$, locEnd: W$ } = LV, q$ = f$, U$ = y$, { getFencedCodeBlockValue: z$, hasGitDiffFriendlyOrderedList: G$, splitText: H$, punctuationPattern: J$, INLINE_NODE_TYPES: X$, INLINE_NODE_WRAPPER_TYPES: Y$, isAutolink: K$ } = HV, Q$ = /* @__PURE__ */ new Set(["importExport"]), Z$ = ["heading", "tableCell", "link", "wikiLink"], eW = /* @__PURE__ */ new Set(["listItem", "definition", "footnoteDefinition"]);
        function tW(e2, t2, n2, r2) {
          const o2 = e2.getValue(), i2 = o2.checked === null ? "" : o2.checked ? "[x] " : "[ ] ";
          return [i2, sW(e2, t2, n2, { processor: (e3, o3) => {
            if (o3 === 0 && e3.getValue().type !== "list")
              return P$(" ".repeat(i2.length), n2());
            const u2 = " ".repeat(function(e4, t3, n3) {
              return e4 < t3 ? t3 : e4 > n3 ? n3 : e4;
            }(t2.tabWidth - r2.length, 0, 3));
            return [u2, P$(u2, n2())];
          } })];
        }
        function nW(e2, t2) {
          return function(e3, t3, n2) {
            let r2 = -1;
            for (const o2 of t3.children)
              if (o2.type === e3.type && n2(o2) ? r2++ : r2 = -1, o2 === e3)
                return r2;
          }(e2, t2, (t3) => t3.ordered === e2.ordered);
        }
        function rW(e2, t2) {
          const n2 = Array.isArray(t2) ? t2 : [t2];
          let r2, o2 = -1;
          for (; r2 = e2.getParentNode(++o2); )
            if (n2.includes(r2.type))
              return o2;
          return -1;
        }
        function oW(e2, t2) {
          const n2 = rW(e2, t2);
          return n2 === -1 ? null : e2.getParentNode(n2);
        }
        function iW(e2, t2, n2) {
          if (n2.proseWrap === "preserve" && t2 === "\n")
            return T$;
          const r2 = n2.proseWrap === "always" && !oW(e2, Z$);
          return t2 !== "" ? r2 ? x$ : " " : r2 ? B$ : "";
        }
        function uW(e2, t2, n2) {
          const r2 = [];
          let o2 = null;
          const { children: i2 } = e2.getValue();
          for (const [e3, t3] of i2.entries())
            switch (cW(t3)) {
              case "start":
                o2 === null && (o2 = { index: e3, offset: t3.position.end.offset });
                break;
              case "end":
                o2 !== null && (r2.push({ start: o2, end: { index: e3, offset: t3.position.start.offset } }), o2 = null);
            }
          return sW(e2, t2, n2, { processor: (e3, o3) => {
            if (r2.length > 0) {
              const e4 = r2[0];
              if (o3 === e4.start.index)
                return [i2[e4.start.index].value, t2.originalText.slice(e4.start.offset, e4.end.offset), i2[e4.end.index].value];
              if (e4.start.index < o3 && o3 < e4.end.index)
                return false;
              if (o3 === e4.end.index)
                return r2.shift(), false;
            }
            return n2();
          } });
        }
        function sW(e2, t2, n2) {
          let r2 = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          const { postprocessor: o2 } = r2, i2 = r2.processor || (() => n2()), u2 = e2.getValue(), s2 = [];
          let a2;
          return e2.each((e3, n3) => {
            const r3 = e3.getValue(), o3 = i2(e3, n3);
            if (o3 !== false) {
              const e4 = { parts: s2, prevNode: a2, parentNode: u2, options: t2 };
              lW(r3, e4) && (s2.push(T$), a2 && Q$.has(a2.type) || (pW(r3, e4) || fW(r3, e4)) && s2.push(T$), fW(r3, e4) && s2.push(T$)), s2.push(o3), a2 = r3;
            }
          }, "children"), o2 ? o2(s2) : s2;
        }
        function aW(e2) {
          let t2 = e2;
          for (; v$(t2.children); )
            t2 = D$(t2.children);
          return t2;
        }
        function cW(e2) {
          let t2;
          if (e2.type === "html")
            t2 = e2.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);
          else {
            let n2;
            e2.type === "esComment" ? n2 = e2 : e2.type === "paragraph" && e2.children.length === 1 && e2.children[0].type === "esComment" && (n2 = e2.children[0]), n2 && (t2 = n2.value.match(/^prettier-ignore(?:-(start|end))?$/));
          }
          return !!t2 && (t2[1] ? t2[1] : "next");
        }
        function lW(e2, t2) {
          const n2 = t2.parts.length === 0, r2 = X$.includes(e2.type), o2 = e2.type === "html" && Y$.includes(t2.parentNode.type);
          return !n2 && !r2 && !o2;
        }
        function pW(e2, t2) {
          const n2 = (t2.prevNode && t2.prevNode.type) === e2.type && eW.has(e2.type), r2 = t2.parentNode.type === "listItem" && !t2.parentNode.loose, o2 = t2.prevNode && t2.prevNode.type === "listItem" && t2.prevNode.loose, i2 = cW(t2.prevNode) === "next", u2 = e2.type === "html" && t2.prevNode && t2.prevNode.type === "html" && t2.prevNode.position.end.line + 1 === e2.position.start.line, s2 = e2.type === "html" && t2.parentNode.type === "listItem" && t2.prevNode && t2.prevNode.type === "paragraph" && t2.prevNode.position.end.line + 1 === e2.position.start.line;
          return o2 || !(n2 || r2 || i2 || u2 || s2);
        }
        function fW(e2, t2) {
          const n2 = t2.prevNode && t2.prevNode.type === "list", r2 = e2.type === "code" && e2.isIndented;
          return n2 && r2;
        }
        function dW(e2) {
          let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
          const n2 = [" ", ...Array.isArray(t2) ? t2 : [t2]];
          return new RegExp(n2.map((e3) => "\\".concat(e3)).join("|")).test(e2) ? "<".concat(e2, ">") : e2;
        }
        function hW(e2, t2) {
          let n2 = !(arguments.length > 2 && arguments[2] !== void 0) || arguments[2];
          if (!e2)
            return "";
          if (n2)
            return " " + hW(e2, t2, false);
          if ((e2 = e2.replace(/\\(["')])/g, "$1")).includes('"') && e2.includes("'") && !e2.includes(")"))
            return "(".concat(e2, ")");
          const r2 = e2.split("'").length - 1, o2 = e2.split('"').length - 1, i2 = r2 > o2 ? '"' : o2 > r2 || t2.singleQuote ? "'" : '"';
          return e2 = (e2 = e2.replace(/\\/, "\\\\")).replace(new RegExp("(".concat(i2, ")"), "g"), "\\$1"), "".concat(i2).concat(e2).concat(i2);
        }
        var gW = { preprocess: q$, print: function(e2, t2, n2) {
          const r2 = e2.getValue();
          if (function(e3) {
            const t3 = oW(e3, ["linkReference", "imageReference"]);
            return t3 && (t3.type !== "linkReference" || t3.referenceType !== "full");
          }(e2))
            return H$(t2.originalText.slice(r2.position.start.offset, r2.position.end.offset), t2).map((n3) => n3.type === "word" ? n3.value : n3.value === "" ? "" : iW(e2, n3.value, t2));
          switch (r2.type) {
            case "front-matter":
              return t2.originalText.slice(r2.position.start.offset, r2.position.end.offset);
            case "root":
              return r2.children.length === 0 ? "" : [j$(uW(e2, t2, n2)), Q$.has(aW(r2).type) ? "" : T$];
            case "paragraph":
              return sW(e2, t2, n2, { postprocessor: k$ });
            case "sentence":
              return sW(e2, t2, n2);
            case "word": {
              let t3 = r2.value.replace(/\*/g, "\\$&").replace(new RegExp(["(^|".concat(J$, ")(_+)"), "(_+)(".concat(J$, "|$)")].join("|"), "g"), (e3, t4, n4, r3, o3) => (n4 ? "".concat(t4).concat(n4) : "".concat(r3).concat(o3)).replace(/_/g, "\\_"));
              const n3 = (e3, t4, n4) => e3.type === "sentence" && n4 === 0, o2 = (e3, t4, n4) => K$(e3.children[n4 - 1]);
              return t3 !== r2.value && (e2.match(void 0, n3, o2) || e2.match(void 0, n3, (e3, t4, n4) => e3.type === "emphasis" && n4 === 0, o2)) && (t3 = t3.replace(/^(\\?[*_])+/, (e3) => e3.replace(/\\/g, ""))), t3;
            }
            case "whitespace": {
              const n3 = e2.getParentNode(), o2 = n3.children.indexOf(r2), i2 = n3.children[o2 + 1], u2 = i2 && /^>|^(?:[*+-]|#{1,6}|\d+[).])$/.test(i2.value) ? "never" : t2.proseWrap;
              return iW(e2, r2.value, { proseWrap: u2 });
            }
            case "emphasis": {
              let o2;
              if (K$(r2.children[0]))
                o2 = t2.originalText[r2.position.start.offset];
              else {
                const t3 = e2.getParentNode(), n3 = t3.children.indexOf(r2), i2 = t3.children[n3 - 1], u2 = t3.children[n3 + 1];
                o2 = i2 && i2.type === "sentence" && i2.children.length > 0 && D$(i2.children).type === "word" && !D$(i2.children).hasTrailingPunctuation || u2 && u2.type === "sentence" && u2.children.length > 0 && u2.children[0].type === "word" && !u2.children[0].hasLeadingPunctuation || oW(e2, "emphasis") ? "*" : "_";
              }
              return [o2, sW(e2, t2, n2), o2];
            }
            case "strong":
              return ["**", sW(e2, t2, n2), "**"];
            case "delete":
              return ["~~", sW(e2, t2, n2), "~~"];
            case "inlineCode": {
              const e3 = E$(r2.value, "`"), t3 = "`".repeat(e3 || 1), n3 = e3 && !/^\s/.test(r2.value) ? " " : "";
              return [t3, n3, r2.value, n3, t3];
            }
            case "wikiLink": {
              let e3 = "";
              return e3 = t2.proseWrap === "preserve" ? r2.value : r2.value.replace(/[\t\n]+/g, " "), ["[[", e3, "]]"];
            }
            case "link":
              switch (t2.originalText[r2.position.start.offset]) {
                case "<": {
                  const e3 = "mailto:";
                  return ["<", r2.url.startsWith(e3) && t2.originalText.slice(r2.position.start.offset + 1, r2.position.start.offset + 1 + e3.length) !== e3 ? r2.url.slice(e3.length) : r2.url, ">"];
                }
                case "[":
                  return ["[", sW(e2, t2, n2), "](", dW(r2.url, ")"), hW(r2.title, t2), ")"];
                default:
                  return t2.originalText.slice(r2.position.start.offset, r2.position.end.offset);
              }
            case "image":
              return ["![", r2.alt || "", "](", dW(r2.url, ")"), hW(r2.title, t2), ")"];
            case "blockquote":
              return ["> ", P$("> ", sW(e2, t2, n2))];
            case "heading":
              return ["#".repeat(r2.depth) + " ", sW(e2, t2, n2)];
            case "code": {
              if (r2.isIndented) {
                const e4 = " ".repeat(4);
                return P$(e4, [e4, ..._$(r2.value, T$)]);
              }
              const e3 = t2.__inJsTemplate ? "~" : "`", n3 = e3.repeat(Math.max(3, C$(r2.value, e3) + 1));
              return [n3, r2.lang || "", r2.meta ? " " + r2.meta : "", T$, ..._$(z$(r2, t2.originalText), T$), T$, n3];
            }
            case "html": {
              const t3 = e2.getParentNode(), n3 = t3.type === "root" && D$(t3.children) === r2 ? r2.value.trimEnd() : r2.value, o2 = /^<!--.*-->$/s.test(n3);
              return _$(n3, o2 ? T$ : w$(S$));
            }
            case "list": {
              const o2 = nW(r2, e2.getParentNode()), i2 = G$(r2, t2);
              return sW(e2, t2, n2, { processor: (e3, u2) => {
                const s2 = function() {
                  const e4 = r2.ordered ? (u2 === 0 ? r2.start : i2 ? 1 : r2.start + u2) + (o2 % 2 == 0 ? ". " : ") ") : o2 % 2 == 0 ? "- " : "* ";
                  return r2.isAligned || r2.hasIndentedCodeblock ? function(e5, t3) {
                    const n3 = r3();
                    return e5 + " ".repeat(n3 >= 4 ? 0 : n3);
                    function r3() {
                      const n4 = e5.length % t3.tabWidth;
                      return n4 === 0 ? 0 : t3.tabWidth - n4;
                    }
                  }(e4, t2) : e4;
                }(), a2 = e3.getValue();
                return a2.children.length === 2 && a2.children[1].type === "html" && a2.children[0].position.start.column !== a2.children[1].position.start.column ? [s2, tW(e3, t2, n2, s2)] : [s2, P$(" ".repeat(s2.length), tW(e3, t2, n2, s2))];
              } });
            }
            case "thematicBreak": {
              const t3 = rW(e2, "list");
              if (t3 === -1)
                return "---";
              return nW(e2.getParentNode(t3), e2.getParentNode(t3 + 1)) % 2 == 0 ? "***" : "---";
            }
            case "linkReference":
              return ["[", sW(e2, t2, n2), "]", r2.referenceType === "full" ? ["[", r2.identifier, "]"] : r2.referenceType === "collapsed" ? "[]" : ""];
            case "imageReference":
              return r2.referenceType === "full" ? ["![", r2.alt || "", "][", r2.identifier, "]"] : ["![", r2.alt, "]", r2.referenceType === "collapsed" ? "[]" : ""];
            case "definition": {
              const e3 = t2.proseWrap === "always" ? x$ : " ";
              return I$(["[", r2.identifier, "]:", O$([e3, dW(r2.url), r2.title === null ? "" : [e3, hW(r2.title, t2, false)]])]);
            }
            case "footnote":
              return ["[^", sW(e2, t2, n2), "]"];
            case "footnoteReference":
              return ["[^", r2.identifier, "]"];
            case "footnoteDefinition": {
              const o2 = e2.getParentNode().children[e2.getName() + 1], i2 = r2.children.length === 1 && r2.children[0].type === "paragraph" && (t2.proseWrap === "never" || t2.proseWrap === "preserve" && r2.children[0].position.start.line === r2.children[0].position.end.line);
              return ["[^", r2.identifier, "]: ", i2 ? sW(e2, t2, n2) : I$([P$(" ".repeat(4), sW(e2, t2, n2, { processor: (e3, t3) => t3 === 0 ? I$([B$, n2()]) : n2() })), o2 && o2.type === "footnoteDefinition" ? B$ : ""])];
            }
            case "table":
              return function(e3, t3, n3) {
                const r3 = e3.getValue(), o2 = [], i2 = e3.map((e4) => e4.map((e5, r4) => {
                  const i3 = M$(n3(), t3).formatted, u3 = b$(i3);
                  return o2[r4] = Math.max(o2[r4] || 3, u3), { text: i3, width: u3 };
                }, "children"), "children"), u2 = a2(false);
                if (t3.proseWrap !== "never")
                  return [A$, u2];
                const s2 = a2(true);
                return [A$, I$(N$(s2, u2))];
                function a2(e4) {
                  const t4 = [l3(i2[0], e4), c2(e4)];
                  return i2.length > 1 && t4.push(F$(L$, i2.slice(1).map((t5) => l3(t5, e4)))), F$(L$, t4);
                }
                function c2(e4) {
                  const t4 = o2.map((t5, n4) => {
                    const o3 = r3.align[n4], i3 = o3 === "center" || o3 === "left" ? ":" : "-", u3 = o3 === "center" || o3 === "right" ? ":" : "-", s3 = e4 ? "-" : "-".repeat(t5 - 2);
                    return "".concat(i3).concat(s3).concat(u3);
                  });
                  return "| ".concat(t4.join(" | "), " |");
                }
                function l3(e4, t4) {
                  const n4 = e4.map((e5, n5) => {
                    let { text: i3, width: u3 } = e5;
                    if (t4)
                      return i3;
                    const s3 = o2[n5] - u3, a3 = r3.align[n5];
                    let c3 = 0;
                    a3 === "right" ? c3 = s3 : a3 === "center" && (c3 = Math.floor(s3 / 2));
                    const l4 = s3 - c3;
                    return "".concat(" ".repeat(c3)).concat(i3).concat(" ".repeat(l4));
                  });
                  return "| ".concat(n4.join(" | "), " |");
                }
              }(e2, t2, n2);
            case "tableCell":
              return sW(e2, t2, n2);
            case "break":
              return /\s/.test(t2.originalText[r2.position.start.offset]) ? ["  ", w$(S$)] : ["\\", T$];
            case "liquidNode":
              return _$(r2.value, T$);
            case "importExport":
              return [r2.value, T$];
            case "esComment":
              return ["{/* ", r2.value, " */}"];
            case "jsx":
              return r2.value;
            case "math":
              return ["$$", T$, r2.value ? [..._$(r2.value, T$), T$] : "", "$$"];
            case "inlineMath":
              return t2.originalText.slice($$(r2), W$(r2));
            default:
              throw new Error("Unknown markdown type ".concat(JSON.stringify(r2.type)));
          }
        }, embed: R$, massageAstNode: U$, hasPrettierIgnore: function(e2) {
          const t2 = Number(e2.getName());
          return t2 !== 0 && cW(e2.getParentNode().children[t2 - 1]) === "next";
        }, insertPragma: V$ };
        var mW = { name: "Markdown", type: "prose", color: "#083fa1", aliases: ["pandoc"], aceMode: "markdown", codemirrorMode: "gfm", codemirrorMimeType: "text/x-gfm", wrap: true, extensions: [".md", ".markdown", ".mdown", ".mdwn", ".mdx", ".mkd", ".mkdn", ".mkdown", ".ronn", ".scd", ".workbook"], filenames: ["contents.lr"], tmScope: "source.gfm", languageId: 222 };
        const yW = bE, DW = gW, EW = { proseWrap: bj.proseWrap, singleQuote: bj.singleQuote }, CW = [yW(mW, (e2) => ({ since: "1.8.0", parsers: ["markdown"], vscodeLanguageIds: ["markdown"], filenames: [...e2.filenames, "README"], extensions: e2.extensions.filter((e3) => e3 !== ".mdx") })), yW(mW, () => ({ name: "MDX", since: "1.15.0", parsers: ["mdx"], vscodeLanguageIds: ["mdx"], filenames: [], extensions: [".mdx"] }))];
        var bW = { languages: CW, options: EW, printers: { mdast: DW }, parsers: void 0 };
        const { isFrontMatterNode: vW } = dc, AW = /* @__PURE__ */ new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan"]);
        function FW(e2, t2) {
          return e2.type === "text" || e2.type === "comment" || vW(e2) || e2.type === "yaml" || e2.type === "toml" ? null : (e2.type === "attribute" && delete t2.value, void (e2.type === "docType" && delete t2.value));
        }
        FW.ignoredProperties = AW;
        var xW = FW;
        const SW = ["a", "abbr", "acronym", "address", "applet", "area", "article", "aside", "audio", "b", "base", "basefont", "bdi", "bdo", "bgsound", "big", "blink", "blockquote", "body", "br", "button", "canvas", "caption", "center", "cite", "code", "col", "colgroup", "command", "content", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "dir", "div", "dl", "dt", "element", "em", "embed", "fieldset", "figcaption", "figure", "font", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "i", "iframe", "image", "img", "input", "ins", "isindex", "kbd", "keygen", "label", "legend", "li", "link", "listing", "main", "map", "mark", "marquee", "math", "menu", "menuitem", "meta", "meter", "multicol", "nav", "nextid", "nobr", "noembed", "noframes", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "plaintext", "pre", "progress", "q", "rb", "rbc", "rp", "rt", "rtc", "ruby", "s", "samp", "script", "section", "select", "shadow", "slot", "small", "source", "spacer", "span", "strike", "strong", "style", "sub", "summary", "sup", "svg", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "time", "title", "tr", "track", "tt", "u", "ul", "var", "video", "wbr", "xmp"], wW = { "*": ["accesskey", "autocapitalize", "autofocus", "class", "contenteditable", "dir", "draggable", "enterkeyhint", "hidden", "id", "inputmode", "is", "itemid", "itemprop", "itemref", "itemscope", "itemtype", "lang", "nonce", "slot", "spellcheck", "style", "tabindex", "title", "translate"], a: ["accesskey", "charset", "coords", "download", "href", "hreflang", "name", "ping", "referrerpolicy", "rel", "rev", "shape", "tabindex", "target", "type"], abbr: ["title"], applet: ["align", "alt", "archive", "code", "codebase", "height", "hspace", "name", "object", "vspace", "width"], area: ["accesskey", "alt", "coords", "download", "href", "hreflang", "nohref", "ping", "referrerpolicy", "rel", "shape", "tabindex", "target", "type"], audio: ["autoplay", "controls", "crossorigin", "loop", "muted", "preload", "src"], base: ["href", "target"], basefont: ["color", "face", "size"], bdo: ["dir"], blockquote: ["cite"], body: ["alink", "background", "bgcolor", "link", "text", "vlink"], br: ["clear"], button: ["accesskey", "autofocus", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "name", "tabindex", "type", "value"], canvas: ["height", "width"], caption: ["align"], col: ["align", "char", "charoff", "span", "valign", "width"], colgroup: ["align", "char", "charoff", "span", "valign", "width"], data: ["value"], del: ["cite", "datetime"], details: ["open"], dfn: ["title"], dialog: ["open"], dir: ["compact"], div: ["align"], dl: ["compact"], embed: ["height", "src", "type", "width"], fieldset: ["disabled", "form", "name"], font: ["color", "face", "size"], form: ["accept", "accept-charset", "action", "autocomplete", "enctype", "method", "name", "novalidate", "target"], frame: ["frameborder", "longdesc", "marginheight", "marginwidth", "name", "noresize", "scrolling", "src"], frameset: ["cols", "rows"], h1: ["align"], h2: ["align"], h3: ["align"], h4: ["align"], h5: ["align"], h6: ["align"], head: ["profile"], hr: ["align", "noshade", "size", "width"], html: ["manifest", "version"], iframe: ["align", "allow", "allowfullscreen", "allowpaymentrequest", "allowusermedia", "frameborder", "height", "loading", "longdesc", "marginheight", "marginwidth", "name", "referrerpolicy", "sandbox", "scrolling", "src", "srcdoc", "width"], img: ["align", "alt", "border", "crossorigin", "decoding", "height", "hspace", "ismap", "loading", "longdesc", "name", "referrerpolicy", "sizes", "src", "srcset", "usemap", "vspace", "width"], input: ["accept", "accesskey", "align", "alt", "autocomplete", "autofocus", "checked", "dirname", "disabled", "form", "formaction", "formenctype", "formmethod", "formnovalidate", "formtarget", "height", "ismap", "list", "max", "maxlength", "min", "minlength", "multiple", "name", "pattern", "placeholder", "readonly", "required", "size", "src", "step", "tabindex", "title", "type", "usemap", "value", "width"], ins: ["cite", "datetime"], isindex: ["prompt"], label: ["accesskey", "for", "form"], legend: ["accesskey", "align"], li: ["type", "value"], link: ["as", "charset", "color", "crossorigin", "disabled", "href", "hreflang", "imagesizes", "imagesrcset", "integrity", "media", "nonce", "referrerpolicy", "rel", "rev", "sizes", "target", "title", "type"], map: ["name"], menu: ["compact"], meta: ["charset", "content", "http-equiv", "name", "scheme"], meter: ["high", "low", "max", "min", "optimum", "value"], object: ["align", "archive", "border", "classid", "codebase", "codetype", "data", "declare", "form", "height", "hspace", "name", "standby", "tabindex", "type", "typemustmatch", "usemap", "vspace", "width"], ol: ["compact", "reversed", "start", "type"], optgroup: ["disabled", "label"], option: ["disabled", "label", "selected", "value"], output: ["for", "form", "name"], p: ["align"], param: ["name", "type", "value", "valuetype"], pre: ["width"], progress: ["max", "value"], q: ["cite"], script: ["async", "charset", "crossorigin", "defer", "integrity", "language", "nomodule", "nonce", "referrerpolicy", "src", "type"], select: ["autocomplete", "autofocus", "disabled", "form", "multiple", "name", "required", "size", "tabindex"], slot: ["name"], source: ["media", "sizes", "src", "srcset", "type"], style: ["media", "nonce", "title", "type"], table: ["align", "bgcolor", "border", "cellpadding", "cellspacing", "frame", "rules", "summary", "width"], tbody: ["align", "char", "charoff", "valign"], td: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], textarea: ["accesskey", "autocomplete", "autofocus", "cols", "dirname", "disabled", "form", "maxlength", "minlength", "name", "placeholder", "readonly", "required", "rows", "tabindex", "wrap"], tfoot: ["align", "char", "charoff", "valign"], th: ["abbr", "align", "axis", "bgcolor", "char", "charoff", "colspan", "headers", "height", "nowrap", "rowspan", "scope", "valign", "width"], thead: ["align", "char", "charoff", "valign"], time: ["datetime"], tr: ["align", "bgcolor", "char", "charoff", "valign"], track: ["default", "kind", "label", "src", "srclang"], ul: ["compact", "type"], video: ["autoplay", "controls", "crossorigin", "height", "loop", "muted", "playsinline", "poster", "preload", "src", "width"] }, { inferParserByLanguage: TW, isFrontMatterNode: BW } = dc, { builders: { line: NW, hardline: kW, join: PW }, utils: { getDocParts: OW, replaceTextEndOfLine: IW } } = Zc, { CSS_DISPLAY_TAGS: LW, CSS_DISPLAY_DEFAULT: jW, CSS_WHITE_SPACE_TAGS: _W, CSS_WHITE_SPACE_DEFAULT: MW } = { CSS_DISPLAY_TAGS: { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", source: "block", style: "none", template: "inline", track: "block", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", fieldset: "block", button: "inline-block", details: "block", summary: "block", dialog: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block" }, CSS_DISPLAY_DEFAULT: "inline", CSS_WHITE_SPACE_TAGS: { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" }, CSS_WHITE_SPACE_DEFAULT: "normal" }, RW = GW(SW), VW = function(e2, t2) {
          const n2 = /* @__PURE__ */ Object.create(null);
          for (const [r2, o2] of Object.entries(e2))
            n2[r2] = t2(o2, r2);
          return n2;
        }(wW, GW), $W = /* @__PURE__ */ new Set(["	", "\n", "\f", "\r", " "]), WW = (e2) => e2.replace(/[\t\n\f\r ]+$/, ""), qW = (e2) => ((e3) => e3.replace(/^[\t\f\r ]*?\n/g, ""))(WW(e2)), UW = (e2) => e2.split(/[\t\n\f\r ]+/), zW = (e2) => e2.match(/^[\t\n\f\r ]*/)[0];
        function GW(e2) {
          const t2 = /* @__PURE__ */ Object.create(null);
          for (const n2 of e2)
            t2[n2] = true;
          return t2;
        }
        function HW(e2) {
          return e2.type === "element" && (e2.fullName === "script" || e2.fullName === "style" || e2.fullName === "svg:style" || oq(e2) && (e2.name === "script" || e2.name === "style"));
        }
        function JW(e2) {
          return iq(e2).startsWith("pre");
        }
        function XW(e2) {
          return e2.type === "element" && e2.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(e2.name) || e2.cssDisplay.startsWith("table") && e2.cssDisplay !== "table-cell");
        }
        function YW(e2) {
          return eq(e2) || e2.type === "element" && e2.fullName === "br" || KW(e2);
        }
        function KW(e2) {
          return QW(e2) && ZW(e2);
        }
        function QW(e2) {
          return e2.hasLeadingSpaces && (e2.prev ? e2.prev.sourceSpan.end.line < e2.sourceSpan.start.line : e2.parent.type === "root" || e2.parent.startSourceSpan.end.line < e2.sourceSpan.start.line);
        }
        function ZW(e2) {
          return e2.hasTrailingSpaces && (e2.next ? e2.next.sourceSpan.start.line > e2.sourceSpan.end.line : e2.parent.type === "root" || e2.parent.endSourceSpan && e2.parent.endSourceSpan.start.line > e2.sourceSpan.end.line);
        }
        function eq(e2) {
          switch (e2.type) {
            case "ieConditionalComment":
            case "comment":
            case "directive":
              return true;
            case "element":
              return ["script", "select"].includes(e2.name);
          }
          return false;
        }
        function tq(e2) {
          const { type: t2, lang: n2 } = e2.attrMap;
          return t2 === "module" || t2 === "text/javascript" || t2 === "text/babel" || t2 === "application/javascript" || n2 === "jsx" ? "babel" : t2 === "application/x-typescript" || n2 === "ts" || n2 === "tsx" ? "typescript" : t2 === "text/markdown" ? "markdown" : t2 === "text/html" ? "html" : t2 && (t2.endsWith("json") || t2.endsWith("importmap")) ? "json" : t2 === "text/x-handlebars-template" ? "glimmer" : void 0;
        }
        function nq(e2) {
          return e2 === "block" || e2 === "list-item" || e2.startsWith("table");
        }
        function rq(e2) {
          return iq(e2).startsWith("pre");
        }
        function oq(e2) {
          return e2.type === "element" && !e2.hasExplicitNamespace && !["html", "svg"].includes(e2.namespace);
        }
        function iq(e2) {
          return e2.type === "element" && (!e2.namespace || oq(e2)) && _W[e2.name] || MW;
        }
        function uq(e2) {
          let t2 = Number.POSITIVE_INFINITY;
          for (const n2 of e2.split("\n")) {
            if (n2.length === 0)
              continue;
            if (!$W.has(n2[0]))
              return 0;
            const e3 = zW(n2).length;
            n2.length !== e3 && (e3 < t2 && (t2 = e3));
          }
          return t2 === Number.POSITIVE_INFINITY ? 0 : t2;
        }
        function sq(e2) {
          let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : uq(e2);
          return t2 === 0 ? e2 : e2.split("\n").map((e3) => e3.slice(t2)).join("\n");
        }
        const aq = /* @__PURE__ */ new Set(["template", "style", "script"]);
        function cq(e2, t2) {
          return lq(e2, t2) && !aq.has(e2.fullName);
        }
        function lq(e2, t2) {
          return t2.parser === "vue" && e2.type === "element" && e2.parent.type === "root" && e2.fullName.toLowerCase() !== "html";
        }
        function pq(e2, t2) {
          return lq(e2, t2) && (cq(e2, t2) || e2.attrMap.lang && e2.attrMap.lang !== "html");
        }
        var fq = { HTML_ELEMENT_ATTRIBUTES: VW, HTML_TAGS: RW, htmlTrim: (e2) => ((e3) => e3.replace(/^[\t\n\f\r ]+/, ""))(WW(e2)), htmlTrimPreserveIndentation: qW, hasHtmlWhitespace: (e2) => /[\t\n\f\r ]/.test(e2), getLeadingAndTrailingHtmlWhitespace: (e2) => {
          const [, t2, n2, r2] = e2.match(/^([\t\n\f\r ]*)(.*?)([\t\n\f\r ]*)$/s);
          return { leadingWhitespace: t2, trailingWhitespace: r2, text: n2 };
        }, canHaveInterpolation: function(e2) {
          return e2.children && !HW(e2);
        }, countChars: function(e2, t2) {
          let n2 = 0;
          for (let r2 = 0; r2 < e2.length; r2++)
            e2[r2] === t2 && n2++;
          return n2;
        }, countParents: function(e2, t2) {
          let n2 = 0;
          for (let r2 = e2.stack.length - 1; r2 >= 0; r2--) {
            const o2 = e2.stack[r2];
            o2 && typeof o2 == "object" && !Array.isArray(o2) && t2(o2) && n2++;
          }
          return n2;
        }, dedentString: sq, forceBreakChildren: XW, forceBreakContent: function(e2) {
          return XW(e2) || e2.type === "element" && e2.children.length > 0 && (["body", "script", "style"].includes(e2.name) || e2.children.some((e3) => function(e4) {
            return e4.children && e4.children.some((e5) => e5.type !== "text");
          }(e3))) || e2.firstChild && e2.firstChild === e2.lastChild && e2.firstChild.type !== "text" && QW(e2.firstChild) && (!e2.lastChild.isTrailingSpaceSensitive || ZW(e2.lastChild));
        }, forceNextEmptyLine: function(e2) {
          return BW(e2) || e2.next && e2.sourceSpan.end && e2.sourceSpan.end.line + 1 < e2.next.sourceSpan.start.line;
        }, getLastDescendant: function e2(t2) {
          return t2.lastChild ? e2(t2.lastChild) : t2;
        }, getNodeCssStyleDisplay: function(e2, t2) {
          if (e2.prev && e2.prev.type === "comment") {
            const t3 = e2.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
            if (t3)
              return t3[1];
          }
          let n2 = false;
          if (e2.type === "element" && e2.namespace === "svg") {
            if (!function(e3, t3) {
              let n3 = e3;
              for (; n3; ) {
                if (t3(n3))
                  return true;
                n3 = n3.parent;
              }
              return false;
            }(e2, (e3) => e3.fullName === "svg:foreignObject"))
              return e2.name === "svg" ? "inline-block" : "block";
            n2 = true;
          }
          switch (t2.htmlWhitespaceSensitivity) {
            case "strict":
              return "inline";
            case "ignore":
              return "block";
            default:
              return t2.parser === "vue" && e2.parent && e2.parent.type === "root" ? "block" : e2.type === "element" && (!e2.namespace || n2 || oq(e2)) && LW[e2.name] || jW;
          }
        }, getNodeCssStyleWhiteSpace: iq, hasPrettierIgnore: function(e2) {
          return e2.type !== "attribute" && (!!e2.parent && (typeof e2.index == "number" && e2.index !== 0 && function(e3) {
            return e3.type === "comment" && e3.value.trim() === "prettier-ignore";
          }(e2.parent.children[e2.index - 1])));
        }, inferScriptParser: function(e2, t2) {
          return e2.name !== "script" || e2.attrMap.src ? e2.name === "style" ? function(e3) {
            const { lang: t3 } = e3.attrMap;
            return t3 && t3 !== "postcss" && t3 !== "css" ? t3 === "scss" ? "scss" : t3 === "less" ? "less" : void 0 : "css";
          }(e2) : t2 && pq(e2, t2) ? tq(e2) || !("src" in e2.attrMap) && TW(e2.attrMap.lang, t2) : void 0 : e2.attrMap.lang || e2.attrMap.type ? tq(e2) : "babel";
        }, isVueCustomBlock: cq, isVueNonHtmlBlock: pq, isVueSlotAttribute: function(e2) {
          const t2 = e2.fullName;
          return t2.charAt(0) === "#" || t2 === "slot-scope" || t2 === "v-slot" || t2.startsWith("v-slot:");
        }, isVueSfcBindingsAttribute: function(e2, t2) {
          const n2 = e2.parent;
          if (!lq(n2, t2))
            return false;
          const r2 = n2.fullName, o2 = e2.fullName;
          return r2 === "script" && o2 === "setup" || r2 === "style" && o2 === "vars";
        }, isDanglingSpaceSensitiveNode: function(e2) {
          return !(t2 = e2.cssDisplay, nq(t2) || t2 === "inline-block" || HW(e2));
          var t2;
        }, isIndentationSensitiveNode: JW, isLeadingSpaceSensitiveNode: function(e2, t2) {
          const n2 = function() {
            if (BW(e2))
              return false;
            if ((e2.type === "text" || e2.type === "interpolation") && e2.prev && (e2.prev.type === "text" || e2.prev.type === "interpolation"))
              return true;
            if (!e2.parent || e2.parent.cssDisplay === "none")
              return false;
            if (rq(e2.parent))
              return true;
            if (!e2.prev && (e2.parent.type === "root" || rq(e2) && e2.parent || HW(e2.parent) || cq(e2.parent, t2) || (n3 = e2.parent.cssDisplay, nq(n3) || n3 === "inline-block")))
              return false;
            var n3;
            if (e2.prev && !function(e3) {
              return !nq(e3);
            }(e2.prev.cssDisplay))
              return false;
            return true;
          }();
          return n2 && !e2.prev && e2.parent && e2.parent.tagDefinition && e2.parent.tagDefinition.ignoreFirstLf ? e2.type === "interpolation" : n2;
        }, isPreLikeNode: rq, isScriptLikeTag: HW, isTextLikeNode: function(e2) {
          return e2.type === "text" || e2.type === "comment";
        }, isTrailingSpaceSensitiveNode: function(e2, t2) {
          return !BW(e2) && (!(e2.type !== "text" && e2.type !== "interpolation" || !e2.next || e2.next.type !== "text" && e2.next.type !== "interpolation") || !(!e2.parent || e2.parent.cssDisplay === "none") && (!!rq(e2.parent) || !(!e2.next && (e2.parent.type === "root" || rq(e2) && e2.parent || HW(e2.parent) || cq(e2.parent, t2) || (n2 = e2.parent.cssDisplay, nq(n2) || n2 === "inline-block"))) && !(e2.next && !function(e3) {
            return !nq(e3);
          }(e2.next.cssDisplay))));
          var n2;
        }, isWhitespaceSensitiveNode: function(e2) {
          return HW(e2) || e2.type === "interpolation" || JW(e2);
        }, isUnknownNamespace: oq, preferHardlineAsLeadingSpaces: function(e2) {
          return eq(e2) || e2.prev && YW(e2.prev) || KW(e2);
        }, preferHardlineAsTrailingSpaces: YW, shouldPreserveContent: function(e2, t2) {
          return !(e2.type !== "ieConditionalComment" || !e2.lastChild || e2.lastChild.isSelfClosing || e2.lastChild.endSourceSpan) || (e2.type === "ieConditionalComment" && !e2.complete || (!(!rq(e2) || !e2.children.some((e3) => e3.type !== "text" && e3.type !== "interpolation")) || !(!pq(e2, t2) || HW(e2) || e2.type === "interpolation")));
        }, unescapeQuoteEntities: function(e2) {
          return e2.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
        }, getTextValueParts: function(e2) {
          let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e2.value;
          return e2.parent.isWhitespaceSensitive ? e2.parent.isIndentationSensitive ? IW(t2) : IW(sq(qW(t2)), kW) : OW(PW(NW, UW(t2)));
        } }, dq = {}, hq = {};
        !function(e2) {
          function t2(t3) {
            return e2.$0 <= t3 && t3 <= e2.$9;
          }
          Object.defineProperty(e2, "__esModule", { value: true }), e2.$EOF = 0, e2.$BSPACE = 8, e2.$TAB = 9, e2.$LF = 10, e2.$VTAB = 11, e2.$FF = 12, e2.$CR = 13, e2.$SPACE = 32, e2.$BANG = 33, e2.$DQ = 34, e2.$HASH = 35, e2.$$ = 36, e2.$PERCENT = 37, e2.$AMPERSAND = 38, e2.$SQ = 39, e2.$LPAREN = 40, e2.$RPAREN = 41, e2.$STAR = 42, e2.$PLUS = 43, e2.$COMMA = 44, e2.$MINUS = 45, e2.$PERIOD = 46, e2.$SLASH = 47, e2.$COLON = 58, e2.$SEMICOLON = 59, e2.$LT = 60, e2.$EQ = 61, e2.$GT = 62, e2.$QUESTION = 63, e2.$0 = 48, e2.$7 = 55, e2.$9 = 57, e2.$A = 65, e2.$E = 69, e2.$F = 70, e2.$X = 88, e2.$Z = 90, e2.$LBRACKET = 91, e2.$BACKSLASH = 92, e2.$RBRACKET = 93, e2.$CARET = 94, e2.$_ = 95, e2.$a = 97, e2.$b = 98, e2.$e = 101, e2.$f = 102, e2.$n = 110, e2.$r = 114, e2.$t = 116, e2.$u = 117, e2.$v = 118, e2.$x = 120, e2.$z = 122, e2.$LBRACE = 123, e2.$BAR = 124, e2.$RBRACE = 125, e2.$NBSP = 160, e2.$PIPE = 124, e2.$TILDA = 126, e2.$AT = 64, e2.$BT = 96, e2.isWhitespace = function(t3) {
            return t3 >= e2.$TAB && t3 <= e2.$SPACE || t3 == e2.$NBSP;
          }, e2.isDigit = t2, e2.isAsciiLetter = function(t3) {
            return t3 >= e2.$a && t3 <= e2.$z || t3 >= e2.$A && t3 <= e2.$Z;
          }, e2.isAsciiHexDigit = function(n2) {
            return n2 >= e2.$a && n2 <= e2.$f || n2 >= e2.$A && n2 <= e2.$F || t2(n2);
          }, e2.isNewLine = function(t3) {
            return t3 === e2.$LF || t3 === e2.$CR;
          }, e2.isOctalDigit = function(t3) {
            return e2.$0 <= t3 && t3 <= e2.$7;
          };
        }(hq);
        var gq = {}, mq = {};
        Object.defineProperty(mq, "__esModule", { value: true });
        class yq {
          constructor(e2, t2, n2) {
            this.filePath = e2, this.name = t2, this.members = n2;
          }
          assertNoMembers() {
            if (this.members.length)
              throw new Error("Illegal state: symbol without members expected, but got ".concat(JSON.stringify(this), "."));
          }
        }
        mq.StaticSymbol = yq;
        mq.StaticSymbolCache = class {
          constructor() {
            this.cache = /* @__PURE__ */ new Map();
          }
          get(e2, t2, n2) {
            const r2 = (n2 = n2 || []).length ? ".".concat(n2.join(".")) : "", o2 = '"'.concat(e2, '".').concat(t2).concat(r2);
            let i2 = this.cache.get(o2);
            return i2 || (i2 = new yq(e2, t2, n2), this.cache.set(o2, i2)), i2;
          }
        };
        var Dq = {};
        Object.defineProperty(Dq, "__esModule", { value: true });
        const Eq = /-+([a-z0-9])/g;
        function Cq(e2, t2, n2) {
          const r2 = e2.indexOf(t2);
          return r2 == -1 ? n2 : [e2.slice(0, r2).trim(), e2.slice(r2 + 1).trim()];
        }
        function bq(e2, t2, n2) {
          return Array.isArray(e2) ? t2.visitArray(e2, n2) : function(e3) {
            return typeof e3 == "object" && e3 !== null && Object.getPrototypeOf(e3) === Fq;
          }(e2) ? t2.visitStringMap(e2, n2) : e2 == null || typeof e2 == "string" || typeof e2 == "number" || typeof e2 == "boolean" ? t2.visitPrimitive(e2, n2) : t2.visitOther(e2, n2);
        }
        Dq.dashCaseToCamelCase = function(e2) {
          return e2.replace(Eq, function() {
            for (var e3 = arguments.length, t2 = new Array(e3), n2 = 0; n2 < e3; n2++)
              t2[n2] = arguments[n2];
            return t2[1].toUpperCase();
          });
        }, Dq.splitAtColon = function(e2, t2) {
          return Cq(e2, ":", t2);
        }, Dq.splitAtPeriod = function(e2, t2) {
          return Cq(e2, ".", t2);
        }, Dq.visitValue = bq, Dq.isDefined = function(e2) {
          return e2 != null;
        }, Dq.noUndefined = function(e2) {
          return e2 === void 0 ? null : e2;
        };
        Dq.ValueTransformer = class {
          visitArray(e2, t2) {
            return e2.map((e3) => bq(e3, this, t2));
          }
          visitStringMap(e2, t2) {
            const n2 = {};
            return Object.keys(e2).forEach((r2) => {
              n2[r2] = bq(e2[r2], this, t2);
            }), n2;
          }
          visitPrimitive(e2, t2) {
            return e2;
          }
          visitOther(e2, t2) {
            return e2;
          }
        }, Dq.SyncAsync = { assertSync: (e2) => {
          if (xq(e2))
            throw new Error("Illegal state: value cannot be a promise");
          return e2;
        }, then: (e2, t2) => xq(e2) ? e2.then(t2) : t2(e2), all: (e2) => e2.some(xq) ? Promise.all(e2) : e2 }, Dq.error = function(e2) {
          throw new Error("Internal Error: ".concat(e2));
        }, Dq.syntaxError = function(e2, t2) {
          const n2 = Error(e2);
          return n2[vq] = true, t2 && (n2[Aq] = t2), n2;
        };
        const vq = "ngSyntaxError", Aq = "ngParseErrors";
        Dq.isSyntaxError = function(e2) {
          return e2[vq];
        }, Dq.getParseErrors = function(e2) {
          return e2[Aq] || [];
        }, Dq.escapeRegExp = function(e2) {
          return e2.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        };
        const Fq = Object.getPrototypeOf({});
        function xq(e2) {
          return !!e2 && typeof e2.then == "function";
        }
        Dq.utf8Encode = function(e2) {
          let t2 = "";
          for (let n2 = 0; n2 < e2.length; n2++) {
            let r2 = e2.charCodeAt(n2);
            if (r2 >= 55296 && r2 <= 56319 && e2.length > n2 + 1) {
              const t3 = e2.charCodeAt(n2 + 1);
              t3 >= 56320 && t3 <= 57343 && (n2++, r2 = (r2 - 55296 << 10) + t3 - 56320 + 65536);
            }
            r2 <= 127 ? t2 += String.fromCharCode(r2) : r2 <= 2047 ? t2 += String.fromCharCode(r2 >> 6 & 31 | 192, 63 & r2 | 128) : r2 <= 65535 ? t2 += String.fromCharCode(r2 >> 12 | 224, r2 >> 6 & 63 | 128, 63 & r2 | 128) : r2 <= 2097151 && (t2 += String.fromCharCode(r2 >> 18 & 7 | 240, r2 >> 12 & 63 | 128, r2 >> 6 & 63 | 128, 63 & r2 | 128));
          }
          return t2;
        }, Dq.stringify = function e2(t2) {
          if (typeof t2 == "string")
            return t2;
          if (t2 instanceof Array)
            return "[" + t2.map(e2).join(", ") + "]";
          if (t2 == null)
            return "" + t2;
          if (t2.overriddenName)
            return "".concat(t2.overriddenName);
          if (t2.name)
            return "".concat(t2.name);
          if (!t2.toString)
            return "object";
          const n2 = t2.toString();
          if (n2 == null)
            return "" + n2;
          const r2 = n2.indexOf("\n");
          return r2 === -1 ? n2 : n2.substring(0, r2);
        }, Dq.resolveForwardRef = function(e2) {
          return typeof e2 == "function" && e2.hasOwnProperty("__forward_ref__") ? e2() : e2;
        }, Dq.isPromise = xq;
        Dq.Version = class {
          constructor(e2) {
            this.full = e2;
            const t2 = e2.split(".");
            this.major = t2[0], this.minor = t2[1], this.patch = t2.slice(2).join(".");
          }
        };
        const Sq = typeof window != "undefined" && window, wq = typeof self != "undefined" && typeof WorkerGlobalScope != "undefined" && self instanceof WorkerGlobalScope && self, Tq = e !== void 0 && e || Sq || wq;
        Dq.global = Tq, function(e2) {
          Object.defineProperty(e2, "__esModule", { value: true });
          const t2 = mq, n2 = Dq, r2 = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
          function o2(e3) {
            return e3.replace(/\W/g, "_");
          }
          e2.sanitizeIdentifier = o2;
          let i2 = 0;
          function u2(e3) {
            if (!e3 || !e3.reference)
              return null;
            const r3 = e3.reference;
            if (r3 instanceof t2.StaticSymbol)
              return r3.name;
            if (r3.__anonymousType)
              return r3.__anonymousType;
            let u3 = n2.stringify(r3);
            return u3.indexOf("(") >= 0 ? (u3 = "anonymous_".concat(i2++), r3.__anonymousType = u3) : u3 = o2(u3), u3;
          }
          var s2;
          e2.identifierName = u2, e2.identifierModuleUrl = function(e3) {
            const r3 = e3.reference;
            return r3 instanceof t2.StaticSymbol ? r3.filePath : "./".concat(n2.stringify(r3));
          }, e2.viewClassName = function(e3, t3) {
            return "View_".concat(u2({ reference: e3 }), "_").concat(t3);
          }, e2.rendererTypeName = function(e3) {
            return "RenderType_".concat(u2({ reference: e3 }));
          }, e2.hostViewClassName = function(e3) {
            return "HostView_".concat(u2({ reference: e3 }));
          }, e2.componentFactoryName = function(e3) {
            return "".concat(u2({ reference: e3 }), "NgFactory");
          }, function(e3) {
            e3[e3.Pipe = 0] = "Pipe", e3[e3.Directive = 1] = "Directive", e3[e3.NgModule = 2] = "NgModule", e3[e3.Injectable = 3] = "Injectable";
          }(s2 = e2.CompileSummaryKind || (e2.CompileSummaryKind = {})), e2.tokenName = function(e3) {
            return e3.value != null ? o2(e3.value) : u2(e3.identifier);
          }, e2.tokenReference = function(e3) {
            return e3.identifier != null ? e3.identifier.reference : e3.value;
          };
          e2.CompileStylesheetMetadata = class {
            constructor() {
              let { moduleUrl: e3, styles: t3, styleUrls: n3 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
              this.moduleUrl = e3 || null, this.styles = c2(t3), this.styleUrls = c2(n3);
            }
          };
          e2.CompileTemplateMetadata = class {
            constructor(e3) {
              let { encapsulation: t3, template: n3, templateUrl: r3, htmlAst: o3, styles: i3, styleUrls: u3, externalStylesheets: s3, animations: a3, ngContentSelectors: p3, interpolation: f2, isInline: d2, preserveWhitespaces: h2 } = e3;
              if (this.encapsulation = t3, this.template = n3, this.templateUrl = r3, this.htmlAst = o3, this.styles = c2(i3), this.styleUrls = c2(u3), this.externalStylesheets = c2(s3), this.animations = a3 ? l3(a3) : [], this.ngContentSelectors = p3 || [], f2 && f2.length != 2)
                throw new Error("'interpolation' should have a start and an end symbol.");
              this.interpolation = f2, this.isInline = d2, this.preserveWhitespaces = h2;
            }
            toSummary() {
              return { ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations };
            }
          };
          class a2 {
            static create(e3) {
              let { isHost: t3, type: o3, isComponent: i3, selector: u3, exportAs: s3, changeDetection: c3, inputs: l4, outputs: p3, host: f2, providers: d2, viewProviders: h2, queries: g2, guards: m2, viewQueries: y2, entryComponents: D2, template: E2, componentViewType: C2, rendererType: b2, componentFactory: v2 } = e3;
              const A2 = {}, F2 = {}, x2 = {};
              f2 != null && Object.keys(f2).forEach((e4) => {
                const t4 = f2[e4], n3 = e4.match(r2);
                n3 === null ? x2[e4] = t4 : n3[1] != null ? F2[n3[1]] = t4 : n3[2] != null && (A2[n3[2]] = t4);
              });
              const S2 = {};
              l4 != null && l4.forEach((e4) => {
                const t4 = n2.splitAtColon(e4, [e4, e4]);
                S2[t4[0]] = t4[1];
              });
              const w2 = {};
              return p3 != null && p3.forEach((e4) => {
                const t4 = n2.splitAtColon(e4, [e4, e4]);
                w2[t4[0]] = t4[1];
              }), new a2({ isHost: t3, type: o3, isComponent: !!i3, selector: u3, exportAs: s3, changeDetection: c3, inputs: S2, outputs: w2, hostListeners: A2, hostProperties: F2, hostAttributes: x2, providers: d2, viewProviders: h2, queries: g2, guards: m2, viewQueries: y2, entryComponents: D2, template: E2, componentViewType: C2, rendererType: b2, componentFactory: v2 });
            }
            constructor(e3) {
              let { isHost: t3, type: n3, isComponent: r3, selector: o3, exportAs: i3, changeDetection: u3, inputs: s3, outputs: a3, hostListeners: l4, hostProperties: p3, hostAttributes: f2, providers: d2, viewProviders: h2, queries: g2, guards: m2, viewQueries: y2, entryComponents: D2, template: E2, componentViewType: C2, rendererType: b2, componentFactory: v2 } = e3;
              this.isHost = !!t3, this.type = n3, this.isComponent = r3, this.selector = o3, this.exportAs = i3, this.changeDetection = u3, this.inputs = s3, this.outputs = a3, this.hostListeners = l4, this.hostProperties = p3, this.hostAttributes = f2, this.providers = c2(d2), this.viewProviders = c2(h2), this.queries = c2(g2), this.guards = m2, this.viewQueries = c2(y2), this.entryComponents = c2(D2), this.template = E2, this.componentViewType = C2, this.rendererType = b2, this.componentFactory = v2;
            }
            toSummary() {
              return { summaryKind: s2.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory };
            }
          }
          e2.CompileDirectiveMetadata = a2;
          e2.CompilePipeMetadata = class {
            constructor(e3) {
              let { type: t3, name: n3, pure: r3 } = e3;
              this.type = t3, this.name = n3, this.pure = !!r3;
            }
            toSummary() {
              return { summaryKind: s2.Pipe, type: this.type, name: this.name, pure: this.pure };
            }
          };
          e2.CompileShallowModuleMetadata = class {
          };
          e2.CompileNgModuleMetadata = class {
            constructor(e3) {
              let { type: t3, providers: n3, declaredDirectives: r3, exportedDirectives: o3, declaredPipes: i3, exportedPipes: u3, entryComponents: s3, bootstrapComponents: a3, importedModules: l4, exportedModules: p3, schemas: f2, transitiveModule: d2, id: h2 } = e3;
              this.type = t3 || null, this.declaredDirectives = c2(r3), this.exportedDirectives = c2(o3), this.declaredPipes = c2(i3), this.exportedPipes = c2(u3), this.providers = c2(n3), this.entryComponents = c2(s3), this.bootstrapComponents = c2(a3), this.importedModules = c2(l4), this.exportedModules = c2(p3), this.schemas = c2(f2), this.id = h2 || null, this.transitiveModule = d2 || null;
            }
            toSummary() {
              const e3 = this.transitiveModule;
              return { summaryKind: s2.NgModule, type: this.type, entryComponents: e3.entryComponents, providers: e3.providers, modules: e3.modules, exportedDirectives: e3.exportedDirectives, exportedPipes: e3.exportedPipes };
            }
          };
          function c2(e3) {
            return e3 || [];
          }
          e2.TransitiveCompileNgModuleMetadata = class {
            constructor() {
              this.directivesSet = /* @__PURE__ */ new Set(), this.directives = [], this.exportedDirectivesSet = /* @__PURE__ */ new Set(), this.exportedDirectives = [], this.pipesSet = /* @__PURE__ */ new Set(), this.pipes = [], this.exportedPipesSet = /* @__PURE__ */ new Set(), this.exportedPipes = [], this.modulesSet = /* @__PURE__ */ new Set(), this.modules = [], this.entryComponentsSet = /* @__PURE__ */ new Set(), this.entryComponents = [], this.providers = [];
            }
            addProvider(e3, t3) {
              this.providers.push({ provider: e3, module: t3 });
            }
            addDirective(e3) {
              this.directivesSet.has(e3.reference) || (this.directivesSet.add(e3.reference), this.directives.push(e3));
            }
            addExportedDirective(e3) {
              this.exportedDirectivesSet.has(e3.reference) || (this.exportedDirectivesSet.add(e3.reference), this.exportedDirectives.push(e3));
            }
            addPipe(e3) {
              this.pipesSet.has(e3.reference) || (this.pipesSet.add(e3.reference), this.pipes.push(e3));
            }
            addExportedPipe(e3) {
              this.exportedPipesSet.has(e3.reference) || (this.exportedPipesSet.add(e3.reference), this.exportedPipes.push(e3));
            }
            addModule(e3) {
              this.modulesSet.has(e3.reference) || (this.modulesSet.add(e3.reference), this.modules.push(e3));
            }
            addEntryComponent(e3) {
              this.entryComponentsSet.has(e3.componentType) || (this.entryComponentsSet.add(e3.componentType), this.entryComponents.push(e3));
            }
          };
          function l3(e3) {
            return e3.reduce((e4, t3) => {
              const n3 = Array.isArray(t3) ? l3(t3) : t3;
              return e4.concat(n3);
            }, []);
          }
          function p2(e3) {
            return e3.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
          }
          e2.ProviderMeta = class {
            constructor(e3, t3) {
              let { useClass: n3, useValue: r3, useExisting: o3, useFactory: i3, deps: u3, multi: s3 } = t3;
              this.token = e3, this.useClass = n3 || null, this.useValue = r3, this.useExisting = o3, this.useFactory = i3 || null, this.dependencies = u3 || null, this.multi = !!s3;
            }
          }, e2.flatten = l3, e2.templateSourceUrl = function(e3, n3, r3) {
            let o3;
            return o3 = r3.isInline ? n3.type.reference instanceof t2.StaticSymbol ? "".concat(n3.type.reference.filePath, ".").concat(n3.type.reference.name, ".html") : "".concat(u2(e3), "/").concat(u2(n3.type), ".html") : r3.templateUrl, n3.type.reference instanceof t2.StaticSymbol ? o3 : p2(o3);
          }, e2.sharedStylesheetJitUrl = function(e3, t3) {
            const n3 = e3.moduleUrl.split(/\/\\/g), r3 = n3[n3.length - 1];
            return p2("css/".concat(t3).concat(r3, ".ngstyle.js"));
          }, e2.ngModuleJitUrl = function(e3) {
            return p2("".concat(u2(e3.type), "/module.ngfactory.js"));
          }, e2.templateJitUrl = function(e3, t3) {
            return p2("".concat(u2(e3), "/").concat(u2(t3.type), ".ngfactory.js"));
          };
        }(gq), function(e2) {
          Object.defineProperty(e2, "__esModule", { value: true });
          const t2 = hq, n2 = gq;
          class r2 {
            constructor(e3, t3, n3, r3) {
              this.file = e3, this.offset = t3, this.line = n3, this.col = r3;
            }
            toString() {
              return this.offset != null ? "".concat(this.file.url, "@").concat(this.line, ":").concat(this.col) : this.file.url;
            }
            moveBy(e3) {
              const n3 = this.file.content, o3 = n3.length;
              let i3 = this.offset, u3 = this.line, s2 = this.col;
              for (; i3 > 0 && e3 < 0; ) {
                i3--, e3++;
                if (n3.charCodeAt(i3) == t2.$LF) {
                  u3--;
                  const e4 = n3.substr(0, i3 - 1).lastIndexOf(String.fromCharCode(t2.$LF));
                  s2 = e4 > 0 ? i3 - e4 : i3;
                } else
                  s2--;
              }
              for (; i3 < o3 && e3 > 0; ) {
                const r3 = n3.charCodeAt(i3);
                i3++, e3--, r3 == t2.$LF ? (u3++, s2 = 0) : s2++;
              }
              return new r2(this.file, i3, u3, s2);
            }
            getContext(e3, t3) {
              const n3 = this.file.content;
              let r3 = this.offset;
              if (r3 != null) {
                r3 > n3.length - 1 && (r3 = n3.length - 1);
                let o3 = r3, i3 = 0, u3 = 0;
                for (; i3 < e3 && r3 > 0 && (r3--, i3++, n3[r3] != "\n" || ++u3 != t3); )
                  ;
                for (i3 = 0, u3 = 0; i3 < e3 && o3 < n3.length - 1 && (o3++, i3++, n3[o3] != "\n" || ++u3 != t3); )
                  ;
                return { before: n3.substring(r3, this.offset), after: n3.substring(this.offset, o3 + 1) };
              }
              return null;
            }
          }
          e2.ParseLocation = r2;
          class o2 {
            constructor(e3, t3) {
              this.content = e3, this.url = t3;
            }
          }
          e2.ParseSourceFile = o2;
          class i2 {
            constructor(e3, t3) {
              let n3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
              this.start = e3, this.end = t3, this.details = n3;
            }
            toString() {
              return this.start.file.content.substring(this.start.offset, this.end.offset);
            }
          }
          var u2;
          e2.ParseSourceSpan = i2, e2.EMPTY_PARSE_LOCATION = new r2(new o2("", ""), 0, 0, 0), e2.EMPTY_SOURCE_SPAN = new i2(e2.EMPTY_PARSE_LOCATION, e2.EMPTY_PARSE_LOCATION), function(e3) {
            e3[e3.WARNING = 0] = "WARNING", e3[e3.ERROR = 1] = "ERROR";
          }(u2 = e2.ParseErrorLevel || (e2.ParseErrorLevel = {}));
          e2.ParseError = class {
            constructor(e3, t3) {
              let n3 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : u2.ERROR;
              this.span = e3, this.msg = t3, this.level = n3;
            }
            contextualMessage() {
              const e3 = this.span.start.getContext(100, 3);
              return e3 ? "".concat(this.msg, ' ("').concat(e3.before, "[").concat(u2[this.level], " ->]").concat(e3.after, '")') : this.msg;
            }
            toString() {
              const e3 = this.span.details ? ", ".concat(this.span.details) : "";
              return "".concat(this.contextualMessage(), ": ").concat(this.span.start).concat(e3);
            }
          }, e2.typeSourceSpan = function(e3, t3) {
            const u3 = n2.identifierModuleUrl(t3), s2 = u3 != null ? "in ".concat(e3, " ").concat(n2.identifierName(t3), " in ").concat(u3) : "in ".concat(e3, " ").concat(n2.identifierName(t3)), a2 = new o2("", s2);
            return new i2(new r2(a2, -1, -1, -1), new r2(a2, -1, -1, -1));
          }, e2.r3JitTypeSourceSpan = function(e3, t3, n3) {
            const u3 = "in ".concat(e3, " ").concat(t3, " in ").concat(n3), s2 = new o2("", u3);
            return new i2(new r2(s2, -1, -1, -1), new r2(s2, -1, -1, -1));
          };
        }(dq);
        const { ParseSourceSpan: Bq } = dq, Nq = au, { htmlTrim: kq, getLeadingAndTrailingHtmlWhitespace: Pq, hasHtmlWhitespace: Oq, canHaveInterpolation: Iq, getNodeCssStyleDisplay: Lq, isDanglingSpaceSensitiveNode: jq, isIndentationSensitiveNode: _q, isLeadingSpaceSensitiveNode: Mq, isTrailingSpaceSensitiveNode: Rq, isWhitespaceSensitiveNode: Vq } = fq, $q = [function(e2) {
          e2.walk((e3) => {
            if (e3.type === "element" && e3.tagDefinition.ignoreFirstLf && e3.children.length > 0 && e3.children[0].type === "text" && e3.children[0].value[0] === "\n") {
              const [t2, ...n2] = e3.children;
              e3.setChildren(t2.value.length === 1 ? n2 : [t2.clone({ value: t2.value.slice(1) }), ...n2]);
            }
          });
        }, function(e2) {
          const t2 = (e3) => e3.type === "element" && e3.prev && e3.prev.type === "ieConditionalStartComment" && e3.prev.sourceSpan.end.offset === e3.startSourceSpan.start.offset && e3.firstChild && e3.firstChild.type === "ieConditionalEndComment" && e3.firstChild.sourceSpan.start.offset === e3.startSourceSpan.end.offset;
          e2.walk((e3) => {
            if (e3.children) {
              const n2 = e3.children.map(t2);
              if (n2.some(Boolean)) {
                const t3 = [];
                for (let r2 = 0; r2 < e3.children.length; r2++) {
                  const o2 = e3.children[r2];
                  if (!n2[r2 + 1])
                    if (n2[r2]) {
                      const e4 = o2.prev, n3 = o2.firstChild, r3 = new Bq(e4.sourceSpan.start, n3.sourceSpan.end), i2 = new Bq(r3.start, o2.sourceSpan.end);
                      t3.push(o2.clone({ condition: e4.condition, sourceSpan: i2, startSourceSpan: r3, children: o2.children.slice(1) }));
                    } else
                      t3.push(o2);
                }
                e3.setChildren(t3);
              }
            }
          });
        }, function(e2) {
          return function(e3, t2, n2) {
            e3.walk((e4) => {
              if (e4.children) {
                const r2 = e4.children.map(t2);
                if (r2.some(Boolean)) {
                  const t3 = [];
                  for (let o2 = 0; o2 < e4.children.length; o2++) {
                    const i2 = e4.children[o2];
                    if (i2.type !== "text" && !r2[o2]) {
                      t3.push(i2);
                      continue;
                    }
                    const u2 = i2.type === "text" ? i2 : i2.clone({ type: "text", value: n2(i2) });
                    if (t3.length === 0 || Nq(t3).type !== "text") {
                      t3.push(u2);
                      continue;
                    }
                    const s2 = t3.pop();
                    t3.push(s2.clone({ value: s2.value + u2.value, sourceSpan: new Bq(s2.sourceSpan.start, u2.sourceSpan.end) }));
                  }
                  e4.setChildren(t3);
                }
              }
            });
          }(e2, (e3) => e3.type === "cdata", (e3) => "<![CDATA[".concat(e3.value, "]]>"));
        }, function(e2, t2) {
          if (t2.parser === "html")
            return;
          const n2 = /{{(.+?)}}/s;
          e2.walk((e3) => {
            if (!Iq(e3))
              return;
            const t3 = [];
            for (const r2 of e3.children) {
              if (r2.type !== "text") {
                t3.push(r2);
                continue;
              }
              let e4 = r2.sourceSpan.start, o2 = null;
              const i2 = r2.value.split(n2);
              for (let n3 = 0; n3 < i2.length; n3++, e4 = o2) {
                const r3 = i2[n3];
                n3 % 2 != 0 ? (o2 = e4.moveBy(r3.length + 4), t3.push({ type: "interpolation", sourceSpan: new Bq(e4, o2), children: r3.length === 0 ? [] : [{ type: "text", value: r3, sourceSpan: new Bq(e4.moveBy(2), o2.moveBy(-2)) }] })) : (o2 = e4.moveBy(r3.length), r3.length > 0 && t3.push({ type: "text", value: r3, sourceSpan: new Bq(e4, o2) }));
              }
            }
            e3.setChildren(t3);
          });
        }, function(e2) {
          e2.walk((e3) => {
            if (!e3.children)
              return;
            if (e3.children.length === 0 || e3.children.length === 1 && e3.children[0].type === "text" && kq(e3.children[0].value).length === 0)
              return e3.hasDanglingSpaces = e3.children.length > 0, void (e3.children = []);
            const t2 = Vq(e3), n2 = _q(e3);
            e3.setChildren(e3.children.flatMap((e4) => {
              if (e4.type !== "text" || t2)
                return e4;
              const n3 = [], { leadingWhitespace: r2, text: o2, trailingWhitespace: i2 } = Pq(e4.value);
              return r2 && n3.push(Wq), o2 && n3.push({ type: "text", value: o2, sourceSpan: new Bq(e4.sourceSpan.start.moveBy(r2.length), e4.sourceSpan.end.moveBy(-i2.length)) }), i2 && n3.push(Wq), n3;
            }).map((e4, t3, n3) => {
              if (e4 !== Wq)
                return Object.assign(Object.assign({}, e4), {}, { hasLeadingSpaces: n3[t3 - 1] === Wq, hasTrailingSpaces: n3[t3 + 1] === Wq });
            }).filter(Boolean)), e3.isWhitespaceSensitive = t2, e3.isIndentationSensitive = n2;
          });
        }, function(e2, t2) {
          e2.walk((e3) => Object.assign(e3, { cssDisplay: Lq(e3, t2) }));
        }, function(e2) {
          e2.walk((e3) => Object.assign(e3, { isSelfClosing: !e3.children || e3.type === "element" && (e3.tagDefinition.isVoid || e3.startSourceSpan === e3.endSourceSpan) }));
        }, function(e2, t2) {
          e2.walk((e3) => e3.type !== "element" ? e3 : Object.assign(e3, { hasHtmComponentClosingTag: e3.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(t2.originalText.slice(e3.endSourceSpan.start.offset, e3.endSourceSpan.end.offset)) }));
        }, function(e2, t2) {
          e2.walk((e3) => {
            e3.children && (e3.children.length !== 0 ? e3.setChildren(e3.children.map((e4) => Object.assign(Object.assign({}, e4), {}, { isLeadingSpaceSensitive: Mq(e4, t2), isTrailingSpaceSensitive: Rq(e4, t2) })).map((e4, t3, n2) => Object.assign(Object.assign({}, e4), {}, { isLeadingSpaceSensitive: (t3 === 0 || n2[t3 - 1].isTrailingSpaceSensitive) && e4.isLeadingSpaceSensitive, isTrailingSpaceSensitive: (t3 === n2.length - 1 || n2[t3 + 1].isLeadingSpaceSensitive) && e4.isTrailingSpaceSensitive }))) : e3.isDanglingSpaceSensitive = jq(e3));
          });
        }, function(e2) {
          const t2 = (e3) => e3.type === "element" && e3.attrs.length === 0 && e3.children.length === 1 && e3.firstChild.type === "text" && !Oq(e3.children[0].value) && !e3.firstChild.hasLeadingSpaces && !e3.firstChild.hasTrailingSpaces && e3.isLeadingSpaceSensitive && !e3.hasLeadingSpaces && e3.isTrailingSpaceSensitive && !e3.hasTrailingSpaces && e3.prev && e3.prev.type === "text" && e3.next && e3.next.type === "text";
          e2.walk((e3) => {
            if (e3.children) {
              const n2 = e3.children.map(t2);
              if (n2.some(Boolean)) {
                const t3 = [];
                for (let r2 = 0; r2 < e3.children.length; r2++) {
                  const o2 = e3.children[r2];
                  if (n2[r2]) {
                    const n3 = t3.pop(), i2 = e3.children[++r2], { isTrailingSpaceSensitive: u2, hasTrailingSpaces: s2 } = i2;
                    t3.push(n3.clone({ value: n3.value + "<".concat(o2.rawName, ">") + o2.firstChild.value + "</".concat(o2.rawName, ">") + i2.value, sourceSpan: new Bq(n3.sourceSpan.start, i2.sourceSpan.end), isTrailingSpaceSensitive: u2, hasTrailingSpaces: s2 }));
                  } else
                    t3.push(o2);
                }
                e3.setChildren(t3);
              }
            }
          });
        }];
        const Wq = { type: "whitespace" };
        var qq = function(e2, t2) {
          const n2 = e2.map((e3) => e3);
          for (const e3 of $q)
            e3(n2, t2);
          return n2;
        };
        var Uq = { hasPragma: function(e2) {
          return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(e2);
        }, insertPragma: function(e2) {
          return "<!-- @format -->\n\n" + e2.replace(/^\s*\n/, "");
        } };
        var zq = { locStart: function(e2) {
          return e2.sourceSpan.start.offset;
        }, locEnd: function(e2) {
          return e2.sourceSpan.end.offset;
        } };
        const Gq = Ty, { isNonEmptyArray: Hq } = dc, { builders: { indent: Jq, join: Xq, line: Yq, softline: Kq }, utils: { replaceTextEndOfLine: Qq } } = Zc, { locStart: Zq, locEnd: eU } = zq, { isTextLikeNode: tU, getLastDescendant: nU, isPreLikeNode: rU, hasPrettierIgnore: oU, shouldPreserveContent: iU } = fq;
        function uU(e2, t2) {
          return e2.lastChild && gU(e2.lastChild) ? "" : [aU(e2, t2), lU(e2, t2)];
        }
        function sU(e2, t2) {
          return (e2.next ? dU(e2.next) : hU(e2.parent)) ? "" : [pU(e2, t2), cU(e2, t2)];
        }
        function aU(e2, t2) {
          return hU(e2) ? pU(e2.lastChild, t2) : "";
        }
        function cU(e2, t2) {
          return gU(e2) ? lU(e2.parent, t2) : mU(e2) ? vU(e2.next) : "";
        }
        function lU(e2, t2) {
          if (Gq(!e2.isSelfClosing), fU(e2, t2))
            return "";
          switch (e2.type) {
            case "ieConditionalComment":
              return "<!";
            case "element":
              if (e2.hasHtmComponentClosingTag)
                return "<//";
            default:
              return "</".concat(e2.rawName);
          }
        }
        function pU(e2, t2) {
          if (fU(e2, t2))
            return "";
          switch (e2.type) {
            case "ieConditionalComment":
            case "ieConditionalEndComment":
              return "[endif]-->";
            case "ieConditionalStartComment":
              return "]><!-->";
            case "interpolation":
              return "}}";
            case "element":
              if (e2.isSelfClosing)
                return "/>";
            default:
              return ">";
          }
        }
        function fU(e2, t2) {
          return !e2.isSelfClosing && !e2.endSourceSpan && (oU(e2) || iU(e2.parent, t2));
        }
        function dU(e2) {
          return e2.prev && e2.prev.type !== "docType" && !tU(e2.prev) && e2.isLeadingSpaceSensitive && !e2.hasLeadingSpaces;
        }
        function hU(e2) {
          return e2.lastChild && e2.lastChild.isTrailingSpaceSensitive && !e2.lastChild.hasTrailingSpaces && !tU(nU(e2.lastChild)) && !rU(e2);
        }
        function gU(e2) {
          return !e2.next && !e2.hasTrailingSpaces && e2.isTrailingSpaceSensitive && tU(nU(e2));
        }
        function mU(e2) {
          return e2.next && !tU(e2.next) && tU(e2) && e2.isTrailingSpaceSensitive && !e2.hasTrailingSpaces;
        }
        function yU(e2) {
          return !e2.prev && e2.isLeadingSpaceSensitive && !e2.hasLeadingSpaces;
        }
        function DU(e2, t2, n2) {
          const r2 = e2.getValue();
          if (!Hq(r2.attrs))
            return r2.isSelfClosing ? " " : "";
          const o2 = r2.prev && r2.prev.type === "comment" && function(e3) {
            const t3 = e3.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/s);
            return !!t3 && (!t3[1] || t3[1].split(/\s+/));
          }(r2.prev.value), i2 = typeof o2 == "boolean" ? () => o2 : Array.isArray(o2) ? (e3) => o2.includes(e3.rawName) : () => false, u2 = e2.map((e3) => {
            const r3 = e3.getValue();
            return i2(r3) ? Qq(t2.originalText.slice(Zq(r3), eU(r3))) : n2();
          }, "attrs"), s2 = r2.type === "element" && r2.fullName === "script" && r2.attrs.length === 1 && r2.attrs[0].fullName === "src" && r2.children.length === 0, a2 = [Jq([s2 ? " " : Yq, Xq(Yq, u2)])];
          return r2.firstChild && yU(r2.firstChild) || r2.isSelfClosing && hU(r2.parent) || s2 ? a2.push(r2.isSelfClosing ? " " : "") : a2.push(t2.bracketSameLine ? r2.isSelfClosing ? " " : "" : r2.isSelfClosing ? Yq : Kq), a2;
        }
        function EU(e2) {
          return e2.firstChild && yU(e2.firstChild) ? "" : AU(e2);
        }
        function CU(e2, t2) {
          return e2.prev && mU(e2.prev) ? "" : [bU(e2, t2), vU(e2)];
        }
        function bU(e2, t2) {
          return yU(e2) ? AU(e2.parent) : dU(e2) ? pU(e2.prev, t2) : "";
        }
        function vU(e2) {
          switch (e2.type) {
            case "ieConditionalComment":
            case "ieConditionalStartComment":
              return "<!--[if ".concat(e2.condition);
            case "ieConditionalEndComment":
              return "<!--<!";
            case "interpolation":
              return "{{";
            case "docType":
              return "<!DOCTYPE";
            case "element":
              if (e2.condition)
                return "<!--[if ".concat(e2.condition, "]><!--><").concat(e2.rawName);
            default:
              return "<".concat(e2.rawName);
          }
        }
        function AU(e2) {
          switch (Gq(!e2.isSelfClosing), e2.type) {
            case "ieConditionalComment":
              return "]>";
            case "element":
              if (e2.condition)
                return "><!--<![endif]-->";
            default:
              return ">";
          }
        }
        var FU = { printClosingTag: function(e2, t2) {
          return [e2.isSelfClosing ? "" : uU(e2, t2), sU(e2, t2)];
        }, printClosingTagStart: uU, printClosingTagStartMarker: lU, printClosingTagEndMarker: pU, printClosingTagSuffix: cU, printClosingTagEnd: sU, needsToBorrowLastChildClosingTagEndMarker: hU, needsToBorrowParentClosingTagStartMarker: gU, needsToBorrowPrevClosingTagEndMarker: dU, printOpeningTag: function(e2, t2, n2) {
          const r2 = e2.getValue();
          return [CU(r2, t2), DU(e2, t2, n2), r2.isSelfClosing ? "" : EU(r2)];
        }, printOpeningTagStart: CU, printOpeningTagPrefix: bU, printOpeningTagStartMarker: vU, printOpeningTagEndMarker: AU, needsToBorrowNextOpeningTagStartMarker: mU, needsToBorrowParentOpeningTagEndMarker: yU }, xU = { exports: {} };
        !function(t2) {
          var n2, r2;
          n2 = e, r2 = function() {
            return function(e2, t3) {
              var n3 = t3 && t3.logger || console;
              function r3(e3) {
                return e3 === " " || e3 === "	" || e3 === "\n" || e3 === "\f" || e3 === "\r";
              }
              function o2(t4) {
                var n4, r4 = t4.exec(e2.substring(y2));
                if (r4)
                  return n4 = r4[0], y2 += n4.length, n4;
              }
              for (var i2, u2, s2, a2, c2, l3 = e2.length, p2 = /^[ \t\n\r\u000c]+/, f2 = /^[, \t\n\r\u000c]+/, d2 = /^[^ \t\n\r\u000c]+/, h2 = /[,]+$/, g2 = /^\d+$/, m2 = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, y2 = 0, D2 = []; ; ) {
                if (o2(f2), y2 >= l3)
                  return D2;
                i2 = o2(d2), u2 = [], i2.slice(-1) === "," ? (i2 = i2.replace(h2, ""), C2()) : E2();
              }
              function E2() {
                for (o2(p2), s2 = "", a2 = "in descriptor"; ; ) {
                  if (c2 = e2.charAt(y2), a2 === "in descriptor")
                    if (r3(c2))
                      s2 && (u2.push(s2), s2 = "", a2 = "after descriptor");
                    else {
                      if (c2 === ",")
                        return y2 += 1, s2 && u2.push(s2), void C2();
                      if (c2 === "(")
                        s2 += c2, a2 = "in parens";
                      else {
                        if (c2 === "")
                          return s2 && u2.push(s2), void C2();
                        s2 += c2;
                      }
                    }
                  else if (a2 === "in parens")
                    if (c2 === ")")
                      s2 += c2, a2 = "in descriptor";
                    else {
                      if (c2 === "")
                        return u2.push(s2), void C2();
                      s2 += c2;
                    }
                  else if (a2 === "after descriptor")
                    if (r3(c2))
                      ;
                    else {
                      if (c2 === "")
                        return void C2();
                      a2 = "in descriptor", y2 -= 1;
                    }
                  y2 += 1;
                }
              }
              function C2() {
                var t4, r4, o3, s3, a3, c3, l4, p3, f3, d3 = false, h3 = {};
                for (s3 = 0; s3 < u2.length; s3++)
                  c3 = (a3 = u2[s3])[a3.length - 1], l4 = a3.substring(0, a3.length - 1), p3 = parseInt(l4, 10), f3 = parseFloat(l4), g2.test(l4) && c3 === "w" ? ((t4 || r4) && (d3 = true), p3 === 0 ? d3 = true : t4 = p3) : m2.test(l4) && c3 === "x" ? ((t4 || r4 || o3) && (d3 = true), f3 < 0 ? d3 = true : r4 = f3) : g2.test(l4) && c3 === "h" ? ((o3 || r4) && (d3 = true), p3 === 0 ? d3 = true : o3 = p3) : d3 = true;
                d3 ? n3 && n3.error && n3.error("Invalid srcset descriptor found in '" + e2 + "' at '" + a3 + "'.") : (h3.url = i2, t4 && (h3.w = t4), r4 && (h3.d = r4), o3 && (h3.h = o3), D2.push(h3));
              }
            };
          }, t2.exports ? t2.exports = r2() : n2.parseSrcset = r2();
        }(xU);
        const SU = xU.exports, { builders: { ifBreak: wU, join: TU, line: BU } } = Zc;
        var NU = { printImgSrcset: function(e2) {
          const t2 = SU(e2, { logger: { error(e3) {
            throw new Error(e3);
          } } }), n2 = t2.some((e3) => {
            let { w: t3 } = e3;
            return t3;
          }), r2 = t2.some((e3) => {
            let { h: t3 } = e3;
            return t3;
          });
          if (n2 + r2 + t2.some((e3) => {
            let { d: t3 } = e3;
            return t3;
          }) > 1)
            throw new Error("Mixed descriptor in srcset is not supported");
          const o2 = n2 ? "w" : r2 ? "h" : "d", i2 = n2 ? "w" : r2 ? "h" : "x", u2 = (e3) => Math.max(...e3), s2 = t2.map((e3) => e3.url), a2 = u2(s2.map((e3) => e3.length)), c2 = t2.map((e3) => e3[o2]).map((e3) => e3 ? e3.toString() : ""), l3 = c2.map((e3) => {
            const t3 = e3.indexOf(".");
            return t3 === -1 ? e3.length : t3;
          }), p2 = u2(l3);
          return TU([",", BU], s2.map((e3, t3) => {
            const n3 = [e3], r3 = c2[t3];
            if (r3) {
              const o3 = a2 - e3.length + 1, u3 = p2 - l3[t3], s3 = " ".repeat(o3 + u3);
              n3.push(wU(s3, " "), r3 + i2);
            }
            return n3;
          }));
        }, printClassNames: function(e2) {
          return e2.trim().split(/\s+/).join(" ");
        } };
        const { builders: { group: kU } } = Zc;
        var PU = { isVueEventBindingExpression: function(e2) {
          const t2 = e2.trim();
          return /^(?:[\w$]+|\([^)]*?\))\s*=>|^function\s*\(/.test(t2) || /^[$A-Z_a-z][\w$]*(?:\.[$A-Z_a-z][\w$]*|\['[^']*?']|\["[^"]*?"]|\[\d+]|\[[$A-Z_a-z][\w$]*])*$/.test(t2);
        }, printVueFor: function(e2, t2) {
          const { left: n2, operator: r2, right: o2 } = function(e3) {
            const t3 = /(.*?)\s+(in|of)\s+(.*)/s, n3 = /,([^,\]}]*)(?:,([^,\]}]*))?$/, r3 = /^\(|\)$/g, o3 = e3.match(t3);
            if (!o3)
              return;
            const i2 = {};
            i2.for = o3[3].trim();
            const u2 = o3[1].trim().replace(r3, ""), s2 = u2.match(n3);
            s2 ? (i2.alias = u2.replace(n3, ""), i2.iterator1 = s2[1].trim(), s2[2] && (i2.iterator2 = s2[2].trim())) : i2.alias = u2;
            return { left: "".concat([i2.alias, i2.iterator1, i2.iterator2].filter(Boolean).join(",")), operator: o3[2], right: i2.for };
          }(e2);
          return [kU(t2("function _(".concat(n2, ") {}"), { parser: "babel", __isVueForBindingLeft: true })), " ", r2, " ", t2(o2, { parser: "__js_expression" }, { stripTrailingHardline: true })];
        }, printVueBindings: function(e2, t2) {
          return t2("function _(".concat(e2, ") {}"), { parser: "babel", __isVueBindings: true });
        } };
        const { needsToBorrowParentClosingTagStartMarker: OU, printClosingTagStartMarker: IU, needsToBorrowLastChildClosingTagEndMarker: LU, printClosingTagEndMarker: jU, needsToBorrowParentOpeningTagEndMarker: _U, printOpeningTagEndMarker: MU } = FU;
        var RU = function(e2, t2) {
          let n2 = e2.startSourceSpan.end.offset;
          e2.firstChild && _U(e2.firstChild) && (n2 -= MU(e2).length);
          let r2 = e2.endSourceSpan.start.offset;
          return e2.lastChild && OU(e2.lastChild) ? r2 += IU(e2, t2).length : LU(e2) && (r2 -= jU(e2.lastChild, t2).length), t2.originalText.slice(n2, r2);
        };
        const { builders: { breakParent: VU, group: $U, hardline: WU, indent: qU, line: UU, fill: zU, softline: GU }, utils: { mapDoc: HU, replaceTextEndOfLine: JU } } = Zc, XU = Wj, { printClosingTag: YU, printClosingTagSuffix: KU, needsToBorrowPrevClosingTagEndMarker: QU, printOpeningTagPrefix: ZU, printOpeningTag: ez } = FU, { printImgSrcset: tz, printClassNames: nz } = NU, { printVueFor: rz, printVueBindings: oz, isVueEventBindingExpression: iz } = PU, { isScriptLikeTag: uz, isVueNonHtmlBlock: sz, inferScriptParser: az, htmlTrimPreserveIndentation: cz, dedentString: lz, unescapeQuoteEntities: pz, isVueSlotAttribute: fz, isVueSfcBindingsAttribute: dz, getTextValueParts: hz } = fq, gz = RU;
        function mz(e2, t2, n2) {
          const r2 = (t3) => new RegExp(t3.join("|")).test(e2.fullName), o2 = () => pz(e2.value);
          let i2 = false;
          const u2 = (e3, t3) => {
            const n3 = e3.type === "NGRoot" ? e3.node.type === "NGMicrosyntax" && e3.node.body.length === 1 && e3.node.body[0].type === "NGMicrosyntaxExpression" ? e3.node.body[0].expression : e3.node : e3.type === "JsExpressionRoot" ? e3.node : e3;
            !n3 || n3.type !== "ObjectExpression" && n3.type !== "ArrayExpression" && (t3.parser !== "__vue_expression" || n3.type !== "TemplateLiteral" && n3.type !== "StringLiteral") || (i2 = true);
          }, s2 = function(e3) {
            let t3 = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1];
            return $U([qU([GU, e3]), t3 ? GU : ""]);
          }, a2 = (e3) => i2 ? ((e4) => $U(e4))(e3) : s2(e3), c2 = (e3, n3) => t2(e3, Object.assign({ __onHtmlBindingRoot: u2, __embeddedInHtml: true }, n3), { stripTrailingHardline: true });
          if (e2.fullName === "srcset" && (e2.parent.fullName === "img" || e2.parent.fullName === "source"))
            return s2(tz(o2()));
          if (e2.fullName === "class" && !n2.parentParser) {
            const e3 = o2();
            if (!e3.includes("{{"))
              return nz(e3);
          }
          if (e2.fullName === "style" && !n2.parentParser) {
            const e3 = o2();
            if (!e3.includes("{{"))
              return s2(c2(e3, { parser: "css", __isHTMLStyleAttribute: true }));
          }
          if (n2.parser === "vue") {
            if (e2.fullName === "v-for")
              return rz(o2(), c2);
            if (fz(e2) || dz(e2, n2))
              return oz(o2(), c2);
            const t3 = ["^:", "^v-bind:"], i3 = ["^v-"];
            if (r2(["^@", "^v-on:"])) {
              const e3 = o2();
              return a2(c2(e3, { parser: iz(e3) ? "__js_expression" : "__vue_event_binding" }));
            }
            if (r2(t3))
              return a2(c2(o2(), { parser: "__vue_expression" }));
            if (r2(i3))
              return a2(c2(o2(), { parser: "__js_expression" }));
          }
          if (n2.parser === "angular") {
            const t3 = (e3, t4) => c2(e3, Object.assign(Object.assign({}, t4), {}, { trailingComma: "none" })), n3 = ["^\\*"], i3 = ["^\\[.+\\]$", "^bind(on)?-", "^ng-(if|show|hide|class|style)$"], u3 = ["^i18n(-.+)?$"];
            if (r2(["^\\(.+\\)$", "^on-"]))
              return a2(t3(o2(), { parser: "__ng_action" }));
            if (r2(i3))
              return a2(t3(o2(), { parser: "__ng_binding" }));
            if (r2(u3)) {
              const t4 = o2().trim();
              return s2(zU(hz(e2, t4)), !t4.includes("@@"));
            }
            if (r2(n3))
              return a2(t3(o2(), { parser: "__ng_directive" }));
            const l3 = /{{(.+?)}}/s, p2 = o2();
            if (l3.test(p2)) {
              const e3 = [];
              for (const [n4, r3] of p2.split(l3).entries())
                if (n4 % 2 == 0)
                  e3.push(JU(r3));
                else
                  try {
                    e3.push($U(["{{", qU([UU, t3(r3, { parser: "__ng_interpolation", __isInHtmlInterpolation: true })]), UU, "}}"]));
                  } catch {
                    e3.push("{{", JU(r3), "}}");
                  }
              return $U(e3);
            }
          }
          return null;
        }
        var yz = function(e2, t2, n2, r2) {
          const o2 = e2.getValue();
          switch (o2.type) {
            case "element":
              if (uz(o2) || o2.type === "interpolation")
                return;
              if (!o2.isSelfClosing && sz(o2, r2)) {
                const i2 = az(o2, r2);
                if (!i2)
                  return;
                const u2 = gz(o2, r2);
                let s2 = /^\s*$/.test(u2), a2 = "";
                return s2 || (a2 = n2(cz(u2), { parser: i2, __embeddedInHtml: true }, { stripTrailingHardline: true }), s2 = a2 === ""), [ZU(o2, r2), $U(ez(e2, r2, t2)), s2 ? "" : WU, a2, s2 ? "" : WU, YU(o2, r2), KU(o2, r2)];
              }
              break;
            case "text":
              if (uz(o2.parent)) {
                const e3 = az(o2.parent);
                if (e3) {
                  const t3 = e3 === "markdown" ? lz(o2.value.replace(/^[^\S\n]*?\n/, "")) : o2.value, i2 = { parser: e3, __embeddedInHtml: true };
                  if (r2.parser === "html" && e3 === "babel") {
                    let e4 = "script";
                    const { attrMap: t4 } = o2.parent;
                    t4 && (t4.type === "module" || t4.type === "text/babel" && t4["data-type"] === "module") && (e4 = "module"), i2.__babelSourceType = e4;
                  }
                  return [VU, ZU(o2, r2), n2(t3, i2, { stripTrailingHardline: true }), KU(o2, r2)];
                }
              } else if (o2.parent.type === "interpolation") {
                const e3 = { __isInHtmlInterpolation: true, __embeddedInHtml: true };
                return r2.parser === "angular" ? (e3.parser = "__ng_interpolation", e3.trailingComma = "none") : r2.parser === "vue" ? e3.parser = "__vue_expression" : e3.parser = "__js_expression", [qU([UU, n2(o2.value, e3, { stripTrailingHardline: true })]), o2.parent.next && QU(o2.parent.next) ? " " : UU];
              }
              break;
            case "attribute": {
              if (!o2.value)
                break;
              if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(r2.originalText.slice(o2.valueSpan.start.offset, o2.valueSpan.end.offset)))
                return [o2.rawName, "=", o2.value];
              if (r2.parser === "lwc") {
                if (/^{.*}$/s.test(r2.originalText.slice(o2.valueSpan.start.offset, o2.valueSpan.end.offset)))
                  return [o2.rawName, "=", o2.value];
              }
              const e3 = mz(o2, (e4, t3) => n2(e4, Object.assign({ __isInHtmlAttribute: true, __embeddedInHtml: true }, t3), { stripTrailingHardline: true }), r2);
              if (e3)
                return [o2.rawName, '="', $U(HU(e3, (e4) => typeof e4 == "string" ? e4.replace(/"/g, "&quot;") : e4)), '"'];
              break;
            }
            case "front-matter":
              return XU(o2, n2);
          }
        };
        const { builders: { breakParent: Dz, group: Ez, ifBreak: Cz, line: bz, softline: vz, hardline: Az }, utils: { replaceTextEndOfLine: Fz } } = Zc, { locStart: xz, locEnd: Sz } = zq, { forceBreakChildren: wz, forceNextEmptyLine: Tz, isTextLikeNode: Bz, hasPrettierIgnore: Nz, preferHardlineAsLeadingSpaces: kz } = fq, { printOpeningTagPrefix: Pz, needsToBorrowNextOpeningTagStartMarker: Oz, printOpeningTagStartMarker: Iz, needsToBorrowPrevClosingTagEndMarker: Lz, printClosingTagEndMarker: jz, printClosingTagSuffix: _z, needsToBorrowParentClosingTagStartMarker: Mz } = FU;
        function Rz(e2, t2, n2) {
          const r2 = e2.getValue();
          return Nz(r2) ? [Pz(r2, t2), ...Fz(t2.originalText.slice(xz(r2) + (r2.prev && Oz(r2.prev) ? Iz(r2).length : 0), Sz(r2) - (r2.next && Lz(r2.next) ? jz(r2, t2).length : 0))), _z(r2, t2)] : n2();
        }
        function Vz(e2, t2) {
          return Bz(e2) && Bz(t2) ? e2.isTrailingSpaceSensitive ? e2.hasTrailingSpaces ? kz(t2) ? Az : bz : "" : kz(t2) ? Az : vz : Oz(e2) && (Nz(t2) || t2.firstChild || t2.isSelfClosing || t2.type === "element" && t2.attrs.length > 0) || e2.type === "element" && e2.isSelfClosing && Lz(t2) ? "" : !t2.isLeadingSpaceSensitive || kz(t2) || Lz(t2) && e2.lastChild && Mz(e2.lastChild) && e2.lastChild.lastChild && Mz(e2.lastChild.lastChild) ? Az : t2.hasLeadingSpaces ? bz : vz;
        }
        var $z = { printChildren: function(e2, t2, n2) {
          const r2 = e2.getValue();
          if (wz(r2))
            return [Dz, ...e2.map((e3) => {
              const r3 = e3.getValue(), o3 = r3.prev ? Vz(r3.prev, r3) : "";
              return [o3 ? [o3, Tz(r3.prev) ? Az : ""] : "", Rz(e3, t2, n2)];
            }, "children")];
          const o2 = r2.children.map(() => Symbol(""));
          return e2.map((e3, r3) => {
            const i2 = e3.getValue();
            if (Bz(i2)) {
              if (i2.prev && Bz(i2.prev)) {
                const r4 = Vz(i2.prev, i2);
                if (r4)
                  return Tz(i2.prev) ? [Az, Az, Rz(e3, t2, n2)] : [r4, Rz(e3, t2, n2)];
              }
              return Rz(e3, t2, n2);
            }
            const u2 = [], s2 = [], a2 = [], c2 = [], l3 = i2.prev ? Vz(i2.prev, i2) : "", p2 = i2.next ? Vz(i2, i2.next) : "";
            return l3 && (Tz(i2.prev) ? u2.push(Az, Az) : l3 === Az ? u2.push(Az) : Bz(i2.prev) ? s2.push(l3) : s2.push(Cz("", vz, { groupId: o2[r3 - 1] }))), p2 && (Tz(i2) ? Bz(i2.next) && c2.push(Az, Az) : p2 === Az ? Bz(i2.next) && c2.push(Az) : a2.push(p2)), [...u2, Ez([...s2, Ez([Rz(e3, t2, n2), ...a2], { id: o2[r3] })]), ...c2];
          }, "children");
        } };
        const { builders: { breakParent: Wz, dedentToRoot: qz, group: Uz, ifBreak: zz, indentIfBreak: Gz, indent: Hz, line: Jz, softline: Xz }, utils: { replaceTextEndOfLine: Yz } } = Zc, Kz = RU, { shouldPreserveContent: Qz, isScriptLikeTag: Zz, isVueCustomBlock: eG, countParents: tG, forceBreakContent: nG } = fq, { printOpeningTagPrefix: rG, printOpeningTag: oG, printClosingTagSuffix: iG, printClosingTag: uG, needsToBorrowPrevClosingTagEndMarker: sG, needsToBorrowLastChildClosingTagEndMarker: aG } = FU, { printChildren: cG } = $z;
        var lG = { printElement: function(e2, t2, n2) {
          const r2 = e2.getValue();
          if (Qz(r2, t2))
            return [rG(r2, t2), Uz(oG(e2, t2, n2)), ...Yz(Kz(r2, t2)), ...uG(r2, t2), iG(r2, t2)];
          const o2 = r2.children.length === 1 && r2.firstChild.type === "interpolation" && r2.firstChild.isLeadingSpaceSensitive && !r2.firstChild.hasLeadingSpaces && r2.lastChild.isTrailingSpaceSensitive && !r2.lastChild.hasTrailingSpaces, i2 = Symbol("element-attr-group-id"), u2 = (o3) => Uz([Uz(oG(e2, t2, n2), { id: i2 }), o3, uG(r2, t2)]);
          return r2.children.length === 0 ? u2(r2.hasDanglingSpaces && r2.isDanglingSpaceSensitive ? Jz : "") : u2([nG(r2) ? Wz : "", (s2 = [o2 ? zz(Xz, "", { groupId: i2 }) : r2.firstChild.hasLeadingSpaces && r2.firstChild.isLeadingSpaceSensitive ? Jz : r2.firstChild.type === "text" && r2.isWhitespaceSensitive && r2.isIndentationSensitive ? qz(Xz) : Xz, cG(e2, t2, n2)], o2 ? Gz(s2, { groupId: i2 }) : !Zz(r2) && !eG(r2, t2) || r2.parent.type !== "root" || t2.parser !== "vue" || t2.vueIndentScriptAndStyle ? Hz(s2) : s2), (r2.next ? sG(r2.next) : aG(r2.parent)) ? r2.lastChild.hasTrailingSpaces && r2.lastChild.isTrailingSpaceSensitive ? " " : "" : o2 ? zz(Xz, "", { groupId: i2 }) : r2.lastChild.hasTrailingSpaces && r2.lastChild.isTrailingSpaceSensitive ? Jz : (r2.lastChild.type === "comment" || r2.lastChild.type === "text" && r2.isWhitespaceSensitive && r2.isIndentationSensitive) && new RegExp("\\n[\\t ]{".concat(t2.tabWidth * tG(e2, (e3) => e3.parent && e3.parent.type !== "root"), "}$")).test(r2.lastChild.value) ? "" : Xz]);
          var s2;
        } };
        const { builders: { fill: pG, group: fG, hardline: dG, literalline: hG }, utils: { cleanDoc: gG, getDocParts: mG, isConcat: yG, replaceTextEndOfLine: DG } } = Zc, EG = xW, { countChars: CG, unescapeQuoteEntities: bG, getTextValueParts: vG } = fq, AG = qq, { insertPragma: FG } = Uq, { locStart: xG, locEnd: SG } = zq, wG = yz, { printClosingTagSuffix: TG, printClosingTagEnd: BG, printOpeningTagPrefix: NG, printOpeningTagStart: kG } = FU, { printElement: PG } = lG, { printChildren: OG } = $z;
        var IG = { preprocess: AG, print: function(e2, t2, n2) {
          const r2 = e2.getValue();
          switch (r2.type) {
            case "front-matter":
              return DG(r2.raw);
            case "root":
              return t2.__onHtmlRoot && t2.__onHtmlRoot(r2), [fG(OG(e2, t2, n2)), dG];
            case "element":
            case "ieConditionalComment":
              return PG(e2, t2, n2);
            case "ieConditionalStartComment":
            case "ieConditionalEndComment":
              return [kG(r2), BG(r2)];
            case "interpolation":
              return [kG(r2, t2), ...e2.map(n2, "children"), BG(r2, t2)];
            case "text": {
              if (r2.parent.type === "interpolation") {
                const e4 = /\n[^\S\n]*?$/, t3 = e4.test(r2.value), n3 = t3 ? r2.value.replace(e4, "") : r2.value;
                return [...DG(n3), t3 ? dG : ""];
              }
              const e3 = gG([NG(r2, t2), ...vG(r2), TG(r2, t2)]);
              return yG(e3) || e3.type === "fill" ? pG(mG(e3)) : e3;
            }
            case "docType":
              return [fG([kG(r2, t2), " ", r2.value.replace(/^html\b/i, "html").replace(/\s+/g, " ")]), BG(r2, t2)];
            case "comment":
              return [NG(r2, t2), ...DG(t2.originalText.slice(xG(r2), SG(r2)), hG), TG(r2, t2)];
            case "attribute": {
              if (r2.value === null)
                return r2.rawName;
              const e3 = bG(r2.value), t3 = CG(e3, "'") < CG(e3, '"') ? "'" : '"';
              return [r2.rawName, "=", t3, ...DG(t3 === '"' ? e3.replace(/"/g, "&quot;") : e3.replace(/'/g, "&apos;")), t3];
            }
            default:
              throw new Error("Unexpected node type ".concat(r2.type));
          }
        }, insertPragma: FG, massageAstNode: EG, embed: wG };
        const LG = "HTML";
        var jG = { name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".html", ".htm", ".html.hl", ".inc", ".xht", ".xhtml"], languageId: 146 }, _G = { name: "Vue", type: "markup", color: "#41b883", extensions: [".vue"], tmScope: "text.html.vue", aceMode: "html", languageId: 391 };
        const MG = bE, RG = IG, VG = { bracketSameLine: bj.bracketSameLine, htmlWhitespaceSensitivity: { since: "1.15.0", category: LG, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }] }, vueIndentScriptAndStyle: { since: "1.19.0", category: LG, type: "boolean", default: false, description: "Indent script and style tags in Vue files." } }, $G = [MG(jG, () => ({ name: "Angular", since: "1.15.0", parsers: ["angular"], vscodeLanguageIds: ["html"], extensions: [".component.html"], filenames: [] })), MG(jG, (e2) => ({ since: "1.15.0", parsers: ["html"], vscodeLanguageIds: ["html"], extensions: [...e2.extensions, ".mjml"] })), MG(jG, () => ({ name: "Lightning Web Components", since: "1.17.0", parsers: ["lwc"], vscodeLanguageIds: ["html"], extensions: [], filenames: [] })), MG(_G, () => ({ since: "1.10.0", parsers: ["vue"], vscodeLanguageIds: ["vue"] }))];
        var WG = { languages: $G, printers: { html: RG }, options: VG, parsers: void 0 };
        var qG = { isPragma: function(e2) {
          return /^\s*@(?:prettier|format)\s*$/.test(e2);
        }, hasPragma: function(e2) {
          return /^\s*#[^\S\n]*@(?:prettier|format)\s*?(?:\n|$)/.test(e2);
        }, insertPragma: function(e2) {
          return "# @format\n\n".concat(e2);
        } };
        var UG = { locStart: function(e2) {
          return e2.position.start.offset;
        }, locEnd: function(e2) {
          return e2.position.end.offset;
        } };
        var zG = function(e2, t2, n2, r2) {
          if (e2.getValue().type === "root" && r2.filepath && /(?:[/\\]|^)\.(?:prettier|stylelint)rc$/.test(r2.filepath))
            return n2(r2.originalText, Object.assign(Object.assign({}, r2), {}, { parser: "json" }));
        };
        const { getLast: GG, isNonEmptyArray: HG } = dc;
        function JG(e2, t2) {
          return e2 && typeof e2.type == "string" && (!t2 || t2.includes(e2.type));
        }
        function XG(e2) {
          return e2.value.trim() === "prettier-ignore";
        }
        function YG(e2) {
          return e2 && HG(e2.leadingComments);
        }
        function KG(e2) {
          return e2 && HG(e2.middleComments);
        }
        function QG(e2) {
          return e2 && e2.indicatorComment;
        }
        function ZG(e2) {
          return e2 && e2.trailingComment;
        }
        function eH(e2) {
          return e2 && HG(e2.endComments);
        }
        function tH(e2) {
          const t2 = [];
          let n2;
          for (const r2 of e2.split(/( +)/))
            r2 !== " " ? n2 === " " ? t2.push(r2) : t2.push((t2.pop() || "") + r2) : n2 === void 0 && t2.unshift(""), n2 = r2;
          return n2 === " " && t2.push((t2.pop() || "") + " "), t2[0] === "" && (t2.shift(), t2.unshift(" " + (t2.shift() || ""))), t2;
        }
        var nH = { getLast: GG, getAncestorCount: function(e2, t2) {
          let n2 = 0;
          const r2 = e2.stack.length - 1;
          for (let o2 = 0; o2 < r2; o2++) {
            const r3 = e2.stack[o2];
            JG(r3) && t2(r3) && n2++;
          }
          return n2;
        }, isNode: JG, isEmptyNode: function(e2) {
          return !HG(e2.children) && !function(e3) {
            return YG(e3) || KG(e3) || QG(e3) || ZG(e3) || eH(e3);
          }(e2);
        }, isInlineNode: function(e2) {
          if (!e2)
            return true;
          switch (e2.type) {
            case "plain":
            case "quoteDouble":
            case "quoteSingle":
            case "alias":
            case "flowMapping":
            case "flowSequence":
              return true;
            default:
              return false;
          }
        }, mapNode: function e2(t2, n2, r2) {
          return n2("children" in t2 ? Object.assign(Object.assign({}, t2), {}, { children: t2.children.map((r3) => e2(r3, n2, t2)) }) : t2, r2);
        }, defineShortcut: function(e2, t2, n2) {
          Object.defineProperty(e2, t2, { get: n2, enumerable: false });
        }, isNextLineEmpty: function(e2, t2) {
          let n2 = 0;
          const r2 = t2.length;
          for (let o2 = e2.position.end.offset - 1; o2 < r2; o2++) {
            const e3 = t2[o2];
            if (e3 === "\n" && n2++, n2 === 1 && /\S/.test(e3))
              return false;
            if (n2 === 2)
              return true;
          }
          return false;
        }, isLastDescendantNode: function(e2) {
          switch (e2.getValue().type) {
            case "tag":
            case "anchor":
            case "comment":
              return false;
          }
          const t2 = e2.stack.length;
          for (let n2 = 1; n2 < t2; n2++) {
            const t3 = e2.stack[n2], r2 = e2.stack[n2 - 1];
            if (Array.isArray(r2) && typeof t3 == "number" && t3 !== r2.length - 1)
              return false;
          }
          return true;
        }, getBlockValueLineContents: function(e2, t2) {
          let { parentIndent: n2, isLastDescendant: r2, options: o2 } = t2;
          const i2 = e2.position.start.line === e2.position.end.line ? "" : o2.originalText.slice(e2.position.start.offset, e2.position.end.offset).match(/^[^\n]*?\n(.*)$/s)[1], u2 = e2.indent === null ? ((e3) => e3 ? e3[1].length : Number.POSITIVE_INFINITY)(i2.match(/^( *)\S/m)) : e2.indent - 1 + n2, s2 = i2.split("\n").map((e3) => e3.slice(u2));
          return o2.proseWrap === "preserve" || e2.type === "blockLiteral" ? a2(s2.map((e3) => e3.length === 0 ? [] : [e3])) : a2(s2.map((e3) => e3.length === 0 ? [] : tH(e3)).reduce((e3, t3, n3) => n3 !== 0 && s2[n3 - 1].length > 0 && t3.length > 0 && !/^\s/.test(t3[0]) && !/^\s|\s$/.test(GG(e3)) ? [...e3.slice(0, -1), [...GG(e3), ...t3]] : [...e3, t3], []).map((e3) => e3.reduce((e4, t3) => e4.length > 0 && /\s$/.test(GG(e4)) ? [...e4.slice(0, -1), GG(e4) + " " + t3] : [...e4, t3], [])).map((e3) => o2.proseWrap === "never" ? [e3.join(" ")] : e3));
          function a2(t3) {
            if (e2.chomping === "keep")
              return GG(t3).length === 0 ? t3.slice(0, -1) : t3;
            let n3 = 0;
            for (let e3 = t3.length - 1; e3 >= 0 && t3[e3].length === 0; e3--)
              n3++;
            return n3 === 0 ? t3 : n3 >= 2 && !r2 ? t3.slice(0, -(n3 - 1)) : t3.slice(0, -n3);
          }
        }, getFlowScalarLineContents: function(e2, t2, n2) {
          const r2 = t2.split("\n").map((e3, t3, n3) => t3 === 0 && t3 === n3.length - 1 ? e3 : t3 !== 0 && t3 !== n3.length - 1 ? e3.trim() : t3 === 0 ? e3.trimEnd() : e3.trimStart());
          return n2.proseWrap === "preserve" ? r2.map((e3) => e3.length === 0 ? [] : [e3]) : r2.map((e3) => e3.length === 0 ? [] : tH(e3)).reduce((t3, n3, o2) => o2 !== 0 && r2[o2 - 1].length > 0 && n3.length > 0 && (e2 !== "quoteDouble" || !GG(GG(t3)).endsWith("\\")) ? [...t3.slice(0, -1), [...GG(t3), ...n3]] : [...t3, n3], []).map((e3) => n2.proseWrap === "never" ? [e3.join(" ")] : e3);
        }, getLastDescendantNode: function e2(t2) {
          return HG(t2.children) ? e2(GG(t2.children)) : t2;
        }, hasPrettierIgnore: function(e2) {
          const t2 = e2.getValue();
          if (t2.type === "documentBody") {
            const t3 = e2.getParentNode();
            return eH(t3.head) && XG(GG(t3.head.endComments));
          }
          return YG(t2) && XG(GG(t2.leadingComments));
        }, hasLeadingComments: YG, hasMiddleComments: KG, hasIndicatorComment: QG, hasTrailingComment: ZG, hasEndComments: eH };
        const { defineShortcut: rH, mapNode: oH } = nH;
        function iH(e2) {
          switch (e2.type) {
            case "document":
              rH(e2, "head", () => e2.children[0]), rH(e2, "body", () => e2.children[1]);
              break;
            case "documentBody":
            case "sequenceItem":
            case "flowSequenceItem":
            case "mappingKey":
            case "mappingValue":
              rH(e2, "content", () => e2.children[0]);
              break;
            case "mappingItem":
            case "flowMappingItem":
              rH(e2, "key", () => e2.children[0]), rH(e2, "value", () => e2.children[1]);
          }
          return e2;
        }
        var uH = function(e2) {
          return oH(e2, iH);
        };
        const { builders: { softline: sH, align: aH } } = Zc, { hasEndComments: cH, isNextLineEmpty: lH, isNode: pH } = nH, fH = /* @__PURE__ */ new WeakMap();
        function dH(e2) {
          return cH(e2) && !pH(e2, ["documentHead", "documentBody", "flowMapping", "flowSequence"]);
        }
        var hH = { alignWithSpaces: function(e2, t2) {
          return aH(" ".repeat(e2), t2);
        }, shouldPrintEndComments: dH, printNextEmptyLine: function(e2, t2) {
          const n2 = e2.getValue(), r2 = e2.stack[0];
          let o2;
          return fH.has(r2) ? o2 = fH.get(r2) : (o2 = /* @__PURE__ */ new Set(), fH.set(r2, o2)), o2.has(n2.position.end.line) || (o2.add(n2.position.end.line), !lH(n2, t2) || dH(e2.getParentNode())) ? "" : sH;
        } };
        const { builders: { ifBreak: gH, line: mH, softline: yH, hardline: DH, join: EH } } = Zc, { isEmptyNode: CH, getLast: bH, hasEndComments: vH } = nH, { printNextEmptyLine: AH, alignWithSpaces: FH } = hH;
        function xH(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = r2.type === "flowMapping", i2 = o2 ? "{" : "[", u2 = o2 ? "}" : "]";
          let s2 = yH;
          o2 && r2.children.length > 0 && n2.bracketSpacing && (s2 = mH);
          const a2 = bH(r2.children), c2 = a2 && a2.type === "flowMappingItem" && CH(a2.key) && CH(a2.value);
          return [i2, FH(n2.tabWidth, [s2, SH(e2, t2, n2), n2.trailingComma === "none" ? "" : gH(","), vH(r2) ? [DH, EH(DH, e2.map(t2, "endComments"))] : ""]), c2 ? "" : s2, u2];
        }
        function SH(e2, t2, n2) {
          const r2 = e2.getValue();
          return e2.map((e3, o2) => [t2(), o2 === r2.children.length - 1 ? "" : [",", mH, r2.children[o2].position.start.line !== r2.children[o2 + 1].position.start.line ? AH(e3, n2.originalText) : ""]], "children");
        }
        var wH = { printFlowMapping: xH, printFlowSequence: xH };
        const { builders: { conditionalGroup: TH, group: BH, hardline: NH, ifBreak: kH, join: PH, line: OH } } = Zc, { hasLeadingComments: IH, hasMiddleComments: LH, hasTrailingComment: jH, hasEndComments: _H, isNode: MH, isEmptyNode: RH, isInlineNode: VH } = nH, { alignWithSpaces: $H } = hH;
        function WH(e2, t2) {
          if (!e2)
            return true;
          switch (e2.type) {
            case "plain":
            case "quoteSingle":
            case "quoteDouble":
              break;
            case "alias":
              return true;
            default:
              return false;
          }
          if (t2.proseWrap === "preserve")
            return e2.position.start.line === e2.position.end.line;
          if (/\\$/m.test(t2.originalText.slice(e2.position.start.offset, e2.position.end.offset)))
            return false;
          switch (t2.proseWrap) {
            case "never":
              return !e2.value.includes("\n");
            case "always":
              return !/[\n ]/.test(e2.value);
            default:
              return false;
          }
        }
        var qH = function(e2, t2, n2, r2, o2) {
          const { key: i2, value: u2 } = e2, s2 = RH(i2), a2 = RH(u2);
          if (s2 && a2)
            return ": ";
          const c2 = r2("key"), l3 = function(e3) {
            return e3.key.content && e3.key.content.type === "alias";
          }(e2) ? " " : "";
          if (a2)
            return e2.type === "flowMappingItem" && t2.type === "flowMapping" ? c2 : e2.type !== "mappingItem" || !WH(i2.content, o2) || jH(i2.content) || t2.tag && t2.tag.value === "tag:yaml.org,2002:set" ? ["? ", $H(2, c2)] : [c2, l3, ":"];
          const p2 = r2("value");
          if (s2)
            return [": ", $H(2, p2)];
          if (IH(u2) || !VH(i2.content))
            return ["? ", $H(2, c2), NH, PH("", n2.map(r2, "value", "leadingComments").map((e3) => [e3, NH])), ": ", $H(2, p2)];
          if (function(e3) {
            if (!e3)
              return true;
            switch (e3.type) {
              case "plain":
              case "quoteDouble":
              case "quoteSingle":
                return e3.position.start.line === e3.position.end.line;
              case "alias":
                return true;
              default:
                return false;
            }
          }(i2.content) && !IH(i2.content) && !LH(i2.content) && !jH(i2.content) && !_H(i2) && !IH(u2.content) && !LH(u2.content) && !_H(u2) && WH(u2.content, o2))
            return [c2, l3, ": ", p2];
          const f2 = Symbol("mappingKey"), d2 = BH([kH("? "), BH($H(2, c2), { id: f2 })]), h2 = [NH, ": ", $H(2, p2)], g2 = [l3, ":"];
          IH(u2.content) || _H(u2) && u2.content && !MH(u2.content, ["mapping", "sequence"]) || t2.type === "mapping" && jH(i2.content) && VH(u2.content) || MH(u2.content, ["mapping", "sequence"]) && u2.content.tag === null && u2.content.anchor === null ? g2.push(NH) : u2.content && g2.push(OH), g2.push(p2);
          const m2 = $H(o2.tabWidth, g2);
          return !WH(i2.content, o2) || IH(i2.content) || LH(i2.content) || _H(i2) ? TH([[d2, kH(h2, m2, { groupId: f2 })]]) : TH([[c2, m2]]);
        };
        const { builders: { dedent: UH, dedentToRoot: zH, fill: GH, hardline: HH, join: JH, line: XH, literalline: YH, markAsRoot: KH }, utils: { getDocParts: QH } } = Zc, { getAncestorCount: ZH, getBlockValueLineContents: eJ, hasIndicatorComment: tJ, isLastDescendantNode: nJ, isNode: rJ } = nH, { alignWithSpaces: oJ } = hH;
        var iJ = function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = ZH(e2, (e3) => rJ(e3, ["sequence", "mapping"])), i2 = nJ(e2), u2 = [r2.type === "blockFolded" ? ">" : "|"];
          r2.indent !== null && u2.push(r2.indent.toString()), r2.chomping !== "clip" && u2.push(r2.chomping === "keep" ? "+" : "-"), tJ(r2) && u2.push(" ", t2("indicatorComment"));
          const s2 = eJ(r2, { parentIndent: o2, isLastDescendant: i2, options: n2 }), a2 = [];
          for (const [e3, t3] of s2.entries())
            e3 === 0 && a2.push(HH), a2.push(GH(QH(JH(XH, t3)))), e3 !== s2.length - 1 ? a2.push(t3.length === 0 ? HH : KH(YH)) : r2.chomping === "keep" && i2 && a2.push(zH(t3.length === 0 ? HH : YH));
          return r2.indent === null ? u2.push(UH(oJ(n2.tabWidth, a2))) : u2.push(zH(oJ(r2.indent - 1 + o2, a2))), u2;
        };
        const { builders: { breakParent: uJ, fill: sJ, group: aJ, hardline: cJ, join: lJ, line: pJ, lineSuffix: fJ, literalline: dJ }, utils: { getDocParts: hJ, replaceTextEndOfLine: gJ } } = Zc, { isPreviousLineEmpty: mJ } = dc, { insertPragma: yJ, isPragma: DJ } = qG, { locStart: EJ } = UG, CJ = zG, { getFlowScalarLineContents: bJ, getLastDescendantNode: vJ, hasLeadingComments: AJ, hasMiddleComments: FJ, hasTrailingComment: xJ, hasEndComments: SJ, hasPrettierIgnore: wJ, isLastDescendantNode: TJ, isNode: BJ, isInlineNode: NJ } = nH, kJ = uH, { alignWithSpaces: PJ, printNextEmptyLine: OJ, shouldPrintEndComments: IJ } = hH, { printFlowMapping: LJ, printFlowSequence: jJ } = wH, _J = qH, MJ = iJ;
        function RJ(e2, t2) {
          return xJ(e2) || t2 && (t2.head.children.length > 0 || SJ(t2.head));
        }
        function VJ(e2, t2, n2) {
          const r2 = bJ(e2, t2, n2);
          return lJ(cJ, r2.map((e3) => sJ(hJ(lJ(pJ, e3)))));
        }
        var $J = { preprocess: kJ, embed: CJ, print: function(e2, t2, n2) {
          const r2 = e2.getValue(), o2 = [];
          r2.type !== "mappingValue" && AJ(r2) && o2.push([lJ(cJ, e2.map(n2, "leadingComments")), cJ]);
          const { tag: i2, anchor: u2 } = r2;
          i2 && o2.push(n2("tag")), i2 && u2 && o2.push(" "), u2 && o2.push(n2("anchor"));
          let s2 = "";
          BJ(r2, ["mapping", "sequence", "comment", "directive", "mappingItem", "sequenceItem"]) && !TJ(e2) && (s2 = OJ(e2, t2.originalText)), (i2 || u2) && (BJ(r2, ["sequence", "mapping"]) && !FJ(r2) ? o2.push(cJ) : o2.push(" ")), FJ(r2) && o2.push([r2.middleComments.length === 1 ? "" : cJ, lJ(cJ, e2.map(n2, "middleComments")), cJ]);
          const a2 = e2.getParentNode();
          return wJ(e2) ? o2.push(gJ(t2.originalText.slice(r2.position.start.offset, r2.position.end.offset).trimEnd(), dJ)) : o2.push(aJ(function(e3, t3, n3, r3, o3) {
            switch (e3.type) {
              case "root": {
                const { children: t4 } = e3, r4 = [];
                n3.each((e4, n4) => {
                  const i4 = t4[n4], u3 = t4[n4 + 1];
                  n4 !== 0 && r4.push(cJ), r4.push(o3()), RJ(i4, u3) ? (r4.push(cJ, "..."), xJ(i4) && r4.push(" ", o3("trailingComment"))) : u3 && !xJ(u3.head) && r4.push(cJ, "---");
                }, "children");
                const i3 = vJ(e3);
                return BJ(i3, ["blockLiteral", "blockFolded"]) && i3.chomping === "keep" || r4.push(cJ), r4;
              }
              case "document": {
                const i3 = [];
                return function(e4, t4, n4, r4) {
                  if (n4.children[0] === e4 && /---(?:\s|$)/.test(r4.originalText.slice(EJ(e4), EJ(e4) + 4)) || e4.head.children.length > 0 || SJ(e4.head) || xJ(e4.head))
                    return "head";
                  if (RJ(e4, t4))
                    return false;
                  return !!t4 && "root";
                }(e3, t3.children[n3.getName() + 1], t3, r3) === "head" && ((e3.head.children.length > 0 || e3.head.endComments.length > 0) && i3.push(o3("head")), xJ(e3.head) ? i3.push(["---", " ", o3(["head", "trailingComment"])]) : i3.push("---")), function(e4) {
                  return e4.body.children.length > 0 || SJ(e4.body);
                }(e3) && i3.push(o3("body")), lJ(cJ, i3);
              }
              case "documentHead":
                return lJ(cJ, [...n3.map(o3, "children"), ...n3.map(o3, "endComments")]);
              case "documentBody": {
                const { children: t4, endComments: r4 } = e3;
                let i3 = "";
                if (t4.length > 0 && r4.length > 0) {
                  const t5 = vJ(e3);
                  BJ(t5, ["blockFolded", "blockLiteral"]) ? t5.chomping !== "keep" && (i3 = [cJ, cJ]) : i3 = cJ;
                }
                return [lJ(cJ, n3.map(o3, "children")), i3, lJ(cJ, n3.map(o3, "endComments"))];
              }
              case "directive":
                return ["%", lJ(" ", [e3.name, ...e3.parameters])];
              case "comment":
                return ["#", e3.value];
              case "alias":
                return ["*", e3.value];
              case "tag":
                return r3.originalText.slice(e3.position.start.offset, e3.position.end.offset);
              case "anchor":
                return ["&", e3.value];
              case "plain":
                return VJ(e3.type, r3.originalText.slice(e3.position.start.offset, e3.position.end.offset), r3);
              case "quoteDouble":
              case "quoteSingle": {
                const t4 = "'", n4 = '"', o4 = r3.originalText.slice(e3.position.start.offset + 1, e3.position.end.offset - 1);
                if (e3.type === "quoteSingle" && o4.includes("\\") || e3.type === "quoteDouble" && /\\[^"]/.test(o4)) {
                  const i4 = e3.type === "quoteDouble" ? n4 : t4;
                  return [i4, VJ(e3.type, o4, r3), i4];
                }
                if (o4.includes(n4))
                  return [t4, VJ(e3.type, e3.type === "quoteDouble" ? o4.replace(/\\"/g, n4).replace(/'/g, t4.repeat(2)) : o4, r3), t4];
                if (o4.includes(t4))
                  return [n4, VJ(e3.type, e3.type === "quoteSingle" ? o4.replace(/''/g, t4) : o4, r3), n4];
                const i3 = r3.singleQuote ? t4 : n4;
                return [i3, VJ(e3.type, o4, r3), i3];
              }
              case "blockFolded":
              case "blockLiteral":
                return MJ(n3, o3, r3);
              case "mapping":
              case "sequence":
                return lJ(cJ, n3.map(o3, "children"));
              case "sequenceItem":
                return ["- ", PJ(2, e3.content ? o3("content") : "")];
              case "mappingKey":
              case "mappingValue":
                return e3.content ? o3("content") : "";
              case "mappingItem":
              case "flowMappingItem":
                return _J(e3, t3, n3, o3, r3);
              case "flowMapping":
                return LJ(n3, o3, r3);
              case "flowSequence":
                return jJ(n3, o3, r3);
              case "flowSequenceItem":
                return o3("content");
              default:
                throw new Error("Unexpected node type ".concat(e3.type));
            }
          }(r2, a2, e2, t2, n2))), xJ(r2) && !BJ(r2, ["document", "documentHead"]) && o2.push(fJ([r2.type !== "mappingValue" || r2.content ? " " : "", a2.type === "mappingKey" && e2.getParentNode(2).type === "mapping" && NJ(r2) ? "" : uJ, n2("trailingComment")])), IJ(r2) && o2.push(PJ(r2.type === "sequenceItem" ? 2 : 0, [cJ, lJ(cJ, e2.map((e3) => [mJ(t2.originalText, e3.getValue(), EJ) ? cJ : "", n2()], "endComments"))])), o2.push(s2), o2;
        }, massageAstNode: function(e2, t2) {
          if (BJ(t2))
            switch (delete t2.position, t2.type) {
              case "comment":
                if (DJ(t2.value))
                  return null;
                break;
              case "quoteDouble":
              case "quoteSingle":
                t2.type = "quote";
            }
        }, insertPragma: yJ };
        const WJ = $J, qJ = { bracketSpacing: bj.bracketSpacing, singleQuote: bj.singleQuote, proseWrap: bj.proseWrap }, UJ = [bE({ name: "YAML", type: "data", color: "#cb171e", tmScope: "source.yaml", aliases: ["yml"], extensions: [".yml", ".mir", ".reek", ".rviz", ".sublime-syntax", ".syntax", ".yaml", ".yaml-tmlanguage", ".yaml.sed", ".yml.mysql"], filenames: [".clang-format", ".clang-tidy", ".gemrc", "glide.lock", "yarn.lock"], aceMode: "yaml", codemirrorMode: "yaml", codemirrorMimeType: "text/x-yaml", languageId: 407 }, (e2) => ({ since: "1.14.0", parsers: ["yaml"], vscodeLanguageIds: ["yaml", "ansible", "home-assistant"], filenames: [...e2.filenames.filter((e3) => e3 !== "yarn.lock"), ".prettierrc", ".stylelintrc"] }))];
        var zJ = [Ij, QM, fV, IV, bW, WG, { languages: UJ, printers: { yaml: WJ }, options: qJ, parsers: void 0 }];
        const { version: GJ } = n, HJ = XD, { getSupportInfo: JJ } = za, XJ = EE, YJ = zJ, KJ = Zc;
        function QJ(e2) {
          let t2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          return function() {
            for (var n2 = arguments.length, r2 = new Array(n2), o2 = 0; o2 < n2; o2++)
              r2[o2] = arguments[o2];
            const i2 = r2[t2] || {}, u2 = i2.plugins || [];
            return r2[t2] = Object.assign(Object.assign({}, i2), {}, { plugins: [...YJ, ...Array.isArray(u2) ? u2 : Object.values(u2)] }), e2(...r2);
          };
        }
        const ZJ = QJ(HJ.formatWithCursor);
        var eX = { formatWithCursor: ZJ, format: (e2, t2) => ZJ(e2, t2).formatted, check(e2, t2) {
          const { formatted: n2 } = ZJ(e2, t2);
          return n2 === e2;
        }, doc: KJ, getSupportInfo: QJ(JJ, 0), version: GJ, util: XJ, __debug: { parse: QJ(HJ.parse), formatAST: QJ(HJ.formatAST), formatDoc: QJ(HJ.formatDoc), printToDoc: QJ(HJ.printToDoc), printDocToString: QJ(HJ.printDocToString) } };
        return eX;
      });
    }
  });

  // src/parser/token.js
  var TokenType = {
    T_DIRECTIVE: "directive",
    T_ECHO: "echo",
    T_LITERAL: "literal",
    T_EOF: "eof"
  };
  var Token = class {
    constructor(type, raw, line) {
      this.type = type;
      this.raw = raw;
      this.line = line;
    }
    static eof() {
      return new Token(TokenType.T_EOF, "", 0);
    }
  };

  // src/parser/lexer.js
  var ctype_space = (subject) => subject.replace(/\s/g, "").length === 0;
  var Lexer = class {
    constructor(source) {
      this.source = source.replace("<?php", "@php").replace("?>", "@endphp").replace(/\r\n|\r|\n/, "\n").split("");
      this.line = 1;
      this.i = -1;
      this.tokens = [];
      this.buffer = "";
      this.previous = "";
      this.current = "";
      this.next = "";
    }
    all() {
      this.read();
      while (true) {
        if (this.i >= this.source.length) {
          break;
        }
        if (this.current === "{" && this.next === "{") {
          this.tokens.push(this.echo());
        } else if (this.current === "@" && this.next !== "@") {
          this.tokens.push(this.directive());
        } else {
          this.buffer += this.current;
          this.read();
        }
      }
      this.literal();
      return this.tokens;
    }
    echo() {
      this.literal();
      let raw = "{{";
      this.read();
      this.read();
      while (true) {
        if (this.i >= this.source.length) {
          break;
        }
        if (this.current === "}" && this.next === "}") {
          raw += "}}";
          this.read();
          this.read();
          break;
        }
        raw += this.current;
        this.read();
      }
      return new Token(TokenType.T_ECHO, raw, this.line);
    }
    directive() {
      this.literal();
      let match = this.current;
      let hasFoundDirectiveName = false;
      let parens = 0;
      this.read();
      while (true) {
        if (this.i >= this.source.length) {
          break;
        }
        match += this.current;
        if ((this.current === "(" || ctype_space(this.current)) && !hasFoundDirectiveName) {
          hasFoundDirectiveName = true;
        }
        if (ctype_space(this.current) && (!ctype_space(this.next) || this.next !== "(")) {
          if (hasFoundDirectiveName) {
            break;
          }
          return new Token(TokenType.T_LITERAL, match, this.line);
        }
        if (hasFoundDirectiveName && this.current === "(") {
          parens++;
        }
        if (parens === 0 && [")", "\n"].includes(this.current)) {
          break;
        }
        if (this.current === ")") {
          parens--;
          if (parens === 0 && hasFoundDirectiveName) {
            this.read();
            break;
          }
        }
        this.read();
      }
      return new Token(TokenType.T_DIRECTIVE, match.trim(), this.line);
    }
    literal() {
      if (this.buffer.length > 0) {
        this.tokens.push(new Token(TokenType.T_LITERAL, this.buffer, this.line));
        this.buffer = "";
      }
    }
    read() {
      this.i += 1;
      this.previous = this.current;
      this.current = this.source[this.i] || "";
      if (this.previous === "\n") {
        this.line += 1;
      }
      if (this.i + 1 < this.source.length) {
        this.next = this.source[this.i + 1];
      }
    }
  };

  // src/parser/nodes/index.js
  var import_prettier = __toESM(require_standalone());
  var { builders: { group, softline, indent } } = import_prettier.doc;
  var EchoNode = class {
    constructor(content, code) {
      this.content = content;
      this.code = code;
    }
    toDoc() {
      return group([this.toString()]);
    }
    toString() {
      return `{{ ${this.code.trim()} }}`;
    }
  };
  var DirectiveNode = class {
    constructor(content, directive, code, line) {
      this.content = content;
      this.directive = directive;
      this.code = code;
      this.line = line;
    }
    toDoc() {
      return group([this.toString()]);
    }
    toString() {
      return `@${this.directive}${this.code ? `(${this.code})` : ""}`;
    }
  };
  var LiteralNode = class {
    constructor(content) {
      this.content = content;
    }
    toDoc() {
      return group(this.toString());
    }
    toString() {
      return this.content;
    }
  };
  var DirectivePairNode = class {
    constructor(open, close, children, line) {
      this.open = open;
      this.close = close;
      this.children = children;
    }
    toDoc() {
      return group([
        softline,
        this.open.toDoc(),
        this.children.map((child) => indent(child.toDoc())),
        this.close.toDoc()
      ]);
    }
    toString() {
      return `${this.open.toString()}${this.children.map((child) => child.toString()).join()}${this.close.toString()}`;
    }
  };

  // src/parser/parser.js
  var STATIC_BLOCK_DIRECTIVES = [
    "if",
    "for",
    "foreach",
    "forelse",
    "unless",
    "while",
    "isset",
    "empty",
    "auth",
    "guest",
    "production",
    "env",
    "hasSection",
    "sectionMissing",
    "switch",
    "once",
    "verbatim",
    "error",
    "push",
    "prepend"
  ];
  var isBlockDirective = (directive) => {
    if (STATIC_BLOCK_DIRECTIVES.includes(directive.directive)) {
      return true;
    }
    if (directive.directive === "php" && !directive.code) {
      return true;
    }
    return false;
  };
  var directiveCanBeClosedBy = (open, close) => {
    return close.directive === "end" + open.directive;
  };
  var isBlockClosingDirective = (directive) => directive.directive.startsWith("end");
  var guessClosingBlockDirective = (directive) => "end".directive.directive;
  var Parser = class {
    constructor(tokens) {
      this.tokens = tokens;
      this.tokens.push(Token.eof());
      this.nodes = [];
      this.current = Token.eof();
      this.next = Token.eof();
      this.i = -1;
    }
    parse() {
      this.read();
      this.read();
      while (this.current.type !== TokenType.T_EOF) {
        this.nodes.push(this.node());
      }
      return this.nodes;
    }
    node() {
      if (this.current.type === TokenType.T_ECHO) {
        return this.echo();
      } else if (this.current.type === TokenType.T_DIRECTIVE) {
        return this.directive();
      } else {
        const node = new LiteralNode(this.current.raw);
        this.read();
        return node;
      }
    }
    echo() {
      const node = new EchoNode(this.current.raw, this.current.raw.substring(2, this.current.raw.length - 2).trim());
      this.read();
      return node;
    }
    directive() {
      let directiveName = this.current.raw.substring(this.current.raw.indexOf("@") + 1);
      if (directiveName.includes("(")) {
        directiveName = directiveName.substring(0, directiveName.indexOf("("));
      }
      let inner = this.current.raw.replace("@" + directiveName, "");
      if (inner.startsWith("(")) {
        inner = inner.substring(1);
      }
      if (inner.endsWith(")")) {
        inner = inner.substring(0, inner.length - 1);
      }
      const directive = new DirectiveNode(this.current.raw, directiveName, inner, this.current.line);
      this.read();
      if (!isBlockDirective(directive)) {
        return directive;
      }
      let children = [];
      let close = null;
      while (this.current.type !== TokenType.T_EOF) {
        const child = this.node();
        if (child instanceof DirectiveNode && directiveCanBeClosedBy(directive, child)) {
          close = child;
          break;
        }
        if (child instanceof DirectiveNode && isBlockClosingDirective(child)) {
          throw `Unexpected directive ${child.directive} on line ${child.line}, expected ${guessClosingBlockDirective(directive)}`;
        }
        children.push(child);
      }
      if (close === null) {
        throw `Could not find "@end..." directive for "@${directive.directive}" defined on line ${directive.line}.`;
      }
      return new DirectivePairNode(directive, close, children);
    }
    read() {
      this.i += 1;
      this.current = this.next;
      this.next = this.i >= this.tokens.length ? Token.eof() : this.tokens[this.i];
    }
  };

  // test/index.js
  console.warn("Extracting tokens and ast from:\n {{ $test }}");
  var l = new Lexer("{{ $test }}");
  var lt = l.all();
  console.log(lt);
  console.log();
  var pl = new Parser(lt);
  console.log(pl.parse());
  var js = `<h1>

Here's some very poorly formatted {{'html'}} with weird {{$echoParts + 1 / $insideOfIt}}
</h1>`;
  console.warn("Extracting tokens & ast from:\n" + js);
  var j = new Lexer(js);
  var jt = j.all();
  console.log(jt);
  console.log();
  var pj = new Parser(jt);
  console.log(pj.parse());
})();
/**
	   * @license
	   * Copyright Google Inc. All Rights Reserved.
	   *
	   * Use of this source code is governed by an MIT-style license that can be
	   * found in the LICENSE file at https://angular.io/license
	   */
/**
	 * @license
	 * Copyright Google Inc. All Rights Reserved.
	 *
	 * Use of this source code is governed by an MIT-style license that can be
	 * found in the LICENSE file at https://angular.io/license
	 */
