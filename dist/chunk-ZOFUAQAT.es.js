import { debounce, limitValue } from './chunk-HWWI3HGE.es.js';
import { useState, useRef, useCallback, useEffect, useLayoutEffect, useReducer } from 'react';

// src/hooks/useLayoutConfig.ts
var useLayoutConfig = (options = {}) => {
  const { navbar, sidebar } = options;
  return {
    navbar: navbar ? {
      className: "fixed top-0 z-40",
      ...navbar
    } : void 0,
    sidebar: sidebar ? {
      className: "fixed z-30",
      ...sidebar
    } : void 0
  };
};
function attachMediaListener(query, callback) {
  query.addEventListener("change", callback);
  return () => query.removeEventListener("change", callback);
}
function getInitialValue(query, initialValue) {
  if (typeof initialValue === "boolean") {
    return initialValue;
  }
  if (typeof window !== "undefined" && "matchMedia" in window) {
    try {
      return window.matchMedia(query).matches;
    } catch (e) {
      console.warn("Error while matching media query:", e);
      return false;
    }
  }
  return false;
}
function useMediaQuery(query, options = {}) {
  const { getInitialValueInEffect = true, initialValue } = options;
  const [matches, setMatches] = useState(
    () => getInitialValueInEffect ? initialValue ?? false : getInitialValue(query, initialValue)
  );
  const queryRef = useRef(null);
  const handleChange = useCallback((event) => {
    setMatches(event.matches);
  }, []);
  useEffect(() => {
    if (typeof window === "undefined" || !("matchMedia" in window)) {
      return void 0;
    }
    try {
      queryRef.current = window.matchMedia(query);
      if (getInitialValueInEffect) {
        setMatches(queryRef.current.matches);
      }
      return attachMediaListener(queryRef.current, handleChange);
    } catch (e) {
      console.error("Error setting up media query:", e);
      return void 0;
    }
  }, [query, getInitialValueInEffect, handleChange]);
  return matches;
}

