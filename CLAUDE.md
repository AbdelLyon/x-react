# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

x-react est une bibliothèque de composants React TypeScript modulaire basée sur HeroUI, conçue pour être tree-shakeable avec des exports individuels par module. Le projet utilise Vite pour le build et la configuration, Vitest pour les tests, et Tailwind CSS pour le styling.

## Architecture

### Structure Modulaire
- **Composants par dossier** : Chaque composant UI est dans son propre dossier (button, card, modal, etc.)
- **Exports modulaires** : Chaque module peut être importé individuellement via package.json exports
- **Types centralisés** : Types partagés dans `src/types/` (BaseColor, Variant, Size, etc.)
- **Hooks réutilisables** : Hooks personnalisés dans `src/hooks/`
- **Providers** : ThemeProvider et NextUIProvider dans `src/providers/`

### Build Configuration
- **Vite avec rollup** : Build configuré pour préserver la structure des modules
- **Multiple entry points** : Un entry point par module pour le tree-shaking
- **External dependencies** : React, framer-motion, @heroui/react sont externalisés
- **TypeScript strict** : Configuration TypeScript stricte avec paths alias `@/*`

### Système de Thème
- **HeroUI integration** : Utilise HeroUI comme base avec thèmes light/dark personnalisés
- **Tailwind CSS** : Configuration avec thèmes personnalisés dans `tailwind.config.ts`
- **CSS global** : Styles de base dans `src/index.css` avec scrollbar personnalisée

## Commandes Essentielles

### Développement
```bash
# Build du projet
pnpm build

# Tests avec Vitest
pnpm test

# Tests avec coverage
pnpm test:cov

# Linting
pnpm lint

# Clean et rebuild complet
pnpm reset
```

### Tests
- **Framework** : Vitest avec @testing-library/react
- **Setup** : Configuration dans `src/tests/vitest.setup.ts`
- **Snapshots** : Tests de snapshots pour les composants UI
- **Coverage** : Rapport de couverture disponible via `pnpm test:cov`

## Standards de Code

### TypeScript
- **Strict mode** : Types explicites requis pour les fonctions
- **No any** : Utilisation d'`any` interdite
- **Consistent imports** : Type imports requis avec `import type`
- **Boolean expressions** : Expressions booléennes strictes

### React
- **Hooks rules** : Rules of hooks strictement appliquées
- **Function return types** : Types de retour explicites requis
- **Props typing** : Props typées avec interfaces dédiées

### Styling
- **Tailwind classnames** : Ordre des classes vérifié par ESLint
- **HeroUI components** : Préférer les composants HeroUI comme base
- **Responsive design** : Support mobile-first avec breakpoints

## Conventions de Développement

### Structure des Composants
- Chaque composant dans son dossier avec `ComponentName.tsx` et `index.ts`
- Export nommé dans `index.ts` pour l'auto-import
- Props interface nommée `ComponentNameProps`
- Utilisation des variants HeroUI (color, size, variant, radius)

### Hooks
- Préfixe `use` obligatoire
- Tests unitaires dans `src/tests/`
- Documentation des paramètres et valeurs de retour

### Tests
- Un fichier test par composant/hook
- Utilisation de snapshots pour les composants UI
- Tests d'interaction utilisateur avec user-event
- Mocking des APIs browser (ResizeObserver, matchMedia) dans setup

## Modules Clés

- **form** : Composants de formulaire (Input, Select, Checkbox, etc.)
- **datagrid** : DataGrid avec état géré par `useDataGridState`
- **layout** : Container, Layout avec `useLayoutConfig`
- **providers** : ThemeProvider et NextUIProvider
- **hooks** : Hooks utilitaires (useLocalStorage, useMediaQuery, etc.)
- **utils** : Utilitaires partagés