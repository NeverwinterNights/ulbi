import React from 'react'
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'

import styles from './NotFound.module.scss'

type NotFoundPropsType = {
  className?: string
}

const NotFound = React.memo(({ className }: NotFoundPropsType) => {
  const { i18n, t } = useTranslation()

  return (
    <div className={classNames(styles.notfound, {}, [className])}>{t('Страница не найдена')}</div>
  )
})

export default NotFound
