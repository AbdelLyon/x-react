var Ft = (e) => {
  throw TypeError(e);
};
var vt = (e, t, s) => t.has(e) || Ft("Cannot " + s);
var i = (e, t, s) => (vt(e, t, "read from private field"), s ? s.call(e) : t.get(e)), l = (e, t, s) => t.has(e) ? Ft("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, s), o = (e, t, s, r) => (vt(e, t, "write to private field"), r ? r.call(e, s) : t.set(e, s), s), P = (e, t, s) => (vt(e, t, "access private method"), s);
var lt = (e, t, s, r) => ({
  set _(n) {
    o(e, t, n, s);
  },
  get _() {
    return i(e, t, r);
  }
});
import * as Ot from "react";
import { j as $t } from "./jsx-runtime-Dx-03ztt.js";
var pt = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, mt = typeof window > "u" || "Deno" in globalThis;
function R() {
}
function Vt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Jt(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function Wt(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Ct(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Xt(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Et(e, t) {
  const {
    type: s = "all",
    exact: r,
    fetchStatus: n,
    predicate: u,
    queryKey: h,
    stale: a
  } = e;
  if (h) {
    if (r) {
      if (t.queryHash !== St(h, t.options))
        return !1;
    } else if (!ut(t.queryKey, h))
      return !1;
  }
  if (s !== "all") {
    const f = t.isActive();
    if (s === "active" && !f || s === "inactive" && f)
      return !1;
  }
  return !(typeof a == "boolean" && t.isStale() !== a || n && n !== t.state.fetchStatus || u && !u(t));
}
function qt(e, t) {
  const { exact: s, status: r, predicate: n, mutationKey: u } = e;
  if (u) {
    if (!t.options.mutationKey)
      return !1;
    if (s) {
      if (at(t.options.mutationKey) !== at(u))
        return !1;
    } else if (!ut(t.options.mutationKey, u))
      return !1;
  }
  return !(r && t.state.status !== r || n && !n(t));
}
function St(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || at)(e);
}
function at(e) {
  return JSON.stringify(
    e,
    (t, s) => wt(s) ? Object.keys(s).sort().reduce((r, n) => (r[n] = s[n], r), {}) : s
  );
}
function ut(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((s) => !ut(e[s], t[s])) : !1;
}
function bt(e, t) {
  if (e === t)
    return e;
  const s = Dt(e) && Dt(t);
  if (s || wt(e) && wt(t)) {
    const r = s ? e : Object.keys(e), n = r.length, u = s ? t : Object.keys(t), h = u.length, a = s ? [] : {};
    let f = 0;
    for (let w = 0; w < h; w++) {
      const m = s ? w : u[w];
      (!s && r.includes(m) || s) && e[m] === void 0 && t[m] === void 0 ? (a[m] = void 0, f++) : (a[m] = bt(e[m], t[m]), a[m] === e[m] && e[m] !== void 0 && f++);
    }
    return n === h && f === n ? e : a;
  }
  return t;
}
function me(e, t) {
  if (!t || Object.keys(e).length !== Object.keys(t).length)
    return !1;
  for (const s in e)
    if (e[s] !== t[s])
      return !1;
  return !0;
}
function Dt(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function wt(e) {
  if (!At(e))
    return !1;
  const t = e.constructor;
  if (t === void 0)
    return !0;
  const s = t.prototype;
  return !(!At(s) || !s.hasOwnProperty("isPrototypeOf") || Object.getPrototypeOf(e) !== Object.prototype);
}
function At(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function Yt(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Zt(e, t, s) {
  if (typeof s.structuralSharing == "function")
    return s.structuralSharing(e, t);
  if (s.structuralSharing !== !1) {
    if (process.env.NODE_ENV !== "production")
      try {
        return bt(e, t);
      } catch (r) {
        console.error(
          `Structural sharing requires data to be JSON serializable. To fix this, turn off structuralSharing or return JSON-serializable data from your queryFn. [${s.queryHash}]: ${r}`
        );
      }
    return bt(e, t);
  }
  return t;
}
function ve(e) {
  return e;
}
function te(e, t, s = 0) {
  const r = [...e, t];
  return s && r.length > s ? r.slice(1) : r;
}
function ee(e, t, s = 0) {
  const r = [t, ...e];
  return s && r.length > s ? r.slice(0, -1) : r;
}
var ft = Symbol();
function It(e, t) {
  return process.env.NODE_ENV !== "production" && e.queryFn === ft && console.error(
    `Attempted to invoke queryFn when set to skipToken. This is likely a configuration error. Query hash: '${e.queryHash}'`
  ), !e.queryFn && (t != null && t.initialPromise) ? () => t.initialPromise : !e.queryFn || e.queryFn === ft ? () => Promise.reject(new Error(`Missing queryFn: '${e.queryHash}'`)) : e.queryFn;
}
var $, H, X, Mt, se = (Mt = class extends pt {
  constructor() {
    super();
    l(this, $);
    l(this, H);
    l(this, X);
    o(this, X, (t) => {
      if (!mt && window.addEventListener) {
        const s = () => t();
        return window.addEventListener("visibilitychange", s, !1), () => {
          window.removeEventListener("visibilitychange", s);
        };
      }
    });
  }
  onSubscribe() {
    i(this, H) || this.setEventListener(i(this, X));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = i(this, H)) == null || t.call(this), o(this, H, void 0));
  }
  setEventListener(t) {
    var s;
    o(this, X, t), (s = i(this, H)) == null || s.call(this), o(this, H, t((r) => {
      typeof r == "boolean" ? this.setFocused(r) : this.onFocus();
    }));
  }
  setFocused(t) {
    i(this, $) !== t && (o(this, $, t), this.onFocus());
  }
  onFocus() {
    const t = this.isFocused();
    this.listeners.forEach((s) => {
      s(t);
    });
  }
  isFocused() {
    var t;
    return typeof i(this, $) == "boolean" ? i(this, $) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, $ = new WeakMap(), H = new WeakMap(), X = new WeakMap(), Mt), Nt = new se(), Y, L, Z, Rt, re = (Rt = class extends pt {
  constructor() {
    super();
    l(this, Y, !0);
    l(this, L);
    l(this, Z);
    o(this, Z, (t) => {
      if (!mt && window.addEventListener) {
        const s = () => t(!0), r = () => t(!1);
        return window.addEventListener("online", s, !1), window.addEventListener("offline", r, !1), () => {
          window.removeEventListener("online", s), window.removeEventListener("offline", r);
        };
      }
    });
  }
  onSubscribe() {
    i(this, L) || this.setEventListener(i(this, Z));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = i(this, L)) == null || t.call(this), o(this, L, void 0));
  }
  setEventListener(t) {
    var s;
    o(this, Z, t), (s = i(this, L)) == null || s.call(this), o(this, L, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    i(this, Y) !== t && (o(this, Y, t), this.listeners.forEach((r) => {
      r(t);
    }));
  }
  isOnline() {
    return i(this, Y);
  }
}, Y = new WeakMap(), L = new WeakMap(), Z = new WeakMap(), Rt), yt = new re();
function ie() {
  let e, t;
  const s = new Promise((n, u) => {
    e = n, t = u;
  });
  s.status = "pending", s.catch(() => {
  });
  function r(n) {
    Object.assign(s, n), delete s.resolve, delete s.reject;
  }
  return s.resolve = (n) => {
    r({
      status: "fulfilled",
      value: n
    }), e(n);
  }, s.reject = (n) => {
    r({
      status: "rejected",
      reason: n
    }), t(n);
  }, s;
}
function ne(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Ht(e) {
  return (e ?? "online") === "online" ? yt.isOnline() : !0;
}
var Lt = class extends Error {
  constructor(e) {
    super("CancelledError"), this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function gt(e) {
  return e instanceof Lt;
}
function Gt(e) {
  let t = !1, s = 0, r = !1, n;
  const u = ie(), h = (c) => {
    var p;
    r || (y(new Lt(c)), (p = e.abort) == null || p.call(e));
  }, a = () => {
    t = !0;
  }, f = () => {
    t = !1;
  }, w = () => Nt.isFocused() && (e.networkMode === "always" || yt.isOnline()) && e.canRun(), m = () => Ht(e.networkMode) && e.canRun(), d = (c) => {
    var p;
    r || (r = !0, (p = e.onSuccess) == null || p.call(e, c), n == null || n(), u.resolve(c));
  }, y = (c) => {
    var p;
    r || (r = !0, (p = e.onError) == null || p.call(e, c), n == null || n(), u.reject(c));
  }, E = () => new Promise((c) => {
    var p;
    n = (q) => {
      (r || w()) && c(q);
    }, (p = e.onPause) == null || p.call(e);
  }).then(() => {
    var c;
    n = void 0, r || (c = e.onContinue) == null || c.call(e);
  }), S = () => {
    if (r)
      return;
    let c;
    const p = s === 0 ? e.initialPromise : void 0;
    try {
      c = p ?? e.fn();
    } catch (q) {
      c = Promise.reject(q);
    }
    Promise.resolve(c).then(d).catch((q) => {
      var k;
      if (r)
        return;
      const M = e.retry ?? (mt ? 0 : 3), g = e.retryDelay ?? ne, D = typeof g == "function" ? g(s, q) : g, T = M === !0 || typeof M == "number" && s < M || typeof M == "function" && M(s, q);
      if (t || !T) {
        y(q);
        return;
      }
      s++, (k = e.onFail) == null || k.call(e, s, q), Yt(D).then(() => w() ? void 0 : E()).then(() => {
        t ? y(q) : S();
      });
    });
  };
  return {
    promise: u,
    cancel: h,
    continue: () => (n == null || n(), u),
    cancelRetry: a,
    continueRetry: f,
    canStart: m,
    start: () => (m() ? S() : E().then(S), u)
  };
}
function ae() {
  let e = [], t = 0, s = (a) => {
    a();
  }, r = (a) => {
    a();
  }, n = (a) => setTimeout(a, 0);
  const u = (a) => {
    t ? e.push(a) : n(() => {
      s(a);
    });
  }, h = () => {
    const a = e;
    e = [], a.length && n(() => {
      r(() => {
        a.forEach((f) => {
          s(f);
        });
      });
    });
  };
  return {
    batch: (a) => {
      let f;
      t++;
      try {
        f = a();
      } finally {
        t--, t || h();
      }
      return f;
    },
    /**
     * All calls to the wrapped function will be batched.
     */
    batchCalls: (a) => (...f) => {
      u(() => {
        a(...f);
      });
    },
    schedule: u,
    /**
     * Use this method to set a custom notify function.
     * This can be used to for example wrap notifications with `React.act` while running tests.
     */
    setNotifyFunction: (a) => {
      s = a;
    },
    /**
     * Use this method to set a custom function to batch notifications together into a single tick.
     * By default React Query will use the batch function provided by ReactDOM or React Native.
     */
    setBatchNotifyFunction: (a) => {
      r = a;
    },
    setScheduler: (a) => {
      n = a;
    }
  };
}
var C = ae(), V, jt, _t = (jt = class {
  constructor() {
    l(this, V);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Jt(this.gcTime) && o(this, V, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (mt ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    i(this, V) && (clearTimeout(i(this, V)), o(this, V, void 0));
  }
}, V = new WeakMap(), jt), tt, et, Q, O, ot, J, j, I, Tt, ue = (Tt = class extends _t {
  constructor(t) {
    super();
    l(this, j);
    l(this, tt);
    l(this, et);
    l(this, Q);
    l(this, O);
    l(this, ot);
    l(this, J);
    o(this, J, !1), o(this, ot, t.defaultOptions), this.setOptions(t.options), this.observers = [], o(this, Q, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, o(this, tt, he(this.options)), this.state = t.state ?? i(this, tt), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  get promise() {
    var t;
    return (t = i(this, O)) == null ? void 0 : t.promise;
  }
  setOptions(t) {
    this.options = { ...i(this, ot), ...t }, this.updateGcTime(this.options.gcTime);
  }
  optionalRemove() {
    !this.observers.length && this.state.fetchStatus === "idle" && i(this, Q).remove(this);
  }
  setData(t, s) {
    const r = Zt(this.state.data, t, this.options);
    return P(this, j, I).call(this, {
      data: r,
      type: "success",
      dataUpdatedAt: s == null ? void 0 : s.updatedAt,
      manual: s == null ? void 0 : s.manual
    }), r;
  }
  setState(t, s) {
    P(this, j, I).call(this, { type: "setState", state: t, setStateOptions: s });
  }
  cancel(t) {
    var r, n;
    const s = (r = i(this, O)) == null ? void 0 : r.promise;
    return (n = i(this, O)) == null || n.cancel(t), s ? s.then(R).catch(R) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(i(this, tt));
  }
  isActive() {
    return this.observers.some(
      (t) => Xt(t.options.enabled, this) !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 ? !this.isActive() : this.options.queryFn === ft || this.state.dataUpdateCount + this.state.errorUpdateCount === 0;
  }
  isStale() {
    return this.state.isInvalidated ? !0 : this.getObserversCount() > 0 ? this.observers.some(
      (t) => t.getCurrentResult().isStale
    ) : this.state.data === void 0;
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || this.state.data === void 0 || !Wt(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var s;
    const t = this.observers.find((r) => r.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (s = i(this, O)) == null || s.continue();
  }
  onOnline() {
    var s;
    const t = this.observers.find((r) => r.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (s = i(this, O)) == null || s.continue();
  }
  addObserver(t) {
    this.observers.includes(t) || (this.observers.push(t), this.clearGcTimeout(), i(this, Q).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    this.observers.includes(t) && (this.observers = this.observers.filter((s) => s !== t), this.observers.length || (i(this, O) && (i(this, J) ? i(this, O).cancel({ revert: !0 }) : i(this, O).cancelRetry()), this.scheduleGc()), i(this, Q).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return this.observers.length;
  }
  invalidate() {
    this.state.isInvalidated || P(this, j, I).call(this, { type: "invalidate" });
  }
  fetch(t, s) {
    var f, w, m;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.data !== void 0 && (s != null && s.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (i(this, O))
        return i(this, O).continueRetry(), i(this, O).promise;
    }
    if (t && this.setOptions(t), !this.options.queryFn) {
      const d = this.observers.find((y) => y.options.queryFn);
      d && this.setOptions(d.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const r = new AbortController(), n = (d) => {
      Object.defineProperty(d, "signal", {
        enumerable: !0,
        get: () => (o(this, J, !0), r.signal)
      });
    }, u = () => {
      const d = It(this.options, s), y = {
        queryKey: this.queryKey,
        meta: this.meta
      };
      return n(y), o(this, J, !1), this.options.persister ? this.options.persister(
        d,
        y,
        this
      ) : d(y);
    }, h = {
      fetchOptions: s,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: u
    };
    n(h), (f = this.options.behavior) == null || f.onFetch(
      h,
      this
    ), o(this, et, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((w = h.fetchOptions) == null ? void 0 : w.meta)) && P(this, j, I).call(this, { type: "fetch", meta: (m = h.fetchOptions) == null ? void 0 : m.meta });
    const a = (d) => {
      var y, E, S, c;
      gt(d) && d.silent || P(this, j, I).call(this, {
        type: "error",
        error: d
      }), gt(d) || ((E = (y = i(this, Q).config).onError) == null || E.call(
        y,
        d,
        this
      ), (c = (S = i(this, Q).config).onSettled) == null || c.call(
        S,
        this.state.data,
        d,
        this
      )), this.scheduleGc();
    };
    return o(this, O, Gt({
      initialPromise: s == null ? void 0 : s.initialPromise,
      fn: h.fetchFn,
      abort: r.abort.bind(r),
      onSuccess: (d) => {
        var y, E, S, c;
        if (d === void 0) {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), a(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        try {
          this.setData(d);
        } catch (p) {
          a(p);
          return;
        }
        (E = (y = i(this, Q).config).onSuccess) == null || E.call(y, d, this), (c = (S = i(this, Q).config).onSettled) == null || c.call(
          S,
          d,
          this.state.error,
          this
        ), this.scheduleGc();
      },
      onError: a,
      onFail: (d, y) => {
        P(this, j, I).call(this, { type: "failed", failureCount: d, error: y });
      },
      onPause: () => {
        P(this, j, I).call(this, { type: "pause" });
      },
      onContinue: () => {
        P(this, j, I).call(this, { type: "continue" });
      },
      retry: h.options.retry,
      retryDelay: h.options.retryDelay,
      networkMode: h.options.networkMode,
      canRun: () => !0
    })), i(this, O).start();
  }
}, tt = new WeakMap(), et = new WeakMap(), Q = new WeakMap(), O = new WeakMap(), ot = new WeakMap(), J = new WeakMap(), j = new WeakSet(), I = function(t) {
  const s = (r) => {
    switch (t.type) {
      case "failed":
        return {
          ...r,
          fetchFailureCount: t.failureCount,
          fetchFailureReason: t.error
        };
      case "pause":
        return {
          ...r,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...r,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...r,
          ...oe(r.data, this.options),
          fetchMeta: t.meta ?? null
        };
      case "success":
        return {
          ...r,
          data: t.data,
          dataUpdateCount: r.dataUpdateCount + 1,
          dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!t.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const n = t.error;
        return gt(n) && n.revert && i(this, et) ? { ...i(this, et), fetchStatus: "idle" } : {
          ...r,
          error: n,
          errorUpdateCount: r.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: r.fetchFailureCount + 1,
          fetchFailureReason: n,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...r,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...r,
          ...t.state
        };
    }
  };
  this.state = s(this.state), C.batch(() => {
    this.observers.forEach((r) => {
      r.onQueryUpdate();
    }), i(this, Q).notify({ query: this, type: "updated", action: t });
  });
}, Tt);
function oe(e, t) {
  return {
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchStatus: Ht(t.networkMode) ? "fetching" : "paused",
    ...e === void 0 && {
      error: null,
      status: "pending"
    }
  };
}
function he(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, s = t !== void 0, r = s ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: s ? r ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: s ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var x, kt, ce = (kt = class extends pt {
  constructor(t = {}) {
    super();
    l(this, x);
    this.config = t, o(this, x, /* @__PURE__ */ new Map());
  }
  build(t, s, r) {
    const n = s.queryKey, u = s.queryHash ?? St(n, s);
    let h = this.get(u);
    return h || (h = new ue({
      cache: this,
      queryKey: n,
      queryHash: u,
      options: t.defaultQueryOptions(s),
      state: r,
      defaultOptions: t.getQueryDefaults(n)
    }), this.add(h)), h;
  }
  add(t) {
    i(this, x).has(t.queryHash) || (i(this, x).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const s = i(this, x).get(t.queryHash);
    s && (t.destroy(), s === t && i(this, x).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    C.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return i(this, x).get(t);
  }
  getAll() {
    return [...i(this, x).values()];
  }
  find(t) {
    const s = { exact: !0, ...t };
    return this.getAll().find(
      (r) => Et(s, r)
    );
  }
  findAll(t = {}) {
    const s = this.getAll();
    return Object.keys(t).length > 0 ? s.filter((r) => Et(t, r)) : s;
  }
  notify(t) {
    C.batch(() => {
      this.listeners.forEach((s) => {
        s(t);
      });
    });
  }
  onFocus() {
    C.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    C.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, x = new WeakMap(), kt), K, F, W, U, N, xt, le = (xt = class extends _t {
  constructor(t) {
    super();
    l(this, U);
    l(this, K);
    l(this, F);
    l(this, W);
    this.mutationId = t.mutationId, o(this, F, t.mutationCache), o(this, K, []), this.state = t.state || de(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = t, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    i(this, K).includes(t) || (i(this, K).push(t), this.clearGcTimeout(), i(this, F).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    o(this, K, i(this, K).filter((s) => s !== t)), this.scheduleGc(), i(this, F).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    i(this, K).length || (this.state.status === "pending" ? this.scheduleGc() : i(this, F).remove(this));
  }
  continue() {
    var t;
    return ((t = i(this, W)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var n, u, h, a, f, w, m, d, y, E, S, c, p, q, M, g, D, T, k, ct;
    o(this, W, Gt({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (b, B) => {
        P(this, U, N).call(this, { type: "failed", failureCount: b, error: B });
      },
      onPause: () => {
        P(this, U, N).call(this, { type: "pause" });
      },
      onContinue: () => {
        P(this, U, N).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode,
      canRun: () => i(this, F).canRun(this)
    }));
    const s = this.state.status === "pending", r = !i(this, W).canStart();
    try {
      if (!s) {
        P(this, U, N).call(this, { type: "pending", variables: t, isPaused: r }), await ((u = (n = i(this, F).config).onMutate) == null ? void 0 : u.call(
          n,
          t,
          this
        ));
        const B = await ((a = (h = this.options).onMutate) == null ? void 0 : a.call(h, t));
        B !== this.state.context && P(this, U, N).call(this, {
          type: "pending",
          context: B,
          variables: t,
          isPaused: r
        });
      }
      const b = await i(this, W).start();
      return await ((w = (f = i(this, F).config).onSuccess) == null ? void 0 : w.call(
        f,
        b,
        t,
        this.state.context,
        this
      )), await ((d = (m = this.options).onSuccess) == null ? void 0 : d.call(m, b, t, this.state.context)), await ((E = (y = i(this, F).config).onSettled) == null ? void 0 : E.call(
        y,
        b,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((c = (S = this.options).onSettled) == null ? void 0 : c.call(S, b, null, t, this.state.context)), P(this, U, N).call(this, { type: "success", data: b }), b;
    } catch (b) {
      try {
        throw await ((q = (p = i(this, F).config).onError) == null ? void 0 : q.call(
          p,
          b,
          t,
          this.state.context,
          this
        )), await ((g = (M = this.options).onError) == null ? void 0 : g.call(
          M,
          b,
          t,
          this.state.context
        )), await ((T = (D = i(this, F).config).onSettled) == null ? void 0 : T.call(
          D,
          void 0,
          b,
          this.state.variables,
          this.state.context,
          this
        )), await ((ct = (k = this.options).onSettled) == null ? void 0 : ct.call(
          k,
          void 0,
          b,
          t,
          this.state.context
        )), b;
      } finally {
        P(this, U, N).call(this, { type: "error", error: b });
      }
    } finally {
      i(this, F).runNext(this);
    }
  }
}, K = new WeakMap(), F = new WeakMap(), W = new WeakMap(), U = new WeakSet(), N = function(t) {
  const s = (r) => {
    switch (t.type) {
      case "failed":
        return {
          ...r,
          failureCount: t.failureCount,
          failureReason: t.error
        };
      case "pause":
        return {
          ...r,
          isPaused: !0
        };
      case "continue":
        return {
          ...r,
          isPaused: !1
        };
      case "pending":
        return {
          ...r,
          context: t.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: t.isPaused,
          status: "pending",
          variables: t.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...r,
          data: t.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...r,
          data: void 0,
          error: t.error,
          failureCount: r.failureCount + 1,
          failureReason: t.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = s(this.state), C.batch(() => {
    i(this, K).forEach((r) => {
      r.onMutationUpdate(t);
    }), i(this, F).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, xt);
function de() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var A, ht, Kt, fe = (Kt = class extends pt {
  constructor(t = {}) {
    super();
    l(this, A);
    l(this, ht);
    this.config = t, o(this, A, /* @__PURE__ */ new Map()), o(this, ht, Date.now());
  }
  build(t, s, r) {
    const n = new le({
      mutationCache: this,
      mutationId: ++lt(this, ht)._,
      options: t.defaultMutationOptions(s),
      state: r
    });
    return this.add(n), n;
  }
  add(t) {
    const s = dt(t), r = i(this, A).get(s) ?? [];
    r.push(t), i(this, A).set(s, r), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    var r;
    const s = dt(t);
    if (i(this, A).has(s)) {
      const n = (r = i(this, A).get(s)) == null ? void 0 : r.filter((u) => u !== t);
      n && (n.length === 0 ? i(this, A).delete(s) : i(this, A).set(s, n));
    }
    this.notify({ type: "removed", mutation: t });
  }
  canRun(t) {
    var r;
    const s = (r = i(this, A).get(dt(t))) == null ? void 0 : r.find((n) => n.state.status === "pending");
    return !s || s === t;
  }
  runNext(t) {
    var r;
    const s = (r = i(this, A).get(dt(t))) == null ? void 0 : r.find((n) => n !== t && n.state.isPaused);
    return (s == null ? void 0 : s.continue()) ?? Promise.resolve();
  }
  clear() {
    C.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return [...i(this, A).values()].flat();
  }
  find(t) {
    const s = { exact: !0, ...t };
    return this.getAll().find(
      (r) => qt(s, r)
    );
  }
  findAll(t = {}) {
    return this.getAll().filter((s) => qt(t, s));
  }
  notify(t) {
    C.batch(() => {
      this.listeners.forEach((s) => {
        s(t);
      });
    });
  }
  resumePausedMutations() {
    const t = this.getAll().filter((s) => s.state.isPaused);
    return C.batch(
      () => Promise.all(
        t.map((s) => s.continue().catch(R))
      )
    );
  }
}, A = new WeakMap(), ht = new WeakMap(), Kt);
function dt(e) {
  var t;
  return ((t = e.options.scope) == null ? void 0 : t.id) ?? String(e.mutationId);
}
function Qt(e) {
  return {
    onFetch: (t, s) => {
      var m, d, y, E, S;
      const r = t.options, n = (y = (d = (m = t.fetchOptions) == null ? void 0 : m.meta) == null ? void 0 : d.fetchMore) == null ? void 0 : y.direction, u = ((E = t.state.data) == null ? void 0 : E.pages) || [], h = ((S = t.state.data) == null ? void 0 : S.pageParams) || [];
      let a = { pages: [], pageParams: [] }, f = 0;
      const w = async () => {
        let c = !1;
        const p = (g) => {
          Object.defineProperty(g, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? c = !0 : t.signal.addEventListener("abort", () => {
              c = !0;
            }), t.signal)
          });
        }, q = It(t.options, t.fetchOptions), M = async (g, D, T) => {
          if (c)
            return Promise.reject();
          if (D == null && g.pages.length)
            return Promise.resolve(g);
          const k = {
            queryKey: t.queryKey,
            pageParam: D,
            direction: T ? "backward" : "forward",
            meta: t.options.meta
          };
          p(k);
          const ct = await q(
            k
          ), { maxPages: b } = t.options, B = T ? ee : te;
          return {
            pages: B(g.pages, ct, b),
            pageParams: B(g.pageParams, D, b)
          };
        };
        if (n && u.length) {
          const g = n === "backward", D = g ? zt : Pt, T = {
            pages: u,
            pageParams: h
          }, k = D(r, T);
          a = await M(T, k, g);
        } else {
          const g = e ?? u.length;
          do {
            const D = f === 0 ? h[0] ?? r.initialPageParam : Pt(r, a);
            if (f > 0 && D == null)
              break;
            a = await M(a, D), f++;
          } while (f < g);
        }
        return a;
      };
      t.options.persister ? t.fetchFn = () => {
        var c, p;
        return (p = (c = t.options).persister) == null ? void 0 : p.call(
          c,
          w,
          {
            queryKey: t.queryKey,
            meta: t.options.meta,
            signal: t.signal
          },
          s
        );
      } : t.fetchFn = w;
    }
  };
}
function Pt(e, { pages: t, pageParams: s }) {
  const r = t.length - 1;
  return t.length > 0 ? e.getNextPageParam(
    t[r],
    t,
    s[r],
    s
  ) : void 0;
}
function zt(e, { pages: t, pageParams: s }) {
  var r;
  return t.length > 0 ? (r = e.getPreviousPageParam) == null ? void 0 : r.call(e, t[0], t, s[0], s) : void 0;
}
function ge(e, t) {
  return t ? Pt(e, t) != null : !1;
}
function be(e, t) {
  return !t || !e.getPreviousPageParam ? !1 : zt(e, t) != null;
}
var v, G, _, st, rt, z, it, nt, Ut, we = (Ut = class {
  constructor(e = {}) {
    l(this, v);
    l(this, G);
    l(this, _);
    l(this, st);
    l(this, rt);
    l(this, z);
    l(this, it);
    l(this, nt);
    o(this, v, e.queryCache || new ce()), o(this, G, e.mutationCache || new fe()), o(this, _, e.defaultOptions || {}), o(this, st, /* @__PURE__ */ new Map()), o(this, rt, /* @__PURE__ */ new Map()), o(this, z, 0);
  }
  mount() {
    lt(this, z)._++, i(this, z) === 1 && (o(this, it, Nt.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), i(this, v).onFocus());
    })), o(this, nt, yt.subscribe(async (e) => {
      e && (await this.resumePausedMutations(), i(this, v).onOnline());
    })));
  }
  unmount() {
    var e, t;
    lt(this, z)._--, i(this, z) === 0 && ((e = i(this, it)) == null || e.call(this), o(this, it, void 0), (t = i(this, nt)) == null || t.call(this), o(this, nt, void 0));
  }
  isFetching(e) {
    return i(this, v).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return i(this, G).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var s;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (s = i(this, v).get(t.queryHash)) == null ? void 0 : s.state.data;
  }
  ensureQueryData(e) {
    const t = this.defaultQueryOptions(e), s = i(this, v).build(this, t), r = s.state.data;
    return r === void 0 ? this.fetchQuery(e) : (e.revalidateIfStale && s.isStaleByTime(Ct(t.staleTime, s)) && this.prefetchQuery(t), Promise.resolve(r));
  }
  getQueriesData(e) {
    return i(this, v).findAll(e).map(({ queryKey: t, state: s }) => {
      const r = s.data;
      return [t, r];
    });
  }
  setQueryData(e, t, s) {
    const r = this.defaultQueryOptions({ queryKey: e }), n = i(this, v).get(
      r.queryHash
    ), u = n == null ? void 0 : n.state.data, h = Vt(t, u);
    if (h !== void 0)
      return i(this, v).build(this, r).setData(h, { ...s, manual: !0 });
  }
  setQueriesData(e, t, s) {
    return C.batch(
      () => i(this, v).findAll(e).map(({ queryKey: r }) => [
        r,
        this.setQueryData(r, t, s)
      ])
    );
  }
  getQueryState(e) {
    var s;
    const t = this.defaultQueryOptions({ queryKey: e });
    return (s = i(this, v).get(
      t.queryHash
    )) == null ? void 0 : s.state;
  }
  removeQueries(e) {
    const t = i(this, v);
    C.batch(() => {
      t.findAll(e).forEach((s) => {
        t.remove(s);
      });
    });
  }
  resetQueries(e, t) {
    const s = i(this, v), r = {
      type: "active",
      ...e
    };
    return C.batch(() => (s.findAll(e).forEach((n) => {
      n.reset();
    }), this.refetchQueries(r, t)));
  }
  cancelQueries(e, t = {}) {
    const s = { revert: !0, ...t }, r = C.batch(
      () => i(this, v).findAll(e).map((n) => n.cancel(s))
    );
    return Promise.all(r).then(R).catch(R);
  }
  invalidateQueries(e, t = {}) {
    return C.batch(() => {
      if (i(this, v).findAll(e).forEach((r) => {
        r.invalidate();
      }), (e == null ? void 0 : e.refetchType) === "none")
        return Promise.resolve();
      const s = {
        ...e,
        type: (e == null ? void 0 : e.refetchType) ?? (e == null ? void 0 : e.type) ?? "active"
      };
      return this.refetchQueries(s, t);
    });
  }
  refetchQueries(e, t = {}) {
    const s = {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }, r = C.batch(
      () => i(this, v).findAll(e).filter((n) => !n.isDisabled()).map((n) => {
        let u = n.fetch(void 0, s);
        return s.throwOnError || (u = u.catch(R)), n.state.fetchStatus === "paused" ? Promise.resolve() : u;
      })
    );
    return Promise.all(r).then(R);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    t.retry === void 0 && (t.retry = !1);
    const s = i(this, v).build(this, t);
    return s.isStaleByTime(
      Ct(t.staleTime, s)
    ) ? s.fetch(t) : Promise.resolve(s.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(R).catch(R);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = Qt(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(R).catch(R);
  }
  ensureInfiniteQueryData(e) {
    return e.behavior = Qt(e.pages), this.ensureQueryData(e);
  }
  resumePausedMutations() {
    return yt.isOnline() ? i(this, G).resumePausedMutations() : Promise.resolve();
  }
  getQueryCache() {
    return i(this, v);
  }
  getMutationCache() {
    return i(this, G);
  }
  getDefaultOptions() {
    return i(this, _);
  }
  setDefaultOptions(e) {
    o(this, _, e);
  }
  setQueryDefaults(e, t) {
    i(this, st).set(at(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...i(this, st).values()], s = {};
    return t.forEach((r) => {
      ut(e, r.queryKey) && Object.assign(s, r.defaultOptions);
    }), s;
  }
  setMutationDefaults(e, t) {
    i(this, rt).set(at(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...i(this, rt).values()];
    let s = {};
    return t.forEach((r) => {
      ut(e, r.mutationKey) && (s = { ...s, ...r.defaultOptions });
    }), s;
  }
  defaultQueryOptions(e) {
    if (e._defaulted)
      return e;
    const t = {
      ...i(this, _).queries,
      ...this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = St(
      t.queryKey,
      t
    )), t.refetchOnReconnect === void 0 && (t.refetchOnReconnect = t.networkMode !== "always"), t.throwOnError === void 0 && (t.throwOnError = !!t.suspense), !t.networkMode && t.persister && (t.networkMode = "offlineFirst"), t.queryFn === ft && (t.enabled = !1), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...i(this, _).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    i(this, v).clear(), i(this, G).clear();
  }
}, v = new WeakMap(), G = new WeakMap(), _ = new WeakMap(), st = new WeakMap(), rt = new WeakMap(), z = new WeakMap(), it = new WeakMap(), nt = new WeakMap(), Ut), Bt = Ot.createContext(
  void 0
), Pe = (e) => {
  const t = Ot.useContext(Bt);
  if (e)
    return e;
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, Oe = ({
  client: e,
  children: t
}) => (Ot.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ $t.jsx(Bt.Provider, { value: e, children: t }));
export {
  ve as A,
  qt as B,
  Lt as C,
  Et as D,
  yt as E,
  le as M,
  Bt as Q,
  pt as S,
  Ct as a,
  Jt as b,
  oe as c,
  Zt as d,
  C as e,
  Nt as f,
  bt as g,
  Qt as h,
  mt as i,
  ge as j,
  be as k,
  at as l,
  de as m,
  R as n,
  ft as o,
  ie as p,
  Oe as q,
  Xt as r,
  me as s,
  Wt as t,
  Pe as u,
  fe as v,
  ue as w,
  ce as x,
  we as y,
  gt as z
};
