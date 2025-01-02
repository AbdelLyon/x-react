export * from "@tanstack/react-query";
import { u as Y } from "../useTheme-ery4R1ul.js";
import { a as B, u as ee } from "../useResponsive-C59ustr5.js";
import { useRef as l, useEffect as d, useState as f, useReducer as h, useCallback as w } from "react";
import { u as re } from "../useInfiniteScroll-CU_5Rd-q.js";
import { limitValue as g } from "../utils/x-react.es.js";
const V = (t = {}) => {
  const { navbar: e, sidebar: r } = t;
  return {
    navbar: e ? {
      className: "fixed top-0 z-40",
      ...e
    } : void 0,
    sidebar: r ? {
      className: "fixed z-30",
      ...r
    } : void 0
  };
}, y = ["mousedown", "touchstart"], k = (t, e, r) => {
  const n = l(null);
  return d(() => {
    const s = (o) => {
      const { target: c } = o ?? {};
      if (Array.isArray(r)) {
        const u = (c == null ? void 0 : c.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(c) && c.tagName !== "HTML";
        r.every(
          (a) => !!a && !o.composedPath().includes(a)
        ) && !u && t();
      } else n.current && !n.current.contains(c) && t();
    };
    return (e || y).forEach(
      (o) => document.addEventListener(o, s)
    ), () => {
      (e || y).forEach(
        (o) => document.removeEventListener(o, s)
      );
    };
  }, [n, t, r]), n;
}, v = (t) => t.currentTarget instanceof HTMLElement && t.relatedTarget instanceof HTMLElement ? t.currentTarget.contains(t.relatedTarget) : !1, M = ({
  onBlur: t,
  onFocus: e
} = {}) => {
  const r = l(null), [n, s] = f(!1), o = l(!1), c = (u) => {
    s(u), o.current = u;
  };
  return d(() => {
    const u = (a) => {
      o.current || (c(!0), e == null || e(a));
    }, i = (a) => {
      o.current && !v(a) && (c(!1), t == null || t(a));
    };
    if (r.current) {
      const a = r.current;
      return a.addEventListener("focusin", u), a.addEventListener("focusout", i), () => {
        a.removeEventListener("focusin", u), a.removeEventListener("focusout", i);
      };
    }
  }, [e, t]), { ref: r, focused: n };
}, C = (t, e, r) => {
  d(() => (window.addEventListener(t, e, r), () => window.removeEventListener(t, e, r)), [t, e]);
}, N = (t) => {
  const [e, r] = f(null), n = l(null);
  return { ref: (o) => {
    if (n.current && (n.current.disconnect(), n.current = null), o === null) {
      r(null);
      return;
    }
    n.current = new IntersectionObserver(([c]) => {
      r(c);
    }, t), n.current.observe(o);
  }, entry: e };
}, T = {
  min: -1 / 0,
  max: 1 / 0
}, O = (t = 0, e) => {
  const { min: r, max: n } = { ...T, ...e }, [s, o] = f(
    g(t, r, n)
  );
  return [s, { increment: () => o((m) => g(m + 1, r, n)), decrement: () => o((m) => g(m - 1, r, n)), set: (m) => o(g(m, r, n)), reset: () => o(g(t, r, n)) }];
}, E = (t) => {
  const e = l(t);
  return d(() => {
    e.current = t;
  }), (...r) => {
    var n;
    return (n = e.current) == null ? void 0 : n.call(e, ...r);
  };
}, D = (t, e) => {
  const r = E(t), n = l(0);
  return d(() => () => window.clearTimeout(n.current), []), (...s) => {
    window.clearTimeout(n.current), n.current = window.setTimeout(
      () => r(...s),
      e
    );
  };
}, A = (t, e, r = { leading: !1 }) => {
  const [n, s] = f(t), o = l(null), c = l(!0), u = () => {
    o.current !== null && window.clearTimeout(o.current);
  };
  return d(() => u, []), [n, (a) => {
    u(), c.current && r.leading ? s(a) : o.current = window.setTimeout(() => {
      c.current = !0, s(a);
    }, e), c.current = !1;
  }];
}, F = (t, e, r = { leading: !1 }) => {
  const [n, s] = f(t), o = l(!1), c = l(null), u = l(!1), i = () => {
    c.current !== null && window.clearTimeout(c.current);
  };
  return d(() => {
    o.current && (!u.current && r.leading ? (u.current = !0, s(t)) : (i(), c.current = window.setTimeout(() => {
      u.current = !1, s(t);
    }, e)));
  }, [t, r.leading, e]), d(() => (o.current = !0, i), []), [n, i];
}, H = (t, e, r) => {
  const n = l(null);
  return d(() => {
    if (n.current) {
      n.current.addEventListener(t, e, r);
      const s = n.current;
      return () => s == null ? void 0 : s.removeEventListener(t, e, r);
    }
  }, [e, r, t]), n;
}, _ = (t) => {
  const e = l(void 0);
  return d(() => {
    e.current = t;
  }, [t]), e.current;
}, S = (t) => (t + 1) % 1e6, p = () => {
  const [, t] = h(S, 0);
  return t;
}, J = (t) => {
  const e = l(new Set(t)), r = p();
  return e.current.add = (...n) => {
    const s = Set.prototype.add.apply(e.current, n);
    return r(), s;
  }, e.current.clear = (...n) => {
    Set.prototype.clear.apply(e.current, n), r();
  }, e.current.delete = (...n) => {
    const s = Set.prototype.delete.apply(e.current, n);
    return r(), s;
  }, e.current;
}, P = (t) => {
  const [e, r] = f({
    history: [t],
    current: 0
  }), n = {
    set: (s) => {
      r((o) => {
        const c = [
          ...o.history.slice(0, o.current + 1),
          s
        ];
        return {
          history: c,
          current: c.length - 1
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
        history: [t],
        current: 0
      });
    }
  };
  return [e.history[e.current], n, e];
}, U = (t = [!1, !0]) => {
  const e = (s, o) => {
    const c = o instanceof Function ? o(s[0]) : o, u = Math.abs(s.indexOf(c));
    return [...s.slice(u), ...s.slice(0, u)];
  }, [[r], n] = h(e, [...t]);
  return [
    r,
    n
  ];
}, $ = () => {
  const [t, e] = f(!1);
  return d(() => e(!0), []), t;
}, z = (t, e, { autoInvoke: r = !1 } = {}) => {
  const n = l(null), s = (...c) => {
    n.current === void 0 && (n.current = window.setTimeout(() => {
      t(...c), n.current = null;
    }, e));
  }, o = () => {
    n.current !== null && (window.clearTimeout(n.current), n.current = null);
  };
  return d(() => (r && s(), o), [e]), { start: s, clear: o };
}, j = (t, e, { autoInvoke: r = !1 } = {}) => {
  const [n, s] = f(!1), o = l(null), c = l(t), u = () => {
    s((m) => (!m && (o.current === null || o.current === -1) && (o.current = window.setInterval(c.current, e)), !0));
  }, i = () => {
    s(!1), window.clearInterval(o.current ?? -1), o.current = -1;
  }, a = () => {
    n ? i() : u();
  };
  return d(() => (c.current = t, n && u(), i), [t, n, e]), d(() => (r && u(), () => i()), []), { start: u, stop: i, toggle: a, active: n };
};
function b(t, e) {
  if (typeof window > "u")
    return e;
  try {
    const r = window.localStorage.getItem(t);
    return r === null ? e : JSON.parse(r);
  } catch (r) {
    return console.warn(`Error reading localStorage key "${t}":`, r), e;
  }
}
const Q = (t) => {
  const { key: e, defaultValue: r } = t, [n, s] = f(
    () => b(e, r)
  ), o = w(
    (u) => {
      try {
        const i = u instanceof Function ? u(n) : u;
        s(i), window.localStorage.setItem(e, JSON.stringify(i));
      } catch (i) {
        console.warn(`Error setting localStorage key "${e}":`, i);
      }
    },
    [e, n]
  ), c = w(() => {
    try {
      window.localStorage.removeItem(e), s(r);
    } catch (u) {
      console.warn(`Error removing localStorage key "${e}":`, u);
    }
  }, [e, r]);
  return d(() => {
    const u = (i) => {
      if (i.key === e && i.newValue !== null)
        try {
          s(JSON.parse(i.newValue));
        } catch {
          s(r);
        }
      else i.key === e && s(r);
    };
    return window.addEventListener("storage", u), () => window.removeEventListener("storage", u);
  }, [e, r]), [n, o, c];
}, L = (t, e) => {
  typeof t == "function" ? t(e) : typeof t == "object" && t !== null && "current" in t && (t.current = e);
}, R = (...t) => (e) => {
  t.forEach((r) => L(r, e));
}, W = (...t) => R(...t), q = (t = !1, e) => {
  const { onOpen: r, onClose: n } = e || {}, [s, o] = f(t), c = () => {
    o((a) => a || (r == null || r(), !0));
  }, u = () => {
    o((a) => a && (n == null || n(), !1));
  };
  return [s, { open: c, close: u, toggle: () => {
    s ? u() : c();
  } }];
};
export {
  E as useCallbackRef,
  k as useClickOutside,
  O as useCounter,
  D as useDebouncedCallback,
  A as useDebouncedState,
  F as useDebouncedValue,
  q as useDisclosure,
  H as useEvent,
  M as useFocusDetection,
  re as useInfiniteScroll,
  N as useIntersection,
  j as useInterval,
  V as useLayoutConfig,
  Q as useLocalStorage,
  B as useMediaQuery,
  W as useMergedRef,
  $ as useMounted,
  _ as usePreviousValue,
  J as useReactiveSet,
  p as useRerender,
  ee as useResponsive,
  P as useStateHistory,
  Y as useTheme,
  z as useTimeout,
  U as useToggle,
  C as useWindowEvent
};
