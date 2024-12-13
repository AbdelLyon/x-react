var He = (t) => {
  throw TypeError(t);
};
var me = (t, e, s) => e.has(t) || He("Cannot " + s);
var r = (t, e, s) => (me(t, e, "read from private field"), s ? s.call(t) : e.get(t)), g = (t, e, s) => e.has(t) ? He("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, s), h = (t, e, s, i) => (me(t, e, "write to private field"), i ? i.call(t, s) : e.set(t, s), s), p = (t, e, s) => (me(t, e, "access private method"), s);
import { u as rs } from "../useTheme-DNnSNDW2.js";
import { S as Ue, p as Le, r as F, s as ye, a as de, n as gt, i as Re, b as ze, t as bt, f as vt, c as mt, d as Be, e as N, g as tt, h as Ke, j as Rt, k as Ot, l as Ve, m as Ct, u as A, o as qe } from "../QueryClientProvider-CIhy_q4R.js";
import { C as ns, M as as, v as us, w as os, x as hs, y as cs, Q as ls, q as ds, z as fs, A as ps, B as ys, D as gs, E as bs } from "../QueryClientProvider-CIhy_q4R.js";
import * as b from "react";
import { j as Qt } from "../jsx-runtime-Dx-03ztt.js";
var P, y, ne, w, B, Y, _, k, ae, Z, ee, K, V, j, te, v, ie, Oe, Ce, Qe, Ee, Se, we, Pe, st, Ye, he = (Ye = class extends Ue {
  constructor(e, s) {
    super();
    g(this, v);
    g(this, P);
    g(this, y);
    g(this, ne);
    g(this, w);
    g(this, B);
    g(this, Y);
    g(this, _);
    g(this, k);
    g(this, ae);
    g(this, Z);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    g(this, ee);
    g(this, K);
    g(this, V);
    g(this, j);
    g(this, te, /* @__PURE__ */ new Set());
    this.options = s, h(this, P, e), h(this, k, null), h(this, _, Le()), this.options.experimental_prefetchInRender || r(this, _).reject(
      new Error("experimental_prefetchInRender feature flag is not enabled")
    ), this.bindMethods(), this.setOptions(s);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (r(this, y).addObserver(this), $e(r(this, y), this.options) ? p(this, v, ie).call(this) : this.updateResult(), p(this, v, Ee).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return xe(
      r(this, y),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return xe(
      r(this, y),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), p(this, v, Se).call(this), p(this, v, we).call(this), r(this, y).removeObserver(this);
  }
  setOptions(e, s) {
    const i = this.options, n = r(this, y);
    if (this.options = r(this, P).defaultQueryOptions(e), this.options.enabled !== void 0 && typeof this.options.enabled != "boolean" && typeof this.options.enabled != "function" && typeof F(this.options.enabled, r(this, y)) != "boolean")
      throw new Error(
        "Expected enabled to be a boolean or a callback that returns a boolean"
      );
    p(this, v, Pe).call(this), r(this, y).setOptions(this.options), i._defaulted && !ye(this.options, i) && r(this, P).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: r(this, y),
      observer: this
    });
    const u = this.hasListeners();
    u && We(
      r(this, y),
      n,
      this.options,
      i
    ) && p(this, v, ie).call(this), this.updateResult(s), u && (r(this, y) !== n || F(this.options.enabled, r(this, y)) !== F(i.enabled, r(this, y)) || de(this.options.staleTime, r(this, y)) !== de(i.staleTime, r(this, y))) && p(this, v, Oe).call(this);
    const a = p(this, v, Ce).call(this);
    u && (r(this, y) !== n || F(this.options.enabled, r(this, y)) !== F(i.enabled, r(this, y)) || a !== r(this, j)) && p(this, v, Qe).call(this, a);
  }
  getOptimisticResult(e) {
    const s = r(this, P).getQueryCache().build(r(this, P), e), i = this.createResult(s, e);
    return St(this, i) && (h(this, w, i), h(this, Y, this.options), h(this, B, r(this, y).state)), i;
  }
  getCurrentResult() {
    return r(this, w);
  }
  trackResult(e, s) {
    const i = {};
    return Object.keys(e).forEach((n) => {
      Object.defineProperty(i, n, {
        configurable: !1,
        enumerable: !0,
        get: () => (this.trackProp(n), s == null || s(n), e[n])
      });
    }), i;
  }
  trackProp(e) {
    r(this, te).add(e);
  }
  getCurrentQuery() {
    return r(this, y);
  }
  refetch({ ...e } = {}) {
    return this.fetch({
      ...e
    });
  }
  fetchOptimistic(e) {
    const s = r(this, P).defaultQueryOptions(e), i = r(this, P).getQueryCache().build(r(this, P), s);
    return i.fetch().then(() => this.createResult(i, s));
  }
  fetch(e) {
    return p(this, v, ie).call(this, {
      ...e,
      cancelRefetch: e.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), r(this, w)));
  }
  createResult(e, s) {
    var je;
    const i = r(this, y), n = this.options, u = r(this, w), a = r(this, B), f = r(this, Y), c = e !== i ? e.state : r(this, ne), { state: l } = e;
    let o = { ...l }, m = !1, O;
    if (s._optimisticResults) {
      const S = this.hasListeners(), J = !S && $e(e, s), X = S && We(e, i, s, n);
      (J || X) && (o = {
        ...o,
        ...mt(l.data, e.options)
      }), s._optimisticResults === "isRestoring" && (o.fetchStatus = "idle");
    }
    let { error: C, errorUpdatedAt: R, status: Q } = o;
    if (s.select && o.data !== void 0)
      if (u && o.data === (a == null ? void 0 : a.data) && s.select === r(this, ae))
        O = r(this, Z);
      else
        try {
          h(this, ae, s.select), O = s.select(o.data), O = Be(u == null ? void 0 : u.data, O, s), h(this, Z, O), h(this, k, null);
        } catch (S) {
          h(this, k, S);
        }
    else
      O = o.data;
    if (s.placeholderData !== void 0 && O === void 0 && Q === "pending") {
      let S;
      if (u != null && u.isPlaceholderData && s.placeholderData === (f == null ? void 0 : f.placeholderData))
        S = u.data;
      else if (S = typeof s.placeholderData == "function" ? s.placeholderData(
        (je = r(this, ee)) == null ? void 0 : je.state.data,
        r(this, ee)
      ) : s.placeholderData, s.select && S !== void 0)
        try {
          S = s.select(S), h(this, k, null);
        } catch (J) {
          h(this, k, J);
        }
      S !== void 0 && (Q = "success", O = Be(
        u == null ? void 0 : u.data,
        S,
        s
      ), m = !0);
    }
    r(this, k) && (C = r(this, k), O = r(this, Z), R = Date.now(), Q = "error");
    const T = o.fetchStatus === "fetching", W = Q === "pending", G = Q === "error", ce = W && T, _e = O !== void 0, I = {
      status: Q,
      fetchStatus: o.fetchStatus,
      isPending: W,
      isSuccess: Q === "success",
      isError: G,
      isInitialLoading: ce,
      isLoading: ce,
      data: O,
      dataUpdatedAt: o.dataUpdatedAt,
      error: C,
      errorUpdatedAt: R,
      failureCount: o.fetchFailureCount,
      failureReason: o.fetchFailureReason,
      errorUpdateCount: o.errorUpdateCount,
      isFetched: o.dataUpdateCount > 0 || o.errorUpdateCount > 0,
      isFetchedAfterMount: o.dataUpdateCount > c.dataUpdateCount || o.errorUpdateCount > c.errorUpdateCount,
      isFetching: T,
      isRefetching: T && !W,
      isLoadingError: G && !_e,
      isPaused: o.fetchStatus === "paused",
      isPlaceholderData: m,
      isRefetchError: G && _e,
      isStale: Ne(e, s),
      refetch: this.refetch,
      promise: r(this, _)
    };
    if (this.options.experimental_prefetchInRender) {
      const S = (le) => {
        I.status === "error" ? le.reject(I.error) : I.data !== void 0 && le.resolve(I.data);
      }, J = () => {
        const le = h(this, _, I.promise = Le());
        S(le);
      }, X = r(this, _);
      switch (X.status) {
        case "pending":
          e.queryHash === i.queryHash && S(X);
          break;
        case "fulfilled":
          (I.status === "error" || I.data !== X.value) && J();
          break;
        case "rejected":
          (I.status !== "error" || I.error !== X.reason) && J();
          break;
      }
    }
    return I;
  }
  updateResult(e) {
    const s = r(this, w), i = this.createResult(r(this, y), this.options);
    if (h(this, B, r(this, y).state), h(this, Y, this.options), r(this, B).data !== void 0 && h(this, ee, r(this, y)), ye(i, s))
      return;
    h(this, w, i);
    const n = {}, u = () => {
      if (!s)
        return !0;
      const { notifyOnChangeProps: a } = this.options, f = typeof a == "function" ? a() : a;
      if (f === "all" || !f && !r(this, te).size)
        return !0;
      const d = new Set(
        f ?? r(this, te)
      );
      return this.options.throwOnError && d.add("error"), Object.keys(r(this, w)).some((c) => {
        const l = c;
        return r(this, w)[l] !== s[l] && d.has(l);
      });
    };
    (e == null ? void 0 : e.listeners) !== !1 && u() && (n.listeners = !0), p(this, v, st).call(this, { ...n, ...e });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && p(this, v, Ee).call(this);
  }
}, P = new WeakMap(), y = new WeakMap(), ne = new WeakMap(), w = new WeakMap(), B = new WeakMap(), Y = new WeakMap(), _ = new WeakMap(), k = new WeakMap(), ae = new WeakMap(), Z = new WeakMap(), ee = new WeakMap(), K = new WeakMap(), V = new WeakMap(), j = new WeakMap(), te = new WeakMap(), v = new WeakSet(), ie = function(e) {
  p(this, v, Pe).call(this);
  let s = r(this, y).fetch(
    this.options,
    e
  );
  return e != null && e.throwOnError || (s = s.catch(gt)), s;
}, Oe = function() {
  p(this, v, Se).call(this);
  const e = de(
    this.options.staleTime,
    r(this, y)
  );
  if (Re || r(this, w).isStale || !ze(e))
    return;
  const i = bt(r(this, w).dataUpdatedAt, e) + 1;
  h(this, K, setTimeout(() => {
    r(this, w).isStale || this.updateResult();
  }, i));
}, Ce = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(r(this, y)) : this.options.refetchInterval) ?? !1;
}, Qe = function(e) {
  p(this, v, we).call(this), h(this, j, e), !(Re || F(this.options.enabled, r(this, y)) === !1 || !ze(r(this, j)) || r(this, j) === 0) && h(this, V, setInterval(() => {
    (this.options.refetchIntervalInBackground || vt.isFocused()) && p(this, v, ie).call(this);
  }, r(this, j)));
}, Ee = function() {
  p(this, v, Oe).call(this), p(this, v, Qe).call(this, p(this, v, Ce).call(this));
}, Se = function() {
  r(this, K) && (clearTimeout(r(this, K)), h(this, K, void 0));
}, we = function() {
  r(this, V) && (clearInterval(r(this, V)), h(this, V, void 0));
}, Pe = function() {
  const e = r(this, P).getQueryCache().build(r(this, P), this.options);
  if (e === r(this, y))
    return;
  const s = r(this, y);
  h(this, y, e), h(this, ne, e.state), this.hasListeners() && (s == null || s.removeObserver(this), e.addObserver(this));
}, st = function(e) {
  N.batch(() => {
    e.listeners && this.listeners.forEach((s) => {
      s(r(this, w));
    }), r(this, P).getQueryCache().notify({
      query: r(this, y),
      type: "observerResultsUpdated"
    });
  });
}, Ye);
function Et(t, e) {
  return F(e.enabled, t) !== !1 && t.state.data === void 0 && !(t.state.status === "error" && e.retryOnMount === !1);
}
function $e(t, e) {
  return Et(t, e) || t.state.data !== void 0 && xe(t, e, e.refetchOnMount);
}
function xe(t, e, s) {
  if (F(e.enabled, t) !== !1) {
    const i = typeof s == "function" ? s(t) : s;
    return i === "always" || i !== !1 && Ne(t, e);
  }
  return !1;
}
function We(t, e, s, i) {
  return (t !== e || F(i.enabled, t) === !1) && (!s.suspense || t.state.status !== "error") && Ne(t, s);
}
function Ne(t, e) {
  return F(e.enabled, t) !== !1 && t.isStaleByTime(de(e.staleTime, t));
}
function St(t, e) {
  return !ye(t.getCurrentResult(), e);
}
function Ge(t, e) {
  return t.filter((s) => !e.includes(s));
}
function wt(t, e, s) {
  const i = t.slice(0);
  return i[e] = s, i;
}
var se, M, $, re, D, H, ue, oe, E, Me, De, fe, Ie, ke, Ze, Pt = (Ze = class extends Ue {
  constructor(e, s, i) {
    super();
    g(this, E);
    g(this, se);
    g(this, M);
    g(this, $);
    g(this, re);
    g(this, D);
    g(this, H);
    g(this, ue);
    g(this, oe);
    h(this, se, e), h(this, re, i), h(this, $, []), h(this, D, []), h(this, M, []), this.setQueries(s);
  }
  onSubscribe() {
    this.listeners.size === 1 && r(this, D).forEach((e) => {
      e.subscribe((s) => {
        p(this, E, Ie).call(this, e, s);
      });
    });
  }
  onUnsubscribe() {
    this.listeners.size || this.destroy();
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), r(this, D).forEach((e) => {
      e.destroy();
    });
  }
  setQueries(e, s, i) {
    if (h(this, $, e), h(this, re, s), process.env.NODE_ENV !== "production") {
      const n = e.map((u) => u.queryHash);
      new Set(n).size !== n.length && console.warn(
        "[QueriesObserver]: Duplicate Queries found. This might result in unexpected behavior."
      );
    }
    N.batch(() => {
      const n = r(this, D), u = p(this, E, fe).call(this, r(this, $));
      u.forEach(
        (c) => c.observer.setOptions(c.defaultedQueryOptions, i)
      );
      const a = u.map((c) => c.observer), f = a.map(
        (c) => c.getCurrentResult()
      ), d = a.some(
        (c, l) => c !== n[l]
      );
      n.length === a.length && !d || (h(this, D, a), h(this, M, f), this.hasListeners() && (Ge(n, a).forEach((c) => {
        c.destroy();
      }), Ge(a, n).forEach((c) => {
        c.subscribe((l) => {
          p(this, E, Ie).call(this, c, l);
        });
      }), p(this, E, ke).call(this)));
    });
  }
  getCurrentResult() {
    return r(this, M);
  }
  getQueries() {
    return r(this, D).map((e) => e.getCurrentQuery());
  }
  getObservers() {
    return r(this, D);
  }
  getOptimisticResult(e, s) {
    const n = p(this, E, fe).call(this, e).map(
      (u) => u.observer.getOptimisticResult(u.defaultedQueryOptions)
    );
    return [
      n,
      (u) => p(this, E, De).call(this, u ?? n, s),
      () => p(this, E, Me).call(this, n, e)
    ];
  }
}, se = new WeakMap(), M = new WeakMap(), $ = new WeakMap(), re = new WeakMap(), D = new WeakMap(), H = new WeakMap(), ue = new WeakMap(), oe = new WeakMap(), E = new WeakSet(), Me = function(e, s) {
  const i = p(this, E, fe).call(this, s);
  return i.map((n, u) => {
    const a = e[u];
    return n.defaultedQueryOptions.notifyOnChangeProps ? a : n.observer.trackResult(a, (f) => {
      i.forEach((d) => {
        d.observer.trackProp(f);
      });
    });
  });
}, De = function(e, s) {
  return s ? ((!r(this, H) || r(this, M) !== r(this, oe) || s !== r(this, ue)) && (h(this, ue, s), h(this, oe, r(this, M)), h(this, H, tt(
    r(this, H),
    s(e)
  ))), r(this, H)) : e;
}, fe = function(e) {
  const s = new Map(
    r(this, D).map((n) => [n.options.queryHash, n])
  ), i = [];
  return e.forEach((n) => {
    const u = r(this, se).defaultQueryOptions(n), a = s.get(u.queryHash);
    a ? i.push({
      defaultedQueryOptions: u,
      observer: a
    }) : i.push({
      defaultedQueryOptions: u,
      observer: new he(r(this, se), u)
    });
  }), i;
}, Ie = function(e, s) {
  const i = r(this, D).indexOf(e);
  i !== -1 && (h(this, M, wt(r(this, M), i, s)), p(this, E, ke).call(this));
}, ke = function() {
  var e;
  if (this.hasListeners()) {
    const s = r(this, H), i = p(this, E, De).call(this, p(this, E, Me).call(this, r(this, M), r(this, $)), (e = r(this, re)) == null ? void 0 : e.combine);
    s !== i && N.batch(() => {
      this.listeners.forEach((n) => {
        n(r(this, M));
      });
    });
  }
}, Ze), rt = class extends he {
  constructor(t, e) {
    super(t, e);
  }
  bindMethods() {
    super.bindMethods(), this.fetchNextPage = this.fetchNextPage.bind(this), this.fetchPreviousPage = this.fetchPreviousPage.bind(this);
  }
  setOptions(t, e) {
    super.setOptions(
      {
        ...t,
        behavior: Ke()
      },
      e
    );
  }
  getOptimisticResult(t) {
    return t.behavior = Ke(), super.getOptimisticResult(t);
  }
  fetchNextPage(t) {
    return this.fetch({
      ...t,
      meta: {
        fetchMore: { direction: "forward" }
      }
    });
  }
  fetchPreviousPage(t) {
    return this.fetch({
      ...t,
      meta: {
        fetchMore: { direction: "backward" }
      }
    });
  }
  createResult(t, e) {
    var C, R;
    const { state: s } = t, i = super.createResult(t, e), { isFetching: n, isRefetching: u, isError: a, isRefetchError: f } = i, d = (R = (C = s.fetchMeta) == null ? void 0 : C.fetchMore) == null ? void 0 : R.direction, c = a && d === "forward", l = n && d === "forward", o = a && d === "backward", m = n && d === "backward";
    return {
      ...i,
      fetchNextPage: this.fetchNextPage,
      fetchPreviousPage: this.fetchPreviousPage,
      hasNextPage: Rt(e, s.data),
      hasPreviousPage: Ot(e, s.data),
      isFetchNextPageError: c,
      isFetchingNextPage: l,
      isFetchPreviousPageError: o,
      isFetchingPreviousPage: m,
      isRefetchError: f && !c && !o,
      isRefetching: u && !l && !m
    };
  }
}, L, z, x, U, q, pe, Fe, et, xt = (et = class extends Ue {
  constructor(e, s) {
    super();
    g(this, q);
    g(this, L);
    g(this, z);
    g(this, x);
    g(this, U);
    h(this, L, e), this.setOptions(s), this.bindMethods(), p(this, q, pe).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(e) {
    var i;
    const s = this.options;
    this.options = r(this, L).defaultMutationOptions(e), ye(this.options, s) || r(this, L).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: r(this, x),
      observer: this
    }), s != null && s.mutationKey && this.options.mutationKey && Ve(s.mutationKey) !== Ve(this.options.mutationKey) ? this.reset() : ((i = r(this, x)) == null ? void 0 : i.state.status) === "pending" && r(this, x).setOptions(this.options);
  }
  onUnsubscribe() {
    var e;
    this.hasListeners() || (e = r(this, x)) == null || e.removeObserver(this);
  }
  onMutationUpdate(e) {
    p(this, q, pe).call(this), p(this, q, Fe).call(this, e);
  }
  getCurrentResult() {
    return r(this, z);
  }
  reset() {
    var e;
    (e = r(this, x)) == null || e.removeObserver(this), h(this, x, void 0), p(this, q, pe).call(this), p(this, q, Fe).call(this);
  }
  mutate(e, s) {
    var i;
    return h(this, U, s), (i = r(this, x)) == null || i.removeObserver(this), h(this, x, r(this, L).getMutationCache().build(r(this, L), this.options)), r(this, x).addObserver(this), r(this, x).execute(e);
  }
}, L = new WeakMap(), z = new WeakMap(), x = new WeakMap(), U = new WeakMap(), q = new WeakSet(), pe = function() {
  var s;
  const e = ((s = r(this, x)) == null ? void 0 : s.state) ?? Ct();
  h(this, z, {
    ...e,
    isPending: e.status === "pending",
    isSuccess: e.status === "success",
    isError: e.status === "error",
    isIdle: e.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, Fe = function(e) {
  N.batch(() => {
    var s, i, n, u, a, f, d, c;
    if (r(this, U) && this.hasListeners()) {
      const l = r(this, z).variables, o = r(this, z).context;
      (e == null ? void 0 : e.type) === "success" ? ((i = (s = r(this, U)).onSuccess) == null || i.call(s, e.data, l, o), (u = (n = r(this, U)).onSettled) == null || u.call(n, e.data, null, l, o)) : (e == null ? void 0 : e.type) === "error" && ((f = (a = r(this, U)).onError) == null || f.call(a, e.error, l, o), (c = (d = r(this, U)).onSettled) == null || c.call(
        d,
        void 0,
        e.error,
        l,
        o
      ));
    }
    this.listeners.forEach((l) => {
      l(r(this, z));
    });
  });
}, et);
function it(t) {
  return t;
}
function Mt(t) {
  return {
    mutationKey: t.options.mutationKey,
    state: t.state,
    ...t.options.scope && { scope: t.options.scope },
    ...t.meta && { meta: t.meta }
  };
}
function Dt(t, e) {
  var s;
  return {
    state: {
      ...t.state,
      ...t.state.data !== void 0 && {
        data: e(t.state.data)
      }
    },
    queryKey: t.queryKey,
    queryHash: t.queryHash,
    ...t.state.status === "pending" && {
      promise: (s = t.promise) == null ? void 0 : s.then(e).catch((i) => (process.env.NODE_ENV !== "production" && console.error(
        `A query that was dehydrated as pending ended up rejecting. [${t.queryHash}]: ${i}; The error will be redacted in production builds`
      ), Promise.reject(new Error("redacted"))))
    },
    ...t.meta && { meta: t.meta }
  };
}
function It(t) {
  return t.state.isPaused;
}
function kt(t) {
  return t.state.status === "success";
}
function _t(t, e = {}) {
  var f, d, c;
  const s = e.shouldDehydrateMutation ?? ((f = t.getDefaultOptions().dehydrate) == null ? void 0 : f.shouldDehydrateMutation) ?? It, i = t.getMutationCache().getAll().flatMap(
    (l) => s(l) ? [Mt(l)] : []
  ), n = e.shouldDehydrateQuery ?? ((d = t.getDefaultOptions().dehydrate) == null ? void 0 : d.shouldDehydrateQuery) ?? kt, u = e.serializeData ?? ((c = t.getDefaultOptions().dehydrate) == null ? void 0 : c.serializeData) ?? it, a = t.getQueryCache().getAll().flatMap(
    (l) => n(l) ? [Dt(l, u)] : []
  );
  return { mutations: i, queries: a };
}
function Je(t, e, s) {
  var d, c;
  if (typeof e != "object" || e === null)
    return;
  const i = t.getMutationCache(), n = t.getQueryCache(), u = ((d = s == null ? void 0 : s.defaultOptions) == null ? void 0 : d.deserializeData) ?? ((c = t.getDefaultOptions().hydrate) == null ? void 0 : c.deserializeData) ?? it, a = e.mutations || [], f = e.queries || [];
  a.forEach(({ state: l, ...o }) => {
    var m, O;
    i.build(
      t,
      {
        ...(m = t.getDefaultOptions().hydrate) == null ? void 0 : m.mutations,
        ...(O = s == null ? void 0 : s.defaultOptions) == null ? void 0 : O.mutations,
        ...o
      },
      l
    );
  }), f.forEach(({ queryKey: l, state: o, queryHash: m, meta: O, promise: C }) => {
    var T, W;
    let R = n.get(m);
    const Q = o.data === void 0 ? o.data : u(o.data);
    if (R) {
      if (R.state.dataUpdatedAt < o.dataUpdatedAt) {
        const { fetchStatus: G, ...ce } = o;
        R.setState({
          ...ce,
          data: Q
        });
      }
    } else
      R = n.build(
        t,
        {
          ...(T = t.getDefaultOptions().hydrate) == null ? void 0 : T.queries,
          ...(W = s == null ? void 0 : s.defaultOptions) == null ? void 0 : W.queries,
          queryKey: l,
          queryHash: m,
          meta: O
        },
        // Reset fetch status to idle to avoid
        // query being stuck in fetching state upon hydration
        {
          ...o,
          data: Q,
          fetchStatus: "idle"
        }
      );
    if (C) {
      const G = Promise.resolve(C).then(u);
      R.fetch(void 0, { initialPromise: G });
    }
  });
}
var nt = b.createContext(!1), at = () => b.useContext(nt), jt = nt.Provider;
function ut() {
  let t = !1;
  return {
    clearReset: () => {
      t = !1;
    },
    reset: () => {
      t = !0;
    },
    isReset: () => t
  };
}
var ot = b.createContext(ut()), ht = () => b.useContext(ot), Ht = ({
  children: t
}) => {
  const [e] = b.useState(() => ut());
  return /* @__PURE__ */ Qt.jsx(ot.Provider, { value: e, children: typeof t == "function" ? t(e) : t });
};
function ct(t, e) {
  return typeof t == "function" ? t(...e) : !!t;
}
function ge() {
}
var lt = (t, e) => {
  (t.suspense || t.throwOnError || t.experimental_prefetchInRender) && (e.isReset() || (t.retryOnMount = !1));
}, dt = (t) => {
  b.useEffect(() => {
    t.clearReset();
  }, [t]);
}, ft = ({
  result: t,
  errorResetBoundary: e,
  throwOnError: s,
  query: i
}) => t.isError && !e.isReset() && !t.isFetching && i && ct(s, [t.error, i]), Ae = (t, e) => e.state.data === void 0, pt = (t) => {
  t.suspense && (t.staleTime === void 0 && (t.staleTime = 1e3), typeof t.gcTime == "number" && (t.gcTime = Math.max(t.gcTime, 1e3)));
}, yt = (t, e) => t.isLoading && t.isFetching && !e, Te = (t, e) => (t == null ? void 0 : t.suspense) && e.isPending, be = (t, e, s) => e.fetchOptimistic(t).catch(() => {
  s.clearReset();
});
function Ft({
  queries: t,
  ...e
}, s) {
  const i = A(s), n = at(), u = ht(), a = b.useMemo(
    () => t.map((C) => {
      const R = i.defaultQueryOptions(
        C
      );
      return R._optimisticResults = n ? "isRestoring" : "optimistic", R;
    }),
    [t, i, n]
  );
  a.forEach((C) => {
    pt(C), lt(C, u);
  }), dt(u);
  const [f] = b.useState(
    () => new Pt(
      i,
      a,
      e
    )
  ), [d, c, l] = f.getOptimisticResult(
    a,
    e.combine
  );
  b.useSyncExternalStore(
    b.useCallback(
      (C) => n ? ge : f.subscribe(N.batchCalls(C)),
      [f, n]
    ),
    () => f.getCurrentResult(),
    () => f.getCurrentResult()
  ), b.useEffect(() => {
    f.setQueries(
      a,
      e,
      {
        listeners: !1
      }
    );
  }, [a, e, f]);
  const m = d.some(
    (C, R) => Te(a[R], C)
  ) ? d.flatMap((C, R) => {
    const Q = a[R];
    if (Q) {
      const T = new he(i, Q);
      if (Te(Q, C))
        return be(Q, T, u);
      yt(C, n) && be(Q, T, u);
    }
    return [];
  }) : [];
  if (m.length > 0)
    throw Promise.all(m);
  const O = d.find(
    (C, R) => {
      const Q = a[R];
      return Q && ft({
        result: C,
        errorResetBoundary: u,
        throwOnError: Q.throwOnError,
        query: i.getQueryCache().get(Q.queryHash)
      });
    }
  );
  if (O != null && O.error)
    throw O.error;
  return c(l());
}
function ve(t, e, s) {
  var l, o, m, O, C;
  if (process.env.NODE_ENV !== "production" && (typeof t != "object" || Array.isArray(t)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const i = A(s), n = at(), u = ht(), a = i.defaultQueryOptions(t);
  (o = (l = i.getDefaultOptions().queries) == null ? void 0 : l._experimental_beforeQuery) == null || o.call(
    l,
    a
  ), a._optimisticResults = n ? "isRestoring" : "optimistic", pt(a), lt(a, u), dt(u);
  const f = !i.getQueryCache().get(a.queryHash), [d] = b.useState(
    () => new e(
      i,
      a
    )
  ), c = d.getOptimisticResult(a);
  if (b.useSyncExternalStore(
    b.useCallback(
      (R) => {
        const Q = n ? ge : d.subscribe(N.batchCalls(R));
        return d.updateResult(), Q;
      },
      [d, n]
    ),
    () => d.getCurrentResult(),
    () => d.getCurrentResult()
  ), b.useEffect(() => {
    d.setOptions(a, { listeners: !1 });
  }, [a, d]), Te(a, c))
    throw be(a, d, u);
  if (ft({
    result: c,
    errorResetBoundary: u,
    throwOnError: a.throwOnError,
    query: i.getQueryCache().get(a.queryHash)
  }))
    throw c.error;
  if ((O = (m = i.getDefaultOptions().queries) == null ? void 0 : m._experimental_afterQuery) == null || O.call(
    m,
    a,
    c
  ), a.experimental_prefetchInRender && !Re && yt(c, n)) {
    const R = f ? (
      // Fetch immediately on render in order to ensure `.promise` is resolved even if the component is unmounted
      be(a, d, u)
    ) : (
      // subscribe to the "cache promise" so that we can finalize the currentThenable once data comes in
      (C = i.getQueryCache().get(a.queryHash)) == null ? void 0 : C.promise
    );
    R == null || R.catch(ge).finally(() => {
      d.updateResult();
    });
  }
  return a.notifyOnChangeProps ? c : d.trackResult(c);
}
function Lt(t, e) {
  return ve(t, he, e);
}
function zt(t, e) {
  return process.env.NODE_ENV !== "production" && t.queryFn === qe && console.error("skipToken is not allowed for useSuspenseQuery"), ve(
    {
      ...t,
      enabled: !0,
      suspense: !0,
      throwOnError: Ae,
      placeholderData: void 0
    },
    he,
    e
  );
}
function Bt(t, e) {
  return process.env.NODE_ENV !== "production" && t.queryFn === qe && console.error("skipToken is not allowed for useSuspenseInfiniteQuery"), ve(
    {
      ...t,
      enabled: !0,
      suspense: !0,
      throwOnError: Ae
    },
    rt,
    e
  );
}
function Kt(t, e) {
  return Ft(
    {
      ...t,
      queries: t.queries.map((s) => (process.env.NODE_ENV !== "production" && s.queryFn === qe && console.error("skipToken is not allowed for useSuspenseQueries"), {
        ...s,
        suspense: !0,
        throwOnError: Ae,
        enabled: !0,
        placeholderData: void 0
      }))
    },
    e
  );
}
function Vt(t, e) {
  const s = A(e);
  s.getQueryState(t.queryKey) || s.prefetchQuery(t);
}
function $t(t, e) {
  const s = A(e);
  s.getQueryState(t.queryKey) || s.prefetchInfiniteQuery(t);
}
function Wt(t) {
  return t;
}
function Gt(t) {
  return t;
}
var Jt = ({
  children: t,
  options: e = {},
  state: s,
  queryClient: i
}) => {
  const n = A(i), [u, a] = b.useState(), f = b.useRef(e);
  return f.current = e, b.useMemo(() => {
    if (s) {
      if (typeof s != "object")
        return;
      const d = n.getQueryCache(), c = s.queries || [], l = [], o = [];
      for (const m of c) {
        const O = d.get(m.queryHash);
        if (!O)
          l.push(m);
        else {
          const C = m.state.dataUpdatedAt > O.state.dataUpdatedAt, R = u == null ? void 0 : u.find(
            (Q) => Q.queryHash === m.queryHash
          );
          C && (!R || m.state.dataUpdatedAt > R.state.dataUpdatedAt) && o.push(m);
        }
      }
      l.length > 0 && Je(n, { queries: l }, f.current), o.length > 0 && a(
        (m) => m ? [...m, ...o] : o
      );
    }
  }, [n, u, s]), b.useEffect(() => {
    u && (Je(n, { queries: u }, f.current), a(void 0));
  }, [n, u]), t;
};
function Xt(t, e) {
  const s = A(e), i = s.getQueryCache();
  return b.useSyncExternalStore(
    b.useCallback(
      (n) => i.subscribe(N.batchCalls(n)),
      [i]
    ),
    () => s.isFetching(t),
    () => s.isFetching(t)
  );
}
function Yt(t, e) {
  const s = A(e);
  return Tt(
    { filters: { ...t, status: "pending" } },
    s
  ).length;
}
function Xe(t, e) {
  return t.findAll(e.filters).map(
    (s) => e.select ? e.select(s) : s.state
  );
}
function Tt(t = {}, e) {
  const s = A(e).getMutationCache(), i = b.useRef(t), n = b.useRef(null);
  return n.current || (n.current = Xe(s, t)), b.useEffect(() => {
    i.current = t;
  }), b.useSyncExternalStore(
    b.useCallback(
      (u) => s.subscribe(() => {
        const a = tt(
          n.current,
          Xe(s, i.current)
        );
        n.current !== a && (n.current = a, N.schedule(u));
      }),
      [s]
    ),
    () => n.current,
    () => n.current
  );
}
function Zt(t, e) {
  const s = A(e), [i] = b.useState(
    () => new xt(
      s,
      t
    )
  );
  b.useEffect(() => {
    i.setOptions(t);
  }, [i, t]);
  const n = b.useSyncExternalStore(
    b.useCallback(
      (a) => i.subscribe(N.batchCalls(a)),
      [i]
    ),
    () => i.getCurrentResult(),
    () => i.getCurrentResult()
  ), u = b.useCallback(
    (a, f) => {
      i.mutate(a, f).catch(ge);
    },
    [i]
  );
  if (n.error && ct(i.options.throwOnError, [n.error]))
    throw n.error;
  return { ...n, mutate: u, mutateAsync: n.mutate };
}
function es(t, e) {
  return ve(
    t,
    rt,
    e
  );
}
export {
  ns as CancelledError,
  Jt as HydrationBoundary,
  rt as InfiniteQueryObserver,
  jt as IsRestoringProvider,
  as as Mutation,
  us as MutationCache,
  xt as MutationObserver,
  Pt as QueriesObserver,
  os as Query,
  hs as QueryCache,
  cs as QueryClient,
  ls as QueryClientContext,
  ds as QueryClientProvider,
  Ht as QueryErrorResetBoundary,
  he as QueryObserver,
  It as defaultShouldDehydrateMutation,
  kt as defaultShouldDehydrateQuery,
  _t as dehydrate,
  vt as focusManager,
  Ve as hashKey,
  Je as hydrate,
  Gt as infiniteQueryOptions,
  fs as isCancelledError,
  Re as isServer,
  ps as keepPreviousData,
  ys as matchMutation,
  gs as matchQuery,
  N as notifyManager,
  bs as onlineManager,
  Wt as queryOptions,
  tt as replaceEqualDeep,
  qe as skipToken,
  es as useInfiniteQuery,
  Xt as useIsFetching,
  Yt as useIsMutating,
  at as useIsRestoring,
  Zt as useMutation,
  Tt as useMutationState,
  $t as usePrefetchInfiniteQuery,
  Vt as usePrefetchQuery,
  Ft as useQueries,
  Lt as useQuery,
  A as useQueryClient,
  ht as useQueryErrorResetBoundary,
  Bt as useSuspenseInfiniteQuery,
  Kt as useSuspenseQueries,
  zt as useSuspenseQuery,
  rs as useTheme
};
