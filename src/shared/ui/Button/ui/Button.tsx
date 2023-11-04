import React, { ButtonHTMLAttributes } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './Button.module.scss'

type ButtonPropsType = {
  className?: string
  theme?: ThemeButton
} & ButtonHTMLAttributes<HTMLButtonElement>

export enum ThemeButton {
  CLEAR = 'clear',
}

export const Button = React.memo(
  ({ children, className, theme, ...otherProps }: ButtonPropsType) => {
    return (
      <button
        className={classNames(styles.button, { [styles[theme]]: true }, [className])}
        {...otherProps}
      >
        {children}
      </button>
    )
  }
)