// src/hooks/useResponsive.ts
var MEDIA_QUERIES = {
  desktop: "(min-width: 1024px)",
  tablet: "(min-width: 768px) and (max-width: 1023px)"
};
var useResponsive = (customQuery) => {
  const isDesktop = useMediaQuery(MEDIA_QUERIES.desktop);
  const isTablet = useMediaQuery(MEDIA_QUERIES.tablet);
  const isMobile = !isDesktop && !isTablet;
  const customMatch = useMediaQuery(
    typeof customQuery === "string" && customQuery.length > 0 ? customQuery : ""
  );
  const getBreakpoint = () => {
    if (isDesktop === true) {
      return "isDesktop";
    }
    if (isTablet === true) {
      return "isTablet";
    }
    return "isMobile";
  };
  const isBreakpoint = (breakpoint) => {
    const breakpoints = {
      isDesktop,
      isTablet,
      isMobile
    };
    return breakpoints[breakpoint] === true;
  };
  const hasValidCustomQuery = typeof customQuery === "string" && customQuery.length > 0;
  return {
    isDesktop,
    isTablet,
    isMobile,
    matches: hasValidCustomQuery ? customMatch : void 0,
    getBreakpoint,
    isBreakpoint
  };
};
var DEFAULT_EVENTS = ["mousedown", "touchstart"];
var useClickOutside = (handler, events, nodes) => {
  const ref = useRef(null);
  useEffect(() => {
    const listener = (event) => {
      const { target } = event ?? {};
      if (Array.isArray(nodes)) {
        const shouldIgnore = target?.hasAttribute("data-ignore-outside-clicks") || !document.body.contains(target) && target.tagName !== "HTML";
        const shouldTrigger = nodes.every(
          (node) => !!node && !event.composedPath().includes(node)
        );
        if (shouldTrigger && !shouldIgnore) {
          handler();
        }
      } else if (ref.current && !ref.current.contains(target)) {
        handler();
      }
    };
    (events || DEFAULT_EVENTS).forEach(
      (fn) => document.addEventListener(fn, listener)
    );
    return () => {
      (events || DEFAULT_EVENTS).forEach(
        (fn) => document.removeEventListener(fn, listener)
      );
    };
  }, [ref, handler, nodes]);
  return ref;
};
var containsRelatedTarget = (event) => {
  if (event.currentTarget instanceof HTMLElement && event.relatedTarget instanceof HTMLElement) {
    return event.currentTarget.contains(event.relatedTarget);
  }
  return false;
};
var useFocusDetection = ({
  onBlur,
  onFocus
} = {}) => {
  const ref = useRef(null);
  const [focused, setFocused] = useState(false);
  const focusedRef = useRef(false);
  const _setFocused = (value) => {
    setFocused(value);
    focusedRef.current = value;
  };
  useEffect(() => {
    const handleFocusIn = (event) => {
      if (!focusedRef.current) {
        _setFocused(true);
        onFocus?.(event);
      }
    };
    const handleFocusOut = (event) => {
      if (focusedRef.current && !containsRelatedTarget(event)) {
        _setFocused(false);
        onBlur?.(event);
      }
    };
    if (ref.current) {
      const element = ref.current;
      element.addEventListener("focusin", handleFocusIn);
      element.addEventListener("focusout", handleFocusOut);
      return () => {
        element.removeEventListener("focusin", handleFocusIn);
        element.removeEventListener("focusout", handleFocusOut);
      };
    }
  }, [onFocus, onBlur]);
  return { ref, focused };
};
var useWindowEvent = (type, listener, options) => {
  useEffect(() => {
    window.addEventListener(type, listener, options);
    return () => window.removeEventListener(type, listener, options);
  }, [type, listener]);
};
var useIntersection = (options) => {
  const [entry, setEntry] = useState(null);
  const observer = useRef(null);
  const ref = (element) => {
    if (observer.current) {
      observer.current.disconnect();
      observer.current = null;
    }
    if (element === null) {
      setEntry(null);
      return;
    }
    observer.current = new IntersectionObserver(([_entry]) => {
      setEntry(_entry);
    }, options);
    observer.current.observe(element);
  };
  return { ref, entry };
};
var useInfiniteScroll = (props = {}) => {
  const {
    hasMore = true,
    distance = 250,
    isEnabled = true,
    shouldUseLoader = true,
    onLoadMore
  } = props;
  const scrollContainerRef = useRef(null);
  const loaderRef = useRef(null);
  const observerRef = useRef(null);
  const isLoadingRef = useRef(false);
  const loadMore = useCallback(() => {
    let timer;
    if (!isLoadingRef.current && hasMore && onLoadMore) {
      isLoadingRef.current = true;
      onLoadMore();
      timer = setTimeout(() => {
        isLoadingRef.current = false;
      }, 100);
    }
    return () => clearTimeout(timer);
  }, [hasMore, onLoadMore]);
  useLayoutEffect(() => {
    const scrollContainerNode = scrollContainerRef.current;
    if (!isEnabled || !scrollContainerNode || !hasMore) {
      return;
    }
    if (shouldUseLoader) {
      const loaderNode = loaderRef.current;
      if (!loaderNode) {
        return;
      }
      const options = {
        root: scrollContainerNode,
        rootMargin: `0px 0px ${distance}px 0px`,
        threshold: 0.1
      };
      const observer = new IntersectionObserver((entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          loadMore();
        }
      }, options);
      observer.observe(loaderNode);
      observerRef.current = observer;
      return () => {
        if (observerRef.current) {
          observerRef.current.disconnect();
        }
      };
    }
    const debouncedCheckIfNearBottom = debounce(() => {
      if (scrollContainerNode.scrollHeight - scrollContainerNode.scrollTop <= scrollContainerNode.clientHeight + distance) {
        loadMore();
      }
    }, 100);
    scrollContainerNode.addEventListener("scroll", debouncedCheckIfNearBottom);
    return () => {
      scrollContainerNode.removeEventListener(
        "scroll",
        debouncedCheckIfNearBottom
      );
    };
  }, [hasMore, distance, isEnabled, shouldUseLoader, loadMore]);
  return [loaderRef, scrollContainerRef];
};
var DEFAULT_OPTIONS = {
  min: -Infinity,
  max: Infinity
};
var useCounter = (initialValue = 0, options) => {
  const { min, max } = { ...DEFAULT_OPTIONS, ...options };
  const [count, setCount] = useState(
    limitValue(initialValue, min, max)
  );
  const increment = () => setCount((current) => limitValue(current + 1, min, max));
  const decrement = () => setCount((current) => limitValue(current - 1, min, max));
  const set = (value) => setCount(limitValue(value, min, max));
  const reset = () => setCount(limitValue(initialValue, min, max));
  return [count, { increment, decrement, set, reset }];
};
var useCallbackRef = (callback) => {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  });
  return (...args) => callbackRef.current?.(...args);
};

