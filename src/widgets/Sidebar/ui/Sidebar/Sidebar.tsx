import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'shared/ui/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

import styles from './Sidebar.module.scss'

type SidebarPropsType = {
  className?: string
}

export const Sidebar = React.memo(({ className }: SidebarPropsType) => {
  const [collapsed, setCollapsed] = useState(false)
  const { i18n, t } = useTranslation('sidebar')

  const toggleHandler = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <button onClick={toggleHandler}>{collapsed ? t('Развернуть') : t('Скрыть')}</button>
      <div className={styles.swithers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} />
      </div>
    </div>
  )
})
