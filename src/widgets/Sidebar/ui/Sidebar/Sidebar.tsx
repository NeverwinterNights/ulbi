import React, { useState } from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { LangSwitcher } from 'shared/ui/LangSwitcher'
import { ThemeSwitcher } from 'shared/ui/ThemeSwitcher'

import styles from './Sidebar.module.scss'

type SidebarPropsType = {
  className?: string
}

export const Sidebar = React.memo(({ className }: SidebarPropsType) => {
  const [collapsed, setCollapsed] = useState(false)
  const toggleHandler = () => {
    setCollapsed(!collapsed)
  }

  return (
    <div className={classNames(styles.sidebar, { [styles.collapsed]: collapsed }, [className])}>
      <button onClick={toggleHandler}>toggle</button>
      <div className={styles.swithers}>
        <ThemeSwitcher />
        <LangSwitcher className={styles.lang} />
      </div>
    </div>
  )
})
