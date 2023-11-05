import React, { Suspense } from 'react'

import { useTheme } from 'app/providers/ThemeProvider'
import { AppRouter } from 'app/providers/router'
import { classNames } from 'shared/lib/classNames/classNames'
import { Navbar } from 'widgets/Nawbar'
import { Sidebar } from 'widgets/Sidebar'

import './styles/index.scss'

export const App = React.memo(() => {
  const { theme } = useTheme() // кастомный хук

  return (
    <div className={classNames('app', {}, [theme])}>
      <Suspense fallback={''}>
        <Navbar />
        <div className={'content-page'}>
          <Sidebar />
          <AppRouter />
        </div>
      </Suspense>
    </div>
  )
})
