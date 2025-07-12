/// <reference types="vitest" />

import "@testing-library/jest-dom";
globalThis.matchMedia = (query: string): MediaQueryList => ({
  matches: query === "(min-width: 768px)",
  media: query,
  onchange: null,
  addListener: (): void => {},
  removeListener: (): void => {},
  addEventListener: (): void => {},
  removeEventListener: (): void => {},
  dispatchEvent: (): boolean => true,
});

global.ResizeObserver = class {
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
};

global.IntersectionObserver = class {
  constructor(
    callback: IntersectionObserverCallback,
    options?: IntersectionObserverInit
  ) {
    this.callback = callback;
    this.options = options;
  }
  
  callback: IntersectionObserverCallback;
  options?: IntersectionObserverInit;
  
  observe(): void {}
  unobserve(): void {}
  disconnect(): void {}
};
