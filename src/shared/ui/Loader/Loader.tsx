import React from 'react'

import { classNames } from 'shared/lib/classNames/classNames'

import './Loader.scss'

type LoaderPropsType = {
  className?: string
}

export const Loader = React.memo(({ className }: LoaderPropsType) => {
  return (
    <div className={classNames('lds-grid', {}, [className])}>
      <div className={'lds-grid'}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  )
})
