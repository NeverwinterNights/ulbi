import React from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/AppLink'

import styles from './Navbar.module.scss'

type NavbarPropsType = {
  className?: string
}

export const Navbar = React.memo(({ className }: NavbarPropsType) => {
  const { i18n, t } = useTranslation('navbar')

  return (
    <div className={classNames(styles.Navbar, {}, [className])}>
      <div className={styles.links}>
        <AppLink className={styles.mainLink} theme={AppLinkTheme.SECONDARY} to={'/'}>
          {t('На главную')}
        </AppLink>
        <AppLink theme={AppLinkTheme.SECONDARY} to={'about'}>
          {t('О компании')}
        </AppLink>
      </div>
    </div>
  )
})
