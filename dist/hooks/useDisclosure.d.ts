export declare const useDisclosure: (initialState?: boolean, callbacks?: {
    onOpen?: () => void;
    onClose?: () => void;
}) => [boolean, {
    open: () => void;
    close: () => void;
    toggle: () => void;
}];
