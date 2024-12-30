export * from "@tanstack/react-query";
import { u as ie } from "../useTheme-ery4R1ul.js";
import { a as le, u as de } from "../useResponsive-C59ustr5.js";
import { useRef as d, useEffect as f, useState as g, useReducer as L, useCallback as x } from "react";
import { limitValue as E } from "../utils/x-react.es.js";
const _ = (e = {}) => {
  const { navbar: t, sidebar: r } = e;
  return {
    navbar: t ? {
      className: "fixed top-0 z-40",
      ...t
    } : void 0,
    sidebar: r ? {
      className: "fixed z-30",
      ...r
    } : void 0
  };
}, p = ["mousedown", "touchstart"], z = (e, t, r) => {
  const n = d(null);
  return f(() => {
    const s = (o) => {
      const { target: u } = o ?? {};
      if (Array.isArray(r)) {
        const c = (u == null ? void 0 : u.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(u) && u.tagName !== "HTML";
        r.every(
          (i) => !!i && !o.composedPath().includes(i)
        ) && !c && e();
      } else n.current && !n.current.contains(u) && e();
    };
    return (t || p).forEach(
      (o) => document.addEventListener(o, s)
    ), () => {
      (t || p).forEach(
        (o) => document.removeEventListener(o, s)
      );
    };
  }, [n, e, r]), n;
}, C = (e) => e.currentTarget instanceof HTMLElement && e.relatedTarget instanceof HTMLElement ? e.currentTarget.contains(e.relatedTarget) : !1, $ = ({
  onBlur: e,
  onFocus: t
} = {}) => {
  const r = d(null), [n, s] = g(!1), o = d(!1), u = (c) => {
    s(c), o.current = c;
  };
  return f(() => {
    const c = (i) => {
      o.current || (u(!0), t == null || t(i));
    }, a = (i) => {
      o.current && !C(i) && (u(!1), e == null || e(i));
    };
    if (r.current) {
      const i = r.current;
      return i.addEventListener("focusin", c), i.addEventListener("focusout", a), () => {
        i.removeEventListener("focusin", c), i.removeEventListener("focusout", a);
      };
    }
  }, [t, e]), { ref: r, focused: n };
}, y = (e, t, r) => {
  f(() => (window.addEventListener(e, t, r), () => window.removeEventListener(e, t, r)), [e, t]);
}, j = (e) => {
  const [t, r] = g(null), n = d(null);
  return { ref: (o) => {
    if (n.current && (n.current.disconnect(), n.current = null), o === null) {
      r(null);
      return;
    }
    n.current = new IntersectionObserver(([u]) => {
      r(u);
    }, e), n.current.observe(o);
  }, entry: t };
}, M = {
  min: -1 / 0,
  max: 1 / 0
}, Q = (e = 0, t) => {
  const { min: r, max: n } = { ...M, ...t }, [s, o] = g(
    E(e, r, n)
  );
  return [s, { increment: () => o((m) => E(m + 1, r, n)), decrement: () => o((m) => E(m - 1, r, n)), set: (m) => o(E(m, r, n)), reset: () => o(E(e, r, n)) }];
}, N = (e) => {
  const t = d(e);
  return f(() => {
    t.current = e;
  }), (...r) => {
    var n;
    return (n = t.current) == null ? void 0 : n.call(t, ...r);
  };
}, W = (e, t) => {
  const r = N(e), n = d(0);
  return f(() => () => window.clearTimeout(n.current), []), (...s) => {
    window.clearTimeout(n.current), n.current = window.setTimeout(
      () => r(...s),
      t
    );
  };
}, q = (e, t, r = { leading: !1 }) => {
  const [n, s] = g(e), o = d(null), u = d(!0), c = () => {
    o.current !== null && window.clearTimeout(o.current);
  };
  return f(() => c, []), [n, (i) => {
    c(), u.current && r.leading ? s(i) : o.current = window.setTimeout(() => {
      u.current = !0, s(i);
    }, t), u.current = !1;
  }];
}, G = (e, t, r) => {
  const n = d(null);
  return f(() => {
    if (n.current) {
      n.current.addEventListener(e, t, r);
      const s = n.current;
      return () => s == null ? void 0 : s.removeEventListener(e, t, r);
    }
  }, [t, r, e]), n;
}, K = (e) => {
  const t = d(void 0);
  return f(() => {
    t.current = e;
  }, [e]), t.current;
}, O = (e) => (e + 1) % 1e6, F = () => {
  const [, e] = L(O, 0);
  return e;
}, X = (e) => {
  const t = d(new Set(e)), r = F();
  return t.current.add = (...n) => {
    const s = Set.prototype.add.apply(t.current, n);
    return r(), s;
  }, t.current.clear = (...n) => {
    Set.prototype.clear.apply(t.current, n), r();
  }, t.current.delete = (...n) => {
    const s = Set.prototype.delete.apply(t.current, n);
    return r(), s;
  }, t.current;
}, Y = (e) => {
  const [t, r] = g({
    history: [e],
    current: 0
  }), n = {
    set: (s) => {
      r((o) => {
        const u = [
          ...o.history.slice(0, o.current + 1),
          s
        ];
        return {
          history: u,
          current: u.length - 1
        };
      });
    },
    back: (s = 1) => {
      r((o) => ({
        history: o.history,
        current: Math.max(0, o.current - s)
      }));
    },
    forward: (s = 1) => {
      r((o) => ({
        history: o.history,
        current: Math.min(
          o.history.length - 1,
          o.current + s
        )
      }));
    },
    reset: () => {
      r({
        history: [e],
        current: 0
      });
    }
  };
  return [t.history[t.current], n, t];
}, Z = (e = [!1, !0]) => {
  const t = (s, o) => {
    const u = o instanceof Function ? o(s[0]) : o, c = Math.abs(s.indexOf(u));
    return [...s.slice(c), ...s.slice(0, c)];
  }, [[r], n] = L(t, [...e]);
  return [
    r,
    n
  ];
}, B = () => {
  const [e, t] = g(!1);
  return f(() => t(!0), []), e;
}, ee = (e, t, { autoInvoke: r = !1 } = {}) => {
  const n = d(null), s = (...u) => {
    n.current === void 0 && (n.current = window.setTimeout(() => {
      e(...u), n.current = null;
    }, t));
  }, o = () => {
    n.current !== null && (window.clearTimeout(n.current), n.current = null);
  };
  return f(() => (r && s(), o), [t]), { start: s, clear: o };
}, te = (e, t, { autoInvoke: r = !1 } = {}) => {
  const [n, s] = g(!1), o = d(null), u = d(e), c = () => {
    s((m) => (!m && (o.current === null || o.current === -1) && (o.current = window.setInterval(u.current, t)), !0));
  }, a = () => {
    s(!1), window.clearInterval(o.current ?? -1), o.current = -1;
  }, i = () => {
    n ? a() : c();
  };
  return f(() => (u.current = e, n && c(), a), [e, n, t]), f(() => (r && c(), () => a()), []), { start: c, stop: a, toggle: i, active: n };
};
function A(e, t = "use-local-storage") {
  try {
    return JSON.stringify(e);
  } catch (r) {
    throw r instanceof Error ? new Error(
      `@mantine/hooks ${t}: Failed to serialize the value: ${r.message}`
    ) : r;
  }
}
function D(e) {
  if (!(e === void 0 || e === ""))
    try {
      return JSON.parse(e);
    } catch {
      return e;
    }
}
function H(e) {
  return { getItem: (s) => {
    try {
      return window[e].getItem(s);
    } catch {
      return console.warn(
        "use-local-storage: Failed to get value from storage, localStorage is blocked"
      ), null;
    }
  }, setItem: (s, o) => {
    try {
      window[e].setItem(s, o);
    } catch {
      console.warn(
        "use-local-storage: Failed to set value to storage, localStorage is blocked"
      );
    }
  }, removeItem: (s) => {
    try {
      window[e].removeItem(s);
    } catch {
      console.warn(
        "use-local-storage: Failed to remove value from storage, localStorage is blocked"
      );
    }
  } };
}
function J(e, t) {
  const r = "mantine-local-storage", { getItem: n, setItem: s, removeItem: o } = H(e);
  return function({
    key: c,
    defaultValue: a,
    getInitialValueInEffect: i = !0,
    deserialize: m = D,
    serialize: I = (S) => A(S, t)
  }) {
    const S = (l) => {
      let w;
      try {
        w = window === void 0 || !(e in window) || window[e] === void 0 || l === void 0;
      } catch {
        w = !0;
      }
      if (w)
        return a;
      const h = n(c);
      return h !== null ? m(h) : a;
    }, [T, b] = g(
      S(i)
    ), v = x(
      (l) => {
        l instanceof Function ? b((w) => {
          const h = l(w);
          return s(c, I(h)), window.dispatchEvent(
            new CustomEvent(r, {
              detail: { key: c, value: l(w) }
            })
          ), h;
        }) : (s(c, I(l)), window.dispatchEvent(
          new CustomEvent(r, {
            detail: { key: c, value: l }
          })
        ), b(l));
      },
      [c, I]
    ), R = () => {
      o(c), window.dispatchEvent(
        new CustomEvent(r, {
          detail: { key: c, value: a }
        })
      );
    };
    return y("storage", (l) => {
      l.storageArea === window[e] && l.key === c && b(m(l.newValue ?? ""));
    }), y(r, (l) => {
      l.detail.key === c && b(l.detail.value);
    }), f(() => {
      a !== void 0 && T === void 0 && v(a);
    }, [a, T, v]), f(() => {
      const l = S();
      l !== void 0 && v(l);
    }, [c, v]), [
      T === void 0 ? a : T,
      v,
      R
    ];
  };
}
const re = (e) => J("localStorage", "use-local-storage")(e), k = (e, t) => {
  typeof e == "function" ? e(t) : typeof e == "object" && e !== null && "current" in e && (e.current = t);
}, P = (...e) => (t) => {
  e.forEach((r) => k(r, t));
}, ne = (...e) => P(...e), oe = (e = !1, t) => {
  const { onOpen: r, onClose: n } = t || {}, [s, o] = g(e), u = () => {
    o((i) => i || (r == null || r(), !0));
  }, c = () => {
    o((i) => i && (n == null || n(), !1));
  };
  return [s, { open: u, close: c, toggle: () => {
    s ? c() : u();
  } }];
};
export {
  N as useCallbackRef,
  z as useClickOutside,
  Q as useCounter,
  W as useDebouncedCallback,
  q as useDebouncedState,
  oe as useDisclosure,
  G as useEvent,
  $ as useFocusDetection,
  j as useIntersection,
  te as useInterval,
  _ as useLayoutConfig,
  re as useLocalStorage,
  le as useMediaQuery,
  ne as useMergedRef,
  B as useMounted,
  K as usePreviousValue,
  X as useReactiveSet,
  F as useRerender,
  de as useResponsive,
  Y as useStateHistory,
  ie as useTheme,
  ee as useTimeout,
  Z as useToggle,
  y as useWindowEvent
};
