export type ButtonSize = 'ExtraLarge' | 'Large' | 'Medium' | 'Small';
export type ButtonColor = 'Primary' | 'AlterNative' | 'Normal' | 'white';

export interface ButtonProps {
    size: ButtonSize;
    color?: ButtonColor;
    line?: boolean;
    onClick: () => void;
}