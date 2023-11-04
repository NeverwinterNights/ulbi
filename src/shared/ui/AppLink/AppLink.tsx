import React, { FC } from 'react'
import { Link, LinkProps } from 'react-router-dom'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './AppLink.module.scss'

export enum AppLinkTheme {
  PRIMARY = 'primary',
  SECONDARY = 'secondary',
}

interface AppLinkPropsType extends LinkProps {
  className?: string
  theme?: AppLinkTheme
}

export const AppLink: FC<AppLinkPropsType> = React.memo(props => {
  const { children, className, theme = AppLinkTheme.PRIMARY, to, ...restProps } = props

  return (
    <Link
      className={classNames(styles.AppLink, {}, [className, styles[theme]])}
      to={to}
      {...restProps}
    >
      {children}
    </Link>
  )
})
