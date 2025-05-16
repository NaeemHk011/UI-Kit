import P, { useState as Z } from "react";
import { Link as _, Outlet as yt } from "react-router-dom";
var $e = { exports: {} }, X = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rt;
function wt() {
  if (rt) return X;
  rt = 1;
  var r = P, n = Symbol.for("react.element"), s = Symbol.for("react.fragment"), d = Object.prototype.hasOwnProperty, i = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, u = { key: !0, ref: !0, __self: !0, __source: !0 };
  function c(f, o, x) {
    var m, b = {}, w = null, E = null;
    x !== void 0 && (w = "" + x), o.key !== void 0 && (w = "" + o.key), o.ref !== void 0 && (E = o.ref);
    for (m in o) d.call(o, m) && !u.hasOwnProperty(m) && (b[m] = o[m]);
    if (f && f.defaultProps) for (m in o = f.defaultProps, o) b[m] === void 0 && (b[m] = o[m]);
    return { $$typeof: n, type: f, key: w, ref: E, props: b, _owner: i.current };
  }
  return X.Fragment = s, X.jsx = c, X.jsxs = c, X;
}
var Q = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var at;
function jt() {
  return at || (at = 1, process.env.NODE_ENV !== "production" && function() {
    var r = P, n = Symbol.for("react.element"), s = Symbol.for("react.portal"), d = Symbol.for("react.fragment"), i = Symbol.for("react.strict_mode"), u = Symbol.for("react.profiler"), c = Symbol.for("react.provider"), f = Symbol.for("react.context"), o = Symbol.for("react.forward_ref"), x = Symbol.for("react.suspense"), m = Symbol.for("react.suspense_list"), b = Symbol.for("react.memo"), w = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), A = Symbol.iterator, S = "@@iterator";
    function T(e) {
      if (e === null || typeof e != "object")
        return null;
      var a = A && e[A] || e[S];
      return typeof a == "function" ? a : null;
    }
    var R = r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function j(e) {
      {
        for (var a = arguments.length, l = new Array(a > 1 ? a - 1 : 0), h = 1; h < a; h++)
          l[h - 1] = arguments[h];
        L("error", e, l);
      }
    }
    function L(e, a, l) {
      {
        var h = R.ReactDebugCurrentFrame, p = h.getStackAddendum();
        p !== "" && (a += "%s", l = l.concat([p]));
        var y = l.map(function(v) {
          return String(v);
        });
        y.unshift("Warning: " + a), Function.prototype.apply.call(console[e], console, y);
      }
    }
    var U = !1, W = !1, ee = !1, Re = !1, ke = !1, le;
    le = Symbol.for("react.module.reference");
    function Se(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === d || e === u || ke || e === i || e === x || e === m || Re || e === E || U || W || ee || typeof e == "object" && e !== null && (e.$$typeof === w || e.$$typeof === b || e.$$typeof === c || e.$$typeof === f || e.$$typeof === o || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === le || e.getModuleId !== void 0));
    }
    function Fe(e, a, l) {
      var h = e.displayName;
      if (h)
        return h;
      var p = a.displayName || a.name || "";
      return p !== "" ? l + "(" + p + ")" : l;
    }
    function ie(e) {
      return e.displayName || "Context";
    }
    function O(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && j("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case d:
          return "Fragment";
        case s:
          return "Portal";
        case u:
          return "Profiler";
        case i:
          return "StrictMode";
        case x:
          return "Suspense";
        case m:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case f:
            var a = e;
            return ie(a) + ".Consumer";
          case c:
            var l = e;
            return ie(l._context) + ".Provider";
          case o:
            return Fe(e, e.render, "ForwardRef");
          case b:
            var h = e.displayName || null;
            return h !== null ? h : O(e.type) || "Memo";
          case w: {
            var p = e, y = p._payload, v = p._init;
            try {
              return O(v(y));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var I = Object.assign, H = 0, ce, de, ue, fe, he, me, xe;
    function ge() {
    }
    ge.__reactDisabledLog = !0;
    function Te() {
      {
        if (H === 0) {
          ce = console.log, de = console.info, ue = console.warn, fe = console.error, he = console.group, me = console.groupCollapsed, xe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: ge,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        H++;
      }
    }
    function Be() {
      {
        if (H--, H === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: I({}, e, {
              value: ce
            }),
            info: I({}, e, {
              value: de
            }),
            warn: I({}, e, {
              value: ue
            }),
            error: I({}, e, {
              value: fe
            }),
            group: I({}, e, {
              value: he
            }),
            groupCollapsed: I({}, e, {
              value: me
            }),
            groupEnd: I({}, e, {
              value: xe
            })
          });
        }
        H < 0 && j("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var te = R.ReactCurrentDispatcher, re;
    function Y(e, a, l) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (p) {
            var h = p.stack.trim().match(/\n( *(at )?)/);
            re = h && h[1] || "";
          }
        return `
` + re + e;
      }
    }
    var ae = !1, q;
    {
      var Oe = typeof WeakMap == "function" ? WeakMap : Map;
      q = new Oe();
    }
    function ve(e, a) {
      if (!e || ae)
        return "";
      {
        var l = q.get(e);
        if (l !== void 0)
          return l;
      }
      var h;
      ae = !0;
      var p = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var y;
      y = te.current, te.current = null, Te();
      try {
        if (a) {
          var v = function() {
            throw Error();
          };
          if (Object.defineProperty(v.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(v, []);
            } catch (F) {
              h = F;
            }
            Reflect.construct(e, [], v);
          } else {
            try {
              v.call();
            } catch (F) {
              h = F;
            }
            e.call(v.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (F) {
            h = F;
          }
          e();
        }
      } catch (F) {
        if (F && h && typeof F.stack == "string") {
          for (var g = F.stack.split(`
`), k = h.stack.split(`
`), C = g.length - 1, N = k.length - 1; C >= 1 && N >= 0 && g[C] !== k[N]; )
            N--;
          for (; C >= 1 && N >= 0; C--, N--)
            if (g[C] !== k[N]) {
              if (C !== 1 || N !== 1)
                do
                  if (C--, N--, N < 0 || g[C] !== k[N]) {
                    var B = `
` + g[C].replace(" at new ", " at ");
                    return e.displayName && B.includes("<anonymous>") && (B = B.replace("<anonymous>", e.displayName)), typeof e == "function" && q.set(e, B), B;
                  }
                while (C >= 1 && N >= 0);
              break;
            }
        }
      } finally {
        ae = !1, te.current = y, Be(), Error.prepareStackTrace = p;
      }
      var K = e ? e.displayName || e.name : "", z = K ? Y(K) : "";
      return typeof e == "function" && q.set(e, z), z;
    }
    function Pe(e, a, l) {
      return ve(e, !1);
    }
    function Ie(e) {
      var a = e.prototype;
      return !!(a && a.isReactComponent);
    }
    function G(e, a, l) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ve(e, Ie(e));
      if (typeof e == "string")
        return Y(e);
      switch (e) {
        case x:
          return Y("Suspense");
        case m:
          return Y("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case o:
            return Pe(e.render);
          case b:
            return G(e.type, a, l);
          case w: {
            var h = e, p = h._payload, y = h._init;
            try {
              return G(y(p), a, l);
            } catch {
            }
          }
        }
      return "";
    }
    var V = Object.prototype.hasOwnProperty, pe = {}, be = R.ReactDebugCurrentFrame;
    function J(e) {
      if (e) {
        var a = e._owner, l = G(e.type, e._source, a ? a.type : null);
        be.setExtraStackFrame(l);
      } else
        be.setExtraStackFrame(null);
    }
    function De(e, a, l, h, p) {
      {
        var y = Function.call.bind(V);
        for (var v in e)
          if (y(e, v)) {
            var g = void 0;
            try {
              if (typeof e[v] != "function") {
                var k = Error((h || "React class") + ": " + l + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw k.name = "Invariant Violation", k;
              }
              g = e[v](a, v, h, l, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (C) {
              g = C;
            }
            g && !(g instanceof Error) && (J(p), j("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", h || "React class", l, v, typeof g), J(null)), g instanceof Error && !(g.message in pe) && (pe[g.message] = !0, J(p), j("Failed %s type: %s", l, g.message), J(null));
          }
      }
    }
    var Me = Array.isArray;
    function ne(e) {
      return Me(e);
    }
    function ze(e) {
      {
        var a = typeof Symbol == "function" && Symbol.toStringTag, l = a && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return l;
      }
    }
    function Le(e) {
      try {
        return ye(e), !1;
      } catch {
        return !0;
      }
    }
    function ye(e) {
      return "" + e;
    }
    function we(e) {
      if (Le(e))
        return j("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", ze(e)), ye(e);
    }
    var je = R.ReactCurrentOwner, Ue = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ce, Ne;
    function We(e) {
      if (V.call(e, "ref")) {
        var a = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function He(e) {
      if (V.call(e, "key")) {
        var a = Object.getOwnPropertyDescriptor(e, "key").get;
        if (a && a.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ve(e, a) {
      typeof e.ref == "string" && je.current;
    }
    function Ke(e, a) {
      {
        var l = function() {
          Ce || (Ce = !0, j("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: l,
          configurable: !0
        });
      }
    }
    function Ye(e, a) {
      {
        var l = function() {
          Ne || (Ne = !0, j("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", a));
        };
        l.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: l,
          configurable: !0
        });
      }
    }
    var qe = function(e, a, l, h, p, y, v) {
      var g = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: n,
        // Built-in properties that belong on the element
        type: e,
        key: a,
        ref: l,
        props: v,
        // Record the component responsible for creating this element.
        _owner: y
      };
      return g._store = {}, Object.defineProperty(g._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(g, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: h
      }), Object.defineProperty(g, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: p
      }), Object.freeze && (Object.freeze(g.props), Object.freeze(g)), g;
    };
    function Ge(e, a, l, h, p) {
      {
        var y, v = {}, g = null, k = null;
        l !== void 0 && (we(l), g = "" + l), He(a) && (we(a.key), g = "" + a.key), We(a) && (k = a.ref, Ve(a, p));
        for (y in a)
          V.call(a, y) && !Ue.hasOwnProperty(y) && (v[y] = a[y]);
        if (e && e.defaultProps) {
          var C = e.defaultProps;
          for (y in C)
            v[y] === void 0 && (v[y] = C[y]);
        }
        if (g || k) {
          var N = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          g && Ke(v, N), k && Ye(v, N);
        }
        return qe(e, g, k, p, h, je.current, v);
      }
    }
    var se = R.ReactCurrentOwner, Ee = R.ReactDebugCurrentFrame;
    function M(e) {
      if (e) {
        var a = e._owner, l = G(e.type, e._source, a ? a.type : null);
        Ee.setExtraStackFrame(l);
      } else
        Ee.setExtraStackFrame(null);
    }
    var oe;
    oe = !1;
    function _e(e) {
      return typeof e == "object" && e !== null && e.$$typeof === n;
    }
    function Je() {
      {
        if (se.current) {
          var e = O(se.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function dt(e) {
      return "";
    }
    var Xe = {};
    function ut(e) {
      {
        var a = Je();
        if (!a) {
          var l = typeof e == "string" ? e : e.displayName || e.name;
          l && (a = `

Check the top-level render call using <` + l + ">.");
        }
        return a;
      }
    }
    function Qe(e, a) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var l = ut(a);
        if (Xe[l])
          return;
        Xe[l] = !0;
        var h = "";
        e && e._owner && e._owner !== se.current && (h = " It was passed a child from " + O(e._owner.type) + "."), M(e), j('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', l, h), M(null);
      }
    }
    function Ze(e, a) {
      {
        if (typeof e != "object")
          return;
        if (ne(e))
          for (var l = 0; l < e.length; l++) {
            var h = e[l];
            _e(h) && Qe(h, a);
          }
        else if (_e(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var p = T(e);
          if (typeof p == "function" && p !== e.entries)
            for (var y = p.call(e), v; !(v = y.next()).done; )
              _e(v.value) && Qe(v.value, a);
        }
      }
    }
    function ft(e) {
      {
        var a = e.type;
        if (a == null || typeof a == "string")
          return;
        var l;
        if (typeof a == "function")
          l = a.propTypes;
        else if (typeof a == "object" && (a.$$typeof === o || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        a.$$typeof === b))
          l = a.propTypes;
        else
          return;
        if (l) {
          var h = O(a);
          De(l, e.props, "prop", h, e);
        } else if (a.PropTypes !== void 0 && !oe) {
          oe = !0;
          var p = O(a);
          j("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", p || "Unknown");
        }
        typeof a.getDefaultProps == "function" && !a.getDefaultProps.isReactClassApproved && j("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ht(e) {
      {
        for (var a = Object.keys(e.props), l = 0; l < a.length; l++) {
          var h = a[l];
          if (h !== "children" && h !== "key") {
            M(e), j("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", h), M(null);
            break;
          }
        }
        e.ref !== null && (M(e), j("Invalid attribute `ref` supplied to `React.Fragment`."), M(null));
      }
    }
    var et = {};
    function tt(e, a, l, h, p, y) {
      {
        var v = Se(e);
        if (!v) {
          var g = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (g += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var k = dt();
          k ? g += k : g += Je();
          var C;
          e === null ? C = "null" : ne(e) ? C = "array" : e !== void 0 && e.$$typeof === n ? (C = "<" + (O(e.type) || "Unknown") + " />", g = " Did you accidentally export a JSX literal instead of a component?") : C = typeof e, j("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", C, g);
        }
        var N = Ge(e, a, l, p, y);
        if (N == null)
          return N;
        if (v) {
          var B = a.children;
          if (B !== void 0)
            if (h)
              if (ne(B)) {
                for (var K = 0; K < B.length; K++)
                  Ze(B[K], e);
                Object.freeze && Object.freeze(B);
              } else
                j("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ze(B, e);
        }
        if (V.call(a, "key")) {
          var z = O(e), F = Object.keys(a).filter(function(bt) {
            return bt !== "key";
          }), Ae = F.length > 0 ? "{key: someKey, " + F.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!et[z + Ae]) {
            var pt = F.length > 0 ? "{" + F.join(": ..., ") + ": ...}" : "{}";
            j(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ae, z, pt, z), et[z + Ae] = !0;
          }
        }
        return e === d ? ht(N) : ft(N), N;
      }
    }
    function mt(e, a, l) {
      return tt(e, a, l, !0);
    }
    function xt(e, a, l) {
      return tt(e, a, l, !1);
    }
    var gt = xt, vt = mt;
    Q.Fragment = d, Q.jsx = gt, Q.jsxs = vt;
  }()), Q;
}
process.env.NODE_ENV === "production" ? $e.exports = wt() : $e.exports = jt();
var t = $e.exports, it = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
}, nt = P.createContext && P.createContext(it), D = function() {
  return D = Object.assign || function(r) {
    for (var n, s = 1, d = arguments.length; s < d; s++) {
      n = arguments[s];
      for (var i in n) Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
    }
    return r;
  }, D.apply(this, arguments);
}, Ct = function(r, n) {
  var s = {};
  for (var d in r) Object.prototype.hasOwnProperty.call(r, d) && n.indexOf(d) < 0 && (s[d] = r[d]);
  if (r != null && typeof Object.getOwnPropertySymbols == "function") for (var i = 0, d = Object.getOwnPropertySymbols(r); i < d.length; i++)
    n.indexOf(d[i]) < 0 && Object.prototype.propertyIsEnumerable.call(r, d[i]) && (s[d[i]] = r[d[i]]);
  return s;
};
function ct(r) {
  return r && r.map(function(n, s) {
    return P.createElement(n.tag, D({
      key: s
    }, n.attr), ct(n.child));
  });
}
function $(r) {
  return function(n) {
    return P.createElement(Nt, D({
      attr: D({}, r.attr)
    }, n), ct(r.child));
  };
}
function Nt(r) {
  var n = function(s) {
    var d = r.attr, i = r.size, u = r.title, c = Ct(r, ["attr", "size", "title"]), f = i || s.size || "1em", o;
    return s.className && (o = s.className), r.className && (o = (o ? o + " " : "") + r.className), P.createElement("svg", D({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, s.attr, d, c, {
      className: o,
      style: D(D({
        color: r.color || s.color
      }, s.style), r.style),
      height: f,
      width: f,
      xmlns: "http://www.w3.org/2000/svg"
    }), u && P.createElement("title", null, u), r.children);
  };
  return nt !== void 0 ? P.createElement(nt.Consumer, null, function(s) {
    return n(s);
  }) : n(it);
}
function Et(r) {
  return $({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M560 288h-80v96l-32-21.3-32 21.3v-96h-80c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16zm-384-64h224c8.8 0 16-7.2 16-16V16c0-8.8-7.2-16-16-16h-80v96l-32-21.3L256 96V0h-80c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16zm64 64h-80v96l-32-21.3L96 384v-96H16c-8.8 0-16 7.2-16 16v192c0 8.8 7.2 16 16 16h224c8.8 0 16-7.2 16-16V304c0-8.8-7.2-16-16-16z" } }] })(r);
}
function _t(r) {
  return $({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M504 256c0 136.967-111.033 248-248 248S8 392.967 8 256 119.033 8 256 8s248 111.033 248 248zM227.314 387.314l184-184c6.248-6.248 6.248-16.379 0-22.627l-22.627-22.627c-6.248-6.249-16.379-6.249-22.628 0L216 308.118l-70.059-70.059c-6.248-6.248-16.379-6.248-22.628 0l-22.627 22.627c-6.248 6.248-6.248 16.379 0 22.627l104 104c6.249 6.249 16.379 6.249 22.628.001z" } }] })(r);
}
function At(r) {
  return $({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z" } }] })(r);
}
function $t(r) {
  return $({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119.033 8 8 119.033 8 256s111.033 248 248 248 248-111.033 248-248S392.967 8 256 8zm80 248c0 44.112-35.888 80-80 80s-80-35.888-80-80 35.888-80 80-80 80 35.888 80 80z" } }] })(r);
}
function Rt(r) {
  return $({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M569.517 440.013C587.975 472.007 564.806 512 527.94 512H48.054c-36.937 0-59.999-40.055-41.577-71.987L246.423 23.985c18.467-32.009 64.72-31.951 83.154 0l239.94 416.028zM288 354c-25.405 0-46 20.595-46 46s20.595 46 46 46 46-20.595 46-46-20.595-46-46-46zm-43.673-165.346l7.418 136c.347 6.364 5.609 11.346 11.982 11.346h48.546c6.373 0 11.635-4.982 11.982-11.346l7.418-136c.375-6.874-5.098-12.654-11.982-12.654h-63.383c-6.884 0-12.356 5.78-11.981 12.654z" } }] })(r);
}
function kt(r) {
  return $({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M432 416h-23.41L277.88 53.69A32 32 0 0 0 247.58 32h-47.16a32 32 0 0 0-30.3 21.69L39.41 416H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-19.58l23.3-64h152.56l23.3 64H304a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zM176.85 272L224 142.51 271.15 272z" } }] })(r);
}
function St(r) {
  return $({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z" } }] })(r);
}
function Ft(r) {
  return $({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M223.75 130.75L154.62 15.54A31.997 31.997 0 0 0 127.18 0H16.03C3.08 0-4.5 14.57 2.92 25.18l111.27 158.96c29.72-27.77 67.52-46.83 109.56-53.39zM495.97 0H384.82c-11.24 0-21.66 5.9-27.44 15.54l-69.13 115.21c42.04 6.56 79.84 25.62 109.56 53.38L509.08 25.18C516.5 14.57 508.92 0 495.97 0zM256 160c-97.2 0-176 78.8-176 176s78.8 176 176 176 176-78.8 176-176-78.8-176-176-176zm92.52 157.26l-37.93 36.96 8.97 52.22c1.6 9.36-8.26 16.51-16.65 12.09L256 393.88l-46.9 24.65c-8.4 4.45-18.25-2.74-16.65-12.09l8.97-52.22-37.93-36.96c-6.82-6.64-3.05-18.23 6.35-19.59l52.43-7.64 23.43-47.52c2.11-4.28 6.19-6.39 10.28-6.39 4.11 0 8.22 2.14 10.33 6.39l23.43 47.52 52.43 7.64c9.4 1.36 13.17 12.95 6.35 19.59z" } }] })(r);
}
function Tt(r) {
  return $({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm144 276c0 6.6-5.4 12-12 12h-92v92c0 6.6-5.4 12-12 12h-56c-6.6 0-12-5.4-12-12v-92h-92c-6.6 0-12-5.4-12-12v-56c0-6.6 5.4-12 12-12h92v-92c0-6.6 5.4-12 12-12h56c6.6 0 12 5.4 12 12v92h92c6.6 0 12 5.4 12 12v56z" } }] })(r);
}
function Bt(r) {
  return $({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M400 54.1c63 45 104 118.6 104 201.9 0 136.8-110.8 247.7-247.5 248C120 504.3 8.2 393 8 256.4 7.9 173.1 48.9 99.3 111.8 54.2c11.7-8.3 28-4.8 35 7.7L162.6 90c5.9 10.5 3.1 23.8-6.6 31-41.5 30.8-68 79.6-68 134.9-.1 92.3 74.5 168.1 168 168.1 91.6 0 168.6-74.2 168-169.1-.3-51.8-24.7-101.8-68.1-134-9.7-7.2-12.4-20.5-6.5-30.9l15.8-28.1c7-12.4 23.2-16.1 34.8-7.8zM296 264V24c0-13.3-10.7-24-24-24h-32c-13.3 0-24 10.7-24 24v240c0 13.3 10.7 24 24 24h32c13.3 0 24-10.7 24-24z" } }] })(r);
}
function Ot(r) {
  return $({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M496 384H160v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h80v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h336c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160h-80v-16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h336v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h80c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm0-160H288V48c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v16H16C7.2 64 0 71.2 0 80v32c0 8.8 7.2 16 16 16h208v16c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-16h208c8.8 0 16-7.2 16-16V80c0-8.8-7.2-16-16-16z" } }] })(r);
}
function Pt(r) {
  return $({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z" } }] })(r);
}
function It(r) {
  return $({ attr: { viewBox: "0 0 512 512" }, child: [{ tag: "path", attr: { d: "M464 32H48C21.49 32 0 53.49 0 80v352c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V80c0-26.51-21.49-48-48-48zM224 416H64v-96h160v96zm0-160H64v-96h160v96zm224 160H288v-96h160v96zm0-160H288v-96h160v96z" } }] })(r);
}
function st(r) {
  return $({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M304 32H16A16 16 0 0 0 0 48v96a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16v-32h56v304H80a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h160a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16h-40V112h56v32a16 16 0 0 0 16 16h32a16 16 0 0 0 16-16V48a16 16 0 0 0-16-16zm256 336h-48V144h48c14.31 0 21.33-17.31 11.31-27.31l-80-80a16 16 0 0 0-22.62 0l-80 80C379.36 126 384.36 144 400 144h48v224h-48c-14.31 0-21.32 17.31-11.31 27.31l80 80a16 16 0 0 0 22.62 0l80-80C580.64 386 575.64 368 560 368z" } }] })(r);
}
function Dt(r) {
  return $({ attr: { viewBox: "0 0 576 512" }, child: [{ tag: "path", attr: { d: "M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 320c-70.8 0-128-57.3-128-128 0-70.8 57.3-128 128-128 70.8 0 128 57.3 128 128 0 70.8-57.3 128-128 128z" } }] })(r);
}
function Mt(r) {
  return $({ attr: { viewBox: "0 0 496 512" }, child: [{ tag: "path", attr: { d: "M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z" } }] })(r);
}
function zt(r) {
  return $({ attr: { viewBox: "0 0 448 512" }, child: [{ tag: "path", attr: { d: "M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-6 400H54c-3.3 0-6-2.7-6-6V86c0-3.3 2.7-6 6-6h340c3.3 0 6 2.7 6 6v340c0 3.3-2.7 6-6 6z" } }] })(r);
}
const Gt = () => /* @__PURE__ */ t.jsxs("div", { className: "flex min-h-screen", children: [
  /* @__PURE__ */ t.jsxs("div", { className: "fixed w-64 h-screen bg-gradient-to-b from-[#4B5EAA] to-[#3B4A8A] text-white p-6 flex flex-col shadow-lg", children: [
    /* @__PURE__ */ t.jsxs("div", { className: "flex items-center mb-10", children: [
      /* @__PURE__ */ t.jsx(
        "img",
        {
          src: "/image1.png.jpg",
          alt: "Logo",
          className: "w-10 h-10 mr-3 rounded-full"
        }
      ),
      /* @__PURE__ */ t.jsx("h2", { className: "text-3xl font-extrabold tracking-tight", children: "UI-KIT" })
    ] }),
    /* @__PURE__ */ t.jsxs("nav", { className: "space-y-3 flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-[#5C7CFA] scrollbar-track-[#3B4A8A] pr-2", children: [
      /* @__PURE__ */ t.jsxs(
        _,
        {
          to: "/buttons",
          className: `flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium\r
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md\r
              transition-all duration-300 ease-in-out`,
          children: [
            /* @__PURE__ */ t.jsx(Dt, { className: "text-lg" }),
            /* @__PURE__ */ t.jsx("span", { children: "Buttons" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        _,
        {
          to: "/cards",
          className: `flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium\r
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md\r
              transition-all duration-300 ease-in-out`,
          children: [
            /* @__PURE__ */ t.jsx(Et, { className: "text-lg" }),
            /* @__PURE__ */ t.jsx("span", { children: "Cards" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        _,
        {
          to: "/checkbox",
          className: `flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium\r
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md\r
              transition-all duration-300 ease-in-out`,
          children: [
            /* @__PURE__ */ t.jsx(zt, { className: "text-lg" }),
            /* @__PURE__ */ t.jsx("span", { children: "Checkboxes" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        _,
        {
          to: "/input",
          className: `flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium\r
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md\r
              transition-all duration-300 ease-in-out`,
          children: [
            /* @__PURE__ */ t.jsx(st, { className: "text-lg" }),
            /* @__PURE__ */ t.jsx("span", { children: "Input" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        _,
        {
          to: "/slider",
          className: `flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium\r
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md\r
              transition-all duration-300 ease-in-out`,
          children: [
            /* @__PURE__ */ t.jsx(Ot, { className: "text-lg" }),
            /* @__PURE__ */ t.jsx("span", { children: "Slider" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        _,
        {
          to: "/Textfield",
          className: `flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium\r
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md\r
              transition-all duration-300 ease-in-out`,
          children: [
            /* @__PURE__ */ t.jsx(st, { className: "text-lg" }),
            /* @__PURE__ */ t.jsx("span", { children: "Text Field" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        _,
        {
          to: "/RadioButton",
          className: `flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium\r
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md\r
              transition-all duration-300 ease-in-out`,
          children: [
            /* @__PURE__ */ t.jsx($t, { className: "text-lg" }),
            /* @__PURE__ */ t.jsx("span", { children: "Radio Group" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        _,
        {
          to: "/SwitchButton",
          className: `flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium\r
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md\r
              transition-all duration-300 ease-in-out`,
          children: [
            /* @__PURE__ */ t.jsx(Bt, { className: "text-lg" }),
            /* @__PURE__ */ t.jsx("span", { children: "Switch" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        _,
        {
          to: "/Avatar",
          className: `flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium\r
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md\r
              transition-all duration-300 ease-in-out`,
          children: [
            /* @__PURE__ */ t.jsx(Mt, { className: "text-lg" }),
            /* @__PURE__ */ t.jsx("span", { children: "Avatar" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        _,
        {
          to: "/Badge",
          className: `flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium\r
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md\r
              transition-all duration-300 ease-in-out`,
          children: [
            /* @__PURE__ */ t.jsx(Ft, { className: "text-lg" }),
            /* @__PURE__ */ t.jsx("span", { children: "Badge" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        _,
        {
          to: "/Alert",
          className: `flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium\r
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md\r
              transition-all duration-300 ease-in-out`,
          children: [
            /* @__PURE__ */ t.jsx(Rt, { className: "text-lg" }),
            /* @__PURE__ */ t.jsx("span", { children: "Alert" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        _,
        {
          to: "/progress",
          className: `flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium\r
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md\r
              transition-all duration-300 ease-in-out`,
          children: [
            /* @__PURE__ */ t.jsx(Pt, { className: "text-lg" }),
            /* @__PURE__ */ t.jsx("span", { children: "Progress" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        _,
        {
          to: "/table",
          className: `flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium\r
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md\r
              transition-all duration-300 ease-in-out`,
          children: [
            /* @__PURE__ */ t.jsx(It, { className: "text-lg" }),
            /* @__PURE__ */ t.jsx("span", { children: "Table" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        _,
        {
          to: "/Tooltip",
          className: `flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium\r
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md\r
              transition-all duration-300 ease-in-out`,
          children: [
            /* @__PURE__ */ t.jsx(St, { className: "text-lg" }),
            /* @__PURE__ */ t.jsx("span", { children: "Tooltip" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        _,
        {
          to: "/Typography",
          className: `flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium\r
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md\r
              transition-all duration-300 ease-in-out`,
          children: [
            /* @__PURE__ */ t.jsx(kt, { className: "text-lg" }),
            /* @__PURE__ */ t.jsx("span", { children: "Typography" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        _,
        {
          to: "/FloatButton",
          className: `flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium\r
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md\r
              transition-all duration-300 ease-in-out`,
          children: [
            /* @__PURE__ */ t.jsx(Tt, { className: "text-lg" }),
            /* @__PURE__ */ t.jsx("span", { children: "Float Button" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        _,
        {
          to: "/Result",
          className: `flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium\r
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md\r
              transition-all duration-300 ease-in-out`,
          children: [
            /* @__PURE__ */ t.jsx(_t, { className: "text-lg" }),
            /* @__PURE__ */ t.jsx("span", { children: "Result" })
          ]
        }
      ),
      /* @__PURE__ */ t.jsxs(
        _,
        {
          to: "/Loader",
          className: `flex items-center space-x-3 p-3 rounded-lg bg-white text-[#4B5EAA] font-medium\r
              border border-gray-200 shadow-sm hover:bg-[#E6F0FA] hover:border-[#5C7CFA] hover:shadow-md\r
              transition-all duration-300 ease-in-out`,
          children: [
            /* @__PURE__ */ t.jsx(At, { className: "text-lg" }),
            /* @__PURE__ */ t.jsx("span", { children: "Loader" })
          ]
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx("div", { className: "mt-auto text-sm text-gray-200", children: "© Workwise" })
  ] }),
  /* @__PURE__ */ t.jsx("div", { className: "flex-1 ml-64 p-8 bg-gray-100 overflow-y-auto", children: /* @__PURE__ */ t.jsx(yt, {}) })
] }), Jt = ({
  label: r = "Button",
  type: n = "primary",
  customColor: s = "",
  size: d = "xxs",
  shine: i = "medium",
  onClick: u = () => {
  },
  style: c = {},
  borderRadius: f = "rounded-lg",
  fontSize: o = "text-xs",
  fontFamily: x = "Montserrat",
  // ✅ CORRECT fallback
  padding: m = "px-2 py-1",
  margin: b = "",
  width: w = "",
  height: E = "",
  disabled: A = !1,
  icon: S,
  className: T = ""
}) => {
  const R = {
    xxs: "text-[10px]",
    xs: "text-[12px]",
    sm: "text-[14px]",
    md: "text-[16px]",
    lg: "text-[18px]"
  }, j = {
    primary: s ? `bg-[${s}] text-white hover:bg-opacity-90` : "bg-gradient-to-r from-[#4B5EAA] to-[#4B5EAA] text-white shadow-lg hover:from-[#3a4e94] hover:to-[#2e3f7a]",
    secondary: "bg-gradient-to-r from-gray-600 to-gray-800 text-white shadow-lg hover:from-gray-700 hover:to-gray-900",
    outline: "border-2 border-blue-500 text-blue-500 bg-transparent shadow-lg hover:bg-blue-500 hover:text-white",
    success: "bg-gradient-to-r from-green-500 to-green-700 text-white shadow-lg hover:from-green-600 hover:to-green-800",
    danger: "bg-gradient-to-r from-red-500 to-red-700 text-white shadow-lg hover:from-red-600 hover:to-red-800",
    customBlue: "bg-[#4B5EAA] text-white hover:bg-[#3a4e94] shadow-lg",
    customGreen: "bg-green-500 text-white hover:bg-green-600 shadow-lg",
    customRed: "bg-red-500 text-white hover:bg-red-600 shadow-lg",
    customPurple: "bg-purple-500 text-white hover:bg-purple-600 shadow-lg"
  }, L = {
    low: "shine-low",
    medium: "shine-medium",
    high: "shine-high"
  }, U = "relative overflow-hidden font-semibold transition-all duration-300 flex items-center justify-center gap-2", W = A ? "opacity-50 cursor-not-allowed" : "", ee = R[d] || R.xxs;
  return /* @__PURE__ */ t.jsxs(
    "button",
    {
      style: { ...c, fontFamily: x },
      onClick: u,
      disabled: A,
      className: `inline-block
        ${U}
        ${ee}
        ${j[n] || j.primary}
        ${L[i]}
        ${f}
        ${o}
        ${m}
        ${b}
        ${w}
        ${E}
        ${W}
        ${T}
      `,
      children: [
        S && /* @__PURE__ */ t.jsx("span", { className: "text-lg", children: S }),
        /* @__PURE__ */ t.jsx("span", { className: "relative z-10", children: r }),
        !A && /* @__PURE__ */ t.jsx("span", { className: "shiny-effect" })
      ]
    }
  );
}, Xt = ({
  mainIcon: r,
  mainColor: n = "#4caf50",
  mainHover: s = "#2e7d32",
  childrenButtons: d = [],
  position: i = "bottom-right"
}) => {
  const [u, c] = Z(!1), f = {
    "bottom-right": { bottom: "20px", right: "20px" },
    "top-right": { top: "20px", right: "20px" }
  }, o = f[i] || f["bottom-right"], x = () => c(!u);
  return /* @__PURE__ */ t.jsxs("div", { style: { position: "fixed", zIndex: 999, ...o }, children: [
    u && d.map((m, b) => /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: m.onClick,
        style: {
          marginBottom: "10px",
          width: "44px",
          height: "44px",
          borderRadius: "50%",
          backgroundColor: m.bg || "#007bff",
          color: "#fff",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "18px",
          transition: "transform 0.3s ease",
          boxShadow: "0 4px 10px rgba(0,0,0,0.2)"
        },
        title: m.label,
        children: m.icon
      },
      b
    )),
    /* @__PURE__ */ t.jsx(
      "button",
      {
        onClick: x,
        style: {
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          backgroundColor: n,
          color: "#fff",
          border: "none",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "22px",
          transition: "0.3s",
          boxShadow: "0 4px 12px rgba(0,0,0,0.3)"
        },
        onMouseEnter: (m) => m.target.style.backgroundColor = s,
        onMouseLeave: (m) => m.target.style.backgroundColor = n,
        title: "Toggle Menu",
        children: r
      }
    )
  ] });
}, Qt = ({
  label: r = "Toggle",
  checked: n = !1,
  onChange: s,
  onLabel: d = "On",
  offLabel: i = "Off",
  disabled: u = !1,
  labelColor: c = "#4B5EAA",
  // Label color can be passed as prop
  switchColor: f = "#4B5EAA",
  // Color for switch when checked
  switchBgColor: o = "bg-gray-300"
  // Background color for switch when not checked
}) => {
  const x = n ? `bg-[${f}]` : `${o}`;
  return /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-4", children: [
    /* @__PURE__ */ t.jsx("label", { className: "text-sm font-medium", style: { color: c }, children: r }),
    /* @__PURE__ */ t.jsxs("label", { className: "relative inline-flex items-center cursor-pointer", children: [
      /* @__PURE__ */ t.jsx(
        "input",
        {
          type: "checkbox",
          className: "sr-only peer",
          checked: n,
          onChange: s,
          disabled: u
        }
      ),
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: `w-11 h-6 rounded-full transition-all ${x}`
        }
      ),
      /* @__PURE__ */ t.jsx(
        "div",
        {
          className: `absolute left-1 top-1 w-4 h-4 bg-white rounded-full transition-transform ${n ? "translate-x-5" : ""}`
        }
      )
    ] }),
    /* @__PURE__ */ t.jsx("span", { className: "text-sm", style: { color: c }, children: n ? d : i })
  ] });
}, Zt = ({
  label: r,
  disabled: n = !1,
  color: s = "blue",
  // blue, green, red
  size: d = "md",
  // sm, md, lg
  variant: i = "default",
  // default, rounded, square, filled, outline, custom
  customClass: u = ""
}) => {
  const [c, f] = Z(!1), o = () => {
    f(!c);
  }, x = {
    blue: "border-blue-500",
    green: "border-green-500",
    red: "border-red-500"
  }, m = {
    blue: "focus:ring-blue-200",
    green: "focus:ring-green-200",
    red: "focus:ring-red-200"
  }, b = {
    blue: "checked:bg-blue-500",
    green: "checked:bg-green-500",
    red: "checked:bg-red-500"
  }, w = {
    sm: "h-4 w-4",
    md: "h-5 w-5",
    lg: "h-6 w-6"
  }, E = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  }, A = {
    default: "border-2 rounded",
    rounded: "border-2 rounded-full",
    square: "border-2",
    filled: "border-0",
    outline: "border-2 bg-transparent",
    custom: "appearance-none"
  }, S = `${x[s]} ${m[s]} ${b[s]}`, T = `
    ${E[d]} 
    ${n ? "text-gray-400" : "text-gray-800"} 
    cursor-pointer select-none
  `, R = `
    ${i === "custom" ? "appearance-none" : ""} 
    ${w[d]} 
    ${A[i]} 
    ${S} 
    ${n ? "opacity-50 cursor-not-allowed" : "cursor-pointer"} 
    transition-all duration-200
  `.trim();
  return /* @__PURE__ */ t.jsxs("div", { className: `flex items-center space-x-2 ${u}`, children: [
    /* @__PURE__ */ t.jsx(
      "input",
      {
        type: "checkbox",
        checked: c,
        onChange: o,
        disabled: n,
        className: R
      }
    ),
    r && /* @__PURE__ */ t.jsx("label", { className: T, children: r })
  ] });
}, er = ({
  type: r = "text",
  placeholder: n,
  value: s,
  onChange: d,
  label: i,
  name: u,
  error: c,
  isPasswordToggle: f = !1,
  labelColor: o = "#4B5EAA",
  // Label color can be passed as prop
  borderColor: x = "border-gray-300",
  // Border color can be passed as prop
  padding: m = "p-2",
  // Padding can be passed as prop
  height: b = "h-10",
  // Height can be passed as prop
  showPasswordText: w = { show: "Show", hide: "Hide" },
  // Allow dynamic text for password toggle
  className: E = ""
}) => {
  const [A, S] = Z(!1), T = () => {
    S((R) => !R);
  };
  return /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col space-y-2", children: [
    i && /* @__PURE__ */ t.jsx("label", { htmlFor: u, className: "text-sm font-medium", style: { color: o }, children: i }),
    /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ t.jsx(
        "input",
        {
          type: f && A ? "text" : r,
          placeholder: n,
          value: s,
          onChange: d,
          name: u,
          className: `border-2 ${x} rounded-lg ${m} focus:outline-none focus:ring-2 focus:ring-blue-500 ${E || "w-full"} ${b}`
        }
      ),
      f && /* @__PURE__ */ t.jsx(
        "button",
        {
          type: "button",
          onClick: T,
          className: "absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 text-sm",
          children: A ? w.hide : w.show
        }
      )
    ] }),
    c && /* @__PURE__ */ t.jsx("span", { className: "text-red-500 text-xs", children: c })
  ] });
}, tr = ({
  name: r,
  options: n,
  selectedValue: s,
  onChange: d,
  direction: i = "vertical",
  // or 'horizontal'
  gap: u = "1rem",
  labelColor: c = "#4B5EAA",
  size: f = "16px"
}) => {
  const o = i === "horizontal" ? "row" : "column";
  return /* @__PURE__ */ t.jsx("div", { style: { display: "flex", flexDirection: o, gap: u }, children: n.map((x) => /* @__PURE__ */ t.jsxs(
    "label",
    {
      style: {
        color: c,
        display: "flex",
        alignItems: "center",
        cursor: "pointer",
        gap: "0.5rem",
        fontSize: f
      },
      children: [
        /* @__PURE__ */ t.jsx(
          "input",
          {
            type: "radio",
            name: r,
            value: x.value,
            checked: s === x.value,
            onChange: () => d(x.value),
            style: {
              accentColor: "#4B5EAA",
              width: f,
              height: f,
              cursor: "pointer"
            }
          }
        ),
        x.label
      ]
    },
    x.value
  )) });
}, rr = ({
  value: r,
  onSliderChange: n,
  onPointClick: s,
  sliderRef: d,
  trackColor: i,
  thumbColor: u,
  pointHoverColor: c,
  width: f,
  height: o,
  showScale: x = !0
}) => {
  const m = [25, 50, 75, 100], b = o === "h-2" ? "w-5 h-5" : o === "h-3" ? "w-7 h-7" : "w-9 h-9", w = o === "h-2" ? "-top-1.5" : o === "h-3" ? "-top-2" : "-top-2.5";
  return /* @__PURE__ */ t.jsxs("div", { className: `${f} mx-auto py-6`, children: [
    /* @__PURE__ */ t.jsx("h2", { className: "text-2xl font-semibold text-gray-800 mb-4 text-center tracking-tight", children: "Slider" }),
    /* @__PURE__ */ t.jsxs(
      "div",
      {
        ref: d,
        className: `relative ${o} bg-gray-200 rounded-full cursor-pointer`,
        onMouseDown: (E) => {
          n(E);
          const A = (T) => n(T), S = () => {
            document.removeEventListener("mousemove", A), document.removeEventListener("mouseup", S);
          };
          document.addEventListener("mousemove", A), document.addEventListener("mouseup", S);
        },
        children: [
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `absolute ${o} rounded-full transition-all duration-300 ease-out`,
              style: { width: `${r}%`, backgroundColor: i }
            }
          ),
          /* @__PURE__ */ t.jsx(
            "div",
            {
              className: `absolute ${b} rounded-full ${w} shadow-lg transform -translate-x-1/2 transition-all duration-300 ease-out cursor-grab active:cursor-grabbing`,
              style: { left: `${r}%`, backgroundColor: u }
            }
          ),
          /* @__PURE__ */ t.jsxs("span", { className: "absolute right-0 -top-6 text-sm font-semibold text-green-600", children: [
            r,
            "%"
          ] })
        ]
      }
    ),
    x && /* @__PURE__ */ t.jsx("div", { className: "flex justify-between mt-4", children: m.map((E) => /* @__PURE__ */ t.jsx(
      "button",
      {
        className: "text-sm font-medium text-gray-600 cursor-pointer transition-colors duration-200",
        style: { "--tw-text-opacity": 1, color: `rgb(from ${c} r g b / var(--tw-text-opacity))` },
        onClick: () => s(E),
        children: E
      },
      E
    )) })
  ] });
}, ar = ({
  label: r,
  placeholder: n,
  value: s,
  onChange: d,
  name: i,
  type: u = "text",
  className: c = "",
  disabled: f = !1,
  error: o = "",
  labelColor: x = "#4B5EAA",
  errorColor: m = "text-red-500"
}) => /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col border-2 space-y-1", children: [
  r && /* @__PURE__ */ t.jsx("label", { className: "text-sm font-medium", style: { color: x }, children: r }),
  /* @__PURE__ */ t.jsx(
    "input",
    {
      type: u,
      name: i,
      placeholder: n,
      value: s,
      onChange: d,
      disabled: f,
      className: c
    }
  ),
  o && /* @__PURE__ */ t.jsx("p", { className: `text-sm mt-1 ${m}`, children: o })
] }), Lt = {
  success: "border-green-500 text-green-700 bg-green-50",
  error: "border-red-500 text-red-700 bg-red-50",
  warning: "border-yellow-500 text-yellow-700 bg-yellow-50",
  info: "border-blue-500 text-blue-700 bg-blue-50"
}, Ut = {
  success: "✅",
  error: "❌",
  warning: "⚠️",
  info: "ℹ️"
}, Wt = {
  "top-left": "top-4 left-4",
  "top-center": "top-4 left-1/2 -translate-x-1/2",
  "top-right": "top-4 right-4",
  "bottom-left": "bottom-4 left-4",
  "bottom-center": "bottom-4 left-1/2 -translate-x-1/2",
  "bottom-right": "bottom-4 right-4"
}, nr = ({
  type: r = "info",
  message: n,
  heading: s,
  position: d
}) => {
  const [i, u] = Z(!0);
  return i ? /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: `${d ? `fixed z-50 transform ${Wt[d]}` : ""}
                  border rounded-md flex flex-col gap-1 text-sm 
                  ${Lt[r]} 
                  max-w-full sm:max-w-md w-full 
                  min-h-[48px] px-4 py-3 
                  shadow-sm`,
      children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-2", children: [
            /* @__PURE__ */ t.jsx("span", { className: "text-xl", children: Ut[r] }),
            s && /* @__PURE__ */ t.jsx("strong", { className: "text-base", children: s })
          ] }),
          /* @__PURE__ */ t.jsx(
            "button",
            {
              onClick: () => u(!1),
              className: "text-sm text-gray-500 hover:text-black",
              children: "×"
            }
          )
        ] }),
        /* @__PURE__ */ t.jsx("span", { className: "ml-7", children: n })
      ]
    }
  ) : null;
}, Ht = {
  xs: "w-6 h-6",
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
  xl: "w-16 h-16"
}, Vt = {
  online: "bg-green-500",
  offline: "bg-gray-400",
  busy: "bg-red-500",
  away: "bg-yellow-500"
}, sr = ({
  src: r,
  alt: n = "Avatar",
  size: s = "md",
  className: d = "",
  fallback: i,
  border: u = !1,
  status: c
}) => {
  const f = (o) => o.split(" ").filter(Boolean).map((x) => x[0]).join("").toUpperCase().slice(0, 2);
  return /* @__PURE__ */ t.jsxs("div", { className: "relative inline-block", children: [
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `
          relative 
          rounded-full 
          overflow-hidden
          ${Ht[s]}
          ${u ? "border-2 border-white ring-2 ring-gray-200" : ""}
          ${d}
        `,
        children: r ? /* @__PURE__ */ t.jsx(
          "img",
          {
            src: r,
            alt: n,
            className: "w-full h-full object-cover"
          }
        ) : /* @__PURE__ */ t.jsx(
          "div",
          {
            className: "w-full h-full flex items-center justify-center bg-gray-200 text-gray-600",
            role: "img",
            "aria-label": n,
            children: i || f(n)
          }
        )
      }
    ),
    c && /* @__PURE__ */ t.jsx(
      "span",
      {
        className: `
            absolute 
            bottom-0 
            right-0
            rounded-full
            border-2 
            border-white
            ${s === "xs" ? "w-2 h-2" : "w-3 h-3"}
            ${Vt[c]}
          `
      }
    )
  ] });
}, ot = {
  success: "bg-green-500",
  error: "bg-red-500",
  warning: "bg-yellow-500",
  processing: "bg-blue-500",
  default: "bg-gray-400",
  primary: "bg-blue-600",
  secondary: "bg-pink-500"
}, or = ({ status: r = "default", text: n = "", offset: s = [0, 0], children: d }) => {
  const i = ot[r] || ot.default, u = () => {
    const [f, o] = s.map((x) => typeof x == "number" ? x : 0);
    return { transform: `translate(${f}px, ${o}px)` };
  }, c = /* @__PURE__ */ t.jsxs(
    "span",
    {
      className: `relative inline-block ${i} text-white text-sm font-semibold px-3 py-1 rounded-l-full rounded-tr-full`,
      role: "status",
      "aria-label": n || r,
      children: [
        n,
        /* @__PURE__ */ t.jsx(
          "span",
          {
            className: "absolute right-0 bottom-0 w-0 h-0",
            style: {
              borderTop: "10px solid transparent",
              borderLeft: `10px solid ${i.includes("bg-gray-400") ? "white" : "rgba(0, 0, 0, 0.3)"}`,
              borderBottom: "10px solid transparent",
              right: "-10px"
            }
          }
        )
      ]
    }
  );
  return d ? /* @__PURE__ */ t.jsxs("span", { className: "relative inline-block", children: [
    d,
    /* @__PURE__ */ t.jsx("span", { className: "absolute top-0 right-0", style: u(), children: c })
  ] }) : /* @__PURE__ */ t.jsx("span", { className: "inline-block", children: c });
}, lr = ({
  icon: r,
  iconBgColor: n = "bg-blue-100",
  title: s,
  subtitle: d,
  rightValue: i,
  rightLabel: u,
  imageSrc: c,
  badgeText: f,
  createdDate: o,
  className: x = "",
  imagePosition: m = "top"
  // 'top', 'left', 'right', 'bottom'
}) => {
  const b = m === "left" || m === "right";
  return /* @__PURE__ */ t.jsxs("div", { className: `relative rounded-xl shadow-md bg-white overflow-hidden ${x} flex ${b ? "flex-row" : "flex-col"}`, children: [
    f && /* @__PURE__ */ t.jsx("span", { className: "absolute top-2 right-2 bg-red-500 text-white text-xs px-3 py-1 rounded-md z-10", children: f }),
    c && m === "top" && /* @__PURE__ */ t.jsx("div", { className: "w-full h-32 overflow-hidden rounded-t-xl", children: /* @__PURE__ */ t.jsx("img", { src: c, alt: "Top visual", className: "w-full h-full object-cover" }) }),
    c && m === "left" && /* @__PURE__ */ t.jsx("div", { className: "w-28 h-full overflow-hidden rounded-l-xl", children: /* @__PURE__ */ t.jsx("img", { src: c, alt: "Left visual", className: "w-full h-full object-cover" }) }),
    /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col justify-between p-4 flex-1", children: [
      /* @__PURE__ */ t.jsxs("div", { className: "flex justify-between items-center gap-4", children: [
        /* @__PURE__ */ t.jsxs("div", { className: "flex items-center gap-3", children: [
          r && /* @__PURE__ */ t.jsx("div", { className: `w-12 h-12 flex items-center justify-center rounded-full ${n}`, children: r }),
          /* @__PURE__ */ t.jsxs("div", { children: [
            /* @__PURE__ */ t.jsx("h3", { className: "text-xl font-bold", children: s }),
            /* @__PURE__ */ t.jsx("p", { className: "text-gray-500 text-sm", children: d })
          ] })
        ] }),
        (i || u) && /* @__PURE__ */ t.jsxs("div", { className: "text-right", children: [
          /* @__PURE__ */ t.jsx("h3", { className: "text-md font-bold", children: i }),
          /* @__PURE__ */ t.jsx("p", { className: "text-gray-400 text-sm", children: u })
        ] })
      ] }),
      o && /* @__PURE__ */ t.jsxs("p", { className: "text-xs text-gray-500 mt-3", children: [
        "Created: ",
        o
      ] })
    ] }),
    c && m === "right" && /* @__PURE__ */ t.jsx("div", { className: "w-28 h-full overflow-hidden rounded-r-xl", children: /* @__PURE__ */ t.jsx("img", { src: c, alt: "Right visual", className: "w-full h-full object-cover" }) }),
    c && m === "bottom" && /* @__PURE__ */ t.jsx("div", { className: "w-full h-32 overflow-hidden rounded-b-xl", children: /* @__PURE__ */ t.jsx("img", { src: c, alt: "Bottom visual", className: "w-full h-full object-cover" }) })
  ] });
}, ir = ({ type: r, size: n, color: s, loadingText: d, isLoading: i }) => {
  const u = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16"
  }, c = {
    sm: "w-2 h-2",
    md: "w-4 h-4",
    lg: "w-6 h-6"
  }, f = {
    sm: "text-sm",
    md: "text-base",
    lg: "text-lg"
  }, o = {
    blue: "bg-blue-500 text-blue-500",
    red: "bg-red-500 text-red-500",
    green: "bg-green-500 text-green-500",
    gray: "bg-gray-500 text-gray-500",
    purple: "bg-purple-500 text-purple-500"
  }, x = `flex flex-col items-center justify-center ${i ? "opacity-100" : "opacity-0"} transition-opacity duration-300`, m = () => {
    switch (r) {
      case "grid":
        return /* @__PURE__ */ t.jsxs("div", { className: `grid grid-cols-2 gap-1 ${u[n]} animate-[rotate_2s_linear_infinite]`, children: [
          /* @__PURE__ */ t.jsx("div", { className: `rounded-full ${c[n]} ${o[s]} opacity-100` }),
          /* @__PURE__ */ t.jsx("div", { className: `rounded-full ${c[n]} ${o[s]} opacity-75` }),
          /* @__PURE__ */ t.jsx("div", { className: `rounded-full ${c[n]} ${o[s]} opacity-50` }),
          /* @__PURE__ */ t.jsx("div", { className: `rounded-full ${c[n]} ${o[s]} opacity-25` })
        ] });
      case "orbit":
        return /* @__PURE__ */ t.jsx("div", { className: `relative ${u[n]}`, children: /* @__PURE__ */ t.jsx("div", { className: `absolute rounded-full ${c[n]} ${o[s]} animate-[orbit_1.5s_linear_infinite]` }) });
      case "ripple":
        return /* @__PURE__ */ t.jsxs("div", { className: `relative ${u[n]}`, children: [
          /* @__PURE__ */ t.jsx("div", { className: `absolute rounded-full ${o[s]} opacity-50 animate-[ripple_1.5s_ease-out_infinite]`, style: { width: "100%", height: "100%", animationDelay: "0s" } }),
          /* @__PURE__ */ t.jsx("div", { className: `absolute rounded-full ${o[s]} opacity-30 animate-[ripple_1.5s_ease-out_infinite]`, style: { width: "80%", height: "80%", animationDelay: "0.3s" } }),
          /* @__PURE__ */ t.jsx("div", { className: `absolute rounded-full ${o[s]} opacity-10 animate-[ripple_1.5s_ease-out_infinite]`, style: { width: "60%", height: "60%", animationDelay: "0.6s" } })
        ] });
      case "pulseBar":
        return /* @__PURE__ */ t.jsx("div", { className: `flex items-center ${u[n]}`, children: /* @__PURE__ */ t.jsx("div", { className: `h-2 flex-1 ${o[s]} animate-[pulseBar_1.5s_ease-in-out_infinite]` }) });
      case "bounce":
        return /* @__PURE__ */ t.jsxs("div", { className: `flex space-x-2 ${u[n]}`, children: [
          /* @__PURE__ */ t.jsx("div", { className: `rounded-full ${c[n]} ${o[s]} animate-[bounce_1s_ease-in-out_infinite]`, style: { animationDelay: "0s" } }),
          /* @__PURE__ */ t.jsx("div", { className: `rounded-full ${c[n]} ${o[s]} animate-[bounce_1s_ease-in-out_infinite]`, style: { animationDelay: "0.2s" } }),
          /* @__PURE__ */ t.jsx("div", { className: `rounded-full ${c[n]} ${o[s]} animate-[bounce_1s_ease-in-out_infinite]`, style: { animationDelay: "0.4s" } })
        ] });
      case "spinnerDots":
        return /* @__PURE__ */ t.jsx("div", { className: `relative ${u[n]}`, children: [...Array(8)].map((b, w) => /* @__PURE__ */ t.jsx(
          "div",
          {
            className: `absolute rounded-full ${c[n]} ${o[s]} opacity-50`,
            style: {
              transform: `rotate(${w * 45}deg) translate(50%, 0)`,
              animation: "spinnerDots_1.2s_linear_infinite",
              animationDelay: `${w * 0.15}s`
            }
          },
          w
        )) });
      case "fade":
        return /* @__PURE__ */ t.jsx("div", { className: `relative ${u[n]}`, children: /* @__PURE__ */ t.jsx("div", { className: `absolute w-full h-full ${o[s]} animate-[fade_1.5s_ease-in-out_infinite]` }) });
      case "waveDots":
        return /* @__PURE__ */ t.jsx("div", { className: `flex space-x-1 ${u[n]}`, children: [...Array(5)].map((b, w) => /* @__PURE__ */ t.jsx(
          "div",
          {
            className: `rounded-full ${c[n]} ${o[s]}`,
            style: {
              animation: "waveDots_1.2s_ease-in-out_infinite",
              animationDelay: `${w * 0.2}s`
            }
          },
          w
        )) });
      default:
        return /* @__PURE__ */ t.jsx("div", { className: "text-red-500", children: "Invalid loader type" });
    }
  };
  return /* @__PURE__ */ t.jsxs("div", { className: x, children: [
    m(),
    d && /* @__PURE__ */ t.jsx("span", { className: `mt-2 ${f[n]} ${o[s]}`, children: d }),
    /* @__PURE__ */ t.jsx("style", { jsx: !0, children: `
        @keyframes rotate {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes orbit {
          0% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(50%, 0) rotate(180deg); }
          100% { transform: translate(0, 0) rotate(360deg); }
        }
        @keyframes ripple {
          0% { transform: scale(0); opacity: 0.5; }
          100% { transform: scale(1.5); opacity: 0; }
        }
        @keyframes pulseBar {
          0%, 100% { transform: scaleX(1); }
          50% { transform: scaleX(0.3); }
        }
        @keyframes bounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-50%); }
        }
        @keyframes spinnerDots {
          0% { opacity: 0.2; }
          20% { opacity: 1; }
          100% { opacity: 0.2; }
        }
        @keyframes fade {
          0% { opacity: 1; transform: rotate(0deg); }
          50% { opacity: 0.3; transform: rotate(90deg); }
          100% { opacity: 1; transform: rotate(180deg); }
        }
        @keyframes waveDots {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.5); }
        }
      ` })
  ] });
}, cr = ({
  type: r = "linear",
  progress: n = 0,
  color: s = "#4B5EAA",
  height: d = 8,
  size: i = 80
}) => {
  if (r === "circular") {
    const c = (i - 8) / 2, f = 2 * Math.PI * c, o = f - n / 100 * f;
    return /* @__PURE__ */ t.jsxs("div", { className: "relative inline-block", style: { width: i, height: i }, children: [
      /* @__PURE__ */ t.jsxs("svg", { className: "rotate-[-90deg]", width: i, height: i, children: [
        /* @__PURE__ */ t.jsx(
          "circle",
          {
            cx: i / 2,
            cy: i / 2,
            r: c,
            stroke: "#E5E7EB",
            strokeWidth: 8,
            fill: "none"
          }
        ),
        /* @__PURE__ */ t.jsx(
          "circle",
          {
            cx: i / 2,
            cy: i / 2,
            r: c,
            stroke: s,
            strokeWidth: 8,
            fill: "none",
            strokeDasharray: f,
            strokeDashoffset: o,
            strokeLinecap: "round",
            style: { transition: "stroke-dashoffset 0.6s ease" }
          }
        )
      ] }),
      /* @__PURE__ */ t.jsx("div", { className: "absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-700", children: n >= 100 ? "✅" : `${n}%` })
    ] });
  }
  return /* @__PURE__ */ t.jsx("div", { className: "w-full bg-gray-200 rounded-full relative overflow-hidden", style: { height: d }, children: /* @__PURE__ */ t.jsxs(
    "div",
    {
      className: "rounded-full flex items-center justify-center text-white text-xs font-medium transition-all duration-500 ease-in-out",
      style: {
        width: `${n}%`,
        backgroundColor: s,
        height: "100%"
      },
      children: [
        n,
        "%"
      ]
    }
  ) });
}, dr = ({
  iconSize: r = "w-16 h-16",
  circleSize: n = "w-28 h-28",
  message: s = "Success",
  messageColor: d = "text-gray-800",
  messageFontSize: i = "text-base",
  messageFontFamily: u = "font-sans",
  editableMessage: c = !1,
  // ✅ Props for sub-message
  subMessage: f = "This is your result message",
  editableSubMessage: o = !1,
  subMessageColor: x = "text-gray-600",
  subMessageFontSize: m = "text-sm",
  subMessageFontFamily: b = "font-sans",
  buttonText: w = "Close",
  buttonFontSize: E = "text-sm",
  buttonTextColor: A = "text-white",
  buttonBgColor: S = "bg-green-500",
  hoverEffect: T = "hover:bg-green-600",
  buttonWidth: R = "w-20",
  buttonHeight: j = "h-7",
  // Reduced height
  buttonMargin: L = "mt-3",
  buttonPadding: U = "px-3 py-1",
  onClose: W
}) => /* @__PURE__ */ t.jsxs("div", { className: "flex flex-col items-center justify-center min-h-screen text-center", children: [
  /* @__PURE__ */ t.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `absolute top-0 left-0 ${n} rounded-full border-4 border-green-300 animate-spin`,
        style: { animationDuration: "6s" }
      }
    ),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `absolute top-0 left-0 ${n} rounded-full border-4 border-green-200 animate-spin scale-x-[-1]`,
        style: { animationDuration: "10s" }
      }
    ),
    /* @__PURE__ */ t.jsx(
      "div",
      {
        className: `relative z-10 flex items-center justify-center ${n} rounded-full border-4 border-green-500 bg-green-50`,
        children: /* @__PURE__ */ t.jsxs(
          "svg",
          {
            className: r,
            viewBox: "0 0 100 100",
            xmlns: "http://www.w3.org/2000/svg",
            children: [
              /* @__PURE__ */ t.jsx("circle", { cx: "50", cy: "50", r: "48", fill: "#e6ffef", stroke: "#4ade80", strokeWidth: "4" }),
              /* @__PURE__ */ t.jsx(
                "path",
                {
                  d: "M30 52 L45 65 L70 35",
                  fill: "none",
                  stroke: "#22c55e",
                  strokeWidth: "6",
                  strokeLinecap: "round",
                  strokeLinejoin: "round"
                }
              )
            ]
          }
        )
      }
    )
  ] }),
  c ? /* @__PURE__ */ t.jsx(
    "input",
    {
      type: "text",
      defaultValue: s,
      className: `${d} ${i} ${u} mt-4 text-center`
    }
  ) : /* @__PURE__ */ t.jsx("p", { className: `${d} ${i} ${u} mt-4`, children: s }),
  o ? /* @__PURE__ */ t.jsx(
    "input",
    {
      type: "text",
      defaultValue: f,
      className: `${x} ${m} ${b} mt-1 text-center`
    }
  ) : /* @__PURE__ */ t.jsx("p", { className: `${x} ${m} ${b} mt-1`, children: f }),
  /* @__PURE__ */ t.jsx(
    "button",
    {
      className: `rounded ${E} ${A} ${S} ${T} ${R} ${j} ${L} ${U}`,
      onClick: W,
      children: w
    }
  )
] }), ur = ({
  columns: r = [],
  data: n = [],
  theme: s = {},
  headerHeight: d,
  headerBgColor: i,
  headerTextColor: u,
  headerFontSize: c,
  headerFontWeight: f,
  headerPadding: o,
  rowHeight: x,
  rowFontSize: m,
  rowPadding: b,
  rowBorderColor: w,
  rowHoverBgColor: E,
  evenRowBgColor: A,
  oddRowBgColor: S,
  selectionColumnWidth: T,
  checkboxSize: R,
  checkboxColor: j,
  sortIconSize: L,
  sortIconColor: U,
  sortIconOpacity: W,
  sortIconHoverOpacity: ee,
  paginationSize: Re,
  paginationFontSize: ke,
  paginationColor: le,
  paginationBorderColor: Se,
  tablePadding: Fe,
  tableMargin: ie,
  borderRadius: O,
  enableRowSelection: I = !1,
  selectionType: H = "checkbox",
  enableSorting: ce = !0,
  enablePagination: de = !0,
  pageSize: ue = 10,
  enableSearch: fe = !0,
  searchPlaceholder: he = "Search table...",
  enableExport: me = !1,
  exportFileName: xe = "table-data",
  enableColumnDrag: ge = !1,
  enableScrolling: Te = !0,
  enableScrollbar: Be = !0,
  scrollHeight: te,
  fixedHeader: re = !0,
  onRowClick: Y,
  onRowSelection: ae,
  onSort: q,
  onPageChange: Oe,
  onSearch: ve,
  onExport: Pe,
  onColumnDrag: Ie,
  loading: G = !1,
  size: V = "middle",
  forceFixedRowHeight: pe = !1,
  cellPadding: be = "sm",
  editMode: J = "column",
  rowColors: De = ["#ffffff", "#f9f9f9"],
  sortConfig: Me = { key: null, direction: null },
  descriptionWidth: ne = 300,
  descriptionMaxWidth: ze,
  includeDescription: Le = !0,
  maxDescriptionLength: ye = 500,
  enableWordBreak: we = !0,
  currentPage: je = 1,
  totalPages: Ue = 1,
  visiblePages: Ce = [],
  searchQuery: Ne = "",
  selectedRowKeys: We = [],
  selectedRows: He = [],
  editingRow: Ve = null,
  editingColumn: Ke = null,
  editedRowData: Ye = {},
  onEditStart: qe,
  onEditChange: Ge,
  onSave: se,
  onCancel: Ee,
  onSelectionTypeChange: M,
  ...oe
}) => /* @__PURE__ */ t.jsx("div", { className: "p-4 space-y-6" }), fr = ({ message: r, children: n }) => {
  const [s, d] = Z(!1), i = {
    position: "relative",
    display: "inline-block",
    cursor: "pointer"
  }, u = {
    position: "absolute",
    bottom: "125%",
    left: "50%",
    transform: "translateX(-50%)",
    backgroundColor: "#333",
    color: "#fff",
    padding: "8px 12px",
    borderRadius: "8px",
    whiteSpace: "nowrap",
    fontSize: "14px",
    boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.15)",
    opacity: s ? 1 : 0,
    transition: "opacity 0.3s ease-in-out, transform 0.3s",
    zIndex: 999,
    pointerEvents: "none"
  }, c = {
    position: "absolute",
    bottom: "115%",
    left: "50%",
    transform: "translateX(-50%)",
    width: 0,
    height: 0,
    borderLeft: "6px solid transparent",
    borderRight: "6px solid transparent",
    borderTop: "6px solid #333",
    opacity: s ? 1 : 0,
    transition: "opacity 0.3s ease-in-out",
    zIndex: 998
  };
  return /* @__PURE__ */ t.jsxs(
    "div",
    {
      style: i,
      onMouseEnter: () => d(!0),
      onMouseLeave: () => d(!1),
      children: [
        n,
        /* @__PURE__ */ t.jsx("div", { style: u, children: r }),
        /* @__PURE__ */ t.jsx("div", { style: c })
      ]
    }
  );
}, lt = {
  default: "text-black",
  secondary: "text-gray-500",
  success: "text-green-500",
  warning: "text-yellow-500",
  danger: "text-red-500",
  disabled: "text-gray-400 cursor-not-allowed",
  mark: "bg-yellow-200 text-black px-1",
  code: "bg-gray-100 text-black font-mono px-1 rounded",
  keyboard: "bg-gray-100 text-black px-2 py-0.5 rounded border text-sm",
  underline: "underline",
  delete: "line-through",
  strong: "font-bold",
  italic: "italic",
  link: "text-blue-500 underline cursor-pointer hover:text-blue-700"
}, Kt = {
  h1: "text-4xl font-bold",
  h2: "text-3xl font-semibold",
  h3: "text-2xl font-semibold",
  h4: "text-xl font-medium",
  h5: "text-lg font-medium",
  h6: "text-base font-medium",
  p: "text-base",
  span: "text-base"
}, hr = ({
  children: r,
  type: n = "default",
  as: s = "p",
  fontFamily: d = "Montserrat, sans-serif"
  // Default font family passed as prop
}) => {
  const i = s, u = lt[n] || lt.default, c = Kt[s] || "";
  return /* @__PURE__ */ t.jsx(
    i,
    {
      className: `${u} ${c}`,
      style: { fontFamily: d },
      children: r
    }
  );
};
export {
  Gt as MainLayout,
  nr as UIKitAlert,
  sr as UIKitAvatar,
  or as UIKitBadge,
  Jt as UIKitButton,
  lr as UIKitCard,
  Zt as UIKitCheckbox,
  Xt as UIKitFloatButton,
  er as UIKitInput,
  ir as UIKitLoader,
  cr as UIKitProgress,
  tr as UIKitRadioButton,
  dr as UIKitResult,
  rr as UIKitSlider,
  Qt as UIKitSwitchButton,
  ur as UIKitTable,
  ar as UIKitTextField,
  fr as UIKitTooltip,
  hr as UIKitTypography
};
//# sourceMappingURL=index.es.js.map
