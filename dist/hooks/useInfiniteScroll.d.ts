export interface UseInfiniteScrollProps {
    /** Active/désactive le scroll infini */
    isEnabled?: boolean;
    /** Indique s'il y a plus de données à charger */
    hasMore?: boolean;
    /** Distance en pixels avant le bas pour déclencher le chargement */
    distance?: number;
    /** Utilise un élément loader avec Intersection Observer */
    shouldUseLoader?: boolean;
    /** Callback appelé quand il faut charger plus de données */
    onLoadMore?: () => void;
    /** Délai de debounce pour les événements scroll (ms) */
    debounceDelay?: number;
    /** Seuil pour l'Intersection Observer */
    threshold?: number;
}
export interface UseInfiniteScrollReturn {
    /** Ref pour l'élément loader (utilisé avec shouldUseLoader=true) */
    loaderRef: React.RefObject<HTMLElement | null>;
    /** Ref pour le conteneur de scroll */
    scrollContainerRef: React.RefObject<HTMLElement | null>;
    /** Indique si un chargement est en cours */
    isLoading: boolean;
    /** Force le chargement de nouvelles données */
    triggerLoadMore: () => void;
}
export declare const useInfiniteScroll: (props?: UseInfiniteScrollProps) => UseInfiniteScrollReturn;
