import { forwardRef, useMemo, type ReactNode } from 'react'

import objStr from 'obj-str'

import { addExtraClassNames } from '@tuliomssantos/add-extra-class-names'

import styles from './styles.module.css'

export type ButtonVariant = 'primary' | 'secondary'

export type ButtonSize = 'small' | 'medium' | 'large'

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {
  children: ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
}

export const generateButtonClassNames = (
  variant: ButtonVariant,
  size: ButtonSize,
  classNames: string | undefined
) =>
  addExtraClassNames(
    objStr({
      [styles.button]: true,
      [styles[`button__${variant}`]]: true,
      [styles[`button__${size}`]]: true,
    }),
    classNames
  )

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, variant = 'primary', size = 'medium', ...rest }, ref) => {
    const classNames = useMemo(
      () => generateButtonClassNames(variant, size, rest.className),
      [variant, size, rest.className]
    )

    return (
      <button {...rest} ref={ref} className={classNames}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button