// src/hooks/useDebouncedCallback.ts
var useDebouncedCallback = (callback, delay) => {
  const handleCallback = useCallbackRef(callback);
  const debounceTimerRef = useRef(0);
  useEffect(() => () => window.clearTimeout(debounceTimerRef.current), []);
  return (...args) => {
    window.clearTimeout(debounceTimerRef.current);
    debounceTimerRef.current = window.setTimeout(
      () => handleCallback(...args),
      delay
    );
  };
};
var useDebouncedState = (defaultValue, wait, options = { leading: false }) => {
  const [value, setValue] = useState(defaultValue);
  const timeoutRef = useRef(null);
  const leadingRef = useRef(true);
  const clearTimeout2 = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
  };
  useEffect(() => clearTimeout2, []);
  const debouncedSetValue = (newValue) => {
    clearTimeout2();
    if (leadingRef.current && options.leading) {
      setValue(newValue);
    } else {
      timeoutRef.current = window.setTimeout(() => {
        leadingRef.current = true;
        setValue(newValue);
      }, wait);
    }
    leadingRef.current = false;
  };
  return [value, debouncedSetValue];
};
var useDebouncedValue = (value, wait, options = { leading: false }) => {
  const [_value, setValue] = useState(value);
  const mountedRef = useRef(false);
  const timeoutRef = useRef(null);
  const cooldownRef = useRef(false);
  const cancel = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
  };
  useEffect(() => {
    if (mountedRef.current) {
      if (!cooldownRef.current && options.leading) {
        cooldownRef.current = true;
        setValue(value);
      } else {
        cancel();
        timeoutRef.current = window.setTimeout(() => {
          cooldownRef.current = false;
          setValue(value);
        }, wait);
      }
    }
  }, [value, options.leading, wait]);
  useEffect(() => {
    mountedRef.current = true;
    return cancel;
  }, []);
  return [_value, cancel];
};
var useEvent = (type, listener, options) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener(type, listener, options);
      const currentRef = ref.current;
      return () => currentRef?.removeEventListener(type, listener, options);
    }
    return void 0;
  }, [listener, options, type]);
  return ref;
};
var usePreviousValue = (value) => {
  const ref = useRef(void 0);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
var reducer = (value) => (value + 1) % 1e6;
var useRerender = () => {
  const [, update] = useReducer(reducer, 0);
  return update;
};

// src/hooks/useReactiveSet.ts
var useReactiveSet = (values) => {
  const setRef = useRef(new Set(values));
  const forceUpdate = useRerender();
  setRef.current.add = (...args) => {
    const res = Set.prototype.add.apply(setRef.current, args);
    forceUpdate();
    return res;
  };
  setRef.current.clear = (...args) => {
    Set.prototype.clear.apply(setRef.current, args);
    forceUpdate();
  };
  setRef.current.delete = (...args) => {
    const res = Set.prototype.delete.apply(setRef.current, args);
    forceUpdate();
    return res;
  };
  return setRef.current;
};
var useStateHistory = (initialValue) => {
  const [state, setState] = useState({
    history: [initialValue],
    current: 0
  });
  const handlers = {
    set: (value) => {
      setState((currentState) => {
        const nextState = [
          ...currentState.history.slice(0, currentState.current + 1),
          value
        ];
        return {
          history: nextState,
          current: nextState.length - 1
        };
      });
    },
    back: (steps = 1) => {
      setState((currentState) => ({
        history: currentState.history,
        current: Math.max(0, currentState.current - steps)
      }));
    },
    forward: (steps = 1) => {
      setState((currentState) => ({
        history: currentState.history,
        current: Math.min(
          currentState.history.length - 1,
          currentState.current + steps
        )
      }));
    },
    reset: () => {
      setState({
        history: [initialValue],
        current: 0
      });
    }
  };
  return [state.history[state.current], handlers, state];
};
var useToggle = (options = [false, true]) => {
  const reducer2 = (state, action) => {
    const value = action instanceof Function ? action(state[0]) : action;
    const index = Math.abs(state.indexOf(value));
    return [...state.slice(index), ...state.slice(0, index)];
  };
  const [[currentOption], toggle] = useReducer(reducer2, [...options]);
  return [
    currentOption,
    toggle
  ];
};
var useMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
};
var useTimeout = (callback, delay, { autoInvoke = false } = {}) => {
  const timeoutRef = useRef(null);
  const start = (...params) => {
    if (timeoutRef.current === void 0) {
      timeoutRef.current = window.setTimeout(() => {
        callback(...params);
        timeoutRef.current = null;
      }, delay);
    }
  };
  const clear = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  };
  useEffect(() => {
    if (autoInvoke) {
      start();
    }
    return clear;
  }, [delay]);
  return { start, clear };
};
var useInterval = (fn, interval, { autoInvoke = false } = {}) => {
  const [active, setActive] = useState(false);
  const intervalRef = useRef(null);
  const fnRef = useRef(fn);
  const start = () => {
    setActive((old) => {
      if (!old && (intervalRef.current === null || intervalRef.current === -1)) {
        intervalRef.current = window.setInterval(fnRef.current, interval);
      }
      return true;
    });
  };
  const stop = () => {
    setActive(false);
    window.clearInterval(intervalRef.current ?? -1);
    intervalRef.current = -1;
  };
  const toggle = () => {
    if (active) {
      stop();
    } else {
      start();
    }
  };
  useEffect(() => {
    fnRef.current = fn;
    if (active) {
      start();
    }
    return stop;
  }, [fn, active, interval]);
  useEffect(() => {
    if (autoInvoke) {
      start();
    }
    return () => stop();
  }, []);
  return { start, stop, toggle, active };
};
function getStorageValue(key, defaultValue) {
  if (typeof window === "undefined") {
    return defaultValue;
  }
  try {
    const item = window.localStorage.getItem(key);
    if (item === null) {
      return defaultValue;
    }
    return JSON.parse(item);
  } catch (error) {
    console.warn(`Error reading localStorage key "${key}":`, error);
    return defaultValue;
  }
}
var useLocalStorage = (props) => {
  const { key, defaultValue } = props;
  const [storedValue, setStoredValue] = useState(
    () => getStorageValue(key, defaultValue)
  );
  const setValue = useCallback(
    (value) => {
      try {
        const valueToStore = value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      } catch (error) {
        console.warn(`Error setting localStorage key "${key}":`, error);
      }
    },
    [key, storedValue]
  );
  const removeValue = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(defaultValue);
    } catch (error) {
      console.warn(`Error removing localStorage key "${key}":`, error);
    }
  }, [key, defaultValue]);
  useEffect(() => {
    const handleStorageChange = (event) => {
      if (event.key === key && event.newValue !== null) {
        try {
          setStoredValue(JSON.parse(event.newValue));
        } catch {
          setStoredValue(defaultValue);
        }
      } else if (event.key === key) {
        setStoredValue(defaultValue);
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, [key, defaultValue]);
  return [storedValue, setValue, removeValue];
};

// src/hooks/useMergedRef.ts
var assignRef = (ref, value) => {
  if (typeof ref === "function") {
    ref(value);
  } else if (typeof ref === "object" && ref !== null && "current" in ref) {
    ref.current = value;
  }
};
var mergeRefs = (...refs) => {
  return (node) => {
    refs.forEach((ref) => assignRef(ref, node));
  };
};
var useMergedRef = (...refs) => {
  return mergeRefs(...refs);
};
var useDisclosure = (initialState = false, callbacks) => {
  const { onOpen, onClose } = callbacks || {};
  const [opened, setOpened] = useState(initialState);
  const open = () => {
    setOpened((isOpened) => {
      if (!isOpened) {
        onOpen?.();
        return true;
      }
      return isOpened;
    });
  };
  const close = () => {
    setOpened((isOpened) => {
      if (isOpened) {
        onClose?.();
        return false;
      }
      return isOpened;
    });
  };
  const toggle = () => {
    if (opened) {
      close();
    } else {
      open();
    }
  };
  return [opened, { open, close, toggle }];
};

export { useCallbackRef, useClickOutside, useCounter, useDebouncedCallback, useDebouncedState, useDebouncedValue, useDisclosure, useEvent, useFocusDetection, useInfiniteScroll, useIntersection, useInterval, useLayoutConfig, useLocalStorage, useMediaQuery, useMergedRef, useMounted, usePreviousValue, useReactiveSet, useRerender, useResponsive, useStateHistory, useTimeout, useToggle, useWindowEvent };
//# sourceMappingURL=chunk-ZOFUAQAT.es.js.map
//# sourceMappingURL=chunk-ZOFUAQAT.es.js.map