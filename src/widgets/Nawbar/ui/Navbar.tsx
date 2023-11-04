import React from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

import styles from './Navbar.module.scss'

type NavbarPropsType = {
  className?: string
}

export const Navbar = React.memo(({ className }: NavbarPropsType) => {
  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink className={styles.mainLink} theme={AppLinkTheme.SECONDARY} to={'/'}>
          На главную
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'about'}>
          О компании
        </AppLink>
      </div>
    </div>
  )
})
