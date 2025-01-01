import { useRef as Se, useCallback as It, useLayoutEffect as $t } from "react";
var Dt = Object.create, wr = Object.defineProperty, Lt = Object.getOwnPropertyDescriptor, Cr = Object.getOwnPropertyNames, Ft = Object.getPrototypeOf, Mt = Object.prototype.hasOwnProperty, Ve = (o, y) => function() {
  return y || (0, o[Cr(o)[0]])((y = { exports: {} }).exports, y), y.exports;
}, Nt = (o, y, O, D) => {
  if (y && typeof y == "object" || typeof y == "function")
    for (let A of Cr(y))
      !Mt.call(o, A) && A !== O && wr(o, A, { get: () => y[A], enumerable: !(D = Lt(y, A)) || D.enumerable });
  return o;
}, Ut = (o, y, O) => (O = o != null ? Dt(Ft(o)) : {}, Nt(
  !o || !o.__esModule ? wr(O, "default", { value: o, enumerable: !0 }) : O,
  o
)), Vt = Ve({
  "../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.production.min.js"(o) {
    var y = Symbol.for("react.element"), O = Symbol.for("react.portal"), D = Symbol.for("react.fragment"), A = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), K = Symbol.for("react.provider"), G = Symbol.for("react.context"), B = Symbol.for("react.forward_ref"), W = Symbol.for("react.suspense"), F = Symbol.for("react.memo"), P = Symbol.for("react.lazy"), H = Symbol.iterator;
    function M(t) {
      return t === null || typeof t != "object" ? null : (t = H && t[H] || t["@@iterator"], typeof t == "function" ? t : null);
    }
    var x = { isMounted: function() {
      return !1;
    }, enqueueForceUpdate: function() {
    }, enqueueReplaceState: function() {
    }, enqueueSetState: function() {
    } }, Q = Object.assign, X = {};
    function Y(t, u, d) {
      this.props = t, this.context = u, this.refs = X, this.updater = d || x;
    }
    Y.prototype.isReactComponent = {}, Y.prototype.setState = function(t, u) {
      if (typeof t != "object" && typeof t != "function" && t != null)
        throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
      this.updater.enqueueSetState(this, t, u, "setState");
    }, Y.prototype.forceUpdate = function(t) {
      this.updater.enqueueForceUpdate(this, t, "forceUpdate");
    };
    function oe() {
    }
    oe.prototype = Y.prototype;
    function re(t, u, d) {
      this.props = t, this.context = u, this.refs = X, this.updater = d || x;
    }
    var z = re.prototype = new oe();
    z.constructor = re, Q(z, Y.prototype), z.isPureReactComponent = !0;
    var T = Array.isArray, L = Object.prototype.hasOwnProperty, q = { current: null }, Z = { key: !0, ref: !0, __self: !0, __source: !0 };
    function ue(t, u, d) {
      var p, h = {}, C = null, E = null;
      if (u != null)
        for (p in u.ref !== void 0 && (E = u.ref), u.key !== void 0 && (C = "" + u.key), u)
          L.call(u, p) && !Z.hasOwnProperty(p) && (h[p] = u[p]);
      var R = arguments.length - 2;
      if (R === 1)
        h.children = d;
      else if (1 < R) {
        for (var _ = Array(R), I = 0; I < R; I++)
          _[I] = arguments[I + 2];
        h.children = _;
      }
      if (t && t.defaultProps)
        for (p in R = t.defaultProps, R)
          h[p] === void 0 && (h[p] = R[p]);
      return { $$typeof: y, type: t, key: C, ref: E, props: h, _owner: q.current };
    }
    function Oe(t, u) {
      return { $$typeof: y, type: t.type, key: u, ref: t.ref, props: t.props, _owner: t._owner };
    }
    function ie(t) {
      return typeof t == "object" && t !== null && t.$$typeof === y;
    }
    function Te(t) {
      var u = { "=": "=0", ":": "=2" };
      return "$" + t.replace(/[=:]/g, function(d) {
        return u[d];
      });
    }
    var ve = /\/+/g;
    function se(t, u) {
      return typeof t == "object" && t !== null && t.key != null ? Te("" + t.key) : u.toString(36);
    }
    function N(t, u, d, p, h) {
      var C = typeof t;
      (C === "undefined" || C === "boolean") && (t = null);
      var E = !1;
      if (t === null)
        E = !0;
      else
        switch (C) {
          case "string":
          case "number":
            E = !0;
            break;
          case "object":
            switch (t.$$typeof) {
              case y:
              case O:
                E = !0;
            }
        }
      if (E)
        return E = t, h = h(E), t = p === "" ? "." + se(E, 0) : p, T(h) ? (d = "", t != null && (d = t.replace(ve, "$&/") + "/"), N(h, u, d, "", function(I) {
          return I;
        })) : h != null && (ie(h) && (h = Oe(h, d + (!h.key || E && E.key === h.key ? "" : ("" + h.key).replace(ve, "$&/") + "/") + t)), u.push(h)), 1;
      if (E = 0, p = p === "" ? "." : p + ":", T(t))
        for (var R = 0; R < t.length; R++) {
          C = t[R];
          var _ = p + se(C, R);
          E += N(C, u, d, _, h);
        }
      else if (_ = M(t), typeof _ == "function")
        for (t = _.call(t), R = 0; !(C = t.next()).done; )
          C = C.value, _ = p + se(C, R++), E += N(C, u, d, _, h);
      else if (C === "object")
        throw u = String(t), Error("Objects are not valid as a React child (found: " + (u === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : u) + "). If you meant to render a collection of children, use an array instead.");
      return E;
    }
    function U(t, u, d) {
      if (t == null)
        return t;
      var p = [], h = 0;
      return N(t, p, "", "", function(C) {
        return u.call(d, C, h++);
      }), p;
    }
    function f(t) {
      if (t._status === -1) {
        var u = t._result;
        u = u(), u.then(function(d) {
          (t._status === 0 || t._status === -1) && (t._status = 1, t._result = d);
        }, function(d) {
          (t._status === 0 || t._status === -1) && (t._status = 2, t._result = d);
        }), t._status === -1 && (t._status = 0, t._result = u);
      }
      if (t._status === 1)
        return t._result.default;
      throw t._result;
    }
    var k = { current: null }, ee = { transition: null }, ce = { ReactCurrentDispatcher: k, ReactCurrentBatchConfig: ee, ReactCurrentOwner: q };
    o.Children = { map: U, forEach: function(t, u, d) {
      U(t, function() {
        u.apply(this, arguments);
      }, d);
    }, count: function(t) {
      var u = 0;
      return U(t, function() {
        u++;
      }), u;
    }, toArray: function(t) {
      return U(t, function(u) {
        return u;
      }) || [];
    }, only: function(t) {
      if (!ie(t))
        throw Error("React.Children.only expected to receive a single React element child.");
      return t;
    } }, o.Component = Y, o.Fragment = D, o.Profiler = V, o.PureComponent = re, o.StrictMode = A, o.Suspense = W, o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ce, o.cloneElement = function(t, u, d) {
      if (t == null)
        throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + t + ".");
      var p = Q({}, t.props), h = t.key, C = t.ref, E = t._owner;
      if (u != null) {
        if (u.ref !== void 0 && (C = u.ref, E = q.current), u.key !== void 0 && (h = "" + u.key), t.type && t.type.defaultProps)
          var R = t.type.defaultProps;
        for (_ in u)
          L.call(u, _) && !Z.hasOwnProperty(_) && (p[_] = u[_] === void 0 && R !== void 0 ? R[_] : u[_]);
      }
      var _ = arguments.length - 2;
      if (_ === 1)
        p.children = d;
      else if (1 < _) {
        R = Array(_);
        for (var I = 0; I < _; I++)
          R[I] = arguments[I + 2];
        p.children = R;
      }
      return { $$typeof: y, type: t.type, key: h, ref: C, props: p, _owner: E };
    }, o.createContext = function(t) {
      return t = { $$typeof: G, _currentValue: t, _currentValue2: t, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, t.Provider = { $$typeof: K, _context: t }, t.Consumer = t;
    }, o.createElement = ue, o.createFactory = function(t) {
      var u = ue.bind(null, t);
      return u.type = t, u;
    }, o.createRef = function() {
      return { current: null };
    }, o.forwardRef = function(t) {
      return { $$typeof: B, render: t };
    }, o.isValidElement = ie, o.lazy = function(t) {
      return { $$typeof: P, _payload: { _status: -1, _result: t }, _init: f };
    }, o.memo = function(t, u) {
      return { $$typeof: F, type: t, compare: u === void 0 ? null : u };
    }, o.startTransition = function(t) {
      var u = ee.transition;
      ee.transition = {};
      try {
        t();
      } finally {
        ee.transition = u;
      }
    }, o.unstable_act = function() {
      throw Error("act(...) is not supported in production builds of React.");
    }, o.useCallback = function(t, u) {
      return k.current.useCallback(t, u);
    }, o.useContext = function(t) {
      return k.current.useContext(t);
    }, o.useDebugValue = function() {
    }, o.useDeferredValue = function(t) {
      return k.current.useDeferredValue(t);
    }, o.useEffect = function(t, u) {
      return k.current.useEffect(t, u);
    }, o.useId = function() {
      return k.current.useId();
    }, o.useImperativeHandle = function(t, u, d) {
      return k.current.useImperativeHandle(t, u, d);
    }, o.useInsertionEffect = function(t, u) {
      return k.current.useInsertionEffect(t, u);
    }, o.useLayoutEffect = function(t, u) {
      return k.current.useLayoutEffect(t, u);
    }, o.useMemo = function(t, u) {
      return k.current.useMemo(t, u);
    }, o.useReducer = function(t, u, d) {
      return k.current.useReducer(t, u, d);
    }, o.useRef = function(t) {
      return k.current.useRef(t);
    }, o.useState = function(t) {
      return k.current.useState(t);
    }, o.useSyncExternalStore = function(t, u, d) {
      return k.current.useSyncExternalStore(t, u, d);
    }, o.useTransition = function() {
      return k.current.useTransition();
    }, o.version = "18.2.0";
  }
}), Wt = Ve({
  "../../../node_modules/.pnpm/react@18.2.0/node_modules/react/cjs/react.development.js"(o, y) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var O = "18.2.0", D = Symbol.for("react.element"), A = Symbol.for("react.portal"), V = Symbol.for("react.fragment"), K = Symbol.for("react.strict_mode"), G = Symbol.for("react.profiler"), B = Symbol.for("react.provider"), W = Symbol.for("react.context"), F = Symbol.for("react.forward_ref"), P = Symbol.for("react.suspense"), H = Symbol.for("react.suspense_list"), M = Symbol.for("react.memo"), x = Symbol.for("react.lazy"), Q = Symbol.for("react.offscreen"), X = Symbol.iterator, Y = "@@iterator";
      function oe(e) {
        if (e === null || typeof e != "object")
          return null;
        var r = X && e[X] || e[Y];
        return typeof r == "function" ? r : null;
      }
      var re = {
        current: null
      }, z = {
        transition: null
      }, T = {
        current: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, L = {
        current: null
      }, q = {}, Z = null;
      function ue(e) {
        Z = e;
      }
      q.setExtraStackFrame = function(e) {
        Z = e;
      }, q.getCurrentStack = null, q.getStackAddendum = function() {
        var e = "";
        Z && (e += Z);
        var r = q.getCurrentStack;
        return r && (e += r() || ""), e;
      };
      var Oe = !1, ie = !1, Te = !1, ve = !1, se = !1, N = {
        ReactCurrentDispatcher: re,
        ReactCurrentBatchConfig: z,
        ReactCurrentOwner: L
      };
      N.ReactDebugCurrentFrame = q, N.ReactCurrentActQueue = T;
      function U(e) {
        {
          for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
            n[a - 1] = arguments[a];
          k("warn", e, n);
        }
      }
      function f(e) {
        {
          for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
            n[a - 1] = arguments[a];
          k("error", e, n);
        }
      }
      function k(e, r, n) {
        {
          var a = N.ReactDebugCurrentFrame, i = a.getStackAddendum();
          i !== "" && (r += "%s", n = n.concat([i]));
          var c = n.map(function(s) {
            return String(s);
          });
          c.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, c);
        }
      }
      var ee = {};
      function ce(e, r) {
        {
          var n = e.constructor, a = n && (n.displayName || n.name) || "ReactClass", i = a + "." + r;
          if (ee[i])
            return;
          f("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", r, a), ee[i] = !0;
        }
      }
      var t = {
        isMounted: function(e) {
          return !1;
        },
        enqueueForceUpdate: function(e, r, n) {
          ce(e, "forceUpdate");
        },
        enqueueReplaceState: function(e, r, n, a) {
          ce(e, "replaceState");
        },
        enqueueSetState: function(e, r, n, a) {
          ce(e, "setState");
        }
      }, u = Object.assign, d = {};
      Object.freeze(d);
      function p(e, r, n) {
        this.props = e, this.context = r, this.refs = d, this.updater = n || t;
      }
      p.prototype.isReactComponent = {}, p.prototype.setState = function(e, r) {
        if (typeof e != "object" && typeof e != "function" && e != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, e, r, "setState");
      }, p.prototype.forceUpdate = function(e) {
        this.updater.enqueueForceUpdate(this, e, "forceUpdate");
      };
      {
        var h = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, C = function(e, r) {
          Object.defineProperty(p.prototype, e, {
            get: function() {
              U("%s(...) is deprecated in plain JavaScript React classes. %s", r[0], r[1]);
            }
          });
        };
        for (var E in h)
          h.hasOwnProperty(E) && C(E, h[E]);
      }
      function R() {
      }
      R.prototype = p.prototype;
      function _(e, r, n) {
        this.props = e, this.context = r, this.refs = d, this.updater = n || t;
      }
      var I = _.prototype = new R();
      I.constructor = _, u(I, p.prototype), I.isPureReactComponent = !0;
      function Sr() {
        var e = {
          current: null
        };
        return Object.seal(e), e;
      }
      var Or = Array.isArray;
      function pe(e) {
        return Or(e);
      }
      function Tr(e) {
        {
          var r = typeof Symbol == "function" && Symbol.toStringTag, n = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
          return n;
        }
      }
      function kr(e) {
        try {
          return We(e), !1;
        } catch {
          return !0;
        }
      }
      function We(e) {
        return "" + e;
      }
      function ye(e) {
        if (kr(e))
          return f("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Tr(e)), We(e);
      }
      function Pr(e, r, n) {
        var a = e.displayName;
        if (a)
          return a;
        var i = r.displayName || r.name || "";
        return i !== "" ? n + "(" + i + ")" : n;
      }
      function Ye(e) {
        return e.displayName || "Context";
      }
      function J(e) {
        if (e == null)
          return null;
        if (typeof e.tag == "number" && f("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
          return e.displayName || e.name || null;
        if (typeof e == "string")
          return e;
        switch (e) {
          case V:
            return "Fragment";
          case A:
            return "Portal";
          case G:
            return "Profiler";
          case K:
            return "StrictMode";
          case P:
            return "Suspense";
          case H:
            return "SuspenseList";
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case W:
              var r = e;
              return Ye(r) + ".Consumer";
            case B:
              var n = e;
              return Ye(n._context) + ".Provider";
            case F:
              return Pr(e, e.render, "ForwardRef");
            case M:
              var a = e.displayName || null;
              return a !== null ? a : J(e.type) || "Memo";
            case x: {
              var i = e, c = i._payload, s = i._init;
              try {
                return J(s(c));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var le = Object.prototype.hasOwnProperty, ze = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, Be, He, ke;
      ke = {};
      function xe(e) {
        if (le.call(e, "ref")) {
          var r = Object.getOwnPropertyDescriptor(e, "ref").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.ref !== void 0;
      }
      function qe(e) {
        if (le.call(e, "key")) {
          var r = Object.getOwnPropertyDescriptor(e, "key").get;
          if (r && r.isReactWarning)
            return !1;
        }
        return e.key !== void 0;
      }
      function jr(e, r) {
        var n = function() {
          Be || (Be = !0, f("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: n,
          configurable: !0
        });
      }
      function Ar(e, r) {
        var n = function() {
          He || (He = !0, f("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        n.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: n,
          configurable: !0
        });
      }
      function Ir(e) {
        if (typeof e.ref == "string" && L.current && e.__self && L.current.stateNode !== e.__self) {
          var r = J(L.current.type);
          ke[r] || (f('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', r, e.ref), ke[r] = !0);
        }
      }
      var Pe = function(e, r, n, a, i, c, s) {
        var l = {
          $$typeof: D,
          type: e,
          key: r,
          ref: n,
          props: s,
          _owner: c
        };
        return l._store = {}, Object.defineProperty(l._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(l, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: a
        }), Object.defineProperty(l, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: i
        }), Object.freeze && (Object.freeze(l.props), Object.freeze(l)), l;
      };
      function $r(e, r, n) {
        var a, i = {}, c = null, s = null, l = null, v = null;
        if (r != null) {
          xe(r) && (s = r.ref, Ir(r)), qe(r) && (ye(r.key), c = "" + r.key), l = r.__self === void 0 ? null : r.__self, v = r.__source === void 0 ? null : r.__source;
          for (a in r)
            le.call(r, a) && !ze.hasOwnProperty(a) && (i[a] = r[a]);
        }
        var m = arguments.length - 2;
        if (m === 1)
          i.children = n;
        else if (m > 1) {
          for (var g = Array(m), b = 0; b < m; b++)
            g[b] = arguments[b + 2];
          Object.freeze && Object.freeze(g), i.children = g;
        }
        if (e && e.defaultProps) {
          var w = e.defaultProps;
          for (a in w)
            i[a] === void 0 && (i[a] = w[a]);
        }
        if (c || s) {
          var S = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          c && jr(i, S), s && Ar(i, S);
        }
        return Pe(e, c, s, l, v, L.current, i);
      }
      function Dr(e, r) {
        var n = Pe(e.type, r, e.ref, e._self, e._source, e._owner, e.props);
        return n;
      }
      function Lr(e, r, n) {
        if (e == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
        var a, i = u({}, e.props), c = e.key, s = e.ref, l = e._self, v = e._source, m = e._owner;
        if (r != null) {
          xe(r) && (s = r.ref, m = L.current), qe(r) && (ye(r.key), c = "" + r.key);
          var g;
          e.type && e.type.defaultProps && (g = e.type.defaultProps);
          for (a in r)
            le.call(r, a) && !ze.hasOwnProperty(a) && (r[a] === void 0 && g !== void 0 ? i[a] = g[a] : i[a] = r[a]);
        }
        var b = arguments.length - 2;
        if (b === 1)
          i.children = n;
        else if (b > 1) {
          for (var w = Array(b), S = 0; S < b; S++)
            w[S] = arguments[S + 2];
          i.children = w;
        }
        return Pe(e.type, c, s, l, v, m, i);
      }
      function te(e) {
        return typeof e == "object" && e !== null && e.$$typeof === D;
      }
      var Ke = ".", Fr = ":";
      function Mr(e) {
        var r = /[=:]/g, n = {
          "=": "=0",
          ":": "=2"
        }, a = e.replace(r, function(i) {
          return n[i];
        });
        return "$" + a;
      }
      var Ge = !1, Nr = /\/+/g;
      function Je(e) {
        return e.replace(Nr, "$&/");
      }
      function je(e, r) {
        return typeof e == "object" && e !== null && e.key != null ? (ye(e.key), Mr("" + e.key)) : r.toString(36);
      }
      function he(e, r, n, a, i) {
        var c = typeof e;
        (c === "undefined" || c === "boolean") && (e = null);
        var s = !1;
        if (e === null)
          s = !0;
        else
          switch (c) {
            case "string":
            case "number":
              s = !0;
              break;
            case "object":
              switch (e.$$typeof) {
                case D:
                case A:
                  s = !0;
              }
          }
        if (s) {
          var l = e, v = i(l), m = a === "" ? Ke + je(l, 0) : a;
          if (pe(v)) {
            var g = "";
            m != null && (g = Je(m) + "/"), he(v, r, g, "", function(At) {
              return At;
            });
          } else v != null && (te(v) && (v.key && (!l || l.key !== v.key) && ye(v.key), v = Dr(
            v,
            n + (v.key && (!l || l.key !== v.key) ? Je("" + v.key) + "/" : "") + m
          )), r.push(v));
          return 1;
        }
        var b, w, S = 0, j = a === "" ? Ke : a + Fr;
        if (pe(e))
          for (var Ce = 0; Ce < e.length; Ce++)
            b = e[Ce], w = j + je(b, Ce), S += he(b, r, n, w, i);
        else {
          var Ue = oe(e);
          if (typeof Ue == "function") {
            var br = e;
            Ue === br.entries && (Ge || U("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ge = !0);
            for (var Pt = Ue.call(br), Er, jt = 0; !(Er = Pt.next()).done; )
              b = Er.value, w = j + je(b, jt++), S += he(b, r, n, w, i);
          } else if (c === "object") {
            var Rr = String(e);
            throw new Error("Objects are not valid as a React child (found: " + (Rr === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : Rr) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return S;
      }
      function me(e, r, n) {
        if (e == null)
          return e;
        var a = [], i = 0;
        return he(e, a, "", "", function(c) {
          return r.call(n, c, i++);
        }), a;
      }
      function Ur(e) {
        var r = 0;
        return me(e, function() {
          r++;
        }), r;
      }
      function Vr(e, r, n) {
        me(e, function() {
          r.apply(this, arguments);
        }, n);
      }
      function Wr(e) {
        return me(e, function(r) {
          return r;
        }) || [];
      }
      function Yr(e) {
        if (!te(e))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return e;
      }
      function zr(e) {
        var r = {
          $$typeof: W,
          _currentValue: e,
          _currentValue2: e,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        };
        r.Provider = {
          $$typeof: B,
          _context: r
        };
        var n = !1, a = !1, i = !1;
        {
          var c = {
            $$typeof: W,
            _context: r
          };
          Object.defineProperties(c, {
            Provider: {
              get: function() {
                return a || (a = !0, f("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), r.Provider;
              },
              set: function(s) {
                r.Provider = s;
              }
            },
            _currentValue: {
              get: function() {
                return r._currentValue;
              },
              set: function(s) {
                r._currentValue = s;
              }
            },
            _currentValue2: {
              get: function() {
                return r._currentValue2;
              },
              set: function(s) {
                r._currentValue2 = s;
              }
            },
            _threadCount: {
              get: function() {
                return r._threadCount;
              },
              set: function(s) {
                r._threadCount = s;
              }
            },
            Consumer: {
              get: function() {
                return n || (n = !0, f("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), r.Consumer;
              }
            },
            displayName: {
              get: function() {
                return r.displayName;
              },
              set: function(s) {
                i || (U("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", s), i = !0);
              }
            }
          }), r.Consumer = c;
        }
        return r._currentRenderer = null, r._currentRenderer2 = null, r;
      }
      var fe = -1, Ae = 0, Qe = 1, Br = 2;
      function Hr(e) {
        if (e._status === fe) {
          var r = e._result, n = r();
          if (n.then(function(c) {
            if (e._status === Ae || e._status === fe) {
              var s = e;
              s._status = Qe, s._result = c;
            }
          }, function(c) {
            if (e._status === Ae || e._status === fe) {
              var s = e;
              s._status = Br, s._result = c;
            }
          }), e._status === fe) {
            var a = e;
            a._status = Ae, a._result = n;
          }
        }
        if (e._status === Qe) {
          var i = e._result;
          return i === void 0 && f(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, i), "default" in i || f(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, i), i.default;
        } else
          throw e._result;
      }
      function xr(e) {
        var r = {
          _status: fe,
          _result: e
        }, n = {
          $$typeof: x,
          _payload: r,
          _init: Hr
        };
        {
          var a, i;
          Object.defineProperties(n, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return a;
              },
              set: function(c) {
                f("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), a = c, Object.defineProperty(n, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return i;
              },
              set: function(c) {
                f("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), i = c, Object.defineProperty(n, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return n;
      }
      function qr(e) {
        e != null && e.$$typeof === M ? f("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof e != "function" ? f("forwardRef requires a render function but was given %s.", e === null ? "null" : typeof e) : e.length !== 0 && e.length !== 2 && f("forwardRef render functions accept exactly two parameters: props and ref. %s", e.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), e != null && (e.defaultProps != null || e.propTypes != null) && f("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var r = {
          $$typeof: F,
          render: e
        };
        {
          var n;
          Object.defineProperty(r, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return n;
            },
            set: function(a) {
              n = a, !e.name && !e.displayName && (e.displayName = a);
            }
          });
        }
        return r;
      }
      var Xe;
      Xe = Symbol.for("react.module.reference");
      function Ze(e) {
        return !!(typeof e == "string" || typeof e == "function" || e === V || e === G || se || e === K || e === P || e === H || ve || e === Q || Oe || ie || Te || typeof e == "object" && e !== null && (e.$$typeof === x || e.$$typeof === M || e.$$typeof === B || e.$$typeof === W || e.$$typeof === F || e.$$typeof === Xe || e.getModuleId !== void 0));
      }
      function Kr(e, r) {
        Ze(e) || f("memo: The first argument must be a component. Instead received: %s", e === null ? "null" : typeof e);
        var n = {
          $$typeof: M,
          type: e,
          compare: r === void 0 ? null : r
        };
        {
          var a;
          Object.defineProperty(n, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return a;
            },
            set: function(i) {
              a = i, !e.name && !e.displayName && (e.displayName = i);
            }
          });
        }
        return n;
      }
      function $() {
        var e = re.current;
        return e === null && f(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), e;
      }
      function Gr(e) {
        var r = $();
        if (e._context !== void 0) {
          var n = e._context;
          n.Consumer === e ? f("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : n.Provider === e && f("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return r.useContext(e);
      }
      function Jr(e) {
        var r = $();
        return r.useState(e);
      }
      function Qr(e, r, n) {
        var a = $();
        return a.useReducer(e, r, n);
      }
      function Xr(e) {
        var r = $();
        return r.useRef(e);
      }
      function Zr(e, r) {
        var n = $();
        return n.useEffect(e, r);
      }
      function et(e, r) {
        var n = $();
        return n.useInsertionEffect(e, r);
      }
      function rt(e, r) {
        var n = $();
        return n.useLayoutEffect(e, r);
      }
      function tt(e, r) {
        var n = $();
        return n.useCallback(e, r);
      }
      function nt(e, r) {
        var n = $();
        return n.useMemo(e, r);
      }
      function at(e, r, n) {
        var a = $();
        return a.useImperativeHandle(e, r, n);
      }
      function ot(e, r) {
        {
          var n = $();
          return n.useDebugValue(e, r);
        }
      }
      function ut() {
        var e = $();
        return e.useTransition();
      }
      function it(e) {
        var r = $();
        return r.useDeferredValue(e);
      }
      function st() {
        var e = $();
        return e.useId();
      }
      function ct(e, r, n) {
        var a = $();
        return a.useSyncExternalStore(e, r, n);
      }
      var de = 0, er, rr, tr, nr, ar, or, ur;
      function ir() {
      }
      ir.__reactDisabledLog = !0;
      function lt() {
        {
          if (de === 0) {
            er = console.log, rr = console.info, tr = console.warn, nr = console.error, ar = console.group, or = console.groupCollapsed, ur = console.groupEnd;
            var e = {
              configurable: !0,
              enumerable: !0,
              value: ir,
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
          de++;
        }
      }
      function ft() {
        {
          if (de--, de === 0) {
            var e = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: u({}, e, {
                value: er
              }),
              info: u({}, e, {
                value: rr
              }),
              warn: u({}, e, {
                value: tr
              }),
              error: u({}, e, {
                value: nr
              }),
              group: u({}, e, {
                value: ar
              }),
              groupCollapsed: u({}, e, {
                value: or
              }),
              groupEnd: u({}, e, {
                value: ur
              })
            });
          }
          de < 0 && f("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var Ie = N.ReactCurrentDispatcher, $e;
      function _e(e, r, n) {
        {
          if ($e === void 0)
            try {
              throw Error();
            } catch (i) {
              var a = i.stack.trim().match(/\n( *(at )?)/);
              $e = a && a[1] || "";
            }
          return `
` + $e + e;
        }
      }
      var De = !1, ge;
      {
        var dt = typeof WeakMap == "function" ? WeakMap : Map;
        ge = new dt();
      }
      function sr(e, r) {
        if (!e || De)
          return "";
        {
          var n = ge.get(e);
          if (n !== void 0)
            return n;
        }
        var a;
        De = !0;
        var i = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var c;
        c = Ie.current, Ie.current = null, lt();
        try {
          if (r) {
            var s = function() {
              throw Error();
            };
            if (Object.defineProperty(s.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(s, []);
              } catch (j) {
                a = j;
              }
              Reflect.construct(e, [], s);
            } else {
              try {
                s.call();
              } catch (j) {
                a = j;
              }
              e.call(s.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (j) {
              a = j;
            }
            e();
          }
        } catch (j) {
          if (j && a && typeof j.stack == "string") {
            for (var l = j.stack.split(`
`), v = a.stack.split(`
`), m = l.length - 1, g = v.length - 1; m >= 1 && g >= 0 && l[m] !== v[g]; )
              g--;
            for (; m >= 1 && g >= 0; m--, g--)
              if (l[m] !== v[g]) {
                if (m !== 1 || g !== 1)
                  do
                    if (m--, g--, g < 0 || l[m] !== v[g]) {
                      var b = `
` + l[m].replace(" at new ", " at ");
                      return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && ge.set(e, b), b;
                    }
                  while (m >= 1 && g >= 0);
                break;
              }
          }
        } finally {
          De = !1, Ie.current = c, ft(), Error.prepareStackTrace = i;
        }
        var w = e ? e.displayName || e.name : "", S = w ? _e(w) : "";
        return typeof e == "function" && ge.set(e, S), S;
      }
      function vt(e, r, n) {
        return sr(e, !1);
      }
      function pt(e) {
        var r = e.prototype;
        return !!(r && r.isReactComponent);
      }
      function be(e, r, n) {
        if (e == null)
          return "";
        if (typeof e == "function")
          return sr(e, pt(e));
        if (typeof e == "string")
          return _e(e);
        switch (e) {
          case P:
            return _e("Suspense");
          case H:
            return _e("SuspenseList");
        }
        if (typeof e == "object")
          switch (e.$$typeof) {
            case F:
              return vt(e.render);
            case M:
              return be(e.type, r, n);
            case x: {
              var a = e, i = a._payload, c = a._init;
              try {
                return be(c(i), r, n);
              } catch {
              }
            }
          }
        return "";
      }
      var cr = {}, lr = N.ReactDebugCurrentFrame;
      function Ee(e) {
        if (e) {
          var r = e._owner, n = be(e.type, e._source, r ? r.type : null);
          lr.setExtraStackFrame(n);
        } else
          lr.setExtraStackFrame(null);
      }
      function yt(e, r, n, a, i) {
        {
          var c = Function.call.bind(le);
          for (var s in e)
            if (c(e, s)) {
              var l = void 0;
              try {
                if (typeof e[s] != "function") {
                  var v = Error((a || "React class") + ": " + n + " type `" + s + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[s] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw v.name = "Invariant Violation", v;
                }
                l = e[s](r, s, a, n, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (m) {
                l = m;
              }
              l && !(l instanceof Error) && (Ee(i), f("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", n, s, typeof l), Ee(null)), l instanceof Error && !(l.message in cr) && (cr[l.message] = !0, Ee(i), f("Failed %s type: %s", n, l.message), Ee(null));
            }
        }
      }
      function ne(e) {
        if (e) {
          var r = e._owner, n = be(e.type, e._source, r ? r.type : null);
          ue(n);
        } else
          ue(null);
      }
      var Le;
      Le = !1;
      function fr() {
        if (L.current) {
          var e = J(L.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
      function ht(e) {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), n = e.lineNumber;
          return `

Check your code at ` + r + ":" + n + ".";
        }
        return "";
      }
      function mt(e) {
        return e != null ? ht(e.__source) : "";
      }
      var dr = {};
      function _t(e) {
        var r = fr();
        if (!r) {
          var n = typeof e == "string" ? e : e.displayName || e.name;
          n && (r = `

Check the top-level render call using <` + n + ">.");
        }
        return r;
      }
      function vr(e, r) {
        if (!(!e._store || e._store.validated || e.key != null)) {
          e._store.validated = !0;
          var n = _t(r);
          if (!dr[n]) {
            dr[n] = !0;
            var a = "";
            e && e._owner && e._owner !== L.current && (a = " It was passed a child from " + J(e._owner.type) + "."), ne(e), f('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', n, a), ne(null);
          }
        }
      }
      function pr(e, r) {
        if (typeof e == "object") {
          if (pe(e))
            for (var n = 0; n < e.length; n++) {
              var a = e[n];
              te(a) && vr(a, r);
            }
          else if (te(e))
            e._store && (e._store.validated = !0);
          else if (e) {
            var i = oe(e);
            if (typeof i == "function" && i !== e.entries)
              for (var c = i.call(e), s; !(s = c.next()).done; )
                te(s.value) && vr(s.value, r);
          }
        }
      }
      function yr(e) {
        {
          var r = e.type;
          if (r == null || typeof r == "string")
            return;
          var n;
          if (typeof r == "function")
            n = r.propTypes;
          else if (typeof r == "object" && (r.$$typeof === F || r.$$typeof === M))
            n = r.propTypes;
          else
            return;
          if (n) {
            var a = J(r);
            yt(n, e.props, "prop", a, e);
          } else if (r.PropTypes !== void 0 && !Le) {
            Le = !0;
            var i = J(r);
            f("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
          }
          typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && f("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function gt(e) {
        {
          for (var r = Object.keys(e.props), n = 0; n < r.length; n++) {
            var a = r[n];
            if (a !== "children" && a !== "key") {
              ne(e), f("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), ne(null);
              break;
            }
          }
          e.ref !== null && (ne(e), f("Invalid attribute `ref` supplied to `React.Fragment`."), ne(null));
        }
      }
      function hr(e, r, n) {
        var a = Ze(e);
        if (!a) {
          var i = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (i += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var c = mt(r);
          c ? i += c : i += fr();
          var s;
          e === null ? s = "null" : pe(e) ? s = "array" : e !== void 0 && e.$$typeof === D ? (s = "<" + (J(e.type) || "Unknown") + " />", i = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, f("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, i);
        }
        var l = $r.apply(this, arguments);
        if (l == null)
          return l;
        if (a)
          for (var v = 2; v < arguments.length; v++)
            pr(arguments[v], e);
        return e === V ? gt(l) : yr(l), l;
      }
      var mr = !1;
      function bt(e) {
        var r = hr.bind(null, e);
        return r.type = e, mr || (mr = !0, U("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(r, "type", {
          enumerable: !1,
          get: function() {
            return U("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: e
            }), e;
          }
        }), r;
      }
      function Et(e, r, n) {
        for (var a = Lr.apply(this, arguments), i = 2; i < arguments.length; i++)
          pr(arguments[i], a.type);
        return yr(a), a;
      }
      function Rt(e, r) {
        var n = z.transition;
        z.transition = {};
        var a = z.transition;
        z.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          e();
        } finally {
          if (z.transition = n, n === null && a._updatedFibers) {
            var i = a._updatedFibers.size;
            i > 10 && U("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), a._updatedFibers.clear();
          }
        }
      }
      var _r = !1, Re = null;
      function wt(e) {
        if (Re === null)
          try {
            var r = ("require" + Math.random()).slice(0, 7), n = y && y[r];
            Re = n.call(y, "timers").setImmediate;
          } catch {
            Re = function(i) {
              _r === !1 && (_r = !0, typeof MessageChannel > "u" && f("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var c = new MessageChannel();
              c.port1.onmessage = i, c.port2.postMessage(void 0);
            };
          }
        return Re(e);
      }
      var ae = 0, gr = !1;
      function Ct(e) {
        {
          var r = ae;
          ae++, T.current === null && (T.current = []);
          var n = T.isBatchingLegacy, a;
          try {
            if (T.isBatchingLegacy = !0, a = e(), !n && T.didScheduleLegacyUpdate) {
              var i = T.current;
              i !== null && (T.didScheduleLegacyUpdate = !1, Ne(i));
            }
          } catch (w) {
            throw we(r), w;
          } finally {
            T.isBatchingLegacy = n;
          }
          if (a !== null && typeof a == "object" && typeof a.then == "function") {
            var c = a, s = !1, l = {
              then: function(w, S) {
                s = !0, c.then(function(j) {
                  we(r), ae === 0 ? Fe(j, w, S) : w(j);
                }, function(j) {
                  we(r), S(j);
                });
              }
            };
            return !gr && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              s || (gr = !0, f("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), l;
          } else {
            var v = a;
            if (we(r), ae === 0) {
              var m = T.current;
              m !== null && (Ne(m), T.current = null);
              var g = {
                then: function(w, S) {
                  T.current === null ? (T.current = [], Fe(v, w, S)) : w(v);
                }
              };
              return g;
            } else {
              var b = {
                then: function(w, S) {
                  w(v);
                }
              };
              return b;
            }
          }
        }
      }
      function we(e) {
        e !== ae - 1 && f("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ae = e;
      }
      function Fe(e, r, n) {
        {
          var a = T.current;
          if (a !== null)
            try {
              Ne(a), wt(function() {
                a.length === 0 ? (T.current = null, r(e)) : Fe(e, r, n);
              });
            } catch (i) {
              n(i);
            }
          else
            r(e);
        }
      }
      var Me = !1;
      function Ne(e) {
        if (!Me) {
          Me = !0;
          var r = 0;
          try {
            for (; r < e.length; r++) {
              var n = e[r];
              do
                n = n(!0);
              while (n !== null);
            }
            e.length = 0;
          } catch (a) {
            throw e = e.slice(r + 1), a;
          } finally {
            Me = !1;
          }
        }
      }
      var St = hr, Ot = Et, Tt = bt, kt = {
        map: me,
        forEach: Vr,
        count: Ur,
        toArray: Wr,
        only: Yr
      };
      o.Children = kt, o.Component = p, o.Fragment = V, o.Profiler = G, o.PureComponent = _, o.StrictMode = K, o.Suspense = P, o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = N, o.cloneElement = Ot, o.createContext = zr, o.createElement = St, o.createFactory = Tt, o.createRef = Sr, o.forwardRef = qr, o.isValidElement = te, o.lazy = xr, o.memo = Kr, o.startTransition = Rt, o.unstable_act = Ct, o.useCallback = tt, o.useContext = Gr, o.useDebugValue = ot, o.useDeferredValue = it, o.useEffect = Zr, o.useId = st, o.useImperativeHandle = at, o.useInsertionEffect = et, o.useLayoutEffect = rt, o.useMemo = nt, o.useReducer = Qr, o.useRef = Xr, o.useState = Jr, o.useSyncExternalStore = ct, o.useTransition = ut, o.version = O, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }
}), Yt = Ve({
  "../../../node_modules/.pnpm/react@18.2.0/node_modules/react/index.js"(o, y) {
    process.env.NODE_ENV === "production" ? y.exports = Vt() : y.exports = Wt();
  }
});
Ut(Yt());
function zt(o, y = 0) {
  let O;
  return function(...D) {
    const A = () => {
      O = void 0, o.apply(this, D);
    };
    O !== void 0 && clearTimeout(O), O = setTimeout(A, y);
  };
}
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
const Ht = (o = {}) => {
  const {
    hasMore: y = !0,
    distance: O = 250,
    isEnabled: D = !0,
    shouldUseLoader: A = !0,
    onLoadMore: V
  } = o, K = Se(null), G = Se(null), B = Se(null), W = Se(!1), F = It(() => {
    let P;
    return !W.current && y && V && (W.current = !0, V(), P = setTimeout(() => {
      W.current = !1;
    }, 100)), () => clearTimeout(P);
  }, [y, V]);
  return $t(() => {
    const P = K.current;
    if (!D || !P || !y)
      return;
    if (A) {
      const M = G.current;
      if (!M)
        return;
      const x = {
        root: P,
        rootMargin: `0px 0px ${O}px 0px`,
        threshold: 0.1
      }, Q = new IntersectionObserver((X) => {
        const [Y] = X;
        Y.isIntersecting && F();
      }, x);
      return Q.observe(M), B.current = Q, () => {
        B.current && B.current.disconnect();
      };
    }
    const H = zt(() => {
      P.scrollHeight - P.scrollTop <= P.clientHeight + O && F();
    }, 100);
    return P.addEventListener("scroll", H), () => {
      P.removeEventListener(
        "scroll",
        H
      );
    };
  }, [y, O, D, A, F]), [G, K];
};
export {
  Ht as u
};
