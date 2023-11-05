import React, { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { routeConfig } from 'shared/config/routeConfig/routeConfig'
import { PageLoader } from 'shared/ui/PageLoader'

export const AppRouter = () => {
  return (
    <Suspense fallback={<PageLoader />}>
      <Routes>
        {Object.values(routeConfig).map(({ element, path }) => (
          <Route element={<div className={'page-wrapper'}>{element}</div>} key={path} path={path} />
        ))}
      </Routes>
    </Suspense>
  )
}
