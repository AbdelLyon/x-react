var ht = (e) => {
  throw TypeError(e);
};
var gt = (e, t, n) => t.has(e) || ht("Cannot " + n);
var d = (e, t, n) => (gt(e, t, "read from private field"), n ? n.call(e) : t.get(e)), v = (e, t, n) => t.has(e) ? ht("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n), p = (e, t, n, r) => (gt(e, t, "write to private field"), r ? r.call(e, n) : t.set(e, n), n);
/* empty css               */
import { j as fe } from "./jsx-runtime-Dx-03ztt.js";
import { ThemeProvider as un } from "next-themes";
import { useQueryClient as Ct, onlineManager as Tt, QueryClient as cn, QueryClientProvider as fn } from "@tanstack/react-query";
import * as P from "react";
import { useState as dn } from "react";
import { NextUIProvider as hn } from "@nextui-org/react";
const zr = ({
  children: e,
  ...t
}) => /* @__PURE__ */ fe.jsx(
  un,
  {
    defaultTheme: "light",
    attribute: "class",
    disableTransitionOnChange: !0,
    ...t,
    children: e
  }
);
var h = {
  context: void 0,
  registry: void 0,
  effects: void 0,
  done: !1,
  getContextId() {
    return yt(this.context.count);
  },
  getNextContextId() {
    return yt(this.context.count++);
  }
};
function yt(e) {
  const t = String(e), n = t.length - 1;
  return h.context.id + (n ? String.fromCharCode(96 + n) : "") + t;
}
function ge(e) {
  h.context = e;
}
var gn = (e, t) => e === t, _e = Symbol("solid-proxy"), Nt = typeof Proxy == "function", Pt = Symbol("solid-track"), Be = {
  equals: gn
}, kt = Vt, j = 1, Ue = 2, It = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
}, We = {}, m = null, Ze = null, yn = null, w = null, T = null, $ = null, Qe = 0;
function K(e, t) {
  const n = w, r = m, s = e.length === 0, i = t === void 0 ? r : t, o = s ? It : {
    owned: null,
    cleanups: null,
    context: i ? i.context : null,
    owner: i
  }, l = s ? e : () => e(() => C(() => ve(o)));
  m = o, w = null;
  try {
    return V(l, !0);
  } finally {
    w = n, m = r;
  }
}
function E(e, t) {
  t = t ? Object.assign({}, Be, t) : Be;
  const n = {
    value: e,
    observers: null,
    observerSlots: null,
    comparator: t.equals || void 0
  }, r = (s) => (typeof s == "function" && (s = s(n.value)), Lt(n, s));
  return [Dt.bind(n), r];
}
function mn(e, t, n) {
  const r = Ge(e, t, !0, j);
  he(r);
}
function Q(e, t, n) {
  const r = Ge(e, t, !1, j);
  he(r);
}
function Rt(e, t, n) {
  kt = Cn;
  const r = Ge(e, t, !1, j);
  (!n || !n.render) && (r.user = !0), $ ? $.push(r) : he(r);
}
function k(e, t, n) {
  n = n ? Object.assign({}, Be, n) : Be;
  const r = Ge(e, t, !0, 0);
  return r.observers = null, r.observerSlots = null, r.comparator = n.equals || void 0, he(r), Dt.bind(r);
}
function pn(e) {
  return e && typeof e == "object" && "then" in e;
}
function vn(e, t, n) {
  let r, s, i;
  arguments.length === 1 ? (r = !0, s = e, i = {}) : (r = e, s = t, i = {});
  let o = null, l = We, a = null, u = !1, f = "initialValue" in i, c = typeof r == "function" && k(r);
  const g = /* @__PURE__ */ new Set(), [y, S] = (i.storage || E)(i.initialValue), [x, _] = E(void 0), [U, M] = E(void 0, {
    equals: !1
  }), [I, D] = E(f ? "ready" : "unresolved");
  h.context && (a = h.getNextContextId(), i.ssrLoadFrom === "initial" ? l = i.initialValue : h.load && h.has(a) && (l = h.load(a)));
  function R(N, A, O, H) {
    return o === N && (o = null, H !== void 0 && (f = !0), (N === l || A === l) && i.onHydrated && queueMicrotask(
      () => i.onHydrated(H, {
        value: A
      })
    ), l = We, ze(A, O)), A;
  }
  function ze(N, A) {
    V(() => {
      A === void 0 && S(() => N), D(A !== void 0 ? "errored" : f ? "ready" : "unresolved"), _(A);
      for (const O of g.keys())
        O.decrement();
      g.clear();
    }, !1);
  }
  function Xe() {
    const N = An, A = y(), O = x();
    if (O !== void 0 && !o)
      throw O;
    return w && w.user, A;
  }
  function Ye(N = !0) {
    if (N !== !1 && u)
      return;
    u = !1;
    const A = c ? c() : r;
    if (A == null || A === !1) {
      R(o, C(y));
      return;
    }
    const O = l !== We ? l : C(
      () => s(A, {
        value: y(),
        refetching: N
      })
    );
    return pn(O) ? (o = O, "value" in O ? (O.status === "success" ? R(o, O.value, void 0, A) : R(o, void 0, tt(O.value), A), O) : (u = !0, queueMicrotask(() => u = !1), V(() => {
      D(f ? "refreshing" : "pending"), M();
    }, !1), O.then(
      (H) => R(O, H, void 0, A),
      (H) => R(O, void 0, tt(H), A)
    ))) : (R(o, O, void 0, A), O);
  }
  return Object.defineProperties(Xe, {
    state: {
      get: () => I()
    },
    error: {
      get: () => x()
    },
    loading: {
      get() {
        const N = I();
        return N === "pending" || N === "refreshing";
      }
    },
    latest: {
      get() {
        if (!f)
          return Xe();
        const N = x();
        if (N && !o)
          throw N;
        return y();
      }
    }
  }), c ? mn(() => Ye(!1)) : Ye(!1), [
    Xe,
    {
      refetch: Ye,
      mutate: S
    }
  ];
}
function Xr(e) {
  return V(e, !1);
}
function C(e) {
  if (w === null)
    return e();
  const t = w;
  w = null;
  try {
    return e();
  } finally {
    w = t;
  }
}
function Yr(e, t, n) {
  const r = Array.isArray(e);
  let s, i = n && n.defer;
  return (o) => {
    let l;
    if (r) {
      l = Array(e.length);
      for (let u = 0; u < e.length; u++)
        l[u] = e[u]();
    } else
      l = e();
    if (i)
      return i = !1, o;
    const a = C(() => t(l, s, o));
    return s = l, a;
  };
}
function wn(e) {
  Rt(() => C(e));
}
function pe(e) {
  return m === null || (m.cleanups === null ? m.cleanups = [e] : m.cleanups.push(e)), e;
}
function mt() {
  return m;
}
function bn(e, t) {
  const n = m, r = w;
  m = e, w = null;
  try {
    return V(t, !0);
  } catch (s) {
    dt(s);
  } finally {
    m = n, w = r;
  }
}
function Sn(e) {
  const t = w, n = m;
  return Promise.resolve().then(() => {
    w = t, m = n;
    let r;
    return V(e, !1), w = m = null, r ? r.done : void 0;
  });
}
var [En, Wr] = /* @__PURE__ */ E(!1);
function Zr() {
  return [En, Sn];
}
function Jr(e, t) {
  const n = Symbol("context");
  return {
    id: n,
    Provider: Tn(n),
    defaultValue: e
  };
}
function es(e) {
  let t;
  return m && m.context && (t = m.context[e.id]) !== void 0 ? t : e.defaultValue;
}
function Mt(e) {
  const t = k(e), n = k(() => nt(t()));
  return n.toArray = () => {
    const r = n();
    return Array.isArray(r) ? r : r != null ? [r] : [];
  }, n;
}
var An;
function Dt() {
  if (this.sources && this.state)
    if (this.state === j)
      he(this);
    else {
      const e = T;
      T = null, V(() => Fe(this), !1), T = e;
    }
  if (w) {
    const e = this.observers ? this.observers.length : 0;
    w.sources ? (w.sources.push(this), w.sourceSlots.push(e)) : (w.sources = [this], w.sourceSlots = [e]), this.observers ? (this.observers.push(w), this.observerSlots.push(w.sources.length - 1)) : (this.observers = [w], this.observerSlots = [w.sources.length - 1]);
  }
  return this.value;
}
function Lt(e, t, n) {
  let r = e.value;
  return (!e.comparator || !e.comparator(r, t)) && (e.value = t, e.observers && e.observers.length && V(() => {
    for (let s = 0; s < e.observers.length; s += 1) {
      const i = e.observers[s], o = Ze && Ze.running;
      o && Ze.disposed.has(i), (o ? !i.tState : !i.state) && (i.pure ? T.push(i) : $.push(i), i.observers && $t(i)), o || (i.state = j);
    }
    if (T.length > 1e6)
      throw T = [], new Error();
  }, !1)), t;
}
function he(e) {
  if (!e.fn)
    return;
  ve(e);
  const t = Qe;
  On(
    e,
    e.value,
    t
  );
}
function On(e, t, n) {
  let r;
  const s = m, i = w;
  w = m = e;
  try {
    r = e.fn(t);
  } catch (o) {
    return e.pure && (e.state = j, e.owned && e.owned.forEach(ve), e.owned = null), e.updatedAt = n + 1, dt(o);
  } finally {
    w = i, m = s;
  }
  (!e.updatedAt || e.updatedAt <= n) && (e.updatedAt != null && "observers" in e ? Lt(e, r) : e.value = r, e.updatedAt = n);
}
function Ge(e, t, n, r = j, s) {
  const i = {
    fn: e,
    state: r,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: m,
    context: m ? m.context : null,
    pure: n
  };
  return m === null || m !== It && (m.owned ? m.owned.push(i) : m.owned = [i]), i;
}
function qe(e) {
  if (e.state === 0)
    return;
  if (e.state === Ue)
    return Fe(e);
  if (e.suspense && C(e.suspense.inFallback))
    return e.suspense.effects.push(e);
  const t = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < Qe); )
    e.state && t.push(e);
  for (let n = t.length - 1; n >= 0; n--)
    if (e = t[n], e.state === j)
      he(e);
    else if (e.state === Ue) {
      const r = T;
      T = null, V(() => Fe(e, t[0]), !1), T = r;
    }
}
function V(e, t) {
  if (T)
    return e();
  let n = !1;
  t || (T = []), $ ? n = !0 : $ = [], Qe++;
  try {
    const r = e();
    return xn(n), r;
  } catch (r) {
    n || ($ = null), T = null, dt(r);
  }
}
function xn(e) {
  if (T && (Vt(T), T = null), e)
    return;
  const t = $;
  $ = null, t.length && V(() => kt(t), !1);
}
function Vt(e) {
  for (let t = 0; t < e.length; t++)
    qe(e[t]);
}
function Cn(e) {
  let t, n = 0;
  for (t = 0; t < e.length; t++) {
    const r = e[t];
    r.user ? e[n++] = r : qe(r);
  }
  if (h.context) {
    if (h.count) {
      h.effects || (h.effects = []), h.effects.push(...e.slice(0, n));
      return;
    }
    ge();
  }
  for (h.effects && (h.done || !h.count) && (e = [...h.effects, ...e], n += h.effects.length, delete h.effects), t = 0; t < n; t++)
    qe(e[t]);
}
function Fe(e, t) {
  e.state = 0;
  for (let n = 0; n < e.sources.length; n += 1) {
    const r = e.sources[n];
    if (r.sources) {
      const s = r.state;
      s === j ? r !== t && (!r.updatedAt || r.updatedAt < Qe) && qe(r) : s === Ue && Fe(r, t);
    }
  }
}
function $t(e) {
  for (let t = 0; t < e.observers.length; t += 1) {
    const n = e.observers[t];
    n.state || (n.state = Ue, n.pure ? T.push(n) : $.push(n), n.observers && $t(n));
  }
}
function ve(e) {
  let t;
  if (e.sources)
    for (; e.sources.length; ) {
      const n = e.sources.pop(), r = e.sourceSlots.pop(), s = n.observers;
      if (s && s.length) {
        const i = s.pop(), o = n.observerSlots.pop();
        r < s.length && (i.sourceSlots[o] = r, s[r] = i, n.observerSlots[r] = o);
      }
    }
  if (e.tOwned) {
    for (t = e.tOwned.length - 1; t >= 0; t--)
      ve(e.tOwned[t]);
    delete e.tOwned;
  }
  if (e.owned) {
    for (t = e.owned.length - 1; t >= 0; t--)
      ve(e.owned[t]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (t = e.cleanups.length - 1; t >= 0; t--)
      e.cleanups[t]();
    e.cleanups = null;
  }
  e.state = 0;
}
function tt(e) {
  return e instanceof Error ? e : new Error(typeof e == "string" ? e : "Unknown error", {
    cause: e
  });
}
function dt(e, t = m) {
  throw tt(e);
}
function nt(e) {
  if (typeof e == "function" && !e.length)
    return nt(e());
  if (Array.isArray(e)) {
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const r = nt(e[n]);
      Array.isArray(r) ? t.push.apply(t, r) : t.push(r);
    }
    return t;
  }
  return e;
}
function Tn(e, t) {
  return function(r) {
    let s;
    return Q(
      () => s = C(() => (m.context = {
        ...m.context,
        [e]: r.value
      }, Mt(() => r.children))),
      void 0
    ), s;
  };
}
var rt = Symbol("fallback");
function Ke(e) {
  for (let t = 0; t < e.length; t++)
    e[t]();
}
function Nn(e, t, n = {}) {
  let r = [], s = [], i = [], o = 0, l = t.length > 1 ? [] : null;
  return pe(() => Ke(i)), () => {
    let a = e() || [], u = a.length, f, c;
    return a[Pt], C(() => {
      let y, S, x, _, U, M, I, D, R;
      if (u === 0)
        o !== 0 && (Ke(i), i = [], r = [], s = [], o = 0, l && (l = [])), n.fallback && (r = [rt], s[0] = K((ze) => (i[0] = ze, n.fallback())), o = 1);
      else if (o === 0) {
        for (s = new Array(u), c = 0; c < u; c++)
          r[c] = a[c], s[c] = K(g);
        o = u;
      } else {
        for (x = new Array(u), _ = new Array(u), l && (U = new Array(u)), M = 0, I = Math.min(o, u); M < I && r[M] === a[M]; M++)
          ;
        for (I = o - 1, D = u - 1; I >= M && D >= M && r[I] === a[D]; I--, D--)
          x[D] = s[I], _[D] = i[I], l && (U[D] = l[I]);
        for (y = /* @__PURE__ */ new Map(), S = new Array(D + 1), c = D; c >= M; c--)
          R = a[c], f = y.get(R), S[c] = f === void 0 ? -1 : f, y.set(R, c);
        for (f = M; f <= I; f++)
          R = r[f], c = y.get(R), c !== void 0 && c !== -1 ? (x[c] = s[f], _[c] = i[f], l && (U[c] = l[f]), c = S[c], y.set(R, c)) : i[f]();
        for (c = M; c < u; c++)
          c in x ? (s[c] = x[c], i[c] = _[c], l && (l[c] = U[c], l[c](c))) : s[c] = K(g);
        s = s.slice(0, o = u), r = a.slice(0);
      }
      return s;
    });
    function g(y) {
      if (i[c] = y, l) {
        const [S, x] = E(c);
        return l[c] = x, t(a[c], S);
      }
      return t(a[c]);
    }
  };
}
function Pn(e, t, n = {}) {
  let r = [], s = [], i = [], o = [], l = 0, a;
  return pe(() => Ke(i)), () => {
    const u = e() || [], f = u.length;
    return u[Pt], C(() => {
      if (f === 0)
        return l !== 0 && (Ke(i), i = [], r = [], s = [], l = 0, o = []), n.fallback && (r = [rt], s[0] = K((g) => (i[0] = g, n.fallback())), l = 1), s;
      for (r[0] === rt && (i[0](), i = [], r = [], s = [], l = 0), a = 0; a < f; a++)
        a < r.length && r[a] !== u[a] ? o[a](() => u[a]) : a >= r.length && (s[a] = K(c));
      for (; a < r.length; a++)
        i[a]();
      return l = o.length = i.length = f, r = u.slice(0), s = s.slice(0, l);
    });
    function c(g) {
      i[a] = g;
      const [y, S] = E(u[a]);
      return o[a] = S, t(y, a);
    }
  };
}
function jt(e, t) {
  return C(() => e(t || {}));
}
function Me() {
  return !0;
}
var st = {
  get(e, t, n) {
    return t === _e ? n : e.get(t);
  },
  has(e, t) {
    return t === _e ? !0 : e.has(t);
  },
  set: Me,
  deleteProperty: Me,
  getOwnPropertyDescriptor(e, t) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return e.get(t);
      },
      set: Me,
      deleteProperty: Me
    };
  },
  ownKeys(e) {
    return e.keys();
  }
};
function Je(e) {
  return (e = typeof e == "function" ? e() : e) ? e : {};
}
function kn() {
  for (let e = 0, t = this.length; e < t; ++e) {
    const n = this[e]();
    if (n !== void 0)
      return n;
  }
}
function _t(...e) {
  let t = !1;
  for (let o = 0; o < e.length; o++) {
    const l = e[o];
    t = t || !!l && _e in l, e[o] = typeof l == "function" ? (t = !0, k(l)) : l;
  }
  if (Nt && t)
    return new Proxy(
      {
        get(o) {
          for (let l = e.length - 1; l >= 0; l--) {
            const a = Je(e[l])[o];
            if (a !== void 0)
              return a;
          }
        },
        has(o) {
          for (let l = e.length - 1; l >= 0; l--)
            if (o in Je(e[l]))
              return !0;
          return !1;
        },
        keys() {
          const o = [];
          for (let l = 0; l < e.length; l++)
            o.push(...Object.keys(Je(e[l])));
          return [...new Set(o)];
        }
      },
      st
    );
  const n = {}, r = /* @__PURE__ */ Object.create(null);
  for (let o = e.length - 1; o >= 0; o--) {
    const l = e[o];
    if (!l)
      continue;
    const a = Object.getOwnPropertyNames(l);
    for (let u = a.length - 1; u >= 0; u--) {
      const f = a[u];
      if (f === "__proto__" || f === "constructor")
        continue;
      const c = Object.getOwnPropertyDescriptor(l, f);
      if (!r[f])
        r[f] = c.get ? {
          enumerable: !0,
          configurable: !0,
          get: kn.bind(n[f] = [c.get.bind(l)])
        } : c.value !== void 0 ? c : void 0;
      else {
        const g = n[f];
        g && (c.get ? g.push(c.get.bind(l)) : c.value !== void 0 && g.push(() => c.value));
      }
    }
  }
  const s = {}, i = Object.keys(r);
  for (let o = i.length - 1; o >= 0; o--) {
    const l = i[o], a = r[l];
    a && a.get ? Object.defineProperty(s, l, a) : s[l] = a ? a.value : void 0;
  }
  return s;
}
function In(e, ...t) {
  if (Nt && _e in e) {
    const s = new Set(t.length > 1 ? t.flat() : t[0]), i = t.map((o) => new Proxy(
      {
        get(l) {
          return o.includes(l) ? e[l] : void 0;
        },
        has(l) {
          return o.includes(l) && l in e;
        },
        keys() {
          return o.filter((l) => l in e);
        }
      },
      st
    ));
    return i.push(
      new Proxy(
        {
          get(o) {
            return s.has(o) ? void 0 : e[o];
          },
          has(o) {
            return s.has(o) ? !1 : o in e;
          },
          keys() {
            return Object.keys(e).filter((o) => !s.has(o));
          }
        },
        st
      )
    ), i;
  }
  const n = {}, r = t.map(() => ({}));
  for (const s of Object.getOwnPropertyNames(e)) {
    const i = Object.getOwnPropertyDescriptor(e, s), o = !i.get && !i.set && i.enumerable && i.writable && i.configurable;
    let l = !1, a = 0;
    for (const u of t)
      u.includes(s) && (l = !0, o ? r[a][s] = i.value : Object.defineProperty(r[a], s, i)), ++a;
    l || (o ? n[s] = i.value : Object.defineProperty(n, s, i));
  }
  return [...r, n];
}
function Bt(e) {
  let t, n;
  const r = (s) => {
    const i = h.context;
    if (i) {
      const [l, a] = E();
      h.count || (h.count = 0), h.count++, (n || (n = e())).then((u) => {
        !h.done && ge(i), h.count--, a(() => u.default), ge();
      }), t = l;
    } else if (!t) {
      const [l] = vn(() => (n || (n = e())).then((a) => a.default));
      t = l;
    }
    let o;
    return k(
      () => (o = t()) ? C(() => {
        if (!i || h.done)
          return o(s);
        const l = h.context;
        ge(i);
        const a = o(s);
        return ge(l), a;
      }) : ""
    );
  };
  return r.preload = () => n || ((n = e()).then((s) => t = () => s.default), n), r;
}
var Rn = 0;
function ts() {
  return h.context ? h.getNextContextId() : `cl-${Rn++}`;
}
var Ut = (e) => `Stale read from <${e}>.`;
function ns(e) {
  const t = "fallback" in e && {
    fallback: () => e.fallback
  };
  return k(Nn(() => e.each, e.children, t || void 0));
}
function rs(e) {
  const t = "fallback" in e && {
    fallback: () => e.fallback
  };
  return k(Pn(() => e.each, e.children, t || void 0));
}
function ss(e) {
  const t = e.keyed, n = k(() => e.when, void 0, {
    equals: (r, s) => t ? r === s : !r == !s
  });
  return k(
    () => {
      const r = n();
      if (r) {
        const s = e.children;
        return typeof s == "function" && s.length > 0 ? C(
          () => s(
            t ? r : () => {
              if (!C(n))
                throw Ut("Show");
              return e.when;
            }
          )
        ) : s;
      }
      return e.fallback;
    },
    void 0,
    void 0
  );
}
function is(e) {
  let t = !1;
  const n = (i, o) => (t ? i[1] === o[1] : !i[1] == !o[1]) && i[2] === o[2], r = Mt(() => e.children), s = k(
    () => {
      let i = r();
      Array.isArray(i) || (i = [i]);
      for (let o = 0; o < i.length; o++) {
        const l = i[o].when;
        if (l)
          return t = !!i[o].keyed, [o, l, i[o]];
      }
      return [-1];
    },
    void 0,
    {
      equals: n
    }
  );
  return k(
    () => {
      const [i, o, l] = s();
      if (i < 0)
        return e.fallback;
      const a = l.children;
      return typeof a == "function" && a.length > 0 ? C(
        () => a(
          t ? o : () => {
            if (C(s)[0] !== i)
              throw Ut("Match");
            return l.when;
          }
        )
      ) : a;
    },
    void 0,
    void 0
  );
}
function os(e) {
  return e;
}
var Mn = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "hidden",
  "indeterminate",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected"
], Dn = /* @__PURE__ */ new Set([
  "className",
  "value",
  "readOnly",
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  ...Mn
]), Ln = /* @__PURE__ */ new Set([
  "innerHTML",
  "textContent",
  "innerText",
  "children"
]), Vn = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), $n = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  class: "className",
  formnovalidate: {
    $: "formNoValidate",
    BUTTON: 1,
    INPUT: 1
  },
  ismap: {
    $: "isMap",
    IMG: 1
  },
  nomodule: {
    $: "noModule",
    SCRIPT: 1
  },
  playsinline: {
    $: "playsInline",
    VIDEO: 1
  },
  readonly: {
    $: "readOnly",
    INPUT: 1,
    TEXTAREA: 1
  }
});
function jn(e, t) {
  const n = $n[e];
  return typeof n == "object" ? n[t] ? n.$ : void 0 : n;
}
var _n = /* @__PURE__ */ new Set([
  "beforeinput",
  "click",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
]), Bn = /* @__PURE__ */ new Set([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animate",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "circle",
  "clipPath",
  "color-profile",
  "cursor",
  "defs",
  "desc",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feDropShadow",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "font",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignObject",
  "g",
  "glyph",
  "glyphRef",
  "hkern",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "missing-glyph",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "set",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "textPath",
  "tref",
  "tspan",
  "use",
  "view",
  "vkern"
]), Un = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function qn(e, t, n) {
  let r = n.length, s = t.length, i = r, o = 0, l = 0, a = t[s - 1].nextSibling, u = null;
  for (; o < s || l < i; ) {
    if (t[o] === n[l]) {
      o++, l++;
      continue;
    }
    for (; t[s - 1] === n[i - 1]; )
      s--, i--;
    if (s === o) {
      const f = i < r ? l ? n[l - 1].nextSibling : n[i - l] : a;
      for (; l < i; )
        e.insertBefore(n[l++], f);
    } else if (i === l)
      for (; o < s; )
        (!u || !u.has(t[o])) && t[o].remove(), o++;
    else if (t[o] === n[i - 1] && n[l] === t[s - 1]) {
      const f = t[--s].nextSibling;
      e.insertBefore(n[l++], t[o++].nextSibling), e.insertBefore(n[--i], f), t[s] = n[i];
    } else {
      if (!u) {
        u = /* @__PURE__ */ new Map();
        let c = l;
        for (; c < i; )
          u.set(n[c], c++);
      }
      const f = u.get(t[o]);
      if (f != null)
        if (l < f && f < i) {
          let c = o, g = 1, y;
          for (; ++c < s && c < i && !((y = u.get(t[c])) == null || y !== f + g); )
            g++;
          if (g > f - l) {
            const S = t[o];
            for (; l < f; )
              e.insertBefore(n[l++], S);
          } else
            e.replaceChild(n[l++], t[o++]);
        } else
          o++;
      else
        t[o++].remove();
    }
  }
}
var ye = "_$DX_DELEGATE";
function qt(e, t, n, r = {}) {
  let s;
  return K((i) => {
    s = i, t === document ? e() : ot(t, e(), t.firstChild ? null : void 0, n);
  }, r.owner), () => {
    s(), t.textContent = "";
  };
}
function ls(e, t, n) {
  let r;
  const s = () => {
    const o = document.createElement("template");
    return o.innerHTML = e, o.content.firstChild;
  }, i = () => (r || (r = s())).cloneNode(!0);
  return i.cloneNode = i, i;
}
function Fn(e, t = window.document) {
  const n = t[ye] || (t[ye] = /* @__PURE__ */ new Set());
  for (let r = 0, s = e.length; r < s; r++) {
    const i = e[r];
    n.has(i) || (n.add(i), t.addEventListener(i, Ft));
  }
}
function as(e = window.document) {
  if (e[ye]) {
    for (let t of e[ye].keys())
      e.removeEventListener(t, Ft);
    delete e[ye];
  }
}
function it(e, t, n) {
  G(e) || (n == null ? e.removeAttribute(t) : e.setAttribute(t, n));
}
function Kn(e, t, n, r) {
  G(e) || (r == null ? e.removeAttributeNS(t, n) : e.setAttributeNS(t, n, r));
}
function Qn(e, t, n) {
  G(e) || (n ? e.setAttribute(t, "") : e.removeAttribute(t));
}
function Gn(e, t) {
  G(e) || (t == null ? e.removeAttribute("class") : e.className = t);
}
function Hn(e, t, n, r) {
  if (r)
    Array.isArray(n) ? (e[`$$${t}`] = n[0], e[`$$${t}Data`] = n[1]) : e[`$$${t}`] = n;
  else if (Array.isArray(n)) {
    const s = n[0];
    e.addEventListener(t, n[0] = (i) => s.call(e, n[1], i));
  } else
    e.addEventListener(t, n, typeof n != "function" && n);
}
function zn(e, t, n = {}) {
  const r = Object.keys(t || {}), s = Object.keys(n);
  let i, o;
  for (i = 0, o = s.length; i < o; i++) {
    const l = s[i];
    !l || l === "undefined" || t[l] || (pt(e, l, !1), delete n[l]);
  }
  for (i = 0, o = r.length; i < o; i++) {
    const l = r[i], a = !!t[l];
    !l || l === "undefined" || n[l] === a || !a || (pt(e, l, !0), n[l] = a);
  }
  return n;
}
function Xn(e, t, n) {
  if (!t)
    return n ? it(e, "style") : t;
  const r = e.style;
  if (typeof t == "string")
    return r.cssText = t;
  typeof n == "string" && (r.cssText = n = void 0), n || (n = {}), t || (t = {});
  let s, i;
  for (i in n)
    t[i] == null && r.removeProperty(i), delete n[i];
  for (i in t)
    s = t[i], s !== n[i] && (r.setProperty(i, s), n[i] = s);
  return n;
}
function Yn(e, t = {}, n, r) {
  const s = {};
  return r || Q(
    () => s.children = we(e, t.children, s.children)
  ), Q(() => typeof t.ref == "function" && Wn(t.ref, e)), Q(() => Zn(e, t, n, !0, s, !0)), s;
}
function Wn(e, t, n) {
  return C(() => e(t, n));
}
function ot(e, t, n, r) {
  if (n !== void 0 && !r && (r = []), typeof t != "function")
    return we(e, t, r, n);
  Q((s) => we(e, t(), s, n), r);
}
function Zn(e, t, n, r, s = {}, i = !1) {
  t || (t = {});
  for (const o in s)
    if (!(o in t)) {
      if (o === "children")
        continue;
      s[o] = vt(e, o, null, s[o], n, i, t);
    }
  for (const o in t) {
    if (o === "children")
      continue;
    const l = t[o];
    s[o] = vt(e, o, l, s[o], n, i, t);
  }
}
function Jn(e) {
  let t, n;
  return !G() || !(t = h.registry.get(n = tr())) ? e() : (h.completed && h.completed.add(t), h.registry.delete(n), t);
}
function G(e) {
  return !!h.context && !h.done && (!e || e.isConnected);
}
function er(e) {
  return e.toLowerCase().replace(/-([a-z])/g, (t, n) => n.toUpperCase());
}
function pt(e, t, n) {
  const r = t.trim().split(/\s+/);
  for (let s = 0, i = r.length; s < i; s++)
    e.classList.toggle(r[s], n);
}
function vt(e, t, n, r, s, i, o) {
  let l, a, u, f, c;
  if (t === "style")
    return Xn(e, n, r);
  if (t === "classList")
    return zn(e, n, r);
  if (n === r)
    return r;
  if (t === "ref")
    i || n(e);
  else if (t.slice(0, 3) === "on:") {
    const g = t.slice(3);
    r && e.removeEventListener(g, r, typeof r != "function" && r), n && e.addEventListener(g, n, typeof n != "function" && n);
  } else if (t.slice(0, 10) === "oncapture:") {
    const g = t.slice(10);
    r && e.removeEventListener(g, r, !0), n && e.addEventListener(g, n, !0);
  } else if (t.slice(0, 2) === "on") {
    const g = t.slice(2).toLowerCase(), y = _n.has(g);
    if (!y && r) {
      const S = Array.isArray(r) ? r[0] : r;
      e.removeEventListener(g, S);
    }
    (y || n) && (Hn(e, g, n, y), y && Fn([g]));
  } else if (t.slice(0, 5) === "attr:")
    it(e, t.slice(5), n);
  else if (t.slice(0, 5) === "bool:")
    Qn(e, t.slice(5), n);
  else if ((c = t.slice(0, 5) === "prop:") || (u = Ln.has(t)) || !s && ((f = jn(t, e.tagName)) || (a = Dn.has(t))) || (l = e.nodeName.includes("-") || "is" in o)) {
    if (c)
      t = t.slice(5), a = !0;
    else if (G(e))
      return n;
    t === "class" || t === "className" ? Gn(e, n) : l && !a && !u ? e[er(t)] = n : e[f || t] = n;
  } else {
    const g = s && t.indexOf(":") > -1 && Un[t.split(":")[0]];
    g ? Kn(e, g, t, n) : it(e, Vn[t] || t, n);
  }
  return n;
}
function Ft(e) {
  if (h.registry && h.events && h.events.find(([a, u]) => u === e))
    return;
  let t = e.target;
  const n = `$$${e.type}`, r = e.target, s = e.currentTarget, i = (a) => Object.defineProperty(e, "target", {
    configurable: !0,
    value: a
  }), o = () => {
    const a = t[n];
    if (a && !t.disabled) {
      const u = t[`${n}Data`];
      if (u !== void 0 ? a.call(t, u, e) : a.call(t, e), e.cancelBubble)
        return;
    }
    return t.host && typeof t.host != "string" && !t.host._$host && t.contains(e.target) && i(t.host), !0;
  }, l = () => {
    for (; o() && (t = t._$host || t.parentNode || t.host); )
      ;
  };
  if (Object.defineProperty(e, "currentTarget", {
    configurable: !0,
    get() {
      return t || document;
    }
  }), h.registry && !h.done && (h.done = _$HY.done = !0), e.composedPath) {
    const a = e.composedPath();
    i(a[0]);
    for (let u = 0; u < a.length - 2 && (t = a[u], !!o()); u++) {
      if (t._$host) {
        t = t._$host, l();
        break;
      }
      if (t.parentNode === s)
        break;
    }
  } else
    l();
  i(r);
}
function we(e, t, n, r, s) {
  const i = G(e);
  if (i) {
    !n && (n = [...e.childNodes]);
    let a = [];
    for (let u = 0; u < n.length; u++) {
      const f = n[u];
      f.nodeType === 8 && f.data.slice(0, 2) === "!$" ? f.remove() : a.push(f);
    }
    n = a;
  }
  for (; typeof n == "function"; )
    n = n();
  if (t === n)
    return n;
  const o = typeof t, l = r !== void 0;
  if (e = l && n[0] && n[0].parentNode || e, o === "string" || o === "number") {
    if (i || o === "number" && (t = t.toString(), t === n))
      return n;
    if (l) {
      let a = n[0];
      a && a.nodeType === 3 ? a.data !== t && (a.data = t) : a = document.createTextNode(t), n = z(e, n, r, a);
    } else
      n !== "" && typeof n == "string" ? n = e.firstChild.data = t : n = e.textContent = t;
  } else if (t == null || o === "boolean") {
    if (i)
      return n;
    n = z(e, n, r);
  } else {
    if (o === "function")
      return Q(() => {
        let a = t();
        for (; typeof a == "function"; )
          a = a();
        n = we(e, a, n, r);
      }), () => n;
    if (Array.isArray(t)) {
      const a = [], u = n && Array.isArray(n);
      if (lt(a, t, n, s))
        return Q(() => n = we(e, a, n, r, !0)), () => n;
      if (i) {
        if (!a.length)
          return n;
        if (r === void 0)
          return n = [...e.childNodes];
        let f = a[0];
        if (f.parentNode !== e)
          return n;
        const c = [f];
        for (; (f = f.nextSibling) !== r; )
          c.push(f);
        return n = c;
      }
      if (a.length === 0) {
        if (n = z(e, n, r), l)
          return n;
      } else u ? n.length === 0 ? wt(e, a, r) : qn(e, n, a) : (n && z(e), wt(e, a));
      n = a;
    } else if (t.nodeType) {
      if (i && t.parentNode)
        return n = l ? [t] : t;
      if (Array.isArray(n)) {
        if (l)
          return n = z(e, n, r, t);
        z(e, n, null, t);
      } else n == null || n === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      n = t;
    }
  }
  return n;
}
function lt(e, t, n, r) {
  let s = !1;
  for (let i = 0, o = t.length; i < o; i++) {
    let l = t[i], a = n && n[e.length], u;
    if (!(l == null || l === !0 || l === !1))
      if ((u = typeof l) == "object" && l.nodeType)
        e.push(l);
      else if (Array.isArray(l))
        s = lt(e, l, a) || s;
      else if (u === "function")
        if (r) {
          for (; typeof l == "function"; )
            l = l();
          s = lt(
            e,
            Array.isArray(l) ? l : [l],
            Array.isArray(a) ? a : [a]
          ) || s;
        } else
          e.push(l), s = !0;
      else {
        const f = String(l);
        a && a.nodeType === 3 && a.data === f ? e.push(a) : e.push(document.createTextNode(f));
      }
  }
  return s;
}
function wt(e, t, n = null) {
  for (let r = 0, s = t.length; r < s; r++)
    e.insertBefore(t[r], n);
}
function z(e, t, n, r) {
  if (n === void 0)
    return e.textContent = "";
  const s = r || document.createTextNode("");
  if (t.length) {
    let i = !1;
    for (let o = t.length - 1; o >= 0; o--) {
      const l = t[o];
      if (s !== l) {
        const a = l.parentNode === e;
        !i && !o ? a ? e.replaceChild(s, l) : e.insertBefore(s, n) : a && l.remove();
      } else
        i = !0;
    }
  } else
    e.insertBefore(s, n);
  return [s];
}
function tr() {
  return h.getNextContextId();
}
var nr = "http://www.w3.org/2000/svg";
function Kt(e, t = !1) {
  return t ? document.createElementNS(nr, e) : document.createElement(e);
}
function us(e) {
  const { useShadow: t } = e, n = document.createTextNode(""), r = () => e.mount || document.body, s = mt();
  let i, o = !!h.context;
  return Rt(
    () => {
      o && (mt().user = o = !1), i || (i = bn(s, () => k(() => e.children)));
      const l = r();
      if (l instanceof HTMLHeadElement) {
        const [a, u] = E(!1), f = () => u(!0);
        K((c) => ot(l, () => a() ? c() : i(), null)), pe(f);
      } else {
        const a = Kt(e.isSVG ? "g" : "div", e.isSVG), u = t && a.attachShadow ? a.attachShadow({
          mode: "open"
        }) : a;
        Object.defineProperty(a, "_$host", {
          get() {
            return n.parentNode;
          },
          configurable: !0
        }), ot(u, i), l.appendChild(a), e.ref && e.ref(a), pe(() => l.removeChild(a));
      }
    },
    void 0,
    {
      render: !o
    }
  ), n;
}
function cs(e) {
  const [t, n] = In(e, ["component"]), r = k(() => t.component);
  return k(() => {
    const s = r();
    switch (typeof s) {
      case "function":
        return C(() => s(n));
      case "string":
        const i = Bn.has(s), o = h.context ? Jn() : Kt(s, i);
        return Yn(o, n, i), o;
    }
  });
}
var rr = class {
  constructor() {
    this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
  }
  set(e, t) {
    this.keyToValue.set(e, t), this.valueToKey.set(t, e);
  }
  getByKey(e) {
    return this.keyToValue.get(e);
  }
  getByValue(e) {
    return this.valueToKey.get(e);
  }
  clear() {
    this.keyToValue.clear(), this.valueToKey.clear();
  }
}, Qt = class {
  constructor(e) {
    this.generateIdentifier = e, this.kv = new rr();
  }
  register(e, t) {
    this.kv.getByValue(e) || (t || (t = this.generateIdentifier(e)), this.kv.set(t, e));
  }
  clear() {
    this.kv.clear();
  }
  getIdentifier(e) {
    return this.kv.getByValue(e);
  }
  getValue(e) {
    return this.kv.getByKey(e);
  }
}, sr = class extends Qt {
  constructor() {
    super((e) => e.name), this.classToAllowedProps = /* @__PURE__ */ new Map();
  }
  register(e, t) {
    typeof t == "object" ? (t.allowProps && this.classToAllowedProps.set(e, t.allowProps), super.register(e, t.identifier)) : super.register(e, t);
  }
  getAllowedProps(e) {
    return this.classToAllowedProps.get(e);
  }
};
function ir(e) {
  if ("values" in Object)
    return Object.values(e);
  const t = [];
  for (const n in e)
    e.hasOwnProperty(n) && t.push(e[n]);
  return t;
}
function or(e, t) {
  const n = ir(e);
  if ("find" in n)
    return n.find(t);
  const r = n;
  for (let s = 0; s < r.length; s++) {
    const i = r[s];
    if (t(i))
      return i;
  }
}
function de(e, t) {
  Object.entries(e).forEach(([n, r]) => t(r, n));
}
function je(e, t) {
  return e.indexOf(t) !== -1;
}
function bt(e, t) {
  for (let n = 0; n < e.length; n++) {
    const r = e[n];
    if (t(r))
      return r;
  }
}
var lr = class {
  constructor() {
    this.transfomers = {};
  }
  register(e) {
    this.transfomers[e.name] = e;
  }
  findApplicable(e) {
    return or(this.transfomers, (t) => t.isApplicable(e));
  }
  findByName(e) {
    return this.transfomers[e];
  }
}, ar = (e) => Object.prototype.toString.call(e).slice(8, -1), Gt = (e) => typeof e > "u", ur = (e) => e === null, be = (e) => typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype, at = (e) => be(e) && Object.keys(e).length === 0, B = (e) => Array.isArray(e), cr = (e) => typeof e == "string", fr = (e) => typeof e == "number" && !isNaN(e), dr = (e) => typeof e == "boolean", hr = (e) => e instanceof RegExp, Se = (e) => e instanceof Map, Ee = (e) => e instanceof Set, Ht = (e) => ar(e) === "Symbol", gr = (e) => e instanceof Date && !isNaN(e.valueOf()), yr = (e) => e instanceof Error, St = (e) => typeof e == "number" && isNaN(e), mr = (e) => dr(e) || ur(e) || Gt(e) || fr(e) || cr(e) || Ht(e), pr = (e) => typeof e == "bigint", vr = (e) => e === 1 / 0 || e === -1 / 0, wr = (e) => ArrayBuffer.isView(e) && !(e instanceof DataView), br = (e) => e instanceof URL, zt = (e) => e.replace(/\./g, "\\."), et = (e) => e.map(String).map(zt).join("."), me = (e) => {
  const t = [];
  let n = "";
  for (let s = 0; s < e.length; s++) {
    let i = e.charAt(s);
    if (i === "\\" && e.charAt(s + 1) === ".") {
      n += ".", s++;
      continue;
    }
    if (i === ".") {
      t.push(n), n = "";
      continue;
    }
    n += i;
  }
  const r = n;
  return t.push(r), t;
};
function L(e, t, n, r) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: r
  };
}
var Xt = [
  L(Gt, "undefined", () => null, () => {
  }),
  L(pr, "bigint", (e) => e.toString(), (e) => typeof BigInt < "u" ? BigInt(e) : e),
  L(gr, "Date", (e) => e.toISOString(), (e) => new Date(e)),
  L(yr, "Error", (e, t) => {
    const n = {
      name: e.name,
      message: e.message
    };
    return t.allowedErrorProps.forEach((r) => {
      n[r] = e[r];
    }), n;
  }, (e, t) => {
    const n = new Error(e.message);
    return n.name = e.name, n.stack = e.stack, t.allowedErrorProps.forEach((r) => {
      n[r] = e[r];
    }), n;
  }),
  L(hr, "regexp", (e) => "" + e, (e) => {
    const t = e.slice(1, e.lastIndexOf("/")), n = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, n);
  }),
  L(
    Ee,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    (e) => [...e.values()],
    (e) => new Set(e)
  ),
  L(Se, "map", (e) => [...e.entries()], (e) => new Map(e)),
  L((e) => St(e) || vr(e), "number", (e) => St(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity", Number),
  L((e) => e === 0 && 1 / e === -1 / 0, "number", () => "-0", Number),
  L(br, "URL", (e) => e.toString(), (e) => new URL(e))
];
function He(e, t, n, r) {
  return {
    isApplicable: e,
    annotation: t,
    transform: n,
    untransform: r
  };
}
var Yt = He((e, t) => Ht(e) ? !!t.symbolRegistry.getIdentifier(e) : !1, (e, t) => ["symbol", t.symbolRegistry.getIdentifier(e)], (e) => e.description, (e, t, n) => {
  const r = n.symbolRegistry.getValue(t[1]);
  if (!r)
    throw new Error("Trying to deserialize unknown symbol");
  return r;
}), Sr = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce((e, t) => (e[t.name] = t, e), {}), Wt = He(wr, (e) => ["typed-array", e.constructor.name], (e) => [...e], (e, t) => {
  const n = Sr[t[1]];
  if (!n)
    throw new Error("Trying to deserialize unknown typed array");
  return new n(e);
});
function Zt(e, t) {
  return e != null && e.constructor ? !!t.classRegistry.getIdentifier(e.constructor) : !1;
}
var Jt = He(Zt, (e, t) => ["class", t.classRegistry.getIdentifier(e.constructor)], (e, t) => {
  const n = t.classRegistry.getAllowedProps(e.constructor);
  if (!n)
    return { ...e };
  const r = {};
  return n.forEach((s) => {
    r[s] = e[s];
  }), r;
}, (e, t, n) => {
  const r = n.classRegistry.getValue(t[1]);
  if (!r)
    throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
  return Object.assign(Object.create(r.prototype), e);
}), en = He((e, t) => !!t.customTransformerRegistry.findApplicable(e), (e, t) => ["custom", t.customTransformerRegistry.findApplicable(e).name], (e, t) => t.customTransformerRegistry.findApplicable(e).serialize(e), (e, t, n) => {
  const r = n.customTransformerRegistry.findByName(t[1]);
  if (!r)
    throw new Error("Trying to deserialize unknown custom value");
  return r.deserialize(e);
}), Er = [Jt, Yt, en, Wt], Et = (e, t) => {
  const n = bt(Er, (s) => s.isApplicable(e, t));
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation(e, t)
    };
  const r = bt(Xt, (s) => s.isApplicable(e, t));
  if (r)
    return {
      value: r.transform(e, t),
      type: r.annotation
    };
}, tn = {};
Xt.forEach((e) => {
  tn[e.annotation] = e;
});
var Ar = (e, t, n) => {
  if (B(t))
    switch (t[0]) {
      case "symbol":
        return Yt.untransform(e, t, n);
      case "class":
        return Jt.untransform(e, t, n);
      case "custom":
        return en.untransform(e, t, n);
      case "typed-array":
        return Wt.untransform(e, t, n);
      default:
        throw new Error("Unknown transformation: " + t);
    }
  else {
    const r = tn[t];
    if (!r)
      throw new Error("Unknown transformation: " + t);
    return r.untransform(e, n);
  }
}, X = (e, t) => {
  const n = e.keys();
  for (; t > 0; )
    n.next(), t--;
  return n.next().value;
};
function nn(e) {
  if (je(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (je(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (je(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var Or = (e, t) => {
  nn(t);
  for (let n = 0; n < t.length; n++) {
    const r = t[n];
    if (Ee(e))
      e = X(e, +r);
    else if (Se(e)) {
      const s = +r, i = +t[++n] == 0 ? "key" : "value", o = X(e, s);
      switch (i) {
        case "key":
          e = o;
          break;
        case "value":
          e = e.get(o);
          break;
      }
    } else
      e = e[r];
  }
  return e;
}, ut = (e, t, n) => {
  if (nn(t), t.length === 0)
    return n(e);
  let r = e;
  for (let i = 0; i < t.length - 1; i++) {
    const o = t[i];
    if (B(r)) {
      const l = +o;
      r = r[l];
    } else if (be(r))
      r = r[o];
    else if (Ee(r)) {
      const l = +o;
      r = X(r, l);
    } else if (Se(r)) {
      if (i === t.length - 2)
        break;
      const a = +o, u = +t[++i] == 0 ? "key" : "value", f = X(r, a);
      switch (u) {
        case "key":
          r = f;
          break;
        case "value":
          r = r.get(f);
          break;
      }
    }
  }
  const s = t[t.length - 1];
  if (B(r) ? r[+s] = n(r[+s]) : be(r) && (r[s] = n(r[s])), Ee(r)) {
    const i = X(r, +s), o = n(i);
    i !== o && (r.delete(i), r.add(o));
  }
  if (Se(r)) {
    const i = +t[t.length - 2], o = X(r, i);
    switch (+s == 0 ? "key" : "value") {
      case "key": {
        const a = n(o);
        r.set(a, r.get(o)), a !== o && r.delete(o);
        break;
      }
      case "value": {
        r.set(o, n(r.get(o)));
        break;
      }
    }
  }
  return e;
};
function ct(e, t, n = []) {
  if (!e)
    return;
  if (!B(e)) {
    de(e, (i, o) => ct(i, t, [...n, ...me(o)]));
    return;
  }
  const [r, s] = e;
  s && de(s, (i, o) => {
    ct(i, t, [...n, ...me(o)]);
  }), t(r, n);
}
function xr(e, t, n) {
  return ct(t, (r, s) => {
    e = ut(e, s, (i) => Ar(i, r, n));
  }), e;
}
function Cr(e, t) {
  function n(r, s) {
    const i = Or(e, me(s));
    r.map(me).forEach((o) => {
      e = ut(e, o, () => i);
    });
  }
  if (B(t)) {
    const [r, s] = t;
    r.forEach((i) => {
      e = ut(e, me(i), () => e);
    }), s && de(s, n);
  } else
    de(t, n);
  return e;
}
var Tr = (e, t) => be(e) || B(e) || Se(e) || Ee(e) || Zt(e, t);
function Nr(e, t, n) {
  const r = n.get(e);
  r ? r.push(t) : n.set(e, [t]);
}
function Pr(e, t) {
  const n = {};
  let r;
  return e.forEach((s) => {
    if (s.length <= 1)
      return;
    t || (s = s.map((l) => l.map(String)).sort((l, a) => l.length - a.length));
    const [i, ...o] = s;
    i.length === 0 ? r = o.map(et) : n[et(i)] = o.map(et);
  }), r ? at(n) ? [r] : [r, n] : at(n) ? void 0 : n;
}
var rn = (e, t, n, r, s = [], i = [], o = /* @__PURE__ */ new Map()) => {
  const l = mr(e);
  if (!l) {
    Nr(e, s, t);
    const y = o.get(e);
    if (y)
      return r ? {
        transformedValue: null
      } : y;
  }
  if (!Tr(e, n)) {
    const y = Et(e, n), S = y ? {
      transformedValue: y.value,
      annotations: [y.type]
    } : {
      transformedValue: e
    };
    return l || o.set(e, S), S;
  }
  if (je(i, e))
    return {
      transformedValue: null
    };
  const a = Et(e, n), u = (a == null ? void 0 : a.value) ?? e, f = B(u) ? [] : {}, c = {};
  de(u, (y, S) => {
    if (S === "__proto__" || S === "constructor" || S === "prototype")
      throw new Error(`Detected property ${S}. This is a prototype pollution risk, please remove it from your object.`);
    const x = rn(y, t, n, r, [...s, S], [...i, e], o);
    f[S] = x.transformedValue, B(x.annotations) ? c[S] = x.annotations : be(x.annotations) && de(x.annotations, (_, U) => {
      c[zt(S) + "." + U] = _;
    });
  });
  const g = at(c) ? {
    transformedValue: f,
    annotations: a ? [a.type] : void 0
  } : {
    transformedValue: f,
    annotations: a ? [a.type, c] : c
  };
  return l || o.set(e, g), g;
};
function sn(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function At(e) {
  return sn(e) === "Array";
}
function kr(e) {
  if (sn(e) !== "Object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function Ir(e, t, n, r, s) {
  const i = {}.propertyIsEnumerable.call(r, t) ? "enumerable" : "nonenumerable";
  i === "enumerable" && (e[t] = n), s && i === "nonenumerable" && Object.defineProperty(e, t, {
    value: n,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function ft(e, t = {}) {
  if (At(e))
    return e.map((s) => ft(s, t));
  if (!kr(e))
    return e;
  const n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertySymbols(e);
  return [...n, ...r].reduce((s, i) => {
    if (At(t.props) && !t.props.includes(i))
      return s;
    const o = e[i], l = ft(o, t);
    return Ir(s, i, l, e, t.nonenumerable), s;
  }, {});
}
var b = class {
  /**
   * @param dedupeReferentialEqualities  If true, SuperJSON will make sure only one instance of referentially equal objects are serialized and the rest are replaced with `null`.
   */
  constructor({ dedupe: e = !1 } = {}) {
    this.classRegistry = new sr(), this.symbolRegistry = new Qt((t) => t.description ?? ""), this.customTransformerRegistry = new lr(), this.allowedErrorProps = [], this.dedupe = e;
  }
  serialize(e) {
    const t = /* @__PURE__ */ new Map(), n = rn(e, t, this, this.dedupe), r = {
      json: n.transformedValue
    };
    n.annotations && (r.meta = {
      ...r.meta,
      values: n.annotations
    });
    const s = Pr(t, this.dedupe);
    return s && (r.meta = {
      ...r.meta,
      referentialEqualities: s
    }), r;
  }
  deserialize(e) {
    const { json: t, meta: n } = e;
    let r = ft(t);
    return n != null && n.values && (r = xr(r, n.values, this)), n != null && n.referentialEqualities && (r = Cr(r, n.referentialEqualities)), r;
  }
  stringify(e) {
    return JSON.stringify(this.serialize(e));
  }
  parse(e) {
    return this.deserialize(JSON.parse(e));
  }
  registerClass(e, t) {
    this.classRegistry.register(e, t);
  }
  registerSymbol(e, t) {
    this.symbolRegistry.register(e, t);
  }
  registerCustom(e, t) {
    this.customTransformerRegistry.register({
      name: t,
      ...e
    });
  }
  allowErrorProps(...e) {
    this.allowedErrorProps.push(...e);
  }
};
b.defaultInstance = new b();
b.serialize = b.defaultInstance.serialize.bind(b.defaultInstance);
b.deserialize = b.defaultInstance.deserialize.bind(b.defaultInstance);
b.stringify = b.defaultInstance.stringify.bind(b.defaultInstance);
b.parse = b.defaultInstance.parse.bind(b.defaultInstance);
b.registerClass = b.defaultInstance.registerClass.bind(b.defaultInstance);
b.registerSymbol = b.defaultInstance.registerSymbol.bind(b.defaultInstance);
b.registerCustom = b.defaultInstance.registerCustom.bind(b.defaultInstance);
b.allowErrorProps = b.defaultInstance.allowErrorProps.bind(b.defaultInstance);
var Rr = b.serialize, fs = b.stringify;
function ds(e) {
  return e.state.fetchStatus === "fetching" ? "fetching" : e.getObserversCount() ? e.state.fetchStatus === "paused" ? "paused" : e.isStale() ? "stale" : "fresh" : "inactive";
}
function hs(e, t) {
  return `${e}${t.charAt(0).toUpperCase() + t.slice(1)}`;
}
function gs({
  queryState: e,
  observerCount: t,
  isStale: n
}) {
  return e.fetchStatus === "fetching" ? "blue" : t ? e.fetchStatus === "paused" ? "purple" : n ? "yellow" : "green" : "gray";
}
function ys({
  status: e,
  isPaused: t
}) {
  return t ? "purple" : e === "error" ? "red" : e === "pending" ? "yellow" : e === "success" ? "green" : "gray";
}
function ms(e) {
  return e === "fresh" ? "green" : e === "stale" ? "yellow" : e === "paused" ? "purple" : e === "inactive" ? "gray" : "blue";
}
var ps = (e, t = !1) => {
  const {
    json: n
  } = Rr(e);
  return JSON.stringify(n, null, t ? 2 : void 0);
}, De = (e) => e.state.fetchStatus !== "idle" ? 0 : e.getObserversCount() ? e.isStale() ? 2 : 1 : 3, Mr = (e, t) => e.queryHash.localeCompare(t.queryHash), on = (e, t) => e.state.dataUpdatedAt < t.state.dataUpdatedAt ? 1 : -1, Dr = (e, t) => De(e) === De(t) ? on(e, t) : De(e) > De(t) ? 1 : -1, vs = {
  status: Dr,
  "query hash": Mr,
  "last updated": on
}, Le = (e) => e.state.isPaused ? 0 : e.state.status === "error" ? 2 : e.state.status === "pending" ? 1 : 3, ln = (e, t) => e.state.submittedAt < t.state.submittedAt ? 1 : -1, Lr = (e, t) => Le(e) === Le(t) ? ln(e, t) : Le(e) > Le(t) ? 1 : -1, ws = {
  status: Lr,
  "last updated": ln
}, bs = (e) => e * parseFloat(getComputedStyle(document.documentElement).fontSize), Ss = () => {
  const [e, t] = E("dark");
  return wn(() => {
    const n = window.matchMedia("(prefers-color-scheme: dark)");
    t(n.matches ? "dark" : "light");
    const r = (s) => {
      t(s.matches ? "dark" : "light");
    };
    n.addEventListener("change", r), pe(() => n.removeEventListener("change", r));
  }), e;
}, Ve = (e, t, n) => {
  if (t.length === 0)
    return n;
  if (e instanceof Map) {
    const r = new Map(e);
    if (t.length === 1)
      return r.set(t[0], n), r;
    const [s, ...i] = t;
    return r.set(s, Ve(r.get(s), i, n)), r;
  }
  if (e instanceof Set) {
    const r = Ve(Array.from(e), t, n);
    return new Set(r);
  }
  if (Array.isArray(e)) {
    const r = [...e];
    if (t.length === 1)
      return r[t[0]] = n, r;
    const [s, ...i] = t;
    return r[s] = Ve(r[s], i, n), r;
  }
  if (e instanceof Object) {
    const r = {
      ...e
    };
    if (t.length === 1)
      return r[t[0]] = n, r;
    const [s, ...i] = t;
    return r[s] = Ve(r[s], i, n), r;
  }
  return e;
}, $e = (e, t) => {
  if (e instanceof Map) {
    const n = new Map(e);
    if (t.length === 1)
      return n.delete(t[0]), n;
    const [r, ...s] = t;
    return n.set(r, $e(n.get(r), s)), n;
  }
  if (e instanceof Set) {
    const n = $e(Array.from(e), t);
    return new Set(n);
  }
  if (Array.isArray(e)) {
    const n = [...e];
    if (t.length === 1)
      return n.filter((i, o) => o.toString() !== t[0]);
    const [r, ...s] = t;
    return n[r] = $e(n[r], s), n;
  }
  if (e instanceof Object) {
    const n = {
      ...e
    };
    if (t.length === 1)
      return delete n[t[0]], n;
    const [r, ...s] = t;
    return n[r] = $e(n[r], s), n;
  }
  return e;
}, an = (e, t) => {
  if (!e || document.querySelector("#_goober") || (t == null ? void 0 : t.querySelector("#_goober")))
    return;
  const r = document.createElement("style"), s = document.createTextNode("");
  r.appendChild(s), r.id = "_goober", r.setAttribute("nonce", e), t ? t.appendChild(r) : document.head.appendChild(r);
}, Y, Ae, Oe, xe, q, Ce, W, Z, J, ee, te, ne, Te, Ot, Vr = (Ot = class {
  constructor(e) {
    v(this, Y);
    v(this, Ae);
    v(this, Oe);
    v(this, xe);
    v(this, q, !1);
    v(this, Ce);
    v(this, W);
    v(this, Z);
    v(this, J);
    v(this, ee);
    v(this, te);
    v(this, ne);
    v(this, Te);
    const {
      client: t,
      queryFlavor: n,
      version: r,
      onlineManager: s,
      buttonPosition: i,
      position: o,
      initialIsOpen: l,
      errorTypes: a,
      styleNonce: u,
      shadowDOMTarget: f
    } = e;
    p(this, Y, E(t)), p(this, Oe, n), p(this, xe, r), p(this, Ae, s), p(this, Ce, u), p(this, W, f), p(this, Z, E(i)), p(this, J, E(o)), p(this, ee, E(l)), p(this, te, E(a));
  }
  setButtonPosition(e) {
    d(this, Z)[1](e);
  }
  setPosition(e) {
    d(this, J)[1](e);
  }
  setInitialIsOpen(e) {
    d(this, ee)[1](e);
  }
  setErrorTypes(e) {
    d(this, te)[1](e);
  }
  setClient(e) {
    d(this, Y)[1](e);
  }
  mount(e) {
    if (d(this, q))
      throw new Error("Devtools is already mounted");
    const t = qt(() => {
      const n = this, [r] = d(this, Z), [s] = d(this, J), [i] = d(this, ee), [o] = d(this, te), [l] = d(this, Y);
      let a;
      return d(this, ne) ? a = d(this, ne) : (a = Bt(() => import("./HO4MOOFI-BfsOE_Go.js")), p(this, ne, a)), an(d(this, Ce), d(this, W)), jt(a, _t({
        get queryFlavor() {
          return d(n, Oe);
        },
        get version() {
          return d(n, xe);
        },
        get onlineManager() {
          return d(n, Ae);
        },
        get shadowDOMTarget() {
          return d(n, W);
        }
      }, {
        get client() {
          return l();
        },
        get buttonPosition() {
          return r();
        },
        get position() {
          return s();
        },
        get initialIsOpen() {
          return i();
        },
        get errorTypes() {
          return o();
        }
      }));
    }, e);
    p(this, q, !0), p(this, Te, t);
  }
  unmount() {
    var e;
    if (!d(this, q))
      throw new Error("Devtools is not mounted");
    (e = d(this, Te)) == null || e.call(this), p(this, q, !1);
  }
}, Y = new WeakMap(), Ae = new WeakMap(), Oe = new WeakMap(), xe = new WeakMap(), q = new WeakMap(), Ce = new WeakMap(), W = new WeakMap(), Z = new WeakMap(), J = new WeakMap(), ee = new WeakMap(), te = new WeakMap(), ne = new WeakMap(), Te = new WeakMap(), Ot), re, Ne, Pe, ke, F, Ie, se, ie, oe, le, ae, ue, ce, Re, xt, $r = (xt = class {
  constructor(e) {
    v(this, re);
    v(this, Ne);
    v(this, Pe);
    v(this, ke);
    v(this, F, !1);
    v(this, Ie);
    v(this, se);
    v(this, ie);
    v(this, oe);
    v(this, le);
    v(this, ae);
    v(this, ue);
    v(this, ce);
    v(this, Re);
    const {
      client: t,
      queryFlavor: n,
      version: r,
      onlineManager: s,
      buttonPosition: i,
      position: o,
      initialIsOpen: l,
      errorTypes: a,
      styleNonce: u,
      shadowDOMTarget: f,
      onClose: c
    } = e;
    p(this, re, E(t)), p(this, Pe, n), p(this, ke, r), p(this, Ne, s), p(this, Ie, u), p(this, se, f), p(this, ie, E(i)), p(this, oe, E(o)), p(this, le, E(l)), p(this, ae, E(a)), p(this, ue, E(c));
  }
  setButtonPosition(e) {
    d(this, ie)[1](e);
  }
  setPosition(e) {
    d(this, oe)[1](e);
  }
  setInitialIsOpen(e) {
    d(this, le)[1](e);
  }
  setErrorTypes(e) {
    d(this, ae)[1](e);
  }
  setClient(e) {
    d(this, re)[1](e);
  }
  setOnClose(e) {
    d(this, ue)[1](() => e);
  }
  mount(e) {
    if (d(this, F))
      throw new Error("Devtools is already mounted");
    const t = qt(() => {
      const n = this, [r] = d(this, ie), [s] = d(this, oe), [i] = d(this, le), [o] = d(this, ae), [l] = d(this, re), [a] = d(this, ue);
      let u;
      return d(this, ce) ? u = d(this, ce) : (u = Bt(() => import("./HUY7CZI3-hReh4rgt.js")), p(this, ce, u)), an(d(this, Ie), d(this, se)), jt(u, _t({
        get queryFlavor() {
          return d(n, Pe);
        },
        get version() {
          return d(n, ke);
        },
        get onlineManager() {
          return d(n, Ne);
        },
        get shadowDOMTarget() {
          return d(n, se);
        }
      }, {
        get client() {
          return l();
        },
        get buttonPosition() {
          return r();
        },
        get position() {
          return s();
        },
        get initialIsOpen() {
          return i();
        },
        get errorTypes() {
          return o();
        },
        get onClose() {
          return a();
        }
      }));
    }, e);
    p(this, F, !0), p(this, Re, t);
  }
  unmount() {
    var e;
    if (!d(this, F))
      throw new Error("Devtools is not mounted");
    (e = d(this, Re)) == null || e.call(this), p(this, F, !1);
  }
}, re = new WeakMap(), Ne = new WeakMap(), Pe = new WeakMap(), ke = new WeakMap(), F = new WeakMap(), Ie = new WeakMap(), se = new WeakMap(), ie = new WeakMap(), oe = new WeakMap(), le = new WeakMap(), ae = new WeakMap(), ue = new WeakMap(), ce = new WeakMap(), Re = new WeakMap(), xt);
function jr(e) {
  const t = Ct(e.client), n = P.useRef(null), {
    buttonPosition: r,
    position: s,
    initialIsOpen: i,
    errorTypes: o,
    styleNonce: l,
    shadowDOMTarget: a
  } = e, [u] = P.useState(
    new Vr({
      client: t,
      queryFlavor: "React Query",
      version: "5",
      onlineManager: Tt,
      buttonPosition: r,
      position: s,
      initialIsOpen: i,
      errorTypes: o,
      styleNonce: l,
      shadowDOMTarget: a
    })
  );
  return P.useEffect(() => {
    u.setClient(t);
  }, [t, u]), P.useEffect(() => {
    r && u.setButtonPosition(r);
  }, [r, u]), P.useEffect(() => {
    s && u.setPosition(s);
  }, [s, u]), P.useEffect(() => {
    u.setInitialIsOpen(i || !1);
  }, [i, u]), P.useEffect(() => {
    u.setErrorTypes(o || []);
  }, [o, u]), P.useEffect(() => (n.current && u.mount(n.current), () => {
    u.unmount();
  }), [u]), /* @__PURE__ */ fe.jsx("div", { className: "tsqd-parent-container", ref: n });
}
function _r(e) {
  const t = Ct(e.client), n = P.useRef(null), { errorTypes: r, styleNonce: s, shadowDOMTarget: i } = e, [o] = P.useState(
    new $r({
      client: t,
      queryFlavor: "React Query",
      version: "5",
      onlineManager: Tt,
      buttonPosition: "bottom-left",
      position: "bottom",
      initialIsOpen: !0,
      errorTypes: r,
      styleNonce: s,
      shadowDOMTarget: i,
      onClose: e.onClose
    })
  );
  return P.useEffect(() => {
    o.setClient(t);
  }, [t, o]), P.useEffect(() => {
    o.setOnClose(e.onClose ?? (() => {
    }));
  }, [e.onClose, o]), P.useEffect(() => {
    o.setErrorTypes(r || []);
  }, [r, o]), P.useEffect(() => (n.current && o.mount(n.current), () => {
    o.unmount();
  }), [o]), /* @__PURE__ */ fe.jsx(
    "div",
    {
      style: { height: "500px", ...e.style },
      className: "tsqd-parent-container",
      ref: n
    }
  );
}
var Br = process.env.NODE_ENV !== "development" ? function() {
  return null;
} : jr;
process.env.NODE_ENV;
const Es = ({
  children: e,
  config: t
}) => {
  const [n] = dn(
    () => new cn({
      ...t
    })
  );
  return /* @__PURE__ */ fe.jsxs(fn, { client: n, children: [
    e,
    /* @__PURE__ */ fe.jsx(Br, { initialIsOpen: !1 })
  ] });
}, As = (e) => {
  const { children: t, ...n } = e;
  return /* @__PURE__ */ fe.jsx(hn, { ...n, children: t });
};
export {
  Pt as $,
  ps as A,
  Xr as B,
  as as C,
  cs as D,
  C as E,
  ns as F,
  mn as G,
  Rr as H,
  rs as I,
  Ve as J,
  bs as K,
  hs as L,
  ds as M,
  K as N,
  Hn as O,
  us as P,
  fs as Q,
  os as R,
  ss as S,
  is as T,
  $e as U,
  Zr as V,
  zr as W,
  Es as X,
  As as Y,
  jt as a,
  E as b,
  k as c,
  Fn as d,
  Rt as e,
  _t as f,
  Ss as g,
  In as h,
  Jr as i,
  Q as j,
  it as k,
  ts as l,
  ws as m,
  pe as n,
  Yr as o,
  wn as p,
  Wn as q,
  ot as r,
  vs as s,
  ls as t,
  es as u,
  Gn as v,
  gs as w,
  ys as x,
  Yn as y,
  ms as z
};
