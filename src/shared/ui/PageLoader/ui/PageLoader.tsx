import React from 'react'

import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader/Loader'

import styles from './PageLoader.module.scss'

type PageLoaderPropsType = {
  className?: string
}

export const PageLoader = React.memo(({ className }: PageLoaderPropsType) => {
  return (
    <div className={classNames(styles.pageloader, {}, [className])}>
      <Loader />
    </div>
  )
})
