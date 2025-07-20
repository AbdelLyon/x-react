# Documentation des Composants x-react

x-react est une librairie de composants React moderne construite avec TypeScript, Vite, et basée sur HeroUI/NextUI. Elle fournit un ensemble complet de composants UI, hooks et utilitaires optimisés pour le tree-shaking.

## Table des Matières

- [Installation et Usage](#installation-et-usage)
- [Composants UI](#composants-ui)
  - [Button](#button)
  - [Card](#card)
  - [DataGrid](#datagrid)
  - [Input](#input)
  - [Modal](#modal)
  - [Navbar](#navbar)
  - [Autres Composants](#autres-composants)
- [Hooks Personnalisés](#hooks-personnalisés)
- [Thèmes et Styling](#thèmes-et-styling)

## Installation et Usage

### Import Global
```typescript
import { Button, Card, DataGrid } from "x-react";
```

### Import Optimisé (Recommandé)
```typescript
import { Button } from "x-react/button";
import { Card } from "x-react/card";
import { DataGrid } from "x-react/datagrid";
```

## Composants UI

### Button

Composant bouton avec support des icônes, états de chargement et variants multiples.

**Props:**
```typescript
interface ButtonProps {
  variant?: 'solid' | 'bordered' | 'flat' | 'faded' | 'light' | 'shadow' | 'ghost';
  color?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  'aria-label'?: string;
}
```

**Exemples:**
```typescript
import { Button } from "x-react/button";
import { IconDownload, IconPlus } from "@tabler/icons-react";

// Bouton basique
<Button>Cliquer ici</Button>

// Bouton avec variantes
<Button variant="bordered" color="primary">
  Bouton primaire
</Button>

// Bouton avec icônes
<Button leftIcon={<IconPlus />} color="success">
  Ajouter
</Button>

// Bouton avec chargement
<Button loading={isLoading} color="primary">
  Sauvegarder
</Button>

// Bouton pleine largeur
<Button fullWidth variant="flat">
  Bouton large
</Button>
```

---

### Card

Composant carte avec support pour header, footer et classes personnalisées.

**Props:**
```typescript
interface CardProps {
  header?: React.ReactNode;
  footer?: React.ReactNode;
  footerProps?: CardFooterProps;
  classNames?: Partial<Record<"base" | "header" | "body" | "footer", string>>;
  'aria-label'?: string;
}
```

**Exemples:**
```typescript
import { Card } from "x-react/card";

// Carte basique
<Card>
  <p>Contenu de la carte</p>
</Card>

// Carte avec header et footer
<Card 
  header={<h3>Titre de la carte</h3>}
  footer={<Button>Action</Button>}
>
  <p>Contenu principal de la carte</p>
</Card>

// Carte avec classes personnalisées
<Card 
  classNames={{
    base: "bg-gradient-to-r from-blue-500 to-purple-600",
    header: "text-white font-bold",
    body: "text-white"
  }}
  header="Carte Stylée"
>
  Contenu avec style personnalisé
</Card>
```

---

### DataGrid

Composant de grille de données avancé avec tri, pagination et scroll infini.

**Props:**
```typescript
interface DataGridProps<T extends { id: string | number }> {
  rows: T[];
  columns: ColumnDefinition<T>[];
  variant?: 'bordered' | 'striped' | 'unstyled';
  isLoading?: boolean;
  isFetching?: boolean;
  hasMoreData?: boolean;
  fetchNextPage?: () => void;
  onSortChange?: (column: keyof T, direction: SortDirection) => void;
  skeletonRowsCount?: number;
}
```

**Exemples:**
```typescript
import { DataGrid, ColumnDefinition } from "x-react/datagrid";

interface User {
  id: number;
  name: string;
  email: string;
  status: 'active' | 'inactive';
}

const columns: ColumnDefinition<User>[] = [
  {
    key: 'name',
    label: 'Nom',
    sortable: true,
  },
  {
    key: 'email',
    label: 'Email',
  },
  {
    key: 'status',
    label: 'Statut',
    render: (value) => (
      <Chip color={value === 'active' ? 'success' : 'default'}>
        {value}
      </Chip>
    ),
  },
];

const users: User[] = [
  { id: 1, name: 'John Doe', email: 'john@example.com', status: 'active' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'inactive' },
];

// DataGrid basique
<DataGrid rows={users} columns={columns} />

// DataGrid avec tri et scroll infini
<DataGrid 
  rows={users}
  columns={columns}
  variant="striped"
  hasMoreData={hasMore}
  fetchNextPage={loadMore}
  onSortChange={(column, direction) => {
    console.log(`Tri par ${column} : ${direction}`);
  }}
/>
```

---

### Input

Composant d'entrée avec validation personnalisée et support des mots de passe.

**Props:**
```typescript
interface InputProps {
  type?: 'text' | 'password' | 'email' | 'number' | 'url' | 'tel';
  label?: string;
  placeholder?: string;
  value?: string;
  defaultValue?: string;
  isRequired?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
  variant?: 'bordered' | 'flat' | 'faded' | 'underlined';
  customValidation?: (value: string) => boolean | string;
  containerClasses?: string;
}
```

**Exemples:**
```typescript
import { Input } from "x-react/form";

// Input basique
<Input 
  label="Nom d'utilisateur"
  placeholder="Entrez votre nom"
/>

// Input avec validation
<Input 
  type="email"
  label="Email"
  isRequired
  customValidation={(value) => {
    if (!value.includes('@')) return 'Email invalide';
    return true;
  }}
/>

// Input mot de passe (toggle automatique)
<Input 
  type="password"
  label="Mot de passe"
  placeholder="Entrez votre mot de passe"
/>

// Input avec variant
<Input 
  variant="underlined"
  label="Commentaire"
  placeholder="Votre commentaire..."
/>
```

---

### Modal

Composant modal avec trigger, gestion d'actions et footer automatique.

**Props:**
```typescript
interface ModalProps {
  trigger: React.ReactNode;
  children: React.ReactNode;
  title?: React.ReactNode;
  footer?: React.ReactNode;
  onAction?: () => void | Promise<void>;
  buttonCloseLabel?: string;
  buttonActionLabel?: string;
  buttonCloseProps?: ButtonProps;
  buttonActionProps?: ButtonProps;
  defaultBackdrop?: 'transparent' | 'opaque' | 'blur';
}
```

**Exemples:**
```typescript
import { Modal } from "x-react/modal";
import { Button } from "x-react/button";

// Modal basique
<Modal 
  trigger={<Button>Ouvrir Modal</Button>}
  title="Confirmation"
>
  Êtes-vous sûr de vouloir continuer ?
</Modal>

// Modal avec action
<Modal 
  trigger={<Button color="danger">Supprimer</Button>}
  title="Supprimer l'élément"
  onAction={async () => {
    await deleteItem();
  }}
  buttonActionLabel="Confirmer"
  buttonActionProps={{ color: "danger" }}
>
  Cette action est irréversible.
</Modal>

// Modal avec footer personnalisé
<Modal 
  trigger={<Button>Paramètres</Button>}
  title="Paramètres utilisateur"
  footer={
    <div className="flex gap-2">
      <Button variant="flat">Annuler</Button>
      <Button color="primary">Sauvegarder</Button>
    </div>
  }
>
  <div>Contenu des paramètres...</div>
</Modal>
```

---

### Navbar

Composant de navigation responsive avec support mobile.

**Props:**
```typescript
interface NavbarProps {
  appName?: React.ReactNode;
  appLogo?: React.ReactNode;
  profile?: React.ReactNode;
  navigationItems?: NavigationItem[];
  menuItems?: NavigationItem[];
  onItemClick?: (item: NavigationItem) => void;
  isMenuOpen?: boolean;
  onMenuOpenChange?: (isOpen: boolean) => void;
}

interface NavigationItem {
  key: string;
  label?: string;
  href?: string;
  isActive?: boolean;
  startContent?: React.ReactNode;
  endContent?: React.ReactNode;
}
```

**Exemples:**
```typescript
import { Navbar } from "x-react/navbar";
import { Avatar } from "x-react/avatar";

const navigationItems = [
  { key: "dashboard", label: "Dashboard", href: "/dashboard" },
  { key: "users", label: "Utilisateurs", href: "/users" },
  { key: "settings", label: "Paramètres", href: "/settings" },
];

// Navbar complète
<Navbar 
  appName="Mon Application"
  appLogo={<img src="/logo.png" alt="Logo" />}
  navigationItems={navigationItems}
  profile={
    <Avatar 
      src="/user-avatar.jpg"
      name="John Doe"
      size="sm"
    />
  }
  onItemClick={(item) => {
    router.push(item.href);
  }}
/>
```

---

### Autres Composants

La librairie inclut également :

- **Alert** : Composant d'alerte avec variants
- **Avatar** : Avatar utilisateur avec fallback
- **Accordion** : Accordéon pliable
- **Badge** : Badge de notification
- **Chip** : Puces avec couleurs
- **DatePicker** : Sélecteur de date
- **Drawer** : Panneau latéral
- **Dropdown** : Menu déroulant
- **Pagination** : Navigation de pages
- **Progress** : Barres de progression
- **Skeleton** : États de chargement
- **Slider** : Curseur de valeur
- **Spinner** : Indicateur de chargement
- **Tabs** : Onglets de navigation
- **Tooltip** : Info-bulles
- **Typography** : Composants de texte

## Hooks Personnalisés

La librairie propose de nombreux hooks utilitaires :

### Gestion d'État
- `useControlledState` : État contrôlé/non contrôlé
- `useDisclosure` : Gestion open/close
- `useToggle` : Bascule booléenne
- `useCounter` : Compteur avec limites
- `useStateHistory` : Historique d'état avec undo/redo

### Performance
- `useDebouncedCallback` : Callback avec debounce
- `useDebouncedState` : État avec debounce
- `useDebouncedValue` : Valeur avec debounce
- `useMounted` : Vérification du montage

### Interaction DOM
- `useClickOutside` : Détection clic externe
- `useFocusDetection` : Détection du focus
- `useWindowEvent` : Événements window
- `useIntersection` : Intersection Observer

### Utilitaires
- `useMediaQuery` : Media queries responsive
- `useLocalStorage` : Persistance locale
- `useMergedRef` : Fusion de refs
- `useReactiveSet` : Set réactif

**Exemples d'hooks:**
```typescript
import { useToggle, useCounter, useDebouncedValue } from "x-react/hooks";

// Toggle simple
const [isOpen, toggle] = useToggle();

// Compteur avec limites
const [count, { increment, decrement, reset }] = useCounter(0, { min: 0, max: 10 });

// Valeur avec debounce
const [search, setSearch] = useState('');
const debouncedSearch = useDebouncedValue(search, 300);
```

## Thèmes et Styling

### ThemeProvider
```typescript
import { ThemeProvider } from "x-react/providers";

<ThemeProvider>
  <App />
</ThemeProvider>
```

### Toggle de thème
```typescript
import { ToggleTheme } from "x-react/theme";

<ToggleTheme />
```

La librairie supporte les thèmes sombre/clair avec next-themes et utilise Tailwind CSS pour le styling. Tous les composants sont optimisés pour le tree-shaking et peuvent être importés individuellement.