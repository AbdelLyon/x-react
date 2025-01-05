import * as react from 'react';
import { AlertProps, ButtonProps } from '@nextui-org/react';

interface Props extends AlertProps {
    closeButtonProps?: ButtonProps;
    onVisibleChange?: (isVisible: boolean) => void;
    onClose?: () => void;
}
declare const Alert: react.ForwardRefExoticComponent<Omit<Props, "ref"> & react.RefAttributes<HTMLDivElement>>;

export { Alert };
