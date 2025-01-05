var __defProp = Object.defineProperty;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a2, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a2, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a2, prop, b[prop]);
    }
  return a2;
};
import { u } from "../useTheme-C70IJysd.js";
import { u as u2, a } from "../useResponsive-DIJqCacg.js";
import { useRef, useEffect, useState, useReducer, useCallback } from "react";
import { u as u3 } from "../useInfiniteScroll-CvJJSKPz.js";
import { limitValue } from "../utils/utils.es.js";
const useLayoutConfig = (options = {}) => {
  const { navbar, sidebar } = options;
  return {
    navbar: navbar ? __spreadValues({
      className: "fixed top-0 z-40"
    }, navbar) : void 0,
    sidebar: sidebar ? __spreadValues({
      className: "fixed z-30"
    }, sidebar) : void 0
  };
};
const DEFAULT_EVENTS = ["mousedown", "touchstart"];
const useClickOutside = (handler, events, nodes) => {
  const ref = useRef(null);
  useEffect(() => {
    const listener = (event) => {
      const { target } = event != null ? event : {};
      if (Array.isArray(nodes)) {
        const shouldIgnore = (target == null ? void 0 : target.hasAttribute("data-ignore-outside-clicks")) || !document.body.contains(target) && target.tagName !== "HTML";
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
const containsRelatedTarget = (event) => {
  if (event.currentTarget instanceof HTMLElement && event.relatedTarget instanceof HTMLElement) {
    return event.currentTarget.contains(event.relatedTarget);
  }
  return false;
};
const useFocusDetection = ({
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
        onFocus == null ? void 0 : onFocus(event);
      }
    };
    const handleFocusOut = (event) => {
      if (focusedRef.current && !containsRelatedTarget(event)) {
        _setFocused(false);
        onBlur == null ? void 0 : onBlur(event);
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
const useWindowEvent = (type, listener, options) => {
  useEffect(() => {
    window.addEventListener(type, listener, options);
    return () => window.removeEventListener(type, listener, options);
  }, [type, listener]);
};
const useIntersection = (options) => {
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
const DEFAULT_OPTIONS = {
  min: -Infinity,
  max: Infinity
};
const useCounter = (initialValue = 0, options) => {
  const { min, max } = __spreadValues(__spreadValues({}, DEFAULT_OPTIONS), options);
  const [count, setCount] = useState(
    limitValue(initialValue, min, max)
  );
  const increment = () => setCount((current) => limitValue(current + 1, min, max));
  const decrement = () => setCount((current) => limitValue(current - 1, min, max));
  const set = (value) => setCount(limitValue(value, min, max));
  const reset = () => setCount(limitValue(initialValue, min, max));
  return [count, { increment, decrement, set, reset }];
};
const useCallbackRef = (callback) => {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  });
  return (...args) => {
    var _a;
    return (_a = callbackRef.current) == null ? void 0 : _a.call(callbackRef, ...args);
  };
};
const useDebouncedCallback = (callback, delay) => {
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
const useDebouncedState = (defaultValue, wait, options = { leading: false }) => {
  const [value, setValue] = useState(defaultValue);
  const timeoutRef = useRef(null);
  const leadingRef = useRef(true);
  const clearTimeout = () => {
    if (timeoutRef.current !== null) {
      window.clearTimeout(timeoutRef.current);
    }
  };
  useEffect(() => clearTimeout, []);
  const debouncedSetValue = (newValue) => {
    clearTimeout();
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
const useDebouncedValue = (value, wait, options = { leading: false }) => {
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
const useEvent = (type, listener, options) => {
  const ref = useRef(null);
  useEffect(() => {
    if (ref.current) {
      ref.current.addEventListener(type, listener, options);
      const currentRef = ref.current;
      return () => currentRef == null ? void 0 : currentRef.removeEventListener(type, listener, options);
    }
    return void 0;
  }, [listener, options, type]);
  return ref;
};
const usePreviousValue = (value) => {
  const ref = useRef(void 0);
  useEffect(() => {
    ref.current = value;
  }, [value]);
  return ref.current;
};
const reducer = (value) => (value + 1) % 1e6;
const useRerender = () => {
  const [, update] = useReducer(reducer, 0);
  return update;
};
const useReactiveSet = (values) => {
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
const useStateHistory = (initialValue) => {
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
const useToggle = (options = [false, true]) => {
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
const useMounted = () => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  return mounted;
};
const useTimeout = (callback, delay, { autoInvoke = false } = {}) => {
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
const useInterval = (fn, interval, { autoInvoke = false } = {}) => {
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
    var _a;
    setActive(false);
    window.clearInterval((_a = intervalRef.current) != null ? _a : -1);
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
const useLocalStorage = (props) => {
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
        } catch (e) {
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
const assignRef = (ref, value) => {
  if (typeof ref === "function") {
    ref(value);
  } else if (typeof ref === "object" && ref !== null && "current" in ref) {
    ref.current = value;
  }
};
const mergeRefs = (...refs) => {
  return (node) => {
    refs.forEach((ref) => assignRef(ref, node));
  };
};
const useMergedRef = (...refs) => {
  return mergeRefs(...refs);
};
const useDisclosure = (initialState = false, callbacks) => {
  const { onOpen, onClose } = callbacks || {};
  const [opened, setOpened] = useState(initialState);
  const open = () => {
    setOpened((isOpened) => {
      if (!isOpened) {
        onOpen == null ? void 0 : onOpen();
        return true;
      }
      return isOpened;
    });
  };
  const close = () => {
    setOpened((isOpened) => {
      if (isOpened) {
        onClose == null ? void 0 : onClose();
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
export {
  useCallbackRef,
  useClickOutside,
  useCounter,
  useDebouncedCallback,
  useDebouncedState,
  useDebouncedValue,
  useDisclosure,
  useEvent,
  useFocusDetection,
  u3 as useInfiniteScroll,
  useIntersection,
  useInterval,
  useLayoutConfig,
  useLocalStorage,
  u2 as useMediaQuery,
  useMergedRef,
  useMounted,
  usePreviousValue,
  useReactiveSet,
  useRerender,
  a as useResponsive,
  useStateHistory,
  u as useTheme,
  useTimeout,
  useToggle,
  useWindowEvent
};
//# sourceMappingURL=hooks.es.js.map
