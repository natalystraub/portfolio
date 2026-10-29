import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react';
import type { ButtonVariant } from '../types/button';

type BaseProps = {
  variant?: ButtonVariant;
  className?: string;
  children: ReactNode;
};

type AnchorProps = BaseProps &
  Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'className'> & { href: string };

type NativeButtonProps = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'className'> & { href?: undefined };

type ButtonProps = AnchorProps | NativeButtonProps;

const VARIANT_CLASSES: Record<ButtonVariant, string> = {
  primary: 'border-(--blue) bg-(--blue) text-white shadow-[0_10px_34px_-10px_var(--glow)]',
  secondary: 'border-(--line) bg-(--card) text-(--ink)',
};

export function Button({ variant = 'secondary', className = '', children, ...props }: ButtonProps) {
  const classes = `inline-flex items-center gap-2 rounded-[10px] border px-5 py-[11px] text-[14.5px] font-semibold no-underline transition-transform hover:-translate-y-0.5 ${VARIANT_CLASSES[variant]} ${className}`;

  if (props.href) {
    return (
      <a className={classes} {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...(props as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  );
}
