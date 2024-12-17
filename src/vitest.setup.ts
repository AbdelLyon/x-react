/// <reference types="vitest" />

import "@testing-library/jest-dom";

// globalThis.matchMedia = (query: string): MediaQueryList => ({
//   matches: query === "(min-width: 768px)",
//   media: query,
//   onchange: null,
//   addListener: () => {},
//   removeListener: () => {},
//   addEventListener: () => {},
//   removeEventListener: () => {},
//   dispatchEvent: () => true,
// });

global.ResizeObserver = class {
  observe() {}
  unobserve() {}
  disconnect() {}
};
