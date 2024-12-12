import * as t from "react";
var N = (e, s, a, u, m, c, d, h) => {
  let l = document.documentElement, b = ["light", "dark"];
  function f(o) {
    (Array.isArray(e) ? e : [e]).forEach((y) => {
      let S = y === "class", k = S && c ? m.map((v) => c[v] || v) : m;
      S ? (l.classList.remove(...k), l.classList.add(o)) : l.setAttribute(y, o);
    }), C(o);
  }
  function C(o) {
    h && b.includes(o) && (l.style.colorScheme = o);
  }
  function i() {
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }
  if (u) f(u);
  else try {
    let o = localStorage.getItem(s) || a, y = d && o === "system" ? i() : o;
    f(y);
  } catch {
  }
}, M = ["light", "dark"], O = "(prefers-color-scheme: dark)", V = typeof window > "u", L = t.createContext(void 0), W = { setTheme: (e) => {
}, themes: [] }, $ = () => {
  var e;
  return (e = t.useContext(L)) != null ? e : W;
}, j = (e) => t.useContext(L) ? t.createElement(t.Fragment, null, e.children) : t.createElement(z, { ...e }), _ = ["light", "dark"], z = ({ forcedTheme: e, disableTransitionOnChange: s = !1, enableSystem: a = !0, enableColorScheme: u = !0, storageKey: m = "theme", themes: c = _, defaultTheme: d = a ? "system" : "light", attribute: h = "data-theme", value: l, children: b, nonce: f, scriptProps: C }) => {
  let [i, o] = t.useState(() => I(m, d)), [y, S] = t.useState(() => I(m)), k = l ? Object.values(l) : c, v = t.useCallback((r) => {
    let n = r;
    if (!n) return;
    r === "system" && a && (n = P());
    let g = l ? l[n] : n, A = s ? R(f) : null, w = document.documentElement, x = (p) => {
      p === "class" ? (w.classList.remove(...k), g && w.classList.add(g)) : p.startsWith("data-") && (g ? w.setAttribute(p, g) : w.removeAttribute(p));
    };
    if (Array.isArray(h) ? h.forEach(x) : x(h), u) {
      let p = M.includes(d) ? d : null, K = M.includes(n) ? n : p;
      w.style.colorScheme = K;
    }
    A == null || A();
  }, [f]), T = t.useCallback((r) => {
    let n = typeof r == "function" ? r(i) : r;
    o(n);
    try {
      localStorage.setItem(m, n);
    } catch {
    }
  }, [i]), E = t.useCallback((r) => {
    let n = P(r);
    S(n), i === "system" && a && !e && v("system");
  }, [i, e]);
  t.useEffect(() => {
    let r = window.matchMedia(O);
    return r.addListener(E), E(r), () => r.removeListener(E);
  }, [E]), t.useEffect(() => {
    let r = (n) => {
      n.key === m && (n.newValue ? o(n.newValue) : T(d));
    };
    return window.addEventListener("storage", r), () => window.removeEventListener("storage", r);
  }, [T]), t.useEffect(() => {
    v(e ?? i);
  }, [e, i]);
  let H = t.useMemo(() => ({ theme: i, setTheme: T, forcedTheme: e, resolvedTheme: i === "system" ? y : i, themes: a ? [...c, "system"] : c, systemTheme: a ? y : void 0 }), [i, T, e, y, a, c]);
  return t.createElement(L.Provider, { value: H }, t.createElement(J, { forcedTheme: e, storageKey: m, attribute: h, enableSystem: a, enableColorScheme: u, defaultTheme: d, value: l, themes: c, nonce: f, scriptProps: C }), b);
}, J = t.memo(({ forcedTheme: e, storageKey: s, attribute: a, enableSystem: u, enableColorScheme: m, defaultTheme: c, value: d, themes: h, nonce: l, scriptProps: b }) => {
  let f = JSON.stringify([a, s, c, e, h, d, u, m]).slice(1, -1);
  return t.createElement("script", { ...b, suppressHydrationWarning: !0, nonce: typeof window > "u" ? l : "", dangerouslySetInnerHTML: { __html: `(${N.toString()})(${f})` } });
}), I = (e, s) => {
  if (V) return;
  let a;
  try {
    a = localStorage.getItem(e) || void 0;
  } catch {
  }
  return a || s;
}, R = (e) => {
  let s = document.createElement("style");
  return e && s.setAttribute("nonce", e), s.appendChild(document.createTextNode("*,*::before,*::after{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")), document.head.appendChild(s), () => {
    window.getComputedStyle(document.body), setTimeout(() => {
      document.head.removeChild(s);
    }, 1);
  };
}, P = (e) => (e || (e = window.matchMedia(O)), e.matches ? "dark" : "light");
export {
  j as J,
  $ as z
};
