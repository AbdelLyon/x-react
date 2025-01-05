import * as react from 'react';
import { ComponentType, AnchorHTMLAttributes } from 'react';
import { ButtonProps as ButtonProps$1 } from '@nextui-org/react';

interface ButtonProps extends ButtonProps$1 {
    LinkComponent?: ComponentType<AnchorHTMLAttributes<HTMLAnchorElement>>;
    classNames?: {
        base?: string;
        beforeContent?: string;
        afterContent?: string;
        content?: string;
    };
}
declare const Button: react.ForwardRefExoticComponent<Omit<ButtonProps, "ref"> & react.RefAttributes<HTMLButtonElement>>;

export { Button as B, type ButtonProps as a };
