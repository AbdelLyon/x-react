# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

x-react is a modern React component library built with TypeScript and Vite. It provides a comprehensive set of UI components, hooks, and utilities designed for tree-shaking optimization and modular usage. The library is built on top of HeroUI/NextUI and uses Tailwind CSS for styling.

## Essential Commands

### Development
- `pnpm install` - Install dependencies
- `pnpm build` - Build the library for production
- `pnpm lint` - Run ESLint checks
- `pnpm test` - Run all tests with Vitest
- `pnpm test:cov` - Run tests with coverage report
- `pnpm clean` - Clean node_modules, dist, and logs, then reinstall
- `pnpm reset` - Clean and rebuild the project

### Testing Individual Components
Use Vitest filtering to run specific tests:
```bash
pnpm test Button.test.tsx
pnpm test hooks/useCounter
```

## Architecture Overview

### Modular Export System
The library uses a dual export strategy:
- **Convenience exports**: Import everything from main entry (`import { Button } from "x-react"`)
- **Optimized imports**: Import specific modules for better tree-shaking (`import { Button } from "x-react/button"`)

Each module has its own `/index.ts` that imports the CSS and exports components/hooks, enabling independent usage without style conflicts.

### Build Configuration
- **Primary build**: Vite handles the main library build with ES modules
- **Module splitting**: Each component/hook category builds to separate dist folders
- **External dependencies**: React, React DOM, Framer Motion, Tabler Icons, and HeroUI are externalized
- **Tailwind config transformation**: Custom Vite plugin transforms tailwind config paths for distribution

### Component Architecture
Components follow these patterns:
- Each component has its own folder with index.ts for exports
- Components import `"@/index.css"` for base styles  
- TypeScript with strict type checking
- Uses `@/` alias for src directory imports

### Theme System
- Built on HeroUI's theme system with custom light/dark themes
- Uses next-themes for theme switching with class-based dark mode
- Custom color palettes defined in `src/theme/lightTheme.ts` and `src/theme/darkTheme.ts`
- ThemeProvider wraps next-themes with sensible defaults

### Hook Categories
The library provides extensive custom hooks organized by purpose:
- **State management**: useControlledState, useDisclosure, useToggle, useStateHistory
- **Performance**: useDebouncedCallback, useDebouncedState, useDebouncedValue, useMounted
- **DOM interaction**: useClickOutside, useFocusDetection, useWindowEvent, useIntersection
- **Utilities**: useMediaQuery, useResponsive, useLocalStorage, useMergedRef
- **Data handling**: useInfiniteScroll, useReactiveSet, useCounter

### Testing Setup
- **Framework**: Vitest with jsdom environment
- **Setup file**: `src/tests/vitest.setup.ts` mocks browser APIs (matchMedia, ResizeObserver, IntersectionObserver)
- **Coverage**: V8 provider with text, JSON, and HTML reports
- **Testing Library**: React Testing Library with Jest DOM matchers

## Key Implementation Patterns

### Component Structure
```typescript
// Each component index.ts follows this pattern:
import "@/index.css";
export { ComponentName } from "@/path/ComponentName";
```

### Hook Exports
Hooks are grouped by functionality and exported with their types:
```typescript
export { useHookName, type UseHookOptions } from "@/hooks/useHookName";
```

### Theme Integration
Components leverage the HeroUI theme system while extending it with custom color definitions for consistent branding across light/dark modes.

### Build Optimization
The build process creates:
- Individual module builds for tree-shaking
- Shared CSS bundle
- Type definitions for each module (both `module.d.ts` and `module/index.d.ts` formats)
- Transformed Tailwind configuration for consumers

### TypeScript Declaration Files
The library generates TypeScript declarations in two formats to support different import patterns:
- Root-level declarations: `dist/datagrid.d.ts` for imports like `import { DataGrid } from "x-react/datagrid"`
- Nested declarations: `dist/datagrid/index.d.ts` for package.json exports mapping

This dual approach ensures compatibility with various bundlers and import strategies while maintaining proper type inference.