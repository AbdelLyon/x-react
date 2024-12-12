import Ce from "react";
import { Button as me } from "@nextui-org/react";
import { cn as I } from "../../utils/@els_xefi/x-react.es.js";
var $ = { exports: {} }, N = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ge;
function ke() {
  if (ge) return N;
  ge = 1;
  var c = Symbol.for("react.transitional.element"), p = Symbol.for("react.fragment");
  function g(x, s, i) {
    var f = null;
    if (i !== void 0 && (f = "" + i), s.key !== void 0 && (f = "" + s.key), "key" in s) {
      i = {};
      for (var E in s)
        E !== "key" && (i[E] = s[E]);
    } else i = s;
    return s = i.ref, {
      $$typeof: c,
      type: x,
      key: f,
      ref: s !== void 0 ? s : null,
      props: i
    };
  }
  return N.Fragment = p, N.jsx = g, N.jsxs = g, N;
}
var O = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xe;
function Ne() {
  return xe || (xe = 1, process.env.NODE_ENV !== "production" && function() {
    function c(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === Re ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case q:
          return "Fragment";
        case pe:
          return "Portal";
        case D:
          return "Profiler";
        case K:
          return "StrictMode";
        case z:
          return "Suspense";
        case B:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case re:
            return (e.displayName || "Context") + ".Provider";
          case ee:
            return (e._context.displayName || "Context") + ".Consumer";
          case J:
            var r = e.render;
            return e = e.displayName, e || (e = r.displayName || r.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case V:
            return r = e.displayName || null, r !== null ? r : c(e.type) || "Memo";
          case G:
            r = e._payload, e = e._init;
            try {
              return c(e(r));
            } catch {
            }
        }
      return null;
    }
    function p(e) {
      return "" + e;
    }
    function g(e) {
      try {
        p(e);
        var r = !1;
      } catch {
        r = !0;
      }
      if (r) {
        r = console;
        var o = r.error, n = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return o.call(
          r,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          n
        ), p(e);
      }
    }
    function x() {
    }
    function s() {
      if (C === 0) {
        ne = console.log, ae = console.info, le = console.warn, ue = console.error, se = console.group, ce = console.groupCollapsed, ie = console.groupEnd;
        var e = {
          configurable: !0,
          enumerable: !0,
          value: x,
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
      C++;
    }
    function i() {
      if (C--, C === 0) {
        var e = { configurable: !0, enumerable: !0, writable: !0 };
        Object.defineProperties(console, {
          log: T({}, e, { value: ne }),
          info: T({}, e, { value: ae }),
          warn: T({}, e, { value: le }),
          error: T({}, e, { value: ue }),
          group: T({}, e, { value: se }),
          groupCollapsed: T({}, e, { value: ce }),
          groupEnd: T({}, e, { value: ie })
        });
      }
      0 > C && console.error(
        "disabledDepth fell below zero. This is a bug in React. Please file an issue."
      );
    }
    function f(e) {
      if (X === void 0)
        try {
          throw Error();
        } catch (o) {
          var r = o.stack.trim().match(/\n( *(at )?)/);
          X = r && r[1] || "", fe = -1 < o.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < o.stack.indexOf("@") ? "@unknown:0:0" : "";
        }
      return `
` + X + e + fe;
    }
    function E(e, r) {
      if (!e || F) return "";
      var o = Z.get(e);
      if (o !== void 0) return o;
      F = !0, o = Error.prepareStackTrace, Error.prepareStackTrace = void 0;
      var n = null;
      n = _.H, _.H = null, s();
      try {
        var l = {
          DetermineComponentFrameRoot: function() {
            try {
              if (r) {
                var m = function() {
                  throw Error();
                };
                if (Object.defineProperty(m.prototype, "props", {
                  set: function() {
                    throw Error();
                  }
                }), typeof Reflect == "object" && Reflect.construct) {
                  try {
                    Reflect.construct(m, []);
                  } catch (d) {
                    var Y = d;
                  }
                  Reflect.construct(e, [], m);
                } else {
                  try {
                    m.call();
                  } catch (d) {
                    Y = d;
                  }
                  e.call(m.prototype);
                }
              } else {
                try {
                  throw Error();
                } catch (d) {
                  Y = d;
                }
                (m = e()) && typeof m.catch == "function" && m.catch(function() {
                });
              }
            } catch (d) {
              if (d && Y && typeof d.stack == "string")
                return [d.stack, Y.stack];
            }
            return [null, null];
          }
        };
        l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
        var a = Object.getOwnPropertyDescriptor(
          l.DetermineComponentFrameRoot,
          "name"
        );
        a && a.configurable && Object.defineProperty(
          l.DetermineComponentFrameRoot,
          "name",
          { value: "DetermineComponentFrameRoot" }
        );
        var t = l.DetermineComponentFrameRoot(), v = t[0], R = t[1];
        if (v && R) {
          var u = v.split(`
`), j = R.split(`
`);
          for (t = a = 0; a < u.length && !u[a].includes(
            "DetermineComponentFrameRoot"
          ); )
            a++;
          for (; t < j.length && !j[t].includes(
            "DetermineComponentFrameRoot"
          ); )
            t++;
          if (a === u.length || t === j.length)
            for (a = u.length - 1, t = j.length - 1; 1 <= a && 0 <= t && u[a] !== j[t]; )
              t--;
          for (; 1 <= a && 0 <= t; a--, t--)
            if (u[a] !== j[t]) {
              if (a !== 1 || t !== 1)
                do
                  if (a--, t--, 0 > t || u[a] !== j[t]) {
                    var k = `
` + u[a].replace(
                      " at new ",
                      " at "
                    );
                    return e.displayName && k.includes("<anonymous>") && (k = k.replace("<anonymous>", e.displayName)), typeof e == "function" && Z.set(e, k), k;
                  }
                while (1 <= a && 0 <= t);
              break;
            }
        }
      } finally {
        F = !1, _.H = n, i(), Error.prepareStackTrace = o;
      }
      return u = (u = e ? e.displayName || e.name : "") ? f(u) : "", typeof e == "function" && Z.set(e, u), u;
    }
    function w(e) {
      if (e == null) return "";
      if (typeof e == "function") {
        var r = e.prototype;
        return E(
          e,
          !(!r || !r.isReactComponent)
        );
      }
      if (typeof e == "string") return f(e);
      switch (e) {
        case z:
          return f("Suspense");
        case B:
          return f("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case J:
            return e = E(e.render, !1), e;
          case V:
            return w(e.type);
          case G:
            r = e._payload, e = e._init;
            try {
              return w(e(r));
            } catch {
            }
        }
      return "";
    }
    function y() {
      var e = _.A;
      return e === null ? null : e.getOwner();
    }
    function A(e) {
      if (te.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function M(e, r) {
      function o() {
        Ee || (Ee = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          r
        ));
      }
      o.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: o,
        configurable: !0
      });
    }
    function S() {
      var e = c(this.type);
      return ve[e] || (ve[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function P(e, r, o, n, l, a) {
      return o = a.ref, e = {
        $$typeof: U,
        type: e,
        key: r,
        props: a,
        _owner: l
      }, (o !== void 0 ? o : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: S
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function h(e, r, o, n, l, a) {
      if (typeof e == "string" || typeof e == "function" || e === q || e === D || e === K || e === z || e === B || e === we || typeof e == "object" && e !== null && (e.$$typeof === G || e.$$typeof === V || e.$$typeof === re || e.$$typeof === ee || e.$$typeof === J || e.$$typeof === ye || e.getModuleId !== void 0)) {
        var t = r.children;
        if (t !== void 0)
          if (n)
            if (H(t)) {
              for (n = 0; n < t.length; n++)
                L(t[n], e);
              Object.freeze && Object.freeze(t);
            } else
              console.error(
                "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
              );
          else L(t, e);
      } else
        t = "", (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (t += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports."), e === null ? n = "null" : H(e) ? n = "array" : e !== void 0 && e.$$typeof === U ? (n = "<" + (c(e.type) || "Unknown") + " />", t = " Did you accidentally export a JSX literal instead of a component?") : n = typeof e, console.error(
          "React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",
          n,
          t
        );
      if (te.call(r, "key")) {
        t = c(e);
        var v = Object.keys(r).filter(function(u) {
          return u !== "key";
        });
        n = 0 < v.length ? "{key: someKey, " + v.join(": ..., ") + ": ...}" : "{key: someKey}", de[t + n] || (v = 0 < v.length ? "{" + v.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          n,
          t,
          v,
          t
        ), de[t + n] = !0);
      }
      if (t = null, o !== void 0 && (g(o), t = "" + o), A(r) && (g(r.key), t = "" + r.key), "key" in r) {
        o = {};
        for (var R in r)
          R !== "key" && (o[R] = r[R]);
      } else o = r;
      return t && M(
        o,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), P(e, t, a, l, y(), o);
    }
    function L(e, r) {
      if (typeof e == "object" && e && e.$$typeof !== he) {
        if (H(e))
          for (var o = 0; o < e.length; o++) {
            var n = e[o];
            W(n) && Q(n, r);
          }
        else if (W(e))
          e._store && (e._store.validated = 1);
        else if (e === null || typeof e != "object" ? o = null : (o = oe && e[oe] || e["@@iterator"], o = typeof o == "function" ? o : null), typeof o == "function" && o !== e.entries && (o = o.call(e), o !== e))
          for (; !(e = o.next()).done; )
            W(e.value) && Q(e.value, r);
      }
    }
    function W(e) {
      return typeof e == "object" && e !== null && e.$$typeof === U;
    }
    function Q(e, r) {
      if (e._store && !e._store.validated && e.key == null && (e._store.validated = 1, r = Te(r), !be[r])) {
        be[r] = !0;
        var o = "";
        e && e._owner != null && e._owner !== y() && (o = null, typeof e._owner.tag == "number" ? o = c(e._owner.type) : typeof e._owner.name == "string" && (o = e._owner.name), o = " It was passed a child from " + o + ".");
        var n = _.getCurrentStack;
        _.getCurrentStack = function() {
          var l = w(e.type);
          return n && (l += n() || ""), l;
        }, console.error(
          'Each child in a list should have a unique "key" prop.%s%s See https://react.dev/link/warning-keys for more information.',
          r,
          o
        ), _.getCurrentStack = n;
      }
    }
    function Te(e) {
      var r = "", o = y();
      return o && (o = c(o.type)) && (r = `

Check the render method of \`` + o + "`."), r || (e = c(e)) && (r = `

Check the top-level render call using <` + e + ">."), r;
    }
    var je = Ce, U = Symbol.for("react.transitional.element"), pe = Symbol.for("react.portal"), q = Symbol.for("react.fragment"), K = Symbol.for("react.strict_mode"), D = Symbol.for("react.profiler"), ee = Symbol.for("react.consumer"), re = Symbol.for("react.context"), J = Symbol.for("react.forward_ref"), z = Symbol.for("react.suspense"), B = Symbol.for("react.suspense_list"), V = Symbol.for("react.memo"), G = Symbol.for("react.lazy"), we = Symbol.for("react.offscreen"), oe = Symbol.iterator, Re = Symbol.for("react.client.reference"), _ = je.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, te = Object.prototype.hasOwnProperty, T = Object.assign, ye = Symbol.for("react.client.reference"), H = Array.isArray, C = 0, ne, ae, le, ue, se, ce, ie;
    x.__reactDisabledLog = !0;
    var X, fe, F = !1, Z = new (typeof WeakMap == "function" ? WeakMap : Map)(), he = Symbol.for("react.client.reference"), Ee, ve = {}, de = {}, be = {};
    O.Fragment = q, O.jsx = function(e, r, o, n, l) {
      return h(e, r, o, !1, n, l);
    }, O.jsxs = function(e, r, o, n, l) {
      return h(e, r, o, !0, n, l);
    };
  }()), O;
}
var _e;
function Oe() {
  return _e || (_e = 1, process.env.NODE_ENV === "production" ? $.exports = ke() : $.exports = Ne()), $.exports;
}
var b = Oe();
const Ye = ({
  fullWidth: c = !1,
  isLoading: p = !1,
  isDisabled: g = !1,
  startContent: x,
  endContent: s,
  className: i = "",
  LinkComponent: f,
  customStyles: E = {
    base: "",
    beforeContent: "",
    afterContent: "",
    content: ""
  },
  href: w,
  children: y,
  target: A,
  rel: M,
  ...S
}) => {
  const P = I(
    "transition-all font-normal dark:bg-opacity-90",
    c && "w-full",
    p && "opacity-50 cursor-not-allowed",
    E.base,
    i
  ), h = () => /* @__PURE__ */ b.jsxs(b.Fragment, { children: [
    x && /* @__PURE__ */ b.jsx("span", { className: I("mr-2", E.beforeContent), children: x }),
    /* @__PURE__ */ b.jsx("span", { className: E.content, children: y }),
    s && /* @__PURE__ */ b.jsx("span", { className: I("ml-2", E.afterContent), children: s })
  ] });
  return w && f ? /* @__PURE__ */ b.jsx(
    me,
    {
      ...S,
      as: f,
      className: P,
      href: w,
      rel: A === "_blank" ? "noopener noreferrer" : M,
      target: A,
      children: /* @__PURE__ */ b.jsx(h, {})
    }
  ) : /* @__PURE__ */ b.jsx(me, { ...S, className: P, isDisabled: g, children: /* @__PURE__ */ b.jsx(h, {}) });
};
export {
  Ye as Button
};
